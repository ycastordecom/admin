import { defineComponent } from 'vue';

//解析json成tsx
const renderJson = (json: any) => {
  return Object.keys(json).map((key) => {
    return (
      <div>
        <span>{key}:</span>
        <span>{json[key]}</span>
      </div>
    );
  });
};

export default defineComponent({
  name: 'OrderDetails',
  props: ['orderDetailList'],
  setup(props) {
    //设置表格列
    const columns = [
      {
        title: '商品名称',
        dataIndex: 'goodsName',
        key: 'goodsName',
      },
      {
        title: '商品缩略图',

        dataIndex: 'image',
        key: 'image',
      },
      {
        title: '商品价格',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '商品数量',
        dataIndex: 'num',
        key: 'num',
      },
      {
        title: '商品规格',
        dataIndex: 'specJson',
        key: 'specJson',
      },
      {
        title: '商品介绍',
        dataIndex: 'goodsIntroduce',
        key: 'goodsIntroduce',
      },
      {
        title: '商品总价',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
      },
    ];
    const baseImgUrl = process.env.VUE_APP_IMAGE_BASE_URL;
    return () => (
      <a-table columns={columns} pagination={false} data-source={props.orderDetailList}>
        {{
          bodyCell: ({ record, column }: any) => {
            if (column.dataIndex === 'image') {
              return (
                <a-table-cell>
                  <a-image width={102} height={102} src={baseImgUrl + record.image} alt={record.goodsName} />
                </a-table-cell>
              );
            }
            if (column.dataIndex === 'specJson') {
              return <a-table-cell>{renderJson(JSON.parse(record.specJson))}</a-table-cell>;
            }
            if (column.dataIndex === 'totalPrice') {
              return <a-table-cell>{record.num * record.price}</a-table-cell>;
            }
          },
        }}
      </a-table>
    );
  },
});
