<template>
  <button 
    class="aside-menu-item" 
    @click="handleClick"
    :class="{'aside-menu-item-is-active': isActive}">
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

<style lang="scss">
.aside-menu-item {
  width: 100%;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  touch-action: manipulation;
  white-space: nowrap;
  user-select: none;
  -ms-touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  height: 48px;
  line-height: 48px;
  padding: 0 40px;
  color: inherit;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    user-select: none;
    padding-left: 30px;
    background-color:  rgba($color: $ui, $alpha: 0.2);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.2);
  }
}
.aside-menu-item-is-active {
  background-color:  rgba($color: $ui, $alpha: 0.2);
  border-right: 4px solid rgba($color: $ui, $alpha: 0.4);
  animation: aside-menu-itme-click 0.5s;
}
@keyframes aside-menu-itme-click {
  0% {
    transform: scale(1,1);
  }
  50% {
    transform: scale(0.9,0.9);
  }
  0% {
    transform: scale(1,1);
  }
}
</style>