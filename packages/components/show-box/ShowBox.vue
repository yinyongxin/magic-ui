<template>
  <div class="magic-show-box" :class="[`is-shadow-${shadow}`]"  :style="{...bodyStyle, width}">
    <div class="magic-show-box-main" :style="{height: isClose? '0' : height}">
      <div class="magic-show-box-content">
        <slot>请输入内容</slot>
      </div>
    </div>
    <div 
      class="magic-show-box-on-off" 
      :class="{'is-fixed': !isClose}" @click="open"
      :style="{borderTopWidth: isClose? '0' : '1px'}"
      >
        <span>{{isClose? closeTitle : openTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MShowBox',
  data() {
    return {
      isClose: true
    }
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '50vh'
    },
    shadow: {
      type: String,
      default: 'nover'
    },
    closeTitle: {
      type: String,
      default: '打开内容'
    },
    openTitle: {
      type: String,
      default: '关闭内容'
    },
    bodyStyle: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    open() {
      this.isClose = !this.isClose
    }
  },
}
</script>

<style lang="scss">

</style>