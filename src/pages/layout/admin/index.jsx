import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

  addTestCount() {
    const { testCount } = this.state;
    this.setState({
      testCount: testCount + 1,
    });
    if (testCount < 5) {
      this.setInter();
    }
  }

  setInter() {
    setTimeout(() => {
      this.addTestCount();
    }, 1000);
  }

  componentDidMount() {
    console.log('admin...did...mount....');
    this.setInter();
  }

  render() {
    const {
      children, user, history, changeMoreValue,
      nav,
    } = this.props;
    const { testCount } = this.state;
    console.log('render...admin....', testCount);
    return (
      <Common>
        <NavLeft changeMoreValue={changeMoreValue} />
        <div
          className={styles.main}
          onClick={() => {
            this.setState({
              testCount: testCount + 1,
            });
          }}
        >
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
