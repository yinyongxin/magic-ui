<template>
  <div id="app">
    <transition name="fade">
      <div v-if="isShade" class="shade flex-center">
        <m-button type="primary" @click="closeShade">关闭</m-button>
      </div>
    </transition>
    <m-row>
      <Menu class="box-shadow-hover"></Menu>
      <m-col class="main-show">
        <div class="p-30">
          <!-- <transition name="turn-page" mode="out-in"> -->
            <router-view></router-view>
          <!-- </transition> -->
        </div>
      </m-col>
    </m-row>
  </div>
</template>

<script>
import Menu from './layout/Menu'
import MButton from "../packages/components/button/Button";
export default {
  name: 'App',
  data() {
    return {
      isShade: true
    }
  },
  components: {
    MButton,
    Menu,
  },
  methods: {
    closeShade() {
      this.isShade = false
    }
  },
}
</script>

<style lang="scss">
#app {
  .main-show {
    margin-left: 240px;
    min-width: 900px;
  }
  .shade {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: black, $alpha: 0.8);
  }
  .turn-page-enter-active {
    transition: all 1s;
  }
  .turn-page-leave-active {
    transition: all 0.5s;
  }
  .turn-page-enter {
    transform: translateY(-100vh);
  }
  .turn-page-leave-to {
    transform: translateY(100vh);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
