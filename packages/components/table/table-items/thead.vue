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
  width: 100%;
  font-weight: 600;
}
</style>