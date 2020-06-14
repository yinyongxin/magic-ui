<template>
  <button 
    @click="handleClick"
    class="" 
    :class="['magic-button', `magic-button-${type}`,{
      'button-is-disabled': disabled,
      'is-circle': circle,
    }]"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  },
}
</script>