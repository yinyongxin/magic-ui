<template>
  <div class="magic-input-page">
    <h1>Input 输入框</h1>
    <p>通过鼠标或键盘输入字符</p>
    <h2>基础用法</h2>
    <p class="m-b-20">基础的表格用法。可以为m-table-column设置宽度来定义每一列的宽度，单位可以是%或者px</p>
    <m-card class="m-b-5">
      <h4>px设置宽度</h4> <m-input v-model="value1" width="180px"></m-input> 
      <h4>%设置宽度</h4><m-input v-model="value1" width="50%"></m-input> 
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-input width="180px" v-model="value"&gt;&lt;/m-input&gt;
            &lt;m-input width="50%" v-model="value"&gt;&lt;/m-input&gt;
          &lt;/template&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                value: ''
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>禁用状态</h2>
    <p class="m-b-20">通过设置disabled属性设置</p>
    <m-card class="m-b-5">
      <m-input disabled v-model="value2" width="50%"></m-input> 
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-input disabled v-model="value"&gt;&lt;/m-input&gt;
          &lt;/template&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                value: ''
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>


    <h2>可清空</h2>
    <p class="m-b-20">通过设置clearable属性设置</p>
    <m-card class="m-b-5">
      <m-input clearable v-model="value3" width="50%"></m-input> 
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-input clearable v-model="value"&gt;&lt;/m-input&gt;
          &lt;/template&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                value: ''
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>


    <h2>密码框</h2>
    <p class="m-b-20">使用show-password属性即可得到一个可切换显示隐藏的密码框</p>
    <m-card class="m-b-5">
      <m-input show-password v-model="value4" type="password" width="50%"></m-input> 
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-input show-password v-model="value"&gt;&lt;/m-input&gt;
          &lt;/template&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                value: ''
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>带icon的输入框</h2>
    <p class="m-b-20">可以通过 slot 来放置图标 prefix和 suffix 插槽，在input 组件首部和尾部增加显示图标。</p>
    <m-card class="m-b-5">
      <m-input
        width="50%" 
        class="m-b-10"
        placeholder="请选择内容"
        v-model="value5">
        <i slot="suffix" class="m-input__icon m-icon-date"></i>
      </m-input>
      <m-input
        width="50%"
        placeholder="请输入内容"
        v-model="value6">
        <i slot="prefix" class="m-input__icon m-icon-search"></i>
      </m-input>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="460px">
      <pre>
        <code>
          &lt;template&gt;
             &lt;m-input
              width="50%" 
              class="m-b-10"
              placeholder="请选择日期"
              v-model="value"&gt;
               &lt;i slot="suffix" class="m-input__icon m-icon-date"&gt; &lt;/i&gt;
             &lt;/m-input&gt;
             &lt;m-input
              width="50%"
              placeholder="请输入内容"
              v-model="value"&gt;
               &lt;i slot="prefix" class="m-input__icon m-icon-search"&gt; &lt;/i&gt;
             &lt;/m-input&gt;
          &lt;/template&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                value: ''
              }
            },
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>


    <h2>输入长度限制</h2>
    <p class="m-b-20">maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。</p>
    <m-card class="m-b-5">
      <m-input
        width="50%" 
        class="m-b-10"
        maxlength="10"
        placeholder="输入内容"
        v-model="value6">
      </m-input>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="200px">
      <pre>
        <code>
          &lt;template&gt;
             &lt;m-input
              width="50%" 
              class="m-b-10"
              placeholder="请选择日期"
              v-model="value"&gt;
               &lt;i slot="suffix" class="m-input__icon m-icon-date"&gt; &lt;/i&gt;
             &lt;/m-input&gt;
             &lt;m-input
              width="50%"
              placeholder="请输入内容"
              v-model="value"&gt;
               &lt;i slot="prefix" class="m-input__icon m-icon-search"&gt; &lt;/i&gt;
             &lt;/m-input&gt;
          &lt;/template&gt;
          &lt;script&gt;
          export default {
            data() {
              return {
                value: ''
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
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
    }
  },
}
</script>

<style lang='scss'>
</style>