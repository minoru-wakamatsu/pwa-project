(function(e){function t(t){for(var n,i,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0dc68109"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/pwa-project/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1695:function(e,t,r){},"1cd6":function(e,t,r){"use strict";r("1695")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},a=[],i=(r("5c0b"),r("2877")),s={},u=Object(i["a"])(s,o,a,!1,null,null,null),c=u.exports,l=r("9483");Object(l["a"])("".concat("/pwa-project/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var d=r("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),r("div",[e._v("hoge6")]),r("div",[r("h3",[e._v("データの取得日："+e._s(e.getDate))])]),r("div",[r("input",{attrs:{type:"button",value:"データ更新"},on:{click:e.reflush}}),r("input",{attrs:{type:"button",value:"オンラインか？"},on:{click:e.isOnline}}),r("input",{attrs:{type:"button",value:"同期"},on:{click:e.onLineOnSave}})]),r("div",[r("h3",[e._v("記事一覧")]),r("hr"),r("ul",e._l(e.articles,(function(t){return r("li",{key:t.id},[r("h3",[e._v(e._s(t.title))]),r("div",[e._v(e._s(t.text))]),r("hr")])})),0)]),r("div",[r("h3",[e._v("Users")]),r("ul",e._l(e.users,(function(t){return r("li",{key:t.id},[r("div",[e._v(" "+e._s(t.name)+" ")]),r("div",[e._v(" "+e._s(t.bio)+" ")])])})),0)]),r("div",[r("h3",[e._v("記事追加")]),r("div",[e._v("タイトル")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),r("div",[e._v("本文")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{rows:"10"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),e._v(" "),r("div",[r("input",{attrs:{type:"button",value:"保存"},on:{click:e.saveArticle}})]),r("div",[e._v(e._s(e.message))])])])},g=[],h=r("b85c"),b=r("1da1"),m=(r("96cf"),r("bc3a")),w=r.n(m),x=r("d4ec"),y=r("bee2"),k=r("262e"),_=r("2caf"),j=(r("d81d"),r("4dec")),O=function(e){Object(k["a"])(r,e);var t=Object(_["a"])(r);function r(){var e;return Object(x["a"])(this,r),e=t.call(this,"database"),e.version(1).stores({requests:"++id,done"}),e.requests=e.table("requests"),e}return Object(y["a"])(r,[{key:"getRequests",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=[],e.t0=t,e.next=e.t0===R?4:e.t0===q?8:e.t0===A?12:16;break;case 4:return e.next=6,this.requests.orderBy("id").toArray();case 6:return r=e.sent,e.abrupt("break",19);case 8:return e.next=10,this.requests.orderBy("id").reverse().toArray();case 10:return r=e.sent,e.abrupt("break",19);case 12:return e.next=14,this.requests.orderBy("done").toArray();case 14:return r=e.sent,e.abrupt("break",19);case 16:return e.next=18,this.requests.orderBy("id").toArray();case 18:r=e.sent;case 19:return e.abrupt("return",r.map((function(e){return e.done=!!e.done,e})));case 20:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setRequestDone",value:function(e,t){return this.requests.update(e,{done:t?1:0})}},{key:"addRequest",value:function(e){return this.requests.add({text:e,done:0})}},{key:"deleteRequest",value:function(e){return this.requests.delete(e)}}]),r}(j["a"]),R="forward",q="reverse",A="unfinished-first",P={name:"HelloWorld",props:{msg:String},data:function(){return{getDate:"2021/09/02 12:56",articles:[],users:[],title:"記事のタイトル",text:"記事の本文",message:"保存時の結果などを表示",apiBaseUrl:"https://f163-2400-2412-2e3-8300-6087-d43e-10a6-b352.ngrok.io"}},created:function(){console.log("created"),this.db=new O},mounted:function(){this.getArticles(),this.getUsers()},methods:{isOnline:function(){navigator.onLine?alert("オンライン"):alert("オフライン")},onLineOnSave:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!navigator.onLine){t.next=14;break}return alert("オンラインなのでサーバに保存します。"),t.next=4,e.db.getRequests("");case 4:r=t.sent,n=regeneratorRuntime.mark((function t(n){var o,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=r[n].id,a=r[n].text.url,i=r[n].text.postdata,t.next=5,w.a.post(a,i).then((function(t){200==t&&(console.log("保存しました。"),e.db.deleteRequest(o))}));case 5:case"end":return t.stop()}}),t)})),o=0;case 7:if(!(o<r.length)){t.next=12;break}return t.delegateYield(n(o),"t0",9);case 9:o++,t.next=7;break;case 12:t.next=15;break;case 14:alert("オフラインのため同期できません。");case 15:case"end":return t.stop()}}),t)})))()},reflush:function(){console.log("reload"),window.navigator.serviceWorker.getRegistrations().then((function(e){var t,r=Object(h["a"])(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;console.log("unregister"),n.unregister()}}catch(o){r.e(o)}finally{r.f()}})),window.location.reload(!0)},getArticles:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.a.get(e.apiBaseUrl+"/api/v1/article").then((function(t){e.articles=t.data}));case 2:case"end":return t.stop()}}),t)})))()},getUsers:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w.a.get(e.apiBaseUrl+"/api/v1/user").then((function(t){e.users=t.data}));case 2:case"end":return t.stop()}}),t)})))()},saveArticle:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!navigator.onLine){t.next=5;break}return t.next=3,w.a.post(e.apiBaseUrl+"/api/v1/article",{title:e.title,text:e.text}).then((function(t){e.message=t.data.message}));case 3:t.next=9;break;case 5:return r={url:e.apiBaseUrl+"/api/v1/article",postdata:{title:e.title,text:e.text}},console.log(r),t.next=9,e.db.addRequest(r);case 9:case"end":return t.stop()}}),t)})))()}}},B=P,S=(r("1cd6"),Object(i["a"])(B,v,g,!1,null,"6ef65810",null)),U=S.exports,E={name:"Home",components:{HelloWorld:U}},L=E,H=Object(i["a"])(L,p,f,!1,null,null,null),C=H.exports;n["a"].use(d["a"]);var N=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],T=new d["a"]({mode:"history",base:"/pwa-project/",routes:N}),W=T,M=r("2f62");n["a"].use(M["a"]);var $=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=r("2106"),F=r.n(D);n["a"].config.productionTip=!1,n["a"].use(F.a,w.a),new n["a"]({router:W,store:$,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f5fe5098.js.map