import React from 'react';
import './index.less';

class App extends React.Component {
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
