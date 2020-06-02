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
      :class="['magic-input-inner',{
        'input-is-disabled': disabled,
        'input-is-clearable': clearable||showPassword,
        'input-left-icon': $slots.prefix,
        'input-right-icon': $slots.suffix,
      }]"
      :minlength="minlength"
      :maxlength="maxlength"
      :disabled="disabled"
      autocomplete="off"
      :type="typeName" 
      :value="value" 
      :placeholder="placeholder"
      @change="inputChange"
      @input="inputChange($event)">
      <span v-if="$slots.suffix" class="right-icon">
        <slot name="suffix">右</slot>
      </span>
      <span v-if="minlength||maxlength" class="min-max-number">
        {{minlengthNum}}/{{maxlength}}
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
      typeName: this.type,
      minlengthNum: 0
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
    maxlength: {
      type: String,
    },
    minlength: {
      type: String,
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
      // if(e.target.value.length == 0 && this.minlength) {
      //   this.minlengthNum = parseInt(this.minlength)
      // }else {
        this.minlengthNum =  e.target.value.length
      // }
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
    },
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
      box-shadow: 0 0 0 2px rgba($color: $primary, $alpha: 0.3);
    }
    &:hover { 
      border-color: rgba($color: $primary, $alpha: 1);
      box-shadow: 0 0 0 2px rgba($color: $primary, $alpha: 0.3);
    }
    cursor: pointer;
    display: inline-block;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid  $border-color;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 34px;
    line-height: 34px;
    outline: none;
    padding: 0 10px;
    transition: all .5s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  .input-is-disabled {
    &:hover { 
      border-color: rgba($color: #e4e7ed, $alpha: 1);
    }
    background-color: #f5f7fa;
    border-color: $border-color;
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .input-is-clearable {
    padding: 0 34px 0 15px;
  }
  .disabled-clearable-icon {
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    color: #606266;
    top: 4px;
    right: 10px;
  }
  .input-left-icon {
    padding: 0 15px 0 34px;
  }
  .input-right-icon {
    padding: 0 34px 0 15px;
  }
  .left-icon {
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    color: #606266;
    top: 4px;
    left: 8px;
  }
  .right-icon {
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    color: #606266;
    top: 4px;
    right: 8px;
  }
  .min-max-number {
    cursor: pointer;
    position: absolute;
    font-size: 14px;
    color: #606266;
    top: 7px;
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