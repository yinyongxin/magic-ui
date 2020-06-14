<template>
  <div class="magic-aside-submenu" @click="handleClick">
    <!-- 标题内容 -->
    <header 
      class="magic-aside-submenu-title" 
      :class="{
        'submenu-is-openMenu': !isClose,
        'aside-submenu-is-active': isActive&&rootMenu.activeAnimation
      }" 
      @click="openMenu">
      <span>
        <i v-if="icon" :class="icon"></i>
        <slot name="title">菜单标题</slot>
      </span>
      <i v-if="mainSlot" :class="{close: isClose}" class="m-icon-arrow-up close-and-openMenu"></i>
    </header>

    <!-- 菜单主体，如果默认插糟没有内容，就不再渲染 -->
    <main 
      v-if="mainSlot" 
      :style="{height: isClose? '0': height}" class="magic-aside-submenu-main">
      <div ref="reference">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MAsideSubmenu',
  data() {
    return {
      isClose: true,
      isActive: false,
      height: '',
      mainSlot: this.$slots.default
    }
  },
  inject: ['rootMenu'],
  provide() {
    return {
      submenuitems: {
        data: this.$data,
        props: this.$props,
      }
    }
  },
  props: {
    icon: { // 菜单图标
      type: String,
      default: '',
    },
    LinkName: { // 命名路由
      type: String,
      default: ''
    },
    MLink: { // 路由地址
      type: String,
      default: ''
    }, 
    open: {
      type: Boolean,
      default: false
    },
    index: {
      type: String,
      default: ''
    }
  },
  watch: {
    '$route.name'() {
      // console.log(this.$route)
      if(!this.mainSlot && (this.$route.name == this.LinkName || this.$route.fullPath == this.MLink)) {
        this.isActive = true
      }else {
        this.isActive = false
      }
    }
  },
  mounted() {
    
    // 获取菜单主体的高度
    if(this.mainSlot) this.height = window.getComputedStyle(this.$refs.reference).height
    if(this.open) {
      this.isClose = false
    }
  },
  methods: {
    openMenu() {
      if(this.mainSlot) {
        this.isClose = !this.isClose
      }
    },
    handleClick(e) {
      // console.log(this.mainSlot)
      this.$emit('click', e)
      if(this.LinkName !== '' && this.$route.name !== this.LinkName) {
        this.$router.push({name: this.LinkName})
      }
      if(this.MLink !== '' && this.$route.fullPath !== this.MLink) {
        this.$router.push({path: this.MLink})
      }
    }
  },
}
</script>