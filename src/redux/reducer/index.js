import { combineReducers } from 'redux';
import reduxDemo from '../../pages/redux-demo/reducer';
import reduxDemo2 from '../../pages/redux-demo2/reducer';
import currentMenu from '../../pages/layout/admin/navLeft/reduce';
import app from '../../pages/layout/common/reducer';

export default combineReducers({
  reduxDemo,
  reduxDemo2,
  currentMenu,
  app,
});
