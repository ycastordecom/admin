import { defineComponent } from 'vue';
import style from './shopSubmit.module.less';
import icon from '@/assets/pay.png';

export default defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup() {
    return {};
  },
  render() {
    return (
      <>
        <a-modal footer={null} visible={this.modelValue} onCancel={() => this.$emit('update:modelValue', false)}>
          <div class={style.iconbg}>
            <img src={icon}></img>
            <div>
              <div>
                <div>支付金额:</div>
                <div>1元</div>
              </div>
              <div>
                <div>支付方式:</div>
                <div>易付宝-支付宝</div>
              </div>
            </div>
            <div>
              <div>
                <div>订单编号：FK22020915040399999935</div>
                <div>商品名称：发卡系统</div>
                <div>购买数量：1 </div>
              </div>
            </div>
            <div>
              <a-checkbox checked>
                点击同意<a>《用户协议》</a>
              </a-checkbox>
            </div>
            <div>
              <a-button class={style.confirmbtn}>确认付款</a-button>
              <a-button class={style.closebtn}>重新选择</a-button>
            </div>
            <div>商品问题请先和商家交流，如果处理结果不满意，请于订单当日23日点之前请联系平台客服，冲过时间认定订单没问题。</div>
          </div>
        </a-modal>
      </>
    );
  },
});
