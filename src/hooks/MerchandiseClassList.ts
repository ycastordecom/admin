import { MerchandiseTableType } from '@/type/page/Merchandise';
import { reactive } from 'vue';

// {categoryId: 2, name: '修改'}

export const columns = reactive<MerchandiseTableType[]>([
  {
    title: '商品分类ID',
    dataIndex: 'categoryId',
    key: 'categoryId',
  },
  {
    title: '商品分类名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  },
]);
