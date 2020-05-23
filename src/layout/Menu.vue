<template>
  <div class="menu">
    <m-aside-menu 
      :width="240"
      isBorder
    >
      <m-aside-menu-item m-link="home">
        首页</m-aside-menu-item>
      <m-aside-menu-group>
        <template #title>基本的</template>
        <m-aside-menu-item m-link="button">
          Button 按钮</m-aside-menu-item>
        <m-aside-menu-item m-link="layout"> 
          Layout 布局</m-aside-menu-item>
        <m-aside-menu-item m-link="asideMenu">
          AsideMenu 侧边导航</m-aside-menu-item>
      </m-aside-menu-group>
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
  height: 100vh;
  background-color: #545c64;
}
</style>