(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1075e501"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/pwa-project/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),s={},u=Object(i["a"])(s,o,a,!1,null,null,null),c=u.exports,l=n("9483");Object(l["a"])("".concat("/pwa-project/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("div",[e._v("minoru.wakamatsu")]),n("div",[n("h3",[e._v("データの取得日："+e._s(e.getDate))])]),n("div",[n("input",{attrs:{type:"button",value:"データ更新"},on:{click:e.reflush}}),n("input",{attrs:{type:"button",value:"オンラインか？"},on:{click:e.isOnline}}),n("input",{attrs:{type:"button",value:"同期"},on:{click:e.onLineOnSave}})]),n("div",[n("h3",[e._v("記事一覧")]),n("hr"),n("ul",e._l(e.articles,(function(t){return n("li",{key:t.id},[n("h3",[e._v(e._s(t.title))]),n("div",[e._v(e._s(t.text))]),n("hr")])})),0)]),n("div",[n("h3",[e._v("Users")]),n("ul",e._l(e.users,(function(t){return n("li",{key:t.id},[n("div",[e._v(" "+e._s(t.name)+" ")]),n("div",[e._v(" "+e._s(t.bio)+" ")])])})),0)]),n("div",[n("h3",[e._v("記事追加")]),n("div",[e._v("タイトル")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("div",[e._v("本文")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{rows:"10"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),e._v(" "),n("div",[n("input",{attrs:{type:"button",value:"保存"},on:{click:e.saveArticle}})]),n("div",[e._v(e._s(e.message))])])])},g=[],m=n("1da1"),h=n("b85c"),b=(n("96cf"),n("bc3a")),w=n.n(b),_={name:"HelloWorld",props:{msg:String},data:function(){return{getDate:"2021/09/02 12:56",articles:[],users:[],title:"記事のタイトル",text:"記事の本文",message:"保存時の結果などを表示",apiBaseUrl:"https://f163-2400-2412-2e3-8300-6087-d43e-10a6-b352.ngrok.io"}},mounted:function(){this.getArticles(),this.getUsers()},methods:{isOnline:function(){navigator.onLine?alert("オンライン"):alert("オフライン")},onLineOnSave:function(){navigator.onLine?(alert("オンラインなのでサーバに保存します。"),window.location.reload(!0)):alert("オフラインのため同期できません。")},reflush:function(){console.log("reload"),window.navigator.serviceWorker.getRegistrations().then((function(e){var t,n=Object(h["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;console.log("unregister"),r.unregister()}}catch(o){n.e(o)}finally{n.f()}})),window.location.reload(!0)},getArticles:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.a.get(e.apiBaseUrl+"/api/v1/article").then((function(t){e.articles=t.data}));case 2:case"end":return t.stop()}}),t)})))()},getUsers:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.a.get(e.apiBaseUrl+"/api/v1/user").then((function(t){e.users=t.data}));case 2:case"end":return t.stop()}}),t)})))()},saveArticle:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.a.post(e.apiBaseUrl+"/api/v1/article",{title:e.title,text:e.text}).then((function(t){e.message=t.data.message}));case 2:case"end":return t.stop()}}),t)})))()}}},y=_,x=(n("a688"),Object(i["a"])(y,v,g,!1,null,"4995814a",null)),j=x.exports,k={name:"Home",components:{HelloWorld:j}},O=k,A=Object(i["a"])(O,f,d,!1,null,null,null),P=A.exports;r["a"].use(p["a"]);var S=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],E=new p["a"]({mode:"history",base:"/pwa-project/",routes:S}),R=E,U=n("2f62");r["a"].use(U["a"]);var H=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=n("2106"),B=n.n(L);r["a"].config.productionTip=!1,r["a"].use(B.a,w.a),new r["a"]({router:R,store:H,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6708:function(e,t,n){},"9c0c":function(e,t,n){},a688:function(e,t,n){"use strict";n("6708")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.c8517836.js.map