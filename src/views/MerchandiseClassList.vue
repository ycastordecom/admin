<template>
  <div class="merchandise-list">
    <div class="title">商品分类列表</div>
    <div class="prompt">
      <exclamation-circle-outlined />
      <div>慎重填写，再三确认，删除后商品也会跟着删除</div>
    </div>
    <a-table :columns="columns" :data-source="TableData" :pagination="false" :filterMultiple="false" rowKey="categoryId">
      <template #bodyCell="{ column, record }">
        <div v-if="column.dataIndex === 'name' && editcColumnState.includes(record.categoryId)">
          <a-input v-model:value="record.name" />
        </div>
        <!--  -->
        <div v-if="column.dataIndex === 'name' && !editcColumnState.includes(record.categoryId)">
          <div>
            {{ record.name }}
          </div>
        </div>
        <!-- 操作 -->
        <div v-if="column.dataIndex === 'action' && !editcColumnState.includes(record.categoryId)">
          <a-button @click="editClick(record)" type="link">编辑</a-button>
          <a-button @click="deleteClick(record)" type="link" style="margin-left: 10px">删除</a-button>
        </div>
        <!-- 操作 -->
        <div v-if="column.dataIndex === 'action' && editcColumnState.includes(record.categoryId)">
          <a-button @click="editConfirm(record)" type="link">保存</a-button>
          <a-button @click="editClose(record)" type="link" style="margin-left: 10px">取消</a-button>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { columns } from '@/hooks/MerchandiseClassList';
import { ref } from 'vue';
import { deleteGoodsClass, getGoodsClassList, updateGoodsClass } from '@/api/page/goods';
import { DatumClass } from '@/type/page/Merchandise';
import message from '@/components/index/message';
import { ApiResponse } from '@/type/page/api';

//表格数据
const TableData = ref<DatumClass[]>([]);
//是否编辑
const editcColumnState = ref<number[]>([]);
//点击编辑
const editClick = (record: DatumClass) => {
  editcColumnState.value.push(record.categoryId);
};
//点击保存
const editConfirm = async (record: DatumClass) => {
  const data: null | ApiResponse<null> = await updateGoodsClass(record);
  //失败
  if (data !== null) message.success(data.message);
  editClose(record);
};
//点击取消
const editClose = (record: DatumClass) => {
  //还原数据
  initGoodsList();
  //删除编辑状态
  editcColumnState.value = editcColumnState.value.filter((item) => item !== record.categoryId);
};
//删除数据
const deleteClick = async (record: DatumClass) => {
  const data = await deleteGoodsClass(record);
  //失败
  if (data !== null) return message.success(data.message);
  //成功
  initGoodsList();
};
//初始化数据
const initGoodsList = async () => {
  const data = await getGoodsClassList();
  TableData.value = data;
};
initGoodsList();
</script>
<style lang="less">
.merchandise-list {
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
  .ant-table-wrapper {
    margin-top: 50px;
  }
  .ant-pagination {
    margin-top: 70px;
  }
  .prompt {
    width: 510px;
    height: 36px;
    opacity: 1;
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
  .ant-input {
    width: 200px;
  }
}
</style>
