import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/index',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/Index.vue'),
      },
      {
        path: '/uppwd',
        name: 'uppwd',
        component: () => import('../views/Uppwd.vue'),
      },
      {
        path: '/shop',
        name: 'Shop',
        redirect: '/shop/setup',
        component: () => import('../views/Shop.vue'),
        children: [
          {
            path: 'setup',
            name: 'Setup',
            component: () => import('../views/ShopSetup.vue'),
          },
          {
            path: 'link',
            name: 'Link',
            component: () => import('../views/ShopLink.vue'),
          },
        ],
      },
      {
        path: '/merchandise',
        name: 'Merchandise',
        redirect: '/merchandise/class',
        component: () => import('../views/Merchandise.vue'),
        children: [
          {
            path: 'class',
            name: 'Class',
            component: () => import('../views/MerchandiseClassAdd.vue'),
          },
          {
            path: 'add',
            name: 'OrderAdd',
            component: () => import('../views/MerchandiseAdd.vue'),
          },
          {
            path: 'list',
            name: 'List',
            component: () => import('../views/MerchandiseList.vue'),
          },
          {
            path: 'classlist',
            name: 'ClassList',
            component: () => import('../views/MerchandiseClassList.vue'),
          },
        ],
      },
      {
        path: '/order',
        name: 'Order',
        redirect: '/order/list',
        component: () => import('../views/Order.vue'),
        children: [
          {
            path: 'list',
            name: 'OrderList',
            component: () => import('../views/OrderList.vue'),
          },
        ],
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue'),
        redirect: '/user/my',
        children: [
          {
            path: 'my',
            name: 'My',
            component: () => import('../views/UserMy.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/shopsubmit',
    name: 'ShopSubmit',
    component: () => import('../views/ShopSubmit.vue'),
  },
  {
    path: '/publicity',
    name: 'Publicity',
    component: () => import('../views/Publicity.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
