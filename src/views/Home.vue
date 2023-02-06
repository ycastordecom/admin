<template>
  <a-layout>
    <a-layout-sider style="width: 160px">
      <menus :menusData="menusData" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <hedaers />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import menus from '@/components/menus.vue';
import hedaers from '@/components/header.vue';
import { Menu } from '@/type/menus';
import { getMenus } from '@/api/menus';
import { ref } from 'vue';
// import { useRouter } from 'vue-router';
// const router = useRouter();
// 获取menus数据'
const menusData = ref<Menu[]>([]);
const getMenusData = async () => {
  const data: Menu[] = (await getMenus()) as Menu[];
  menusData.value = data;
};
getMenusData();
</script>
<style lang="less">
.ant-layout-sider {
  flex: 160px !important;
  max-width: 160px !important;
  min-width: 160px !important;
  background: #fff !important;
}
.ant-layout-header {
  height: 84px !important;
  border-radius: 20px 0 0 0;
  background-color: #fff;
  border-bottom: #eee 2px solid;
}
.ant-layout-content {
  background: #fff !important;
  height: calc(100vh - 84px);
  overflow: hidden;
}
</style>
