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