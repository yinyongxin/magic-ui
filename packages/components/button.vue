<template>
  <button 
    @click="handleClick"
    class="magic-button" 
    :class="[`magic-button-${type}`, {
      'is-disabled': disabled,
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
@import '../assets/color.scss';
.magic-button {
  &:focus {
     outline:0;
  }
  &:hover{
    box-shadow: 1px 1px 5px $content-color;
  }
  &:focus {
    animation: button 0.3s ease-in;
  }
  border: 1px solid $border-color;
  display: inline-block;
  margin: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  // border: 1px solid transparent;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 2px;
  transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
  color: #515a6e;
  background-color: #fff;
  border-color: #dcdee2;
}
.magic-button-primary {
  color: #fff;
  background-color: $primary;
  border-color:  $primary;
  &:active {
    background-color: $primary-dark;
  }
}
.magic-button-success {
  color: #fff;
  background-color: $success;
  border-color: $success;
  &:active {
    background-color: $success-dark;
  }
}
.magic-button-warning {
  color: #fff;
  background-color: $warning;
  border-color: $warning;
  &:active {
    background-color: $warning-dark;
  }
}
.magic-button-error {
  color: #fff;
  background-color: $error;
  border-color: $error;
  &:active {
    background-color: $error-dark;
  }
}
.is-disabled {
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
  padding:  0 8.5px;
}
@keyframes button {
  0% {
    transform: scale(1,1)
  }
  50% {
    transform: scale(0.8,0.8)
  }
  100% {
    transform: scale(1,1)
  }
}
</style>