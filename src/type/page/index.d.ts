export interface BalanceData {
  id: number;
  income: number;
  pens: number;
  sell: number;
}
//  首页 余额 信息
export interface Balance {
  balance: number;
  data: Array<BalanceData>;
}
// 利润统计
export interface Profit {
  xAxisData: Array<string>;
  waterData: Array<number>;
  profitData: Array<number>;
}
// 利润接口
export interface ProfitData {
  code: number;
  data: Profit;
  msg: string;
}
