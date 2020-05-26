import React from 'react';
import { Button } from 'antd';
import { addCategory, updateCategory } from '../../../../api/category';
import Modal from '../../../../components/modal';
import styles from '../index.module.less';
import InputCell from '../../../../components/input-cell';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      body: {
        name: '',
        code: '',
      },
    };
  }

  changeItem(key, value) {
    const { body } = this.state;
    const bodyTemp = { ...body, ...{ [key]: value } };
    this.setState({ body: bodyTemp });
  }

  render() {
    const { visible, body } = this.state;
    const { refresh, children, record } = this.props;
    return (
      <>
        <span
          onClick={() => {
            if (record) {
              this.setState({
                body: {
                  name: record.categoryName,
                  code: record.categoryCode,
                },
              });
            } else {
              this.setState({
                body: {},
              });
            }
            this.setState({
              visible: true,
            });
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
          title={`${record ? '编辑' : '新增'}分类`}
          height="60%"
          visible={visible}
          okButtonProps={{
            disabled: !body.name || !body.code,
          }}
          onOk={async () => {
            const params = { ...body };
            if (record) {
              params.categoryId = record.categoryId;
            }
            const result = record ? await updateCategory(params) : await addCategory(params);
            if (result) {
              this.setState({
                visible: false,
                body: {},
              });
              refresh();
            }
          }}
          onCancel={() => {
            this.setState({ visible: false });
          }}
        >
          <InputCell
            title="分类名称"
            value={body.name}
            className={styles.inputRow}
            required
            onChange={(val) => {
              this.changeItem('name', val);
            }}
          />
          <InputCell
            title="分类编码"
            value={body.code}
            className={styles.inputRow}
            required
            onChange={(val) => {
              this.changeItem('code', val);
            }}
          />
        </Modal>
      </>
    );
  }
}

export default Index;
