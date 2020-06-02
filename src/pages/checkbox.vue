<template>
  <div class="radio-page">
    <h1>Checkbox 多选框</h1>
    <h2 class="m-b-20">基本用法</h2>
    <p>m-checkbox绑定值为Boolean类型没有插槽内容，默认显示label属性的值。</p>
    <p>通过icon属性可以自定义图标</p>
    <m-card class="m-b-5">
      <m-checkbox v-model="checked1" label="1">银永鑫</m-checkbox><br>
      <m-checkbox v-model="checked2" label="label"></m-checkbox><br>
      <m-checkbox v-model="checked8" label="label" icon="m-icon-circle-check">定义图标</m-checkbox>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;m-checkbox v-model="checked1" label="1"&gt;银永鑫&lt;/m-checkbox&gt;&lt;br&gt;
          &lt;m-checkbox v-model="checked2" label="label"&gt;&lt;/m-checkbox&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                checked1: true,
                checked2: false,
              }
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2 class="m-b-20">禁用状态</h2>
    <p>多选框不可用状态。通过disabled属性设置。</p>
    <m-card class="m-b-5">
      <m-checkbox disabled v-model="checked6" label="1">银永鑫</m-checkbox><br>
      <m-checkbox border disabled v-model="checked7" label="2">樊小迪</m-checkbox>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;m-checkbox disabled v-model="checked1" label="1"&gt;银永鑫&lt;/m-checkbox&gt;&lt;br&gt;
          &lt;m-checkbox border disabled v-model="checked2" label="label"&gt;&lt;/m-checkbox&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                checked1: true,
                checked2: false,
              }
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2 class="m-b-20">多选框组</h2>
    <p>m-checkbox-group绑定一个数组。m-checkbox的label属性必须存在</p>
    <m-card class="m-b-5">
      <m-checkbox-group v-model="checked3">
        <m-checkbox label="第一个"></m-checkbox><br>
        <m-checkbox label="第二个"></m-checkbox>
      </m-checkbox-group>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;m-checkbox-group v-model="checked3"&gt;
            &lt;m-checkbox label="1"&gt;银永鑫&lt;/m-checkbox&gt;&lt;br&gt;
            &lt;m-checkbox label="2"&gt;&lt;/m-checkbox&gt;
          &lt;/m-checkbox-group&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                checked3: [],
              }
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>
   
    <h2 class="m-b-20">带有边框</h2>
    <m-card class="m-b-5">
      <m-checkbox class="m-b-5" border v-model="checked4" label="1">银永鑫</m-checkbox><br>
      <m-checkbox border v-model="checked5" label="2"></m-checkbox>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="285px">
      <pre>
        <code>
          &lt;m-checkbox border v-model="value" label="1"&gt;银永鑫&lt;/m-checkbox&gt;&lt;br&gt;
          &lt;m-checkbox border v-model="value" label="2"&gt;&lt;/m-checkbox&gt;

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
      checked1: true,
      checked2: false,
      checked3: [],
      checked4: true,
      checked5: false,
      checked6: true,
      checked7: false,
      checked8: true,
    }
  },
}
</script>

<style lang="scss">
.radio-page {

}
</style>