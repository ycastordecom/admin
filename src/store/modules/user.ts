import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { LoginResponseData } from '@/type/page/login';
import route from '@/router';
export const useUserStore = defineStore('userStore', {
  state: () => ({
    token: useStorage('token', '' as string) as unknown as string,
    userInfo: useStorage('userInfo', {} as LoginResponseData),
  }),
  getters: {},
  actions: {
    logout() {
      this.$reset();
      route.replace('/login');
    },
  },
});
