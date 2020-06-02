<template>
  <label 
    :class="['magic-radio', {
      'magic-radio-border': border,
      'magic-radio-border-active': border&&model==label,
      'magic-radio-is-disabled': disabled
    }]"
    >
    <input 
      class="magic-radio-input" 
      type="radio" 
      v-model="model" 
      :disabled="disabled"
      :name="name" 
      :value="label">
    <span :class="['magic-radio-button', {
      'magic-radio-active': model==label,
      'magic-radio-button-is-disabled': disabled
    }]">
      <i v-show="model==label" :class="[icon, 'magic-radio-icon']"></i>
    </span>
    <span class="magic-radio-label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MRadio',
  inject: {
    radioGroup: {
      default: null
    }
  },
  props: {
    value: {
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup? this.radioGroup.value: this.value
      },  
      set(value) {
        return this.isGroup? this.radioGroup.$emit('input', value):this.$emit('input', value)
      }
    },
    isGroup() { // 判断是否在单选框组里
      return !!this.radioGroup
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('input', e.target.value)
    }
  },
}
</script>

<style lang="scss">
.magic-radio {
  user-select: none;
  -ms-touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: relative;
  .magic-radio-input {
    position: absolute;
    visibility: hidden;
    z-index: -1;
    width: 0;
    height: 0;
  }
  .magic-radio-button {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid $border-color;
    border-radius: 50%;
    overflow: hidden;
    color: $font-light;
    transition: all 0.5s;
    &:hover { 
      border-color: rgba($color: $primary, $alpha: 1);
      box-shadow: 0 0 0 2px rgba($color: $primary, $alpha: 0.3);
    }
  }
  .magic-radio-button-is-disabled {
    &:hover { 
      border: 1px solid $border-color;
      box-shadow: none;
    }
    box-shadow: none !important;
    background: $background-color !important;
    color: $font-dark !important;
  }
  .magic-radio-active {
    background: $primary; 
    animation: magic-radio-button 0.5s;
    box-shadow: 0 0 0 2px rgba($color: $primary, $alpha: 0.3);
  }
  .magic-radio-icon {
    vertical-align: top;
    width:  15px;
    height: 16px;
    text-align: center;
    line-height: 18px;
    font-weight: 600;
    animation: magic-radio-icon 0.5s;
  }
  .magic-radio-label {
    position: relative;
    top: -4px;
    left: 0;
    padding-left: 10px;
  }
  @keyframes magic-radio-icon {
    0% {
      transform: scale(0.2,0.2);
    }
    100% {
      transform: scale(1,1);
    }
  } 
  @keyframes magic-radio-button {
    0% {
      transform: scale(1,1);
    }
    50% {
      transform: scale(0.5,0.5);
    }
    100% {
      transform: scale(1,1);
    }
  } 
}
.magic-radio-border {
  &:hover {
    border: 1px solid $primary;
  }
  display: inline-block;
  border: 1px solid $border-color;
  border-radius: 4px;
  box-sizing: border-box;
  height: 34px;
  padding: 7px 12px 0 12px;
  transition: all 0.5s;
}
.magic-radio-border-active {
  border: 1px solid $primary;
  background: rgba($color: $primary, $alpha: 0.2);
}
.magic-radio-is-disabled {
  &:hover { 
    border-color: rgba($color: #e4e7ed, $alpha: 1);
  }
  background: $background-color;
  color: $font-dark !important;
  border-color: $border-color;
  cursor: not-allowed;
}
</style>