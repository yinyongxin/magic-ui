import Vue from 'vue'
import App from './App.vue'

import MagicUI from '../packages'
Vue.use(MagicUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
