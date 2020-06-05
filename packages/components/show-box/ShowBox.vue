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
.magic-show-box {
  border-radius: 2px;
  border: 1px solid $border-color;
  .magic-show-box-main { 
    height: 0px;
    overflow: hidden;
    transition: all 1s;
  }
  .magic-show-box-content {
    background-color: $background-color;
    height: inherit;
    overflow-y: auto;
    padding: 14px;
  }
  .magic-show-box-on-off {
    transition: all .5s;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    &:hover {
      cursor: pointer;
      color: $ui;
      background-color: rgba($color: $ui, $alpha: 0.1);
    }
    border-top: 1px solid #eaeefb;
    height: 44px;
    text-align: center;
    line-height: 44px;
    width: 100%;
  }
}
</style>