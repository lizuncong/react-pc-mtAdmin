import React from 'react';
import { Button } from 'antd';
import styles from './index.module.less';

class HeaderBtnContainer extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className={styles.headerBtnContainer}>
        <Button
          type="primary"
          onClick={() => {
            history.push({
              pathname: '/store/detail',
              state: {
                storeId: 123,
              },
            });
          }}
        >
          新增
        </Button>
      </div>
    );
  }
}

export default HeaderBtnContainer;
