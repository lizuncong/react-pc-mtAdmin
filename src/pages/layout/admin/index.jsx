import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { changeMoreValue } from './creators';
import NavLeft from './navLeft';
import Header from './header';
import styles from './index.module.less';
import Common from '../common';
import mapDispatchToProps from './actions';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testCount: 0,
    };
  }


  render() {
    const {
      children, user, history,
      changeMoreValue,
      nav,
    } = this.props;
    console.log('render...admin....');
    return (
      <Common>
        <NavLeft nav={nav} changeMoreValue={changeMoreValue} />
        <div className={styles.main}>
          <Header nav={nav} user={user} history={history} />
          <div
            onClick={() => {
              changeMoreValue({
                count: nav.count + 1,
              });
            }}
          >
            Nav..{nav.count}
          </div>
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
