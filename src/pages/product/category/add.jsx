import React from 'react';
import { Button } from 'antd';
import Modal from '../../../components/modal';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  render() {
    const { visible } = this.state;
    return (
      <>
        <Button
          type="primary"
          onClick={() => {
            this.setState({
              visible: true,
            });
          }}
        >
          新增
        </Button>
        <Modal
          visible={visible}
          onCancel={() => {
            this.setState({ visible: false });
          }}
        >
          <div style={{ width: '2000px', height: '1000px' }}>新增弹框</div>
        </Modal>
      </>
    );
  }
}

export default Index;
