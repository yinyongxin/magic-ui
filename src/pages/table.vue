<template>
  <div class="aside-table-page">
    <h1>Table 表格</h1>
    <p>为网站提供数据展示。</p>
    <m-card class="m-b-40">
      <div>
        <m-table :data="tableData">
          <m-table-column
            width="50%"
            prop="date"
            label="日期">
          </m-table-column>
          <m-table-column
            prop="name"
            label="姓名">
          </m-table-column>
          <m-table-column
            prop="address"
            label="地址">
          </m-table-column>
        </m-table>
      </div>
      
    </m-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, 
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style lang="scss">
.aside-table-page {

}
</style>