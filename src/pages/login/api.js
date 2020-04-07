import request from '../../utils/request';

export function getStoreList(data) {
  return request.get({
    url: '/product/list',
    data,
  });
}
