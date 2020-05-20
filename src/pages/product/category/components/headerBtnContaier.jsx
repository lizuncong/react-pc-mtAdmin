import React from 'react';
import AddBtn from './add';
import styles from '../index.module.less';

class HeaderBtnContainer extends React.Component {
  render() {
    const { refresh } = this.props;
    return (
      <div className={styles.headerBtnContainer}>
        <AddBtn refresh={refresh} />
      </div>
    );
  }
}

export default HeaderBtnContainer;
