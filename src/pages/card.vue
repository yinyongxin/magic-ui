<template>
  <div class="card-page">
    <h1>Card 卡片</h1>
    <h2>基础用法</h2>
    <p class="m-b-20">基础的按钮用法。通过:body-style="{}"设置主体的样式。</p>
    <m-card class="m-b-5">
      <m-card :body-style="{}">
        基本的卡片
      </m-card>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="150px">
      <pre>
        <code>
          &lt;m-card :body-style="{}"&gt;
            基本的卡片
          &lt;/m-card&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>阴影设置</h2>
    <p class="m-b-20">通过设置shadow属性设置阴影的显示。默认值为hover可选为nover和always</p>
    <m-card class="m-b-5">
      <div class="flex flex-space-between">
        <m-card width='25%'>
          默认鼠标放上时显示阴影
        </m-card>
        <m-card shadow="nover" width='25%'>
          从不显示阴影
        </m-card>
        <m-card shadow="always" width='25%'>
          一直显示阴影
        </m-card>
      </div>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="240px">
      <pre>
        <code>
          &lt;m-card&gt;
            基本的卡片
          &lt;/m-card&gt;
          &lt;m-card shadow="nover"&gt;
            基本的卡片
          &lt;/m-card&gt;
          &lt;m-card shadow="always"&gt;
            基本的卡片
          &lt;/m-card&gt;
        </code>
      </pre>
    </m-show-box>


    <h2>头部标题</h2>
    <p class="m-b-20">通过使用插糟来设置具有头部标题。slot='header'。:HeaderBorder="false"来设置头部标题的border。</p>
    <m-card class="m-b-5">
      <m-card class="m-b-20">
        <div slot='header'>头部</div>
        <div>具有头部的卡片</div>
      </m-card>
      <m-card :HeaderBorder="false">
        <div slot='header'>头部</div>
        头部没有border的卡片
      </m-card>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="230px">
      <pre>
        <code>
          &lt;m-card class="m-b-20"&gt;
            &lt;template slot='header'&gt;头部&lt;/template&gt;
            &lt;div&gt;具有头部的卡片&lt;/div&gt;
          &lt;/m-card&gt;
          &lt;m-card :HeaderBorder="false"&gt;
            &lt;template slot='header'&gt;头部&lt;/template&gt;
            头部没有border的卡片
          &lt;/m-card&gt;
        </code>
      </pre>
    </m-show-box>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

</style>