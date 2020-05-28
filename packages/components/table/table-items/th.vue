<template>
  <th class="magic-th">
    <div
      :style="{
        textAlign: this.rootTable.align
      }" 
    >
      <slot></slot>
    </div>
  </th>
</template>

<script>
export default {
  inject: ['rootTable']
}
</script>

<style lang="scss">
.magic-th {
  width: 100%;
  &>div {
    width: 100%;
  }
  overflow: hidden;
  user-select: none;
  background-color: #fff;
  padding: 12px 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: left;
}
</style>