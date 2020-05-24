<template>
  <div class="aside-Menu-group">
    <header class="aside-Menu-group-header">
      <slot name="title"></slot>
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
    margin-bottom: 15px;
    color: inherit;
    .aside-Menu-group-header {
      padding: 5px 8px;
      border-left: 5px solid rgba($color: $ui, $alpha: 1);
    }
  }
</style>