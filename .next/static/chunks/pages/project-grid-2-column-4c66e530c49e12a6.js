(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{5224:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-grid-2-column",function(){return r(5121)}])},1221:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let a=r(8754),s=(r(7294),a._(r(177)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let r=s.default,a={loading:e=>{let{error:t,isLoading:r,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e}),a={...a,...t};let n=a.loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?r({...a,loader:()=>null!=n?n().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete a.webpack,delete a.modules,noSSR(r,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7747:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let a=r(8754),s=a._(r(7294)),n=s.default.createContext(null)},177:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let a=r(8754),s=a._(r(7294)),n=r(7747),l=[],i=[],o=!1;function load(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function init(){if(!a){let t=new LoadableSubscription(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!o){let e=r.webpack?r.webpack():r.modules;e&&i.push(t=>{for(let r of e)if(t.includes(r))return init()})}function LoadableComponent(e,t){!function(){init();let e=s.default.useContext(n.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let l=s.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return s.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),s.default.useMemo(()=>{var t;return l.loading||l.error?s.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:a.retry}):l.loaded?s.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",s.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){let r=[];for(;e.length;){let a=e.pop();r.push(a(t))}return Promise.all(r).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(l).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(o=!0,t());flushInitializers(i,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let d=Loadable},5121:function(e,t,r){"use strict";r.r(t);var a=r(5893),s=r(7585),n=r(1077),l=r(81),i=r(5152),o=r.n(i);let d=o()(()=>Promise.all([r.e(391),r.e(657)]).then(r.bind(r,2657)),{loadableGenerated:{webpack:()=>[2657]},ssr:!1});t.default=()=>(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(s.Z,{pageName:"Project Full Width"}),(0,a.jsx)(d,{}),(0,a.jsx)(n.Z,{})]})},7585:function(e,t,r){"use strict";var a=r(5893),s=r(1664),n=r.n(s);t.Z=e=>{let{pageName:t,pageTitle:r}=e;return(0,a.jsx)("section",{className:"page-title-area text-white bg_cover",style:{backgroundImage:"url(assets/images/bg/page-bg-1.jpg)"},children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"page-title-inner text-center",children:[(0,a.jsx)("h1",{className:"page-title",children:t}),(0,a.jsxs)("div",{className:"gd-breadcrumb",children:[(0,a.jsx)("span",{className:"breadcrumb-entry",children:(0,a.jsx)(n(),{legacyBehavior:!0,href:"/",children:"Home"})}),(0,a.jsx)("span",{className:"separator"}),(0,a.jsx)("span",{className:"breadcrumb-entry active",children:t})]})]})})})}},1077:function(e,t,r){"use strict";var a=r(5893),s=r(6066),n=r(5474);t.Z=()=>(0,a.jsx)("section",{className:"partners-section",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)(s.Z,{...n.b.partnerSliderOne,className:"partner-slider-one pt-80 pb-70 border-top-1 wow fadeInDown",children:[(0,a.jsx)("div",{className:"single-partner-item",children:(0,a.jsx)("div",{className:"partner-img",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{src:"assets/images/partners/partner-1.png",alt:"Partner Image"})})})}),(0,a.jsx)("div",{className:"single-partner-item",children:(0,a.jsx)("div",{className:"partner-img",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{src:"assets/images/partners/partner-2.png",alt:"Partner Image"})})})}),(0,a.jsx)("div",{className:"single-partner-item",children:(0,a.jsx)("div",{className:"partner-img",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{src:"assets/images/partners/partner-3.png",alt:"Partner Image"})})})}),(0,a.jsx)("div",{className:"single-partner-item",children:(0,a.jsx)("div",{className:"partner-img",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{src:"assets/images/partners/partner-4.png",alt:"Partner Image"})})})}),(0,a.jsx)("div",{className:"single-partner-item",children:(0,a.jsx)("div",{className:"partner-img",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{src:"assets/images/partners/partner-5.png",alt:"Partner Image"})})})}),(0,a.jsx)("div",{className:"single-partner-item",children:(0,a.jsx)("div",{className:"partner-img",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{src:"assets/images/partners/partner-4.png",alt:"Partner Image"})})})})]})})})},5152:function(e,t,r){e.exports=r(1221)}},function(e){e.O(0,[664,931,812,774,888,179],function(){return e(e.s=5224)}),_N_E=e.O()}]);