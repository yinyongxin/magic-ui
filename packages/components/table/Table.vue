<template>
  <table
    :style="{
      width: width,
      textAlign: align
    }"
    cellspacing="0" 
    cellpadding="0"
    :class="['magic-table',
      `is-shadow-${shadow}`, {
      isBorder: border
    }]">

    <m-thead v-if="showHeader">
      <m-tr header>
        <slot></slot>
      </m-tr>
    </m-thead>

    <m-tbody>
      <m-tr class="table-magic-tr" v-for="(item, index) in data" :key="index" :rowIndex="index">
        <slot></slot>
      </m-tr>
    </m-tbody>
  </table>
</template>

<script>
import MThead from './table-items/thead'
import MTbody from './table-items/tbody'
import MTfoot from './table-items/tfoot'
import MTr from './table-items/tr'
import MTd from './table-items/td'
import MTh from './table-items/th'

export default {
  name: 'MTable',
  components: {
    MThead,
    MTbody,
    MTfoot,
    MTr,
    MTd,
    MTh
  },
  data() {
    return {
      // slotDefaultList: []
    }
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    border: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    align: {
      type: String,
      default: 'left'
    },
    shadow: {
      type: String,
      default: 'nover'
    },
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      rootTable: this
    }
  },
  mounted() {

    // this.slotDefaultList = this.$slots.default.map(item => {
    //   return {
    //     label: item.componentInstance.label,
    //     prop: item.componentInstance.prop,
    //     width: item.componentInstance.width,
    //   }
    // })

  },
  methods: {
  },
} 
</script>

<style lang="scss">
.magic-table {
  border-collapse: collapse; // 设置表格边框的间距问题
  transition: all 0.5s;
  .table-magic-tr {
    transition: all 0.5s;
    &:hover {
      background-color: #f3f3f3;
    }
  }
}
.isBorder {
  border-top: 1px solid $border-color;
  border-left: 1px solid $border-color;
}
</style>