<template>
  <div class="aside-table-page">
    <h1>Table 表格</h1>
    <p>为网站提供数据展示。</p>
    <h2>基础用法</h2>
    <p class="m-b-20">基础的表格用法。可以为m-table-column设置宽度来定义每一列的宽度，单位可以是%或者px</p>
    <m-card>
      <m-table :data="tableData">
        <m-table-column
          width="20%"
          prop="date"
          label="日期">
        </m-table-column>
        <m-table-column
          width="150px"
          prop="name"
          label="姓名">
        </m-table-column>
        <m-table-column
          prop="address"
          label="地址">
        </m-table-column>
      </m-table>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="640px">
      <pre>
        <code>
          &lt;m-table :data="tableData"&gt;
            &lt;m-table-column
              width="20%"
              prop="date"
              label="日期"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              width="150px"
              prop="name"
              label="姓名"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="address"
              label="地址"&gt;
            &lt;/m-table-column&gt;
          &lt;/m-table&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                tableData: [{
                  date: '2016-05-02',
                  name: '银永鑫',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '银永鑫2',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, 
                {
                  date: '2016-05-03',
                  name: '银永鑫3',
                  address: '上海市普陀区金沙江路 1516 弄'
                }]
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>带边框的表格</h2>
    <p class="m-b-20">具有边框。通过为m-table标签设置border属性</p>
    <m-card>
      <m-table border :data="tableData">
        <m-table-column
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
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="640px">
      <pre>
        <code>
          &lt;m-table border :data="tableData"&gt;
            &lt;m-table-column
              prop="date"
              label="日期"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="name"
              label="姓名"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="address"
              label="地址"&gt;
            &lt;/m-table-column&gt;
          &lt;/m-table&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                tableData: [{
                  date: '2016-05-02',
                  name: '银永鑫',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '银永鑫2',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, 
                {
                  date: '2016-05-03',
                  name: '银永鑫3',
                  address: '上海市普陀区金沙江路 1516 弄'
                }]
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>


    <h2>无表头</h2>
    <p class="m-b-20">如果没有表头可以通过设置表头不显示。通过为m-table标签设置:show-header="false"</p>
    <m-card>
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
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="640px">
      <pre>
        <code>
          &lt;m-table :show-header="false" :data="tableData"&gt;
            &lt;m-table-column
              prop="date"
              label="日期"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="name"
              label="姓名"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="address"
              label="地址"&gt;
            &lt;/m-table-column&gt;
          &lt;/m-table&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                tableData: [{
                  date: '2016-05-02',
                  name: '银永鑫',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '银永鑫2',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, 
                {
                  date: '2016-05-03',
                  name: '银永鑫3',
                  address: '上海市普陀区金沙江路 1516 弄'
                }]
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>设置表格宽度</h2>
    <p class="m-b-20">通过withd属性设置表格宽度，可以使任意单位（如px或者%）。</p>
    <m-card class="m-b-5">
      <h2>设置百分比宽度%</h2>
      <m-table width="50%" :data="tableData">
        <m-table-column
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
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="850px">
      <pre>
        <code>
          &lt;m-table width="50%" :data="tableData"&gt;
            &lt;m-table-column
              prop="date"
              label="日期"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="name"
              label="姓名"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="address"
              label="地址"&gt;
            &lt;/m-table-column&gt;
          &lt;/m-table&gt;
          &lt;m-table width="800px" :data="tableData"&gt;
            &lt;m-table-column
              prop="date"
              label="日期"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="name"
              label="姓名"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="address"
              label="地址"&gt;
            &lt;/m-table-column&gt;
          &lt;/m-table&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                tableData: [{
                  date: '2016-05-02',
                  name: '银永鑫',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '银永鑫2',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, 
                {
                  date: '2016-05-03',
                  name: '银永鑫3',
                  address: '上海市普陀区金沙江路 1516 弄'
                }]
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>设置阴影</h2>
    <p class="m-b-20">通过shadow属性设置表格阴影，默认是无阴影。</p>
    <m-card class="m-b-5">
      <h2>鼠标移上去显示阴影：hover</h2>
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
      <h2>一直显示阴影：always</h2>
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
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="850px">
      <pre>
        <code>
          &lt;m-table shadow='hover' :data="tableData"&gt;
            &lt;m-table-column
              prop="date"
              label="日期"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="name"
              label="姓名"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="address"
              label="地址"&gt;
            &lt;/m-table-column&gt;
          &lt;/m-table&gt;
          &lt;m-table shadow='always' :data="tableData"&gt;
            &lt;m-table-column
              prop="date"
              label="日期"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="name"
              label="姓名"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="address"
              label="地址"&gt;
            &lt;/m-table-column&gt;
          &lt;/m-table&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                tableData: [{
                  date: '2016-05-02',
                  name: '银永鑫',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '银永鑫2',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, 
                {
                  date: '2016-05-03',
                  name: '银永鑫3',
                  address: '上海市普陀区金沙江路 1516 弄'
                }]
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>自定义列模板</h2>
    <p class="m-b-20">自定义列的显示内容，可组合其他组件使用。</p>
    <m-card class="m-b-5">
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
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="850px">
      <pre>
        <code>
          &lt;m-table :data="tableData"&gt;
            &lt;m-table-column
              prop="date"
              label="日期"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column
              prop="name"
              label="姓名"&gt;
            &lt;/m-table-column&gt;
            &lt;m-table-column label="操作"&gt;
              &lt;template v-slot="slotProps"&gt;
                &lt;m-button
                  class="m-r-15"
                  @click="handleEdit(slotProps.scope)"&gt;编辑&lt;/m-button&gt;
                &lt;m-button
                  type="error"
                  @click="handleDelete(slotProps)"&gt;删除&lt;/m-button&gt;
              &lt;/template&gt;
            &lt;/m-table-column&gt;
          &lt;/m-table&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                tableData: [{
                  date: '2016-05-02',
                  name: '银永鑫',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '银永鑫2',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, 
                {
                  date: '2016-05-03',
                  name: '银永鑫3',
                  address: '上海市普陀区金沙江路 1516 弄'
                }]
              },
              methods: {
                handleEdit(data) {
                  console.log(data.$index, data.row);
                },
                handleDelete(data) {
                  console.log(data);
                }
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>
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
        name: '银永鑫2',
        address: '上海市普陀区金沙江路 1517 弄'
      }, 
      {
        date: '2016-05-03',
        name: '银永鑫3',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit(data) {
      console.log(data.$index, data.row);
    },
    handleDelete(data) {
      console.log(data);
    }
  }
}
</script>

<style lang="scss">
.aside-table-page {

}
</style>