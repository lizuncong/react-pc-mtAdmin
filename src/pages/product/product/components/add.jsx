import React from 'react';
import { Button } from 'antd';
import { addProduct, updateProduct } from '../../../../api/product';
import { getCategoryList } from '../../../../api/category';
import Modal from '../../../../components/modal';
import styles from '../index.module.less';
import InputCell from '../../../../components/input-cell';
import SelectCell from '../../../../components/select-cell';
import UploadCell from '../../../../components/upload-cell';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      categoryOptions: [],
      body: {
        name: undefined, // 商品名称
        price: undefined, // 商品价格
        productImage: [], // 商品图片，包括压缩的及原图
        imgUrl: [], // 图片链接
        description: '', // 商品描述
        categoryId: undefined, // 商品分类
      },
    };
  }

  createItems() {
    const { body } = this.state;
    return [
      {
        title: '商品分类',
        name: 'categoryId',
        type: 'select',
        optionsKey: 'categoryOptions',
        required: true,
        invalid: !body.categoryId,
      },
      {
        title: '商品名称',
        name: 'name',
        type: 'input',
        required: true,
        invalid: !body.name,
      },
      {
        title: '商品价格',
        name: 'price',
        type: 'input',
        inputType: 'number',
        required: true,
        invalid: !body.price,
      },
      {
        title: '商品图片',
        name: 'productImage',
        urlName: 'imgUrl',
        type: 'imgUpload',
        typeOf: 'array',
        required: true,
        maxLength: 5,
        invalid: !(body.imgUrl.length + body.productImage.length),
      },
      {
        title: '商品描述',
        name: 'description',
        type: 'input',
        invalid: !body.description,
      },
    ];
  }

  changeBodyItem(key, value) {
    const { body } = this.state;
    const bodyTemp = { ...body, ...{ [key]: value } };
    this.setState({ body: bodyTemp });
  }

  async onVisible() {
    const result = await getCategoryList({ pageNo: 0, pageSize: 20 });
    if (result) {
      this.setState({
        categoryOptions: result.data.rows.map((item) => ({
          name: item.categoryName, value: item.categoryId,
        })),
      });
    }
  }

  renderItem(item) {
    let itemView = '';
    const { body } = this.state;
    switch (item.type) {
      case 'select':
        const { [item.optionsKey]: options } = this.state;
        itemView = (
          <SelectCell
            className={styles.inputRow}
            title={item.title}
            key={item.name}
            options={options}
            value={body[item.name]}
            onChange={(value) => {
              this.changeBodyItem(item.name, value);
            }}
            required={item.required}
          />
        );
        break;
      case 'imgUpload':
        itemView = (
          <UploadCell
            title={item.title}
            imgUrl={body[item.urlName]}
            key={item.name}
            required={item.required}
            value={body[item.name]}
            maxLength={item.maxLength}
            onChange={(value, imgUrl) => {
              this.changeBodyItem(item.name, value);
              if (imgUrl) {
                this.changeBodyItem(item.urlName, imgUrl);
              }
            }}
          />
        );
        break;
      default:
        itemView = (
          <InputCell
            title={item.title}
            value={body[item.name]}
            type={item.inputType}
            key={item.name}
            className={styles.inputRow}
            required={item.required}
            onChange={(val) => {
              this.changeBodyItem(item.name, val);
            }}
          />
        );
    }
    return itemView;
  }

  render() {
    const { visible, body } = this.state;
    const { refresh, children, record } = this.props;
    const items = this.createItems();
    return (
      <>
        <span
          onClick={() => {
            if (record) {
              this.setState({
                body: {
                  name: record.categoryName,
                  price: record.productPrice, // 商品价格
                  productImage: [], // 商品图片
                  imgUrl: record.productImages || [],
                  description: record.description, // 商品描述
                  categoryId: record.categoryId, // 商品分类
                },
              });
            } else {
              this.setState({
                body: { imgUrl: [], productImage: [] },
              });
            }
            this.setState({
              visible: true,
            });
            this.onVisible();
          }}
        >
          {
            children
            || (
              <Button
                type="primary"
              >
                新增
              </Button>
            )
          }
        </span>
        <Modal
          title={`${record ? '编辑' : '新增'}商品`}
          height="60%"
          visible={visible}
          okButtonProps={{
            disabled: items.some((item) => item.invalid),
          }}
          onOk={async () => {
            const params = { ...body };
            params.productImage = body.productImage.map((item) => item.compressFile);
            if (record) {
              params.productId = record.productId;
              params.imgUrl = JSON.stringify(params.imgUrl.map((item) => item.split('api')[1]));
            }
            const result = record ? await updateProduct(params) : await addProduct(params);
            if (result) {
              this.setState({
                visible: false,
                body: { imgUrl: [], productImage: [] },
              });
              refresh();
            }
          }}
          onCancel={() => {
            this.setState({ visible: false });
          }}
        >
          {
            items.map((item) => this.renderItem(item))
          }
        </Modal>
      </>
    );
  }
}

export default Index;
