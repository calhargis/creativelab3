(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/stats"}},[t._v("Stats")])],1),n("router-view"),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("a",{attrs:{href:"https://github.com/calhargis/cl3"}},[t._v("GitHub")])])}],i=(n("034f"),n("2877")),c={},s=Object(i["a"])(c,a,o,!1,null,null,null),u=s.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Jacob",src:"https://dw3jhbqsbya58.cloudfront.net/rosters/cfeda153-cbfc-46c2-95e1-8aff022efc11/7/f/5/7f53db19-1bb0-e611-8076-a0369f3c18ea/thumbnail.jpg?version=636845464623148690"}}),n("h1",[t._v("This is Jacob Fox")]),n("p",[t._v("Hello")])])}],m={name:"Home",components:{}},v=m,d=Object(i["a"])(v,f,p,!1,null,null,null),b=d.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",{staticClass:"center"},[t._v("Everything you need to know:")]),n("p",[t._v("hello")]),n("li",[t._v("Survived car crash")]),n("li",[t._v("Survived Appendicitis")]),n("h2",{staticClass:"center"},[t._v("Dimensions:")]),n("img",{staticClass:"center",attrs:{src:"https://dw3jhbqsbya58.cloudfront.net/rosters/6991b226-69a6-439a-a072-e63cd4325aab/c/7/f/c7f57d1c-d2c4-e711-93f8-ecf4bbe7be14/thumbnail.jpg?version=636845464623148690",alt:"Jacob",height:"250",width:"250"}}),n("ul",[n("li",[t._v("6'3\"")]),n("li",[t._v("160")])])])}],g=(n("8357"),{}),y=Object(i["a"])(g,h,_,!1,null,"536ca3df",null),w=y.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Rate Jacob")]),t.creating?n("form",{on:{submit:function(e){return e.preventDefault(),t.addTicket(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("p"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.problem,expression:"problem"}],domProps:{value:t.problem},on:{input:function(e){e.target.composing||(t.problem=e.target.value)}}}),n("br"),n("button",{attrs:{type:"submit"}},[t._v("Submit")])]):n("div",[n("p",[t._v("Your comment has been submitted")]),n("p",[n("a",{attrs:{href:"#"},on:{click:t.toggleForm}},[t._v("Submit another ticket")])])])])},O=[],x=(n("b0c0"),{name:"create",data:function(){return{creating:!0,name:"",problem:""}},methods:{toggleForm:function(){this.creating=!this.creating},addTicket:function(){this.$root.$data.addTicket(this.name,this.problem),this.name="",this.problem="",this.creating=!1}}}),k=x,S=(n("e638"),Object(i["a"])(k,j,O,!1,null,"5a18ffa2",null)),$=S.exports;r["a"].use(l["a"]);var P=[{path:"/",name:"Home",component:b},{path:"/about",name:"about",component:w},{path:"/stats",name:"stats",component:$}],E=new l["a"]({mode:"history",base:"/",routes:P}),T=E;r["a"].config.productionTip=!1,new r["a"]({router:T,render:function(t){return t(u)}}).$mount("#app")},8357:function(t,e,n){"use strict";var r=n("9527"),a=n.n(r);a.a},"85ec":function(t,e,n){},9527:function(t,e,n){},ae10:function(t,e,n){},e638:function(t,e,n){"use strict";var r=n("ae10"),a=n.n(r);a.a}});
//# sourceMappingURL=app.723c1ea0.js.map