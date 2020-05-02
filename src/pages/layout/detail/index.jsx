import React from 'react';
import Common from '../common';

class DetailLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Common>
        {children}
      </Common>
    );
  }
}

export default DetailLayout;
