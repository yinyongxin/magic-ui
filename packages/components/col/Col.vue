<template>
  <div 
    class="magic-col" 
    :style="{
      width: width,
      paddingLeft: MRow.gutter/2 + 'px', 
      paddingRight: MRow.gutter/2 + 'px'
    }"
    :class="{}"
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
    },
    width: {
      type: String,
      default: '100%'
    },
  },
  inject: ['MRow'],
  created() {
    // console.log(this.MRow)
  }
}
</script>