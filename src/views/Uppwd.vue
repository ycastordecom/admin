<template>
  <div class="uppwd">
    <h3>修改密码</h3>
    <div class="title">
      <exclamation-circle-outlined />
      <div>
        <div>注意事项</div>
        <div>修改密码后，无需重新登录,下次登录需要输入新的密码,才可以登录,安全更高。</div>
      </div>
    </div>
    <a-form>
      <a-form-item label="旧密码">
        <a-input placeholder="请输入原密码"></a-input>
      </a-form-item>
      <a-form-item label="修改密码">
        <a-input placeholder="请输入新密码"></a-input>
      </a-form-item>
      <a-form-item label="确认新密码">
        <a-input placeholder="请输入新密码"></a-input>
      </a-form-item>
    </a-form>
    <div class="btn-bg">
      <a-button type="primary">保存</a-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
</script>

<style lang="less">
.uppwd {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  .title {
    width: 1249px;
    height: 59px;
    opacity: 1;
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(255, 244, 235, 1) 0%, rgba(255, 249, 245, 1) 69.88%, rgba(255, 247, 247, 0) 100%);
    display: flex;
    align-items: center;
    padding: 0 20px;
    display: flex;
    /** 文本1 */
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
    color: rgba(255, 141, 41, 1);

    .anticon {
      font-size: 30px;
    }
    > div:nth-child(2) {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 28px;
      color: rgba(255, 141, 41, 1);
      text-align: left;
      vertical-align: top;
      display: flex;
      > div:nth-child(1) {
        margin: 0 10px;
        font-size: 18px;
      }
    }
  }
  .ant-form {
    margin-top: 30px;
    width: 612px;
    text-align: right;
    .ant-col {
      width: 100px;
    }
    .ant-input {
      width: 540px;
      height: 40px;
      opacity: 1;
      border-radius: 4px;
    }
  }
  .btn-bg {
    width: 612px;
    position: relative;
    margin-top: 100px;
    .ant-btn {
      width: 242px;
      height: 40px;
      background: rgba(63, 110, 255, 1);
      color: #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
