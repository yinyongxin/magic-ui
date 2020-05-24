<template>
  <div class="button-card">
    <m-card class="m-b-5">
      <template #header>
        正常按钮
      </template>
      <div>
        <m-button class="m-r-10" @click="add">默认按钮</m-button>
        <m-button class="m-r-10" type="primary">主要按钮</m-button>
        <m-button class="m-r-10" type="success">成功按钮</m-button>
        <m-button class="m-r-10" type="warning">警告按钮</m-button>
        <m-button class="m-r-10" type="error">错误按钮</m-button>
      </div>
    </m-card>
    <m-show-box class="m-b-15">
      <div>
      </div>
    </m-show-box>
    <m-card class="m-b-15">
      <template #header>
        带图标按钮
      </template>
      <div>
        <m-button class="m-r-10" @click="add"  icon="m-icon-minus">默认按钮</m-button>
        <m-button class="m-r-10" type="primary" icon="m-icon-plus" >主要按钮</m-button>
        <m-button class="m-r-10" type="success" icon="m-icon-check" >成功按钮</m-button>
        <m-button class="m-r-10" type="warning" icon="m-icon-close" >警告按钮</m-button>
        <m-button class="m-r-10" type="error" icon="m-icon-warning" >错误按钮</m-button>
      </div>
    </m-card>
    <m-card class="m-b-15">
      <template #header>
        禁用按钮
      </template>
      <div>
        <m-button class="m-r-10" @click="add" disabled>默认按钮</m-button>
        <m-button class="m-r-10" type="primary" disabled>主要按钮</m-button>
        <m-button class="m-r-10" type="success" disabled>成功按钮</m-button>
        <m-button class="m-r-10" type="warning" disabled>警告按钮</m-button>
        <m-button class="m-r-10" type="error" disabled>错误按钮</m-button>
        <m-button class="m-r-10" type="primary" disabled>禁用</m-button>
      </div>
    </m-card>
    <m-card class="m-b-15">
      <template #header>
        图标按钮
      </template>
      <div>
         <m-button class="m-r-10" @click="add"  icon="m-icon-minus"></m-button>
        <m-button class="m-r-10" type="primary" icon="m-icon-plus" ></m-button>
        <m-button class="m-r-10" type="success" icon="m-icon-check" ></m-button>
        <m-button class="m-r-10" type="warning" icon="m-icon-close" ></m-button>
        <m-button class="m-r-10" type="error" icon="m-icon-warning" ></m-button>
      </div>
    </m-card>
    <m-card class="m-b-15">
      <template #header>
        原型按钮
      </template>
      <div>
        <m-button class="m-r-10" circle @click="add"  icon="m-icon-minus"></m-button>
        <m-button class="m-r-10" circle type="primary" icon="m-icon-plus" ></m-button>
        <m-button class="m-r-10" circle type="success" icon="m-icon-check" ></m-button>
        <m-button class="m-r-10" circle type="warning" icon="m-icon-close" ></m-button>
        <m-button class="m-r-10" circle type="error" icon="m-icon-warning" ></m-button>
      </div>
    </m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    add() {
      console.log('9999')
    }
  }
}
</script>

<style lang='scss'>

</style>