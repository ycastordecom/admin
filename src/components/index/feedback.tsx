import { defineComponent, ref } from 'vue';
import style from './feedback.module.less';
import type { UploadProps } from 'ant-design-vue';
import subScss from '@/assets/scss.png'
function getBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default defineComponent({
    props: ['modelValue'],
    emits: ['update:modelValue'],
    setup() {
        const value = ref<string>('');
        const previewVisible = ref(false);
        const previewImage = ref('');
        const previewTitle = ref('');
        const fileList = ref<UploadProps['fileList']>([
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-xxx',
                percent: 50,
                name: 'image.png',
                status: 'uploading',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-5',
                name: 'image.png',
                status: 'error',
            },
        ]);
        const feedbackState = ref<boolean>(false)
        // 状态
        //点击反馈
        const feedbackClick = () => {
            feedbackState.value = true;
        }
        const handleCancel = () => {
            previewVisible.value = false;
            previewTitle.value = '';
        };

        const handlePreview = async (file: { url: string; preview: string; originFileObj: File; name: any; }) => {
            if (!file.url && !file.preview) {
                file.preview = (await getBase64(file.originFileObj)) as string;
            }
            previewImage.value = file.url || file.preview;
            previewVisible.value = true;
            previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
        };
        return {
            feedbackClick,
            feedbackState,
            value,
            previewVisible,
            previewImage,
            fileList,
            fileListLength: fileList.value?.length || 0,
            handleCancel,
            handlePreview,
            previewTitle,
        }
    },
    render() {
        return (<>
            <a-drawer
                visible={this.modelValue}
                onClose={() => this.$emit('update:modelValue', false)}
                class="custom-class"
                width="460px"
                title="反馈"
                placement="right">
                {
                    !this.feedbackState ? <div>
                        <div class={style.content}>
                            <div>问题类型</div>
                        </div>
                        <div class={style.types}>
                            <div>功能异常</div>
                            <div>产品建议</div>
                            <div>其他</div>
                        </div>
                        <a-textarea class={style.textarea} value={this.value} placeholder="Basic usage" rows={8} />
                        <div class={style.upload}>
                            <div>问题相关截图</div>
                        </div>
                        <div class={style.clearfix}>
                            <a-upload
                                file-list={this.fileList}
                                action="/upload"
                                list-type="picture-card"
                                preview={this.handlePreview}
                            >
                                {
                                    this.fileListLength >= 8 ? null :
                                        <div v-if="fileList.length < 8">
                                            <plus-outlined />
                                            <div style="margin-top: 8px">Upload</div>
                                        </div>
                                }
                            </a-upload>
                            <a-modal visible={this.previewVisible} title={this.previewTitle} footer={null} cancel="handleCancel">
                                <img alt="example" style="width: 100%" src={this.previewImage} />
                            </a-modal>
                        </div>
                        <button class={style.submit} onClick={this.feedbackClick} >提交反馈</button>
                    </div>
                        :
                        <div class={style.success}>
                            <img src={subScss} class={style.sbBscss} alt="" />
                            <div>您的反馈将是平台产品优化最重要的声音</div>
                            <div>
                                反馈成功
                            </div>
                            <div>
                                <button onClick={() => {
                                    this.feedbackState = false;
                                }} >再次反馈</button>
                                <button onClick={() => {
                                    this.$emit('update:modelValue', false)
                                }}>
                                    完成反馈
                                </button>
                            </div>
                        </div>
                }
            </a-drawer>
        </>)
    }
});