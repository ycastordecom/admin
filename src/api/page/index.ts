import { Balance, Profit } from '@/type/page';
import http from '../request';

export function getBalance() {
  return http.request<Promise<Balance>>({
    url: '/getBalance',
    method: 'get',
  });
}
export function getProfit() {
  return http.request<Promise<Profit>>({
    url: '/getProfit',
    method: 'get',
  });
}
