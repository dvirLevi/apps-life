(function(t){function A(A){for(var n,o,a=A[0],s=A[1],r=A[2],p=0,u=[];p<a.length;p++)o=a[p],i[o]&&u.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(A);while(u.length)u.shift()();return c.push.apply(c,r||[]),e()}function e(){for(var t,A=0;A<c.length;A++){for(var e=c[A],n=!0,a=1;a<e.length;a++){var s=e[a];0!==i[s]&&(n=!1)}n&&(c.splice(A--,1),t=o(o.s=e[0]))}return t}var n={},i={app:0},c=[];function o(A){if(n[A])return n[A].exports;var e=n[A]={i:A,l:!1,exports:{}};return t[A].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,A,e){o.o(t,A)||Object.defineProperty(t,A,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,A){if(1&A&&(t=o(t)),8&A)return t;if(4&A&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&A&&"string"!=typeof t)for(var n in t)o.d(e,n,function(A){return t[A]}.bind(null,n));return e},o.n=function(t){var A=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(A,"a",A),A},o.o=function(t,A){return Object.prototype.hasOwnProperty.call(t,A)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=A,a=a.slice();for(var r=0;r<a.length;r++)A(a[r]);var l=s;c.push([0,"chunk-vendors"]),e()})({0:function(t,A,e){t.exports=e("56d7")},"02ca":function(t,A,e){"use strict";var n=e("3295"),i=e.n(n);i.a},"034f":function(t,A,e){"use strict";var n=e("64a9"),i=e.n(n);i.a},"0f48":function(t,A){t.exports="data:image/png;base64,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"},"0fd4":function(t,A,e){t.exports=e.p+"img/leda.bedd3f1c.png"},2068:function(t,A,e){t.exports=e.p+"img/gimatria-screen.923b3d90.png"},3107:function(t,A,e){},3295:function(t,A,e){},"38ef":function(t,A,e){t.exports=e.p+"img/contact-us.b3fc5a0d.png"},"3a89":function(t,A,e){t.exports=e.p+"img/phon2.a5a91f95.png"},"54df":function(t,A,e){t.exports=e.p+"img/time-screen.786b1fc8.png"},"558e":function(t,A,e){"use strict";var n=e("cf38"),i=e.n(n);i.a},"56d7":function(t,A,e){"use strict";e.r(A);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),i=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e("router-view")],1)},c=[],o=(e("034f"),e("2877")),a={},s=Object(o["a"])(a,i,c,!1,null,null,null),r=s.exports,l=e("8c4f"),p=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",[e("Title"),e("HideTitle",{attrs:{ifShowTitle:t.ifShowTitle}}),e("whatDoes",{attrs:{ifAnim:t.ifAnim}}),e("Products"),e("Contact"),e("Footer")],1)},u=[],d=function(){var t=this,A=t.$createElement,n=t._self._c||A;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"bac-title position-relative",style:{height:t.heightTitle+"px"}},[n("div",{staticClass:"position-absolute w-100"},[n("IconsContact")],1),n("Logo",{staticClass:"zindex",attrs:{size:"large"}}),n("h2",{staticClass:"w-100 zindex"},[t._v("פיתוח אתרים ואפליקציות")]),n("vue-particles",{attrs:{color:"#4b383b",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#4b383b",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1),n("div",{staticClass:"w-100 p-3 arrow"},[n("img",{attrs:{src:e("c5d4"),alt:""},on:{click:function(A){return t.scroll()}}})])])])},f=[],m=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"wrap-logo",class:t.size},[e("h1",[t._v("AppsLife")]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.0",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"}},[e("path",{attrs:{d:"M16.667,43.33C16.667,69.104,37.559,90,63.333,90v-6.667c-22.093,0-40-17.91-40-40.003H16.667z"}}),e("path",{attrs:{d:"M63.333,16.667c-14.729,0-26.666,11.94-26.666,26.664C36.667,58.06,48.604,70,63.333,70v6.667  C44.922,76.667,30,61.741,30,43.33C30,24.922,44.922,10,63.333,10V16.667z"}}),e("path",{attrs:{d:"M76.667,43.333C76.667,35.97,70.7,30,63.333,30C55.967,30,50,35.97,50,43.333s5.967,13.334,13.333,13.334v6.666  c-11.048,0-20-8.955-20-20.003c0-11.045,8.952-19.997,20-19.997c11.049,0,20,8.952,20,19.997L76.667,43.333z"}})])])},g=[],w={name:"Logo",props:{size:String},computed:{widthLogo:function(){return window.innerWidth<768?100:this.width}}},h=w,C=(e("9e03"),Object(o["a"])(h,m,g,!1,null,"2d88230a",null)),v=C.exports,x=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"w-100 center-all"},t._l(t.icons,function(t){return e("div",{key:t.id,staticClass:"center-all box-icon",class:t.aniClass},[e("a",{attrs:{href:t.link}},[e("img",{staticClass:"w-100",attrs:{src:t.img,alt:""}})])])}),0)},b=[],B={name:"IconsContact",props:{},components:{},data:function(){return{icons:[{img:e("9673"),link:"https://api.whatsapp.com/send?phone=972545993678",aniClass:"ani1",id:1},{img:e("3a89"),link:"tel:0545993678",aniClass:"ani2",id:2},{img:e("0f48"),link:"mailto:dvirleviapp@gmail.com",aniClass:"ani3",id:3}]}},methods:{}},D=B,k=(e("5d1c"),Object(o["a"])(D,x,b,!1,null,"dabb37f2",null)),O=k.exports,H={name:"Title",props:{},components:{Logo:v,IconsContact:O},computed:{heightTitle:function(){return window.innerHeight-80}},methods:{scroll:function(){window.scrollTo(0,window.innerHeight+2)}}},I=H,E=(e("e516"),Object(o["a"])(I,d,f,!1,null,"66011c44",null)),M=E.exports,Q=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"w-100 sticky-top"},[t.ifShowTitle<t.heightTitle?e("div",{staticClass:"flip"}):t._e(),t.ifShowTitle>=t.heightTitle?e("div",{staticClass:"row  anim-title"},[e("div",{staticClass:"col"},[e("div",{staticClass:"bac-title"},[e("Logo",{attrs:{size:"medium"}})],1)])]):t._e()])},y=[],S={name:"HideTitle",props:["ifShowTitle"],components:{Logo:v},data:function(){return{}},mounted:function(){},computed:{heightTitle:function(){return window.innerHeight}}},j=S,U=(e("02ca"),Object(o["a"])(j,Q,y,!1,null,"3c436870",null)),L=U.exports,T=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"row justify-content-center"},[e("p",{staticClass:"title-prod mt-5"},[t._v("הפיתוחים שלנו")]),t._l(t.products,function(A){return e("div",{key:A.id,staticClass:"col-md-4"},[e("div",{staticClass:"w-100 center-all"},[e("div",{staticClass:"box-prod center-all"},[e("img",{attrs:{src:A.img,alt:""}}),e("p",{staticClass:"center-all"},[t._v(t._s(A.text))]),e("a",{attrs:{href:A.link,target:"_blanc"}},[t._v("למעבר לאתר/אפליקציה לחץ כאן")])])])])})],2)},J=[],R={name:"Products",props:{},components:{},data:function(){return{products:[{img:e("c5fd"),text:"אתר חנות לשיווק ומכירת תנורי נאפולי",link:"https://www.napoli-oven.co.il",id:0},{img:e("af1d"),text:"אתר חדשות המשק",link:"https://www.meshekil.com/",id:7},{img:e("0fd4"),text:"אתר להריון ולידה",link:"https://www.mitkonenet.com",id:2},{img:e("54df"),text:"אפליקציה לזמני היום",link:"https://kash-bezmana.netlify.com/",id:6},{img:e("5ef2"),text:"אתר קונים ישראלי",link:"https://shop-il.netlify.app/",id:8},{img:e("ca42"),text:'מערכת לווי לחוברת חופש של מרכז מורשת הרמב"ם',link:"https://answer-rambam.herokuapp.com/",id:4},{img:e("61ce"),text:"אפליקציה לניהול גינה",link:"https://gin-apps.herokuapp.com/",id:1},{img:e("2068"),text:"אפליקציה לחישוב גימטריות עם אפשרות להעתקת הטקסט לשעשועונים וכד'",link:"https://dvirlevi.github.io/gimatria-app/",id:3},{img:e("7c38"),text:"משחק אימוג'ים",link:"https://imoji-game.herokuapp.com/",id:9},{img:e("fb00"),text:'משחק לפסח עם טבלת שיאים למרכז מורשת הרמב"ם',link:"https://gamepessach.herokuapp.com/",id:5}]}},methods:{}},P=R,X=(e("c919"),Object(o["a"])(P,T,J,!1,null,"fd7f555a",null)),F=X.exports,K=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col"},[e("p",{staticClass:"title-prod mt-5"},[t._v("יצירת קשר")]),t._m(0),e("h5",[t._v("רוצים שנפתח לכם אתר או אפליקציה?")]),e("h5",[t._v("דברו איתנו!")]),e("IconsContact")],1)])},N=[function(){var t=this,A=t.$createElement,n=t._self._c||A;return n("div",{staticClass:"w-100 center-all contact-us"},[n("img",{attrs:{src:e("38ef"),alt:""}})])}],Y={name:"Contact",props:{},components:{IconsContact:O},data:function(){return{}},methods:{}},V=Y,G=(e("ad3d"),Object(o["a"])(V,K,N,!1,null,"17bd9d88",null)),W=G.exports,q=function(){var t=this,A=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col bg-dark text-white contact"},[e("p",{staticClass:"w-100 text-center m-1"},[t._v("נבנה ופותח בAppsLife ליצירת קשר - "),e("a",{attrs:{href:"mailto:dvirleviapp@gmail.com"}},[t._v("לחץ כאן!")])])])])}],_={name:"Footer",props:{},components:{},data:function(){return{}},methods:{}},z=_,$=(e("558e"),Object(o["a"])(z,q,Z,!1,null,"5ee05ece",null)),tt=$.exports,At=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",{staticClass:"title-prod mt-5"},[t._v("מה אנחנו עושים?")]),e("div",{staticClass:"w-100 center-all"},t._l(t.does,function(A){return e("whatDoesBox",{key:A.id,attrs:{item:A,ifAnim:t.ifAnim}})}),1)])])},et=[],nt=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{ref:"boxWhat",staticClass:"box-what center-all"},[e("div",{staticClass:"w-100 center-all"},[e("img",{style:{transform:"rotate("+t.namAnim+"deg) scale("+t.namAnimScale+")",opacity:t.namAnimScale},attrs:{src:t.item.img,alt:""}})]),e("h2",[t._v(t._s(t.item.title))]),e("p",[t._v(t._s(t.item.text))])])},it=[],ct={name:"whatDoesBox",props:["item","ifAnim"],components:{},data:function(){return{topBox:""}},mounted:function(){this.topBox=this.$refs.boxWhat.offsetTop-10},computed:{namAnim:function(){return this.ifAnim-this.topBox<360?this.ifAnim-this.topBox:0},namAnimScale:function(){if(this.ifAnim-this.topBox<359){var t=this.ifAnim-this.topBox,A=t/3.6;return"0."+A.toFixed(0)}return 1}},methods:{}},ot=ct,at=(e("accb"),Object(o["a"])(ot,nt,it,!1,null,"7ef322d0",null)),st=at.exports,rt={name:"whatDoes",props:["ifAnim"],components:{whatDoesBox:st},data:function(){return{does:[{title:"פיתוח אפליקציות לווב",text:"מערכות ואפליקציות שנמצאות על רשת האינטרנט ונגישות לכל מי שתרצו ברחבי העולם",img:e("edbf"),id:1},{title:"פיתוח אפליקציות מותאמות למובייל",text:"פיתוח אפליקציות היברידיות שמותאמות לכל הפלטפורמות",img:e("978f"),id:2},{title:"פיתוח אתרי One-page ודפי נחיתה ",text:"פיתוח אתר תדמית או דף נחיתה לשיווק עסק או כל דבר אחר שתרצה",img:e("e13b"),id:3}]}},mounted:function(){},methods:{}},lt=rt,pt=(e("90aa"),Object(o["a"])(lt,At,et,!1,null,"17e28c3d",null)),ut=pt.exports,dt={name:"home",components:{Title:M,HideTitle:L,Products:F,Contact:W,Footer:tt,whatDoes:ut},data:function(){return{ifShowTitle:"",ifAnim:""}},mounted:function(){var t=this;window.onscroll=function(){t.ifShowTitle=document.documentElement.scrollTop,t.ifAnim=document.documentElement.scrollTop}}},ft=dt,mt=Object(o["a"])(ft,p,u,!1,null,"2f654170",null),gt=mt.exports;n["a"].use(l["a"]);var wt=new l["a"]({routes:[{path:"/",name:"home",component:gt}]}),ht=e("2f62");n["a"].use(ht["a"]);var Ct=new ht["a"].Store({state:{},mutations:{},actions:{}}),vt=(e("96b1"),e("4989"),e("ab8b"),e("98c9"));n["a"].use(vt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:wt,store:Ct,render:function(t){return t(r)}}).$mount("#app")},"5d1c":function(t,A,e){"use strict";var n=e("5e5d"),i=e.n(n);i.a},"5e5d":function(t,A,e){},"5ef2":function(t,A,e){t.exports=e.p+"img/shopil-screen.bba9c627.png"},"61ce":function(t,A,e){t.exports=e.p+"img/gin-screen.8bbc8af1.png"},"64a9":function(t,A,e){},"7c38":function(t,A,e){t.exports=e.p+"img/emoji-screen.1479f610.png"},"8c1c":function(t,A,e){},"90aa":function(t,A,e){"use strict";var n=e("3107"),i=e.n(n);i.a},9673:function(t,A,e){t.exports=e.p+"img/whatsapp.aaf236c4.png"},"96b1":function(t,A,e){},"978f":function(t,A,e){t.exports=e.p+"img/mobile.8b06f0ed.png"},"9d67":function(t,A,e){},"9e03":function(t,A,e){"use strict";var n=e("d8d3"),i=e.n(n);i.a},accb:function(t,A,e){"use strict";var n=e("9d67"),i=e.n(n);i.a},ad3d:function(t,A,e){"use strict";var n=e("f791"),i=e.n(n);i.a},af1d:function(t,A,e){t.exports=e.p+"img/meshek-screen.9b78457e.png"},b885:function(t,A,e){},c5d4:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAArCAMAAAAUs8V2AAAAPFBMVEUAAAD/j4/+kpL/kZH+kpL/j4/+kZH/j4//kZH+kZH+kZH/kpL/kZH9kZH/kJD/j4//kpL9kpL/kpL+kpKSRI1jAAAAE3RSTlMAIN9/7xDPMF/foLNvkI9Qj3A/XI1gWAAAAOhJREFUSMet0lsOgzAMRNFxIATou9n/XvtVGctSjSedv0jJkRAXf5uUFfmtuyF6zyNt7ks9EilEXxXRQxLRV0X0kEXq99XclEgil+OrtXcCuXXdBEyH49zOEZMlHJIk7gCBmM+/AAzSum6rYBApB0KAEIkJAqnF3mOQpesewC9ETrR1Df56kTNtxUjcVoxEbeUQ39ZSwSAy2zASSNyW39Mhvi1BsN0jvi0G2W1bacS3lUccwSAv2xaF2LY4xIbBIDyBqkX4tnjkDdCItjWKTACNKDGK7ACPaFuDyCYYmWxKDCDaFo+04MIHNY028E7KeJ4AAAAASUVORK5CYII="},c5fd:function(t,A,e){t.exports=e.p+"img/napoli.c1f8fd3f.png"},c919:function(t,A,e){"use strict";var n=e("8c1c"),i=e.n(n);i.a},ca42:function(t,A,e){t.exports=e.p+"img/rambam-screen.fbcd8230.png"},cf38:function(t,A,e){},d8d3:function(t,A,e){},e13b:function(t,A,e){t.exports=e.p+"img/one-page.8c2f234b.png"},e516:function(t,A,e){"use strict";var n=e("b885"),i=e.n(n);i.a},edbf:function(t,A,e){t.exports=e.p+"img/web.229d3644.png"},f791:function(t,A,e){},fb00:function(t,A,e){t.exports=e.p+"img/rambam-screen2.65aec3fe.png"}});
//# sourceMappingURL=app.585ffe1e.js.map