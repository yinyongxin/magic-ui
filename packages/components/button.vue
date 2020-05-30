<template>
  <button 
    @click="handleClick"
    class="magic-button" 
    :class="[`magic-button-${type}`, {
      'button-is-disabled': disabled,
      'is-circle': circle,
    }]"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
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
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  },
}
</script>

<style lang="scss">
.magic-button {
  &:focus {
    animation: button 0.3s ease-in;
  }
  &:hover{
    box-shadow: 2px 2px 6px $content-color;
  }
  &:active {
    background-color: #f3f3f3;
  }
  border: 1px solid $border-color;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  white-space: nowrap;
  height: 34px;
  padding: 0 15px;
  font-size: inherit;
  border-radius: 2px;
  transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
  color: $content-color;
  background-color: #fff;
  border-color: $border-color;
  user-select: none;
  -ms-touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.magic-button-primary {
  color: $font-light;
  background-color: $primary;
  border-color:  $primary;
  &:active {
    background-color: $primary-dark;
  }
}
.magic-button-success {
  color: $font-light;
  background-color: $success;
  border-color: $success;
  &:active {
    background-color: $success-dark;
  }
}
.magic-button-warning {
  color: $font-light;
  background-color: $warning;
  border-color: $warning;
  &:active {
    background-color: $warning-dark;
  }
}
.magic-button-error {
  color: $font-light;
  background-color: $error;
  border-color: $error;
  &:active {
    background-color: $error-dark;
  }
}
.button-is-disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
  &:hover {box-shadow: none;}
  &:active {background-color: #f5f7fa;}
  transition: none;
}
.is-circle {
  border-radius: 50%;
  padding: 0 9px;
}
@keyframes button {
  0% {
    transform: scale(1,1)
  }
  50% {
    transform: scale(0.9,0.9)
  }
  100% {
    transform: scale(1,1)
  }
}
</style>