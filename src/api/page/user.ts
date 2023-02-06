import { ApiResponse } from '@/type/page/api';
import { UserRequestBody, UserResponseBodyData, UserUpdateRequestBody } from '@/type/page/user';
import http from '../request';
//请求用户列表
export const getUserInfoList = (data: UserRequestBody) => {
  return http.request<Promise<UserResponseBodyData | ApiResponse<null>>>({
    url: '/user/listPage',
    method: 'POST',
    data: data as any,
  });
};
//修改用户信息
export const updateUserInfo = (data: UserUpdateRequestBody) => {
  return http.request<Promise<ApiResponse<null> | null>>({
    url: '/user/update',
    method: 'POST',
    data: data as any,
  });
};
