import React from 'react';
import styles from './index.module.less';
import ImgUpload from '../img-upload';

const UploadCell = (props) => {
  const {
    className, required, title, value = [],
    maxLength = 1,
    imgUrl = [],
    onChange,
  } = props;

  return (
    <div
      className={[styles.row, className].join(' ')}
    >
      <div className={styles.left}>
        { required ? <span className={styles.red}>*</span> : ''}
        {title}：
      </div>
      <div className={styles.right}>
        <ImgUpload
          compressStatus
          imgUrl={imgUrl}
          onChange={onChange}
          maxLength={maxLength}
          fileObjs={value}
        />
      </div>
    </div>
  );
};

export default UploadCell;
