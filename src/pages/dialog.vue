<template>
  <div class="dialog-page">
    <h1>Dialog 对话框</h1>


    <h2 class="m-b-20">默认情况下。</h2>
    <p>可以通过title属性设置标题。也可以通过header插槽自定义标题内容。</p>
    <m-card class="m-b-5">
      <m-button @click="open1 = true">打开Dialog</m-button>
      <m-dialog title="设置的标题" :visible.sync="open1">
        <div>
          对话框的内容部分
        </div>
        <template slot="footer">
          <m-button class="m-r-10" @click="open1 = false">取消</m-button>
          <m-button type="success" @click="open1 = false">确定</m-button> 
        </template>
      </m-dialog>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="450px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="open = true"&gt;打开Dialog&lt;/m-button&gt;
            &lt;m-dialog title="设置的标题" :visible.sync="open1"&gt;
              &lt;div&gt;
                对话框的内容部分
              &lt;/div&gt;
              &lt;template slot="footer"&gt;
                &lt;m-button class="m-r-10" @click="open = false"&gt;取消&lt;/m-button&gt;
                &lt;m-button type="success" @click="open = false"&gt;确定&lt;/m-button&gt; 
              &lt;/template&gt;
            &lt;/m-dialog&gt;
          &lt;/template&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                open: false,
              }
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2 class="m-b-20">没有遮罩层。</h2>
    <p>通过设置shade属性为false去除遮罩。通过插糟设置title和显示内容</p>
    <m-card class="m-b-5">
      <m-button @click="open2 = true">打开Dialog</m-button>
      <m-dialog :shade="false" :visible.sync="open2">
        <template slot="header">
          使用插糟设置标题
        </template>
        <div>
          通过插糟设置的内容部分
        </div>
        <template slot="footer">
          <m-button class="m-r-10" @click="open2 = false">取消</m-button>
          <m-button type="success" @click="open2 = false">确定</m-button> 
        </template>
      </m-dialog>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="510px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="open = true"&gt;打开Dialog&lt;/m-button&gt;
            &lt;m-dialog :shade="false" title="设置的标题" :visible.sync="open"&gt;
              &lt;template slot="header"&gt;
                使用插糟设置标题
              &lt;/template&gt;
              &lt;div&gt;
                通过插糟设置的内容部分
              &lt;/div&gt;
              &lt;template slot="footer"&gt;
                &lt;m-button class="m-r-10" @click="open = false"&gt;取消&lt;/m-button&gt;
                &lt;m-button type="success" @click="open = false"&gt;确定&lt;/m-button&gt; 
              &lt;/template&gt;
            &lt;/m-dialog&gt;
          &lt;/template&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                open: false,
              }
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2 class="m-b-20">没有关闭按钮</h2>
    <p>通过设置show-close属性为false去除关闭按钮。</p>
    <m-card class="m-b-5">
      <m-button @click="open3 = true">打开Dialog</m-button>
      <m-dialog :show-close="false" :visible.sync="open3">
        <template slot="header">
          <div>
            使用插糟设置标题
          </div>
        </template>
        <div>
          通过插糟设置的内容部分
        </div>
        <template slot="footer">
          <m-button class="m-r-10" @click="open3 = false">取消</m-button>
          <m-button type="success" @click="open3 = false">确定</m-button> 
        </template>
      </m-dialog>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="520px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="open = true"&gt;打开Dialog&lt;/m-button&gt;
            &lt;m-dialog :show-close="false" title="设置的标题" :visible.sync="open"&gt;
              &lt;template slot="header"&gt;
                &lt;div&gt;
                  使用插糟设置标题
                &lt;/div&gt;
              &lt;/template&gt;
              &lt;div&gt;
                通过插糟设置的内容部分
              &lt;/div&gt;
              &lt;template slot="footer"&gt;
                &lt;m-button class="m-r-10" @click="open = false"&gt;取消&lt;/m-button&gt;
                &lt;m-button type="success" @click="open = false"&gt;确定&lt;/m-button&gt; 
              &lt;/template&gt;
            &lt;/m-dialog&gt;
          &lt;/template&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                open: false,
              }
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2 class="m-b-20">不能通过遮罩关闭</h2>
    <p>通过设置close-by-shade属性为false。通过点击对话框以外的部分不能关闭对话框。</p>
    <m-card class="m-b-5">
      <m-button @click="open4 = true">打开Dialog</m-button>
      <m-dialog :close-by-shade="false" :visible.sync="open4">
        <template slot="header">
          <div>
            使用插糟设置标题
          </div>
        </template>
        <div>
          通过插糟设置的内容部分
        </div>
        <template slot="footer">
          <m-button class="m-r-10" @click="open4 = false">取消</m-button>
          <m-button type="success" @click="open4 = false">确定</m-button> 
        </template>
      </m-dialog>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="520px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="open = true"&gt;打开Dialog&lt;/m-button&gt;
            &lt;m-dialog :close-by-shade="false" title="设置的标题" :visible.sync="open"&gt;
              &lt;template slot="header"&gt;
                &lt;div&gt;
                  使用插糟设置标题
                &lt;/div&gt;
              &lt;/template&gt;
              &lt;div&gt;
                通过插糟设置的内容部分
              &lt;/div&gt;
              &lt;template slot="footer"&gt;
                &lt;m-button class="m-r-10" @click="open = false"&gt;取消&lt;/m-button&gt;
                &lt;m-button type="success" @click="open = false"&gt;确定&lt;/m-button&gt; 
              &lt;/template&gt;
            &lt;/m-dialog&gt;
          &lt;/template&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                open: false,
              }
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2 class="m-b-20">全屏</h2>
    <p>通过设置full-screen。对话框显示为全屏。</p>
    <m-card class="m-b-5">
      <m-button @click="open5 = true">打开Dialog</m-button>
      <m-dialog full-screen :close-by-shade="false" :visible.sync="open5">
        <template slot="header">
          <div>
            使用插糟设置标题
          </div>
        </template>
        <div>
          通过插糟设置的内容部分
        </div>
        <template slot="footer">
          <m-button class="m-r-10" @click="open5 = false">取消</m-button>
          <m-button type="success" @click="open5 = false">确定</m-button> 
        </template>
      </m-dialog>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="520px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="open = true"&gt;打开Dialog&lt;/m-button&gt;
            &lt;m-dialog full-screen title="设置的标题" :visible.sync="open"&gt;
              &lt;template slot="header"&gt;
                &lt;div&gt;
                  使用插糟设置标题
                &lt;/div&gt;
              &lt;/template&gt;
              &lt;div&gt;
                通过插糟设置的内容部分
              &lt;/div&gt;
              &lt;template slot="footer"&gt;
                &lt;m-button class="m-r-10" @click="open = false"&gt;取消&lt;/m-button&gt;
                &lt;m-button type="success" @click="open = false"&gt;确定&lt;/m-button&gt; 
              &lt;/template&gt;
            &lt;/m-dialog&gt;
          &lt;/template&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                open: false,
              }
            },
          }
          &lt;/script&gt;
        </code>
      </pre>
    </m-show-box>

    <h2 class="m-b-20">宽度、阴影、顶部距离</h2>
    <p>通过width设置宽度, 单位可以是任何单位如px、%、vh。</p>
    <p>通过shadow设置宽度, 没有遮罩时默认是有阴影的, 通过设置shadow为false取消阴影。</p>
    <p>通过top设置顶部距离,  单位可以是任何单位如px、%、vh。</p>
    <m-card class="m-b-5">
      <m-button @click="open6 = true">打开Dialog</m-button>
      <m-dialog :shade="false" width="50%" top="10px" :shadow="false" :close-by-shade="false" :visible.sync="open6">
        <template slot="header">
          <div>
            使用插糟设置标题
          </div>
        </template>
        <div>
          通过插糟设置的内容部分
        </div>
        <template slot="footer">
          <m-button class="m-r-10" @click="open6 = false">取消</m-button>
          <m-button type="success" @click="open6 = false">确定</m-button> 
        </template>
      </m-dialog>
    </m-card>
    <m-show-box close-title="显示代码" open-title="隐藏代码" class="m-b-40" height="520px">
      <pre>
        <code>
          &lt;template&gt;
            &lt;m-button @click="open = true"&gt;打开Dialog&lt;/m-button&gt;
            &lt;m-dialog width="50%" top="10px" :shadow="false" title="设置的标题" :visible.sync="open"&gt;
              &lt;template slot="header"&gt;
                &lt;div&gt;
                  使用插糟设置标题
                &lt;/div&gt;
              &lt;/template&gt;
              &lt;div&gt;
                通过插糟设置的内容部分
              &lt;/div&gt;
              &lt;template slot="footer"&gt;
                &lt;m-button class="m-r-10" @click="open = false"&gt;取消&lt;/m-button&gt;
                &lt;m-button type="success" @click="open = false"&gt;确定&lt;/m-button&gt; 
              &lt;/template&gt;
            &lt;/m-dialog&gt;
          &lt;/template&gt;

          &lt;script&gt;
          export default {
            data() {
              return {
                open: false,
              }
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
  data() {
    return {
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      open6: false,
      open7: false,
    }
  },
}
</script>

<style lang="scss">

</style>