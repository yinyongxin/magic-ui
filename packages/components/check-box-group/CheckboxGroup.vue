<template>
  <div class="magic-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MCheckboxGroup',
  provide() {
    return {
      checkboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default: [],
    },
  },
}
</script>