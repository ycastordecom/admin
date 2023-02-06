import { useUserStore } from '@/store/modules/user';
import { imageType } from '@/utils';
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import style from './edit.module.less';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'UserEdit',
  props: ['modelValue', 'editData'],
  emit: ['update:modelValue', 'update:editData', 'submit'],
  setup(props, { emit }) {
    const baseImgUrl = process.env.VUE_APP_IMAGE_BASE_URL;
    const baseUrl = process.env.VUE_APP_BASE_URL;
    const loading = ref<boolean>(false);
    const image = ref<string>('');
    const fileList = ref<any[]>([]);
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
    //上传
    const handleChange = (info: { file: { status: string; response: { url: string } } }) => {
      if (info.file.status === 'uploading') {
        loading.value = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        // eslint-disable-next-line vue/no-mutating-props
        loading.value = false;
      }
    };
    //上传成功
    const handleSuccess = (res: { code: number; message: string; data: string }) => {
      if (res.code !== 200) return message.error(res.message);
      // eslint-disable-next-line vue/no-mutating-props
      props.editData.avatar = res.data;
      image.value = res.data;
      message.success(res.message);
    };
    const afterVisibleChange = () => {
      image.value = props.editData.avatar;
    };
    const submit = () => {
      emit('update:editData', props.editData);
      emit('update:modelValue', false);
      emit('submit', props.editData);
    };
    return () => (
      <a-drawer
        onAfterVisibleChange={afterVisibleChange}
        visible={props.modelValue}
        width="500px"
        onClose={() => emit('update:modelValue', false)}
        class={style.customClass}
        style="color: red"
        title="用户编辑"
        placement="right"
      >
        <a-form>
          <a-form-item label="用户名">
            <a-input v-model={[props.editData.username, 'value']} />
          </a-form-item>
          <a-form-item label="手机号">
            <a-input v-model={[props.editData.phone, 'value']} />
          </a-form-item>
          <a-form-item label="积分">
            <a-input v-model={[props.editData.integral, 'value']} />
          </a-form-item>
          <a-form-item label="密码">
            <a-input type="password" v-model={[props.editData.password, 'value']} />
          </a-form-item>
          <a-form-item label="角色 ">
            <a-select v-model={[props.editData.role, 'value']}>
              <a-select-option value={1}>管理员</a-select-option>
              <a-select-option value={2}>普通用户</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="头像">
            <a-upload
              v-model={[fileList.value, 'fileList']}
              name="file"
              list-type="picture-card"
              class="avatar-uploader"
              headers={{ Authorization: useUserStore().token }}
              show-upload-list={false}
              action={baseUrl + '/upload/uploadImg'}
              before-upload={beforeUpload}
              onChange={handleChange}
              onSuccess={handleSuccess}
            >
              {image.value ? (
                <img class={style.img} src={baseImgUrl + image.value} alt="image" />
              ) : (
                <div>
                  {loading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div class="ant-upload-text">不上传则用原来的</div>
                </div>
              )}
            </a-upload>
          </a-form-item>
          <a-form-item>
            <a-button class={style.btn} type="primary" onClick={submit}>
              确定
            </a-button>
          </a-form-item>
        </a-form>
      </a-drawer>
    );
  },
});
