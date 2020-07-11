import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => {
  const [_, setState] = React.useState('');
  console.log('render parent');
  return (
    <div
      style={{ border: '4px solid green' }}
      onClick={() => {
        setState(Date.now());
      }}
    >
      <Switch>
        <Route exact path="/roster" component={FullRoster} />
        <Route path="/roster/:number" component={Player} />
      </Switch>
    </div>
  );
};

export default Roster;
