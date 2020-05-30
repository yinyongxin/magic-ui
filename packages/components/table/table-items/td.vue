<template>
  <td
    :class="['magic-td']"
    >
      <slot></slot>
  </td>
</template>

<script>
export default {
  inject: ['rootTable'],
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
  padding: 12px 0;
}
</style>