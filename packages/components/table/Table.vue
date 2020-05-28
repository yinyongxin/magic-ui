<template>
  <table
    :style="{
      width: width,
      textAlign: align
    }"
    class="magic-table">

    <m-thead>
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
      slotDefaultList: []
    }
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    data: {
      type: Array,
      default: () => []
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  provide() {
    return {
      rootTable: this
    }
  },
  mounted() {
    console.log(this.$slots.default)
    // this.$nextTick(function() {
      this.slotDefaultList = this.$slots.default.map(item => {
        return {
          label: item.componentInstance.label,
          prop: item.componentInstance.prop,
          width: item.componentInstance.width,
        }
      // })  
      // console.log(this.slotDefaultList) 
    })

  },
  methods: {
  },
} 
</script>

<style lang="scss">
.magic-table {
  .table-magic-tr {
    transition: all 0.3s;
    &:hover {
      background-color: $hover-color;
    }
  }
}
</style>