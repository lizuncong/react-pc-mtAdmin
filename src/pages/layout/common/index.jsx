import React from 'react';
import { connect } from 'react-redux';
import styles from './index.module.less';
import mapDispatchToProps from './actions';

class Common extends React.Component {
  componentDidMount() {
    const { getUserInfo } = this.props;
    getUserInfo();
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Common);
