(function(){var e={83404:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-box"},[t("div",{staticClass:"login-input-box"},[t("h1",[e._v("信贷管理后台系统")]),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"status-icon":""}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-user-solid"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),t("el-form-item",{attrs:{prop:"pass"}},[t("el-input",{attrs:{"prefix-icon":"el-icon-s-order",type:"password",autocomplete:"on"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),t("br")],1)],1),t("span",{staticStyle:{"margin-top":"20px !important"}},[e._v("@申昂")])])},o=[],i=n(89682),a={name:"LoginView",data(){return{ruleForm:{username:"admin",pass:"approve123456."},rules:{pass:[{validator:this.validatePass,trigger:"blur"}],username:[{required:!0,trigger:"blur",message:"请输入用户名"}]}}},methods:{validatePass(e,t,n){""===t?n(new Error("请输入密码")):t.length<6?n(new Error("密码不能小于6位数")):n()},submitForm(){this.$refs.ruleForm.validate((e=>{if(!e)return!1;this.login(this.ruleForm)}))},async login(e){let t=await(0,i.XR)(e);console.log(t),2e4===t.data.code&&(t?.data?.data?.token&&(localStorage.setItem("token",t.data?.data?.token),this.$store.commit("NAMEUPDATE",this.ruleForm.username),await this.$store.dispatch("getMenuList")),this.$router.replace("/home"))}}},u=a,s=n(1001),l=(0,s.Z)(u,r,o,!1,null,"3e6ce81e",null),c=l.exports},89682:function(e,t,n){"use strict";n.d(t,{Lh:function(){return u},XR:function(){return o},eY:function(){return s},kS:function(){return i},r4:function(){return a}});var r=n(84471);const o=e=>r.Z.post("/user/login",{account:e.username,password:e.pass}),i=()=>r.Z.post("/user/logout"),a=({username:e,password:t,permission:n})=>(0,r.Z)({url:"/permission/createUser",method:"POST",data:{account:e,password:t,role_id:n}}),u=()=>(0,r.Z)({url:"/user/list?type=new",method:"get"}),s=()=>r.Z.get("/user/info")},89923:function(e,t,n){"use strict";var r=n(36369),o=function(){var e=this,t=e._self._c;return t("router-view")},i=[],a={},u=a,s=n(1001),l=(0,s.Z)(u,o,i,!1,null,null,null),c=l.exports,d=n(1120),f=n(24239),m=n(8499),p=n.n(m);r["default"].use(p()),r["default"].config.productionTip=!1,new r["default"]({router:d.Z,store:f.Z,components:{},render:e=>e(c)}).$mount("#app")},1120:function(e,t,n){"use strict";var r=n(36369),o=n(72631),i=n(83404),a=n(24239);r["default"].use(o.ZP),localStorage.getItem("token")&&a.Z.dispatch("getMenuList");const u=o.ZP.prototype.push;o.ZP.prototype.push=function(e){return u.call(this,e).catch((e=>e))};const s=[{path:"/",redirect:"/login",component:i["default"]},{path:"/login",name:"login",component:()=>Promise.resolve().then(n.bind(n,83404))},{path:"/",redirect:"/home",meta:{title:"首页"},component:()=>n.e(866).then(n.bind(n,39866)),children:[{path:"/home",name:"home",component:()=>n.e(949).then(n.bind(n,22949))}]}],l=new o.ZP({routes:s});t.Z=l},24239:function(e,t,n){"use strict";var r=n(36369),o=n(63822),i=n(89682),a=n(1120),u=n(56265),s=n.n(u);r["default"].use(o.ZP),t.Z=new o.ZP.Store({state:{userName:localStorage.getItem("userName")||"",menuList:JSON.parse(localStorage.getItem("menuList"))||[]},getters:{},mutations:{NAMEUPDATE(e,t){e.userName=t,localStorage.setItem("userName",t)},GETMENULIST(e,t){e.menuList=t,localStorage.setItem("menuList",JSON.stringify(t))}},actions:{async getMenuList({commit:e}){let t=await(0,i.eY)();if(2e4!==t?.data?.code)return;let r=t.data.data.roles[0].name,o=await s().get("/menus.json"),u=o.data,l=[],c=[];"administrator"===r?c=u:"input"===r?c=u.filter((e=>e.meta&&e.meta.roles&&-1!=e.meta.roles.indexOf(r)||"首页"===e.meta.title)):"approve"===r&&(c=u.filter((e=>e.meta&&e.meta.roles&&-1!=e.meta.roles.indexOf(r)||"首页"===e.meta.title)),c=c.map((e=>(e.children&&e.children.forEach(((t,n)=>{"终审"===t.meta.title&&delete e.children[n]})),e)))),l=c.map((e=>{e.children&&e.children.map((e=>{let t=e.path1;e.component=()=>n(97933)(`./views${t}View.vue`)}));let t=e.component;e.component=()=>n(11233)(`./${t}.vue`),a.Z.addRoute(e);let{path:r,meta:o}=e;return e.children?(e.children=e.children.map((e=>{let{meta:t,path:n}=e;return{path:n,title:t.title}})),{path:r,title:o.title,children:e.children}):{path:r,title:o.title}})),e("GETMENULIST",l)}},modules:{}})},84471:function(e,t,n){"use strict";var r=n(56265),o=n.n(r),i=n(1120),a=n(8499);const u=o().create({baseURL:"/api",timeout:5e3});u.interceptors.request.use((e=>{let t=localStorage.getItem("token");return t&&(e.headers.token=t),e})),u.interceptors.response.use((e=>{if(2e4===e?.data?.code)return"string"==typeof e?.data?.data&&a.Message.success(e?.data?.data),"string"===typeof e?.data?.data?.info&&a.Message.success(e?.data?.data?.info),e;if(603===e?.data?.code){a.Notification.error({title:"错误",message:"token失效，请重新登录"});let e=window.location.href.split("/");"login"!==e[e.length-1]&&i.Z.replace("/login")}else 200!==e?.status&&a.Notification.error({title:"错误",message:"响应错误"});return e})),t.Z=u},11233:function(e,t,n){var r={"./Layout.vue":[39866,866]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=11233,e.exports=o},97933:function(e,t,n){var r={"./views/AboutView.vue":[15399,399],"./views/HomeView.vue":[22949,949],"./views/LoginView.vue":[83404],"./views/application-manage/IndexView.vue":[82130,130],"./views/contract-manage/IndexView.vue":[15172,172],"./views/loan-approve/EndView.vue":[34278,278],"./views/loan-approve/FirstView.vue":[69769,769],"./views/loan/IndexView.vue":[54888,888],"./views/promission/CreateView.vue":[91998,216],"./views/promission/IndexView.vue":[32890,890]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=97933,e.exports=o}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{130:"d62d6d69",172:"08a30206",216:"84a0de0e",278:"e893d540",399:"4f72a601",769:"f77ed0bf",866:"10611f86",888:"8ad6db03",890:"75b20c68",949:"cf0f351d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{130:"94c19d1c",172:"d14cefe6",278:"5ba1c497",769:"5a6af4d3",866:"b57f9176",888:"36a85cdf",949:"31ba95bc"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-project:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,i.parentNode&&i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={130:1,172:1,278:1,769:1,866:1,888:1,949:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(89923)}));r=n.O(r)})();
//# sourceMappingURL=app.e99fb611.js.map