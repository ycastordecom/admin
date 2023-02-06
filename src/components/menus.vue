<template>
  <div class="menu">
    <a-menu v-model:selectedKeys="selectedKeys">
      <a-menu-item :class="{ start: selectedKeys[0] - 1 === -1 }" disabled key="-1"></a-menu-item>
      <a-menu-item @click="goPath(item.path, item.id)" v-for="(item, index) in props.menusData" :key="item.id" :class="{ start: selectedKeys[0] - 1 === index, end: selectedKeys[0] + 1 === index }">
        <template #icon>
          <home-filled v-if="item.icon === '<home-filled />'" />
          <shop-filled v-if="item.icon === '<shop-filled />'" />
          <dropbox-outlined v-if="item.icon === '<dropbox-outlined />'" />
          <eye-outlined v-if="item.icon === '<eye-outlined />'" />
          <borderless-table-outlined v-if="item.icon === '<borderless-table-outlined />'" />
          <compress-outlined v-if="item.icon === '<compress-outlined />'" />
        </template>
        <span>{{ item.title }}</span>
      </a-menu-item>
    </a-menu>
    <div class="footer" :class="{ end: selectedKeys[0] + 1 === menusData.length }"></div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from 'vue';
import router from '@/router';
import { HomeFilled, ShopFilled, DropboxOutlined, EyeOutlined, BorderlessTableOutlined, CompressOutlined } from '@ant-design/icons-vue';
import { useStorage } from '@vueuse/core';

const selectedKeys = useStorage('MenuSelectedKeys', ref([0]));
//寻找选中

const props = defineProps<{
  menusData: any[];
}>();

const goPath = (path: string, id: number) => {
  selectedKeys.value = [id];
  router.push(path);
};
</script>

<style lang="less">
.menu {
  width: 160px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  .footer {
    border-right: 1px solid #f0f0f0;
    flex-shrink: 1;
    height: 100%;
    background: linear-gradient(180deg, rgba(240, 245, 255, 1) 0%, rgba(236, 242, 255, 1) 53.61%, rgba(240, 245, 255, 1) 100%);
  }
  .ant-menu {
    border-right: none;
    margin-bottom: -1px;
    width: 100%;
    opacity: 1;
    background: #fff;
    .ant-menu-item {
      margin: 0 !important;
      height: 64px;
      line-height: 64px;
      letter-spacing: 0px;
      text-align: left;
      vertical-align: top;
      font-size: 16px;
      color: rgba(137, 148, 166, 1);
      background: linear-gradient(180deg, rgba(240, 245, 255, 1) 0%, rgba(236, 242, 255, 1) 53.61%, rgba(240, 245, 255, 1) 100%);
      &:nth-child(1) {
        height: 100px;
      }
      .anticon {
        font-size: 20px;
      }
    }
    &:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background: #fff;
      color: rgba(62, 108, 255, 1);
      font-weight: 500;
    }
  }
  .start {
    border-radius: 0 0 20px 0 !important;
  }
  .end {
    border-radius: 0 20px 0 0 !important;
  }
}
</style>
