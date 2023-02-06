<template>
  <div class="merchandise-class">
    <AddSpecifications v-model="visible" v-model:specifications="specifications" />
    <div class="title">添加商品</div>
    <div class="prompt">
      <exclamation-circle-outlined />
      <div>慎重填写，再三确认,商品列表处部分字段无法编辑</div>
    </div>
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item name="area" label="商品分类">
        <a-select v-model:value="dynamicValidateForm.area" :options="areas" />
      </a-form-item>
      <div class="msg">请选择分类名称</div>
      <a-form-item name="area" label="商品名称">
        <a-input v-model:value="shopName" />
      </a-form-item>
      <div class="msg">请填写商品名称,长度需在2-10位之间</div>
      <a-form-item label="销售价格">
        <a-input v-model:value="price" />
      </a-form-item>
      <div class="msg">请输入基础价格(积分)</div>
      <a-form-item label="商品简介">
        <a-textarea class="textarea" v-model:value="shopIntroduce" :rows="4" placeholder="最高100字" :maxlength="100" />
      </a-form-item>
      <div class="msg">请输入商品简介</div>
      <a-form-item class="add-detail" label="商品详情(其他)">
        <div class="add-detail-inputs">
          <a-input v-model:value="detailData.name"></a-input>
          -
          <a-input v-model:value="detailData.value"></a-input>
        </div>
        <a-button type="primary" class="add-detail-btn" @click="addDetailsClick">点击添加</a-button>
      </a-form-item>
      <div class="msg">
        <div v-for="item in detaiShow" :key="item">{{ item }}</div>
      </div>
      <div class="msg">商品详情; 例：发货地 - 内蒙古 ,材料-棉布</div>
      <a-form-item label="上传商品缩略图">
        <a-upload
          v-model:file-list="image"
          name="file"
          list-type="picture-card"
          class="avatar-uploader"
          :headers="{ Authorization: useUserStore().token }"
          :show-upload-list="false"
          :action="baseUrl + '/upload/uploadImg'"
          :before-upload="beforeUpload"
          @change="handleChange"
          @success="handleSuccess"
        >
          <img class="avatar" v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <loading-outlined v-if="loading"></loading-outlined>
            <plus-outlined v-else></plus-outlined>
            <div class="ant-upload-text">裁剪后上传</div>
          </div>
        </a-upload>
      </a-form-item>
      <a-form-item label="商品详情图:">
        <div class="clearfix">
          <a-upload v-model:file-list="fileLists" :action="baseUrl + '/upload/uploadImg'" list-type="picture-card" @preview="handlePreview">
            <div v-if="fileLists.length < 5">
              <plus-outlined />
              <div style="margin-top: 8px">裁剪后上传</div>
            </div>
          </a-upload>
          <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="specificationsClick">添加商品规格</a-button>
      </a-form-item>
    </a-form>
    <a-button type="primary" @click="save">保存</a-button>
  </div>
</template>
<script lang="ts" setup>
import AddSpecifications from '@/components/good/addSpecifications';
import { reactive, ref } from 'vue';
import { addGoods, getGoodsClassList } from '@/api/page/goods';
import { SelectType, Sights } from '@/type';
import { useUserStore } from '@/store/modules/user';
import { message, UploadProps } from 'ant-design-vue';
import { imageType } from '@/utils/';
import { LoadingOutlined, PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue';
const baseUrl = process.env.VUE_APP_BASE_URL;
const baseImgUrl = process.env.VUE_APP_IMAGE_BASE_URL;
const labelCol = { style: { width: '150px !important' } };
const wrapperCol = { span: 14 };
const dynamicValidateForm = reactive<{ sights: Sights[]; area: string }>({
  sights: [],
  area: '请选择分类',
});
const areas = ref<SelectType[]>([]);
//初始化分类
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

const detailData = ref<{
  name: string;
  value: string;
}>({
  name: '',
  value: '',
});
const detaiShow = ref<string[]>([]);
const detail = ref<object[]>([]);
//addDetailsClick
const addDetailsClick = () => {
  detail.value.push({
    name: detailData.value.name,
    value: detailData.value.value,
  });
  detaiShow.value.push(`${detailData.value.name} - ${detailData.value.value}`);
  detailData.value.name = '';
  detailData.value.value = '';
};

const shopName = ref<string>('');
const shopIntroduce = ref<string>('');
const images = ref<string>('');
const price = ref<number>(0);
//头像上传
const image = ref<UploadProps[]>([]);
const imageUrl = ref('');
const loading = ref(false);
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
    imageUrl.value = info.file.response.url;
    loading.value = false;
  }
};
//上传成功
const handleSuccess = (res: { code: number; message: string; data: string }) => {
  if (res.code !== 200) return message.error(res.message);
  imageUrl.value = baseImgUrl + res.data;
  images.value = res.data;
  message.success(res.message);
};
//详情图片list上传
const previewVisible = ref<boolean>(false);
const previewImage = ref<string>('');
const previewTitle = ref('');
const fileLists = ref<UploadProps[]>([]);

//预览
const handlePreview = (file: { name: any; url: string; response: { data: string } }) => {
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
  previewImage.value = baseImgUrl + file.response.data;
  previewVisible.value = true;
};
//取消
const handleCancel = () => (previewVisible.value = false);

/**
 * 规格
 */
const specifications = ref<any[]>([]);
const visible = ref<boolean>(false);
//点击添加规格
const specificationsClick = () => {
  visible.value = true;
};

//保存，发起请求
const save = async () => {
  const imageList: any = fileLists.value.map((item: any) => item.response.data).join(',');
  const data = await addGoods({
    goodsName: shopName.value,
    introduce: shopIntroduce.value,
    image: images.value,
    price: price.value,
    imageList: imageList,
    detailJson: JSON.stringify(detail.value),
    categoryId: Number(dynamicValidateForm.area),
    specAddBodyList: specifications.value,
  });
  if (data === null) return;
  message.success('添加成功');
  //初始化
  shopName.value = '';
  shopIntroduce.value = '';
  images.value = '';
  price.value = 0;
  fileLists.value = [];
  detail.value = [
    {
      name: '',
      value: '',
    },
  ];
  detaiShow.value = [];
  specifications.value = [];
  dynamicValidateForm.area = '请选择分类';
  imageUrl.value = '';
  image.value = [];
};
</script>
<style lang="less">
.merchandise-class {
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 35px;
  flex: 1;
  height: 100%;
  position: relative;
  .prompt {
    width: 510px;
    height: 36px;
    opacity: 1;
    margin: 30px 0;
    border-radius: 4px;
    background: rgba(255, 115, 0, 0.1);
    font-size: 14px;
    font-weight: 400;
    line-height: 0px;
    color: rgba(255, 141, 41, 1);
    display: flex;
    align-items: center;
    margin-top: 50px;
    .anticon {
      font-size: 25px;
      margin: 0 10px;
    }
  }
  .title {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 0px;
    color: rgba(28, 28, 28, 1);
    text-align: left;
    vertical-align: top;
  }
  .ant-form {
    border-top: 1px solid rgba(243, 243, 243, 1);
    padding-top: 50px;
    .ant-col {
      width: 150px !important;
    }
    .msg {
      font-size: 14px;
      font-weight: 400;
      color: rgba(162, 169, 201, 1);
      margin-left: 150px;
      margin-bottom: 30px;
    }
    .ant-input {
      width: 400px;
      height: 40px;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid rgba(184, 196, 209, 1);
    }
    .ant-select {
      width: 400px;
      height: 40px;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid rgba(184, 196, 209, 1);
      .ant-select-selector {
        height: 40px;
        line-height: 40px;
        .ant-select-selection-item {
          height: 40px;
          line-height: 40px;
        }
      }
    }
    .ant-input:focus {
      border: 1px solid rgba(63, 110, 255, 1);
    }
  }
  .ant-form-item-control-input-content {
    display: flex;
    .add-detail-btn {
      margin: 0 !important;
    }
    .add-detail-inputs {
      display: flex;
      .ant-input {
        width: 80px;
      }
    }
  }
  .ant-btn {
    width: 100px;
    height: 40px;
    opacity: 1;
    border-radius: 4px;
    background: rgba(63, 110, 255, 1);
    margin-top: 20px;
    margin-left: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .textarea {
    height: 100px !important;
  }
  .avatar {
    max-width: 102px !important;
    max-height: 102px !important;
  }
}
.add-detail-inputs {
  .ant-input {
    margin: 0 10px;
  }
}
.ant-upload-list-item-actions,
.ant-upload-list-picture-card-container {
  overflow: hidden;
  max-width: 102px !important;
  max-height: 102px !important;
}
.ant-upload-list-item-card-actions-btn {
  width: 40px !important;
  height: 40px !important;
  margin: 0 !important;
  background-color: transparent !important;
}
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}
.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.ant-modal-content {
  overflow: hidden;
  .ant-modal-body {
    width: 100%;
    img {
      width: 100% !important;
    }
  }
}
</style>
