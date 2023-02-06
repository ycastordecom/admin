import { defineComponent, ref } from 'vue';
import style from './makeUpCollection.module.less';
import makeUp from '@/assets/makeUp.png';
import { ExclamationCircleOutlined, ArrowUpOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';

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
        const fileList = ref([]);
        const loading = ref<boolean>(false);
        const imageUrl = ref<string>('');

        const handleChange = (info: { file: { status: string; originFileObj: Blob; }; }) => {
            if (info.file.status === 'uploading') {
                loading.value = true;
                return;
            }
            if (info.file.status === 'done') {
                // Get this url from response in real world.
                getBase64(info.file.originFileObj, (base64Url: string) => {
                    imageUrl.value = base64Url;
                    loading.value = false;
                });
            }
            if (info.file.status === 'error') {
                loading.value = false;
                message.error('upload error');
            }
        };

        const beforeUpload = (file: { type: string; size: number; }) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('You can only upload JPG file!');
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Image must smaller than 2MB!');
            }
            return isJpgOrPng && isLt2M;
        };

        return {
            fileList,
            loading,
            imageUrl,
            handleChange,
            beforeUpload,
        };
    },
    render() {
        return <>
            <a-modal dialogClass={style.bg} closable={false} footer={null} visible={this.modelValue} onCancel={() => this.$emit('update:modelValue', false)}>
                <div>
                    <img class={style.title} src={makeUp}></img>
                    <div class={style.prompt}>
                        <ExclamationCircleOutlined class={style.icon} />
                        <div>慎重填写，再三确认，填写后不可修改.如需修改请联系平台客服。</div>
                    </div>
                    <a-form>
                        <a-form-item label="收款类型">
                            <a-select value="dynamicValidateForm" options={[
                                { label: 'Beijing', value: 'Beijing' },
                                { label: 'Shanghai', value: 'Shanghai' },
                            ]} />
                        </a-form-item>
                        <a-form-item label="支付宝姓名">
                            <a-input value="" placeholder={'请输入支付宝认证姓名'} />
                        </a-form-item>
                        <a-form-item label="收款账户">
                            <a-input value="" placeholder={'请填写支付宝收款账号'} />
                        </a-form-item>
                        <a-form-item label="收款二维码">
                            <a-upload
                                file-list={this.fileList}
                                name="avatar"
                                list-type="picture-card"
                                class="avatar-uploader"
                                show-upload-list={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                before-upload={this.beforeUpload}
                                onChange={this.handleChange}
                            >
                                {

                                    this.imageUrl ? <img v-if="imageUrl" src={this.imageUrl} alt="avatar" />
                                        :
                                        <div>
                                            {
                                                this.loading ? <LoadingOutlined /> : <ArrowUpOutlined />
                                            }
                                        </div>
                                }
                            </a-upload>
                            <div class={style.btns}>
                                <button onClick={() => this.$emit('update:modelValue', false)} >取消</button>
                                <button onClick={() => this.$emit('update:modelValue', false)} >确定</button>
                            </div>
                        </a-form-item>
                    </a-form>
                </div>
            </a-modal>
        </>
    }
});