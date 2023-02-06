<template>
  <div class="merchandise-class">
    <div class="title">添加分类</div>
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="分类名称">
        <a-input v-model:value="name" />
      </a-form-item>
      <div class="msg">请填写分类名称,长度需在2-40位之间</div>
    </a-form>
    <a-button @click="submit" type="primary">保存</a-button>
    <div class="description">
      <div>功能说明</div>
      <div>1.xxxxxxxxxx</div>
      <div>2.xxxxxxxxxx</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { addGoodsClass } from '@/api/page/goods';
import { ApiResponse } from '@/type/page/api';
import { AddGoodsClassResponseData } from '@/type/page/Merchandise';
import { message } from 'ant-design-vue';
import { ref } from 'vue';

const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };
const name = ref<string>('');
const submit = async () => {
  //校验参数，不能为空
  if (!name.value) return message.error('分类名称不能为空');
  //校验参数，长度需在2-40位之间
  if (name.value.length < 2 || name.value.length > 40) return message.error('分类名称长度需在2-10位之间');
  //调用接口
  const data: AddGoodsClassResponseData | ApiResponse<null> | null = await addGoodsClass({
    name: name.value,
  });
  //判断接口返回值
  if (data === null) return;
  if (data) {
    const temp: ApiResponse<null> = { ...data } as unknown as ApiResponse<null>;
    if (temp.code) return message.error(temp.message);
    //清空输入框
    name.value = '';
    if (!temp.code) return message.success('添加成功');
  }
};
</script>
<style scoped lang="less">
.merchandise-class {
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 35px;
  flex: 1;
  height: 100%;
  position: relative;
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
    .ant-input:focus {
      border: 1px solid rgba(63, 110, 255, 1);
    }
  }
  .ant-btn {
    width: 100px;
    height: 40px;
    opacity: 1;
    border-radius: 4px;
    background: rgba(63, 110, 255, 1);
    margin-left: 150px;
    margin-top: 60px;
  }
  .description {
    margin-top: 40px;
    margin-left: 150px;
    > div:nth-child(1) {
      font-size: 14px;
      font-weight: 500;
      color: rgba(64, 64, 64, 1);
      box-sizing: border-box;
      padding: 0 10px;
      border-left: 2.8px solid rgba(63, 110, 255, 1);
    }
    > div:nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      color: rgba(104, 114, 140, 1);
      margin: 20px 0;
    }
    > div:nth-child(3) {
      font-size: 14px;
      font-weight: 400;
      color: rgba(104, 114, 140, 1);
      text-align: left;
    }
  }
}
</style>
