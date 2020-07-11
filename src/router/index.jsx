import React from 'react';
import {
  HashRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import loadable from '@loadable/component';
import Home from '../pages/home';

const ReduxDemo = loadable(() => import(/* webpackChunkName: "login" */'../pages/redux-demo'));
const ReduxDemo2 = loadable(() => import(/* webpackChunkName: "login" */'../pages/redux-demo2'));
const Login = loadable(() => import(/* webpackChunkName: "login" */'../pages/login'));
const Register = loadable(() => import(/* webpackChunkName: "login" */'../pages/register'));
const AdminLayout = loadable(() => import(/* webpackChunkName: "adminLayout" */'../pages/layout/admin'));
const DetailLayout = loadable(() => import(/* webpackChunkName: "detailLayout" */'../pages/layout/detail'));
// const Home = loadable(() => import(/* webpackChunkName: "home" */'../pages/home'));
const StoreList = loadable(() => import(/* webpackChunkName: "storeList" */'../pages/store/list'));
const ProductCategory = loadable(() => import(/* webpackChunkName: "productCategory" */'../pages/product/category'));
const ProductList = loadable(() => import(/* webpackChunkName: "productList" */'../pages/product/product'));
const StoreDetail = loadable(() => import(/* webpackChunkName: "storeDetail" */'../pages/store/detail'));

const App = loadable(() => import(/* webpackChunkName: "app" */'../app'));

class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/redux-demo" component={ReduxDemo} />
            <Route path="/redux-demo2" component={ReduxDemo2} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/detail"
              render={() => (
                <DetailLayout>
                  <Switch>
                    <Route path="/detail/order/detail" component={Login} />
                  </Switch>
                </DetailLayout>
              )}
            />
            <Route
              path="/"
              render={() => (
                <AdminLayout>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/store/list" component={StoreList} />
                    <Route path="/product/category" component={ProductCategory} />
                    <Route path="/product/list" component={ProductList} />
                    <Route path="/store/detail/:storeId?" component={StoreDetail} />
                    <Redirect to="/home" />
                    {/* <Route component={NotFound} /> */}
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
