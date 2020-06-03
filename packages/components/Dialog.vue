<template>
  <transition :name="shade?'dialog':''">
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
    }
  },
  methods: {
    closeDialog() {
      this.$emit('update:visible', false)
     }
  },
}
</script>

<style lang="scss">
.magic-dialog {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  .magic-dialog-box {
    background: #fff;
    border-radius: 2px;
    border: 1px solid $border-color;
    margin: 0 auto;
    animation: magic-dialog-box .5s;
    position: relative;
    .magic-dialog-header {
      position: relative;
      font-weight: 600;
      font-size: 16px;
      padding: 10px 15px;
      .close-button {
        position: absolute;
        top: 10px;
        right: 16px;

        cursor: pointer;
        float: right;
      }
    }
    .magic-dialog-main{
      padding: 20px 15px;
    }
    .magic-dialog-footer{
      display: flex;
      justify-content: flex-end;
      padding: 10px 15px;
    }
    .is-full-screen-footer {
      position: absolute;
      width: 100%;
      bottom: 0;
    }
  }
  .is-full-screen {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw !important;
    height: 100vh;
    margin: 0 !important;
  }
  @keyframes magic-dialog-box {
    0% {
      transform: scale(0.6, 0.6);
    }
    100% {
      transform: scale(1, 1);
    }
  }
}
  .dialog-enter-active {
    animation: fade .5s;
  }
  .dialog-leave-active {
    animation: fade .3s reverse;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
.magic-dialog-shade {
  background-color: rgba($color: #000000, $alpha: 0.4) ;
}

</style>