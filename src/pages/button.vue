<template>
  <div class="button-dome">
    <h1>Button 按钮</h1>
    <p class="m-b-20">常用的操作按钮。</p>
    <h2>基础用法</h2>
    <p class="m-b-20">基础的按钮用法。</p>
    <m-card class="m-b-5">
      <div>
        <m-button class="m-r-10" @click="add">默认按钮</m-button>
        <m-button class="m-r-10" type="primary">主要按钮</m-button>
        <m-button class="m-r-10" type="success">成功按钮</m-button>
        <m-button class="m-r-10" type="warning">警告按钮</m-button>
        <m-button class="m-r-10" type="error">错误按钮</m-button>
      </div>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="180px">
      <pre>
        <code>
          &lt;m-button&gt;默认按钮&lt;/m-button&gt;
          &lt;m-button type="primary"&gt;主要按钮&lt;/m-button&gt;
          &lt;m-button type="success"&gt;成功按钮&lt;/m-button&gt;
          &lt;m-button type="warning"&gt;警告按钮&lt;/m-button&gt;
          &lt;m-button type="error"&gt;错误按钮&lt;/m-button&gt;
        </code>
      </pre>
    </m-show-box>
    
    <h2>带图标按钮</h2>
    <p class="m-b-20">基础的带图标按钮。</p>
    <m-card class="m-b-5">
      <div>
        <m-button class="m-r-10" @click="add"   icon="m-icon-minus">默认按钮</m-button>
        <m-button class="m-r-10" type="primary" icon="m-icon-info">主要按钮</m-button>
        <m-button class="m-r-10" type="success" icon="m-icon-success">成功按钮</m-button>
        <m-button class="m-r-10" type="warning" icon="m-icon-warning">警告按钮</m-button>
        <m-button class="m-r-10" type="error"   icon="m-icon-error">错误按钮</m-button>
      </div>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="180px">
      <pre>
        <code>
          &lt;m-button icon="m-icon-minus" &gt;默认按钮&lt;/m-button&gt;
          &lt;m-button icon="m-icon-info" type="primary"&gt;主要按钮&lt;/m-button&gt;
          &lt;m-button icon="m-icon-success" type="success"&gt;成功按钮&lt;/m-button&gt;
          &lt;m-button icon="m-icon-warning" type="warning"&gt;警告按钮&lt;/m-button&gt;
          &lt;m-button icon="m-icon-error" type="error"&gt;错误按钮&lt;/m-button&gt;
        </code>
      </pre>
    </m-show-box>




    <h2>图标按钮</h2>
    <p class="m-b-20">基础的图标按钮。</p>
    <m-card class="m-b-5">
      <div>
         <m-button class="m-r-10" @click="add"  icon="m-icon-minus"></m-button>
        <m-button class="m-r-10" type="primary" icon="m-icon-plus" ></m-button>
        <m-button class="m-r-10" type="success" icon="m-icon-check" ></m-button>
        <m-button class="m-r-10" type="warning" icon="m-icon-close" ></m-button>
        <m-button class="m-r-10" type="error" icon="m-icon-warning" ></m-button>
      </div>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="180px">
      <pre>
        <code>
          &lt;m-button icon="m-icon-minus" &gt;&lt;/m-button&gt;
          &lt;m-button icon="m-icon-info" type="primary"&gt;&lt;/m-button&gt;
          &lt;m-button icon="m-icon-success" type="success"&gt;&lt;/m-button&gt;
          &lt;m-button icon="m-icon-warning" type="warning"&gt;&lt;/m-button&gt;
          &lt;m-button icon="m-icon-error" type="error"&gt;&lt;/m-button&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>圆形按钮</h2>
    <p class="m-b-20">基础的圆形按钮。设置circle属性，并且内容只要一个字符</p>
    <m-card class="m-b-5">
      <div>
        <m-button class="m-r-10" circle @click="add"  icon="m-icon-minus"></m-button>
        <m-button class="m-r-10" circle type="primary" icon="m-icon-plus" ></m-button>
        <m-button class="m-r-10" circle type="success" icon="m-icon-check" ></m-button>
        <m-button class="m-r-10" circle type="warning" icon="m-icon-close" ></m-button>
        <m-button class="m-r-10" circle type="error" icon="m-icon-warning" ></m-button>
      </div>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="180px">
      <pre>
        <code>
          &lt;m-button circle icon="m-icon-minus" &gt;&lt;/m-button&gt;
          &lt;m-button circle icon="m-icon-info" type="primary"&gt;&lt;/m-button&gt;
          &lt;m-button circle icon="m-icon-success" type="success"&gt;&lt;/m-button&gt;
          &lt;m-button circle icon="m-icon-warning" type="warning"&gt;&lt;/m-button&gt;
          &lt;m-button circle icon="m-icon-error" type="error"&gt;&lt;/m-button&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>禁用按钮</h2>
    <p class="m-b-20">基础的禁用按钮。</p>
    <m-card class="m-b-5">
      <div>
        <m-button disabled class="m-r-10">默认按钮</m-button>
        <m-button disabled class="m-r-10" type="primary" icon="m-icon-info">带图标按钮</m-button>
        <m-button disabled class="m-r-10" type="success" icon="m-icon-success"></m-button>
        <m-button disabled circle class="m-r-10" type="warning" icon="m-icon-warning"></m-button>
      </div>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="180px">
      <pre>
        <code>
          &lt;m-button icon="m-icon-minus" &gt;默认按钮&lt;/m-button&gt;
          &lt;m-button icon="m-icon-info" type="primary"&gt;主要按钮&lt;/m-button&gt;
          &lt;m-button icon="m-icon-success" type="success"&gt;成功按钮&lt;/m-button&gt;
          &lt;m-button icon="m-icon-warning" type="warning"&gt;警告按钮&lt;/m-button&gt;
          &lt;m-button icon="m-icon-error" type="error"&gt;错误按钮&lt;/m-button&gt;
        </code>
      </pre>
    </m-show-box>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    add() {
    }
  }
}
</script>

<style lang='scss'>
.button-dome {
  pre code {
    display: inline;
    max-width: none;
    padding: 0;
    margin: 0;
    overflow: initial;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    vertical-align: top;
  }
}
</style>