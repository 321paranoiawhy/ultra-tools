(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0497":function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.checkEmail=a.checkPhoneNumber=a.checkRepeatPassword=a.checkPassword=a.checkUsername=void 0;var t=function(e){return e.length>=4&&e.length<=16};a.checkUsername=t;var r=function(e){return e.length>=6&&e.length<=32};a.checkPassword=r;var n=function(e,a){return!(e!==a||!e.length)};a.checkRepeatPassword=n;var o=function(e){var a=/1\d{10}/;return a.test(e)};a.checkPhoneNumber=o;var s=function(a){e.log(a)};a.checkEmail=s}).call(this,t("5a52")["default"])},"0ce4":function(e,a,t){var r=t("41db");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("c0c7e524",r,!0,{sourceMap:!1,shadowMode:!1})},"401c":function(e,a,t){"use strict";var r;t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return r}));var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"checkbox",class:{checked:e.checked},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.change.apply(void 0,arguments)}}})},o=[]},"41db":function(e,a,t){var r=t("24fb");a=r(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.checkbox[data-v-18a564a7]{width:%?36?%;height:%?36?%;position:relative;border-radius:50%;border:%?2?% solid #8f959e}.checkbox.checked[data-v-18a564a7]{background-color:#3370ff;border-color:#3370ff}.checkbox.checked[data-v-18a564a7]::after{content:" ";z-index:100;position:absolute;left:%?8?%;top:%?10?%;height:%?8?%;width:%?16?%;border:%?6?% solid #fff;border-radius:%?4?%;border-top:none;border-right:none;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}',""]),e.exports=a},4202:function(e,a,t){"use strict";var r=t("4ea4");t("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("c753")),o=t("0497"),s=t("c4fb"),i={components:{mycheckbox:n.default},data:function(){return{username:"",showUsenameTip:!1,password:"",showPasswordTip:!1,repeat_password:"",showRepeatPasswordTip:!1,isAgreed:!1}},computed:{canRegister:function(){return!!((0,o.checkUsername)(this.username)&&(0,o.checkPassword)(this.password)&&(0,o.checkRepeatPassword)(this.password,this.repeat_password)&&this.isAgreed)},validUsername:function(){return(0,o.checkUsername)(this.username)},validPassword:function(){return(0,o.checkPassword)(this.password)},validRepeatPassword:function(){return(0,o.checkRepeatPassword)(this.password,this.repeat_password)}},onLoad:function(){},methods:{onUsernameBlur:function(){(0,o.checkUsername)(this.username)||uni.$u.toast("请输入合法的用户名"),this.showUsenameTip=!1},onPasswordBlur:function(){(0,o.checkPassword)(this.password)||uni.$u.toast("请输入合法的密码"),this.showPasswordTip=!1},onRepeatPasswordBlur:function(){(0,o.checkRepeatPassword)(this.password,this.repeat_password)||uni.$u.toast("请输入相同的密码"),this.showRepeatPasswordTip=!1},gotoRegister:function(){var e=this;this.isAgreed&&(0,s.regisiter)({username:this.username,password:this.password,repeat_password:this.repeat_password}).then((function(){uni.$u.toast("注册成功"),uni.navigateTo({url:"/pages/login/login?username=".concat(e.username,"&password=").concat(e.password)})}))},agreeChange:function(e){this.isAgreed=e}}};a.default=i},"4c64":function(e,a,t){"use strict";var r=t("ddc0"),n=t.n(r);n.a},"62f2":function(e,a,t){"use strict";t.r(a);var r=t("4202"),n=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(a,e,(function(){return r[e]}))}(o);a["default"]=n.a},"87eb":function(e,a,t){"use strict";t.r(a);var r=t("e8a4"),n=t("62f2");for(var o in n)"default"!==o&&function(e){t.d(a,e,(function(){return n[e]}))}(o);t("4c64");var s,i=t("f0c5"),c=Object(i["a"])(n["default"],r["b"],r["c"],!1,null,"eaae926c",null,!1,r["a"],s);a["default"]=c.exports},b340:function(e,a,t){"use strict";t.r(a);var r=t("d270"),n=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(a,e,(function(){return r[e]}))}(o);a["default"]=n.a},c4fb:function(e,a,t){"use strict";(function(e){t("d3b7"),t("3ca3"),t("ddb0"),t("2b3d"),Object.defineProperty(a,"__esModule",{value:!0}),a.updateAnniversary=a.createAnniversary=a.searchAnniversary=a.useInfo=a.login=a.regisiter=void 0;var r="http://rp.heicycyu.top:8888",n=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST";return fetch(e+"?"+new URLSearchParams(a),{method:t,mode:"cors"})},o=function(e,a){var t=new FormData;for(var r in a)t.append(r,a[r]);return fetch(e,{method:"POST",mode:"cors",body:t}).then((function(e){return e.json()}))},s=function(a,t){return fetch(a,{method:"GET",mode:"cors",headers:{Authorization:t.Authorization,accept:"application/json"}}).then((function(e){return e.text()})).then((function(a){return e.log(9999999,a)})).catch((function(a){return e.log("error",a)}))},i=function(e){return o("".concat(r,"/user/register"),e)};a.regisiter=i;var c=function(e){var a=new FormData;for(var t in e)a.append(t,e[t]);return fetch("".concat(r,"/user/login"),{method:"POST",mode:"cors",body:a}).then((function(e){return 200===e.status?e.json():"用户名错误或密码不存在"}))};a.login=c;var u=function(e){return s("".concat(r,"/user/me"),e)};a.useInfo=u;var d=function(e){return n("".concat(r,"/souvenir/anniversary/search"),e,"GET")};a.searchAnniversary=d;var l=function(e){return n("".concat(r,"/souvenir/anniversary/create"),e)};a.createAnniversary=l;var f=function(e){return n("".concat(r,"/souvenir/anniversary/update"),e)};a.updateAnniversary=f}).call(this,t("5a52")["default"])},c753:function(e,a,t){"use strict";t.r(a);var r=t("401c"),n=t("b340");for(var o in n)"default"!==o&&function(e){t.d(a,e,(function(){return n[e]}))}(o);t("e601");var s,i=t("f0c5"),c=Object(i["a"])(n["default"],r["b"],r["c"],!1,null,"18a564a7",null,!1,r["a"],s);a["default"]=c.exports},d270:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r={data:function(){return{checked:!1}},methods:{change:function(){this.checked=!this.checked,this.$emit("change",this.checked)}}};a.default=r},d882:function(e,a,t){var r=t("24fb");a=r(!1),a.push([e.i,"@charset \"UTF-8\";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.root[data-v-eaae926c]{display:flex;height:calc(100vh - %?88?% - %?80?%);flex-direction:column;padding:%?48?% %?80?%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%233370ff' d='M0 128l48-16c48-16 144-48 240-37.3C384 85 480 139 576 133.3c96-5.3 192-69.3 288-64C960 75 1056 149 1152 176s192 5 240-5.3l48-10.7V0H0z'/%3E%3C/svg%3E\");background-repeat:no-repeat}.u-input[data-v-eaae926c]{flex-grow:0!important;margin-top:%?16?%;margin-bottom:%?16?%}a[data-v-eaae926c],\r\na[data-v-eaae926c]:link,\r\na[data-v-eaae926c]:visited,\r\na[data-v-eaae926c]:hover,\r\na[data-v-eaae926c]:active{text-decoration:none!important}a[data-v-eaae926c]{color:#3370ff;margin:0 %?6?%}sup[data-v-eaae926c]::after{content:\"\\2197\";font-size:1em;line-height:0;position:relative;vertical-align:initial}.agree[data-v-eaae926c]{display:flex;align-items:center;gap:%?16?%;font-size:%?28?%}u-button[data-v-eaae926c],\r\n.custom-button[data-v-eaae926c]{color:#fff;background:#bbbfc4;border-color:#bbbfc4;width:100%;height:%?96?%;margin-top:%?32?%;margin-bottom:%?32?%;cursor:not-allowed}u-button.actived[data-v-eaae926c],\r\n.custom-button.actived[data-v-eaae926c]{background:#3370ff;border-color:#3370ff}.welcome[data-v-eaae926c]{color:#1f2329;font-size:%?48?%;font-weight:700;line-height:30px;margin-bottom:%?48?%}.flex-1[data-v-eaae926c]{flex:1}.switchLogin[data-v-eaae926c]{color:#1f2329;background:#fff;border-color:#d0d3d6;border-radius:%?999999?%;gap:%?8?%;margin-top:%?12?%;margin-bottom:%?12?%}.logo[data-v-eaae926c]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.list[data-v-eaae926c]{position:relative;margin-left:12.5px}.list[data-v-eaae926c]::before{position:absolute;content:\" \";left:-10px;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?10?%;height:%?10?%;border-radius:50%;background-color:#3370ff}",""]),e.exports=a},ddc0:function(e,a,t){var r=t("d882");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("96ce31d2",r,!0,{sourceMap:!1,shadowMode:!1})},e601:function(e,a,t){"use strict";var r=t("0ce4"),n=t.n(r);n.a},e8a4:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return r}));var r={uInput:t("306a").default,uIcon:t("00b7").default},n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"root"},[t("v-uni-view",{staticClass:"welcome"},[e._v("欢迎使用 ultra-tools")]),t("u-input",{attrs:{placeholder:"请输入用户名",border:"surround",clearable:!0},on:{focus:function(a){arguments[0]=a=e.$handleEvent(a),e.showUsenameTip=!0},blur:function(a){arguments[0]=a=e.$handleEvent(a),e.onUsernameBlur.apply(void 0,arguments)}},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}},[e.validUsername?t("template",{slot:"suffix"},[t("u-icon",{attrs:{name:"checkbox-mark",color:"#3370ff"}})],1):e._e()],2),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.showUsenameTip,expression:"showUsenameTip"}]},[t("v-uni-view",{staticClass:"list"},[e._v("支持数字、大写字母、小写字母和下划线")]),t("v-uni-view",{staticClass:"list"},[e._v("长度为 4 ~ 16 位")]),t("v-uni-view",{staticClass:"list",staticStyle:{color:"#f93e3e"}},[e._v("用户名一经注册, 不可修改")])],1),t("u-input",{attrs:{placeholder:"请输入密码",type:"password",border:"surround",clearable:!0},on:{focus:function(a){arguments[0]=a=e.$handleEvent(a),e.showPasswordTip=!0},blur:function(a){arguments[0]=a=e.$handleEvent(a),e.onPasswordBlur.apply(void 0,arguments)}},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}},[e.validPassword?t("template",{slot:"suffix"},[t("u-icon",{attrs:{name:"checkbox-mark",color:"#3370ff"}})],1):e._e()],2),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.showPasswordTip,expression:"showPasswordTip"}],staticClass:"list"},[e._v("长度为 6 ~ 32 位")]),t("u-input",{attrs:{placeholder:"请重复密码",type:"password",border:"surround",clearable:!0},on:{focus:function(a){arguments[0]=a=e.$handleEvent(a),e.showRepeatPasswordTip=!0},blur:function(a){arguments[0]=a=e.$handleEvent(a),e.onRepeatPasswordBlur.apply(void 0,arguments)}},model:{value:e.repeat_password,callback:function(a){e.repeat_password=a},expression:"repeat_password"}},[e.validRepeatPassword?t("template",{slot:"suffix"},[t("u-icon",{attrs:{name:"checkbox-mark",color:"#3370ff"}})],1):e._e()],2),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.showRepeatPasswordTip,expression:"showRepeatPasswordTip"}],staticClass:"list"},[e._v("请重复已输入密码")]),t("v-uni-button",{staticClass:"custom-button",class:{actived:e.canRegister},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.gotoRegister.apply(void 0,arguments)}}},[e._v("注册")]),t("v-uni-view",{staticClass:"agree"},[t("mycheckbox",{on:{change:function(a){arguments[0]=a=e.$handleEvent(a),e.agreeChange.apply(void 0,arguments)}}}),t("v-uni-view",[e._v("我已阅读并同意"),t("a",{attrs:{href:"#/pages/register"}},[e._v("服务协议")]),e._v("和"),t("a",{attrs:{href:"#/pages/register"}},[e._v("隐私政策")])])],1),t("v-uni-view",{staticStyle:{"margin-top":"16rpx"}},[e._v("已有账号？"),t("a",{attrs:{href:"#/pages/login/login"}},[e._v("立即登录"),t("sup")])]),t("v-uni-view",{staticClass:"flex-1"})],1)},o=[]}}]);