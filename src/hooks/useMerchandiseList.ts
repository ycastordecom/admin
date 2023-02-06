import { MerchandiseTableType } from '@/type/page/Merchandise';
import { reactive } from 'vue';

export const useMerchandiseList = () => {};

export const columns = reactive<MerchandiseTableType[]>([
  {
    title: '商品分类ID',
    dataIndex: 'categoryId',
    key: 'categoryId',
  },
  {
    title: '商品ID',
    dataIndex: 'goodsId',
    key: 'goodsId',
  },
  {
    title: '商品名称',
    dataIndex: 'goodsName',
    key: 'goodsName',
  },
  // {
  //   title: '商品介绍',
  //   dataIndex: 'introduce',
  //   key: 'introduce',
  // },
  {
    title: '商品图片',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: '商品基础价格',
    dataIndex: 'price',
    key: 'price',
  },
  // {
  //   title: '商品图片列表',
  //   dataIndex: 'imageList',
  //   key: 'imageList',
  // },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
  {
    title: '是否轮播',
    dataIndex: 'isBanner',
    key: 'isBanner',
  },
  {
    title: '是否删除',
    dataIndex: 'isDelete',
    key: 'isDelete',
  },
  {
    title: '是否首页',
    dataIndex: 'isHome',
    key: 'isHome',
  },
]);
