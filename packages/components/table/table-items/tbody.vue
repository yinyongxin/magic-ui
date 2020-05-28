<template>
  <tbody
    cellspacing="0" 
    cellpadding="0" 
    class="magic-tbody">
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
  width: 100%;
}
</style>