<template>
  <div class="index">
    <div>
      <div class="balance">
        <div class="banner">
          <transaction-outlined />
          <div class="title">账户余额：</div>
          <div class="num">100000.00元</div>
        </div>
        <div class="bottom">
          <div class="collection" v-for="item in balanceData" :key="item.id">
            <div>{{ item.income }}</div>
            <div>今日收款（元）</div>
            <div>
              <div>
                今日成交:
                <span>{{ item.pens }}</span>
                笔
              </div>
              <div>
                今日卖出:
                <span>{{ item.sell }}</span>
                单
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="earnings" id="earnings"></div>
      <div class="table">
        <div class="table-header">
          <div>最新订单</div>
          <img src="@/assets/more@3x.png" alt="" />
        </div>
        <a-table :pagination="false" :dataSource="dataSource" :columns="columns" :row-class-name="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : null)">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'state'">
              <div v-if="record.state === 0" class="tag-one">已付款</div>
              <div v-if="record.state === 1" class="tag-two">未付款</div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <div>
      <div id="piehart" class="pie-hart"></div>
      <div class="icon">
        <img src="@/assets/Announcement.png" alt="" />
      </div>
      <div class="announcement">
        <div class="announcement-chi">
          <div class="announcement-item">
            <div>
              <div>
                <div>公告</div>
                <div>发布 1 条公告内容</div>
              </div>
              <div>
                查看详情
                <right-outlined />
              </div>
            </div>
            <div>近7日未发布订阅图文,粉丝活跃率低于同行平均</div>
          </div>
          <div class="announcement-item">
            <div>
              <div>
                <div>公告</div>
                <div>发布 1 条公告内容</div>
              </div>
              <div>
                查看详情
                <right-outlined />
              </div>
            </div>
            <div>近7日未发布订阅图文,粉丝活跃率低于同行平均</div>
          </div>
          <div class="announcement-item">
            <div>
              <div>
                <div>公告</div>
                <div>发布 1 条公告内容</div>
              </div>
              <div>
                查看详情
                <right-outlined />
              </div>
            </div>
            <div>近7日未发布订阅图文,粉丝活跃率低于同行平均</div>
          </div>
          <div class="announcement-item">
            <div>
              <div>
                <div>公告</div>
                <div>发布 1 条公告内容</div>
              </div>
              <div>
                查看详情
                <right-outlined />
              </div>
            </div>
            <div>近7日未发布订阅图文,粉丝活跃率低于同行平均</div>
          </div>
          <div class="announcement-item">
            <div>
              <div>
                <div>公告</div>
                <div>发布 1 条公告内容</div>
              </div>
              <div>
                查看详情
                <right-outlined />
              </div>
            </div>
            <div>近7日未发布订阅图文,粉丝活跃率低于同行平均</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TransactionOutlined, RightOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { Balance, BalanceData } from '@/type/page';
import { getBalance } from '@/api/page';
import { useEcharts, usePieChart } from '@/hooks/index';

// 收益
const balance = ref<number>(0);
const balanceData = ref<BalanceData[]>([]);
const getBalanceData = async () => {
  const res: Balance = (await getBalance()) as Balance;
  balance.value = res.balance as number;
  balanceData.value = res.data as BalanceData[];
};
getBalanceData();
//echarts   收益
useEcharts();
// 表格
const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    state: 0,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    state: 0,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    state: 1,
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    state: 1,
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    state: 1,
  },
];
const columns = [
  {
    title: '订单号',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '商品名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '商品价格',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '商品数量',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
  },
];
// 饼图
usePieChart();
</script>
<style lang="less">
.index {
  padding: 20px 40px 0 40px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  > div:nth-child(1) {
    .balance {
      width: 1054px;
      height: 240px;
      opacity: 1;
      border-radius: 10px;
      background: rgba(62, 108, 255, 1);
      box-sizing: border-box;
      padding: 30px;
      .banner {
        color: #fff;
        width: 1022px;
        height: 50px;
        font-size: 22px;
        border-radius: 4px;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
        display: flex;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        .title {
          padding: 0 10px;
        }
        .num {
          font-size: 30px;
          font-weight: 600;
        }
      }
      .bottom {
        width: 100%;
        margin-top: 20px;
        height: 103px;
        opacity: 1;
        display: flex;
        align-items: center;
        .collection {
          margin: 0 20px;
          left: 267px;
          top: 240px;
          width: 214px;
          height: 103px;
          opacity: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          > div:nth-child(1) {
            font-size: 40px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 40px;
            color: rgba(255, 255, 255, 1);
            text-align: left;
            vertical-align: top;
          }
          > div:nth-child(2) {
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 14px;
            color: rgba(255, 255, 255, 1);
            text-align: left;
            vertical-align: top;
          }
          > div:nth-child(3) {
            display: flex;
            justify-content: space-between;
            div {
              font-size: 14px;
              font-weight: 400;
              letter-spacing: 0px;
              line-height: 0px;
              color: rgba(255, 255, 255, 1);
              text-align: left;
              vertical-align: top;
            }
          }
        }
      }
    }
    .earnings {
      width: 1054.08px;
      height: 280.94px;
      opacity: 1;
      border-radius: 19.58px;
      background: rgba(251, 251, 253, 1);
      margin: 20px 0;
    }
    .table {
      width: 1054px;
      height: 380px;
      opacity: 1;
      border-radius: 8px 8px, 0px, 0px;
      background: rgba(244, 247, 255, 1);
      box-shadow: inset 0px -1px 0px 0px rgba(235, 236, 242, 1);
      .table-header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        border-radius: 8px 8px, 0px, 0px;
        background: rgba(244, 247, 255, 1);
        box-shadow: inset 0px -1px 0px 0px rgba(235, 236, 242, 1);
        img {
          width: 80px;
          height: 30px;
          opacity: 1;
          border-radius: 4px;
          border: 1px solid rgba(223, 226, 233, 1);
        }
      }
      .ant-table-row {
        height: 30px;
        .tag-one {
          height: 30px;
          border-radius: 15px;
          padding: 0 10px;
          line-height: 30px;
          text-align: center;
          color: #333;
          width: 80px;
          background: rgba(255, 231, 230, 1);
          color: rgba(255, 71, 71, 1);
        }
        .tag-two {
          height: 30px;
          background: rgba(217, 254, 223, 1);
          color: rgba(85, 137, 75, 1);
          border-radius: 15px;
          padding: 0 10px;
          line-height: 30px;
          text-align: center;
          color: #333;
          width: 80px;
        }
      }
    }
  }
  > div:nth-child(2) {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .pie-hart {
      padding: 20px;
      width: 482px;
      height: 437px;
      opacity: 1;
      border-radius: 10px;
      background: linear-gradient(180deg, rgba(242, 246, 255, 1) 0%, rgba(237, 243, 255, 0.01) 100%);
    }
    .icon {
      height: 50px;
      width: 482px;
      background-color: #fff;
      img {
        height: 100%;
      }
    }
    .announcement {
      width: 482px;
      display: flex;
      justify-content: center;
      background: linear-gradient(176.87deg, rgba(242, 248, 255, 1) 0%, rgba(242, 248, 255, 0.01) 100%);
      .announcement-chi {
        width: 440px;
        height: 469px;
        opacity: 1;
        border-radius: 14px;
        background: rgba(255, 255, 255, 1);
        margin-top: 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        .announcement-item {
          margin-top: 20px;
          width: 427px;
          height: 62px;
          opacity: 1;
          > div:nth-child(1) {
            width: 427px;
            height: 24px;
            opacity: 1;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            > div:nth-child(1) {
              display: flex;
              div:nth-child(1) {
                width: 40px;
                height: 24px;
                opacity: 1;
                border-radius: 5px;
                background: rgba(229, 251, 255, 1);
                font-size: 13px;
                font-weight: 500;
                letter-spacing: -0.5px;
                line-height: 24px;
                color: rgba(35, 181, 210, 1);
                vertical-align: top;
                white-space: nowrap;
                line-height: 24px;
                text-align: center;
                margin-right: 10px;
              }
            }
            > div:nth-child(2) {
              color: rgba(153, 153, 153, 1);
            }
          }
          > div:nth-child(2) {
            padding: 0 20px;
            height: 24px;
            opacity: 1;
            /** 文本1 */
            font-size: 16px;
            font-weight: 400;
            letter-spacing: -0.5px;
            line-height: 24px;
            color: rgba(106, 106, 106, 1);
            text-align: left;
            vertical-align: top;
          }
        }
      }
    }
  }
}
</style>
