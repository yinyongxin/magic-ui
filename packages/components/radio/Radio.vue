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