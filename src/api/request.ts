import Request from './axios';
/**
 * process.env.VUE_APP_BASE_URL 根据NODE_ENV变化而变化
 */

/* eslint-disable */
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();
const web: Request = new Request({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: userStore.token || '',
  },
});

export default web;
