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
export default {
  name: 'MTableColumn',
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