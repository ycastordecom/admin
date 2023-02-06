// Description: 用户分页查询参数
export interface UserRequestBody {
  pageNum: number;
  pageSize: number;
  query: Query;
}

interface Query {
  username?: string;
  phone?: string;
  isProhibited?: boolean;
}
// 用户分页查询参数返回体
export interface UserResponseBody {
  code: number;
  message: string;
  data: UserResponseBodyData;
}

export interface UserResponseBodyData {
  hasNext: boolean;
  total: number;
  data: UserResponseBodyDataDatum[];
}

export interface UserResponseBodyDataDatum {
  userId: number;
  phone: string;
  integral: number;
  isProhibited: boolean;
  createTime: number;
  updateTime: number;
  avatar: string;
  role: number;
  username: string;
  password?: string;
}

//修改用户信息
export interface UserUpdateRequestBody {
  userId: number;
  username: string;
  phone: string;
  isProhibited: boolean;
  password: string;
  avatar: string;
  role: number;
  integral: number;
}
