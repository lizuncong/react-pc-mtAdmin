const menuList = [
  {
    title: '商品管理',
    menuId: '1000',
    url: '/product',
    children: [
      {
        title: '商品分类',
        menuId: '1001',
        url: '/product/category',
      },
      {
        title: '商品列表',
        menuId: '1002',
        url: '/product/list',
      },
    ],
  },
  {
    title: '测试',
    menuId: '3000',
    url: '/store',
    children: [
      {
        title: '列表',
        menuId: '3001',
        url: '/store/list',
      },
      {
        title: '列表2',
        menuId: '3002',
        url: '/store/list2',
      },
      {
        title: '列表3',
        menuId: '3003',
        url: '/store/list3',
      },
    ],
  },
];
export default menuList;
