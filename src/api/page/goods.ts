import { ApiResponse } from '@/type/page/api';
import { Merchandise, GoodData, EditGoodsRequestBody, AddGoodsClass, AddGoodsClassResponseData, EditGoodsClass, DatumClass, GoodRequestBody, EditSpecRequestBody } from '@/type/page/Merchandise';
import http from '../request';

//获取商品列表
export function getGoodsList(data: Merchandise) {
  return http.request<Promise<GoodData>>({
    url: '/goods/listPage',
    method: 'post',
    data: data as any,
  });
}
//获取商品分类列表
export function getGoodsClassList() {
  return http.request<Promise<DatumClass[]>>({
    url: '/category/list',
    method: 'post',
  });
}
//添加商品分类
export function addGoodsClass(data: AddGoodsClass) {
  return http.request<Promise<AddGoodsClassResponseData | ApiResponse<null> | null>>({
    url: '/category/add',
    method: 'post',
    data: data as any,
  });
}
//修改商品分类
export function updateGoodsClass(data: EditGoodsClass) {
  return http.request<Promise<null | ApiResponse<null>>>({
    url: '/category/update',
    method: 'post',
    data: data as any,
  });
}
//删除商品分类
export function deleteGoodsClass({ categoryId }: { categoryId: number }) {
  return http.request<Promise<null | ApiResponse<null>>>({
    url: `/category/delete?categoryId=${categoryId}`,
    method: 'post',
  });
}
//添加商品
export function addGoods(data: GoodRequestBody) {
  return http.request<Promise<null | ApiResponse<null>>>({
    url: '/goods/add',
    method: 'post',
    data: data as any,
  });
}
//修改商品
export function updateGoods(data: EditGoodsRequestBody) {
  return http.request<Promise<null | ApiResponse<null>>>({
    url: '/goods/update',
    method: 'post',
    data: data as any,
  });
}
//修改商品规格
export function updateGoodsSpec(data: EditSpecRequestBody) {
  return http.request<Promise<null | ApiResponse<null>>>({
    url: '/spec/update',
    method: 'post',
    data: data as any,
  });
}
