import request from '../utils/request';

// 注册
export function register(data, domId) {
  return request.upload({
    url: '/user/register',
    domId,
    data,
  });
}

// 登录
export function login(data) {
  return request.post({
    url: '/user/login',
    data,
  });
}

// 获取用户个人信息
export function getUserInfo() {
  return request.get({
    url: '/user/info',
  });
}

// 登出
export function logout() {
  return request.post({
    url: '/user/logout',
  });
}
