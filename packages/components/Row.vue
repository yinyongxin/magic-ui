<template>
  <div 
    class="magic-row" 
    :style="{
      justifyContent: justify,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'flex-start'
    }
  },
  provide() {
    return {
      MRow: {
        gutter: this.gutter
      }
    }
  },
}
</script>

<style lang="scss">
  .magic-row {
    display: flex;
  }
</style>