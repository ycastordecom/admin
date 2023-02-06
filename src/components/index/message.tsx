import { defineComponent, ref } from 'vue';
import { CloseOutlined, SoundTwoTone } from '@ant-design/icons-vue';
import style from './message.module.less';
export default defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup() {
    const message = ref<Boolean[]>([true]);
    const changeMessage = () => {
      message.value[0] = !message.value[0];
    };
    return {
      message,
      changeMessage
    };
  },
  render() {
    return (
      <>
        <a-drawer visible={this.modelValue} onClose={() => this.$emit('update:modelValue', false)} class="custom-class" width="460px" title="消息" placement="right">
          <div>
            {{
              extra: () => <CloseOutlined onClick={() => this.$emit('update:modelValue', false)} />,
            }}
            <div class="content">
              <div class={style.title}>消息列表</div>
            </div>
            <div class={style.item}>
              <div>
                <div>
                  <SoundTwoTone />
                  <div>系统消息</div>
                </div>
                <div>2022-08-11 09:15:54</div>
              </div>
              {
                !this.message[0] ?
                  <div class={style.sender}>
                    <div>发件人:<span>xxxxx</span></div>
                    <div onClick={this.changeMessage} >关闭详情</div>
                  </div> : <div></div>
              }
              <div>
                <div class={this.message[0] ? style.message : '111'} >11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
                {
                  this.message[0] ? <div onClick={this.changeMessage} >查看详情</div> : <div></div>
                }
              </div>
            </div>
          </div>
        </a-drawer>
      </>
    );
  },
});
