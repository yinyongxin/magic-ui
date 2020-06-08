<template>
    <transition name="fade">
      <div v-if="isShade" class="magic-shade flex-center">
        <div class="cantainer">
          <h1 class="title">MAGICUI</h1>
          <h2 class="des">一个基于Vue.js的灵活UI组件库</h2>
          <div class="button">
            <m-button class="m-r-15" type="success" @click="closeShade">开始使用</m-button>
            <a href="https://github.com/yinyongxin/magic-ui" target="_blank" class="m-r-15">
              <m-button>Github</m-button>
            </a>
            <a href="https://gitee.com/guduhuanzheyyx/magic-ui" target="_blank">
              <m-button>码云</m-button>
            </a>
          </div>
        </div>

      </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
      isShade: true
    }
  },
  methods: {
    closeShade() {
      this.isShade = false
    }
  },
}
</script>

<style lang="scss">
  .magic-shade {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    // background-color: $background-color;
    background: url('../assets/images/星空.jpg') no-repeat center;
    background-size: cover;
    .cantainer {
      color: #fff;
      text-align: center;
      .title {
        font-size: 130px;
        margin: 0;
      }
      .des {
        font-size: 30px;
      }
      .button {
        font-size: 16px;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>