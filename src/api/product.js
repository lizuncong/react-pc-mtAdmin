import request from '../utils/request';

// 新增商品
export function addProduct(data) {
  return request.upload({
    url: '/product/create',
    data,
  });
}

// 编辑商品
export function updateProduct(data) {
  return request.post({
    url: '/product/update',
    data,
  });
}

// 商品列表
export function getProductList(data) {
  return request.post({
    url: '/product/list',
    data,
  });
}

// 删除商品
export function deleteProduct(data) {
  return request.post({
    url: '/product/delete',
    data,
  });
}
