import React from 'react';
import styles from './index.module.less';

class Register extends React.Component {
  render() {
    return (
      <div
        className={styles.container}
      >
        <div>
          <input type="text" placeholder="手机号" />
          <input type="text" placeholder="用户名" />
          <input type="text" placeholder="门店名称" />
          <input type="text" placeholder="门店地址" />
        </div>
      </div>
    );
  }
}

export default Register;
