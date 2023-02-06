<template>
  <div class="complaints-my">
    <edit @submit="changeData" v-model:editData="editData" v-model="isEdit" />
    <div class="title">用户管理</div>
    <a-table :columns="columns" @change="changePage" :data-source="TableData" :rowExpandable="() => true" :pagination="pagination" rowKey="id">
      <template #bodyCell="{ column, record }">
        <!-- 头像 -->
        <template v-if="column.dataIndex === 'avatar'">
          <a-image width="102px" height="102px" :src="record.oppenid ? record.avatar : imageBaseUrl + record.avatar" />
        </template>
        <!-- 角色 -->
        <template v-if="column.dataIndex === 'role'">
          <span v-if="record.role === 2">普通用户</span>
          <span v-if="record.role === 1">管理员</span>
        </template>
        <!-- 是否禁用 -->
        <template v-if="column.dataIndex === 'isProhibited'">
          <a-switch @Change="checkedChange(record)" v-model:checked="record.isProhibited" />
        </template>
        <!-- 两个时间 -->
        <template v-if="column.dataIndex === 'createTime' || column.dataIndex === 'updateTime'">
          <span>{{ new Date(record[column.dataIndex]).toLocaleString() }}</span>
        </template>
        <template v-if="column.dataIndex === 'operation'">
          <a-button type="primary" size="small" @click="changeEdit(record)">编辑</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import edit from '@/components/user/edit';
import { getUserInfoList, updateUserInfo } from '@/api/page/user';
import message from '@/components/index/message';
import { ApiResponse } from '@/type/page/api';
import { UserResponseBodyData, UserResponseBodyDataDatum, UserUpdateRequestBody } from '@/type/page/user';
import { ref } from 'vue';
const imageBaseUrl = process.env.VUE_APP_IMAGE_BASE_URL;

//是否正在编辑
const isEdit = ref<boolean>(false);
//临时数据
const editData = ref<UserUpdateRequestBody>({
  userId: 0,
  username: '',
  avatar: '',
  phone: '',
  integral: 0,
  password: '',
  role: 0,
  isProhibited: false,
});
//修改状态
const changeEdit = (record: UserUpdateRequestBody) => {
  editData.value = record;
  isEdit.value = !isEdit.value;
};

//修改数据
const changeData = async () => {
  console.log(editData.value);

  const data = await updateUserInfo(editData.value);
  if (data !== null) return message.success(data.message);
  message.error('修改成功');
  initUserInfoList();
};

//checkedChange
const checkedChange = async (record: UserUpdateRequestBody) => {
  const data = await updateUserInfo(record);
  console.log(data);

  if (data) return message.success(data.message);

  if (data === null) message.success('修改成功');

  initUserInfoList();
};

const pageNum = ref<number>(1);
const pagination = ref({
  showQuickJumper: true,
  total: 0,
  showSizeChanger: false,
  showTotal: (total: number) => `共${total} 条数据`,
});
//修改分页
const changePage = (page: { current: number }) => {
  pageNum.value = page.current;
  initUserInfoList();
};
const columns = ref([
  {
    title: '用户id',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '用户昵称',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '用户头像',
    dataIndex: 'avatar',
    key: 'avatar',
  },
  {
    title: '用户手机号',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '用户积分',
    dataIndex: 'integral',
    key: 'integral',
  },
  {
    title: '是否禁用',
    dataIndex: 'isProhibited',
    key: 'isProhibited',
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
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
  },
]);
const TableData = ref<UserResponseBodyDataDatum[]>([]);
const initUserInfoList = async () => {
  const data: UserResponseBodyData | ApiResponse<null> = await getUserInfoList({
    pageNum: 1,
    pageSize: 10,
    query: {},
  });
  if (data.data === null) return message.error(data.message);
  TableData.value = data.data;
  pagination.value.total = data.total;
};
initUserInfoList();
</script>
<style lang="less">
.complaints-my {
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
  .data {
    display: flex;
    margin-top: 30px;
    > .active {
      width: 260px;
      height: 130px;
      opacity: 1;
      border-radius: 8px;
      background: url('../assets/frozen.png');
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      margin-right: 30px;
      > div:nth-child(1) {
        > span:nth-child(1) {
          font-size: 36px;
          font-weight: 500;
        }
        > span:nth-child(2) {
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
    > .no {
      width: 260px;
      height: 130px;
      opacity: 1;
      border-radius: 8px;
      background: rgba(247, 248, 250, 1);
      margin-right: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      > div:nth-child(1) {
        font-size: 32px;
        color: rgba(109, 117, 140, 1);
      }
      > div:nth-child(2) {
        margin: 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > div:nth-child(1) {
          font-size: 36px;
          font-weight: 500;
          color: rgba(109, 117, 140, 1);
        }
        > div:nth-child(2) {
          font-size: 14px;
          font-weight: 500;
          color: rgba(162, 169, 186, 1);
        }
      }
    }
  }
  .list-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    .ant-btn {
      width: 120px;
      height: 40px;
      opacity: 1;
      border-radius: 5px;
      background: rgba(63, 110, 255, 1);
      color: #fff;
    }
  }
  .ant-table-wrapper {
    margin-top: 50px;
    .no {
      height: 30px;
      width: 80px;
      opacity: 1;
      border-radius: 30px;
      text-align: center;
      line-height: 30px;
      color: #fff;
      background: rgba(204, 210, 227, 1);
    }
    .ant-btn {
      width: 95px;
      height: 30px;
      opacity: 1;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      border-radius: 30px;
      background: rgba(62, 108, 255, 1);
    }
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
