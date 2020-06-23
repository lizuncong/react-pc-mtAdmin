import React from 'react';
import styles from './index.module.less';
import EditProduct from '../add';
import DelProduct from '../delete';
import UpdateStatus from '../updateStatus';

const Card = (props) => {
  const { info, refresh } = props;
  const img = info.productImages ? info.productImages[0] : '';
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img src={img} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.productName}>
          {info.productName}
        </div>
        <div className={styles.productPrice}>
          <span>{info.productPrice}</span>¥
        </div>
        <div>{info.categoryName}</div>
        <div>{info.productStatusStr}</div>
        <div>{info.createdAt}</div>
        <div>{info.description}</div>
      </div>
      <div className={styles.operate}>
        <div className={styles.bottom}>
          <UpdateStatus
            record={info}
            refresh={refresh}
          />
          <EditProduct
            record={info}
            refresh={refresh}
          >
            编辑
          </EditProduct>
          <DelProduct
            productId={info.productId}
            refresh={refresh}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
