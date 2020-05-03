import { combineReducers } from 'redux';
import reduxDemo from '../../pages/redux-demo/reducer';
import reduxDemo2 from '../../pages/redux-demo2/reducer';
import nav from '../../pages/layout/admin/reducer';
import app from '../../pages/layout/common/reducer';

export default combineReducers({
  reduxDemo,
  reduxDemo2,
  nav,
  app,
});
