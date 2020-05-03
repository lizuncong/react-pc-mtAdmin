import { CHANGE_MORE_VALUE, RESET } from './types';

// state.app存储一些全局共用的基础信息，如当前登录用户的基本信息等
const defaultState = {
  menuId: '',
  menuName: '',
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case RESET:
      return defaultState;
    case CHANGE_MORE_VALUE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
