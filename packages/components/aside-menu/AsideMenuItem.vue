<template>
  <div 
    class="aside-menu-item" 
    @click="handleClick"
    :class="{'aside-menu-item-is-active': this.$route.name == this.MLink}">
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
      // console.log(this.$route)
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
@import '../../assets/color.scss';
.aside-menu-item {
  padding: 14px;
  color: inherit;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    user-select: none;
    padding-left: 18px;
    background-color:  rgba($color: $ui, $alpha: 0.4);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.2);
  }
}
.aside-menu-item-is-active {
  background-color:  rgba($color: $ui, $alpha: 0.4);
  border-right: 4px solid rgba($color: $ui, $alpha: 0.6);
}
</style>