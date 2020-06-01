<template>
  <div class="magic-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MRadioGroup',
  provide() {
    return {
      radioGroup: this
    }
  },
  props: {
    value: null,
  }
}
</script>

<style lang="scss">
.magic-radio {
  
}
</style>