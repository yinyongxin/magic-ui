(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06f2d30a"],{"68b1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"switch-page"},[a("h1",[t._v("switch开关")]),a("p",[t._v("表示两种相互对立的状态间的切换，多用于触发「开/关」。")]),a("h2",{staticClass:"m-b-20"},[t._v("基本用法")]),a("m-card",{staticClass:"m-b-5"},[a("m-switch",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"300px"}},[a("pre",[t._v("      "),a("code",[t._v('\n        <m-switch v-model="value">\n        </m-switch>\n\n        <script>\n        export default {\n          data() {\n            return {\n              value: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])]),a("h2",{staticClass:"m-b-20"},[t._v("禁用状态")]),a("p",[t._v("通过设置disabled属性设置开关禁用")]),a("m-card",{staticClass:"m-b-5"},[a("m-switch",{staticClass:"m-r-10",attrs:{disabled:""},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}}),a("m-switch",{attrs:{disabled:"","active-text":"按月付费","inactive-text":"按年付费"},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})],1),a("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"360px"}},[a("pre",[t._v("      "),a("code",[t._v('\n        <m-switch disabled v-model="value">\n        </m-switch>\n        <m-switch\n          disabled\n          active-text="按月付费"\n          inactive-text="按年付费" \n          v-model="value5"></m-switch>\n        <script>\n        export default {\n          data() {\n            return {\n              value: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])]),a("h2",{staticClass:"m-b-20"},[t._v("自定义宽度")]),a("p",[t._v("通过width属性设置开关宽度，数据类型是Number类型。")]),a("m-card",{staticClass:"m-b-5"},[a("m-switch",{attrs:{width:60},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),a("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"285px"}},[a("pre",[t._v("      "),a("code",[t._v('\n        <m-switch :width="60" v-model="value">\n        </m-switch>\n\n        <script>\n        export default {\n          data() {\n            return {\n              value: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])]),a("h2",{staticClass:"m-b-20"},[t._v("文字描述")]),a("p",[t._v('通过active-text="按月付费"和inactive-text="按年付费"属性设置按钮显示文字')]),a("p",[t._v('通过active-color=""和inactive-color=""属性设置按钮不激活和激活的颜色')]),a("m-card",{staticClass:"m-b-5"},[a("m-switch",{attrs:{"active-text":"按月付费","inactive-text":"按年付费"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),a("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"330px"}},[a("pre",[t._v("      "),a("code",[t._v('\n        <m-switch\n          disabled\n          active-text="按月付费"\n          inactive-text="按年付费" \n          v-model="value"></m-switch>\n        <script>\n\n        export default {\n          data() {\n            return {\n              value: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])]),a("h2",{staticClass:"m-b-20"},[t._v("图标描述")]),a("p",[t._v('通过inactive-icon-class=""和active-icon-class=""属性设置按钮不激活和激活icon图标描述')]),a("m-card",{staticClass:"m-b-5"},[a("m-switch",{attrs:{"active-icon-class":"m-icon-close","inactive-icon-class":"m-icon-check"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1),a("m-show-box",{staticClass:"m-b-40",attrs:{"close-title":"显示代码","open-title":"隐藏代码",height:"315px"}},[a("pre",[t._v("      "),a("code",[t._v('\n        <m-switch v-model="value"\n          active-icon-class="m-icon-close"\n          inactive-icon-class="m-icon-check">\n        </m-switch>\n\n        <script>\n        export default {\n          data() {\n            return {\n              value: false,\n            }\n          },\n        }\n        <\/script>\n      ')]),t._v("\n    ")])])],1)},n=[],c={data(){return{value:!1,value1:!1,value2:!1,value3:!1,value4:!1,value5:!1}}},l=c,i=(a("fd7c"),a("2877")),v=Object(i["a"])(l,s,n,!1,null,null,null);e["default"]=v.exports},e024:function(t,e,a){},fd7c:function(t,e,a){"use strict";var s=a("e024"),n=a.n(s);n.a}}]);