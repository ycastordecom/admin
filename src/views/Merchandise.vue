<template>
  <div class="merchandise">
    <div>
      <div class="left-title">商品</div>
      <a-menu id="" v-model:selectedKeys="selectedKeys" style="width: 122px" mode="inline">
        <a-menu-item key="0">
          <router-link to="/merchandise/class">添加分类</router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <router-link to="/merchandise/classlist">分类列表</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/merchandise/add">添加商品</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/merchandise/list">商品列表</router-link>
        </a-menu-item>
      </a-menu>
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';
const selectedKeys = useStorage('MerchandiseSelectedKeys', ref(['0']));
</script>
<style lang="less">
.merchandise {
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
