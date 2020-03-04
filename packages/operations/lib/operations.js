/*!
 * Copyright (c) 2020 Thomas Otterson
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.operations=t():e.operations=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){
/*!
 * Copyright (c) 2020 Thomas Otterson
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */
e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return f}));const r=Symbol("EMPTY"),o=Symbol("QUEUE");function c(){return Object.create(null,{store:{value:[],writable:!0},pointer:{value:0,writable:!0},[o]:{value:!0}})}function u(e){return e.store.length-e.pointer}function i(e,t){e.store.push(t)}function a(e){if(0===e.store.length)return r;const t=e.store[e.pointer];return 2*++e.pointer>=e.store.length&&(e.store=e.store.slice(e.pointer),e.pointer=0),t}function f(e,t){for(let n=0,r=u(e);n<r;n++){const n=a(e);t(n)&&i(e,n)}}},function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return p}));var r=n(0);const o=Object(r.f)(),c=Symbol("SET_IMMEDIATE"),u=Symbol("MESSAGE_CHANNEL"),i=Symbol("SET_TIMEOUT"),a={batchSize:1024,dispatchMethod:c};let f=d(),s=!1,l=!0;function d(){switch(function(){switch(a.dispatchMethod){case u:return"undefined"!=typeof MessageChannel?u:i;case i:return i;default:return void 0!==e?c:"undefined"!=typeof MessageChannel?u:i}}()){case c:return()=>{l&&s||(l=!0,e(b))};case u:{const e=new MessageChannel;return e.port1.onmessage=()=>b(),()=>{l&&s||(l=!0,e.port2.postMessage(0))}}case i:return()=>{l&&s||(l=!0,setTimeout(b,0))}}}function b(){s=!0,l=!1;let e=0;for(;;){const t=Object(r.c)(o);if(t===r.a)break;if(t(),e>=a.batchSize)break;e++,s=!1,Object(r.b)(o)&&f()}}function m(e={}){for(const t in a)t in e&&(a[t]=e[t],"dispatchMethod"===t&&(f=d()));return Object.assign({},a)}function p(e){Object(r.d)(o,e),f()}}).call(this,n(7).setImmediate)},function(e,t){e.exports=function(e){this.wrapped=e}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(2);e.exports=function(e){return new r(e)}},function(e,t,n){var r=n(6);e.exports=function(e){return function(){return new r(e.apply(this,arguments))}}},function(e,t,n){var r=n(2);function o(e){var t,n;function o(t,n){try{var u=e[t](n),i=u.value,a=i instanceof r;Promise.resolve(a?i.wrapped:i).then((function(e){a?o("return"===t?"return":"next",e):c(u.done?"return":"normal",e)}),(function(e){o("throw",e)}))}catch(e){c("throw",e)}}function c(e,r){switch(e){case"return":t.resolve({value:r,done:!0});break;case"throw":t.reject(r);break;default:t.resolve({value:r,done:!1})}(t=t.next)?o(t.key,t.arg):n=null}this._invoke=function(e,r){return new Promise((function(c,u){var i={key:e,arg:r,resolve:c,reject:u,next:null};n?n=n.next=i:(t=n=i,o(e,r))}))},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(o.prototype[Symbol.asyncIterator]=function(){return this}),o.prototype.next=function(e){return this._invoke("next",e)},o.prototype.throw=function(e){return this._invoke("throw",e)},o.prototype.return=function(e){return this._invoke("return",e)},e.exports=o},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function c(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new c(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new c(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},c.prototype.unref=c.prototype.ref=function(){},c.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(8),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(3))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,c,u,i,a=1,f={},s=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){m(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(u="setImmediate$"+Math.random()+"$",i=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(u)&&m(+t.data.slice(u.length))},e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),r=function(t){e.postMessage(u+t,"*")}):e.MessageChannel?((c=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){c.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(o=l.documentElement,r=function(e){var t=l.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return f[a]=o,r(a),a++},d.clearImmediate=b}function b(e){delete f[e]}function m(e){if(s)setTimeout(m,0,e);else{var t=f[e];if(t){s=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{b(e),s=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(3),n(9))},function(e,t){var n,r,o=e.exports={};function c(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===c||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:c}catch(e){n=c}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,f=[],s=!1,l=-1;function d(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&b())}function b(){if(!s){var e=i(d);s=!0;for(var t=f.length;t;){for(a=f,f=[];++l<t;)a&&a[l].run();l=-1,t=f.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new m(e,t)),1!==f.length||s||i(b)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=n(0);const o=Symbol("BUFFER"),c=Symbol("FIXED"),u=Symbol("DROPPING"),i=Symbol("SLIDING");function a(e){return Object.create(null,{queue:{value:Object(r.f)()},size:{value:e},[o]:{value:c}})}function f(e){return Object.create(null,{queue:{value:Object(r.f)()},size:{value:e},[o]:{value:u}})}function s(e){return Object.create(null,{queue:{value:Object(r.f)()},size:{value:e},[o]:{value:i}})}function l(e){return e.size}function d(e){return Object(r.b)(e.queue)}function b(e){return e[o]===c&&Object(r.b)(e.queue)>=e.size}function m(e,...t){switch(e[o]){case c:for(const n of t)Object(r.d)(e.queue,n);break;case u:for(const n of t)d(e)<l(e)&&Object(r.d)(e.queue,n);break;case i:for(const n of t)d(e)>=l(e)&&Object(r.c)(e.queue),Object(r.d)(e.queue,n);break;default:return}}function p(e){return Object(r.c)(e.queue)}var v=n(4),y=n.n(v),h=n(5),O=n.n(h);const j=Object.create(null,{init:{value:Symbol.for("transducer/init")},step:{value:Symbol.for("transducer/step")},result:{value:Symbol.for("transducer/result")},reduced:{value:Symbol.for("transducer/reduced")},value:{value:Symbol.for("transducer/value")}});var g=n(1);const w=Symbol("CLOSED"),S=Symbol("BOX");function T(e){return!!(null==e?void 0:e[S])}function x(e){return!!(null==e?void 0:e[j.reduced])}function E(e){return Object.create(null,{value:{value:e,writable:!0},[S]:{value:!0}})}function I(e,t,n){if(t===w)throw Error("Cannot send CLOSED to a channel");if(e.closed)return n.commit(),E(!1);let o,c;if(e.buffer&&!b(e.buffer)){n.commit();const u=x(e.xform[j.step](e.buffer,t));for(;0!==d(e.buffer)&&(o=Object(r.c)(e.recvs),o!==r.a);)if(o.active){c=o.commit();const t=p(e.buffer);c&&Object(g.e)(()=>c(t))}return u&&M(e),E(!0)}for(;o=Object(r.c)(e.recvs),o!==r.a;)if(o.active)return n.commit(),c=o.commit(),c&&Object(g.e)(()=>c(t)),E(!0);if(e.dirtySends>e.maxDirty?(Object(r.e)(e.sends,e=>e.handler.active),e.dirtySends=0):e.dirtySends++,Object(r.b)(e.sends)>=e.maxQueued)throw Error(`No more than ${e.maxQueued} pending sends are allowed on a single channel`);return Object(r.d)(e.sends,function(e,t){return Object.create(null,{value:{value:e,writable:!0},handler:{value:t},[S]:{value:!0}})}(t,n)),null}function _(e,t){let n,o,c;if(e.buffer&&d(e.buffer)>0){t.commit();const u=p(e.buffer);for(;!b(e.buffer)&&(n=Object(r.c)(e.sends),n!==r.a);)o=n.handler,o.active&&(c=o.commit(),c&&Object(g.e)(()=>c(!0)),x(e.xform[j.step](e.buffer,n.value))&&M(e));return E(u)}for(;n=Object(r.c)(e.sends),n!==r.a;)if(o=n.handler,o.active)return c=o.commit(),c&&Object(g.e)(()=>c(!0)),E(n.value);if(e.closed)return t.commit(),E(w);if(e.dirtyRecvs>e.maxDirty?(Object(r.e)(e.recvs,e=>e.active),e.dirtyRecvs=0):e.dirtyRecvs++,Object(r.b)(e.recvs)>=e.maxQueued)throw Error(`No more than ${e.maxQueued} pending receives are allowed on a single channel`);return Object(r.d)(e.recvs,t),null}function M(e){if(e.closed)return;let t,n,o;if(e.closed=!0,e.buffer)for(e.xform[j.result](e.buffer);0!==d(e.buffer)&&(t=Object(r.c)(e.recvs),t!==r.a);)if(t.active){o=t.commit();const n=p(e.buffer);o&&Object(g.e)(()=>o(n))}for(;t=Object(r.c)(e.recvs),t!==r.a;)t.active&&(o=t.commit(),o&&Object(g.e)(()=>o(w)));for(;n=Object(r.c)(e.sends),n!==r.a;)n.handler.active&&(o=n.handler.commit(),o&&Object(g.e)(()=>o(!1)))}const k=Symbol("DEFAULT");function A(e,t){return Object.assign(Object.create(null),{value:e,channel:t})}function P(e,t=(()=>{}),n={}){const r=e.length;if(0===r)throw Error("select called with no operations");const o=!!n.priority,c=o?[]:function(e){const t=[];for(let n=0;n<e;n++)t.push(n);for(let n=e-1;n>0;n--){const e=Math.floor(Math.random()*(n+1)),r=t[n];t[n]=t[e],t[e]=r}return t}(r),u=E(!0);function i(e){return function(e,t){return Object.create(null,{active:{get:()=>e.value},commit:{value:()=>(e.value=!1,t)}})}(u,n=>{t(A(n,e))})}let a;for(let n=0;n<r;n++){const r=e[o?n:c[n]];let u,f;if(Array.isArray(r)?([u,f]=r,a=I(u,f,i(u))):(u=r,a=_(u,i(u))),T(a)){t(A(a.value,u));break}}!T(a)&&Object.prototype.hasOwnProperty.call(n,"default")&&u.value&&(u.value=!1,t(A(n.default,k)))}function C(e,t={}){return new Promise(n=>{P(e,n,t)})}function D(e){return e.value}function L(e){return e.channel}const q=()=>w;function F(e){return Object.create(null,{active:{value:!0},commit:{value:()=>e}})}function Q(e,t,n){const r=t(n);return r!==w&&m(e,r),e}function N(e,t=q){return{[j.step](n,r){try{return e[j.step](n,r)}catch(e){return Q(n,t,e)}},[j.result](n){try{return e[j.result](n)}catch(e){return Q(n,t,e)}}}}const z={[j.init](){throw Error("init not available")},[j.step]:(e,t)=>(m(e,t),e),[j.result]:e=>e};function R(e,t,n){let r,c;var u;e?"number"==typeof e?(r=a(e),c=t):(null==(u=e)?void 0:u[o])?(r=e,c=t):(r=(null==e?void 0:e.transducer)?a(1):null,c=e):(r=null,c=t);const{transducer:i,handler:f,maxDirty:s,maxQueued:l,timer:d}=Object.assign({},n,c);return{buf:r,transducer:i,handler:f,maxDirty:s,maxQueued:l,timer:d}}function U(e,t){const{buf:n,transducer:o,handler:c,maxDirty:u,maxQueued:i,timer:a}=R(e,t,{maxDirty:64,maxQueued:1024});if(o&&!n)throw Error("Only buffered channels can use transducers");const f="number"==typeof a,s=function(e,t,n=!1,o=64,c=1024){return Object.create(null,{buffer:{value:e},xform:{value:t},maxDirty:{value:o},maxQueued:{value:c},recvs:{value:Object(r.f)()},sends:{value:Object(r.f)()},dirtyRecvs:{value:0,writable:!0},dirtySends:{value:0,writable:!0},closed:{value:!1,writable:!0},isBuffered:{value:!!e},isTimed:{value:n}})}(n,N(o?o(z):z,c),f,u,i);function l(){return(l=O()((function*(){for(;;){const e=yield y()(V(s));if(e===w)break;yield e}}))).apply(this,arguments)}return s[Symbol.asyncIterator]=function(){return l.apply(this,arguments)},f&&setTimeout(()=>M(s),a),s}function B(e=0){return U({timer:e})}function G(e,t){return U({transducer:e,handler:t})}function $(e){return e.closed}function H(e){return e.isBuffered}function X(e){return e.isTimed}function Y(e,t,n=(()=>{})){const r=I(e,t,F(n));r&&n&&n(r.value)}function J(e,t=(()=>{})){const n=_(e,F(t));n&&t&&t(n.value)}function K(e,t){return new Promise(n=>{Y(e,t,n)})}function V(e){return new Promise(t=>{J(e,t)})}function W(e){return new Promise((t,n)=>{J(e,e=>{Object.prototype.isPrototypeOf.call(Error.prototype,e)?n(e):t(e)})})}function Z(e){M(e)}function ee(e=0){return new Promise(t=>{J(B(e),t)})}function te(e,...t){return e(...t)}function ne(...e){return Promise.all(e)}n.d(t,"fixed",(function(){return a})),n.d(t,"dropping",(function(){return f})),n.d(t,"sliding",(function(){return s})),n.d(t,"CLOSED",(function(){return w})),n.d(t,"chan",(function(){return U})),n.d(t,"timedChan",(function(){return B})),n.d(t,"transChan",(function(){return G})),n.d(t,"send",(function(){return K})),n.d(t,"recv",(function(){return V})),n.d(t,"sendAsync",(function(){return Y})),n.d(t,"recvAsync",(function(){return J})),n.d(t,"recvOrThrow",(function(){return W})),n.d(t,"close",(function(){return Z})),n.d(t,"isClosed",(function(){return $})),n.d(t,"isBuffered",(function(){return H})),n.d(t,"isTimed",(function(){return X})),n.d(t,"select",(function(){return C})),n.d(t,"selectAsync",(function(){return P})),n.d(t,"value",(function(){return D})),n.d(t,"channel",(function(){return L})),n.d(t,"config",(function(){return g.d})),n.d(t,"SET_IMMEDIATE",(function(){return g.b})),n.d(t,"MESSAGE_CHANNEL",(function(){return g.a})),n.d(t,"SET_TIMEOUT",(function(){return g.c})),n.d(t,"go",(function(){return te})),n.d(t,"sleep",(function(){return ee})),n.d(t,"join",(function(){return ne})),n.d(t,"EMPTY",(function(){return r.a}))}])},function(e,t){e.exports=function(e){var t;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(t=e[Symbol.asyncIterator]))return t.call(e);if(Symbol.iterator&&null!=(t=e[Symbol.iterator]))return t.call(e)}throw new TypeError("Object is not async iterable")}},function(e,t,n){"use strict";n.r(t);var r=n(0);const o=Symbol("multitap/taps");function c(e,t,n=!1){return Object(r.go)(async()=>{for(;;){const o=await Object(r.recv)(e);if(o===r.CLOSED){n||Object(r.close)(t);break}if(!await Object(r.send)(t,o))break}}),t}function u(e,t,n=0,o=0){const c=Object(r.chan)(n),u=Object(r.chan)(o);return Object(r.go)(async()=>{for(;;){const n=await Object(r.recv)(t);if(n===r.CLOSED){Object(r.close)(c),Object(r.close)(u);break}await Object(r.send)(e(n)?c:u,n)}}),[c,u]}function i(e,t=0){const n=Object(r.chan)(t),o=e.slice();return Object(r.go)(async()=>{for(;0!==o.length;){const{value:e,channel:t}=await Object(r.select)(o);e!==r.CLOSED?await Object(r.send)(n,e):o.splice(o.indexOf(t),1)}Object(r.close)(n)}),n}function a(e,...t){let n=0===t.length?[2]:t;if(1===n.length&&(o=n[0],"[object Number]"===Object.prototype.toString.call(o)&&isFinite(o))){const e=n[0];n=[];for(let t=0;t<e;t++)n.push(0)}var o;const c=n.map(e=>Object(r.chan)(e)),u=Object(r.chan)();let i=0;function a(){0==--i&&Object(r.sendAsync)(u)}return Object(r.go)(async()=>{for(;;){const t=await Object(r.recv)(e);if(t===r.CLOSED){for(const e of c)Object(r.close)(e);break}i=c.length;for(const e of c)Object(r.sendAsync)(e,t,a);await Object(r.recv)(u)}}),c}function f(e,t=Object(r.chan)()){return e[o]||function(e){Object.defineProperty(e,o,{configurable:!0,writable:!0,value:[]});const t=Object(r.chan)();let n=0;function c(){0==--n&&Object(r.sendAsync)(t)}Object(r.go)(async()=>{for(;;){const u=await Object(r.recv)(e);if(u===r.CLOSED||0===e[o].length){delete e[o];break}n=e[o].length;for(const t of e[o])Object(r.sendAsync)(t,u,c);await Object(r.recv)(t)}})}(e),e[o].includes(t)||e[o].push(t),t}function s(e,t){const n=e[o];if(n){const o=n.indexOf(t);-1!==o&&(n.splice(o,1),0===n.length&&Object(r.sendAsync)(e))}}function l(e){e[o]&&(e[o]=[],Object(r.sendAsync)(e))}function d(e,t,n=0){const o=Object(r.chan)(n),c=t.length,u=[],i=[],a=Object(r.chan)();let f;for(let e=0;e<c;e++)i[e]=(e=>t=>{u[e]=t,0==--f&&Object(r.sendAsync)(a,u.slice())})(e);return Object(r.go)(async()=>{for(;;){f=c;for(let e=0;e<c;e++)Object(r.recvAsync)(t[e],i[e]);const n=await Object(r.recv)(a);for(const e of n)if(e===r.CLOSED){Object(r.close)(o);for(const e of t)Object(r.close)(e);return}await Object(r.send)(o,e(...n))}}),o}var b=n(1),m=n.n(b);function p(e,t,n){const o=Object(r.chan)();return Object(r.go)(async()=>{let c=n;var u,i=!0,a=!1;try{for(var f,s,l=m()(t);i=(f=await l.next()).done,s=await f.value,!i;i=!0){c=e(c,s)}}catch(e){a=!0,u=e}finally{try{i||null==l.return||await l.return()}finally{if(a)throw u}}Object(r.sendAsync)(o,c,()=>Object(r.close)(o))}),o}function v(e,t=Object(r.chan)(e.length)){return Object(r.go)(async()=>{for(const n of e)await Object(r.send)(t,n);Object(r.close)(t)}),t}function y(e,t=[]){return p((e,t)=>(e.push(t),e),e,t)}n.d(t,"map",(function(){return d})),n.d(t,"merge",(function(){return i})),n.d(t,"partition",(function(){return u})),n.d(t,"pipe",(function(){return c})),n.d(t,"split",(function(){return a})),n.d(t,"tap",(function(){return f})),n.d(t,"untap",(function(){return s})),n.d(t,"untapAll",(function(){return l})),n.d(t,"reduce",(function(){return p})),n.d(t,"toChannel",(function(){return v})),n.d(t,"toArray",(function(){return y}))}])}));