(function(t){function e(e){for(var n,o,c=e[0],i=e[1],u=e[2],p=0,m=[];p<c.length;p++)o=c[p],r[o]&&m.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"3dc3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"menu"},[a("span",{staticClass:"logo"},[t._v("SUCK MY DISC")]),a("router-link",{staticClass:"menu__item",attrs:{to:"/sputnik"}},[t._v("Sputnik")]),a("router-link",{staticClass:"menu__item",attrs:{to:"/theprp"}},[t._v("The PRP")])],1),a("router-view")],1)},s=[],o=a("cebc"),c=a("2f62");n["a"].use(c["a"]);var i={data:[],storage:""},u={mut_dataSputnik:function(t,e){var a=e.filteredObject;t.data=a},mut_dataPrp:function(t,e){t.data=e},mut_storage:function(t,e){t.storage=e}},l={},p={act_dataSputnik:function(t,e){var a=e.filteredObject,n=e.param;t.commit("mut_dataSputnik",{filteredObject:a,param:n})},act_dataPrp:function(t,e){t.commit("mut_dataPrp",e)},act_storage:function(t,e){t.commit("mut_storage",e)}},m=new c["a"].Store({state:i,mutations:u,getters:l,actions:p,strict:!0}),f={name:"app",methods:Object(o["a"])({},c["a"].mapActions(["act_storage"])),created:function(){var t="readed",e=JSON.parse(localStorage.getItem(t));this.act_storage(e),null===e&&localStorage.setItem(t,JSON.stringify([]))},store:m},d=f,h=(a("5c0b"),a("2877")),k=Object(h["a"])(d,r,s,!1,null,null,null),_=k.exports,v=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})],1)},g=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[this.$store.state.data?a("table",t._l(this.$store.state.data,function(e){return a("tr",{key:e.id,class:{readed:t.isReaded(e.id)}},[a("td",[a("button",{on:{click:function(a){return t.readed(e.id)}}},[t._v("OK")])]),a("td",[a("button",{on:{click:function(a){return t.copy(e)}}},[t._v("Copy")])]),a("td",[t._v(t._s(e.note))]),a("td",{staticClass:"artist"},[t._v(t._s(e.artist))]),a("td",[t._v(t._s(e.album))]),a("td",[t._v(t._s(e.releaseDate))]),a("links",{attrs:{item:e}})],1)}),0):t._e()])},b=[],P=(a("7f7f"),a("6762"),a("2fdb"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("tr",[a("td",[a("a",{attrs:{target:"_BLANK",href:"https://www.sputnikmusic.com/search_results.php?genreid=0&search_in=Bands&search_text="+t.item.artist}},[t._v("Sputnik")])]),a("td",[a("a",{attrs:{target:"_BLANK",href:"https://fr.wikipedia.org/wiki/"+t.item.artist}},[t._v("Wiki")])]),a("td",[a("a",{attrs:{target:"_BLANK",href:"https://rateyourmusic.com/artist/"+t.item.artist.toLowerCase().replace(" ","-")}},[t._v("RYM -")])]),a("td",[a("a",{attrs:{target:"_BLANK",href:"https://rateyourmusic.com/artist/"+t.item.artist.toLowerCase().replace(" ","_")}},[t._v("RYM _")])])])])}),C=[],J={name:"Links",props:{item:{type:Object}}},O=J,X=Object(h["a"])(O,P,C,!1,null,null,null),L=X.exports,S={name:"Layout",components:{Links:L},props:{requestUrl:{type:String},data:{type:Array}},mounted:function(){this.getSputnik()},methods:Object(o["a"])({},c["a"].mapActions(["act_dataSputnik","act_storage"]),{copy:function(t){navigator.clipboard.writeText(t.artist)},isReaded:function(t){var e=this.$store.state.storage;return e.includes(t)},readed:function(t){var e=this.$store.state.storage;e.push(t),localStorage.setItem("readed",JSON.stringify(e)),this.act_storage(e),this.getSputnik()},getSputnik:function(){var t=this;fetch(this.requestUrl,{method:"get"}).then(function(e){e.ok&&e.json().then(function(e){var a="https://www.sputnikmusic.com/newreleases.php",n=t.$route.name,r=function(n){t.act_dataSputnik({filteredObject:e.filter(function(t){return t.context===a+n})})};switch(n.toLowerCase()){case"all":r("");break;case"altrock":r("?t=21");break;case"electro":r("?t=58");break;case"hiphop":r("?t=4");break;case"jazz":r("?t=7");break;case"metal":r("?t=1");break;case"pop":r("?t=14");break;case"punk":r("?t=3");break;case"rock":r("?t=30");break}})})}})},w=S,x=(a("6176"),Object(h["a"])(w,y,b,!1,null,"ed70a522",null)),$=x.exports,G={name:"Home",components:{Layout:$}},M=G,H=Object(h["a"])(M,j,g,!1,null,null,null),E=H.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/qPvzsNfzXaYmhM8fn/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})},q=[],z={name:"ThePRP",components:{Layout:$},mounted:function(){var t="readed",e=JSON.parse(localStorage.getItem(t));this.act_storage(e),null===e&&localStorage.setItem(t,JSON.stringify([])),this.getPrp()},methods:Object(o["a"])({},c["a"].mapActions(["act_dataPrp","act_storage"]),{copy:function(t){navigator.clipboard.writeText(t.artist)},isReaded:function(t){var e=this.$store.state.storage;return e.includes(t)},readed:function(t){var e=this.$store.state.storage;e.push(t),localStorage.setItem("readed",JSON.stringify(e)),this.act_storage(e),this.getPrp()},getPrp:function(){var t=this;fetch("https://api.apify.com/v2/actor-tasks/qPvzsNfzXaYmhM8fn/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",{method:"get"}).then(function(e){e.ok&&e.json().then(function(e){t.act_dataPrp(e)})})}})},U=z,A=Object(h["a"])(U,Y,q,!1,null,null,null),F=A.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"pageMenu"},[a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/all"}},[t._v("All")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/altrock"}},[t._v("Alternative Rock")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/electro"}},[t._v("Electronic")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/hiphop"}},[t._v("Hip-Hop")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/jazz"}},[t._v("Jazz")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/metal"}},[t._v("Metal")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/punk"}},[t._v("Punk")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/pop"}},[t._v("Pop")]),a("router-link",{staticClass:"pageMenu__item",attrs:{to:"/sputnik/rock"}},[t._v("Rock")])],1),a("router-view")],1)},R=[],W=(a("f05a"),{}),Z=Object(h["a"])(W,N,R,!1,null,"ba915a3c",null),T=Z.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})],1)},K=[],B={components:{Layout:$}},D=B,Q=Object(h["a"])(D,I,K,!1,null,null,null),V=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})],1)},et=[],at={components:{Layout:$}},nt=at,rt=Object(h["a"])(nt,tt,et,!1,null,null,null),st=rt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})],1)},ct=[],it={components:{Layout:$}},ut=it,lt=Object(h["a"])(ut,ot,ct,!1,null,null,null),pt=lt.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})],1)},ft=[],dt={components:{Layout:$}},ht=dt,kt=Object(h["a"])(ht,mt,ft,!1,null,null,null),_t=kt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})],1)},jt=[],gt={components:{Layout:$}},yt=gt,bt=Object(h["a"])(yt,vt,jt,!1,null,null,null),Pt=bt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})],1)},Jt=[],Ot={components:{Layout:$}},Xt=Ot,Lt=Object(h["a"])(Xt,Ct,Jt,!1,null,null,null),St=Lt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})],1)},xt=[],$t={components:{Layout:$}},Gt=$t,Mt=Object(h["a"])(Gt,wt,xt,!1,null,null,null),Ht=Mt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})],1)},Yt=[],qt={components:{Layout:$}},zt=qt,Ut=Object(h["a"])(zt,Et,Yt,!1,null,null,null),At=Ut.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Layout",{attrs:{requestUrl:"https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco"}})],1)},Nt=[],Rt={components:{Layout:$}},Wt=Rt,Zt=Object(h["a"])(Wt,Ft,Nt,!1,null,null,null),Tt=Zt.exports;n["a"].use(v["a"]);var It=new v["a"]({routes:[{path:"/",name:"Home",component:E},{path:"/sputnik",component:T,children:[{path:"",name:"All",component:V},{path:"altrock",name:"AltRock",component:st},{path:"all",name:"All",component:V},{path:"electro",name:"Electro",component:pt},{path:"hiphop",name:"HipHop",component:_t},{path:"jazz",name:"Jazz",component:Pt},{path:"metal",name:"Metal",component:St},{path:"punk",name:"Punk",component:Ht},{path:"pop",name:"Pop",component:At},{path:"rock",name:"Rock",component:Tt}]},{path:"/theprp",name:"ThePRP",component:F}]});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(_)},router:It}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(t,e,a){},6176:function(t,e,a){"use strict";var n=a("3dc3"),r=a.n(n);r.a},da1f:function(t,e,a){},f05a:function(t,e,a){"use strict";var n=a("da1f"),r=a.n(n);r.a}});
//# sourceMappingURL=app.d0de5c1c.js.map