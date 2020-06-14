<template>
  <div class="message page">
    <h1>Message 消息框</h1>
    <h2>基础用法</h2>
    <p class="m-b-20">基础的按钮消息框用法。默认一秒后自动关闭。</p>
    <m-card class="m-b-20">
      <m-button @click="message2">打开对话框(带关闭按钮)</m-button>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="350px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="message"&gt;打开对话框&lt;/m-button&gt;
          &lt;/template&gt;
          &lt;script&gt;
            export default {
              methods: {
                message() {
                  this.$message({
                    message: '这是正常的消息',
                    type: 'warning',
                  })
                },
              }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>


    <h2 class="m-b-20">带关闭按钮的消息框。</h2>
    <m-card class="m-b-20">
      <m-button @click="message2">打开对话框(带关闭按钮)</m-button>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="350px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="message"&gt;打开对话框(带关闭按钮)&lt;/m-button&gt;
          &lt;/template&gt;
          &lt;script&gt;
            export default {
              methods: {
                message() {
                  this.$message({
                    message: '这是正常的消息',
                    showClose: true
                  })
                },
              }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>


    <h2>不同type属性的消息框</h2>
    <p class="m-b-20">默认type为info,其他属性分别为，success、error、warning</p>
    <m-card class="m-b-20">
      <m-button @click="message3">type属性为success的消息框</m-button>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="350px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="message"&gt;打开对话框(成功样式)&lt;/m-button&gt;
          &lt;/template&gt;
          &lt;script&gt;
            export default {
              methods: {
                message() {
                  this.$message({
                    message: '这是正常的消息',
                    type: 'success',
                  })
                },
              }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>


    <h2>自定义关闭时间</h2>
    <m-card class="m-b-20">
      <m-button @click="message4">自定义关闭时间</m-button>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="350px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="message"&gt;自定义关闭时间&lt;/m-button&gt;
          &lt;/template&gt;
          &lt;script&gt;
            export default {
              methods: {
                message() {
                  this.$message({
                    message: '这是正常的消息',
                    time: 10000
                  })
                },
              }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2>不自动关闭</h2>
    <m-card class="m-b-20">
      <m-button @click="message5">不自动关闭</m-button>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="350px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="message"&gt;不自动关闭&lt;/m-button&gt;
          &lt;/template&gt;
          &lt;script&gt;
            export default {
              methods: {
                message() {
                  this.$message({
                    message: '不自动关闭',
                    type: 'error',
                    showClose: true,
                    autoClose: false
                  })
                },
              }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>
  </div>
</template>

<script>
  export default {
    name: "message-page",
    methods: {
      message1() {
        this.$message({
          message: '这是正常的消息',
        })
      },
      message2() {
        this.$message({
          message: '这是带关闭按钮的消息',
          showClose: true
        })
      },
      message3() {
        this.$message({
          message: '这是成功的消息',
          type: 'success',
        })
      },
      message4() {
        this.$message({
          message: '自定义关闭时间',
          type: 'warning',
          time: 10000
        })
      },
      message5() {
        this.$message({
          message: '不自动关闭',
          type: 'error',
          showClose: true,
          autoClose: false
        })
      }
    }
  }
</script>

<style lang="scss">

</style>