import React from 'react';
import AddBtn from './add';
import styles from './index.module.less';

class HeaderBtnContainer extends React.Component {
  render() {
    return (
      <div className={styles.headerBtnContainer}>
        <AddBtn />
      </div>
    );
  }
}

export default HeaderBtnContainer;
