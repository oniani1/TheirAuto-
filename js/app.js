!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Navigo",[],e):"object"==typeof exports?exports.Navigo=e():t.Navigo=e()}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var t={407:function(t,e,n){n.d(e,{default:function(){return M}});var o=/([:*])(\w+)/g,r=/\*/g,a=/\/\?/g;function i(t){return void 0===t&&(t="/"),m()?location.pathname+location.search+location.hash:t}function c(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function u(t){return"string"==typeof t}function s(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function l(t){var e=c(t).split(/\?(.*)?$/);return[c(e[0]),e.slice(1).join("")]}function h(t){for(var e={},n=t.split("&"),o=0;o<n.length;o++){var r=n[o].split("=");if(""!==r[0]){var a=decodeURIComponent(r[0]);e[a]?(Array.isArray(e[a])||(e[a]=[e[a]]),e[a].push(decodeURIComponent(r[1]||""))):e[a]=decodeURIComponent(r[1]||"")}}return e}function d(t,e){var n,i=l(c(t.currentLocationPath)),d=i[0],f=i[1],p=""===f?null:h(f),m=[];if(u(e.path)){if(n="(?:/^|^)"+c(e.path).replace(o,(function(t,e,n){return m.push(n),"([^/]+)"})).replace(r,"?(?:.*)").replace(a,"/?([^/]+|)")+"$",""===c(e.path)&&""===c(d))return{url:d,queryString:f,hashString:s(t.to),route:e,data:null,params:p}}else n=e.path;var g=new RegExp(n,""),v=d.match(g);if(v){var y=u(e.path)?function(t,e){return 0===e.length?null:t?t.slice(1,t.length).reduce((function(t,n,o){return null===t&&(t={}),t[e[o]]=decodeURIComponent(n),t}),null):null}(v,m):v.groups?v.groups:v.slice(1);return{url:c(d.replace(new RegExp("^"+t.instance.root),"")),queryString:f,hashString:s(t.to),route:e,data:y,params:p}}return!1}function f(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function p(t,e){return void 0===t[e]||!0===t[e]}function m(){return"undefined"!=typeof window}function g(t,e){return void 0===t&&(t=[]),void 0===e&&(e={}),t.filter((function(t){return t})).forEach((function(t){["before","after","already","leave"].forEach((function(n){t[n]&&(e[n]||(e[n]=[]),e[n].push(t[n]))}))})),e}function v(t,e,n){var o=e||{},r=0;!function e(){t[r]?Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),e()):t[r](o,(function(t){void 0===t||!0===t?(r+=1,e()):n&&n(o)})):n&&n(o)}()}function y(t,e){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=i(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function _(t,e){for(var n=0;n<t.instance.routes.length;n++){var o=d(t,t.instance.routes[n]);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),"ONE"===t.resolveOptions.strategy))return void e()}e()}function S(t,e){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function L(t,e){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}v.if=function(t,e,n){return Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),[t,e,n]};var O=m(),k=f();function w(t,e){if(p(t.navigateOptions,"updateBrowserURL")){var n=("/"+t.to).replace(/\/\//g,"/"),o=O&&t.resolveOptions&&!0===t.resolveOptions.hash;k?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+n:n),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout((function(){var e=location.hash;location.hash="",location.hash=e,t.instance.__freezeListening=!1}),1))):O&&(window.location.href=t.to)}e()}function x(t,e){var n=t.instance;n.lastResolved()?v(n.lastResolved().map((function(e){return function(n,o){if(e.route.hooks&&e.route.hooks.leave){var r,a=t.instance.matchLocation(e.route.path,t.currentLocationPath,!1);r="*"!==e.route.path?!a:!(t.matches&&t.matches.find((function(t){return e.route.path===t.route.path}))),p(t.navigateOptions,"callHooks")&&r?v(e.route.hooks.leave.map((function(e){return function(n,o){return e((function(e){!1===e?t.instance.__markAsClean(t):o()}),t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}})).concat([function(){return o()}])):o()}else o()}})),{},(function(){return e()})):e()}function C(t,e){p(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var q=[function(t,e){var n=t.instance.lastResolved();if(n&&n[0]&&n[0].route===t.match.route&&n[0].url===t.match.url&&n[0].queryString===t.match.queryString)return n.forEach((function(e){e.route.hooks&&e.route.hooks.already&&p(t.navigateOptions,"callHooks")&&e.route.hooks.already.forEach((function(e){return e(t.match)}))})),void e(!1);e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.before&&p(t.navigateOptions,"callHooks")?v(t.match.route.hooks.before.map((function(e){return function(n,o){return e((function(e){!1===e?t.instance.__markAsClean(t):o()}),t.match)}})).concat([function(){return e()}])):e()},function(t,e){p(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.after&&p(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach((function(e){return e(t.match)})),e()}],b=[x,function(t,e){var n=t.instance._notFoundRoute;if(n){t.notFoundHandled=!0;var o=l(t.currentLocationPath),r=o[0],a=o[1],i=s(t.to);n.path=c(r);var u={url:n.path,queryString:a,hashString:i,data:null,route:n,params:""!==a?h(a):null};t.matches=[u],t.match=u}e()},v.if((function(t){return t.notFoundHandled}),q.concat([C]),[function(t,e){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),e()},function(t,e){t.instance._setCurrent(null),e()}])];function E(){return(E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function A(t,e){var n=0;x(t,(function o(){n!==t.matches.length?v(q,E({},t,{match:t.matches[n]}),(function(){n+=1,o()})):C(t,e)}))}function H(t){t.instance.__markAsClean(t)}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var R="[data-navigo]";function M(t,e){var n,o=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:R},r=this,a="/",p=null,O=[],k=!1,x=f(),C=m();function q(t){return t.indexOf("#")>=0&&(t=!0===o.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function E(t){return c(a+"/"+c(t))}function M(t,e,n,o){return t=u(t)?E(t):t,{name:o||c(String(t)),path:t,handler:e,hooks:g(n)}}function j(t,e){if(!r.__dirty){r.__dirty=!0,t=t?c(a)+"/"+c(t):void 0;var n={instance:r,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:P({},o,e)};return v([y,_,v.if((function(t){var e=t.matches;return e&&e.length>0}),A,b)],n,H),!!n.matches&&n.matches}r.__waiting.push((function(){return r.resolve(t,e)}))}function T(t,e){if(r.__dirty)r.__waiting.push((function(){return r.navigate(t,e)}));else{r.__dirty=!0,t=c(a)+"/"+c(t);var n={instance:r,to:t,navigateOptions:e||{},resolveOptions:e&&e.resolveOptions?e.resolveOptions:o,currentLocationPath:q(t)};v([S,L,_,v.if((function(t){var e=t.matches;return e&&e.length>0}),A,b),w,H],n,H)}}function I(){if(C)return(C?[].slice.call(document.querySelectorAll(o.linksSelector||R)):[]).forEach((function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(e){if((e.ctrlKey||e.metaKey)&&"a"===e.target.tagName.toLowerCase())return!1;var n=t.getAttribute("href");if(null==n)return!1;if(n.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(n);n=o.pathname+o.search}catch(t){}var a=function(t){if(!t)return{};var e,n=t.split(","),o={};return n.forEach((function(t){var n=t.split(":").map((function(t){return t.replace(/(^ +| +$)/g,"")}));switch(n[0]){case"historyAPIMethod":o.historyAPIMethod=n[1];break;case"resolveOptionsStrategy":e||(e={}),e.strategy=n[1];break;case"resolveOptionsHash":e||(e={}),e.hash="true"===n[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[n[0]]="true"===n[1]}})),e&&(o.resolveOptions=e),o}(t.getAttribute("data-navigo-options"));k||(e.preventDefault(),e.stopPropagation(),r.navigate(c(n),a))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)})),r}function N(t,e,n){var o=O.find((function(e){return e.name===t})),r=null;if(o){if(r=o.path,e)for(var i in e)r=r.replace(":"+i,e[i]);r=r.match(/^\//)?r:"/"+r}return r&&n&&!n.includeRoot&&(r=r.replace(new RegExp("^/"+a),"")),r}function B(t){var e=l(c(t)),o=e[0],r=e[1],a=""===r?null:h(r);return{url:o,queryString:r,hashString:s(t),route:M(o,(function(){}),[n],o),data:null,params:a}}function z(t,e,n){return"string"==typeof e&&(e=D(e)),e?(e.hooks[t]||(e.hooks[t]=[]),e.hooks[t].push(n),function(){e.hooks[t]=e.hooks[t].filter((function(t){return t!==n}))}):(console.warn("Route doesn't exists: "+e),function(){})}function D(t){return"string"==typeof t?O.find((function(e){return e.name===E(t)})):O.find((function(e){return e.handler===t}))}t?a=c(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=a,this.routes=O,this.destroyed=k,this.current=p,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,e,o){var r=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(o=e,e=t,t=a),O.push(M(t,e,[n,o])),this):(Object.keys(t).forEach((function(e){if("function"==typeof t[e])r.on(e,t[e]);else{var o=t[e],a=o.uses,i=o.as,c=o.hooks;O.push(M(e,a,[n,c],i))}})),this)},this.off=function(t){return this.routes=O=O.filter((function(e){return u(t)?c(e.path)!==c(t):"function"==typeof t?t!==e.handler:String(e.path)!==String(t)})),this},this.resolve=j,this.navigate=T,this.navigateByName=function(t,e,n){var o=N(t,e);return null!==o&&(T(o.replace(new RegExp("^/?"+a),""),n),!0)},this.destroy=function(){this.routes=O=[],x&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=k=!0},this.notFound=function(t,e){return r._notFoundRoute=M("*",t,[n,e],"__NOT_FOUND__"),this},this.updatePageLinks=I,this.link=function(t){return"/"+a+"/"+c(t)},this.hooks=function(t){return n=t,this},this.extractGETParameters=function(t){return l(q(t))},this.lastResolved=function(){return p},this.generate=N,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var e={instance:r,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return _(e,(function(){})),!!e.matches&&e.matches},this.matchLocation=function(t,e,n){void 0===e||void 0!==n&&!n||(e=E(e));var o={instance:r,to:e,currentLocationPath:e};return y(o,(function(){})),"string"==typeof t&&(t=void 0===n||n?E(t):t),d(o,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return B(c(i(a)).replace(new RegExp("^"+a),""))},this.addBeforeHook=z.bind(this,"before"),this.addAfterHook=z.bind(this,"after"),this.addAlreadyHook=z.bind(this,"already"),this.addLeaveHook=z.bind(this,"leave"),this.getRoute=D,this._pathToMatchObject=B,this._clean=c,this._checkForAHash=q,this._setCurrent=function(t){return p=r.current=t},function(){x&&(this.__popstateListener=function(){r.__freezeListening||j()},window.addEventListener("popstate",this.__popstateListener))}.call(this),I.call(this)}}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}return n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(407)}().default}));const router=new Navigo("/");function randomizeArray(t){for(var e,n,o=t.length;0!==o;)n=Math.floor(Math.random()*o),e=t[o-=1],t[o]=t[n],t[n]=e;return t}const parseStaticData=(t,e)=>new Promise(((n,o)=>{var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var t=JSON.parse(r.responseText);return e?(e(t),n()):o()}},r.open("GET",t),r.send()})),contact=function(){return fetch("/contact.html").then((t=>t.text())).then((t=>{document.getElementById("content").innerHTML=t}))},about=function(){return fetch("/about.html").then((t=>t.text())).then((t=>{document.getElementById("content").innerHTML=t}))},add=function(){return fetch("/add.html").then((t=>t.text())).then((t=>{document.getElementById("content").innerHTML=t}))},listing=function(){function t(t,e,n,o,r,a=!1){let i=document.querySelector("#car_card").content.cloneNode(!0);return i.querySelector("a").href=a?"/details/old/"+t:"/details/"+t,i.querySelector(".img-fluid").src="/img/"+e,i.querySelector("h2").textContent=n,i.querySelector(".date").textContent=o,i.querySelector(".views").textContent=r,i}return fetch("/listing.html").then((t=>t.text())).then((e=>(document.getElementById("content").innerHTML=e,parseStaticData("/data/data_active.json",(function(e){e=randomizeArray(e=e.data);const n=document.getElementById("active"),o=document.createElement("div");for(let n=0;n<e.length;n++)o.appendChild(t(e[n].id,e[n].image,e[n].title,e[n].date,e[n].view));n.innerHTML=o.innerHTML}))))).then((e=>parseStaticData("/data/data_old.json",(function(e){e=randomizeArray(e=e.data);const n=document.getElementById("old"),o=document.createElement("div");for(let n=0;n<e.length;n++)o.appendChild(t(e[n].id,e[n].image,e[n].title,e[n].date,e[n].view,!0));n.innerHTML=o.innerHTML}))))},showCars=function(t){const e=t.data.id;function n(t,e,n){let o=document.querySelector("#story").content.cloneNode(!0);return o.querySelector("img").src="/img/"+t,o.querySelector("h3").textContent=e,o.querySelector(".stars").textContent=n,o}return fetch("/detail.html").then((t=>t.text())).then((t=>document.getElementById("content").innerHTML=t)).then((t=>parseStaticData("/data/data_active.json",(function(t){t=randomizeArray(t=t.data);for(let n=0;n<t.length;n++)if(t[n].id==e)return document.querySelector("img").src="/img/"+t[n].image,document.querySelector(".title").textContent=t[n].title,document.querySelector(".date").textContent=t[n].date,document.querySelector(".year").textContent=t[n].year,document.querySelector(".price").textContent=t[n].price,document.querySelector(".description").textContent=t[n].desc,document.querySelector(".color").textContent=t[n].color,document.querySelector(".category").textContent=t[n].category,void(document.querySelector(".milage").textContent=t[n].milage)})))).then((t=>{parseStaticData("/data/data_stories.json",(function(t){t=randomizeArray(t=t.data);const e=document.getElementById("stories"),o=document.createElement("div");for(let e=0;e<4;e++)o.appendChild(n(t[e].image,t[e].desc,t[e].stars));e.innerHTML=o.innerHTML}))}))},showOldCars=function(t){const e=t.data.id;function n(t,e,n){let o=document.querySelector("#story").content.cloneNode(!0);return o.querySelector("img").src="/img/"+t,o.querySelector("h3").textContent=e,o.querySelector(".stars").textContent=n,o}return fetch("/detail.html").then((t=>t.text())).then((t=>(document.getElementById("content").innerHTML=t,parseStaticData("/data/data_old.json",(function(t){t=randomizeArray(t=t.data);for(let n=0;n<t.length;n++)if(t[n].id==e)return document.querySelector("img").src="/img/"+t[n].image,document.querySelector(".title").textContent=t[n].title,document.querySelector(".date").textContent=t[n].date,document.querySelector(".year").textContent=t[n].year,document.querySelector(".price").textContent=t[n].price,document.querySelector(".description").textContent=t[n].desc,document.querySelector(".color").textContent=t[n].color,document.querySelector(".category").textContent=t[n].category,void(document.querySelector(".milage").textContent=t[n].milage)}))))).then((t=>{parseStaticData("/data/data_stories.json",(function(t){t=randomizeArray(t=t.data);const e=document.getElementById("stories"),o=document.createElement("div");for(let e=0;e<4;e++)o.appendChild(n(t[e].image,t[e].desc,t[e].stars));e.innerHTML=o.innerHTML}))}))},renderer=(t,e,n=null)=>{null==n?e(t).then((()=>{router.updatePageLinks()})):e(t,n).then((()=>{router.updatePageLinks()}))};router.on("/",(t=>renderer(t,listing))).on("/details/:id",(t=>renderer(t,showCars))).on("/details/old/:id",(t=>renderer(t,showOldCars))).on("/add",(t=>renderer(t,add))).on("/about",(t=>renderer(t,about))).on("/contact",(t=>renderer(t,contact))).resolve(),window.addEventListener("load",(function(){document.querySelector("body").classList.add("loaded")}));
