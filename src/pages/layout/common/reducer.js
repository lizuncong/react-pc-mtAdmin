import { CHANGE_MORE_VALUE, RESET } from './types';

// state.app存储一些全局共用的基础信息，如当前登录用户的基本信息等
const defaultState = {
  user: {
    userName: '', // 当前登录用户的姓名
    userId: '', // 当前登录用户的id
    phone: '', // 当前登录用户的手机号
    avatar: '', // 当前登录用户的头像地址
    gender: '', // 当前登录用户的性别
  },
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
