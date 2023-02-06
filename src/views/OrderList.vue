<template>
  <div class="order-list">
    <OrderEdit v-model="orderEditVisible" @change="orderEdits" v-model:orderEditData="orderEditData" />
    <div class="title">订单列表</div>
    <a-table :columns="columns" :data-source="dataSource" :rowExpandable="() => true" :pagination="pagination" :expandIconColumnIndex="14" rowKey="orderId">
      <template #bodyCell="{ column, record }">
        <!-- 订单状态 -->
        <template v-if="column.key === 'status'">
          <div v-if="record.status === 1" class="paymentstatusno">已完成</div>
          <div v-if="record.status === 0" class="paymentstatusoff">已下单</div>
          <div v-if="record.status === 2" class="paymentstatuso">已发货</div>
        </template>
        <!-- 是否删除 -->
        <template v-else-if="column.key === 'isDelete'">
          <div v-if="record.isDelete" class="paymentstatusno">已删除</div>
          <div v-else class="paymentstatusoff">未删除</div>
        </template>
        <!-- 三个时间 -->
        <template v-if="column.key === 'payTime' || column.key === 'createTime' || column.key === 'updateTime' || column.key === 'completeTime'">
          {{ record[column.key] ? new Date(record[column.key]).toLocaleString() : '' }}
        </template>
        <!-- 操作 -->
        <template v-else-if="column.key === 'RC_TABLE_INTERNAL_COL_DEFINE'">
          <a-button type="link" @click="orderEdit(record)" size="small">修改信息</a-button>
        </template>
      </template>
      <template #expandIcon="props">
        <a-button type="link" size="small" @click="handleExpand(props)">显示/隐藏</a-button>
      </template>
      <template #headerCell="{ column }">
        <div v-if="column.RC_TABLE_INTERNAL_COL_DEFINE">操作</div>
      </template>
      <template #expandedRowRender="{ record }">
        <div>
          <div>
            <div>订单详情</div>
            <OrderDetailList :orderDetailList="record.orderDetailList" />
          </div>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import OrderDetailList from '@/components/order/orderDetails';
import { getOrderList, updateOrder } from '@/api/page/order';
import { OrderPageQueryResponseBodyData, OrderPageQueryResponseBodyDataDatum, UpdateOrderRequestBody } from '@/type/page/order';
import { ref } from 'vue';
import OrderEdit from '@/components/order/orderEdit';
import { message } from 'ant-design-vue';
//分页
const pagination = {
  showQuickJumper: true,
  total: 0,
  showSizeChanger: false,
  showTotal: (total: number) => `共${total} 条数据`,
};
//让他展开
const handleExpand = (props: any) => {
  props.onExpand(props.record, !props.expanded);
};
const columns = ref([
  {
    title: '订单id',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: '订单编号',
    dataIndex: 'orderNo',
    key: 'orderNo',
  },
  {
    title: '用户id',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '支付时间',
    dataIndex: 'payTime',
    key: 'payTime',
  },
  {
    title: '总金额',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
  },
  {
    title: '运单号',
    dataIndex: 'waybillNo',
    key: 'waybillNo',
  },
  {
    title: '订单状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '收货人姓名',
    dataIndex: 'receiverName',
    key: 'receiverName',
  },
  {
    title: '收货人电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '收货人地址',
    dataIndex: 'address',
    key: 'address',
  },
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
  // {
  //   title: '备注',
  //   dataIndex: 'remark',
  //   key: 'remark',
  // },
  {
    title: '完成时间',
    dataIndex: 'completeTime',
    key: 'completeTime',
  },
  {
    title: '是否删除',
    dataIndex: 'isDelete',
    key: 'isDelete',
  },
  {
    title: '操作',
    dataIndex: 'RC_TABLE_INTERNAL_COL_DEFINE',
    key: 'RC_TABLE_INTERNAL_COL_DEFINE',
  },
  // {
  //   title: '订单详情',
  //   dataIndex: 'orderDetailList',
  //   key: 'orderDetailList',
  //   slots: { customRender: 'orderDetailList' },
  // },
]);

const dataSource = ref<OrderPageQueryResponseBodyDataDatum[]>();

//初始化
const initGetOrderList = async () => {
  const data: OrderPageQueryResponseBodyData | null = await getOrderList({
    pageNum: 1,
    pageSize: 10,
    query: {},
  });
  if (!data) return;
  pagination.total = data.total;
  dataSource.value = data.data;
};
initGetOrderList();
//  修改信息弹窗状态
const orderEditVisible = ref(false);
const orderEditData = ref<OrderPageQueryResponseBodyDataDatum>();
//修改信息click
const orderEdit = (record: OrderPageQueryResponseBodyDataDatum) => {
  orderEditData.value = record;
  orderEditVisible.value = true;
};
//修改信息
const orderEdits = async (record: UpdateOrderRequestBody) => {
  const data = await updateOrder(record);
  if (data !== null) return message.error(data.message);
  message.success('修改成功');
  orderEditVisible.value = false;
  initGetOrderList();
};
</script>
<style lang="less">
.order-list {
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 35px;
  flex: 1;
  height: 100%;
  position: relative;
  .title {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 0px;
    color: rgba(28, 28, 28, 1);
    text-align: left;
    vertical-align: top;
  }
  .ant-table-wrapper {
    margin-top: 50px;
  }
  .ant-pagination {
    margin-top: 70px;
  }
  .paymentstatusoff {
    height: 30px;
    width: 80px;
    opacity: 1;
    color: #fff;
    background: rgba(204, 210, 227, 1);
    line-height: 30px;
    text-align: center;
    border-radius: 30px;
  }
  .paymentstatusno {
    height: 30px;
    width: 80px;
    opacity: 1;
    color: #fff;
    background: rgba(62, 108, 255, 1);
    line-height: 30px;
    text-align: center;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cardstatusoff {
    height: 30px;
    width: 80px;
    opacity: 1;
    color: #fff;
    background: rgba(204, 210, 227, 1);
    line-height: 30px;
    text-align: center;
    border-radius: 30px;
  }
  .paymentstatuso {
    height: 30px;
    width: 80px;
    opacity: 1;
    color: #fff;
    background: rgba(255, 192, 43, 1);
    line-height: 30px;
    text-align: center;
    border-radius: 30px;
  }
  .cardstatusno {
    width: 80px;
    height: 30px;
    opacity: 1;
    text-align: center;
    color: #fff;
    line-height: 30px;
    border-radius: 30px;
    background: rgba(255, 249, 224, 1);
    color: rgba(255, 192, 43, 1);
  }
}
</style>
