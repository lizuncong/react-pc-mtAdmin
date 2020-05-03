import React from 'react';
import './index.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log('getDerivedStateFromError..', error);
    return { hasError: true, error: error.toString() };
  }

  // componentDidCatch(error) {
  //   // You can also log the error to an error reporting service
  //   console.log('app...error', error);
  //   // logErrorToMyService(error, errorInfo);
  // }

  componentDidMount() {
    const bodyOverlay = document.getElementById('body-overlay');
    bodyOverlay.style.display = 'none';
  }


  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      return <div>{error}</div>;
    }

    return (
      <div className="app">
        {children}
      </div>
    );
  }
}


export default App;
