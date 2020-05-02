import React from 'react';
import styles from './index.module.less';
import './header.less';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { user } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.breadcrumb}>menuName</div>
        </div>
        <div className={styles.right}>
          <span>欢迎，{user.userName}</span>
          <span className="logout-btn" href="#">退出</span>
        </div>
      </div>
    );
  }
}

export default Header;
