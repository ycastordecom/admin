import { defineComponent } from 'vue';
import style from './orderEdit.module.less';

export default defineComponent({
  name: 'OrderEdit',
  props: ['modelValue', 'orderEditData'],
  emit: ['update:modelValue', 'update:orderEditData', 'change'],
  setup(props, { emit }) {
    const afterVisibleChange = () => {};
    const submit = () => {
      emit('change', props.orderEditData);
      emit('update:modelValue', false);
    };
    return () => (
      <a-drawer visible={props.modelValue} afterVisibleChange={afterVisibleChange} onClose={() => emit('update:modelValue', false)} class={style.bg} width="500" title="11" placement="right">
        <a-form>
          <a-form-item label="运单号">
            <a-input v-model={[props.orderEditData.waybillNo, 'value']} />
          </a-form-item>
          <a-form-item label="收件人姓名">
            <a-input v-model={[props.orderEditData.receiverName, 'value']} />
          </a-form-item>
          <a-form-item label="收件人电话">
            <a-input v-model={[props.orderEditData.phone, 'value']} />
          </a-form-item>
          <a-form-item label="收件人地址">
            <a-input v-model={[props.orderEditData.address, 'value']} />
          </a-form-item>
        </a-form>
        {/* 提交 */}
        <a-button type="primary" class={style.paymentstatusno} onClick={submit}>
          提交
        </a-button>
      </a-drawer>
    );
  },
});
