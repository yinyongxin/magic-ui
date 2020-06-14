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