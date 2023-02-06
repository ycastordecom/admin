import { defineComponent } from 'vue';
import style from './addPopWindow.module.less'
import { CheckCircleFilled } from '@ant-design/icons-vue';

// eslint-disable-next-line no-unused-vars
function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
}
export default defineComponent({
    props: ['modelValue'],
    emits: ['update:modelValue'],
    setup() {


        return {

        };
    },
    render() {
        return <>
            <a-modal footer={null} visible={this.modelValue} onCancel={() => this.$emit('update:modelValue', false)}>
                <div>
                    <div class={style.icon}>
                        <CheckCircleFilled />
                    </div>
                    <div class={style.bottom}>
                        <div>
                            共1张卡密，成功添加1张卡密
                        </div>
                        <div>
                            页面自动 跳转 等待时间：3
                        </div>
                    </div>
                </div>
            </a-modal>
        </>
    }
});