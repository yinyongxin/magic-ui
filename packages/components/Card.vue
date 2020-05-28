<template>
  <div 
    class="magic-card" 
    :class="[`is-shadow-${shadow}`]" 
    :style="{width: width}"
  >
    <div 
      v-if="$slots.header" 
      class="magic-card-header" 
      :class="{'magic-card-header-border': HeaderBorder}">
      <slot name="header">标题</slot>
    </div>

    <div 
      class="magic-card-main"
      :style="BodyStyle">
      <slot>内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MCard',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    padding: {
      type: String,
      default: '18'
    },
    shadow: {
      type: String,
      default: 'hover'
    },
    HeaderBorder: {
      type: Boolean,
      default: true
    },
    BodyStyle: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  created() {
    // console.log(this.width)
  }
}
</script>

<style lang="scss">
.magic-card {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid $border-color;
  background-color: #fff;
  transition: all .4s;
  .magic-card-header {
    padding: 18px;
  }
  .magic-card-header-border {
    border-bottom: 1px solid #DCDFE6;
  }
  .magic-card-main {
    padding: 18px;
  }
}
</style>