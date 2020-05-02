import React from 'react';
import { Popover } from 'antd';
import styles from './index.module.less';

class Index extends React.Component {
  render() {
    const {
      children, content, noPadding, hideArrow,
    } = this.props;
    return (
      <Popover
        {...this.props}
        content={content}
        overlayClassName={[
          styles.popover,
          noPadding && styles.noPadding,
          hideArrow && styles.noArrow,
        ].join(' ')}
      >
        {children}
      </Popover>
    );
  }
}

export default Index;
