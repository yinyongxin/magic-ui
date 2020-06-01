<template>
  <div class="radio-page">
    <h1>Radio 单选框</h1>
    <h2 class="m-b-20">基本用法</h2>
    <m-card class="m-b-5">
      <m-radio v-model="value1" label="1">银永鑫</m-radio><br>
      <m-radio v-model="value1" label="2"></m-radio>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;m-radio v-model="value" label="1"&gt;银永鑫&lt;/m-radio&gt;&lt;br&gt;
          &lt;m-radio v-model="value" label="2"&gt;&lt;/m-radio&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                value: '1',
              }
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>


    <h2 class="m-b-20">单选框组</h2>
    <m-card class="m-b-5">
      <m-radio-group v-model="value2">
        <m-radio label="1">银永鑫</m-radio><br>
        <m-radio label="2"></m-radio>
      </m-radio-group>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;m-radio-group v-model="value2"&gt;
            &lt;m-radio label="1"&gt;银永鑫&lt;/m-radio&gt;&lt;br&gt;
            &lt;m-radio label="2"&gt;&lt;/m-radio&gt;
          &lt;/m-radio-group&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                value: false,
              }
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>
   
    <h2 class="m-b-20">带有边框</h2>
    <m-card class="m-b-5">
      <m-radio class="m-b-5" border v-model="value3" label="1">银永鑫</m-radio><br>
      <m-radio border v-model="value3" label="2"></m-radio>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="280px">
      <pre>
        <code>
          &lt;m-radio border v-model="value" label="1"&gt;银永鑫&lt;/m-radio&gt;&lt;br&gt;
          &lt;m-radio border v-model="value" label="2"&gt;&lt;/m-radio&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                value: '1',
              }
            },
          }
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
      value1: '1',
      value2: '1',
      value3: '1'
    }
  },
}
</script>

<style lang="scss">
.radio-page {

}
</style>