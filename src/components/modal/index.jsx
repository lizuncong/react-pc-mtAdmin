import React from 'react';
import { Modal } from 'antd';
import styles from './index.module.less';

class Index extends React.Component {
  render() {
    const {
      children, cancelText, okText, height,
    } = this.props;
    const stylObj = {
      paddingBottom: '0',
      maxHeight: '80%',
      overflow: 'hidden',
    };
    if (height) {
      stylObj.height = height;
    }
    return (
      <Modal
        {...this.props}
        bodyStyle={{
          flex: 1,
          padding: '0 24px',
          overflow: 'auto',
        }}
        style={stylObj}
        wrapClassName={styles.modalWrapClass}
        okText={okText || '确认'}
        cancelText={cancelText || '取消'}
      >
        { children }
      </Modal>
    );
  }
}

export default Index;
