import React from 'react';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import loadable from '@loadable/component';

import Home from './Home';
import App from './App';
import Login from './login';
import AdminLayout from './Nav';
// const App = loadable(() => import(/* webpackChunkName: "app" */'./App'));
// const AdminLayout = loadable(() => import(/* webpackChunkName: "nav" */'./Nav'));
// const Login = loadable(() => import(/* webpackChunkName: "login" */'./Login'));


class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <AdminLayout>
                  <Switch>
                    <Route path="/home" component={Home} />
                  </Switch>
                </AdminLayout>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default IRouter;
