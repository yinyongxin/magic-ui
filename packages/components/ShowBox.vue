<template>
  <div class="magic-show-box" :style="BodyStyle">
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
      <span>
        <slot name='on-off-title'>
          {{ isClose? CloseTitle : OpenTitle}}
        </slot>
      </span>
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
    height: {
      type: String,
      default: '50vh'
    },
    CloseTitle: {
      type: String,
      default: '打开内容'
    },
    OpenTitle: {
      type: String,
      default: '关闭内容'
    },
    BodyStyle: {
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
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
    border-top: 1px solid #eaeefb;
    height: 44px;
    text-align: center;
    line-height: 44px;
    width: 100%;
  }
}
</style>