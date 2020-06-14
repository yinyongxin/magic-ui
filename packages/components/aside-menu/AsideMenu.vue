<template>
  <!-- <div class="aside-menu" > -->
    <div 
      :class="[
        'aside-menu',
        {
        'aside-menu-border-right': isBorder == 'right'? true : false,
        'aside-menu-border-left': isBorder == 'left'? true : false,
        },
        `is-shadow-${shadow}`
      ]"
      :style="{
        width: width+'px',
        backgroundColor: BackgroundColor,
        color: TextColor,
      }"
    >
      <slot></slot>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'MAsideMenu',
  data() {
    return {
      activeIndex: '',
    }
  },
  provide() {
    return {
      rootMenu: this
    }
  },
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
    DefaultActive: {
      type: String,
      default: ''
    },
    shadow: {
      type: String,
      default: 'nover'
    },
    activeAnimation: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
  }
}
</script>