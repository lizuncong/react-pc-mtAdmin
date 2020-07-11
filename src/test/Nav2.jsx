import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

const Nav = () => {
  const [count, setCount] = useState(0);
  console.log('render..nav');
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <div>
        这种写法，Nav页面render，会导致Home也render，
        <span style={{
          color: 'red',
        }}
        >
          点我并查看控制台
        </span>
      </div>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default Nav;
