(function(e){function a(a){for(var n,i,r=a[0],l=a[1],c=a[2],p=0,v=[];p<r.length;p++)i=r[p],s[i]&&v.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(a);while(v.length)v.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],n=!0,r=1;r<t.length;r++){var l=t[r];0!==s[l]&&(n=!1)}n&&(o.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},s={app:0},o=[];function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var u=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"140b":function(e,a,t){},"155c":function(e,a,t){"use strict";var n=t("ade7"),s=t.n(n);s.a},"1dbc":function(e,a,t){"use strict";var n=t("3d6c"),s=t.n(n);s.a},"1f10":function(e,a,t){"use strict";var n=t("8502"),s=t.n(n);s.a},"323b":function(e,a,t){},3358:function(e,a,t){"use strict";var n=t("f391"),s=t.n(n);s.a},"3d6c":function(e,a,t){},"418a":function(e,a,t){},"42a0":function(e,a,t){"use strict";var n=t("febd"),s=t.n(n);s.a},"4a77":function(e,a,t){"use strict";var n=t("9be2"),s=t.n(n);s.a},"56d7":function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("097d"),t("357d"),t("2aeb8"),t("7f10"),t("cfbd");var n=t("2b0e"),s=t("b25f"),o=t.n(s),i=t("3222"),r=t.n(i),l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("Welcome"),t("AppHeader"),t("Intro"),t("Speakers"),t("Sponsors"),t("Team"),t("Location"),t("Faq"),t("AppFooter")],1)},c=[],u=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"Welcome",attrs:{id:"Welcome"}},[t("div",{staticClass:"Network"}),t("div",{staticClass:"Logo"})])}],v={},m=v,f=(t("4a77"),t("2877")),d=Object(f["a"])(m,u,p,!1,null,"62d1aa4f",null);d.options.__file="Welcome.vue";var h=d.exports,g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"Header",class:{"-open":e.isOpen,"-sticked":e.isSticked}},[t("div",{staticClass:"Container HeaderContainer"},[t("div",{staticClass:"LogoContainer"},[t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Intro"},on:{click:e.close}},[t("Logo")],1)]),t("a",{staticClass:"NavBtn",on:{click:e.toggle}},[t("i",{staticClass:"fa",class:{"fa-bars":!e.isOpen,"fa-times":e.isOpen},attrs:{"aria-hidden":"true"}})]),t("nav",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Navigation"},[t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Intro"},on:{click:e.close}},[e._v("Intro")]),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Speakers"},on:{click:e.close}},[e._v("Speakers")]),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Sponsors"},on:{click:e.close}},[e._v("Sponsors")]),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Team"},on:{click:e.close}},[e._v("Team")]),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Location"},on:{click:e.close}},[e._v("Location")]),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Faq"},on:{click:e.close}},[e._v("Faq")]),t("div",{staticClass:"RequestInvite"},[t("Button",{attrs:{title:"Request an Invite",link:"http://bit.ly/joinNodeConfAM20"}})],1)])])])},_=[],b=t("0f32"),C=t.n(b),y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"Logo"},[t("div",{staticClass:"LogoImg",class:[{},e.variation],style:{width:e.size+"px"}})])},k=[],S=(t("c5f6"),{props:{size:{type:Number,default:120},variation:{type:String,default:"full"}}}),w=S,T=(t("7795"),Object(f["a"])(w,y,k,!1,null,"6fda136b",null));T.options.__file="Logo.vue";var A=T.exports,j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a",{staticClass:"Button",attrs:{href:e.link,target:"_blank"}},[e._v("\n\t"+e._s(e.title)+"\n")])},x=[],N={name:"Button",props:{title:{type:String},link:{type:String}}},I=N,H=(t("9a10"),Object(f["a"])(I,j,x,!1,null,null,null));H.options.__file="Button.vue";var B=H.exports,E={components:{Logo:A,Button:B},data:function(){return{scrollPos:window.scrollY,isOpen:!1,navConfig:{duration:1e3,offset:-66}}},methods:{handleScroll:function(){this.scrollPos=window.scrollY},toggle:function(e){e.preventDefault(),this.isOpen=!this.isOpen},close:function(){this.isOpen=!1}},computed:{isSticked:function(){return this.scrollPos>.8*window.innerHeight}},created:function(){window.addEventListener("scroll",C()(this.handleScroll,100))},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},L=E,D=(t("5d42"),Object(f["a"])(L,g,_,!1,null,"be6ddb2e",null));D.options.__file="Header.vue";var V=D.exports,M=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"Intro",attrs:{id:"Intro"}},[e._m(0),t("Banner",{attrs:{title:"A full-day, two-track conference all about Node.js.",text:"Node Conf Armenia is a conference, gathering backend and full-stack Node.js developers in one place to share knowledge, skills with starter or master Node.js developers, have new connections, friends and fun.","image-source":"/banners/polygons@3x.png","image-right":!1}})],1)},O=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"Container"},[t("div",{attrs:{id:"Titles"}},[t("h1",{staticClass:"Title"},[t("span",[e._v("NodeConf")]),e._v(" 2020 Armenia")]),t("span",{staticClass:"Title Subtitle"},[e._v("Apr "),t("span",[e._v("25")]),e._v(", 2020   -   "),t("span",[e._v("AUA")]),e._v(", Yerevan")])])])}],R=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"Banner",style:{flexDirection:"row"+(e.imageRight?"-reverse":"")}},[t("div",{staticClass:"Banner BannerImage"},[t("div",{staticClass:"Img",style:{backgroundImage:"url("+e.imageSource+")"}})]),t("div",{staticClass:"BannerText",class:{left:!e.imageRight,right:e.imageRight},style:{fontWeight:e.isBoldText?"bold":""}},[e.title?t("div",{staticClass:"BannerTitle"},[e._v("\n\t\t\t\t"+e._s(e.title)+"\n\t\t\t")]):e._e(),e._v("\n\t\t\t"+e._s(e.text)+"\n\t\t\t"),e.buttonText?t("div",{staticClass:"BannerButton"},[t("Button",{attrs:{title:e.buttonText,link:e.buttonLink}})],1):e._e()])])},F=[],$={name:"Banner",components:{Button:B},props:{imageRight:Boolean,imageSource:String,title:String,text:String,buttonText:String,buttonLink:String,isBoldText:Boolean}},W=$,J=(t("1f10"),Object(f["a"])(W,R,F,!1,null,null,null));J.options.__file="Banner.vue";var P=J.exports,G={components:{Banner:P}},Q=G,q=(t("62ad"),Object(f["a"])(Q,M,O,!1,null,"7d1c02f0",null));q.options.__file="Intro.vue";var z=q.exports,K=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"Speakers",attrs:{id:"Speakers"}},[t("div",{staticClass:"Container"},[e._m(0),t("Banner",{attrs:{text:e.bannerData.BannerText,"image-source":e.bannerData.imageSource,"button-link":e.bannerData.buttonLink,"button-text":e.bannerData.buttonText,"image-right":!0,"is-bold-text":!0}})],1)])},Y=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{staticClass:"Title"},[e._v("Call for Incredible "),t("span",[e._v("Speakers")])])}],U={Illya_Klymov:{img:"/speakers/Illya_Klymov.jpg",name:"Illya Klymov",position:"CEO at JavaScript.Ninja"},"Juho_Vepsäläinen":{img:"/speakers/Juho_Vepsäläinen.jpeg",name:"Juho Vepsäläinen",position:"Founder at SurviveJS"},Natalia_Tepluhina:{img:"/speakers/Natalia_Tepluhina.jpeg",name:"Natalia Tepluhina",position:"Founder at VueVixens"},Hrach_Mkrtchyan:{img:"/speakers/Hrach_Mkrtchyan.jpg",name:"Hrach Mkrtchyan",position:"React.js Developer at Renderforest"},Nairi_Haroutiounian:{img:"/speakers/Nairi_Haroutiounian.jpg",name:"Nairi Harutyunyan",position:"Back-end Engineer at Screenful"},Razmik_Bourtoutian:{img:"/speakers/Razmik_Bourtoutian.jpg",name:"Razmik Bourtoutian",position:"Javascript Developer at DEOUT"},Ruben_Harutyunyan:{img:"/speakers/Ruben_Harutyunyan.jpg",name:"Ruben Harutyunyan",position:"Full-stack Developer at Adway AI"},Shahen_Hovhannisyan:{img:"/speakers/Shahen_Hovhannisyan.jpg",name:"Shahen Hovhannisyan",position:"Lead Engineer at Simply Technologies"},Tejas_Kumar:{img:"/speakers/Tejas_Kumar.jpg",name:"Tejas Kumar",position:"Head of Front-end Development at Contiamo"},Vova_Hayrapetyan:{img:"/speakers/Vova_Hayrapetyan.jpg",name:"Vova Hayrapetyan",position:"Software Developer at Teamable"},Gor_Rustamyan:{img:"/speakers/Gor_Rustamyan.jpg",name:"Gor Rustamyan",position:"Founder of 256 foundation, CTO at Mer Soft LLC"},Hayk_Galstyan:{img:"/speakers/Hayk_Galstyan.jpeg",name:"Hayk Galstyan",position:"Full Stack Developer | DevOps at TUMO Center for Creative Technologies"},Aghasi_Lorsabyan:{img:"/speakers/Aghasi_Lorsabyan.jpg",name:"Aghasi Lorsabyan",position:"Lead Engineer at TUMO Center for Creative Technologies"},Arnold_Dadayan:{img:"/speakers/Arnold_Dadayan.JPG",name:"Arnold Dadayan",position:"Front-end developer at Optym"},Hayk_Barseghyan:{img:"/speakers/Hayk_Barseghyan.jpg",name:"Hayk Barseghyan",position:"Senior JavaScript Developer at Digitain"},Khachatur_Virabyan:{img:"/speakers/Khachatur_Virabyan.jpg",name:"Khachatur Virabyan",position:"ReactJS developer at Renderforest"},Lilit_Tadevosyan:{img:"/speakers/Lilit_Tadevosyan.JPG",name:"Lilit Tadevosyan",position:"Lead JavaScript developer at SFL"},Robert_Hanesoghlyan:{img:"/speakers/Robert_Hanesoghlyan.jpg",name:"Robert Hanesoghlyan",position:"Frontend developer at Develandoo"},Ruben_Sargsyan:{img:"/speakers/Ruben_Sargsyan.jpg",name:"Ruben Sargsyan",position:"Senior Front-end Developer at Benivo"},Slavik_Manukyan:{img:"/speakers/Slavik_Manukyan.jpg",name:"Slavik Manukyan",position:"Software Developer at Simply Technologies"},Varuzhan_Harutyunyan:{img:"/speakers/Varuzhan_Harutyunyan.jpg",name:"Varuzhan Harutyunyan",position:"Senior Software Developer at Digitain"},Albert_Hovhannisyan:{img:"/speakers/Albert_Hovhannisyan.jpg",name:"Albert Hovhannisyan",position:""},Rouben_Meschian:{img:"/speakers/Rouben_Meschian.jpg",name:"Rouben Meschian",position:"Founding Software Engineer at Cambridge Semantics"},Vardges_Vardanyan:{img:"/speakers/Vardges_Vardanyan.jpg",name:"Vardges Vardanyan",position:"JavaScript Ninja at SFL"},Narek_Ghevondian:{img:"/speakers/Narek_Ghevondian.jpg",name:"Narek Ghevandian",position:"Software Engineer at Vineti AM"}},Z={components:{Banner:P},data:function(){return{speakers:U,speakersList:[],bannerData:{BannerText:"Share your knowledge and skills in Node.js with the Armenian Node community. Become a Node Conf 2020 speaker!",imageSource:"/banners/illustration-speaker@3x.png",buttonLink:"http://bit.ly/NodeConfAM20",buttonText:"Become a Speaker"}}},methods:{getSpeaker:function(e){return this.speakers[e]}}},X=Z,ee=(t("155c"),Object(f["a"])(X,K,Y,!1,null,"095457e8",null));ee.options.__file="Speakers.vue";var ae=ee.exports,te=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"Sponsors",attrs:{id:"Sponsors"}},[t("div",{staticClass:"Container"},[t("section",{staticClass:"Section"},[e._m(0),t("Banner",{attrs:{text:e.bannerData.BannerText,"image-source":e.bannerData.imageSource,"button-link":e.bannerData.buttonLink,"button-text":e.bannerData.buttonText,"image-right":!1,"is-bold-text":!0}})],1)])])},ne=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{staticClass:"Title"},[e._v("Call for "),t("span",[e._v("Sponsors")])])}],se={components:{Banner:P},data:function(){return{bannerData:{BannerText:"Join the board of Node Conf 2020 supporting IT companies, be at one of the biggest IT events in Armenia and get your company seen.Become a Node Conf 2020 sponsor!",imageSource:"/banners/illustration-sponsor-v-1@3x.png",buttonLink:"http://bit.ly/supportNodeConfAM20",buttonText:"Become a Sponsor"}}}},oe=se,ie=(t("42a0"),Object(f["a"])(oe,te,ne,!1,null,"29d43ec3",null));ie.options.__file="Sponsors.vue";var re=ie.exports,le=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"Team",attrs:{id:"Team"}},[t("div",{staticClass:"Container"},[e._m(0),e._l(e.teams,function(a,n){return t("div",{key:n},[t("h3",{staticClass:"TeamName"},[e._v(e._s(a.name))]),t("div",{staticClass:"row"},e._l(a.members,function(a,n){return t("div",{key:n,staticClass:"col MemberCol"},[t("div",{staticClass:"Member"},[t("div",{staticClass:"Img",style:{backgroundImage:"url("+a.img+")"}}),t("h3",{staticClass:"Name"},[e._v(e._s(a.name))]),t("h5",{staticClass:"Position"},[e._v(e._s(a.position))])])])}))])})],2)])},ce=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{staticClass:"Title"},[e._v("Incredible "),t("span",[e._v("Team")])])}],ue={data:function(){return{teams:[{name:"Node.js Armenia",members:[{img:"/team/Nairi_Harutyunyan.png",name:"Nairi Harutyunyan",position:"Backend Engineer at Screenful, Co-Founder at Node.js Armenia"},{img:"/team/Anna_Harutyunyan.png",name:"Anna Harutyunyan",position:"Project Manager at Node.js Armenia"},{img:"/team/Khachatur_Tovmasyan.png",name:"Khachatur Tovmasyan",position:"Lead Front-End Engineer at SFL, Co-Founder at Node.js Armenia"},{img:"/team/Svetlana_Hovhannisyan.png",name:"Svetlana Hovhannisyan",position:"Technical Recruiter at Meettal"},{img:"/team/Vardges_Vardanyan.png",name:"Vardges Vardanyan",position:"Javascript Engineer at VMWare"}]},{name:"Tech Events Armenia",members:[{img:"/team/Alexander_Adamyan.png",name:"Alexander Adamyan",position:"Co-Founder at Simply Technologies"},{img:"/team/Varser_Zakaryan.png",name:"Varser Zakaryan",position:"Project Manager at JavaScript Conference Armenia"},{img:"/team/Gevorg_Harutyunyan.png",name:"Gevorg Harutyunyan",position:"Front-End Architect at Screenful, Founder of ModularCode"},{img:"/team/Rouben_Meschian.png",name:"Rouben Meschian",position:"Founding Software Engineer at Cambridge Semantics"},{img:"/team/Edgar_Marukyan.png",name:"Edgar Marukyan",position:"CTO at Renderforest"}]}]}}},pe=ue,ve=(t("1dbc"),Object(f["a"])(pe,le,ce,!1,null,"18055c9d",null));ve.options.__file="Team.vue";var me=ve.exports,fe=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},de=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"Location",attrs:{id:"Location"}},[t("h2",{staticClass:"Title"},[e._v("The "),t("span",[e._v("Location")]),e._v(" of Madness")]),t("div",{staticClass:"MapContainer"},[t("iframe",{staticClass:"Map",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6095.609643725426!2d44.505263706885366!3d40.191156865947136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd173fd4d621%3A0x213beef7d45c07c5!2z1YDVodW11aHVvdW_1aHVttWrINSx1bTVpdaA1avVr9W11aHVtiDVgNWh1bTVodWs1b3VodaA1aHVtg!5e0!3m2!1sen!2s!4v1508846018400",width:"800",height:"600",frameborder:"0",allowfullscreen:""}})])])}],he={},ge=he,_e=(t("f63d"),Object(f["a"])(ge,fe,de,!1,null,"503250b7",null));_e.options.__file="Location.vue";var be=_e.exports,Ce=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"Faq",attrs:{id:"Faq"}},[e._m(0),t("div",{staticClass:"row Answers"},[t("div",{staticClass:"col-md-6"},[t("h3",{staticClass:"Question"},[e._v("What is Node Conference Armenia?")]),t("p",{staticClass:"Answer"},[e._v("\n                Node Conference is a big IT event that brings together a huge number of IT\n                professionals to attend talks, workshops, participate in\n                competitions, get informed about open positions at sponsor IT companies and more.\n            ")]),t("h3",{staticClass:"Question"},[e._v("Who are the speakers?")]),t("p",{staticClass:"Answer"},[e._v("\n                To learn more about our speakers, please,\n                "),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Speakers"}},[e._v("click here")]),e._v(".\n            ")]),t("h3",{staticClass:"Question"},[e._v("What are the talk topics?")]),t("p",{staticClass:"Answer"},[e._v("\n                To see the talk sessions timetable and topics, please\n                "),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Schedule"}},[e._v("click here")]),e._v(".\n            ")]),t("h3",{staticClass:"Question"},[e._v("What is the conference language?")]),t("p",{staticClass:"Answer"},[e._v("\n                The conference will be held mainly in Armenian but there are also\n                English talks included in the program.\n            ")]),t("h3",{staticClass:"Question"},[e._v("When is it going to take place?")]),t("p",{staticClass:"Answer"},[e._v("\n                The conference will take place from 10:00 to 18:00 on November 3, 2018.\n            ")]),t("h3",{staticClass:"Question"},[e._v("Where is it going to be held?")]),e._m(1),t("h3",{staticClass:"Question"},[e._v("How to participate?")]),e._m(2)]),t("div",{staticClass:"col-md-6"},[t("h3",{staticClass:"Question"},[e._v("How much is the entry-ticket?")]),t("p",{staticClass:"Answer"},[e._v("\n                The event entry is free of charge.\n            ")]),t("h3",{staticClass:"Question"},[e._v("When is the deadline for registration?")]),t("p",{staticClass:"Answer"},[e._v("\n                There is no deadline but the sooner you register the more\n                interesting it will be for you as a participant as you will\n                have the chance to take part in the preconference activities.\n            ")]),t("h3",{staticClass:"Question"},[e._v("Who are behind the Node Conference Armenia? ")]),t("p",{staticClass:"Answer"},[e._v("\n                To see the Node Conference Armenia team, please,\n                "),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Team"}},[e._v("click here")]),e._v(".\n            ")]),t("h3",{staticClass:"Question"},[e._v("How can I help the team?")]),e._m(3),t("h3",{staticClass:"Question"},[e._v("Who supports Node Conference Armenia?")]),t("p",{staticClass:"Answer"},[e._v("\n                To learn about our sponsors and partners, please,\n                "),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Sponsors"}},[e._v("click here")]),e._v(".\n            ")]),t("h3",{staticClass:"Question"},[e._v("Will I get a certificate of participation?")]),t("p",{staticClass:"Answer"},[e._v("\n                Your certificate of participation in Node Conference is going to be\n                your larger network in IT, updated knowledge,\n                nice little gifts and good memories. Do you still need that piece of paper?\n            ")])])])])},ye=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{staticClass:"Title"},[e._v(" Frequently Asked "),t("span",[e._v("Questions")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",{staticClass:"Answer"},[e._v("\n                Node Conference Yerevan will be held at the B Building of\n                "),t("a",{attrs:{href:"https://goo.gl/maps/HmDBXyu3G9z",target:"_blank"}},[e._v("American University of Armenia")]),e._v("\n                (40 Marshal Baghramyan Ave, Yerevan)․\n            ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",{staticClass:"Answer"},[e._v("\n                The entry of Node Conference Yerevan 2020 is invitation-only so\n                please make sure to request your invite\n                "),t("a",{attrs:{href:"http://bit.ly/joinNodeConfAM20",target:"_blank"}},[e._v("here")]),e._v(".\n            ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",{staticClass:"Answer"},[e._v("\n                Oh, thank you for your kindness.\n                To help us make the Node Conference Armenia happen please "),t("a",{attrs:{href:"http://bit.ly/kindninja",target:"_blank"}},[e._v("apply here")]),e._v("\n                to become a Node Conf ninja volunteer!\n            ")])}],ke={data:function(){return{navConfig:{duration:1e3,offset:-66}}}},Se=ke,we=(t("3358"),Object(f["a"])(Se,Ce,ye,!1,null,"04efbf68",null));we.options.__file="Faq.vue";var Te=we.exports,Ae=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"Footer"},[t("div",{staticClass:"LogoContainer"},[t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"LogoLink",attrs:{href:"#Intro"}},[t("Logo",{attrs:{size:150}})],1)]),e._m(0),e._m(1),e._m(2)])},je=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"SocialLinks"},[t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Github",attrs:{href:"https://github.com/NodeJSArmenia",target:"_blank"}})]),t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Facebook",attrs:{href:"https://www.facebook.com/nodejsarmenia",target:"_blank"}})]),t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Twitter",attrs:{href:"#",target:"_blank"}})]),t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Instagram",attrs:{href:"https://www.instagram.com/nodejsarmenia/",target:"_blank"}})]),t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Youtube",attrs:{href:"https://www.youtube.com/channel/UCL-LarRFFQcYdyqFhJ2Pw4w",target:"_blank"}})]),t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Telegram",attrs:{href:"http://t.me/nodejsarmenia",target:"_blank"}})])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"PressRelease"},[e._v("\n        Press Release\n        "),t("a",{attrs:{href:"/Press-Release-EN.pdf",target:"_blank"}},[e._v("En")]),e._v(" |\n        "),t("a",{staticClass:"AM",attrs:{href:"/Press-Release-AM.pdf",target:"_blank"}},[e._v("Am")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",{staticClass:"Credits"},[e._v("\n        Design and branding by\n        "),t("a",{attrs:{href:"https://www.behance.net/Davidtiger",target:"_blank"}},[e._v("thedesigner")]),e._v(",\n        coded in Vue.js by "),t("a",{staticClass:"Devs",attrs:{href:"https://github.com/nairihar",target:"_blank"}},[e._v("@nairihar")]),e._v(",\n        "),t("a",{staticClass:"Devs",attrs:{href:"https://github.com/tovmassian",target:"_blank"}},[e._v("@tovmassian")]),e._v(" and\n        "),t("a",{staticClass:"Devs",attrs:{href:"https://github.com/NodeJSArmenia/conf-20/graphs/contributors",target:"_blank"}},[e._v("others")]),e._v(".\n    ")])}],xe={components:{Logo:A},data:function(){return{navConfig:{duration:1e3,offset:-66}}}},Ne=xe,Ie=(t("f5fd"),Object(f["a"])(Ne,Ae,je,!1,null,"1896dd60",null));Ie.options.__file="Footer.vue";var He=Ie.exports,Be={name:"app",components:{Welcome:h,AppHeader:V,Intro:z,Speakers:ae,Sponsors:re,Team:me,Location:be,Faq:Te,AppFooter:He}},Ee=Be,Le=(t("5c0b"),Object(f["a"])(Ee,l,c,!1,null,null,null));Le.options.__file="App.vue";var De=Le.exports;n["a"].config.productionTip=!1,n["a"].use(o.a),n["a"].use(r.a),new n["a"]({render:function(e){return e(De)}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";var n=t("5e27"),s=t.n(n);s.a},"5d42":function(e,a,t){"use strict";var n=t("418a"),s=t.n(n);s.a},"5e27":function(e,a,t){},"62ad":function(e,a,t){"use strict";var n=t("f413"),s=t.n(n);s.a},7795:function(e,a,t){"use strict";var n=t("86a4"),s=t.n(n);s.a},8502:function(e,a,t){},"86a4":function(e,a,t){},"9a10":function(e,a,t){"use strict";var n=t("140b"),s=t.n(n);s.a},"9be2":function(e,a,t){},"9d5a":function(e,a,t){},ade7:function(e,a,t){},f391:function(e,a,t){},f413:function(e,a,t){},f5fd:function(e,a,t){"use strict";var n=t("9d5a"),s=t.n(n);s.a},f63d:function(e,a,t){"use strict";var n=t("323b"),s=t.n(n);s.a},febd:function(e,a,t){}});
//# sourceMappingURL=app.3cb32608.js.map