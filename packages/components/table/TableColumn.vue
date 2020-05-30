<template>
  <td 
    :style="{width: width}"
    :class="['magic-table-column', {
      'magic-td-border-right': rootTable.border
    }]">
    <div class="table-cell" >
      <slot 
        v-if="trTable.header"
        name="header"
        >{{label}}</slot>
      <slot
        :scope="rowInfo"
        v-if="!trTable.header"
        >{{rowInfo.row[prop]}}</slot>
    </div>
  </td>
</template>

<script>
import tableMinix from './table-minix'
export default {
  name: 'MTableColumn',
  mixins: [tableMinix],
  inject: ['trTable','rootTable'],
  data() {
    return {
      rowInfo: { // 每一行的数据
        row: this.rootTable.data[this.trTable.rowIndex],
        $index: this.trTable.rowIndex
      }
    }
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
} 
</script>

<style lang="scss">
.magic-table-column {
  display: flex;
  align-items: center;
  padding: 12px 0;
  .table-cell {
    width: 100%;
    padding: 0 10px;
  }
}
</style>