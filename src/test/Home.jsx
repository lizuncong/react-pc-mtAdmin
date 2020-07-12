import React from 'react';

// const Home = () => {
//   console.log('rendered...home');
//   return (
//     <div>
//       <h1>这是首页</h1>
//     </div>
//   );
// };

class Home extends React.Component {
  componentDidMount() {
    console.log('home...did..mount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('home..shouldUpdate...', this.props.match === nextProps.match);
    return nextProps !== this.props;
  }

  render() {
    console.log('rendered...home', this.props);
    return (
      <div>
        <h1>这是首页</h1>
      </div>
    );
  }
}

export default Home;
