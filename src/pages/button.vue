<template>
  <div class="button-dome">
    <h1>Button 按钮</h1>
    <p class="m-b-20">常用的操作按钮。</p>
    <h2>基础用法</h2>
    <p class="m-b-20">基础的按钮用法。</p>
    <m-card class="m-b-40">
      <div>
        <m-button class="m-r-10" @click="add">默认按钮</m-button>
        <m-button class="m-r-10" type="primary">主要按钮</m-button>
        <m-button class="m-r-10" type="success">成功按钮</m-button>
        <m-button class="m-r-10" type="warning">警告按钮</m-button>
        <m-button class="m-r-10" type="error">错误按钮</m-button>
      </div>
    </m-card>
    
    <h2>带图标按钮</h2>
    <p class="m-b-20">基础的带图标按钮。</p>
    <m-card class="m-b-40">
      <div>
        <m-button class="m-r-10" @click="add"  icon="m-icon-minus">默认按钮</m-button>
        <m-button class="m-r-10" type="primary" icon="m-icon-plus" >主要按钮</m-button>
        <m-button class="m-r-10" type="success" icon="m-icon-check" >成功按钮</m-button>
        <m-button class="m-r-10" type="warning" icon="m-icon-close" >警告按钮</m-button>
        <m-button class="m-r-10" type="error" icon="m-icon-warning" >错误按钮</m-button>
      </div>
    </m-card>

    <h2>禁用按钮</h2>
    <p class="m-b-20">基础的禁用按钮。</p>
    <m-card class="m-b-40">
      <div>
        <m-button class="m-r-10" @click="add" disabled>默认按钮</m-button>
        <m-button class="m-r-10" type="primary" disabled>主要按钮</m-button>
        <m-button class="m-r-10" type="success" disabled>成功按钮</m-button>
        <m-button class="m-r-10" type="warning" disabled>警告按钮</m-button>
        <m-button class="m-r-10" type="error" disabled>错误按钮</m-button>
        <m-button class="m-r-10" type="primary" disabled>禁用</m-button>
      </div>
    </m-card>

    <h2>图标按钮</h2>
    <p class="m-b-20">基础的图标按钮。</p>
    <m-card class="m-b-40">
      <div>
         <m-button class="m-r-10" @click="add"  icon="m-icon-minus"></m-button>
        <m-button class="m-r-10" type="primary" icon="m-icon-plus" ></m-button>
        <m-button class="m-r-10" type="success" icon="m-icon-check" ></m-button>
        <m-button class="m-r-10" type="warning" icon="m-icon-close" ></m-button>
        <m-button class="m-r-10" type="error" icon="m-icon-warning" ></m-button>
      </div>
    </m-card>

    <h2>圆形按钮</h2>
    <p class="m-b-20">基础的圆形按钮。</p>
    <m-card class="m-b-40">
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
    }
  }
}
</script>

<style lang='scss'>
.button-dome {
  pre code {
    display: inline;
    max-width: none;
    padding: 0;
    margin: 0;
    overflow: initial;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    vertical-align: top;
  }
}
</style>