(function(a){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],v=0,m=[];v<r.length;v++)o=r[v],n[o]&&m.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(a[s]=l[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var a,e=0;e<i.length;e++){for(var t=i[e],s=!0,r=1;r<t.length;r++){var l=t[r];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),a=o(o.s=t[0]))}return a}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=a,o.c=s,o.d=function(a,e,t){o.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},o.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,e){if(1&e&&(a=o(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var s in a)o.d(t,s,function(e){return a[e]}.bind(null,s));return t},o.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(e,"a",e),e},o.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"04c3":function(a,e,t){"use strict";var s=t("ac09"),n=t.n(s);n.a},"0624":function(a,e,t){},"140b":function(a,e,t){},"1a71":function(a,e,t){"use strict";var s=t("fc8e"),n=t.n(s);n.a},"1acc":function(a,e,t){},"480e":function(a,e,t){},"4cbc":function(a,e,t){"use strict";var s=t("0624"),n=t.n(s);n.a},"56d7":function(a,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d"),t("357d"),t("2aeb8"),t("7f10"),t("cfbd");var s=t("2b0e"),n=t("b25f"),i=t.n(n),o=t("3222"),r=t.n(o),l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("Welcome"),t("AppHeader"),t("Intro"),t("Team"),t("Location"),t("Faq"),t("AppFooter")],1)},c=[],u=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},v=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"Welcome",attrs:{id:"Welcome"}},[t("div",{staticClass:"Network"}),t("div",{staticClass:"Logo"})])}],m={},p=m,d=(t("e58c"),t("2877")),h=Object(d["a"])(p,u,v,!1,null,"09bae01b",null);h.options.__file="Welcome.vue";var g=h.exports,_=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"Header",class:{"-open":a.isOpen,"-sticked":a.isSticked}},[t("div",{staticClass:"Container HeaderContainer"},[t("div",{staticClass:"LogoContainer"},[t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:a.navConfig,expression:"navConfig"}],attrs:{href:"#Intro"},on:{click:a.close}},[t("Logo",{attrs:{variation:a.full}})],1)]),t("a",{staticClass:"NavBtn",on:{click:a.toggle}},[t("i",{staticClass:"fa",class:{"fa-bars":!a.isOpen,"fa-times":a.isOpen},attrs:{"aria-hidden":"true"}})]),t("nav",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:a.navConfig,expression:"navConfig"}],staticClass:"Navigation"},[t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:a.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Intro"},on:{click:a.close}},[a._v("Intro")]),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:a.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Speakers"},on:{click:a.close}},[a._v("Speakers")]),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:a.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Sponsors"},on:{click:a.close}},[a._v("Sponsors")]),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:a.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Team"},on:{click:a.close}},[a._v("Team")]),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:a.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Location"},on:{click:a.close}},[a._v("Location")]),t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:a.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Faq"},on:{click:a.close}},[a._v("Faq")]),t("div",{staticClass:"RequestInvite"},[t("Button",{attrs:{title:"Request an Invite",link:"http://bit.ly/joinJSConf2018"}})],1)])])])},f=[],C=t("0f32"),b=t.n(C),k=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"Logo"},[t("div",{staticClass:"LogoImg",class:[{},a.variation],style:{width:a.size+"px"}})])},y=[],S=(t("c5f6"),{props:{size:{type:Number,default:120},variation:{type:String,default:"full"}}}),w=S,I=(t("fcfc"),Object(d["a"])(w,k,y,!1,null,"6c8e76f7",null));I.options.__file="Logo.vue";var T=I.exports,A=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a",{staticClass:"Button",attrs:{href:a.link,target:"_blank"}},[a._v("\n  "+a._s(a.title)+"\n")])},j=[],N={name:"Button",props:{title:{type:String},link:{type:String}}},H=N,R=(t("9a10"),Object(d["a"])(H,A,j,!1,null,null,null));R.options.__file="Button.vue";var x=R.exports,E={components:{Logo:T,Button:x},data:function(){return{scrollPos:window.scrollY,isOpen:!1,navConfig:{duration:1e3,offset:-66}}},methods:{handleScroll:function(){this.scrollPos=window.scrollY},toggle:function(a){a.preventDefault(),this.isOpen=!this.isOpen},close:function(){this.isOpen=!1}},computed:{isSticked:function(){return this.scrollPos>.8*window.innerHeight}},created:function(){window.addEventListener("scroll",b()(this.handleScroll,100))},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},L=E,V=(t("e505"),Object(d["a"])(L,_,f,!1,null,"7b640e53",null));V.options.__file="Header.vue";var B=V.exports,D=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},J=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"Intro",attrs:{id:"Intro"}},[t("div",{staticClass:"Container"},[t("div",{attrs:{id:"Titles"}},[t("h1",{staticClass:"Title"},[t("span",[a._v("NodeConf")]),a._v(" 2020 Armenia")]),t("span",{staticClass:"Title Subtitle"},[a._v("\n        Apr "),t("span",[a._v("25")]),a._v(", 2020   -   "),t("span",[a._v("AUA")]),a._v(", Yerevan")])])])])}],M={},O=M,F=(t("04c3"),Object(d["a"])(O,D,J,!1,null,"a25bab8c",null));F.options.__file="Intro.vue";var P=F.exports,G=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"Schedule",attrs:{id:"Schedule"}},[t("div",{staticClass:"Container"},[t("h2",{staticClass:"Title"},[a._v("Event Schedule")]),t("h3",{staticClass:"Subtitle"},[a._v("November 3, 2018")]),t("div",{staticClass:"TimeTable"},[t("div",{staticClass:"TimeTableSection"},[t("TimeScale",{attrs:{start:"9:30"}}),t("div",{staticClass:"TimeTableContent"},[a._m(0),t("div",{staticClass:"TimeTableTopics"},[t("TopicItem",{attrs:{topic:a.topics[0]}})],1)])],1),t("div",{staticClass:"TimeTableSection"},[t("TimeScale",{attrs:{start:"10:00"}}),t("div",{staticClass:"TimeTableContent -scrollable"},[a._m(1),t("div",{staticClass:"TimeTableTopics"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col col-4"},a._l(a.topics[1],function(e,s){return t("TopicItem",{key:s,attrs:{topic:e,speaker:a.getSpeaker(e.speakerId)}})})),t("div",{staticClass:"col col-4"},a._l(a.topics[2],function(e,s){return t("TopicItem",{key:s,attrs:{topic:e,speaker:a.getSpeaker(e.speakerId)}})})),t("div",{staticClass:"col col-4"},a._l(a.topics[3],function(e,s){return t("TopicItem",{key:s,attrs:{topic:e,speaker:a.getSpeaker(e.speakerId)}})}))])])])],1)])]),t("div",{staticClass:"ScheduleBgLeft"})])},W=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"TimeTableContentHeader"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("label",{staticClass:"Label"},[a._v("\n                  Entry\n                ")])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"TimeTableContentHeader"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col col-4"},[t("label",{staticClass:"Label"},[a._v("\n                  Manoogyan Hall\n                ")])]),t("div",{staticClass:"col col-4"},[t("label",{staticClass:"Label"},[a._v("\n                  408E\n                ")])]),t("div",{staticClass:"col col-4"},[t("label",{staticClass:"Label"},[a._v("\n                  114W\n                ")])])])])}],$=[{name:"Registration",duration:30},[{name:"Opening",duration:30},{name:"Framework Design - lessons learned from repeated mistakes",speakerId:"Rouben_Meschian",duration:30,levels:[],lang:"en"},{name:"Building reliable backend with Node.js",speakerId:"Illya_Klymov",duration:45,levels:[1],lang:"en"},{name:"Break",duration:15},{name:"GraphQL & Apollo in Vue",speakerId:"Natalia_Tepluhina",duration:45,levels:[2],lang:"en"},{name:"Machine Learning in Browser",speakerId:"Varuzhan_Harutyunyan",duration:30,levels:[1,2],lang:"am"},{name:"Break",duration:15},{name:"Scalable Best Practices for Your Development Team",speakerId:"Tejas_Kumar",duration:45,levels:[1],lang:"en"},{name:"The State of State Management in React",speakerId:"Vardges_Vardanyan",duration:30,levels:[1],lang:"am"},{name:"Break",duration:15},{name:"Presentations with React and GraphQL",speakerId:"Juho_Vepsäläinen",duration:30,levels:[1],lang:"en"},{name:"Orchestrating Node.js Containers with Kubernetes",speakerId:"Shahen_Hovhannisyan",duration:45,levels:[],lang:"am"},{name:"JS Proxy",speakerId:"Robert_Hanesoghlyan",duration:30,levels:[],lang:"am"},{name:"Closing",duration:30,lang:"am"}],[{name:"N/A",duration:30},{name:"Objects in Javascript",speakerId:"Hayk_Barseghyan",duration:30,levels:[0,1],lang:"am"},{name:"React !sync rendering",speakerId:"Khachatur_Virabyan",duration:45,levels:[],lang:"am"},{name:"Break",duration:15},{name:"Between performance with bundle optimization",speakerId:"Arnold_Dadayan",duration:30,levels:[0,1],lang:"am"},{name:"Introduction to Gatsby as the future of high performance web",speakerId:"Ruben_Harutyunyan",duration:45,levels:[1,2],lang:"am"},{name:"Break",duration:15},{name:"Thinking and Styling in React",speakerId:"Hrach_Mkrtchyan",duration:45,levels:[],lang:"am"},{name:"TDD with Jest",speakerId:"Narek_Ghevondian",duration:30,levels:[2],lang:"en"},{name:"Break",duration:15},{name:"ES2015+ in production: Reality or Myth",speakerId:"Lilit_Tadevosyan",duration:45,levels:[],lang:"am"},{name:"Workshop:Simple mobile app using NativeScript Angular",speakerId:"Gor_Rustamyan",duration:60,levels:[],lang:"am"}],[{name:"N/A",duration:30},{name:"NodeJS. Going Serverless with AWS Lambda",speakerId:"Slavik_Manukyan",duration:45,levels:[1],lang:"am"},{name:"JavaScript engines.The V8 engine",speakerId:"Albert_Hovhannisyan",duration:30,levels:[0,1],lang:"am"},{name:"Break",duration:15},{name:"React Server-Side Rendering",speakerId:"Ruben_Sargsyan",duration:45,levels:[],lang:"am"},{name:"Dev | Debug Node.js apps in Docker Containers",speakerId:"Hayk_Galstyan",duration:30,levels:[1,2],lang:"en"},{name:"Break",duration:15},{name:"Web Scraping with Puppeteer and NodeJS",speakerId:"Razmik_Bourtoutian",duration:30,levels:[],lang:"en"},{name:"GraphQL: why and when?",speakerId:"Vova_Hayrapetyan",duration:45,levels:[1,2],lang:"am"},{name:"Break",duration:15},{name:"Blazor - Real World WebAssembly",speakerId:"Aghasi_Lorsabyan",duration:60,levels:[2],lang:"am"},{name:"You Don't Know Node.js EventLoop",speakerId:"Nairi_Haroutiounian",duration:45,levels:[2],lang:"am"}]],z={Illya_Klymov:{img:"/speakers/Illya_Klymov.jpg",name:"Illya Klymov",position:"CEO at JavaScript.Ninja"},"Juho_Vepsäläinen":{img:"/speakers/Juho_Vepsäläinen.jpeg",name:"Juho Vepsäläinen",position:"Founder at SurviveJS"},Natalia_Tepluhina:{img:"/speakers/Natalia_Tepluhina.jpeg",name:"Natalia Tepluhina",position:"Founder at VueVixens"},Hrach_Mkrtchyan:{img:"/speakers/Hrach_Mkrtchyan.jpg",name:"Hrach Mkrtchyan",position:"React.js Developer at Renderforest"},Nairi_Haroutiounian:{img:"/speakers/Nairi_Haroutiounian.jpg",name:"Nairi Harutyunyan",position:"Back-end Engineer at Screenful"},Razmik_Bourtoutian:{img:"/speakers/Razmik_Bourtoutian.jpg",name:"Razmik Bourtoutian",position:"Javascript Developer at DEOUT"},Ruben_Harutyunyan:{img:"/speakers/Ruben_Harutyunyan.jpg",name:"Ruben Harutyunyan",position:"Full-stack Developer at Adway AI"},Shahen_Hovhannisyan:{img:"/speakers/Shahen_Hovhannisyan.jpg",name:"Shahen Hovhannisyan",position:"Lead Engineer at Simply Technologies"},Tejas_Kumar:{img:"/speakers/Tejas_Kumar.jpg",name:"Tejas Kumar",position:"Head of Front-end Development at Contiamo"},Vova_Hayrapetyan:{img:"/speakers/Vova_Hayrapetyan.jpg",name:"Vova Hayrapetyan",position:"Software Developer at Teamable"},Gor_Rustamyan:{img:"/speakers/Gor_Rustamyan.jpg",name:"Gor Rustamyan",position:"Founder of 256 foundation, CTO at Mer Soft LLC"},Hayk_Galstyan:{img:"/speakers/Hayk_Galstyan.jpeg",name:"Hayk Galstyan",position:"Full Stack Developer | DevOps at TUMO Center for Creative Technologies"},Aghasi_Lorsabyan:{img:"/speakers/Aghasi_Lorsabyan.jpg",name:"Aghasi Lorsabyan",position:"Lead Engineer at TUMO Center for Creative Technologies"},Arnold_Dadayan:{img:"/speakers/Arnold_Dadayan.JPG",name:"Arnold Dadayan",position:"Front-end developer at Optym"},Hayk_Barseghyan:{img:"/speakers/Hayk_Barseghyan.jpg",name:"Hayk Barseghyan",position:"Senior JavaScript Developer at Digitain"},Khachatur_Virabyan:{img:"/speakers/Khachatur_Virabyan.jpg",name:"Khachatur Virabyan",position:"ReactJS developer at Renderforest"},Lilit_Tadevosyan:{img:"/speakers/Lilit_Tadevosyan.JPG",name:"Lilit Tadevosyan",position:"Lead JavaScript developer at SFL"},Robert_Hanesoghlyan:{img:"/speakers/Robert_Hanesoghlyan.jpg",name:"Robert Hanesoghlyan",position:"Frontend developer at Develandoo"},Ruben_Sargsyan:{img:"/speakers/Ruben_Sargsyan.jpg",name:"Ruben Sargsyan",position:"Senior Front-end Developer at Benivo"},Slavik_Manukyan:{img:"/speakers/Slavik_Manukyan.jpg",name:"Slavik Manukyan",position:"Software Developer at Simply Technologies"},Varuzhan_Harutyunyan:{img:"/speakers/Varuzhan_Harutyunyan.jpg",name:"Varuzhan Harutyunyan",position:"Senior Software Developer at Digitain"},Albert_Hovhannisyan:{img:"/speakers/Albert_Hovhannisyan.jpg",name:"Albert Hovhannisyan",position:""},Rouben_Meschian:{img:"/speakers/Rouben_Meschian.jpg",name:"Rouben Meschian",position:"Founding Software Engineer at Cambridge Semantics"},Vardges_Vardanyan:{img:"/speakers/Vardges_Vardanyan.jpg",name:"Vardges Vardanyan",position:"JavaScript Ninja at SFL"},Narek_Ghevondian:{img:"/speakers/Narek_Ghevondian.jpg",name:"Narek Ghevandian",position:"Software Engineer at Vineti AM"}},Q={data:function(){return{topics:$,speakers:z}},methods:{getSpeaker:function(a){return this.speakers[a]||{}}},components:{}},K=Q,q=(t("88ae"),t("e946"),Object(d["a"])(K,G,W,!1,null,"5f5cb721",null));q.options.__file="Schedule.vue";var U=q.exports,Y=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"Speakers",attrs:{id:"Speakers"}},[t("div",{staticClass:"Container"},[a._m(0),t("div",{staticClass:"row no-gutters justify-content-center"},a._l(a.speakersList,function(e){return t("div",{key:e,staticClass:"col-md-4 SpeakerCol"},[t("div",{staticClass:"Speaker"},[t("div",{staticClass:"Img",style:{backgroundImage:"url("+a.speakers[e].img+")"}}),t("h3",{staticClass:"Name"},[a._v(a._s(a.speakers[e].name))]),t("h5",{staticClass:"Position"},[a._v(a._s(a.speakers[e].position))])])])}))]),t("div",{staticClass:"SpeakersBg"})])},Z=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("h2",{staticClass:"Title"},[a._v("Who are"),t("br"),t("span",{staticClass:"Accent"},[a._v("The Ninjas?")])])}],X={data:function(){return{speakers:z,speakersList:["Illya_Klymov","Natalia_Tepluhina","Juho_Vepsäläinen","Tejas_Kumar","Rouben_Meschian","Gor_Rustamyan","Vardges_Vardanyan","Lilit_Tadevosyan","Aghasi_Lorsabyan","Shahen_Hovhannisyan","Hayk_Barseghyan","Varuzhan_Harutyunyan","Ruben_Sargsyan","Hrach_Mkrtchyan","Khachatur_Virabyan","Slavik_Manukyan","Nairi_Haroutiounian","Razmik_Bourtoutian","Hayk_Galstyan","Robert_Hanesoghlyan","Vova_Hayrapetyan","Narek_Ghevondian","Arnold_Dadayan","Ruben_Harutyunyan","Albert_Hovhannisyan"]}},methods:{getSpeaker:function(a){return this.speakers[a]}}},aa=X,ea=(t("4cbc"),Object(d["a"])(aa,Y,Z,!1,null,"de8d81dc",null));ea.options.__file="Speakers.vue";var ta=ea.exports,sa=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},na=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"Sponsors",attrs:{id:"Sponsors"}},[t("div",{staticClass:"Container"},[t("section",{staticClass:"Section"},[t("h3",{staticClass:"Subtitle"},[a._v("General sponsor")]),t("div",{staticClass:"row justify-content-center"},[t("div",[t("a",{staticClass:"Sponsor Sponsor-Simply -main",attrs:{href:"https://www.simplytechnologies.net/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("Simply Technologies")])])])])]),t("section",{staticClass:"Section"},[t("h3",{staticClass:"Subtitle"},[a._v("Gold sponsors")]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[t("a",{staticClass:"Sponsor Sponsor-Workfront -gold",attrs:{href:"https://www.workfront.com/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("Workfront")])])]),t("div",{staticClass:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[t("a",{staticClass:"Sponsor Sponsor-Digitain -gold",attrs:{href:"https://digitain.com/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("Digitain")])])]),t("div",{staticClass:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[t("a",{staticClass:"Sponsor Sponsor-Devlix -gold",attrs:{href:"https://www.devlix.io/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("Devlix")])])])])]),t("section",{staticClass:"Section"},[t("h3",{staticClass:"Subtitle"},[a._v("Silver sponsors")]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-SFL -silver",attrs:{href:"https://sflpro.com/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("SFL")])])]),t("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-Synergy -silver",attrs:{href:"https://www.synisys.com/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("Synergy")])])]),t("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-Renderforest -silver",attrs:{href:"https://www.renderforest.com/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("RenderForest")])])]),t("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-DF -silver",attrs:{href:"http://digitalfactory.co/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("Digital Factory")])])]),t("div",{staticClass:"HR d-none  d-sm-none d-md-block d-lg-block d-xl-block"}),t("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-Develandoo -silver",attrs:{href:"https://develandoo.com/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("Develandoo")])])]),t("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-Vineti -silver",attrs:{href:"https://vineti.com/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("Vineti")])])])])]),t("section",{staticClass:"Section"},[t("h3",{staticClass:"Subtitle"},[a._v("Starter sponsors")]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-Armsoft -starter",attrs:{href:"http://www.armsoft.am/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("ArmSoft")])])]),t("div",{staticClass:"col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-IUNetworks -starter",attrs:{href:"https://www.iunetworks.am/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("IU Networks")])])]),t("div",{staticClass:"col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-Screenful -starter",attrs:{href:"https://screenful.com/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("Screenful")])])]),t("div",{staticClass:"col-6 col-sm-8 col-md-3 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-EventGeek -starter",attrs:{href:"https://www.eventgeek.com/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("EventGeek")])])])])]),t("section",{staticClass:"Section"},[t("h3",{staticClass:"Subtitle"},[a._v("Partners and friends")]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-itjobs -starter",attrs:{href:"https://www.itjobs.am/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("IT Jobs")])])]),t("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"},[t("a",{staticClass:"Sponsor Sponsor-aua -starter",attrs:{href:"https://www.aua.am/",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h4",{staticClass:"Name"},[a._v("American University "),t("br"),a._v(" of Armenia")])])])])])]),t("div",{staticClass:"SponsorsBgTop"}),t("div",{staticClass:"SponsorsBgBottom"})])}],ia={},oa=ia,ra=(t("c0fe"),Object(d["a"])(oa,sa,na,!1,null,"0bc9915c",null));ra.options.__file="Sponsors.vue";var la=ra.exports,ca=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"Team",attrs:{id:"Team"}},[t("div",{staticClass:"Container"},[a._m(0),a._l(a.teams,function(e,s){return t("div",{key:s,staticClass:"row"},a._l(e.members,function(e,s){return t("div",{key:s,staticClass:"col MemberCol"},[t("div",{staticClass:"Member"},[t("div",{staticClass:"Img",style:{backgroundImage:"url("+e.img+")"}}),t("h3",{staticClass:"Name"},[a._v(a._s(e.name))]),t("h5",{staticClass:"Position"},[a._v(a._s(e.position))]),e.greenPosition?t("h5",{staticClass:"Position Green"},[a._v(a._s(e.greenPosition))]):a._e()])])}))})],2)])},ua=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("h2",{staticClass:"Title"},[a._v("Incredible "),t("span",[a._v("Team")])])}],va={data:function(){return{teams:[{members:[{img:"/team/Nairi_Harutyunyan.png",name:"Nairi Harutyunyan",position:"Backend Engineer at Screenful, Co-Founder at ",greenPosition:"Node.js Armenia"},{img:"/team/Anna_Harutyunyan.png",name:"Anna Harutyunyan",position:"Project Manager at ",greenPosition:"Node.js Armenia"},{img:"/team/Khachatur_Tovmasyan.png",name:"Khachatur Tovmasyan",position:"Lead Front-End Engineer at SFL, Co-Founder at ",greenPosition:"Node.js Armenia"},{img:"/team/Svetlana_Hovhannisyan.png",name:"Svetlana Hovhannisyan",position:"Technical Recruiter at Meettal"},{img:"/team/Vardges_Vardanyan.png",name:"Vardges Vardanyan",position:"Javascript Engineer at VMWare"}]},{members:[{img:"/team/Alexander_Adamyan.png",name:"Alexander Adamyan",position:"Co-Founder at Simply Technologies"},{img:"/team/Varser_Zakaryan.png",name:"Varser Zakaryan",position:"Project Manager at JavaScript Conference Armenia"},{img:"/team/Gevorg_Harutyunyan.png",name:"Gevorg Harutyunyan",position:"Front-End Architect at Screenful, Founder of ModularCode"},{img:"/team/Rouben_Meschian.png",name:"Rouben Meschian",position:"Founding Software Engineer at Cambridge Semantics"},{img:"/team/Edgar_Marukyan.png",name:"Edgar Marukyan",position:"CTO at Renderforest"}]}]}}},ma=va,pa=(t("bdf2"),Object(d["a"])(ma,ca,ua,!1,null,"09228767",null));pa.options.__file="Team.vue";var da=pa.exports,ha=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},ga=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"Location",attrs:{id:"Location"}},[t("h2",{staticClass:"Title"},[a._v("The "),t("span",[a._v("Location")]),a._v(" of Madness")]),t("div",{staticClass:"MapContainer"},[t("iframe",{staticClass:"Map",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6095.609643725426!2d44.505263706885366!3d40.191156865947136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd173fd4d621%3A0x213beef7d45c07c5!2z1YDVodW11aHVvdW_1aHVttWrINSx1bTVpdaA1avVr9W11aHVtiDVgNWh1bTVodWs1b3VodaA1aHVtg!5e0!3m2!1sen!2s!4v1508846018400",width:"800",height:"600",frameborder:"0",allowfullscreen:""}})])])}],_a={},fa=_a,Ca=(t("1a71"),Object(d["a"])(fa,ha,ga,!1,null,"db59269c",null));Ca.options.__file="Location.vue";var ba=Ca.exports,ka=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},ya=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"Faq",attrs:{id:"Faq"}},[t("h2",{staticClass:"Title"},[a._v(" Frequently Asked "),t("span",[a._v("Questions")])]),t("div",{staticClass:"row Answers"},[t("div",{staticClass:"col-md-6"},[t("h3",{staticClass:"Question"},[a._v("What is JavaScript Conference Armenia?")]),t("p",{staticClass:"Answer"},[a._v("\n        JS Conference is a big IT event that brings together a huge number of IT\n        professionals to attend talks, workshops, participate in\n        competitions, get informed about open positions at sponsor IT companies and more.\n      ")]),t("h3",{staticClass:"Question"},[a._v("Who are the speakers?")]),t("p",{staticClass:"Answer"},[a._v("\n        To learn more about our speakers, please,\n        "),t("a",{attrs:{href:"#Speakers"}},[a._v("click here")]),a._v(".\n      ")]),t("h3",{staticClass:"Question"},[a._v("What are the talk topics?")]),t("p",{staticClass:"Answer"},[a._v("\n        To see the talk sessions timetable and topics, please\n        "),t("a",{attrs:{href:"#Schedule"}},[a._v("click here")]),a._v(".\n      ")]),t("h3",{staticClass:"Question"},[a._v("What is the conference language?")]),t("p",{staticClass:"Answer"},[a._v("\n        The conference will be held mainly in Armenian but there are also\n        English talks included in the program.\n      ")]),t("h3",{staticClass:"Question"},[a._v("When is it going to take place?")]),t("p",{staticClass:"Answer"},[a._v("\n        The conference will take place from 10:00 to 18:00 on November 3, 2018.\n      ")]),t("h3",{staticClass:"Question"},[a._v("Where is it going to be held?")]),t("p",{staticClass:"Answer"},[a._v("\n        JavaScript Conference Yerevan will be held at the B Building of\n        "),t("a",{attrs:{href:"https://goo.gl/maps/HmDBXyu3G9z",target:"_blank"}},[a._v("American University of Armenia")]),a._v("\n        (40 Marshal Baghramyan Ave, Yerevan)․\n      ")]),t("h3",{staticClass:"Question"},[a._v("How to participate?")]),t("p",{staticClass:"Answer"},[a._v("\n        The entry of JS Conference Yerevan 2018 is invitation-only so\n        please make sure to request your invite\n        "),t("a",{attrs:{href:"http://bit.ly/joinJSConf2018",target:"_blank"}},[a._v("here")]),a._v(".\n      ")])]),t("div",{staticClass:"col-md-6"},[t("h3",{staticClass:"Question"},[a._v("How much is the entry-ticket?")]),t("p",{staticClass:"Answer"},[a._v("\n        The event entry is free of charge.\n      ")]),t("h3",{staticClass:"Question"},[a._v("When is the deadline for registration?")]),t("p",{staticClass:"Answer"},[a._v("\n        There is no deadline but the sooner you register the more\n        interesting it will be for you as a participant as you will\n        have the chance to take part in the preconference activities.\n      ")]),t("h3",{staticClass:"Question"},[a._v("Who are behind the JS Conference Armenia? ")]),t("p",{staticClass:"Answer"},[a._v("\n        To see the JS Conference Armenia team, please,\n        "),t("a",{attrs:{href:"#Team"}},[a._v("click here")]),a._v(".\n      ")]),t("h3",{staticClass:"Question"},[a._v("How can I help the team?")]),t("p",{staticClass:"Answer"},[a._v("\n        Oh, thank you for your kindness.\n        To help us make the JavaScript Conference Armenia happen please "),t("a",{attrs:{href:"http://bit.ly/kindninja",target:"_blank"}},[a._v("apply here")]),a._v("\n        to become a JS Conf ninja volunteer!\n      ")]),t("h3",{staticClass:"Question"},[a._v("Who supports JS Conference Armenia?")]),t("p",{staticClass:"Answer"},[a._v("\n        To learn about our sponsors and partners, please,\n        "),t("a",{attrs:{href:"#Sponsors"}},[a._v("click here")]),a._v(".\n      ")]),t("h3",{staticClass:"Question"},[a._v("Will I get a certificate of participation?")]),t("p",{staticClass:"Answer"},[a._v("\n        Your certificate of participation in JS Conference is going to be\n        your larger network in IT, updated knowledge,\n        nice little gifts and good memories. Do you still need that piece of paper?\n      ")])])])])}],Sa={},wa=Sa,Ia=(t("5eaa"),Object(d["a"])(wa,ka,ya,!1,null,"2ef40a56",null));Ia.options.__file="Faq.vue";var Ta=Ia.exports,Aa=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},ja=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"Quiz",attrs:{id:"Quiz"}},[t("div",{staticClass:"Context"},[t("div",{staticClass:"Title"},[a._v("\n      QUIZ\n    ")]),t("div",{staticClass:"Description"},[a._v("\n      PARTICIPATE IN QUIZZES, WIN BADGES, BECOME A TRUE JAVASCRIPT NINJA\n    ")]),t("div",{staticClass:"row justify-content-center Badges"},[t("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[t("a",{staticClass:"Badge Badge-JavaScript",attrs:{href:"https://www.itjobs.am/quiz/5a1932d735619ae957438247",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h3",{staticClass:"Name"},[a._v("JavaScript")])])]),t("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[t("a",{staticClass:"Badge Badge-Node",attrs:{href:"https://www.itjobs.am/quiz/5a19626835619ae95743b13f",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h3",{staticClass:"Name"},[a._v("Node.JS")])])]),t("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[t("a",{staticClass:"Badge Badge-React",attrs:{href:"https://www.itjobs.am/quiz/5a19630b35619ae95743b1cd",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h3",{staticClass:"Name"},[a._v("React")])])]),t("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},[t("a",{staticClass:"Badge Badge-Angular",attrs:{href:"https://www.itjobs.am/quiz/5a27a0bc35619ae95751dda3",target:"_blank"}},[t("div",{staticClass:"Image"}),t("h3",{staticClass:"Name"},[a._v("Angular")])])])])]),t("div",{staticClass:"VectorLeft"}),t("div",{staticClass:"VectorRight"})])}],Na={},Ha=Na,Ra=(t("9a42"),Object(d["a"])(Ha,Aa,ja,!1,null,"10fb8f1b",null));Ra.options.__file="Quiz.vue";var xa=Ra.exports,Ea=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"Footer"},[t("div",{staticClass:"LogoContainer"},[t("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:a.navConfig,expression:"navConfig"}],staticClass:"LogoLink",attrs:{href:"#Intro"}},[t("Logo",{attrs:{size:150}})],1)]),a._m(0),a._m(1),a._m(2)])},La=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"SocialLinks"},[t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Github",attrs:{href:"https://github.com/NodeJSArmenia",target:"_blank"}})]),t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Facebook",attrs:{href:"https://www.facebook.com/nodejsarmenia",target:"_blank"}})]),t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Twitter",attrs:{href:"https://twitter.com/jsconf_am",target:"_blank"}})]),t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Instagram",attrs:{href:"https://www.instagram.com/nodejsarmenia/",target:"_blank"}})]),t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Youtube",attrs:{href:"https://www.youtube.com/channel/UCL-LarRFFQcYdyqFhJ2Pw4w",target:"_blank"}})]),t("span",{staticClass:"SocialIcon"},[t("a",{staticClass:"Icon Icon-Telegram",attrs:{href:"http://t.me/javascriptarmenia",target:"_blank"}})])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"PressRelease"},[a._v("\n    Press Release\n    "),t("a",{attrs:{href:"/Press-Release-EN.pdf",target:"_blank"}},[a._v("En")]),a._v(" |\n    "),t("a",{staticClass:"AM",attrs:{href:"/Press-Release-AM.pdf",target:"_blank"}},[a._v("Am")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",{staticClass:"Credits"},[a._v("\n    Design and branding by\n    "),t("a",{attrs:{href:"https://www.behance.net/Davidtiger",target:"_blank"}},[a._v("thedesigner")]),a._v(",\n    coded in Vue.js by "),t("a",{staticClass:"Devs",attrs:{href:"https://github.com/nairihar",target:"_blank"}},[a._v("@nairihar")]),a._v(",\n    "),t("a",{staticClass:"Devs",attrs:{href:"https://github.com/tovmassian",target:"_blank"}},[a._v("@tovmassian")]),a._v(" and\n    "),t("a",{staticClass:"Devs",attrs:{href:"https://github.com/NodeJSArmenia/conf-20/graphs/contributors",target:"_blank"}},[a._v("others")]),a._v(".\n  ")])}],Va={components:{Logo:T},data:function(){return{navConfig:{duration:1e3,offset:-66}}}},Ba=Va,Da=(t("b13d"),Object(d["a"])(Ba,Ea,La,!1,null,"2e446322",null));Da.options.__file="Footer.vue";var Ja=Da.exports,Ma={name:"app",components:{Welcome:g,AppHeader:B,Intro:P,Schedule:U,Speakers:ta,Sponsors:la,Team:da,Location:ba,Faq:Ta,Quiz:xa,AppFooter:Ja}},Oa=Ma,Fa=(t("5c0b"),Object(d["a"])(Oa,l,c,!1,null,null,null));Fa.options.__file="App.vue";var Pa=Fa.exports;s["a"].config.productionTip=!1,s["a"].use(i.a),s["a"].use(r.a),new s["a"]({render:function(a){return a(Pa)}}).$mount("#app")},"5aa8":function(a,e,t){},"5c0b":function(a,e,t){"use strict";var s=t("5e27"),n=t.n(s);n.a},"5e27":function(a,e,t){},"5eaa":function(a,e,t){"use strict";var s=t("c1c0"),n=t.n(s);n.a},"7f0b":function(a,e,t){},"85c9":function(a,e,t){},"88ae":function(a,e,t){"use strict";var s=t("f050"),n=t.n(s);n.a},9219:function(a,e,t){},"9a10":function(a,e,t){"use strict";var s=t("140b"),n=t.n(s);n.a},"9a42":function(a,e,t){"use strict";var s=t("5aa8"),n=t.n(s);n.a},ab3e:function(a,e,t){},ac09:function(a,e,t){},b13d:function(a,e,t){"use strict";var s=t("9219"),n=t.n(s);n.a},bdf2:function(a,e,t){"use strict";var s=t("ab3e"),n=t.n(s);n.a},c0fe:function(a,e,t){"use strict";var s=t("7f0b"),n=t.n(s);n.a},c1c0:function(a,e,t){},e505:function(a,e,t){"use strict";var s=t("1acc"),n=t.n(s);n.a},e58c:function(a,e,t){"use strict";var s=t("480e"),n=t.n(s);n.a},e6fa:function(a,e,t){},e946:function(a,e,t){"use strict";var s=t("85c9"),n=t.n(s);n.a},f050:function(a,e,t){},fc8e:function(a,e,t){},fcfc:function(a,e,t){"use strict";var s=t("e6fa"),n=t.n(s);n.a}});
//# sourceMappingURL=app.488fb406.js.map