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