<template>
  <transition name="magic-message">
    <div v-if="isShow" class="magic-message">
      <div :class="['magic-message-container', `icon-type-${type}`, {
        'magic-message-closeShow': showClose,

      }]">
          <i
                  :class="[`m-icon-${type}`, 'magic-message-icon']"
          ></i>
          <span class="magic-message-text">{{message}}</span>
          <span v-if="showClose" class="magic-message-close" @click="isShow = false">
          <i class="m-icon-close"></i>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "MMessage",
    data() {
      return {
        message: '',
        isShow: false,
        type: '',
        showClose: false
      }
    },
    methods: {
      show(message = '消息框',type = 'info', time = 3000, showClose = false, index = 1) {
        console.log(message, type,  time, showClose)
        this.message = message
        this.isShow = true
        this.showClose = showClose
        this.type = type
        // this.close(time)
      },
      close(time, callback) {
        setTimeout(() => {
          this.isShow = false
          callback()
        }, time)
      }

    },
  }
</script>

<style lang="scss">
.magic-message {
  z-index: 999;
  position:fixed;
  top: 20px;
  margin-top: 15px;
  width: 100%;
  .magic-message-container {
    border-radius: 2px;
    margin: 0 auto;
    width: 300px;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    border: 1px solid $border-color;
    background-color: #fff;
    position: relative;
    .magic-message-icon {
      /*font-size: 16px;*/
      padding-right: 10px;
    }
    .magic-message-text {

    }
    .magic-message-close {
      cursor: pointer;
      position: absolute;
      font-size: 18px;
      top: 0;
      right: 6px;
    }
  }
  .magic-message-closeShow {
    padding-right: 30px;
  }
  .icon-type-info {
    color: $primary;
  }
  .icon-type-success {
    color: $success;
  }
  .icon-type-warning {
    color: $warning;
  }
  .icon-type-error {
    color: $error;
  }
}
  .magic-message-enter-active, .magic-message-leave-active {
    transition: all .5s;
    transform: translateY(0);
  }
  .magic-message-enter, .magic-message-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-100%);
  }
</style>