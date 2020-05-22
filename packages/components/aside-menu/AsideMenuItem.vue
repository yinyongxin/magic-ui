<template>
  <div 
    class="aside-menu-item" 
    @click="handleClick"
    :class="{'is-active': this.$route.name == this.MLink}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MAsideMenuItem',
  data() {
    return {
      isActive: false
    }
  },
  props: {
    MLink: {
      type: String,
      default: ''
    }
  },
  watch: {
    '$route.name'() {
      console.log(this.$route)
      if(this.$route.name == this.MLink) {
        this.isActive = true
      }
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
      if(this.Mlink !== '' && this.$route.name!==this.MLink) {
        this.$router.push({name: this.MLink})
      }
    }
  },
}
</script>

<style lang="scss">
  .aside-menu-item {
    // margin-bottom: 5px;
    padding: 14px;
    // border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: all .5s;
    &:hover {
      cursor: pointer;
      user-select: none;
      background-color: rgba(244, 165, 96, 0.6);
      // background-color: $ui;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,.2);
    }
  }
  .is-active {
    background-color: rgba(244, 165, 96, 0.6);
    border-right: 4px solid rgba(244, 165, 96, 1);
  }
</style>