import { defineComponent, ref } from 'vue';
import style from './addSpecifications.module.less';
import { message } from 'ant-design-vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { imageType } from '@/utils/';
export default defineComponent({
  name: 'AddSpecifications',
  props: ['modelValue', 'specifications'],
  emits: ['update:modelValue', 'update:specifications'],
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
    //是否正在添加规格
    const isAddSpecifications = ref<boolean>(false);
    //是否正在添加规格值
    const isAddSpecificationsValue = ref<boolean>(false);
    //规格数据
    const specificationsData = ref<any[]>([]);
    //表格头部
    const columns = ref([
      {
        title: '规格头',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '规格值',
        dataIndex: 'value',
        key: 'value',
      },
    ]);
    //切换添加状态
    const toggleAddSpecifications = () => {
      isAddSpecifications.value = !isAddSpecifications.value;
    };
    //添加规格的规格名称
    const addSpecificationsData = ref<string>('');
    //规格值数组
    const addSpecificationsValueData = ref<string[]>([]);
    //添加规格的规格值
    const addSpecificationsValue = ref<string>('');
    //生成sku价格前的状态
    const createSkuPriceTableStatus = ref<boolean>(false);
    //向规格中添加规格名称
    const addSpecifications = () => {
      if (specificationsData.value.length === 3) {
        message.error('最多只能添加三个规格');
        addSpecificationsData.value = '';
        addSpecificationsValueData.value = [];
        return toggleAddSpecifications();
      }
      specificationsData.value.push({
        title: addSpecificationsData.value,
        value: addSpecificationsValueData.value,
      });
      addSpecificationsData.value = '';
      addSpecificationsValueData.value = [];
      toggleAddSpecifications();
    };
    //切换添加规格值状态
    const addSpecificationsValueTab = () => {
      isAddSpecificationsValue.value = !isAddSpecificationsValue.value;
    };
    // 添加规格值
    const addSpecificationsValueClick = () => {
      if (addSpecificationsValue.value === '') return addSpecificationsValueTab();
      addSpecificationsValueData.value.push(addSpecificationsValue.value);
      addSpecificationsValue.value = '';
      addSpecificationsValueTab();
    };

    //生成json
    const json = (arr: any) => {
      const r: any = [];
      const max = arr.length - 1;
      const helper = (arr: any, i: any, result: any) => {
        for (let j = 0, l = arr[i].length; j < l; j++) {
          const x = result.slice(0);
          x.push(arr[i][j]);
          if (i === max) {
            r.push(x);
          } else {
            helper(arr, i + 1, x);
          }
        }
      };
      helper(arr, 0, []);
      return r;
    };
    //生成sku价格表
    const createSkuPriceTable = () => {
      //判断是否有规格
      if (specificationsData.value.length === 0) {
        message.error('请先添加规格');
        return;
      }

      const baseColumns: any = [];
      const baseData: any = [];
      specificationsData.value.forEach((item) => {
        baseColumns.push({
          title: item.title,
          dataIndex: item.title,
          key: item.title,
        });
      });
      baseColumns.push({
        title: '价格',
        dataIndex: 'price',
        key: 'price',
      });
      baseColumns.push({
        title: '库存',
        dataIndex: 'stock',
        key: 'stock',
      });
      baseColumns.push({
        title: '规格缩略图',
        dataIndex: 'image',
        key: 'image',
      });

      const arr: any = [];

      specificationsData.value.forEach((item: any, index) => {
        arr[index] = item.value;
      });
      const result = json(arr);
      //向表格中添加数据
      result.forEach((item: any, index: number) => {
        const obj: any = {};
        specificationsData.value.forEach((item2: any, index: number) => {
          obj[item2.title] = item[index];
        });
        obj.price = 0;
        obj.stock = 0;
        obj.image = '';
        obj.index = index;
        baseData.push(obj);
      });
      /**
       * TODO: 生成sku价格表，图片上传返回的显示问题
       */
      console.log(baseData);

      //赋值到表格中
      columns.value = baseColumns;
      specificationsData.value = baseData;

      //关闭添加规格的状态
      createSkuPriceTableStatus.value = true;
    };

    //图片上传
    const fileList = ref<any[]>([]);
    const baseUrl = process.env.VUE_APP_BASE_URL;
    const baseImgUrl = process.env.VUE_APP_IMAGE_BASE_URL;
    const loading = ref<boolean>(false);
    // imageUrl.value = baseImgUrl + res.data;
    const beforeUpload = (file: any) => {
      //png jpg jpeg webp
      const isJPG = imageType.map((item) => file.type.includes(item)).includes(true);
      if (!isJPG) {
        message.error('You can only upload JPG/PNG/WEBP file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      loading.value = true;
      return isJPG && isLt2M;
    };

    const baseRecord: any = {};
    //获取索引
    const updateClick = (record: any) => {
      baseRecord.value = record;
    };
    const handleSuccess = (res: any) => {
      //查找位置
      const index = baseRecord.value.index;
      //修改json中的数据
      specificationsData.value[index].image = res.data;
      if (res.code === 200) {
        message.success('上传成功');
        loading.value = false;
      }
    };

    //确认提交规格
    const upSpecifications = () => {
      //判断是否有规格
      if (specificationsData.value.length === 0) {
        message.error('请先添加规格');
        return;
      }
      //判断图片是否为空
      const isImage = specificationsData.value.map((item) => item.image).includes('');
      if (isImage) {
        message.error('规格缩略图不能为空');
        return;
      }
      //调整数据格式
      const arr: any = [];
      specificationsData.value.forEach((item: any) => {
        const obj: any = {};
        obj.stock = item.stock;
        obj.premium = item.price;
        obj.image = item.image;
        //删除多余的属性
        delete item.stock;
        delete item.price;
        delete item.image;
        delete item.index;
        obj.specJson = JSON.stringify(item);
        arr.push(obj);
      });
      emit('update:specifications', arr);
      //重置数据
      specificationsData.value = [];
      columns.value = [
        {
          title: '规格',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: '规格值',
          dataIndex: 'value',
          key: 'value',
        },
      ];
      createSkuPriceTableStatus.value = false;
      toggleAddSpecifications();
      //关闭抽屉
      emit('update:modelValue', false);
    };
    return {
      addSpecificationsData,
      isAddSpecifications,
      toggleAddSpecifications,
      isAddSpecificationsValue,
      specificationsData,
      addSpecifications,
      addSpecificationsValue,
      addSpecificationsValueTab,
      addSpecificationsValueClick,
      addSpecificationsValueData,
      columns,
      createSkuPriceTable,
      createSkuPriceTableStatus,
      fileList,
      baseUrl,
      baseImgUrl,
      loading,
      beforeUpload,
      handleSuccess,
      upSpecifications,
      updateClick,
    };
  },
  render() {
    return (
      <a-drawer visible={this.modelValue} onClose={() => this.$emit('update:modelValue', false)} width="100%" class="custom-class" title="添加规格" placement="right">
        {!this.isAddSpecifications ? (
          <>
            <a-table dataSource={this.specificationsData} bordered columns={this.columns} rowKey="title" pagination={false}>
              {{
                bodyCell: ({ column, record }: any) => {
                  if (column.key === 'price') {
                    return <a-input-number v-model={[record.price, 'value']} />;
                  }
                  if (column.key === 'stock') {
                    return <a-input-number v-model={[record.stock, 'value']} />;
                  }
                  if (column.key === 'image') {
                    return (
                      <div
                        onClick={() => {
                          this.updateClick(record);
                        }}
                      >
                        <a-upload
                          file-list={this.fileList}
                          before-upload={this.beforeUpload}
                          onSuccess={this.handleSuccess}
                          name="file"
                          list-type="picture-card"
                          class="avatar-uploader"
                          action={this.baseUrl + '/upload/uploadImg'}
                        >
                          {record.image ? (
                            <img class={style.uploadimage} src={this.baseImgUrl + record.image} alt="image" />
                          ) : (
                            <div>
                              {this.loading ? <LoadingOutlined /> : <PlusOutlined />}
                              <div class="ant-upload-text">点击上传</div>
                            </div>
                          )}
                        </a-upload>
                      </div>
                    );
                  }
                  if (column.key === 'value') {
                    return record.value.map((item: any) => {
                      return <a-tag color="blue">{item}</a-tag>;
                    });
                  }
                  //默认返回
                  return <a-table-cell>{record[column.dataIndex]}</a-table-cell>;
                },
              }}
            </a-table>
            {!this.createSkuPriceTableStatus ? (
              <>
                <a-button type="primary" onClick={this.toggleAddSpecifications} class={style.addbth} block>
                  添加规格
                </a-button>
                <a-button type="primary" onClick={this.createSkuPriceTable} class={style.addbth} block>
                  生成sku价格表
                </a-button>
              </>
            ) : (
              <a-button type="primary" onClick={this.upSpecifications} class={style.addbth} block>
                确认提交规格
              </a-button>
            )}
          </>
        ) : (
          <>
            <a-input class={style.input} v-model={[this.addSpecificationsData, 'value']} placeholder="请输入要添加的规格标题" />
            <div class={style.addvaluegroup}>
              {this.addSpecificationsValueData.map((item: string) => {
                return (
                  <a-tag class={style.addtag} color="#87d068">
                    {item}
                  </a-tag>
                );
              })}
              {!this.isAddSpecificationsValue ? (
                <>
                  <a-button type="primary" onClick={this.addSpecificationsValueTab} class={style.addbth}>
                    点击添加规格值
                  </a-button>
                </>
              ) : (
                <>
                  <a-input v-model={[this.addSpecificationsValue, 'value']} onBlur={this.addSpecificationsValueClick} class={style.addValue} placeholder="规格值" />
                </>
              )}
            </div>
            <a-button type="primary" onClick={this.addSpecifications} class={style.addbth} block>
              确认添加
            </a-button>
          </>
        )}
      </a-drawer>
    );
  },
});
