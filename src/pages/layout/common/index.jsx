import React from 'react';
import { connect } from 'react-redux';
import styles from './index.module.less';
import mapDispatchToProps from './actions';

class Common extends React.Component {
  componentDidMount() {
    const { getUserInfo } = this.props;
    const user = getUserInfo();
    user.then((res) => {
      console.log('common...', res);
    });
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
