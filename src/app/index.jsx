import React from 'react';
import './index.less';

class App extends React.Component {
  componentDidMount() {
    console.log('App....');
    const bodyOverlay = document.getElementById('body-overlay');
    bodyOverlay.style.display = 'none';
  }


  render() {
    const { children } = this.props;
    return (
      <div className="app">
        {children}
      </div>
    );
  }
}


export default App;
