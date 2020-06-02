import { createAction } from '../../../utils/utils';
import { CHANGE_MORE_VALUE } from './types';
import { getUserInfo } from '../../../api/user';

export const changeMoreValue = createAction(CHANGE_MORE_VALUE, 'payload');

export const getUser = () => (dispatch) => getUserInfo().then((res) => {
  // if (!res) return Promise.resolve({ msg: 'test' });
  if (!res) return;

  const { data = {} } = res;
  dispatch(changeMoreValue({
    user: {
      userName: data.userName, // 当前登录用户的姓名
      userId: data.id, // 当前登录用户的id
      phone: data.phone, // 当前登录用户的手机号
      avatar: `${data.avatar}`, // 当前登录用户的头像地址
      gender: data.gender, // 当前登录用户的性别
    },
  }));
});
