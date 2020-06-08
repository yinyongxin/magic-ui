import use from '../pages/use.vue'
import shade from '../pages/shade.vue'


const lazyLoading = (name) => {
  return () => import('../pages/'+ name + '.vue')
}

export default [
  {path: '/', name: 'home', component: shade, meta: {title: 'MagicUI'}},
  {path: '/use', name: 'use', component: use, meta: {title: '使用指导'}},
  {path: '/button', name: 'button', component: lazyLoading('button'), meta: {title: 'Button按钮'}},
  {path: '/layout', name: 'layout', component: lazyLoading('layout'), meta: {title: 'Layout布局'}},
  {path: '/asideMenu', name: 'asideMenu', component: lazyLoading('asideMenu'), meta: {title: 'AsideMenu侧边菜单'}},
  {path: '/showBox', name: 'showBox', component: lazyLoading('showBox'), meta: {title: 'ShowBox展示盒'}},
  {path: '/icon', name: 'icon', component: lazyLoading('icon'), meta: {title: 'Icon图标'}},
  {path: '/switch', name: 'switch', component: lazyLoading('switch'), meta: {title: 'Switch开关'}},
  {path: '/radio', name: 'radio', component: lazyLoading('radio'), meta: {title: 'Radio单选框'}},
  {path: '/checkbox', name: 'checkbox', component: lazyLoading('checkbox'), meta: {title: 'Checkbox多选框'}},
  {path: '/input', name: 'input', component: lazyLoading('input'), meta: {title: 'Input输入框'}},
  {path: '/card', name: 'card', component: lazyLoading('card'), meta: {title: 'Card卡片'}},
  {path: '/table', name: 'table', component: lazyLoading('table'), meta: {title: 'Table表格'}},
  {path: '/dialog', name: 'dialog', component: lazyLoading('dialog'), meta: {title: 'Dialog对话框'}},
  {path: '/message', name: 'message', component: lazyLoading('message'), meta: {title: 'Message消息框'}},

]