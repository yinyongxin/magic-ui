<template>
  <div class="magic-card" :class="[`is-shadow-${shadow}`]" :style="{width: width+'px'}">
    <header v-if="$slots.title" class="magic-card-header">
      <slot name="title">标题</slot>
    </header>
    <main class="magic-card-main">
      <slot>内容</slot>
    </main>
    <footer v-if="$slots.footer" class="magic-card-header">
      <slot name="footer">标题</slot>
    </footer>
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
    }
  },
  created() {
    // console.log(this.width)
  }
}
</script>

<style lang="scss">
.magic-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: .4s;
  .magic-card-header {
    padding: 18px 20px;
    border-bottom: 1px solid #e0e0e0;
    box-sizing: border-box;
  }
  .magic-card-main {
    padding: 20px;
  }
}
.is-shadow-always{
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);
}
.is-shadow-hover{
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);
  }
}
.is-shadow-never{
  box-shadow: none;
}
</style>