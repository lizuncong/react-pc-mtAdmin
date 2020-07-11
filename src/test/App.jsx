import React from 'react';
import Header from './Header';
import Main from './Main';


class App extends React.Component {
  componentDidMount() {
    const bodyOverlay = document.getElementById('body-overlay');
    bodyOverlay.style.display = 'none';
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
