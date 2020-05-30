<template>
  <div class="aside-table-page">
    <h1>Table 表格</h1>
    <p>为网站提供数据展示。</p>
    <h2>基础用法</h2>
    <p class="m-b-20">基础的表格用法。</p>
    <m-card class="m-b-40">
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
    </m-card>

    <h2>带边框的表格</h2>
    <p class="m-b-20">具有边框。</p>
    <m-card class="m-b-40">
      <m-table border :data="tableData">
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
    </m-card>

    <h2>无表头</h2>
    <p class="m-b-20">如果没有表头可以通过设置表头不显示。</p>
    <m-card  class="m-b-40">
      <m-table :show-header="false" :data="tableData">
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
    </m-card>

    <h2>设置表格宽度</h2>
    <p class="m-b-20">通过withd属性设置表格宽度，可以使任意单位（如px或者%）。</p>
    <m-card  class="m-b-40">
      <h2>设置百分比宽度%</h2>
      <m-table width="50%" :data="tableData">
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
      <h2>设置像素宽度px</h2>
      <m-table width="800px" :data="tableData">
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
    </m-card>

    <h2>设置阴影</h2>
    <p class="m-b-20">通过shadow属性设置表格宽度，默认是无阴影。</p>
    <m-card  class="m-b-40">
      <h2>鼠标移上去显示阴影</h2>
      <m-table shadow='hover' class="m-b-20" :data="tableData">
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
      <h2>一直显示阴影</h2>
      <m-table shadow='always' :data="tableData">
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
    </m-card>

    <h2>自定义列模板</h2>
    <p class="m-b-20">自定义列的显示内容，可组合其他组件使用。</p>
    <m-card  class="m-b-40">
      <m-table class="m-b-20" :data="tableData">
        <m-table-column
          width="50%"
          prop="date"
          label="日期">
        </m-table-column>
        <m-table-column
          prop="name"
          label="姓名">
        </m-table-column>
        <m-table-column label="操作">
          <template v-slot="slotProps">
            <m-button
              class="m-r-15"
              @click="handleEdit(slotProps.scope)">编辑</m-button>
            <m-button
              type="error"
              @click="handleDelete(slotProps)">删除</m-button>
          </template>
        </m-table-column>
      </m-table>
    </m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '银永鑫',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '樊小迪',
        address: '上海市普陀区金沙江路 1517 弄'
      }, 
      {
        date: '2016-05-03',
        name: '孔孟',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit(scope) {
      console.log(scope.$index, scope.row);
    },
    handleDelete(scope) {
      console.log(scope);
    }
  }
}
</script>

<style lang="scss">
.aside-table-page {

}
</style>