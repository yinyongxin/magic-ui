<template>
  <div id="app">
    <div>
      <m-button @click="add">默认</m-button>
      <m-button type="primary">主要</m-button>
      <m-button type="success">成功</m-button>
      <m-button type="warning">警告</m-button>
      <m-button type="error">错误</m-button>
      <m-button type="primary" disabled>禁用</m-button>
      <m-button type="primary" icon="m-icon-coffee"></m-button>
    </div>
    <div>
      <m-button circle icon="m-icon-coffee" @click="add"></m-button>
      <m-button circle icon="m-icon-coffee" type="primary"></m-button>
      <m-button circle icon="m-icon-coffee" type="success"></m-button>
      <m-button circle icon="m-icon-coffee" type="warning"></m-button>
      <m-button circle icon="m-icon-coffee" type="error"></m-button>
      <m-button circle icon="m-icon-coffee" type="primary" disabled></m-button>
      <m-button circle icon="m-icon-coffee" type="primary"></m-button>
    </div>
      
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    add() {
      console.log('9999')
    }
  }
}
</script>

<style lang="scss">

</style>
