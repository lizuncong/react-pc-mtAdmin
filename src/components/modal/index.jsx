import React from 'react';
import { Modal } from 'antd';

class Index extends React.Component {
  render() {
    const { children, cancelText, okText } = this.props;
    return (
      <Modal
        {...this.props}
        okText={okText || '确认'}
        cancelText={cancelText || '取消'}
      >
        { children }
      </Modal>
    );
  }
}

export default Index;
