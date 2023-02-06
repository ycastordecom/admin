<template>
  <div class="shop-submit">
    <shop-submit v-model="status" />
    <header>
      <div class="left">
        <div class="logo">
          <shop-filled />
          <span>云易网络科技</span>
        </div>
        <a-button type="link">客服QQ：1234569</a-button>
      </div>
      <div class="right">
        <a-button type="link">官网首页</a-button>
        <a-button type="primary">
          <template #icon><SearchOutlined /></template>
          订单查询
        </a-button>
      </div>
    </header>
    <div class="main">
      <div class="main-item-one">
        <div>商品分类</div>
        <div>
          <div>云易软件</div>
          <div>共一种商品</div>
        </div>
      </div>
      <div class="main-item-two">
        <div>选择商品</div>
        <div>
          <div>发卡系统</div>
          <div>¥1.00</div>
          <div>库存少量</div>
          <img src="@/assets/subicon.png" alt="" />
        </div>
      </div>
      <div class="main-item-three">
        <div>商品描述</div>
        <a-textarea class="textarea" placeholder="请输入商品描述" :rows="9" />
      </div>
      <div>
        <div>商品描述</div>
        <a-form layout="vertical">
          <a-form-item label="联系方式" :rules="[{ required: true, message: 'Please input your username!' }]">
            <a-input placeholder="请输入商品描述" />
          </a-form-item>
        </a-form>
        <div>联系方式可用来查询订单</div>
      </div>
      <div>
        <a-button>短信提醒</a-button>
        <a-button class="avtive">邮件提醒</a-button>
        <a-button>使用优惠券</a-button>
      </div>
      <a-input />
      <div>
        <div>请选择支付方式</div>
        <div>
          <div>
            <alipay-circle-filled />
            <span>支付宝</span>
            <img src="@/assets/subicon.png" alt="" />
          </div>
          <div>
            <wechat-filled />
            <span>微信</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <shop-filled />
          <span>发卡系统</span>
        </div>
        <div>
          <div>
            <div @click="add(-1)">-</div>
            <a-input v-model:value="num" />
            <div @click="add(1)">+</div>
          </div>
          <div>支付金额</div>
          <a-button type="link">¥1.00</a-button>
        </div>
        <a-button @click="pay">确认支付</a-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import shopSubmit from '@/components/shop/shopSubmit';
import { ShopFilled, SearchOutlined, AlipayCircleFilled, WechatFilled } from '@ant-design/icons-vue';
import { ref } from 'vue';
const num = ref<number>(0);
const status = ref<boolean>(false);
const add = (value: number): void => {
  num.value += value;
};
const pay = (): void => {
  status.value = true;

  console.log('支付');
};
</script>
<style lang="less">
.shop-submit {
  width: 100%;
  height: 120px;
  opacity: 1;
  border-radius: 6px;
  background: rgba(245, 247, 253, 1);
  header {
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .left {
      display: flex;
      align-items: center;
      > div:nth-child(1) {
        font-size: 26px;
        .anticon {
          color: rgba(69, 115, 255, 1);
          margin: 10px;
        }
      }
      > .ant-btn {
        margin-left: 20px;
      }
    }
    > .right:nth-child(2) {
      > .ant-btn {
        margin-left: 20px;
      }
      > .ant-btn:nth-child(2) {
        width: 132px;
        height: 36px;
        opacity: 1;
        border-radius: 100px;
        background: rgba(67, 113, 255, 1);
      }
    }
  }
  .main {
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    .main-item-one {
      > div:nth-child(1) {
        padding-left: 20px;
        margin: 20px 0;
        font-size: 22px;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        border-left: 5px solid rgba(67, 113, 255, 1);
      }
      > div:nth-child(2) {
        width: 400px;
        height: 108px;
        background: url('../assets/shopclass.png');
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-size: 100% 100%;
        padding-left: 50px;
        > div:nth-child(1) {
          font-size: 20px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
        > div:nth-child(2) {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .main-item-two {
      > div:nth-child(1) {
        padding-left: 20px;
        margin: 20px 0;
        font-size: 22px;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        border-left: 5px solid rgba(255, 118, 38, 1);
      }
      > div:nth-child(2) {
        position: relative;
        width: 400px;
        height: 108px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(67, 113, 255, 1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-size: 100% 100%;
        padding-left: 50px;
        > div:nth-child(1) {
          font-size: 14px;
          font-weight: 500;
          color: rgba(64, 64, 64, 1);
        }
        > div:nth-child(2) {
          font-size: 20px;
          font-weight: 500;
          color: rgba(66, 111, 252, 1);
        }
        > div:nth-child(3) {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 99, 99, 1);
        }
        img {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 30px;
          height: 30px;
        }
      }
    }
    .main-item-three {
      > div:nth-child(1) {
        padding-left: 20px;
        margin: 20px 0;
        font-size: 22px;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        border-left: 5px solid rgba(67, 113, 255, 1);
      }
      .textarea {
        width: 531px;
        height: 165px;
        opacity: 1;
        border-radius: 6px;
        background: rgba(255, 255, 255, 1);

        border: 1px solid rgba(194, 194, 194, 1);
      }
    }
    > div:nth-child(4) {
      > div:nth-child(1) {
        padding-left: 20px;
        margin: 20px 0;
        font-size: 22px;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        border-left: 5px solid rgba(67, 113, 255, 1);
      }
      .ant-input {
        width: 500px;
        height: 40px;
        opacity: 1;
        border-radius: 4px;
        color: #000;
        border: 1px solid rgba(184, 196, 209, 1);
      }
      > div:nth-child(3) {
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 89, 18, 1);
      }
    }
    > div:nth-child(5) {
      > .ant-btn {
        width: 120px;
        height: 40px;
        opacity: 1;
        border-radius: 100px;
        background: rgba(204, 209, 224, 1);
        color: #fff;
        margin-right: 20px;
        margin-top: 30px;
      }
      .avtive {
        background: rgba(63, 110, 255, 1);
      }
    }
    > .ant-input {
      width: 500px;
      height: 40px;
      opacity: 1;
      border-radius: 4px;
      border: 1px solid rgba(184, 196, 209, 1);
      margin-top: 20px;
    }
    > div:nth-child(7) {
      > div:nth-child(1) {
        padding-left: 20px;
        margin: 20px 0;
        font-size: 22px;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        border-left: 5px solid rgba(67, 113, 255, 1);
      }
      > div:nth-child(2) {
        display: flex;
        > div {
          width: 108px;
          height: 52px;
          opacity: 1;
          border-radius: 4px;
          background: rgba(245, 247, 253, 1);
          margin-right: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 1px solid rgba(90, 158, 247, 1);
          > .anticon {
            font-size: 27px;
            margin-right: 10px;
          }
          > .anticon-alipay-circle {
            color: rgba(90, 158, 247, 1);
          }
          > .anticon-wechat {
            color: rgba(107, 200, 57, 1);
          }
          img {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    > div:nth-child(8) {
      margin: 100px 0;
      padding-bottom: 100px;
      display: flex;
      width: 1200px;
      justify-content: space-between;
      align-items: center;
      > div:nth-child(1) {
        width: 104px;
        height: 30px;
        display: flex;
        align-items: center;
        > .anticon {
          font-size: 30px;
          color: rgba(90, 158, 247, 1);
        }
      }
      > div:nth-child(2) {
        display: flex;
        align-items: center;
        > div {
          display: flex;
          align-items: center;
          > .ant-input {
            margin: 0 10px;
            width: 70px;
          }
          > div:nth-child(1),
          > div:nth-child(3) {
            width: 30px;
            height: 30px;
            display: block;
            font-size: 25px;
            font-weight: 500;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            background: rgba(248, 248, 248, 1);
          }
        }
      }
      > .ant-btn {
        width: 120px;
        height: 40px;
        opacity: 1;
        border-radius: 100px;
        background: rgba(63, 110, 255, 1);
        color: #fff;
      }
    }
  }
}
.ant-modal {
  padding: 0 !important;
  .ant-modal-body {
    width: 540px;
    padding: 24px 0 !important;
    height: 658px;
    opacity: 1;
    border-radius: 4px;
    background: rgba(255, 255, 255, 1);
  }
}
</style>
