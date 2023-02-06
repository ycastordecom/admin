<template>
  <div class="header">
    <message v-model="messageShow" />
    <feedback v-model="feedbackShow" />
    <makeUpCollection v-model="makeUpCollectionShow" />
    <a-input v-model:value="value" placeholder="输入订单号">
      <template #prefix>
        <search-outlined />
      </template>
    </a-input>
    <div class="right">
      <div class="right-btn">
        <div>官网首页</div>
        <div @click="onMessageShow">
          <message-outlined />
          <div>消息</div>
        </div>
        <div @click="onFeedbackShow">
          <reconciliation-outlined />
          <div>反馈</div>
        </div>
      </div>
      <div class="user-info">
        <a-image src="https://img.js.design/assets/smartFill/img306164da746310.jpg"></a-image>
        <div class="id">云逸 ID:2689752</div>
        <div class="select" @click="onCloseShow"><down-outlined /></div>
        <Close v-model="closeShow"></Close>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Close from '@/components//index/close';
import message from '@/components/index/message';
import feedback from '@/components/index/feedback';
import makeUpCollection from '@/components/index/makeUpCollection';
import { ref } from 'vue';
import { SearchOutlined, MessageOutlined, ReconciliationOutlined, DownOutlined } from '@ant-design/icons-vue';
const value = ref<string>('');
const messageShow = ref<boolean>(false);
const feedbackShow = ref<boolean>(false);
const makeUpCollectionShow = ref<boolean>(false);
const closeShow = ref<boolean>(false);
const onMessageShow = () => {
  feedbackShow.value = false;
  messageShow.value = true;
  closeShow.value = false;
};
const onFeedbackShow = () => {
  messageShow.value = false;
  feedbackShow.value = true;
  closeShow.value = false;
};
const onCloseShow = () => {
  messageShow.value = false;
  feedbackShow.value = false;
  closeShow.value = !closeShow.value;
};
</script>
<style lang="less">
.ant-layout-header {
  display: flex;
  align-items: center;
}
// 设置feedback upload的宽度
& .ant-upload-list-picture-card-container {
  width: 31%;
}
//弹窗padding
& .ant-modal-content {
  .ant-modal-body {
    padding: 0;
    border-radius: 5px;
    overflow: hidden;
    width: 560px;
    height: 720px;
    opacity: 1;
    position: relative;
    border-radius: 15px;
    > div {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      background-color: #fff;
      .ant-form {
        padding: 55px;
      }
    }
  }
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .ant-input-affix-wrapper {
    width: 495px;
    height: 46px;
    background: linear-gradient(180deg, rgba(240, 245, 255, 1) 0%, rgba(236, 242, 255, 1) 53.61%, rgba(240, 245, 255, 1) 100%);
    border-radius: calc(46px / 2);
    border: none;
    .ant-input {
      background: linear-gradient(180deg, rgba(240, 245, 255, 1) 0%, rgba(236, 242, 255, 1) 53.61%, rgba(240, 245, 255, 1) 100%);
      padding: 0 20px;
    }
    .anticon {
      font-size: 25px;
      color: #b1b3b5;
    }
  }
  .right {
    display: flex;
    align-items: center;
    height: 50px;
    .right-btn {
      width: 216px;
      height: 41px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > div:nth-child(1) {
        height: 100%;
        background: #f7f8fa;
        width: 100px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      > div:nth-child(2),
      > div:nth-child(3) {
        height: 41px;
        line-height: 16px;
        font-size: 16px;
        //   width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > div {
          padding: 3px;
          font-size: 14px;
        }
      }
    }
    .user-info {
      padding: 0 10px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .ant-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        .ant-image-img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .id {
        padding: 0 10px;
      }
      .select {
        height: 30px;
        width: 40px;
        color: rgba(63, 110, 255, 1);
        background: #ebedfd;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
