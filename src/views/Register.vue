<template>
  <div class="login">
    <div class="logo"></div>
    <div class="left"></div>
    <div class="form">
      <div class="title">欢迎注册**卡密平台</div>
      <a-input v-model:value="username" placeholder="请输入用户名" />
      <a-input-password v-model:value="password" type="password" placeholder="请输入密码" />
      <a-input-password v-model:value="bpassword" type="password" placeholder="确认密码" />
      <div class="go">
        <router-link to="/login">已有账号，去登录</router-link>
      </div>
      <button>注册</button>
      <div class="agreement">
        <a-checkbox>阅读并同意</a-checkbox>
        <a href="https://www.baidu.com">服务协议</a>
        和
        <a href="">隐私条款</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const username = ref<string>('');
const password = ref<string>('');
const bpassword = ref<string>('');
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(https://img.js.design/assets/img/62ca8821a15dfd62bbfc8030.png) rgba(250, 252, 255, 1);
  background-size: 100% 100%;
  position: relative;
  .logo {
    position: absolute;
    left: 80px;
    top: 80px;
    width: 238.85px;
    height: 59px;
    opacity: 1;
    // background-image: url('../assets/logo.png');
    background-size: 100% 100%;
    width: 238.85px;
    height: 59px;
  }
  .left {
    left: 132.23px;
    top: 260.21px;
    position: absolute;
    width: 763px;
    height: 564px;
    background-image: url('../assets/login_left.png');
    background-size: 100% 100%;
  }
  .form {
    position: absolute;
    right: 300px;
    top: 178px;
    width: 546px;
    height: 723.8px;
    opacity: 1;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 5.6px 28px 0px rgba(66, 72, 255, 0.06);
    box-sizing: border-box;
    padding: 60px;
    .title {
      margin: 0 auto;
      margin-top: 56px;
      width: 258px;
      height: 35px;
      opacity: 1;
      /** 文本1 */
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 0px;
      color: rgba(51, 51, 51, 1);
      text-align: center;
      vertical-align: top;
    }
    .tabs {
      text-align: center;
      width: 222px;
      margin-top: 53px;
      display: flex;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 0px;
      color: rgba(66, 113, 255, 1);
      text-align: left;
      vertical-align: top;
      justify-content: space-between;
      div {
        hr {
          margin-top: 22px;
          width: 89.6px;
          height: 6px;
          opacity: 1;
          border-radius: 100px;
          background: rgba(66, 113, 255, 1);
        }
      }
    }
    .ant-input,
    .ant-input-password {
      width: 434px;
      height: 53.2px;
      opacity: 1;
      border-radius: 5.6px;
      background: rgba(255, 255, 255, 1);
      margin-top: 40px;
      border: 1.4px solid rgba(234, 234, 234, 1);
    }
    .go {
      margin-top: 25px;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 0px;
      display: flex;
      justify-content: space-between;
      a {
        color: rgba(51, 51, 51, 1);
      }
    }
    button {
      margin-top: 123px;
      color: #fff;
      width: 434px;
      height: 50px;
      opacity: 1;
      border-radius: 5.6px;
      background: rgba(66, 113, 255, 1);
      border: none;
    }
    .agreement {
      margin-top: 20px;
      width: 294.8px;
      height: 24px;
      opacity: 1;
      display: flex;
    }
  }
}
</style>
