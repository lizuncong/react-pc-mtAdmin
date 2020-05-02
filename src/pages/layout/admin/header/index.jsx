import React from 'react';
import styles from './index.module.less';
import Popover from '../../../../components/popover';
import ScreenFull from '../../../../components/screen-full';
import { logout } from '../../../../api/user';
import './header.less';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  renderPopoverCard() {
    const { user, history } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img className={styles.avatar} src={user.avatar} alt="" />
          <div className={styles.infoCardText}>
            <div className={styles.userName}>{user.userName}</div>
            <div className={styles.phone}>{user.phone}</div>
          </div>
        </div>
        <div className={styles.dropDownDivider} />
        <div className={styles.dropDownItem}>基本信息</div>
        <div className={styles.dropDownItem}>功能2</div>
        <div className={styles.dropDownDivider} />
        <div className={styles.dropDownItem}>功能3</div>
        <div className={styles.dropDownItem}>功能4</div>
        <div className={styles.dropDownItem}>功能5</div>
        <div className={styles.dropDownDivider} />
        <div
          className={[styles.dropDownItem, styles.logout].join(' ')}
          onClick={async () => {
            const result = await logout();
            if (!result) return;
            const hash = window.location.hash.replace('#', '');
            const url = `/login?redirect=${hash}`;
            history.replace(url);
          }}
        >
          退出
        </div>
      </div>
    );
  }

  render() {
    const { user } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.breadcrumb}>menuName</div>
        </div>
        <div className={styles.right}>
          <div className={styles.navItem}>
            <ScreenFull />
          </div>
          <Popover
            noPadding
            hideArrow
            placement="topRight"
            content={this.renderPopoverCard()}
          >
            <img
              className={styles.avatar}
              src={user.avatar}
              alt=""
            />
          </Popover>
        </div>
      </div>
    );
  }
}

export default Header;
