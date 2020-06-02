import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { deleteProduct } from '../../../../api/product';

const DelProduct = ({ productId, refresh }) => {
  console.log('del..');

  return (
    <span
      onClick={() => {
        Modal.confirm({
          title: '确认删除商品？',
          icon: <ExclamationCircleOutlined />,
          okText: '确认',
          cancelText: '取消',
          onOk: async () => {
            const result = await deleteProduct({ productId });
            if (result) refresh();
          },
        });
      }}
    >
      删除
    </span>
  );
};

export default DelProduct;
