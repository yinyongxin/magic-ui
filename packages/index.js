import './assets/fonts/font.scss'
import './assets/reset.scss'
import './assets/global.scss'

import Button from './components/Button.vue'
import Card from './components/Card.vue'
import Row from './components/Row.vue'
import Col from './components/Col.vue'
import ShowBox from './components/ShowBox.vue'
import AsideMenu from './components/aside-menu/AsideMenu.vue'
import AsideMenuGroup from './components/aside-menu/AsideMenuGroup.vue'
import AsideMenuItem from './components/aside-menu/AsideMenuItem.vue'
import AsideSubMenu from './components/aside-menu/AsideSubMenu.vue'

// From 表单
import Switch from './components/Switch.vue'
import Input from './components/Input.vue'
import RadioGroup from './components/RadioGroup.vue'
import Radio from './components/Radio.vue'
import Checkbox from './components/Checkbox.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'


//Table 表格
import Table from './components/table/Table.vue'
import TableColumn from './components/table/TableColumn.vue'

// Massage 消息
import Dialog from './components/Dialog.vue'



let components = [
  Button,
  Card,
  Row,
  Col,
  ShowBox,
  AsideMenu,
  AsideSubMenu,
  AsideMenuGroup,
  AsideMenuItem,

  // 表单
  Switch,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,

  Table,
  TableColumn,

  Dialog,
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
