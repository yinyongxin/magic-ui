<template>
  <div class="magic-tfoot">
    <slot></slot>
  </div>
</template>

<script>
import tableMinix from '../table-minix'
export default {
  name: 'MTfoot',
  mixins: [tableMinix]
} 
</script>

<style lang="scss">
.magic-tfoot {

}
</style>