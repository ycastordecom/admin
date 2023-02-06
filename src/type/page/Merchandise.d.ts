//获取商品列表 Merchandise Query MerchandiseType GoodData Datum
export interface Merchandise {
  pageNum: number;
  pageSize: number;
  query: Query;
}
//获取商品列表参数
export interface Query {
  goodsName?: string;
  categoryId?: number;
  sortField?: string;
  isBanner?: boolean;
}

//获取商品列表返回
export interface MerchandiseType {
  code: number;
  message: string;
  data: GoodData;
}

export interface GoodData {
  hasNext: boolean;
  total: number;
  data: Datum[];
}

interface Datum {
  goodsId: number;
  goodsName: string;
  introduce: string;
  image: string;
  price: number;
  imageList: string;
  isDelete: boolean;
  createTime: number;
  updateTime: number;
  categoryId: number;
  isBanner: boolean;
  isHome: boolean;
  detailJson: number;
  specList: SpecList[];
}
export interface SpecList {
  specId: number;
  goodsId: number;
  specJson: string;
  premium: number;
  image: string;
  isDelete: boolean;
  createTime: number;
  updateTime: number;
  stock: number;
}
//列表表格类型
export interface MerchandiseTableType {
  title: string;
  dataIndex: string;
  key: string;
}

//商品分类列表返回数据参数
export interface DatumClass {
  categoryId: number;
  name: string;
}

//添加商品分类请求体
export interface AddGoodsClass {
  name: string;
}
//添加商品分类返回体参数
export interface AddGoodsClassResponseData {
  categoryId: number;
  name: string;
}
//修改商品分类请求体
export interface EditGoodsClass {
  categoryId: number;
  name: string;
}

//添加商品请求体
export interface GoodRequestBody {
  goodsName: string;
  introduce: string;
  image: string;
  price: number;
  imageList: string;
  categoryId: number;
  detailJson: string;
  specAddBodyList: SpecAddBodyList[];
}

interface SpecAddBodyList {
  stock: number;
  specJson: string;
  premium: number;
  image: string;
}

//修改商品请求体
export interface EditGoodsRequestBody {
  goodsId: number;
  goodsName: string;
  introduce: string;
  image: string;
  price: number;
  imageList: string;
  classifyId: number;
  detailJson: string;
  isHome: boolean;
  isDelete: boolean;
  isBanner: boolean;
}

//修改商品规格请求体
export interface EditSpecRequestBody {
  specId: number;
  stock: number;
  specJson: string;
  premium: number;
  image: string;
}
