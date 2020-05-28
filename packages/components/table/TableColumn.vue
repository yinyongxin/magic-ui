<template>
  <m-td class="magic-table-column" :width="width">
    <div class="table-cell" >
      <slot 
        v-if="trTable.header"
        name="header"
        >{{label}}</slot>
      <slot
        v-if="!trTable.header"
        >{{rootTable.data[trTable.rowIndex][prop]}}</slot>
    </div>
  </m-td>
</template>

<script>
import MThead from './table-items/thead'
import MTbody from './table-items/tbody'
import MTfoot from './table-items/tfoot'

import MTh from './table-items/th'
import MTr from './table-items/tr'
import MTd from './table-items/td'


import tableMinix from './table-minix'
export default {
  name: 'MTableColumn',
  mixins: [tableMinix],
  inject: ['trTable','rootTable'],
  components: {
    MThead,
    MTbody,
    MTfoot,
    MTh,
    MTd
  },
  props: {
    label: {
      type: String,
      default:''
    },
    prop: {
      type: String
    },
    index: {
      type: Number,
      default: 0
    },
    width: {
      type: String,
      default: '100%'
    },
  },
  created() {
    console.log(this.trTable.header)
  },
} 
</script>

<style lang="scss">
.magic-table-column {
  .table-cell {
    padding: 0 10px;
  }
}
</style>