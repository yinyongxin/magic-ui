<template>
  <div class="card-page">
    <h1>Card 卡片</h1>
    <h2>基础用法</h2>
    <p class="m-b-20">基础的按钮用法。</p>
    <m-card class="m-b-40">
      <m-card>
        基本的卡片
      </m-card>
    </m-card>

    <h2>阴影设置</h2>
    <p class="m-b-20">通过设置shadow属性设置阴影的显示。</p>
    <m-card class="m-b-40">
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

    <h2>头部标题</h2>
    <p class="m-b-20">具有头部标题。</p>
    <m-card class="m-b-40">
      <m-card class="m-b-20">
        <div slot='header'>头部</div>
        <div>具有头部的卡片</div>
      </m-card>
      <m-card :HeaderBorder="false">
        <div slot='header'>头部</div>
        头部没有border的卡片
      </m-card>
    </m-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>

</style>