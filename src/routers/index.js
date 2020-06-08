import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes'

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    // console.log(to)
    // return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  // console.log('路由守卫',to.meta.title, document)
  document.title = to.meta.title
  next()
})
export default router
