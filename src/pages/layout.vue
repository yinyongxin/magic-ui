<template>
  <div class="layout-page">
    <h1>这是布局</h1>

    <h2>基础布局</h2> 
    <p>使用单一分栏创建基础的栅格布局。</p>
    <m-card class="m-b-40">
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

    <h2>分栏间隔</h2> 
    <p>分栏之间存在间隔。</p>
    <m-card class="m-b-40">
      <m-row class="m-row" :gutter="20">
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
        <m-col><div class="grid-content bg-purple"></div></m-col>
        <m-col><div class="grid-content bg-purple-light"></div></m-col>
      </m-row>
    </m-card>

    <h2>对齐方式</h2> 
    <p>通过 flex 布局来对分栏进行灵活的对齐</p>
    <m-card class="m-b-40">
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


    <h2>混合布局</h2> 
    <p>通过基础的百分比％方式任意扩展组合形成较为复杂的混合布局。</p>
    <m-card class="m-b-40">
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
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}

</style>