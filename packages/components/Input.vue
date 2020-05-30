<template>
  <div
    :class="['magic-input',{
    }]"
    :style="[{
      width: width
    }]">
    <span v-if="$slots.prefix" class="left-icon">
      <slot name="prefix">左</slot>
    </span>
    <input 
      :class="[{
        'input-is-disabled': disabled,
        'input-is-clearable': clearable,
        'input-left-icon': $slots.prefix,
        'input-right-icon': $slots.suffix,
      }]"
      :disabled="disabled"
      autocomplete="off"
      class="magic-input-inner" 
      :type="typeName" 
      :value="value" 
      :placeholder="placeholder"
      @input="inputChange($event)">
      <span v-if="$slots.suffix" class="right-icon">
        <slot name="suffix">右</slot>
      </span>
      <transition name="slide-fade">
        <span @click="clearableFn" v-if="clearable && (value!=='')" class="disabled-clearable-icon">
          <i :class="['m-icon-circle-close']"></i>
        </span>
        <span @click="showPasswordFn" v-if="showPassword && (value!=='')" class="disabled-clearable-icon">
          <i :class="['m-icon-view']"></i>
        </span>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'MInput',
  data() {
    return {
      typeName: this.type
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false 
    },
    showPassword: {
      type: Boolean,
      default: false 
    },
    width: {
      type: String,
      default: '100%'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
  },
  methods: {
    inputChange(e) {
      this.$emit('input', e.target.value)
    },
    showPasswordFn() {
      if(this.typeName == 'password') {
        this.typeName = 'Text'
      }else {
        this.typeName = 'password'
      }
    },
    clearableFn() {
      this.$emit('input', '')
    }
  },
}
</script>

<style lang="scss">
.magic-input {
  position: relative;
  top: 0;
  left: 0;
  .magic-input-inner {
    &:focus {
      border-color: $primary;
    }
    cursor: pointer;
    display: inline-block;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  .input-is-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .input-is-clearable {
    padding: 0 40px 0 15px;
  }
  .disabled-clearable-icon {
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    color: #606266;
    top: 8px;
    right: 10px;
  }
  .input-left-icon {
    padding: 0 15px 0 40px;
  }
  .input-right-icon {
    padding: 0 40px 0 15px;
  }
  .left-icon {
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    color: #606266;
    top: 8px;
    left: 10px;
  }
  .right-icon {
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    color: #606266;
    top: 8px;
    right: 10px;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>