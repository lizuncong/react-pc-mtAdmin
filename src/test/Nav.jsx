import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';


const Nav = ({ children, ...args }) => {
  const [count, setCount] = useState(0);
  console.log('render..nav');
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <div>
        这种写法，Nav页面render，不会导致Home的render，
        <div>{args.location.pathname}</div>
        <span style={{ color: 'red' }}>点我并查看控制台</span>
      </div>
      { children }
    </div>
  );
};

export default Nav;
