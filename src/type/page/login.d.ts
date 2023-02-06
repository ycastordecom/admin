// 项目中的接口类型定义
export interface LoginType {
  phone: string;
  password: string;
}
// 项目中的接口返回数据类型定义
export interface LoginResponseData {
  userId: number;
  phone: string;
  integral: number;
  isProhibited: boolean;
  createTime: number;
  updateTime: number;
  avatar: string;
  role: number;
  username: string;
  password: string;
  token: string;
}
