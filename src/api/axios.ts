import { message } from 'ant-design-vue';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useUserStore } from '@/store/modules/user';
class Request {
  private instance: AxiosInstance | undefined;

  constructor(requeseConfig: AxiosRequestConfig) {
    this.instance = axios.create(requeseConfig);
    // 全局请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局请求拦截的', config);
        // console.log('全局请求拦截的', config);

        return config;
      }
      // (error) => {
      //   console.log('全局请求拦截失败', error);
      // }
    );

    // 全局响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        // res 为AxiosResponse 类型，含有conig\data\headers\request\status\statusText属性
        // console.log('全局响应拦截的', res);
        if (res.data.code === 400159) {
          // 400159 账号或密码错误
          //弹窗提示
          message.error(res.data.message);
          return null;
        }
        if (res.data.code === 410) {
          // 410 业务逻辑错误
          //弹窗提示
          message.error(res.data.message);
          return res.data;
        }

        return res.data.data;
        // 只需要返回data即可
      },
      (error) => {
        // console.log('全局响应失败拦截');
        // console.log(error.request);
        // console.log(error.response);
        if (error.response.data.code === 500) {
          // 500 为服务端错误
          //弹窗提示
          message.error(error.response.data.message);
          return;
        }
        if (error.response.data.code === 401) {
          // 401 为token失效
          // token失效后，跳转到登录页
          useUserStore().$reset();
          window.location.href = '/login';
          return;
        }
        if (error.response.data.code === 400) {
          // 400 为参数错误
          //弹窗提示
          message.error(error.response.data.message);
          return;
        }
        return error;
      }
    );
  }

  request<T>(config: AxiosRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance
        ?.request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default Request;
