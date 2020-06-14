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