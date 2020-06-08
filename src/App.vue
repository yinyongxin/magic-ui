<template>
  <div id="app">
    <m-row>
      <Menu class="box-shadow-hover"></Menu>
      <m-col class="main-show">
        <div class="p-30">
          <transition name="turn-page">
            <router-view></router-view>
          </transition>
        </div>
      </m-col>
    </m-row>
  </div>
</template>

<script>
import Menu from './layout/Menu'
import Shade from './pages/shade';
export default {
  name: 'App',
  data() {
    return {
      isShade: true
    }
  },
  components: {
    Shade,
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
  .turn-page-enter-active {
    transition: all 1s;
  }
  .turn-page-leave-active {
    transition: all 0.5s;
  }
  .turn-page-enter {
    transform: translateX(-100vw);
  }
  .turn-page-leave-to {
    transform: translateX(100vw);
  }
}
</style>
