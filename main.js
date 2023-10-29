/*! For license information please see main.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports.main=t(require("React"),require("ReactDOM")):e.main=t(e.React,e.ReactDOM)}(self,((e,t)=>(()=>{"use strict";var n={731:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}var a;n.d(t,{J0:()=>i,RQ:()=>A,WK:()=>j,Zn:()=>M,aU:()=>a,cP:()=>d,fp:()=>f,lX:()=>l}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));const o="popstate";function l(e){return void 0===e&&(e={}),function(e,t,n,l){void 0===l&&(l={});let{window:c=document.defaultView,v5Compat:d=!1}=l,h=c.history,f=a.Pop,m=null,v=g();function g(){return(h.state||{idx:null}).idx}function y(){f=a.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:f,location:E.location,delta:t})}function b(e){let t="null"!==c.location.origin?c.location.origin:c.location.href,n="string"==typeof e?e:p(e);return i(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==v&&(v=0,h.replaceState(r({},h.state,{idx:v}),""));let E={get action(){return f},get location(){return e(c,h)},listen(e){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(o,y),m=e,()=>{c.removeEventListener(o,y),m=null}},createHref:e=>t(c,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f=a.Push;let r=u(E.location,e,t);n&&n(r,e),v=g()+1;let o=s(r,v),l=E.createHref(r);try{h.pushState(o,"",l)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;c.location.assign(l)}d&&m&&m({action:f,location:E.location,delta:1})},replace:function(e,t){f=a.Replace;let r=u(E.location,e,t);n&&n(r,e),v=g();let o=s(r,v),l=E.createHref(r);h.replaceState(o,"",l),d&&m&&m({action:f,location:E.location,delta:0})},go:e=>h.go(e)};return E}((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return u("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:p(t)}),null,e)}function i(e,t){if(!1===e||null==e)throw new Error(t)}function c(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n,a){return void 0===n&&(n=null),r({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?d(t):t,{state:n,key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function d(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var h;function f(e,t,n){void 0===n&&(n="/");let r=M(("string"==typeof t?d(t):t).pathname||"/",n);if(null==r)return null;let a=m(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let e=0;null==o&&e<a.length;++e)o=S(a[e],U(r));return o}function m(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(i(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(r.length));let c=A([r,l.relativePath]),s=n.concat(l);e.children&&e.children.length>0&&(i(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+c+'".'),m(e.children,t,s,c)),(null!=e.path||e.index)&&t.push({path:c,score:C(c,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of v(e.path))a(e,t,n);else a(e,t)})),t}function v(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let l=v(r.join("/")),i=[];return i.push(...l.map((e=>""===e?o:[o,e].join("/")))),a&&i.push(...l),i.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={})),new Set(["lazy","caseSensitive","path","id","index","children"]);const g=/^:\w+$/,y=3,b=2,E=1,x=10,w=-2,R=e=>"*"===e;function C(e,t){let n=e.split("/"),r=n.length;return n.some(R)&&(r+=w),t&&(r+=b),n.filter((e=>!R(e))).reduce(((e,t)=>e+(g.test(t)?y:""===t?E:x)),r)}function S(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let e=0;e<n.length;++e){let l=n[e],i=e===n.length-1,c="/"===a?t:t.slice(a.length)||"/",s=P({path:l.relativePath,caseSensitive:l.caseSensitive,end:i},c);if(!s)return null;Object.assign(r,s.params);let u=l.route;o.push({params:r,pathname:A([a,s.pathname]),pathnameBase:L(A([a,s.pathnameBase])),route:u}),"/"!==s.pathnameBase&&(a=A([a,s.pathnameBase]))}return o}function P(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));return e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=i[n]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return c(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(i[n]||"",t),e}),{}),pathname:o,pathnameBase:l,pattern:e}}function U(e){try{return decodeURI(e)}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function M(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}const A=e=>e.join("/").replace(/\/\/+/g,"/"),L=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function j(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}Error;const O=["post","put","patch","delete"],B=(new Set(O),["get",...O]);new Set(B),new Set([301,302,303,307,308]),new Set([307,308]),Symbol("deferred")},157:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(568),a=n.n(r),o=n(802),l=n.n(o)()(a());l.push([e.id,"a:hover {\n  text-decoration: none;\n}\n","",{version:3,sources:["webpack://./src/main/components/index.less"],names:[],mappings:"AAAA;EACE,qBAAA;AACF",sourcesContent:["a:hover {\n  text-decoration: none;\n}\n"],sourceRoot:""}]),l.locals={};const i=l},802:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(l[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&l[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},568:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */"),l=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(l).concat([o]).join("\n")}return[t].join("\n")}},478:(e,t,n)=>{var r=n(314);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},489:(e,t,n)=>{n.d(t,{VK:()=>i});var r=n(24),a=n(830),o=n(731);new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const l=r.startTransition;function i(e){let{basename:t,children:n,future:i,window:c}=e,s=r.useRef();null==s.current&&(s.current=(0,o.lX)({window:c,v5Compat:!0}));let u=s.current,[p,d]=r.useState({action:u.action,location:u.location}),{v7_startTransition:h}=i||{},f=r.useCallback((e=>{h&&l?l((()=>d(e))):d(e)}),[d,h]);return r.useLayoutEffect((()=>u.listen(f)),[u,f]),r.createElement(a.F0,{basename:t,children:n,location:p.location,navigationType:p.action,navigator:u})}var c,s;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"}(c||(c={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(s||(s={}))},830:(e,t,n)=>{n.d(t,{AW:()=>b,F0:()=>E,Z5:()=>x});var r=n(24),a=n(731);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const l=r.createContext(null),i=r.createContext(null),c=r.createContext(null),s=r.createContext(null),u=r.createContext({outlet:null,matches:[],isDataRoute:!1}),p=r.createContext(null);function d(){return null!=r.useContext(s)}function h(e,t,n){d()||(0,a.J0)(!1);let{navigator:l}=r.useContext(c),{matches:i}=r.useContext(u),p=i[i.length-1],h=p?p.params:{},f=(p&&p.pathname,p?p.pathnameBase:"/");p&&p.route;let y,b=(d()||(0,a.J0)(!1),r.useContext(s).location);if(t){var E;let e="string"==typeof t?(0,a.cP)(t):t;"/"===f||(null==(E=e.pathname)?void 0:E.startsWith(f))||(0,a.J0)(!1),y=e}else y=b;let x=y.pathname||"/",w="/"===f?x:x.slice(f.length)||"/",R=(0,a.fp)(e,{pathname:w}),C=function(e,t,n){var o;if(void 0===t&&(t=[]),void 0===n&&(n=null),null==e){var l;if(null==(l=n)||!l.errors)return null;e=n.matches}let i=e,c=null==(o=n)?void 0:o.errors;if(null!=c){let e=i.findIndex((e=>e.route.id&&(null==c?void 0:c[e.route.id])));e>=0||(0,a.J0)(!1),i=i.slice(0,Math.min(i.length,e+1))}return i.reduceRight(((e,a,o)=>{let l=a.route.id?null==c?void 0:c[a.route.id]:null,s=null;n&&(s=a.route.errorElement||m);let u=t.concat(i.slice(0,o+1)),p=()=>{let t;return t=l?s:a.route.Component?r.createElement(a.route.Component,null):a.route.element?a.route.element:e,r.createElement(g,{match:a,routeContext:{outlet:e,matches:u,isDataRoute:null!=n},children:t})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?r.createElement(v,{location:n.location,revalidation:n.revalidation,component:s,error:l,children:p(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):p()}),null)}(R&&R.map((e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:(0,a.RQ)([f,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?f:(0,a.RQ)([f,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,n);return t&&C?r.createElement(s.Provider,{value:{location:o({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:a.aU.Pop}},C):C}function f(){let e=function(){var e;let t=r.useContext(p),n=function(e){let t=r.useContext(i);return t||(0,a.J0)(!1),t}(y.UseRouteError),o=function(e){let t=function(e){let t=r.useContext(u);return t||(0,a.J0)(!1),t}(),n=t.matches[t.matches.length-1];return n.route.id||(0,a.J0)(!1),n.route.id}(y.UseRouteError);return t||(null==(e=n.errors)?void 0:e[o])}(),t=(0,a.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,null)}const m=r.createElement(f,null);class v extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?r.createElement(u.Provider,{value:this.props.routeContext},r.createElement(p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g(e){let{routeContext:t,match:n,children:a}=e,o=r.useContext(l);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(u.Provider,{value:t},a)}var y=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(y||{});function b(e){(0,a.J0)(!1)}function E(e){let{basename:t="/",children:n=null,location:o,navigationType:l=a.aU.Pop,navigator:i,static:u=!1}=e;d()&&(0,a.J0)(!1);let p=t.replace(/^\/*/,"/"),h=r.useMemo((()=>({basename:p,navigator:i,static:u})),[p,i,u]);"string"==typeof o&&(o=(0,a.cP)(o));let{pathname:f="/",search:m="",hash:v="",state:g=null,key:y="default"}=o,b=r.useMemo((()=>{let e=(0,a.Zn)(f,p);return null==e?null:{location:{pathname:e,search:m,hash:v,state:g,key:y},navigationType:l}}),[p,f,m,v,g,y,l]);return null==b?null:r.createElement(c.Provider,{value:h},r.createElement(s.Provider,{children:n,value:b}))}function x(e){let{children:t,location:n}=e;return h(w(t),n)}function w(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,((e,o)=>{if(!r.isValidElement(e))return;let l=[...t,o];if(e.type===r.Fragment)return void n.push.apply(n,w(e.props.children,l));e.type!==b&&(0,a.J0)(!1),e.props.index&&e.props.children&&(0,a.J0)(!1);let i={id:e.props.id||l.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=w(e.props.children,l)),n.push(i)})),n}r.startTransition,new Promise((()=>{})),r.Component},48:(e,t,n)=>{var r=n(672),a=n.n(r),o=n(954),l=n.n(o),i=n(992),c=n.n(i),s=n(919),u=n.n(s),p=n(671),d=n.n(p),h=n(157),f={};f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=d(),a()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals},672:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},l=[],i=0;i<e.length;i++){var c=e[i],s=r.base?c[0]+r.base:c[0],u=o[s]||0,p="".concat(s," ").concat(u);o[s]=u+1;var d=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var f=a(h,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}l.push(p)}return l}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var l=0;l<o.length;l++){var i=n(o[l]);t[i].references--}for(var c=r(e,a),s=0;s<o.length;s++){var u=n(o[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},992:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},671:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},919:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},954:e=>{var t,n=(t=[],function(e,n){return t[e]=n,t.filter(Boolean).join("\n")});function r(e,t,r,a){var o;if(r)o="";else{o="",a.supports&&(o+="@supports (".concat(a.supports,") {")),a.media&&(o+="@media ".concat(a.media," {"));var l=void 0!==a.layer;l&&(o+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),o+=a.css,l&&(o+="}"),a.media&&(o+="}"),a.supports&&(o+="}")}if(e.styleSheet)e.styleSheet.cssText=n(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}var a={singleton:null,singletonCounter:0};e.exports=function(e){var t=a.singletonCounter++,n=a.singleton||(a.singleton=e.insertStyleElement(e));return{update:function(e){r(n,t,!1,e)},remove:function(e){r(n,t,!0,e)}}}},551:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(24),a=n.n(r),o=n(830),l=(n(48),n(977)),i=n(587);const c=()=>a().createElement(o.Z5,null,l.Z.map((e=>a().createElement(o.AW,{path:e.path,element:e.element(),key:(0,i.V)()}))))},349:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(24),a=n.n(r);n(48);const o=()=>a().createElement("div",{className:"container"},a().createElement("h1",null,"欢迎使用",a().createElement("img",{src:"./assets/icon.svg",alt:"MicroCode Logo"})," <MicroCode>",a().createElement("span",null,"定制你的无代码设计解决方案")),a().createElement("ul",null,a().createElement("li",null,a().createElement("a",{href:"./page-pc.html"},a().createElement("div",{style:{width:32,height:32}},a().createElement("img",{draggable:"false",src:"https://assets.mybricks.world/icon/pcpage.svg",width:"100%",height:"100%"})),a().createElement("label",null,"PC页面")))))},977:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(349);const a=[{path:"/",element:r.Z},{path:"*",element:r.Z}]},587:(e,t,n)=>{n.d(t,{V:()=>r});const r=(e=6,t="u_")=>{let n="";for(let t=0;t<e;t++)n+="abcdefhijkmnprstwxyz0123456789".charAt(Math.floor(30*Math.random()));return t+n}},24:t=>{t.exports=e},314:e=>{e.exports=t}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={id:e,exports:{}};return n[e](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nc=void 0;var o={};return(()=>{a.r(o);var e=a(24),t=a.n(e),n=a(478),r=a(551),l=a(489);n.createRoot(document.getElementById("root")).render(t().createElement(t().StrictMode,null,t().createElement(l.VK,null,t().createElement(r.Z,null))))})(),o})()));
//# sourceMappingURL=main.js.map