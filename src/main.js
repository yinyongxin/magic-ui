import Vue from 'vue'
import App from './App.vue'
import router from './routers'

import './assets/index.scss'
import MagicUI from '../packages'
Vue.use(MagicUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
