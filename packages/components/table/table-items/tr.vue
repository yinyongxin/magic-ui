<template>
  <tr class="magic-table-tr">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  props: {
    rowIndex: {
      type: Number
    },
    header: {
      type: Boolean,
      default: false
    },
  },
  provide() {
    return {
      trTable: this
    }
  },
}
</script>

<style lang='scss'>
.magic-table-tr {
  border-bottom: 1px solid $border-color;
  width: 100%;
  background-color: #fff;
  display: flex;
}
</style>