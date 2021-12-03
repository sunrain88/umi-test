const routes = [
  { path: '/', redirect: '/home' },
  { path: '/404', redirect: '/404' },
  // { path: '/index', component: 'index' },
  { path: '/home', component: '@/pages/frontPart/home' },
  { path: '/login', component: '@/pages/frontPart/login' },
  { path: '/personalCenter', component: '@/pages/frontPart/personalCenter' },
];

export default routes;
