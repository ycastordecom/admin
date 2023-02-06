<template>
  <a-menu-item :key="`${props.items.key}`">{{ props.items.title }}</a-menu-item>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  items: {
    key: string;
    title: string;
    icon: string;
    path: string;
  };
}>();
</script>
