<template>
  <thead class="magic-thead">
    <slot></slot>
  </thead>
</template>

<script>
export default {
  name: 'MThead',
} 
</script>

<style lang="scss">
.magic-thead {
  border-bottom: 1px solid $border-color;
  font-weight: 600;
}
</style>