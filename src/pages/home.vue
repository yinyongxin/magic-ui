<template>
  <div class="home-page">
    <h1>开发指南</h1>
    <h2>安装Magic-UI</h2>
    <h4>使用<b>npm</b>安装</h4>
    <p>npm install magic-ui-yyx</p>
    <h4>使用<b>yarn</b>安装</h4>
    <p>yarn add magic-ui-yyx</p>
    
    <h2>引入Magic-UI</h2>
    <pre class="install">
      <code>
import Vue from 'vue';
import MagicUiYYX from 'magic-ui-yyx';
import 'magic-ui-yyx/dist/magic-ui-yyx.css';
import App from './App.vue';

Vue.use(MagicUiYYX);

new Vue({
  el: '#app',
  render: h => h(App)
});
      </code>
    </pre>
    <h2>开始使用</h2>
    <p>至此，一个基于 Vue 和 MagicUI 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
  },
}
</script>

<style lang="scss">
.home-page {
  .install {
  }
}
</style>