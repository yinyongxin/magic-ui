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
      'magic-table-border': border
    }]">

    <m-thead v-if="showHeader">
      <m-tr header>
        <slot></slot>
      </m-tr>
    </m-thead>

    <m-tbody>
      <m-tr v-for="(item, index) in data" :key="index" :rowIndex="index">
        <slot></slot>
      </m-tr>
    </m-tbody>
  </table>
</template>

<script>
import MThead from '../table-items/thead'
import MTbody from '../table-items/tbody'
import MTfoot from '../table-items/tfoot'
import MTr from '../table-items/tr'
import MTd from '../table-items/td'
import MTh from '../table-items/th'

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
  },
  methods: {
  },
} 
</script>