<template>
  <div class="magic-row">
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
    justify-content: space-between;
  }
</style>