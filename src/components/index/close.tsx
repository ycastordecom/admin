import { defineComponent } from 'vue';
import style from './close.module.less'
export default defineComponent({
    props: ['modelValue'],
    emits: ['update:modelValue'],
    setup() {


    },
    render() {
        return <>
            {
                this.modelValue ?
                    <div class={style.bg} onClick={() => this.$emit('update:modelValue', false)} >
                        <router-link to="/uppwd">修改密码</router-link>
                        <router-link to="/login">退出登录</router-link>
                    </div>
                    :
                    ''
            }
        </>
    }
})