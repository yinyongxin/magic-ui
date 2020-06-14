<template>
  <transition name="dialog">
    <div 
      @click.self="closeByShade?closeDialog():null"
      v-show="visible"
      :class="['magic-dialog', {
        'magic-dialog-shade': shade
      }]">
        <div 
          :class="['magic-dialog-box', {
            'is-shadow-always': !shade&&shadow,
            'is-full-screen': fullScreen
          }]" 
          :style="[{
            width: width,
            marginTop: top
          }]">
          <header class="magic-dialog-header">
            <slot name="header">
              {{title}}
            </slot>
            <span v-if="showClose" class="close-button" @click="closeDialog">
              <i class="m-icon-close"></i>
            </span>
          </header>
          <main class="magic-dialog-main">
            <slot>
              对话框默认内容
            </slot>
          </main>
          <footer v-if="$slots.footer" :class="['magic-dialog-footer',{'is-full-screen-footer': fullScreen}]">
            <slot name="footer">
              对话框底部内容
            </slot>
          </footer>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MDialog",
  props: {
    shade: {
      type: Boolean,
      default: true
    },
    shadow: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '20vh'
    },
    visible: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeByShade: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
  },
  watch: {
    visible(val) {
      if(val&&this.lockScroll) document.body.style['overflow-y'] = 'hidden'
      else document.body.style['overflow-y'] = 'auto'
    }
  },
  methods: {
    closeDialog() {
      this.$emit('update:visible', false)
     }
  },
}
</script>