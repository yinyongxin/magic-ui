<template>
  <div class="layout-page">
    <h1>这是布局</h1>

    <h2>基础布局</h2> 
    <p>使用单一分栏创建基础的栅格布局。默认情况下m-row下m-col平分m-row的长度。</p>
    <m-card class="m-b-5">
      <m-row class="m-row">
        <m-col><div class="grid-content bg-purple-dark"></div></m-col>
      </m-row>
      <m-row class="m-row">
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
      </m-row>
      <m-row class="m-row">
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
        <m-col><div class="grid-content bg-purple"></div></m-col>
      </m-row>
      <m-row class="m-row">
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
      </m-row>
      <m-row class="m-row">
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
      </m-row>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="950px">
      <pre>
        <code>
          &lt;m-row class="m-row"&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple-dark"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;m-row class="m-row"&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;m-row class="m-row"&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;m-row class="m-row"&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;m-row class="m-row"&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;style lang="scss"&gt;
            .m-row {
              margin-bottom: 20px;
              &:last-child {
                margin-bottom: 0;
              }
            }
            .m-col {
              border-radius: 4px;
            }
            .bg-purple-dark {
              background: rgba($color: #673ab7, $alpha: 0.6);
            }
            .bg-purple {
              background: rgba($color: #673ab7, $alpha: 0.4);;
            }
            .bg-purple-light {
              background: rgba($color: #673ab7, $alpha: 0.2);;
            }
            .grid-content {
              border-radius: 4px;
              min-height: 36px;
            }
            .row-bg {
              padding: 10px 0;
            }
          &lt;/style&gt;
        </code>
      </pre>
    </m-show-box>


    <h2>分栏间隔</h2> 
    <p>通过为m-row设置gutter属性设置分栏之间的间隔。值类型为Number</p>
    <m-card class="m-b-5">
      <m-row class="m-row" :gutter="20">
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
      </m-row>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="610px">
      <pre>
        <code>
          &lt;m-row :gutter="20" class="m-row"&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;style lang="scss"&gt;
            .m-row {
              margin-bottom: 20px;
              &:last-child {
                margin-bottom: 0;
              }
            }
            .m-col {
              border-radius: 4px;
            }
            .bg-purple-dark {
              background: rgba($color: #673ab7, $alpha: 0.6);
            }
            .bg-purple {
              background: rgba($color: #673ab7, $alpha: 0.4);;
            }
            .bg-purple-light {
              background: rgba($color: #673ab7, $alpha: 0.2);;
            }
            .grid-content {
              border-radius: 4px;
              min-height: 36px;
            }
            .row-bg {
              padding: 10px 0;
            }
          &lt;/style&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>对齐方式</h2> 
    <p>通过 flex 布局来对分栏进行灵活的对齐，默认的情况下m-row的属性justify为flex-start</p>
    <p>justify的其他值为flex-end/space-between/space-around</p>
    <m-card class="m-b-5">
      <m-row class="row-bg">
        <m-col width="25%"><div class="grid-content bg-purple"></div></m-col>
        <m-col width="25%"><div class="grid-content bg-purple-light"></div></m-col>
        <m-col width="25%"><div class="grid-content bg-purple"></div></m-col>
      </m-row>
      <m-row class="row-bg" justify="center">
        <m-col width="25%"><div class="grid-content bg-purple"></div></m-col>
        <m-col width="25%"><div class="grid-content bg-purple-light"></div></m-col>
        <m-col width="25%"><div class="grid-content bg-purple"></div></m-col>
      </m-row>
      <m-row class="row-bg" justify="flex-end">
        <m-col width="25%"><div class="grid-content bg-purple"></div></m-col>
        <m-col width="25%"><div class="grid-content bg-purple-light"></div></m-col>
        <m-col width="25%"><div class="grid-content bg-purple"></div></m-col>
      </m-row>
      <m-row class="row-bg" justify="space-between">
        <m-col width="25%"><div class="grid-content bg-purple"></div></m-col>
        <m-col width="25%"><div class="grid-content bg-purple-light"></div></m-col>
        <m-col width="25%"><div class="grid-content bg-purple"></div></m-col>
      </m-row>
      <m-row class="row-bg" justify="space-around">
        <m-col width="25%"><div class="grid-content bg-purple"></div></m-col>
        <m-col width="25%"><div class="grid-content bg-purple-light"></div></m-col>
        <m-col width="25%"><div class="grid-content bg-purple"></div></m-col>
      </m-row>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="900px">
      <pre>
        <code>
          &lt;m-row class="m-row"&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple-dark"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;m-row class="m-row" justify="center"&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;m-row class="m-row" justify="flex-end"&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;m-row class="m-row" justify="space-between"&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;m-row class="m-row" justify="space-around"&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="25%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;  
          &lt;/m-row&gt;
          &lt;style lang="scss"&gt;
            .m-row {
              margin-bottom: 20px;
              &:last-child {
                margin-bottom: 0;
              }
            }
            .m-col {
              border-radius: 4px;
            }
            .bg-purple-dark {
              background: rgba($color: #673ab7, $alpha: 0.6);
            }
            .bg-purple {
              background: rgba($color: #673ab7, $alpha: 0.4);;
            }
            .bg-purple-light {
              background: rgba($color: #673ab7, $alpha: 0.2);;
            }
            .grid-content {
              border-radius: 4px;
              min-height: 36px;
            }
            .row-bg {
              padding: 10px 0;
            }
          &lt;/style&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>混合布局</h2> 
    <p>通过为m-col的width属性设置基础的百分比％方式任意扩展组合形成较为复杂的混合布局。</p>
    <m-card class="m-b-5">
      <m-row :gutter="20" class="row-bg">
        <m-col width="80%"><div class="grid-content bg-purple"></div></m-col>
        <m-col width="20%"><div class="grid-content bg-purple-light"></div></m-col>
      </m-row>
      <m-row :gutter="20" class="row-bg">
        <m-col width="30%"><div class="grid-content bg-purple"></div></m-col>
        <m-col width="30%"><div class="grid-content bg-purple-light"></div></m-col>
        <m-col width="20%"><div class="grid-content bg-purple"></div></m-col>
        <m-col width="20%"><div class="grid-content bg-purple-light"></div></m-col>
      </m-row>
      <m-row :gutter="20" class="row-bg">
        <m-col width="20%"><div class="grid-content bg-purple"></div></m-col>
        <m-col width="60%"><div class="grid-content bg-purple-light"></div></m-col>
        <m-col width="20%"><div class="grid-content bg-purple"></div></m-col>
      </m-row>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="740px">
      <pre>
        <code>
          &lt;m-row :gutter="20" class="m-row"&gt;
            &lt;m-col width="80%"&gt;&lt;div class="grid-content bg-purple-dark"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="20%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;m-row :gutter="20" class="m-row"&gt;
            &lt;m-col width="30%"&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="30%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="20%"&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="20%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;m-row :gutter="20" class="m-row"&gt;
            &lt;m-col width="20%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="60%"&gt;&lt;div class="grid-content bg-purple-light"&gt;&lt;/div&gt;&lt;/m-col&gt;
            &lt;m-col width="20%"&gt;&lt;div class="grid-content bg-purple"&gt;&lt;/div&gt;&lt;/m-col&gt;
          &lt;/m-row&gt;
          &lt;style lang="scss"&gt;
            .m-row {
              margin-bottom: 20px;
              &:last-child {
                margin-bottom: 0;
              }
            }
            .m-col {
              border-radius: 4px;
            }
            .bg-purple-dark {
              background: rgba($color: #673ab7, $alpha: 0.6);
            }
            .bg-purple {
              background: rgba($color: #673ab7, $alpha: 0.4);;
            }
            .bg-purple-light {
              background: rgba($color: #673ab7, $alpha: 0.2);;
            }
            .grid-content {
              border-radius: 4px;
              min-height: 36px;
            }
            .row-bg {
              padding: 10px 0;
            }
          &lt;/style&gt;
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
.layout-page {
  .m-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .m-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: rgba($color: #673ab7, $alpha: 0.6);
  }
  .bg-purple {
    background: rgba($color: #673ab7, $alpha: 0.4);;
  }
  .bg-purple-light {
    background: rgba($color: #673ab7, $alpha: 0.2);;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
}

</style>