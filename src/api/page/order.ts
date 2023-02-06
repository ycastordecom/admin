import http from '../request';

import { OrderPageQueryRequestBody, OrderPageQueryResponseBodyData, UpdateOrderRequestBody, UpdateOrderResponseBody } from '@/type/page/order';
//获取订单列表
export function getOrderList(data: OrderPageQueryRequestBody) {
  return http.request<Promise<OrderPageQueryResponseBodyData | null>>({
    url: '/order/listPage',
    method: 'POST',
    data: data as any,
  });
}

// 更改订单
export function updateOrder(data: UpdateOrderRequestBody) {
  return http.request<Promise<UpdateOrderResponseBody>>({
    url: '/order/update',
    method: 'POST',
    data: data as any,
  });
}
