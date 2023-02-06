<template>
  <div class="merchandise-list">
    <editgood v-model="isEdit" v-model:baseEditData="baseEditData" @change="editChange" />
    <div class="title">商品列表</div>
    <div class="prompt">
      <exclamation-circle-outlined />
      <div>慎重填写，再三确认</div>
    </div>
    <a-table @change="changePage" :columns="columns" :data-source="TableData" :rowExpandable="() => true" :pagination="pagination" :filterMultiple="false" rowKey="goodsId" :expandIconColumnIndex="13">
      <template #bodyCell="{ column, record }">
        <!-- 创建时间 -->
        <div v-if="column.dataIndex === 'createTime'">{{ new Date(record.createTime).toLocaleString() }}</div>
        <!-- 更新时间 -->
        <div v-if="column.dataIndex === 'updateTime'">{{ new Date(record.updateTime).toLocaleString() }}</div>
        <!-- 价格 -->
        <div v-if="column.dataIndex === 'price'">{{ record.price }}积分</div>
        <!-- 是否删除 -->
        <div v-if="column.dataIndex === 'isDelete'">
          <a-switch v-model:checked="record.isDelete" @change="changeData(record)" />
        </div>
        <!-- 是否轮播 -->
        <div v-if="column.dataIndex === 'isBanner'">
          <a-switch v-model:checked="record.isBanner" @change="changeData(record)" />
        </div>
        <!-- 是否首页 -->
        <div v-if="column.dataIndex === 'isHome'">
          <a-switch v-model:checked="record.isHome" @change="changeData(record)" />
        </div>
        <!-- 商品图片 -->
        <div v-if="column.dataIndex === 'image'">
          <a-image class="image" :src="imageBaseUrl + record.image" />
        </div>
        <!-- 其他 -->
        <div
          v-if="
            column.dataIndex !== 'createTime' &&
            column.dataIndex !== 'updateTime' &&
            column.dataIndex !== 'price' &&
            column.dataIndex !== 'isDelete' &&
            column.dataIndex !== 'isBanner' &&
            column.dataIndex !== 'isHome' &&
            column.dataIndex !== 'image'
          "
        >
          {{ record[column.dataIndex] }}
        </div>
      </template>
      <template #expandedRowRender="{ record }">
        <div class="showbg">
          <div>
            {{ record.introduce }}
          </div>
          <div class="imageList">
            <div v-for="item in record.imageList.split(',')" :key="item">
              <a-image :src="imageBaseUrl + item" />
            </div>
          </div>
          <div class="operation">
            <div @click="edit(record)">
              <edit-outlined />
              <span>编辑商品</span>
            </div>
          </div>
        </div>
        <good-specifications-table @editSpec="editSpec" v-model:specList="record.specList" />
      </template>
      <template #headerCell="{ column }">
        <div v-if="column.RC_TABLE_INTERNAL_COL_DEFINE">操作</div>
      </template>
      <template #expandIcon="props">
        <a-button type="link" size="small" @click="handleExpand(props)">显示/隐藏</a-button>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import { EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons-vue';
import editgood from '@/components/good/editgood';
import { columns } from '@/hooks/useMerchandiseList';
import { ref } from 'vue';
import { getGoodsList, updateGoods, updateGoodsSpec } from '@/api/page/goods';
import { Datum, GoodData, EditGoodsRequestBody } from '@/type/page/Merchandise';
import { message } from 'ant-design-vue';
import goodSpecificationsTable from '@/components/good/goodSpecificationsTable';
const imageBaseUrl = process.env.VUE_APP_IMAGE_BASE_URL;
const pageNum = ref<number>(1);
//分页设置
const pagination = ref<{
  showQuickJumper: boolean;
  total: number;
  showTotal: Function;
}>({
  showQuickJumper: true,
  total: 50,
  showTotal: (total: number) => `共${total} 条数据`,
});
//修改分页
const changePage = (page: { current: number }) => {
  pageNum.value = page.current;
  initGoodList();
};
//让他展开
const handleExpand = (props: any) => {
  props.onExpand(props.record, !props.expanded);
};
//表格数据
const TableData = ref<Datum[]>([]);
//初始化数据
const initGoodList = async () => {
  const data: GoodData = await getGoodsList({
    pageNum: pageNum.value,
    pageSize: 9,
    query: {
      goodsName: '',
      // categoryId: 0,
      sortField: 'create_time',
      // isBanner: false,
    },
  });
  if (!data) return;
  //修改分页
  pagination.value.total = data.total;

  TableData.value = data.data;
};
initGoodList();

//switch改变,修改数据
const changeData = async (record: EditGoodsRequestBody) => {
  const data = await updateGoods(record);
  //失败
  if (data !== null) return message.error(data.message);

  //成功
  initGoodList();
  message.success('修改成功');
};
//是否点击了修改
const isEdit = ref<boolean>(false);

//存储修改的数据
const baseEditData = ref<EditGoodsRequestBody>({
  goodsId: 0,
  goodsName: '',
  price: 0,
  introduce: '',
  image: '',
  imageList: '',
  classifyId: 0,
  detailJSon: '',
  isBanner: false,
  isHome: false,
  isDelete: false,
});
//点击修改
const edit = (record: EditGoodsRequestBody) => {
  isEdit.value = !isEdit.value;
  baseEditData.value = record;
};
//提交
const editChange = () => {
  changeData(baseEditData.value);
  initGoodList();
};
//修改规格
const editSpec = async (record: any) => {
  console.log(record);

  const data = await updateGoodsSpec({
    specId: record.specId,
    stock: record.stock,
    specJson: record.specJson,
    premium: record.premium,
    image: record.image,
  });
  //失败
  if (data !== null) return message.error(data.message);
  //成功
  message.success('修改成功');
  initGoodList();
};
</script>
<style lang="less">
.merchandise-list {
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 35px;
  flex: 1;
  height: 100%;
  position: relative;
  .prompt {
    width: 510px;
    height: 36px;
    opacity: 1;
    margin: 30px 0;
    border-radius: 4px;
    background: rgba(255, 115, 0, 0.1);
    font-size: 14px;
    font-weight: 400;
    line-height: 0px;
    color: rgba(255, 141, 41, 1);
    display: flex;
    align-items: center;
    margin-top: 50px;
    .anticon {
      font-size: 25px;
      margin: 0 10px;
    }
  }
  .title {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 0px;
    color: rgba(28, 28, 28, 1);
    text-align: left;
    vertical-align: top;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
    > .ant-btn:nth-child(1) {
      width: 152px;
      height: 40px;
      opacity: 1;
      border-radius: 6px;
      background: rgba(63, 110, 255, 1);
      color: #fff;
    }
    > .ant-btn:nth-child(2) {
      width: 120px;
      height: 40px;
      opacity: 1;
      border-radius: 6px;
      background: rgba(255, 97, 77, 1);
      color: #fff;
      margin: 0 20px;
    }
    .ant-input-affix-wrapper {
      border-radius: 5px;
      width: 189px;
      height: 40px;
      opacity: 1;
      border-radius: 6px;
      color: rgba(204, 209, 224, 1);
      border: 1px solid rgba(204, 209, 224, 1);
      margin-left: 20px;
    }
    .ant-select {
      border-radius: 6px;
      .ant-select-selector {
        height: 40px;
        line-height: 40px;
        .ant-select-selection-item {
          font-size: 16px;
          font-weight: 400;
          color: rgba(204, 209, 224, 1);
        }
      }
    }
  }
  .add {
    margin-top: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 35px;
    height: 80px;
    opacity: 1;
    border-radius: 6px;
    border: 2px dashed rgba(219, 219, 219, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    > div {
      display: flex;
      font-size: 16px;
      align-items: center;
      opacity: 1;
      color: rgba(219, 219, 219, 1);
      .anticon {
        font-size: 32px;
        opacity: 1;
        color: rgba(219, 219, 219, 1);
      }
      span {
        margin-left: 10px;
      }
    }
  }
  .image {
    max-width: 102px;
    max-height: 102px;
  }
  .imageList {
    display: flex;
    > div {
      width: 102px;
      height: 102px;
      display: flex;
      justify-content: center;
      align-items: center;
      .ant-image-img {
        max-width: 102px;
        max-height: 102px;
      }
    }
  }
  .ant-table-wrapper {
    margin-top: 50px;
  }
  .ant-pagination {
    margin-top: 70px;
  }
  .no {
    height: 30px;
    width: 68.85px;
    background: rgba(227, 255, 235, 1);
    font-size: 14px;
    font-weight: 400;
    color: rgba(77, 168, 105, 1);
    text-align: center;
    vertical-align: top;
    line-height: 30px;
    text-align: center;
    border-radius: 30px;
  }
  .off {
    height: 30px;
    width: 68.85px;
    background: rgb(230, 9, 9, 0.5);
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    vertical-align: top;
    line-height: 30px;
    text-align: center;
    border-radius: 30px;
  }
  .showbg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .operation {
      display: flex;
      justify-content: end;
      > div {
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
