import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  componentDidMount() {
    console.log('home...did...mount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('home...should..update...++++++++=========', this.props === nextProps);
    return this.props !== nextProps;
  }

  render() {
    console.log('render..Home...', this.props);
    return (
      <div className="container">
        <div>home</div>
      </div>
    );
  }
}

export default connect()(Home);
