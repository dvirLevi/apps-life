(function(t){function e(e){for(var i,s,r=e[0],A=e[1],c=e[2],u=0,d=[];u<r.length;u++)s=r[u],o[s]&&d.push(o[s][0]),o[s]=0;for(i in A)Object.prototype.hasOwnProperty.call(A,i)&&(t[i]=A[i]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var A=n[r];0!==o[A]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],A=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=A;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},"0d8a":function(t,e,n){"use strict";var i=n("76c9"),o=n.n(i);o.a},"0f48":function(t,e){t.exports="data:image/png;base64,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"},"0fd4":function(t,e,n){t.exports=n.p+"img/leda.bedd3f1c.png"},"12fa":function(t,e,n){},"15b1":function(t,e,n){"use strict";var i=n("bb36"),o=n.n(i);o.a},"17f8":function(t,e,n){t.exports=n.p+"img/ass2.dfa70c9f.jpg"},"202d":function(t,e,n){},2129:function(t,e,n){t.exports=n.p+"img/ass4.079ff671.jpg"},"24bf":function(t,e,n){t.exports=n.p+"img/ass3.3ad78233.jpg"},"2a14":function(t,e,n){"use strict";var i=n("202d"),o=n.n(i);o.a},"38ef":function(t,e,n){t.exports=n.p+"img/contact-us.b3fc5a0d.png"},3927:function(t,e,n){t.exports=n.p+"img/aca-screen.e4eaf0c8.png"},"3a89":function(t,e,n){t.exports=n.p+"img/phon2.a5a91f95.png"},"3ab6":function(t,e,n){},5261:function(t,e,n){"use strict";var i=n("9b27"),o=n.n(i);o.a},5345:function(t,e,n){},"54df":function(t,e,n){t.exports=n.p+"img/time-screen.786b1fc8.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("034f"),n("2877")),r={},A=Object(s["a"])(r,o,a,!1,null,null,null),c=A.exports,l=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Title"),n("HideTitle",{attrs:{ifShowTitle:t.ifShowTitle}}),n("whatDoes",{attrs:{ifAnim:t.ifAnim}}),n("Products"),n("Contact"),n("Footer"),t.ifShowModal?n("modalContact",{on:{closeModal:function(e){t.ifShowModal=!t.ifShowModal}}}):t._e()],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"bac-title position-relative",style:{height:t.heightTitle+"px"}},[n("div",{staticClass:"position-absolute w-100"},[n("IconsContact")],1),n("Logo",{staticClass:"zindex",attrs:{size:"large"}}),n("h2",{staticClass:"w-100 zindex"},[t._v("פיתוח אתרים ואפליקציות")]),n("vue-particles",{attrs:{color:"#4b383b",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#4b383b",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1),n("div",{staticClass:"w-100 p-3 arrow"},[n("i",{staticClass:"fas fa-chevron-down",on:{click:function(e){return t.scroll()}}})])])])},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap-logo",class:t.size},[n("h1",[t._v("AppsLife")]),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.0",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"}},[n("path",{attrs:{fill:"#e69191",d:"M16.667,43.33C16.667,69.104,37.559,90,63.333,90v-6.667c-22.093,0-40-17.91-40-40.003H16.667z"}}),n("path",{attrs:{fill:"#e67979",d:"M63.333,16.667c-14.729,0-26.666,11.94-26.666,26.664C36.667,58.06,48.604,70,63.333,70v6.667  C44.922,76.667,30,61.741,30,43.33C30,24.922,44.922,10,63.333,10V16.667z"}}),n("path",{attrs:{d:"M76.667,43.333C76.667,35.97,70.7,30,63.333,30C55.967,30,50,35.97,50,43.333s5.967,13.334,13.333,13.334v6.666  c-11.048,0-20-8.955-20-20.003c0-11.045,8.952-19.997,20-19.997c11.049,0,20,8.952,20,19.997L76.667,43.333z"}})])])},h=[],g={name:"Logo",props:{size:String},computed:{widthLogo:function(){return window.innerWidth<768?100:this.width}}},w=g,v=(n("5261"),Object(s["a"])(w,m,h,!1,null,"0529f022",null)),b=v.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 center-all"},t._l(t.icons,function(t){return n("div",{key:t.id,staticClass:"center-all box-icon",class:t.aniClass},[n("a",{attrs:{href:t.link}},[n("i",{class:t.icon})])])}),0)},x=[],y={name:"IconsContact",props:{},components:{},data:function(){return{icons:[{img:n("9673"),icon:"fab fa-whatsapp",link:"https://api.whatsapp.com/send?phone=972545993678",aniClass:"ani1",id:1},{img:n("3a89"),icon:"fas fa-phone-alt",link:"tel:0545993678",aniClass:"ani2",id:2},{img:n("0f48"),icon:"far fa-envelope",link:"mailto:dvirleviapp@gmail.com",aniClass:"ani3",id:3}]}},methods:{}},k=y,B=(n("0d8a"),Object(s["a"])(k,C,x,!1,null,"3ca0d91f",null)),O=B.exports,D={name:"Title",props:{},components:{Logo:b,IconsContact:O},computed:{heightTitle:function(){return window.innerHeight-80}},methods:{scroll:function(){var t=document.getElementById("scrollEl");t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}},M=D,H=(n("7b16"),Object(s["a"])(M,f,p,!1,null,"4f1ea8d1",null)),E=H.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 my-sticky-top"},[t.ifShowTitle<t.heightTitle?n("div",{staticClass:"flip"},[n("Logo",{attrs:{size:"medium"}})],1):t._e(),t.ifShowTitle>=t.heightTitle?n("div",{staticClass:"row  anim-title "},[n("div",{staticClass:"col"},[n("div",{staticClass:"bac-title pt-1 pb-1"},[n("Logo",{attrs:{size:"medium"}})],1)])]):t._e()])},S=[],Q={name:"HideTitle",props:["ifShowTitle"],components:{Logo:b},data:function(){return{}},mounted:function(){},computed:{heightTitle:function(){return window.innerHeight}}},j=Q,T=(n("659a"),Object(s["a"])(j,I,S,!1,null,"d2dd66e2",null)),L=T.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("p",{staticClass:"title-prod mt-5"},[t._v("פיתוחים שלנו")]),t._l(t.products,function(e){return n("div",{key:e.id,staticClass:"col-md-4"},[n("div",{staticClass:"w-100 center-all"},[n("a",{staticClass:"box-prod center-all",attrs:{href:e.link,target:"_blanc"}},[n("img",{attrs:{src:e.img,alt:""}}),n("p",{staticClass:"center-all p-2"},[t._v(t._s(e.text))])])])])})],2)},R=[],U={name:"Products",props:{},components:{},data:function(){return{products:[{img:n("6061"),text:"אתר שיבולת",link:"https://www.shiboletpress.com/",id:11},{img:n("24bf"),text:"אתר חדשות המשק",link:"https://www.meshekil.com/",id:7},{img:n("17f8"),text:"חנות לשיווק ומכירת תנורי נאפולי",link:"https://www.napoli-oven.co.il",id:0},{img:n("2129"),text:"שמריהו - חנות למכירת אדניות בוטיק",link:"https://shemaryahu.netlify.app/",id:10},{img:n("0fd4"),text:"אתר מתקוננת להריון ולידה",link:"https://www.mitkonenet.co.il",id:2},{img:n("54df"),text:"אפליקצית זמני היום",link:"https://kash-bezmana.netlify.com/",id:6},{img:n("3927"),text:"האקדמיה לאמהות",link:"https://www.haacademyaleimahot.co.il/",id:8},{img:n("adce"),text:'חדר בריחה "ממרוקו לתימן"',link:"https://esc-room.netlify.app/",id:1},{img:n("bb45"),text:'חידון הרמב"ם לילדים',link:"https://rambam-quiz.netlify.app/",id:4}]}},methods:{}},_=U,J=(n("2a14"),Object(s["a"])(_,P,R,!1,null,"431e9162",null)),F=J.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mt-5 border-top"},[n("div",{staticClass:"col"},[n("p",{staticClass:"title-prod mt-5"},[t._v("יצירת קשר")]),t._m(0),n("h5",{staticClass:"mt-4 font-weight-lighter"},[t._v("רוצים שנפתח לכם אתר או אפליקציה?")]),n("h5",{staticClass:"mt-2 font-weight-lighter"},[t._v("דברו איתנו!")]),n("IconsContact",{staticClass:"mt-4"})],1)])},W=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-100 center-all contact-us"},[i("img",{attrs:{src:n("38ef"),alt:""}})])}],K={name:"Contact",props:{},components:{IconsContact:O},data:function(){return{}},methods:{}},X=K,Y=(n("b90e"),Object(s["a"])(X,N,W,!1,null,"7b74d51d",null)),G=Y.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col text-white contact"},[n("p",{staticClass:"w-100 text-center m-1"},[n("a",{attrs:{href:"mailto:dvirleviapp@gmail.com"}},[t._v("נבנה ופותח בAppsLife")])])])])}],z={name:"Footer",props:{},components:{},data:function(){return{}},methods:{}},Z=z,$=(n("bd9d"),Object(s["a"])(Z,V,q,!1,null,"7129a3b6",null)),tt=$.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",attrs:{id:"scrollEl"}},[n("div",{staticClass:"col"},[n("p",{staticClass:"title-prod mt-5"},[t._v("מה אנחנו עושים?")]),n("div",{staticClass:"w-100 center-all"},t._l(t.does,function(e){return n("whatDoesBox",{key:e.id,attrs:{item:e,ifAnim:t.ifAnim}})}),1)])])},nt=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"boxWhat",staticClass:"box-what f-center-top p-3"},[n("div",{staticClass:"w-100 center-all"},[n("img",{attrs:{src:t.item.img,alt:""}})]),n("h2",{staticClass:"mt-3"},[t._v(t._s(t.item.title))]),n("p",{staticClass:"mt-2"},[t._v(t._s(t.item.text))])])},ot=[],at={name:"whatDoesBox",props:["item","ifAnim"],components:{},data:function(){return{topBox:""}},mounted:function(){this.topBox=this.$refs.boxWhat.offsetTop-10},computed:{namAnim:function(){return this.ifAnim-this.topBox<360?this.ifAnim-this.topBox:0},namAnimScale:function(){if(this.ifAnim-this.topBox<359){var t=this.ifAnim-this.topBox,e=t/3.6;return"0."+e.toFixed(0)}return 1}},methods:{}},st=at,rt=(n("b56e"),Object(s["a"])(st,it,ot,!1,null,"2f778b80",null)),At=rt.exports,ct={name:"whatDoes",props:["ifAnim"],components:{whatDoesBox:At},data:function(){return{does:[{title:"פיתוח אפליקציות ווב",text:"מערכות אפליקציות וחנויות שנמצאות על גבי רשת האינטרנט ונגישות לכל מי שתרצו ברחבי העולם",img:n("edbf"),id:1},{title:"פיתוח אפליקציות מותאמות למובייל",text:"פיתוח אפליקציות היברידיות שמותאמות לכל הפלטפורמות",img:n("978f"),id:2},{title:"פיתוח אתרי One-page ודפי נחיתה ",text:"פיתוח אתר תדמית או דף נחיתה לשיווק עסק או כל דבר אחר שתרצה",img:n("e13b"),id:3}]}},mounted:function(){},methods:{}},lt=ct,ut=(n("af90"),Object(s["a"])(lt,et,nt,!1,null,"0128cb29",null)),dt=ut.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Modal",{attrs:{backgroundColor:"#00000000"},on:{customEvent:function(e){return t.$emit("closeModal")}}},[i("div",{staticClass:"w-100 h-100 f-center wrap-modal p-4"},[i("form",{staticClass:"in-box",on:{submit:function(e){return e.preventDefault(),t.sendMail(e)}}},[i("h3",[t._v("תנו לנו להגשים לכם את החלום!")]),i("h5",[t._v("השאירו פרטים וניצור אתכם קשר בהקדם")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],attrs:{type:"text",placeholder:"*שם",required:""},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.tel,expression:"data.tel"}],attrs:{type:"tel",pattern:"[0-9]+",minlength:"9",maxlength:"11",placeholder:"*טלפון"},domProps:{value:t.data.tel},on:{input:function(e){e.target.composing||t.$set(t.data,"tel",e.target.value)}}}),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.comment,expression:"data.comment"}],attrs:{cols:"30",rows:"4",placeholder:"בא לך להרחיב? בכיף :)"},domProps:{value:t.data.comment},on:{input:function(e){e.target.composing||t.$set(t.data,"comment",e.target.value)}}}),i("buttonLink",{staticClass:"rounded-pill button-link",attrs:{fontWeight:400,backColor:"#e05c5c",backColorHov:"#e44e4e",type:"submit"}},[t._v(t._s(t.textSend))])],1),i("div",{staticClass:"in-box f-center"},[i("img",{staticClass:"w-75 desktop",attrs:{src:n("89dd"),alt:""}})])])])],1)},pt=[],mt=(n("96cf"),n("3b8d")),ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal",style:{backgroundColor:t.backgroundColor},attrs:{id:"myModal"}},[i("div",{staticClass:"modal-con center"},[i("img",{staticClass:"x c-p",attrs:{src:n("a35d"),alt:""},on:{click:function(e){return e.stopPropagation(),t.$emit("customEvent")}}}),t._t("default")],2)])},gt=[],wt={name:"Modal",components:{},props:{backgroundColor:{default:"rgba(0, 0, 0, 0.4)",type:String}}},vt=wt,bt=(n("594f"),Object(s["a"])(vt,ht,gt,!1,null,"323eb844",null)),Ct=bt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-button c-p",style:{backgroundColor:t.selectRoute},on:{click:function(e){return e.stopPropagation(),t.$emit("customEvent")},mouseover:t.hovColor,mouseout:t.outHovColor}},[t.link?n("router-link",{style:{color:t.textColor,fontWeight:t.fontWeight},attrs:{tag:"button",to:t.link}},[t._t("default"),t._v(t._s(t.text)+"\n  ")],2):n("button",{style:{color:t.textColor,fontWeight:t.fontWeight},attrs:{type:t.type,form:t.formId}},[t._t("default"),t._v(t._s(t.text)+"\n  ")],2),n("div",{staticClass:"placeholder",style:{fontWeight:t.fontWeight}},[t._t("default"),t._v(t._s(t.text)+"\n  ")],2)],1)},yt=[],kt=(n("b54a"),n("c5f6"),{name:"buttonLink",props:{link:String,text:String,formId:String,type:{type:String,default:"submit"},backColor:{type:String,default:"#000000"},backColorHov:{type:String,default:"#404040"},textColor:{type:String,default:"#fff"},selectRouteColor:{type:String,default:"#000000"},fontWeight:{type:Number,default:400}},data:function(){return{dynamicbackColor:""}},mounted:function(){this.dynamicbackColor=this.backColor},methods:{hovColor:function(){this.dynamicbackColor=this.backColorHov},outHovColor:function(){this.dynamicbackColor=this.backColor}},computed:{selectRoute:function(){return this.link===this.$route.path&&this.selectRouteColor?this.selectRouteColor:this.dynamicbackColor}}}),Bt=kt,Ot=(n("e0aa"),Object(s["a"])(Bt,xt,yt,!1,null,"7e9ffb00",null)),Dt=Ot.exports,Mt=(n("ac6a"),n("456d"),n("3d20")),Ht=n.n(Mt),Et={url:"https://my-mail-service.herokuapp.com",fetchMail:function(t){var e=this;return new Promise(function(){var n=Object(mt["a"])(regeneratorRuntime.mark(function n(i,o){var a,s,r;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,a=JSON.stringify(t),console.log(a),n.next=5,fetch(e.url+"/sendMail",{method:"post",headers:{"Content-Type":"application/json"},body:a});case 5:return s=n.sent,n.next=8,s.json();case 8:r=n.sent,i(r),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](0),o(n.t0);case 15:case"end":return n.stop()}},n,null,[[0,12]])}));return function(t,e){return n.apply(this,arguments)}}())},sendToMail:function(t,e,n){var i=this;return new Promise(function(){var o=Object(mt["a"])(regeneratorRuntime.mark(function o(a,s){var r,A,c,l,u,d,f;return regeneratorRuntime.wrap(function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch(i.url+"/WakeUpGet");case 3:return r=o.sent,o.next=6,r.json();case 6:for(u in A=o.sent,console.log(A),c=i.objToArray(t),l="",c)l+="".concat(c[u][0],": ").concat(c[u][1],"<br>");return d={from:"appsLife@appsLife.com",to:"dvirleviapp@gmail.com",subject:n,html:"<p>".concat(l,"</p>")},e&&(d.img=e),o.next=15,i.fetchMail({contentMail:d});case 15:return f=o.sent,a(f),o.next=19,Ht.a.fire({icon:"success",text:"ההודעה נשלחה בהצלחה!",timer:1500});case 19:o.next=26;break;case 21:return o.prev=21,o.t0=o["catch"](0),s(o.t0),o.next=26,Ht.a.fire({icon:"error",text:"ההודעה לא נשלחה",timer:1500});case 26:case"end":return o.stop()}},o,null,[[0,21]])}));return function(t,e){return o.apply(this,arguments)}}())},objToArray:function(t){var e=Object.keys(t).map(function(e){return[e,t[e]]});return e}},It=Et,St={name:"modalContact",components:{Modal:Ct,buttonLink:Dt},data:function(){return{textSend:"שלח, לא תתחרט",data:{}}},methods:{sendMail:function(){var t=Object(mt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("שלח, לא תתחרט"!==this.textSend){t.next=6;break}return this.textSend="המתן...",t.next=4,It.sendToMail(this.data,null,"יצירת קשר appsLife");case 4:this.textSend="שלח, לא תתחרט",this.$emit("closeModal");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},Qt=St,jt=(n("15b1"),Object(s["a"])(Qt,ft,pt,!1,null,"3b54f5be",null)),Tt=jt.exports,Lt={name:"home",components:{Title:E,HideTitle:L,Products:F,Contact:G,Footer:tt,whatDoes:dt,modalContact:Tt},data:function(){return{ifShowTitle:"",ifAnim:"",ifShowModal:!1}},mounted:function(){var t=this;window.onscroll=function(){t.ifShowTitle=document.documentElement.scrollTop,t.ifAnim=document.documentElement.scrollTop},setTimeout(function(){t.ifShowModal=!0},1e4)}},Pt=Lt,Rt=Object(s["a"])(Pt,u,d,!1,null,"39d4e6c9",null),Ut=Rt.exports;i["a"].use(l["a"]);var _t=new l["a"]({mode:"history",routes:[{path:"/",name:"home",component:Ut}]}),Jt=n("2f62");i["a"].use(Jt["a"]);var Ft=new Jt["a"].Store({state:{},mutations:{},actions:{}}),Nt=(n("96b1"),n("4989"),n("ab8b"),n("98c9"));i["a"].use(Nt["a"]),i["a"].config.productionTip=!1,new i["a"]({router:_t,store:Ft,render:function(t){return t(c)}}).$mount("#app")},"594f":function(t,e,n){"use strict";var i=n("3ab6"),o=n.n(i);o.a},"5bee":function(t,e,n){},6061:function(t,e,n){t.exports=n.p+"img/ass1.967ebefd.jpg"},"64a9":function(t,e,n){},"659a":function(t,e,n){"use strict";var i=n("12fa"),o=n.n(i);o.a},7371:function(t,e,n){},"76c9":function(t,e,n){},"77b1":function(t,e,n){},"7b16":function(t,e,n){"use strict";var i=n("77b1"),o=n.n(i);o.a},"81a3":function(t,e,n){},"89dd":function(t,e,n){t.exports=n.p+"img/ass5.88889cfd.svg"},9673:function(t,e,n){t.exports=n.p+"img/whatsapp.aaf236c4.png"},"96b1":function(t,e,n){},"978f":function(t,e,n){t.exports=n.p+"img/mobile.8b06f0ed.png"},"9b27":function(t,e,n){},a35d:function(t,e,n){t.exports=n.p+"img/ass36.bdb0ce54.svg"},adce:function(t,e,n){t.exports=n.p+"img/esc-screen.c6277ff9.png"},af90:function(t,e,n){"use strict";var i=n("7371"),o=n.n(i);o.a},b56e:function(t,e,n){"use strict";var i=n("5345"),o=n.n(i);o.a},b90e:function(t,e,n){"use strict";var i=n("5bee"),o=n.n(i);o.a},bb36:function(t,e,n){},bb45:function(t,e,n){t.exports=n.p+"img/ram-screen.be0c972a.png"},bd9d:function(t,e,n){"use strict";var i=n("81a3"),o=n.n(i);o.a},e0aa:function(t,e,n){"use strict";var i=n("ed8f"),o=n.n(i);o.a},e13b:function(t,e,n){t.exports=n.p+"img/one-page.8c2f234b.png"},ed8f:function(t,e,n){},edbf:function(t,e,n){t.exports=n.p+"img/web.229d3644.png"}});
//# sourceMappingURL=app.9c9d6493.js.map