<template>
  <div 
    role="switch"
    :class="['magic-switch', {'magic-switch-is-disabled': disabled}]"
    @click="handleClick"
  >
    <input 
      type="checkbox" 
      class="magic-switch-input" 
      :name="name"
      :value="value"
      :disabled="disabled"
    >
    <span v-if="inactiveText" class="inactiveText" :style="{color: value? inactiveColor: activeColor}">{{inactiveText}}</span>
    <span :style="{width: width+'px'}" :class="['magic-switch-core', {'magic-switch-is-disabled': disabled}]" ref="core">
      <i v-if="inactiveIconClass" :class="[inactiveIconClass, {'inactive-icon': (value && !disabled)}]"></i>
      <span
        class="magic-switch-button"
        :class="{isActive: value && !disabled}"></span>
      <i v-if="activeIconClass" :class="[activeIconClass, {'active-icon': !(value && !disabled)}]"  ></i>
    </span> 
    <span v-if="activeText" class="activeText" :style="{color: value? activeColor: inactiveColor}">{{activeText}}</span>
  </div>
</template>

<script>
export default {  
  name: 'MSwitch',
  data() {
    return {
    }
  },
  props: {
    width: {
      type: Number,
      default: 40
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: ''
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: '#2db7f5'
    },
    inactiveColor: {
      type: String,
      default: '#dcdcdc'
    },
  },
  methods: {
    async handleClick() {
      // 如果是禁用状态则不进行处理
      if (!this.disabled) {
        this.$emit('input', !this.value)
        await this.$nextTick()
        // 如果成功刷新了界面再更新颜色
        this.setColor()
      }
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted() { 
  }
}
</script>