import React from 'react';
import styles from './index.module.less';
import { getStoreList } from './api';

export default class Login extends React.Component {
  async componentDidMount() {
    const res = await getStoreList({
      username: 'lzc',
      password: '123456',
    });
    if (res.code === 0) {
      console.log(res);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div>登录页面</div>
      </div>
    );
  }
}
