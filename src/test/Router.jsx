import React from 'react';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import Home from './Home';
import App from './App';
import Login from './login';
import Nav from './Nav';
import Nav2 from './Nav2';

const Test = () => {
  console.log('render.....nav...Test...====================');
  return (
    <div>Test</div>
  );
};

class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/nav2"
              component={Nav2}
            />
            <Route
              path="/"
              render={(props) => (
                <Nav {...props}>
                  <Test />
                  <Switch>
                    <Route path="/nav1" component={Home} />
                    <Redirect to="/nav1" />
                  </Switch>
                </Nav>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default IRouter;
