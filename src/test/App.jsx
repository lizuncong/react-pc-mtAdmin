import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const bodyOverlay = document.getElementById('body-overlay');
    bodyOverlay.style.display = 'none';
  }


  render() {
    const { children } = this.props;

    return (
      <div className="app">
        <ul>
          <li><Link to="/nav1">子路由不会渲染的写法</Link></li>
          <li><Link to="/nav2">会引起子路由渲染的写法</Link></li>
        </ul>
        {children}
      </div>
    );
  }
}


export default App;
