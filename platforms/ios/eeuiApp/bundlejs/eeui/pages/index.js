// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,i){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function s(t,e){var i={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i}function r(t){return Array.isArray(t)?t:Array.from(t)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l={isNullOrUndefined:function(t){return void 0===t||null===t},isFunction:function(t){return!l.isNullOrUndefined(t)&&"function"==typeof t},isObject:function(t){return!l.isNullOrUndefined(t)&&"object"===(void 0===t?"undefined":o(t))},likeArray:function(t){return!l.isNullOrUndefined(t)&&"number"==typeof t.length},isJson:function(t){return l.isObject(t)&&!l.likeArray(t)},getObject:function(t,e){var i=t;if(0===l.count(t)||0===l.count(e))return"";var n=e.replace(/,/g,"|").replace(/\./g,"|").split("|");return l.each(n,function(t,e){i=void 0===i[e]?"":i[e]}),i},each:function(t,e){var i=void 0,n=void 0;if(l.likeArray(t)){if("number"==typeof t.length)for(i=0;i<t.length;i++)if(!1===e.call(t[i],i,t[i]))return t}else for(n in t)if(t.hasOwnProperty(n)&&!1===e.call(t[n],n,t[n]))return t;return t},last:function(t){var e=!1;return"object"===(void 0===t?"undefined":o(t))&&t.length>0&&(e=t[t.length-1]),e},delLast:function(t){var e=[];return"object"===(void 0===t?"undefined":o(t))&&t.length>0&&l.each(t,function(i,n){i<t.length-1&&e.push(n)}),e},strExists:function(t,e){return t+="",e+="",-1!==t.indexOf(e)},leftExists:function(t,e){return t+="",e+="",t.substring(0,e.length)===e},rightExists:function(t,e){return t+="",e+="",t.substring(t.length-e.length)===e},getMiddle:function(t,e,i){return t+="",l.ishave(e)&&l.strExists(t,e)&&(t=t.substring(t.indexOf(e)+e.length)),l.ishave(i)&&l.strExists(t,i)&&(t=t.substring(0,t.indexOf(i))),t},subString:function(t,e,i){return t+="",l.ishave(i)||(i=t.length),t.substring(e,i)},randomString:function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1",i=e.length,n="",s=0;s<t;s++)n+=e.charAt(Math.floor(Math.random()*i));return n},ishave:function(t){return!(null===t||"null"===t||void 0===t||"undefined"===t||!t)},zeroFill:function(t,e,i){if(t+="",t.length>=e)return t;for(var n="",s=0;s<e;s++)n+="0";return i||void 0===i?(n+""+t).substr(-1*e):(t+""+n).substr(0,e)},formatDate:function(t,e){if(""===t&&(t="Y-m-d H:i:s"),void 0===e)e=(new Date).getTime();else if(/^(-)?\d{1,10}$/.test(e))e*=1e3;else if(/^(-)?\d{1,13}$/.test(e))e*=1e3;else if(/^(-)?\d{1,14}$/.test(e))e*=100;else if(/^(-)?\d{1,15}$/.test(e))e*=10;else{if(!/^(-)?\d{1,16}$/.test(e))return e;e*=1}var i=new Date(e);return parseInt(i.getFullYear())+""=="NaN"?e:(t=t.replace(/Y/g,i.getFullYear()),t=t.replace(/m/g,l.zeroFill(i.getMonth()+1,2)),t=t.replace(/d/g,l.zeroFill(i.getDate(),2)),t=t.replace(/H/g,l.zeroFill(i.getHours(),2)),t=t.replace(/i/g,l.zeroFill(i.getMinutes(),2)),t=t.replace(/s/g,l.zeroFill(i.getSeconds(),2)))},isDate:function(t){var e=/^(\d{4})-(\d{2})-(\d{2})$/,i=t+"";return""!==i&&!(!e.test(i)&&RegExp.$2<=12&&RegExp.$3<=31)},isMobile:function(t){return/^1(3|4|5|7|8)\d{9}$/.test(t)},formatMobile:function(t){return 0===l.count(t)?"":t.substring(0,3)+"****"+t.substring(t.length-4)},clone:function(t){if("object"!==(void 0===t?"undefined":o(t)))return t;if(null===t)return t;if(l.likeArray(t)){return r(t).slice(0)}return s(t,[])},count:function(t){try{if(void 0===t)return 0;if("number"==typeof t&&(t+=""),"number"==typeof t.length)return t.length;var e=0,i=void 0;for(i in t)e++;return e}catch(t){return 0}},runNum:function(t,e){var i=Number(t);if(i+""=="NaN"&&(i=0),/^[0-9]*[1-9][0-9]*$/.test(e)){i=i.toFixed(e);if(i.indexOf(".")<0){i+=".";for(var n=0;n<e;n++)i+="0"}}return i},formatSeconds:function(t){var e=parseInt(t),i=0,n=0;e>60&&(i=parseInt(e/60),e=parseInt(e%60),i>60&&(n=parseInt(i/60),i=parseInt(i%60)));var s=parseInt(e)+"秒";return i>0&&(s=parseInt(i)+"分"+s),n>0&&(s=parseInt(n)+"小时"+s),s},jsonParse:function(t,e){try{return JSON.parse(t)}catch(t){return e||{}}},jsonStringify:function(t,e){try{return JSON.stringify(t)}catch(t){return e||""}},removerNumberNaN:function(){for(var t=[],e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];return i.forEach(function(e){isNaN(Number(e))||t.push(e)}),t},runMax:function(){return Math.max.apply(Math,n(l.removerNumberNaN.apply(l,arguments)))},runMin:function(){return Math.min.apply(Math,n(l.removerNumberNaN.apply(l,arguments)))},stringConnect:function(){for(var t=null,e="",i=arguments.length,n=Array(i),s=0;s<i;s++)n[s]=arguments[s];return n.forEach(function(i){null===t?t=i:i&&(i&&e&&(e+=t),e+=i)}),e},bytesToSize:function(t){if(0===t)return"0 B";var e=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(t)/Math.log(1024));return void 0===e[i]?"0 B":l.runNum(t/Math.pow(1024,i),2)+" "+e[i]}};t.exports=l},function(t,e,i){var n,s,r=[];r.push(i(2)),n=i(3);var o=i(5);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s=n=n.default),"function"==typeof s&&(s=s.options),s.__file="/Users/GAOYI/wwwroot/eeui/eeui-template/src/pages/index.vue",s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-57509004",s.style=s.style||{},r.forEach(function(t){for(var e in t)s.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,r),t.exports=n,t.exports.el="true",new Vue(t.exports)},function(t,e){t.exports={app:{flex:1},navbar:{width:"750",height:"100"},"navbar-title":{fontSize:"32",color:"#ffffff"},"navbar-icon":{width:"100",height:"100",color:"#ffffff"},list:{width:"750",flex:1},"list-title-box":{flexDirection:"row",alignItems:"center"},"list-title":{paddingTop:"36",paddingRight:"24",paddingBottom:"24",paddingLeft:"24",fontSize:"28",color:"#757575"},"list-subtitle":{position:"absolute",right:"24",bottom:"24",fontSize:"24"},"list-item":{flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:"100",width:"750",paddingLeft:"20",paddingRight:"20",borderTopWidth:"1",borderTopColor:"#e8e8e8",borderTopStyle:"solid"},"list-item-left":{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",height:"100",flex:1},"list-left-icon":{width:"60",height:"60",color:"#3EB4FF"},"list-left-title":{color:"#242424",paddingLeft:"12",width:"380",fontSize:"26",textOverflow:"ellipsis",lines:1},"list-left-title-history":{color:"#242424",paddingLeft:"12",width:"660",fontSize:"26",textOverflow:"ellipsis",lines:1},"list-right-title":{color:"#a2a2a2",paddingRight:"3",fontSize:"22",textOverflow:"ellipsis",lines:1},"list-right-icon":{fontSize:"24",width:"40",height:"40",color:"#C9C9CE",content:"'tb-right'"},"list-item-right":{flexDirection:"row",alignItems:"center",justifyContent:"flex-end",height:"100"}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=i(4),r=app.requireModule("eeui");e.default={data:function(){return{components:[{title:"轮播控件",title_en:"banner",icon:"md-easel",url:s.jshome+"component_banner.js"},{title:"常用按钮",title_en:"button",icon:"logo-youtube",url:s.jshome+"component_button.js"},{title:"网格容器",title_en:"grid",icon:"md-grid",url:s.jshome+"component_grid.js"},{title:"字体图标",title_en:"icon",icon:"logo-ionic",url:s.jshome+"component_icon.js"},{title:"跑马文字",title_en:"marquee",icon:"md-code-working",url:s.jshome+"component_marquee.js"},{title:"导航栏",title_en:"navbar",icon:"md-menu",url:s.jshome+"component_navbar.js"},{title:"列表容器",title_en:"scroll-view",icon:"md-list",url:s.jshome+"component_list.js"},{title:"滚动文字",title_en:"scroll-text",icon:"ios-more",url:s.jshome+"component_scroll_text.js"},{title:"侧边栏",title_en:"side-panel",icon:"md-albums",url:s.jshome+"component_side_panel.js"},{title:"标签页面",title_en:"tabbar",icon:"md-filing",url:s.jshome+"component_tabbar.js"}],uis:[{title:"Echarts图表",title_en:"w-echarts",icon:"md-trending-up",url:s.jshome+"ui_echarts.js"},{title:"Switch开关",title_en:"w-switch",icon:"md-switch",url:s.jshome+"ui_switch.js"}],module:[{title:"页面功能",title_en:"newPage",icon:"md-book",url:s.jshome+"module_page.js"},{title:"系统信息",title_en:"system",icon:"ios-cog",url:s.jshome+"module_system.js"},{title:"数据缓存",title_en:"caches",icon:"md-beaker",url:s.jshome+"module_caches.js"},{title:"确认对话框",title_en:"alert",icon:"md-alert",url:s.jshome+"module_alert.js"},{title:"等待弹窗",title_en:"loading",icon:"tb-loading",url:s.jshome+"module_loading.js"},{title:"验证弹窗",title_en:"captcha",icon:"md-checkmark-circle",url:s.jshome+"module_captcha.js"},{title:"二维码扫描",title_en:"scaner",icon:"tb-scan",url:s.jshome+"module_scaner.js"},{title:"跨域异步请求",title_en:"ajax",icon:"md-git-pull-request",url:s.jshome+"module_ajax.js"},{title:"剪切板",title_en:"clipboard",icon:"md-copy",url:s.jshome+"module_plate.js"},{title:"提示消息",title_en:"toast",icon:"md-notifications",url:s.jshome+"module_toast.js"},{title:"广告弹窗",title_en:"adDialog",icon:"logo-buffer",url:s.jshome+"module_ad_dialog.js"}],plugin:[{title:"城市选择器",title_en:"citypicker",icon:"md-pin",url:s.jshome+"plugin_citypicker.js"},{title:"图片选择器",title_en:"picture",icon:"md-camera",url:s.jshome+"plugin_picture.js"},{title:"组件截图",title_en:"screenshots",icon:"md-crop",url:s.jshome+"plugin_screenshots.js"},{title:"融云通信模块",title_en:"rongim",icon:"tb-community",url:s.jshome+"plugin_rongim.js"},{title:"友盟推送模块",title_en:"umeng",icon:"md-send",url:s.jshome+"plugin_umeng.js"},{title:"第三方支付(微信/支付宝)",title_en:"pay",icon:"tb-sponsor",url:s.jshome+"plugin_pay.js"},{title:"即时通讯",title_en:"websocket",icon:"md-repeat",url:s.jshome+"plugin_websocket.js"}],about_lists:[{title:"开发文档",title_en:"document",icon:"md-code-working",url:"https://eeui.app"},{title:"托管平台",title_en:"github",icon:"logo-github",url:"https://github.com/kuaifan/eeui"},{title:"个人博客",title_en:"http://kuaifan.vip",icon:"logo-rss",url:"http://kuaifan.vip"},{title:"EEUI版本",title_en:r.getVersionName(),icon:"md-information-circle",url:"https://eeui.app"}],history:[]}},mounted:function(){this.history=(0,n.jsonParse)(r.getCachesString("scaner",[]),[]),r.setPageBackPressed(null,function(){r.confirm({title:"温馨提示",message:"你确定要退出eeui.app吗？",buttons:["取消","确定"]},function(t){"click"===t.status&&"确定"===t.title&&r.closePage(null)})})},methods:{scaner:function(){var t=this;r.openScaner(null,function(e){"success"===e.status&&(t.history.unshift(e.text),r.setCachesString("scaner",(0,n.jsonStringify)(t.history),0),t.openAuto(e.text))})},refresh:function(){r.reloadPage()},clearHistory:function(){var t=this;r.confirm({title:"删除提示",message:"你确定要删除扫码记录吗？",buttons:["取消","确定"]},function(e){"click"===e.status&&"确定"===e.title&&(t.history=[],r.setCachesString("scaner",(0,n.jsonStringify)(t.history),0))})},openUrl:function(t){r.openPage({url:t,pageType:"app"})},openWeb:function(t){(0,s.openViewUrl)(t)},openThird:function(t){(0,s.openViewCode)("module/third/"+t)},openAuto:function(t){r.openPage({url:t,pageType:"auto"})}}}},function(t,e,i){"use strict";var n=i(0),s=app.requireModule("eeui"),r={jshome:"https://eeui.app/dist/1.0.0/pages/",openViewCode:function(t){r.openViewUrl("https://eeui.app/"+t+".html")},openViewUrl:function(t){s.openPage({url:r.jshome+"index_browser.js",pageType:"app",statusBarColor:"#3EB4FF",params:{title:"EEUI",url:t}})},checkVersion:function(t){return"function"==typeof s.getVersion&&(0,n.runNum)(s.getVersion())>=(0,n.runNum)(t)}};t.exports=r},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["app"]},[i("navbar",{staticClass:["navbar"]},[i("navbar-item",{attrs:{type:"left"},on:{click:t.scaner}},[i("icon",{staticClass:["navbar-icon"],attrs:{eeui:{content:"tb-scan"}}})],1),i("navbar-item",{attrs:{type:"title"}},[i("text",{staticClass:["navbar-title"]},[t._v("EEUI")])]),i("navbar-item",{attrs:{type:"right"},on:{click:t.refresh}},[i("icon",{staticClass:["navbar-icon"],attrs:{eeui:{content:"md-refresh"}}})],1)],1),i("scroll-view",{staticClass:["list"]},[i("text",{staticClass:["list-title"]},[t._v("组件 Components")]),t._l(t.components,function(e,n){return i("div",{key:n,staticClass:["list-item"],on:{click:function(i){t.openUrl(e.url)}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:e.icon}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(e.title))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v("<"+t._s(e.title_en)+">")]),i("icon",{staticClass:["list-right-icon"]})],1)])}),i("text",{staticClass:["list-title"]},[t._v("自定义组件 UI")]),t._l(t.uis,function(e,n){return i("div",{key:n,staticClass:["list-item"],on:{click:function(i){t.openUrl(e.url)}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:e.icon}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(e.title))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v("<"+t._s(e.title_en)+">")]),i("icon",{staticClass:["list-right-icon"]})],1)])}),i("text",{staticClass:["list-title"]},[t._v("模块 Module")]),t._l(t.module,function(e,n){return i("div",{key:n,staticClass:["list-item"],on:{click:function(i){t.openUrl(e.url)}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:e.icon}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(e.title))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v(t._s(e.title_en))]),i("icon",{staticClass:["list-right-icon"]})],1)])}),i("text",{staticClass:["list-title"]},[t._v("插件化 Plugins")]),t._l(t.plugin,function(e,n){return i("div",{key:n,staticClass:["list-item"],on:{click:function(i){t.openUrl(e.url)}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:e.icon}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(e.title))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v(t._s(e.title_en))]),i("icon",{staticClass:["list-right-icon"]})],1)])}),i("text",{staticClass:["list-title"]},[t._v("关于 About EEUI")]),t._l(t.about_lists,function(e,n){return i("div",{key:n,staticClass:["list-item"],on:{click:function(i){t.openWeb(e.url)}}},[i("div",{staticClass:["list-item-left"]},[i("icon",{staticClass:["list-left-icon"],attrs:{eeui:{content:e.icon}}}),i("text",{staticClass:["list-left-title"]},[t._v(t._s(e.title))])],1),i("div",{staticClass:["list-item-right"]},[i("text",{staticClass:["list-right-title"]},[t._v(t._s(e.title_en))]),i("icon",{staticClass:["list-right-icon"]})],1)])}),t.history.length>0?i("div",{staticClass:["list-title-box"]},[i("text",{staticClass:["list-title"]},[t._v("扫码历史")]),i("text",{staticClass:["list-subtitle"],on:{click:function(e){t.clearHistory()}}},[t._v("清空历史")])]):t._e(),t.history.length>0?i("div",t._l(t.history,function(e,n){return i("div",{key:n,staticClass:["list-item"],on:{click:function(i){t.openAuto(e)}}},[i("div",{staticClass:["list-item-left"]},[i("text",{staticClass:["list-left-title-history"]},[t._v(t._s(e))])]),i("div",{staticClass:["list-item-right"]},[i("icon",{staticClass:["list-right-icon"]})],1)])})):t._e()],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}]);