import './assets/fonts/font.scss'
import Button from './components/button.vue'

let components = [
  Button
]

const install = (Vue) => {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}


// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export default {
  install
}
