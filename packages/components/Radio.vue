<template>
  <label 
    :class="['magic-radio', {
      'magic-radio-border': border,
      'magic-radio-border-active': border&&model==label
    }]"
    >
    <input 
      class="magic-radio-input" 
      type="radio" 
      v-model="model" 
      :name="name" 
      :value="label">
    <span :class="['magic-radio-button', {
      'magic-radio-active': model==label
    }]">
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
    transition: all 1s;
    &:hover { 
      border-color: rgba($color: $primary, $alpha: 1);
    }
  }
  .magic-radio-active {
    background: $primary; 
    animation: magic-radio-button 0.5s;
  }
  .magic-radio-label {
    position: relative;
    top: -4px;
    left: 0;
    padding-left: 10px;
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
</style>