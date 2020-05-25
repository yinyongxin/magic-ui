<template>
  <div 
    class="aside-menu" 
    :class="{
      'aside-menu-border-right': isBorder == 'right'? true : false,
      'aside-menu-border-left': isBorder == 'left'? true : false
    }"
    :style="{
      width: width+'px',
      backgroundColor: BackgroundColor,
      color: TextColor,
    }"
  >
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
    },
    BackgroundColor: {
      type: String,
      default: ''
    },
    TextColor: {
      type: String,
      default: ''
    },
    isBorder: {
      type: String,
      default: ''
    },
  },
  mounted() {
    console.log('所有子组件', this.$children)
  }
}
</script>

<style lang="scss">
.aside-menu {
  color: $title-color;
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
}
.aside-menu-border-right {
  border-right: 1px solid #DCDFE6;
}
.aside-menu-border-left {
  border-left: 1px solid #DCDFE6;
}
</style>