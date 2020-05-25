<template>
  <div class="menu">
    <m-aside-menu 
      :width="240"
      isBorder='right'
    >
      <m-aside-menu-item m-link="/">
        首页</m-aside-menu-item>

      <m-aside-menu-group>
        <template #title>基本的</template>
        <m-aside-menu-item link-name="icon">
          Icon 图标</m-aside-menu-item>
        <m-aside-menu-item link-name="button">
          Button 按钮</m-aside-menu-item>
        <m-aside-menu-item link-name="layout"> 
          Layout 布局</m-aside-menu-item>
        <m-aside-menu-item link-name="showBox">
          ShowBox 展示盒</m-aside-menu-item>
      </m-aside-menu-group>

      <m-aside-menu-group>
        <template #title>导航</template>
        <m-aside-menu-item link-name="asideMenu">
          AsideMenu 侧边导航</m-aside-menu-item>
      </m-aside-menu-group>

      <m-aside-submenu icon="m-icon-s-tools">
        <template #title>
          正常菜单
        </template>
          <m-aside-menu-item link-name="icon">
            Icon 图标</m-aside-menu-item>
      </m-aside-submenu>

      <m-aside-submenu icon="m-icon-s-tools" open>
        <template #title>
          默认打开带分组
        </template>
        <m-aside-menu-group>
          <template #title>
            分组一
          </template>
          <m-aside-menu-item link-name="button">
            Button 按钮</m-aside-menu-item>
        </m-aside-menu-group>
      </m-aside-submenu>

      <m-aside-submenu icon="m-icon-s-tools">
        <template #title>
          菜单三
        </template>
        <m-aside-menu-group>
          <m-aside-menu-item link-name="layout"> 
            Layout 布局</m-aside-menu-item>
        </m-aside-menu-group>
      </m-aside-submenu>

      <m-aside-submenu icon="m-icon-s-tools" m-link='/'>
        <template #title>
          没内容菜单
        </template>
      </m-aside-submenu>
      
      <m-aside-submenu m-link='/'>
        <template #title>
          没图标菜单
        </template>
      </m-aside-submenu>
    </m-aside-menu>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style lang="scss">
.menu {
  position:fixed ;
  height: 100vh;
  top: 0;
  left: 0;
}
</style>