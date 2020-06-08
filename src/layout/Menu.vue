<template>
  <div class="menu">
    <m-aside-menu 
      :width="240"
      isBorder='right'
      activeAnimation
    >
      <m-aside-menu-item index='1' m-link="/">
        首页</m-aside-menu-item>
      <m-aside-menu-item index='1' link-name="use">
        开发指南</m-aside-menu-item>
      <!-- 基本组件 -->
      <m-aside-menu-group>
        <template #title>基本的</template>
        <m-aside-menu-item index='2' link-name="icon">
          Icon 图标</m-aside-menu-item>
        <m-aside-menu-item index='3' link-name="button">
          Button 按钮</m-aside-menu-item>
        <m-aside-menu-item index='4' link-name="layout"> 
          Layout 布局</m-aside-menu-item>
      </m-aside-menu-group>


      <!-- 菜单组件 -->
      <m-aside-menu-group>
        <template #title>导航</template>
        <m-aside-menu-item index='6' link-name="asideMenu">
          AsideMenu 侧边导航</m-aside-menu-item>
      </m-aside-menu-group>

      <!-- 展示组件 -->
      <m-aside-menu-group>
        <template #title>展示</template>
        <m-aside-menu-item index='6' link-name="card">
          Card 卡片</m-aside-menu-item>
        <m-aside-menu-item index='5' link-name="showBox">
          ShowBox 展示盒</m-aside-menu-item>
      </m-aside-menu-group>

      <!-- 表单组件 -->
      <m-aside-menu-group>
        <template #title>表单</template>
        <m-aside-menu-item index='6' link-name="switch">
          Switch 开关</m-aside-menu-item>
        <m-aside-menu-item index='6' link-name="radio">
          Radio 单选框</m-aside-menu-item>
        <m-aside-menu-item index='6' link-name="checkbox">
          Checkbox 多选框</m-aside-menu-item>
        <m-aside-menu-item index='6' link-name="input">
          Input 输入框</m-aside-menu-item>
      </m-aside-menu-group>

      <!-- 数据组件 -->
      <m-aside-menu-group>
        <template #title>数据</template>
        <m-aside-menu-item index='7' link-name="table">
          Table 表格</m-aside-menu-item>
      </m-aside-menu-group>

      <!-- 消息组件 -->
      <m-aside-menu-group>
        <template #title>消息</template>
        <m-aside-menu-item index='7' link-name="dialog">
          Dialog 对话框</m-aside-menu-item>
        <m-aside-menu-item index='7' link-name="message">
          Message 消息框</m-aside-menu-item>
      </m-aside-menu-group>

      <m-aside-submenu icon="m-icon-s-tools">
        <template #title>
          正常菜单
        </template>
          <m-aside-menu-item index='8' link-name="icon">
            Icon 图标</m-aside-menu-item>
      </m-aside-submenu>
      <m-aside-submenu index='8' icon="m-icon-s-tools" m-link='/button'>
        <template #title>
          没内容菜单
        </template>
      </m-aside-submenu>
    </m-aside-menu>
  </div>
</template>
<script>
import './menu.scss'
export default {
  methods: {
  }
}
</script>
