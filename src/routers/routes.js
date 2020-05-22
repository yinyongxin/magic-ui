import home from '../pages/home.vue'

export default [
  {path: '/', name: 'home', component: home},
  {path: '/button', name: 'button', component: () => import('../pages/button.vue')},
  {path: '/layout', name: 'layout', component: () => import('../pages/layout.vue')},
  {path: '/asideMenu', name: 'asideMenu', component: () => import('../pages/asideMenu.vue')},
]