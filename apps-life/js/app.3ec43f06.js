(function(A){function t(t){for(var n,a,c=t[0],s=t[1],r=t[2],u=0,p=[];u<c.length;u++)a=c[u],i[a]&&p.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(A[n]=s[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,r||[]),e()}function e(){for(var A,t=0;t<o.length;t++){for(var e=o[t],n=!0,c=1;c<e.length;c++){var s=e[c];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),A=a(a.s=e[0]))}return A}var n={},i={app:0},o=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=A,a.c=n,a.d=function(A,t,e){a.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},a.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},a.t=function(A,t){if(1&t&&(A=a(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var n in A)a.d(e,n,function(t){return A[t]}.bind(null,n));return e},a.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return a.d(t,"a",t),t},a.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var l=s;o.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"02ca":function(A,t,e){"use strict";var n=e("3295"),i=e.n(n);i.a},"030c":function(A,t,e){},"034f":function(A,t,e){"use strict";var n=e("64a9"),i=e.n(n);i.a},"0f48":function(A,t){A.exports="data:image/png;base64,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"},1605:function(A,t,e){},2068:function(A,t,e){A.exports=e.p+"img/gimatria-screen.923b3d90.png"},"2b62":function(A,t,e){},3107:function(A,t,e){},3295:function(A,t,e){},"38ef":function(A,t,e){A.exports=e.p+"img/contact-us.b3fc5a0d.png"},"3a89":function(A,t,e){A.exports=e.p+"img/phon2.a5a91f95.png"},"410a":function(A,t,e){"use strict";var n=e("030c"),i=e.n(n);i.a},"46ba":function(A,t,e){A.exports=e.p+"img/send-screen.737917ed.png"},"558e":function(A,t,e){"use strict";var n=e("cf38"),i=e.n(n);i.a},"56d7":function(A,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e("router-view")],1)},o=[],a=(e("034f"),e("2877")),c={},s=Object(a["a"])(c,i,o,!1,null,null,null),r=s.exports,l=e("8c4f"),u=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("Title"),e("HideTitle",{attrs:{ifShowTitle:A.ifShowTitle}}),e("whatDoes",{attrs:{ifAnim:A.ifAnim}}),e("Products"),e("Contact"),e("Footer")],1)},p=[],d=function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"bac-title position-relative",style:{height:A.heightTitle+"px"}},[n("div",{staticClass:"position-absolute w-100"},[n("IconsContact")],1),n("Logo",{attrs:{size:"large"}}),n("h1",{staticClass:"w-100"},[A._v("פיתוח אתרים ואפליקציות")])],1),n("div",{staticClass:"w-100 p-3 arrow"},[n("img",{attrs:{src:e("c5d4"),alt:""},on:{click:function(t){return A.scroll()}}})])])])},f=[],m=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"wrap-logo",class:A.size},[e("p",[A._v("AppsLife")]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.0",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"}},[e("path",{attrs:{d:"M16.667,43.33C16.667,69.104,37.559,90,63.333,90v-6.667c-22.093,0-40-17.91-40-40.003H16.667z"}}),e("path",{attrs:{d:"M63.333,16.667c-14.729,0-26.666,11.94-26.666,26.664C36.667,58.06,48.604,70,63.333,70v6.667  C44.922,76.667,30,61.741,30,43.33C30,24.922,44.922,10,63.333,10V16.667z"}}),e("path",{attrs:{d:"M76.667,43.333C76.667,35.97,70.7,30,63.333,30C55.967,30,50,35.97,50,43.333s5.967,13.334,13.333,13.334v6.666  c-11.048,0-20-8.955-20-20.003c0-11.045,8.952-19.997,20-19.997c11.049,0,20,8.952,20,19.997L76.667,43.333z"}})])])},w=[],g={name:"Logo",props:{size:String},computed:{widthLogo:function(){return window.innerWidth<768?100:this.width}}},h=g,C=(e("7f7b"),Object(a["a"])(h,m,w,!1,null,"27ec22c8",null)),v=C.exports,b=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"w-100 center-all"},A._l(A.icons,function(A){return e("div",{key:A.id,staticClass:"center-all box-icon",class:A.aniClass},[e("a",{attrs:{href:A.link}},[e("img",{staticClass:"w-100",attrs:{src:A.img,alt:""}})])])}),0)},B=[],x={name:"IconsContact",props:{},components:{},data:function(){return{icons:[{img:e("9673"),link:"https://api.whatsapp.com/send?phone=972545993678",aniClass:"ani1",id:1},{img:e("3a89"),link:"tel:0545993678",aniClass:"ani2",id:2},{img:e("0f48"),link:"mailto:dvirleviapp@gmail.com",aniClass:"ani3",id:3}]}},methods:{}},D=x,O=(e("410a"),Object(a["a"])(D,b,B,!1,null,"4c34ca2e",null)),k=O.exports,H={name:"Title",props:{},components:{Logo:v,IconsContact:k},computed:{heightTitle:function(){return window.innerHeight-80}},methods:{scroll:function(){window.scrollTo(0,window.innerHeight)}}},I=H,E=(e("61c9"),Object(a["a"])(I,d,f,!1,null,"878dfc7a",null)),Q=E.exports,M=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"w-100 sticky-top"},[A.ifShowTitle<A.heightTitle?e("div",{staticClass:"flip"}):A._e(),A.ifShowTitle>=A.heightTitle?e("div",{staticClass:"row  anim-title"},[e("div",{staticClass:"col"},[e("div",{staticClass:"bac-title"},[e("Logo",{attrs:{size:"medium"}})],1)])]):A._e()])},y=[],S={name:"HideTitle",props:["ifShowTitle"],components:{Logo:v},data:function(){return{}},mounted:function(){},computed:{heightTitle:function(){return window.innerHeight}}},U=S,j=(e("02ca"),Object(a["a"])(U,M,y,!1,null,"3c436870",null)),L=j.exports,T=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("p",{staticClass:"title-prod mt-5"},[A._v("הפיתוחים שלנו")]),A._l(A.products,function(t){return e("div",{key:t.id,staticClass:"col-md-4"},[e("div",{staticClass:"w-100 center-all"},[e("div",{staticClass:"box-prod center-all"},[e("img",{attrs:{src:t.img,alt:""}}),e("p",{staticClass:"center-all"},[A._v(A._s(t.text))]),e("a",{attrs:{href:t.link}},[A._v("למעבר לאתר/אפליקציה לחץ כאן")])])])])})],2)},J=[],R={name:"Products",props:{},components:{},data:function(){return{products:[{img:e("46ba"),text:"אפליקציה שעושה סדר בסנדוויצ'ים של הילדים",link:"https://dvirlevi.github.io/send-app/",id:1},{img:e("61ce"),text:"אפליקציה לניהול גינה",link:"https://gin-apps.herokuapp.com/",id:2},{img:e("2068"),text:"אפליקציה לחישוב גימטריות עם אפשרות להעתקת הטקסט לשעשועונים וכד'",link:"https://dvirlevi.github.io/gimatria-app/",id:3},{img:e("ca42"),text:'מערכת ללווי חוברת חופש לילדים של מרכז מורשת הרמב"ם',link:"https://answer-rambam.herokuapp.com/",id:4},{img:e("fb00"),text:'משחק לפסח עם טבלת שיאים למרכז מורשת הרמב"ם',link:"https://gamepessach.herokuapp.com/",id:5}]}},methods:{}},P=R,X=(e("67ed"),Object(a["a"])(P,T,J,!1,null,"77cea965",null)),F=X.exports,K=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col"},[e("p",{staticClass:"title-prod mt-5"},[A._v("יצירת קשר")]),A._m(0),e("h5",[A._v("רוצים שנפתח לכם אתר או אפליקציה?")]),e("h5",[A._v("דברו איתנו!")]),e("IconsContact")],1)])},N=[function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{staticClass:"w-100 center-all contact-us"},[n("img",{attrs:{src:e("38ef"),alt:""}})])}],Y={name:"Contact",props:{},components:{IconsContact:k},data:function(){return{}},methods:{}},V=Y,G=(e("ad3d"),Object(a["a"])(V,K,N,!1,null,"17bd9d88",null)),W=G.exports,q=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},Z=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col bg-dark text-white contact"},[e("p",{staticClass:"w-100 text-center m-1"},[A._v("נבנה ופותח בAppsLife ליצירת קשר - "),e("a",{attrs:{href:"mailto:dvirleviapp@gmail.com"}},[A._v("לחץ כאן!")])])])])}],_={name:"Footer",props:{},components:{},data:function(){return{}},methods:{}},z=_,$=(e("558e"),Object(a["a"])(z,q,Z,!1,null,"5ee05ece",null)),AA=$.exports,tA=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",{staticClass:"title-prod mt-5"},[A._v("מה אנחנו עושים?")]),e("div",{staticClass:"w-100 center-all"},A._l(A.does,function(t){return e("whatDoesBox",{key:t.id,attrs:{item:t,ifAnim:A.ifAnim}})}),1)])])},eA=[],nA=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{ref:"boxWhat",staticClass:"box-what center-all"},[e("div",{staticClass:"w-100 center-all"},[e("img",{style:{transform:"rotate("+A.namAnim+"deg) scale("+A.namAnimScale+")",opacity:A.namAnimScale},attrs:{src:A.item.img,alt:""}})]),e("h2",[A._v(A._s(A.item.title))]),e("p",[A._v(A._s(A.item.text))])])},iA=[],oA={name:"whatDoesBox",props:["item","ifAnim"],components:{},data:function(){return{topBox:""}},mounted:function(){this.topBox=this.$refs.boxWhat.offsetTop-10},computed:{namAnim:function(){return this.ifAnim-this.topBox<360?this.ifAnim-this.topBox:0},namAnimScale:function(){if(this.ifAnim-this.topBox<359){var A=this.ifAnim-this.topBox,t=A/3.6;return"0."+t.toFixed(0)}return 1}},methods:{}},aA=oA,cA=(e("accb"),Object(a["a"])(aA,nA,iA,!1,null,"7ef322d0",null)),sA=cA.exports,rA={name:"whatDoes",props:["ifAnim"],components:{whatDoesBox:sA},data:function(){return{does:[{title:"פיתוח אפליקציות לווב",text:"מערכות ואפליקציות שנמצאות על רשת האינטרנט ונגישות לכל מי שתרצו ברחבי העולם",img:e("edbf"),id:1},{title:"פיתוח אפליקציות מותאמות למובייל",text:"פיתוח אפליקציות היברידיות שמותאמות לכל הפלטפורמות",img:e("978f"),id:2},{title:"פיתוח אתרי One-page ודפי נחיתה ",text:"פיתוח אתר תדמית או דף נחיתה לשיווק עסק או כל דבר אחר שתרצה",img:e("e13b"),id:3}]}},mounted:function(){},methods:{}},lA=rA,uA=(e("90aa"),Object(a["a"])(lA,tA,eA,!1,null,"17e28c3d",null)),pA=uA.exports,dA={name:"home",components:{Title:Q,HideTitle:L,Products:F,Contact:W,Footer:AA,whatDoes:pA},data:function(){return{ifShowTitle:"",ifAnim:""}},mounted:function(){var A=this;window.onscroll=function(){A.ifShowTitle=document.documentElement.scrollTop,A.ifAnim=document.documentElement.scrollTop}}},fA=dA,mA=Object(a["a"])(fA,u,p,!1,null,"2f654170",null),wA=mA.exports;n["a"].use(l["a"]);var gA=new l["a"]({routes:[{path:"/",name:"home",component:wA}]}),hA=e("2f62");n["a"].use(hA["a"]);var CA=new hA["a"].Store({state:{},mutations:{},actions:{}});e("96b1"),e("4989"),e("ab8b");n["a"].config.productionTip=!1,new n["a"]({router:gA,store:CA,render:function(A){return A(r)}}).$mount("#app")},"61c9":function(A,t,e){"use strict";var n=e("2b62"),i=e.n(n);i.a},"61ce":function(A,t,e){A.exports=e.p+"img/gin-screen.8bbc8af1.png"},"64a9":function(A,t,e){},"67ed":function(A,t,e){"use strict";var n=e("d3d0"),i=e.n(n);i.a},"7f7b":function(A,t,e){"use strict";var n=e("1605"),i=e.n(n);i.a},"90aa":function(A,t,e){"use strict";var n=e("3107"),i=e.n(n);i.a},9673:function(A,t,e){A.exports=e.p+"img/whatsapp.aaf236c4.png"},"96b1":function(A,t,e){},"978f":function(A,t,e){A.exports=e.p+"img/mobile.8b06f0ed.png"},"9d67":function(A,t,e){},accb:function(A,t,e){"use strict";var n=e("9d67"),i=e.n(n);i.a},ad3d:function(A,t,e){"use strict";var n=e("f791"),i=e.n(n);i.a},c5d4:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAArCAMAAAAUs8V2AAAAPFBMVEUAAAD/j4/+kpL/kZH+kpL/j4/+kZH/j4//kZH+kZH+kZH/kpL/kZH9kZH/kJD/j4//kpL9kpL/kpL+kpKSRI1jAAAAE3RSTlMAIN9/7xDPMF/foLNvkI9Qj3A/XI1gWAAAAOhJREFUSMet0lsOgzAMRNFxIATou9n/XvtVGctSjSedv0jJkRAXf5uUFfmtuyF6zyNt7ks9EilEXxXRQxLRV0X0kEXq99XclEgil+OrtXcCuXXdBEyH49zOEZMlHJIk7gCBmM+/AAzSum6rYBApB0KAEIkJAqnF3mOQpesewC9ETrR1Df56kTNtxUjcVoxEbeUQ39ZSwSAy2zASSNyW39Mhvi1BsN0jvi0G2W1bacS3lUccwSAv2xaF2LY4xIbBIDyBqkX4tnjkDdCItjWKTACNKDGK7ACPaFuDyCYYmWxKDCDaFo+04MIHNY028E7KeJ4AAAAASUVORK5CYII="},ca42:function(A,t,e){A.exports=e.p+"img/rambam-screen.fbcd8230.png"},cf38:function(A,t,e){},d3d0:function(A,t,e){},e13b:function(A,t,e){A.exports=e.p+"img/one-page.8c2f234b.png"},edbf:function(A,t,e){A.exports=e.p+"img/web.229d3644.png"},f791:function(A,t,e){},fb00:function(A,t,e){A.exports=e.p+"img/rambam-screen2.65aec3fe.png"}});
//# sourceMappingURL=app.3ec43f06.js.map