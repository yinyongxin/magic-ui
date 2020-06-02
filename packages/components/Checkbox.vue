<template>
  <label 
    :class="['magic-checkbox', {
      'magic-checkbox-border': border,
      'magic-checkbox-border-active': border&&isChecked,
      'magic-checkbox-is-disabled': disabled
    }]"
    >
    <input 
      class="magic-checkbox-input" 
      type="checkbox" 
      :disabled="disabled"
      v-model="model" 
      :name="name" 
      :value="label">
    <span :class="['magic-checkbox-button', {
      'magic-checkbox-active': isChecked,
      'magic-checkbox-button-is-disabled': disabled
    }]">
      <i v-show="isChecked" :class="[icon, 'magic-checkbox-icon']"></i>
    </span>
    <span class="magic-checkbox-label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MCheckbox',
  inject: {
    checkboxGroup: {
      default: null
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
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
      default: 'm-icon-check'
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup? this.checkboxGroup.value : this.value
      },  
      set(value) {
        if (this.isGroup) {
          this.checkboxGroup.$emit('input', value)
        } else {
           return this.$emit('input', value)
        }
      }
    },
    isGroup() { // 判断是否在多选框组里
      return !!this.checkboxGroup
    },
    isChecked() {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
.magic-checkbox {
  cursor: pointer;
  position: relative;
  .magic-checkbox-input {
    position: absolute;
    visibility: hidden;
    z-index: -1;
    width: 0;
    height: 0;
  }
  .magic-checkbox-button {
    overflow: hidden;
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid $border-color;
    border-radius: 3px;
    overflow: hidden;
    transition: all 0.6s;
    color: $font-light;
    &:hover { 
      border-color: rgba($color: $primary, $alpha: 1);
      box-shadow: 0 0 0 2px rgba($color: $primary, $alpha: 0.3);
    }
  }
  .magic-checkbox-button-is-disabled {
    &:hover { 
      border: 1px solid $border-color;
      box-shadow: none;
    }
    background: $background-color !important;
    color: $font-dark !important;
  }
  .magic-checkbox-active {
    background: $primary; 
    // animation: magic-checkbox-button 0.5s;
  }
  .magic-checkbox-icon {
    vertical-align: top;
    width:  15px;
    height: 16px;
    text-align: center;
    line-height: 18px;
    font-weight: 600;
    animation: magic-checkbox-button 0.5s;
  }
  .magic-checkbox-label {
    position: relative;
    top: -4px;
    left: 0;
    padding-left: 10px;
  }
  @keyframes magic-checkbox-button {
    0% {
      transform: scale(0.2,0.2);
    }
    100% {
      transform: scale(1,1);
    }
  } 
}
.magic-checkbox-border {
  display: inline-block;
  border: 1px solid $border-color;
  border-radius: 4px;
  box-sizing: border-box;
  height: 34px;
  padding: 7px 12px 0 12px;
  transition: all 0.5s;
}
.magic-checkbox-border-active {
  border: 1px solid $primary;
  background: rgba($color: $primary, $alpha: 0.2);
}
.magic-checkbox-is-disabled {
  &:hover { 
    border-color: rgba($color: #e4e7ed, $alpha: 1);
  }
  color: $font-dark !important;

  border-color: $border-color;
  cursor: not-allowed;
}
</style>