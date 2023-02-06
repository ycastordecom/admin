<template>
  <div class="shop-link">
    <div class="title">店铺链接</div>
    <a-form>
      <a-form-item label="店铺链接">
        <a-radio-group v-model:value="formState.resource">
          <a-radio value="1">开启</a-radio>
          <a-radio value="2">关闭</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
    <div class="prompt">
      <exclamation-circle-outlined />
      <div>关闭链接后，店铺域名将无法下单，请谨慎操作！</div>
    </div>
    <div class="item">
      <img src="@/assets/recommend.png" alt="" />
      <div>
        <div>
          <div class="left-top">
            <span>短链接</span>
            <span><router-link to="/shopsubmit">http://b6i.cn/1hvKma</router-link></span>
          </div>
          <div>朋友圈打广告请发送本链接</div>
        </div>
        <a-button type="primary">复制链接</a-button>
      </div>
    </div>
    <div class="item">
      <div>
        <div>
          <div class="left-top">
            <span>短链接</span>
            <span><router-link to="/shopsubmit">http://b6i.cn/1hvKma</router-link></span>
          </div>
          <div>朋友圈打广告请发送本链接</div>
        </div>
        <a-button type="primary">复制链接</a-button>
      </div>
    </div>
    <div class="code">
      <div>二维码链接</div>
      <img src="@/assets/qr.png" alt="" />
      <div>二维码可以很方便地放在网店或者分享到手机客户端,扫一扫即可打开店铺链接</div>
    </div>
    <a-button type="primary">重置链接</a-button>
  </div>
</template>
<script setup lang="ts">
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
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
  resource: '1',
  desc: '',
});
</script>
<style lang="less">
.shop-link {
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 35px;
  flex: 1;
  height: 100%;
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
    margin-top: 20px;
  }
  .prompt {
    width: 400px;
    height: 30px;
    opacity: 1;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 0px;
    color: rgba(255, 141, 41, 1);
    text-align: left;
    vertical-align: top;
    background: rgba(255, 115, 0, 0.1);
    .anticon {
      font-size: 20px;
      margin: 0 10px;
    }
  }
  .item {
    position: relative;
    margin-top: 30px;
    width: 1341px;
    height: 148px;
    opacity: 1;
    border-radius: 6px;
    background: rgba(247, 249, 255, 1);
    display: flex;
    align-items: center;
    > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 40px;
      height: 18px;
      opacity: 1;
    }
    > div {
      margin: 20px;
      display: flex;
      align-items: center;
      > div {
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .left-top {
          > span:nth-child(2) {
            font-size: 16px;
            font-weight: 400;
            color: rgba(0, 84, 254, 1);
          }
        }
      }
      .ant-btn {
        margin-left: 50px;
        width: 100px;
        height: 36px;
        opacity: 1;
        border-radius: 5px;
        background: rgba(63, 110, 255, 1);
      }
    }
  }
  .code {
    margin-top: 30px;
    width: 1341px;
    height: 272px;
    opacity: 1;
    border-radius: 6px;
    background: rgba(247, 249, 255, 1);
    padding: 20px;
    box-sizing: border-box;
    > div:nth-child(1) {
      margin-top: 28px;
    }
    > img {
      margin-top: 10px;
      width: 144px;
      height: 144px;
      opacity: 1;
      border-radius: 2px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(198, 213, 254, 1);
    }
    > div:nth-child(3) {
      width: 480px;
      height: 20px;
      opacity: 1;
      /** 文本1 */
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 0px;
      color: rgba(162, 169, 201, 1);
      text-align: left;
      vertical-align: top;
      margin-top: 20px;
    }
  }
  > .ant-btn {
    width: 242px;
    height: 36px;
    opacity: 1;
    border-radius: 5px;
    background: rgba(63, 110, 255, 1);
    margin-top: 58px;
  }
}
</style>
