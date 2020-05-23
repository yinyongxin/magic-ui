<template>
  <div 
    class="aside-menu" 
    :class="{
      'aside-menu-border-right': IsBorder == 'right'? true : false,
      'aside-menu-border-left': IsBorder == 'left'? true : false
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
      default: 'fgfgf'
    },
    TextColor: {
      type: String,
      default: ''
    },
    IsBorder: {
      type: String,
      default: 'right'
    },
  },
  created() {
    console.log('width', this.width)
    console.log('border', this.border)
  },
}
</script>

<style lang="scss">
@import '../../assets/color.scss';
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