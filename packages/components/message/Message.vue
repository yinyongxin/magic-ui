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
      show(message = '消息框', type = 'info', showClose = false, index = 1) {
        this.message = message
        this.isShow = true
        this.showClose = showClose
        this.type = type
      },
      close(time = 3000, callback) {
        setTimeout(() => {
          this.isShow = false
          callback()
        }, time)
      }
    },
  }
</script>