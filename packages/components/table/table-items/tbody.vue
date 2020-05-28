<template>
  <tbody class="magic-tbody">
    <slot></slot>
  </tbody>
</template>

<script>
import MTr from './tr'
export default {
  name: 'MTbody',
  components: {
    MTr,
  },
} 
</script>

<style lang="scss">
.magic-tbody {
}
</style>