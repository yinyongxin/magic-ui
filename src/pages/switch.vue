<template>
  <div class="switch-page">
    <h1>switch开关</h1> 
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <h2 class="m-b-20">基本用法</h2>
    <m-card class="m-b-40">
      <m-switch v-model="value"></m-switch>
    </m-card>

    <h2 class="m-b-20">自定义宽度</h2>
    <m-card class="m-b-40">
      <m-switch v-model="value1" :width="60"></m-switch>
    </m-card>

    <h2 class="m-b-20">文字描述</h2>
    <m-card class="m-b-40">
      <m-switch
        active-text="按月付费"
        inactive-text="按年付费" 
        v-model="value2"></m-switch>
    </m-card>

    <h2 class="m-b-20">图标描述</h2>
    <m-card class="m-b-40">
      <m-switch 
        active-icon-class="m-icon-close"
        inactive-icon-class="m-icon-check" 
        v-model="value3"></m-switch>
    </m-card>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      value1: false,
      value2: false,
      value3: false,
    }
  },
  
}
</script>

<style lang=scss>
.switch-page {

}
</style>