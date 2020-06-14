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