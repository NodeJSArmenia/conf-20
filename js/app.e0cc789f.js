(function(e){function t(t){for(var n,i,r=t[0],l=t[1],c=t[2],p=0,v=[];p<r.length;p++)i=r[p],s[i]&&v.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ee7":function(e,t,a){},"140b":function(e,t,a){},"1a8c8":function(e,t,a){"use strict";var n=a("d4a6"),s=a.n(n);s.a},"1f10":function(e,t,a){"use strict";var n=a("8502"),s=a.n(n);s.a},"20a9":function(e,t,a){},"25e6":function(e,t,a){},"41d4":function(e,t,a){"use strict";var n=a("be83"),s=a.n(n);s.a},"42a0":function(e,t,a){"use strict";var n=a("febd"),s=a.n(n);s.a},5263:function(e,t,a){"use strict";var n=a("ac61"),s=a.n(n);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d"),a("357d"),a("2aeb8"),a("7f10"),a("cfbd");var n=a("2b0e"),s=a("b25f"),o=a.n(s),i=a("3222"),r=a.n(i),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Welcome"),a("AppHeader"),a("Intro"),a("Speakers"),a("Sponsors"),a("Team"),a("Location"),a("Faq"),a("AppFooter")],1)},c=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"Welcome",attrs:{id:"Welcome"}},[a("div",{staticClass:"Network",class:{"-visible":e.netoworkVisible}}),a("div",{staticClass:"Logo",class:{"-visible":e.logoVisible}})])},p=[],v={data:function(){return{netoworkVisible:!1,logoVisible:!1}},methods:{showLogo:function(){var e=this;setTimeout(function(){e.netoworkVisible=!0},1200)},showNetwork:function(){var e=this;requestAnimationFrame(function(){e.logoVisible=!0})},scrollToIntro:function(){window.location.hash||setTimeout(function(){document.getElementById("IntroLogo").click()},2500)}},mounted:function(){this.showLogo(),this.showNetwork(),this.scrollToIntro()}},m=v,f=(a("67b3"),a("2877")),h=Object(f["a"])(m,u,p,!1,null,"49d79077",null);h.options.__file="Welcome.vue";var d=h.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Header",class:{"-open":e.isOpen,"-sticked":e.isSticked}},[a("div",{staticClass:"Container HeaderContainer"},[a("div",{staticClass:"LogoContainer"},[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Intro",id:"IntroLogo"},on:{click:e.close}},[a("Logo")],1)]),a("a",{staticClass:"NavBtn",on:{click:e.toggle}},[a("i",{staticClass:"fa",class:{"fa-bars":!e.isOpen,"fa-times":e.isOpen},attrs:{"aria-hidden":"true"}})]),a("nav",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Navigation"},[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Intro"},on:{click:e.close}},[e._v("Intro")]),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Speakers"},on:{click:e.close}},[e._v("Speakers")]),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Sponsors"},on:{click:e.close}},[e._v("Sponsors")]),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Team"},on:{click:e.close}},[e._v("Team")]),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Location"},on:{click:e.close}},[e._v("Location")]),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Faq"},on:{click:e.close}},[e._v("Faq")]),a("div",{staticClass:"RequestInvite"},[a("Button",{attrs:{title:"Request an Invite",link:"http://bit.ly/joinNodeConfAM20"}})],1)])])])},_=[],b=a("0f32"),C=a.n(b),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Logo"},[a("div",{staticClass:"LogoImg",class:[{},e.variation],style:{width:e.size+"px"}})])},y=[],w=(a("c5f6"),{props:{size:{type:Number,default:120},variation:{type:String,default:"full"}}}),S=w,T=(a("7795"),Object(f["a"])(S,k,y,!1,null,"6fda136b",null));T.options.__file="Logo.vue";var A=T.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"Button",attrs:{href:e.link,target:"_blank"}},[e._v("\n\t"+e._s(e.title)+"\n")])},N=[],x={name:"Button",props:{title:{type:String},link:{type:String}}},I=x,L=(a("9a10"),Object(f["a"])(I,j,N,!1,null,null,null));L.options.__file="Button.vue";var B=L.exports,H={components:{Logo:A,Button:B},data:function(){return{scrollPos:window.scrollY,isOpen:!1,navConfig:{duration:2e3,offset:-66}}},methods:{handleScroll:function(){this.scrollPos=window.scrollY},toggle:function(e){e.preventDefault(),this.isOpen=!this.isOpen},close:function(){this.isOpen=!1}},computed:{isSticked:function(){return this.scrollPos>.8*window.innerHeight}},created:function(){window.addEventListener("scroll",C()(this.handleScroll,100))},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},E=H,M=(a("a09e"),Object(f["a"])(E,g,_,!1,null,"795d3fc5",null));M.options.__file="Header.vue";var O=M.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"Intro",attrs:{id:"Intro"}},[e._m(0),a("Banner",{attrs:{title:"A full-day, two-track conference all about Node.js.",text:"Node Conf Armenia is a conference, gathering backend and full-stack Node.js developers in one place to share knowledge, skills with starter or master Node.js developers, have new connections, friends and fun.","image-source":"/banners/polygons@3x.png","image-right":!1}})],1)},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Container"},[a("div",{attrs:{id:"Titles"}},[a("h1",{staticClass:"Title"},[a("span",[e._v("NodeConf")]),e._v(" 2020 Armenia")]),a("span",{staticClass:"Title Subtitle"},[e._v("Apr "),a("span",[e._v("25")]),e._v(", 2020   -   "),a("span",[e._v("AUA")]),e._v(", Yerevan")])])])}],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Banner",style:{flexDirection:"row"+(e.imageRight?"-reverse":"")}},[a("div",{staticClass:"Banner BannerImage"},[a("div",{staticClass:"Img",style:{backgroundImage:"url("+e.imageSource+")"}})]),a("div",{staticClass:"BannerText",class:{left:!e.imageRight,right:e.imageRight},style:{fontWeight:e.isBoldText?"bold":""}},[e.title?a("div",{staticClass:"BannerTitle"},[e._v("\n\t\t\t\t"+e._s(e.title)+"\n\t\t\t")]):e._e(),e._v("\n\t\t\t"+e._s(e.text)+"\n\t\t\t"),e.buttonText?a("div",{staticClass:"BannerButton"},[a("Button",{attrs:{title:e.buttonText,link:e.buttonLink}})],1):e._e()])])},V=[],$={name:"Banner",components:{Button:B},props:{imageRight:Boolean,imageSource:String,title:String,text:String,buttonText:String,buttonLink:String,isBoldText:Boolean}},J=$,P=(a("1f10"),Object(f["a"])(J,D,V,!1,null,null,null));P.options.__file="Banner.vue";var W=P.exports,G={components:{Banner:W}},Q=G,q=(a("869d"),Object(f["a"])(Q,F,R,!1,null,"69f5aff4",null));q.options.__file="Intro.vue";var z=q.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"Speakers",attrs:{id:"Speakers"}},[a("div",{staticClass:"Container"},[e._m(0),a("Banner",{attrs:{text:e.bannerData.BannerText,"image-source":e.bannerData.imageSource,"button-link":e.bannerData.buttonLink,"button-text":e.bannerData.buttonText,"image-right":!0,"is-bold-text":!0}})],1)])},Y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"Title"},[e._v("Call for Incredible "),a("span",[e._v("Speakers")])])}],U={Illya_Klymov:{img:"/speakers/Illya_Klymov.jpg",name:"Illya Klymov",position:"CEO at JavaScript.Ninja"},"Juho_Vepsäläinen":{img:"/speakers/Juho_Vepsäläinen.jpeg",name:"Juho Vepsäläinen",position:"Founder at SurviveJS"},Natalia_Tepluhina:{img:"/speakers/Natalia_Tepluhina.jpeg",name:"Natalia Tepluhina",position:"Founder at VueVixens"},Hrach_Mkrtchyan:{img:"/speakers/Hrach_Mkrtchyan.jpg",name:"Hrach Mkrtchyan",position:"React.js Developer at Renderforest"},Nairi_Haroutiounian:{img:"/speakers/Nairi_Haroutiounian.jpg",name:"Nairi Harutyunyan",position:"Back-end Engineer at Screenful"},Razmik_Bourtoutian:{img:"/speakers/Razmik_Bourtoutian.jpg",name:"Razmik Bourtoutian",position:"Javascript Developer at DEOUT"},Ruben_Harutyunyan:{img:"/speakers/Ruben_Harutyunyan.jpg",name:"Ruben Harutyunyan",position:"Full-stack Developer at Adway AI"},Shahen_Hovhannisyan:{img:"/speakers/Shahen_Hovhannisyan.jpg",name:"Shahen Hovhannisyan",position:"Lead Engineer at Simply Technologies"},Tejas_Kumar:{img:"/speakers/Tejas_Kumar.jpg",name:"Tejas Kumar",position:"Head of Front-end Development at Contiamo"},Vova_Hayrapetyan:{img:"/speakers/Vova_Hayrapetyan.jpg",name:"Vova Hayrapetyan",position:"Software Developer at Teamable"},Gor_Rustamyan:{img:"/speakers/Gor_Rustamyan.jpg",name:"Gor Rustamyan",position:"Founder of 256 foundation, CTO at Mer Soft LLC"},Hayk_Galstyan:{img:"/speakers/Hayk_Galstyan.jpeg",name:"Hayk Galstyan",position:"Full Stack Developer | DevOps at TUMO Center for Creative Technologies"},Aghasi_Lorsabyan:{img:"/speakers/Aghasi_Lorsabyan.jpg",name:"Aghasi Lorsabyan",position:"Lead Engineer at TUMO Center for Creative Technologies"},Arnold_Dadayan:{img:"/speakers/Arnold_Dadayan.JPG",name:"Arnold Dadayan",position:"Front-end developer at Optym"},Hayk_Barseghyan:{img:"/speakers/Hayk_Barseghyan.jpg",name:"Hayk Barseghyan",position:"Senior JavaScript Developer at Digitain"},Khachatur_Virabyan:{img:"/speakers/Khachatur_Virabyan.jpg",name:"Khachatur Virabyan",position:"ReactJS developer at Renderforest"},Lilit_Tadevosyan:{img:"/speakers/Lilit_Tadevosyan.JPG",name:"Lilit Tadevosyan",position:"Lead JavaScript developer at SFL"},Robert_Hanesoghlyan:{img:"/speakers/Robert_Hanesoghlyan.jpg",name:"Robert Hanesoghlyan",position:"Frontend developer at Develandoo"},Ruben_Sargsyan:{img:"/speakers/Ruben_Sargsyan.jpg",name:"Ruben Sargsyan",position:"Senior Front-end Developer at Benivo"},Slavik_Manukyan:{img:"/speakers/Slavik_Manukyan.jpg",name:"Slavik Manukyan",position:"Software Developer at Simply Technologies"},Varuzhan_Harutyunyan:{img:"/speakers/Varuzhan_Harutyunyan.jpg",name:"Varuzhan Harutyunyan",position:"Senior Software Developer at Digitain"},Albert_Hovhannisyan:{img:"/speakers/Albert_Hovhannisyan.jpg",name:"Albert Hovhannisyan",position:""},Rouben_Meschian:{img:"/speakers/Rouben_Meschian.jpg",name:"Rouben Meschian",position:"Founding Software Engineer at Cambridge Semantics"},Vardges_Vardanyan:{img:"/speakers/Vardges_Vardanyan.jpg",name:"Vardges Vardanyan",position:"JavaScript Ninja at SFL"},Narek_Ghevondian:{img:"/speakers/Narek_Ghevondian.jpg",name:"Narek Ghevandian",position:"Software Engineer at Vineti AM"}},Z={components:{Banner:W},data:function(){return{speakers:U,speakersList:[],bannerData:{BannerText:"Share your knowledge and skills in Node.js with the Armenian Node community. Become a Node Conf 2020 speaker!",imageSource:"/banners/illustration-speaker@3x.png",buttonLink:"http://bit.ly/NodeConfAM20",buttonText:"Become a Speaker"}}},methods:{getSpeaker:function(e){return this.speakers[e]}}},X=Z,ee=(a("41d4"),Object(f["a"])(X,K,Y,!1,null,"221b046e",null));ee.options.__file="Speakers.vue";var te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"Sponsors",attrs:{id:"Sponsors"}},[a("div",{staticClass:"Container"},[a("section",{staticClass:"Section"},[e._m(0),a("Banner",{attrs:{text:e.bannerData.BannerText,"image-source":e.bannerData.imageSource,"button-link":e.bannerData.buttonLink,"button-text":e.bannerData.buttonText,"image-right":!1,"is-bold-text":!0}})],1)])])},ne=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"Title"},[e._v("Call for "),a("span",[e._v("Sponsors")])])}],se={components:{Banner:W},data:function(){return{bannerData:{BannerText:"Join the board of Node Conf 2020 supporting IT companies, be at one of the biggest IT events in Armenia and get your company seen.Become a Node Conf 2020 sponsor!",imageSource:"/banners/illustration-sponsor-v-1@3x.png",buttonLink:"http://bit.ly/supportNodeConfAM20",buttonText:"Become a Sponsor"}}}},oe=se,ie=(a("42a0"),Object(f["a"])(oe,ae,ne,!1,null,"29d43ec3",null));ie.options.__file="Sponsors.vue";var re=ie.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"Team",attrs:{id:"Team"}},[a("div",{staticClass:"Container"},[e._m(0),e._l(e.teams,function(t,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"MemberCol"},e._l(t.members,function(t,n){return a("div",{key:n,staticClass:"Member"},[a("div",{staticClass:"Img",style:{backgroundImage:"url("+t.img+")"}}),a("h3",{staticClass:"Name"},[e._v(e._s(t.name))]),a("h5",{staticClass:"Position"},[e._v(e._s(t.position))])])}))])})],2)])},ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"Title"},[e._v("Incredible "),a("span",[e._v("Team")])])}],ue={data:function(){return{teams:[{members:[{img:"/team/Nairi_Harutyunyan.png",name:"Nairi Harutyunyan",position:"Backend Engineer at Screenful, Co-Founder at Node.js Armenia"},{img:"/team/Anna_Harutyunyan.png",name:"Anna Harutyunyan",position:"Project Manager at Node.js Armenia"},{img:"/team/Khachatur_Tovmasyan.png",name:"Khachatur Tovmasyan",position:"Lead Front-End Engineer at SFL, Co-Founder at Node.js Armenia"},{img:"/team/Svetlana_Hovhannisyan.png",name:"Svetlana Hovhannisyan",position:"Technical Recruiter at Meettal"},{img:"/team/Vardges_Vardanyan.png",name:"Vardges Vardanyan",position:"Javascript Engineer at VMWare"}]},{members:[{img:"/team/Alexander_Adamyan.png",name:"Alexander Adamyan",position:"Co-Founder at Simply Technologies"},{img:"/team/Varser_Zakaryan.png",name:"Varser Zakaryan",position:"Project Manager at JavaScript Conference Armenia"},{img:"/team/Gevorg_Harutyunyan.png",name:"Gevorg Harutyunyan",position:"Front-End Architect at Screenful, Founder of ModularCode"},{img:"/team/Rouben_Meschian.png",name:"Rouben Meschian",position:"Founding Software Engineer at Cambridge Semantics"},{img:"/team/Edgar_Marukyan.png",name:"Edgar Marukyan",position:"CTO at Renderforest"}]}]}}},pe=ue,ve=(a("5263"),Object(f["a"])(pe,le,ce,!1,null,"46ffab1c",null));ve.options.__file="Team.vue";var me=ve.exports,fe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},he=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Location",attrs:{id:"Location"}},[a("h2",{staticClass:"Title"},[e._v("The "),a("span",[e._v("Location")]),e._v(" of Madness")]),a("div",{staticClass:"MapContainer"},[a("iframe",{staticStyle:{border:"none"},attrs:{src:"https://snazzymaps.com/embed/219208",width:"100%",height:"100%"}})])])}],de={},ge=de,_e=(a("1a8c8"),Object(f["a"])(ge,fe,he,!1,null,"38c73ee4",null));_e.options.__file="Location.vue";var be=_e.exports,Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Faq",attrs:{id:"Faq"}},[e._m(0),a("div",{staticClass:"row Answers"},[a("div",{staticClass:"col-md-6"},[a("h3",{staticClass:"Question"},[e._v("What is Node Conference Armenia?")]),a("p",{staticClass:"Answer"},[e._v("\n                Node Conference is a tech conference that brings together more than 600 tech\n                professionals to attend talks, workshops, participate in\n                competitions, get informed about open positions at sponsor IT companies and to have fun.\n            ")]),a("h3",{staticClass:"Question"},[e._v("Who are the speakers?")]),a("p",{staticClass:"Answer"},[e._v("\n                To learn more about our speakers, please,\n                "),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Speakers"}},[e._v("click here")]),e._v(".\n            ")]),a("h3",{staticClass:"Question"},[e._v("What are the talk topics?")]),a("p",{staticClass:"Answer"},[e._v("\n                To see the talk sessions timetable and topics, please\n                "),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Schedule"}},[e._v("click here")]),e._v(".\n            ")]),a("h3",{staticClass:"Question"},[e._v("What is the conference language?")]),a("p",{staticClass:"Answer"},[e._v("\n                The conference will be held mainly in Armenian but there are also\n                English talks included in the program.\n            ")]),a("h3",{staticClass:"Question"},[e._v("When is it going to take place?")]),a("p",{staticClass:"Answer"},[e._v("\n                The conference will take place from 10:00 to 17:00 on April 25, 2020.\n            ")]),a("h3",{staticClass:"Question"},[e._v("How to participate?")]),e._m(1)]),a("div",{staticClass:"col-md-6"},[a("h3",{staticClass:"Question"},[e._v("How much is the entry-ticket?")]),a("p",{staticClass:"Answer"},[e._v("\n                The event entry is free of charge before March 16. Later it will cost 5000AMD.\n            ")]),a("h3",{staticClass:"Question"},[e._v("Where is it going to be held?")]),e._m(2),a("h3",{staticClass:"Question"},[e._v("When is the deadline for registration?")]),a("p",{staticClass:"Answer"},[e._v("\n                The deadline for requesting free tickets ends March 15.\n            ")]),a("h3",{staticClass:"Question"},[e._v("Who supports Node Conference Armenia?")]),a("p",{staticClass:"Answer"},[e._v("\n                To learn about our sponsors and partners, please,\n                "),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Sponsors"}},[e._v("click here")]),e._v(".\n            ")]),a("h3",{staticClass:"Question"},[e._v("How can I help the team?")]),e._m(3),a("h3",{staticClass:"Question"},[e._v("Will I get a certificate of participation?")]),a("p",{staticClass:"Answer"},[e._v("\n                Your certificate of participation in Node Conference is going to be\n                your larger network in IT, updated knowledge,\n                nice little gifts and good memories. Do you still need that piece of paper?\n            ")]),a("h3",{staticClass:"Question"},[e._v("Who are behind the Node Conference Armenia? ")]),a("p",{staticClass:"Answer"},[e._v("\n                To see the Node Conference Armenia team, please,\n                "),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Team"}},[e._v("click here")]),e._v(".\n            ")])])])])},ke=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"Title"},[e._v(" Frequently Asked "),a("span",[e._v("Questions")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"Answer"},[e._v("\n                The entry of NodeConfAM20 is invitation-only so\n                please make sure to request your free invite\n                "),a("a",{attrs:{href:"http://bit.ly/joinNodeConfAM20",target:"_blank"}},[e._v("here")]),e._v("\n                in 4 weeks after the application opens. Starting from March 16 the tickets will cost 5000AMD.\n            ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"Answer"},[e._v("\n                NodeConfAM20 will be held at the B Building of\n                "),a("a",{attrs:{href:"https://goo.gl/maps/HmDBXyu3G9z",target:"_blank"}},[e._v("American University of Armenia")]),e._v("\n                (40 Marshal Baghramyan Ave, Yerevan)․\n            ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"Answer"},[e._v("\n                Oh, thank you for your kindness.\n                To help us make the NodeConfAM19 happen please "),a("a",{attrs:{href:"http://bit.ly/NodeConfAM20team",target:"_blank"}},[e._v("apply here")]),e._v("\n                to become a Node Conf super volunteer!\n            ")])}],ye={data:function(){return{navConfig:{duration:1e3,offset:-66}}}},we=ye,Se=(a("ce2e"),Object(f["a"])(we,Ce,ke,!1,null,"1f92dc75",null));Se.options.__file="Faq.vue";var Te=Se.exports,Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Footer"},[a("div",{staticClass:"LogoContainer"},[a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"LogoLink",attrs:{href:"#Intro"}},[a("Logo",{attrs:{size:250}})],1)]),e._m(0),e._m(1),e._m(2)])},je=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"SocialLinks"},[a("span",{staticClass:"SocialIcon"},[a("a",{staticClass:"Icon Icon-Github",attrs:{href:"https://github.com/NodeJSArmenia",target:"_blank"}})]),a("span",{staticClass:"SocialIcon"},[a("a",{staticClass:"Icon Icon-Facebook",attrs:{href:"https://www.facebook.com/nodejsarmenia",target:"_blank"}})]),a("span",{staticClass:"SocialIcon"},[a("a",{staticClass:"Icon Icon-Twitter",attrs:{href:"#",target:"_blank"}})]),a("span",{staticClass:"SocialIcon"},[a("a",{staticClass:"Icon Icon-Instagram",attrs:{href:"https://www.instagram.com/nodejsarmenia/",target:"_blank"}})]),a("span",{staticClass:"SocialIcon"},[a("a",{staticClass:"Icon Icon-Youtube",attrs:{href:"https://www.youtube.com/channel/UCL-LarRFFQcYdyqFhJ2Pw4w",target:"_blank"}})]),a("span",{staticClass:"SocialIcon"},[a("a",{staticClass:"Icon Icon-Telegram",attrs:{href:"http://t.me/nodejsarmenia",target:"_blank"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"PressRelease"},[e._v("\n        Press Release\n        "),a("a",{staticClass:"Links",attrs:{href:"/Press-Release-EN.pdf",target:"_blank"}},[e._v("En")]),e._v(" |\n        "),a("a",{staticClass:"Links",attrs:{href:"/Press-Release-AM.pdf",target:"_blank"}},[e._v("Am")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"Credits"},[e._v("\n        Design and branding by\n        "),a("a",{staticClass:"Links",attrs:{href:"https://www.behance.net/Davidtiger",target:"_blank"}},[e._v("thedesigner")]),e._v(",\n        coded in Vue.js by "),a("a",{staticClass:"Links",attrs:{href:"https://github.com/nairihar",target:"_blank"}},[e._v("@nairihar")]),e._v(",\n        "),a("a",{staticClass:"Links",attrs:{href:"https://github.com/tovmassian",target:"_blank"}},[e._v("@tovmassian")]),e._v(" and\n        "),a("a",{staticClass:"Links",attrs:{href:"https://github.com/NodeJSArmenia/conf-20/graphs/contributors",target:"_blank"}},[e._v("others")]),e._v(".\n    ")])}],Ne={components:{Logo:A},data:function(){return{navConfig:{duration:1e3,offset:-66}}}},xe=Ne,Ie=(a("d142"),Object(f["a"])(xe,Ae,je,!1,null,"9a9ab564",null));Ie.options.__file="Footer.vue";var Le=Ie.exports,Be={name:"app",components:{Welcome:d,AppHeader:O,Intro:z,Speakers:te,Sponsors:re,Team:me,Location:be,Faq:Te,AppFooter:Le}},He=Be,Ee=(a("5c0b"),Object(f["a"])(He,l,c,!1,null,null,null));Ee.options.__file="App.vue";var Me=Ee.exports;n["a"].config.productionTip=!1,n["a"].use(o.a),n["a"].use(r.a),new n["a"]({render:function(e){return e(Me)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(e,t,a){},"67b3":function(e,t,a){"use strict";var n=a("f831"),s=a.n(n);s.a},7795:function(e,t,a){"use strict";var n=a("86a4"),s=a.n(n);s.a},8502:function(e,t,a){},"869d":function(e,t,a){"use strict";var n=a("0ee7"),s=a.n(n);s.a},"86a4":function(e,t,a){},"9a10":function(e,t,a){"use strict";var n=a("140b"),s=a.n(n);s.a},a09e:function(e,t,a){"use strict";var n=a("c425"),s=a.n(n);s.a},ac61:function(e,t,a){},be83:function(e,t,a){},c425:function(e,t,a){},ce2e:function(e,t,a){"use strict";var n=a("20a9"),s=a.n(n);s.a},d142:function(e,t,a){"use strict";var n=a("25e6"),s=a.n(n);s.a},d4a6:function(e,t,a){},f831:function(e,t,a){},febd:function(e,t,a){}});
//# sourceMappingURL=app.e0cc789f.js.map