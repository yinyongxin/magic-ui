<template>
  <div 
    class="magic-col" 
    :style="{
      flex, 
      paddingLeft: MRow.gutter/2 + 'px', 
      paddingRight: MRow.gutter/2 + 'px'
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MCol',
  props: {
    flex: {
      type: String,
      default: '1'
    }
  },
  inject: ['MRow'],
  created() {
    console.log(this.MRow)
  }
}
</script>

<style lang="scss">
  .magic-col {
     
  }
</style>