import React, { useState } from 'react';

const Nav = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log('render..nav');
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <div>Nav页面...</div>
      { children }
    </div>
  );
};

export default Nav;
