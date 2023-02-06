// Description: 订单分页查询，请求体
export interface OrderPageQueryRequestBody {
  pageNum: number;
  pageSize: number;
  query: Query;
}

interface Query {
  status?: number;
  userId?: number;
  orderNo?: string;
  receiverName?: string;
  phone?: string;
  address?: string;
  remark?: string;
}

// Description: 订单分页查询，响应体
export interface OrderPageQueryResponseBody {
  code: number;
  message: string;
  data: OrderPageQueryResponseBodyData;
}

interface OrderPageQueryResponseBodyData {
  hasNext: boolean;
  total: number;
  data: OrderPageQueryResponseBodyDataDatum[];
}

export interface OrderPageQueryResponseBodyDataDatum {
  orderId: number;
  orderNo: string;
  userId: number;
  payTime: number;
  totalAmount: number;
  waybillNo: number;
  status: boolean;
  receiverName: string;
  phone: string;
  address: string;
  createTime: number;
  updateTime: number;
  remark: string;
  completeTime: number;
  isDelete: boolean;
  orderDetailList: OrderDetailListType[];
}

export interface OrderDetailListType {
  orderDetailId: number;
  orderId: number;
  goodsName: string;
  goodsIntroduce: string;
  specJson: string;
  price: number;
  image: string;
  num: number;
  isDelete: boolean;
}
//修改订单请求体
export interface UpdateOrderRequestBody {
  orderId: number;
  waybillNo: number;
  status: boolean;
  receiverName: string;
  phone: string;
  address: string;
}
//修改订单返回体
export interface UpdateOrderResponseBody {
  code: number;
  message: string;
  data: Data;
}

interface Data {}
