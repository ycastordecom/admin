import { defineComponent } from 'vue';
import { SpecList } from '@/type/page/Merchandise';
import style from './goodSpecificationsTable.module.less';

export default defineComponent({
  name: 'GoodSpecificationsTable',
  props: ['specList'],
  emit: ['update:specList', 'editSpec'],
  setup(props: { specList: SpecList[] }, { emit }) {
    const baseImgUrl = process.env.VUE_APP_IMAGE_BASE_URL;

    const columns: any = [];
    //添加未知sku变量
    Object.keys(JSON.parse(props.specList[0].specJson)).map((item) => {
      columns.push({
        title: item,
        dataIndex: item,
        key: item,
      });
    });
    //添加价格和库存
    columns.push({
      title: 'id',
      dataIndex: 'specId',
      key: 'specId',
    });
    columns.push({
      title: '附加价格',
      dataIndex: 'premium',
      key: 'premium',
    });
    columns.push({
      title: '库存',
      dataIndex: 'stock',
      key: 'stock',
    });
    columns.push({
      title: '规格缩略图',
      dataIndex: 'image',
      key: 'image',
    });
    //表格数据
    const data: any = [];
    props.specList.map((item) => {
      data.push({
        specId: item.specId,
        ...JSON.parse(item.specJson),
        premium: item.premium,
        stock: item.stock,
        image: item.image,
      });
    });

    //提交修改的那条数据
    const submit = (record: any) => {
      console.log(record);

      emit('update:specList', record);
      emit('editSpec', record);
    };

    return () => (
      <a-table bordered={true} dataSource={data} columns={columns}>
        {{
          bodyCell: ({ column, record }: any) => {
            if (column.dataIndex === 'image') {
              return (
                <div>
                  <a-image width={102} height={102} src={baseImgUrl + record.image} preview={false} />
                </div>
              );
            }
            if (column.dataIndex === 'premium') {
              return (
                <a-input-number
                  onBlur={() => {
                    submit(record);
                  }}
                  class={style.inp}
                  v-model={[record.premium, 'value']}
                />
              );
            }
            if (column.dataIndex === 'stock') {
              return (
                <a-input-number
                  onBlur={() => {
                    submit(record);
                  }}
                  class={style.inp}
                  v-model={[record.stock, 'value']}
                />
              );
            }
          },
        }}
      </a-table>
    );
  },
});
