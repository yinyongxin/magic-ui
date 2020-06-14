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