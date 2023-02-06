import { defineComponent } from 'vue';
import style from './time.module.less'

export default defineComponent({
    setup() {
        const day = '255';
        const hour = '14';
        const minute = '50';
        return {
            day: day.split(''),
            hour: hour.split(''),
            minute: minute.split('')
        }
    },
    render() {
        return <div>
            <div class={style.title} >运行时间</div>
            <div class={style.content}>
                {
                    this.day.map((item) => {
                        return <div class={style.time}>{item}</div>
                    })
                }
                < div class={style.unit}>天</div>
                {
                    this.hour.map((item) => {
                        return <div class={style.time}>{item}</div>
                    })
                }
                < div class={style.unit}>时</div>
                {
                    this.minute.map((item) => {
                        return <div class={style.time}>{item}</div>
                    })
                }
                < div class={style.unit}>分</div>
            </div>
        </div >
    }
});