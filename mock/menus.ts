export default (Mock) => {
  Mock.mock(Mock.BaseURL + '/menus', 'get', {
    code: 200,
    data: [
      {
        id: 0,
        title: '首页',
        icon: '<home-filled />',
        path: '/home',
      },
      // {
      //   id: 1,
      //   title: '商户管理',
      //   icon: '<shop-filled />',
      //   path: '/shop',
      // },
      {
        id: 1,
        title: '商品管理',
        icon: '<dropbox-outlined />',
        path: '/merchandise',
      },
      // {
      //   id: 2,
      //   title: '卡密管理',
      //   icon: '<eye-outlined />',
      //   path: '/kami',
      // },
      {
        id: 2,
        title: '订单管理',
        icon: '<borderless-table-outlined />',
        path: '/order',
      },
      {
        id: 3,
        title: '用户管理',
        icon: '<compress-outlined />',
        path: '/user',
      },
    ],
  });
};
