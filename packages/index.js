import './theme/index.scss'
import './theme/fonts/font.scss'

import Button from './components/button/Button.vue'
import Card from './components/card/Card.vue'
import Row from './components/row/Row.vue'
import Col from './components/col/Col.vue'
import ShowBox from './components/show-box/ShowBox.vue'


import AsideMenu from './components/aside-menu/AsideMenu.vue'
import AsideMenuGroup from './components/aside-menu-group/AsideMenuGroup.vue'
import AsideMenuItem from './components/aside-menu-item/AsideMenuItem.vue'
import AsideSubMenu from './components/aside-sub-menu/AsideSubMenu.vue'

// From 表单
import Switch from './components/switch/Switch.vue'
import Input from './components/input/Input.vue'
import RadioGroup from './components/radio-group/RadioGroup.vue'
import Radio from './components/radio/Radio.vue'
import Checkbox from './components/check-box/Checkbox.vue'
import CheckboxGroup from './components/check-box-group/CheckboxGroup.vue'


//Table 表格
import Table from './components/table/Table.vue'
import TableColumn from './components/table-column/TableColumn.vue'

// Massage 消息
import Dialog from './components/dialog/Dialog.vue'

import MessageCreate from './components/message/index.js'




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
  MessageCreate(Vue)
}


// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export default {
  install
}
