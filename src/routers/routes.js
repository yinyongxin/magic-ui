import home from '../pages/home.vue'


const lazyLoading = (name) => {
  return () => import('../pages/'+ name + '.vue')
}

export default [
  {path: '/', name: 'home', component: home},
  {path: '/button', name: 'button', component: lazyLoading('button')},
  {path: '/layout', name: 'layout', component: lazyLoading('layout')},
  {path: '/asideMenu', name: 'asideMenu', component: lazyLoading('asideMenu')},
  {path: '/showBox', name: 'showBox', component: lazyLoading('showBox')},
  {path: '/icon', name: 'icon', component: lazyLoading('icon')},
  {path: '/switch', name: 'switch', component: lazyLoading('switch')},
]