import { LoginResponseData, LoginType } from '@/type/page/login';
import http from '../request';

export function userLogin(data: LoginType) {
  return http.request<Promise<LoginResponseData>>({
    url: 'user/login',
    method: 'post',
    data: data as any,
  });
}
