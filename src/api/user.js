import request from '../utils/request';

// 注册
export function register(data, domId) {
  return request.upload({
    url: '/user/register',
    domId,
    data,
  });
}
