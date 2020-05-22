<template>
  <div class="aside-menu" :style="{width: width+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MAsideMenu',
  props: {
    width: {
      type: Number,
      default: 200
    }
  }
}
</script>

<style lang="scss">
  .aside-menu {
    height: 100%;
    padding: 15px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow-y: auto;
    // background-color: pink;
  }
</style>