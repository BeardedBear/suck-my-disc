(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],p=0,m=[];p<i.length;p++)o=i[p],s[o]&&m.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2d06":function(t,e,a){"use strict";var n=a("dcf5"),s=a.n(n);s.a},3154:function(t,e,a){"use strict";var n=a("a95f"),s=a.n(n);s.a},"3e6a":function(t,e,a){"use strict";var n=a("9921"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"menu"},[a("span",{staticClass:"logo"},[t._v("SUCK MY DISC")]),a("router-link",{staticClass:"menu__item",attrs:{to:"/sputnik"}},[t._v("Sputnik")]),a("router-link",{staticClass:"menu__item",attrs:{to:"/theprp"}},[t._v("The PRP")])],1),a("router-view")],1)},r=[],o=a("2f62");n["a"].use(o["a"]);var i={data:{sputnik:{},prp:[]},storage:""},c={mut_dataSputnik:function(t,e){var a=e.filteredObject;t.data=a},mut_dataPrp:function(t,e){t.data=e},mut_storage:function(t,e){t.storage=e}},u={},l={act_dataSputnik:function(t,e){var a=e.filteredObject,n=e.param;t.commit("mut_dataSputnik",{filteredObject:a,param:n})},act_dataPrp:function(t,e){t.commit("mut_dataPrp",e)},act_storage:function(t,e){t.commit("mut_storage",e)}},p=new o["a"].Store({state:i,mutations:c,getters:u,actions:l}),m={name:"app",store:p},d=m,f=(a("5c0b"),a("2877")),_=Object(f["a"])(d,s,r,!1,null,null,null),k=_.exports,h=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Menu"),a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data.sputnik.all}})],1)},g=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t.data?a("table",t._l(t.data,function(e){return a("tr",{key:e.id,class:{readed:t.isReaded(e.id)}},[a("td",[a("button",{on:{click:function(a){return t.readed(e.id)}}},[t._v("OK")])]),a("td",[a("button",{on:{click:function(a){return t.copy(e)}}},[t._v("Copy")])]),a("td",[t._v(t._s(e.note))]),a("td",{staticClass:"artist"},[t._v(t._s(e.artist))]),a("td",[t._v(t._s(e.album))]),a("td",[t._v(t._s(e.releaseDate))]),a("links",{attrs:{item:e}})],1)}),0):t._e()])},y=[],b=(a("7f7f"),a("6762"),a("2fdb"),a("cebc")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("tr",[a("td",[a("a",{attrs:{target:"_BLANK",href:"https://www.sputnikmusic.com/search_results.php?genreid=0&search_in=Bands&search_text="+t.item.artist}},[t._v("Sputnik")])]),a("td",[a("a",{attrs:{target:"_BLANK",href:"https://fr.wikipedia.org/wiki/"+t.item.artist}},[t._v("Wiki")])]),a("td",[a("a",{attrs:{target:"_BLANK",href:"https://rateyourmusic.com/artist/"+t.item.artist.toLowerCase().replace(" ","-")}},[t._v("RYM -")])]),a("td",[a("a",{attrs:{target:"_BLANK",href:"https://rateyourmusic.com/artist/"+t.item.artist.toLowerCase().replace(" ","_")}},[t._v("RYM _")])])])])},P=[],J={name:"Links",props:{item:{type:Object}}},O=J,X=Object(f["a"])(O,C,P,!1,null,null,null),M=X.exports,$={name:"Layout",components:{Links:M},props:{requestUrl:{type:String},data:{type:Array}},mounted:function(){var t="readed",e=JSON.parse(localStorage.getItem(t));this.act_storage(e),null===e&&localStorage.setItem(t,JSON.stringify([])),this.getSputnik()},methods:Object(b["a"])({},o["a"].mapActions(["act_dataSputnik","act_storage"]),{copy:function(t){navigator.clipboard.writeText(t.artist)},isReaded:function(t){var e=this.$store.state.storage;return e.includes(t)},readed:function(t){var e=this.$store.state.storage;e.push(t),localStorage.setItem("readed",JSON.stringify(e)),this.act_storage(e),this.getSputnik()},getSputnik:function(){var t=this;fetch(this.requestUrl,{method:"get"}).then(function(e){e.ok&&e.json().then(function(e){var a="https://www.sputnikmusic.com/newreleases.php",n=t.$route.name.toLowerCase(),s=function(n){t.act_dataSputnik({filteredObject:e.filter(function(t){return t.context===a+n})})};switch(n){case"all":s("");break;case"altrock":s("?t=21");break;case"electro":s("?t=58");break;case"hiphop":s("?t=4");break;case"jazz":s("?t=7");break;case"metal":s("?t=1");break;case"pop":s("?t=14");break;case"punk":s("?t=3");break;case"rock":s("?t=30");break}})})}})},L=$,S=(a("3e6a"),Object(f["a"])(L,j,y,!1,null,"38e4ef80",null)),w=S.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pageMenu"},[a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/all"}},[t._v("All")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/altrock"}},[t._v("Alternative Rock")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/electro"}},[t._v("Electronic")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/hiphop"}},[t._v("Hip-Hop")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/jazz"}},[t._v("Jazz")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/metal"}},[t._v("Metal")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/punk"}},[t._v("Punk")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/pop"}},[t._v("Pop")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/rock"}},[t._v("Rock")])],1)},G=[],H=(a("2d06"),{}),E=Object(f["a"])(H,x,G,!1,null,"ede8acf6",null),z=E.exports,Y={name:"Home",components:{Layout:w,Menu:z}},q=Y,A=Object(f["a"])(q,v,g,!1,null,null,null),R=A.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/qPvzsNfzXaYmhM8fn/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data}})},F=[],N={name:"ThePRP",components:{Layout:w},mounted:function(){var t="readed",e=JSON.parse(localStorage.getItem(t));this.act_storage(e),null===e&&localStorage.setItem(t,JSON.stringify([])),this.getPrp()},methods:Object(b["a"])({},o["a"].mapActions(["act_dataPrp","act_storage"]),{copy:function(t){navigator.clipboard.writeText(t.artist)},isReaded:function(t){var e=this.$store.state.storage;return e.includes(t)},readed:function(t){var e=this.$store.state.storage;e.push(t),localStorage.setItem("readed",JSON.stringify(e)),this.act_storage(e),this.getPrp()},getPrp:function(){var t=this;fetch("https://api.apify.com/v2/actor-tasks/qPvzsNfzXaYmhM8fn/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",{method:"get"}).then(function(e){e.ok&&e.json().then(function(e){t.act_dataPrp(e)})})}})},W=N,Z=Object(f["a"])(W,U,F,!1,null,null,null),T=Z.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pageMenu"},[a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/all"}},[t._v("All")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/altrock"}},[t._v("Alternative Rock")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/electro"}},[t._v("Electronic")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/hiphop"}},[t._v("Hip-Hop")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/jazz"}},[t._v("Jazz")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/metal"}},[t._v("Metal")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/punk"}},[t._v("Punk")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/pop"}},[t._v("Pop")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/rock"}},[t._v("Rock")])],1),a("router-view")],1)},K=[],B=(a("3154"),{}),D=Object(f["a"])(B,I,K,!1,null,"1c464a94",null),Q=D.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data}})],1)},tt=[],et={components:{Layout:w}},at=et,nt=Object(f["a"])(at,V,tt,!1,null,null,null),st=nt.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data}})],1)},ot=[],it={components:{Layout:w}},ct=it,ut=Object(f["a"])(ct,rt,ot,!1,null,null,null),lt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data}})],1)},mt=[],dt={components:{Layout:w}},ft=dt,_t=Object(f["a"])(ft,pt,mt,!1,null,null,null),kt=_t.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data}})],1)},vt=[],gt={components:{Layout:w}},jt=gt,yt=Object(f["a"])(jt,ht,vt,!1,null,null,null),bt=yt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data}})],1)},Pt=[],Jt={components:{Layout:w}},Ot=Jt,Xt=Object(f["a"])(Ot,Ct,Pt,!1,null,null,null),Mt=Xt.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data}})],1)},Lt=[],St={components:{Layout:w}},wt=St,xt=Object(f["a"])(wt,$t,Lt,!1,null,null,null),Gt=xt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data}})],1)},Et=[],zt={components:{Layout:w}},Yt=zt,qt=Object(f["a"])(Yt,Ht,Et,!1,null,null,null),At=qt.exports,Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data}})],1)},Ut=[],Ft={components:{Layout:w}},Nt=Ft,Wt=Object(f["a"])(Nt,Rt,Ut,!1,null,null,null),Zt=Wt.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",data:this.$store.state.data}})],1)},It=[],Kt={components:{Layout:w}},Bt=Kt,Dt=Object(f["a"])(Bt,Tt,It,!1,null,null,null),Qt=Dt.exports;n["a"].use(h["a"]);var Vt=new h["a"]({routes:[{path:"/",name:"Home",component:R},{path:"/sputnik",component:Q,children:[{path:"",name:"All",component:st},{path:"altrock",name:"AltRock",component:lt},{path:"all",name:"All",component:st},{path:"electro",name:"Electro",component:kt},{path:"hiphop",name:"HipHop",component:bt},{path:"jazz",name:"Jazz",component:Mt},{path:"metal",name:"Metal",component:Gt},{path:"punk",name:"Punk",component:At},{path:"pop",name:"Pop",component:Zt},{path:"rock",name:"Rock",component:Qt}]},{path:"/theprp",name:"ThePRP",component:T}]});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(k)},router:Vt}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(t,e,a){},9921:function(t,e,a){},a95f:function(t,e,a){},dcf5:function(t,e,a){}});
//# sourceMappingURL=app.bc1cbf83.js.map