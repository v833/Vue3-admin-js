import {
  createRouter,
  createWebHashHistory
} from "vue-router"

const routes = [{
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/account/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    hidden: true,
    component: () => import('../views/account/Register.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    hidden: true,
    component: () => import('../views/account/Forget.vue')
  },
  // 管理后台 - 首页
  {
    path: '/index',
    name: 'Index',
    meta: {
      title: '首页'
    },
    hidden: false,
    component: () => import('../views/layout/Index.vue')
  },
  // 管理后台 - 管理总台
  {
    path: '/adminIndex',
    name: 'AdminIndex',
    hidden: false,
    meta: {
      title: '管理总台'
    },
    component: () => import('../views/layout/Index.vue'),
    children: [{
        path: '/role',
        name: 'Role',
        meta: {
          title: '角色管理'
        },
        component: () => import('../views/admin/Role.vue')
      },
      {
        path: '/user',
        name: 'User',
        meta: {
          title: '用户管理'
        },
        component: () => import('../views/admin/User.vue')
      },
    ]
  },
  {
    path: '/news',
    name: 'News',
    meta: {
      title: 'news'
    },
    component: () => import('../views/news/Index.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router