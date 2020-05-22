<template>
  <div id="app">
    <m-row>
      <Menu></Menu>
      <m-col class="">
        <div class="p-15 main-show">
          <router-view></router-view>
        </div>
      </m-col>
    </m-row>
  </div>
</template>

<script>
import Menu from './layout/Menu'
export default {
  name: 'App',
  components: {  
    Menu,
  },
  methods: {
    add() {
      console.log('999999')
    }
  }
}
</script>

<style lang="scss">
  #app {
    .main-show {
      height: 100vh;
      overflow-y: scroll;
    }
  }
</style>
