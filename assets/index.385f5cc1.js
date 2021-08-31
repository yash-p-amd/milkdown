var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,s=(e,s)=>{for(var i in s||(s={}))n.call(s,i)&&r(e,i,s[i]);if(t)for(var i of t(s))a.call(s,i)&&r(e,i,s[i]);return e};import{r as i,R as o,u as l,a as c,L as d,S as m,_ as u,b as _,N as h,H as g,c as p}from"./vendor.66b415d8.js";const E=[{dir:"guide",items:["why-milkdown","getting-started","interacting-with-editor","commands","styling","keyboard-shortcuts"]},{dir:"integrations",items:["react","vue"]},{dir:"plugins",items:["using-plugins","integrating-plugins","writing-syntax-plugins","writing-theme-plugins","writing-custom-plugins"]},{dir:"internals",items:["node-and-mark","parser","serializer","internal-plugins"]}],x={en:{display:"English",route:""},"zh-hans":{display:"简体中文",route:"zh-hans"}},f=new Map([["guide",{en:"Guide","zh-hans":"引导"}],["why-milkdown",{en:"Why Milkdown","zh-hans":"为什么使用Milkdown"}],["getting-started",{en:"Getting Started","zh-hans":"开始使用"}],["interacting-with-editor",{en:"Interacting With Editor","zh-hans":"与编辑器交互"}],["commands",{en:"Commands","zh-hans":"命令"}],["styling",{en:"Styling","zh-hans":"样式"}],["keyboard-shortcuts",{en:"Keyboard Shortcuts","zh-hans":"快捷键"}],["integrations",{en:"Integrations","zh-hans":"集成"}],["react",{en:"React","zh-hans":"React"}],["vue",{en:"Vue","zh-hans":"Vue"}],["plugins",{en:"Plugins","zh-hans":"插件"}],["using-plugins",{en:"Using Plugins","zh-hans":"使用插件"}],["integrating-plugins",{en:"Integrating Plugins","zh-hans":"集成插件"}],["writing-syntax-plugins",{en:"Writing Syntax Plugins","zh-hans":"编写语法插件"}],["writing-theme-plugins",{en:"Writing Theme Plugins","zh-hans":"编写主题插件"}],["writing-custom-plugins",{en:"Writing Custom Plugins","zh-hans":"编写自定义插件"}],["internals",{en:"Internals","zh-hans":"内部"}],["node-and-mark",{en:"Node & Mark","zh-hans":"Node & Mark"}],["parser",{en:"Parser","zh-hans":"解析器"}],["serializer",{en:"Serializer","zh-hans":"序列化"}],["internal-plugins",{en:"Internal Plugins","zh-hans":"内置插件"}],["get-started",{en:"Get Started","zh-hans":"快速开始"}],["try-online",{en:"Try Online","zh-hans":"在线体验"}],["home-describe",{en:"Plugin Based WYSIWYG Markdown Editor Framework","zh-hans":"插件驱动的所见即所得的Markdown编辑器框架"}]]),v=(e,t)=>{var n,a;return null!=(a=null==(n=f.get(e))?void 0:n[t])?a:"Not Found"};let y;const w={},z=function(e,t){if(!t||0===t.length)return e();if(void 0===y){const e=document.createElement("link").relList;y=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in w)return;w[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":y,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};const b=(e,t,n)=>{const a=x[n].route,r=["index",a].filter((e=>e)).join(".");return{title:v(t,n),link:"/"+[a,t].filter((e=>e)).join("/"),content:()=>function(e){switch(e){case"../pages/guide/commands/index.md":return z((()=>import("./index.291f9141.js")),[]);case"../pages/guide/commands/index.zh-hans.md":return z((()=>import("./index.zh-hans.f0ebf556.js")),[]);case"../pages/guide/getting-started/index.md":return z((()=>import("./index.5f47ce51.js")),[]);case"../pages/guide/getting-started/index.zh-hans.md":return z((()=>import("./index.zh-hans.eae40f87.js")),[]);case"../pages/guide/interacting-with-editor/index.md":return z((()=>import("./index.57705263.js")),[]);case"../pages/guide/interacting-with-editor/index.zh-hans.md":return z((()=>import("./index.zh-hans.61fb1641.js")),[]);case"../pages/guide/keyboard-shortcuts/index.md":return z((()=>import("./index.707c7b46.js")),[]);case"../pages/guide/keyboard-shortcuts/index.zh-hans.md":return z((()=>import("./index.zh-hans.1c01c117.js")),[]);case"../pages/guide/styling/index.md":return z((()=>import("./index.9e3bb76b.js")),[]);case"../pages/guide/styling/index.zh-hans.md":return z((()=>import("./index.zh-hans.a6d2fda6.js")),[]);case"../pages/guide/why-milkdown/index.md":return z((()=>import("./index.b97014e8.js")),[]);case"../pages/guide/why-milkdown/index.zh-hans.md":return z((()=>import("./index.zh-hans.33a6c9fd.js")),[]);case"../pages/integrations/react/index.md":return z((()=>import("./index.af341ccd.js")),[]);case"../pages/integrations/react/index.zh-hans.md":return z((()=>import("./index.zh-hans.2b636531.js")),[]);case"../pages/integrations/vue/index.md":return z((()=>import("./index.0bc5c2cc.js")),[]);case"../pages/integrations/vue/index.zh-hans.md":return z((()=>import("./index.zh-hans.abe9a65b.js")),[]);case"../pages/internals/internal-plugins/index.md":return z((()=>import("./index.45a3c1ee.js")),[]);case"../pages/internals/internal-plugins/index.zh-hans.md":return z((()=>import("./index.zh-hans.be611da5.js")),[]);case"../pages/internals/node-and-mark/index.md":return z((()=>import("./index.a515b4ea.js")),[]);case"../pages/internals/node-and-mark/index.zh-hans.md":return z((()=>import("./index.zh-hans.596d20d9.js")),[]);case"../pages/internals/parser/index.md":return z((()=>import("./index.da7f19e2.js")),[]);case"../pages/internals/parser/index.zh-hans.md":return z((()=>import("./index.zh-hans.c979b0ba.js")),[]);case"../pages/internals/serializer/index.md":return z((()=>import("./index.eb5c03fb.js")),[]);case"../pages/internals/serializer/index.zh-hans.md":return z((()=>import("./index.zh-hans.7dc1f61f.js")),[]);case"../pages/plugins/integrating-plugins/index.md":return z((()=>import("./index.7133b61b.js")),[]);case"../pages/plugins/integrating-plugins/index.zh-hans.md":return z((()=>import("./index.zh-hans.d5ab579c.js")),[]);case"../pages/plugins/using-plugins/index.md":return z((()=>import("./index.46f4d08f.js")),[]);case"../pages/plugins/using-plugins/index.zh-hans.md":return z((()=>import("./index.zh-hans.5afbd8d5.js")),[]);case"../pages/plugins/writing-custom-plugins/index.md":return z((()=>import("./index.e08fa88f.js")),[]);case"../pages/plugins/writing-custom-plugins/index.zh-hans.md":return z((()=>import("./index.zh-hans.64d3f3ba.js")),[]);case"../pages/plugins/writing-syntax-plugins/index.md":return z((()=>import("./index.b1984af5.js")),[]);case"../pages/plugins/writing-syntax-plugins/index.zh-hans.md":return z((()=>import("./index.zh-hans.7ebf329b.js")),[]);default:return new Promise((function(t,n){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`../pages/${e}/${t}/${r}.md`)}},P=(e,t)=>e.map((e=>(({dir:e,items:t},n)=>({title:v(e,n),items:t.map((t=>b(e,t,n)))}))(e,t))),j={en:P(E,"en"),"zh-hans":P(E,"zh-hans")};var k,C;(C=k||(k={}))[C.Default=0]="Default",C[C.TwoSide=1]="TwoSide";const L=i.exports.createContext(!1),I=i.exports.createContext(!1),T=i.exports.createContext(k.Default),D=i.exports.createContext(!1),O=i.exports.createContext("en"),R=i.exports.createContext([]),N=i.exports.createContext((()=>{})),V=i.exports.createContext((()=>{})),A=i.exports.createContext((()=>{})),S=i.exports.createContext((()=>{})),M=i.exports.createContext((()=>{})),H=({children:e})=>{const[t,n]=o.useState(!1);return o.createElement(L.Provider,{value:t},o.createElement(N.Provider,{value:n},e))},W=({children:e})=>{const[t,n]=o.useState(k.Default);return o.createElement(T.Provider,{value:t},o.createElement(A.Provider,{value:n},e))},$=({children:e})=>{const[t,n]=o.useState(!1);return o.createElement(I.Provider,{value:t},o.createElement(V.Provider,{value:n},e))},B=({children:e})=>{const[t,n]=o.useState(!1);return o.createElement(D.Provider,{value:t},o.createElement(S.Provider,{value:n},e))},q=({children:e})=>{const[t,n]=o.useState("en"),a=o.useMemo((()=>j[t]),[t]);return o.createElement(R.Provider,{value:a},o.createElement(O.Provider,{value:t},o.createElement(M.Provider,{value:n},e)))},G=({children:e})=>o.createElement(q,null,o.createElement(B,null,o.createElement($,null,o.createElement(H,null,o.createElement(W,null,e))))),Y="https://unpkg.com/prism-themes/themes/prism-material-light.css",F="https://unpkg.com/prism-themes/themes/prism-nord.css",U=(e,t)=>{i.exports.useEffect((()=>{var e;const n=Boolean(null==(e=window.matchMedia)?void 0:e.call(window,"(prefers-color-scheme: dark)").matches);t(n)}),[t]),i.exports.useEffect((()=>{document.documentElement.setAttribute("data-theme",e?"dark":"light");(()=>{const e=document.querySelector("#prism-theme");if(e)return e;const t=document.createElement("link");return t.id="prism-theme",t.setAttribute("rel","stylesheet"),document.head.appendChild(t),t})().setAttribute("href",e?F:Y)}),[e])},K=()=>{const e=o.useContext(O);return o.useMemo((()=>x[e].route),[e])};var Z,J;(J=Z||(Z={}))[J.Home=0]="Home",J[J.Demo=1]="Demo",J[J.Page=2]="Page";const Q=(e,t)=>e.pathname==="/"+t?0:e.pathname==="/"+[t,"online-demo"].filter((e=>e)).join("/")?1:2;function X(){const e=K(),t=l();return[Q(t,e),t]}var ee={container:"_container_1ju03_1",fold:"_fold_1ju03_11",header:"_header_1ju03_16",homepage:"_homepage_1ju03_37",part:"_part_1ju03_41",icon:"_icon_1ju03_45",logo:"_logo_1ju03_58",github:"_github_1ju03_88",mode:"_mode_1ju03_98",translate:"_translate_1ju03_114",langList:"_langList_1ju03_118",langItem:"_langItem_1ju03_132"};const te=`${ee.icon} material-icons-outlined`,ne=({show:e,setShow:t})=>{const n=K(),a=o.useContext(M),r=c(),s=l();return e?o.createElement("ul",{className:ee.langList,onClick:e=>{e.stopPropagation();const{target:i}=e;if(!(i instanceof HTMLLIElement))return;const{value:o,route:l}=i.dataset;if(!o)return;const c=s.pathname.split("/").filter((e=>e)).filter((e=>e!==n));a(o),t(!1);const d=[l,...c].filter((e=>e)).join("/");r.push("/"+d)}},Object.entries(x).map((([e,{display:t,route:n}])=>o.createElement("li",{className:ee.langItem,"data-value":e,"data-route":n,key:e},t)))):null},ae=()=>{const e=o.useContext(T),t=o.useContext(D),n=o.useContext(A),a=o.useContext(S),r=(()=>{const[e]=X(),[t,n]=o.useState(!1);return o.useEffect((()=>{n(e===Z.Demo)}),[e]),t})(),[s,i]=o.useState(!1);return o.useEffect((()=>{const e=()=>{i(!1)},t=document.body;return t.addEventListener("click",e),()=>{t.removeEventListener("click",e)}}),[]),o.createElement("div",{className:ee.part},r&&o.createElement("span",{onClick:()=>n((e=>e===k.Default?k.TwoSide:k.Default)),className:[te,ee.mode].join(" ")},e===k.Default?"chrome_reader_mode":"wysiwyg"),o.createElement("div",{className:ee.translate},o.createElement("span",{className:te,onClick:e=>{e.stopPropagation(),i(!0)}},"translate"),o.createElement(ne,{show:s,setShow:i})),o.createElement("span",{onClick:()=>a(!t),className:te},t?"light_mode":"dark_mode"),o.createElement("a",{href:"https://github.com/Saul-Mirone/milkdown",target:"_blank",className:ee.github},o.createElement("span",{className:ee.icon},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))))},re=`${ee.icon} material-icons-outlined`,se=()=>{const e=o.useContext(I),t=K();return o.createElement(d,{to:"/"+t,className:ee.logo},o.createElement("img",{src:"/milkdown-mini.svg"}),o.createElement("span",{style:{opacity:e?0:1,transition:"opacity, color, background 0.4s ease-in-out"}},"Milkdown"))},ie=()=>{const e=o.useContext(D),t=o.useContext(S),n=o.useContext(N),a=o.useContext(I),{showToggle:r,fold:s,isHomePage:i}=(()=>{const[e,t]=o.useState(!0),n=o.useContext(L),[a]=X();return o.useEffect((()=>{a!==Z.Page?t(!1):t(!0)}),[a]),{showToggle:e,fold:n,isHomePage:a===Z.Home}})();U(e,t);const l=[ee.container,i||!a?ee.homepage:"",s?ee.fold:""].join(" ");return o.createElement("div",{id:"header",className:l},o.createElement("header",{className:ee.header},o.createElement("div",{className:ee.part},r&&o.createElement("span",{className:re,onClick:e=>{n((e=>!e)),e.stopPropagation()}},"menu"),o.createElement(se,null)),o.createElement(ae,null)))};var oe={footer:"_footer_tx00c_1",homepage:"_homepage_tx00c_12"};const le=()=>{const[e]=X(),t=[oe.footer,e===Z.Home?oe.homepage:""].join(" ");return o.createElement("footer",{className:t},"MIT Licensed | Copyright © 2021-present Mirone ♡ Meo")};var ce="_body_1pnu5_1",de="_main_1pnu5_11",me="_content_1pnu5_20",ue="_container_1pnu5_30",_e="_title_1pnu5_41",he="_desc_1pnu5_50",ge="_logo_1pnu5_58",pe="_buttons_1pnu5_65",Ee="_curve_1pnu5_100";const xe=()=>{const e=K(),t="/"+[e,"getting-started"].filter((e=>e)).join("/"),n="/"+[e,"online-demo"].filter((e=>e)).join("/"),a=o.useContext(O);return o.createElement("section",{className:ce},o.createElement("section",{className:de},o.createElement("div",{className:ue},o.createElement("div",{className:me},o.createElement("h1",{className:_e},"Milkdown"),o.createElement("p",{className:he},v("home-describe",a)),o.createElement("section",{className:pe},o.createElement(d,{to:t},v("get-started",a)),o.createElement(d,{to:n},v("try-online",a)))),o.createElement("section",{className:ge},o.createElement("img",{src:"/milkdown-homepage.svg"})))),o.createElement("div",{className:Ee},o.createElement("svg",{viewBox:"0 0 1152 73"},o.createElement("path",{d:"M99.0331 0.252716C59.2655 0.284556 0 25.2197 0 25.2197V0.252716H99.0331C99.0585 0.252696 99.0839 0.252686 99.1093 0.252686C99.1538 0.252686 99.1982 0.252696 99.2427 0.252716H1152V73C1018.73 21.6667 957.818 24.4226 819.692 22.7693C672.54 21.008 573.085 73 427.919 73C308.414 73 218.068 0.307089 99.2427 0.252716H99.0331Z"}))))};var fe={right:"_right_1xevo_1",fold:"_fold_1xevo_24",main:"_main_1xevo_33",loading:"_loading_1xevo_39",container:"_container_1xevo_48",homepage:"_homepage_1xevo_73"};const ve=o.lazy((()=>z((()=>import("./MilkdownEditor.173fe27e.js").then((function(e){return e.a}))),["assets/MilkdownEditor.173fe27e.js","assets/MilkdownEditor.feb545d0.css","assets/vendor.66b415d8.js"]).then((e=>({default:e.MilkdownEditor}))))),ye=o.lazy((()=>z((()=>import("./Demo.87d99732.js")),["assets/Demo.87d99732.js","assets/Demo.de825d62.css","assets/vendor.66b415d8.js","assets/MilkdownEditor.173fe27e.js","assets/MilkdownEditor.feb545d0.css"]).then((e=>({default:e.Demo}))))),we=()=>{const[e]=X(),t=o.useContext(T),n=o.useContext(D),a=o.useContext(R),r=[fe.container,e===Z.Home?fe.homepage:""].join(" ");(()=>{const e=o.useContext(V);o.useEffect((()=>{const t=()=>{e(window.pageYOffset>0)};return document.addEventListener("scroll",t),()=>{document.removeEventListener("scroll",t)}}),[e])})();const s=a.flatMap((e=>e.items)),i=K();return o.createElement("div",{className:r},o.createElement("article",null,o.createElement(m,null,o.createElement(o.Suspense,{fallback:o.createElement("div",{className:fe.loading},o.createElement(u,{color:"rgba(var(--primary), 1)",loading:!0,size:150}))},o.createElement(_,{exact:!0,path:"/"+i},o.createElement(xe,null)),o.createElement(_,{exact:!0,path:"/"+[i,"online-demo"].filter((e=>e)).join("/")},o.createElement(ye,{mode:t,isDarkMode:n})),s.map(((e,t)=>o.createElement(_,{key:t.toString(),path:e.link},o.createElement(ve,{content:e.content,readOnly:!0}))))))),o.createElement(le,null))},ze=document.createElement("div");let be;ze.style.position="fixed",ze.style.right="0",ze.style.top="0",ze.style.bottom="0",ze.style.background="rgba(var(--background), 1)",ze.style.zIndex="99";const Pe=()=>{be&&window.clearTimeout(be);const{body:e}=document,t=document.getElementById("header"),n=window.innerWidth-e.clientWidth;e.style.marginRight=`${n}px`,e.style.overflow="hidden",e.style.transition="none",ze.style.width=n+"px",t&&(t.style.marginRight=`${n}px`,t.style.transition="none"),ze.style.display="block"},je=()=>{const{body:e}=document,t=document.getElementById("header");e.style.overflow="",e.style.marginRight="",t&&(t.style.marginRight=""),be=window.setTimeout((()=>{e.style.transition="",t&&(t.style.transition="")}),400),ze.style.display="none"};var ke={sidebar:"_sidebar_3fzld_1",fold:"_fold_3fzld_13",hr:"_hr_3fzld_28",sectionTitle:"_sectionTitle_3fzld_35",link:"_link_3fzld_44",active:"_active_3fzld_56"};const Ce=({title:e,link:t})=>o.createElement(h,{className:ke.link,activeClassName:ke.active,to:t},e),Le=({title:e,items:t})=>o.createElement("section",{className:ke.section},o.createElement("section",{className:ke.sectionTitle},e),t.map(((e,t)=>o.createElement(Ce,s({key:t.toString()},e))))),Ie=()=>{const e=o.useContext(R),t=o.useContext(L),n=(()=>{const e=o.useContext(N),t=o.useRef(null),[n,a]=X();return o.useEffect((()=>{const a=document.documentElement.clientWidth<1080;if(n!==Z.Page||a)return void e(!1);e(!0);const{current:r}=t;return r?(document.body.appendChild(ze),r.addEventListener("mouseenter",Pe),r.addEventListener("mouseleave",je),()=>{document.body.removeChild(ze),r.removeEventListener("mouseleave",je),r.removeEventListener("mouseenter",Pe)}):void 0}),[n,e,a]),t})(),a=o.useMemo((()=>`${ke.sidebar} ${t?"":ke.fold}`),[t]);return o.createElement("nav",{ref:n,className:a},e.map(((t,n)=>o.createElement("section",{key:n.toString()},o.createElement(Le,s({key:n.toString()},t)),n<e.length-1&&o.createElement("hr",{className:ke.hr})))))},Te=()=>{const e=o.useContext(N),t=o.useContext(L),n=o.useContext(M);return o.useEffect((()=>{const e=window.location.hash.split("/").filter((e=>e&&"#"!==e)),[t]=e;Object.values(x).map((({route:e})=>e)).filter((e=>e)).includes(t)&&n(t)}),[n]),o.createElement("div",{onClick:()=>{document.documentElement.clientWidth<1142&&e(!1)},className:t?fe.right:[fe.right,fe.fold].join(" ")},o.createElement(ie,null),o.createElement("main",{className:fe.main},o.createElement(we,null)))},De=()=>o.createElement(g,null,o.createElement(G,null,o.createElement(Ie,null),o.createElement(Te,null))),Oe=document.getElementById("app");p.exports.render(o.createElement(De,null),Oe);export{k as M,z as _,x as i,O as l};