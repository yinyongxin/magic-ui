<template>
  <div 
    class="magic-col" 
    :style="{
      flex: span, 
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
    span: {
      type: Number,
      default: 1
    }
  },
  inject: ['MRow'],
  created() {
    // console.log(this.MRow)
  }
}
</script>

<style lang="scss">
  .magic-col {
     
  }
</style>