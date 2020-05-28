<template>
  <td
    :style="{width: width}"
    :class="['magic-td', {
      'magic-td-border-right': rootTable.border
    }]"
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
  &>div {
    width: 100%;
  }
  padding: 12px 0;
}
.magic-td-border-right {
  border-right: 1px solid $border-color;
}
</style>