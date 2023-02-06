import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './registerServiceWorker';
import router from './router';
import Fragment from 'vue-fragment';
import '../mock/index.ts';
import store from '@/store';

createApp(App).use(Antd).use(Fragment.Plugin).use(store).use(router).mount('#app');
