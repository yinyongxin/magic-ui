<template>
  <button class="m-button">
    <span>
      <slot>按钮</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'McButton'
}
</script>

<style lang="scss"scoped>
.m-button {
  &:focus {
     outline:0;
  }
  border: none;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
  color: #515a6e;
  background-color: #fff;
  border-color: #dcdee2;
}
</style>