<template>
  <button 
    class="aside-menu-item" 
    @click="handleClick"
    :class="{'aside-menu-item-is-active': isActive&&rootMenu.activeAnimation}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MAsideMenuItem',
  data() {
    return {
      isActive: false
    }
  },
  inject: ['rootMenu'],
  props: {
    LinkName: {
      type: String,
      default: ''
    },
    MLink: {
      type: String,
      default: ''
    },
    index: {
      type: String,
      default: ''
    }
  },
  watch: {
    '$route.name'() {
      // console.log(this.$route)
      if(this.$route.name == this.LinkName || this.$route.fullPath == this.MLink) {
        this.isActive = true
      }else {
        this.isActive = false
      }
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
      if(this.LinkName !== '' && this.$route.name !== this.LinkName) {
        this.$router.push({name: this.LinkName})
      }
      if(this.MLink !== '' && this.$route.fullPath !== this.MLink) {
        this.$router.push({path: this.MLink})
      }
    }
  },
  mounted() {
    // console.log(this.rootMenu)
    // console.log(this.$parent.$el)
  }
}
</script>