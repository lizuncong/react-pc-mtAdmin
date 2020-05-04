import request from '../utils/request';

// 新增分类
export function addCategory(data) {
  return request.post({
    url: '/category/create',
    data,
  });
}

// 编辑分类
export function updateCategory(data) {
  return request.post({
    url: '/category/update',
    data,
  });
}

// 分类列表
export function getCategoryList(data) {
  return request.post({
    url: '/category/list',
    data,
  });
}

// 删除分类
export function deleteCategory(data) {
  return request.post({
    url: '/category/delete',
    data,
  });
}
