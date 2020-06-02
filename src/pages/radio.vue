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

    <h2 class="m-b-20">带有图标</h2>
    <p>通过icon设置选中图标。</p>
    <m-card class="m-b-5">
      <m-radio v-model="value4" icon="m-icon-check" label="1">银永鑫</m-radio><br>
      <m-radio v-model="value4" icon="m-icon-close" label="2"></m-radio>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;m-radio icon="m-icon-check" v-model="value" label="1"&gt;银永鑫&lt;/m-radio&gt;&lt;br&gt;
          &lt;m-radio icon="m-icon-close" v-model="value" label="2"&gt;&lt;/m-radio&gt;

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

    <h2 class="m-b-20">禁用状态</h2>
    <p>通过设置disabled设置按钮为禁用状态。</p>
    <m-card class="m-b-5">
      <m-radio disabled class="m-b-5" border v-model="value5" label="1">银永鑫</m-radio><br>
      <m-radio disabled v-model="value5" label="2">樊小迪</m-radio>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="280px">
      <pre>
        <code>
          &lt;m-radio border v-model="value" label="1"&gt;银永鑫&lt;/m-radio&gt;&lt;br&gt;
          &lt;m-radio disabled v-model="value" label="2"&gt;樊小迪&lt;/m-radio&gt;

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
      value3: '1',
      value4: '1',
      value5: '1',
    }
  },
}
</script>

<style lang="scss">
.radio-page {

}
</style>