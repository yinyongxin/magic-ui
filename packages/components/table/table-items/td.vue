<template>
  <td
    :style="{width: width}"
    class="magic-td"
    >
      <slot></slot>
  </td>
</template>

<script>
export default {
  // inject: ['rootTable','colunmTable'],
  props: {
    width: {
      type: String,
      default: '100%'
    },

  },
  provide() {
    return {
      tdTable: this
    }
  },
}
</script>

<style lang='scss'>
.magic-td {
  &>div {
    width: 100%;
  }
  padding: 12px 0;
}
</style>