<template>
  <div class="message page">
    <h1>Message 消息框</h1>
    <m-card>
      <m-button @click="message1">打开对话框</m-button>
      <m-button @click="message2">打开对话框(带关闭按钮)</m-button>
      <m-button @click="message3">打开对话框</m-button>
      <m-button @click="message4">不自动关闭</m-button>
    </m-card>
  </div>
</template>

<script>
  export default {
    name: "message-page",
    methods: {
      message1() {
        // this.$message.show('这是消息弹框', 1000)
        this.$message({
          message: '这是正常的消息',
          type: 'warning',
        })
      },
      message2() {
        // this.$message.show('这是消息弹框', 1000)
        this.$message({
          message: '这是带关闭按钮的消息',
          showClose: true
        })
      },
      message3() {
        // this.$message.show('这是消息弹框', 1000)
        this.$message({
          message: '这是成功的消息',
          type: 'success',
          showClose: true,
        })
      },
      message4() {
        // this.$message.show('这是消息弹框', 1000)
        this.$message({
          message: '不自动关闭消息',
          type: 'success',
          showClose: true,
          autoClose: false
        })
      }
    }
  }
</script>

<style lang="scss">

</style>