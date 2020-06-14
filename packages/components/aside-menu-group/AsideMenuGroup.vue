<template>
  <div class="aside-Menu-group">
    <header v-if="$slots.title" class="aside-Menu-group-header">
      <span class="line"></span>
      <slot name="title">分组标题</slot>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "MAsideMenuGroup",
}
</script>

<style lang="scss">
  .aside-Menu-group {
    color: inherit;
    padding: 10px 0;
    .aside-Menu-group-header {
      height: 48px;
      line-height: 48px;
      padding: 0 40px;
      .line {
        border: 2px solid rgba($color: $ui, $alpha: 1);
        margin-right: 6px;
      }
    }
  }
</style>