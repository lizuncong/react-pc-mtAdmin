import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavLeft from './navLeft/connect';
import Header from './header';
import styles from './index.module.less';
import Common from '../common';

class Index extends React.Component {
  render() {
    const { children, user, history } = this.props;
    return (
      <Common>
        <NavLeft />
        <div className={styles.main}>
          <Header user={user} history={history} />
          {children}
          {/* <Footer /> */}
        </div>
      </Common>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.app.user,
});

export default connect(mapStateToProps)(withRouter(Index));
