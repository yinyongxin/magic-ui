<template>
  <td
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