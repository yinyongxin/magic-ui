<template>
  <div class="switch-page">
    <h1>switch开关</h1> 
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <h2 class="m-b-20">基本用法</h2>
    <m-card class="m-b-5">
      <m-switch v-model="value"></m-switch>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="300px">
      <pre>
        <code>
          &lt;m-switch v-model="value"&gt;
          &lt;/m-switch&gt;

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

    <h2 class="m-b-20">禁用状态</h2>
    <p>通过设置disabled属性设置开关禁用</p>
    <m-card class="m-b-5">
      <m-switch disabled v-model="value4" class="m-r-10"></m-switch>
      <m-switch
        disabled
        active-text="按月付费"
        inactive-text="按年付费" 
        v-model="value5"></m-switch>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="360px">
      <pre>
        <code>
          &lt;m-switch disabled v-model="value"&gt;
          &lt;/m-switch&gt;
          &lt;m-switch
            disabled
            active-text="按月付费"
            inactive-text="按年付费" 
            v-model="value5"&gt;&lt;/m-switch&gt;
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

    <h2 class="m-b-20">自定义宽度</h2>
    <p>通过width属性设置开关宽度，数据类型是Number类型。</p>
    <m-card class="m-b-5">
      <m-switch v-model="value1" :width="60"></m-switch>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="285px">
      <pre>
        <code>
          &lt;m-switch :width="60" v-model="value"&gt;
          &lt;/m-switch&gt;

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

    <h2 class="m-b-20">文字描述</h2>
    <p>通过active-text="按月付费"和inactive-text="按年付费"属性设置按钮显示文字</p>
    <p>通过active-color=""和inactive-color=""属性设置按钮不激活和激活的颜色</p>
    <m-card class="m-b-5">
      <m-switch
        active-text="按月付费"
        inactive-text="按年付费" 
        v-model="value2"></m-switch>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="330px">
      <pre>
        <code>
          &lt;m-switch
            disabled
            active-text="按月付费"
            inactive-text="按年付费" 
            v-model="value"&gt;&lt;/m-switch&gt;
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

    <h2 class="m-b-20">图标描述</h2>
    <p>通过inactive-icon-class=""和active-icon-class=""属性设置按钮不激活和激活icon图标描述</p>
    <m-card class="m-b-5">
      <m-switch 
        active-icon-class="m-icon-close"
        inactive-icon-class="m-icon-check" 
        v-model="value3"></m-switch>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="315px">
      <pre>
        <code>
          &lt;m-switch v-model="value"
            active-icon-class="m-icon-close"
            inactive-icon-class="m-icon-check"&gt;
          &lt;/m-switch&gt;

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

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      value1: false,
      value2: false,
      value3: false,
      value4: false,
      value5: false,
    }
  },
  
}
</script>

<style lang=scss>
/* .switch-page {

} */
</style>