(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c26f9"],{"49fd":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dialog-page"},[e("h1",[t._v("Dialog 对话框")]),e("h2",{staticClass:"m-b-20"},[t._v("默认情况下。")]),e("p",[t._v("可以通过title属性设置标题。也可以通过header插槽自定义标题内容。")]),e("m-card",{staticClass:"m-b-5"},[e("m-button",{on:{click:function(n){t.open1=!0}}},[t._v("打开Dialog")]),e("m-dialog",{attrs:{title:"设置的标题",visible:t.open1},on:{"update:visible":function(n){t.open1=n}}},[e("div",[t._v(" 对话框的内容部分 ")]),e("template",{slot:"footer"},[e("m-button",{staticClass:"m-r-10",on:{click:function(n){t.open1=!1}}},[t._v("取消")]),e("m-button",{attrs:{type:"success"},on:{click:function(n){t.open1=!1}}},[t._v("确定")])],1)],2)],1),e("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"450px"}},[e("pre",[t._v("      "),e("code",[t._v('\n        <template>\n          <m-button @click="open = true">打开Dialog</m-button>\n          <m-dialog title="设置的标题" :visible.sync="open1">\n            <div>\n              对话框的内容部分\n            </div>\n            <template slot="footer">\n              <m-button class="m-r-10" @click="open = false">取消</m-button>\n              <m-button type="success" @click="open = false">确定</m-button> \n            </template>\n          </m-dialog>\n        </template>\n\n        <script>\n        export default {\n          data() {\n            return {\n              open: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])]),e("h2",{staticClass:"m-b-20"},[t._v("没有遮罩层。")]),e("p",[t._v("通过设置shade属性为false去除遮罩。通过插糟设置title和显示内容")]),e("m-card",{staticClass:"m-b-5"},[e("m-button",{on:{click:function(n){t.open2=!0}}},[t._v("打开Dialog")]),e("m-dialog",{attrs:{shade:!1,visible:t.open2},on:{"update:visible":function(n){t.open2=n}}},[e("template",{slot:"header"},[t._v(" 使用插糟设置标题 ")]),e("div",[t._v(" 通过插糟设置的内容部分 ")]),e("template",{slot:"footer"},[e("m-button",{staticClass:"m-r-10",on:{click:function(n){t.open2=!1}}},[t._v("取消")]),e("m-button",{attrs:{type:"success"},on:{click:function(n){t.open2=!1}}},[t._v("确定")])],1)],2)],1),e("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"510px"}},[e("pre",[t._v("      "),e("code",[t._v('\n        <template>\n          <m-button @click="open = true">打开Dialog</m-button>\n          <m-dialog :shade="false" title="设置的标题" :visible.sync="open">\n            <template slot="header">\n              使用插糟设置标题\n            </template>\n            <div>\n              通过插糟设置的内容部分\n            </div>\n            <template slot="footer">\n              <m-button class="m-r-10" @click="open = false">取消</m-button>\n              <m-button type="success" @click="open = false">确定</m-button> \n            </template>\n          </m-dialog>\n        </template>\n\n        <script>\n        export default {\n          data() {\n            return {\n              open: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])]),e("h2",{staticClass:"m-b-20"},[t._v("没有关闭按钮")]),e("p",[t._v("通过设置show-close属性为false去除关闭按钮。")]),e("m-card",{staticClass:"m-b-5"},[e("m-button",{on:{click:function(n){t.open3=!0}}},[t._v("打开Dialog")]),e("m-dialog",{attrs:{"show-close":!1,visible:t.open3},on:{"update:visible":function(n){t.open3=n}}},[e("template",{slot:"header"},[e("div",[t._v(" 使用插糟设置标题 ")])]),e("div",[t._v(" 通过插糟设置的内容部分 ")]),e("template",{slot:"footer"},[e("m-button",{staticClass:"m-r-10",on:{click:function(n){t.open3=!1}}},[t._v("取消")]),e("m-button",{attrs:{type:"success"},on:{click:function(n){t.open3=!1}}},[t._v("确定")])],1)],2)],1),e("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"520px"}},[e("pre",[t._v("      "),e("code",[t._v('\n        <template>\n          <m-button @click="open = true">打开Dialog</m-button>\n          <m-dialog :show-close="false" title="设置的标题" :visible.sync="open">\n            <template slot="header">\n              <div>\n                使用插糟设置标题\n              </div>\n            </template>\n            <div>\n              通过插糟设置的内容部分\n            </div>\n            <template slot="footer">\n              <m-button class="m-r-10" @click="open = false">取消</m-button>\n              <m-button type="success" @click="open = false">确定</m-button> \n            </template>\n          </m-dialog>\n        </template>\n\n        <script>\n        export default {\n          data() {\n            return {\n              open: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])]),e("h2",{staticClass:"m-b-20"},[t._v("不能通过遮罩关闭")]),e("p",[t._v("通过设置close-by-shade属性为false。通过点击对话框以外的部分不能关闭对话框。")]),e("m-card",{staticClass:"m-b-5"},[e("m-button",{on:{click:function(n){t.open4=!0}}},[t._v("打开Dialog")]),e("m-dialog",{attrs:{"close-by-shade":!1,visible:t.open4},on:{"update:visible":function(n){t.open4=n}}},[e("template",{slot:"header"},[e("div",[t._v(" 使用插糟设置标题 ")])]),e("div",[t._v(" 通过插糟设置的内容部分 ")]),e("template",{slot:"footer"},[e("m-button",{staticClass:"m-r-10",on:{click:function(n){t.open4=!1}}},[t._v("取消")]),e("m-button",{attrs:{type:"success"},on:{click:function(n){t.open4=!1}}},[t._v("确定")])],1)],2)],1),e("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"520px"}},[e("pre",[t._v("      "),e("code",[t._v('\n        <template>\n          <m-button @click="open = true">打开Dialog</m-button>\n          <m-dialog :close-by-shade="false" title="设置的标题" :visible.sync="open">\n            <template slot="header">\n              <div>\n                使用插糟设置标题\n              </div>\n            </template>\n            <div>\n              通过插糟设置的内容部分\n            </div>\n            <template slot="footer">\n              <m-button class="m-r-10" @click="open = false">取消</m-button>\n              <m-button type="success" @click="open = false">确定</m-button> \n            </template>\n          </m-dialog>\n        </template>\n\n        <script>\n        export default {\n          data() {\n            return {\n              open: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])]),e("h2",{staticClass:"m-b-20"},[t._v("全屏")]),e("p",[t._v("通过设置full-screen。对话框显示为全屏。")]),e("m-card",{staticClass:"m-b-5"},[e("m-button",{on:{click:function(n){t.open5=!0}}},[t._v("打开Dialog")]),e("m-dialog",{attrs:{"full-screen":"","close-by-shade":!1,visible:t.open5},on:{"update:visible":function(n){t.open5=n}}},[e("template",{slot:"header"},[e("div",[t._v(" 使用插糟设置标题 ")])]),e("div",[t._v(" 通过插糟设置的内容部分 ")]),e("template",{slot:"footer"},[e("m-button",{staticClass:"m-r-10",on:{click:function(n){t.open5=!1}}},[t._v("取消")]),e("m-button",{attrs:{type:"success"},on:{click:function(n){t.open5=!1}}},[t._v("确定")])],1)],2)],1),e("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"520px"}},[e("pre",[t._v("      "),e("code",[t._v('\n        <template>\n          <m-button @click="open = true">打开Dialog</m-button>\n          <m-dialog full-screen title="设置的标题" :visible.sync="open">\n            <template slot="header">\n              <div>\n                使用插糟设置标题\n              </div>\n            </template>\n            <div>\n              通过插糟设置的内容部分\n            </div>\n            <template slot="footer">\n              <m-button class="m-r-10" @click="open = false">取消</m-button>\n              <m-button type="success" @click="open = false">确定</m-button> \n            </template>\n          </m-dialog>\n        </template>\n\n        <script>\n        export default {\n          data() {\n            return {\n              open: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])]),e("h2",{staticClass:"m-b-20"},[t._v("宽度、阴影、顶部距离")]),e("p",[t._v("通过width设置宽度, 单位可以是任何单位如px、%、vh。")]),e("p",[t._v("通过shadow设置宽度, 没有遮罩时默认是有阴影的, 通过设置shadow为false取消阴影。")]),e("p",[t._v("通过top设置顶部距离, 单位可以是任何单位如px、%、vh。")]),e("m-card",{staticClass:"m-b-5"},[e("m-button",{on:{click:function(n){t.open6=!0}}},[t._v("打开Dialog")]),e("m-dialog",{attrs:{shade:!1,width:"50%",top:"10px",shadow:!1,"close-by-shade":!1,visible:t.open6},on:{"update:visible":function(n){t.open6=n}}},[e("template",{slot:"header"},[e("div",[t._v(" 使用插糟设置标题 ")])]),e("div",[t._v(" 通过插糟设置的内容部分 ")]),e("template",{slot:"footer"},[e("m-button",{staticClass:"m-r-10",on:{click:function(n){t.open6=!1}}},[t._v("取消")]),e("m-button",{attrs:{type:"success"},on:{click:function(n){t.open6=!1}}},[t._v("确定")])],1)],2)],1),e("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"520px"}},[e("pre",[t._v("      "),e("code",[t._v('\n        <template>\n          <m-button @click="open = true">打开Dialog</m-button>\n          <m-dialog width="50%" top="10px" :shadow="false" title="设置的标题" :visible.sync="open">\n            <template slot="header">\n              <div>\n                使用插糟设置标题\n              </div>\n            </template>\n            <div>\n              通过插糟设置的内容部分\n            </div>\n            <template slot="footer">\n              <m-button class="m-r-10" @click="open = false">取消</m-button>\n              <m-button type="success" @click="open = false">确定</m-button> \n            </template>\n          </m-dialog>\n        </template>\n\n        <script>\n        export default {\n          data() {\n            return {\n              open: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])])],1)},s=[],l={data(){return{open1:!1,open2:!1,open3:!1,open4:!1,open5:!1,open6:!1,open7:!1}}},a=l,i=e("2877"),c=Object(i["a"])(a,o,s,!1,null,null,null);n["default"]=c.exports}}]);