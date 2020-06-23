import React from 'react';
import { updateProduct } from '../../../../api/product';

const UpdateStatus = ({ record, refresh }) => (
  <span
    onClick={async () => {
      const result = await updateProduct({
        productId: record.productId,
        status: record.productStatus === '1' ? '2' : '1',
      });
      if (result) {
        refresh();
      }
    }}
  >
    { record.productStatus === '1' ? '下架' : '上架'}
  </span>
);

export default UpdateStatus;
