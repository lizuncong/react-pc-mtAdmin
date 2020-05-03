import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavLeft from './navLeft';
import Header from './header';
import styles from './index.module.less';
import Common from '../common';
import mapDispatchToProps from './actions';

class Index extends React.Component {
  render() {
    const {
      children, user, history, changeMoreValue,
      nav,
    } = this.props;
    return (
      <Common>
        <NavLeft changeMoreValue={changeMoreValue} />
        <div className={styles.main}>
          <Header nav={nav} user={user} history={history} />
          {children}
          {/* <Footer /> */}
        </div>
      </Common>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.app.user,
  nav: state.nav,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
