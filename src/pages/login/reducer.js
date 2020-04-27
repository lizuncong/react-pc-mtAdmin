import { CHANGE_MORE_VALUE, RESET } from './types';

const defaultState = {
  userName: '', // 当前登录用户的姓名
  userId: '', // 当前登录用户的id
  phone: '', // 当前登录用户的手机号
  avatar: '', // 当前登录用户的头像地址
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case RESET:
      return defaultState;
    case CHANGE_MORE_VALUE:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
