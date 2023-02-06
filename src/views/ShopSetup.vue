<template>
  <div class="shop-setup">
    <div class="title">店铺设置</div>
    <div class="header">
      <img src="https://img.js.design/assets/smartFill/img326164da748e08.jpeg" alt="" />
      <div class="info">
        <div>
          <div>
            <span>云易</span>
            <span>ID:12345678</span>
          </div>
          <div>
            <span>
              <mail-outlined />
              <span>电子邮箱:12345678@qq.com</span>
            </span>
            <span>
              <mobile-outlined />
              <span>
                手机号码:
                <span>12345678910</span>
              </span>
            </span>
          </div>
        </div>
        <a-button>绑定qq号</a-button>
      </div>
    </div>
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="安全登录方式">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">邮箱验证</a-radio>
          <a-radio value="2">谷歌密码验证</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="商户QQ">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="商户网站">
        <a-input />
      </a-form-item>
      <a-form-item label="店铺名称">
        <a-input />
      </a-form-item>
      <a-form-item label="安全登录方式">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">邮箱验证</a-radio>
          <a-radio value="2">谷歌密码验证</a-radio>
        </a-radio-group>
      </a-form-item>
      <div class="explain">
        <div>1. 库存大于100，显示 库存非常多</div>
        <div>2. 库存小于100、大于30，显示 库存很多</div>
        <div>3. 库存小于30、大于10，显示 库存一般</div>
        <div>4. 库存小于10，显示 库存少量</div>
      </div>
      <a-form-item label="提现方式">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">系统默认</a-radio>
          <a-radio value="2">手动提现</a-radio>
          <a-radio value="3">自动提现</a-radio>
        </a-radio-group>
      </a-form-item>
      <div class="title">
        <exclamation-circle-outlined />
        <div>手工提现（手续费2元.满10元可提）自动提现（免手续费.满50元每天晚上1点系统自动提交申请）到账时间：每天中午12点之前到账。</div>
      </div>
      <a-form-item label="费用承担方">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">跟随系统</a-radio>
          <a-radio value="2">商家承担</a-radio>
          <a-radio value="3">买家承担</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="提现方式">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">自动弹出</a-radio>
          <a-radio value="2">不弹出</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="店铺公告">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">自动弹出</a-radio>
          <a-radio value="2">不弹出</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="店铺公告">
        <a-textarea placeholder="" class="textarea" :rows="8" />
      </a-form-item>
    </a-form>
    <div class="btn">
      <a-button type="primary">确认保存</a-button>
      <a-button type="">取消</a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MailOutlined, MobileOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';
interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
const formState: UnwrapRef<FormState> = reactive({
  name: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
const labelCol = { style: { width: '150px' } };
const wrapperCol = { span: 14 };
</script>
<style scoped lang="less">
.shop-setup {
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
  .header {
    display: flex;
    height: 60px;
    justify-content: start;
    margin: 40px 0;
    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
    .info {
      height: 60px;
      display: flex;
      align-items: center;
      > div:nth-child(1) {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 10px;
        > div:nth-child(1) {
          font-size: 16px;
          font-weight: 500;
          color: rgba(31, 31, 31, 1);
          display: flex;
          margin: 0 15px;
        }
        > div:nth-child(2) {
          > span:nth-child(1) {
            margin: 0 10px;
          }
          .anticon {
            margin: 0 5px;
          }
        }
      }
      .ant-btn {
        position: absolute;
        left: 1000px;
        width: 120px;
        height: 36px;
        opacity: 1;
        border-radius: 4px;
        background: rgba(63, 110, 255, 1);
        color: #fff;
      }
    }
  }
  .ant-form {
    border-top: 1px solid rgba(243, 243, 243, 1);
    padding-top: 50px;
    .ant-input {
      width: 540px;
      height: 40px;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid rgba(184, 196, 209, 1);
    }
    .ant-input:focus {
      border: 1px solid rgba(63, 110, 255, 1);
    }
    .ant-form-item-control-input-content .textarea {
      width: 547px;
      height: 240px;
      opacity: 1;
      border-radius: 10px;
      background: rgba(247, 248, 250, 1);
    }
    .title {
      margin-left: 150px;
      margin-bottom: 20px;
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
        font-size: 20px;
        margin: 0 10px;
      }
      > div:nth-child(2) {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(255, 141, 41, 1);
        text-align: left;
        vertical-align: top;
      }
    }
    .explain {
      margin-left: 150px;
    }
  }
  .btn {
    margin-left: 150px;
    padding-bottom: 150px;
    > button:nth-child(1) {
      width: 120px;
      height: 40px;
      opacity: 1;
      border-radius: 4px;
      background: rgba(63, 110, 255, 1);
      margin-right: 20px;
    }
    > button:nth-child(2) {
      width: 120px;
      height: 40px;
      opacity: 1;
      border-radius: 4px;
      background: rgba(204, 209, 224, 1);
    }
  }
}
</style>
