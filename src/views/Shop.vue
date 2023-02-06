<template>
  <div class="shop">
    <div>
      <div class="left-title">商户</div>
      <a-menu id="dddddd" v-model:selectedKeys="selectedKeys" style="width: 122px" mode="inline">
        <a-menu-item key="0">
          <router-link to="/shop/setup">店铺设置</router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <router-link to="/shop/link">店铺链接</router-link>
        </a-menu-item>
      </a-menu>
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
const selectedKeys = useStorage('ShopSelectedKeys', ref(['0']));
</script>
<style lang="less">
.shop {
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  > div:nth-child(1) {
    height: 100%;
    width: 122px;
    margin: 0 5px;
    border-right: 1px solid rgba(243, 243, 243, 1);
    .left-title {
      font-size: 20px;
      font-weight: 400;
      color: rgba(28, 28, 28, 1);
      width: 122px;
      margin: 0 5px;
      text-align: center;
      padding: 20px;
    }
    .ant-menu {
      .ant-menu-item {
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        height: 42px;
        border-radius: 8px;
      }

      .ant-menu-item-selected {
        color: rgba(62, 108, 255, 1);
        background: rgba(244, 247, 255, 1) !important;
      }
      .ant-menu-item-selected::after {
        border: none !important;
      }
    }
  }
}
</style>
