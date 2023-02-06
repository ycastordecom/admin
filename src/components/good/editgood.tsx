import { defineComponent, reactive, ref } from 'vue';
import { getGoodsClassList } from '@/api/page/goods';
import { SelectType, Sights } from '@/type';
import style from './editgood.module.less';
import { useUserStore } from '@/store/modules/user';
import { UploadProps } from 'ant-design-vue/es/upload/interface';
import { message } from 'ant-design-vue';
import { imageType } from '@/utils/';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'EditGood',
  props: ['modelValue', 'baseEditData'],
  emit: ['update:modelValue', 'update:baseEditData', 'change'],
  setup(props, { emit }) {
    //初始化分类
    const dynamicValidateForm = reactive<{ sights: Sights[]; area: string }>({
      sights: [],
      area: '请选择分类',
    });
    const areas = ref<SelectType[]>([]);
    const initGoodsList = async () => {
      const data = await getGoodsClassList();
      if (data === null) return;
      areas.value = data.map((item) => {
        return {
          label: item.name,
          value: item.categoryId,
        };
      });
    };
    initGoodsList();
    //商品名称
    const shopName = ref<string>('');
    //基础价格
    const basePrice = ref<number>(0);
    //商品介绍
    const shopIntroduce = ref<string>('');
    //上传图片基础地址
    const baseUrl = process.env.VUE_APP_BASE_URL;
    const baseImgUrl = process.env.VUE_APP_IMAGE_BASE_URL;
    const imageUrl = ref<string>('');
    const loading = ref<boolean>(false);
    //准备
    const beforeUpload = (file: any) => {
      //png jpg jpeg webp
      const isJPG = imageType.map((item) => file.type.includes(item)).includes(true);
      if (!isJPG) {
        message.error('You can only upload JPG/PNG/WEBP file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJPG && isLt2M;
    };
    const image = ref<UploadProps[]>([]);
    //上传
    const handleChange = (info: { file: { status: string; response: { url: string } } }) => {
      if (info.file.status === 'uploading') {
        loading.value = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        imageUrl.value = info.file.response.url;
        loading.value = false;
      }
    };
    //上传成功
    const handleSuccess = (res: { code: number; message: string; data: string }) => {
      if (res.code !== 200) return message.error(res.message);
      imageUrl.value = res.data;
      message.success(res.message);
    };
    //初始化数据，切换
    const afterVisibleChange = () => {
      console.log(props.baseEditData);
      if (props.baseEditData === null) return message.error('数据错误');
      //用户名
      shopName.value = props.baseEditData.goodsName;
      //基础价格
      basePrice.value = props.baseEditData.price;
      //图片
      imageUrl.value = props.baseEditData.image;
      //分类
      dynamicValidateForm.area = props.baseEditData.categoryId;
      //简介
      console.log(props.baseEditData.introduce);

      shopIntroduce.value = props.baseEditData.introduce;
    };
    //提交
    const submit = () => {
      console.log(shopName.value, basePrice.value, imageUrl.value, dynamicValidateForm.area);
      if (shopName.value === '') return message.error('请输入商品名称');
      if (basePrice.value === 0) return message.error('请输入商品价格');
      if (imageUrl.value === '') return message.error('请上传商品图片');
      if (dynamicValidateForm.area === '请选择分类') return message.error('请选择商品分类');
      const data = {
        goodsName: shopName.value,
        price: basePrice.value,
        image: imageUrl.value,
        categoryId: dynamicValidateForm.area,
        introduce: shopIntroduce.value,
      };
      Object.assign(props.baseEditData, data);
      //事件
      emit('update:baseEditData', props.baseEditData);
      emit('change', props.baseEditData);
      emit('update:modelValue', false);
    };
    return {
      dynamicValidateForm,
      areas,
      shopName,
      basePrice,
      baseUrl,
      beforeUpload,
      handleChange,
      handleSuccess,
      image,
      loading,
      imageUrl,
      baseImgUrl,
      afterVisibleChange,
      submit,
      shopIntroduce,
    };
  },
  render() {
    return (
      <a-drawer
        class={style.bg}
        afterVisibleChange={this.afterVisibleChange}
        visible={this.modelValue}
        onClose={() => this.$emit('update:modelValue', false)}
        width="500px"
        style="color: red"
        title="商品编辑"
        placement="right"
      >
        <a-form>
          <a-form-item name="area" label="商品分类">
            <a-select v-model={[this.dynamicValidateForm.area, 'value']} options={this.areas} />
          </a-form-item>
          <a-form-item name="area" label="商品名称">
            <a-input v-model={[this.shopName, 'value']} />
          </a-form-item>
          <a-form-item name="area" label="基础价格">
            <a-input v-model={[this.basePrice, 'value']} />
          </a-form-item>
          <a-form-item label="商品简介">
            <a-textarea class={style.textarea} v-model={[this.shopIntroduce, 'value']} rows={4} placeholder="最高100字" maxlength={100} />
          </a-form-item>
          <a-form-item label="修改商品缩略图">
            <a-upload
              v-model={[this.image, 'fileList']}
              name="file"
              list-type="picture-card"
              class="avatar-uploader"
              headers={{ Authorization: useUserStore().token }}
              show-upload-list={false}
              action={this.baseUrl + '/upload/uploadImg'}
              before-upload={this.beforeUpload}
              onChange={this.handleChange}
              onSuccess={this.handleSuccess}
            >
              {this.imageUrl ? (
                <img class={style.upimage} src={this.baseImgUrl + this.imageUrl} alt="image" />
              ) : (
                <div>
                  {this.loading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div class="ant-upload-text">不上传则用原来的</div>
                </div>
              )}
            </a-upload>
          </a-form-item>
          <a-form-item label="">
            <a-button type="primary" onClick={this.submit}>
              提交
            </a-button>
          </a-form-item>
        </a-form>
      </a-drawer>
    );
  },
});
