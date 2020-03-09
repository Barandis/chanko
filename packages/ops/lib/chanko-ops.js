(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ops"] = factory();
	else
		root["ops"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/asyncIterator.js":
/*!*******************************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/asyncIterator.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) {
      method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      method = iterable[Symbol.iterator];
      if (method != null) return method.call(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
}

module.exports = _asyncIterator;

/***/ }),

/***/ "../csp/lib/chanko-csp.js":
/*!********************************!*\
  !*** ../csp/lib/chanko-csp.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else {}})(this,function(){return(/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&typeof value==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s="./src/index.js");/******/}(/************************************************************************/ /******/{/***/"../../node_modules/@babel/runtime/helpers/AsyncGenerator.js":/*!********************************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/AsyncGenerator.js ***!
  \********************************************************************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var AwaitValue=__webpack_require__(/*! ./AwaitValue */"../../node_modules/@babel/runtime/helpers/AwaitValue.js");function AsyncGenerator(gen){var front,back;function send(key,arg){return new Promise(function(resolve,reject){var request={key:key,arg:arg,resolve:resolve,reject:reject,next:null};if(back){back=back.next=request;}else{front=back=request;resume(key,arg);}});}function resume(key,arg){try{var result=gen[key](arg);var value=result.value;var wrappedAwait=value instanceof AwaitValue;Promise.resolve(wrappedAwait?value.wrapped:value).then(function(arg){if(wrappedAwait){resume(key==="return"?"return":"next",arg);return;}settle(result.done?"return":"normal",arg);},function(err){resume("throw",err);});}catch(err){settle("throw",err);}}function settle(type,value){switch(type){case"return":front.resolve({value:value,done:true});break;case"throw":front.reject(value);break;default:front.resolve({value:value,done:false});break;}front=front.next;if(front){resume(front.key,front.arg);}else{back=null;}}this._invoke=send;if(typeof gen["return"]!=="function"){this["return"]=undefined;}}if(typeof Symbol==="function"&&Symbol.asyncIterator){AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this;};}AsyncGenerator.prototype.next=function(arg){return this._invoke("next",arg);};AsyncGenerator.prototype["throw"]=function(arg){return this._invoke("throw",arg);};AsyncGenerator.prototype["return"]=function(arg){return this._invoke("return",arg);};module.exports=AsyncGenerator;/***/},/***/"../../node_modules/@babel/runtime/helpers/AwaitValue.js":/*!****************************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/AwaitValue.js ***!
  \****************************************************************************************************/ /*! no static exports found */ /***/function(module,exports){function _AwaitValue(value){this.wrapped=value;}module.exports=_AwaitValue;/***/},/***/"../../node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js":/*!*************************************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js ***!
  \*************************************************************************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var AwaitValue=__webpack_require__(/*! ./AwaitValue */"../../node_modules/@babel/runtime/helpers/AwaitValue.js");function _awaitAsyncGenerator(value){return new AwaitValue(value);}module.exports=_awaitAsyncGenerator;/***/},/***/"../../node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js":/*!************************************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js ***!
  \************************************************************************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var AsyncGenerator=__webpack_require__(/*! ./AsyncGenerator */"../../node_modules/@babel/runtime/helpers/AsyncGenerator.js");function _wrapAsyncGenerator(fn){return function(){return new AsyncGenerator(fn.apply(this,arguments));};}module.exports=_wrapAsyncGenerator;/***/},/***/"../../node_modules/process/browser.js":/*!**********************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/process/browser.js ***!
  \**********************************************************************************/ /*! no static exports found */ /***/function(module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};/***/},/***/"../../node_modules/setimmediate/setImmediate.js":/*!********************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/setimmediate/setImmediate.js ***!
  \********************************************************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global,process){(function(global,undefined){"use strict";if(global.setImmediate){return;}var nextHandle=1;// Spec says greater than zero
var tasksByHandle={};var currentlyRunningATask=false;var doc=global.document;var registerImmediate;function setImmediate(callback){// Callback can either be a function or a string
if(typeof callback!=="function"){callback=new Function(""+callback);}// Copy function arguments
var args=new Array(arguments.length-1);for(var i=0;i<args.length;i++){args[i]=arguments[i+1];}// Store and register the task
var task={callback:callback,args:args};tasksByHandle[nextHandle]=task;registerImmediate(nextHandle);return nextHandle++;}function clearImmediate(handle){delete tasksByHandle[handle];}function run(task){var callback=task.callback;var args=task.args;switch(args.length){case 0:callback();break;case 1:callback(args[0]);break;case 2:callback(args[0],args[1]);break;case 3:callback(args[0],args[1],args[2]);break;default:callback.apply(undefined,args);break;}}function runIfPresent(handle){// From the spec: "Wait until any invocations of this algorithm started before this one have completed."
// So if we're currently running a task, we'll need to delay this invocation.
if(currentlyRunningATask){// Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
// "too much recursion" error.
setTimeout(runIfPresent,0,handle);}else{var task=tasksByHandle[handle];if(task){currentlyRunningATask=true;try{run(task);}finally{clearImmediate(handle);currentlyRunningATask=false;}}}}function installNextTickImplementation(){registerImmediate=function(handle){process.nextTick(function(){runIfPresent(handle);});};}function canUsePostMessage(){// The test against `importScripts` prevents this implementation from being installed inside a web worker,
// where `global.postMessage` means something completely different and can't be used for this purpose.
if(global.postMessage&&!global.importScripts){var postMessageIsAsynchronous=true;var oldOnMessage=global.onmessage;global.onmessage=function(){postMessageIsAsynchronous=false;};global.postMessage("","*");global.onmessage=oldOnMessage;return postMessageIsAsynchronous;}}function installPostMessageImplementation(){// Installs an event handler on `global` for the `message` event: see
// * https://developer.mozilla.org/en/DOM/window.postMessage
// * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
var messagePrefix="setImmediate$"+Math.random()+"$";var onGlobalMessage=function(event){if(event.source===global&&typeof event.data==="string"&&event.data.indexOf(messagePrefix)===0){runIfPresent(+event.data.slice(messagePrefix.length));}};if(global.addEventListener){global.addEventListener("message",onGlobalMessage,false);}else{global.attachEvent("onmessage",onGlobalMessage);}registerImmediate=function(handle){global.postMessage(messagePrefix+handle,"*");};}function installMessageChannelImplementation(){var channel=new MessageChannel();channel.port1.onmessage=function(event){var handle=event.data;runIfPresent(handle);};registerImmediate=function(handle){channel.port2.postMessage(handle);};}function installReadyStateChangeImplementation(){var html=doc.documentElement;registerImmediate=function(handle){// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
var script=doc.createElement("script");script.onreadystatechange=function(){runIfPresent(handle);script.onreadystatechange=null;html.removeChild(script);script=null;};html.appendChild(script);};}function installSetTimeoutImplementation(){registerImmediate=function(handle){setTimeout(runIfPresent,0,handle);};}// If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
var attachTo=Object.getPrototypeOf&&Object.getPrototypeOf(global);attachTo=attachTo&&attachTo.setTimeout?attachTo:global;// Don't get fooled by e.g. browserify environments.
if({}.toString.call(global.process)==="[object process]"){// For Node.js before 0.9
installNextTickImplementation();}else if(canUsePostMessage()){// For non-IE10 modern browsers
installPostMessageImplementation();}else if(global.MessageChannel){// For web workers, where supported
installMessageChannelImplementation();}else if(doc&&"onreadystatechange"in doc.createElement("script")){// For IE 6–8
installReadyStateChangeImplementation();}else{// For older browsers
installSetTimeoutImplementation();}attachTo.setImmediate=setImmediate;attachTo.clearImmediate=clearImmediate;})(typeof self==="undefined"?typeof global==="undefined"?this:global:self);/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(/*! ./../webpack/buildin/global.js */"../../node_modules/webpack/buildin/global.js"),__webpack_require__(/*! ./../process/browser.js */"../../node_modules/process/browser.js"));/***/},/***/"../../node_modules/timers-browserify/main.js":/*!*****************************************************************************************!*\
  !*** /home/barandis/Development/projects/chanko/node_modules/timers-browserify/main.js ***!
  \*****************************************************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){var scope=typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||window;var apply=Function.prototype.apply;// DOM APIs, for completeness
exports.setTimeout=function(){return new Timeout(apply.call(setTimeout,scope,arguments),clearTimeout);};exports.setInterval=function(){return new Timeout(apply.call(setInterval,scope,arguments),clearInterval);};exports.clearTimeout=exports.clearInterval=function(timeout){if(timeout){timeout.close();}};function Timeout(id,clearFn){this._id=id;this._clearFn=clearFn;}Timeout.prototype.unref=Timeout.prototype.ref=function(){};Timeout.prototype.close=function(){this._clearFn.call(scope,this._id);};// Does not start the time, just sets up the members needed.
exports.enroll=function(item,msecs){clearTimeout(item._idleTimeoutId);item._idleTimeout=msecs;};exports.unenroll=function(item){clearTimeout(item._idleTimeoutId);item._idleTimeout=-1;};exports._unrefActive=exports.active=function(item){clearTimeout(item._idleTimeoutId);var msecs=item._idleTimeout;if(msecs>=0){item._idleTimeoutId=setTimeout(function onTimeout(){if(item._onTimeout)item._onTimeout();},msecs);}};// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */"../../node_modules/setimmediate/setImmediate.js");// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate=typeof self!=="undefined"&&self.setImmediate||typeof global!=="undefined"&&global.setImmediate||this&&this.setImmediate;exports.clearImmediate=typeof self!=="undefined"&&self.clearImmediate||typeof global!=="undefined"&&global.clearImmediate||this&&this.clearImmediate;/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(/*! ./../webpack/buildin/global.js */"../../node_modules/webpack/buildin/global.js"));/***/},/***/"../../node_modules/webpack/buildin/global.js":/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/ /*! no static exports found */ /***/function(module,exports){var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||new Function("return this")();}catch(e){// This works if the window reference is available
if(typeof window==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/***/"../xduce-tools/lib/chanko-xduce-tools.js":/*!************************************************!*\
  !*** ../xduce-tools/lib/chanko-xduce-tools.js ***!
  \************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else{}})(this,function(){return(/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&typeof value==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s="./src/index.js");/******/}(/************************************************************************/ /******/{/***/"./src/index.js":/*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/ /*! exports provided: protocols, iterator, isIterable, kv, key, value, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce, toFunction, toReducer, toTransducer, transduce, sequence, into, asArray, asObject, asString, asIterator, compose, isArray, isFunction, isGeneratorFunction, isNumber, isObject, isString */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var modules_protocol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/protocol */"./src/modules/protocol.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"protocols",function(){return modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"];});/* harmony import */var modules_iteration__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! modules/iteration */"./src/modules/iteration.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"iterator",function(){return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isIterable",function(){return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["isIterable"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"kv",function(){return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["kv"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"key",function(){return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["key"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"value",function(){return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["value"];});/* harmony import */var modules_reduction__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! modules/reduction */"./src/modules/reduction.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"complete",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["complete"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"uncomplete",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["uncomplete"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isCompleted",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["isCompleted"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ensureCompleted",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ensureCompleted"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ensureUncompleted",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ensureUncompleted"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"reduce",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["reduce"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"toFunction",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toFunction"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"toReducer",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toReducer"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"toTransducer",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toTransducer"];});/* harmony import */var modules_transformation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! modules/transformation */"./src/modules/transformation.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"transduce",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["transduce"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"sequence",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["sequence"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"into",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["into"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"asArray",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asArray"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"asObject",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asObject"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"asString",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asString"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"asIterator",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asIterator"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"compose",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["compose"];});/* harmony import */var modules_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! modules/utils */"./src/modules/utils.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isArray",function(){return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isArray"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isFunction",function(){return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isFunction"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isGeneratorFunction",function(){return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isGeneratorFunction"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isNumber",function(){return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isNumber"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isObject",function(){return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isObject"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isString",function(){return modules_utils__WEBPACK_IMPORTED_MODULE_4__["isString"];});/**
         * Copyright (c) 2020 Thomas J. Otterson
         *
         * This software is released under the MIT License.
         * https://opensource.org/licenses/MIT
         */ /**
         * The central module for the transducer engine.
         *
         * All of the functions in this module deal directly with transducers. But
         * first, let's talk about the protocols that are going to be referred to
         * throughout many of the function discussions.
         *
         * ## Protocols
         *
         * One of the key selling points for transducers is that the same transducer can
         * be used on any type of collection. Rather than having to write a new `map`
         * function (for example) for every kind of collection - one for an array, one
         * for a string, one for an iterator, etc. - there is a single `map` transducer
         * that will work with all of them, and potentially with *any* kind of
         * collection. This is possible implementing *protocols* on the collections.
         *
         * A protocol in JavaScript is much like an interface in languages like Java and
         * C#. It is a commitment to providing a certain functionality under a certain
         * name. ES2015 has seen the introduction of an `iterator` protocol, for
         * example, and language support for it (the new `for...of` loop can work with
         * any object that correctly implements the `iterator` protocol).
         *
         * To support transduction, Xduce expects collections to implement four
         * protocols.
         *
         * - `iterator`: a function that returns an iterator (this one is built in to
         *   ES6 JavaScript)
         * - `transducer/init`: a function that returns a new, empty instance of the
         *   output collection
         * - `transducer/step`: a function that takes an accumulator (the result of the
         *   reduction so far) and the next input value, and then returns the
         *   accumulator with the next input value added to it
         * - `transducer/result`: a function that takes the reduced collection and
         *   returns the final output collection
         *
         * `iterator` is the built-in JavaScript protocol. When called, it is expected
         * to return an iterator over the implementing collection. This iterator is an
         * object that has a `next` function. Each call to `next` is expected to return
         * an object with `value` and `done` properties, which respectively hold the
         * next value of the iterator and a boolean to indicate whether the iteration
         * has reached its end. (This is a simplified explanation; see
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators|this MDN page}
         * for more detailed information.)
         *
         * `transducer/init` (referred to from now on as `init`) should be a function
         * that takes no parameters and returns a new, empty instance of the output
         * collection. This is the function that defines how to create a new collection
         * of the correct type.
         *
         * `transducer/step` (referred to from now on as `step`) should be a function
         * that takes two parameters. These parameters are the result of the reduction
         * so far (and so is a collection of the output type) and the next value from
         * the input collection. It must return the new reduction result, with the next
         * value incorporated into it. This is the function that defines how reduce a
         * value onto the collection.
         *
         * `transducer/result` (referred to from now on as `result`) should be a
         * function that takes one parameter, which is the fully reduced collection. It
         * should return the final output collection. This affords a chance to make any
         * last-minute adjustments to the reduced collection before returning it.
         *
         * Arrays, strings, and objects are all given support for all of these
         * protocols. Other collections will have to provide their own (though it should
         * be noted that since `iterator` is built-in, many third-party collections will
         * already implement this protocol). As an example, let's add transducer support
         * to a third-party collection, the `Immutable.List` collection from
         * {@link https://facebook.github.io/immutable-js/|immutable-js}.
         *
         * ```
         * Immutable.List.prototype[protocols.init] = () => Immutable.List().asMutable();
         * Immutable.List.prototype[protocols.step] = (acc, input) => acc.push(input);
         * Immutable.List.prototype[protocols.result] = (value) => value.asImmutable();
         * ```
         *
         * `Immutable.List` already implements `iterator`, so we don't have to do it
         * ourselves.
         *
         * The `init` function returns an empty mutable list. This is important for
         * immutable-js because its default lists are immutable, and immutable lists
         * mean that a new list has to be created with every reduction step. It would
         * work fine, but it's quite inefficient.
         *
         * The `step` function adds the next value to the already-created list.
         * `Immutable.List` provides a `push` function that works like an array's
         * `push`, except that it returns the new list with the value pushed onto it.
         * This is perfect for our `step` function.
         *
         * The `result` function converts the now-finished mutable list into an
         * immutable one, which is what's going to be expected if we're transducing
         * something into an `Immutable.List`. In most cases, `result` doesn't have to
         * do any work, but since we're creating an intermediate representation of our
         * collection type here, this lets us create the collection that we actually
         * want to output. (Without `result`, we would have to use immutable lists all
         * the way through, creating a new one with each `step` function, since we
         * wouldn't be able to make this converstion at the end.)
         *
         * With those protocols implemented on the prototype, `Immutable.List`
         * collections can now support any transduction we can offer.
         *
         * ### Protocols
         *
         * After talking a lot about protocols and showing how they're properties added
         * to an object, it's probably pretty obvious that there's been no mention of
         * what the actual names of those properties are. That's what
         * `{@link module:xduce.protocols|protocols}` is for.
         *
         * The best way to use these keys can be seen in the immutable-js example above.
         * Instead of worrying about the name of the key for the `init` protocol, the
         * value of `protocols.init` is used.
         *
         * `{@link module:xduce.protocols|protocols}` defines these protocol property
         * names.
         *
         * - `init`
         * - `step`
         * - `result`
         * - `reduced`: used internally to mark a collection as already reduced
         * - `value`: used internally to provide the actual value of a reduced
         *   collection
         *
         * The final two values don't have a lot of use outside the library unless
         * you're writing your own transducers.
         *
         * ## How Objects Are Treated
         *
         * Objects bear some thought because regularly, they aren't candidates for
         * iteration (and therefore for transduction in general). They don't have a very
         * straightforward idea of order, and they have *two* pieces of data (key and
         * value) for every element instead of one. Yet it's undeniable that at least
         * for most transformations, being able to apply them to objects would be quite
         * handy.
         *
         * For that reason, special support is provided end-to-end for objects.
         *
         * ### Object iteration
         *
         * Iterating over an object will produce one object per property of the original
         * object. An order is imposed; by default, this order the same as the ordering
         * of keys in post-ES6 Javascript:
         *
         * 1. Keys that are integers, in ascending numerical order
         * 2. All other string keys, in the order in which they were added to the object
         * 3. All symbol keys, in the order in which they were added to the object
         *
         * The `{@link module:xduce.iterator|iterator}` function can be passed a sorting
         * function that can sort keys in any other way.
         *
         * The result of the iteration, is a set of objects each with a single property,
         * one for each enumerable own property on the original object. The standard
         * ordering for objects (from ES6 onward) is as follows:
         *
         * ### Transforming objects
         *
         * While iterating over objects in this way is straightforward, the syntax of
         * objects makes it ugly to transform them in this form. Here's an example of a
         * transformation function that makes the object's keys upper-case and adds one
         * to each of the values:
         *
         * ```
         * function transform(obj) {
         *   const key = Object.keys(obj)[0];
         *   const value = obj[key];
         *   return { [key.toUpperCase()]: value + 1 };
         * }
         * ```
         *
         * A helper function named `{@link module:xduce.property|property}` can improve
         * this by handling the boilerplate.
         *
         * ```
         * function improvedTransform(obj) {
         *   const {k, v} = property(obj);
         *   return { [k.toUpperCase()]: v + 1 };
         * }
         * ```
         *
         * ### Reducing objects
         *
         * The built-in reducers (for arrays, objects, strings, and iterators)
         * understand these single-property objects and reduce them in the proper manner
         * without any further work.
         *
         * That's it for object-object reduction. Converting between objects and other
         * types is another matter.
         *
         * Every transducer function except for `{@link module:xduce.sequence|sequence}`
         * is capable of turning an object into a different type of collection, turning
         * a different type of collection into an object, or both. Objects are different
         * because they're the only "collections" that have two different pieces of data
         * per element. Because of this, we have to have a strategy on how to move from
         * one to another.
         *
         * Transducing an object into a different type is generally pretty easy. If an
         * object is converted into an array, for instance, the array elements will each
         * be single-property objects, one per property of the original object.
         *
         * Strings are a different story, since encoding a single-property object to a
         * string isn't possible (because every "element" of a string has to be a single
         * character). Strings that are produced from objects will instead just be the
         * object values, concatenated. Because objects are iterated in a particular
         * order, this conversion will always produce the same string, but except in
         * some very specific cases there really isn't a lot of use for this conversion.
         *
         * ```
         * const obj = {a: 1, b: 2};
         *
         * let result = asArray(obj);
         * // result = [{a: 1}, {b: 2}]
         *
         * result = asIterator(obj);
         * // result is an iterator with two values: {a: 1} and {b: 2}
         *
         * result = into(Immutable.List(), obj)
         * // result is an immutable list with two elements: {a: 1} and {b: 2}
         *
         * result = asString(obj);
         * // result is '12'
         * ```
         *
         * The opposite conversion depends on the values inside the collections. If
         * those values are objects, then the result is an object with all of the
         * objects combined (if more than one has the same key, the last one is the one
         * that's kept). Otherwise, keys are created for each of the elements, starting
         * with `0` and increasing from there.
         *
         * This means that converting an object to any non-string collection and back
         * produces the original object.
         *
         * ```
         * let result = asObject([{a: 1}, {b: 2}]);
         * // result = {a: 1, b: 2}
         *
         * result = asObject([1, 2, 3]);
         * // result = {0: 1, 1: 2, 2: 3}
         *
         * result = asObject('hello');
         * // result = {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}
         * ```
         *
         * @module xduce
         */ /**
         * An iterable as defined by JavaScript.
         *
         * @typedef JsIterable
         * @memberof module:xduce
         * @property {module:xduce.JsIterableFunction} Symbol.iterator A function that
         *     produces an iterator when called.
         */ /**
         * A function that produces an iterator. This is the characteristic property of
         * a JavaScript iterable.
         *
         * @callback JsIterableFunction
         * @memberof module:xduce
         * @returns {module:xduce.Iterator} An iterator over the
         *     {@link module:xduce.JsIterable} that produced it.
         */ /**
         * An iterable as defined by this library. Since it provides specific support
         * for objects, this type is merely a normal JavaScript iterable *or* a plain
         * object.
         *
         * @typedef {(Object|module:xduce.JsIterable)} Iterable
         * @memberof module:xduce
         */ /**
         * A generic iterator. This conforms to the `iterator` protocol in that it has
         * a `{@link module:xduce.NextFunction|next}` function that produces
         * {@link module:xduce.NextValue|`iterator`-compatible objects}.
         *
         * @typedef Iterator
         * @memberof module:xduce
         * @property {module:xduce.NextFunction} next A function that, when called,
         *     returns the next iterator value.
         */ /**
         * The function that satisfies the `iterator` protocol on an object. When
         * called, it returns the next value in the iterator.
         *
         * @callback NextFunction
         * @memberof module:xduce
         * @returns {module:xduce.NextValue} The next value in the iterator.
         */ /**
         * The object returned by a call to `{@link module:xduce.NextFunction|next}`.
         * It indicates whether the iterator is complete and, if not, what the next
         * value is.
         *
         * @typedef {object} NextValue
         * @memberof module:xduce
         * @property {*} value The value that the iterator has provided.
         * @property {boolean} done Indicates whether the iterator has completed. If
         *     this is `true`, then `value` will be `undefined` and every subsequent
         *     call to `{@link module:xduce.NextFunction|next}` will continue to produce
         *     the same value. If it's `false`, then `value` represents the net value in
         *     the iterator, and the next call to
         *     `{@link module:xduce.NextFunction|next}` will continue to produce the
         *     next value.
         */ /**
         * A sort function for the keys of an object. This conforms to the normal sort
         * function used in `Array.prototype.sort`.
         *
         * @callback SortFunction
         * @memberof module:xduce
         * @property {*} a The first value to be sorted.
         * @property {*} b The second value to be sorted.
         * @returns {number} Either `-1` if `a > b`, `1` if `a < b`, or `0` if `a ===
         *     b`.
         */ /**
         * A function that can have an iterator created for it.
         *
         * @callback IterableFunction
         * @memberof module:xduce
         * @param {number} [index] The number of times that
         *     `{@link module:xduce.NextFunction|next}` has been called on the
         *     function's iterator. This will start at `0` for the first call to
         *     `{@link module:xduce.NextFunction|next}` and increase by one for each
         *     subsequent call.
         * @param {*} [last] The return value of the function the last time
         *     `{@link module:xduce.NextFunction|next}` was called on its iterator. For
         *     the first call, this is set to `undefined`.
         * @returns {*} The return value for that iteration.
         */ /**
         * An object representation of a single-property object, but using one property
         * for the key and one for the value. This format is easier to use in
         * transformation functions.
         *
         * @typedef {object} PropertyObject
         * @memberof module:xduce
         * @property {(String|Symbol)} k The key of the single-property object that this
         *     object represents.
         * @property {*} v The value of the single-property object that this object
         *     represents.
         */ /**
         * An init function, which provides a new, empty instance of a collection.
         *
         * @callback InitFunction
         * @memberof module:xduce
         * @returns {*} A new, empty instance of a collection.
         */ /**
         * A step function, that reduces a collection and a new value to the
         * collection with the value added.
         *
         * @callback StepFunction
         * @memberof module:xduce
         * @param {*} acc An accumulated value to which the new value is being added.
         * @param {*} value The new value to be added to the accumulated value.
         * @returns {*} The accumulated value with the new value integrated into it.
         */ /**
         * A result function that optionally modifies the input collection and then
         * returns it. This is used at the end of a reduction to afford a last chance
         * for the transducer to modify the output value.
         *
         * @callback ResultFunction
         * @memberof module:xduce
         * @param {*} input The value to be modified before being output.
         * @returns {*} The modified value to be output by a transducer.
         */ /**
         * An object with all of the information necessary to reduce values into a
         * particular kind of collection. These are passed to
         * {@link module:xduce.reduce|reduce} and like functions.
         *
         * @typedef Reducer
         * @memberof module:xduce
         * @property {module:xduce.InitFunction} [Symbol.for("transducer/init")] The
         *     reducer's init function.
         * @property {module:xduce.StepFunction} Symbol.for("transducer/step") The
         *     reducer's step function.
         * @property {module:xduce.ResultFunction} Symbol.for("transducer/result") The
         *     reducer's result function.
         */ /**
         * A collection that can have values reduced into it. Since this library
         * provides explicit support for arrays, objects, and strings, those three are
         * added to the {@link module:xduce.Reducer} type to define this.
         *
         * @typedef {(Array|String|Object|module:xduce.Reducer)} Reducible
         * @memberof module:xduce
         */ /**
         * A collection that supports not only the regular iteraion over its contents,
         * but also reduction of values into it. It is an intersection type combining
         * {@link module:xduce.Iterable|Iterable} and
         * {@link module:xduce.Reducible|Reducible}.
         *
         * @typedef ExplicitIterableReducible
         * @memberof module:xduce
         * @property {module:xduce.JsIterableFunction} Symbol.iterator A function that
         *     produces an iterator when called.
         * @property {module:xduce.InitFunction} [Symbol.for("transducer/init")] The
         *     collection's init function.
         * @property {module:xduce.StepFunction} Symbol.for("transducer/step") The
         *     collection's step function.
         * @property {module:xduce.ResultFunction} Symbol.for("transducer/result") The
         *     collection's result function.
         */ /**
         * The actual type used by reducible collections in this library. It takes the
         * property-based definition and adds built-in types that are specially
         * supported by the library.
         *
         * @typedef {(Array|Object|String|module:xduce.ExplicitIterableReducible)}
         *     IterableReducible
         * @memberof module:xduce
         */ /**
         * A function that transforms data and can be composed with other transducers
         * into a single transducer. The transducers themselves are provided by other
         * libraries; the only involvement of this librar is as a consumer of
         * transducers.
         *
         * Transducers work by having step functions that are known via protocol, and it
         * is these step functions that take a value at a time to be transformed as
         * their arguments. The arguments to the transducers themselves are other
         * transducers that are then composed into a single transducer, which is then
         * returned. The values that are produced are seldom of consequence to the end
         * user; these functions exist to be passed to other functions that deal with
         * transducers.
         *
         * @callback Transducer
         * @memberof module:xduce
         * @param {module:xduce.TransducerFunction} xform A transducer to chain this
         *     transducer to.
         * @return {module:xduce.TransducerFunction} A new transducer consisting of the
         *     composition of this one and `xform`.
         */ /**
         * An object containing all of the necessary function properties for
         * transforming data and then reducing it into an output value. This is the
         * same as {@link module:xduce.Reducer|Reducer} except that the `init` property
         * is not optional.
         *
         * @typedef Transducer
         * @memberof module:xduce
         * @property {module:xduce.InitFunction} Symbol.for("transducer/init") The
         *     transducer's init function.
         * @property {module:xduce.StepFunction} Symbol.for("transducer/step") The
         *     transducer's step function.
         * @property {module:xduce.ResultFunction} Symbol.for("transducer/result") The
         *     transducer's result function.
         */ /***/},/***/"./src/modules/iteration.js":/*!**********************************!*\
        !*** ./src/modules/iteration.js ***!
        \**********************************/ /*! exports provided: iterator, isIterable, kv, key, value */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"iterator",function(){return iterator;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isIterable",function(){return isIterable;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"kv",function(){return kv;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"key",function(){return key;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"value",function(){return value;});/* harmony import */var modules_protocol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/protocol */"./src/modules/protocol.js");/* harmony import */var modules_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! modules/utils */"./src/modules/utils.js");/**
         * Copyright (c) 2020 Thomas J. Otterson
         *
         * This software is released under the MIT License.
         * https://opensource.org/licenses/MIT
         */ /**
         * Creates an iterator over an object.
         *
         * Details about this function are included in the documentation for
         * {@link module:xduce.iterator|iterator}.
         *
         * @param {object} obj The object being iterated over.
         * @param {module:xduce.SortFunction} [sortFn] An optional function used to sort
         *     the object keys before iteration. If it isn't provided, the keys will be
         *     sorted in the same order as `Object.keys(obj)` would sort them.
         * @returns {module:xduce.Iterator} An iterator over the properties of `obj`.
         * @private
         */function objectIterator(obj,sortFn){return function*(){const keys=typeof sortFn==="function"?Object.keys(obj).sort(sortFn):Object.keys(obj);let index=0;while(index<keys.length){const k=keys[index++];yield{[k]:obj[k]};}}();}/**
         * A convenience function that returns the first key and value in an object as
         * a two-property object, one property for the key and one for the value. This
         * is intended to work with the values provided by an object iterator, as the
         * syntax of objects doesn't work very nicely with single-property objects.
         *
         * ```
         * const obj = { c: 1, a: 2, b: 3 };
         * const iter = iterator(obj);
         *
         * let value = iter.next().value;
         * console.log(value);             // -> { c: 1 }
         * console.log(property(value));   // -> { k: "c", v: 1 }
         *
         * value = iter.next().value;
         * console.log(value);             // -> { a: 2 }
         * console.log(property(value));   // -> { k: "a", v: 2 }
         *
         * value = iter.next().value;
         * console.log(value);             // -> { b: 3 }
         * console.log(property(value));   // -> { k: "b", v: 3 }
         * ```
         *
         * @memberof module:xduce
         * @param {object} obj The object whose first property is returned.
         * @return {module:xduce.PropertyObject} The property as a two-property object.
         */function kv(obj){const key=Object.keys(obj)[0];return{k:key,v:obj[key]};}/**
         * A convenience function that returns the key of the first property of an
         * object. This is meant for use with object iterators to more conveniently
         * access parts of the single-property objects that they emit.
         *
         * @memberof module:xduce
         * @param {object} obj The object whose first key is returned.
         * @return {(String|Symbol)} The key of the object's first property.
         */function key(obj){return kv(obj).k;}/**
         * A convenience function that returns the value of the first property of an
         * object. This is meant for use with object iterators to more conveniently
         * access parts of the single-property objects that they emit.
         *
         * @memberof module:xduce
         * @param {object} obj The object whose first value is returned.
         * @return {*} The value of the object's first property.
         */function value(obj){return kv(obj).v;}/**
         * Creates an iterator over a function.
         *
         * Details about this function are included in the documentation for
         * {@link module:xduce.iterator|iterator}.
         *
         * @param {module:xduce.IterableFunction} fn The function to iterate over.
         * @returns {module:xduce.Iterator} An iterator over the return values of `fn`.
         * @private
         */function functionIterator(fn){return function*(){let current;let index=0;for(;;){current=fn(index++,current);if(typeof current==="undefined"){break;}yield current;}}();}/**
         * Creates an iterator over the provided value.
         *
         * For collections that implement the iterable protocol, it's as simple as
         * returning the iterator already defined for that collection.
         *
         * ```
         * const iter = iterator([1, 2, 3]);
         * console.log(iter.next().value);   // -> 1
         * console.log(iter.next().value);   // -> 2
         * console.log(iter.next().value);   // -> 3
         * console.log(iter.next().done);    // -> true
         * ```
         *
         * Objects are specially supported to return an iterator as well, even though
         * they don't natively support the iterable protocol. The iterator's `next`
         * function provides single-property objects, one for each property in the
         * original object, ordered in the standard post-ES6 order for iterating over
         * object keys:
         *
         * 1. Keys that are integers, in ascending numerical order
         * 2. All other string keys, in the order in which they were added to the object
         * 3. All symbol keys, in the order in which they were added to the object
         *
         * If a different order is needed, this function takes a second argument, a sort
         * function, that affects objects only. It is a standard function that would be
         * passed to `Array.prototype.sort` and sorts the keys accordingly.
         *
         * ```
         * const alpha = (a, b) => (a < b ? -1 : b < a ? 1 : 0);
         * const obj = { c: 1, a: 2, b: 3 };
         *
         * const objIter = iterator(obj);
         * console.log(objIter.next().value);   // -> { c: 1 }
         * console.log(objIter.next().value);   // -> { a: 2 }
         * console.log(objIter.next().value);   // -> { b: 3 }
         *
         * const sortedIter = iterator(obj, alpha);
         * console.log(objIter.next().value);   // -> { a: 2 }
         * console.log(objIter.next().value);   // -> { b: 3 }
         * console.log(objIter.next().value);   // -> { c: 1 }
         * ```
         *
         * Additionally, there is special support for passing a function to this
         * function. The iterator returned runs that function for each call to `next`.
         * That function is provided two arguments: the index (starting at `0` for the
         * first call to `next` and increasing by 1 for each call to `next` after) and
         * the return value of the previous call to `next` (for the first call to
         * `next`, this will be `undefined`). The iteration will continue until the
         * first time the iterated function returns `undefined`; at that point the
         * iterator will terminate and return `{ done: true }` off subsequent `next`
         * calls.
         *
         * ```
         * const constIter = iterator(() => 6);
         * console.log(constIter.next().value);   // -> 6
         * console.log(constIter.next().value);   // -> 6
         * // This will continue forever, as long as `next` keeps getting called
         *
         * const indexIter = iterator(x => x * x);
         * console.log(indexIter.next().value);   // -> 0;
         * console.log(indexIter.next().value);   // -> 1;
         * console.log(indexIter.next().value);   // -> 4;
         * console.log(indexIter.next().value);   // -> 9;
         * // This will continue forever or until the numbers get too big for
         * // JavaScript to deal wtih
         *
         * // Using a default value for the `last` parameter, which sets its value
         * // for the first run when it is normally `undefined`
         * const lastIter = iterator((x, last = 1) => last * (x + 1)); // factorial!
         * console.log(lastIter.next().value);   // -> 1
         * console.log(lastIter.next().value);   // -> 2
         * console.log(lastIter.next().value);   // -> 6
         * console.log(lastIter.next().value);   // -> 24
         * // Again, runs forever, though factorials get big very quickly
         *
         * // Iterators terminate when the function returns `undefined`
         * const stopIter = iterator(x => x < 2 ? x : undefined);
         * console.log(stopIter.next().value);   // -> 0
         * console.log(stopIter.next().value);   // -> 1
         * console.log(stopIter.next().done);    // -> true
         * ```
         *
         * If the provided value is not actually iterable (or an object or a function),
         * `null` is returned in place of the iterator.
         *
         * @memberof module:xduce
         * @param {*} value The value to create an iterator over.
         * @param {module:xduce.SortFunction} [sortFn] An optional sort function for
         *     sorting the keys of an object before iteration. It is ignored if `value`
         *     isn't a plain object.
         * @returns {module:xduce.Iterator} An iterator over `value`.
         */function iterator(value,sortFn=null){switch(true){case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value[Symbol.iterator]):case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isGeneratorFunction"])(value[Symbol.iterator]):return value[Symbol.iterator]();case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value):return functionIterator(value);case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value):return objectIterator(value,sortFn);default:return null;}}/**
         * Determines whether the passed object is iterable, in terms of what 'iterable'
         * means to this library. In other words, values implementing the `iterable`
         * protocol and plain objects return `true`, while everything else returns
         * `false`. This does not return `true` for functions even though
         * {@link module:xduce.iterator|iterator} can produce an iterator for them,
         * because not all functions work well with
         * {@link module:xduce.iterator|iterator}.
         *
         * @param {*} value The value to test for iterability.
         * @return {boolean} Either `true` if the value is iterable
         *     (`{@link module:xduce.iterator}` will return an iterator for it) or
         *     `false` if it is not.
         * @private
         */function isIterable(value){return Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(value,"iterator")||Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value);}/***/},/***/"./src/modules/protocol.js":/*!*********************************!*\
        !*** ./src/modules/protocol.js ***!
        \*********************************/ /*! exports provided: protocols, isImplemented */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"protocols",function(){return protocols;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isImplemented",function(){return isImplemented;});/* harmony import */var modules_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/utils */"./src/modules/utils.js");/**
         * Copyright (c) 2020 Thomas J. Otterson
         *
         * This software is released under the MIT License.
         * https://opensource.org/licenses/MIT
         */ /**
         * Protocols for iteration and reduction.
         *
         * The names for these protocols came from a discussion thread
         * ({@link https://github.com/cognitect-labs/transducers-js/issues/20}) from a
         * time when transducers were very much in the forefront. It's the closest thing
         * there is to a standard, so it was adopted here.
         *
         * These are the same symbols as available in my transducer library. They are
         * publicly available from there.
         *
         * @module xduce/protocol
         * @private
         */ /**
         * The mapping of protocol names to their respective property key names. The
         * values of this map will depend on whether symbols are available.
         *
         * @typedef {object} ProtocolMap
         * @memberof module:xduce
         * @property {Symbol} init The `transducer/init` protocol. This is used
         *     to mark functions that initialize a target collection before adding items
         *     to it.
         * @property {Symbol} step The `transducer/step` protocol. This is used
         *     to mark functions that are used in the transducer's step process, where
         *     objects are added to the target collection one at a time.
         * @property {Symbol} result The `transducer/result` protocol. This is
         *     used to mark functions that take the final result of the step process and
         *     return the final form to be output. This is optional; if the transducer
         *     does not want to transform the final result, it should just return the
         *     result of its chained transducer's `result` function.
         * @property {Symbol} reduced The `transducer/reduced` protocol. The
         *     presence of this key on an object indicates that its transformation has
         *     been completed. It is used internally to mark collections whose
         *     transformations conclude before every object is iterated over (as in
         *     `{@link xduce.take}` transducers.) It is of little use beyond transducer
         *     authoring.
         * @property {Symbol} value The `transducer/value` protocol. This is
         *     used internally to mark properties that contain the value of a reduced
         *     transformation. It is of little use beyond transducer authoring.
         */ /**
         * The mapping of protocol names to their respective property key names.
         *
         * @type {module:xduce.ProtocolMap}
         * @memberof module:xduce
         */const protocols=Object.create(null,{init:{value:Symbol.for("transducer/init")},step:{value:Symbol.for("transducer/step")},result:{value:Symbol.for("transducer/result")},reduced:{value:Symbol.for("transducer/reduced")},value:{value:Symbol.for("transducer/value")}});function isImplemented(obj,protocol){if(obj==null){return false;}switch(protocol){case"iterator":return Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(obj[Symbol.iterator])||Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isGeneratorFunction"])(obj[Symbol.iterator]);case"asyncIterator":return Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isGeneratorFunction"])(obj[Symbol.asyncIterator]);case"reduced":case"value":return Object.getOwnPropertySymbols(obj).includes(protocols[protocol]);default:return Object(modules_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(obj[protocols[protocol]]);}}/***/},/***/"./src/modules/reduction.js":/*!**********************************!*\
        !*** ./src/modules/reduction.js ***!
        \**********************************/ /*! exports provided: init, step, result, toReducer, ARRAY_REDUCER, OBJECT_REDUCER, STRING_REDUCER, toTransducer, toFunction, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"init",function(){return init;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"step",function(){return step;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"result",function(){return result;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"toReducer",function(){return toReducer;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ARRAY_REDUCER",function(){return ARRAY_REDUCER;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"OBJECT_REDUCER",function(){return OBJECT_REDUCER;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"STRING_REDUCER",function(){return STRING_REDUCER;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"toTransducer",function(){return toTransducer;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"toFunction",function(){return toFunction;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"complete",function(){return complete;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"uncomplete",function(){return uncomplete;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isCompleted",function(){return isCompleted;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ensureCompleted",function(){return ensureCompleted;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ensureUncompleted",function(){return ensureUncompleted;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"reduce",function(){return reduce;});/* harmony import */var modules_protocol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/protocol */"./src/modules/protocol.js");/* harmony import */var modules_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! modules/utils */"./src/modules/utils.js");/* harmony import */var modules_iteration__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! modules/iteration */"./src/modules/iteration.js");/**
         * Copyright (c) 2020 Thomas J. Otterson
         *
         * This software is released under the MIT License.
         * https://opensource.org/licenses/MIT
         */ /**
         * A set of functions related to the producing reducer objects, marking
         * completed objects, and performing general reduction operations.
         *
         * @module reduction
         * @private
         */ /**
         * Returns an init function for a collection. This is a function that returns a
         * new, empty instance of the collection in question. If the collection doesn't
         * support reduction, `null` is returned. This makes conditionals a bit easier
         * to work with.
         *
         * In order to support the conversion of functions into reducers, function
         * support is also provided.
         *
         * @param {*} collection A collection to create an init function for. This can
         *     be anything that supports the iteration protocol or a plain object.
         * @return {module:xduce.InitFunction} A function that, when called, returns an
         *     initial version of the provided collection. If the provided collection is
         *     not iterable, then `null` is returned.
         * @private
         */function init(collection){switch(true){case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection,"init"):return collection[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init];case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(collection):return()=>"";case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(collection):return()=>[];case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(collection):return()=>({});case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(collection):return()=>{throw Error("init not available");};default:return null;}}/**
         * Returns a step function for a collection. This is a function that takes an
         * accumulator and a value and returns the result of reducing the value into the
         * accumulator. If the collection doesn't support reduction, `null` is returned.
         * The returned function itself simply reduces the input into the target
         * collection without modifying it.
         *
         * In order to support the conversion of functions into reducers, function
         * support is also provided.
         *
         * @param {*} collection A collection to create a step function for. This can be
         *     anything that supports the iteration protocol, a plain object, or a
         *     function.
         * @return {module:xduce.StepFunction} A reduction function for the provided
         *     collection that simply adds an element to the target collection without
         *     modifying it. If the provided collection is not iterable, `null` is
         *     returned.
         * @private
         */function step(collection){switch(true){case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection,"step"):return collection[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step];case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(collection):return(acc,input)=>{const value=Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(input)?Object(modules_iteration__WEBPACK_IMPORTED_MODULE_2__["kv"])(input).v:input;return acc+value;};case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(collection):return(acc,input)=>{acc.push(input);return acc;};case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(collection):return(acc,input)=>{let value=input;if(!Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(input)){// if the input isn't an object, turn it into an object with a
// numerical key one greater than the max key already in the
// accumulator
const max=Object.keys(acc).reduce((a,b)=>Math.max(a,b),-1);value={[max+1]:input};}const{k,v}=Object(modules_iteration__WEBPACK_IMPORTED_MODULE_2__["kv"])(value);acc[k]=v;return acc;};case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(collection):return(acc,input)=>collection(acc,input);default:return null;}}/**
         * Returns a result function for a collection. This is a function that performs
         * any final processing that should be done on the result of a reduction. If the
         * collection doesn't support reduction, `null` is returned.
         *
         * In order to support the conversion of functions into reducers, function
         * support is also provided.
         *
         * @param {*} collection A collection to create a step function for. This can be
         *     anything that supports the iteration protocol, a plain object, or a
         *     function.
         * @return {module:xduce.ResultFunction} A function that, when given a reduced
         *     collection, produces the final output. If the provided collection is not
         *     iterable, `null` will be returned.
         * @private
         */function result(collection){switch(true){case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection,"result"):return collection[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result];case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(collection):case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(collection):case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(collection):case Object(modules_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(collection):return value=>value;default:return null;}}/**
         * Creates a reducer object from a function or from a built-in reducible type
         * (array, object, or string).
         *
         * To create a reducer for arrays, objects, or strings, simply pass an empty
         * version of that collection to this function (e.g., `toReducer([])`).
         *
         * The notable use for this function though is to turn a reduction function into
         * a reducer object. The function is a function of two parameters, an
         * accumulator and a value, and returns the accumulator with the value in it.
         * This is exactly the same kind of function that is passed to reduction
         * functions like JavaScript's `Array.prototype.reduce` and Lodash's `_.reduce`.
         *
         * Note in particular that the output of this reducer does not need to be a
         * collection. It can be anything. While transducing normally involves
         * transforming one collection into another, it need not be so. For example,
         * here is a reducer that will result in summing of the collection values.
         *
         * ```
         * import { toReducer, reduce } from "@chanko/xduce";
         *
         * const sumReducer = toReducer((acc, input) => acc + input);
         * const sum = reduce([1, 2, 3, 4, 5], sumReducer, 0);
         * console.log(sum);   // -> 15
         * ```
         *
         * This can be combined with transducers as well, as in this calculation of the
         * sum of the *squares* of the collection values.
         *
         * ```
         * import { toReducer, transduce } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const sumReducer = toReducer((acc, input) => acc + input);
         * const sum = transduce([1, 2, 3, 4, 5], map(x => x * x), sumReducer, 0);
         * console.log(sum);   // -> 55
         * ```
         *
         * @memberof module:xduce
         * @param {*} collection An iterable collection or a reducer function.
         * @return {object} An object containing protocol properties for init, step, and
         *     result. This object is suitable for use as a reducer object (one provided
         *     to `{@link xduce.reduce|reduce}` or `{@link xduce.transduce|transduce}`).
         *     If the provided collection is not iterable, all of the properties of this
         *     object will be `null`.
         */function toReducer(collection){return Object.freeze({[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]:init(collection),[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step]:step(collection),[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result]:result(collection)});}/**
         * A reducer object for arrays.
         *
         * @type {module:xduce.Reducer}
         * @private
         */const ARRAY_REDUCER=toReducer([]);/**
         * A reducer object for objects.
         *
         * @type {module:xduce.Reducer}
         * @private
         */const OBJECT_REDUCER=toReducer({});/**
         * A reducer object for strings.
         *
         * @type {module:xduce.Reducer}
         * @private
         */const STRING_REDUCER=toReducer("");/**
         * Creates a transducer from a function and a transducer to chain it to.
         *
         * This is in most respects just like {@link module:xduce.toReducer|toReducer},
         * with two notable differences. One is that it requires a transducer to chain
         * to, and it does the chaining as a part of creating the new transducer. The
         * other is that it includes a usable `init` function, where passing a function
         * to {@link module:xduce.toReducer|toReducer} would create an init function
         * that throws an error if it's called.
         *
         * This function applies the given function as the `step` function of the
         * returned transducer, and the `init` and `result` functions simply call the
         * same functions in the next transducer down the chain. This is precisely what
         * *most* transducers want...`init` and `result` functions are normally handled
         * by the reducer at the end of the transducer chain...but in the rare case
         * when `init` or `result` must do more than this, the transducer must be
         * created manually.
         *
         * This function does not automatically chain the `step` function to the next
         * one down the line, as that can be done in any number of different ways. Thus
         * the function itself should call the `step` function in `xform` in whatever
         * way is appropriate.
         *
         * @memberof module:xduce
         * @param {module:xduce.StepFunction} fn The step function for the transducer.
         * @param {module:xduce.Transducer} xform The next transducer object in the
         *     chain.
         * @returns {module:xduce.Transducer} A new transducer, chaining the supplied
         *     function to the supplied transducer.
         */function toTransducer(fn,xform){return{[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init](){return xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();},[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step]:fn,[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value){return xform[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value);}};}/**
         * Creates a reduction function from a transducer and a reducer.
         *
         * This produces a function that's suitable for being passed into other
         * libraries' reduce functions, such as JavaScript's `Array.prototype.reduce` or
         * Lodash's `_.reduce`. It requires both a transformer and a reducer because
         * reduction functions for those libraries must know how to do both. The reducer
         * can be a standard reducer object like the ones sent
         * to`{@link module:xduce.transduce|transduce}` or
         * `{@link module:xduce.reduce|reduce}`, or it can be a plain function that
         * takes two parameters and returns the result of reducing the second parameter
         * into the first.
         *
         * If there is no need for a transformation, then pass in the
         * `{@link module:transducers.identity|identity}` transducer.
         *
         * @memberof module:xduce
         * @param {module:xduce.Reducer} xform A transducer object whose step
         *     function will become the returned reduction function.
         * @param {(module:xduce.StepFunction|module:xduce.Reducer)} reducer A
         *     reducer that knows how to reduce values into an output collection. This
         *     can either be a reducing function or a transducer object whose `step`
         *     function knows how to perform this reduction.
         * @returns {module:xduce.StepFunction} A function that handles both the
         *     transformation and the reduction of a value onto a target function.
         */function toFunction(xform,reducer){const r=typeof reducer==="function"?toReducer(reducer):reducer;const result=xform(r);return result[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step].bind(result);}/**
         * Marks a value as complete.
         *
         * This is done by wrapping the value. This means three things: first, a
         * complete object may be marked as complete again; second, a complete value
         * isn't usable without being uncompleted first; and third any type of value
         * (including `undefined`) may be marked as complete.
         *
         * @memberof module:xduce
         * @param {*} value The value to be completed.
         * @return {*} A completed version of the provided value. This reduction is
         *     achieved by wrapping the value in a marker object.
         */function complete(value){return{[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]:true,[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].value]:value};}/**
         * Removes the complete status from a completed value.
         *
         * This function is intended to be used when it's certain that a value is
         * already marked as complete. If it is not, `undefined` will be returned
         * instead of the value.
         *
         * @memberof module:xduce
         * @param {*} value The value to be uncompleted.
         * @return {*} An uncompleted version of the provided value. If the value was
         *     not complete in the first place, `undefined` will be returned instead.
         */function uncomplete(value){return value===null||value===void 0?void 0:value[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].value];}/**
         * Determines whether a value is marked as complete.
         *
         * @memberof module:xduce
         * @param {*} value The value to test for its complete status.
         * @return {boolean} Either `true` if the value is complete, or `false` if it is
         *     not.
         */function isCompleted(value){return!!(value===null||value===void 0?void 0:value[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]);}/**
         * Makes sure that a value is marked as complete; if it is not, it will be
         * marked as complete.
         *
         * This differs from {@link module:xduce.complete|complete} in that
         * if the value is already complete, this function won't complete it again.
         * Therefore thus function can't be used to make a value complete multiple
         * times.
         *
         * @memberof module:xduce
         * @param {*} value The value to be completed.
         * @return {*} If the value is already complete, then the value is simply
         *     returned. Otherwise, a completed version of the value is returned.
         */function ensureCompleted(value){return isCompleted(value)?value:complete(value);}/**
         * Removes the complete status from a value, as long as it actually is complete.
         *
         * This does a check to make sure the value passed in actually is complete. If
         * it isn't, the value itself is returned. It's meant to be used when the
         * completed status is uncertain.
         *
         * @memberof module:xduce
         * @param {*} value The complete value to be uncompleted.
         * @return {*} If the value is already uncompleted, the value is simply
         *     returned. Otherwise an uncompleted version of the value is returned.
         */function ensureUncompleted(value){return isCompleted(value)?uncomplete(value):value;}/**
         * Reduces the elements of the input collection through a reducer into an output
         * collection.
         *
         * This is the lowest-level of the transduction functions. In fact, this one is
         * so low-level that it doesn't have a lot of use in normal operation. It's more
         * useful for writing your own transformation functions.
         *
         * `reduce` doesn't assume that there's even a transformation. It requires an
         * initial collection and a reducer object that is matched to that initial
         * collection. The reducer object must implement the `step` and `result`
         * protocols, which instruct `reduce` on how to build up the collection. The
         * reducer may implement a transformation as well, but all that's important here
         * is that it can do the reduction.
         *
         * The input collection need only implement `iterable`. It is not necessary for
         * the input and output collections to be of the same type; as long as the input
         * implements `iterable` and the reducer implements `step` and `result`
         * appropriate to the type of the `init` collection, then any translation
         * between collection types can occur.
         *
         * The normal course of operation will be to call
         * {@link module:xduce.transduce|transduce} instead, as that function makes it
         * easy to combine transformations with reductions and can optionally figure out
         * the initial collection itself.
         *
         * @memberof module:xduce
         * @param {*} collection The input collection. The only requirement of this
         *     collection is that it implement the `iterable` protocol. Special support
         *     is provided by the library for objects, so they can be used as well.
         * @param {module:xduce.Reducer} reducer An object that implements the `step`
         *     and `result` protocols. This object must know how to produce an output
         *     collection through those protocol functions.
         * @param {*} init a collection of the same type as the output collection. It
         *     need not be empty; if it is not, the existing elements are retained as
         *     the input collection is reduced into it.
         * @return {*} A new collection, consisting of the `init` collection with all of
         *     the elements of the `collection` collection reduced into it.
         */function reduce(collection,reducer,init){if(collection==null){return null;}const iter=Object(modules_iteration__WEBPACK_IMPORTED_MODULE_2__["iterator"])(collection);if(!iter){throw Error(`Cannot reduce an instance of ${collection.constructor.name}`);}let acc=init;let step=iter.next();while(!step.done){acc=reducer[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](acc,step.value);if(isCompleted(acc)){acc=uncomplete(acc);break;}step=iter.next();}return reducer[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](acc);}/***/},/***/"./src/modules/transformation.js":/*!***************************************!*\
        !*** ./src/modules/transformation.js ***!
        \***************************************/ /*! exports provided: transduce, sequence, into, asArray, asObject, asString, asIterator, compose */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"transduce",function(){return transduce;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"sequence",function(){return sequence;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"into",function(){return into;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"asArray",function(){return asArray;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"asObject",function(){return asObject;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"asString",function(){return asString;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"asIterator",function(){return asIterator;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"compose",function(){return compose;});/* harmony import */var modules_protocol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/protocol */"./src/modules/protocol.js");/* harmony import */var modules_iteration__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! modules/iteration */"./src/modules/iteration.js");/* harmony import */var modules_reduction__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! modules/reduction */"./src/modules/reduction.js");/* harmony import */var modules_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! modules/utils */"./src/modules/utils.js");/**
         * Copyright (c) 2020 Thomas J. Otterson
         *
         * This software is released under the MIT License.
         * https://opensource.org/licenses/MIT
         */ /**
         * Functions dealing with the actual transformation of values and for choosing
         * the reducer during transduction.
         *
         * @module xduce/transformation
         * @private
         */ /**
         * Creates an iterator that is also a transducer, transforming its collection
         * one element at a time. This is the actual output of the
         * {@link module:xduce.asIterator|asIterator} function, as well as the output of
         * the {@link module:xduce.sequence|sequence} function when the input is an
         * iterator.
         *
         * The end user need not be concerned with the type of the output iterator in
         * these circumstances; the end user need only care that the output is, in fact,
         * an iterator and can be expected to act like one. For this reason, this
         * function and the type it returns are not exported.
         *
         * This object supports non-1-to-1 correspondences between input and output
         * values. For example, a filter transformation might return fewer output
         * elements than were in the input collection, while a repeat transformation
         * will return more. In either case, `next` in this class will return one
         * element per call.
         *
         * @param {module:xduce.Iterable} collection the input collection that the
         *     produced iterator will be iterating over.
         * @param {module:xduce.TransducerFunction} xform A function that creates a transducer
         *     object that defines the transformation being done to the iterator's
         *     elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function.
         * @return {module:xduce.Iterator} An iterator that will transform its input
         *     elements using the transducer function as its
         *     `{@link module:xduce.NextFunction|next}` function is called.
         * @private
         */function transducingIterator(collection,xform){const stepReducer={[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](xiter,input){xiter.items.unshift(input);return xiter;},[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](value){return value;}};const iter=Object(modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"])(collection);const xf=xform(stepReducer);let completed=false;// This array is the key to working properly with step functions that return
// more than one value. All of them are put into the items array. As long as
// this array has values in it, the `next` function will return one value
// popped from it rather than running the step function again.
const items=[];// The `next` function here is rather simple. If there is already something in
// the `items` array, it's returned. If not, the `step` function is run and,
// if that results in a value in the `items` array, it's returned. Otherwise
// an object with `{ done: true }` is returned.
function next(){if(items.length===0){step();}if(items.length===0){return{done:true};}return{value:items.pop(),done:false};}// This is where most of the work happens. It gets the next value from the
// input collection and runs it through the reduction step functions. If that
// results in a value, it's given to the stepper object (which adds it to the
// `items` array); otherwise the while loop continues to the next element of
// the input collection. This ensures that there's something for the `next`
// function to return each time it's called.
//
// If the collection has finished or if the step function returns a completed
// object (which take will do after its limit of elements has been reached,
// for instance), the iteration is finished by calling the result function.
function step(){const count=items.length;while(items.length===count){const stepValue=iter.next();if(stepValue.done||completed){xf[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](result);break;}completed=Object(modules_reduction__WEBPACK_IMPORTED_MODULE_2__["isCompleted"])(xf[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](result,stepValue.value));}}// The resulting object is an iterator, so to satisfy the iterable protocol
// we just return that object itself
function sIterator(){return result;}// The `result` name is hoisted and used in functions further up, so we have
// to retain that name and can't just return the object without naming it
const result={items,next,step,[Symbol.iterator]:sIterator};return result;}/**
         * Transforms the elements of the input collection and reduces them into an
         * output collection.
         *
         * This is the lowest-level of the transduction functions that is likely to see
         * regular use. It does not assume anything about the reducer, as it asks for it
         * to be passed explicitly. This means that any kind of collection can be
         * produced, since the reducer is not tied to the input collection in any way.
         *
         * `transduce` also will accept an initial value for the resulting collection as
         * the optional last parameter. If this parameter isn't present, then the
         * initial value is determined from the transducer init protocol property on the
         * reducer. Note however that many reducers may not provide an initial value,
         * and in those cases it will *have* to be passed as a parameter.
         *
         * ```
         * import { protocols as p, transduce } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x + 1);
         *
         * const arrayReducer = {
         *   [p.init]() { return []; },
         *   [p.result](x) { return x; },
         *   [p.step](acc, x) {
         *     acc.push(x);
         *     return acc;
         *   }
         * };
         *
         * const stringReducer = {
         *   [p.init]() { return ''; },
         *   [p.result](x) { return x; },
         *   [p.step](acc, x) { return acc + x; }
         * };
         *
         * let result = transduce([1, 2, 3, 4, 5], xform, arrayReducer);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = transduce([1, 2, 3, 4, 5], xform, stringReducer);
         * console.log(result);   // -> "23456"
         *
         * result = transduce('12345', xform, arrayReducer);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = transduce('12345', xform, stringReducer);
         * console.log(result);   // -> "23456"
         * ```
         *
         * These examples illustrate a number of important concepts. First of all, the
         * transducer function is independent of the type of the collection; the same
         * transducer function is used no matter the type of input or output
         * collections. Secondly, two reducers are defined. These are objects that
         * conform to the transducer protocol (see the documentation on
         * `{@link module:xduce.protocols}`) and that know how to produce the output
         * collection of choice. In this case, the reducers know how to create new
         * arrays and strings (the `init` protocol) and how to add elements to arrays
         * and strings (the `step` protocol). Because these reducers do have `init`
         * protocol properties, the `transduce` calls do not require explicit initial
         * collections.
         *
         * The final point is that `transduce` can accept any kind of iterable
         * collection, and by passing in the proper reducer, it can produce any kind of
         * output collection. The same `transduce` function and the same map transformer
         * is used in all four examples, despite the input/output combination being
         * different in all four.
         *
         * The `reducer` parameter *can* be a reducer function instead of a reducer
         * object. If this is the case, the `init` parameter is required because a
         * function cannot define an initial value itself.
         *
         * The `init` collection doesn't have to be empty. If it isn't, the elements
         * that are already in it are retained and the transformed input elements are
         * reduced into the collection normally.
         *
         * Of course, the examples are not really necessary - the same thing could be
         * accomplished using `{@link module:xduce.into|into}` without having to create
         * the reducers (strings and arrays passed to `{@link module:xduce.into|into}`
         * as targets know how to reduce themselves already).
         *
         * @memberof module:xduce
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterable`
         *     protocol. Special support is provided by the library for objects, so they
         *     can also be used.
         * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function.
         * @param {(module:xduce.StepFunction|module:xduce.Reducer)} reducer Either a
         *     function or a reducer object that implements the transducer protocols
         *     (`init` is  only required if the `init` parameter is not present). This
         *     object must know how to produce an output collection through its `step`
         *     and `result` protocol functions. If this parameter is a function, then it
         *     is turned into a valid reducer object.
         * @param {module:xduce.Reducible} [init] A collection of the same type as the
         *     output collection. If this is not present, then the reducer's `init`
         *     protocol function is called instead to get the initial collection. If it
         *     is present and not empty, then the existing elements remain and the
         *     transformed input collection elements are added to it.
         * @return {*} A collection of a type determined by the passed reducer. The
         *     elements of this collection are the results from the transformer function
         *     being applied to each element of the input collection.
         */function transduce(collection,xform,reducer,init){const r=Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(reducer)?Object(modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toReducer"])(reducer):reducer;const i=init!==null&&init!==void 0?init:r[modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"].init]();const xf=xform?xform(r):r;return Object(modules_reduction__WEBPACK_IMPORTED_MODULE_2__["reduce"])(collection,xf,i);}/**
         * Transforms the elements of the input collection and reduces them into a new
         * array.
         *
         * The transformer is optional. If it isn't present, this function just converts
         * the input collection into an array.
         *
         * ```
         * import { asArray } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x + 1);
         *
         * let result = asArray([1, 2, 3, 4, 5], xform);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = asArray('12345', xform);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = asArray('12345');
         * console.log(result);   // -> [1, 2, 3, 4, 5]
         *
         * result = asArray({a: 1, b: 2});
         * console.log(result);   // -> [{ a: 1 }, { b: 2 }]
         * ```
         *
         * @memberof module:xduce
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterable`
         *     protocol. Special support is provided by the library for objects, so they
         *     can also be used.
         * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function. If this isn't present, the input collection will
         *     simply be reduced into an array without transformation.
         * @return {Array} An array containing all of the transformed values from the
         *     input collection elements.
         */function asArray(collection,xform){return transduce(collection,xform,modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ARRAY_REDUCER"]);}/**
         * Transforms the elements of the input collection and reduces them into a new
         * object.
         *
         * The transformer is optional. If it isn't present, this function just converts
         * the input collection into an object. When this happens, if the input
         * collection is not an object or an array of objects, numbers starting at `0`
         * will be used as keys for the values provided by the input collection.
         *
         * ```
         * import { asObject, kv } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const fn = prop => {
         *   const { k, v } = kv(prop);
         *   return { [k]: v + 1 };
         * }
         * const xform = map(fn);
         *
         * let result = asObject({ a: 1, b: 2 }, xform);
         * console.log(result);   // -> { a: 2, b: 3 }
         *
         * result = asObject([{ a: 1 }, { b: 2 }], xform);
         * console.log(result);   // -> { a: 2, b: 3 }
         *
         * result = asObject([1, 2, 3, 4, 5]);
         * console.log(result);   // -> { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 }
         *
         * result = asObject([{ a: 1 }, { b: 2 }]);
         * console.log(result);   // -> { a: 1, b: 2 }
         *
         * result = asObject("hello");
         * console.log(result);   // -> { 0: "h", 1: "e", 2: "l", 3: "l", 4: "o" }
         * ```
         *
         * @memberof module:xduce
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterable`
         *     protocol. Special support is provided by the library for objects, so they
         *     can also be used.
         * @param {module:xduce.Tranducer} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function. If this isn't present, the input collection will
         *     simply be reduced into an object without transformation.
         * @return {Object} An object containing all of the transformed values from the
         *     input collection elements.
         */function asObject(collection,xform){return transduce(collection,xform,modules_reduction__WEBPACK_IMPORTED_MODULE_2__["OBJECT_REDUCER"]);}/**
         * Transforms the elements of the input collection and reduces them into a new
         * string.
         *
         * The transformer is optional. If it isn't present, this function just converts
         * the input collection into an string. If this is the case and the input
         * collection is an object, only the values will be concatenated into a string.
         *
         * Otherwise, transforming objects into strings only makes much sense if the
         * transducer produces only a single output from each of the objects key/value
         * pairs.
         *
         * ```
         * import { transduce, key } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x.toUpperCase());
         *
         * let result = asString('hello', xform);
         * console.log(result);   // -> "HELLO"
         *
         * result = asString(['h', 'e', 'l', 'l', 'o'], xform);
         * console.log(result);   // -> "HELLO"
         *
         * result = asString({ a: 1, c: 2, b: 3 }, map(key));
         * console.log(result);   // -> "acb"
         *
         * result = asString([1, 2, 3, 4, 5]);
         * console.log(result);   // -> "12345"
         *
         * result = asString({ a: 1, c: 2, b: 3 });
         * console.log(result);   // -> "123"
         * ```
         *
         * @memberof module:xduce
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterable`
         *     protocol. Special support is provided by the library for objects, so they
         *     can also be used.
         * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function. If this isn't present, the input collection will
         *     simply be reduced into a string without transformation.
         * @return {String} A string containing all of the transformed values from the
         *     input collection elements.
         */function asString(collection,xform){return transduce(collection,xform,modules_reduction__WEBPACK_IMPORTED_MODULE_2__["STRING_REDUCER"]);}/**
         * Transforms the elements of the input collection and reduces them into a new
         * iterator.
         *
         * The transformer is optional. If it isn't present, this function just converts
         * the input collection into an iterator.
         *
         * *(The results here are shown passed through `asArray` because there's no
         * printable representation of an iterator to show. The `asArray` calls are for
         * demonstration purposes only.)*
         *
         * ```
         * import { asIterator, asArray } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x + 1);
         * function* five() {
         *   for (let i = 1; i <= 5; ++i) {
         *     yield i;
         *   }
         * };
         *
         * let result = asIterator(five(), xform);
         * console.log(asArray(result));   // -> [2, 3, 4, 5, 6]
         *
         * result = asIterator([1, 2, 3, 4, 5], xform);
         * console.log(asArray(result));   // -> [2, 3, 4, 5, 6]
         *
         * result = asIterator([1, 2, 3, 4, 5]);
         * console.log(asArray(result));   // -> [1, 2, 3, 4, 5]
         *
         * result = asIterator({a: 1, b: 2});
         * console.log(asArray(result));   // -> [{ a: 1 }, { b: 2 }]
         * ```
         *
         * @memberof module:xduce
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterable`
         *     protocol. Special support is provided by the library for objects, so they
         *     can also be used.
         * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function. If this isn't present, the input collection will
         *     simply be reduced into an iterator without transformation.
         * @return {module:xduce.Iterator} An iterator containing all of the transformed
         *     values from the input collection elements.
         */function asIterator(collection,xform){return xform?transducingIterator(collection,xform):Object(modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"])(collection);}/**
         * Transforms the elements of the input collection and reduces them into a new
         * collection of the same type.
         *
         * This is the highest level of the three main transduction functions
         * (`sequence`, `{@link module:xduce.into|into}`, and
         * `{@link module:xduce.transduce|transduce}`). It creates a new collection of
         * the same type as the input collection and reduces the transformed elements
         * into it. Additionally, unlike `{@link module:xduce.into|into}` and
         * `{@link module:xduce.transduce|transduce}`, this function is capable of
         * producing an iterator (as long as the input is an iterator).
         *
         * The input collection must not only implement the `iterator` protocol (as in
         * the last two functions) but also the `init`, `result`, and `step` transducer
         * protocols. Special support is provided for arrays, strings, objects, and
         * iterators, so they need not implement any protocol.
         *
         * The obvious limitation of this function is that the type of output collection
         * cannot be chosen. Since it is always the same as the input collection, this
         * function cannot be used to convert a collection into a different type.
         *
         * ```
         * import { sequence } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x + 1);
         *
         * let result = sequence([1, 2, 3, 4, 5], xform);
         * console.log(result);   // -> result = [2, 3, 4, 5, 6]
         *
         * result = sequence('12345', xform);
         * console.log(result);   // -> result = '23456'
         * ```
         *
         * These examples are identical to some of the examples from the `asX`
         * functions. Other examples are not possible with `sequence` because they have
         * different input and output collection types.
         *
         * @memberof module:xduce
         * @param {module:xduce.ReducibleIterable} collection The input collection. This
         *     must implement the `iterator`, `init`, `result`, and `step` protocols.
         *     Special support is provided for arrays, strings, objects, and iterators,
         *     so they do not have to implement any protocols.
         * @param {module:xduce.TransducerFunction} xform A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:xduce.transducers|transducers} module can produce a
         *     suitable transducer function.
         * @return {module:xduce.ReducibleIterable} A collection of the same type as the
         *     input collection, containing all of the transformed values from the input
         *     collection elements.
         */function sequence(collection,xform){switch(true){case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(collection):return asArray(collection,xform);case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(collection):return asObject(collection,xform);case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(collection):return asString(collection,xform);case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection,"step"):return transduce(collection,xform,collection);case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(collection,"iterator"):return asIterator(collection,xform);default:throw Error(`Cannot sequence collection: ${collection}`);}}/**
         * Transforms the elements of the input collection and reduces them into the
         * target collection.
         *
         * This is much like `{@link module:xduce.transduce|transduce}`, except that
         * instead of explicitly providing a reducer (and perhaps an initial
         * collection), the target collection acts as a reducer itself. This requires
         * that the collection implement the `init`, `result`, and `step` transducer
         * protocol functions.
         *
         * If no transducer function is provided, the input collection elements are
         * reduced into the target collection without being transformed. This can be
         * used to convert one kind of collection into another.
         *
         * ```
         * import { into } from "@chanko/xduce";
         * import { map } from "@chanko/transducers";
         *
         * const xform = map(x => x + 1);
         *
         * let result = into([], [1, 2, 3, 4, 5], xform);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = into("", [1, 2, 3, 4, 5], xform);
         * console.log(result);   // -> "23456"
         *
         * result = into([], "12345", xform);
         * console.log(result);   // -> [2, 3, 4, 5, 6]
         *
         * result = into("", "12345", xform);
         * console.log(result);   // -> "23456"
         * ```
         *
         * @memberof module:xduce
         * @param {module:xduce.Reducible} target The collection into which all of the
         *     transformed input collection elements will be reduced. This collection
         *     must implement the `init`, `result`, and `step` protocol functions from
         *     the transducer protocol. Special support is provided for arrays, strings,
         *     and objects, so they need not implement the protocol.
         * @param {module:xduce.Iterable} collection The input collection. The only
         *     requirement of this collection is that it implement the `iterator`
         *     protocol. Special support is provided by the library for objects, to they
         *     can also be used.
         * @param {module:xduce.TransducerFunction} [xform] A function that creates a transducer
         *     object that defines the transformation being done to the input
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} mnodule can produce a suitable
         *     transducer function. If this isn't present, the input collection will
         *     simply be reduced into the target collection without transformation.
         * @return {module:xduce.Reducible} The `target` collection, with all of the
         *     tranformed input collection elements reduced onto it.
         */function into(target,collection,xform){switch(true){case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isArray"])(target):return transduce(collection,xform,modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ARRAY_REDUCER"],target);case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(target):return transduce(collection,xform,modules_reduction__WEBPACK_IMPORTED_MODULE_2__["OBJECT_REDUCER"],target);case Object(modules_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(target):return transduce(collection,xform,modules_reduction__WEBPACK_IMPORTED_MODULE_2__["STRING_REDUCER"],target);case Object(modules_protocol__WEBPACK_IMPORTED_MODULE_0__["isImplemented"])(target,"step"):return transduce(collection,xform,target,target);default:throw Error(`Cannot reduce collection into ${target}: ${collection}`);}}/**
         * Composes two or more transducer functions into a single transducer function.
         *
         * Each function that takes a transducer function
         * (`{@link module:xduce.sequence|sequence}`, `{@link module:xduce.into|into}`,
         * etc.) is only capable of accepting one of them. If there is a need to have
         * several transducers chained together, then use `compose` to create a
         * transducer function that does what all of them do.
         *
         * NOTE: In functional programming, a compose function is generally ordered so
         * that the first-executed function is listed last. This is done in the opposite
         * way, with the first transducer executing first, etc. This is a more natural
         * ordering for transducer functions because there is a very real directional
         * pull of elements through a chain of composed transducer functions.
         *
         * ```
         * import { compose, sequence } from "@chanko/xduce";
         * import { map, filter, take } from "@chanko/transducers";
         *
         * const add1 = x => x + 1;
         * const odd = x => x % 2 !== 0;
         *
         * const xform = compose(map(add1), filter(odd), take(3));
         *
         * const result = sequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], xform);
         * console.log(result);   // -> [3, 5, 7];
         * ```
         *
         * @memberof module:xduce
         * @param {...module:xduce.TransducerFunction} fns One or more function that each create
         *     a transducer object that defines the transformation being done to a
         *     collection's elements. Any of the transducers in the
         *     {@link module:transducers|transducers} module can produce a suitable
         *     transducer function.
         * @return {module:xduce.TransducerFunction} A transducer function that produces a
         *     transducer object that performs *all* of the transformations of the
         *     objects produced by the input transducer functions.
         */function compose(...fns){const reversed=fns.reverse();return value=>reversed.reduce((acc,fn)=>fn(acc),value);}/***/},/***/"./src/modules/utils.js":/*!******************************!*\
        !*** ./src/modules/utils.js ***!
        \******************************/ /*! exports provided: isFunction, isGeneratorFunction, isObject, isNumber, isString, isArray */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isFunction",function(){return isFunction;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isGeneratorFunction",function(){return isGeneratorFunction;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isObject",function(){return isObject;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isNumber",function(){return isNumber;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isString",function(){return isString;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isArray",function(){return isArray;});/**
         * Copyright (c) 2020 Thomas J. Otterson
         *
         * This software is released under the MIT License.
         * https://opensource.org/licenses/MIT
         */ /**
         * A bunch of utility functions. These are all used by the library itself in
         * places, but many of them are suitable for general use as well.
         * ^
         * @module xduce/utils
         * @private
         */ /**
         * `Object`'s `toString` is explicitly used throughout because it could be
         * redefined in any subtype of `Object`.
         *
         * @function toString
         * @private
         */const toString=Object.prototype.toString;/**
         * Determines whether a value is a function.
         *
         * @memberof module:xduce
         * @param {*} x The value being tested to see if it is a function.
         * @return {boolean} Either `true` if the test value is a function or `false` if
         *     it is not.
         * @private
         */function isFunction(x){return toString.call(x)==="[object Function]";}/**
         * Determines whether a value is a generator function.
         *
         * @memberof module:xduce
         * @param {*} x The value being tested to see if it is a generator function.
         * @return {boolean} Either `true` if the test value is a generator function or
         *     `false` if it is not.
         * @private
         */function isGeneratorFunction(x){return toString.call(x)==="[object GeneratorFunction]";}/**
         * Determines whether a value is a plain object.
         *
         * This function returns `false` if the value is any other sort of built-in
         * object (such as an array or a string). It also returns `false` for any object
         * that is created by a constructor that is not `Object`'s constructor, meaning
         * that "instances" of custom "classes" will return `false`. Therefore it's only
         * going to return `true` for literal objects or those created with
         * `Object.create()`.
         *
         * @memberof module:xduce
         * @param {*} x The value being tested to see if it is a plain object.
         * @return {boolean} Either `true` if the test value is a plain object or
         *     `false` if it is not.
         */function isObject(x){// This check excludes built-in non-Object objects (such as Array and String).
// It also excludes objects created from ES2015 classes, but it does not
// exclude objects created with `new` on constructor functions (that happens
// below).
if(toString.call(x)!=="[object Object]"){return false;}// Prototype-less objects (created with `Object.create(null))` pass
const proto=Object.getPrototypeOf(x);if(proto===null){return true;}// Check to see whether the constructor of the tested object is the Object
// constructor. This is the only constructor that produces a "plain" object.
const ctor=Object.prototype.hasOwnProperty.call(proto,"constructor")&&proto.constructor;return typeof ctor==="function"&&ctor===Object;}/**
         * Determines whether a value is a number.
         *
         * This function will return `true` for any number literal or instance of
         * `Number` except for `Infinity` or `NaN`. It will return `false` for strings
         * that happen to also be numbers; the value must be an actual `Number` instance
         * or number literal to return `true`.
         *
         * @memberof module:xduce
         * @param {*} x The value being tested to see if it is a number.
         * @return {boolean} Either `true` if the test value is a finite number (not
         *     including string representations of numbers) or `false` if it is not.
         */function isNumber(x){return toString.call(x)==="[object Number]"&&isFinite(x);}/**
         * Determines whether a value is a string.
         *
         * Literal strings will return `true`, as will instances of the `String` object.
         *
         * @memberof module:xduce
         * @param {*} x The value being tested to see if it is a string.
         * @return {boolean} Either `true` if the test value is a string or `false` if
         *    it is not.
         */function isString(x){return toString.call(x)==="[object String]";}/**
         * Determines whether a value is an array.
         *
         * This function merely delegates to `Array.isArray`. It is provided for
         * consistency in calling style only.
         *
         * @function isArray
         * @memberof module:xduce
         * @param {*} x The value being tested to see if it is an array.
         * @return {boolean} Either `true` if the test value is an array or `false` if
         *     it is not.
         */const isArray=Array.isArray;/***/}/******/}));});/***/},/***/"./src/index.js":/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/ /*! exports provided: fixed, dropping, sliding, CLOSED, chan, timedChan, transChan, send, recv, sendAsync, recvAsync, recvOrThrow, close, isClosed, isBuffered, isTimed, select, selectAsync, value, channel, config, SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT, go, sleep, join, EMPTY */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var modules_buffer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/buffer */"./src/modules/buffer.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"fixed",function(){return modules_buffer__WEBPACK_IMPORTED_MODULE_0__["fixed"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"dropping",function(){return modules_buffer__WEBPACK_IMPORTED_MODULE_0__["dropping"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"sliding",function(){return modules_buffer__WEBPACK_IMPORTED_MODULE_0__["sliding"];});/* harmony import */var modules_channel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! modules/channel */"./src/modules/channel/index.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CLOSED",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["CLOSED"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"chan",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["chan"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"timedChan",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["timedChan"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"transChan",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["transChan"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"send",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["send"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"recv",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["recv"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"sendAsync",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["sendAsync"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"recvAsync",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["recvAsync"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"recvOrThrow",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["recvOrThrow"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"close",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["close"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isClosed",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["isClosed"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isBuffered",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["isBuffered"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isTimed",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["isTimed"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"select",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["select"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"selectAsync",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["selectAsync"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"value",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["value"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"channel",function(){return modules_channel__WEBPACK_IMPORTED_MODULE_1__["channel"];});/* harmony import */var modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! modules/dispatcher */"./src/modules/dispatcher.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"config",function(){return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["config"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"SET_IMMEDIATE",function(){return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["SET_IMMEDIATE"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"MESSAGE_CHANNEL",function(){return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["MESSAGE_CHANNEL"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"SET_TIMEOUT",function(){return modules_dispatcher__WEBPACK_IMPORTED_MODULE_2__["SET_TIMEOUT"];});/* harmony import */var modules_process__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! modules/process */"./src/modules/process.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"go",function(){return modules_process__WEBPACK_IMPORTED_MODULE_3__["go"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"sleep",function(){return modules_process__WEBPACK_IMPORTED_MODULE_3__["sleep"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"join",function(){return modules_process__WEBPACK_IMPORTED_MODULE_3__["join"];});/* harmony import */var modules_queue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! modules/queue */"./src/modules/queue.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"EMPTY",function(){return modules_queue__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];});/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */ /**
 * All of the public-facing Chanko functions are gathered here in one place to
 * be exported as a whole. This is a completely flat list of exports, as
 * inluding any object literals for export (which would be natural for buffers,
 * for example) would keep tree-shaking from working right.
 *
 * @module csp
 */ /**
 * An error handling funciton. This is used to handle exceptions thrown in async
 * functions and in transducers. The return value of an exception handler is
 * typically sent to a channel; if the exception happened within an async
 * function, it will be sent to that function's output channel, and if the
 * excpetion happened in a transducer, it will be sent to the channel to which
 * the transducer is attached.
 *
 * @callback ExceptionHandler
 * @memberof module:csp
 * @param {object} err The error object that was thrown to cause the error to
 *     have to be handled.
 * @return {*} A value decided by the handler that will be sent to a channel.
 */ /**
 * A callback that's run when a non-blocking channel operation completes. The
 * value that this function receives is identical to what is returned by a
 * blocking call: the value received from the channel for a `recv`, or `true` or
 * `false` depending on the channel status for a `send`. Any return value from
 * this callback is ignored.
 *
 * @callback OpCallback
 * @memberof module:csp
 * @param {*} value Either the value received from the channel, or whether or
 * not a value was successfully sent.
 */ /**
 * A callback that's run when a non-blocking `select` operation completes. The
 * value that this function receives is an object with two properties: the value
 * that the `select` operation completed with (either the value received from
 * the channel in a receive operation, or `true` or `false` in a send
 * operation), along with the channel where the operation actually happened. Any
 * return value from this callback is ignored.
 *
 * @callback SelectCallback
 * @memberof module:csp
 * @param {module:csp.SelectResult} data The value returned from the select
 *     operation.
 */ /***/},/***/"./src/modules/buffer.js":/*!*******************************!*\
  !*** ./src/modules/buffer.js ***!
  \*******************************/ /*! exports provided: isBuffer, fixed, dropping, sliding, queue, size, count, isFull, add, remove */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isBuffer",function(){return isBuffer;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"fixed",function(){return fixed;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"dropping",function(){return dropping;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"sliding",function(){return sliding;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"queue",function(){return queue;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"size",function(){return size;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"count",function(){return count;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isFull",function(){return isFull;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"add",function(){return add;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"remove",function(){return remove;});/* harmony import */var modules_queue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/queue */"./src/modules/queue.js");/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */ /**
 * Provides several types of buffers usable in buffered channels. These are all
 * built on a small, efficient queue which is in turn backed by a JavaScript
 * array.
 *
 * @module buffer
 * @private
 */ /**
 * A buffer that stores values sent to a buffered channel until a process
 * receives them.
 *
 * Different buffers differ only in the way that they determine whether they are
 * full and in what happens when a new value is added to a full buffer.
 *
 * @memberof module:csp
 * @typedef {(module:csp.FixedBuffer | module:csp.DroppingBuffer |
 *     module:csp.SlidingBuffer)} Buffer
 */ /**
 * The name of a property that exists on buffer objects for the purpose of
 * itentifying them as buffer objects.
 *
 * @type {Symbol}
 * @private
 */const BUFFER=Symbol("BUFFER");/**
 * A possible value of the `{@link module:csp/buffer.BUFFER|BUFFER} property
 * indicating that the buffer is a fixed buffer.
 *
 * @type {Symbol}
 * @private
 */const FIXED=Symbol("FIXED");/**
 * A possible value of the `{@link module:csp/buffer.BUFFER|BUFFER} property
 * indicating that the buffer is a dropping buffer.
 *
 * @type {Symbol}
 * @private
 */const DROPPING=Symbol("DROPPING");/**
 * A possible value of the `{@link module:csp/buffer.BUFFER|BUFFER} property
 * indicating that the buffer is a sliding buffer.
 *
 * @type {Symbol}
 * @private
 */const SLIDING=Symbol("SLIDING");/**
 * Predicate indicating whether the supplied object is a buffer.
 *
 * @param {*} obj The value to test to see if it's a buffer.
 * @return {boolean} Either `true` if the value is a buffer, or `false` if it is
 *     not.
 * @private
 */function isBuffer(obj){return!!(obj===null||obj===void 0?void 0:obj[BUFFER]);}/**
 * A buffer implementation that never discards buffered items when a new item is
 * added.
 *
 * This buffer has a concept of *full*, but it's a soft limit. If the size of
 * the buffer is exceeded, added items are still stored.
 *
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as {@link module:csp.chan|chan}) to make that
 * channel a buffered channel. It doesn't have any properties that are intended
 * for external use.
 *
 * @typedef FixedBuffer
 * @memberof module:csp
 */ /**
 * Creates a fixed buffer of the specified capacity.
 *
 * A fixed buffer is a 'normal' buffer, one that stores and returns items on
 * demand. While it is capable of being over-filled, that ability is not used in
 * Chanko. A buffer that is full will cause the next put to its channel to block
 * until at least one item is removed from the buffer.
 *
 * This buffer is passed to `{@link module:csp.chan|chan}`, etc. to create a
 * buffered channel. It is not meant to be used directly.
 *
 * @memberof module:csp
 * @param {number} size The number of items that the new buffer can hold before
 *     it's full.
 * @return {module:csp.FixedBuffer} A new fixed buffer of the specified
 *     capacity.
 */function fixed(size){return Object.create(null,{/**
     * The queue backing this buffer.
     *
     * @type {module:csp/queue~Queue}
     * @private
     * @instance
     */queue:{value:Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])()},/**
     * The number of items that this queue can hold before it's considered full.
     *
     * @type {number}
     * @private
     * @instance
     */size:{value:size},/**
     * A marker property used to show that this is a fixed buffer.
     *
     * @type {Symbol}
     * @private
     * @instance
     */[BUFFER]:{value:FIXED}});}/**
 * A buffer implementation that drops newly added items when the buffer is full.
 *
 * This dropping behavior is silent: the new item is simply not added to the
 * queue. Note that this buffer is never `full` because it can always be added
 * to without exceeding the size, even if that 'adding' doesn't result in a new
 * item actually appearing in the buffer.
 *
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as {@link module:csp.chan|chan}) to make that
 * channel a buffered channel. It doesn't have any properties that are intended
 * for external use.
 *
 * @typedef DroppingBuffer
 * @memberof module:csp
 */ /**
 * Creates a dropping buffer of the specified capacity.
 *
 * A dropping buffer silently drops the item being added if the buffer is
 * already at capacity. Since adding a new item will always 'succeed' (even if
 * it succeeds by just ignoring the add), it is never considered full and
 * therefore a put to a channel buffered by a dropping buffer never blocks.
 *
 * This buffer is passed to `{@link module:csp.chan|chan}`, etc. to create a
 * buffered channel. It is not meant to be used directly.
 *
 * @memberof module:csp
 * @param {number} size The number of items that the new buffer can hold before
 *     newest items are dropped on add.
 * @return {module:csp.DroppingBuffer} A new dropping buffer of the specified
 *     capacity.
 */function dropping(size){return Object.create(null,{/**
     * The queue backing this buffer.
     *
     * @type {module:csp/queue~Queue}
     * @private
     * @instance
     */queue:{value:Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])()},/**
     * The number of items that this queue can hold before it's considered full.
     *
     * @type {number}
     * @private
     * @instance
     */size:{value:size},/**
     * A marker property used to show that this is a dropping buffer.
     *
     * @type {Symbol}
     * @private
     * @instance
     */[BUFFER]:{value:DROPPING}});}/**
 * A buffer implementation that drops the oldest item when an item is added to a
 * full buffer.
 *
 * This is very similar to {@link module:csp.DroppingBuffer|DroppingBuffer}; the
 * only difference is in what happens when an item is added. In this buffer, the
 * new item is indeed added to the buffer, but in order to keep the count of the
 * buffer at or below its size, the oldest item in the buffer is silently
 * dropped.
 *
 * A buffer of this type exists only as an object that can be passed to a
 * channel creation function (such as {@link module:csp.chan|chan}) to make that
 * channel a buffered channel. It doesn't have any properties that are intended
 * for external use.
 *
 * @typedef SlidingBuffer
 * @memberof module:csp
 */ /**
 * Creates a sliding buffer of the specified capacity.
 *
 * A sliding buffer drops the first-added (oldest) item already in the buffer if
 * a new item is added when the buffer is already at capacity. Since it's always
 * capable of having items added to it, it's never considered full, and
 * therefore a put to a channel buffered by a sliding buffer never blocks.
 *
 * This buffer is passed to `{@link module:csp.chan|chan}`, etc. to create a
 * buffered channel. It is not meant to be used directly.
 *
 * @memberof module:csp
 * @param {number} size The number of items that the new buffer can hold before
 *     oldest items are dropped on add.
 * @return {module:csp.SlidingBuffer} A new sliding buffer of the specified
 *     capacity.
 */function sliding(size){return Object.create(null,{/**
     * The queue backing this buffer.
     *
     * @type {module:csp/queue~Queue}
     * @private
     * @instance
     */queue:{value:Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])()},/**
     * The number of items that this queue can hold before it's considered full.
     *
     * @type {number}
     * @private
     * @instance
     */size:{value:size},/**
     * A marker property used to show that this is a sliding buffer.
     *
     * @type {Symbol}
     * @private
     * @instance
     */[BUFFER]:{value:SLIDING}});}/**
 * Returns the queue that backs a buffer.
 *
 * @param {module:csp.Buffer} buffer The buffer whose queue is returned by this
 *     function.
 * @return {module:csp/queue~Queue} The queue that backs the supplied buffer.
 * @private
 */function queue(buffer){return buffer.queue;}/**
 * Returns the number of items a buffer can hold before it's full.
 *
 * @param {module:csp.Buffer} buffer The buffer whose size is returned by this
 *     function.
 * @return {number} The size of the supplied buffer.
 * @private
 */function size(buffer){return buffer.size;}/**
 * Returns the number of items a buffer is currently holding.
 *
 * @param {module:csp.Buffer} buffer The buffer whose current count is returned
 *     by this function.
 * @return {number} The number of items that the supplied buffer is holding.
 * @private
 */function count(buffer){return Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["count"])(buffer.queue);}/**
 * Determines whether a buffer is at capacity.
 *
 * @param {module:csp.Buffer} buffer The buffer who's being checked to see if
 *     it's at capacity.
 * @return {number} Either `true` if the supplied buffer is full or `false` if
 *     it isn't.
 * @private
 */function isFull(buffer){return buffer[BUFFER]===FIXED?Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["count"])(buffer.queue)>=buffer.size:false;}/**
 * Adds one or more items to a buffer.
 *
 * @param {module:csp.Buffer} buffer The buffer where the supplied items will be
 *     added.
 * @param {...*} items The values being added to the supplied buffer.
 * @private
 */function add(buffer,...items){switch(buffer[BUFFER]){case FIXED:for(const item of items){Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["enqueue"])(buffer.queue,item);}break;case DROPPING:for(const item of items){if(count(buffer)<size(buffer)){Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["enqueue"])(buffer.queue,item);}}break;case SLIDING:for(const item of items){if(count(buffer)>=size(buffer)){Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["dequeue"])(buffer.queue);}Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["enqueue"])(buffer.queue,item);}break;default:return;}}/**
 * Removes the next item from a queue and returns it.
 *
 * @param {module:csp.Buffer} buffer The buffer from which an item is being
 *     removed.
 * @return {*} The item that was removed from the supplied buffer.
 * @private
 */function remove(buffer){return Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["dequeue"])(buffer.queue);}/***/},/***/"./src/modules/channel/handler.js":/*!****************************************!*\
  !*** ./src/modules/channel/handler.js ***!
  \****************************************/ /*! exports provided: CLOSED, MAX_DIRTY, MAX_QUEUED, channel, handleSend, handleRecv, close, box, isBox */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CLOSED",function(){return CLOSED;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAX_DIRTY",function(){return MAX_DIRTY;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAX_QUEUED",function(){return MAX_QUEUED;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"channel",function(){return channel;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"handleSend",function(){return handleSend;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"handleRecv",function(){return handleRecv;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"close",function(){return close;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"box",function(){return box;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isBox",function(){return isBox;});/* harmony import */var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @chanko/xduce-tools */"../xduce-tools/lib/chanko-xduce-tools.js");/* harmony import */var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var modules_queue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! modules/queue */"./src/modules/queue.js");/* harmony import */var modules_buffer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! modules/buffer */"./src/modules/buffer.js");/* harmony import */var modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! modules/dispatcher */"./src/modules/dispatcher.js");/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */ /**
 * The maximum number of dirty operations that can be queued on a channel before
 * a cleanup is triggered.
 *
 * @type {number}
 * @private
 */const MAX_DIRTY=64;/**
 * The maximum number of opertions that can be queued on a channel before new
 * operations are rejected.
 *
 * @type {number}
 * @private
 */const MAX_QUEUED=1024;/**
 * *he value returned from a receive on a channel when that channel is closed
 * and has no more values available.
 *
 * This is a special value that is returned under a certain circumstance, namely
 * when a receive is performed on a closed channel. Because of that, it cannot
 * be returned from a receive on an open channel. For that reason, `CLOSED` is
 * the only value that cannot be sent onto a channel &mdash; it would be
 * impossible to distinguish between a legitimate value of `CLOSED` and an
 * actual closed channel.
 *
 * @type {Symbol}
 * @memberof module:csp
 */const CLOSED=Symbol("CLOSED");/**
 * A unique value used to indicate that an object is a box.
 *
 * @type {Symbol}
 * @private
 */const BOX=Symbol("BOX");/**
 * Determines whether an object is a box.
 *
 * @param {*} obj A value to check for boxiness.
 * @return Either `true` if the value is a box or `false` if it isn't.
 * @private
 */function isBox(obj){return!!(obj===null||obj===void 0?void 0:obj[BOX]);}/**
 * Determines whether an object is reduced. This is done using the transducer
 * protocol; an object with the protocol-specified `reduced` property is assumed
 * to be reduced. If a result of a transformation is reduced, it means that the
 * transformation is complete and the channel should be closed.
 *
 * @param {*} value The value being checked for reduction.
 * @return {boolean} Either `true` if the value has been reduced, or `false` if
 *     it has not been.
 * @private
 */function isReduced(value){return!!(value===null||value===void 0?void 0:value[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]);}/**
 * A wrapper around a value. This is primarily used as a marker; a put or take
 * returning a Box indicates that the put or take has returned an immediate
 * value, while returning `null` indicates that the operation has been queued.
 *
 * @typedef Box
 * @memberof module:csp/channel
 * @property {*} value The value being wrapped by the box.
 * @private
 */ /**
 * A wrapper object for a value. This is used almost entirely as a marker
 * interface, though the fact that it becomes a parameter that's passed by
 * reference rather than value is also important in a couple places. If a
 * channel operation (put or take) returns a Box, it means that an actual value
 * was returned. A non-Box (which always happens to be `null`) means that the
 * operation must block.
 *
 * @memberof module:csp/channel
 * @param {*} value The value to box.
 * @return {module:csp/channel.Box} The boxed value.
 * @private
 */function box(value){return Object.create(null,{value:{value,writable:true},[BOX]:{value:true}});}/**
 * A wrapper around a value. This is much like
 * {@link module:csp/channel.Box|Box} except that it also carries a handler to
 * be used when a sent value is received. It is specifically for queueing sends.
 *
 * @typedef SendBox
 * @memberof module:csp/channel
 * @property {*} value The value being wrapped by this box.
 * @property {module:csp/channel.Handler} handler The handler used to process a
 *     send request for the value.
 * @private
 */ /**
 * A box used to wrap a value being sent onto a channel. This is different from
 * a regular box in that the send handler is also included.
 *
 * @memberof module:csp/channel
 * @param  {Object} handler The handler used to process a send request for the
 *     value.
 * @param  {*} value The value to box.
 * @return {module:csp/channel.SendBox} The boxed value.
 * @private
 */function sendBox(value,handler){return Object.create(null,{value:{value,writable:true},handler:{value:handler},[BOX]:{value:true}});}/**
 * A channel, used by processes to communicate with one another.
 *
 * For each operation, the channel first tests to see if there's a corresponding
 * operation already queued (i.e., if we're doing a `send` that there's a queued
 * `recv` and vice versa). If there is, that corresponding operation is
 * unblocked and both operations complete. If not, the operation is queued to
 * wait for a corresponding operation. The process or that created the operation
 * then blocks.
 *
 * The channel can be backed by a buffer, though it is not by default. If a
 * buffer is in place, and that buffer is not full, then the process that
 * created an operation that has to be queued is *not* blocked.
 *
 * This channel object supports transformations, assuming that they follow the
 * protocol created by a few transducer library authors to allow them to
 * interoperate. The support must be explicitly created because the normal
 * method of making an object support transformations won't work here. This
 * method is to create a new object and add the transformed values to it - but
 * for a channel, we need to replace the values on the channel with their
 * transformed values, in the same order even in a multi-process environment.
 * Thus transformations happen in place.
 *
 * Transformations are applied before the value is queued, so even if there is a
 * corresponding operation ready to go, the transformation still happens. Also,
 * transformations require that the channel be buffered (this buffer is what is
 * sent to the transformer's reduction step function); trying to create a
 * channel with a transformer but without a buffer will result in an error being
 * thrown.
 *
 * This is the object that is returned from a call to
 * `{@link module:csp.chan|chan}`. However, this object is intended to be used
 * as a value to pass to channel operation functions; it doesn't have any
 * properties of interest to an end user.
 *
 * @memberof module:csp
 * @typedef Channel
 */ /**
 * Creates a channel. This is a low-level function;
 * `{@link module:csp.chan|chan}` performs some necessary manipulations on
 * arguments before using this function to perform the actual creation.
 *
 * @memberof module:csp/channel
 * @param {null | module:csp.Buffer} buffer An optional buffer that, if present,
 *     is used to create a buffered channel. If this is `null`, an unbuffered
 *     channel is created.
 * @param {module:xduce-tools.TransducerFunction} xform The transducer used to
 *     transform values sent to the channel. If no transformations are
 *     necessary, a passthrough transducer should be provided.
 * @param {boolean} isTimed Indicates whether the channel is a timed channel.
 *     The timining mechanism is handled outside the channel, but this property
 *     is provided to be able to query whether that's the case.
 * @param {number} maxDirty=64 The maximum number of dirty operations to allow
 *     before they're purged.
 * @param {number} maxQueued=1024 The maximum number of operations that can be
 *     queued before new ones are rejected.
 * @return {module:csp.Channel} A new channel.
 * @private
 */function channel(buffer,xform,isTimed=false,maxDirty=MAX_DIRTY,maxQueued=MAX_QUEUED){return Object.create(null,{buffer:{value:buffer},xform:{value:xform},maxDirty:{value:maxDirty},maxQueued:{value:maxQueued},recvs:{value:Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["queue"])()},sends:{value:Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["queue"])()},dirtyRecvs:{value:0,writable:true},dirtySends:{value:0,writable:true},closed:{value:false,writable:true},isBuffered:{value:!!buffer},isTimed:{value:isTimed}});}/**
 * Sends a value to a channel. The specified handler is used to control whether
 * the send is active and what to do after the send completes. A send can become
 * inactive if it was part of an `select` call and some other operation
 * specified in that call has already completed.
 *
 * This value is given to a receive handler immediately if there's one waiting.
 * Otherwise the value and handler are queued together to wait for a receive.
 *
 * This is a low-level operation that's provided as a part of the channel
 * implementation so that other operations functions can properly apply
 * handlers. It is not meant for general use. Use those other operations
 * functions instead.
 *
 *
 * @memberof module:csp/channel
 * @param {module:csp.Channel} channel The channel that the value is being sent
 *     to.
 * @param {*} value The value to be put onto the channel.
 * @param {boolean} handler.active Determines whether the send is still active
 *     and should still be serviced.
 * @param {function} handler.commit Deactivates the send (so it can't be
 *     serviced a second time) and returns the callback to be fired when the
 *     send completes.
 * @return {module:csp/channel.Box|null} One of three values. A boxed `true` is
 *     returned if the send was immediately consumed by a pending receive. A
 *     boxed `false` is returned if the send was performed on a channel that was
 *     already closed by the time the send took place. `null` is returned if the
 *     send was queued pending a corresponding receive.
 * @private
 */function handleSend(channel,value,handler){if(value===CLOSED){throw Error("Cannot send CLOSED to a channel");}if(channel.closed){handler.commit();return box(false);}let receiver,callback;// Push the incoming value through the buffer, even if there's already a
// receiver waiting for the value. This is to make sure that the transducer
// step function has a chance to act on the value first, which could change
// the value or make it altogether unavailable.
//
// If the channel is unbuffered this process is skipped (there can't be a
// transducer on an unbuffered channel anyway). If the buffer is full, the
// transducer's work is deferred until later when the buffer is not full.
if(channel.buffer&&!Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["isFull"])(channel.buffer)){handler.commit();const done=isReduced(channel.xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer,value));for(;;){if(Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(channel.buffer)===0){break;}receiver=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);if(receiver===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}if(receiver.active){callback=receiver.commit();const val=Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(channel.buffer);if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(val));}}}if(done){close(channel);}return box(true);}// This loop happens if the channel is unbuffered and there is at least one
// pending receive. (Buffered channels break out of this loop immediately,
// because in order for a buffered channel to reach this point, its buffer
// must have been full. If the buffer is full, that means there are no pending
// receives and the first one read will be EMPTY.) It processes the next
// pending receive immediately.
for(;;){receiver=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);if(receiver===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}if(receiver.active){handler.commit();callback=receiver.commit();if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(value));}return box(true);}}// If there are no pending receives on an unbuffered channel, or on a buffered
// channel with a full buffer, we queue the send to tlet it wait for a receive
// to become available. Sends whose handlers have gone inactive (which happens
// if they were processed as part of a `select` call) are periodically purged.
if(channel.dirtySends>channel.maxDirty){Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["filter"])(channel.sends,sender=>sender.handler.active);channel.dirtySends=0;}else{channel.dirtySends++;}if(Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["count"])(channel.sends)>=channel.maxQueued){throw Error(`No more than ${channel.maxQueued} pending sends are allowed on a single channel`);}Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["enqueue"])(channel.sends,sendBox(value,handler));return null;}/**
 * Receives a value from a channel. The specified handler is used to control
 * whether the receive is active and what to do after the receive completes. A
 * receive can become inactive if it was part of an `select` call and some other
 * operation specified in that call has already completed.
 *
 * This value is given to a send handler immediately if there's one waiting.
 * Otherwise the value and handler are queued together to wait for a send.
 *
 * This is a low-level operation that's provided as a part of the channel
 * implementation so that other operations functions can properly apply
 * handlers. It is not meant for general use. Use those other operations
 * functions instead.
 *
 * @memberof module:csp/channel
 * @param {module:csp.Channel} channel The channel that the value is being
 *     received from.
 * @param {boolean} handler.active Determines whether the receive is still
 *     active and should still be serviced.
 * @param {function} handler.commit Deactivates the receive (so it can't be
 *     serviced a second time) and returns the callback to be fired when the
 *     receive completes.
 * @return {module:csp/channel.Box|null} Either the boxed value received from
 *     the channel, or `null` if the receive must be queued to await a
 *     corresponding send.
 * @private
 */function handleRecv(channel,handler){let sender,sendHandler,callback;// Runs if the channel is buffered and the buffered is not empty (an empty
// buffer means there are no pending sends). We immediately process any sends
// that were queued when there were no pending receives, up until the buffer
// is filled with sent values.
if(channel.buffer&&Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(channel.buffer)>0){handler.commit();const value=Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(channel.buffer);for(;;){if(Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["isFull"])(channel.buffer)){break;}sender=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.sends);if(sender===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}sendHandler=sender.handler;if(sendHandler.active){callback=sendHandler.commit();if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(true));}if(isReduced(channel.xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer,sender.value))){close(channel);}}}return box(value);}// This loop runs on an unbuffered channel if there are any pending sends.
// (Buffered channels break out of this loop immediately because in order to
// have come this far without returning, the channel's buffer must have been
// empty. An empty buffer means there are no pending sends, so the first
// pending send read from it will be EMPTY.) It processes the next pending
// send immediately.
for(;;){sender=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.sends);if(sender===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}sendHandler=sender.handler;if(sendHandler.active){callback=sendHandler.commit();if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(true));}return box(sender.value);}}// If we've exhausted all of our pending sends and the channel is marked
// closed, we can finally reutrn the fact that the channel is closed. This
// ensures that any sends that were already pending on the channel are
// processed before closure, even if the channel was closed before that could
// happen.
if(channel.closed){handler.commit();return box(CLOSED);}// If an unbuffered channel or a buffered channel with an empty buffer has no
// pending sends, and if the channel is still open, the receive is queued to
// be processed when a send is available. Receives whose handlers have gone
// inactive as the result of `select` processing are periodically purged.
if(channel.dirtyRecvs>channel.maxDirty){Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["filter"])(channel.recvs,receiver=>receiver.active);channel.dirtyRecvs=0;}else{channel.dirtyRecvs++;}if(Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["count"])(channel.recvs)>=channel.maxQueued){const max=channel.maxQueued;throw Error(`No more than ${max} pending receives are allowed on a single channel`);}Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["enqueue"])(channel.recvs,handler);return null;}/**
 * Closes the channel if it isn't already closed. This immediately returns any
 * buffered values to pending receives. If there are no buffered values (or if
 * they've already been taken by other receives), then all of the rest of the
 * receives are completed with the value of {@link module:csp.CLOSED|CLOSED}.
 * Any pending sends are completed with the value of `false`.
 *
 * Note that the buffer is not emptied if there are still values remaining after
 * all of the pending receives have been handled. The channel will still provide
 * those values to any future receives, though no new values may be added to the
 * channel. Once the buffer is depleted, any future receives will return
 * {@link module:csp.CLOSED|CLOSED}.
 *
 * @memberof module:csp
 * @param {module:csp.Channel} channel The channel to be closed.
 * @private
 */function close(channel){if(channel.closed){return;}channel.closed=true;let receiver,sender,callback;// If there is a buffer and it has at least one value in it, send those values
// to any pending receives that might still be queued.
if(channel.buffer){channel.xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](channel.buffer);for(;;){if(Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(channel.buffer)===0){break;}receiver=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);if(receiver===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}if(receiver.active){callback=receiver.commit();const value=Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(channel.buffer);if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(value));}}}}// Once the buffer is empty (or if there isn't a buffer at all), send CLOSED
// to all remaining queued receives.
for(;;){receiver=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);if(receiver===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}if(receiver.active){callback=receiver.commit();if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(CLOSED));}}}// Send `false` to any remaining queued sends.
for(;;){sender=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.sends);if(sender===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}if(sender.handler.active){callback=sender.handler.commit();if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(false));}}}}/***/},/***/"./src/modules/channel/index.js":/*!**************************************!*\
  !*** ./src/modules/channel/index.js ***!
  \**************************************/ /*! exports provided: CLOSED, DEFAULT, chan, timedChan, transChan, isClosed, isBuffered, isTimed, sendAsync, recvAsync, selectAsync, send, recv, recvOrThrow, select, close, value, channel */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"chan",function(){return chan;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"timedChan",function(){return timedChan;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"transChan",function(){return transChan;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isClosed",function(){return isClosed;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isBuffered",function(){return isBuffered;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isTimed",function(){return isTimed;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"sendAsync",function(){return sendAsync;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"recvAsync",function(){return recvAsync;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"send",function(){return send;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"recv",function(){return recv;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"recvOrThrow",function(){return recvOrThrow;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"close",function(){return close;});/* harmony import */var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/awaitAsyncGenerator */"../../node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js");/* harmony import */var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/wrapAsyncGenerator */"../../node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js");/* harmony import */var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _handler__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./handler */"./src/modules/channel/handler.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CLOSED",function(){return _handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"];});/* harmony import */var _select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./select */"./src/modules/channel/select.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DEFAULT",function(){return _select__WEBPACK_IMPORTED_MODULE_3__["DEFAULT"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"selectAsync",function(){return _select__WEBPACK_IMPORTED_MODULE_3__["selectAsync"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"select",function(){return _select__WEBPACK_IMPORTED_MODULE_3__["select"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"value",function(){return _select__WEBPACK_IMPORTED_MODULE_3__["value"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"channel",function(){return _select__WEBPACK_IMPORTED_MODULE_3__["channel"];});/* harmony import */var modules_buffer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! modules/buffer */"./src/modules/buffer.js");/* harmony import */var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @chanko/xduce-tools */"../xduce-tools/lib/chanko-xduce-tools.js");/* harmony import */var _chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_5__);/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */ /**
 * An implementation of channels. These channels are essentially queues that
 * hold instructions waiting for the next available async function to process
 * them. They can be buffered, which is accomplished using the buffer functions
 * `{@link module:csp.fixed|fixed}`, `{@link module:csp.dropping|dropping}`, and
 * `{@link module:csp.sliding|sliding}`.
 *
 * Channels do not interact with JS tasks or the dispatcher in any meaningful
 * way. They're just here to hold tasks which may themselves then cause new JS
 * tasks to be created via the dispatcher.
 *
 * Channels may have transducers associated with them. The transducers are
 * expected to follow the same conventions as any of the popular transducer
 * libraries. Explicit support is required because channels wouldn't play well
 * with the normal way of making an object support transduction, for two
 * different reasons.
 *
 * * Transducers require the ability to create a new, empty collection of the
 *   same type as the input collection. In this case, that would mean creating a
 *   new channel, meaning that the output channel (from which the transformed
 *   values are received) would be different than the input channel (where
 *   values are sent).
 * * If we somehow get over that requirement and keep all action on the same
 *   channel, we can't take values from the channel, transform them, and put
 *   them back. This would potentially change the order of values in the channel
 *   since we are dealing with asynchronous processes.
 *
 * The explicit support means a transducer is directly associated with a
 * channel. When a value is sent to the channel, it's first run through the
 * transducer and the transformed value is the one actually put into the
 * channel's buffer. This avoids both of the problems noted above.
 *
 * @module csp/channel
 * @private
 */ /**
 * A handler function for exceptions that are thrown by a transducer while
 * transforming values on a channel.
 *
 * @param {object} err The error object that was thrown by the transducer.
 * @return {*} A value that should be put into the channel's buffer when the
 *     transducer throws the error. If this value is
 *     {@link module:csp.CLOSED|CLOSED}, then no value at all will be added to
 *     the buffer.
 * @callback
 * @memberof module:csp/channel
 * @private
 */ /**
 * The default exception handler, used when no exception handler is supplied to
 * `{@link module:csp/channel.handleException}`,
 * `{@link module:csp/channel.wrapTransformer}`, `{@link module:csp.chan|chan}`,
 * or `{@link module:csp.transChan|transChan}`. This default handler merely
 * returns `{@link module:csp.CLOSED|CLOSED}`, which will result in no new value
 * being written to the channel.
 *
 * @type {module:csp.ExceptionHandler}
 * @memberof module:csp/channel
 * @private
 */const DEFAULT_HANDLER=()=>_handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"];/**
 * Creates a new handler used for `send` and `recv` operations.
 *
 * @memberof module:csp/channel
 * @param {module:csp/channel.HandlerCallback} fn The callback to be run when
 *     (and if) the operation completes.
 * @return {module:csp/channel.Handler} The new handler.
 * @private
 */function opHandler(fn){return Object.create(null,{active:{value:true},commit:{value:()=>fn}});}/**
 * Handles an exception that is thrown inside a transducer. The thrown error is
 * passed to the `handler` function, and the result of that handler function is
 * added to the channel's buffer. If that value is
 * {@link module:csp.CLOSED|CLOSED}, then it is *not* added to the buffer.
 *
 * @param {module:csp.Buffer} buffer The buffer that backs the channel whose
 *     transducer's exceptions are being handled.
 * @param {module:csp.ExceptionHandler} handler The exception handling function
 *     that is run when an error occurs in a transducer.
 * @param  {Object} ex The error object thrown by the transducer.
 * @return {module:csp.Buffer} The buffer itself. This is done to make it easier
 *     to integrate this function into a transducer's step function.
 * @private
 */function handleException(buffer,handler,ex){const value=handler(ex);if(value!==_handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"]){Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["add"])(buffer,value);}return buffer;}/**
 * A transducer that wraps another transducer with error handling code. Any
 * error that occurs within the transducer, either in the step function or the
 * result function, will cause the error handler to be run.
 *
 * @param {Object} xform The transducer to add an error handler to.
 * @param {module:csp.ExceptionHandler} [handler=DEFAULT_HANDLER] The exception
 *     handling function that is run when an error occurs in the transducer.
 * @return {Object} A new transducer that is the result of wrapping the provided
 *     transducer's step and result functions with the exception handler.
 * @private
 */function handlerTransducer(xform,handler=DEFAULT_HANDLER){return{[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer,input){try{return xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer,input);}catch(ex){return handleException(buffer,handler,ex);}},[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer){try{return xform[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer);}catch(ex){return handleException(buffer,handler,ex);}}};}/**
 * The reducer used at the end of a transducer chain to control how the
 * transformed values are reduced back onto the channel's buffer. This reducer
 * does nothing more than add the input items (which are the transformed values
 * that are being put onto the channel) to the channel buffer.
 *
 * This is a necessary part of working with a transducer, as the final reducer
 * always takes the transformed values and renders them into whatever collection
 * is desired. This is that final reducer for channels.
 *
 * @type {Object}
 * @private
 */const bufferReducer={[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_5__["protocols"].init](){throw Error("init not available");},[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer,input){Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["add"])(buffer,input);return buffer;},[_chanko_xduce_tools__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer){return buffer;}};/**
 * Parses the buffer argument and options, along with a set of default options,
 * to figure out what was really passed to `{@link module:csp.chan|chan}`.
 *
 * @param {(null|number|module:csp.Buffer)} buffer The buffer argument passed to
 *     `{@link module:csp.chan|chan}`.
 * @param {object} options The options argument passed to
 *     `{@link module:csp.chan|chan}`.
 * @param {object} defaultOptions Default values for options that might not have
 *     been sent to `{@link module:csp.chan|chan}`.
 * @return {object} An object containing the processed values of all of the
 *     arguments sent to `{@link module:csp.chan|chan}`.
 * @private
 */function parseArgs(buffer,options,defaultOptions){let buf;let opts;if(!buffer){// same for 0, null, or undefined
buf=null;opts=options;}else if(typeof buffer==="number"){buf=Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["fixed"])(buffer);opts=options;}else if(Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["isBuffer"])(buffer)){buf=buffer;opts=options;}else{// If no buffer is specified but a transducer is, we assume fixed(1) instead
// of no buffer
buf=(buffer===null||buffer===void 0?void 0:buffer.transducer)?Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["fixed"])(1):null;opts=buffer;}const{transducer,handler,maxDirty,maxQueued,timer}=Object.assign({},defaultOptions,opts);return{buf,transducer,handler,maxDirty,maxQueued,timer};}/**
 * Creates and returns a new channel.
 *
 * By default this channel will be a simple unbuffered, untransformed channel,
 * but that can be changed through options. A channel does not have any
 * externally useful functions. It exists largely to be passed into
 * `{@link module:csp.send|send}`, `{@link module:csp.recv|recv}`, and
 * `{@link module:csp.select|select}` invocations, along with their non-blocking
 * variations (`{@link module:csp.sendAsync|sendAsync}`,
 * `{@link module:csp.recvAsync|recvAsync}`, and
 * `{@link module:csp.selectAsync|selectAsync}`).
 *
 * If a buffer value is provided, it defines what buffer should back the
 * channel. If this is `null` or `0`, the channel will be unbuffered. If it's a
 * positive number, the channel will be buffered by a
 * `{@link module:csp.FixedBuffer|FixedBuffer} `of that size. If it's a
 * `{@link module:csp.Buffer|Buffer}` object, that object will be used as the
 * channel's buffer. If it's missing altogether, the channel will be unbuffered
 * unless a `transducer` option is provided (see below), in which case it will
 * be a `{@link module:csp.FixedBuffer|FixedBuffer}` of size 1.
 *
 * `chan` supports transducers by allowing a transducer function to be
 * associated with it. This is passed as the `transducer` option and can only be
 * used if the channel is buffered (otherwise an error is thrown). This
 * transducer function must take another transducer as a parameter (allowing
 * transformers to be chained), and it must return an object conforming to the
 * transducer protocol.
 *
 * Errors in the transformation process can be handled by passing an error
 * handler. This is a function that expects to receive an error object as a
 * parameter and can return a value that is then put onto the channel. If this
 * value is `{@link module:csp.CLOSED|CLOSED}`, then no value will be put onto
 * the channel upon handler completion.
 *
 * @memberof module:csp
 * @param {(number|module:csp.Buffer)} [buffer] The buffer object that should
 *     back this channel. If this is a positive number, a fixed buffer of that
 *     size will be created to back the channel. If it is `0` or `null`, the new
 *     channel will be unbuffered. If it's not present, the new channel will be
 *     unbuffered unless there is a `transducer` option, in in which case it
 *     will be buffered with a size 1
 *     `{@link module:csp.FixedBuffer|FixedBuffer}`.
 * @param {Object} [options] A set of options for configuring the channel's
 *     queue.
 * @param {module:xduce-tools.TransducerFunction} [options.transducer] A
 *     transducer to run each value through before putting it onto the channel.
 *     This function should expect one parameter (another transducer that it's
 *     chained to) and return an object that conforms to the transducer
 *     protocol. If a transducer is provided on an unbuffered channel, an error
 *     will be thrown.
 * @param {module:csp.ExceptionHandler} [options.handler] An error handler that
 *     is run whenever an error occurs inside a transducer function. If that
 *     happens, this function is called with one parameter, which is the error
 *     object. The value that the handler returns (if it is not
 *     `{@link module:csp.CLOSED|CLOSED}`) will be put onto the channel when the
 *     handler finishes running.
 * @param {number} [options.maxDirty=64] The maximum number of dirty operations
 *     that can be in the queue before those operations are subject to being
 *     purged. Dirty operations are those that may not be valid anymore because
 *     they were in the list of operations passed to
 *     `{@link module:csp.select|select}` or
 *     `{@link module:csp.selectAsync|selectAsync}` but were not chosen to run.
 *     This provides a chance for a very minor performance tweak and is best
 *     left alone.
 * @param {number} [options.maxQueued=1024] The maximum number of operations
 *     that can be queued up at the same time. This prevents infinite loops from
 *     accidentally eating up all of the available memory.
 * @param {number} [options.timer] If this value is present, the channel will be
 *     a timed channel that closes automatically after this number of
 *     milliseconds.
 * @return {module:csp.Channel} A new channel.
 */function chan(buffer,options){const defaultOptions={maxDirty:_handler__WEBPACK_IMPORTED_MODULE_2__["MAX_DIRTY"],maxQueued:_handler__WEBPACK_IMPORTED_MODULE_2__["MAX_QUEUED"]};const{buf,transducer,handler,maxDirty,maxQueued,timer}=parseArgs(buffer,options,defaultOptions);if(transducer&&!buf){throw Error("Only buffered channels can use transducers");}const xf=handlerTransducer(transducer?transducer(bufferReducer):bufferReducer,handler);const isTimed=typeof timer==="number";const ch=Object(_handler__WEBPACK_IMPORTED_MODULE_2__["channel"])(buf,xf,isTimed,maxDirty,maxQueued);function iterator(){return _iterator.apply(this,arguments);}function _iterator(){_iterator=_babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(){for(;;){const value=yield _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0___default()(recv(ch));if(value===_handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"]){break;}yield value;}});return _iterator.apply(this,arguments);}ch[Symbol.asyncIterator]=iterator;if(isTimed){setTimeout(()=>Object(_handler__WEBPACK_IMPORTED_MODULE_2__["close"])(ch),timer);}return ch;}/**
 * Creates an unbuffered, timed channel. This channel closes automatically after
 * the supplied number of milliseconds and is the equivalent of calling `chan(0,
 * { timer: delay })`.
 *
 * @memberof module:csp
 * @param {number} delay The number of milliseconds after the channel is created
 *     that it will be closed automatically.
 * @return {module:csp.Channel} A new timed channel.
 */function timedChan(delay=0){return chan({timer:delay});}/**
 * Creates a buffered channel with a transducer and optional error handler. The
 * buffer for this channel is a `{@link module:csp.FixedBuffer|FixedBuffer}` of
 * size 1. This is the equivalent of `chan(1, { transducer, handler })`.
 *
 * @memberof module:csp
 * @param {module:xduce-tools.TransducerFunction} transducer The transducer used
 *     to transform values on the new channel.
 * @param {module:csp.ExceptionHandler} [handler] An exception handler called
 *     with the error object as its only argument when an error happens inside a
 *     transducer. If this is not provided, a default handler is used that
 *     simply does nothing, including sending no output from the value that
 *     errored.
 * @return {module:csp.Channel} A new channel with a transducer.
 */function transChan(transducer,handler){return chan({transducer,handler});}/**
 * Determines whether a channel is closed.
 *
 * A closed channel will cause any `send` operation to return `false` and any
 * `recv` operation to return any buffered items that remain, followed by
 * `{@link module:csp.CLOSED|CLOSED}`.
 *
 * @memberof module:csp
 * @param {module:csp.Channel} channel The channel to check.
 * @return {boolean} Either `true` if the channel is closed or `false` if it
 *     isn't.
 */function isClosed(channel){return channel.closed;}/**
 * Determines whether a channel is buffered.
 *
 * A channel is buffered if a buffer or a number was passed as the first
 * argument of `{@link module:csp.chan|chan}` or if a transducer is a part of
 * the channel.
 *
 * @memberof module:csp
 * @param {module:csp.Channel} channel The channel to check.
 * @return {boolean} Either `true` if the channel is buffered or `false` if it
 *     isn't.
 */function isBuffered(channel){return channel.isBuffered;}/**
 * Determines whether a channel is timed.
 *
 * A channel is timed if it was created either with the `timer` option of
 * `{@link module:csp.chan|chan}` or with the
 * `{@link module:csp.timedChan|timedChan}` function. It will automatically
 * close after a certain period of time.
 *
 * @memberof module:csp
 * @param {module:csp.Channel} channel The channel to check.
 * @return {boolean} Either `true` if the channel is timed or `false` if it
 *     isn't.
 */function isTimed(channel){return channel.isTimed;}/**
 * Sends a value to this channel without blocking.
 *
 * This means that a call to `sendAsync` does not go into an `await` expression,
 * and it is not necessary to use it inside a async function. Rather than
 * blocking until the sent value is taken by another async function, this one
 * returns immediately and then invokes the callback (if provided) when the sent
 * value is taken. It can be seen as a non-blocking version of
 * `{@link module:csp.send|send}`.
 *
 * While the primary use of this function is to send values onto channels in
 * contexts where being inside an async function is impossible (for example, in
 * a DOM element's event handler), it can still be used inside async functions
 * at times when it's important to make sure that the function doesn't block
 * from the send.
 *
 * The callback is a function of one parameter. The parameter that's supplied to
 * the callback is the same as what is supplied to `await send`: `true` if the
 * value was taken, or `false` if the channel was closed. If the callback isn't
 * present, nothing will happen after the value is taken.
 *
 * @memberof module:csp
 * @param {*} [value] The value being put onto the channel.
 * @param {module:csp.OpCallback} [callback] A function that gets invoked either
 *     when the value is taken by another process or when the channel is closed.
 *     This function can take one parameter, which is `true` in the former case
 *     and `false` in the latter.
 */function sendAsync(channel,value,callback=()=>{}){const result=Object(_handler__WEBPACK_IMPORTED_MODULE_2__["handleSend"])(channel,value,opHandler(callback));if(result&&callback){callback(result.value);}}/**
 * Receives a value from this channel without blocking.
 *
 * This means that a call to `receiveAsync` does not go into an `await`
 * expression, and it is not necessary to use it inside a async function. Rather
 * than blocking until a value becomes available on the channel to be received,
 * this one returns immediately and then invokes the callback (if provided) when
 * a value becomes available. It can be regarded as a non-blocking version of
 * {@link module:csp.recv|recv}`.
 *
 * While the primary use of this function is to receive values from channels in
 * contexts where being inside an async function is impossible, it can still be
 * used inside async functions at times when it's important that the receive
 * doesn't block the function.
 *
 * The callback is a function of one parameter, and the value supplied for that
 * parameter is the value received from the channel (either a value that was
 * sent or `{@link module:csp.CLOSED|CLOSED}`). If the callback isn't present,
 * nothing will happen after the value is taken.
 *
 * @memberof module:csp
 * @param {module:csp.OpCallback} [callback] A function that gets invoked when a
 *     value is made available to be received (this value may be
 *     `{@link module:csp.CLOSED|CLOSED}` if the channel closes with no
 *     available value). The function can take one parameter, which is the value
 *     that is received from the channel.
 */function recvAsync(channel,callback=()=>{}){const result=Object(_handler__WEBPACK_IMPORTED_MODULE_2__["handleRecv"])(channel,opHandler(callback));if(result&&callback){callback(result.value);}}/**
 * Sends a value to a channel, blocking the async function until that value is
 * received from the channel by a different function (or until the channel
 * closes).
 *
 * A value is always sent to the channel, but if that value isn't specified by
 * the second parameter, it is `undefined`. Any value may be sent to a channel,
 * with the sole exception of the special value
 * `{@link module:csp.CLOSED|CLOSED}`.
 *
 * This function *must* be called from within an async function and as part of
 * an `await` expression.
 *
 * When `send` is completed and its function unblocks, its `await` expression
 * evaluates to a status boolean that indicates what caused the function to
 * unblock. That value is `true` if the sent value was successfully taken by
 * another process, or `false` if the unblocking happened because the target
 * channel closed.
 *
 * @memberof module:csp
 * @param {*} [value] The value being put onto the channel.
 * @return {Promise<boolean>} A promise that will resolve to `true` or `false`
 *     depending on whether the put value is actually taken.
 */function send(channel,value){return new Promise(resolve=>{sendAsync(channel,value,resolve);});}/**
 * Receives a value from this channel, blocking the async function until a value
 * becomes available to be received (or until the channel closes with no more
 * values on it to be received).
 *
 * This function *must* be called from within an async function and as part of
 * an `await` expression.
 *
 * When `receive` is completed and its function unblocks, its `await` expression
 * evaluates to the actual value that was received. If the target channel
 * closed, then all of the values already placed onto it are resolved by
 * `receive` as normal, and once no more values are available, the special value
 * `{@link module:csp.CLOSED|CLOSED}` is returned.
 *
 * @memberof module:csp
 * @return {Promise} A promise that will resolve to the value received from the
 *     channel once that receive is completed. If the channel closes without a
 *     value being made available, this will resolve to
 *     `{@link module:csp.CLOSED|CLOSED}`.
 */function recv(channel){return new Promise(resolve=>{recvAsync(channel,resolve);});}/**
 * Receives a value from a channel, blocking the async function until a value
 * becomes available to be received (or until the channel closes with no more
 * values on it to be received). If the received value is an error object, that
 * error is thrown at that point.
 *
 * This function *must* be called from within an async function and as part of
 * an `await` expression.
 *
 * It functions in every way like `{@link module:csp.recv|recv}` *except* in the
 * case that the value on the channel is an object that has `Error.prototype` in
 * its prototype chain (any built-in error, any properly-constructed custom
 * error). If that happens, the error is thrown, which will cause the returned
 * promise to be rejected with the error. It can then be handled up the promise
 * chain like any other rejected promise.
 *
 * `takeOrThrow` is roughly equivalent to:
 *
 * ```
 * const value = await recv(ch);
 * if (Error.prototype.isPrototypeOf(value)) {
 *   throw value;
 * }
 * ```
 *
 * @memberof module:csp
 * @return {Promise} A promise that will resolve to the value taken from the
 *     channel once that take is completed. If the channel closes without a
 *     value being made available, this will resolve to
 *     `{@link module:csp.CLOSED|CLOSED}`. If the taken value is an error, the
 *     promise will instead be rejected with the error object as the reason.
 */function recvOrThrow(channel){return new Promise((resolve,reject)=>{recvAsync(channel,result=>{if(Object.prototype.isPrototypeOf.call(Error.prototype,result)){reject(result);}else{resolve(result);}});});}/**
 * Closes the channel, if it isn't already closed. This immediately returns any
 * buffered values to pending receives. If there are no buffered values (or if
 * they've already been taken by other receives), then all of the rest of the
 * receives are completed with the value of `{@link module:csp.CLOSED|CLOSED}`.
 * Any pending sends are completed with the value of `false`.
 *
 * Note that the buffer is not emptied if there are still values remaining after
 * all of the pending receives have been handled. The channel will still provide
 * those values to any future receives, though no new values may be added to the
 * channel. Once the buffer is depleted, any future receives will return
 * `{@link module:csp.CLOSED|CLOSED}`.
 *
 * @memberof module:csp
 * @param {module:csp.Channel} channel The channel to be closed.
 */function close(channel){Object(_handler__WEBPACK_IMPORTED_MODULE_2__["close"])(channel);}/**
 * Used by channels to track execution of operations (`send`, `recv`, and
 * `select`). They provide two pieces of information: the function to call when
 * a `send` or `recv` unblocks (because a value given to send has been received,
 * or a `recv` has accepted a value that has been sent) and whether or not the
 * handler is still active.
 *
 * The function is a callback that actually defines the difference between
 * `{@link module:csp.send|send}` / `{@link module:csp.recv|recv}` /
 * `{@link module:csp.select|select}` and
 * `{@link module:csp.sendAsync|sendAsync}` /
 * `{@link module:csp.recvAsync|recvAsync}` /
 * `{@link module:csp.selectAsync|selectAsync}`: while the unblocked calls use
 * the callback passed to the function, `send`, `recv`, and `select` simply
 * continue the process where it left off. (This is why `send`, `recv`, and
 * `select` only work inside `async` functions with `await` if the return value
 * is needed, because otherwise there's no process to continue.)
 *
 * This function is provided as the return value of the `commit` method. Calling
 * `commit` has no extra effect with `send` and `recv` operations, but for
 * `select`, it also marks the handler as no longer being active. This means
 * that only one of the operations passed to select can be completed, because
 * after the first one, the handler is no longer active and will not be allowed
 * to process a second operation.
 *
 * If a `send` or `recv` (or equivalent `select` operation) cannot be
 * immediately completed because there isn't a corresponding pending `recv` or
 * `send`, the handler is queued to be run when a new `recv` or `send` becomes
 * available.
 *
 * @typedef Handler
 * @memberof module:csp/channel
 * @property {boolean} active Whether or not the operation is still active. An
 *     inactive operation is not serviced and will be cleared from the queue on
 *     the next dirty operation purge.
 * @property {function} commit Marks the handler as inactive (so it doesn't run
 *     twice) and returns the callback to be run when the operation completes.
 * @private
 */ /**
 * A callback function run when a `send` or `recv` operation completes.
 *
 * @callback HandlerCallback
 * @memberof module:csp/channel
 * @param {*} value The value provided by the channel. In a `recv`, this is the
 *     value received from the channel. In a `send`, this is `true` for a
 *     successful send and `false` if the channel is closed before the send can
 *     complete.
 * @private
 */ /***/},/***/"./src/modules/channel/select.js":/*!***************************************!*\
  !*** ./src/modules/channel/select.js ***!
  \***************************************/ /*! exports provided: DEFAULT, select, selectAsync, value, channel */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DEFAULT",function(){return DEFAULT;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"select",function(){return select;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"selectAsync",function(){return selectAsync;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"value",function(){return value;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"channel",function(){return channel;});/* harmony import */var _handler__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./handler */"./src/modules/channel/handler.js");/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */ /**
 * The name of the channel returned from `await
 * {@link module:csp.select|select}` or sent to the callback in
 * `{@link module:csp.selectAsync|selectAsync}` when the default is returned as
 * its value.
 *
 * This only happens when an `{@link module:csp.select|select} /
 * {@link module:csp.selectAsync|selectAsync}` call is performed, all operations
 * are initially blocking, and a `default` option is sent. The immediate
 * response in that situation is `{ value: options.default, channel: DEFAULT }`.
 *
 * @type {Symbol}
 * @memberof module:csp
 */const DEFAULT=Symbol("DEFAULT");/**
 * Creates a new handler used for `select` operations.
 *
 * @memberof module:csp/channel
 * @param {module:csp/channel.Box} active A boxed value indicating whether the
 *     handler is valid. This is a boxed value because the select-handling code
 *     needs to manipulate it directly.
 * @param {module:csp/channel.HandlerCallback} fn The callback to be run when
 *     (and if) the operation completes.
 * @return {module:csp/channel.Handler} The new handler.
 * @private
 */function selectHandler(active,fn){return Object.create(null,{active:{get(){return active.value;}},commit:{value:()=>{active.value=false;return fn;}}});}/**
 * Creates a randomly shuffled array containing one of each integer value from
 * `0` to an upper limit. It is used to randomly select a channel to be active
 * when multiples unblock in a `select` operation.
 *
 * @memberof module:csp/channel
 * @param {number} upper The upper limit of the array values, exclusive.
 * @return {number[]} An array of integers from `0` to `upper - 1`, shuffled
 *     into a random order.
 * @private
 */function randomArray(upper){const array=[];for(let k=0;k<upper;k++){array.push(k);}for(let j=upper-1;j>0;j--){const i=Math.floor(Math.random()*(j+1));const temp=array[j];array[j]=array[i];array[i]=temp;}return array;}/**
 * A result that comes from `select` operations.
 *
 * @typedef SelectResult
 * @property {*} value If the `select` operation resulted in a receive, this is
 *     the value received from the channel. If it resulted in a send, this is
 *     `true` for a successful send and `false` if the channel closed first.
 * @property {module:csp.Channel} channel The channel upon which the selected
 *     operation happened.
 * @memberof module:csp
 */ /**
 * Creates a select result from its component properties.
 *
 * @memberof module:csp/channel
 * @param {*} value If the `select` operation resulted in a receive, this is the
 *     value received from the channel. If it resulted in a send, this is `true`
 *     for a successful send and `false` if the channel closed first.
 * @param {module:csp.Channel} channel The channel upon which the selected
 *     operation happened.
 * @return {module:csp.SelectResult} The properties wrapped into an object for
 *     output.
 * @private
 */function selectResult(value,channel){return Object.assign(Object.create(null),{value,channel});}/**
 * Completes the first operation among the provided operations that comes
 * available, without blocking.
 *
 * This means that a call to `selectAsync` does not go into an `await`
 * expression, and it is not necessary to use it inside a process. Rather than
 * blocking until an operation completes, this one returns immediately and then
 * invokes the callback (if provided) as soon as one of the supplied operations
 * completes. It can be regarded as a non-blocking version of
 * `{@link module:csp.select|select}`.
 *
 * This function uses an operations list that's identical to the one used by
 * `{@link module:csp.select|select}`. It's an array of values; if a value is a
 * channel, then that operation is a take on that channel, while if it's a
 * two-element array of channel and value, then that operation is a put of that
 * value onto that channel. All options that are available to
 * `{@link module:csp.select|select}` are also available here.
 *
 * The callback is a function of one parameter, which in this case is an object
 * with `value` and `channel` properties.
 *
 * @memberof module:csp
 * @param {Object[]} operations A collection of elements that correspond to recv
 *     and send operations. A recv operation is signified by an element that is
 *     a channel (which is the channel to be received from). A send operation is
 *     specified by an element that is itself a two-element array, which has a
 *     channel followed by a value (which is the channel and value to be sent).
 * @param {module:csp.SelectCallback} callback A function that gets invoked when
 *     one of the operations completes.
 * @param {Object} [options={}] An optional object which can change the behavior
 *     of `selectAsync` through two properties.
 * @param {boolean} [options.priority=false] If `true`, then the priority of
 *     operations to complete when more than one is immediately available is a
 *     priority according to position within the operations array (earlier
 *     positions have the higher priority). If `false` or not present, the
 *     priorty of operation completion is random.
 * @param {*} [options.default] If set and all of the operations initially
 *     block, the `selectAsync` calls its callback immediately with the value of
 *     this option (the channel will be `{@link module:csp.DEFAULT|DEFAULT})`.
 *     If not set, the `selectAsync` call will not call its callback until one
 *     of the operations completes and that value and channel will be the ones
 *     returned.
 */function selectAsync(ops,callback=()=>{},options={}){const count=ops.length;if(count===0){throw Error("select called with no operations");}const priority=!!options.priority;const indices=priority?[]:randomArray(count);const active=Object(_handler__WEBPACK_IMPORTED_MODULE_0__["box"])(true);function createSelectHandler(channel){return selectHandler(active,value=>{callback(selectResult(value,channel));});}let result;for(let i=0;i<count;i++){// Choose an operation. If `priority` is true then it's the next index,
// otherwise it's random
const op=ops[priority?i:indices[i]];let channel,value;// Apply every operation to its channel, one at a time
if(Array.isArray(op)){[channel,value]=op;result=Object(_handler__WEBPACK_IMPORTED_MODULE_0__["handleSend"])(channel,value,createSelectHandler(channel));}else{channel=op;result=Object(_handler__WEBPACK_IMPORTED_MODULE_0__["handleRecv"])(channel,createSelectHandler(channel));}// We check for box here because a box from a channel indicates that the
// value is immediately available (that there is no need to block to get the
// value). If this happens, we execute the callback immediately with that
// value and channel and stop queueing other operations.
if(Object(_handler__WEBPACK_IMPORTED_MODULE_0__["isBox"])(result)){callback(selectResult(result.value,channel));break;}}// If none of the operaetions immediately returned values (they are all
// blocked), and we have set a default channel option, then return the value
// if the default channel rather than waiting for the queued operations to
// complete.
if(!Object(_handler__WEBPACK_IMPORTED_MODULE_0__["isBox"])(result)&&Object.prototype.hasOwnProperty.call(options,"default")){if(active.value){active.value=false;callback(selectResult(options.default,DEFAULT));}}}/**
 * Completes the first operation among the provided operations that comes
 * available, blocking the process until then.
 *
 * `operations` is an array whose elements must be channels or two-element
 * sub-arrays of channels and values, in any combination. An operation that is a
 * channel is a take operation on that channel. An operation that is a
 * two-element array is a put operation on that channel using that value.
 * Exactly one of these operations will complete, and it will be the first
 * operation that unblocks.
 *
 * This function *must* be called from within an `async` function and as part of
 * an `await` expression if the return value is needed.
 *
 * When `select` is completed and its process unblocks, its `await` expression
 * evaluates to an object of two properties. The `value` property becomes
 * exactly what would have been returned by the equivalent `await put` or `await
 * take` operation: a boolean in the case of a put, or the taken value in the
 * case of a take. The `channel` property is set to the channel where the
 * operation actually took place. This will be equivalent to the channel in the
 * `operations` array which completed first, allowing the process to unblock.
 *
 * If there is more than one operation already available to complete when the
 * call to `select` is made, the operation with the highest priority will be the
 * one to complete. Regularly, priority is non-deterministic (i.e., it's set
 * randomly). However, if the options object has a `priority` value set to
 * `true`, priority will be assigned in the order of the operations in the
 * supplied array.
 *
 * If all of the operations must block (i.e., there are no pending puts for take
 * operations, or takes for put operations), a default value may be returned.
 * This is only done if there is a `default` property in the options object, and
 * the value of that property becomes the value returned by `await select`. The
 * channel is set to the special value `{@link module:csp.DEFAULT|DEFAULT}`.
 *
 * @memberof module:csp
 * @param {object[]} operations A collection of elements that correspond to recv
 *     and send operations. A recv operation is signified by an element that is
 *     a channel (which is the channel to be taken from). A send operation is
 *     specified by an element that is itself a two-element array, which has a
 *     channel followed by a value (which is the channel and value to be sent).
 * @param {object} [options={}] An optional object which can change the behavior
 *     of `select` through two properties.
 * @param {boolean} [options.priority=false] If `true`, then the priority of
 *     operations to complete when more than one is immediately available is a
 *     priority according to position within the operations array (earlier
 *     positions have the higher priority). If `false` or not present, the
 *     priorty of operation completion is random.
 * @param {*} [options.default] If set and all of the operations initially
 *     block, the `select` call completes immediately with the value of this
 *     option (the channel will be `{@link module:csp.DEFAULT|DEFAULT})`. If not
 *     set, the `select` call will block until one of the operations completes
 *     and that value and channel will be the ones returned.
 * @return {Promise<module:csp.SelectResult>} A promise that will resolve to an
 *     object of two properties: `value` will contain the value that would have
 *     been returned by the corresponding `{@link module:csp.send|send}` or
 *     `{@link module:csp.recv|recv}` operation; and `channel` will be a
 *     reference to the channel that completed the operation to allow `select`
 *     to unblock.
 */function select(ops,options={}){return new Promise(resolve=>{selectAsync(ops,resolve,options);});}/**
 * A convenience function to read the value out of a select result. This
 * function is not necessary - after all, it's absolutely as correct to simply
 * use `result.value` instead of `value(result)`, but it's provided for
 * consistency with the rest of the function-centric API.
 *
 * @memberof module:csp
 * @param {module:csp.SelectResult} result The result coming from a select
 *     operation.
 * @return {*} The value provided by the select operation.
 */function value(result){return result.value;}/**
 * A convenience function to read the channel out of a select result. This
 * function is not necessary - after all, it's absolutely as correct to simply
 * use `result.channel` instead of `channel(result)`, but it's provided for
 * consistency with the rest of the function-centric API.
 *
 * @memberof module:csp
 * @param {module:csp.SelectResult} result The result coming from a select
 *     operation.
 * @return {module:csp.Channel} The channel upon which the select operation
 *     completed.
 */function channel(result){return result.channel;}/***/},/***/"./src/modules/dispatcher.js":/*!***********************************!*\
  !*** ./src/modules/dispatcher.js ***!
  \***********************************/ /*! exports provided: SET_IMMEDIATE, MESSAGE_CHANNEL, SET_TIMEOUT, config, dispatch */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* WEBPACK VAR INJECTION */(function(setImmediate){/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SET_IMMEDIATE",function(){return SET_IMMEDIATE;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MESSAGE_CHANNEL",function(){return MESSAGE_CHANNEL;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SET_TIMEOUT",function(){return SET_TIMEOUT;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"config",function(){return config;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"dispatch",function(){return dispatch;});/* harmony import */var modules_queue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/queue */"./src/modules/queue.js");/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */ /**
 * This is the place where the new JS tasks are actually created. A queue is
 * maintained for them, and as each batch of tasks are completed, the next ones
 * run. As each process runs, it adds tasks to be run to the queue, which are
 * each run in their own JS task.
 *
 * The function that spawns the new JS task depends on environment. The
 * `setImmediate` function is preferred as it's the fastest, not waiting for
 * event queues to empty before spawning the new process. However, it is not JS
 * standard and currently only works in IE and Node. If `setImmediate` isn't
 * available, an attempt is made to use `MessageChannel`'s `onMessage` is tried
 * next. If that is also not available, then `setTimeout` with `0` delay is
 * used, which is available everywhere but which is the least performant of all
 * of the solutions.
 *
 * There are other possibilities for creating processes, but they were rejected
 * as obsolete (`process.nextTick` and `onreadystatechange`) or unnecessary
 * (`window.postMessage`, which works like `MessageChannel` but doesn't work in
 * Web Workers).
 *
 * It is notable and important that we act as good citizens here. This
 * dispatcher is capable of taking control of the JavaScript engine until
 * thousands, millions, or more tasks are handled. But that could cause the
 * system event loop to have to wait an unacceptable amount of time. So we limit
 * ourselves to a batch of tasks at a time, and if there are still more to be
 * run, we let the event loop run before that next batch is processed.
 *
 * The dispatcher is **global**. There is a single instance that runs for all
 * channels and processes. This is the only element of the system that works
 * like this.
 *
 * @module csp/dispatcher
 * @see module:csp.config
 * @private
 */const queue=Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["queue"])();/**
 * The dispatch method option indicating that `setImmediate` should be used to
 * dispatch tasks.
 *
 * This is the default option. For environments that don't support
 * `setImmediate`, this falls back to
 * `{@link module:csp.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
 *
 * @memberof module:csp
 * @type {Symbol}
 * @see {@link module:csp.config|config}
 */const SET_IMMEDIATE=Symbol("SET_IMMEDIATE");/**
 * The dispatch method option indicating that a `MessageChannel` should be used
 * to dispatch tasks.
 *
 * For environments that don't support `MessageChannel`, this falls back to
 * `{@link module:csp.SET_TIMEOUT|SET_TIMEOUT}`.
 *
 * @memberof module:csp
 * @type {Symbol}
 * @see {@link module:csp.config|config}
 */const MESSAGE_CHANNEL=Symbol("MESSAGE_CHANNEL");/**
 * The dispatch method option indicating that `setTimeout` should be used to
 * dispatch tasks.
 *
 * This method is always available, but it's also always less efficient than any
 * other method, so it should be used as a last resort.
 *
 * @memberof module:csp
 * @type {Symbol}
 * @see  {@link module:csp.config|config}
 */const SET_TIMEOUT=Symbol("SET_TIMEOUT");const options={batchSize:1024,dispatchMethod:SET_IMMEDIATE};let dispatcher=createDispatcher();let running=false;let queued=true;/**
 * Creates and returns a function that can be used to dispatch tasks. The
 * function that is created depends on the currently selected `dispatchMethod`
 * that can be set with `{@link module:csp.config|config}`.
 *
 * @return A dispatcher function using the currently selected dispatch method.
 * @private
 */function createDispatcher(){switch(calcDispatchMethod()){// We prefer `setImmediate` if it's available, but it's only available in
// Node and some old browsers.
case SET_IMMEDIATE:return()=>{if(!(queued&&running)){queued=true;setImmediate(processTasks);}};// Most modern browsers implement `MessageChannel`. This is the preferred
// method in browser environments where `setImmediate` isn't available.
case MESSAGE_CHANNEL:{const channel=new MessageChannel();channel.port1.onmessage=()=>processTasks();return()=>{if(!(queued&&running)){queued=true;channel.port2.postMessage(0);}};}// If all else fails, just use `setTimeout`. It's a little slower than the
// other methods, but it's available everywhere.
case SET_TIMEOUT:return()=>{if(!(queued&&running)){queued=true;setTimeout(processTasks,0);}};}}/**
 * Calculates the actual dispatch method based on the current dispatch method
 * setting and environmental availability.
 *
 * The dispatch method is stored raw, so this function is necessary to take
 * environment into account. For example, if we're running in a modern browser
 * (which does not have `setImmediate`),
 * `{@link module:csp.SET_IMMEDIATE|SET_IMMEDIATE}` can still be recorded as the
 * dispatch method, but this function will return
 * `{@link module:csp.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`.
 *
 * @return {Symbol} The dispatch method to use based on setting and environment.
 * @private
 */function calcDispatchMethod(){switch(options.dispatchMethod){case MESSAGE_CHANNEL:if(typeof MessageChannel!=="undefined"){return MESSAGE_CHANNEL;}return SET_TIMEOUT;case SET_TIMEOUT:return SET_TIMEOUT;default:if(typeof setImmediate!=="undefined"){return SET_IMMEDIATE;}if(typeof MessageChannel!=="undefined"){return MESSAGE_CHANNEL;}return SET_TIMEOUT;}}/**
 * The heart of the dispatch process, this is the function run by the dispatch
 * function in order to actually run queued tasks.
 *
 * @private
 */function processTasks(){running=true;queued=false;let count=0;for(;;){const task=Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["dequeue"])(queue);if(task===modules_queue__WEBPACK_IMPORTED_MODULE_0__["EMPTY"]){break;}task();if(count>=options.batchSize){break;}count++;running=false;if(Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["count"])(queue)){dispatcher();}}}/**
 * Creates and assigns the global dispatch function based on dispatch method
 * setting and environmental availability.
 *
 * @private
 */function setDispatcher(){dispatcher=createDispatcher();}/**
 * The configuration of the Chanko dispatcher. An object like this is returned
 * from the {@link module:csp.config} function, and it may also be passed to the
 * same function (though each property is optional in that case).
 *
 * @typedef {object} DispatcherConfig
 * @memberof module:csp
 * @property {number} batchSize The maximum number of tasks that the dispatcher
 *     will run in a single batch.
 * @property {Symbol} dispatchMethod The method used to dispatch a process into
 *     a separate line of execution.
 */ /**
 * Sets one or more of the dispatcher configuration options.
 *
 * This is advanced setting for the dispatcher that is responsible for queueing
 * up channel operations and processes. It is likely that this function will
 * never need to be called in normal operation.
 *
 * If any recognized options are specified in the options object passed to
 * `config`, then the option is set to the value sent in. Properties that aren't
 * any of these options are ignored, and any of these options that do not appear
 * in the passed object are left with their current values.
 *
 * @memberof module:csp
 * @param {Object} opts A mapping of options to their new values. Extra values
 *     (properties that are not options) are ignored.
 * @param {number} [opts.batchSize] The maximum number of tasks that the
 *     dispatcher will run in a single batch (initially, this is 1024). If the
 *     number of pending tasks exceeds this, the remaining are not discarded.
 *     They're simply run as part of another batch after the current batch
 *     completes.
 * @param {Symbol} [opts.dispatchMethod] The method used to dispatch a process
 *     into a separate line of execution. Possible values are
 *     `{@link module:csp.SET_IMMEDIATE|SET_IMMEDIATE}`,
 *     `{@link module:csp.MESSAGE_CHANNEL|MESSAGE_CHANNEL}`, or
 *     `{@link module:csp.SET_TIMEOUT|SET_TIMEOUT}`, with the initial being
 *     `{@link module:csp.SET_IMMEDIATE|SET_IMMEDIATE}`. If a method is set but
 *     is not available in that environment, then it will silently fall back to
 *     the next method that is available.
 * @return {module:csp.DispatcherConfig} The configuration settings for the
 *     dispatcher after any new values have been set.
 */function config(opts={}){for(const key in options){if(key in opts){options[key]=opts[key];if(key==="dispatchMethod"){setDispatcher();}}}return Object.assign({},options);}/**
 * Queues a task to be run and starts the dispatch process.
 *
 * @param {function} task A task to be queued and run the next time a batch of
 *     tasks is run.
 * @private
 */function dispatch(task){Object(modules_queue__WEBPACK_IMPORTED_MODULE_0__["enqueue"])(queue,task);dispatcher();}/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(/*! ./../../../../node_modules/timers-browserify/main.js */"../../node_modules/timers-browserify/main.js").setImmediate);/***/},/***/"./src/modules/process.js":/*!********************************!*\
  !*** ./src/modules/process.js ***!
  \********************************/ /*! exports provided: sleep, go, join */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"sleep",function(){return sleep;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"go",function(){return go;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"join",function(){return join;});/* harmony import */var modules_channel__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/channel */"./src/modules/channel/index.js");/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */ /**
 * Provides small utility functions to make it easier to interact with async
 * functions as processes.
 *
 * @module csp/process
 * @private
 */ /**
 * Blocks the process for the specified time (in milliseconds) and then unblocks
 * it.
 *
 * This implements a delay, but one that's superior to other kinds of delays
 * (`setTimeout`, etc.) because it blocks the process and allows the dispatcher
 * to allow other processes to run while this one waits. The default delay is 0,
 * which will release the process to allow others to run and then immediately
 * re-queue it.
 *
 * This function *must* be called from within an `async` function and as part of
 * an `await` expression.
 *
 * When this function completes and its process unblocks, the `await` expression
 * doesn't take on any meaningful value. The purpose of this function is simply
 * to delay, not to communicate any data.
 *
 * @memberof module:csp
 * @param {number} [delay=0] the number of milliseconds that the process will
 *     block for. At the end of that time, the process is again eligible to be
 *     run by the dispatcher. If this is missing or set to `0`, the process will
 *     cede execution to the next one but immediately requeue itself to be run
 *     again.
 * @return {Promise} A promise that resolves with no meaningful result when the
 *     time has elapsed.
 */function sleep(delay=0){return new Promise(resolve=>{const ch=Object(modules_channel__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(delay);Object(modules_channel__WEBPACK_IMPORTED_MODULE_0__["recvAsync"])(ch,resolve);});}/**
 * Invokes an async function acting as a process.
 *
 * This is purely a convenience function, driven by the fact that it's necessary
 * to use an IIFE to invoke an anonymous async function, and that's not very
 * aesthetically pleasing. It does no more than invoke the passed function, but
 * that at least releases us from the need to put the empty parentheses after
 * the function definition.
 *
 * A named async function can simply be invoked (without being an IIFE) and
 * doesn't benefit from this convenience.
 *
 * Anonymous process without `go`:
 * ```
 * (async () => {
 *   ... do some process stuff here ...
 * })();
 * ```
 * Anonymous process with `go`:
 * ```
 * go(async () => {
 *   ... do some process stuff here ...
 * });
 * ```
 *
 * @memberof module:csp
 * @param {function} fn The async function being used as a process.
 * @param {...*} args Arguments that are sent to the async function when it's
 *     invoked.
 * @return {Promise} The promise returned by the async function.
 */function go(fn,...args){return fn(...args);}/**
 * Joins all of the provided processes into a single process, returning a
 * promise that wraps all of the individual processes' promises. Putting this in
 * an `await` statement will block until all of the processes complete.
 *
 * @memberof module:csp
 * @param {...function} fns Any number of async functions whose resolutions are
 *     being waited for.
 * @return {Promise} A promise that resolves when all of the processes promises
 *     resolve.
 */function join(...fns){return Promise.all(fns);}/***/},/***/"./src/modules/queue.js":/*!******************************!*\
  !*** ./src/modules/queue.js ***!
  \******************************/ /*! exports provided: EMPTY, queue, isQueue, count, isEmpty, enqueue, dequeue, peek, filter */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"EMPTY",function(){return EMPTY;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"queue",function(){return queue;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isQueue",function(){return isQueue;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"count",function(){return count;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isEmpty",function(){return isEmpty;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"enqueue",function(){return enqueue;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"dequeue",function(){return dequeue;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"peek",function(){return peek;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"filter",function(){return filter;});/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */ /**
 * Provides an efficient general-purpose queue.
 *
 * @module csp/queue
 * @private
 */ /**
 * A general purpose, highly efficient JavaScript queue. It is backed by a
 * JavaScript array, but it does not use `unshift` to take elements off the
 * array because unshift causes elements to be copied every time it's used.
 * Instead, a pointer is maintained that keeps track of the location of the next
 * element to be dequeued, and when that dequeue happens, the pointer simply
 * moves. When the empty space at the head of the array gets large enough, it's
 * removed by a single slice operation.
 *
 * Putting elements into the queue is just done with a basic `push`, which *is*
 * highly efficient.
 *
 * This type of queue is possible in JavaScript because JS arrays are resizable.
 * In languages with fixed-size arrays, a resizing operation would have to be
 * run each time the queue fills.
 *
 * @namespace Queue
 * @private
 */ /**
 * The value returned when a queue is read when it's empty.
 *
 * This special value is used because `null` and `undefined` are possible
 * legitimate values that can be stored in a queue. Another option is to use
 * some kind of `Maybe` or `Option` type, but that requires more effort on the
 * part of the end user to interface with.
 *
 * @type {Symbol}
 * @memberof module:csp
 */const EMPTY=Symbol("EMPTY");/**
 * A marker property name to indicate that an object is in fact a queue.
 *
 * A queue has a property with this name whose readonly value is set to `true`.
 * This is not meant to be read except by the
 * `{@link module:queue.isQueue|isQueue}` function.
 *
 * @type {Symbol}
 * @private
 */const QUEUE=Symbol("QUEUE");/**
 * Determines whether an object is a queue.
 *
 * @param {*} obj The object to be tested.
 * @return {boolean} Either `true` if the object is a queue or `false` if it is
 * not.
 */function isQueue(obj){return!!(obj===null||obj===void 0?void 0:obj[QUEUE]);}/**
 * Creates a new queue. This queue is created empty, with a backing array of
 * length 0.
 *
 * @memberof module:csp/queue
 * @returns {module:csp/queue~Queue} A new, empty queue.
 * @private
 */function queue(){return Object.create(null,{store:{value:[],writable:true},pointer:{value:0,writable:true},[QUEUE]:{value:true}});}/**
 * Returns the number of elements stored in a queue. This may or may not equal
 * the length of the backing store, as there is often empty space at the head of
 * the backing store.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue whose items are being
 *     counted.
 * @return {number} The number of items in the queue.
 * @private
 */function count(queue){return queue.store.length-queue.pointer;}/**
 * Determines whether a queue is empty.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue being checked for emptiness.
 * @return {boolean} Either `true` if the queue is empty or `false` if it is
 *     not.
 * @private
 */function isEmpty(queue){return queue.store.length===0;}/**
 * Adds an item to a queue.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue which is having an item added
 *     to it.
 * @param {*} item The item being added to the queue.
 * @private
 */function enqueue(queue,item){queue.store.push(item);}/**
 * Removes an item from a queue and returns that item. If the removal causes the
 * amount of empty space at the head of the backing store to exceed a threshold,
 * that empty space is removed.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue whose oldest item is to be
 *     removed.
 * @return {*} The oldest stored item in the queue.
 * @private
 */function dequeue(queue){if(queue.store.length===0){return EMPTY;}const item=queue.store[queue.pointer];// Removes the items in the backing store before the current pointer, if there
// is enough "empty" space before the pointer to justify it (i.e., the unused
// portion is at least half as large as the used portion)
if(++queue.pointer*2>=queue.store.length){queue.store=queue.store.slice(queue.pointer);queue.pointer=0;}return item;}/**
 * Returns the next item in a queue without removing it.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue whose oldest item is to be
 *     peeked at.
 * @return {*} The oldest item stored in the queue.
 * @private
 */function peek(queue){return queue.store.length===0?EMPTY:queue.store[queue.pointer];}/**
 * Filters out any item in a queue that does not cause the supplied predicate
 * function to return `true` when passed that item. This is not exactly a
 * general purpose queue operation, but we need it with channels that will
 * occasionally want to get rid of inactive handlers.
 *
 * @memberof module:csp/queue
 * @param {module:csp/queue~Queue} queue The queue being filtered.
 * @param {function} fn The predicate function that determines whether an
 *     element remains in the queue.
 */function filter(queue,predicate){for(let i=0,end=count(queue);i<end;i++){const item=dequeue(queue);if(predicate(item)){enqueue(queue,item);}}}/***/}/******/}));});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: map, merge, partition, pipe, split, tap, untap, untapAll, reduce, toChannel, toArray, debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modules_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/flow */ "./src/modules/flow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["partition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["split"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["tap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untap", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["untap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untapAll", function() { return modules_flow__WEBPACK_IMPORTED_MODULE_0__["untapAll"]; });

/* harmony import */ var modules_conversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/conversion */ "./src/modules/conversion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return modules_conversion__WEBPACK_IMPORTED_MODULE_1__["reduce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toChannel", function() { return modules_conversion__WEBPACK_IMPORTED_MODULE_1__["toChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return modules_conversion__WEBPACK_IMPORTED_MODULE_1__["toArray"]; });

/* harmony import */ var modules_timing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/timing */ "./src/modules/timing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return modules_timing__WEBPACK_IMPORTED_MODULE_2__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return modules_timing__WEBPACK_IMPORTED_MODULE_2__["throttle"]; });

/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of utility functions that give one or more channels some extra
 * functionality. Each of these accept one or more {@link module:csp.Channel}
 * objects and then combine or manipulate them in (hopefully) useful ways, such
 * as merging them, splitting them, reducing values they receive to a single
 * value, or throttling them so that they only produce one result in a given
 * time period.
 *
 * @module ops
 */



/**
 * A function that takes a single value and, depending on whether that value
 * meets the function's criteria for passing, returns `true` or `false`.
 *
 * @callback Predicate
 * @memberof module:ops
 * @param {*} value The value to test. Whether or not the value passes the test
 *     depends on the criteria established by the predicate.
 * @return {boolean} Either `true` if the value passes or `false` if it doesn't.
 */

/**
 * A function that maps its input(s) to an output value. It takes a variable
 * number of input values and calculates an output value from them.
 *
 * @callback Mapper
 * @memberof module:ops
 * @param {...*} values The input values.
 * @return {*} An output value calculated from the input values.
 */

/**
 * A function that integrates one of its values into the other. It's used for
 * reducing channel values into a single value.
 *
 * @callback Reducer
 * @memberof module:ops
 * @param {*} acc The current accumulated value.
 * @param {*} value The new value that needs to be integrated into the
 *     accumulated value.
 * @return {*} A new accumulated value, resulting from integrating `value` into
 *     the original accumulated value.
 */

/***/ }),

/***/ "./src/modules/common.js":
/*!*******************************!*\
  !*** ./src/modules/common.js ***!
  \*******************************/
/*! exports provided: isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Utility functions used by more than one other module.
 *
 * @module ops/common
 * @private
 */

/**
 * Determines whether the value passed is a finite number.
 *
 * @param {*} x The value to check.
 * @return {boolean} Either `true` if the value is a finite number or `false`
 *     if it is not.
 * @private
 */
function isNumber(x) {
  return Object.prototype.toString.call(x) === "[object Number]" && isFinite(x);
}

/***/ }),

/***/ "./src/modules/conversion.js":
/*!***********************************!*\
  !*** ./src/modules/conversion.js ***!
  \***********************************/
/*! exports provided: reduce, toChannel, toArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChannel", function() { return toChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncIterator */ "../../node_modules/@babel/runtime/helpers/asyncIterator.js");
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chanko/csp */ "../csp/lib/chanko-csp.js");
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of channel utilities for converting channels into other kinds of data,
 * and vice versa.
 *
 * @module ops/conversion
 * @private
 */

/**
 * Creates a single value from a channel by running its values through a
 * reducing function.
 *
 * For every value put onto the input channel, the reducing function is called
 * with two parameters: the accumulator that holds the result of the reduction
 * so far, and the new input value. The initial value of the accumulator is the
 * third parameter to `reduce`. The reduction is not complete until the input
 * channel closes.
 *
 * This function returns a channel. When the final reduced value is produced, it
 * is put onto this channel, and when that value is taken from it, the channel
 * is closed.
 *
 * ```
 * import { go, chan, send, recv, close } from "@csp";
 * import { reduce } from "@ops";
 *
 * const input = chan();
 * const output = reduce((acc, value) => acc + value, input, 0);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 *   close(input);
 * });
 *
 * go(async () => {
 *   const result = await recv(output);
 *   console.log(output);                  // -> 6
 * });
 *
 * ```
 *
 * Note that the input channel *must* be closed at some point, or no value will
 * ever appear on the output channel. The closing of the channel is what
 * signifies that the reduction should be completed.
 *
 * @memberof module:ops
 * @param {module:ops.Reducer} fn The reducer function responsible for turning
 *     the series of channel values into a single output value.
 * @param {module:csp.Channel} channel The channel whose values are being
 *     reduced into a single output value.
 * @param {*} init The initial value to feed into the reducer function for the
 *     first reduction step.
 * @return {module:csp.Channel} A channel that will, when the input channel
 *     closes, have the reduced value put into it. When this value is taken, the
 *     channel will automatically close.
 */

function reduce(fn, channel, init) {
  const output = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["chan"])();
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["go"])(async () => {
    let acc = init;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;

    var _iteratorError;

    try {
      for (var _iterator = _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_0___default()(channel), _step, _value; _step = await _iterator.next(), _iteratorNormalCompletion = _step.done, _value = await _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
        const value = _value;
        acc = fn(acc, value);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          await _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["sendAsync"])(output, acc, () => Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["close"])(output));
  });
  return output;
}
/**
 * Sends all values from an iterable to the supplied channel.
 *
 * If no channel is passed to this function, a new channel is created. In
 * effect, this directly converts an iterable into a channel with the same
 * values on it.
 *
 * The channel is closed after the final iterable value is sent to it.
 *
 * This function will convert any JavaScript object that implements the iterable
 * protocol. In other words, if it works in a `for...of` statement, it will work
 * here.
 *
 * ```
 * import { go, chan, recv, isClosed } from "@csp";
 * import { toChannel } from "@ops";
 *
 * const input = [1, 2, 3];
 * const output = toChannel(input);
 *
 * go(async () => {
 *   console.log(await recv(output));     // -> 1
 *   console.log(await recv(output));     // -> 2
 *   console.log(await recv(output));     // -> 3
 *   console.log(isClosed(output));       // -> true
 * });
 * ```
 *
 * @memberof module:ops
 * @param {iterable} iterable The iterable containing the values to be sent to
 *     the channel.
 * @param {module:csp.Channel} [channel] The channel onto which to put all of
 *     the array elements. If this is not present, a new channel will be
 *     created.
 * @return {module:csp.Channel} the channel onto which the array elements are
 *     put. This is the same as the input channel, but if no input channel is
 *     specified, this will be a new channel. It will close when the final value
 *     is taken from it.
 */


function toChannel(iterable, channel = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["chan"])(iterable.length)) {
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["go"])(async () => {
    for (const item of iterable) {
      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["send"])(channel, item);
    }

    Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_1__["close"])(channel);
  });
  return channel;
}
/**
 * Receives all of the values from a channel and pushes them into an array.
 *
 * If no array is passed to this function, a new (empty) one is created. In
 * effect, this directly converts a channel into an array with the same values.
 * Either way, this operation cannot complete until the input channel is closed.
 *
 * This function returns a channel. When the final array is produced, it is sent
 * to this channel, and when that value is received from it, the channel is
 * closed.
 *
 * ```
 * import { go, chan, send, recv, close } from "@csp";
 * import { toArray } from "@ops";
 *
 * const input = chan();
 * const output = toArray(input);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 *   close(input);
 * });
 *
 * go(async () => {
 *   const result = await recv(output);
 *   console.log(result);                     // -> [1, 2, 3]
 * });
 * ```
 *
 * Note that the input channel *must* be closed at some point, or no value will
 * ever appear on the output channel. The closing of the channel is what
 * signifies that all of the values needed to make the array are now available.
 *
 * @memberof module:ops
 * @param {module:csp.Channel} channel The channel from which values are
 *     received to put into the array.
 * @param {array} [array] The array to put the channel values into. If this is
 *     not present, a new, empty array will be created.
 * @return {module:csp.Channel} A channel that will, when the input channel
 *     closes, have the array of channel values put onto it. When this array is
 *     received, the channel will automatically close.
 */


function toArray(channel, array = []) {
  return reduce((acc, input) => {
    acc.push(input);
    return acc;
  }, channel, array);
}



/***/ }),

/***/ "./src/modules/flow.js":
/*!*****************************!*\
  !*** ./src/modules/flow.js ***!
  \*****************************/
/*! exports provided: pipe, partition, merge, split, tap, untap, untapAll, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return tap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untap", function() { return untap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untapAll", function() { return untapAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/csp */ "../csp/lib/chanko-csp.js");
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/common */ "./src/modules/common.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of channel operation functions for routing channels to other channels
 * in different ways.
 *
 * In each of these functions, the source channel will not be available to be
 * taken from, as all of the source channels will have their values taken by the
 * processes within these functions. The lone exception is `tap`, where the
 * regular function of the source channel will be restored if all taps are
 * removed. Even so, while at least one tap is in place, the source channel
 * cannot be taken from.
 *
 * @module ops/flow
 * @private
 */


const TAPS = Symbol("multitap/taps");
/**
 * Pipes the values from one channel to another channel.
 *
 * This ties two channels together so that puts on the source channel can be
 * taken off the destination channel. This does not duplicate values in any way;
 * if another process takes a value off the source channel, it will never appear
 * on the destination channel. In most cases you will not want to take values
 * off a channel once it's piped to another channel, since it's difficult to
 * know which values will go to which channel.
 *
 * Closing either channel will break the connection between the two. If the
 * source channel is closed, the destination channel will by default also be
 * closed. However, passing `true` as the third parameter will cause the
 * destination channel to remain open even when the source channel is closed
 * (the connection is still broken however).
 *
 * Because of the ability to leave the destination channel open, a possible use
 * case for this function is to wrap the destination channel(s) of one of the
 * other flow control functions below to have a channel that survives the source
 * channel closing. The rest of those functions (aside from the special-case
 * `{@link module:ops.tap|tap}`) automatically close their destination channels
 * when the source channels close.
 *
 * ```
 * import { go, chan, send, recv, close, isClosed } from "@csp";
 * import { pipe } from "@ops";
 *
 * const input = chan();
 * const output = pipe(input, chan());
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   close(input);
 * });
 *
 * go(async () => {
 *   console.log(await recv(output));      // -> 1
 *   console.log(await recv(output));      // -> 2
 *   console.log(isClosed(output));        // -> true
 * });
 * ```
 *
 * @memberof module:ops
 * @param {module:csp.Channel} src The source channel.
 * @param {module:csp.Channel} dest The destination channel.
 * @param {boolean} [keepOpen=false] A flag to indicate that the destination
 *     channel should be kept open after the source channel closes. By default
 *     the destination channel will close when the source channel closes.
 * @return {module:csp.Channel} The destination channel.
 */

function pipe(src, dst, keepOpen = false) {
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        if (!keepOpen) {
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        }

        break;
      }

      if (!(await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value))) {
        break;
      }
    }
  });
  return dst;
}
/**
 * Creates two new channels and routes values from a source channel to them
 * according to a predicate function.
 *
 * The supplied function is invoked with every value that is put onto the source
 * channel. Those that return `true` are routed to the first destination
 * channel; those that return `false` are routed to the second.
 *
 * The new channels are created by the function based on the buffer values
 * passed as the third and fourth parameters. If one or both of these are
 * missing, `null`, or `0`, the corresponding destination channel is unbuffered.
 * If one is a positive integer, the corresponding channel is buffered by a
 * fixed buffer of that size. If the parameter for a channel is a buffer, then
 * that buffer is used to buffer the new channel.
 *
 * Both new channels are closed when the source channel is closed.
 *
 *
 * ```
 * import { go, chan, send, close } from "@csp";
 * import { partition } from "@ops";
 *
 * const input = chan();
 * const ctrl = chan();
 * const [even, odd] = partition(x => x % 2 === 0, input, 3, 3);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 *   await send(input, 4);
 *   close(input);
 * });
 *
 * go(async () => {
 *   for await (const value of even) {
 *     console.log(value);
 *   }
 *   await send(ctrl);
 * });
 *
 * go(async () => {
 *   await recv(ctrl);
 *   for await (const value of odd) {
 *     console.log(value);
 *   }
 * });
 *
 * // The `ctrl` channel ensures that all of the values on the even channel are
 * // read before any of the values on the odd channel are (this is only
 * // possible because the output channels have buffers big enough to make sure
 * // that no send is blocked).
 * //
 * // -> 2
 * // -> 4
 * // -> 1
 * // -> 3
 * ```
 *
 * @memberof module:ops
 * @param {module:ops.Predicate} fn A predicate function used to test each value
 * on the input channel.
 * @param {module:csp.Channel} src The source channel.
 * @param {(number|module:csp.Buffer)} [tBuffer=0] A buffer used to create the
 *     destination channel which receives all values that passed the predicate.
 *     If this is a number, a {@link module:csp.FixedBuffer} of that size will
 *     be used. If this is `0` or not present, the channel will be unbuffered.
 * @param {(number|module:csp.Buffer)} [fBuffer=0] A buffer used to create the
 *     destination channel which receives all values that did not pass the
 *     predicate. If this is a number, a {@link module:csp.FixedBuffer} of that
 *     size will be used. If this is `0` or not present, the channel will be
 *     unbuffered.
 * @return {module:csp.Channel[]} An array of two channels. The first is the
 *     destination channel with all of the values that passed the predicate, the
 *     second is the destination channel with all of the values that did not
 *     pass the predicate.
 */


function partition(fn, src, tBuffer = 0, fBuffer = 0) {
  const tDst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(tBuffer);
  const fDst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(fBuffer);
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(tDst);
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(fDst);
        break;
      }

      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(fn(value) ? tDst : fDst, value);
    }
  });
  return [tDst, fDst];
}
/**
 * Merges one or more channels into a single destination channel.
 *
 * Values are given to the destination channel as they are sent to the source
 * channels. If `merge` is called when there are already values on multiple
 * source channels, the order that they're put onto the destination channel is
 * random.
 *
 * The destination channel is created by the function based on the buffer value
 * passed as the second parameter. If this is missing, `null`, or `0`, the
 * destination channel will be unbuffered. If it's a positive integer, the
 * destination channel is buffered by a fixed buffer of that size. If the
 * parameter is a buffer, then that buffer is used to buffer the destination
 * channel.
 *
 * As each source channel closes, it is removed from the merge, leaving the
 * channels that are still open to continue merging. When *all* of the source
 * channels close, then the destination channel is closed.
 *
 * ```
 * import { go, chan, send, recv } from "@csp";
 * import { merge } from "@ops";
 *
 * const input1 = chan();
 * const input2 = chan();
 * const input3 = chan();
 * const output = merge([input1, input2, input3]);
 *
 * go(async () => {
 *   // Because we're sending to all three channels in the same
 *   // process, we know the order in which the values will be
 *   // sent to the output channel; in general, we won't know this
 *   await send(input1, 1);
 *   await send(input2, 2);
 *   await send(input3, 3);
 * });
 *
 * go(async () => {
 *   console.log(await recv(output));      // -> 1
 *   console.log(await recv(output));      // -> 2
 *   console.log(await recv(output));      // -> 3
 * });
 * ```
 *
 * @memberof module:ops
 * @param {module:csp.Channel[]} srcs An array of source channels.
 * @param {(number|module:csp.Buffer)} [buffer=0] A buffer used to create the
 *     destination channel. If this is a number, a
 *     {@link module:csp.FixedBuffer} of that size will be used. If this is `0`
 *     or not present, the channel will be unbuffered.
 * @return {module:csp.Channel} The destination channel, which will receive all
 *     values put onto every source channel.
 */


function merge(srcs, buffer = 0) {
  const dst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(buffer);
  const inputs = srcs.slice();
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      if (inputs.length === 0) {
        break;
      }

      const {
        value,
        channel
      } = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["select"])(inputs);

      if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        inputs.splice(inputs.indexOf(channel), 1);
        continue;
      }

      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value);
    }

    Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
  });
  return dst;
}
/**
 * Splits a single channel into multiple destination channels, with each
 * destination channel receiving every value sent to the source channel.
 *
 * Every parameter after the first represents the buffer from a single
 * destination channel. Each `0` or `null` will produce an unbuffered channel,
 * while each positive integer will produce a channel buffered by a fixed buffer
 * of that size. Each buffer will produce a buffered channel backed by that
 * buffer. If there are no parameters after the first, then two unbuffered
 * channels will be produced as a default.
 *
 * When the source channel is closed, all destination channels will also be
 * closed. However, if destination channels are closed, they do nothing to the
 * source channel.
 *
 * ```
 * import { go, chan, send } from "@csp";
 * import { split } from "@ops";
 *
 * const input = chan();
 * const outputs = split(input, 3);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 *   await send(input, 3);
 * });
 *
 * go(async () => {
 *   for await (const output of outputs) {
 *     console.log(output);
 *     // -> 1
 *     // -> 2
 *     // -> 3
 *   }
 * });
 * ```
 *
 * This function moves its values to the output channels asynchronously. This
 * means that even when using unbuffered channels, it is not necessary for all
 * output channels to be received from before the next send to the input channel
 * can complete.
 *
 * @memberof module:ops
 * @param {module:csp.Channel} src The source channel.
 * @param {...(number|module:csp.Buffer)} [buffers=2] The buffers used to create
 *     the destination channels. Each entry is treated separately. If one is a
 *     number, then a {@link module:csp.FixedBuffer|FixedBuffer} of that size
 *     will be used. If one is a `0`, then the corresponding channel will be
 *     unbuffered. **Exception:** if a single number is passed, then that number
 *     of unbuferred channels will be created. This means that the default is to
 *     create two unbuffered channels. To create a single channel with a fixed
 *     buffer, use `{@link csp.fixed|fixed}` explicitly.
 * @return {module:csp.Channel[]} An array of destination channels.
 */


function split(src, ...buffers) {
  let bfs = buffers.length === 0 ? [2] : buffers;

  if (bfs.length === 1 && Object(modules_common__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(bfs[0])) {
    const count = bfs[0];
    bfs = [];

    for (let i = 0; i < count; i++) {
      bfs.push(0);
    }
  }

  const dsts = bfs.map(bf => Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(bf));
  const done = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
  let count = 0;

  function callback() {
    if (--count === 0) {
      Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(done);
    }
  }

  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        for (const dst of dsts) {
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        }

        break;
      }

      count = dsts.length;

      for (const dst of dsts) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(dst, value, callback);
      }

      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(done);
    }
  });
  return dsts;
}
/**
 * Utility function to add the ability to be tapped to a channel that is being
 * tapped. This will add a single property to that channel only (named
 * '@@multitap/taps' so as to decrease the chance of collision), but the tapping
 * functionality itself is provided outside the channel object. This new
 * property is an array of the channels tapping this channel, and it will be
 * removed if all taps are removed.
 *
 * @param {module:csp.Channel} src The source channel to be tapped.
 * @private
 */


function makeTap(src) {
  Object.defineProperty(src, TAPS, {
    configurable: true,
    writable: true,
    value: []
  });
  const done = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
  let count = 0;

  function callback() {
    if (--count === 0) {
      Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(done);
    }
  }

  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      const value = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(src);

      if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"] || src[TAPS].length === 0) {
        delete src[TAPS];
        break;
      }

      count = src[TAPS].length;

      for (const tap of src[TAPS]) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(tap, value, callback);
      }

      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(done);
    }
  });
}
/**
 * Taps a channel, sending all of the values sent to it to the destination
 * channel.
 *
 * A source channel can be tapped multiple times, and all of the tapping
 * (destination) channels receive each value sent to the tapped (source)
 * channel.
 *
 * This is different from `{@link module:ops.split|split}` in that it's
 * temporary. Channels can tap a channel and then untap it, multiple times, as
 * needed. If a source channel has all of its taps removed, then it reverts to a
 * normal channel, just as it was before it was tapped.
 *
 * Also unlike `{@link module:ops.split|split}`, each call can only tap once.
 * For multiple channels to tap a source channel, `tap` has to be called
 * multiple times.
 *
 * Closing either the source or any of the destination channels has no effect on
 * any of the other channels.
 *
 * ```
 * import { go, chan, send, recv } from "@csp";
 * import { tap } from "@ops";
 *
 * const input = chan();
 * const tapper = chan();
 * tap(input, tapper);
 *
 * go(async () => {
 *   await send(input, 1);
 *   await send(input, 2);
 * });
 *
 * go(async () => {
 *   console.log(await recv(tapper));   // -> 1
 *   console.log(await recv(tapper));   // -> 2
 * });
 *
 * ```
 *
 * @memberof module:ops
 * @param {module:csp.Channel} src The channel to be tapped.
 * @param {module:csp.Channel} [dest] The channel tapping the source channel. If
 *     this is not present, a new unbuffered channel will be created.
 * @return {module:csp.Channel} The destination channel. This is the same as the
 *     second argument, if present; otherwise it is the newly-created channel
 *     tapping the source channel.
 */


function tap(src, dst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])()) {
  if (!src[TAPS]) {
    makeTap(src);
  }

  if (!src[TAPS].includes(dst)) {
    src[TAPS].push(dst);
  }

  return dst;
}
/**
 * Untaps a previously tapping destination channel from its source channel.
 *
 * This removes a previously created tap. The destination (tapping) channel will
 * stop receiving the values sent to the source channel.
 *
 * If the destination channel was not, in fact, tapping the source channel, this
 * function will do nothing. If all taps are removed, the source channel reverts
 * to normal (i.e., it no longer has the tapping code applied to it and can be
 * taken from as normal).
 *
 * @memberof module:ops
 * @param {module:csp.Channel} src The tapped channel.
 * @param {module:csp.Channel} dest The channel that is tapping the source
 *     channel that should no longer be tapping the source channel.
 */


function untap(src, dst) {
  const taps = src[TAPS];

  if (taps) {
    const index = taps.indexOf(dst);

    if (index !== -1) {
      taps.splice(index, 1);

      if (taps.length === 0) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(src);
      }
    }
  }
}
/**
 * Removes all taps from a source channel.
 *
 * The previously-tapped channel reverts to a normal channel, while any channels
 * that might have been tapping it no longer receive values from the source
 * channel. If the source channel had no taps, this function does nothing.
 *
 * @memberof module:ops
 * @param {module:csp.Channel} src The tapped channel. All taps will be removed
 *     from this channel.
 */


function untapAll(src) {
  if (src[TAPS]) {
    src[TAPS] = [];
    Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(src);
  }
}
/**
 * Maps the values from one or more source channels through a function, sending
 * the results to a new channel.
 *
 * The mapping function is given one value from each source channel, after at
 * least one value becomes available on every source channel. The output value
 * from the function is then sent to the destination channel.
 *
 * The destination channel is created by the function based on the buffer value
 * passed as the third parameter. If this is missing, `null`, or `0`, the
 * destination channel will be unbuffered. If it's a positive integer, the
 * destination channel is buffered by a fixed buffer of that size. If the
 * parameter is a buffer, then that buffer is used to buffer the destination
 * channel.
 *
 * Once *any* source channel is closed, the mapping ceases and the destination
 * channel is also closed.
 *
 * This is obviously similar to a map transducer, but unlike a transducer, this
 * function works with multiple input channels. This is something that a
 * transducer on a single channel is unable to do.
 *
 * ```
 * import { go, chan, send, recv, close, isClosed } from "@csp";
 * import { map } from "@ops"
 *
 * const input1 = chan();
 * const input2 = chan();
 * const input3 = chan();
 * const output = map((x, y, z) => x + y + z, [input1, input2, input3]);
 *
 * go(async () => {
 *   await send(input1, 1);
 *   await send(input1, 2);
 *   await send(input1, 3);
 * });
 *
 * go(async () => {
 *   await send(input2, 10);
 *   await send(input2, 20);
 *   close(input2);
 * });
 *
 * go(async () => {
 *   await send(input3, 100);
 *   await send(input3, 200);
 *   await send(input3, 300);
 * });
 *
 * go(async () => {
 *   console.log(await recv(output));     // -> 111
 *   console.log(await recv(output));     // -> 222
 *   // Output closes now because input2 closes after 2 values
 *   console.log(isClosed(output));       // -> true
 * });
 * ```
 *
 * @memberof module:ops
 * @param {module:ops.Mapper} fn The mapping function. This should have one
 *     parameter for each source channel and return a single value.
 * @param {module:csp.Channel[]} srcs The source channels.
 * @param {(number|module:csp.Buffer)} [buffer=0] A buffer used to create the
 *     destination channel. If this is a number, a
 *     {@link module:csp.FixedBuffer} of that size will be used. If this is `0`
 *     or not present, the channel will be unbuffered.
 * @return {module:csp.Channel} The destination channel.
 */


function map(fn, srcs, buffer = 0) {
  const dst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(buffer);
  const srclen = srcs.length;
  const values = [];
  const callbacks = [];
  const temp = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
  let count;

  for (let i = 0; i < srclen; i++) {
    callbacks[i] = (index => {
      return value => {
        values[index] = value;

        if (--count === 0) {
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["sendAsync"])(temp, values.slice());
        }
      };
    })(i);
  }

  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    for (;;) {
      count = srclen;

      for (let i = 0; i < srclen; i++) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recvAsync"])(srcs[i], callbacks[i]);
      }

      const values = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["recv"])(temp);

      for (const value of values) {
        if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          // Once a source closes, we close the destination AND the rest of the
          // sources. Otherwise the sources will have nothing receiving from
          // them and sends to them will block forever. By closing them, sends
          // to them will immediately return `false` and not block.
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);

          for (const src of srcs) {
            Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(src);
          }

          return;
        }
      }

      await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, fn(...values));
    }
  });
  return dst;
}



/***/ }),

/***/ "./src/modules/timing.js":
/*!*******************************!*\
  !*** ./src/modules/timing.js ***!
  \*******************************/
/*! exports provided: debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chanko/csp */ "../csp/lib/chanko-csp.js");
/* harmony import */ var _chanko_csp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/common */ "./src/modules/common.js");
/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * A set of channel utilities for changing the timing of inputs being put onto
 * the input channel.
 *
 * @module ops/timing
 * @private
 */


/**
 * Debounces an input channel.
 *
 * Debouncing is the act of turning several input values into one. For example,
 * debouncing a channel driven by a `mousemove` event would cause only the final
 * `mousemove` event to be put onto the channel, dropping all of the other ones.
 * This can be desirable because `mousemove` events come in bunches, being
 * produced continually while the mouse is moving, and often all that we really
 * care about is to learn where the mouse ended up.
 *
 * This function does this by controlling which values that have been sent to
 * the source channel are made available on the destination channel, and when.
 *
 * The `delay` parameter determines the debounce threshold. Once the first value
 * is sent to the source channel, debouncing is in effect until the number of
 * milliseconds in `delay` passes without any other value being put onto that
 * channel. In other words, the delay will be refreshed if another value is sent
 * to the source channel before the delay elapses. After a full delay interval
 * passes without a value being sent to the source channel, the last value sent
 * becomes available on the destination channel.
 *
 * This behavior can be modified through four options: `leading`, `trailing`,
 * `maxDelay`, and `cancel`.
 *
 * If both `leading` and `trailing` are `true`, values will not be duplicated.
 * The first value put onto the source channel will be put onto the destination
 * channel immediately (per `leading`) and the delay will begin, but a value
 * will only be made available on the destination channel at the end of the
 * delay (per `trailing`) if *another* input value was put onto the source
 * channel before the delay expired.
 *
 * @memberof module:ops
 * @param {module:csp.Channel} src The source channel.
 * @param {(number|module:csp.Buffer)} [buffer=0] A buffer used to create the
 *     destination channel. If this is a number, a
 *     {@link module:csp.FixedBuffer|FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @param {number} delay The debouncing delay, in milliseconds.
 * @param {Object} [options={}] A set of options to further configure the
 *     debouncing.
 * @param {boolean} [options.leading=false] Instead of making a value available
 *     on the destination channel after the delay passes, the first value put
 *     onto the source channel is made available *before* the delay begins. No
 *     value is available on the destination channel after the delay has elapsed
 *     (unless `trailing` is also `true`).
 * @param {boolean} [options.trailing=true] The default behavior, where a value
 *     is not made available on the destination channel until the entire delay
 *     passes without a new value being put on the source channel.
 * @param {number} [options.maxDelay=0] The maximum delay allowed before a value
 *     is put onto the destination channel. Debouncing can, in theory, go on
 *     forever as long as new input values continue to be put onto the source
 *     channel before the delay expires. Setting this option to a positive
 *     number sets the maximum number of milliseconds that debouncing can go on
 *     before it's forced to end, even if in the middle of a debouncing delay.
 *     Having debouncing end through the max delay operates exactly as if it had
 *     ended because of lack of input; the last input is made available on the
 *     destination channel (if `trailing` is `true`), and the next input will
 *     trigger another debounce operation.
 * @param {module:csp.Channel} [options.cancel] A channel used to signal a
 *     cancellation of the debouncing. Any value put onto this channel will
 *     cancel the current debouncing operation, closing the output channel and
 *     discarding any values that were waiting for the debounce threshold timer
 *     to be sent to the output.
 * @return {module:csp.Channel} The newly-created destination channel, where all
 *     of the values will be debounced from the source channel.
 */

function debounce(src, buffer, delay, options) {
  const defaults = {
    leading: false,
    trailing: true,
    maxDelay: 0,
    cancel: Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])()
  };
  const [buf, del, opts] = Object(modules_common__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(delay) ? [buffer, delay, Object.assign(defaults, options !== null && options !== void 0 ? options : {})] : [0, buffer, Object.assign(defaults, delay !== null && delay !== void 0 ? delay : {})];
  const dst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(buf);
  const {
    leading,
    trailing,
    maxDelay,
    cancel
  } = opts;
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    let timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
    let max = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
    let current = _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];

    for (;;) {
      const {
        value,
        channel
      } = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["select"])([src, timer, max, cancel]);

      if (channel === cancel) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        break;
      }

      if (channel === src) {
        if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
          break;
        }

        const timing = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["isTimed"])(timer);
        timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(del);

        if (!timing && maxDelay > 0) {
          max = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(maxDelay);
        }

        if (leading) {
          if (!timing) {
            await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value);
          } else {
            current = value;
          }
        } else if (trailing) {
          current = value;
        }
      } else {
        timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
        max = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();

        if (trailing && current !== _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, current);
          current === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];
        }
      }
    }
  });
  return dst;
}
/**
 * Throttles an input channel.
 *
 * Throttling is the act of ensuring that something only happens once per time
 * interval. In this case, it means that a value sent to the source channel is
 * only made available to the destination channel once per a given number of
 * milliseconds. An example usage would be with window scroll events; these
 * events are nearly continuous as scrolling is happening, and perhaps we don't
 * want to call an expensive UI updating function every time a scroll event is
 * fired. We can throttle the input channel and make it only offer up the scroll
 * events once every 100 milliseconds, for instance.
 *
 * Throttling is effected by creating a new channel as a throttled destination
 * for values sent to the source channel. Values will only appear on that
 * destination channel once per delay interval; other values that are put onto
 * the source channel in the meantime are discarded.
 *
 * The `delay` parameter controls how often a value can become available on the
 * destination channel. When the first value is sent to the source channel, it
 * is immediately sent to the destination channel as well and the delay begins.
 * Any further values sent to the source channel during that delay are *not*
 * passed through; only when the delay expires is the last input value made
 * available on the destination channel. The delay then begins again, so that
 * further inputs are squelched until *that* delay passes. Throttling continues,
 * only allowing one value through per interval, until an entire interval passes
 * without input.
 *
 * This behavior can be modified by three options: `leading`, `trailing`, and
 * `cancel`.
 *
 * If both `leading` and `trailing` are `true`, values will not be duplicated.
 * The first value sent to the source channel will be put onto the destination
 * channel immediately (per `leading`) and the delay will begin, but a value
 * will only be made available on the destination channel at the end of the
 * delay (per `trailing`) if *another* input value was sent to the source
 * channel before the delay expired.
 *
 * @memberof module:ops
 * @param {module:csp.Channel} src The source channel.
 * @param {(number|module:csp.Buffer)} [buffer=0] A buffer used to create the
 *     destination channel. If this is a number, a
 *     {@link module:csp.FixedBuffer|FixedBuffer} of that size will be used. If
 *     this is `0` or not present, the channel will be unbuffered.
 * @param {number} delay The throttling delay, in milliseconds.
 * @param {Object} [options={}] A set of options to further configure the
 * throttling.
 * @param {boolean} [options.leading=true] Makes the value that triggered the
 *     throttling immediately available on the destination channel before
 *     beginning the delay. If this is `false`, the first value will not be put
 *     onto the destination channel until a full delay interval passes.
 * @param {boolean} [options.trailing=true] Makes the last value put onto the
 *     source channel available on the destination channel when the delay
 *     expires. If this is `false`, any inputs that come in during the delay are
 *     ignored, and the next value is not put onto the destination channel until
 *     the first input *after* the delay expires.
 * @param {module:csp.Channel} [options.cancel] A channel used to signal a
 *     cancellation of the throttling. Any value put onto this channel will
 *     cancel the current throttling operation, closing the output channel and
 *     discarding any values that were waiting for the throttle threshold timer
 *     to be sent to the output.
 * @return {module:csp.Channel}} The newly-created destination channel, where
 *     all of the values will be throttled from the source channel.
 */


function throttle(src, buffer, delay, options) {
  const defaults = {
    leading: true,
    trailing: true,
    cancel: Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])()
  };
  const [buf, del, opts] = Object(modules_common__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(delay) ? [buffer, delay, Object.assign(defaults, options !== null && options !== void 0 ? options : {})] : [0, buffer, Object.assign(defaults, delay !== null && delay !== void 0 ? delay : {})];
  const dst = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])(buf);
  const {
    leading,
    trailing,
    cancel
  } = opts;
  Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["go"])(async () => {
    let timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
    let current = _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];

    for (;;) {
      const {
        value,
        channel
      } = await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["select"])([src, timer, cancel]);

      if (channel === cancel) {
        Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
        break;
      }

      if (channel === src) {
        if (value === _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
          Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["close"])(dst);
          break;
        }

        const timing = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["isTimed"])(timer);

        if (!timing) {
          timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(del);
        }

        if (leading) {
          if (!timing) {
            await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, value);
          } else if (trailing) {
            current = value;
          }
        } else if (trailing) {
          current = value;
        }
      } else if (trailing && current !== _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"]) {
        timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["timedChan"])(del);
        await Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["send"])(dst, current);
        current = _chanko_csp__WEBPACK_IMPORTED_MODULE_0__["CLOSED"];
      } else {
        timer = Object(_chanko_csp__WEBPACK_IMPORTED_MODULE_0__["chan"])();
      }
    }
  });
  return dst;
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29wcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3hkdWNlVG9vbHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29wcy9jc3AveGR1Y2VUb29scy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvY3NwL3hkdWNlVG9vbHMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL29wcy9jc3AveGR1Y2VUb29scy9zcmMvbW9kdWxlcy9pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC94ZHVjZVRvb2xzL3NyYy9tb2R1bGVzL3Byb3RvY29sLmpzIiwid2VicGFjazovL29wcy9jc3AveGR1Y2VUb29scy9zcmMvbW9kdWxlcy9yZWR1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC94ZHVjZVRvb2xzL3NyYy9tb2R1bGVzL3RyYW5zZm9ybWF0aW9uLmpzIiwid2VicGFjazovL29wcy9jc3AveGR1Y2VUb29scy9zcmMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2NoYW5uZWwvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2NoYW5uZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9jaGFubmVsL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2Rpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9wcm9jZXNzLmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvcXVldWUuanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29wcy8uL3NyYy9tb2R1bGVzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvbW9kdWxlcy9jb252ZXJzaW9uLmpzIiwid2VicGFjazovL29wcy8uL3NyYy9tb2R1bGVzL2Zsb3cuanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL21vZHVsZXMvdGltaW5nLmpzIl0sIm5hbWVzIjpbImtleXMiLCJPYmplY3QiLCJpbmRleCIsImsiLCJvYmoiLCJrZXkiLCJ2Iiwia3YiLCJjdXJyZW50IiwiZm4iLCJzb3J0Rm4iLCJpc0Z1bmN0aW9uIiwidmFsdWUiLCJTeW1ib2wiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZnVuY3Rpb25JdGVyYXRvciIsImlzT2JqZWN0Iiwib2JqZWN0SXRlcmF0b3IiLCJpc0ltcGxlbWVudGVkIiwicHJvdG9jb2xzIiwiaW5pdCIsInN0ZXAiLCJyZXN1bHQiLCJyZWR1Y2VkIiwiY29sbGVjdGlvbiIsInAiLCJpc1N0cmluZyIsImlzQXJyYXkiLCJFcnJvciIsImFjYyIsIm1heCIsIk1hdGgiLCJpbnB1dCIsIkFSUkFZX1JFRFVDRVIiLCJ0b1JlZHVjZXIiLCJPQkpFQ1RfUkVEVUNFUiIsIlNUUklOR19SRURVQ0VSIiwieGZvcm0iLCJyIiwiaXNDb21wbGV0ZWQiLCJjb21wbGV0ZSIsInVuY29tcGxldGUiLCJpdGVyIiwiaXRlcmF0b3IiLCJyZWR1Y2VyIiwic3RlcFJlZHVjZXIiLCJ4aXRlciIsInhmIiwiY29tcGxldGVkIiwiaXRlbXMiLCJkb25lIiwiY291bnQiLCJzdGVwVmFsdWUiLCJzSXRlcmF0b3IiLCJpIiwicmVkdWNlIiwidHJhbnNkdWNlIiwidHJhbnNkdWNpbmdJdGVyYXRvciIsImFzQXJyYXkiLCJhc09iamVjdCIsImFzU3RyaW5nIiwiYXNJdGVyYXRvciIsInRhcmdldCIsInJldmVyc2VkIiwiZm5zIiwidG9TdHJpbmciLCJwcm90byIsImN0b3IiLCJpc0Zpbml0ZSIsIkFycmF5IiwiQlVGRkVSIiwiRklYRUQiLCJEUk9QUElORyIsIlNMSURJTkciLCJxdWV1ZSIsInEiLCJzaXplIiwiYnVmZmVyIiwicUNvdW50IiwiZW5xdWV1ZSIsImRlcXVldWUiLCJNQVhfRElSVFkiLCJNQVhfUVVFVUVEIiwiQ0xPU0VEIiwiQk9YIiwid3JpdGFibGUiLCJoYW5kbGVyIiwiaXNUaW1lZCIsIm1heERpcnR5IiwibWF4UXVldWVkIiwicmVjdnMiLCJzZW5kcyIsImRpcnR5UmVjdnMiLCJkaXJ0eVNlbmRzIiwiY2xvc2VkIiwiaXNCdWZmZXJlZCIsImNoYW5uZWwiLCJib3giLCJpc0Z1bGwiLCJpc1JlZHVjZWQiLCJyZWNlaXZlciIsIkVNUFRZIiwiY2FsbGJhY2siLCJ2YWwiLCJyZW1vdmUiLCJkaXNwYXRjaCIsImNsb3NlIiwiZmlsdGVyIiwic2VuZGVyIiwic2VuZEJveCIsInNlbmRIYW5kbGVyIiwiREVGQVVMVF9IQU5ETEVSIiwiYWN0aXZlIiwiY29tbWl0IiwiYWRkIiwiaGFuZGxlRXhjZXB0aW9uIiwiYnVmZmVyUmVkdWNlciIsImJ1ZiIsIm9wdHMiLCJmaXhlZCIsImlzQnVmZmVyIiwidGltZXIiLCJkZWZhdWx0T3B0aW9ucyIsInBhcnNlQXJncyIsInRyYW5zZHVjZXIiLCJoYW5kbGVyVHJhbnNkdWNlciIsImNoIiwiY2hhbkltcGwiLCJyZWN2Iiwic2V0VGltZW91dCIsImNsb3NlSW1wbCIsImRlbGF5IiwiY2hhbiIsImhhbmRsZVNlbmQiLCJvcEhhbmRsZXIiLCJoYW5kbGVSZWN2IiwicmVzb2x2ZSIsInNlbmRBc3luYyIsInJlY3ZBc3luYyIsInJlamVjdCIsIkRFRkFVTFQiLCJnZXQiLCJhcnJheSIsImoiLCJ1cHBlciIsInRlbXAiLCJvcHRpb25zIiwib3BzIiwicHJpb3JpdHkiLCJpbmRpY2VzIiwicmFuZG9tQXJyYXkiLCJzZWxlY3RIYW5kbGVyIiwic2VsZWN0UmVzdWx0Iiwib3AiLCJjcmVhdGVTZWxlY3RIYW5kbGVyIiwiaXNCb3giLCJzZWxlY3RBc3luYyIsIlNFVF9JTU1FRElBVEUiLCJNRVNTQUdFX0NIQU5ORUwiLCJTRVRfVElNRU9VVCIsImJhdGNoU2l6ZSIsImRpc3BhdGNoTWV0aG9kIiwiZGlzcGF0Y2hlciIsImNyZWF0ZURpc3BhdGNoZXIiLCJydW5uaW5nIiwicXVldWVkIiwiY2FsY0Rpc3BhdGNoTWV0aG9kIiwic2V0SW1tZWRpYXRlIiwicHJvY2Vzc1Rhc2tzIiwidGFzayIsInNldERpc3BhdGNoZXIiLCJ0aW1lZENoYW4iLCJQcm9taXNlIiwiUVVFVUUiLCJzdG9yZSIsInBvaW50ZXIiLCJpdGVtIiwiZW5kIiwicHJlZGljYXRlIiwiaXNOdW1iZXIiLCJ4IiwicHJvdG90eXBlIiwiY2FsbCIsIm91dHB1dCIsImdvIiwidG9DaGFubmVsIiwiaXRlcmFibGUiLCJsZW5ndGgiLCJzZW5kIiwidG9BcnJheSIsInB1c2giLCJUQVBTIiwicGlwZSIsInNyYyIsImRzdCIsImtlZXBPcGVuIiwicGFydGl0aW9uIiwidEJ1ZmZlciIsImZCdWZmZXIiLCJ0RHN0IiwiZkRzdCIsIm1lcmdlIiwic3JjcyIsImlucHV0cyIsInNsaWNlIiwic2VsZWN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInNwbGl0IiwiYnVmZmVycyIsImJmcyIsImRzdHMiLCJtYXAiLCJiZiIsIm1ha2VUYXAiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsInRhcCIsImluY2x1ZGVzIiwidW50YXAiLCJ0YXBzIiwidW50YXBBbGwiLCJzcmNsZW4iLCJ2YWx1ZXMiLCJjYWxsYmFja3MiLCJkZWJvdW5jZSIsImRlZmF1bHRzIiwibGVhZGluZyIsInRyYWlsaW5nIiwibWF4RGVsYXkiLCJjYW5jZWwiLCJkZWwiLCJhc3NpZ24iLCJ0aW1pbmciLCJ0aHJvdHRsZSJdLCJtYXBwaW5ncyI6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QWpCO0FBQ0Q7O0FBRUQsWUFBSUosT0FBSixFQUFhO0FBQ1gsY0FBSSxDQUFDTSxNQUFMLEVBQWE7QUFDWCxrQkFBTTdDLHdEQUFJLENBQUNNLEdBQUQsRUFBTXRMLEtBQU4sQ0FBVjtBQUNELFdBRkQsTUFFTyxJQUFJd04sUUFBSixFQUFjO0FBQ25CNU4sbUJBQU8sR0FBR0ksS0FBVjtBQUNEO0FBQ0YsU0FORCxNQU1PLElBQUl3TixRQUFKLEVBQWM7QUFDbkI1TixpQkFBTyxHQUFHSSxLQUFWO0FBQ0Q7QUFDRixPQXBCRCxNQW9CTyxJQUFJd04sUUFBUSxJQUFJNU4sT0FBTyxLQUFLMkUsa0RBQTVCLEVBQW9DO0FBQ3pDc0MsYUFBSyxHQUFHa0QsNkRBQVMsQ0FBQzRELEdBQUQsQ0FBakI7QUFDQSxjQUFNM0Msd0RBQUksQ0FBQ00sR0FBRCxFQUFNMUwsT0FBTixDQUFWO0FBQ0FBLGVBQU8sR0FBRzJFLGtEQUFWO0FBQ0QsT0FKTSxNQUlBO0FBQ0xzQyxhQUFLLEdBQUdXLHdEQUFJLEVBQVo7QUFDRDtBQUNGO0FBQ0YsR0F4Q0MsQ0FBRjtBQTBDQSxTQUFPOEQsR0FBUDtBQUNEIiwiZmlsZSI6ImNoYW5rby1vcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvcHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib3BzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hc3luY0l0ZXJhdG9yKGl0ZXJhYmxlKSB7XG4gIHZhciBtZXRob2Q7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAoU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtcbiAgICAgIGlmIChtZXRob2QgIT0gbnVsbCkgcmV0dXJuIG1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICB9XG5cbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgICBtZXRob2QgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdO1xuICAgICAgaWYgKG1ldGhvZCAhPSBudWxsKSByZXR1cm4gbWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgaXMgbm90IGFzeW5jIGl0ZXJhYmxlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY0l0ZXJhdG9yOyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNzcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjc3BcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gIHZhciBmcm9udCwgYmFjaztcblxuICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICBuZXh0OiBudWxsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYmFjaykge1xuICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICB2YXIgd3JhcHBlZEF3YWl0ID0gdmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHdyYXBwZWRBd2FpdCA/IHZhbHVlLndyYXBwZWQgOiB2YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIGlmICh3cmFwcGVkQXdhaXQpIHtcbiAgICAgICAgICByZXN1bWUoa2V5ID09PSBcInJldHVyblwiID8gXCJyZXR1cm5cIiA6IFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCBhcmcpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICBpZiAoZnJvbnQpIHtcbiAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgaWYgKHR5cGVvZiBnZW5bXCJyZXR1cm5cIl0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRoaXNbXCJyZXR1cm5cIl0gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xufVxuXG5Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbn07XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInJldHVyblwiXSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3luY0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfQXdhaXRWYWx1ZTsiLCJ2YXIgQXdhaXRWYWx1ZSA9IHJlcXVpcmUoXCIuL0F3YWl0VmFsdWVcIik7XG5cbmZ1bmN0aW9uIF9hd2FpdEFzeW5jR2VuZXJhdG9yKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2F3YWl0QXN5bmNHZW5lcmF0b3I7IiwidmFyIEFzeW5jR2VuZXJhdG9yID0gcmVxdWlyZShcIi4vQXN5bmNHZW5lcmF0b3JcIik7XG5cbmZ1bmN0aW9uIF93cmFwQXN5bmNHZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF93cmFwQXN5bmNHZW5lcmF0b3I7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wieGR1Y2VUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ4ZHVjZVRvb2xzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cbi8qKlxuICogVGhlIGNlbnRyYWwgbW9kdWxlIGZvciB0aGUgdHJhbnNkdWNlciBlbmdpbmUuXG4gKlxuICogQWxsIG9mIHRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgZGVhbCBkaXJlY3RseSB3aXRoIHRyYW5zZHVjZXJzLiBCdXRcbiAqIGZpcnN0LCBsZXQncyB0YWxrIGFib3V0IHRoZSBwcm90b2NvbHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgcmVmZXJyZWQgdG9cbiAqIHRocm91Z2hvdXQgbWFueSBvZiB0aGUgZnVuY3Rpb24gZGlzY3Vzc2lvbnMuXG4gKlxuICogIyMgUHJvdG9jb2xzXG4gKlxuICogT25lIG9mIHRoZSBrZXkgc2VsbGluZyBwb2ludHMgZm9yIHRyYW5zZHVjZXJzIGlzIHRoYXQgdGhlIHNhbWUgdHJhbnNkdWNlciBjYW5cbiAqIGJlIHVzZWQgb24gYW55IHR5cGUgb2YgY29sbGVjdGlvbi4gUmF0aGVyIHRoYW4gaGF2aW5nIHRvIHdyaXRlIGEgbmV3IGBtYXBgXG4gKiBmdW5jdGlvbiAoZm9yIGV4YW1wbGUpIGZvciBldmVyeSBraW5kIG9mIGNvbGxlY3Rpb24gLSBvbmUgZm9yIGFuIGFycmF5LCBvbmVcbiAqIGZvciBhIHN0cmluZywgb25lIGZvciBhbiBpdGVyYXRvciwgZXRjLiAtIHRoZXJlIGlzIGEgc2luZ2xlIGBtYXBgIHRyYW5zZHVjZXJcbiAqIHRoYXQgd2lsbCB3b3JrIHdpdGggYWxsIG9mIHRoZW0sIGFuZCBwb3RlbnRpYWxseSB3aXRoICphbnkqIGtpbmQgb2ZcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgcG9zc2libGUgaW1wbGVtZW50aW5nICpwcm90b2NvbHMqIG9uIHRoZSBjb2xsZWN0aW9ucy5cbiAqXG4gKiBBIHByb3RvY29sIGluIEphdmFTY3JpcHQgaXMgbXVjaCBsaWtlIGFuIGludGVyZmFjZSBpbiBsYW5ndWFnZXMgbGlrZSBKYXZhIGFuZFxuICogQyMuIEl0IGlzIGEgY29tbWl0bWVudCB0byBwcm92aWRpbmcgYSBjZXJ0YWluIGZ1bmN0aW9uYWxpdHkgdW5kZXIgYSBjZXJ0YWluXG4gKiBuYW1lLiBFUzIwMTUgaGFzIHNlZW4gdGhlIGludHJvZHVjdGlvbiBvZiBhbiBgaXRlcmF0b3JgIHByb3RvY29sLCBmb3JcbiAqIGV4YW1wbGUsIGFuZCBsYW5ndWFnZSBzdXBwb3J0IGZvciBpdCAodGhlIG5ldyBgZm9yLi4ub2ZgIGxvb3AgY2FuIHdvcmsgd2l0aFxuICogYW55IG9iamVjdCB0aGF0IGNvcnJlY3RseSBpbXBsZW1lbnRzIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sKS5cbiAqXG4gKiBUbyBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgWGR1Y2UgZXhwZWN0cyBjb2xsZWN0aW9ucyB0byBpbXBsZW1lbnQgZm91clxuICogcHJvdG9jb2xzLlxuICpcbiAqIC0gYGl0ZXJhdG9yYDogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gaXRlcmF0b3IgKHRoaXMgb25lIGlzIGJ1aWx0IGluIHRvXG4gKiAgIEVTNiBKYXZhU2NyaXB0KVxuICogLSBgdHJhbnNkdWNlci9pbml0YDogYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZVxuICogICBvdXRwdXQgY29sbGVjdGlvblxuICogLSBgdHJhbnNkdWNlci9zdGVwYDogYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGFjY3VtdWxhdG9yICh0aGUgcmVzdWx0IG9mIHRoZVxuICogICByZWR1Y3Rpb24gc28gZmFyKSBhbmQgdGhlIG5leHQgaW5wdXQgdmFsdWUsIGFuZCB0aGVuIHJldHVybnMgdGhlXG4gKiAgIGFjY3VtdWxhdG9yIHdpdGggdGhlIG5leHQgaW5wdXQgdmFsdWUgYWRkZWQgdG8gaXRcbiAqIC0gYHRyYW5zZHVjZXIvcmVzdWx0YDogYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZWR1Y2VkIGNvbGxlY3Rpb24gYW5kXG4gKiAgIHJldHVybnMgdGhlIGZpbmFsIG91dHB1dCBjb2xsZWN0aW9uXG4gKlxuICogYGl0ZXJhdG9yYCBpcyB0aGUgYnVpbHQtaW4gSmF2YVNjcmlwdCBwcm90b2NvbC4gV2hlbiBjYWxsZWQsIGl0IGlzIGV4cGVjdGVkXG4gKiB0byByZXR1cm4gYW4gaXRlcmF0b3Igb3ZlciB0aGUgaW1wbGVtZW50aW5nIGNvbGxlY3Rpb24uIFRoaXMgaXRlcmF0b3IgaXMgYW5cbiAqIG9iamVjdCB0aGF0IGhhcyBhIGBuZXh0YCBmdW5jdGlvbi4gRWFjaCBjYWxsIHRvIGBuZXh0YCBpcyBleHBlY3RlZCB0byByZXR1cm5cbiAqIGFuIG9iamVjdCB3aXRoIGB2YWx1ZWAgYW5kIGBkb25lYCBwcm9wZXJ0aWVzLCB3aGljaCByZXNwZWN0aXZlbHkgaG9sZCB0aGVcbiAqIG5leHQgdmFsdWUgb2YgdGhlIGl0ZXJhdG9yIGFuZCBhIGJvb2xlYW4gdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgaXRlcmF0aW9uXG4gKiBoYXMgcmVhY2hlZCBpdHMgZW5kLiAoVGhpcyBpcyBhIHNpbXBsaWZpZWQgZXhwbGFuYXRpb247IHNlZVxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvR3VpZGUvSXRlcmF0b3JzX2FuZF9HZW5lcmF0b3JzfHRoaXMgTUROIHBhZ2V9XG4gKiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi4pXG4gKlxuICogYHRyYW5zZHVjZXIvaW5pdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBpbml0YCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgbm8gcGFyYW1ldGVycyBhbmQgcmV0dXJucyBhIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlIG91dHB1dFxuICogY29sbGVjdGlvbi4gVGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGhvdyB0byBjcmVhdGUgYSBuZXcgY29sbGVjdGlvblxuICogb2YgdGhlIGNvcnJlY3QgdHlwZS5cbiAqXG4gKiBgdHJhbnNkdWNlci9zdGVwYCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYHN0ZXBgKSBzaG91bGQgYmUgYSBmdW5jdGlvblxuICogdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycy4gVGhlc2UgcGFyYW1ldGVycyBhcmUgdGhlIHJlc3VsdCBvZiB0aGUgcmVkdWN0aW9uXG4gKiBzbyBmYXIgKGFuZCBzbyBpcyBhIGNvbGxlY3Rpb24gb2YgdGhlIG91dHB1dCB0eXBlKSBhbmQgdGhlIG5leHQgdmFsdWUgZnJvbVxuICogdGhlIGlucHV0IGNvbGxlY3Rpb24uIEl0IG11c3QgcmV0dXJuIHRoZSBuZXcgcmVkdWN0aW9uIHJlc3VsdCwgd2l0aCB0aGUgbmV4dFxuICogdmFsdWUgaW5jb3Jwb3JhdGVkIGludG8gaXQuIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgcmVkdWNlIGFcbiAqIHZhbHVlIG9udG8gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogYHRyYW5zZHVjZXIvcmVzdWx0YCAocmVmZXJyZWQgdG8gZnJvbSBub3cgb24gYXMgYHJlc3VsdGApIHNob3VsZCBiZSBhXG4gKiBmdW5jdGlvbiB0aGF0IHRha2VzIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSBmdWxseSByZWR1Y2VkIGNvbGxlY3Rpb24uIEl0XG4gKiBzaG91bGQgcmV0dXJuIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvbi4gVGhpcyBhZmZvcmRzIGEgY2hhbmNlIHRvIG1ha2UgYW55XG4gKiBsYXN0LW1pbnV0ZSBhZGp1c3RtZW50cyB0byB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGJlZm9yZSByZXR1cm5pbmcgaXQuXG4gKlxuICogQXJyYXlzLCBzdHJpbmdzLCBhbmQgb2JqZWN0cyBhcmUgYWxsIGdpdmVuIHN1cHBvcnQgZm9yIGFsbCBvZiB0aGVzZVxuICogcHJvdG9jb2xzLiBPdGhlciBjb2xsZWN0aW9ucyB3aWxsIGhhdmUgdG8gcHJvdmlkZSB0aGVpciBvd24gKHRob3VnaCBpdCBzaG91bGRcbiAqIGJlIG5vdGVkIHRoYXQgc2luY2UgYGl0ZXJhdG9yYCBpcyBidWlsdC1pbiwgbWFueSB0aGlyZC1wYXJ0eSBjb2xsZWN0aW9ucyB3aWxsXG4gKiBhbHJlYWR5IGltcGxlbWVudCB0aGlzIHByb3RvY29sKS4gQXMgYW4gZXhhbXBsZSwgbGV0J3MgYWRkIHRyYW5zZHVjZXIgc3VwcG9ydFxuICogdG8gYSB0aGlyZC1wYXJ0eSBjb2xsZWN0aW9uLCB0aGUgYEltbXV0YWJsZS5MaXN0YCBjb2xsZWN0aW9uIGZyb21cbiAqIHtAbGluayBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9pbW11dGFibGUtanMvfGltbXV0YWJsZS1qc30uXG4gKlxuICogYGBgXG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLmluaXRdID0gKCkgPT4gSW1tdXRhYmxlLkxpc3QoKS5hc011dGFibGUoKTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMuc3RlcF0gPSAoYWNjLCBpbnB1dCkgPT4gYWNjLnB1c2goaW5wdXQpO1xuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5yZXN1bHRdID0gKHZhbHVlKSA9PiB2YWx1ZS5hc0ltbXV0YWJsZSgpO1xuICogYGBgXG4gKlxuICogYEltbXV0YWJsZS5MaXN0YCBhbHJlYWR5IGltcGxlbWVudHMgYGl0ZXJhdG9yYCwgc28gd2UgZG9uJ3QgaGF2ZSB0byBkbyBpdFxuICogb3Vyc2VsdmVzLlxuICpcbiAqIFRoZSBgaW5pdGAgZnVuY3Rpb24gcmV0dXJucyBhbiBlbXB0eSBtdXRhYmxlIGxpc3QuIFRoaXMgaXMgaW1wb3J0YW50IGZvclxuICogaW1tdXRhYmxlLWpzIGJlY2F1c2UgaXRzIGRlZmF1bHQgbGlzdHMgYXJlIGltbXV0YWJsZSwgYW5kIGltbXV0YWJsZSBsaXN0c1xuICogbWVhbiB0aGF0IGEgbmV3IGxpc3QgaGFzIHRvIGJlIGNyZWF0ZWQgd2l0aCBldmVyeSByZWR1Y3Rpb24gc3RlcC4gSXQgd291bGRcbiAqIHdvcmsgZmluZSwgYnV0IGl0J3MgcXVpdGUgaW5lZmZpY2llbnQuXG4gKlxuICogVGhlIGBzdGVwYCBmdW5jdGlvbiBhZGRzIHRoZSBuZXh0IHZhbHVlIHRvIHRoZSBhbHJlYWR5LWNyZWF0ZWQgbGlzdC5cbiAqIGBJbW11dGFibGUuTGlzdGAgcHJvdmlkZXMgYSBgcHVzaGAgZnVuY3Rpb24gdGhhdCB3b3JrcyBsaWtlIGFuIGFycmF5J3NcbiAqIGBwdXNoYCwgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgbmV3IGxpc3Qgd2l0aCB0aGUgdmFsdWUgcHVzaGVkIG9udG8gaXQuXG4gKiBUaGlzIGlzIHBlcmZlY3QgZm9yIG91ciBgc3RlcGAgZnVuY3Rpb24uXG4gKlxuICogVGhlIGByZXN1bHRgIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBub3ctZmluaXNoZWQgbXV0YWJsZSBsaXN0IGludG8gYW5cbiAqIGltbXV0YWJsZSBvbmUsIHdoaWNoIGlzIHdoYXQncyBnb2luZyB0byBiZSBleHBlY3RlZCBpZiB3ZSdyZSB0cmFuc2R1Y2luZ1xuICogc29tZXRoaW5nIGludG8gYW4gYEltbXV0YWJsZS5MaXN0YC4gSW4gbW9zdCBjYXNlcywgYHJlc3VsdGAgZG9lc24ndCBoYXZlIHRvXG4gKiBkbyBhbnkgd29yaywgYnV0IHNpbmNlIHdlJ3JlIGNyZWF0aW5nIGFuIGludGVybWVkaWF0ZSByZXByZXNlbnRhdGlvbiBvZiBvdXJcbiAqIGNvbGxlY3Rpb24gdHlwZSBoZXJlLCB0aGlzIGxldHMgdXMgY3JlYXRlIHRoZSBjb2xsZWN0aW9uIHRoYXQgd2UgYWN0dWFsbHlcbiAqIHdhbnQgdG8gb3V0cHV0LiAoV2l0aG91dCBgcmVzdWx0YCwgd2Ugd291bGQgaGF2ZSB0byB1c2UgaW1tdXRhYmxlIGxpc3RzIGFsbFxuICogdGhlIHdheSB0aHJvdWdoLCBjcmVhdGluZyBhIG5ldyBvbmUgd2l0aCBlYWNoIGBzdGVwYCBmdW5jdGlvbiwgc2luY2Ugd2VcbiAqIHdvdWxkbid0IGJlIGFibGUgdG8gbWFrZSB0aGlzIGNvbnZlcnN0aW9uIGF0IHRoZSBlbmQuKVxuICpcbiAqIFdpdGggdGhvc2UgcHJvdG9jb2xzIGltcGxlbWVudGVkIG9uIHRoZSBwcm90b3R5cGUsIGBJbW11dGFibGUuTGlzdGBcbiAqIGNvbGxlY3Rpb25zIGNhbiBub3cgc3VwcG9ydCBhbnkgdHJhbnNkdWN0aW9uIHdlIGNhbiBvZmZlci5cbiAqXG4gKiAjIyMgUHJvdG9jb2xzXG4gKlxuICogQWZ0ZXIgdGFsa2luZyBhIGxvdCBhYm91dCBwcm90b2NvbHMgYW5kIHNob3dpbmcgaG93IHRoZXkncmUgcHJvcGVydGllcyBhZGRlZFxuICogdG8gYW4gb2JqZWN0LCBpdCdzIHByb2JhYmx5IHByZXR0eSBvYnZpb3VzIHRoYXQgdGhlcmUncyBiZWVuIG5vIG1lbnRpb24gb2ZcbiAqIHdoYXQgdGhlIGFjdHVhbCBuYW1lcyBvZiB0aG9zZSBwcm9wZXJ0aWVzIGFyZS4gVGhhdCdzIHdoYXRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnByb3RvY29sc3xwcm90b2NvbHN9YCBpcyBmb3IuXG4gKlxuICogVGhlIGJlc3Qgd2F5IHRvIHVzZSB0aGVzZSBrZXlzIGNhbiBiZSBzZWVuIGluIHRoZSBpbW11dGFibGUtanMgZXhhbXBsZSBhYm92ZS5cbiAqIEluc3RlYWQgb2Ygd29ycnlpbmcgYWJvdXQgdGhlIG5hbWUgb2YgdGhlIGtleSBmb3IgdGhlIGBpbml0YCBwcm90b2NvbCwgdGhlXG4gKiB2YWx1ZSBvZiBgcHJvdG9jb2xzLmluaXRgIGlzIHVzZWQuXG4gKlxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UucHJvdG9jb2xzfHByb3RvY29sc31gIGRlZmluZXMgdGhlc2UgcHJvdG9jb2wgcHJvcGVydHlcbiAqIG5hbWVzLlxuICpcbiAqIC0gYGluaXRgXG4gKiAtIGBzdGVwYFxuICogLSBgcmVzdWx0YFxuICogLSBgcmVkdWNlZGA6IHVzZWQgaW50ZXJuYWxseSB0byBtYXJrIGEgY29sbGVjdGlvbiBhcyBhbHJlYWR5IHJlZHVjZWRcbiAqIC0gYHZhbHVlYDogdXNlZCBpbnRlcm5hbGx5IHRvIHByb3ZpZGUgdGhlIGFjdHVhbCB2YWx1ZSBvZiBhIHJlZHVjZWRcbiAqICAgY29sbGVjdGlvblxuICpcbiAqIFRoZSBmaW5hbCB0d28gdmFsdWVzIGRvbid0IGhhdmUgYSBsb3Qgb2YgdXNlIG91dHNpZGUgdGhlIGxpYnJhcnkgdW5sZXNzXG4gKiB5b3UncmUgd3JpdGluZyB5b3VyIG93biB0cmFuc2R1Y2Vycy5cbiAqXG4gKiAjIyBIb3cgT2JqZWN0cyBBcmUgVHJlYXRlZFxuICpcbiAqIE9iamVjdHMgYmVhciBzb21lIHRob3VnaHQgYmVjYXVzZSByZWd1bGFybHksIHRoZXkgYXJlbid0IGNhbmRpZGF0ZXMgZm9yXG4gKiBpdGVyYXRpb24gKGFuZCB0aGVyZWZvcmUgZm9yIHRyYW5zZHVjdGlvbiBpbiBnZW5lcmFsKS4gVGhleSBkb24ndCBoYXZlIGEgdmVyeVxuICogc3RyYWlnaHRmb3J3YXJkIGlkZWEgb2Ygb3JkZXIsIGFuZCB0aGV5IGhhdmUgKnR3byogcGllY2VzIG9mIGRhdGEgKGtleSBhbmRcbiAqIHZhbHVlKSBmb3IgZXZlcnkgZWxlbWVudCBpbnN0ZWFkIG9mIG9uZS4gWWV0IGl0J3MgdW5kZW5pYWJsZSB0aGF0IGF0IGxlYXN0XG4gKiBmb3IgbW9zdCB0cmFuc2Zvcm1hdGlvbnMsIGJlaW5nIGFibGUgdG8gYXBwbHkgdGhlbSB0byBvYmplY3RzIHdvdWxkIGJlIHF1aXRlXG4gKiBoYW5keS5cbiAqXG4gKiBGb3IgdGhhdCByZWFzb24sIHNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBlbmQtdG8tZW5kIGZvciBvYmplY3RzLlxuICpcbiAqICMjIyBPYmplY3QgaXRlcmF0aW9uXG4gKlxuICogSXRlcmF0aW5nIG92ZXIgYW4gb2JqZWN0IHdpbGwgcHJvZHVjZSBvbmUgb2JqZWN0IHBlciBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWxcbiAqIG9iamVjdC4gQW4gb3JkZXIgaXMgaW1wb3NlZDsgYnkgZGVmYXVsdCwgdGhpcyBvcmRlciB0aGUgc2FtZSBhcyB0aGUgb3JkZXJpbmdcbiAqIG9mIGtleXMgaW4gcG9zdC1FUzYgSmF2YXNjcmlwdDpcbiAqXG4gKiAxLiBLZXlzIHRoYXQgYXJlIGludGVnZXJzLCBpbiBhc2NlbmRpbmcgbnVtZXJpY2FsIG9yZGVyXG4gKiAyLiBBbGwgb3RoZXIgc3RyaW5nIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogMy4gQWxsIHN5bWJvbCBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqXG4gKiBUaGUgYHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9YCBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIGEgc29ydGluZ1xuICogZnVuY3Rpb24gdGhhdCBjYW4gc29ydCBrZXlzIGluIGFueSBvdGhlciB3YXkuXG4gKlxuICogVGhlIHJlc3VsdCBvZiB0aGUgaXRlcmF0aW9uLCBpcyBhIHNldCBvZiBvYmplY3RzIGVhY2ggd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eSxcbiAqIG9uZSBmb3IgZWFjaCBlbnVtZXJhYmxlIG93biBwcm9wZXJ0eSBvbiB0aGUgb3JpZ2luYWwgb2JqZWN0LiBUaGUgc3RhbmRhcmRcbiAqIG9yZGVyaW5nIGZvciBvYmplY3RzIChmcm9tIEVTNiBvbndhcmQpIGlzIGFzIGZvbGxvd3M6XG4gKlxuICogIyMjIFRyYW5zZm9ybWluZyBvYmplY3RzXG4gKlxuICogV2hpbGUgaXRlcmF0aW5nIG92ZXIgb2JqZWN0cyBpbiB0aGlzIHdheSBpcyBzdHJhaWdodGZvcndhcmQsIHRoZSBzeW50YXggb2ZcbiAqIG9iamVjdHMgbWFrZXMgaXQgdWdseSB0byB0cmFuc2Zvcm0gdGhlbSBpbiB0aGlzIGZvcm0uIEhlcmUncyBhbiBleGFtcGxlIG9mIGFcbiAqIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIHRoYXQgbWFrZXMgdGhlIG9iamVjdCdzIGtleXMgdXBwZXItY2FzZSBhbmQgYWRkcyBvbmVcbiAqIHRvIGVhY2ggb2YgdGhlIHZhbHVlczpcbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIHRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAqICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAqICAgcmV0dXJuIHsgW2tleS50b1VwcGVyQ2FzZSgpXTogdmFsdWUgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBuYW1lZCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5wcm9wZXJ0eXxwcm9wZXJ0eX1gIGNhbiBpbXByb3ZlXG4gKiB0aGlzIGJ5IGhhbmRsaW5nIHRoZSBib2lsZXJwbGF0ZS5cbiAqXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIGltcHJvdmVkVHJhbnNmb3JtKG9iaikge1xuICogICBjb25zdCB7aywgdn0gPSBwcm9wZXJ0eShvYmopO1xuICogICByZXR1cm4geyBbay50b1VwcGVyQ2FzZSgpXTogdiArIDEgfTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqICMjIyBSZWR1Y2luZyBvYmplY3RzXG4gKlxuICogVGhlIGJ1aWx0LWluIHJlZHVjZXJzIChmb3IgYXJyYXlzLCBvYmplY3RzLCBzdHJpbmdzLCBhbmQgaXRlcmF0b3JzKVxuICogdW5kZXJzdGFuZCB0aGVzZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyBhbmQgcmVkdWNlIHRoZW0gaW4gdGhlIHByb3BlciBtYW5uZXJcbiAqIHdpdGhvdXQgYW55IGZ1cnRoZXIgd29yay5cbiAqXG4gKiBUaGF0J3MgaXQgZm9yIG9iamVjdC1vYmplY3QgcmVkdWN0aW9uLiBDb252ZXJ0aW5nIGJldHdlZW4gb2JqZWN0cyBhbmQgb3RoZXJcbiAqIHR5cGVzIGlzIGFub3RoZXIgbWF0dGVyLlxuICpcbiAqIEV2ZXJ5IHRyYW5zZHVjZXIgZnVuY3Rpb24gZXhjZXB0IGZvciBge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gXG4gKiBpcyBjYXBhYmxlIG9mIHR1cm5pbmcgYW4gb2JqZWN0IGludG8gYSBkaWZmZXJlbnQgdHlwZSBvZiBjb2xsZWN0aW9uLCB0dXJuaW5nXG4gKiBhIGRpZmZlcmVudCB0eXBlIG9mIGNvbGxlY3Rpb24gaW50byBhbiBvYmplY3QsIG9yIGJvdGguIE9iamVjdHMgYXJlIGRpZmZlcmVudFxuICogYmVjYXVzZSB0aGV5J3JlIHRoZSBvbmx5IFwiY29sbGVjdGlvbnNcIiB0aGF0IGhhdmUgdHdvIGRpZmZlcmVudCBwaWVjZXMgb2YgZGF0YVxuICogcGVyIGVsZW1lbnQuIEJlY2F1c2Ugb2YgdGhpcywgd2UgaGF2ZSB0byBoYXZlIGEgc3RyYXRlZ3kgb24gaG93IHRvIG1vdmUgZnJvbVxuICogb25lIHRvIGFub3RoZXIuXG4gKlxuICogVHJhbnNkdWNpbmcgYW4gb2JqZWN0IGludG8gYSBkaWZmZXJlbnQgdHlwZSBpcyBnZW5lcmFsbHkgcHJldHR5IGVhc3kuIElmIGFuXG4gKiBvYmplY3QgaXMgY29udmVydGVkIGludG8gYW4gYXJyYXksIGZvciBpbnN0YW5jZSwgdGhlIGFycmF5IGVsZW1lbnRzIHdpbGwgZWFjaFxuICogYmUgc2luZ2xlLXByb3BlcnR5IG9iamVjdHMsIG9uZSBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAqXG4gKiBTdHJpbmdzIGFyZSBhIGRpZmZlcmVudCBzdG9yeSwgc2luY2UgZW5jb2RpbmcgYSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRvIGFcbiAqIHN0cmluZyBpc24ndCBwb3NzaWJsZSAoYmVjYXVzZSBldmVyeSBcImVsZW1lbnRcIiBvZiBhIHN0cmluZyBoYXMgdG8gYmUgYSBzaW5nbGVcbiAqIGNoYXJhY3RlcikuIFN0cmluZ3MgdGhhdCBhcmUgcHJvZHVjZWQgZnJvbSBvYmplY3RzIHdpbGwgaW5zdGVhZCBqdXN0IGJlIHRoZVxuICogb2JqZWN0IHZhbHVlcywgY29uY2F0ZW5hdGVkLiBCZWNhdXNlIG9iamVjdHMgYXJlIGl0ZXJhdGVkIGluIGEgcGFydGljdWxhclxuICogb3JkZXIsIHRoaXMgY29udmVyc2lvbiB3aWxsIGFsd2F5cyBwcm9kdWNlIHRoZSBzYW1lIHN0cmluZywgYnV0IGV4Y2VwdCBpblxuICogc29tZSB2ZXJ5IHNwZWNpZmljIGNhc2VzIHRoZXJlIHJlYWxseSBpc24ndCBhIGxvdCBvZiB1c2UgZm9yIHRoaXMgY29udmVyc2lvbi5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IG9iaiA9IHthOiAxLCBiOiAyfTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNBcnJheShvYmopO1xuICogLy8gcmVzdWx0ID0gW3thOiAxfSwge2I6IDJ9XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3Iob2JqKTtcbiAqIC8vIHJlc3VsdCBpcyBhbiBpdGVyYXRvciB3aXRoIHR3byB2YWx1ZXM6IHthOiAxfSBhbmQge2I6IDJ9XG4gKlxuICogcmVzdWx0ID0gaW50byhJbW11dGFibGUuTGlzdCgpLCBvYmopXG4gKiAvLyByZXN1bHQgaXMgYW4gaW1tdXRhYmxlIGxpc3Qgd2l0aCB0d28gZWxlbWVudHM6IHthOiAxfSBhbmQge2I6IDJ9XG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcob2JqKTtcbiAqIC8vIHJlc3VsdCBpcyAnMTInXG4gKiBgYGBcbiAqXG4gKiBUaGUgb3Bwb3NpdGUgY29udmVyc2lvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgaW5zaWRlIHRoZSBjb2xsZWN0aW9ucy4gSWZcbiAqIHRob3NlIHZhbHVlcyBhcmUgb2JqZWN0cywgdGhlbiB0aGUgcmVzdWx0IGlzIGFuIG9iamVjdCB3aXRoIGFsbCBvZiB0aGVcbiAqIG9iamVjdHMgY29tYmluZWQgKGlmIG1vcmUgdGhhbiBvbmUgaGFzIHRoZSBzYW1lIGtleSwgdGhlIGxhc3Qgb25lIGlzIHRoZSBvbmVcbiAqIHRoYXQncyBrZXB0KS4gT3RoZXJ3aXNlLCBrZXlzIGFyZSBjcmVhdGVkIGZvciBlYWNoIG9mIHRoZSBlbGVtZW50cywgc3RhcnRpbmdcbiAqIHdpdGggYDBgIGFuZCBpbmNyZWFzaW5nIGZyb20gdGhlcmUuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGNvbnZlcnRpbmcgYW4gb2JqZWN0IHRvIGFueSBub24tc3RyaW5nIGNvbGxlY3Rpb24gYW5kIGJhY2tcbiAqIHByb2R1Y2VzIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gKlxuICogYGBgXG4gKiBsZXQgcmVzdWx0ID0gYXNPYmplY3QoW3thOiAxfSwge2I6IDJ9XSk7XG4gKiAvLyByZXN1bHQgPSB7YTogMSwgYjogMn1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gcmVzdWx0ID0gezA6IDEsIDE6IDIsIDI6IDN9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoJ2hlbGxvJyk7XG4gKiAvLyByZXN1bHQgPSB7MDogJ2gnLCAxOiAnZScsIDI6ICdsJywgMzogJ2wnLCA0OiAnbyd9XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIHhkdWNlXG4gKi9cblxuZXhwb3J0IHsgcHJvdG9jb2xzIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlLCBrdiwga2V5LCB2YWx1ZSB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuZXhwb3J0IHtcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2UsXG4gIHRvRnVuY3Rpb24sXG4gIHRvUmVkdWNlcixcbiAgdG9UcmFuc2R1Y2VyXG59IGZyb20gXCJtb2R1bGVzL3JlZHVjdGlvblwiO1xuZXhwb3J0IHtcbiAgdHJhbnNkdWNlLFxuICBzZXF1ZW5jZSxcbiAgaW50byxcbiAgYXNBcnJheSxcbiAgYXNPYmplY3QsXG4gIGFzU3RyaW5nLFxuICBhc0l0ZXJhdG9yLFxuICBjb21wb3NlXG59IGZyb20gXCJtb2R1bGVzL3RyYW5zZm9ybWF0aW9uXCI7XG5leHBvcnQge1xuICBpc0FycmF5LFxuICBpc0Z1bmN0aW9uLFxuICBpc0dlbmVyYXRvckZ1bmN0aW9uLFxuICBpc051bWJlcixcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nXG59IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQW4gaXRlcmFibGUgYXMgZGVmaW5lZCBieSBKYXZhU2NyaXB0LlxuICpcbiAqIEB0eXBlZGVmIEpzSXRlcmFibGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkpzSXRlcmFibGVGdW5jdGlvbn0gU3ltYm9sLml0ZXJhdG9yIEEgZnVuY3Rpb24gdGhhdFxuICogICAgIHByb2R1Y2VzIGFuIGl0ZXJhdG9yIHdoZW4gY2FsbGVkLlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGFuIGl0ZXJhdG9yLiBUaGlzIGlzIHRoZSBjaGFyYWN0ZXJpc3RpYyBwcm9wZXJ0eSBvZlxuICogYSBKYXZhU2NyaXB0IGl0ZXJhYmxlLlxuICpcbiAqIEBjYWxsYmFjayBKc0l0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlfSB0aGF0IHByb2R1Y2VkIGl0LlxuICovXG5cbi8qKlxuICogQW4gaXRlcmFibGUgYXMgZGVmaW5lZCBieSB0aGlzIGxpYnJhcnkuIFNpbmNlIGl0IHByb3ZpZGVzIHNwZWNpZmljIHN1cHBvcnRcbiAqIGZvciBvYmplY3RzLCB0aGlzIHR5cGUgaXMgbWVyZWx5IGEgbm9ybWFsIEphdmFTY3JpcHQgaXRlcmFibGUgKm9yKiBhIHBsYWluXG4gKiBvYmplY3QuXG4gKlxuICogQHR5cGVkZWYgeyhPYmplY3R8bW9kdWxlOnhkdWNlLkpzSXRlcmFibGUpfSBJdGVyYWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmljIGl0ZXJhdG9yLiBUaGlzIGNvbmZvcm1zIHRvIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIGluIHRoYXQgaXQgaGFzXG4gKiBhIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgZnVuY3Rpb24gdGhhdCBwcm9kdWNlc1xuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0VmFsdWV8YGl0ZXJhdG9yYC1jb21wYXRpYmxlIG9iamVjdHN9LlxuICpcbiAqIEB0eXBlZGVmIEl0ZXJhdG9yXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb259IG5leHQgQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqICAgICByZXR1cm5zIHRoZSBuZXh0IGl0ZXJhdG9yIHZhbHVlLlxuICovXG5cbi8qKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgc2F0aXNmaWVzIHRoZSBgaXRlcmF0b3JgIHByb3RvY29sIG9uIGFuIG9iamVjdC4gV2hlblxuICogY2FsbGVkLCBpdCByZXR1cm5zIHRoZSBuZXh0IHZhbHVlIGluIHRoZSBpdGVyYXRvci5cbiAqXG4gKiBAY2FsbGJhY2sgTmV4dEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLk5leHRWYWx1ZX0gVGhlIG5leHQgdmFsdWUgaW4gdGhlIGl0ZXJhdG9yLlxuICovXG5cbi8qKlxuICogVGhlIG9iamVjdCByZXR1cm5lZCBieSBhIGNhbGwgdG8gYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YC5cbiAqIEl0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVyYXRvciBpcyBjb21wbGV0ZSBhbmQsIGlmIG5vdCwgd2hhdCB0aGUgbmV4dFxuICogdmFsdWUgaXMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmV4dFZhbHVlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGF0IHRoZSBpdGVyYXRvciBoYXMgcHJvdmlkZWQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRvbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGl0ZXJhdG9yIGhhcyBjb21wbGV0ZWQuIElmXG4gKiAgICAgdGhpcyBpcyBgdHJ1ZWAsIHRoZW4gYHZhbHVlYCB3aWxsIGJlIGB1bmRlZmluZWRgIGFuZCBldmVyeSBzdWJzZXF1ZW50XG4gKiAgICAgY2FsbCB0byBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIHdpbGwgY29udGludWUgdG8gcHJvZHVjZVxuICogICAgIHRoZSBzYW1lIHZhbHVlLiBJZiBpdCdzIGBmYWxzZWAsIHRoZW4gYHZhbHVlYCByZXByZXNlbnRzIHRoZSBuZXQgdmFsdWUgaW5cbiAqICAgICB0aGUgaXRlcmF0b3IsIGFuZCB0aGUgbmV4dCBjYWxsIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCB3aWxsIGNvbnRpbnVlIHRvIHByb2R1Y2UgdGhlXG4gKiAgICAgbmV4dCB2YWx1ZS5cbiAqL1xuXG4vKipcbiAqIEEgc29ydCBmdW5jdGlvbiBmb3IgdGhlIGtleXMgb2YgYW4gb2JqZWN0LiBUaGlzIGNvbmZvcm1zIHRvIHRoZSBub3JtYWwgc29ydFxuICogZnVuY3Rpb24gdXNlZCBpbiBgQXJyYXkucHJvdG90eXBlLnNvcnRgLlxuICpcbiAqIEBjYWxsYmFjayBTb3J0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7Kn0gYSBUaGUgZmlyc3QgdmFsdWUgdG8gYmUgc29ydGVkLlxuICogQHByb3BlcnR5IHsqfSBiIFRoZSBzZWNvbmQgdmFsdWUgdG8gYmUgc29ydGVkLlxuICogQHJldHVybnMge251bWJlcn0gRWl0aGVyIGAtMWAgaWYgYGEgPiBiYCwgYDFgIGlmIGBhIDwgYmAsIG9yIGAwYCBpZiBgYSA9PT1cbiAqICAgICBiYC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBjYW4gaGF2ZSBhbiBpdGVyYXRvciBjcmVhdGVkIGZvciBpdC5cbiAqXG4gKiBAY2FsbGJhY2sgSXRlcmFibGVGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleF0gVGhlIG51bWJlciBvZiB0aW1lcyB0aGF0XG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCBoYXMgYmVlbiBjYWxsZWQgb24gdGhlXG4gKiAgICAgZnVuY3Rpb24ncyBpdGVyYXRvci4gVGhpcyB3aWxsIHN0YXJ0IGF0IGAwYCBmb3IgdGhlIGZpcnN0IGNhbGwgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIGFuZCBpbmNyZWFzZSBieSBvbmUgZm9yIGVhY2hcbiAqICAgICBzdWJzZXF1ZW50IGNhbGwuXG4gKiBAcGFyYW0geyp9IFtsYXN0XSBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGUgbGFzdCB0aW1lXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCB3YXMgY2FsbGVkIG9uIGl0cyBpdGVyYXRvci4gRm9yXG4gKiAgICAgdGhlIGZpcnN0IGNhbGwsIHRoaXMgaXMgc2V0IHRvIGB1bmRlZmluZWRgLlxuICogQHJldHVybnMgeyp9IFRoZSByZXR1cm4gdmFsdWUgZm9yIHRoYXQgaXRlcmF0aW9uLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlLXByb3BlcnR5IG9iamVjdCwgYnV0IHVzaW5nIG9uZSBwcm9wZXJ0eVxuICogZm9yIHRoZSBrZXkgYW5kIG9uZSBmb3IgdGhlIHZhbHVlLiBUaGlzIGZvcm1hdCBpcyBlYXNpZXIgdG8gdXNlIGluXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvcGVydHlPYmplY3RcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7KFN0cmluZ3xTeW1ib2wpfSBrIFRoZSBrZXkgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QgdGhhdCB0aGlzXG4gKiAgICAgb2JqZWN0IHJlcHJlc2VudHMuXG4gKiBAcHJvcGVydHkgeyp9IHYgVGhlIHZhbHVlIG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRoYXQgdGhpcyBvYmplY3RcbiAqICAgICByZXByZXNlbnRzLlxuICovXG5cbi8qKlxuICogQW4gaW5pdCBmdW5jdGlvbiwgd2hpY2ggcHJvdmlkZXMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIGEgY29sbGVjdGlvbi5cbiAqXG4gKiBAY2FsbGJhY2sgSW5pdEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcmV0dXJucyB7Kn0gQSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIGEgY29sbGVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEEgc3RlcCBmdW5jdGlvbiwgdGhhdCByZWR1Y2VzIGEgY29sbGVjdGlvbiBhbmQgYSBuZXcgdmFsdWUgdG8gdGhlXG4gKiBjb2xsZWN0aW9uIHdpdGggdGhlIHZhbHVlIGFkZGVkLlxuICpcbiAqIEBjYWxsYmFjayBTdGVwRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gYWNjIEFuIGFjY3VtdWxhdGVkIHZhbHVlIHRvIHdoaWNoIHRoZSBuZXcgdmFsdWUgaXMgYmVpbmcgYWRkZWQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgdG8gYmUgYWRkZWQgdG8gdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSB3aXRoIHRoZSBuZXcgdmFsdWUgaW50ZWdyYXRlZCBpbnRvIGl0LlxuICovXG5cbi8qKlxuICogQSByZXN1bHQgZnVuY3Rpb24gdGhhdCBvcHRpb25hbGx5IG1vZGlmaWVzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCB0aGVuXG4gKiByZXR1cm5zIGl0LiBUaGlzIGlzIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHJlZHVjdGlvbiB0byBhZmZvcmQgYSBsYXN0IGNoYW5jZVxuICogZm9yIHRoZSB0cmFuc2R1Y2VyIHRvIG1vZGlmeSB0aGUgb3V0cHV0IHZhbHVlLlxuICpcbiAqIEBjYWxsYmFjayBSZXN1bHRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSBpbnB1dCBUaGUgdmFsdWUgdG8gYmUgbW9kaWZpZWQgYmVmb3JlIGJlaW5nIG91dHB1dC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgbW9kaWZpZWQgdmFsdWUgdG8gYmUgb3V0cHV0IGJ5IGEgdHJhbnNkdWNlci5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCB3aXRoIGFsbCBvZiB0aGUgaW5mb3JtYXRpb24gbmVjZXNzYXJ5IHRvIHJlZHVjZSB2YWx1ZXMgaW50byBhXG4gKiBwYXJ0aWN1bGFyIGtpbmQgb2YgY29sbGVjdGlvbi4gVGhlc2UgYXJlIHBhc3NlZCB0b1xuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5yZWR1Y2V8cmVkdWNlfSBhbmQgbGlrZSBmdW5jdGlvbnMuXG4gKlxuICogQHR5cGVkZWYgUmVkdWNlclxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuSW5pdEZ1bmN0aW9ufSBbU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKV0gVGhlXG4gKiAgICAgcmVkdWNlcidzIGluaXQgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIikgVGhlXG4gKiAgICAgcmVkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5SZXN1bHRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvcmVzdWx0XCIpIFRoZVxuICogICAgIHJlZHVjZXIncyByZXN1bHQgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gdGhhdCBjYW4gaGF2ZSB2YWx1ZXMgcmVkdWNlZCBpbnRvIGl0LiBTaW5jZSB0aGlzIGxpYnJhcnlcbiAqIHByb3ZpZGVzIGV4cGxpY2l0IHN1cHBvcnQgZm9yIGFycmF5cywgb2JqZWN0cywgYW5kIHN0cmluZ3MsIHRob3NlIHRocmVlIGFyZVxuICogYWRkZWQgdG8gdGhlIHtAbGluayBtb2R1bGU6eGR1Y2UuUmVkdWNlcn0gdHlwZSB0byBkZWZpbmUgdGhpcy5cbiAqXG4gKiBAdHlwZWRlZiB7KEFycmF5fFN0cmluZ3xPYmplY3R8bW9kdWxlOnhkdWNlLlJlZHVjZXIpfSBSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiB0aGF0IHN1cHBvcnRzIG5vdCBvbmx5IHRoZSByZWd1bGFyIGl0ZXJhaW9uIG92ZXIgaXRzIGNvbnRlbnRzLFxuICogYnV0IGFsc28gcmVkdWN0aW9uIG9mIHZhbHVlcyBpbnRvIGl0LiBJdCBpcyBhbiBpbnRlcnNlY3Rpb24gdHlwZSBjb21iaW5pbmdcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuSXRlcmFibGV8SXRlcmFibGV9IGFuZFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5SZWR1Y2libGV8UmVkdWNpYmxlfS5cbiAqXG4gKiBAdHlwZWRlZiBFeHBsaWNpdEl0ZXJhYmxlUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlRnVuY3Rpb259IFN5bWJvbC5pdGVyYXRvciBBIGZ1bmN0aW9uIHRoYXRcbiAqICAgICBwcm9kdWNlcyBhbiBpdGVyYXRvciB3aGVuIGNhbGxlZC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkluaXRGdW5jdGlvbn0gW1N5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIildIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuUmVzdWx0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3MgcmVzdWx0IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogVGhlIGFjdHVhbCB0eXBlIHVzZWQgYnkgcmVkdWNpYmxlIGNvbGxlY3Rpb25zIGluIHRoaXMgbGlicmFyeS4gSXQgdGFrZXMgdGhlXG4gKiBwcm9wZXJ0eS1iYXNlZCBkZWZpbml0aW9uIGFuZCBhZGRzIGJ1aWx0LWluIHR5cGVzIHRoYXQgYXJlIHNwZWNpYWxseVxuICogc3VwcG9ydGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIEB0eXBlZGVmIHsoQXJyYXl8T2JqZWN0fFN0cmluZ3xtb2R1bGU6eGR1Y2UuRXhwbGljaXRJdGVyYWJsZVJlZHVjaWJsZSl9XG4gKiAgICAgSXRlcmFibGVSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIGRhdGEgYW5kIGNhbiBiZSBjb21wb3NlZCB3aXRoIG90aGVyIHRyYW5zZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIuIFRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBwcm92aWRlZCBieSBvdGhlclxuICogbGlicmFyaWVzOyB0aGUgb25seSBpbnZvbHZlbWVudCBvZiB0aGlzIGxpYnJhciBpcyBhcyBhIGNvbnN1bWVyIG9mXG4gKiB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBUcmFuc2R1Y2VycyB3b3JrIGJ5IGhhdmluZyBzdGVwIGZ1bmN0aW9ucyB0aGF0IGFyZSBrbm93biB2aWEgcHJvdG9jb2wsIGFuZCBpdFxuICogaXMgdGhlc2Ugc3RlcCBmdW5jdGlvbnMgdGhhdCB0YWtlIGEgdmFsdWUgYXQgYSB0aW1lIHRvIGJlIHRyYW5zZm9ybWVkIGFzXG4gKiB0aGVpciBhcmd1bWVudHMuIFRoZSBhcmd1bWVudHMgdG8gdGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIG90aGVyXG4gKiB0cmFuc2R1Y2VycyB0aGF0IGFyZSB0aGVuIGNvbXBvc2VkIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciwgd2hpY2ggaXMgdGhlblxuICogcmV0dXJuZWQuIFRoZSB2YWx1ZXMgdGhhdCBhcmUgcHJvZHVjZWQgYXJlIHNlbGRvbSBvZiBjb25zZXF1ZW5jZSB0byB0aGUgZW5kXG4gKiB1c2VyOyB0aGVzZSBmdW5jdGlvbnMgZXhpc3QgdG8gYmUgcGFzc2VkIHRvIG90aGVyIGZ1bmN0aW9ucyB0aGF0IGRlYWwgd2l0aFxuICogdHJhbnNkdWNlcnMuXG4gKlxuICogQGNhbGxiYWNrIFRyYW5zZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSB0cmFuc2R1Y2VyIHRvIGNoYWluIHRoaXNcbiAqICAgICB0cmFuc2R1Y2VyIHRvLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gQSBuZXcgdHJhbnNkdWNlciBjb25zaXN0aW5nIG9mIHRoZVxuICogICAgIGNvbXBvc2l0aW9uIG9mIHRoaXMgb25lIGFuZCBgeGZvcm1gLlxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBuZWNlc3NhcnkgZnVuY3Rpb24gcHJvcGVydGllcyBmb3JcbiAqIHRyYW5zZm9ybWluZyBkYXRhIGFuZCB0aGVuIHJlZHVjaW5nIGl0IGludG8gYW4gb3V0cHV0IHZhbHVlLiBUaGlzIGlzIHRoZVxuICogc2FtZSBhcyB7QGxpbmsgbW9kdWxlOnhkdWNlLlJlZHVjZXJ8UmVkdWNlcn0gZXhjZXB0IHRoYXQgdGhlIGBpbml0YCBwcm9wZXJ0eVxuICogaXMgbm90IG9wdGlvbmFsLlxuICpcbiAqIEB0eXBlZGVmIFRyYW5zZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkluaXRGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKSBUaGVcbiAqICAgICB0cmFuc2R1Y2VyJ3MgaW5pdCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKSBUaGVcbiAqICAgICB0cmFuc2R1Y2VyJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLlJlc3VsdEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIikgVGhlXG4gKiAgICAgdHJhbnNkdWNlcidzIHJlc3VsdCBmdW5jdGlvbi5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IGlzSW1wbGVtZW50ZWQgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNPYmplY3QsIGlzR2VuZXJhdG9yRnVuY3Rpb24gfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhbiBvYmplY3QuXG4gKlxuICogRGV0YWlscyBhYm91dCB0aGlzIGZ1bmN0aW9uIGFyZSBpbmNsdWRlZCBpbiB0aGUgZG9jdW1lbnRhdGlvbiBmb3JcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuU29ydEZ1bmN0aW9ufSBbc29ydEZuXSBBbiBvcHRpb25hbCBmdW5jdGlvbiB1c2VkIHRvIHNvcnRcbiAqICAgICB0aGUgb2JqZWN0IGtleXMgYmVmb3JlIGl0ZXJhdGlvbi4gSWYgaXQgaXNuJ3QgcHJvdmlkZWQsIHRoZSBrZXlzIHdpbGwgYmVcbiAqICAgICBzb3J0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgYE9iamVjdC5rZXlzKG9iailgIHdvdWxkIHNvcnQgdGhlbS5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgYG9iamAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBvYmplY3RJdGVyYXRvcihvYmosIHNvcnRGbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBjb25zdCBrZXlzID1cbiAgICAgIHR5cGVvZiBzb3J0Rm4gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IE9iamVjdC5rZXlzKG9iaikuc29ydChzb3J0Rm4pXG4gICAgICAgIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGluZGV4IDwga2V5cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGsgPSBrZXlzW2luZGV4KytdO1xuICAgICAgeWllbGQgeyBba106IG9ialtrXSB9O1xuICAgIH1cbiAgfSkoKTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZmlyc3Qga2V5IGFuZCB2YWx1ZSBpbiBhbiBvYmplY3QgYXNcbiAqIGEgdHdvLXByb3BlcnR5IG9iamVjdCwgb25lIHByb3BlcnR5IGZvciB0aGUga2V5IGFuZCBvbmUgZm9yIHRoZSB2YWx1ZS4gVGhpc1xuICogaXMgaW50ZW5kZWQgdG8gd29yayB3aXRoIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYnkgYW4gb2JqZWN0IGl0ZXJhdG9yLCBhcyB0aGVcbiAqIHN5bnRheCBvZiBvYmplY3RzIGRvZXNuJ3Qgd29yayB2ZXJ5IG5pY2VseSB3aXRoIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLlxuICpcbiAqIGBgYFxuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3Iob2JqKTtcbiAqXG4gKiBsZXQgdmFsdWUgPSBpdGVyLm5leHQoKS52YWx1ZTtcbiAqIGNvbnNvbGUubG9nKHZhbHVlKTsgICAgICAgICAgICAgLy8gLT4geyBjOiAxIH1cbiAqIGNvbnNvbGUubG9nKHByb3BlcnR5KHZhbHVlKSk7ICAgLy8gLT4geyBrOiBcImNcIiwgdjogMSB9XG4gKlxuICogdmFsdWUgPSBpdGVyLm5leHQoKS52YWx1ZTtcbiAqIGNvbnNvbGUubG9nKHZhbHVlKTsgICAgICAgICAgICAgLy8gLT4geyBhOiAyIH1cbiAqIGNvbnNvbGUubG9nKHByb3BlcnR5KHZhbHVlKSk7ICAgLy8gLT4geyBrOiBcImFcIiwgdjogMiB9XG4gKlxuICogdmFsdWUgPSBpdGVyLm5leHQoKS52YWx1ZTtcbiAqIGNvbnNvbGUubG9nKHZhbHVlKTsgICAgICAgICAgICAgLy8gLT4geyBiOiAzIH1cbiAqIGNvbnNvbGUubG9nKHByb3BlcnR5KHZhbHVlKSk7ICAgLy8gLT4geyBrOiBcImJcIiwgdjogMyB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3QgcHJvcGVydHkgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuUHJvcGVydHlPYmplY3R9IFRoZSBwcm9wZXJ0eSBhcyBhIHR3by1wcm9wZXJ0eSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGt2KG9iaikge1xuICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuICByZXR1cm4geyBrOiBrZXksIHY6IG9ialtrZXldIH07XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGtleSBvZiB0aGUgZmlyc3QgcHJvcGVydHkgb2YgYW5cbiAqIG9iamVjdC4gVGhpcyBpcyBtZWFudCBmb3IgdXNlIHdpdGggb2JqZWN0IGl0ZXJhdG9ycyB0byBtb3JlIGNvbnZlbmllbnRseVxuICogYWNjZXNzIHBhcnRzIG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyB0aGF0IHRoZXkgZW1pdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3Qga2V5IGlzIHJldHVybmVkLlxuICogQHJldHVybiB7KFN0cmluZ3xTeW1ib2wpfSBUaGUga2V5IG9mIHRoZSBvYmplY3QncyBmaXJzdCBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24ga2V5KG9iaikge1xuICByZXR1cm4ga3Yob2JqKS5rO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvcGVydHkgb2YgYW5cbiAqIG9iamVjdC4gVGhpcyBpcyBtZWFudCBmb3IgdXNlIHdpdGggb2JqZWN0IGl0ZXJhdG9ycyB0byBtb3JlIGNvbnZlbmllbnRseVxuICogYWNjZXNzIHBhcnRzIG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cyB0aGF0IHRoZXkgZW1pdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqIFRoZSBvYmplY3Qgd2hvc2UgZmlyc3QgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgb2YgdGhlIG9iamVjdCdzIGZpcnN0IHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiB2YWx1ZShvYmopIHtcbiAgcmV0dXJuIGt2KG9iaikudjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIG92ZXIgYSBmdW5jdGlvbi5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGVGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlIHJldHVybiB2YWx1ZXMgb2YgYGZuYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGZ1bmN0aW9uSXRlcmF0b3IoZm4pIHtcbiAgcmV0dXJuIChmdW5jdGlvbiooKSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGN1cnJlbnQgPSBmbihpbmRleCsrLCBjdXJyZW50KTtcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIGN1cnJlbnQ7XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogRm9yIGNvbGxlY3Rpb25zIHRoYXQgaW1wbGVtZW50IHRoZSBpdGVyYWJsZSBwcm90b2NvbCwgaXQncyBhcyBzaW1wbGUgYXNcbiAqIHJldHVybmluZyB0aGUgaXRlcmF0b3IgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGF0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBpdGVyID0gaXRlcmF0b3IoWzEsIDIsIDNdKTtcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDNcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBPYmplY3RzIGFyZSBzcGVjaWFsbHkgc3VwcG9ydGVkIHRvIHJldHVybiBhbiBpdGVyYXRvciBhcyB3ZWxsLCBldmVuIHRob3VnaFxuICogdGhleSBkb24ndCBuYXRpdmVseSBzdXBwb3J0IHRoZSBpdGVyYWJsZSBwcm90b2NvbC4gVGhlIGl0ZXJhdG9yJ3MgYG5leHRgXG4gKiBmdW5jdGlvbiBwcm92aWRlcyBzaW5nbGUtcHJvcGVydHkgb2JqZWN0cywgb25lIGZvciBlYWNoIHByb3BlcnR5IGluIHRoZVxuICogb3JpZ2luYWwgb2JqZWN0LCBvcmRlcmVkIGluIHRoZSBzdGFuZGFyZCBwb3N0LUVTNiBvcmRlciBmb3IgaXRlcmF0aW5nIG92ZXJcbiAqIG9iamVjdCBrZXlzOlxuICpcbiAqIDEuIEtleXMgdGhhdCBhcmUgaW50ZWdlcnMsIGluIGFzY2VuZGluZyBudW1lcmljYWwgb3JkZXJcbiAqIDIuIEFsbCBvdGhlciBzdHJpbmcga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiAzLiBBbGwgc3ltYm9sIGtleXMsIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICpcbiAqIElmIGEgZGlmZmVyZW50IG9yZGVyIGlzIG5lZWRlZCwgdGhpcyBmdW5jdGlvbiB0YWtlcyBhIHNlY29uZCBhcmd1bWVudCwgYSBzb3J0XG4gKiBmdW5jdGlvbiwgdGhhdCBhZmZlY3RzIG9iamVjdHMgb25seS4gSXQgaXMgYSBzdGFuZGFyZCBmdW5jdGlvbiB0aGF0IHdvdWxkIGJlXG4gKiBwYXNzZWQgdG8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBhbmQgc29ydHMgdGhlIGtleXMgYWNjb3JkaW5nbHkuXG4gKlxuICogYGBgXG4gKiBjb25zdCBhbHBoYSA9IChhLCBiKSA9PiAoYSA8IGIgPyAtMSA6IGIgPCBhID8gMSA6IDApO1xuICogY29uc3Qgb2JqID0geyBjOiAxLCBhOiAyLCBiOiAzIH07XG4gKlxuICogY29uc3Qgb2JqSXRlciA9IGl0ZXJhdG9yKG9iaik7XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBjOiAxIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYjogMyB9XG4gKlxuICogY29uc3Qgc29ydGVkSXRlciA9IGl0ZXJhdG9yKG9iaiwgYWxwaGEpO1xuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogYGBgXG4gKlxuICogQWRkaXRpb25hbGx5LCB0aGVyZSBpcyBzcGVjaWFsIHN1cHBvcnQgZm9yIHBhc3NpbmcgYSBmdW5jdGlvbiB0byB0aGlzXG4gKiBmdW5jdGlvbi4gVGhlIGl0ZXJhdG9yIHJldHVybmVkIHJ1bnMgdGhhdCBmdW5jdGlvbiBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YC5cbiAqIFRoYXQgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdHdvIGFyZ3VtZW50czogdGhlIGluZGV4IChzdGFydGluZyBhdCBgMGAgZm9yIHRoZVxuICogZmlyc3QgY2FsbCB0byBgbmV4dGAgYW5kIGluY3JlYXNpbmcgYnkgMSBmb3IgZWFjaCBjYWxsIHRvIGBuZXh0YCBhZnRlcikgYW5kXG4gKiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBjYWxsIHRvIGBuZXh0YCAoZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiBgbmV4dGAsIHRoaXMgd2lsbCBiZSBgdW5kZWZpbmVkYCkuIFRoZSBpdGVyYXRpb24gd2lsbCBjb250aW51ZSB1bnRpbCB0aGVcbiAqIGZpcnN0IHRpbWUgdGhlIGl0ZXJhdGVkIGZ1bmN0aW9uIHJldHVybnMgYHVuZGVmaW5lZGA7IGF0IHRoYXQgcG9pbnQgdGhlXG4gKiBpdGVyYXRvciB3aWxsIHRlcm1pbmF0ZSBhbmQgcmV0dXJuIGB7IGRvbmU6IHRydWUgfWAgb2ZmIHN1YnNlcXVlbnQgYG5leHRgXG4gKiBjYWxscy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGNvbnN0SXRlciA9IGl0ZXJhdG9yKCgpID0+IDYpO1xuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogY29uc29sZS5sb2coY29uc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNlxuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIsIGFzIGxvbmcgYXMgYG5leHRgIGtlZXBzIGdldHRpbmcgY2FsbGVkXG4gKlxuICogY29uc3QgaW5kZXhJdGVyID0gaXRlcmF0b3IoeCA9PiB4ICogeCk7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAwO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMTtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDQ7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA5O1xuICogLy8gVGhpcyB3aWxsIGNvbnRpbnVlIGZvcmV2ZXIgb3IgdW50aWwgdGhlIG51bWJlcnMgZ2V0IHRvbyBiaWcgZm9yXG4gKiAvLyBKYXZhU2NyaXB0IHRvIGRlYWwgd3RpaFxuICpcbiAqIC8vIFVzaW5nIGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGBsYXN0YCBwYXJhbWV0ZXIsIHdoaWNoIHNldHMgaXRzIHZhbHVlXG4gKiAvLyBmb3IgdGhlIGZpcnN0IHJ1biB3aGVuIGl0IGlzIG5vcm1hbGx5IGB1bmRlZmluZWRgXG4gKiBjb25zdCBsYXN0SXRlciA9IGl0ZXJhdG9yKCh4LCBsYXN0ID0gMSkgPT4gbGFzdCAqICh4ICsgMSkpOyAvLyBmYWN0b3JpYWwhXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMlxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDI0XG4gKiAvLyBBZ2FpbiwgcnVucyBmb3JldmVyLCB0aG91Z2ggZmFjdG9yaWFscyBnZXQgYmlnIHZlcnkgcXVpY2tseVxuICpcbiAqIC8vIEl0ZXJhdG9ycyB0ZXJtaW5hdGUgd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYFxuICogY29uc3Qgc3RvcEl0ZXIgPSBpdGVyYXRvcih4ID0+IHggPCAyID8geCA6IHVuZGVmaW5lZCk7XG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDBcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLmRvbmUpOyAgICAvLyAtPiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBJZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgbm90IGFjdHVhbGx5IGl0ZXJhYmxlIChvciBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiksXG4gKiBgbnVsbGAgaXMgcmV0dXJuZWQgaW4gcGxhY2Ugb2YgdGhlIGl0ZXJhdG9yLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNyZWF0ZSBhbiBpdGVyYXRvciBvdmVyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuU29ydEZ1bmN0aW9ufSBbc29ydEZuXSBBbiBvcHRpb25hbCBzb3J0IGZ1bmN0aW9uIGZvclxuICogICAgIHNvcnRpbmcgdGhlIGtleXMgb2YgYW4gb2JqZWN0IGJlZm9yZSBpdGVyYXRpb24uIEl0IGlzIGlnbm9yZWQgaWYgYHZhbHVlYFxuICogICAgIGlzbid0IGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciBgdmFsdWVgLlxuICovXG5mdW5jdGlvbiBpdGVyYXRvcih2YWx1ZSwgc29ydEZuID0gbnVsbCkge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgY2FzZSBpc0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pOlxuICAgICAgcmV0dXJuIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICBjYXNlIGlzRnVuY3Rpb24odmFsdWUpOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uSXRlcmF0b3IodmFsdWUpO1xuICAgIGNhc2UgaXNPYmplY3QodmFsdWUpOlxuICAgICAgcmV0dXJuIG9iamVjdEl0ZXJhdG9yKHZhbHVlLCBzb3J0Rm4pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGFzc2VkIG9iamVjdCBpcyBpdGVyYWJsZSwgaW4gdGVybXMgb2Ygd2hhdCAnaXRlcmFibGUnXG4gKiBtZWFucyB0byB0aGlzIGxpYnJhcnkuIEluIG90aGVyIHdvcmRzLCB2YWx1ZXMgaW1wbGVtZW50aW5nIHRoZSBgaXRlcmFibGVgXG4gKiBwcm90b2NvbCBhbmQgcGxhaW4gb2JqZWN0cyByZXR1cm4gYHRydWVgLCB3aGlsZSBldmVyeXRoaW5nIGVsc2UgcmV0dXJuc1xuICogYGZhbHNlYC4gVGhpcyBkb2VzIG5vdCByZXR1cm4gYHRydWVgIGZvciBmdW5jdGlvbnMgZXZlbiB0aG91Z2hcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuaXRlcmF0b3J8aXRlcmF0b3J9IGNhbiBwcm9kdWNlIGFuIGl0ZXJhdG9yIGZvciB0aGVtLFxuICogYmVjYXVzZSBub3QgYWxsIGZ1bmN0aW9ucyB3b3JrIHdlbGwgd2l0aFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBmb3IgaXRlcmFiaWxpdHkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBpdGVyYWJsZVxuICogICAgIChge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcn1gIHdpbGwgcmV0dXJuIGFuIGl0ZXJhdG9yIGZvciBpdCkgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzSW1wbGVtZW50ZWQodmFsdWUsIFwiaXRlcmF0b3JcIikgfHwgaXNPYmplY3QodmFsdWUpO1xufVxuXG5leHBvcnQgeyBpdGVyYXRvciwgaXNJdGVyYWJsZSwga3YsIGtleSwgdmFsdWUgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3RvY29scyBmb3IgaXRlcmF0aW9uIGFuZCByZWR1Y3Rpb24uXG4gKlxuICogVGhlIG5hbWVzIGZvciB0aGVzZSBwcm90b2NvbHMgY2FtZSBmcm9tIGEgZGlzY3Vzc2lvbiB0aHJlYWRcbiAqICh7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2NvZ25pdGVjdC1sYWJzL3RyYW5zZHVjZXJzLWpzL2lzc3Vlcy8yMH0pIGZyb20gYVxuICogdGltZSB3aGVuIHRyYW5zZHVjZXJzIHdlcmUgdmVyeSBtdWNoIGluIHRoZSBmb3JlZnJvbnQuIEl0J3MgdGhlIGNsb3Nlc3QgdGhpbmdcbiAqIHRoZXJlIGlzIHRvIGEgc3RhbmRhcmQsIHNvIGl0IHdhcyBhZG9wdGVkIGhlcmUuXG4gKlxuICogVGhlc2UgYXJlIHRoZSBzYW1lIHN5bWJvbHMgYXMgYXZhaWxhYmxlIGluIG15IHRyYW5zZHVjZXIgbGlicmFyeS4gVGhleSBhcmVcbiAqIHB1YmxpY2x5IGF2YWlsYWJsZSBmcm9tIHRoZXJlLlxuICpcbiAqIEBtb2R1bGUgeGR1Y2UvcHJvdG9jb2xcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuIFRoZVxuICogdmFsdWVzIG9mIHRoaXMgbWFwIHdpbGwgZGVwZW5kIG9uIHdoZXRoZXIgc3ltYm9scyBhcmUgYXZhaWxhYmxlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByb3RvY29sTWFwXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gaW5pdCBUaGUgYHRyYW5zZHVjZXIvaW5pdGAgcHJvdG9jb2wuIFRoaXMgaXMgdXNlZFxuICogICAgIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgaW5pdGlhbGl6ZSBhIHRhcmdldCBjb2xsZWN0aW9uIGJlZm9yZSBhZGRpbmcgaXRlbXNcbiAqICAgICB0byBpdC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBzdGVwIFRoZSBgdHJhbnNkdWNlci9zdGVwYCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdHJhbnNkdWNlcidzIHN0ZXAgcHJvY2Vzcywgd2hlcmVcbiAqICAgICBvYmplY3RzIGFyZSBhZGRlZCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gb25lIGF0IGEgdGltZS5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZXN1bHQgVGhlIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIHRvIG1hcmsgZnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzdGVwIHByb2Nlc3MgYW5kXG4gKiAgICAgcmV0dXJuIHRoZSBmaW5hbCBmb3JtIHRvIGJlIG91dHB1dC4gVGhpcyBpcyBvcHRpb25hbDsgaWYgdGhlIHRyYW5zZHVjZXJcbiAqICAgICBkb2VzIG5vdCB3YW50IHRvIHRyYW5zZm9ybSB0aGUgZmluYWwgcmVzdWx0LCBpdCBzaG91bGQganVzdCByZXR1cm4gdGhlXG4gKiAgICAgcmVzdWx0IG9mIGl0cyBjaGFpbmVkIHRyYW5zZHVjZXIncyBgcmVzdWx0YCBmdW5jdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSByZWR1Y2VkIFRoZSBgdHJhbnNkdWNlci9yZWR1Y2VkYCBwcm90b2NvbC4gVGhlXG4gKiAgICAgcHJlc2VuY2Ugb2YgdGhpcyBrZXkgb24gYW4gb2JqZWN0IGluZGljYXRlcyB0aGF0IGl0cyB0cmFuc2Zvcm1hdGlvbiBoYXNcbiAqICAgICBiZWVuIGNvbXBsZXRlZC4gSXQgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgY29sbGVjdGlvbnMgd2hvc2VcbiAqICAgICB0cmFuc2Zvcm1hdGlvbnMgY29uY2x1ZGUgYmVmb3JlIGV2ZXJ5IG9iamVjdCBpcyBpdGVyYXRlZCBvdmVyIChhcyBpblxuICogICAgIGB7QGxpbmsgeGR1Y2UudGFrZX1gIHRyYW5zZHVjZXJzLikgSXQgaXMgb2YgbGl0dGxlIHVzZSBiZXlvbmQgdHJhbnNkdWNlclxuICogICAgIGF1dGhvcmluZy5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSB2YWx1ZSBUaGUgYHRyYW5zZHVjZXIvdmFsdWVgIHByb3RvY29sLiBUaGlzIGlzXG4gKiAgICAgdXNlZCBpbnRlcm5hbGx5IHRvIG1hcmsgcHJvcGVydGllcyB0aGF0IGNvbnRhaW4gdGhlIHZhbHVlIG9mIGEgcmVkdWNlZFxuICogICAgIHRyYW5zZm9ybWF0aW9uLiBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyIGF1dGhvcmluZy5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYXBwaW5nIG9mIHByb3RvY29sIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcHJvcGVydHkga2V5IG5hbWVzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UuUHJvdG9jb2xNYXB9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKi9cbmNvbnN0IHByb3RvY29scyA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICBpbml0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIilcbiAgfSxcbiAgc3RlcDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpXG4gIH0sXG4gIHJlc3VsdDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIilcbiAgfSxcbiAgcmVkdWNlZDoge1xuICAgIHZhbHVlOiBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZWR1Y2VkXCIpXG4gIH0sXG4gIHZhbHVlOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3ZhbHVlXCIpXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpc0ltcGxlbWVudGVkKG9iaiwgcHJvdG9jb2wpIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgXCJpdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgaXNGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSkgfHxcbiAgICAgICAgaXNHZW5lcmF0b3JGdW5jdGlvbihvYmpbU3ltYm9sLml0ZXJhdG9yXSlcbiAgICAgICk7XG4gICAgY2FzZSBcImFzeW5jSXRlcmF0b3JcIjpcbiAgICAgIHJldHVybiBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pO1xuICAgIGNhc2UgXCJyZWR1Y2VkXCI6XG4gICAgY2FzZSBcInZhbHVlXCI6XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopLmluY2x1ZGVzKHByb3RvY29sc1twcm90b2NvbF0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNGdW5jdGlvbihvYmpbcHJvdG9jb2xzW3Byb3RvY29sXV0pO1xuICB9XG59XG5cbmV4cG9ydCB7IHByb3RvY29scywgaXNJbXBsZW1lbnRlZCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gdGhlIHByb2R1Y2luZyByZWR1Y2VyIG9iamVjdHMsIG1hcmtpbmdcbiAqIGNvbXBsZXRlZCBvYmplY3RzLCBhbmQgcGVyZm9ybWluZyBnZW5lcmFsIHJlZHVjdGlvbiBvcGVyYXRpb25zLlxuICpcbiAqIEBtb2R1bGUgcmVkdWN0aW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGlzSW1wbGVtZW50ZWQsIHByb3RvY29scyBhcyBwIH0gZnJvbSBcIm1vZHVsZXMvcHJvdG9jb2xcIjtcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc09iamVjdCwgaXNGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5pbXBvcnQgeyBrdiwgaXRlcmF0b3IgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluaXQgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXG4gKiBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBjb2xsZWN0aW9uIGluIHF1ZXN0aW9uLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0XG4gKiBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLiBUaGlzIG1ha2VzIGNvbmRpdGlvbmFscyBhIGJpdCBlYXNpZXJcbiAqIHRvIHdvcmsgd2l0aC5cbiAqXG4gKiBJbiBvcmRlciB0byBzdXBwb3J0IHRoZSBjb252ZXJzaW9uIG9mIGZ1bmN0aW9ucyBpbnRvIHJlZHVjZXJzLCBmdW5jdGlvblxuICogc3VwcG9ydCBpcyBhbHNvIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBIGNvbGxlY3Rpb24gdG8gY3JlYXRlIGFuIGluaXQgZnVuY3Rpb24gZm9yLiBUaGlzIGNhblxuICogICAgIGJlIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCBvciBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5Jbml0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsIHJldHVybnMgYW5cbiAqICAgICBpbml0aWFsIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24uIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzXG4gKiAgICAgbm90IGl0ZXJhYmxlLCB0aGVuIGBudWxsYCBpcyByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGluaXQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpbml0XCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5pbml0XTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFwiXCI7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuICgpID0+IFtdO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gKHt9KTtcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0ZXAgZnVuY3Rpb24gZm9yIGEgY29sbGVjdGlvbi4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5cbiAqIGFjY3VtdWxhdG9yIGFuZCBhIHZhbHVlIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHZhbHVlIGludG8gdGhlXG4gKiBhY2N1bXVsYXRvci4gSWYgdGhlIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGl0c2VsZiBzaW1wbHkgcmVkdWNlcyB0aGUgaW5wdXQgaW50byB0aGUgdGFyZ2V0XG4gKiBjb2xsZWN0aW9uIHdpdGhvdXQgbW9kaWZ5aW5nIGl0LlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmVcbiAqICAgICBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBBIHJlZHVjdGlvbiBmdW5jdGlvbiBmb3IgdGhlIHByb3ZpZGVkXG4gKiAgICAgY29sbGVjdGlvbiB0aGF0IHNpbXBseSBhZGRzIGFuIGVsZW1lbnQgdG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXRcbiAqICAgICBtb2RpZnlpbmcgaXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdCBpdGVyYWJsZSwgYG51bGxgIGlzXG4gKiAgICAgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzdGVwKGNvbGxlY3Rpb24pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0ltcGxlbWVudGVkKGNvbGxlY3Rpb24sIFwic3RlcFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3Auc3RlcF07XG5cbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNPYmplY3QoaW5wdXQpID8ga3YoaW5wdXQpLnYgOiBpbnB1dDtcbiAgICAgICAgcmV0dXJuIGFjYyArIHZhbHVlO1xuICAgICAgfTtcblxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBhY2MucHVzaChpbnB1dCk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBpbnB1dDtcblxuICAgICAgICBpZiAoIWlzT2JqZWN0KGlucHV0KSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpc24ndCBhbiBvYmplY3QsIHR1cm4gaXQgaW50byBhbiBvYmplY3Qgd2l0aCBhXG4gICAgICAgICAgLy8gbnVtZXJpY2FsIGtleSBvbmUgZ3JlYXRlciB0aGFuIHRoZSBtYXgga2V5IGFscmVhZHkgaW4gdGhlXG4gICAgICAgICAgLy8gYWNjdW11bGF0b3JcbiAgICAgICAgICBjb25zdCBtYXggPSBPYmplY3Qua2V5cyhhY2MpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIC0xKTtcbiAgICAgICAgICB2YWx1ZSA9IHsgW21heCArIDFdOiBpbnB1dCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBrLCB2IH0gPSBrdih2YWx1ZSk7XG4gICAgICAgIGFjY1trXSA9IHY7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0Z1bmN0aW9uKGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiBjb2xsZWN0aW9uKGFjYywgaW5wdXQpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlc3VsdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBwZXJmb3Jtc1xuICogYW55IGZpbmFsIHByb2Nlc3NpbmcgdGhhdCBzaG91bGQgYmUgZG9uZSBvbiB0aGUgcmVzdWx0IG9mIGEgcmVkdWN0aW9uLiBJZiB0aGVcbiAqIGNvbGxlY3Rpb24gZG9lc24ndCBzdXBwb3J0IHJlZHVjdGlvbiwgYG51bGxgIGlzIHJldHVybmVkLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYSBzdGVwIGZ1bmN0aW9uIGZvci4gVGhpcyBjYW4gYmVcbiAqICAgICBhbnl0aGluZyB0aGF0IHN1cHBvcnRzIHRoZSBpdGVyYXRpb24gcHJvdG9jb2wsIGEgcGxhaW4gb2JqZWN0LCBvciBhXG4gKiAgICAgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuUmVzdWx0RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBnaXZlbiBhIHJlZHVjZWRcbiAqICAgICBjb2xsZWN0aW9uLCBwcm9kdWNlcyB0aGUgZmluYWwgb3V0cHV0LiBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3RcbiAqICAgICBpdGVyYWJsZSwgYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXN1bHQoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJyZXN1bHRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLnJlc3VsdF07XG4gICAgY2FzZSBpc1N0cmluZyhjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gdmFsdWUgPT4gdmFsdWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjZXIgb2JqZWN0IGZyb20gYSBmdW5jdGlvbiBvciBmcm9tIGEgYnVpbHQtaW4gcmVkdWNpYmxlIHR5cGVcbiAqIChhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcpLlxuICpcbiAqIFRvIGNyZWF0ZSBhIHJlZHVjZXIgZm9yIGFycmF5cywgb2JqZWN0cywgb3Igc3RyaW5ncywgc2ltcGx5IHBhc3MgYW4gZW1wdHlcbiAqIHZlcnNpb24gb2YgdGhhdCBjb2xsZWN0aW9uIHRvIHRoaXMgZnVuY3Rpb24gKGUuZy4sIGB0b1JlZHVjZXIoW10pYCkuXG4gKlxuICogVGhlIG5vdGFibGUgdXNlIGZvciB0aGlzIGZ1bmN0aW9uIHRob3VnaCBpcyB0byB0dXJuIGEgcmVkdWN0aW9uIGZ1bmN0aW9uIGludG9cbiAqIGEgcmVkdWNlciBvYmplY3QuIFRoZSBmdW5jdGlvbiBpcyBhIGZ1bmN0aW9uIG9mIHR3byBwYXJhbWV0ZXJzLCBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUsIGFuZCByZXR1cm5zIHRoZSBhY2N1bXVsYXRvciB3aXRoIHRoZSB2YWx1ZSBpbiBpdC5cbiAqIFRoaXMgaXMgZXhhY3RseSB0aGUgc2FtZSBraW5kIG9mIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRvIHJlZHVjdGlvblxuICogZnVuY3Rpb25zIGxpa2UgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBhbmQgTG9kYXNoJ3MgYF8ucmVkdWNlYC5cbiAqXG4gKiBOb3RlIGluIHBhcnRpY3VsYXIgdGhhdCB0aGUgb3V0cHV0IG9mIHRoaXMgcmVkdWNlciBkb2VzIG5vdCBuZWVkIHRvIGJlIGFcbiAqIGNvbGxlY3Rpb24uIEl0IGNhbiBiZSBhbnl0aGluZy4gV2hpbGUgdHJhbnNkdWNpbmcgbm9ybWFsbHkgaW52b2x2ZXNcbiAqIHRyYW5zZm9ybWluZyBvbmUgY29sbGVjdGlvbiBpbnRvIGFub3RoZXIsIGl0IG5lZWQgbm90IGJlIHNvLiBGb3IgZXhhbXBsZSxcbiAqIGhlcmUgaXMgYSByZWR1Y2VyIHRoYXQgd2lsbCByZXN1bHQgaW4gc3VtbWluZyBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHJlZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gcmVkdWNlKFsxLCAyLCAzLCA0LCA1XSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDE1XG4gKiBgYGBcbiAqXG4gKiBUaGlzIGNhbiBiZSBjb21iaW5lZCB3aXRoIHRyYW5zZHVjZXJzIGFzIHdlbGwsIGFzIGluIHRoaXMgY2FsY3VsYXRpb24gb2YgdGhlXG4gKiBzdW0gb2YgdGhlICpzcXVhcmVzKiBvZiB0aGUgY29sbGVjdGlvbiB2YWx1ZXMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyB0b1JlZHVjZXIsIHRyYW5zZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHN1bVJlZHVjZXIgPSB0b1JlZHVjZXIoKGFjYywgaW5wdXQpID0+IGFjYyArIGlucHV0KTtcbiAqIGNvbnN0IHN1bSA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIG1hcCh4ID0+IHggKiB4KSwgc3VtUmVkdWNlciwgMCk7XG4gKiBjb25zb2xlLmxvZyhzdW0pOyAgIC8vIC0+IDU1XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQW4gaXRlcmFibGUgY29sbGVjdGlvbiBvciBhIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHByb3RvY29sIHByb3BlcnRpZXMgZm9yIGluaXQsIHN0ZXAsIGFuZFxuICogICAgIHJlc3VsdC4gVGhpcyBvYmplY3QgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyBhIHJlZHVjZXIgb2JqZWN0IChvbmUgcHJvdmlkZWRcbiAqICAgICB0byBge0BsaW5rIHhkdWNlLnJlZHVjZXxyZWR1Y2V9YCBvciBge0BsaW5rIHhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCkuXG4gKiAgICAgSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdGhpc1xuICogICAgIG9iamVjdCB3aWxsIGJlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gdG9SZWR1Y2VyKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIFtwLmluaXRdOiBpbml0KGNvbGxlY3Rpb24pLFxuICAgIFtwLnN0ZXBdOiBzdGVwKGNvbGxlY3Rpb24pLFxuICAgIFtwLnJlc3VsdF06IHJlc3VsdChjb2xsZWN0aW9uKVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBhcnJheXMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQVJSQVlfUkVEVUNFUiA9IHRvUmVkdWNlcihbXSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBPQkpFQ1RfUkVEVUNFUiA9IHRvUmVkdWNlcih7fSk7XG5cbi8qKlxuICogQSByZWR1Y2VyIG9iamVjdCBmb3Igc3RyaW5ncy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBTVFJJTkdfUkVEVUNFUiA9IHRvUmVkdWNlcihcIlwiKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgdHJhbnNkdWNlciBmcm9tIGEgZnVuY3Rpb24gYW5kIGEgdHJhbnNkdWNlciB0byBjaGFpbiBpdCB0by5cbiAqXG4gKiBUaGlzIGlzIGluIG1vc3QgcmVzcGVjdHMganVzdCBsaWtlIHtAbGluayBtb2R1bGU6eGR1Y2UudG9SZWR1Y2VyfHRvUmVkdWNlcn0sXG4gKiB3aXRoIHR3byBub3RhYmxlIGRpZmZlcmVuY2VzLiBPbmUgaXMgdGhhdCBpdCByZXF1aXJlcyBhIHRyYW5zZHVjZXIgdG8gY2hhaW5cbiAqIHRvLCBhbmQgaXQgZG9lcyB0aGUgY2hhaW5pbmcgYXMgYSBwYXJ0IG9mIGNyZWF0aW5nIHRoZSBuZXcgdHJhbnNkdWNlci4gVGhlXG4gKiBvdGhlciBpcyB0aGF0IGl0IGluY2x1ZGVzIGEgdXNhYmxlIGBpbml0YCBmdW5jdGlvbiwgd2hlcmUgcGFzc2luZyBhIGZ1bmN0aW9uXG4gKiB0byB7QGxpbmsgbW9kdWxlOnhkdWNlLnRvUmVkdWNlcnx0b1JlZHVjZXJ9IHdvdWxkIGNyZWF0ZSBhbiBpbml0IGZ1bmN0aW9uXG4gKiB0aGF0IHRocm93cyBhbiBlcnJvciBpZiBpdCdzIGNhbGxlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFwcGxpZXMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIHRoZSBgc3RlcGAgZnVuY3Rpb24gb2YgdGhlXG4gKiByZXR1cm5lZCB0cmFuc2R1Y2VyLCBhbmQgdGhlIGBpbml0YCBhbmQgYHJlc3VsdGAgZnVuY3Rpb25zIHNpbXBseSBjYWxsIHRoZVxuICogc2FtZSBmdW5jdGlvbnMgaW4gdGhlIG5leHQgdHJhbnNkdWNlciBkb3duIHRoZSBjaGFpbi4gVGhpcyBpcyBwcmVjaXNlbHkgd2hhdFxuICogKm1vc3QqIHRyYW5zZHVjZXJzIHdhbnQuLi5gaW5pdGAgYW5kIGByZXN1bHRgIGZ1bmN0aW9ucyBhcmUgbm9ybWFsbHkgaGFuZGxlZFxuICogYnkgdGhlIHJlZHVjZXIgYXQgdGhlIGVuZCBvZiB0aGUgdHJhbnNkdWNlciBjaGFpbi4uLmJ1dCBpbiB0aGUgcmFyZSBjYXNlXG4gKiB3aGVuIGBpbml0YCBvciBgcmVzdWx0YCBtdXN0IGRvIG1vcmUgdGhhbiB0aGlzLCB0aGUgdHJhbnNkdWNlciBtdXN0IGJlXG4gKiBjcmVhdGVkIG1hbnVhbGx5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgYXV0b21hdGljYWxseSBjaGFpbiB0aGUgYHN0ZXBgIGZ1bmN0aW9uIHRvIHRoZSBuZXh0XG4gKiBvbmUgZG93biB0aGUgbGluZSwgYXMgdGhhdCBjYW4gYmUgZG9uZSBpbiBhbnkgbnVtYmVyIG9mIGRpZmZlcmVudCB3YXlzLiBUaHVzXG4gKiB0aGUgZnVuY3Rpb24gaXRzZWxmIHNob3VsZCBjYWxsIHRoZSBgc3RlcGAgZnVuY3Rpb24gaW4gYHhmb3JtYCBpbiB3aGF0ZXZlclxuICogd2F5IGlzIGFwcHJvcHJpYXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gZm4gVGhlIHN0ZXAgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2R1Y2VyLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlcn0geGZvcm0gVGhlIG5leHQgdHJhbnNkdWNlciBvYmplY3QgaW4gdGhlXG4gKiAgICAgY2hhaW4uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJ9IEEgbmV3IHRyYW5zZHVjZXIsIGNoYWluaW5nIHRoZSBzdXBwbGllZFxuICogICAgIGZ1bmN0aW9uIHRvIHRoZSBzdXBwbGllZCB0cmFuc2R1Y2VyLlxuICovXG5mdW5jdGlvbiB0b1RyYW5zZHVjZXIoZm4sIHhmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgW3AuaW5pdF0oKSB7XG4gICAgICByZXR1cm4geGZvcm1bcC5pbml0XSgpO1xuICAgIH0sXG5cbiAgICBbcC5zdGVwXTogZm4sXG5cbiAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICByZXR1cm4geGZvcm1bcC5yZXN1bHRdKHZhbHVlKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlZHVjdGlvbiBmdW5jdGlvbiBmcm9tIGEgdHJhbnNkdWNlciBhbmQgYSByZWR1Y2VyLlxuICpcbiAqIFRoaXMgcHJvZHVjZXMgYSBmdW5jdGlvbiB0aGF0J3Mgc3VpdGFibGUgZm9yIGJlaW5nIHBhc3NlZCBpbnRvIG90aGVyXG4gKiBsaWJyYXJpZXMnIHJlZHVjZSBmdW5jdGlvbnMsIHN1Y2ggYXMgSmF2YVNjcmlwdCdzIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBvclxuICogTG9kYXNoJ3MgYF8ucmVkdWNlYC4gSXQgcmVxdWlyZXMgYm90aCBhIHRyYW5zZm9ybWVyIGFuZCBhIHJlZHVjZXIgYmVjYXVzZVxuICogcmVkdWN0aW9uIGZ1bmN0aW9ucyBmb3IgdGhvc2UgbGlicmFyaWVzIG11c3Qga25vdyBob3cgdG8gZG8gYm90aC4gVGhlIHJlZHVjZXJcbiAqIGNhbiBiZSBhIHN0YW5kYXJkIHJlZHVjZXIgb2JqZWN0IGxpa2UgdGhlIG9uZXMgc2VudFxuICogdG9ge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAgb3JcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnJlZHVjZXxyZWR1Y2V9YCwgb3IgaXQgY2FuIGJlIGEgcGxhaW4gZnVuY3Rpb24gdGhhdFxuICogdGFrZXMgdHdvIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgc2Vjb25kIHBhcmFtZXRlclxuICogaW50byB0aGUgZmlyc3QuXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gbmVlZCBmb3IgYSB0cmFuc2Zvcm1hdGlvbiwgdGhlbiBwYXNzIGluIHRoZVxuICogYHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnMuaWRlbnRpdHl8aWRlbnRpdHl9YCB0cmFuc2R1Y2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9IHhmb3JtIEEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2Ugc3RlcFxuICogICAgIGZ1bmN0aW9uIHdpbGwgYmVjb21lIHRoZSByZXR1cm5lZCByZWR1Y3Rpb24gZnVuY3Rpb24uXG4gKiBAcGFyYW0geyhtb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufG1vZHVsZTp4ZHVjZS5SZWR1Y2VyKX0gcmVkdWNlciBBXG4gKiAgICAgcmVkdWNlciB0aGF0IGtub3dzIGhvdyB0byByZWR1Y2UgdmFsdWVzIGludG8gYW4gb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBjYW4gZWl0aGVyIGJlIGEgcmVkdWNpbmcgZnVuY3Rpb24gb3IgYSB0cmFuc2R1Y2VyIG9iamVjdCB3aG9zZSBgc3RlcGBcbiAqICAgICBmdW5jdGlvbiBrbm93cyBob3cgdG8gcGVyZm9ybSB0aGlzIHJlZHVjdGlvbi5cbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBib3RoIHRoZVxuICogICAgIHRyYW5zZm9ybWF0aW9uIGFuZCB0aGUgcmVkdWN0aW9uIG9mIGEgdmFsdWUgb250byBhIHRhcmdldCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9GdW5jdGlvbih4Zm9ybSwgcmVkdWNlcikge1xuICBjb25zdCByID0gdHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRvUmVkdWNlcihyZWR1Y2VyKSA6IHJlZHVjZXI7XG4gIGNvbnN0IHJlc3VsdCA9IHhmb3JtKHIpO1xuICByZXR1cm4gcmVzdWx0W3Auc3RlcF0uYmluZChyZXN1bHQpO1xufVxuXG4vKipcbiAqIE1hcmtzIGEgdmFsdWUgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBpcyBkb25lIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZS4gVGhpcyBtZWFucyB0aHJlZSB0aGluZ3M6IGZpcnN0LCBhXG4gKiBjb21wbGV0ZSBvYmplY3QgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZSBhZ2Fpbjsgc2Vjb25kLCBhIGNvbXBsZXRlIHZhbHVlXG4gKiBpc24ndCB1c2FibGUgd2l0aG91dCBiZWluZyB1bmNvbXBsZXRlZCBmaXJzdDsgYW5kIHRoaXJkIGFueSB0eXBlIG9mIHZhbHVlXG4gKiAoaW5jbHVkaW5nIGB1bmRlZmluZWRgKSBtYXkgYmUgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGlzIHJlZHVjdGlvbiBpc1xuICogICAgIGFjaGlldmVkIGJ5IHdyYXBwaW5nIHRoZSB2YWx1ZSBpbiBhIG1hcmtlciBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgW3AucmVkdWNlZF06IHRydWUsXG4gICAgW3AudmFsdWVdOiB2YWx1ZVxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbXBsZXRlIHN0YXR1cyBmcm9tIGEgY29tcGxldGVkIHZhbHVlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aGVuIGl0J3MgY2VydGFpbiB0aGF0IGEgdmFsdWUgaXNcbiAqIGFscmVhZHkgbWFya2VkIGFzIGNvbXBsZXRlLiBJZiBpdCBpcyBub3QsIGB1bmRlZmluZWRgIHdpbGwgYmUgcmV0dXJuZWRcbiAqIGluc3RlYWQgb2YgdGhlIHZhbHVlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHVuY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gQW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuIElmIHRoZSB2YWx1ZSB3YXNcbiAqICAgICBub3QgY29tcGxldGUgaW4gdGhlIGZpcnN0IHBsYWNlLCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQuXG4gKi9cbmZ1bmN0aW9uIHVuY29tcGxldGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlPy5bcC52YWx1ZV07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QgZm9yIGl0cyBjb21wbGV0ZSBzdGF0dXMuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBjb21wbGV0ZSwgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLnJlZHVjZWRdO1xufVxuXG4vKipcbiAqIE1ha2VzIHN1cmUgdGhhdCBhIHZhbHVlIGlzIG1hcmtlZCBhcyBjb21wbGV0ZTsgaWYgaXQgaXMgbm90LCBpdCB3aWxsIGJlXG4gKiBtYXJrZWQgYXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBkaWZmZXJzIGZyb20ge0BsaW5rIG1vZHVsZTp4ZHVjZS5jb21wbGV0ZXxjb21wbGV0ZX0gaW4gdGhhdFxuICogaWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29tcGxldGUsIHRoaXMgZnVuY3Rpb24gd29uJ3QgY29tcGxldGUgaXQgYWdhaW4uXG4gKiBUaGVyZWZvcmUgdGh1cyBmdW5jdGlvbiBjYW4ndCBiZSB1c2VkIHRvIG1ha2UgYSB2YWx1ZSBjb21wbGV0ZSBtdWx0aXBsZVxuICogdGltZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY29tcGxldGVkLlxuICogQHJldHVybiB7Kn0gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29tcGxldGUsIHRoZW4gdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UsIGEgY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHZhbHVlIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBlbnN1cmVDb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHZhbHVlIDogY29tcGxldGUodmFsdWUpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGNvbXBsZXRlIHN0YXR1cyBmcm9tIGEgdmFsdWUsIGFzIGxvbmcgYXMgaXQgYWN0dWFsbHkgaXMgY29tcGxldGUuXG4gKlxuICogVGhpcyBkb2VzIGEgY2hlY2sgdG8gbWFrZSBzdXJlIHRoZSB2YWx1ZSBwYXNzZWQgaW4gYWN0dWFsbHkgaXMgY29tcGxldGUuIElmXG4gKiBpdCBpc24ndCwgdGhlIHZhbHVlIGl0c2VsZiBpcyByZXR1cm5lZC4gSXQncyBtZWFudCB0byBiZSB1c2VkIHdoZW4gdGhlXG4gKiBjb21wbGV0ZWQgc3RhdHVzIGlzIHVuY2VydGFpbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBjb21wbGV0ZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IHVuY29tcGxldGVkLCB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiAgICAgcmV0dXJuZWQuIE90aGVyd2lzZSBhbiB1bmNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlVW5jb21wbGV0ZWQodmFsdWUpIHtcbiAgcmV0dXJuIGlzQ29tcGxldGVkKHZhbHVlKSA/IHVuY29tcGxldGUodmFsdWUpIDogdmFsdWU7XG59XG5cbi8qKlxuICogUmVkdWNlcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gdGhyb3VnaCBhIHJlZHVjZXIgaW50byBhbiBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgbG93ZXN0LWxldmVsIG9mIHRoZSB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zLiBJbiBmYWN0LCB0aGlzIG9uZSBpc1xuICogc28gbG93LWxldmVsIHRoYXQgaXQgZG9lc24ndCBoYXZlIGEgbG90IG9mIHVzZSBpbiBub3JtYWwgb3BlcmF0aW9uLiBJdCdzIG1vcmVcbiAqIHVzZWZ1bCBmb3Igd3JpdGluZyB5b3VyIG93biB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogYHJlZHVjZWAgZG9lc24ndCBhc3N1bWUgdGhhdCB0aGVyZSdzIGV2ZW4gYSB0cmFuc2Zvcm1hdGlvbi4gSXQgcmVxdWlyZXMgYW5cbiAqIGluaXRpYWwgY29sbGVjdGlvbiBhbmQgYSByZWR1Y2VyIG9iamVjdCB0aGF0IGlzIG1hdGNoZWQgdG8gdGhhdCBpbml0aWFsXG4gKiBjb2xsZWN0aW9uLiBUaGUgcmVkdWNlciBvYmplY3QgbXVzdCBpbXBsZW1lbnQgdGhlIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIHByb3RvY29scywgd2hpY2ggaW5zdHJ1Y3QgYHJlZHVjZWAgb24gaG93IHRvIGJ1aWxkIHVwIHRoZSBjb2xsZWN0aW9uLiBUaGVcbiAqIHJlZHVjZXIgbWF5IGltcGxlbWVudCBhIHRyYW5zZm9ybWF0aW9uIGFzIHdlbGwsIGJ1dCBhbGwgdGhhdCdzIGltcG9ydGFudCBoZXJlXG4gKiBpcyB0aGF0IGl0IGNhbiBkbyB0aGUgcmVkdWN0aW9uLlxuICpcbiAqIFRoZSBpbnB1dCBjb2xsZWN0aW9uIG5lZWQgb25seSBpbXBsZW1lbnQgYGl0ZXJhYmxlYC4gSXQgaXMgbm90IG5lY2Vzc2FyeSBmb3JcbiAqIHRoZSBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb25zIHRvIGJlIG9mIHRoZSBzYW1lIHR5cGU7IGFzIGxvbmcgYXMgdGhlIGlucHV0XG4gKiBpbXBsZW1lbnRzIGBpdGVyYWJsZWAgYW5kIHRoZSByZWR1Y2VyIGltcGxlbWVudHMgYHN0ZXBgIGFuZCBgcmVzdWx0YFxuICogYXBwcm9wcmlhdGUgdG8gdGhlIHR5cGUgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uLCB0aGVuIGFueSB0cmFuc2xhdGlvblxuICogYmV0d2VlbiBjb2xsZWN0aW9uIHR5cGVzIGNhbiBvY2N1ci5cbiAqXG4gKiBUaGUgbm9ybWFsIGNvdXJzZSBvZiBvcGVyYXRpb24gd2lsbCBiZSB0byBjYWxsXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9IGluc3RlYWQsIGFzIHRoYXQgZnVuY3Rpb24gbWFrZXMgaXRcbiAqIGVhc3kgdG8gY29tYmluZSB0cmFuc2Zvcm1hdGlvbnMgd2l0aCByZWR1Y3Rpb25zIGFuZCBjYW4gb3B0aW9uYWxseSBmaWd1cmUgb3V0XG4gKiB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uIGl0c2VsZi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHRoaXNcbiAqICAgICBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnRcbiAqICAgICBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleSBjYW4gYmUgdXNlZCBhcyB3ZWxsLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuUmVkdWNlcn0gcmVkdWNlciBBbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBgc3RlcGBcbiAqICAgICBhbmQgYHJlc3VsdGAgcHJvdG9jb2xzLiBUaGlzIG9iamVjdCBtdXN0IGtub3cgaG93IHRvIHByb2R1Y2UgYW4gb3V0cHV0XG4gKiAgICAgY29sbGVjdGlvbiB0aHJvdWdoIHRob3NlIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqIEBwYXJhbSB7Kn0gaW5pdCBhIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGUgb3V0cHV0IGNvbGxlY3Rpb24uIEl0XG4gKiAgICAgbmVlZCBub3QgYmUgZW1wdHk7IGlmIGl0IGlzIG5vdCwgdGhlIGV4aXN0aW5nIGVsZW1lbnRzIGFyZSByZXRhaW5lZCBhc1xuICogICAgIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGlzIHJlZHVjZWQgaW50byBpdC5cbiAqIEByZXR1cm4geyp9IEEgbmV3IGNvbGxlY3Rpb24sIGNvbnNpc3Rpbmcgb2YgdGhlIGBpbml0YCBjb2xsZWN0aW9uIHdpdGggYWxsIG9mXG4gKiAgICAgdGhlIGVsZW1lbnRzIG9mIHRoZSBgY29sbGVjdGlvbmAgY29sbGVjdGlvbiByZWR1Y2VkIGludG8gaXQuXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZShjb2xsZWN0aW9uLCByZWR1Y2VyLCBpbml0KSB7XG4gIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbiAgaWYgKCFpdGVyKSB7XG4gICAgdGhyb3cgRXJyb3IoYENhbm5vdCByZWR1Y2UgYW4gaW5zdGFuY2Ugb2YgJHtjb2xsZWN0aW9uLmNvbnN0cnVjdG9yLm5hbWV9YCk7XG4gIH1cblxuICBsZXQgYWNjID0gaW5pdDtcbiAgbGV0IHN0ZXAgPSBpdGVyLm5leHQoKTtcblxuICB3aGlsZSAoIXN0ZXAuZG9uZSkge1xuICAgIGFjYyA9IHJlZHVjZXJbcC5zdGVwXShhY2MsIHN0ZXAudmFsdWUpO1xuICAgIGlmIChpc0NvbXBsZXRlZChhY2MpKSB7XG4gICAgICBhY2MgPSB1bmNvbXBsZXRlKGFjYyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc3RlcCA9IGl0ZXIubmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZHVjZXJbcC5yZXN1bHRdKGFjYyk7XG59XG5cbmV4cG9ydCB7XG4gIGluaXQsXG4gIHN0ZXAsXG4gIHJlc3VsdCxcbiAgdG9SZWR1Y2VyLFxuICBBUlJBWV9SRURVQ0VSLFxuICBPQkpFQ1RfUkVEVUNFUixcbiAgU1RSSU5HX1JFRFVDRVIsXG4gIHRvVHJhbnNkdWNlcixcbiAgdG9GdW5jdGlvbixcbiAgY29tcGxldGUsXG4gIHVuY29tcGxldGUsXG4gIGlzQ29tcGxldGVkLFxuICBlbnN1cmVDb21wbGV0ZWQsXG4gIGVuc3VyZVVuY29tcGxldGVkLFxuICByZWR1Y2Vcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBGdW5jdGlvbnMgZGVhbGluZyB3aXRoIHRoZSBhY3R1YWwgdHJhbnNmb3JtYXRpb24gb2YgdmFsdWVzIGFuZCBmb3IgY2hvb3NpbmdcbiAqIHRoZSByZWR1Y2VyIGR1cmluZyB0cmFuc2R1Y3Rpb24uXG4gKlxuICogQG1vZHVsZSB4ZHVjZS90cmFuc2Zvcm1hdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpdGVyYXRvciB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuaW1wb3J0IHtcbiAgaXNDb21wbGV0ZWQsXG4gIHRvUmVkdWNlcixcbiAgcmVkdWNlLFxuICBBUlJBWV9SRURVQ0VSLFxuICBPQkpFQ1RfUkVEVUNFUixcbiAgU1RSSU5HX1JFRFVDRVJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc0FycmF5LCBpc09iamVjdCwgaXNTdHJpbmcgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3IgdGhhdCBpcyBhbHNvIGEgdHJhbnNkdWNlciwgdHJhbnNmb3JtaW5nIGl0cyBjb2xsZWN0aW9uXG4gKiBvbmUgZWxlbWVudCBhdCBhIHRpbWUuIFRoaXMgaXMgdGhlIGFjdHVhbCBvdXRwdXQgb2YgdGhlXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLmFzSXRlcmF0b3J8YXNJdGVyYXRvcn0gZnVuY3Rpb24sIGFzIHdlbGwgYXMgdGhlIG91dHB1dCBvZlxuICogdGhlIHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9IGZ1bmN0aW9uIHdoZW4gdGhlIGlucHV0IGlzIGFuXG4gKiBpdGVyYXRvci5cbiAqXG4gKiBUaGUgZW5kIHVzZXIgbmVlZCBub3QgYmUgY29uY2VybmVkIHdpdGggdGhlIHR5cGUgb2YgdGhlIG91dHB1dCBpdGVyYXRvciBpblxuICogdGhlc2UgY2lyY3Vtc3RhbmNlczsgdGhlIGVuZCB1c2VyIG5lZWQgb25seSBjYXJlIHRoYXQgdGhlIG91dHB1dCBpcywgaW4gZmFjdCxcbiAqIGFuIGl0ZXJhdG9yIGFuZCBjYW4gYmUgZXhwZWN0ZWQgdG8gYWN0IGxpa2Ugb25lLiBGb3IgdGhpcyByZWFzb24sIHRoaXNcbiAqIGZ1bmN0aW9uIGFuZCB0aGUgdHlwZSBpdCByZXR1cm5zIGFyZSBub3QgZXhwb3J0ZWQuXG4gKlxuICogVGhpcyBvYmplY3Qgc3VwcG9ydHMgbm9uLTEtdG8tMSBjb3JyZXNwb25kZW5jZXMgYmV0d2VlbiBpbnB1dCBhbmQgb3V0cHV0XG4gKiB2YWx1ZXMuIEZvciBleGFtcGxlLCBhIGZpbHRlciB0cmFuc2Zvcm1hdGlvbiBtaWdodCByZXR1cm4gZmV3ZXIgb3V0cHV0XG4gKiBlbGVtZW50cyB0aGFuIHdlcmUgaW4gdGhlIGlucHV0IGNvbGxlY3Rpb24sIHdoaWxlIGEgcmVwZWF0IHRyYW5zZm9ybWF0aW9uXG4gKiB3aWxsIHJldHVybiBtb3JlLiBJbiBlaXRoZXIgY2FzZSwgYG5leHRgIGluIHRoaXMgY2xhc3Mgd2lsbCByZXR1cm4gb25lXG4gKiBlbGVtZW50IHBlciBjYWxsLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRoYXQgdGhlXG4gKiAgICAgcHJvZHVjZWQgaXRlcmF0b3Igd2lsbCBiZSBpdGVyYXRpbmcgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaXRlcmF0b3Inc1xuICogICAgIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3IgdGhhdCB3aWxsIHRyYW5zZm9ybSBpdHMgaW5wdXRcbiAqICAgICBlbGVtZW50cyB1c2luZyB0aGUgdHJhbnNkdWNlciBmdW5jdGlvbiBhcyBpdHNcbiAqICAgICBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIGZ1bmN0aW9uIGlzIGNhbGxlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZHVjaW5nSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgY29uc3Qgc3RlcFJlZHVjZXIgPSB7XG4gICAgW3Auc3RlcF0oeGl0ZXIsIGlucHV0KSB7XG4gICAgICB4aXRlci5pdGVtcy51bnNoaWZ0KGlucHV0KTtcbiAgICAgIHJldHVybiB4aXRlcjtcbiAgICB9LFxuICAgIFtwLnJlc3VsdF0odmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICBjb25zdCB4ZiA9IHhmb3JtKHN0ZXBSZWR1Y2VyKTtcbiAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIC8vIFRoaXMgYXJyYXkgaXMgdGhlIGtleSB0byB3b3JraW5nIHByb3Blcmx5IHdpdGggc3RlcCBmdW5jdGlvbnMgdGhhdCByZXR1cm5cbiAgLy8gbW9yZSB0aGFuIG9uZSB2YWx1ZS4gQWxsIG9mIHRoZW0gYXJlIHB1dCBpbnRvIHRoZSBpdGVtcyBhcnJheS4gQXMgbG9uZyBhc1xuICAvLyB0aGlzIGFycmF5IGhhcyB2YWx1ZXMgaW4gaXQsIHRoZSBgbmV4dGAgZnVuY3Rpb24gd2lsbCByZXR1cm4gb25lIHZhbHVlXG4gIC8vIHBvcHBlZCBmcm9tIGl0IHJhdGhlciB0aGFuIHJ1bm5pbmcgdGhlIHN0ZXAgZnVuY3Rpb24gYWdhaW4uXG4gIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgLy8gVGhlIGBuZXh0YCBmdW5jdGlvbiBoZXJlIGlzIHJhdGhlciBzaW1wbGUuIElmIHRoZXJlIGlzIGFscmVhZHkgc29tZXRoaW5nIGluXG4gIC8vIHRoZSBgaXRlbXNgIGFycmF5LCBpdCdzIHJldHVybmVkLiBJZiBub3QsIHRoZSBgc3RlcGAgZnVuY3Rpb24gaXMgcnVuIGFuZCxcbiAgLy8gaWYgdGhhdCByZXN1bHRzIGluIGEgdmFsdWUgaW4gdGhlIGBpdGVtc2AgYXJyYXksIGl0J3MgcmV0dXJuZWQuIE90aGVyd2lzZVxuICAvLyBhbiBvYmplY3Qgd2l0aCBgeyBkb25lOiB0cnVlIH1gIGlzIHJldHVybmVkLlxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHN0ZXAoKTtcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGl0ZW1zLnBvcCgpLFxuICAgICAgZG9uZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLy8gVGhpcyBpcyB3aGVyZSBtb3N0IG9mIHRoZSB3b3JrIGhhcHBlbnMuIEl0IGdldHMgdGhlIG5leHQgdmFsdWUgZnJvbSB0aGVcbiAgLy8gaW5wdXQgY29sbGVjdGlvbiBhbmQgcnVucyBpdCB0aHJvdWdoIHRoZSByZWR1Y3Rpb24gc3RlcCBmdW5jdGlvbnMuIElmIHRoYXRcbiAgLy8gcmVzdWx0cyBpbiBhIHZhbHVlLCBpdCdzIGdpdmVuIHRvIHRoZSBzdGVwcGVyIG9iamVjdCAod2hpY2ggYWRkcyBpdCB0byB0aGVcbiAgLy8gYGl0ZW1zYCBhcnJheSk7IG90aGVyd2lzZSB0aGUgd2hpbGUgbG9vcCBjb250aW51ZXMgdG8gdGhlIG5leHQgZWxlbWVudCBvZlxuICAvLyB0aGUgaW5wdXQgY29sbGVjdGlvbi4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlcmUncyBzb21ldGhpbmcgZm9yIHRoZSBgbmV4dGBcbiAgLy8gZnVuY3Rpb24gdG8gcmV0dXJuIGVhY2ggdGltZSBpdCdzIGNhbGxlZC5cbiAgLy9cbiAgLy8gSWYgdGhlIGNvbGxlY3Rpb24gaGFzIGZpbmlzaGVkIG9yIGlmIHRoZSBzdGVwIGZ1bmN0aW9uIHJldHVybnMgYSBjb21wbGV0ZWRcbiAgLy8gb2JqZWN0ICh3aGljaCB0YWtlIHdpbGwgZG8gYWZ0ZXIgaXRzIGxpbWl0IG9mIGVsZW1lbnRzIGhhcyBiZWVuIHJlYWNoZWQsXG4gIC8vIGZvciBpbnN0YW5jZSksIHRoZSBpdGVyYXRpb24gaXMgZmluaXNoZWQgYnkgY2FsbGluZyB0aGUgcmVzdWx0IGZ1bmN0aW9uLlxuICBmdW5jdGlvbiBzdGVwKCkge1xuICAgIGNvbnN0IGNvdW50ID0gaXRlbXMubGVuZ3RoO1xuICAgIHdoaWxlIChpdGVtcy5sZW5ndGggPT09IGNvdW50KSB7XG4gICAgICBjb25zdCBzdGVwVmFsdWUgPSBpdGVyLm5leHQoKTtcbiAgICAgIGlmIChzdGVwVmFsdWUuZG9uZSB8fCBjb21wbGV0ZWQpIHtcbiAgICAgICAgeGZbcC5yZXN1bHRdKHJlc3VsdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29tcGxldGVkID0gaXNDb21wbGV0ZWQoeGZbcC5zdGVwXShyZXN1bHQsIHN0ZXBWYWx1ZS52YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSByZXN1bHRpbmcgb2JqZWN0IGlzIGFuIGl0ZXJhdG9yLCBzbyB0byBzYXRpc2Z5IHRoZSBpdGVyYWJsZSBwcm90b2NvbFxuICAvLyB3ZSBqdXN0IHJldHVybiB0aGF0IG9iamVjdCBpdHNlbGZcbiAgZnVuY3Rpb24gc0l0ZXJhdG9yKCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBUaGUgYHJlc3VsdGAgbmFtZSBpcyBob2lzdGVkIGFuZCB1c2VkIGluIGZ1bmN0aW9ucyBmdXJ0aGVyIHVwLCBzbyB3ZSBoYXZlXG4gIC8vIHRvIHJldGFpbiB0aGF0IG5hbWUgYW5kIGNhbid0IGp1c3QgcmV0dXJuIHRoZSBvYmplY3Qgd2l0aG91dCBuYW1pbmcgaXRcbiAgY29uc3QgcmVzdWx0ID0geyBpdGVtcywgbmV4dCwgc3RlcCwgW1N5bWJvbC5pdGVyYXRvcl06IHNJdGVyYXRvciB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhblxuICogb3V0cHV0IGNvbGxlY3Rpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgbG93ZXN0LWxldmVsIG9mIHRoZSB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zIHRoYXQgaXMgbGlrZWx5IHRvIHNlZVxuICogcmVndWxhciB1c2UuIEl0IGRvZXMgbm90IGFzc3VtZSBhbnl0aGluZyBhYm91dCB0aGUgcmVkdWNlciwgYXMgaXQgYXNrcyBmb3IgaXRcbiAqIHRvIGJlIHBhc3NlZCBleHBsaWNpdGx5LiBUaGlzIG1lYW5zIHRoYXQgYW55IGtpbmQgb2YgY29sbGVjdGlvbiBjYW4gYmVcbiAqIHByb2R1Y2VkLCBzaW5jZSB0aGUgcmVkdWNlciBpcyBub3QgdGllZCB0byB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbiBhbnkgd2F5LlxuICpcbiAqIGB0cmFuc2R1Y2VgIGFsc28gd2lsbCBhY2NlcHQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlc3VsdGluZyBjb2xsZWN0aW9uIGFzXG4gKiB0aGUgb3B0aW9uYWwgbGFzdCBwYXJhbWV0ZXIuIElmIHRoaXMgcGFyYW1ldGVyIGlzbid0IHByZXNlbnQsIHRoZW4gdGhlXG4gKiBpbml0aWFsIHZhbHVlIGlzIGRldGVybWluZWQgZnJvbSB0aGUgdHJhbnNkdWNlciBpbml0IHByb3RvY29sIHByb3BlcnR5IG9uIHRoZVxuICogcmVkdWNlci4gTm90ZSBob3dldmVyIHRoYXQgbWFueSByZWR1Y2VycyBtYXkgbm90IHByb3ZpZGUgYW4gaW5pdGlhbCB2YWx1ZSxcbiAqIGFuZCBpbiB0aG9zZSBjYXNlcyBpdCB3aWxsICpoYXZlKiB0byBiZSBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgdHJhbnNkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogY29uc3QgYXJyYXlSZWR1Y2VyID0ge1xuICogICBbcC5pbml0XSgpIHsgcmV0dXJuIFtdOyB9LFxuICogICBbcC5yZXN1bHRdKHgpIHsgcmV0dXJuIHg7IH0sXG4gKiAgIFtwLnN0ZXBdKGFjYywgeCkge1xuICogICAgIGFjYy5wdXNoKHgpO1xuICogICAgIHJldHVybiBhY2M7XG4gKiAgIH1cbiAqIH07XG4gKlxuICogY29uc3Qgc3RyaW5nUmVkdWNlciA9IHtcbiAqICAgW3AuaW5pdF0oKSB7IHJldHVybiAnJzsgfSxcbiAqICAgW3AucmVzdWx0XSh4KSB7IHJldHVybiB4OyB9LFxuICogICBbcC5zdGVwXShhY2MsIHgpIHsgcmV0dXJuIGFjYyArIHg7IH1cbiAqIH07XG4gKlxuICogbGV0IHJlc3VsdCA9IHRyYW5zZHVjZShbMSwgMiwgMywgNCwgNV0sIHhmb3JtLCBhcnJheVJlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSwgc3RyaW5nUmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICpcbiAqIHJlc3VsdCA9IHRyYW5zZHVjZSgnMTIzNDUnLCB4Zm9ybSwgYXJyYXlSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKCcxMjM0NScsIHhmb3JtLCBzdHJpbmdSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIyMzQ1NlwiXG4gKiBgYGBcbiAqXG4gKiBUaGVzZSBleGFtcGxlcyBpbGx1c3RyYXRlIGEgbnVtYmVyIG9mIGltcG9ydGFudCBjb25jZXB0cy4gRmlyc3Qgb2YgYWxsLCB0aGVcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gaXMgaW5kZXBlbmRlbnQgb2YgdGhlIHR5cGUgb2YgdGhlIGNvbGxlY3Rpb247IHRoZSBzYW1lXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIHVzZWQgbm8gbWF0dGVyIHRoZSB0eXBlIG9mIGlucHV0IG9yIG91dHB1dFxuICogY29sbGVjdGlvbnMuIFNlY29uZGx5LCB0d28gcmVkdWNlcnMgYXJlIGRlZmluZWQuIFRoZXNlIGFyZSBvYmplY3RzIHRoYXRcbiAqIGNvbmZvcm0gdG8gdGhlIHRyYW5zZHVjZXIgcHJvdG9jb2wgKHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBvblxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UucHJvdG9jb2xzfWApIGFuZCB0aGF0IGtub3cgaG93IHRvIHByb2R1Y2UgdGhlIG91dHB1dFxuICogY29sbGVjdGlvbiBvZiBjaG9pY2UuIEluIHRoaXMgY2FzZSwgdGhlIHJlZHVjZXJzIGtub3cgaG93IHRvIGNyZWF0ZSBuZXdcbiAqIGFycmF5cyBhbmQgc3RyaW5ncyAodGhlIGBpbml0YCBwcm90b2NvbCkgYW5kIGhvdyB0byBhZGQgZWxlbWVudHMgdG8gYXJyYXlzXG4gKiBhbmQgc3RyaW5ncyAodGhlIGBzdGVwYCBwcm90b2NvbCkuIEJlY2F1c2UgdGhlc2UgcmVkdWNlcnMgZG8gaGF2ZSBgaW5pdGBcbiAqIHByb3RvY29sIHByb3BlcnRpZXMsIHRoZSBgdHJhbnNkdWNlYCBjYWxscyBkbyBub3QgcmVxdWlyZSBleHBsaWNpdCBpbml0aWFsXG4gKiBjb2xsZWN0aW9ucy5cbiAqXG4gKiBUaGUgZmluYWwgcG9pbnQgaXMgdGhhdCBgdHJhbnNkdWNlYCBjYW4gYWNjZXB0IGFueSBraW5kIG9mIGl0ZXJhYmxlXG4gKiBjb2xsZWN0aW9uLCBhbmQgYnkgcGFzc2luZyBpbiB0aGUgcHJvcGVyIHJlZHVjZXIsIGl0IGNhbiBwcm9kdWNlIGFueSBraW5kIG9mXG4gKiBvdXRwdXQgY29sbGVjdGlvbi4gVGhlIHNhbWUgYHRyYW5zZHVjZWAgZnVuY3Rpb24gYW5kIHRoZSBzYW1lIG1hcCB0cmFuc2Zvcm1lclxuICogaXMgdXNlZCBpbiBhbGwgZm91ciBleGFtcGxlcywgZGVzcGl0ZSB0aGUgaW5wdXQvb3V0cHV0IGNvbWJpbmF0aW9uIGJlaW5nXG4gKiBkaWZmZXJlbnQgaW4gYWxsIGZvdXIuXG4gKlxuICogVGhlIGByZWR1Y2VyYCBwYXJhbWV0ZXIgKmNhbiogYmUgYSByZWR1Y2VyIGZ1bmN0aW9uIGluc3RlYWQgb2YgYSByZWR1Y2VyXG4gKiBvYmplY3QuIElmIHRoaXMgaXMgdGhlIGNhc2UsIHRoZSBgaW5pdGAgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGJlY2F1c2UgYVxuICogZnVuY3Rpb24gY2Fubm90IGRlZmluZSBhbiBpbml0aWFsIHZhbHVlIGl0c2VsZi5cbiAqXG4gKiBUaGUgYGluaXRgIGNvbGxlY3Rpb24gZG9lc24ndCBoYXZlIHRvIGJlIGVtcHR5LiBJZiBpdCBpc24ndCwgdGhlIGVsZW1lbnRzXG4gKiB0aGF0IGFyZSBhbHJlYWR5IGluIGl0IGFyZSByZXRhaW5lZCBhbmQgdGhlIHRyYW5zZm9ybWVkIGlucHV0IGVsZW1lbnRzIGFyZVxuICogcmVkdWNlZCBpbnRvIHRoZSBjb2xsZWN0aW9uIG5vcm1hbGx5LlxuICpcbiAqIE9mIGNvdXJzZSwgdGhlIGV4YW1wbGVzIGFyZSBub3QgcmVhbGx5IG5lY2Vzc2FyeSAtIHRoZSBzYW1lIHRoaW5nIGNvdWxkIGJlXG4gKiBhY2NvbXBsaXNoZWQgdXNpbmcgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAgd2l0aG91dCBoYXZpbmcgdG8gY3JlYXRlXG4gKiB0aGUgcmVkdWNlcnMgKHN0cmluZ3MgYW5kIGFycmF5cyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWBcbiAqIGFzIHRhcmdldHMga25vdyBob3cgdG8gcmVkdWNlIHRoZW1zZWx2ZXMgYWxyZWFkeSkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsobW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbnxtb2R1bGU6eGR1Y2UuUmVkdWNlcil9IHJlZHVjZXIgRWl0aGVyIGFcbiAqICAgICBmdW5jdGlvbiBvciBhIHJlZHVjZXIgb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgdHJhbnNkdWNlciBwcm90b2NvbHNcbiAqICAgICAoYGluaXRgIGlzICBvbmx5IHJlcXVpcmVkIGlmIHRoZSBgaW5pdGAgcGFyYW1ldGVyIGlzIG5vdCBwcmVzZW50KS4gVGhpc1xuICogICAgIG9iamVjdCBtdXN0IGtub3cgaG93IHRvIHByb2R1Y2UgYW4gb3V0cHV0IGNvbGxlY3Rpb24gdGhyb3VnaCBpdHMgYHN0ZXBgXG4gKiAgICAgYW5kIGByZXN1bHRgIHByb3RvY29sIGZ1bmN0aW9ucy4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgYSBmdW5jdGlvbiwgdGhlbiBpdFxuICogICAgIGlzIHR1cm5lZCBpbnRvIGEgdmFsaWQgcmVkdWNlciBvYmplY3QuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5SZWR1Y2libGV9IFtpbml0XSBBIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGVcbiAqICAgICBvdXRwdXQgY29sbGVjdGlvbi4gSWYgdGhpcyBpcyBub3QgcHJlc2VudCwgdGhlbiB0aGUgcmVkdWNlcidzIGBpbml0YFxuICogICAgIHByb3RvY29sIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbnN0ZWFkIHRvIGdldCB0aGUgaW5pdGlhbCBjb2xsZWN0aW9uLiBJZiBpdFxuICogICAgIGlzIHByZXNlbnQgYW5kIG5vdCBlbXB0eSwgdGhlbiB0aGUgZXhpc3RpbmcgZWxlbWVudHMgcmVtYWluIGFuZCB0aGVcbiAqICAgICB0cmFuc2Zvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIGFyZSBhZGRlZCB0byBpdC5cbiAqIEByZXR1cm4geyp9IEEgY29sbGVjdGlvbiBvZiBhIHR5cGUgZGV0ZXJtaW5lZCBieSB0aGUgcGFzc2VkIHJlZHVjZXIuIFRoZVxuICogICAgIGVsZW1lbnRzIG9mIHRoaXMgY29sbGVjdGlvbiBhcmUgdGhlIHJlc3VsdHMgZnJvbSB0aGUgdHJhbnNmb3JtZXIgZnVuY3Rpb25cbiAqICAgICBiZWluZyBhcHBsaWVkIHRvIGVhY2ggZWxlbWVudCBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbi5cbiAqL1xuZnVuY3Rpb24gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCByZWR1Y2VyLCBpbml0KSB7XG4gIGNvbnN0IHIgPSBpc0Z1bmN0aW9uKHJlZHVjZXIpID8gdG9SZWR1Y2VyKHJlZHVjZXIpIDogcmVkdWNlcjtcbiAgY29uc3QgaSA9IGluaXQgPz8gcltwLmluaXRdKCk7XG4gIGNvbnN0IHhmID0geGZvcm0gPyB4Zm9ybShyKSA6IHI7XG4gIHJldHVybiByZWR1Y2UoY29sbGVjdGlvbiwgeGYsIGkpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogYXJyYXkuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gYXJyYXkuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBhc0FycmF5IH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzQXJyYXkoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoJzEyMzQ1JywgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0FycmF5KCcxMjM0NScpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMSwgMiwgMywgNCwgNV1cbiAqXG4gKiByZXN1bHQgPSBhc0FycmF5KHthOiAxLCBiOiAyfSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFt7IGE6IDEgfSwgeyBiOiAyIH1dXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gYXJyYXkgd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNBcnJheShjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBBUlJBWV9SRURVQ0VSKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIG9iamVjdC5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBvYmplY3QuIFdoZW4gdGhpcyBoYXBwZW5zLCBpZiB0aGUgaW5wdXRcbiAqIGNvbGxlY3Rpb24gaXMgbm90IGFuIG9iamVjdCBvciBhbiBhcnJheSBvZiBvYmplY3RzLCBudW1iZXJzIHN0YXJ0aW5nIGF0IGAwYFxuICogd2lsbCBiZSB1c2VkIGFzIGtleXMgZm9yIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYnkgdGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBhc09iamVjdCwga3YgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCBmbiA9IHByb3AgPT4ge1xuICogICBjb25zdCB7IGssIHYgfSA9IGt2KHByb3ApO1xuICogICByZXR1cm4geyBba106IHYgKyAxIH07XG4gKiB9XG4gKiBjb25zdCB4Zm9ybSA9IG1hcChmbik7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KHsgYTogMSwgYjogMiB9LCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMiwgYjogMyB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoW3sgYTogMSB9LCB7IGI6IDIgfV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAyLCBiOiAzIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IDA6IDEsIDE6IDIsIDI6IDMsIDM6IDQsIDQ6IDUgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFt7IGE6IDEgfSwgeyBiOiAyIH1dKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAxLCBiOiAyIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChcImhlbGxvXCIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IDA6IFwiaFwiLCAxOiBcImVcIiwgMjogXCJsXCIsIDM6IFwibFwiLCA0OiBcIm9cIiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5kdWNlcn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gb2JqZWN0IHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNPYmplY3QoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgT0JKRUNUX1JFRFVDRVIpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogc3RyaW5nLlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIHN0cmluZy4gSWYgdGhpcyBpcyB0aGUgY2FzZSBhbmQgdGhlIGlucHV0XG4gKiBjb2xsZWN0aW9uIGlzIGFuIG9iamVjdCwgb25seSB0aGUgdmFsdWVzIHdpbGwgYmUgY29uY2F0ZW5hdGVkIGludG8gYSBzdHJpbmcuXG4gKlxuICogT3RoZXJ3aXNlLCB0cmFuc2Zvcm1pbmcgb2JqZWN0cyBpbnRvIHN0cmluZ3Mgb25seSBtYWtlcyBtdWNoIHNlbnNlIGlmIHRoZVxuICogdHJhbnNkdWNlciBwcm9kdWNlcyBvbmx5IGEgc2luZ2xlIG91dHB1dCBmcm9tIGVhY2ggb2YgdGhlIG9iamVjdHMga2V5L3ZhbHVlXG4gKiBwYWlycy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRyYW5zZHVjZSwga2V5IH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4LnRvVXBwZXJDYXNlKCkpO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc1N0cmluZygnaGVsbG8nLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiSEVMTE9cIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsnaCcsICdlJywgJ2wnLCAnbCcsICdvJ10sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJIRUxMT1wiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoeyBhOiAxLCBjOiAyLCBiOiAzIH0sIG1hcChrZXkpKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJhY2JcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMTIzNDVcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKHsgYTogMSwgYzogMiwgYjogMyB9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIxMjNcIlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGEgc3RyaW5nIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXMgZnJvbSB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc1N0cmluZyhjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBTVFJJTkdfUkVEVUNFUik7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBpdGVyYXRvci5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBpdGVyYXRvci5cbiAqXG4gKiAqKFRoZSByZXN1bHRzIGhlcmUgYXJlIHNob3duIHBhc3NlZCB0aHJvdWdoIGBhc0FycmF5YCBiZWNhdXNlIHRoZXJlJ3Mgbm9cbiAqIHByaW50YWJsZSByZXByZXNlbnRhdGlvbiBvZiBhbiBpdGVyYXRvciB0byBzaG93LiBUaGUgYGFzQXJyYXlgIGNhbGxzIGFyZSBmb3JcbiAqIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgb25seS4pKlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgYXNJdGVyYXRvciwgYXNBcnJheSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICogZnVuY3Rpb24qIGZpdmUoKSB7XG4gKiAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7ICsraSkge1xuICogICAgIHlpZWxkIGk7XG4gKiAgIH1cbiAqIH07XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzSXRlcmF0b3IoZml2ZSgpLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3IoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3IoWzEsIDIsIDMsIDQsIDVdKTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gWzEsIDIsIDMsIDQsIDVdXG4gKlxuICogcmVzdWx0ID0gYXNJdGVyYXRvcih7YTogMSwgYjogMn0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbeyBhOiAxIH0sIHsgYjogMiB9XVxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGlzIGlzbid0IHByZXNlbnQsIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHdpbGxcbiAqICAgICBzaW1wbHkgYmUgcmVkdWNlZCBpbnRvIGFuIGl0ZXJhdG9yIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB0cmFuc2Zvcm1lZFxuICogICAgIHZhbHVlcyBmcm9tIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBhc0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHJldHVybiB4Zm9ybSA/IHRyYW5zZHVjaW5nSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIDogaXRlcmF0b3IoY29sbGVjdGlvbik7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUuXG4gKlxuICogVGhpcyBpcyB0aGUgaGlnaGVzdCBsZXZlbCBvZiB0aGUgdGhyZWUgbWFpbiB0cmFuc2R1Y3Rpb24gZnVuY3Rpb25zXG4gKiAoYHNlcXVlbmNlYCwgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gKS4gSXQgY3JlYXRlcyBhIG5ldyBjb2xsZWN0aW9uIG9mXG4gKiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZSB0cmFuc2Zvcm1lZCBlbGVtZW50c1xuICogaW50byBpdC4gQWRkaXRpb25hbGx5LCB1bmxpa2UgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIHRoaXMgZnVuY3Rpb24gaXMgY2FwYWJsZSBvZlxuICogcHJvZHVjaW5nIGFuIGl0ZXJhdG9yIChhcyBsb25nIGFzIHRoZSBpbnB1dCBpcyBhbiBpdGVyYXRvcikuXG4gKlxuICogVGhlIGlucHV0IGNvbGxlY3Rpb24gbXVzdCBub3Qgb25seSBpbXBsZW1lbnQgdGhlIGBpdGVyYXRvcmAgcHJvdG9jb2wgKGFzIGluXG4gKiB0aGUgbGFzdCB0d28gZnVuY3Rpb25zKSBidXQgYWxzbyB0aGUgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCB0cmFuc2R1Y2VyXG4gKiBwcm90b2NvbHMuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBmb3IgYXJyYXlzLCBzdHJpbmdzLCBvYmplY3RzLCBhbmRcbiAqIGl0ZXJhdG9ycywgc28gdGhleSBuZWVkIG5vdCBpbXBsZW1lbnQgYW55IHByb3RvY29sLlxuICpcbiAqIFRoZSBvYnZpb3VzIGxpbWl0YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBpcyB0aGF0IHRoZSB0eXBlIG9mIG91dHB1dCBjb2xsZWN0aW9uXG4gKiBjYW5ub3QgYmUgY2hvc2VuLiBTaW5jZSBpdCBpcyBhbHdheXMgdGhlIHNhbWUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24sIHRoaXNcbiAqIGZ1bmN0aW9uIGNhbm5vdCBiZSB1c2VkIHRvIGNvbnZlcnQgYSBjb2xsZWN0aW9uIGludG8gYSBkaWZmZXJlbnQgdHlwZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHNlcXVlbmNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4ICsgMSk7XG4gKlxuICogbGV0IHJlc3VsdCA9IHNlcXVlbmNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiByZXN1bHQgPSBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBzZXF1ZW5jZSgnMTIzNDUnLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHJlc3VsdCA9ICcyMzQ1NidcbiAqIGBgYFxuICpcbiAqIFRoZXNlIGV4YW1wbGVzIGFyZSBpZGVudGljYWwgdG8gc29tZSBvZiB0aGUgZXhhbXBsZXMgZnJvbSB0aGUgYGFzWGBcbiAqIGZ1bmN0aW9ucy4gT3RoZXIgZXhhbXBsZXMgYXJlIG5vdCBwb3NzaWJsZSB3aXRoIGBzZXF1ZW5jZWAgYmVjYXVzZSB0aGV5IGhhdmVcbiAqIGRpZmZlcmVudCBpbnB1dCBhbmQgb3V0cHV0IGNvbGxlY3Rpb24gdHlwZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuUmVkdWNpYmxlSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoaXNcbiAqICAgICBtdXN0IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYCwgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCBwcm90b2NvbHMuXG4gKiAgICAgU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsIG9iamVjdHMsIGFuZCBpdGVyYXRvcnMsXG4gKiAgICAgc28gdGhleSBkbyBub3QgaGF2ZSB0byBpbXBsZW1lbnQgYW55IHByb3RvY29scy5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGFcbiAqICAgICBzdWl0YWJsZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZUl0ZXJhYmxlfSBBIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uLCBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gc2VxdWVuY2UoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzQXJyYXkoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNPYmplY3QoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNTdHJpbmcoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBjb2xsZWN0aW9uKTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpdGVyYXRvclwiKTpcbiAgICAgIHJldHVybiBhc0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBzZXF1ZW5jZSBjb2xsZWN0aW9uOiAke2NvbGxlY3Rpb259YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gdGhlXG4gKiB0YXJnZXQgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIG11Y2ggbGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIGV4Y2VwdCB0aGF0XG4gKiBpbnN0ZWFkIG9mIGV4cGxpY2l0bHkgcHJvdmlkaW5nIGEgcmVkdWNlciAoYW5kIHBlcmhhcHMgYW4gaW5pdGlhbFxuICogY29sbGVjdGlvbiksIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBhY3RzIGFzIGEgcmVkdWNlciBpdHNlbGYuIFRoaXMgcmVxdWlyZXNcbiAqIHRoYXQgdGhlIGNvbGxlY3Rpb24gaW1wbGVtZW50IHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHRyYW5zZHVjZXJcbiAqIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqXG4gKiBJZiBubyB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB0aGUgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dCBiZWluZyB0cmFuc2Zvcm1lZC4gVGhpcyBjYW4gYmVcbiAqIHVzZWQgdG8gY29udmVydCBvbmUga2luZCBvZiBjb2xsZWN0aW9uIGludG8gYW5vdGhlci5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGludG8gfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gaW50byhbXSwgWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGludG8oXCJcIiwgWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICpcbiAqIHJlc3VsdCA9IGludG8oW10sIFwiMTIzNDVcIiwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKFwiXCIsIFwiMTIzNDVcIiwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZX0gdGFyZ2V0IFRoZSBjb2xsZWN0aW9uIGludG8gd2hpY2ggYWxsIG9mIHRoZVxuICogICAgIHRyYW5zZm9ybWVkIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgd2lsbCBiZSByZWR1Y2VkLiBUaGlzIGNvbGxlY3Rpb25cbiAqICAgICBtdXN0IGltcGxlbWVudCB0aGUgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCBwcm90b2NvbCBmdW5jdGlvbnMgZnJvbVxuICogICAgIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIGFycmF5cywgc3RyaW5ncyxcbiAqICAgICBhbmQgb2JqZWN0cywgc28gdGhleSBuZWVkIG5vdCBpbXBsZW1lbnQgdGhlIHByb3RvY29sLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmF0b3JgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgdG8gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IFt4Zm9ybV0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW5vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsXG4gKiAgICAgc2ltcGx5IGJlIHJlZHVjZWQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5SZWR1Y2libGV9IFRoZSBgdGFyZ2V0YCBjb2xsZWN0aW9uLCB3aXRoIGFsbCBvZiB0aGVcbiAqICAgICB0cmFuZm9ybWVkIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgcmVkdWNlZCBvbnRvIGl0LlxuICovXG5mdW5jdGlvbiBpbnRvKHRhcmdldCwgY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0FycmF5KHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBBUlJBWV9SRURVQ0VSLCB0YXJnZXQpO1xuICAgIGNhc2UgaXNPYmplY3QodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIE9CSkVDVF9SRURVQ0VSLCB0YXJnZXQpO1xuICAgIGNhc2UgaXNTdHJpbmcodGFyZ2V0KTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIFNUUklOR19SRURVQ0VSLCB0YXJnZXQpO1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZCh0YXJnZXQsIFwic3RlcFwiKTpcbiAgICAgIHJldHVybiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHRhcmdldCwgdGFyZ2V0KTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCByZWR1Y2UgY29sbGVjdGlvbiBpbnRvICR7dGFyZ2V0fTogJHtjb2xsZWN0aW9ufWApO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9zZXMgdHdvIG9yIG1vcmUgdHJhbnNkdWNlciBmdW5jdGlvbnMgaW50byBhIHNpbmdsZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICpcbiAqIEVhY2ggZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHRyYW5zZHVjZXIgZnVuY3Rpb25cbiAqIChge0BsaW5rIG1vZHVsZTp4ZHVjZS5zZXF1ZW5jZXxzZXF1ZW5jZX1gLCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCxcbiAqIGV0Yy4pIGlzIG9ubHkgY2FwYWJsZSBvZiBhY2NlcHRpbmcgb25lIG9mIHRoZW0uIElmIHRoZXJlIGlzIGEgbmVlZCB0byBoYXZlXG4gKiBzZXZlcmFsIHRyYW5zZHVjZXJzIGNoYWluZWQgdG9nZXRoZXIsIHRoZW4gdXNlIGBjb21wb3NlYCB0byBjcmVhdGUgYVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiB0aGF0IGRvZXMgd2hhdCBhbGwgb2YgdGhlbSBkby5cbiAqXG4gKiBOT1RFOiBJbiBmdW5jdGlvbmFsIHByb2dyYW1taW5nLCBhIGNvbXBvc2UgZnVuY3Rpb24gaXMgZ2VuZXJhbGx5IG9yZGVyZWQgc29cbiAqIHRoYXQgdGhlIGZpcnN0LWV4ZWN1dGVkIGZ1bmN0aW9uIGlzIGxpc3RlZCBsYXN0LiBUaGlzIGlzIGRvbmUgaW4gdGhlIG9wcG9zaXRlXG4gKiB3YXksIHdpdGggdGhlIGZpcnN0IHRyYW5zZHVjZXIgZXhlY3V0aW5nIGZpcnN0LCBldGMuIFRoaXMgaXMgYSBtb3JlIG5hdHVyYWxcbiAqIG9yZGVyaW5nIGZvciB0cmFuc2R1Y2VyIGZ1bmN0aW9ucyBiZWNhdXNlIHRoZXJlIGlzIGEgdmVyeSByZWFsIGRpcmVjdGlvbmFsXG4gKiBwdWxsIG9mIGVsZW1lbnRzIHRocm91Z2ggYSBjaGFpbiBvZiBjb21wb3NlZCB0cmFuc2R1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGNvbXBvc2UsIHNlcXVlbmNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YWtlIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCBhZGQxID0geCA9PiB4ICsgMTtcbiAqIGNvbnN0IG9kZCA9IHggPT4geCAlIDIgIT09IDA7XG4gKlxuICogY29uc3QgeGZvcm0gPSBjb21wb3NlKG1hcChhZGQxKSwgZmlsdGVyKG9kZCksIHRha2UoMykpO1xuICpcbiAqIGNvbnN0IHJlc3VsdCA9IHNlcXVlbmNlKFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzMsIDUsIDddO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsuLi5tb2R1bGU6eGR1Y2UuVHJhbnNkdWNlckZ1bmN0aW9ufSBmbnMgT25lIG9yIG1vcmUgZnVuY3Rpb24gdGhhdCBlYWNoIGNyZWF0ZVxuICogICAgIGEgdHJhbnNkdWNlciBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIGFcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGEgc3VpdGFibGVcbiAqICAgICB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gQSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgcGVyZm9ybXMgKmFsbCogb2YgdGhlIHRyYW5zZm9ybWF0aW9ucyBvZiB0aGVcbiAqICAgICBvYmplY3RzIHByb2R1Y2VkIGJ5IHRoZSBpbnB1dCB0cmFuc2R1Y2VyIGZ1bmN0aW9ucy5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSguLi5mbnMpIHtcbiAgY29uc3QgcmV2ZXJzZWQgPSBmbnMucmV2ZXJzZSgpO1xuICByZXR1cm4gdmFsdWUgPT4gcmV2ZXJzZWQucmVkdWNlKChhY2MsIGZuKSA9PiBmbihhY2MpLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCB7XG4gIHRyYW5zZHVjZSxcbiAgc2VxdWVuY2UsXG4gIGludG8sXG4gIGFzQXJyYXksXG4gIGFzT2JqZWN0LFxuICBhc1N0cmluZyxcbiAgYXNJdGVyYXRvcixcbiAgY29tcG9zZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgYnVuY2ggb2YgdXRpbGl0eSBmdW5jdGlvbnMuIFRoZXNlIGFyZSBhbGwgdXNlZCBieSB0aGUgbGlicmFyeSBpdHNlbGYgaW5cbiAqIHBsYWNlcywgYnV0IG1hbnkgb2YgdGhlbSBhcmUgc3VpdGFibGUgZm9yIGdlbmVyYWwgdXNlIGFzIHdlbGwuXG4gKiBeXG4gKiBAbW9kdWxlIHhkdWNlL3V0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogYE9iamVjdGAncyBgdG9TdHJpbmdgIGlzIGV4cGxpY2l0bHkgdXNlZCB0aHJvdWdob3V0IGJlY2F1c2UgaXQgY291bGQgYmVcbiAqIHJlZGVmaW5lZCBpbiBhbnkgc3VidHlwZSBvZiBgT2JqZWN0YC5cbiAqXG4gKiBAZnVuY3Rpb24gdG9TdHJpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZ1bmN0aW9uIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uIG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl1cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIHBsYWluIG9iamVjdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCBpZiB0aGUgdmFsdWUgaXMgYW55IG90aGVyIHNvcnQgb2YgYnVpbHQtaW5cbiAqIG9iamVjdCAoc3VjaCBhcyBhbiBhcnJheSBvciBhIHN0cmluZykuIEl0IGFsc28gcmV0dXJucyBgZmFsc2VgIGZvciBhbnkgb2JqZWN0XG4gKiB0aGF0IGlzIGNyZWF0ZWQgYnkgYSBjb25zdHJ1Y3RvciB0aGF0IGlzIG5vdCBgT2JqZWN0YCdzIGNvbnN0cnVjdG9yLCBtZWFuaW5nXG4gKiB0aGF0IFwiaW5zdGFuY2VzXCIgb2YgY3VzdG9tIFwiY2xhc3Nlc1wiIHdpbGwgcmV0dXJuIGBmYWxzZWAuIFRoZXJlZm9yZSBpdCdzIG9ubHlcbiAqIGdvaW5nIHRvIHJldHVybiBgdHJ1ZWAgZm9yIGxpdGVyYWwgb2JqZWN0cyBvciB0aG9zZSBjcmVhdGVkIHdpdGhcbiAqIGBPYmplY3QuY3JlYXRlKClgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhIHBsYWluIG9iamVjdC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3Qgb3JcbiAqICAgICBgZmFsc2VgIGlmIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAvLyBUaGlzIGNoZWNrIGV4Y2x1ZGVzIGJ1aWx0LWluIG5vbi1PYmplY3Qgb2JqZWN0cyAoc3VjaCBhcyBBcnJheSBhbmQgU3RyaW5nKS5cbiAgLy8gSXQgYWxzbyBleGNsdWRlcyBvYmplY3RzIGNyZWF0ZWQgZnJvbSBFUzIwMTUgY2xhc3NlcywgYnV0IGl0IGRvZXMgbm90XG4gIC8vIGV4Y2x1ZGUgb2JqZWN0cyBjcmVhdGVkIHdpdGggYG5ld2Agb24gY29uc3RydWN0b3IgZnVuY3Rpb25zICh0aGF0IGhhcHBlbnNcbiAgLy8gYmVsb3cpLlxuICBpZiAodG9TdHJpbmcuY2FsbCh4KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFByb3RvdHlwZS1sZXNzIG9iamVjdHMgKGNyZWF0ZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZShudWxsKSlgIHBhc3NcbiAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoeCk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gQ2hlY2sgdG8gc2VlIHdoZXRoZXIgdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIHRoZSBPYmplY3RcbiAgLy8gY29uc3RydWN0b3IuIFRoaXMgaXMgdGhlIG9ubHkgY29uc3RydWN0b3IgdGhhdCBwcm9kdWNlcyBhIFwicGxhaW5cIiBvYmplY3QuXG4gIGNvbnN0IGN0b3IgPVxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJlxuICAgIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIGN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBjdG9yID09PSBPYmplY3Q7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBudW1iZXIuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBgdHJ1ZWAgZm9yIGFueSBudW1iZXIgbGl0ZXJhbCBvciBpbnN0YW5jZSBvZlxuICogYE51bWJlcmAgZXhjZXB0IGZvciBgSW5maW5pdHlgIG9yIGBOYU5gLiBJdCB3aWxsIHJldHVybiBgZmFsc2VgIGZvciBzdHJpbmdzXG4gKiB0aGF0IGhhcHBlbiB0byBhbHNvIGJlIG51bWJlcnM7IHRoZSB2YWx1ZSBtdXN0IGJlIGFuIGFjdHVhbCBgTnVtYmVyYCBpbnN0YW5jZVxuICogb3IgbnVtYmVyIGxpdGVyYWwgdG8gcmV0dXJuIGB0cnVlYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBudW1iZXIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgZmluaXRlIG51bWJlciAobm90XG4gKiAgICAgaW5jbHVkaW5nIHN0cmluZyByZXByZXNlbnRhdGlvbnMgb2YgbnVtYmVycykgb3IgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgJiYgaXNGaW5pdGUoeCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKlxuICogTGl0ZXJhbCBzdHJpbmdzIHdpbGwgcmV0dXJuIGB0cnVlYCwgYXMgd2lsbCBpbnN0YW5jZXMgb2YgdGhlIGBTdHJpbmdgIG9iamVjdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgc3RyaW5nIG9yIGBmYWxzZWAgaWZcbiAqICAgIGl0IGlzIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG1lcmVseSBkZWxlZ2F0ZXMgdG8gYEFycmF5LmlzQXJyYXlgLiBJdCBpcyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IGluIGNhbGxpbmcgc3R5bGUgb25seS5cbiAqXG4gKiBAZnVuY3Rpb24gaXNBcnJheVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGFuIGFycmF5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhbiBhcnJheSBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICovXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZXhwb3J0IHtcbiAgaXNGdW5jdGlvbixcbiAgaXNHZW5lcmF0b3JGdW5jdGlvbixcbiAgaXNPYmplY3QsXG4gIGlzTnVtYmVyLFxuICBpc1N0cmluZyxcbiAgaXNBcnJheVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEFsbCBvZiB0aGUgcHVibGljLWZhY2luZyBDaGFua28gZnVuY3Rpb25zIGFyZSBnYXRoZXJlZCBoZXJlIGluIG9uZSBwbGFjZSB0b1xuICogYmUgZXhwb3J0ZWQgYXMgYSB3aG9sZS4gVGhpcyBpcyBhIGNvbXBsZXRlbHkgZmxhdCBsaXN0IG9mIGV4cG9ydHMsIGFzXG4gKiBpbmx1ZGluZyBhbnkgb2JqZWN0IGxpdGVyYWxzIGZvciBleHBvcnQgKHdoaWNoIHdvdWxkIGJlIG5hdHVyYWwgZm9yIGJ1ZmZlcnMsXG4gKiBmb3IgZXhhbXBsZSkgd291bGQga2VlcCB0cmVlLXNoYWtpbmcgZnJvbSB3b3JraW5nIHJpZ2h0LlxuICpcbiAqIEBtb2R1bGUgY3NwXG4gKi9cblxuZXhwb3J0IHsgZml4ZWQsIGRyb3BwaW5nLCBzbGlkaW5nIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5leHBvcnQge1xuICBDTE9TRUQsXG4gIGNoYW4sXG4gIHRpbWVkQ2hhbixcbiAgdHJhbnNDaGFuLFxuICBzZW5kLFxuICByZWN2LFxuICBzZW5kQXN5bmMsXG4gIHJlY3ZBc3luYyxcbiAgcmVjdk9yVGhyb3csXG4gIGNsb3NlLFxuICBpc0Nsb3NlZCxcbiAgaXNCdWZmZXJlZCxcbiAgaXNUaW1lZCxcbiAgc2VsZWN0LFxuICBzZWxlY3RBc3luYyxcbiAgdmFsdWUsXG4gIGNoYW5uZWxcbn0gZnJvbSBcIm1vZHVsZXMvY2hhbm5lbFwiO1xuZXhwb3J0IHtcbiAgY29uZmlnLFxuICBTRVRfSU1NRURJQVRFLFxuICBNRVNTQUdFX0NIQU5ORUwsXG4gIFNFVF9USU1FT1VUXG59IGZyb20gXCJtb2R1bGVzL2Rpc3BhdGNoZXJcIjtcbmV4cG9ydCB7IGdvLCBzbGVlcCwgam9pbiB9IGZyb20gXCJtb2R1bGVzL3Byb2Nlc3NcIjtcbmV4cG9ydCB7IEVNUFRZIH0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcblxuLyoqXG4gKiBBbiBlcnJvciBoYW5kbGluZyBmdW5jaXRvbi4gVGhpcyBpcyB1c2VkIHRvIGhhbmRsZSBleGNlcHRpb25zIHRocm93biBpbiBhc3luY1xuICogZnVuY3Rpb25zIGFuZCBpbiB0cmFuc2R1Y2Vycy4gVGhlIHJldHVybiB2YWx1ZSBvZiBhbiBleGNlcHRpb24gaGFuZGxlciBpc1xuICogdHlwaWNhbGx5IHNlbnQgdG8gYSBjaGFubmVsOyBpZiB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkIHdpdGhpbiBhbiBhc3luY1xuICogZnVuY3Rpb24sIGl0IHdpbGwgYmUgc2VudCB0byB0aGF0IGZ1bmN0aW9uJ3Mgb3V0cHV0IGNoYW5uZWwsIGFuZCBpZiB0aGVcbiAqIGV4Y3BldGlvbiBoYXBwZW5lZCBpbiBhIHRyYW5zZHVjZXIsIGl0IHdpbGwgYmUgc2VudCB0byB0aGUgY2hhbm5lbCB0byB3aGljaFxuICogdGhlIHRyYW5zZHVjZXIgaXMgYXR0YWNoZWQuXG4gKlxuICogQGNhbGxiYWNrIEV4Y2VwdGlvbkhhbmRsZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge29iamVjdH0gZXJyIFRoZSBlcnJvciBvYmplY3QgdGhhdCB3YXMgdGhyb3duIHRvIGNhdXNlIHRoZSBlcnJvciB0b1xuICogICAgIGhhdmUgdG8gYmUgaGFuZGxlZC5cbiAqIEByZXR1cm4geyp9IEEgdmFsdWUgZGVjaWRlZCBieSB0aGUgaGFuZGxlciB0aGF0IHdpbGwgYmUgc2VudCB0byBhIGNoYW5uZWwuXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIHRoYXQncyBydW4gd2hlbiBhIG5vbi1ibG9ja2luZyBjaGFubmVsIG9wZXJhdGlvbiBjb21wbGV0ZXMuIFRoZVxuICogdmFsdWUgdGhhdCB0aGlzIGZ1bmN0aW9uIHJlY2VpdmVzIGlzIGlkZW50aWNhbCB0byB3aGF0IGlzIHJldHVybmVkIGJ5IGFcbiAqIGJsb2NraW5nIGNhbGw6IHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsIGZvciBhIGByZWN2YCwgb3IgYHRydWVgIG9yXG4gKiBgZmFsc2VgIGRlcGVuZGluZyBvbiB0aGUgY2hhbm5lbCBzdGF0dXMgZm9yIGEgYHNlbmRgLiBBbnkgcmV0dXJuIHZhbHVlIGZyb21cbiAqIHRoaXMgY2FsbGJhY2sgaXMgaWdub3JlZC5cbiAqXG4gKiBAY2FsbGJhY2sgT3BDYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgRWl0aGVyIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLCBvciB3aGV0aGVyIG9yXG4gKiBub3QgYSB2YWx1ZSB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQuXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIHRoYXQncyBydW4gd2hlbiBhIG5vbi1ibG9ja2luZyBgc2VsZWN0YCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBhbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllczogdGhlIHZhbHVlXG4gKiB0aGF0IHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gY29tcGxldGVkIHdpdGggKGVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbVxuICogdGhlIGNoYW5uZWwgaW4gYSByZWNlaXZlIG9wZXJhdGlvbiwgb3IgYHRydWVgIG9yIGBmYWxzZWAgaW4gYSBzZW5kXG4gKiBvcGVyYXRpb24pLCBhbG9uZyB3aXRoIHRoZSBjaGFubmVsIHdoZXJlIHRoZSBvcGVyYXRpb24gYWN0dWFsbHkgaGFwcGVuZWQuIEFueVxuICogcmV0dXJuIHZhbHVlIGZyb20gdGhpcyBjYWxsYmFjayBpcyBpZ25vcmVkLlxuICpcbiAqIEBjYWxsYmFjayBTZWxlY3RDYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHR9IGRhdGEgVGhlIHZhbHVlIHJldHVybmVkIGZyb20gdGhlIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbi5cbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgc2V2ZXJhbCB0eXBlcyBvZiBidWZmZXJzIHVzYWJsZSBpbiBidWZmZXJlZCBjaGFubmVscy4gVGhlc2UgYXJlIGFsbFxuICogYnVpbHQgb24gYSBzbWFsbCwgZWZmaWNpZW50IHF1ZXVlIHdoaWNoIGlzIGluIHR1cm4gYmFja2VkIGJ5IGEgSmF2YVNjcmlwdFxuICogYXJyYXkuXG4gKlxuICogQG1vZHVsZSBidWZmZXJcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgcXVldWUgYXMgcSwgY291bnQgYXMgcUNvdW50LCBlbnF1ZXVlLCBkZXF1ZXVlIH0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcblxuLyoqXG4gKiBBIGJ1ZmZlciB0aGF0IHN0b3JlcyB2YWx1ZXMgc2VudCB0byBhIGJ1ZmZlcmVkIGNoYW5uZWwgdW50aWwgYSBwcm9jZXNzXG4gKiByZWNlaXZlcyB0aGVtLlxuICpcbiAqIERpZmZlcmVudCBidWZmZXJzIGRpZmZlciBvbmx5IGluIHRoZSB3YXkgdGhhdCB0aGV5IGRldGVybWluZSB3aGV0aGVyIHRoZXkgYXJlXG4gKiBmdWxsIGFuZCBpbiB3aGF0IGhhcHBlbnMgd2hlbiBhIG5ldyB2YWx1ZSBpcyBhZGRlZCB0byBhIGZ1bGwgYnVmZmVyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZWRlZiB7KG1vZHVsZTpjc3AuRml4ZWRCdWZmZXIgfCBtb2R1bGU6Y3NwLkRyb3BwaW5nQnVmZmVyIHxcbiAqICAgICBtb2R1bGU6Y3NwLlNsaWRpbmdCdWZmZXIpfSBCdWZmZXJcbiAqL1xuXG4vKipcbiAqIFRoZSBuYW1lIG9mIGEgcHJvcGVydHkgdGhhdCBleGlzdHMgb24gYnVmZmVyIG9iamVjdHMgZm9yIHRoZSBwdXJwb3NlIG9mXG4gKiBpdGVudGlmeWluZyB0aGVtIGFzIGJ1ZmZlciBvYmplY3RzLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBCVUZGRVIgPSBTeW1ib2woXCJCVUZGRVJcIik7XG5cbi8qKlxuICogQSBwb3NzaWJsZSB2YWx1ZSBvZiB0aGUgYHtAbGluayBtb2R1bGU6Y3NwL2J1ZmZlci5CVUZGRVJ8QlVGRkVSfSBwcm9wZXJ0eVxuICogaW5kaWNhdGluZyB0aGF0IHRoZSBidWZmZXIgaXMgYSBmaXhlZCBidWZmZXIuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEZJWEVEID0gU3ltYm9sKFwiRklYRURcIik7XG5cbi8qKlxuICogQSBwb3NzaWJsZSB2YWx1ZSBvZiB0aGUgYHtAbGluayBtb2R1bGU6Y3NwL2J1ZmZlci5CVUZGRVJ8QlVGRkVSfSBwcm9wZXJ0eVxuICogaW5kaWNhdGluZyB0aGF0IHRoZSBidWZmZXIgaXMgYSBkcm9wcGluZyBidWZmZXIuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IERST1BQSU5HID0gU3ltYm9sKFwiRFJPUFBJTkdcIik7XG5cbi8qKlxuICogQSBwb3NzaWJsZSB2YWx1ZSBvZiB0aGUgYHtAbGluayBtb2R1bGU6Y3NwL2J1ZmZlci5CVUZGRVJ8QlVGRkVSfSBwcm9wZXJ0eVxuICogaW5kaWNhdGluZyB0aGF0IHRoZSBidWZmZXIgaXMgYSBzbGlkaW5nIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgU0xJRElORyA9IFN5bWJvbChcIlNMSURJTkdcIik7XG5cbi8qKlxuICogUHJlZGljYXRlIGluZGljYXRpbmcgd2hldGhlciB0aGUgc3VwcGxpZWQgb2JqZWN0IGlzIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIFRoZSB2YWx1ZSB0byB0ZXN0IHRvIHNlZSBpZiBpdCdzIGEgYnVmZmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBidWZmZXIsIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqICAgICBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcihvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bQlVGRkVSXTtcbn1cblxuLyoqXG4gKiBBIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbiB0aGF0IG5ldmVyIGRpc2NhcmRzIGJ1ZmZlcmVkIGl0ZW1zIHdoZW4gYSBuZXcgaXRlbSBpc1xuICogYWRkZWQuXG4gKlxuICogVGhpcyBidWZmZXIgaGFzIGEgY29uY2VwdCBvZiAqZnVsbCosIGJ1dCBpdCdzIGEgc29mdCBsaW1pdC4gSWYgdGhlIHNpemUgb2ZcbiAqIHRoZSBidWZmZXIgaXMgZXhjZWVkZWQsIGFkZGVkIGl0ZW1zIGFyZSBzdGlsbCBzdG9yZWQuXG4gKlxuICogQSBidWZmZXIgb2YgdGhpcyB0eXBlIGV4aXN0cyBvbmx5IGFzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYVxuICogY2hhbm5lbCBjcmVhdGlvbiBmdW5jdGlvbiAoc3VjaCBhcyB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59KSB0byBtYWtlIHRoYXRcbiAqIGNoYW5uZWwgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBkb2Vzbid0IGhhdmUgYW55IHByb3BlcnRpZXMgdGhhdCBhcmUgaW50ZW5kZWRcbiAqIGZvciBleHRlcm5hbCB1c2UuXG4gKlxuICogQHR5cGVkZWYgRml4ZWRCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgZml4ZWQgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKlxuICogQSBmaXhlZCBidWZmZXIgaXMgYSAnbm9ybWFsJyBidWZmZXIsIG9uZSB0aGF0IHN0b3JlcyBhbmQgcmV0dXJucyBpdGVtcyBvblxuICogZGVtYW5kLiBXaGlsZSBpdCBpcyBjYXBhYmxlIG9mIGJlaW5nIG92ZXItZmlsbGVkLCB0aGF0IGFiaWxpdHkgaXMgbm90IHVzZWQgaW5cbiAqIENoYW5rby4gQSBidWZmZXIgdGhhdCBpcyBmdWxsIHdpbGwgY2F1c2UgdGhlIG5leHQgcHV0IHRvIGl0cyBjaGFubmVsIHRvIGJsb2NrXG4gKiB1bnRpbCBhdCBsZWFzdCBvbmUgaXRlbSBpcyByZW1vdmVkIGZyb20gdGhlIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBpcyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLCBldGMuIHRvIGNyZWF0ZSBhXG4gKiBidWZmZXJlZCBjaGFubmVsLiBJdCBpcyBub3QgbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIGl0J3MgZnVsbC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IEEgbmV3IGZpeGVkIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkXG4gKiAgICAgY2FwYWNpdHkuXG4gKi9cbmZ1bmN0aW9uIGZpeGVkKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjc3AvcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIGZpeGVkIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTeW1ib2x9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IEZJWEVEXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbiB0aGF0IGRyb3BzIG5ld2x5IGFkZGVkIGl0ZW1zIHdoZW4gdGhlIGJ1ZmZlciBpcyBmdWxsLlxuICpcbiAqIFRoaXMgZHJvcHBpbmcgYmVoYXZpb3IgaXMgc2lsZW50OiB0aGUgbmV3IGl0ZW0gaXMgc2ltcGx5IG5vdCBhZGRlZCB0byB0aGVcbiAqIHF1ZXVlLiBOb3RlIHRoYXQgdGhpcyBidWZmZXIgaXMgbmV2ZXIgYGZ1bGxgIGJlY2F1c2UgaXQgY2FuIGFsd2F5cyBiZSBhZGRlZFxuICogdG8gd2l0aG91dCBleGNlZWRpbmcgdGhlIHNpemUsIGV2ZW4gaWYgdGhhdCAnYWRkaW5nJyBkb2Vzbid0IHJlc3VsdCBpbiBhIG5ld1xuICogaXRlbSBhY3R1YWxseSBhcHBlYXJpbmcgaW4gdGhlIGJ1ZmZlci5cbiAqXG4gKiBBIGJ1ZmZlciBvZiB0aGlzIHR5cGUgZXhpc3RzIG9ubHkgYXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhXG4gKiBjaGFubmVsIGNyZWF0aW9uIGZ1bmN0aW9uIChzdWNoIGFzIHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn0pIHRvIG1ha2UgdGhhdFxuICogY2hhbm5lbCBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGRvZXNuJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyB0aGF0IGFyZSBpbnRlbmRlZFxuICogZm9yIGV4dGVybmFsIHVzZS5cbiAqXG4gKiBAdHlwZWRlZiBEcm9wcGluZ0J1ZmZlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkcm9wcGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZCBjYXBhY2l0eS5cbiAqXG4gKiBBIGRyb3BwaW5nIGJ1ZmZlciBzaWxlbnRseSBkcm9wcyB0aGUgaXRlbSBiZWluZyBhZGRlZCBpZiB0aGUgYnVmZmVyIGlzXG4gKiBhbHJlYWR5IGF0IGNhcGFjaXR5LiBTaW5jZSBhZGRpbmcgYSBuZXcgaXRlbSB3aWxsIGFsd2F5cyAnc3VjY2VlZCcgKGV2ZW4gaWZcbiAqIGl0IHN1Y2NlZWRzIGJ5IGp1c3QgaWdub3JpbmcgdGhlIGFkZCksIGl0IGlzIG5ldmVyIGNvbnNpZGVyZWQgZnVsbCBhbmRcbiAqIHRoZXJlZm9yZSBhIHB1dCB0byBhIGNoYW5uZWwgYnVmZmVyZWQgYnkgYSBkcm9wcGluZyBidWZmZXIgbmV2ZXIgYmxvY2tzLlxuICpcbiAqIFRoaXMgYnVmZmVyIGlzIHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAsIGV0Yy4gdG8gY3JlYXRlIGFcbiAqIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGlzIG5vdCBtZWFudCB0byBiZSB1c2VkIGRpcmVjdGx5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhlIG5ldyBidWZmZXIgY2FuIGhvbGQgYmVmb3JlXG4gKiAgICAgbmV3ZXN0IGl0ZW1zIGFyZSBkcm9wcGVkIG9uIGFkZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuRHJvcHBpbmdCdWZmZXJ9IEEgbmV3IGRyb3BwaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkXG4gKiAgICAgY2FwYWNpdHkuXG4gKi9cbmZ1bmN0aW9uIGRyb3BwaW5nKHNpemUpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIC8qKlxuICAgICAqIFRoZSBxdWV1ZSBiYWNraW5nIHRoaXMgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHR5cGUge21vZHVsZTpjc3AvcXVldWV+UXVldWV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBxdWV1ZToge1xuICAgICAgdmFsdWU6IHEoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRoYXQgdGhpcyBxdWV1ZSBjYW4gaG9sZCBiZWZvcmUgaXQncyBjb25zaWRlcmVkIGZ1bGwuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2l6ZToge1xuICAgICAgdmFsdWU6IHNpemVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZXIgcHJvcGVydHkgdXNlZCB0byBzaG93IHRoYXQgdGhpcyBpcyBhIGRyb3BwaW5nIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTeW1ib2x9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IERST1BQSU5HXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGJ1ZmZlciBpbXBsZW1lbnRhdGlvbiB0aGF0IGRyb3BzIHRoZSBvbGRlc3QgaXRlbSB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQgdG8gYVxuICogZnVsbCBidWZmZXIuXG4gKlxuICogVGhpcyBpcyB2ZXJ5IHNpbWlsYXIgdG8ge0BsaW5rIG1vZHVsZTpjc3AuRHJvcHBpbmdCdWZmZXJ8RHJvcHBpbmdCdWZmZXJ9OyB0aGVcbiAqIG9ubHkgZGlmZmVyZW5jZSBpcyBpbiB3aGF0IGhhcHBlbnMgd2hlbiBhbiBpdGVtIGlzIGFkZGVkLiBJbiB0aGlzIGJ1ZmZlciwgdGhlXG4gKiBuZXcgaXRlbSBpcyBpbmRlZWQgYWRkZWQgdG8gdGhlIGJ1ZmZlciwgYnV0IGluIG9yZGVyIHRvIGtlZXAgdGhlIGNvdW50IG9mIHRoZVxuICogYnVmZmVyIGF0IG9yIGJlbG93IGl0cyBzaXplLCB0aGUgb2xkZXN0IGl0ZW0gaW4gdGhlIGJ1ZmZlciBpcyBzaWxlbnRseVxuICogZHJvcHBlZC5cbiAqXG4gKiBBIGJ1ZmZlciBvZiB0aGlzIHR5cGUgZXhpc3RzIG9ubHkgYXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBhXG4gKiBjaGFubmVsIGNyZWF0aW9uIGZ1bmN0aW9uIChzdWNoIGFzIHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn0pIHRvIG1ha2UgdGhhdFxuICogY2hhbm5lbCBhIGJ1ZmZlcmVkIGNoYW5uZWwuIEl0IGRvZXNuJ3QgaGF2ZSBhbnkgcHJvcGVydGllcyB0aGF0IGFyZSBpbnRlbmRlZFxuICogZm9yIGV4dGVybmFsIHVzZS5cbiAqXG4gKiBAdHlwZWRlZiBTbGlkaW5nQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHNsaWRpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKlxuICogQSBzbGlkaW5nIGJ1ZmZlciBkcm9wcyB0aGUgZmlyc3QtYWRkZWQgKG9sZGVzdCkgaXRlbSBhbHJlYWR5IGluIHRoZSBidWZmZXIgaWZcbiAqIGEgbmV3IGl0ZW0gaXMgYWRkZWQgd2hlbiB0aGUgYnVmZmVyIGlzIGFscmVhZHkgYXQgY2FwYWNpdHkuIFNpbmNlIGl0J3MgYWx3YXlzXG4gKiBjYXBhYmxlIG9mIGhhdmluZyBpdGVtcyBhZGRlZCB0byBpdCwgaXQncyBuZXZlciBjb25zaWRlcmVkIGZ1bGwsIGFuZFxuICogdGhlcmVmb3JlIGEgcHV0IHRvIGEgY2hhbm5lbCBidWZmZXJlZCBieSBhIHNsaWRpbmcgYnVmZmVyIG5ldmVyIGJsb2Nrcy5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBpcyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLCBldGMuIHRvIGNyZWF0ZSBhXG4gKiBidWZmZXJlZCBjaGFubmVsLiBJdCBpcyBub3QgbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIG9sZGVzdCBpdGVtcyBhcmUgZHJvcHBlZCBvbiBhZGQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLlNsaWRpbmdCdWZmZXJ9IEEgbmV3IHNsaWRpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWRcbiAqICAgICBjYXBhY2l0eS5cbiAqL1xuZnVuY3Rpb24gc2xpZGluZyhzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBzbGlkaW5nIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTeW1ib2x9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBbQlVGRkVSXToge1xuICAgICAgdmFsdWU6IFNMSURJTkdcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHF1ZXVlIHRoYXQgYmFja3MgYSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2UgcXVldWUgaXMgcmV0dXJuZWQgYnkgdGhpc1xuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gVGhlIHF1ZXVlIHRoYXQgYmFja3MgdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnF1ZXVlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBhIGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmUgaXQncyBmdWxsLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIHNpemUgaXMgcmV0dXJuZWQgYnkgdGhpc1xuICogICAgIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgc2l6ZSBvZiB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2l6ZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5zaXplO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBpdGVtcyBhIGJ1ZmZlciBpcyBjdXJyZW50bHkgaG9sZGluZy5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBjdXJyZW50IGNvdW50IGlzIHJldHVybmVkXG4gKiAgICAgYnkgdGhpcyBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBzdXBwbGllZCBidWZmZXIgaXMgaG9sZGluZy5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvdW50KGJ1ZmZlcikge1xuICByZXR1cm4gcUNvdW50KGJ1ZmZlci5xdWV1ZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgYnVmZmVyIGlzIGF0IGNhcGFjaXR5LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdobydzIGJlaW5nIGNoZWNrZWQgdG8gc2VlIGlmXG4gKiAgICAgaXQncyBhdCBjYXBhY2l0eS5cbiAqIEByZXR1cm4ge251bWJlcn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgc3VwcGxpZWQgYnVmZmVyIGlzIGZ1bGwgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzbid0LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNGdWxsKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyW0JVRkZFUl0gPT09IEZJWEVEID8gcUNvdW50KGJ1ZmZlci5xdWV1ZSkgPj0gYnVmZmVyLnNpemUgOiBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGRzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdoZXJlIHRoZSBzdXBwbGllZCBpdGVtcyB3aWxsIGJlXG4gKiAgICAgYWRkZWQuXG4gKiBAcGFyYW0gey4uLip9IGl0ZW1zIFRoZSB2YWx1ZXMgYmVpbmcgYWRkZWQgdG8gdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZChidWZmZXIsIC4uLml0ZW1zKSB7XG4gIHN3aXRjaCAoYnVmZmVyW0JVRkZFUl0pIHtcbiAgICBjYXNlIEZJWEVEOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBEUk9QUElORzpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoY291bnQoYnVmZmVyKSA8IHNpemUoYnVmZmVyKSkge1xuICAgICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNMSURJTkc6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGNvdW50KGJ1ZmZlcikgPj0gc2l6ZShidWZmZXIpKSB7XG4gICAgICAgICAgZGVxdWV1ZShidWZmZXIucXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIGVucXVldWUoYnVmZmVyLnF1ZXVlLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIG5leHQgaXRlbSBmcm9tIGEgcXVldWUgYW5kIHJldHVybnMgaXQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgZnJvbSB3aGljaCBhbiBpdGVtIGlzIGJlaW5nXG4gKiAgICAgcmVtb3ZlZC5cbiAqIEByZXR1cm4geyp9IFRoZSBpdGVtIHRoYXQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgc3VwcGxpZWQgYnVmZmVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKGJ1ZmZlcikge1xuICByZXR1cm4gZGVxdWV1ZShidWZmZXIucXVldWUpO1xufVxuXG5leHBvcnQge1xuICBpc0J1ZmZlcixcbiAgZml4ZWQsXG4gIGRyb3BwaW5nLFxuICBzbGlkaW5nLFxuICBxdWV1ZSxcbiAgc2l6ZSxcbiAgY291bnQsXG4gIGlzRnVsbCxcbiAgYWRkLFxuICByZW1vdmVcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZS10b29sc1wiO1xuaW1wb3J0IHtcbiAgcXVldWUsXG4gIGRlcXVldWUsXG4gIEVNUFRZLFxuICBmaWx0ZXIsXG4gIGNvdW50IGFzIHFDb3VudCxcbiAgZW5xdWV1ZVxufSBmcm9tIFwibW9kdWxlcy9xdWV1ZVwiO1xuaW1wb3J0IHsgaXNGdWxsLCBjb3VudCwgcmVtb3ZlIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gXCJtb2R1bGVzL2Rpc3BhdGNoZXJcIjtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9ucyB0aGF0IGNhbiBiZSBxdWV1ZWQgb24gYSBjaGFubmVsIGJlZm9yZVxuICogYSBjbGVhbnVwIGlzIHRyaWdnZXJlZC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgTUFYX0RJUlRZID0gNjQ7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJ0aW9ucyB0aGF0IGNhbiBiZSBxdWV1ZWQgb24gYSBjaGFubmVsIGJlZm9yZSBuZXdcbiAqIG9wZXJhdGlvbnMgYXJlIHJlamVjdGVkLlxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBNQVhfUVVFVUVEID0gMTAyNDtcblxuLyoqXG4gKiAqaGUgdmFsdWUgcmV0dXJuZWQgZnJvbSBhIHJlY2VpdmUgb24gYSBjaGFubmVsIHdoZW4gdGhhdCBjaGFubmVsIGlzIGNsb3NlZFxuICogYW5kIGhhcyBubyBtb3JlIHZhbHVlcyBhdmFpbGFibGUuXG4gKlxuICogVGhpcyBpcyBhIHNwZWNpYWwgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCB1bmRlciBhIGNlcnRhaW4gY2lyY3Vtc3RhbmNlLCBuYW1lbHlcbiAqIHdoZW4gYSByZWNlaXZlIGlzIHBlcmZvcm1lZCBvbiBhIGNsb3NlZCBjaGFubmVsLiBCZWNhdXNlIG9mIHRoYXQsIGl0IGNhbm5vdFxuICogYmUgcmV0dXJuZWQgZnJvbSBhIHJlY2VpdmUgb24gYW4gb3BlbiBjaGFubmVsLiBGb3IgdGhhdCByZWFzb24sIGBDTE9TRURgIGlzXG4gKiB0aGUgb25seSB2YWx1ZSB0aGF0IGNhbm5vdCBiZSBzZW50IG9udG8gYSBjaGFubmVsICZtZGFzaDsgaXQgd291bGQgYmVcbiAqIGltcG9zc2libGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBhIGxlZ2l0aW1hdGUgdmFsdWUgb2YgYENMT1NFRGAgYW5kIGFuXG4gKiBhY3R1YWwgY2xvc2VkIGNoYW5uZWwuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IENMT1NFRCA9IFN5bWJvbChcIkNMT1NFRFwiKTtcblxuLyoqXG4gKiBBIHVuaXF1ZSB2YWx1ZSB1c2VkIHRvIGluZGljYXRlIHRoYXQgYW4gb2JqZWN0IGlzIGEgYm94LlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBCT1ggPSBTeW1ib2woXCJCT1hcIik7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyBhIGJveC5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBBIHZhbHVlIHRvIGNoZWNrIGZvciBib3hpbmVzcy5cbiAqIEByZXR1cm4gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBib3ggb3IgYGZhbHNlYCBpZiBpdCBpc24ndC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzQm94KG9iaikge1xuICByZXR1cm4gISFvYmo/LltCT1hdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgcmVkdWNlZC4gVGhpcyBpcyBkb25lIHVzaW5nIHRoZSB0cmFuc2R1Y2VyXG4gKiBwcm90b2NvbDsgYW4gb2JqZWN0IHdpdGggdGhlIHByb3RvY29sLXNwZWNpZmllZCBgcmVkdWNlZGAgcHJvcGVydHkgaXMgYXNzdW1lZFxuICogdG8gYmUgcmVkdWNlZC4gSWYgYSByZXN1bHQgb2YgYSB0cmFuc2Zvcm1hdGlvbiBpcyByZWR1Y2VkLCBpdCBtZWFucyB0aGF0IHRoZVxuICogdHJhbnNmb3JtYXRpb24gaXMgY29tcGxldGUgYW5kIHRoZSBjaGFubmVsIHNob3VsZCBiZSBjbG9zZWQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZCBmb3IgcmVkdWN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaGFzIGJlZW4gcmVkdWNlZCwgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGhhcyBub3QgYmVlbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzUmVkdWNlZCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZT8uW3AucmVkdWNlZF07XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIHByaW1hcmlseSB1c2VkIGFzIGEgbWFya2VyOyBhIHB1dCBvciB0YWtlXG4gKiByZXR1cm5pbmcgYSBCb3ggaW5kaWNhdGVzIHRoYXQgdGhlIHB1dCBvciB0YWtlIGhhcyByZXR1cm5lZCBhbiBpbW1lZGlhdGVcbiAqIHZhbHVlLCB3aGlsZSByZXR1cm5pbmcgYG51bGxgIGluZGljYXRlcyB0aGF0IHRoZSBvcGVyYXRpb24gaGFzIGJlZW4gcXVldWVkLlxuICpcbiAqIEB0eXBlZGVmIEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGUgYm94LlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgd3JhcHBlciBvYmplY3QgZm9yIGEgdmFsdWUuIFRoaXMgaXMgdXNlZCBhbG1vc3QgZW50aXJlbHkgYXMgYSBtYXJrZXJcbiAqIGludGVyZmFjZSwgdGhvdWdoIHRoZSBmYWN0IHRoYXQgaXQgYmVjb21lcyBhIHBhcmFtZXRlciB0aGF0J3MgcGFzc2VkIGJ5XG4gKiByZWZlcmVuY2UgcmF0aGVyIHRoYW4gdmFsdWUgaXMgYWxzbyBpbXBvcnRhbnQgaW4gYSBjb3VwbGUgcGxhY2VzLiBJZiBhXG4gKiBjaGFubmVsIG9wZXJhdGlvbiAocHV0IG9yIHRha2UpIHJldHVybnMgYSBCb3gsIGl0IG1lYW5zIHRoYXQgYW4gYWN0dWFsIHZhbHVlXG4gKiB3YXMgcmV0dXJuZWQuIEEgbm9uLUJveCAod2hpY2ggYWx3YXlzIGhhcHBlbnMgdG8gYmUgYG51bGxgKSBtZWFucyB0aGF0IHRoZVxuICogb3BlcmF0aW9uIG11c3QgYmxvY2suXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYm94LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYm94KHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgW0JPWF06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIGEgdmFsdWUuIFRoaXMgaXMgbXVjaCBsaWtlXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLkJveHxCb3h9IGV4Y2VwdCB0aGF0IGl0IGFsc28gY2FycmllcyBhIGhhbmRsZXIgdG9cbiAqIGJlIHVzZWQgd2hlbiBhIHNlbnQgdmFsdWUgaXMgcmVjZWl2ZWQuIEl0IGlzIHNwZWNpZmljYWxseSBmb3IgcXVldWVpbmcgc2VuZHMuXG4gKlxuICogQHR5cGVkZWYgU2VuZEJveFxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgd3JhcHBlZCBieSB0aGlzIGJveC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJ9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzIGFcbiAqICAgICBzZW5kIHJlcXVlc3QgZm9yIHRoZSB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIGJveCB1c2VkIHRvIHdyYXAgYSB2YWx1ZSBiZWluZyBzZW50IG9udG8gYSBjaGFubmVsLiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tXG4gKiBhIHJlZ3VsYXIgYm94IGluIHRoYXQgdGhlIHNlbmQgaGFuZGxlciBpcyBhbHNvIGluY2x1ZGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSAge09iamVjdH0gaGFuZGxlciBUaGUgaGFuZGxlciB1c2VkIHRvIHByb2Nlc3MgYSBzZW5kIHJlcXVlc3QgZm9yIHRoZVxuICogICAgIHZhbHVlLlxuICogQHBhcmFtICB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5TZW5kQm94fSBUaGUgYm94ZWQgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICB2YWx1ZToge1xuICAgICAgdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaGFuZGxlcjoge1xuICAgICAgdmFsdWU6IGhhbmRsZXJcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBjaGFubmVsLCB1c2VkIGJ5IHByb2Nlc3NlcyB0byBjb21tdW5pY2F0ZSB3aXRoIG9uZSBhbm90aGVyLlxuICpcbiAqIEZvciBlYWNoIG9wZXJhdGlvbiwgdGhlIGNoYW5uZWwgZmlyc3QgdGVzdHMgdG8gc2VlIGlmIHRoZXJlJ3MgYSBjb3JyZXNwb25kaW5nXG4gKiBvcGVyYXRpb24gYWxyZWFkeSBxdWV1ZWQgKGkuZS4sIGlmIHdlJ3JlIGRvaW5nIGEgYHNlbmRgIHRoYXQgdGhlcmUncyBhIHF1ZXVlZFxuICogYHJlY3ZgIGFuZCB2aWNlIHZlcnNhKS4gSWYgdGhlcmUgaXMsIHRoYXQgY29ycmVzcG9uZGluZyBvcGVyYXRpb24gaXNcbiAqIHVuYmxvY2tlZCBhbmQgYm90aCBvcGVyYXRpb25zIGNvbXBsZXRlLiBJZiBub3QsIHRoZSBvcGVyYXRpb24gaXMgcXVldWVkIHRvXG4gKiB3YWl0IGZvciBhIGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uLiBUaGUgcHJvY2VzcyBvciB0aGF0IGNyZWF0ZWQgdGhlIG9wZXJhdGlvblxuICogdGhlbiBibG9ja3MuXG4gKlxuICogVGhlIGNoYW5uZWwgY2FuIGJlIGJhY2tlZCBieSBhIGJ1ZmZlciwgdGhvdWdoIGl0IGlzIG5vdCBieSBkZWZhdWx0LiBJZiBhXG4gKiBidWZmZXIgaXMgaW4gcGxhY2UsIGFuZCB0aGF0IGJ1ZmZlciBpcyBub3QgZnVsbCwgdGhlbiB0aGUgcHJvY2VzcyB0aGF0XG4gKiBjcmVhdGVkIGFuIG9wZXJhdGlvbiB0aGF0IGhhcyB0byBiZSBxdWV1ZWQgaXMgKm5vdCogYmxvY2tlZC5cbiAqXG4gKiBUaGlzIGNoYW5uZWwgb2JqZWN0IHN1cHBvcnRzIHRyYW5zZm9ybWF0aW9ucywgYXNzdW1pbmcgdGhhdCB0aGV5IGZvbGxvdyB0aGVcbiAqIHByb3RvY29sIGNyZWF0ZWQgYnkgYSBmZXcgdHJhbnNkdWNlciBsaWJyYXJ5IGF1dGhvcnMgdG8gYWxsb3cgdGhlbSB0b1xuICogaW50ZXJvcGVyYXRlLiBUaGUgc3VwcG9ydCBtdXN0IGJlIGV4cGxpY2l0bHkgY3JlYXRlZCBiZWNhdXNlIHRoZSBub3JtYWxcbiAqIG1ldGhvZCBvZiBtYWtpbmcgYW4gb2JqZWN0IHN1cHBvcnQgdHJhbnNmb3JtYXRpb25zIHdvbid0IHdvcmsgaGVyZS4gVGhpc1xuICogbWV0aG9kIGlzIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIGFkZCB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIHRvIGl0IC0gYnV0XG4gKiBmb3IgYSBjaGFubmVsLCB3ZSBuZWVkIHRvIHJlcGxhY2UgdGhlIHZhbHVlcyBvbiB0aGUgY2hhbm5lbCB3aXRoIHRoZWlyXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMsIGluIHRoZSBzYW1lIG9yZGVyIGV2ZW4gaW4gYSBtdWx0aS1wcm9jZXNzIGVudmlyb25tZW50LlxuICogVGh1cyB0cmFuc2Zvcm1hdGlvbnMgaGFwcGVuIGluIHBsYWNlLlxuICpcbiAqIFRyYW5zZm9ybWF0aW9ucyBhcmUgYXBwbGllZCBiZWZvcmUgdGhlIHZhbHVlIGlzIHF1ZXVlZCwgc28gZXZlbiBpZiB0aGVyZSBpcyBhXG4gKiBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiByZWFkeSB0byBnbywgdGhlIHRyYW5zZm9ybWF0aW9uIHN0aWxsIGhhcHBlbnMuIEFsc28sXG4gKiB0cmFuc2Zvcm1hdGlvbnMgcmVxdWlyZSB0aGF0IHRoZSBjaGFubmVsIGJlIGJ1ZmZlcmVkICh0aGlzIGJ1ZmZlciBpcyB3aGF0IGlzXG4gKiBzZW50IHRvIHRoZSB0cmFuc2Zvcm1lcidzIHJlZHVjdGlvbiBzdGVwIGZ1bmN0aW9uKTsgdHJ5aW5nIHRvIGNyZWF0ZSBhXG4gKiBjaGFubmVsIHdpdGggYSB0cmFuc2Zvcm1lciBidXQgd2l0aG91dCBhIGJ1ZmZlciB3aWxsIHJlc3VsdCBpbiBhbiBlcnJvciBiZWluZ1xuICogdGhyb3duLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB0aGF0IGlzIHJldHVybmVkIGZyb20gYSBjYWxsIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuIEhvd2V2ZXIsIHRoaXMgb2JqZWN0IGlzIGludGVuZGVkIHRvIGJlIHVzZWRcbiAqIGFzIGEgdmFsdWUgdG8gcGFzcyB0byBjaGFubmVsIG9wZXJhdGlvbiBmdW5jdGlvbnM7IGl0IGRvZXNuJ3QgaGF2ZSBhbnlcbiAqIHByb3BlcnRpZXMgb2YgaW50ZXJlc3QgdG8gYW4gZW5kIHVzZXIuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlZGVmIENoYW5uZWxcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjaGFubmVsLiBUaGlzIGlzIGEgbG93LWxldmVsIGZ1bmN0aW9uO1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIHBlcmZvcm1zIHNvbWUgbmVjZXNzYXJ5IG1hbmlwdWxhdGlvbnMgb25cbiAqIGFyZ3VtZW50cyBiZWZvcmUgdXNpbmcgdGhpcyBmdW5jdGlvbiB0byBwZXJmb3JtIHRoZSBhY3R1YWwgY3JlYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHtudWxsIHwgbW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBBbiBvcHRpb25hbCBidWZmZXIgdGhhdCwgaWYgcHJlc2VudCxcbiAqICAgICBpcyB1c2VkIHRvIGNyZWF0ZSBhIGJ1ZmZlcmVkIGNoYW5uZWwuIElmIHRoaXMgaXMgYG51bGxgLCBhbiB1bmJ1ZmZlcmVkXG4gKiAgICAgY2hhbm5lbCBpcyBjcmVhdGVkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSB4Zm9ybSBUaGUgdHJhbnNkdWNlciB1c2VkIHRvXG4gKiAgICAgdHJhbnNmb3JtIHZhbHVlcyBzZW50IHRvIHRoZSBjaGFubmVsLiBJZiBubyB0cmFuc2Zvcm1hdGlvbnMgYXJlXG4gKiAgICAgbmVjZXNzYXJ5LCBhIHBhc3N0aHJvdWdoIHRyYW5zZHVjZXIgc2hvdWxkIGJlIHByb3ZpZGVkLlxuICogQHBhcmFtIHtib29sZWFufSBpc1RpbWVkIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjaGFubmVsIGlzIGEgdGltZWQgY2hhbm5lbC5cbiAqICAgICBUaGUgdGltaW5pbmcgbWVjaGFuaXNtIGlzIGhhbmRsZWQgb3V0c2lkZSB0aGUgY2hhbm5lbCwgYnV0IHRoaXMgcHJvcGVydHlcbiAqICAgICBpcyBwcm92aWRlZCB0byBiZSBhYmxlIHRvIHF1ZXJ5IHdoZXRoZXIgdGhhdCdzIHRoZSBjYXNlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heERpcnR5PTY0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zIHRvIGFsbG93XG4gKiAgICAgYmVmb3JlIHRoZXkncmUgcHVyZ2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFF1ZXVlZD0xMDI0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zIHRoYXQgY2FuIGJlXG4gKiAgICAgcXVldWVkIGJlZm9yZSBuZXcgb25lcyBhcmUgcmVqZWN0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGFubmVsKFxuICBidWZmZXIsXG4gIHhmb3JtLFxuICBpc1RpbWVkID0gZmFsc2UsXG4gIG1heERpcnR5ID0gTUFYX0RJUlRZLFxuICBtYXhRdWV1ZWQgPSBNQVhfUVVFVUVEXG4pIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGJ1ZmZlcjoge1xuICAgICAgdmFsdWU6IGJ1ZmZlclxuICAgIH0sXG4gICAgeGZvcm06IHtcbiAgICAgIHZhbHVlOiB4Zm9ybVxuICAgIH0sXG4gICAgbWF4RGlydHk6IHtcbiAgICAgIHZhbHVlOiBtYXhEaXJ0eVxuICAgIH0sXG4gICAgbWF4UXVldWVkOiB7XG4gICAgICB2YWx1ZTogbWF4UXVldWVkXG4gICAgfSxcbiAgICByZWN2czoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIHNlbmRzOiB7XG4gICAgICB2YWx1ZTogcXVldWUoKVxuICAgIH0sXG4gICAgZGlydHlSZWN2czoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgZGlydHlTZW5kczoge1xuICAgICAgdmFsdWU6IDAsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaXNCdWZmZXJlZDoge1xuICAgICAgdmFsdWU6ICEhYnVmZmVyXG4gICAgfSxcbiAgICBpc1RpbWVkOiB7XG4gICAgICB2YWx1ZTogaXNUaW1lZFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byBhIGNoYW5uZWwuIFRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlclxuICogdGhlIHNlbmQgaXMgYWN0aXZlIGFuZCB3aGF0IHRvIGRvIGFmdGVyIHRoZSBzZW5kIGNvbXBsZXRlcy4gQSBzZW5kIGNhbiBiZWNvbWVcbiAqIGluYWN0aXZlIGlmIGl0IHdhcyBwYXJ0IG9mIGFuIGBzZWxlY3RgIGNhbGwgYW5kIHNvbWUgb3RoZXIgb3BlcmF0aW9uXG4gKiBzcGVjaWZpZWQgaW4gdGhhdCBjYWxsIGhhcyBhbHJlYWR5IGNvbXBsZXRlZC5cbiAqXG4gKiBUaGlzIHZhbHVlIGlzIGdpdmVuIHRvIGEgcmVjZWl2ZSBoYW5kbGVyIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgb25lIHdhaXRpbmcuXG4gKiBPdGhlcndpc2UgdGhlIHZhbHVlIGFuZCBoYW5kbGVyIGFyZSBxdWV1ZWQgdG9nZXRoZXIgdG8gd2FpdCBmb3IgYSByZWNlaXZlLlxuICpcbiAqIFRoaXMgaXMgYSBsb3ctbGV2ZWwgb3BlcmF0aW9uIHRoYXQncyBwcm92aWRlZCBhcyBhIHBhcnQgb2YgdGhlIGNoYW5uZWxcbiAqIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgb3RoZXIgb3BlcmF0aW9ucyBmdW5jdGlvbnMgY2FuIHByb3Blcmx5IGFwcGx5XG4gKiBoYW5kbGVycy4gSXQgaXMgbm90IG1lYW50IGZvciBnZW5lcmFsIHVzZS4gVXNlIHRob3NlIG90aGVyIG9wZXJhdGlvbnNcbiAqIGZ1bmN0aW9ucyBpbnN0ZWFkLlxuICpcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0aGF0IHRoZSB2YWx1ZSBpcyBiZWluZyBzZW50XG4gKiAgICAgdG8uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzZW5kIGlzIHN0aWxsIGFjdGl2ZVxuICogICAgIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgc2VuZCAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICBzZW5kIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8bnVsbH0gT25lIG9mIHRocmVlIHZhbHVlcy4gQSBib3hlZCBgdHJ1ZWAgaXNcbiAqICAgICByZXR1cm5lZCBpZiB0aGUgc2VuZCB3YXMgaW1tZWRpYXRlbHkgY29uc3VtZWQgYnkgYSBwZW5kaW5nIHJlY2VpdmUuIEFcbiAqICAgICBib3hlZCBgZmFsc2VgIGlzIHJldHVybmVkIGlmIHRoZSBzZW5kIHdhcyBwZXJmb3JtZWQgb24gYSBjaGFubmVsIHRoYXQgd2FzXG4gKiAgICAgYWxyZWFkeSBjbG9zZWQgYnkgdGhlIHRpbWUgdGhlIHNlbmQgdG9vayBwbGFjZS4gYG51bGxgIGlzIHJldHVybmVkIGlmIHRoZVxuICogICAgIHNlbmQgd2FzIHF1ZXVlZCBwZW5kaW5nIGEgY29ycmVzcG9uZGluZyByZWNlaXZlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgaGFuZGxlcikge1xuICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgIHRocm93IEVycm9yKFwiQ2Fubm90IHNlbmQgQ0xPU0VEIHRvIGEgY2hhbm5lbFwiKTtcbiAgfVxuXG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIGJveChmYWxzZSk7XG4gIH1cblxuICBsZXQgcmVjZWl2ZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFB1c2ggdGhlIGluY29taW5nIHZhbHVlIHRocm91Z2ggdGhlIGJ1ZmZlciwgZXZlbiBpZiB0aGVyZSdzIGFscmVhZHkgYVxuICAvLyByZWNlaXZlciB3YWl0aW5nIGZvciB0aGUgdmFsdWUuIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHRyYW5zZHVjZXJcbiAgLy8gc3RlcCBmdW5jdGlvbiBoYXMgYSBjaGFuY2UgdG8gYWN0IG9uIHRoZSB2YWx1ZSBmaXJzdCwgd2hpY2ggY291bGQgY2hhbmdlXG4gIC8vIHRoZSB2YWx1ZSBvciBtYWtlIGl0IGFsdG9nZXRoZXIgdW5hdmFpbGFibGUuXG4gIC8vXG4gIC8vIElmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgdGhpcyBwcm9jZXNzIGlzIHNraXBwZWQgKHRoZXJlIGNhbid0IGJlIGFcbiAgLy8gdHJhbnNkdWNlciBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgYW55d2F5KS4gSWYgdGhlIGJ1ZmZlciBpcyBmdWxsLCB0aGVcbiAgLy8gdHJhbnNkdWNlcidzIHdvcmsgaXMgZGVmZXJyZWQgdW50aWwgbGF0ZXIgd2hlbiB0aGUgYnVmZmVyIGlzIG5vdCBmdWxsLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgIWlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIGNvbnN0IGRvbmUgPSBpc1JlZHVjZWQoY2hhbm5lbC54Zm9ybVtwLnN0ZXBdKGNoYW5uZWwuYnVmZmVyLCB2YWx1ZSkpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGNoYW5uZWwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHZhbCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIGNsb3NlKGNoYW5uZWwpO1xuICAgIH1cbiAgICByZXR1cm4gYm94KHRydWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIGhhcHBlbnMgaWYgdGhlIGNoYW5uZWwgaXMgdW5idWZmZXJlZCBhbmQgdGhlcmUgaXMgYXQgbGVhc3Qgb25lXG4gIC8vIHBlbmRpbmcgcmVjZWl2ZS4gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHksXG4gIC8vIGJlY2F1c2UgaW4gb3JkZXIgZm9yIGEgYnVmZmVyZWQgY2hhbm5lbCB0byByZWFjaCB0aGlzIHBvaW50LCBpdHMgYnVmZmVyXG4gIC8vIG11c3QgaGF2ZSBiZWVuIGZ1bGwuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhhdCBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZ1xuICAvLyByZWNlaXZlcyBhbmQgdGhlIGZpcnN0IG9uZSByZWFkIHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHRcbiAgLy8gcGVuZGluZyByZWNlaXZlIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gcGVuZGluZyByZWNlaXZlcyBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsIG9yIG9uIGEgYnVmZmVyZWRcbiAgLy8gY2hhbm5lbCB3aXRoIGEgZnVsbCBidWZmZXIsIHdlIHF1ZXVlIHRoZSBzZW5kIHRvIHRsZXQgaXQgd2FpdCBmb3IgYSByZWNlaXZlXG4gIC8vIHRvIGJlY29tZSBhdmFpbGFibGUuIFNlbmRzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZSBpbmFjdGl2ZSAod2hpY2ggaGFwcGVuc1xuICAvLyBpZiB0aGV5IHdlcmUgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgYSBgc2VsZWN0YCBjYWxsKSBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGNoYW5uZWwuZGlydHlTZW5kcyA+IGNoYW5uZWwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoY2hhbm5lbC5zZW5kcywgc2VuZGVyID0+IHNlbmRlci5oYW5kbGVyLmFjdGl2ZSk7XG4gICAgY2hhbm5lbC5kaXJ0eVNlbmRzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjaGFubmVsLmRpcnR5U2VuZHMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoY2hhbm5lbC5zZW5kcykgPj0gY2hhbm5lbC5tYXhRdWV1ZWQpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHtjaGFubmVsLm1heFF1ZXVlZH0gcGVuZGluZyBzZW5kcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnNlbmRzLCBzZW5kQm94KHZhbHVlLCBoYW5kbGVyKSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIGEgY2hhbm5lbC4gVGhlIHNwZWNpZmllZCBoYW5kbGVyIGlzIHVzZWQgdG8gY29udHJvbFxuICogd2hldGhlciB0aGUgcmVjZWl2ZSBpcyBhY3RpdmUgYW5kIHdoYXQgdG8gZG8gYWZ0ZXIgdGhlIHJlY2VpdmUgY29tcGxldGVzLiBBXG4gKiByZWNlaXZlIGNhbiBiZWNvbWUgaW5hY3RpdmUgaWYgaXQgd2FzIHBhcnQgb2YgYW4gYHNlbGVjdGAgY2FsbCBhbmQgc29tZSBvdGhlclxuICogb3BlcmF0aW9uIHNwZWNpZmllZCBpbiB0aGF0IGNhbGwgaGFzIGFscmVhZHkgY29tcGxldGVkLlxuICpcbiAqIFRoaXMgdmFsdWUgaXMgZ2l2ZW4gdG8gYSBzZW5kIGhhbmRsZXIgaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBvbmUgd2FpdGluZy5cbiAqIE90aGVyd2lzZSB0aGUgdmFsdWUgYW5kIGhhbmRsZXIgYXJlIHF1ZXVlZCB0b2dldGhlciB0byB3YWl0IGZvciBhIHNlbmQuXG4gKlxuICogVGhpcyBpcyBhIGxvdy1sZXZlbCBvcGVyYXRpb24gdGhhdCdzIHByb3ZpZGVkIGFzIGEgcGFydCBvZiB0aGUgY2hhbm5lbFxuICogaW1wbGVtZW50YXRpb24gc28gdGhhdCBvdGhlciBvcGVyYXRpb25zIGZ1bmN0aW9ucyBjYW4gcHJvcGVybHkgYXBwbHlcbiAqIGhhbmRsZXJzLiBJdCBpcyBub3QgbWVhbnQgZm9yIGdlbmVyYWwgdXNlLiBVc2UgdGhvc2Ugb3RoZXIgb3BlcmF0aW9uc1xuICogZnVuY3Rpb25zIGluc3RlYWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdGhhdCB0aGUgdmFsdWUgaXMgYmVpbmdcbiAqICAgICByZWNlaXZlZCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBoYW5kbGVyLmFjdGl2ZSBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHJlY2VpdmUgaXMgc3RpbGxcbiAqICAgICBhY3RpdmUgYW5kIHNob3VsZCBzdGlsbCBiZSBzZXJ2aWNlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIuY29tbWl0IERlYWN0aXZhdGVzIHRoZSByZWNlaXZlIChzbyBpdCBjYW4ndCBiZVxuICogICAgIHNlcnZpY2VkIGEgc2Vjb25kIHRpbWUpIGFuZCByZXR1cm5zIHRoZSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIHRoZVxuICogICAgIHJlY2VpdmUgY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkJveHxudWxsfSBFaXRoZXIgdGhlIGJveGVkIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqICAgICB0aGUgY2hhbm5lbCwgb3IgYG51bGxgIGlmIHRoZSByZWNlaXZlIG11c3QgYmUgcXVldWVkIHRvIGF3YWl0IGFcbiAqICAgICBjb3JyZXNwb25kaW5nIHNlbmQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVSZWN2KGNoYW5uZWwsIGhhbmRsZXIpIHtcbiAgbGV0IHNlbmRlciwgc2VuZEhhbmRsZXIsIGNhbGxiYWNrO1xuXG4gIC8vIFJ1bnMgaWYgdGhlIGNoYW5uZWwgaXMgYnVmZmVyZWQgYW5kIHRoZSBidWZmZXJlZCBpcyBub3QgZW1wdHkgKGFuIGVtcHR5XG4gIC8vIGJ1ZmZlciBtZWFucyB0aGVyZSBhcmUgbm8gcGVuZGluZyBzZW5kcykuIFdlIGltbWVkaWF0ZWx5IHByb2Nlc3MgYW55IHNlbmRzXG4gIC8vIHRoYXQgd2VyZSBxdWV1ZWQgd2hlbiB0aGVyZSB3ZXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMsIHVwIHVudGlsIHRoZSBidWZmZXJcbiAgLy8gaXMgZmlsbGVkIHdpdGggc2VudCB2YWx1ZXMuXG4gIGlmIChjaGFubmVsLmJ1ZmZlciAmJiBjb3VudChjaGFubmVsLmJ1ZmZlcikgPiAwKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICBjb25zdCB2YWx1ZSA9IHJlbW92ZShjaGFubmVsLmJ1ZmZlcik7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoaXNGdWxsKGNoYW5uZWwuYnVmZmVyKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc2VuZEhhbmRsZXIgPSBzZW5kZXIuaGFuZGxlcjtcbiAgICAgIGlmIChzZW5kSGFuZGxlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlZHVjZWQoY2hhbm5lbC54Zm9ybVtwLnN0ZXBdKGNoYW5uZWwuYnVmZmVyLCBzZW5kZXIudmFsdWUpKSkge1xuICAgICAgICAgIGNsb3NlKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib3godmFsdWUpO1xuICB9XG5cbiAgLy8gVGhpcyBsb29wIHJ1bnMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGlmIHRoZXJlIGFyZSBhbnkgcGVuZGluZyBzZW5kcy5cbiAgLy8gKEJ1ZmZlcmVkIGNoYW5uZWxzIGJyZWFrIG91dCBvZiB0aGlzIGxvb3AgaW1tZWRpYXRlbHkgYmVjYXVzZSBpbiBvcmRlciB0b1xuICAvLyBoYXZlIGNvbWUgdGhpcyBmYXIgd2l0aG91dCByZXR1cm5pbmcsIHRoZSBjaGFubmVsJ3MgYnVmZmVyIG11c3QgaGF2ZSBiZWVuXG4gIC8vIGVtcHR5LiBBbiBlbXB0eSBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMsIHNvIHRoZSBmaXJzdFxuICAvLyBwZW5kaW5nIHNlbmQgcmVhZCBmcm9tIGl0IHdpbGwgYmUgRU1QVFkuKSBJdCBwcm9jZXNzZXMgdGhlIG5leHQgcGVuZGluZ1xuICAvLyBzZW5kIGltbWVkaWF0ZWx5LlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgaWYgKHNlbmRIYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kSGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh0cnVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm94KHNlbmRlci52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UndmUgZXhoYXVzdGVkIGFsbCBvZiBvdXIgcGVuZGluZyBzZW5kcyBhbmQgdGhlIGNoYW5uZWwgaXMgbWFya2VkXG4gIC8vIGNsb3NlZCwgd2UgY2FuIGZpbmFsbHkgcmV1dHJuIHRoZSBmYWN0IHRoYXQgdGhlIGNoYW5uZWwgaXMgY2xvc2VkLiBUaGlzXG4gIC8vIGVuc3VyZXMgdGhhdCBhbnkgc2VuZHMgdGhhdCB3ZXJlIGFscmVhZHkgcGVuZGluZyBvbiB0aGUgY2hhbm5lbCBhcmVcbiAgLy8gcHJvY2Vzc2VkIGJlZm9yZSBjbG9zdXJlLCBldmVuIGlmIHRoZSBjaGFubmVsIHdhcyBjbG9zZWQgYmVmb3JlIHRoYXQgY291bGRcbiAgLy8gaGFwcGVuLlxuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goQ0xPU0VEKTtcbiAgfVxuXG4gIC8vIElmIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgd2l0aCBhbiBlbXB0eSBidWZmZXIgaGFzIG5vXG4gIC8vIHBlbmRpbmcgc2VuZHMsIGFuZCBpZiB0aGUgY2hhbm5lbCBpcyBzdGlsbCBvcGVuLCB0aGUgcmVjZWl2ZSBpcyBxdWV1ZWQgdG9cbiAgLy8gYmUgcHJvY2Vzc2VkIHdoZW4gYSBzZW5kIGlzIGF2YWlsYWJsZS4gUmVjZWl2ZXMgd2hvc2UgaGFuZGxlcnMgaGF2ZSBnb25lXG4gIC8vIGluYWN0aXZlIGFzIHRoZSByZXN1bHQgb2YgYHNlbGVjdGAgcHJvY2Vzc2luZyBhcmUgcGVyaW9kaWNhbGx5IHB1cmdlZC5cbiAgaWYgKGNoYW5uZWwuZGlydHlSZWN2cyA+IGNoYW5uZWwubWF4RGlydHkpIHtcbiAgICBmaWx0ZXIoY2hhbm5lbC5yZWN2cywgcmVjZWl2ZXIgPT4gcmVjZWl2ZXIuYWN0aXZlKTtcbiAgICBjaGFubmVsLmRpcnR5UmVjdnMgPSAwO1xuICB9IGVsc2Uge1xuICAgIGNoYW5uZWwuZGlydHlSZWN2cysrO1xuICB9XG5cbiAgaWYgKHFDb3VudChjaGFubmVsLnJlY3ZzKSA+PSBjaGFubmVsLm1heFF1ZXVlZCkge1xuICAgIGNvbnN0IG1heCA9IGNoYW5uZWwubWF4UXVldWVkO1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYE5vIG1vcmUgdGhhbiAke21heH0gcGVuZGluZyByZWNlaXZlcyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsYFxuICAgICk7XG4gIH1cbiAgZW5xdWV1ZShjaGFubmVsLnJlY3ZzLCBoYW5kbGVyKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwgaWYgaXQgaXNuJ3QgYWxyZWFkeSBjbG9zZWQuIFRoaXMgaW1tZWRpYXRlbHkgcmV0dXJucyBhbnlcbiAqIGJ1ZmZlcmVkIHZhbHVlcyB0byBwZW5kaW5nIHJlY2VpdmVzLiBJZiB0aGVyZSBhcmUgbm8gYnVmZmVyZWQgdmFsdWVzIChvciBpZlxuICogdGhleSd2ZSBhbHJlYWR5IGJlZW4gdGFrZW4gYnkgb3RoZXIgcmVjZWl2ZXMpLCB0aGVuIGFsbCBvZiB0aGUgcmVzdCBvZiB0aGVcbiAqIHJlY2VpdmVzIGFyZSBjb21wbGV0ZWQgd2l0aCB0aGUgdmFsdWUgb2Yge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0uXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gYmUgY2xvc2VkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xvc2UoY2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2hhbm5lbC5jbG9zZWQgPSB0cnVlO1xuXG4gIGxldCByZWNlaXZlciwgc2VuZGVyLCBjYWxsYmFjaztcblxuICAvLyBJZiB0aGVyZSBpcyBhIGJ1ZmZlciBhbmQgaXQgaGFzIGF0IGxlYXN0IG9uZSB2YWx1ZSBpbiBpdCwgc2VuZCB0aG9zZSB2YWx1ZXNcbiAgLy8gdG8gYW55IHBlbmRpbmcgcmVjZWl2ZXMgdGhhdCBtaWdodCBzdGlsbCBiZSBxdWV1ZWQuXG4gIGlmIChjaGFubmVsLmJ1ZmZlcikge1xuICAgIGNoYW5uZWwueGZvcm1bcC5yZXN1bHRdKGNoYW5uZWwuYnVmZmVyKTtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoY291bnQoY2hhbm5lbC5idWZmZXIpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXIgPSBkZXF1ZXVlKGNoYW5uZWwucmVjdnMpO1xuICAgICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gT25jZSB0aGUgYnVmZmVyIGlzIGVtcHR5IChvciBpZiB0aGVyZSBpc24ndCBhIGJ1ZmZlciBhdCBhbGwpLCBzZW5kIENMT1NFRFxuICAvLyB0byBhbGwgcmVtYWluaW5nIHF1ZXVlZCByZWNlaXZlcy5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSByZWNlaXZlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhDTE9TRUQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTZW5kIGBmYWxzZWAgdG8gYW55IHJlbWFpbmluZyBxdWV1ZWQgc2VuZHMuXG4gIGZvciAoOzspIHtcbiAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgIGlmIChzZW5kZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHNlbmRlci5oYW5kbGVyLmFjdGl2ZSkge1xuICAgICAgY2FsbGJhY2sgPSBzZW5kZXIuaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayhmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIE1BWF9ESVJUWSxcbiAgTUFYX1FVRVVFRCxcbiAgY2hhbm5lbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UsXG4gIGJveCxcbiAgaXNCb3hcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBjaGFubmVscy4gVGhlc2UgY2hhbm5lbHMgYXJlIGVzc2VudGlhbGx5IHF1ZXVlcyB0aGF0XG4gKiBob2xkIGluc3RydWN0aW9ucyB3YWl0aW5nIGZvciB0aGUgbmV4dCBhdmFpbGFibGUgYXN5bmMgZnVuY3Rpb24gdG8gcHJvY2Vzc1xuICogdGhlbS4gVGhleSBjYW4gYmUgYnVmZmVyZWQsIHdoaWNoIGlzIGFjY29tcGxpc2hlZCB1c2luZyB0aGUgYnVmZmVyIGZ1bmN0aW9uc1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmZpeGVkfGZpeGVkfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5kcm9wcGluZ3xkcm9wcGluZ31gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zbGlkaW5nfHNsaWRpbmd9YC5cbiAqXG4gKiBDaGFubmVscyBkbyBub3QgaW50ZXJhY3Qgd2l0aCBKUyB0YXNrcyBvciB0aGUgZGlzcGF0Y2hlciBpbiBhbnkgbWVhbmluZ2Z1bFxuICogd2F5LiBUaGV5J3JlIGp1c3QgaGVyZSB0byBob2xkIHRhc2tzIHdoaWNoIG1heSB0aGVtc2VsdmVzIHRoZW4gY2F1c2UgbmV3IEpTXG4gKiB0YXNrcyB0byBiZSBjcmVhdGVkIHZpYSB0aGUgZGlzcGF0Y2hlci5cbiAqXG4gKiBDaGFubmVscyBtYXkgaGF2ZSB0cmFuc2R1Y2VycyBhc3NvY2lhdGVkIHdpdGggdGhlbS4gVGhlIHRyYW5zZHVjZXJzIGFyZVxuICogZXhwZWN0ZWQgdG8gZm9sbG93IHRoZSBzYW1lIGNvbnZlbnRpb25zIGFzIGFueSBvZiB0aGUgcG9wdWxhciB0cmFuc2R1Y2VyXG4gKiBsaWJyYXJpZXMuIEV4cGxpY2l0IHN1cHBvcnQgaXMgcmVxdWlyZWQgYmVjYXVzZSBjaGFubmVscyB3b3VsZG4ndCBwbGF5IHdlbGxcbiAqIHdpdGggdGhlIG5vcm1hbCB3YXkgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZHVjdGlvbiwgZm9yIHR3b1xuICogZGlmZmVyZW50IHJlYXNvbnMuXG4gKlxuICogKiBUcmFuc2R1Y2VycyByZXF1aXJlIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhIG5ldywgZW1wdHkgY29sbGVjdGlvbiBvZiB0aGVcbiAqICAgc2FtZSB0eXBlIGFzIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJbiB0aGlzIGNhc2UsIHRoYXQgd291bGQgbWVhbiBjcmVhdGluZyBhXG4gKiAgIG5ldyBjaGFubmVsLCBtZWFuaW5nIHRoYXQgdGhlIG91dHB1dCBjaGFubmVsIChmcm9tIHdoaWNoIHRoZSB0cmFuc2Zvcm1lZFxuICogICB2YWx1ZXMgYXJlIHJlY2VpdmVkKSB3b3VsZCBiZSBkaWZmZXJlbnQgdGhhbiB0aGUgaW5wdXQgY2hhbm5lbCAod2hlcmVcbiAqICAgdmFsdWVzIGFyZSBzZW50KS5cbiAqICogSWYgd2Ugc29tZWhvdyBnZXQgb3ZlciB0aGF0IHJlcXVpcmVtZW50IGFuZCBrZWVwIGFsbCBhY3Rpb24gb24gdGhlIHNhbWVcbiAqICAgY2hhbm5lbCwgd2UgY2FuJ3QgdGFrZSB2YWx1ZXMgZnJvbSB0aGUgY2hhbm5lbCwgdHJhbnNmb3JtIHRoZW0sIGFuZCBwdXRcbiAqICAgdGhlbSBiYWNrLiBUaGlzIHdvdWxkIHBvdGVudGlhbGx5IGNoYW5nZSB0aGUgb3JkZXIgb2YgdmFsdWVzIGluIHRoZSBjaGFubmVsXG4gKiAgIHNpbmNlIHdlIGFyZSBkZWFsaW5nIHdpdGggYXN5bmNocm9ub3VzIHByb2Nlc3Nlcy5cbiAqXG4gKiBUaGUgZXhwbGljaXQgc3VwcG9ydCBtZWFucyBhIHRyYW5zZHVjZXIgaXMgZGlyZWN0bHkgYXNzb2NpYXRlZCB3aXRoIGFcbiAqIGNoYW5uZWwuIFdoZW4gYSB2YWx1ZSBpcyBzZW50IHRvIHRoZSBjaGFubmVsLCBpdCdzIGZpcnN0IHJ1biB0aHJvdWdoIHRoZVxuICogdHJhbnNkdWNlciBhbmQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlIGlzIHRoZSBvbmUgYWN0dWFsbHkgcHV0IGludG8gdGhlXG4gKiBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIGF2b2lkcyBib3RoIG9mIHRoZSBwcm9ibGVtcyBub3RlZCBhYm92ZS5cbiAqXG4gKiBAbW9kdWxlIGNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIENMT1NFRCxcbiAgY2hhbm5lbCBhcyBjaGFuSW1wbCxcbiAgaGFuZGxlU2VuZCxcbiAgaGFuZGxlUmVjdixcbiAgY2xvc2UgYXMgY2xvc2VJbXBsLFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRURcbn0gZnJvbSBcIi4vaGFuZGxlclwiO1xuaW1wb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfSBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCB7IGFkZCwgZml4ZWQsIGlzQnVmZmVyIH0gZnJvbSBcIm1vZHVsZXMvYnVmZmVyXCI7XG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCB9IGZyb20gXCJAY2hhbmtvL3hkdWNlLXRvb2xzXCI7XG5cbi8qKlxuICogQSBoYW5kbGVyIGZ1bmN0aW9uIGZvciBleGNlcHRpb25zIHRoYXQgYXJlIHRocm93biBieSBhIHRyYW5zZHVjZXIgd2hpbGVcbiAqIHRyYW5zZm9ybWluZyB2YWx1ZXMgb24gYSBjaGFubmVsLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnIgVGhlIGVycm9yIG9iamVjdCB0aGF0IHdhcyB0aHJvd24gYnkgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHB1dCBpbnRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyIHdoZW4gdGhlXG4gKiAgICAgdHJhbnNkdWNlciB0aHJvd3MgdGhlIGVycm9yLiBJZiB0aGlzIHZhbHVlIGlzXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0sIHRoZW4gbm8gdmFsdWUgYXQgYWxsIHdpbGwgYmUgYWRkZWQgdG9cbiAqICAgICB0aGUgYnVmZmVyLlxuICogQGNhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogVGhlIGRlZmF1bHQgZXhjZXB0aW9uIGhhbmRsZXIsIHVzZWQgd2hlbiBubyBleGNlcHRpb24gaGFuZGxlciBpcyBzdXBwbGllZCB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwL2NoYW5uZWwuaGFuZGxlRXhjZXB0aW9ufWAsXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC53cmFwVHJhbnNmb3JtZXJ9YCwgYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLFxuICogb3IgYHtAbGluayBtb2R1bGU6Y3NwLnRyYW5zQ2hhbnx0cmFuc0NoYW59YC4gVGhpcyBkZWZhdWx0IGhhbmRsZXIgbWVyZWx5XG4gKiByZXR1cm5zIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAsIHdoaWNoIHdpbGwgcmVzdWx0IGluIG5vIG5ldyB2YWx1ZVxuICogYmVpbmcgd3JpdHRlbiB0byB0aGUgY2hhbm5lbC5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgREVGQVVMVF9IQU5ETEVSID0gKCkgPT4gQ0xPU0VEO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaGFuZGxlciB1c2VkIGZvciBgc2VuZGAgYW5kIGByZWN2YCBvcGVyYXRpb25zLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJDYWxsYmFja30gZm4gVGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuXG4gKiAgICAgKGFuZCBpZikgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlcn0gVGhlIG5ldyBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gb3BIYW5kbGVyKGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBjb21taXQ6IHtcbiAgICAgIHZhbHVlOiAoKSA9PiBmblxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBpcyB0aHJvd24gaW5zaWRlIGEgdHJhbnNkdWNlci4gVGhlIHRocm93biBlcnJvciBpc1xuICogcGFzc2VkIHRvIHRoZSBgaGFuZGxlcmAgZnVuY3Rpb24sIGFuZCB0aGUgcmVzdWx0IG9mIHRoYXQgaGFuZGxlciBmdW5jdGlvbiBpc1xuICogYWRkZWQgdG8gdGhlIGNoYW5uZWwncyBidWZmZXIuIElmIHRoYXQgdmFsdWUgaXNcbiAqIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LCB0aGVuIGl0IGlzICpub3QqIGFkZGVkIHRvIHRoZSBidWZmZXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdGhhdCBiYWNrcyB0aGUgY2hhbm5lbCB3aG9zZVxuICogICAgIHRyYW5zZHVjZXIncyBleGNlcHRpb25zIGFyZSBiZWluZyBoYW5kbGVkLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV4Y2VwdGlvbiBoYW5kbGluZyBmdW5jdGlvblxuICogICAgIHRoYXQgaXMgcnVuIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIGEgdHJhbnNkdWNlci5cbiAqIEBwYXJhbSAge09iamVjdH0gZXggVGhlIGVycm9yIG9iamVjdCB0aHJvd24gYnkgdGhlIHRyYW5zZHVjZXIuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gVGhlIGJ1ZmZlciBpdHNlbGYuIFRoaXMgaXMgZG9uZSB0byBtYWtlIGl0IGVhc2llclxuICogICAgIHRvIGludGVncmF0ZSB0aGlzIGZ1bmN0aW9uIGludG8gYSB0cmFuc2R1Y2VyJ3Mgc3RlcCBmdW5jdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KSB7XG4gIGNvbnN0IHZhbHVlID0gaGFuZGxlcihleCk7XG4gIGlmICh2YWx1ZSAhPT0gQ0xPU0VEKSB7XG4gICAgYWRkKGJ1ZmZlciwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBidWZmZXI7XG59XG5cbi8qKlxuICogQSB0cmFuc2R1Y2VyIHRoYXQgd3JhcHMgYW5vdGhlciB0cmFuc2R1Y2VyIHdpdGggZXJyb3IgaGFuZGxpbmcgY29kZS4gQW55XG4gKiBlcnJvciB0aGF0IG9jY3VycyB3aXRoaW4gdGhlIHRyYW5zZHVjZXIsIGVpdGhlciBpbiB0aGUgc3RlcCBmdW5jdGlvbiBvciB0aGVcbiAqIHJlc3VsdCBmdW5jdGlvbiwgd2lsbCBjYXVzZSB0aGUgZXJyb3IgaGFuZGxlciB0byBiZSBydW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHhmb3JtIFRoZSB0cmFuc2R1Y2VyIHRvIGFkZCBhbiBlcnJvciBoYW5kbGVyIHRvLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IFtoYW5kbGVyPURFRkFVTFRfSEFORExFUl0gVGhlIGV4Y2VwdGlvblxuICogICAgIGhhbmRsaW5nIGZ1bmN0aW9uIHRoYXQgaXMgcnVuIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyB0cmFuc2R1Y2VyIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiB3cmFwcGluZyB0aGUgcHJvdmlkZWRcbiAqICAgICB0cmFuc2R1Y2VyJ3Mgc3RlcCBhbmQgcmVzdWx0IGZ1bmN0aW9ucyB3aXRoIHRoZSBleGNlcHRpb24gaGFuZGxlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZXJUcmFuc2R1Y2VyKHhmb3JtLCBoYW5kbGVyID0gREVGQVVMVF9IQU5ETEVSKSB7XG4gIHJldHVybiB7XG4gICAgW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHhmb3JtW3Auc3RlcF0oYnVmZmVyLCBpbnB1dCk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlRXhjZXB0aW9uKGJ1ZmZlciwgaGFuZGxlciwgZXgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBbcC5yZXN1bHRdKGJ1ZmZlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHhmb3JtW3AucmVzdWx0XShidWZmZXIpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVGhlIHJlZHVjZXIgdXNlZCBhdCB0aGUgZW5kIG9mIGEgdHJhbnNkdWNlciBjaGFpbiB0byBjb250cm9sIGhvdyB0aGVcbiAqIHRyYW5zZm9ybWVkIHZhbHVlcyBhcmUgcmVkdWNlZCBiYWNrIG9udG8gdGhlIGNoYW5uZWwncyBidWZmZXIuIFRoaXMgcmVkdWNlclxuICogZG9lcyBub3RoaW5nIG1vcmUgdGhhbiBhZGQgdGhlIGlucHV0IGl0ZW1zICh3aGljaCBhcmUgdGhlIHRyYW5zZm9ybWVkIHZhbHVlc1xuICogdGhhdCBhcmUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwpIHRvIHRoZSBjaGFubmVsIGJ1ZmZlci5cbiAqXG4gKiBUaGlzIGlzIGEgbmVjZXNzYXJ5IHBhcnQgb2Ygd29ya2luZyB3aXRoIGEgdHJhbnNkdWNlciwgYXMgdGhlIGZpbmFsIHJlZHVjZXJcbiAqIGFsd2F5cyB0YWtlcyB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGFuZCByZW5kZXJzIHRoZW0gaW50byB3aGF0ZXZlciBjb2xsZWN0aW9uXG4gKiBpcyBkZXNpcmVkLiBUaGlzIGlzIHRoYXQgZmluYWwgcmVkdWNlciBmb3IgY2hhbm5lbHMuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGJ1ZmZlclJlZHVjZXIgPSB7XG4gIFtwLmluaXRdKCkge1xuICAgIHRocm93IEVycm9yKFwiaW5pdCBub3QgYXZhaWxhYmxlXCIpO1xuICB9LFxuXG4gIFtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICBhZGQoYnVmZmVyLCBpbnB1dCk7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfSxcblxuICBbcC5yZXN1bHRdKGJ1ZmZlcikge1xuICAgIHJldHVybiBidWZmZXI7XG4gIH1cbn07XG5cbi8qKlxuICogUGFyc2VzIHRoZSBidWZmZXIgYXJndW1lbnQgYW5kIG9wdGlvbnMsIGFsb25nIHdpdGggYSBzZXQgb2YgZGVmYXVsdCBvcHRpb25zLFxuICogdG8gZmlndXJlIG91dCB3aGF0IHdhcyByZWFsbHkgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqXG4gKiBAcGFyYW0geyhudWxsfG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IGJ1ZmZlciBUaGUgYnVmZmVyIGFyZ3VtZW50IHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGFyZ3VtZW50IHBhc3NlZCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkZWZhdWx0T3B0aW9ucyBEZWZhdWx0IHZhbHVlcyBmb3Igb3B0aW9ucyB0aGF0IG1pZ2h0IG5vdCBoYXZlXG4gKiAgICAgYmVlbiBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb2Nlc3NlZCB2YWx1ZXMgb2YgYWxsIG9mIHRoZVxuICogICAgIGFyZ3VtZW50cyBzZW50IHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQXJncyhidWZmZXIsIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKSB7XG4gIGxldCBidWY7XG4gIGxldCBvcHRzO1xuXG4gIGlmICghYnVmZmVyKSB7XG4gICAgLy8gc2FtZSBmb3IgMCwgbnVsbCwgb3IgdW5kZWZpbmVkXG4gICAgYnVmID0gbnVsbDtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmICh0eXBlb2YgYnVmZmVyID09PSBcIm51bWJlclwiKSB7XG4gICAgYnVmID0gZml4ZWQoYnVmZmVyKTtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChpc0J1ZmZlcihidWZmZXIpKSB7XG4gICAgYnVmID0gYnVmZmVyO1xuICAgIG9wdHMgPSBvcHRpb25zO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIGJ1ZmZlciBpcyBzcGVjaWZpZWQgYnV0IGEgdHJhbnNkdWNlciBpcywgd2UgYXNzdW1lIGZpeGVkKDEpIGluc3RlYWRcbiAgICAvLyBvZiBubyBidWZmZXJcbiAgICBidWYgPSBidWZmZXI/LnRyYW5zZHVjZXIgPyBmaXhlZCgxKSA6IG51bGw7XG4gICAgb3B0cyA9IGJ1ZmZlcjtcbiAgfVxuXG4gIGNvbnN0IHsgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAgZGVmYXVsdE9wdGlvbnMsXG4gICAgb3B0c1xuICApO1xuICByZXR1cm4geyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyBjaGFubmVsLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhpcyBjaGFubmVsIHdpbGwgYmUgYSBzaW1wbGUgdW5idWZmZXJlZCwgdW50cmFuc2Zvcm1lZCBjaGFubmVsLFxuICogYnV0IHRoYXQgY2FuIGJlIGNoYW5nZWQgdGhyb3VnaCBvcHRpb25zLiBBIGNoYW5uZWwgZG9lcyBub3QgaGF2ZSBhbnlcbiAqIGV4dGVybmFsbHkgdXNlZnVsIGZ1bmN0aW9ucy4gSXQgZXhpc3RzIGxhcmdlbHkgdG8gYmUgcGFzc2VkIGludG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCwgYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gLCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgaW52b2NhdGlvbnMsIGFsb25nIHdpdGggdGhlaXIgbm9uLWJsb2NraW5nXG4gKiB2YXJpYXRpb25zIChge0BsaW5rIG1vZHVsZTpjc3Auc2VuZEFzeW5jfHNlbmRBc3luY31gLFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnJlY3ZBc3luY3xyZWN2QXN5bmN9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCkuXG4gKlxuICogSWYgYSBidWZmZXIgdmFsdWUgaXMgcHJvdmlkZWQsIGl0IGRlZmluZXMgd2hhdCBidWZmZXIgc2hvdWxkIGJhY2sgdGhlXG4gKiBjaGFubmVsLiBJZiB0aGlzIGlzIGBudWxsYCBvciBgMGAsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBhXG4gKiBwb3NpdGl2ZSBudW1iZXIsIHRoZSBjaGFubmVsIHdpbGwgYmUgYnVmZmVyZWQgYnkgYVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBgb2YgdGhhdCBzaXplLiBJZiBpdCdzIGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5CdWZmZXJ8QnVmZmVyfWAgb2JqZWN0LCB0aGF0IG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgdGhlXG4gKiBjaGFubmVsJ3MgYnVmZmVyLiBJZiBpdCdzIG1pc3NpbmcgYWx0b2dldGhlciwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkXG4gKiB1bmxlc3MgYSBgdHJhbnNkdWNlcmAgb3B0aW9uIGlzIHByb3ZpZGVkIChzZWUgYmVsb3cpLCBpbiB3aGljaCBjYXNlIGl0IHdpbGxcbiAqIGJlIGEgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2Ygc2l6ZSAxLlxuICpcbiAqIGBjaGFuYCBzdXBwb3J0cyB0cmFuc2R1Y2VycyBieSBhbGxvd2luZyBhIHRyYW5zZHVjZXIgZnVuY3Rpb24gdG8gYmVcbiAqIGFzc29jaWF0ZWQgd2l0aCBpdC4gVGhpcyBpcyBwYXNzZWQgYXMgdGhlIGB0cmFuc2R1Y2VyYCBvcHRpb24gYW5kIGNhbiBvbmx5IGJlXG4gKiB1c2VkIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIChvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duKS4gVGhpc1xuICogdHJhbnNkdWNlciBmdW5jdGlvbiBtdXN0IHRha2UgYW5vdGhlciB0cmFuc2R1Y2VyIGFzIGEgcGFyYW1ldGVyIChhbGxvd2luZ1xuICogdHJhbnNmb3JtZXJzIHRvIGJlIGNoYWluZWQpLCBhbmQgaXQgbXVzdCByZXR1cm4gYW4gb2JqZWN0IGNvbmZvcm1pbmcgdG8gdGhlXG4gKiB0cmFuc2R1Y2VyIHByb3RvY29sLlxuICpcbiAqIEVycm9ycyBpbiB0aGUgdHJhbnNmb3JtYXRpb24gcHJvY2VzcyBjYW4gYmUgaGFuZGxlZCBieSBwYXNzaW5nIGFuIGVycm9yXG4gKiBoYW5kbGVyLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCBleHBlY3RzIHRvIHJlY2VpdmUgYW4gZXJyb3Igb2JqZWN0IGFzIGFcbiAqIHBhcmFtZXRlciBhbmQgY2FuIHJldHVybiBhIHZhbHVlIHRoYXQgaXMgdGhlbiBwdXQgb250byB0aGUgY2hhbm5lbC4gSWYgdGhpc1xuICogdmFsdWUgaXMgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCwgdGhlbiBubyB2YWx1ZSB3aWxsIGJlIHB1dCBvbnRvXG4gKiB0aGUgY2hhbm5lbCB1cG9uIGhhbmRsZXIgY29tcGxldGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcl0gVGhlIGJ1ZmZlciBvYmplY3QgdGhhdCBzaG91bGRcbiAqICAgICBiYWNrIHRoaXMgY2hhbm5lbC4gSWYgdGhpcyBpcyBhIHBvc2l0aXZlIG51bWJlciwgYSBmaXhlZCBidWZmZXIgb2YgdGhhdFxuICogICAgIHNpemUgd2lsbCBiZSBjcmVhdGVkIHRvIGJhY2sgdGhlIGNoYW5uZWwuIElmIGl0IGlzIGAwYCBvciBgbnVsbGAsIHRoZSBuZXdcbiAqICAgICBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC4gSWYgaXQncyBub3QgcHJlc2VudCwgdGhlIG5ldyBjaGFubmVsIHdpbGwgYmVcbiAqICAgICB1bmJ1ZmZlcmVkIHVubGVzcyB0aGVyZSBpcyBhIGB0cmFuc2R1Y2VyYCBvcHRpb24sIGluIGluIHdoaWNoIGNhc2UgaXRcbiAqICAgICB3aWxsIGJlIGJ1ZmZlcmVkIHdpdGggYSBzaXplIDFcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9YC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgY29uZmlndXJpbmcgdGhlIGNoYW5uZWwnc1xuICogICAgIHF1ZXVlLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSBbb3B0aW9ucy50cmFuc2R1Y2VyXSBBXG4gKiAgICAgdHJhbnNkdWNlciB0byBydW4gZWFjaCB2YWx1ZSB0aHJvdWdoIGJlZm9yZSBwdXR0aW5nIGl0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiAgICAgVGhpcyBmdW5jdGlvbiBzaG91bGQgZXhwZWN0IG9uZSBwYXJhbWV0ZXIgKGFub3RoZXIgdHJhbnNkdWNlciB0aGF0IGl0J3NcbiAqICAgICBjaGFpbmVkIHRvKSBhbmQgcmV0dXJuIGFuIG9iamVjdCB0aGF0IGNvbmZvcm1zIHRvIHRoZSB0cmFuc2R1Y2VyXG4gKiAgICAgcHJvdG9jb2wuIElmIGEgdHJhbnNkdWNlciBpcyBwcm92aWRlZCBvbiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwsIGFuIGVycm9yXG4gKiAgICAgd2lsbCBiZSB0aHJvd24uXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn0gW29wdGlvbnMuaGFuZGxlcl0gQW4gZXJyb3IgaGFuZGxlciB0aGF0XG4gKiAgICAgaXMgcnVuIHdoZW5ldmVyIGFuIGVycm9yIG9jY3VycyBpbnNpZGUgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBJZiB0aGF0XG4gKiAgICAgaGFwcGVucywgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZXJyb3JcbiAqICAgICBvYmplY3QuIFRoZSB2YWx1ZSB0aGF0IHRoZSBoYW5kbGVyIHJldHVybnMgKGlmIGl0IGlzIG5vdFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWApIHdpbGwgYmUgcHV0IG9udG8gdGhlIGNoYW5uZWwgd2hlbiB0aGVcbiAqICAgICBoYW5kbGVyIGZpbmlzaGVzIHJ1bm5pbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RGlydHk9NjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkaXJ0eSBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgaW4gdGhlIHF1ZXVlIGJlZm9yZSB0aG9zZSBvcGVyYXRpb25zIGFyZSBzdWJqZWN0IHRvIGJlaW5nXG4gKiAgICAgcHVyZ2VkLiBEaXJ0eSBvcGVyYXRpb25zIGFyZSB0aG9zZSB0aGF0IG1heSBub3QgYmUgdmFsaWQgYW55bW9yZSBiZWNhdXNlXG4gKiAgICAgdGhleSB3ZXJlIGluIHRoZSBsaXN0IG9mIG9wZXJhdGlvbnMgcGFzc2VkIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gIGJ1dCB3ZXJlIG5vdCBjaG9zZW4gdG8gcnVuLlxuICogICAgIFRoaXMgcHJvdmlkZXMgYSBjaGFuY2UgZm9yIGEgdmVyeSBtaW5vciBwZXJmb3JtYW5jZSB0d2VhayBhbmQgaXMgYmVzdFxuICogICAgIGxlZnQgYWxvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4UXVldWVkPTEwMjRdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVyYXRpb25zXG4gKiAgICAgdGhhdCBjYW4gYmUgcXVldWVkIHVwIGF0IHRoZSBzYW1lIHRpbWUuIFRoaXMgcHJldmVudHMgaW5maW5pdGUgbG9vcHMgZnJvbVxuICogICAgIGFjY2lkZW50YWxseSBlYXRpbmcgdXAgYWxsIG9mIHRoZSBhdmFpbGFibGUgbWVtb3J5LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVyXSBJZiB0aGlzIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICBhIHRpbWVkIGNoYW5uZWwgdGhhdCBjbG9zZXMgYXV0b21hdGljYWxseSBhZnRlciB0aGlzIG51bWJlciBvZlxuICogICAgIG1pbGxpc2Vjb25kcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gY2hhbihidWZmZXIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbWF4RGlydHk6IE1BWF9ESVJUWSxcbiAgICBtYXhRdWV1ZWQ6IE1BWF9RVUVVRURcbiAgfTtcbiAgY29uc3QgeyBidWYsIHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH0gPSBwYXJzZUFyZ3MoXG4gICAgYnVmZmVyLFxuICAgIG9wdGlvbnMsXG4gICAgZGVmYXVsdE9wdGlvbnNcbiAgKTtcblxuICBpZiAodHJhbnNkdWNlciAmJiAhYnVmKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJPbmx5IGJ1ZmZlcmVkIGNoYW5uZWxzIGNhbiB1c2UgdHJhbnNkdWNlcnNcIik7XG4gIH1cblxuICBjb25zdCB4ZiA9IGhhbmRsZXJUcmFuc2R1Y2VyKFxuICAgIHRyYW5zZHVjZXIgPyB0cmFuc2R1Y2VyKGJ1ZmZlclJlZHVjZXIpIDogYnVmZmVyUmVkdWNlcixcbiAgICBoYW5kbGVyXG4gICk7XG5cbiAgY29uc3QgaXNUaW1lZCA9IHR5cGVvZiB0aW1lciA9PT0gXCJudW1iZXJcIjtcblxuICBjb25zdCBjaCA9IGNoYW5JbXBsKGJ1ZiwgeGYsIGlzVGltZWQsIG1heERpcnR5LCBtYXhRdWV1ZWQpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uKiBpdGVyYXRvcigpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3YoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjaFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBpdGVyYXRvcjtcblxuICBpZiAoaXNUaW1lZCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY2xvc2VJbXBsKGNoKSwgdGltZXIpO1xuICB9XG5cbiAgcmV0dXJuIGNoO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdW5idWZmZXJlZCwgdGltZWQgY2hhbm5lbC4gVGhpcyBjaGFubmVsIGNsb3NlcyBhdXRvbWF0aWNhbGx5IGFmdGVyXG4gKiB0aGUgc3VwcGxpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhbmQgaXMgdGhlIGVxdWl2YWxlbnQgb2YgY2FsbGluZyBgY2hhbigwLFxuICogeyB0aW1lcjogZGVsYXkgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYWZ0ZXIgdGhlIGNoYW5uZWwgaXMgY3JlYXRlZFxuICogICAgIHRoYXQgaXQgd2lsbCBiZSBjbG9zZWQgYXV0b21hdGljYWxseS5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgdGltZWQgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdGltZWRDaGFuKGRlbGF5ID0gMCkge1xuICByZXR1cm4gY2hhbih7IHRpbWVyOiBkZWxheSB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYnVmZmVyZWQgY2hhbm5lbCB3aXRoIGEgdHJhbnNkdWNlciBhbmQgb3B0aW9uYWwgZXJyb3IgaGFuZGxlci4gVGhlXG4gKiBidWZmZXIgZm9yIHRoaXMgY2hhbm5lbCBpcyBhIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gIG9mXG4gKiBzaXplIDEuIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgYGNoYW4oMSwgeyB0cmFuc2R1Y2VyLCBoYW5kbGVyIH0pYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UtdG9vbHMuVHJhbnNkdWNlckZ1bmN0aW9ufSB0cmFuc2R1Y2VyIFRoZSB0cmFuc2R1Y2VyIHVzZWRcbiAqICAgICB0byB0cmFuc2Zvcm0gdmFsdWVzIG9uIHRoZSBuZXcgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBbaGFuZGxlcl0gQW4gZXhjZXB0aW9uIGhhbmRsZXIgY2FsbGVkXG4gKiAgICAgd2l0aCB0aGUgZXJyb3Igb2JqZWN0IGFzIGl0cyBvbmx5IGFyZ3VtZW50IHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbnNpZGUgYVxuICogICAgIHRyYW5zZHVjZXIuIElmIHRoaXMgaXMgbm90IHByb3ZpZGVkLCBhIGRlZmF1bHQgaGFuZGxlciBpcyB1c2VkIHRoYXRcbiAqICAgICBzaW1wbHkgZG9lcyBub3RoaW5nLCBpbmNsdWRpbmcgc2VuZGluZyBubyBvdXRwdXQgZnJvbSB0aGUgdmFsdWUgdGhhdFxuICogICAgIGVycm9yZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgbmV3IGNoYW5uZWwgd2l0aCBhIHRyYW5zZHVjZXIuXG4gKi9cbmZ1bmN0aW9uIHRyYW5zQ2hhbih0cmFuc2R1Y2VyLCBoYW5kbGVyKSB7XG4gIHJldHVybiBjaGFuKHsgdHJhbnNkdWNlciwgaGFuZGxlciB9KTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKiBBIGNsb3NlZCBjaGFubmVsIHdpbGwgY2F1c2UgYW55IGBzZW5kYCBvcGVyYXRpb24gdG8gcmV0dXJuIGBmYWxzZWAgYW5kIGFueVxuICogYHJlY3ZgIG9wZXJhdGlvbiB0byByZXR1cm4gYW55IGJ1ZmZlcmVkIGl0ZW1zIHRoYXQgcmVtYWluLCBmb2xsb3dlZCBieVxuICogYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIGNsb3NlZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXNuJ3QuXG4gKi9cbmZ1bmN0aW9uIGlzQ2xvc2VkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuY2xvc2VkO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNoYW5uZWwgaXMgYnVmZmVyZWQuXG4gKlxuICogQSBjaGFubmVsIGlzIGJ1ZmZlcmVkIGlmIGEgYnVmZmVyIG9yIGEgbnVtYmVyIHdhcyBwYXNzZWQgYXMgdGhlIGZpcnN0XG4gKiBhcmd1bWVudCBvZiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAgb3IgaWYgYSB0cmFuc2R1Y2VyIGlzIGEgcGFydCBvZlxuICogdGhlIGNoYW5uZWwuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgaXNuJ3QuXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5pc0J1ZmZlcmVkO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNoYW5uZWwgaXMgdGltZWQuXG4gKlxuICogQSBjaGFubmVsIGlzIHRpbWVkIGlmIGl0IHdhcyBjcmVhdGVkIGVpdGhlciB3aXRoIHRoZSBgdGltZXJgIG9wdGlvbiBvZlxuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gIG9yIHdpdGggdGhlXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AudGltZWRDaGFufHRpbWVkQ2hhbn1gIGZ1bmN0aW9uLiBJdCB3aWxsIGF1dG9tYXRpY2FsbHlcbiAqIGNsb3NlIGFmdGVyIGEgY2VydGFpbiBwZXJpb2Qgb2YgdGltZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIHRpbWVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNUaW1lZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmlzVGltZWQ7XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byB0aGlzIGNoYW5uZWwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGBzZW5kQXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YCBleHByZXNzaW9uLFxuICogYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIGFzeW5jIGZ1bmN0aW9uLiBSYXRoZXIgdGhhblxuICogYmxvY2tpbmcgdW50aWwgdGhlIHNlbnQgdmFsdWUgaXMgdGFrZW4gYnkgYW5vdGhlciBhc3luYyBmdW5jdGlvbiwgdGhpcyBvbmVcbiAqIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW4gaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSB3aGVuIHRoZSBzZW50XG4gKiB2YWx1ZSBpcyB0YWtlbi4gSXQgY2FuIGJlIHNlZW4gYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmR8c2VuZH1gLlxuICpcbiAqIFdoaWxlIHRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIHNlbmQgdmFsdWVzIG9udG8gY2hhbm5lbHMgaW5cbiAqIGNvbnRleHRzIHdoZXJlIGJlaW5nIGluc2lkZSBhbiBhc3luYyBmdW5jdGlvbiBpcyBpbXBvc3NpYmxlIChmb3IgZXhhbXBsZSwgaW5cbiAqIGEgRE9NIGVsZW1lbnQncyBldmVudCBoYW5kbGVyKSwgaXQgY2FuIHN0aWxsIGJlIHVzZWQgaW5zaWRlIGFzeW5jIGZ1bmN0aW9uc1xuICogYXQgdGltZXMgd2hlbiBpdCdzIGltcG9ydGFudCB0byBtYWtlIHN1cmUgdGhhdCB0aGUgZnVuY3Rpb24gZG9lc24ndCBibG9ja1xuICogZnJvbSB0aGUgc2VuZC5cbiAqXG4gKiBUaGUgY2FsbGJhY2sgaXMgYSBmdW5jdGlvbiBvZiBvbmUgcGFyYW1ldGVyLiBUaGUgcGFyYW1ldGVyIHRoYXQncyBzdXBwbGllZCB0b1xuICogdGhlIGNhbGxiYWNrIGlzIHRoZSBzYW1lIGFzIHdoYXQgaXMgc3VwcGxpZWQgdG8gYGF3YWl0IHNlbmRgOiBgdHJ1ZWAgaWYgdGhlXG4gKiB2YWx1ZSB3YXMgdGFrZW4sIG9yIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgd2FzIGNsb3NlZC4gSWYgdGhlIGNhbGxiYWNrIGlzbid0XG4gKiBwcmVzZW50LCBub3RoaW5nIHdpbGwgaGFwcGVuIGFmdGVyIHRoZSB2YWx1ZSBpcyB0YWtlbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsqfSBbdmFsdWVdIFRoZSB2YWx1ZSBiZWluZyBwdXQgb250byB0aGUgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5PcENhbGxiYWNrfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGludm9rZWQgZWl0aGVyXG4gKiAgICAgd2hlbiB0aGUgdmFsdWUgaXMgdGFrZW4gYnkgYW5vdGhlciBwcm9jZXNzIG9yIHdoZW4gdGhlIGNoYW5uZWwgaXMgY2xvc2VkLlxuICogICAgIFRoaXMgZnVuY3Rpb24gY2FuIHRha2Ugb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgYHRydWVgIGluIHRoZSBmb3JtZXIgY2FzZVxuICogICAgIGFuZCBgZmFsc2VgIGluIHRoZSBsYXR0ZXIuXG4gKi9cbmZ1bmN0aW9uIHNlbmRBc3luYyhjaGFubmVsLCB2YWx1ZSwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuICBjb25zdCByZXN1bHQgPSBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhpcyBjaGFubmVsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgcmVjZWl2ZUFzeW5jYCBkb2VzIG5vdCBnbyBpbnRvIGFuIGBhd2FpdGBcbiAqIGV4cHJlc3Npb24sIGFuZCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIHVzZSBpdCBpbnNpZGUgYSBhc3luYyBmdW5jdGlvbi4gUmF0aGVyXG4gKiB0aGFuIGJsb2NraW5nIHVudGlsIGEgdmFsdWUgYmVjb21lcyBhdmFpbGFibGUgb24gdGhlIGNoYW5uZWwgdG8gYmUgcmVjZWl2ZWQsXG4gKiB0aGlzIG9uZSByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgd2hlblxuICogYSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZS4gSXQgY2FuIGJlIHJlZ2FyZGVkIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gLlxuICpcbiAqIFdoaWxlIHRoZSBwcmltYXJ5IHVzZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIHJlY2VpdmUgdmFsdWVzIGZyb20gY2hhbm5lbHMgaW5cbiAqIGNvbnRleHRzIHdoZXJlIGJlaW5nIGluc2lkZSBhbiBhc3luYyBmdW5jdGlvbiBpcyBpbXBvc3NpYmxlLCBpdCBjYW4gc3RpbGwgYmVcbiAqIHVzZWQgaW5zaWRlIGFzeW5jIGZ1bmN0aW9ucyBhdCB0aW1lcyB3aGVuIGl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIHJlY2VpdmVcbiAqIGRvZXNuJ3QgYmxvY2sgdGhlIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIsIGFuZCB0aGUgdmFsdWUgc3VwcGxpZWQgZm9yIHRoYXRcbiAqIHBhcmFtZXRlciBpcyB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCAoZWl0aGVyIGEgdmFsdWUgdGhhdCB3YXNcbiAqIHNlbnQgb3IgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCkuIElmIHRoZSBjYWxsYmFjayBpc24ndCBwcmVzZW50LFxuICogbm90aGluZyB3aWxsIGhhcHBlbiBhZnRlciB0aGUgdmFsdWUgaXMgdGFrZW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5PcENhbGxiYWNrfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGludm9rZWQgd2hlbiBhXG4gKiAgICAgdmFsdWUgaXMgbWFkZSBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKHRoaXMgdmFsdWUgbWF5IGJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCBpZiB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aCBub1xuICogICAgIGF2YWlsYWJsZSB2YWx1ZSkuIFRoZSBmdW5jdGlvbiBjYW4gdGFrZSBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgdmFsdWVcbiAqICAgICB0aGF0IGlzIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHJlY3ZBc3luYyhjaGFubmVsLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVJlY3YoY2hhbm5lbCwgb3BIYW5kbGVyKGNhbGxiYWNrKSk7XG4gIGlmIChyZXN1bHQgJiYgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogU2VuZHMgYSB2YWx1ZSB0byBhIGNoYW5uZWwsIGJsb2NraW5nIHRoZSBhc3luYyBmdW5jdGlvbiB1bnRpbCB0aGF0IHZhbHVlIGlzXG4gKiByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsIGJ5IGEgZGlmZmVyZW50IGZ1bmN0aW9uIChvciB1bnRpbCB0aGUgY2hhbm5lbFxuICogY2xvc2VzKS5cbiAqXG4gKiBBIHZhbHVlIGlzIGFsd2F5cyBzZW50IHRvIHRoZSBjaGFubmVsLCBidXQgaWYgdGhhdCB2YWx1ZSBpc24ndCBzcGVjaWZpZWQgYnlcbiAqIHRoZSBzZWNvbmQgcGFyYW1ldGVyLCBpdCBpcyBgdW5kZWZpbmVkYC4gQW55IHZhbHVlIG1heSBiZSBzZW50IHRvIGEgY2hhbm5lbCxcbiAqIHdpdGggdGhlIHNvbGUgZXhjZXB0aW9uIG9mIHRoZSBzcGVjaWFsIHZhbHVlXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gYHNlbmRgIGlzIGNvbXBsZXRlZCBhbmQgaXRzIGZ1bmN0aW9uIHVuYmxvY2tzLCBpdHMgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBldmFsdWF0ZXMgdG8gYSBzdGF0dXMgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGF0IGNhdXNlZCB0aGUgZnVuY3Rpb24gdG9cbiAqIHVuYmxvY2suIFRoYXQgdmFsdWUgaXMgYHRydWVgIGlmIHRoZSBzZW50IHZhbHVlIHdhcyBzdWNjZXNzZnVsbHkgdGFrZW4gYnlcbiAqIGFub3RoZXIgcHJvY2Vzcywgb3IgYGZhbHNlYCBpZiB0aGUgdW5ibG9ja2luZyBoYXBwZW5lZCBiZWNhdXNlIHRoZSB0YXJnZXRcbiAqIGNoYW5uZWwgY2xvc2VkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IFt2YWx1ZV0gVGhlIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIGB0cnVlYCBvciBgZmFsc2VgXG4gKiAgICAgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHB1dCB2YWx1ZSBpcyBhY3R1YWxseSB0YWtlbi5cbiAqL1xuZnVuY3Rpb24gc2VuZChjaGFubmVsLCB2YWx1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIHRoaXMgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIGEgdmFsdWVcbiAqIGJlY29tZXMgYXZhaWxhYmxlIHRvIGJlIHJlY2VpdmVkIChvciB1bnRpbCB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aCBubyBtb3JlXG4gKiB2YWx1ZXMgb24gaXQgdG8gYmUgcmVjZWl2ZWQpLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gYHJlY2VpdmVgIGlzIGNvbXBsZXRlZCBhbmQgaXRzIGZ1bmN0aW9uIHVuYmxvY2tzLCBpdHMgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBldmFsdWF0ZXMgdG8gdGhlIGFjdHVhbCB2YWx1ZSB0aGF0IHdhcyByZWNlaXZlZC4gSWYgdGhlIHRhcmdldCBjaGFubmVsXG4gKiBjbG9zZWQsIHRoZW4gYWxsIG9mIHRoZSB2YWx1ZXMgYWxyZWFkeSBwbGFjZWQgb250byBpdCBhcmUgcmVzb2x2ZWQgYnlcbiAqIGByZWNlaXZlYCBhcyBub3JtYWwsIGFuZCBvbmNlIG5vIG1vcmUgdmFsdWVzIGFyZSBhdmFpbGFibGUsIHRoZSBzcGVjaWFsIHZhbHVlXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gIGlzIHJldHVybmVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlXG4gKiAgICAgY2hhbm5lbCBvbmNlIHRoYXQgcmVjZWl2ZSBpcyBjb21wbGV0ZWQuIElmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRob3V0IGFcbiAqICAgICB2YWx1ZSBiZWluZyBtYWRlIGF2YWlsYWJsZSwgdGhpcyB3aWxsIHJlc29sdmUgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICovXG5mdW5jdGlvbiByZWN2KGNoYW5uZWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHJlY3ZBc3luYyhjaGFubmVsLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVjZWl2ZXMgYSB2YWx1ZSBmcm9tIGEgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIGEgdmFsdWVcbiAqIGJlY29tZXMgYXZhaWxhYmxlIHRvIGJlIHJlY2VpdmVkIChvciB1bnRpbCB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aCBubyBtb3JlXG4gKiB2YWx1ZXMgb24gaXQgdG8gYmUgcmVjZWl2ZWQpLiBJZiB0aGUgcmVjZWl2ZWQgdmFsdWUgaXMgYW4gZXJyb3Igb2JqZWN0LCB0aGF0XG4gKiBlcnJvciBpcyB0aHJvd24gYXQgdGhhdCBwb2ludC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYXN5bmMgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBJdCBmdW5jdGlvbnMgaW4gZXZlcnkgd2F5IGxpa2UgYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gICpleGNlcHQqIGluIHRoZVxuICogY2FzZSB0aGF0IHRoZSB2YWx1ZSBvbiB0aGUgY2hhbm5lbCBpcyBhbiBvYmplY3QgdGhhdCBoYXMgYEVycm9yLnByb3RvdHlwZWAgaW5cbiAqIGl0cyBwcm90b3R5cGUgY2hhaW4gKGFueSBidWlsdC1pbiBlcnJvciwgYW55IHByb3Blcmx5LWNvbnN0cnVjdGVkIGN1c3RvbVxuICogZXJyb3IpLiBJZiB0aGF0IGhhcHBlbnMsIHRoZSBlcnJvciBpcyB0aHJvd24sIHdoaWNoIHdpbGwgY2F1c2UgdGhlIHJldHVybmVkXG4gKiBwcm9taXNlIHRvIGJlIHJlamVjdGVkIHdpdGggdGhlIGVycm9yLiBJdCBjYW4gdGhlbiBiZSBoYW5kbGVkIHVwIHRoZSBwcm9taXNlXG4gKiBjaGFpbiBsaWtlIGFueSBvdGhlciByZWplY3RlZCBwcm9taXNlLlxuICpcbiAqIGB0YWtlT3JUaHJvd2AgaXMgcm91Z2hseSBlcXVpdmFsZW50IHRvOlxuICpcbiAqIGBgYFxuICogY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KGNoKTtcbiAqIGlmIChFcnJvci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih2YWx1ZSkpIHtcbiAqICAgdGhyb3cgdmFsdWU7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIHRoZSB2YWx1ZSB0YWtlbiBmcm9tIHRoZVxuICogICAgIGNoYW5uZWwgb25jZSB0aGF0IHRha2UgaXMgY29tcGxldGVkLiBJZiB0aGUgY2hhbm5lbCBjbG9zZXMgd2l0aG91dCBhXG4gKiAgICAgdmFsdWUgYmVpbmcgbWFkZSBhdmFpbGFibGUsIHRoaXMgd2lsbCByZXNvbHZlIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC4gSWYgdGhlIHRha2VuIHZhbHVlIGlzIGFuIGVycm9yLCB0aGVcbiAqICAgICBwcm9taXNlIHdpbGwgaW5zdGVhZCBiZSByZWplY3RlZCB3aXRoIHRoZSBlcnJvciBvYmplY3QgYXMgdGhlIHJlYXNvbi5cbiAqL1xuZnVuY3Rpb24gcmVjdk9yVGhyb3coY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlY3ZBc3luYyhjaGFubmVsLCByZXN1bHQgPT4ge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZi5jYWxsKEVycm9yLnByb3RvdHlwZSwgcmVzdWx0KSkge1xuICAgICAgICByZWplY3QocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBjaGFubmVsLCBpZiBpdCBpc24ndCBhbHJlYWR5IGNsb3NlZC4gVGhpcyBpbW1lZGlhdGVseSByZXR1cm5zIGFueVxuICogYnVmZmVyZWQgdmFsdWVzIHRvIHBlbmRpbmcgcmVjZWl2ZXMuIElmIHRoZXJlIGFyZSBubyBidWZmZXJlZCB2YWx1ZXMgKG9yIGlmXG4gKiB0aGV5J3ZlIGFscmVhZHkgYmVlbiB0YWtlbiBieSBvdGhlciByZWNlaXZlcyksIHRoZW4gYWxsIG9mIHRoZSByZXN0IG9mIHRoZVxuICogcmVjZWl2ZXMgYXJlIGNvbXBsZXRlZCB3aXRoIHRoZSB2YWx1ZSBvZiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICogQW55IHBlbmRpbmcgc2VuZHMgYXJlIGNvbXBsZXRlZCB3aXRoIHRoZSB2YWx1ZSBvZiBgZmFsc2VgLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgYnVmZmVyIGlzIG5vdCBlbXB0aWVkIGlmIHRoZXJlIGFyZSBzdGlsbCB2YWx1ZXMgcmVtYWluaW5nIGFmdGVyXG4gKiBhbGwgb2YgdGhlIHBlbmRpbmcgcmVjZWl2ZXMgaGF2ZSBiZWVuIGhhbmRsZWQuIFRoZSBjaGFubmVsIHdpbGwgc3RpbGwgcHJvdmlkZVxuICogdGhvc2UgdmFsdWVzIHRvIGFueSBmdXR1cmUgcmVjZWl2ZXMsIHRob3VnaCBubyBuZXcgdmFsdWVzIG1heSBiZSBhZGRlZCB0byB0aGVcbiAqIGNoYW5uZWwuIE9uY2UgdGhlIGJ1ZmZlciBpcyBkZXBsZXRlZCwgYW55IGZ1dHVyZSByZWNlaXZlcyB3aWxsIHJldHVyblxuICogYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gYmUgY2xvc2VkLlxuICovXG5mdW5jdGlvbiBjbG9zZShjaGFubmVsKSB7XG4gIGNsb3NlSW1wbChjaGFubmVsKTtcbn1cblxuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBERUZBVUxULFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbmRBc3luYyxcbiAgcmVjdkFzeW5jLFxuICBzZWxlY3RBc3luYyxcbiAgc2VuZCxcbiAgcmVjdixcbiAgcmVjdk9yVGhyb3csXG4gIHNlbGVjdCxcbiAgY2xvc2UsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59O1xuXG4vKipcbiAqIFVzZWQgYnkgY2hhbm5lbHMgdG8gdHJhY2sgZXhlY3V0aW9uIG9mIG9wZXJhdGlvbnMgKGBzZW5kYCwgYHJlY3ZgLCBhbmRcbiAqIGBzZWxlY3RgKS4gVGhleSBwcm92aWRlIHR3byBwaWVjZXMgb2YgaW5mb3JtYXRpb246IHRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW5cbiAqIGEgYHNlbmRgIG9yIGByZWN2YCB1bmJsb2NrcyAoYmVjYXVzZSBhIHZhbHVlIGdpdmVuIHRvIHNlbmQgaGFzIGJlZW4gcmVjZWl2ZWQsXG4gKiBvciBhIGByZWN2YCBoYXMgYWNjZXB0ZWQgYSB2YWx1ZSB0aGF0IGhhcyBiZWVuIHNlbnQpIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGVcbiAqIGhhbmRsZXIgaXMgc3RpbGwgYWN0aXZlLlxuICpcbiAqIFRoZSBmdW5jdGlvbiBpcyBhIGNhbGxiYWNrIHRoYXQgYWN0dWFsbHkgZGVmaW5lcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAgLyBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgL1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kQXN5bmN8c2VuZEFzeW5jfWAgL1xuICogYHtAbGluayBtb2R1bGU6Y3NwLnJlY3ZBc3luY3xyZWN2QXN5bmN9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YDogd2hpbGUgdGhlIHVuYmxvY2tlZCBjYWxscyB1c2VcbiAqIHRoZSBjYWxsYmFjayBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLCBgc2VuZGAsIGByZWN2YCwgYW5kIGBzZWxlY3RgIHNpbXBseVxuICogY29udGludWUgdGhlIHByb2Nlc3Mgd2hlcmUgaXQgbGVmdCBvZmYuIChUaGlzIGlzIHdoeSBgc2VuZGAsIGByZWN2YCwgYW5kXG4gKiBgc2VsZWN0YCBvbmx5IHdvcmsgaW5zaWRlIGBhc3luY2AgZnVuY3Rpb25zIHdpdGggYGF3YWl0YCBpZiB0aGUgcmV0dXJuIHZhbHVlXG4gKiBpcyBuZWVkZWQsIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZXJlJ3Mgbm8gcHJvY2VzcyB0byBjb250aW51ZS4pXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBwcm92aWRlZCBhcyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgY29tbWl0YCBtZXRob2QuIENhbGxpbmdcbiAqIGBjb21taXRgIGhhcyBubyBleHRyYSBlZmZlY3Qgd2l0aCBgc2VuZGAgYW5kIGByZWN2YCBvcGVyYXRpb25zLCBidXQgZm9yXG4gKiBgc2VsZWN0YCwgaXQgYWxzbyBtYXJrcyB0aGUgaGFuZGxlciBhcyBubyBsb25nZXIgYmVpbmcgYWN0aXZlLiBUaGlzIG1lYW5zXG4gKiB0aGF0IG9ubHkgb25lIG9mIHRoZSBvcGVyYXRpb25zIHBhc3NlZCB0byBzZWxlY3QgY2FuIGJlIGNvbXBsZXRlZCwgYmVjYXVzZVxuICogYWZ0ZXIgdGhlIGZpcnN0IG9uZSwgdGhlIGhhbmRsZXIgaXMgbm8gbG9uZ2VyIGFjdGl2ZSBhbmQgd2lsbCBub3QgYmUgYWxsb3dlZFxuICogdG8gcHJvY2VzcyBhIHNlY29uZCBvcGVyYXRpb24uXG4gKlxuICogSWYgYSBgc2VuZGAgb3IgYHJlY3ZgIChvciBlcXVpdmFsZW50IGBzZWxlY3RgIG9wZXJhdGlvbikgY2Fubm90IGJlXG4gKiBpbW1lZGlhdGVseSBjb21wbGV0ZWQgYmVjYXVzZSB0aGVyZSBpc24ndCBhIGNvcnJlc3BvbmRpbmcgcGVuZGluZyBgcmVjdmAgb3JcbiAqIGBzZW5kYCwgdGhlIGhhbmRsZXIgaXMgcXVldWVkIHRvIGJlIHJ1biB3aGVuIGEgbmV3IGByZWN2YCBvciBgc2VuZGAgYmVjb21lc1xuICogYXZhaWxhYmxlLlxuICpcbiAqIEB0eXBlZGVmIEhhbmRsZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlIFdoZXRoZXIgb3Igbm90IHRoZSBvcGVyYXRpb24gaXMgc3RpbGwgYWN0aXZlLiBBblxuICogICAgIGluYWN0aXZlIG9wZXJhdGlvbiBpcyBub3Qgc2VydmljZWQgYW5kIHdpbGwgYmUgY2xlYXJlZCBmcm9tIHRoZSBxdWV1ZSBvblxuICogICAgIHRoZSBuZXh0IGRpcnR5IG9wZXJhdGlvbiBwdXJnZS5cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNvbW1pdCBNYXJrcyB0aGUgaGFuZGxlciBhcyBpbmFjdGl2ZSAoc28gaXQgZG9lc24ndCBydW5cbiAqICAgICB0d2ljZSkgYW5kIHJldHVybnMgdGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuIHRoZSBvcGVyYXRpb24gY29tcGxldGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gcnVuIHdoZW4gYSBgc2VuZGAgb3IgYHJlY3ZgIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKlxuICogQGNhbGxiYWNrIEhhbmRsZXJDYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgcHJvdmlkZWQgYnkgdGhlIGNoYW5uZWwuIEluIGEgYHJlY3ZgLCB0aGlzIGlzIHRoZVxuICogICAgIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIEluIGEgYHNlbmRgLCB0aGlzIGlzIGB0cnVlYCBmb3IgYVxuICogICAgIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQgYmVmb3JlIHRoZSBzZW5kIGNhblxuICogICAgIGNvbXBsZXRlLlxuICogQHByaXZhdGVcbiAqL1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IGJveCwgaGFuZGxlU2VuZCwgaGFuZGxlUmVjdiwgaXNCb3ggfSBmcm9tIFwiLi9oYW5kbGVyXCI7XG5cbi8qKlxuICogVGhlIG5hbWUgb2YgdGhlIGNoYW5uZWwgcmV0dXJuZWQgZnJvbSBgYXdhaXRcbiAqIHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YCBvciBzZW50IHRvIHRoZSBjYWxsYmFjayBpblxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgd2hlbiB0aGUgZGVmYXVsdCBpcyByZXR1cm5lZCBhc1xuICogaXRzIHZhbHVlLlxuICpcbiAqIFRoaXMgb25seSBoYXBwZW5zIHdoZW4gYW4gYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9IC9cbiAqIHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgY2FsbCBpcyBwZXJmb3JtZWQsIGFsbCBvcGVyYXRpb25zXG4gKiBhcmUgaW5pdGlhbGx5IGJsb2NraW5nLCBhbmQgYSBgZGVmYXVsdGAgb3B0aW9uIGlzIHNlbnQuIFRoZSBpbW1lZGlhdGVcbiAqIHJlc3BvbnNlIGluIHRoYXQgc2l0dWF0aW9uIGlzIGB7IHZhbHVlOiBvcHRpb25zLmRlZmF1bHQsIGNoYW5uZWw6IERFRkFVTFQgfWAuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IERFRkFVTFQgPSBTeW1ib2woXCJERUZBVUxUXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaGFuZGxlciB1c2VkIGZvciBgc2VsZWN0YCBvcGVyYXRpb25zLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9jaGFubmVsLkJveH0gYWN0aXZlIEEgYm94ZWQgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZVxuICogICAgIGhhbmRsZXIgaXMgdmFsaWQuIFRoaXMgaXMgYSBib3hlZCB2YWx1ZSBiZWNhdXNlIHRoZSBzZWxlY3QtaGFuZGxpbmcgY29kZVxuICogICAgIG5lZWRzIHRvIG1hbmlwdWxhdGUgaXQgZGlyZWN0bHkuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyQ2FsbGJhY2t9IGZuIFRoZSBjYWxsYmFjayB0byBiZSBydW4gd2hlblxuICogICAgIChhbmQgaWYpIHRoZSBvcGVyYXRpb24gY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJ9IFRoZSBuZXcgaGFuZGxlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEhhbmRsZXIoYWN0aXZlLCBmbikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYWN0aXZlOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmUudmFsdWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbW1pdDoge1xuICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSByYW5kb21seSBzaHVmZmxlZCBhcnJheSBjb250YWluaW5nIG9uZSBvZiBlYWNoIGludGVnZXIgdmFsdWUgZnJvbVxuICogYDBgIHRvIGFuIHVwcGVyIGxpbWl0LiBJdCBpcyB1c2VkIHRvIHJhbmRvbWx5IHNlbGVjdCBhIGNoYW5uZWwgdG8gYmUgYWN0aXZlXG4gKiB3aGVuIG11bHRpcGxlcyB1bmJsb2NrIGluIGEgYHNlbGVjdGAgb3BlcmF0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bnVtYmVyfSB1cHBlciBUaGUgdXBwZXIgbGltaXQgb2YgdGhlIGFycmF5IHZhbHVlcywgZXhjbHVzaXZlLlxuICogQHJldHVybiB7bnVtYmVyW119IEFuIGFycmF5IG9mIGludGVnZXJzIGZyb20gYDBgIHRvIGB1cHBlciAtIDFgLCBzaHVmZmxlZFxuICogICAgIGludG8gYSByYW5kb20gb3JkZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByYW5kb21BcnJheSh1cHBlcikge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IHVwcGVyOyBrKyspIHtcbiAgICBhcnJheS5wdXNoKGspO1xuICB9XG4gIGZvciAobGV0IGogPSB1cHBlciAtIDE7IGogPiAwOyBqLS0pIHtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGogKyAxKSk7XG4gICAgY29uc3QgdGVtcCA9IGFycmF5W2pdO1xuICAgIGFycmF5W2pdID0gYXJyYXlbaV07XG4gICAgYXJyYXlbaV0gPSB0ZW1wO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHJlc3VsdCB0aGF0IGNvbWVzIGZyb20gYHNlbGVjdGAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAdHlwZWRlZiBTZWxlY3RSZXN1bHRcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgSWYgdGhlIGBzZWxlY3RgIG9wZXJhdGlvbiByZXN1bHRlZCBpbiBhIHJlY2VpdmUsIHRoaXMgaXNcbiAqICAgICB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSWYgaXQgcmVzdWx0ZWQgaW4gYSBzZW5kLCB0aGlzIGlzXG4gKiAgICAgYHRydWVgIGZvciBhIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBjbG9zZWQgZmlyc3QuXG4gKiBAcHJvcGVydHkge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZSBzZWxlY3RlZFxuICogICAgIG9wZXJhdGlvbiBoYXBwZW5lZC5cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2VsZWN0IHJlc3VsdCBmcm9tIGl0cyBjb21wb25lbnQgcHJvcGVydGllcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0geyp9IHZhbHVlIElmIHRoZSBgc2VsZWN0YCBvcGVyYXRpb24gcmVzdWx0ZWQgaW4gYSByZWNlaXZlLCB0aGlzIGlzIHRoZVxuICogICAgIHZhbHVlIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwuIElmIGl0IHJlc3VsdGVkIGluIGEgc2VuZCwgdGhpcyBpcyBgdHJ1ZWBcbiAqICAgICBmb3IgYSBzdWNjZXNzZnVsIHNlbmQgYW5kIGBmYWxzZWAgaWYgdGhlIGNoYW5uZWwgY2xvc2VkIGZpcnN0LlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdXBvbiB3aGljaCB0aGUgc2VsZWN0ZWRcbiAqICAgICBvcGVyYXRpb24gaGFwcGVuZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gVGhlIHByb3BlcnRpZXMgd3JhcHBlZCBpbnRvIGFuIG9iamVjdCBmb3JcbiAqICAgICBvdXRwdXQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZWxlY3RSZXN1bHQodmFsdWUsIGNoYW5uZWwpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgeyB2YWx1ZSwgY2hhbm5lbCB9KTtcbn1cblxuLyoqXG4gKiBDb21wbGV0ZXMgdGhlIGZpcnN0IG9wZXJhdGlvbiBhbW9uZyB0aGUgcHJvdmlkZWQgb3BlcmF0aW9ucyB0aGF0IGNvbWVzXG4gKiBhdmFpbGFibGUsIHdpdGhvdXQgYmxvY2tpbmcuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IGEgY2FsbCB0byBgc2VsZWN0QXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YFxuICogZXhwcmVzc2lvbiwgYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIHByb2Nlc3MuIFJhdGhlciB0aGFuXG4gKiBibG9ja2luZyB1bnRpbCBhbiBvcGVyYXRpb24gY29tcGxldGVzLCB0aGlzIG9uZSByZXR1cm5zIGltbWVkaWF0ZWx5IGFuZCB0aGVuXG4gKiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIGFzIHNvb24gYXMgb25lIG9mIHRoZSBzdXBwbGllZCBvcGVyYXRpb25zXG4gKiBjb21wbGV0ZXMuIEl0IGNhbiBiZSByZWdhcmRlZCBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gdXNlcyBhbiBvcGVyYXRpb25zIGxpc3QgdGhhdCdzIGlkZW50aWNhbCB0byB0aGUgb25lIHVzZWQgYnlcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAuIEl0J3MgYW4gYXJyYXkgb2YgdmFsdWVzOyBpZiBhIHZhbHVlIGlzIGFcbiAqIGNoYW5uZWwsIHRoZW4gdGhhdCBvcGVyYXRpb24gaXMgYSB0YWtlIG9uIHRoYXQgY2hhbm5lbCwgd2hpbGUgaWYgaXQncyBhXG4gKiB0d28tZWxlbWVudCBhcnJheSBvZiBjaGFubmVsIGFuZCB2YWx1ZSwgdGhlbiB0aGF0IG9wZXJhdGlvbiBpcyBhIHB1dCBvZiB0aGF0XG4gKiB2YWx1ZSBvbnRvIHRoYXQgY2hhbm5lbC4gQWxsIG9wdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIGFyZSBhbHNvIGF2YWlsYWJsZSBoZXJlLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGluIHRoaXMgY2FzZSBpcyBhbiBvYmplY3RcbiAqIHdpdGggYHZhbHVlYCBhbmQgYGNoYW5uZWxgIHByb3BlcnRpZXMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7T2JqZWN0W119IG9wZXJhdGlvbnMgQSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzIHRoYXQgY29ycmVzcG9uZCB0byByZWN2XG4gKiAgICAgYW5kIHNlbmQgb3BlcmF0aW9ucy4gQSByZWN2IG9wZXJhdGlvbiBpcyBzaWduaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzXG4gKiAgICAgYSBjaGFubmVsICh3aGljaCBpcyB0aGUgY2hhbm5lbCB0byBiZSByZWNlaXZlZCBmcm9tKS4gQSBzZW5kIG9wZXJhdGlvbiBpc1xuICogICAgIHNwZWNpZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXMgaXRzZWxmIGEgdHdvLWVsZW1lbnQgYXJyYXksIHdoaWNoIGhhcyBhXG4gKiAgICAgY2hhbm5lbCBmb2xsb3dlZCBieSBhIHZhbHVlICh3aGljaCBpcyB0aGUgY2hhbm5lbCBhbmQgdmFsdWUgdG8gYmUgc2VudCkuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0Q2FsbGJhY2t9IGNhbGxiYWNrIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGludm9rZWQgd2hlblxuICogICAgIG9uZSBvZiB0aGUgb3BlcmF0aW9ucyBjb21wbGV0ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIEFuIG9wdGlvbmFsIG9iamVjdCB3aGljaCBjYW4gY2hhbmdlIHRoZSBiZWhhdmlvclxuICogICAgIG9mIGBzZWxlY3RBc3luY2AgdGhyb3VnaCB0d28gcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpb3JpdHk9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgcHJpb3JpdHkgb2ZcbiAqICAgICBvcGVyYXRpb25zIHRvIGNvbXBsZXRlIHdoZW4gbW9yZSB0aGFuIG9uZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgaXMgYVxuICogICAgIHByaW9yaXR5IGFjY29yZGluZyB0byBwb3NpdGlvbiB3aXRoaW4gdGhlIG9wZXJhdGlvbnMgYXJyYXkgKGVhcmxpZXJcbiAqICAgICBwb3NpdGlvbnMgaGF2ZSB0aGUgaGlnaGVyIHByaW9yaXR5KS4gSWYgYGZhbHNlYCBvciBub3QgcHJlc2VudCwgdGhlXG4gKiAgICAgcHJpb3J0eSBvZiBvcGVyYXRpb24gY29tcGxldGlvbiBpcyByYW5kb20uXG4gKiBAcGFyYW0geyp9IFtvcHRpb25zLmRlZmF1bHRdIElmIHNldCBhbmQgYWxsIG9mIHRoZSBvcGVyYXRpb25zIGluaXRpYWxseVxuICogICAgIGJsb2NrLCB0aGUgYHNlbGVjdEFzeW5jYCBjYWxscyBpdHMgY2FsbGJhY2sgaW1tZWRpYXRlbHkgd2l0aCB0aGUgdmFsdWUgb2ZcbiAqICAgICB0aGlzIG9wdGlvbiAodGhlIGNoYW5uZWwgd2lsbCBiZSBge0BsaW5rIG1vZHVsZTpjc3AuREVGQVVMVHxERUZBVUxUfSlgLlxuICogICAgIElmIG5vdCBzZXQsIHRoZSBgc2VsZWN0QXN5bmNgIGNhbGwgd2lsbCBub3QgY2FsbCBpdHMgY2FsbGJhY2sgdW50aWwgb25lXG4gKiAgICAgb2YgdGhlIG9wZXJhdGlvbnMgY29tcGxldGVzIGFuZCB0aGF0IHZhbHVlIGFuZCBjaGFubmVsIHdpbGwgYmUgdGhlIG9uZXNcbiAqICAgICByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0QXN5bmMob3BzLCBjYWxsYmFjayA9ICgpID0+IHt9LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgY291bnQgPSBvcHMubGVuZ3RoO1xuICBpZiAoY291bnQgPT09IDApIHtcbiAgICB0aHJvdyBFcnJvcihcInNlbGVjdCBjYWxsZWQgd2l0aCBubyBvcGVyYXRpb25zXCIpO1xuICB9XG5cbiAgY29uc3QgcHJpb3JpdHkgPSAhIW9wdGlvbnMucHJpb3JpdHk7XG4gIGNvbnN0IGluZGljZXMgPSBwcmlvcml0eSA/IFtdIDogcmFuZG9tQXJyYXkoY291bnQpO1xuXG4gIGNvbnN0IGFjdGl2ZSA9IGJveCh0cnVlKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpIHtcbiAgICByZXR1cm4gc2VsZWN0SGFuZGxlcihhY3RpdmUsIHZhbHVlID0+IHtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdCh2YWx1ZSwgY2hhbm5lbCkpO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IHJlc3VsdDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAvLyBDaG9vc2UgYW4gb3BlcmF0aW9uLiBJZiBgcHJpb3JpdHlgIGlzIHRydWUgdGhlbiBpdCdzIHRoZSBuZXh0IGluZGV4LFxuICAgIC8vIG90aGVyd2lzZSBpdCdzIHJhbmRvbVxuICAgIGNvbnN0IG9wID0gb3BzW3ByaW9yaXR5ID8gaSA6IGluZGljZXNbaV1dO1xuICAgIGxldCBjaGFubmVsLCB2YWx1ZTtcblxuICAgIC8vIEFwcGx5IGV2ZXJ5IG9wZXJhdGlvbiB0byBpdHMgY2hhbm5lbCwgb25lIGF0IGEgdGltZVxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wKSkge1xuICAgICAgW2NoYW5uZWwsIHZhbHVlXSA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlU2VuZChjaGFubmVsLCB2YWx1ZSwgY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYW5uZWwgPSBvcDtcbiAgICAgIHJlc3VsdCA9IGhhbmRsZVJlY3YoY2hhbm5lbCwgY3JlYXRlU2VsZWN0SGFuZGxlcihjaGFubmVsKSk7XG4gICAgfVxuXG4gICAgLy8gV2UgY2hlY2sgZm9yIGJveCBoZXJlIGJlY2F1c2UgYSBib3ggZnJvbSBhIGNoYW5uZWwgaW5kaWNhdGVzIHRoYXQgdGhlXG4gICAgLy8gdmFsdWUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlICh0aGF0IHRoZXJlIGlzIG5vIG5lZWQgdG8gYmxvY2sgdG8gZ2V0IHRoZVxuICAgIC8vIHZhbHVlKS4gSWYgdGhpcyBoYXBwZW5zLCB3ZSBleGVjdXRlIHRoZSBjYWxsYmFjayBpbW1lZGlhdGVseSB3aXRoIHRoYXRcbiAgICAvLyB2YWx1ZSBhbmQgY2hhbm5lbCBhbmQgc3RvcCBxdWV1ZWluZyBvdGhlciBvcGVyYXRpb25zLlxuICAgIGlmIChpc0JveChyZXN1bHQpKSB7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQocmVzdWx0LnZhbHVlLCBjaGFubmVsKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBJZiBub25lIG9mIHRoZSBvcGVyYWV0aW9ucyBpbW1lZGlhdGVseSByZXR1cm5lZCB2YWx1ZXMgKHRoZXkgYXJlIGFsbFxuICAvLyBibG9ja2VkKSwgYW5kIHdlIGhhdmUgc2V0IGEgZGVmYXVsdCBjaGFubmVsIG9wdGlvbiwgdGhlbiByZXR1cm4gdGhlIHZhbHVlXG4gIC8vIGlmIHRoZSBkZWZhdWx0IGNoYW5uZWwgcmF0aGVyIHRoYW4gd2FpdGluZyBmb3IgdGhlIHF1ZXVlZCBvcGVyYXRpb25zIHRvXG4gIC8vIGNvbXBsZXRlLlxuICBpZiAoXG4gICAgIWlzQm94KHJlc3VsdCkgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgXCJkZWZhdWx0XCIpXG4gICkge1xuICAgIGlmIChhY3RpdmUudmFsdWUpIHtcbiAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KG9wdGlvbnMuZGVmYXVsdCwgREVGQVVMVCkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvbXBsZXRlcyB0aGUgZmlyc3Qgb3BlcmF0aW9uIGFtb25nIHRoZSBwcm92aWRlZCBvcGVyYXRpb25zIHRoYXQgY29tZXNcbiAqIGF2YWlsYWJsZSwgYmxvY2tpbmcgdGhlIHByb2Nlc3MgdW50aWwgdGhlbi5cbiAqXG4gKiBgb3BlcmF0aW9uc2AgaXMgYW4gYXJyYXkgd2hvc2UgZWxlbWVudHMgbXVzdCBiZSBjaGFubmVscyBvciB0d28tZWxlbWVudFxuICogc3ViLWFycmF5cyBvZiBjaGFubmVscyBhbmQgdmFsdWVzLCBpbiBhbnkgY29tYmluYXRpb24uIEFuIG9wZXJhdGlvbiB0aGF0IGlzIGFcbiAqIGNoYW5uZWwgaXMgYSB0YWtlIG9wZXJhdGlvbiBvbiB0aGF0IGNoYW5uZWwuIEFuIG9wZXJhdGlvbiB0aGF0IGlzIGFcbiAqIHR3by1lbGVtZW50IGFycmF5IGlzIGEgcHV0IG9wZXJhdGlvbiBvbiB0aGF0IGNoYW5uZWwgdXNpbmcgdGhhdCB2YWx1ZS5cbiAqIEV4YWN0bHkgb25lIG9mIHRoZXNlIG9wZXJhdGlvbnMgd2lsbCBjb21wbGV0ZSwgYW5kIGl0IHdpbGwgYmUgdGhlIGZpcnN0XG4gKiBvcGVyYXRpb24gdGhhdCB1bmJsb2Nrcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYGFzeW5jYCBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uIGlmIHRoZSByZXR1cm4gdmFsdWUgaXMgbmVlZGVkLlxuICpcbiAqIFdoZW4gYHNlbGVjdGAgaXMgY29tcGxldGVkIGFuZCBpdHMgcHJvY2VzcyB1bmJsb2NrcywgaXRzIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZXZhbHVhdGVzIHRvIGFuIG9iamVjdCBvZiB0d28gcHJvcGVydGllcy4gVGhlIGB2YWx1ZWAgcHJvcGVydHkgYmVjb21lc1xuICogZXhhY3RseSB3aGF0IHdvdWxkIGhhdmUgYmVlbiByZXR1cm5lZCBieSB0aGUgZXF1aXZhbGVudCBgYXdhaXQgcHV0YCBvciBgYXdhaXRcbiAqIHRha2VgIG9wZXJhdGlvbjogYSBib29sZWFuIGluIHRoZSBjYXNlIG9mIGEgcHV0LCBvciB0aGUgdGFrZW4gdmFsdWUgaW4gdGhlXG4gKiBjYXNlIG9mIGEgdGFrZS4gVGhlIGBjaGFubmVsYCBwcm9wZXJ0eSBpcyBzZXQgdG8gdGhlIGNoYW5uZWwgd2hlcmUgdGhlXG4gKiBvcGVyYXRpb24gYWN0dWFsbHkgdG9vayBwbGFjZS4gVGhpcyB3aWxsIGJlIGVxdWl2YWxlbnQgdG8gdGhlIGNoYW5uZWwgaW4gdGhlXG4gKiBgb3BlcmF0aW9uc2AgYXJyYXkgd2hpY2ggY29tcGxldGVkIGZpcnN0LCBhbGxvd2luZyB0aGUgcHJvY2VzcyB0byB1bmJsb2NrLlxuICpcbiAqIElmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgb3BlcmF0aW9uIGFscmVhZHkgYXZhaWxhYmxlIHRvIGNvbXBsZXRlIHdoZW4gdGhlXG4gKiBjYWxsIHRvIGBzZWxlY3RgIGlzIG1hZGUsIHRoZSBvcGVyYXRpb24gd2l0aCB0aGUgaGlnaGVzdCBwcmlvcml0eSB3aWxsIGJlIHRoZVxuICogb25lIHRvIGNvbXBsZXRlLiBSZWd1bGFybHksIHByaW9yaXR5IGlzIG5vbi1kZXRlcm1pbmlzdGljIChpLmUuLCBpdCdzIHNldFxuICogcmFuZG9tbHkpLiBIb3dldmVyLCBpZiB0aGUgb3B0aW9ucyBvYmplY3QgaGFzIGEgYHByaW9yaXR5YCB2YWx1ZSBzZXQgdG9cbiAqIGB0cnVlYCwgcHJpb3JpdHkgd2lsbCBiZSBhc3NpZ25lZCBpbiB0aGUgb3JkZXIgb2YgdGhlIG9wZXJhdGlvbnMgaW4gdGhlXG4gKiBzdXBwbGllZCBhcnJheS5cbiAqXG4gKiBJZiBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgbXVzdCBibG9jayAoaS5lLiwgdGhlcmUgYXJlIG5vIHBlbmRpbmcgcHV0cyBmb3IgdGFrZVxuICogb3BlcmF0aW9ucywgb3IgdGFrZXMgZm9yIHB1dCBvcGVyYXRpb25zKSwgYSBkZWZhdWx0IHZhbHVlIG1heSBiZSByZXR1cm5lZC5cbiAqIFRoaXMgaXMgb25seSBkb25lIGlmIHRoZXJlIGlzIGEgYGRlZmF1bHRgIHByb3BlcnR5IGluIHRoZSBvcHRpb25zIG9iamVjdCwgYW5kXG4gKiB0aGUgdmFsdWUgb2YgdGhhdCBwcm9wZXJ0eSBiZWNvbWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgYXdhaXQgc2VsZWN0YC4gVGhlXG4gKiBjaGFubmVsIGlzIHNldCB0byB0aGUgc3BlY2lhbCB2YWx1ZSBge0BsaW5rIG1vZHVsZTpjc3AuREVGQVVMVHxERUZBVUxUfWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7b2JqZWN0W119IG9wZXJhdGlvbnMgQSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzIHRoYXQgY29ycmVzcG9uZCB0byByZWN2XG4gKiAgICAgYW5kIHNlbmQgb3BlcmF0aW9ucy4gQSByZWN2IG9wZXJhdGlvbiBpcyBzaWduaWZpZWQgYnkgYW4gZWxlbWVudCB0aGF0IGlzXG4gKiAgICAgYSBjaGFubmVsICh3aGljaCBpcyB0aGUgY2hhbm5lbCB0byBiZSB0YWtlbiBmcm9tKS4gQSBzZW5kIG9wZXJhdGlvbiBpc1xuICogICAgIHNwZWNpZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXMgaXRzZWxmIGEgdHdvLWVsZW1lbnQgYXJyYXksIHdoaWNoIGhhcyBhXG4gKiAgICAgY2hhbm5lbCBmb2xsb3dlZCBieSBhIHZhbHVlICh3aGljaCBpcyB0aGUgY2hhbm5lbCBhbmQgdmFsdWUgdG8gYmUgc2VudCkuXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dIEFuIG9wdGlvbmFsIG9iamVjdCB3aGljaCBjYW4gY2hhbmdlIHRoZSBiZWhhdmlvclxuICogICAgIG9mIGBzZWxlY3RgIHRocm91Z2ggdHdvIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaW9yaXR5PWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIHByaW9yaXR5IG9mXG4gKiAgICAgb3BlcmF0aW9ucyB0byBjb21wbGV0ZSB3aGVuIG1vcmUgdGhhbiBvbmUgaXMgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIGlzIGFcbiAqICAgICBwcmlvcml0eSBhY2NvcmRpbmcgdG8gcG9zaXRpb24gd2l0aGluIHRoZSBvcGVyYXRpb25zIGFycmF5IChlYXJsaWVyXG4gKiAgICAgcG9zaXRpb25zIGhhdmUgdGhlIGhpZ2hlciBwcmlvcml0eSkuIElmIGBmYWxzZWAgb3Igbm90IHByZXNlbnQsIHRoZVxuICogICAgIHByaW9ydHkgb2Ygb3BlcmF0aW9uIGNvbXBsZXRpb24gaXMgcmFuZG9tLlxuICogQHBhcmFtIHsqfSBbb3B0aW9ucy5kZWZhdWx0XSBJZiBzZXQgYW5kIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBpbml0aWFsbHlcbiAqICAgICBibG9jaywgdGhlIGBzZWxlY3RgIGNhbGwgY29tcGxldGVzIGltbWVkaWF0ZWx5IHdpdGggdGhlIHZhbHVlIG9mIHRoaXNcbiAqICAgICBvcHRpb24gKHRoZSBjaGFubmVsIHdpbGwgYmUgYHtAbGluayBtb2R1bGU6Y3NwLkRFRkFVTFR8REVGQVVMVH0pYC4gSWYgbm90XG4gKiAgICAgc2V0LCB0aGUgYHNlbGVjdGAgY2FsbCB3aWxsIGJsb2NrIHVudGlsIG9uZSBvZiB0aGUgb3BlcmF0aW9ucyBjb21wbGV0ZXNcbiAqICAgICBhbmQgdGhhdCB2YWx1ZSBhbmQgY2hhbm5lbCB3aWxsIGJlIHRoZSBvbmVzIHJldHVybmVkLlxuICogQHJldHVybiB7UHJvbWlzZTxtb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdD59IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byBhblxuICogICAgIG9iamVjdCBvZiB0d28gcHJvcGVydGllczogYHZhbHVlYCB3aWxsIGNvbnRhaW4gdGhlIHZhbHVlIHRoYXQgd291bGQgaGF2ZVxuICogICAgIGJlZW4gcmV0dXJuZWQgYnkgdGhlIGNvcnJlc3BvbmRpbmcgYHtAbGluayBtb2R1bGU6Y3NwLnNlbmR8c2VuZH1gIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnJlY3Z8cmVjdn1gIG9wZXJhdGlvbjsgYW5kIGBjaGFubmVsYCB3aWxsIGJlIGFcbiAqICAgICByZWZlcmVuY2UgdG8gdGhlIGNoYW5uZWwgdGhhdCBjb21wbGV0ZWQgdGhlIG9wZXJhdGlvbiB0byBhbGxvdyBgc2VsZWN0YFxuICogICAgIHRvIHVuYmxvY2suXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdChvcHMsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2VsZWN0QXN5bmMob3BzLCByZXNvbHZlLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZWFkIHRoZSB2YWx1ZSBvdXQgb2YgYSBzZWxlY3QgcmVzdWx0LiBUaGlzXG4gKiBmdW5jdGlvbiBpcyBub3QgbmVjZXNzYXJ5IC0gYWZ0ZXIgYWxsLCBpdCdzIGFic29sdXRlbHkgYXMgY29ycmVjdCB0byBzaW1wbHlcbiAqIHVzZSBgcmVzdWx0LnZhbHVlYCBpbnN0ZWFkIG9mIGB2YWx1ZShyZXN1bHQpYCwgYnV0IGl0J3MgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbi1jZW50cmljIEFQSS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgY29taW5nIGZyb20gYSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKiBAcmV0dXJuIHsqfSBUaGUgdmFsdWUgcHJvdmlkZWQgYnkgdGhlIHNlbGVjdCBvcGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIHZhbHVlKHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnZhbHVlO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcmVhZCB0aGUgY2hhbm5lbCBvdXQgb2YgYSBzZWxlY3QgcmVzdWx0LiBUaGlzXG4gKiBmdW5jdGlvbiBpcyBub3QgbmVjZXNzYXJ5IC0gYWZ0ZXIgYWxsLCBpdCdzIGFic29sdXRlbHkgYXMgY29ycmVjdCB0byBzaW1wbHlcbiAqIHVzZSBgcmVzdWx0LmNoYW5uZWxgIGluc3RlYWQgb2YgYGNoYW5uZWwocmVzdWx0KWAsIGJ1dCBpdCdzIHByb3ZpZGVkIGZvclxuICogY29uc2lzdGVuY3kgd2l0aCB0aGUgcmVzdCBvZiB0aGUgZnVuY3Rpb24tY2VudHJpYyBBUEkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IGNvbWluZyBmcm9tIGEgc2VsZWN0XG4gKiAgICAgb3BlcmF0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZSBzZWxlY3Qgb3BlcmF0aW9uXG4gKiAgICAgY29tcGxldGVkLlxuICovXG5mdW5jdGlvbiBjaGFubmVsKHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LmNoYW5uZWw7XG59XG5cbmV4cG9ydCB7IERFRkFVTFQsIHNlbGVjdCwgc2VsZWN0QXN5bmMsIHZhbHVlLCBjaGFubmVsIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBwbGFjZSB3aGVyZSB0aGUgbmV3IEpTIHRhc2tzIGFyZSBhY3R1YWxseSBjcmVhdGVkLiBBIHF1ZXVlIGlzXG4gKiBtYWludGFpbmVkIGZvciB0aGVtLCBhbmQgYXMgZWFjaCBiYXRjaCBvZiB0YXNrcyBhcmUgY29tcGxldGVkLCB0aGUgbmV4dCBvbmVzXG4gKiBydW4uIEFzIGVhY2ggcHJvY2VzcyBydW5zLCBpdCBhZGRzIHRhc2tzIHRvIGJlIHJ1biB0byB0aGUgcXVldWUsIHdoaWNoIGFyZVxuICogZWFjaCBydW4gaW4gdGhlaXIgb3duIEpTIHRhc2suXG4gKlxuICogVGhlIGZ1bmN0aW9uIHRoYXQgc3Bhd25zIHRoZSBuZXcgSlMgdGFzayBkZXBlbmRzIG9uIGVudmlyb25tZW50LiBUaGVcbiAqIGBzZXRJbW1lZGlhdGVgIGZ1bmN0aW9uIGlzIHByZWZlcnJlZCBhcyBpdCdzIHRoZSBmYXN0ZXN0LCBub3Qgd2FpdGluZyBmb3JcbiAqIGV2ZW50IHF1ZXVlcyB0byBlbXB0eSBiZWZvcmUgc3Bhd25pbmcgdGhlIG5ldyBwcm9jZXNzLiBIb3dldmVyLCBpdCBpcyBub3QgSlNcbiAqIHN0YW5kYXJkIGFuZCBjdXJyZW50bHkgb25seSB3b3JrcyBpbiBJRSBhbmQgTm9kZS4gSWYgYHNldEltbWVkaWF0ZWAgaXNuJ3RcbiAqIGF2YWlsYWJsZSwgYW4gYXR0ZW1wdCBpcyBtYWRlIHRvIHVzZSBgTWVzc2FnZUNoYW5uZWxgJ3MgYG9uTWVzc2FnZWAgaXMgdHJpZWRcbiAqIG5leHQuIElmIHRoYXQgaXMgYWxzbyBub3QgYXZhaWxhYmxlLCB0aGVuIGBzZXRUaW1lb3V0YCB3aXRoIGAwYCBkZWxheSBpc1xuICogdXNlZCwgd2hpY2ggaXMgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUgYnV0IHdoaWNoIGlzIHRoZSBsZWFzdCBwZXJmb3JtYW50IG9mIGFsbFxuICogb2YgdGhlIHNvbHV0aW9ucy5cbiAqXG4gKiBUaGVyZSBhcmUgb3RoZXIgcG9zc2liaWxpdGllcyBmb3IgY3JlYXRpbmcgcHJvY2Vzc2VzLCBidXQgdGhleSB3ZXJlIHJlamVjdGVkXG4gKiBhcyBvYnNvbGV0ZSAoYHByb2Nlc3MubmV4dFRpY2tgIGFuZCBgb25yZWFkeXN0YXRlY2hhbmdlYCkgb3IgdW5uZWNlc3NhcnlcbiAqIChgd2luZG93LnBvc3RNZXNzYWdlYCwgd2hpY2ggd29ya3MgbGlrZSBgTWVzc2FnZUNoYW5uZWxgIGJ1dCBkb2Vzbid0IHdvcmsgaW5cbiAqIFdlYiBXb3JrZXJzKS5cbiAqXG4gKiBJdCBpcyBub3RhYmxlIGFuZCBpbXBvcnRhbnQgdGhhdCB3ZSBhY3QgYXMgZ29vZCBjaXRpemVucyBoZXJlLiBUaGlzXG4gKiBkaXNwYXRjaGVyIGlzIGNhcGFibGUgb2YgdGFraW5nIGNvbnRyb2wgb2YgdGhlIEphdmFTY3JpcHQgZW5naW5lIHVudGlsXG4gKiB0aG91c2FuZHMsIG1pbGxpb25zLCBvciBtb3JlIHRhc2tzIGFyZSBoYW5kbGVkLiBCdXQgdGhhdCBjb3VsZCBjYXVzZSB0aGVcbiAqIHN5c3RlbSBldmVudCBsb29wIHRvIGhhdmUgdG8gd2FpdCBhbiB1bmFjY2VwdGFibGUgYW1vdW50IG9mIHRpbWUuIFNvIHdlIGxpbWl0XG4gKiBvdXJzZWx2ZXMgdG8gYSBiYXRjaCBvZiB0YXNrcyBhdCBhIHRpbWUsIGFuZCBpZiB0aGVyZSBhcmUgc3RpbGwgbW9yZSB0byBiZVxuICogcnVuLCB3ZSBsZXQgdGhlIGV2ZW50IGxvb3AgcnVuIGJlZm9yZSB0aGF0IG5leHQgYmF0Y2ggaXMgcHJvY2Vzc2VkLlxuICpcbiAqIFRoZSBkaXNwYXRjaGVyIGlzICoqZ2xvYmFsKiouIFRoZXJlIGlzIGEgc2luZ2xlIGluc3RhbmNlIHRoYXQgcnVucyBmb3IgYWxsXG4gKiBjaGFubmVscyBhbmQgcHJvY2Vzc2VzLiBUaGlzIGlzIHRoZSBvbmx5IGVsZW1lbnQgb2YgdGhlIHN5c3RlbSB0aGF0IHdvcmtzXG4gKiBsaWtlIHRoaXMuXG4gKlxuICogQG1vZHVsZSBjc3AvZGlzcGF0Y2hlclxuICogQHNlZSBtb2R1bGU6Y3NwLmNvbmZpZ1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBxdWV1ZSBhcyBxLFxuICBFTVBUWSxcbiAgY291bnQgYXMgcUNvdW50LFxuICBkZXF1ZXVlLFxuICBlbnF1ZXVlXG59IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5jb25zdCBxdWV1ZSA9IHEoKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYHNldEltbWVkaWF0ZWAgc2hvdWxkIGJlIHVzZWQgdG9cbiAqIGRpc3BhdGNoIHRhc2tzLlxuICpcbiAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgb3B0aW9uLiBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICogYHNldEltbWVkaWF0ZWAsIHRoaXMgZmFsbHMgYmFjayB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfGNvbmZpZ31cbiAqL1xuY29uc3QgU0VUX0lNTUVESUFURSA9IFN5bWJvbChcIlNFVF9JTU1FRElBVEVcIik7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGEgYE1lc3NhZ2VDaGFubmVsYCBzaG91bGQgYmUgdXNlZFxuICogdG8gZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogRm9yIGVudmlyb25tZW50cyB0aGF0IGRvbid0IHN1cHBvcnQgYE1lc3NhZ2VDaGFubmVsYCwgdGhpcyBmYWxscyBiYWNrIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX1RJTUVPVVR8U0VUX1RJTUVPVVR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfGNvbmZpZ31cbiAqL1xuY29uc3QgTUVTU0FHRV9DSEFOTkVMID0gU3ltYm9sKFwiTUVTU0FHRV9DSEFOTkVMXCIpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBgc2V0VGltZW91dGAgc2hvdWxkIGJlIHVzZWQgdG9cbiAqIGRpc3BhdGNoIHRhc2tzLlxuICpcbiAqIFRoaXMgbWV0aG9kIGlzIGFsd2F5cyBhdmFpbGFibGUsIGJ1dCBpdCdzIGFsc28gYWx3YXlzIGxlc3MgZWZmaWNpZW50IHRoYW4gYW55XG4gKiBvdGhlciBtZXRob2QsIHNvIGl0IHNob3VsZCBiZSB1c2VkIGFzIGEgbGFzdCByZXNvcnQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAc2VlICB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBTRVRfVElNRU9VVCA9IFN5bWJvbChcIlNFVF9USU1FT1VUXCIpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBiYXRjaFNpemU6IDEwMjQsXG4gIGRpc3BhdGNoTWV0aG9kOiBTRVRfSU1NRURJQVRFXG59O1xuXG5sZXQgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIoKTtcbmxldCBydW5uaW5nID0gZmFsc2U7XG5sZXQgcXVldWVkID0gdHJ1ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwYXRjaCB0YXNrcy4gVGhlXG4gKiBmdW5jdGlvbiB0aGF0IGlzIGNyZWF0ZWQgZGVwZW5kcyBvbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGBkaXNwYXRjaE1ldGhvZGBcbiAqIHRoYXQgY2FuIGJlIHNldCB3aXRoIGB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfWAuXG4gKlxuICogQHJldHVybiBBIGRpc3BhdGNoZXIgZnVuY3Rpb24gdXNpbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkaXNwYXRjaCBtZXRob2QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVEaXNwYXRjaGVyKCkge1xuICBzd2l0Y2ggKGNhbGNEaXNwYXRjaE1ldGhvZCgpKSB7XG4gICAgLy8gV2UgcHJlZmVyIGBzZXRJbW1lZGlhdGVgIGlmIGl0J3MgYXZhaWxhYmxlLCBidXQgaXQncyBvbmx5IGF2YWlsYWJsZSBpblxuICAgIC8vIE5vZGUgYW5kIHNvbWUgb2xkIGJyb3dzZXJzLlxuICAgIGNhc2UgU0VUX0lNTUVESUFURTpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgc2V0SW1tZWRpYXRlKHByb2Nlc3NUYXNrcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAvLyBNb3N0IG1vZGVybiBicm93c2VycyBpbXBsZW1lbnQgYE1lc3NhZ2VDaGFubmVsYC4gVGhpcyBpcyB0aGUgcHJlZmVycmVkXG4gICAgLy8gbWV0aG9kIGluIGJyb3dzZXIgZW52aXJvbm1lbnRzIHdoZXJlIGBzZXRJbW1lZGlhdGVgIGlzbid0IGF2YWlsYWJsZS5cbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDoge1xuICAgICAgY29uc3QgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSAoKSA9PiBwcm9jZXNzVGFza3MoKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBhbGwgZWxzZSBmYWlscywganVzdCB1c2UgYHNldFRpbWVvdXRgLiBJdCdzIGEgbGl0dGxlIHNsb3dlciB0aGFuIHRoZVxuICAgIC8vIG90aGVyIG1ldGhvZHMsIGJ1dCBpdCdzIGF2YWlsYWJsZSBldmVyeXdoZXJlLlxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQocHJvY2Vzc1Rhc2tzLCAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFjdHVhbCBkaXNwYXRjaCBtZXRob2QgYmFzZWQgb24gdGhlIGN1cnJlbnQgZGlzcGF0Y2ggbWV0aG9kXG4gKiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudGFsIGF2YWlsYWJpbGl0eS5cbiAqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIGlzIHN0b3JlZCByYXcsIHNvIHRoaXMgZnVuY3Rpb24gaXMgbmVjZXNzYXJ5IHRvIHRha2VcbiAqIGVudmlyb25tZW50IGludG8gYWNjb3VudC4gRm9yIGV4YW1wbGUsIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBtb2Rlcm4gYnJvd3NlclxuICogKHdoaWNoIGRvZXMgbm90IGhhdmUgYHNldEltbWVkaWF0ZWApLFxuICogYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gIGNhbiBzdGlsbCBiZSByZWNvcmRlZCBhcyB0aGVcbiAqIGRpc3BhdGNoIG1ldGhvZCwgYnV0IHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAuXG4gKlxuICogQHJldHVybiB7U3ltYm9sfSBUaGUgZGlzcGF0Y2ggbWV0aG9kIHRvIHVzZSBiYXNlZCBvbiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNhbGNEaXNwYXRjaE1ldGhvZCgpIHtcbiAgc3dpdGNoIChvcHRpb25zLmRpc3BhdGNoTWV0aG9kKSB7XG4gICAgY2FzZSBNRVNTQUdFX0NIQU5ORUw6XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBjYXNlIFNFVF9USU1FT1VUOlxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBTRVRfSU1NRURJQVRFO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gTUVTU0FHRV9DSEFOTkVMO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNFVF9USU1FT1VUO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGhlYXJ0IG9mIHRoZSBkaXNwYXRjaCBwcm9jZXNzLCB0aGlzIGlzIHRoZSBmdW5jdGlvbiBydW4gYnkgdGhlIGRpc3BhdGNoXG4gKiBmdW5jdGlvbiBpbiBvcmRlciB0byBhY3R1YWxseSBydW4gcXVldWVkIHRhc2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NUYXNrcygpIHtcbiAgcnVubmluZyA9IHRydWU7XG4gIHF1ZXVlZCA9IGZhbHNlO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCB0YXNrID0gZGVxdWV1ZShxdWV1ZSk7XG4gICAgaWYgKHRhc2sgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0YXNrKCk7XG5cbiAgICBpZiAoY291bnQgPj0gb3B0aW9ucy5iYXRjaFNpemUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb3VudCsrO1xuXG4gICAgcnVubmluZyA9IGZhbHNlO1xuICAgIGlmIChxQ291bnQocXVldWUpKSB7XG4gICAgICBkaXNwYXRjaGVyKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgYXNzaWducyB0aGUgZ2xvYmFsIGRpc3BhdGNoIGZ1bmN0aW9uIGJhc2VkIG9uIGRpc3BhdGNoIG1ldGhvZFxuICogc2V0dGluZyBhbmQgZW52aXJvbm1lbnRhbCBhdmFpbGFiaWxpdHkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0RGlzcGF0Y2hlcigpIHtcbiAgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIoKTtcbn1cblxuLyoqXG4gKiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgQ2hhbmtvIGRpc3BhdGNoZXIuIEFuIG9iamVjdCBsaWtlIHRoaXMgaXMgcmV0dXJuZWRcbiAqIGZyb20gdGhlIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ30gZnVuY3Rpb24sIGFuZCBpdCBtYXkgYWxzbyBiZSBwYXNzZWQgdG8gdGhlXG4gKiBzYW1lIGZ1bmN0aW9uICh0aG91Z2ggZWFjaCBwcm9wZXJ0eSBpcyBvcHRpb25hbCBpbiB0aGF0IGNhc2UpLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IERpc3BhdGNoZXJDb25maWdcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcHJvcGVydHkge251bWJlcn0gYmF0Y2hTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0YXNrcyB0aGF0IHRoZSBkaXNwYXRjaGVyXG4gKiAgICAgd2lsbCBydW4gaW4gYSBzaW5nbGUgYmF0Y2guXG4gKiBAcHJvcGVydHkge1N5bWJvbH0gZGlzcGF0Y2hNZXRob2QgVGhlIG1ldGhvZCB1c2VkIHRvIGRpc3BhdGNoIGEgcHJvY2VzcyBpbnRvXG4gKiAgICAgYSBzZXBhcmF0ZSBsaW5lIG9mIGV4ZWN1dGlvbi5cbiAqL1xuXG4vKipcbiAqIFNldHMgb25lIG9yIG1vcmUgb2YgdGhlIGRpc3BhdGNoZXIgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICpcbiAqIFRoaXMgaXMgYWR2YW5jZWQgc2V0dGluZyBmb3IgdGhlIGRpc3BhdGNoZXIgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgcXVldWVpbmdcbiAqIHVwIGNoYW5uZWwgb3BlcmF0aW9ucyBhbmQgcHJvY2Vzc2VzLiBJdCBpcyBsaWtlbHkgdGhhdCB0aGlzIGZ1bmN0aW9uIHdpbGxcbiAqIG5ldmVyIG5lZWQgdG8gYmUgY2FsbGVkIGluIG5vcm1hbCBvcGVyYXRpb24uXG4gKlxuICogSWYgYW55IHJlY29nbml6ZWQgb3B0aW9ucyBhcmUgc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zIG9iamVjdCBwYXNzZWQgdG9cbiAqIGBjb25maWdgLCB0aGVuIHRoZSBvcHRpb24gaXMgc2V0IHRvIHRoZSB2YWx1ZSBzZW50IGluLiBQcm9wZXJ0aWVzIHRoYXQgYXJlbid0XG4gKiBhbnkgb2YgdGhlc2Ugb3B0aW9ucyBhcmUgaWdub3JlZCwgYW5kIGFueSBvZiB0aGVzZSBvcHRpb25zIHRoYXQgZG8gbm90IGFwcGVhclxuICogaW4gdGhlIHBhc3NlZCBvYmplY3QgYXJlIGxlZnQgd2l0aCB0aGVpciBjdXJyZW50IHZhbHVlcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQSBtYXBwaW5nIG9mIG9wdGlvbnMgdG8gdGhlaXIgbmV3IHZhbHVlcy4gRXh0cmEgdmFsdWVzXG4gKiAgICAgKHByb3BlcnRpZXMgdGhhdCBhcmUgbm90IG9wdGlvbnMpIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRzLmJhdGNoU2l6ZV0gVGhlIG1heGltdW0gbnVtYmVyIG9mIHRhc2tzIHRoYXQgdGhlXG4gKiAgICAgZGlzcGF0Y2hlciB3aWxsIHJ1biBpbiBhIHNpbmdsZSBiYXRjaCAoaW5pdGlhbGx5LCB0aGlzIGlzIDEwMjQpLiBJZiB0aGVcbiAqICAgICBudW1iZXIgb2YgcGVuZGluZyB0YXNrcyBleGNlZWRzIHRoaXMsIHRoZSByZW1haW5pbmcgYXJlIG5vdCBkaXNjYXJkZWQuXG4gKiAgICAgVGhleSdyZSBzaW1wbHkgcnVuIGFzIHBhcnQgb2YgYW5vdGhlciBiYXRjaCBhZnRlciB0aGUgY3VycmVudCBiYXRjaFxuICogICAgIGNvbXBsZXRlcy5cbiAqIEBwYXJhbSB7U3ltYm9sfSBbb3B0cy5kaXNwYXRjaE1ldGhvZF0gVGhlIG1ldGhvZCB1c2VkIHRvIGRpc3BhdGNoIGEgcHJvY2Vzc1xuICogICAgIGludG8gYSBzZXBhcmF0ZSBsaW5lIG9mIGV4ZWN1dGlvbi4gUG9zc2libGUgdmFsdWVzIGFyZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfSU1NRURJQVRFfFNFVF9JTU1FRElBVEV9YCxcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLCBvclxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfVElNRU9VVHxTRVRfVElNRU9VVH1gLCB3aXRoIHRoZSBpbml0aWFsIGJlaW5nXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gLiBJZiBhIG1ldGhvZCBpcyBzZXQgYnV0XG4gKiAgICAgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGF0IGVudmlyb25tZW50LCB0aGVuIGl0IHdpbGwgc2lsZW50bHkgZmFsbCBiYWNrIHRvXG4gKiAgICAgdGhlIG5leHQgbWV0aG9kIHRoYXQgaXMgYXZhaWxhYmxlLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5EaXNwYXRjaGVyQ29uZmlnfSBUaGUgY29uZmlndXJhdGlvbiBzZXR0aW5ncyBmb3IgdGhlXG4gKiAgICAgZGlzcGF0Y2hlciBhZnRlciBhbnkgbmV3IHZhbHVlcyBoYXZlIGJlZW4gc2V0LlxuICovXG5mdW5jdGlvbiBjb25maWcob3B0cyA9IHt9KSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICBpZiAoa2V5IGluIG9wdHMpIHtcbiAgICAgIG9wdGlvbnNba2V5XSA9IG9wdHNba2V5XTtcblxuICAgICAgaWYgKGtleSA9PT0gXCJkaXNwYXRjaE1ldGhvZFwiKSB7XG4gICAgICAgIHNldERpc3BhdGNoZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFF1ZXVlcyBhIHRhc2sgdG8gYmUgcnVuIGFuZCBzdGFydHMgdGhlIGRpc3BhdGNoIHByb2Nlc3MuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gdGFzayBBIHRhc2sgdG8gYmUgcXVldWVkIGFuZCBydW4gdGhlIG5leHQgdGltZSBhIGJhdGNoIG9mXG4gKiAgICAgdGFza3MgaXMgcnVuLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGlzcGF0Y2godGFzaykge1xuICBlbnF1ZXVlKHF1ZXVlLCB0YXNrKTtcbiAgZGlzcGF0Y2hlcigpO1xufVxuXG5leHBvcnQgeyBTRVRfSU1NRURJQVRFLCBNRVNTQUdFX0NIQU5ORUwsIFNFVF9USU1FT1VULCBjb25maWcsIGRpc3BhdGNoIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBzbWFsbCB1dGlsaXR5IGZ1bmN0aW9ucyB0byBtYWtlIGl0IGVhc2llciB0byBpbnRlcmFjdCB3aXRoIGFzeW5jXG4gKiBmdW5jdGlvbnMgYXMgcHJvY2Vzc2VzLlxuICpcbiAqIEBtb2R1bGUgY3NwL3Byb2Nlc3NcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgdGltZWRDaGFuLCByZWN2QXN5bmMgfSBmcm9tIFwibW9kdWxlcy9jaGFubmVsXCI7XG5cbi8qKlxuICogQmxvY2tzIHRoZSBwcm9jZXNzIGZvciB0aGUgc3BlY2lmaWVkIHRpbWUgKGluIG1pbGxpc2Vjb25kcykgYW5kIHRoZW4gdW5ibG9ja3NcbiAqIGl0LlxuICpcbiAqIFRoaXMgaW1wbGVtZW50cyBhIGRlbGF5LCBidXQgb25lIHRoYXQncyBzdXBlcmlvciB0byBvdGhlciBraW5kcyBvZiBkZWxheXNcbiAqIChgc2V0VGltZW91dGAsIGV0Yy4pIGJlY2F1c2UgaXQgYmxvY2tzIHRoZSBwcm9jZXNzIGFuZCBhbGxvd3MgdGhlIGRpc3BhdGNoZXJcbiAqIHRvIGFsbG93IG90aGVyIHByb2Nlc3NlcyB0byBydW4gd2hpbGUgdGhpcyBvbmUgd2FpdHMuIFRoZSBkZWZhdWx0IGRlbGF5IGlzIDAsXG4gKiB3aGljaCB3aWxsIHJlbGVhc2UgdGhlIHByb2Nlc3MgdG8gYWxsb3cgb3RoZXJzIHRvIHJ1biBhbmQgdGhlbiBpbW1lZGlhdGVseVxuICogcmUtcXVldWUgaXQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGBhc3luY2AgZnVuY3Rpb24gYW5kIGFzIHBhcnQgb2ZcbiAqIGFuIGBhd2FpdGAgZXhwcmVzc2lvbi5cbiAqXG4gKiBXaGVuIHRoaXMgZnVuY3Rpb24gY29tcGxldGVzIGFuZCBpdHMgcHJvY2VzcyB1bmJsb2NrcywgdGhlIGBhd2FpdGAgZXhwcmVzc2lvblxuICogZG9lc24ndCB0YWtlIG9uIGFueSBtZWFuaW5nZnVsIHZhbHVlLiBUaGUgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHNpbXBseVxuICogdG8gZGVsYXksIG5vdCB0byBjb21tdW5pY2F0ZSBhbnkgZGF0YS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheT0wXSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IHRoZSBwcm9jZXNzIHdpbGxcbiAqICAgICBibG9jayBmb3IuIEF0IHRoZSBlbmQgb2YgdGhhdCB0aW1lLCB0aGUgcHJvY2VzcyBpcyBhZ2FpbiBlbGlnaWJsZSB0byBiZVxuICogICAgIHJ1biBieSB0aGUgZGlzcGF0Y2hlci4gSWYgdGhpcyBpcyBtaXNzaW5nIG9yIHNldCB0byBgMGAsIHRoZSBwcm9jZXNzIHdpbGxcbiAqICAgICBjZWRlIGV4ZWN1dGlvbiB0byB0aGUgbmV4dCBvbmUgYnV0IGltbWVkaWF0ZWx5IHJlcXVldWUgaXRzZWxmIHRvIGJlIHJ1blxuICogICAgIGFnYWluLlxuICogQHJldHVybiB7UHJvbWlzZX0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBubyBtZWFuaW5nZnVsIHJlc3VsdCB3aGVuIHRoZVxuICogICAgIHRpbWUgaGFzIGVsYXBzZWQuXG4gKi9cbmZ1bmN0aW9uIHNsZWVwKGRlbGF5ID0gMCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgY29uc3QgY2ggPSB0aW1lZENoYW4oZGVsYXkpO1xuICAgIHJlY3ZBc3luYyhjaCwgcmVzb2x2ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEludm9rZXMgYW4gYXN5bmMgZnVuY3Rpb24gYWN0aW5nIGFzIGEgcHJvY2Vzcy5cbiAqXG4gKiBUaGlzIGlzIHB1cmVseSBhIGNvbnZlbmllbmNlIGZ1bmN0aW9uLCBkcml2ZW4gYnkgdGhlIGZhY3QgdGhhdCBpdCdzIG5lY2Vzc2FyeVxuICogdG8gdXNlIGFuIElJRkUgdG8gaW52b2tlIGFuIGFub255bW91cyBhc3luYyBmdW5jdGlvbiwgYW5kIHRoYXQncyBub3QgdmVyeVxuICogYWVzdGhldGljYWxseSBwbGVhc2luZy4gSXQgZG9lcyBubyBtb3JlIHRoYW4gaW52b2tlIHRoZSBwYXNzZWQgZnVuY3Rpb24sIGJ1dFxuICogdGhhdCBhdCBsZWFzdCByZWxlYXNlcyB1cyBmcm9tIHRoZSBuZWVkIHRvIHB1dCB0aGUgZW1wdHkgcGFyZW50aGVzZXMgYWZ0ZXJcbiAqIHRoZSBmdW5jdGlvbiBkZWZpbml0aW9uLlxuICpcbiAqIEEgbmFtZWQgYXN5bmMgZnVuY3Rpb24gY2FuIHNpbXBseSBiZSBpbnZva2VkICh3aXRob3V0IGJlaW5nIGFuIElJRkUpIGFuZFxuICogZG9lc24ndCBiZW5lZml0IGZyb20gdGhpcyBjb252ZW5pZW5jZS5cbiAqXG4gKiBBbm9ueW1vdXMgcHJvY2VzcyB3aXRob3V0IGBnb2A6XG4gKiBgYGBcbiAqIChhc3luYyAoKSA9PiB7XG4gKiAgIC4uLiBkbyBzb21lIHByb2Nlc3Mgc3R1ZmYgaGVyZSAuLi5cbiAqIH0pKCk7XG4gKiBgYGBcbiAqIEFub255bW91cyBwcm9jZXNzIHdpdGggYGdvYDpcbiAqIGBgYFxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICAuLi4gZG8gc29tZSBwcm9jZXNzIHN0dWZmIGhlcmUgLi4uXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgYXN5bmMgZnVuY3Rpb24gYmVpbmcgdXNlZCBhcyBhIHByb2Nlc3MuXG4gKiBAcGFyYW0gey4uLip9IGFyZ3MgQXJndW1lbnRzIHRoYXQgYXJlIHNlbnQgdG8gdGhlIGFzeW5jIGZ1bmN0aW9uIHdoZW4gaXQnc1xuICogICAgIGludm9rZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBUaGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGUgYXN5bmMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGdvKGZuLCAuLi5hcmdzKSB7XG4gIHJldHVybiBmbiguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBKb2lucyBhbGwgb2YgdGhlIHByb3ZpZGVkIHByb2Nlc3NlcyBpbnRvIGEgc2luZ2xlIHByb2Nlc3MsIHJldHVybmluZyBhXG4gKiBwcm9taXNlIHRoYXQgd3JhcHMgYWxsIG9mIHRoZSBpbmRpdmlkdWFsIHByb2Nlc3NlcycgcHJvbWlzZXMuIFB1dHRpbmcgdGhpcyBpblxuICogYW4gYGF3YWl0YCBzdGF0ZW1lbnQgd2lsbCBibG9jayB1bnRpbCBhbGwgb2YgdGhlIHByb2Nlc3NlcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHsuLi5mdW5jdGlvbn0gZm5zIEFueSBudW1iZXIgb2YgYXN5bmMgZnVuY3Rpb25zIHdob3NlIHJlc29sdXRpb25zIGFyZVxuICogICAgIGJlaW5nIHdhaXRlZCBmb3IuXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGFsbCBvZiB0aGUgcHJvY2Vzc2VzIHByb21pc2VzXG4gKiAgICAgcmVzb2x2ZS5cbiAqL1xuZnVuY3Rpb24gam9pbiguLi5mbnMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGZucyk7XG59XG5cbmV4cG9ydCB7IHNsZWVwLCBnbywgam9pbiB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdmlkZXMgYW4gZWZmaWNpZW50IGdlbmVyYWwtcHVycG9zZSBxdWV1ZS5cbiAqXG4gKiBAbW9kdWxlIGNzcC9xdWV1ZVxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEEgZ2VuZXJhbCBwdXJwb3NlLCBoaWdobHkgZWZmaWNpZW50IEphdmFTY3JpcHQgcXVldWUuIEl0IGlzIGJhY2tlZCBieSBhXG4gKiBKYXZhU2NyaXB0IGFycmF5LCBidXQgaXQgZG9lcyBub3QgdXNlIGB1bnNoaWZ0YCB0byB0YWtlIGVsZW1lbnRzIG9mZiB0aGVcbiAqIGFycmF5IGJlY2F1c2UgdW5zaGlmdCBjYXVzZXMgZWxlbWVudHMgdG8gYmUgY29waWVkIGV2ZXJ5IHRpbWUgaXQncyB1c2VkLlxuICogSW5zdGVhZCwgYSBwb2ludGVyIGlzIG1haW50YWluZWQgdGhhdCBrZWVwcyB0cmFjayBvZiB0aGUgbG9jYXRpb24gb2YgdGhlIG5leHRcbiAqIGVsZW1lbnQgdG8gYmUgZGVxdWV1ZWQsIGFuZCB3aGVuIHRoYXQgZGVxdWV1ZSBoYXBwZW5zLCB0aGUgcG9pbnRlciBzaW1wbHlcbiAqIG1vdmVzLiBXaGVuIHRoZSBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZiB0aGUgYXJyYXkgZ2V0cyBsYXJnZSBlbm91Z2gsIGl0J3NcbiAqIHJlbW92ZWQgYnkgYSBzaW5nbGUgc2xpY2Ugb3BlcmF0aW9uLlxuICpcbiAqIFB1dHRpbmcgZWxlbWVudHMgaW50byB0aGUgcXVldWUgaXMganVzdCBkb25lIHdpdGggYSBiYXNpYyBgcHVzaGAsIHdoaWNoICppcypcbiAqIGhpZ2hseSBlZmZpY2llbnQuXG4gKlxuICogVGhpcyB0eXBlIG9mIHF1ZXVlIGlzIHBvc3NpYmxlIGluIEphdmFTY3JpcHQgYmVjYXVzZSBKUyBhcnJheXMgYXJlIHJlc2l6YWJsZS5cbiAqIEluIGxhbmd1YWdlcyB3aXRoIGZpeGVkLXNpemUgYXJyYXlzLCBhIHJlc2l6aW5nIG9wZXJhdGlvbiB3b3VsZCBoYXZlIHRvIGJlXG4gKiBydW4gZWFjaCB0aW1lIHRoZSBxdWV1ZSBmaWxscy5cbiAqXG4gKiBAbmFtZXNwYWNlIFF1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogVGhlIHZhbHVlIHJldHVybmVkIHdoZW4gYSBxdWV1ZSBpcyByZWFkIHdoZW4gaXQncyBlbXB0eS5cbiAqXG4gKiBUaGlzIHNwZWNpYWwgdmFsdWUgaXMgdXNlZCBiZWNhdXNlIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgYXJlIHBvc3NpYmxlXG4gKiBsZWdpdGltYXRlIHZhbHVlcyB0aGF0IGNhbiBiZSBzdG9yZWQgaW4gYSBxdWV1ZS4gQW5vdGhlciBvcHRpb24gaXMgdG8gdXNlXG4gKiBzb21lIGtpbmQgb2YgYE1heWJlYCBvciBgT3B0aW9uYCB0eXBlLCBidXQgdGhhdCByZXF1aXJlcyBtb3JlIGVmZm9ydCBvbiB0aGVcbiAqIHBhcnQgb2YgdGhlIGVuZCB1c2VyIHRvIGludGVyZmFjZSB3aXRoLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5jb25zdCBFTVBUWSA9IFN5bWJvbChcIkVNUFRZXCIpO1xuXG4vKipcbiAqIEEgbWFya2VyIHByb3BlcnR5IG5hbWUgdG8gaW5kaWNhdGUgdGhhdCBhbiBvYmplY3QgaXMgaW4gZmFjdCBhIHF1ZXVlLlxuICpcbiAqIEEgcXVldWUgaGFzIGEgcHJvcGVydHkgd2l0aCB0aGlzIG5hbWUgd2hvc2UgcmVhZG9ubHkgdmFsdWUgaXMgc2V0IHRvIGB0cnVlYC5cbiAqIFRoaXMgaXMgbm90IG1lYW50IHRvIGJlIHJlYWQgZXhjZXB0IGJ5IHRoZVxuICogYHtAbGluayBtb2R1bGU6cXVldWUuaXNRdWV1ZXxpc1F1ZXVlfWAgZnVuY3Rpb24uXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFFVRVVFID0gU3ltYm9sKFwiUVVFVUVcIik7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIG9iamVjdCBpcyBhIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIFRoZSBvYmplY3QgdG8gYmUgdGVzdGVkLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgb2JqZWN0IGlzIGEgcXVldWUgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogbm90LlxuICovXG5mdW5jdGlvbiBpc1F1ZXVlKG9iaikge1xuICByZXR1cm4gISFvYmo/LltRVUVVRV07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWV1ZS4gVGhpcyBxdWV1ZSBpcyBjcmVhdGVkIGVtcHR5LCB3aXRoIGEgYmFja2luZyBhcnJheSBvZlxuICogbGVuZ3RoIDAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEByZXR1cm5zIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBBIG5ldywgZW1wdHkgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBxdWV1ZSgpIHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIHN0b3JlOiB7XG4gICAgICB2YWx1ZTogW10sXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBwb2ludGVyOiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIFtRVUVVRV06IHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgc3RvcmVkIGluIGEgcXVldWUuIFRoaXMgbWF5IG9yIG1heSBub3QgZXF1YWxcbiAqIHRoZSBsZW5ndGggb2YgdGhlIGJhY2tpbmcgc3RvcmUsIGFzIHRoZXJlIGlzIG9mdGVuIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mXG4gKiB0aGUgYmFja2luZyBzdG9yZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2UgaXRlbXMgYXJlIGJlaW5nXG4gKiAgICAgY291bnRlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb3VudChxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoIC0gcXVldWUucG9pbnRlcjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBxdWV1ZSBpcyBlbXB0eS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgY2hlY2tlZCBmb3IgZW1wdGluZXNzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgcXVldWUgaXMgZW1wdHkgb3IgYGZhbHNlYCBpZiBpdCBpc1xuICogICAgIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHkocXVldWUpIHtcbiAgcmV0dXJuIHF1ZXVlLnN0b3JlLmxlbmd0aCA9PT0gMDtcbn1cblxuLyoqXG4gKiBBZGRzIGFuIGl0ZW0gdG8gYSBxdWV1ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hpY2ggaXMgaGF2aW5nIGFuIGl0ZW0gYWRkZWRcbiAqICAgICB0byBpdC5cbiAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSBiZWluZyBhZGRlZCB0byB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbnF1ZXVlKHF1ZXVlLCBpdGVtKSB7XG4gIHF1ZXVlLnN0b3JlLnB1c2goaXRlbSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYSBxdWV1ZSBhbmQgcmV0dXJucyB0aGF0IGl0ZW0uIElmIHRoZSByZW1vdmFsIGNhdXNlcyB0aGVcbiAqIGFtb3VudCBvZiBlbXB0eSBzcGFjZSBhdCB0aGUgaGVhZCBvZiB0aGUgYmFja2luZyBzdG9yZSB0byBleGNlZWQgYSB0aHJlc2hvbGQsXG4gKiB0aGF0IGVtcHR5IHNwYWNlIGlzIHJlbW92ZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiAgICAgcmVtb3ZlZC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3Qgc3RvcmVkIGl0ZW0gaW4gdGhlIHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVxdWV1ZShxdWV1ZSkge1xuICBpZiAocXVldWUuc3RvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEVNUFRZO1xuICB9XG5cbiAgY29uc3QgaXRlbSA9IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xuICAvLyBSZW1vdmVzIHRoZSBpdGVtcyBpbiB0aGUgYmFja2luZyBzdG9yZSBiZWZvcmUgdGhlIGN1cnJlbnQgcG9pbnRlciwgaWYgdGhlcmVcbiAgLy8gaXMgZW5vdWdoIFwiZW1wdHlcIiBzcGFjZSBiZWZvcmUgdGhlIHBvaW50ZXIgdG8ganVzdGlmeSBpdCAoaS5lLiwgdGhlIHVudXNlZFxuICAvLyBwb3J0aW9uIGlzIGF0IGxlYXN0IGhhbGYgYXMgbGFyZ2UgYXMgdGhlIHVzZWQgcG9ydGlvbilcbiAgaWYgKCsrcXVldWUucG9pbnRlciAqIDIgPj0gcXVldWUuc3RvcmUubGVuZ3RoKSB7XG4gICAgcXVldWUuc3RvcmUgPSBxdWV1ZS5zdG9yZS5zbGljZShxdWV1ZS5wb2ludGVyKTtcbiAgICBxdWV1ZS5wb2ludGVyID0gMDtcbiAgfVxuICByZXR1cm4gaXRlbTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGl0ZW0gaW4gYSBxdWV1ZSB3aXRob3V0IHJlbW92aW5nIGl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBvbGRlc3QgaXRlbSBpcyB0byBiZVxuICogICAgIHBlZWtlZCBhdC5cbiAqIEByZXR1cm4geyp9IFRoZSBvbGRlc3QgaXRlbSBzdG9yZWQgaW4gdGhlIHF1ZXVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGVlayhxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwID8gRU1QVFkgOiBxdWV1ZS5zdG9yZVtxdWV1ZS5wb2ludGVyXTtcbn1cblxuLyoqXG4gKiBGaWx0ZXJzIG91dCBhbnkgaXRlbSBpbiBhIHF1ZXVlIHRoYXQgZG9lcyBub3QgY2F1c2UgdGhlIHN1cHBsaWVkIHByZWRpY2F0ZVxuICogZnVuY3Rpb24gdG8gcmV0dXJuIGB0cnVlYCB3aGVuIHBhc3NlZCB0aGF0IGl0ZW0uIFRoaXMgaXMgbm90IGV4YWN0bHkgYVxuICogZ2VuZXJhbCBwdXJwb3NlIHF1ZXVlIG9wZXJhdGlvbiwgYnV0IHdlIG5lZWQgaXQgd2l0aCBjaGFubmVscyB0aGF0IHdpbGxcbiAqIG9jY2FzaW9uYWxseSB3YW50IHRvIGdldCByaWQgb2YgaW5hY3RpdmUgaGFuZGxlcnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIGJlaW5nIGZpbHRlcmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciBhblxuICogICAgIGVsZW1lbnQgcmVtYWlucyBpbiB0aGUgcXVldWUuXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihxdWV1ZSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGkgPSAwLCBlbmQgPSBjb3VudChxdWV1ZSk7IGkgPCBlbmQ7IGkrKykge1xuICAgIGNvbnN0IGl0ZW0gPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICBlbnF1ZXVlKHF1ZXVlLCBpdGVtKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgRU1QVFksXG4gIHF1ZXVlLFxuICBpc1F1ZXVlLFxuICBjb3VudCxcbiAgaXNFbXB0eSxcbiAgZW5xdWV1ZSxcbiAgZGVxdWV1ZSxcbiAgcGVlayxcbiAgZmlsdGVyXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgdXRpbGl0eSBmdW5jdGlvbnMgdGhhdCBnaXZlIG9uZSBvciBtb3JlIGNoYW5uZWxzIHNvbWUgZXh0cmFcbiAqIGZ1bmN0aW9uYWxpdHkuIEVhY2ggb2YgdGhlc2UgYWNjZXB0IG9uZSBvciBtb3JlIHtAbGluayBtb2R1bGU6Y3NwLkNoYW5uZWx9XG4gKiBvYmplY3RzIGFuZCB0aGVuIGNvbWJpbmUgb3IgbWFuaXB1bGF0ZSB0aGVtIGluIChob3BlZnVsbHkpIHVzZWZ1bCB3YXlzLCBzdWNoXG4gKiBhcyBtZXJnaW5nIHRoZW0sIHNwbGl0dGluZyB0aGVtLCByZWR1Y2luZyB2YWx1ZXMgdGhleSByZWNlaXZlIHRvIGEgc2luZ2xlXG4gKiB2YWx1ZSwgb3IgdGhyb3R0bGluZyB0aGVtIHNvIHRoYXQgdGhleSBvbmx5IHByb2R1Y2Ugb25lIHJlc3VsdCBpbiBhIGdpdmVuXG4gKiB0aW1lIHBlcmlvZC5cbiAqXG4gKiBAbW9kdWxlIG9wc1xuICovXG5cbmV4cG9ydCB7XG4gIG1hcCxcbiAgbWVyZ2UsXG4gIHBhcnRpdGlvbixcbiAgcGlwZSxcbiAgc3BsaXQsXG4gIHRhcCxcbiAgdW50YXAsXG4gIHVudGFwQWxsXG59IGZyb20gXCJtb2R1bGVzL2Zsb3dcIjtcbmV4cG9ydCB7IHJlZHVjZSwgdG9DaGFubmVsLCB0b0FycmF5IH0gZnJvbSBcIm1vZHVsZXMvY29udmVyc2lvblwiO1xuZXhwb3J0IHsgZGVib3VuY2UsIHRocm90dGxlIH0gZnJvbSBcIm1vZHVsZXMvdGltaW5nXCI7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgc2luZ2xlIHZhbHVlIGFuZCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhhdCB2YWx1ZVxuICogbWVldHMgdGhlIGZ1bmN0aW9uJ3MgY3JpdGVyaWEgZm9yIHBhc3NpbmcsIHJldHVybnMgYHRydWVgIG9yIGBmYWxzZWAuXG4gKlxuICogQGNhbGxiYWNrIFByZWRpY2F0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuIFdoZXRoZXIgb3Igbm90IHRoZSB2YWx1ZSBwYXNzZXMgdGhlIHRlc3RcbiAqICAgICBkZXBlbmRzIG9uIHRoZSBjcml0ZXJpYSBlc3RhYmxpc2hlZCBieSB0aGUgcHJlZGljYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgcGFzc2VzIG9yIGBmYWxzZWAgaWYgaXQgZG9lc24ndC5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBtYXBzIGl0cyBpbnB1dChzKSB0byBhbiBvdXRwdXQgdmFsdWUuIEl0IHRha2VzIGEgdmFyaWFibGVcbiAqIG51bWJlciBvZiBpbnB1dCB2YWx1ZXMgYW5kIGNhbGN1bGF0ZXMgYW4gb3V0cHV0IHZhbHVlIGZyb20gdGhlbS5cbiAqXG4gKiBAY2FsbGJhY2sgTWFwcGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVGhlIGlucHV0IHZhbHVlcy5cbiAqIEByZXR1cm4geyp9IEFuIG91dHB1dCB2YWx1ZSBjYWxjdWxhdGVkIGZyb20gdGhlIGlucHV0IHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpbnRlZ3JhdGVzIG9uZSBvZiBpdHMgdmFsdWVzIGludG8gdGhlIG90aGVyLiBJdCdzIHVzZWQgZm9yXG4gKiByZWR1Y2luZyBjaGFubmVsIHZhbHVlcyBpbnRvIGEgc2luZ2xlIHZhbHVlLlxuICpcbiAqIEBjYWxsYmFjayBSZWR1Y2VyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHsqfSBhY2MgVGhlIGN1cnJlbnQgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgdGhhdCBuZWVkcyB0byBiZSBpbnRlZ3JhdGVkIGludG8gdGhlXG4gKiAgICAgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAcmV0dXJuIHsqfSBBIG5ldyBhY2N1bXVsYXRlZCB2YWx1ZSwgcmVzdWx0aW5nIGZyb20gaW50ZWdyYXRpbmcgYHZhbHVlYCBpbnRvXG4gKiAgICAgdGhlIG9yaWdpbmFsIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyB1c2VkIGJ5IG1vcmUgdGhhbiBvbmUgb3RoZXIgbW9kdWxlLlxuICpcbiAqIEBtb2R1bGUgb3BzL2NvbW1vblxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGlzIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgYSBmaW5pdGUgbnVtYmVyIG9yIGBmYWxzZWBcbiAqICAgICBpZiBpdCBpcyBub3QuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQSBzZXQgb2YgY2hhbm5lbCB1dGlsaXRpZXMgZm9yIGNvbnZlcnRpbmcgY2hhbm5lbHMgaW50byBvdGhlciBraW5kcyBvZiBkYXRhLFxuICogYW5kIHZpY2UgdmVyc2EuXG4gKlxuICogQG1vZHVsZSBvcHMvY29udmVyc2lvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgc2VuZEFzeW5jLCBjbG9zZSB9IGZyb20gXCJAY2hhbmtvL2NzcFwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzaW5nbGUgdmFsdWUgZnJvbSBhIGNoYW5uZWwgYnkgcnVubmluZyBpdHMgdmFsdWVzIHRocm91Z2ggYVxuICogcmVkdWNpbmcgZnVuY3Rpb24uXG4gKlxuICogRm9yIGV2ZXJ5IHZhbHVlIHB1dCBvbnRvIHRoZSBpbnB1dCBjaGFubmVsLCB0aGUgcmVkdWNpbmcgZnVuY3Rpb24gaXMgY2FsbGVkXG4gKiB3aXRoIHR3byBwYXJhbWV0ZXJzOiB0aGUgYWNjdW11bGF0b3IgdGhhdCBob2xkcyB0aGUgcmVzdWx0IG9mIHRoZSByZWR1Y3Rpb25cbiAqIHNvIGZhciwgYW5kIHRoZSBuZXcgaW5wdXQgdmFsdWUuIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBhY2N1bXVsYXRvciBpcyB0aGVcbiAqIHRoaXJkIHBhcmFtZXRlciB0byBgcmVkdWNlYC4gVGhlIHJlZHVjdGlvbiBpcyBub3QgY29tcGxldGUgdW50aWwgdGhlIGlucHV0XG4gKiBjaGFubmVsIGNsb3Nlcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBjaGFubmVsLiBXaGVuIHRoZSBmaW5hbCByZWR1Y2VkIHZhbHVlIGlzIHByb2R1Y2VkLCBpdFxuICogaXMgcHV0IG9udG8gdGhpcyBjaGFubmVsLCBhbmQgd2hlbiB0aGF0IHZhbHVlIGlzIHRha2VuIGZyb20gaXQsIHRoZSBjaGFubmVsXG4gKiBpcyBjbG9zZWQuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IHJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIGlucHV0LCAwKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVjdihvdXRwdXQpO1xuICogICBjb25zb2xlLmxvZyhvdXRwdXQpOyAgICAgICAgICAgICAgICAgIC8vIC0+IDZcbiAqIH0pO1xuICpcbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGUgaW5wdXQgY2hhbm5lbCAqbXVzdCogYmUgY2xvc2VkIGF0IHNvbWUgcG9pbnQsIG9yIG5vIHZhbHVlIHdpbGxcbiAqIGV2ZXIgYXBwZWFyIG9uIHRoZSBvdXRwdXQgY2hhbm5lbC4gVGhlIGNsb3Npbmcgb2YgdGhlIGNoYW5uZWwgaXMgd2hhdFxuICogc2lnbmlmaWVzIHRoYXQgdGhlIHJlZHVjdGlvbiBzaG91bGQgYmUgY29tcGxldGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpvcHMuUmVkdWNlcn0gZm4gVGhlIHJlZHVjZXIgZnVuY3Rpb24gcmVzcG9uc2libGUgZm9yIHR1cm5pbmdcbiAqICAgICB0aGUgc2VyaWVzIG9mIGNoYW5uZWwgdmFsdWVzIGludG8gYSBzaW5nbGUgb3V0cHV0IHZhbHVlLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgd2hvc2UgdmFsdWVzIGFyZSBiZWluZ1xuICogICAgIHJlZHVjZWQgaW50byBhIHNpbmdsZSBvdXRwdXQgdmFsdWUuXG4gKiBAcGFyYW0geyp9IGluaXQgVGhlIGluaXRpYWwgdmFsdWUgdG8gZmVlZCBpbnRvIHRoZSByZWR1Y2VyIGZ1bmN0aW9uIGZvciB0aGVcbiAqICAgICBmaXJzdCByZWR1Y3Rpb24gc3RlcC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBjaGFubmVsIHRoYXQgd2lsbCwgd2hlbiB0aGUgaW5wdXQgY2hhbm5lbFxuICogICAgIGNsb3NlcywgaGF2ZSB0aGUgcmVkdWNlZCB2YWx1ZSBwdXQgaW50byBpdC4gV2hlbiB0aGlzIHZhbHVlIGlzIHRha2VuLCB0aGVcbiAqICAgICBjaGFubmVsIHdpbGwgYXV0b21hdGljYWxseSBjbG9zZS5cbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGZuLCBjaGFubmVsLCBpbml0KSB7XG4gIGNvbnN0IG91dHB1dCA9IGNoYW4oKTtcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgbGV0IGFjYyA9IGluaXQ7XG4gICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBjaGFubmVsKSB7XG4gICAgICBhY2MgPSBmbihhY2MsIHZhbHVlKTtcbiAgICB9XG4gICAgc2VuZEFzeW5jKG91dHB1dCwgYWNjLCAoKSA9PiBjbG9zZShvdXRwdXQpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqXG4gKiBTZW5kcyBhbGwgdmFsdWVzIGZyb20gYW4gaXRlcmFibGUgdG8gdGhlIHN1cHBsaWVkIGNoYW5uZWwuXG4gKlxuICogSWYgbm8gY2hhbm5lbCBpcyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiwgYSBuZXcgY2hhbm5lbCBpcyBjcmVhdGVkLiBJblxuICogZWZmZWN0LCB0aGlzIGRpcmVjdGx5IGNvbnZlcnRzIGFuIGl0ZXJhYmxlIGludG8gYSBjaGFubmVsIHdpdGggdGhlIHNhbWVcbiAqIHZhbHVlcyBvbiBpdC5cbiAqXG4gKiBUaGUgY2hhbm5lbCBpcyBjbG9zZWQgYWZ0ZXIgdGhlIGZpbmFsIGl0ZXJhYmxlIHZhbHVlIGlzIHNlbnQgdG8gaXQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYW55IEphdmFTY3JpcHQgb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgaXRlcmFibGVcbiAqIHByb3RvY29sLiBJbiBvdGhlciB3b3JkcywgaWYgaXQgd29ya3MgaW4gYSBgZm9yLi4ub2ZgIHN0YXRlbWVudCwgaXQgd2lsbCB3b3JrXG4gKiBoZXJlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHJlY3YsIGlzQ2xvc2VkIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHRvQ2hhbm5lbCB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBbMSwgMiwgM107XG4gKiBjb25zdCBvdXRwdXQgPSB0b0NoYW5uZWwoaW5wdXQpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDNcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7aXRlcmFibGV9IGl0ZXJhYmxlIFRoZSBpdGVyYWJsZSBjb250YWluaW5nIHRoZSB2YWx1ZXMgdG8gYmUgc2VudCB0b1xuICogICAgIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFtjaGFubmVsXSBUaGUgY2hhbm5lbCBvbnRvIHdoaWNoIHRvIHB1dCBhbGwgb2ZcbiAqICAgICB0aGUgYXJyYXkgZWxlbWVudHMuIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIGEgbmV3IGNoYW5uZWwgd2lsbCBiZVxuICogICAgIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHRoZSBjaGFubmVsIG9udG8gd2hpY2ggdGhlIGFycmF5IGVsZW1lbnRzIGFyZVxuICogICAgIHB1dC4gVGhpcyBpcyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgY2hhbm5lbCwgYnV0IGlmIG5vIGlucHV0IGNoYW5uZWwgaXNcbiAqICAgICBzcGVjaWZpZWQsIHRoaXMgd2lsbCBiZSBhIG5ldyBjaGFubmVsLiBJdCB3aWxsIGNsb3NlIHdoZW4gdGhlIGZpbmFsIHZhbHVlXG4gKiAgICAgaXMgdGFrZW4gZnJvbSBpdC5cbiAqL1xuZnVuY3Rpb24gdG9DaGFubmVsKGl0ZXJhYmxlLCBjaGFubmVsID0gY2hhbihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlcmFibGUpIHtcbiAgICAgIGF3YWl0IHNlbmQoY2hhbm5lbCwgaXRlbSk7XG4gICAgfVxuICAgIGNsb3NlKGNoYW5uZWwpO1xuICB9KTtcblxuICByZXR1cm4gY2hhbm5lbDtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhbGwgb2YgdGhlIHZhbHVlcyBmcm9tIGEgY2hhbm5lbCBhbmQgcHVzaGVzIHRoZW0gaW50byBhbiBhcnJheS5cbiAqXG4gKiBJZiBubyBhcnJheSBpcyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiwgYSBuZXcgKGVtcHR5KSBvbmUgaXMgY3JlYXRlZC4gSW5cbiAqIGVmZmVjdCwgdGhpcyBkaXJlY3RseSBjb252ZXJ0cyBhIGNoYW5uZWwgaW50byBhbiBhcnJheSB3aXRoIHRoZSBzYW1lIHZhbHVlcy5cbiAqIEVpdGhlciB3YXksIHRoaXMgb3BlcmF0aW9uIGNhbm5vdCBjb21wbGV0ZSB1bnRpbCB0aGUgaW5wdXQgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgY2hhbm5lbC4gV2hlbiB0aGUgZmluYWwgYXJyYXkgaXMgcHJvZHVjZWQsIGl0IGlzIHNlbnRcbiAqIHRvIHRoaXMgY2hhbm5lbCwgYW5kIHdoZW4gdGhhdCB2YWx1ZSBpcyByZWNlaXZlZCBmcm9tIGl0LCB0aGUgY2hhbm5lbCBpc1xuICogY2xvc2VkLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHRvQXJyYXkgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gdG9BcnJheShpbnB1dCk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlY3Yob3V0cHV0KTtcbiAqICAgY29uc29sZS5sb2cocmVzdWx0KTsgICAgICAgICAgICAgICAgICAgICAvLyAtPiBbMSwgMiwgM11cbiAqIH0pO1xuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoZSBpbnB1dCBjaGFubmVsICptdXN0KiBiZSBjbG9zZWQgYXQgc29tZSBwb2ludCwgb3Igbm8gdmFsdWUgd2lsbFxuICogZXZlciBhcHBlYXIgb24gdGhlIG91dHB1dCBjaGFubmVsLiBUaGUgY2xvc2luZyBvZiB0aGUgY2hhbm5lbCBpcyB3aGF0XG4gKiBzaWduaWZpZXMgdGhhdCBhbGwgb2YgdGhlIHZhbHVlcyBuZWVkZWQgdG8gbWFrZSB0aGUgYXJyYXkgYXJlIG5vdyBhdmFpbGFibGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIGZyb20gd2hpY2ggdmFsdWVzIGFyZVxuICogICAgIHJlY2VpdmVkIHRvIHB1dCBpbnRvIHRoZSBhcnJheS5cbiAqIEBwYXJhbSB7YXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIHB1dCB0aGUgY2hhbm5lbCB2YWx1ZXMgaW50by4gSWYgdGhpcyBpc1xuICogICAgIG5vdCBwcmVzZW50LCBhIG5ldywgZW1wdHkgYXJyYXkgd2lsbCBiZSBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIGNoYW5uZWwgdGhhdCB3aWxsLCB3aGVuIHRoZSBpbnB1dCBjaGFubmVsXG4gKiAgICAgY2xvc2VzLCBoYXZlIHRoZSBhcnJheSBvZiBjaGFubmVsIHZhbHVlcyBwdXQgb250byBpdC4gV2hlbiB0aGlzIGFycmF5IGlzXG4gKiAgICAgcmVjZWl2ZWQsIHRoZSBjaGFubmVsIHdpbGwgYXV0b21hdGljYWxseSBjbG9zZS5cbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGFubmVsLCBhcnJheSA9IFtdKSB7XG4gIHJldHVybiByZWR1Y2UoXG4gICAgKGFjYywgaW5wdXQpID0+IHtcbiAgICAgIGFjYy5wdXNoKGlucHV0KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICBjaGFubmVsLFxuICAgIGFycmF5XG4gICk7XG59XG5cbmV4cG9ydCB7IHJlZHVjZSwgdG9DaGFubmVsLCB0b0FycmF5IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBjaGFubmVsIG9wZXJhdGlvbiBmdW5jdGlvbnMgZm9yIHJvdXRpbmcgY2hhbm5lbHMgdG8gb3RoZXIgY2hhbm5lbHNcbiAqIGluIGRpZmZlcmVudCB3YXlzLlxuICpcbiAqIEluIGVhY2ggb2YgdGhlc2UgZnVuY3Rpb25zLCB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBub3QgYmUgYXZhaWxhYmxlIHRvIGJlXG4gKiB0YWtlbiBmcm9tLCBhcyBhbGwgb2YgdGhlIHNvdXJjZSBjaGFubmVscyB3aWxsIGhhdmUgdGhlaXIgdmFsdWVzIHRha2VuIGJ5IHRoZVxuICogcHJvY2Vzc2VzIHdpdGhpbiB0aGVzZSBmdW5jdGlvbnMuIFRoZSBsb25lIGV4Y2VwdGlvbiBpcyBgdGFwYCwgd2hlcmUgdGhlXG4gKiByZWd1bGFyIGZ1bmN0aW9uIG9mIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIGJlIHJlc3RvcmVkIGlmIGFsbCB0YXBzIGFyZVxuICogcmVtb3ZlZC4gRXZlbiBzbywgd2hpbGUgYXQgbGVhc3Qgb25lIHRhcCBpcyBpbiBwbGFjZSwgdGhlIHNvdXJjZSBjaGFubmVsXG4gKiBjYW5ub3QgYmUgdGFrZW4gZnJvbS5cbiAqXG4gKiBAbW9kdWxlIG9wcy9mbG93XG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIGdvLFxuICBjaGFuLFxuICBzZW5kLFxuICByZWN2LFxuICBzZWxlY3QsXG4gIHNlbmRBc3luYyxcbiAgcmVjdkFzeW5jLFxuICBjbG9zZSxcbiAgQ0xPU0VEXG59IGZyb20gXCJAY2hhbmtvL2NzcFwiO1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gXCJtb2R1bGVzL2NvbW1vblwiO1xuXG5jb25zdCBUQVBTID0gU3ltYm9sKFwibXVsdGl0YXAvdGFwc1wiKTtcblxuLyoqXG4gKiBQaXBlcyB0aGUgdmFsdWVzIGZyb20gb25lIGNoYW5uZWwgdG8gYW5vdGhlciBjaGFubmVsLlxuICpcbiAqIFRoaXMgdGllcyB0d28gY2hhbm5lbHMgdG9nZXRoZXIgc28gdGhhdCBwdXRzIG9uIHRoZSBzb3VyY2UgY2hhbm5lbCBjYW4gYmVcbiAqIHRha2VuIG9mZiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gVGhpcyBkb2VzIG5vdCBkdXBsaWNhdGUgdmFsdWVzIGluIGFueSB3YXk7XG4gKiBpZiBhbm90aGVyIHByb2Nlc3MgdGFrZXMgYSB2YWx1ZSBvZmYgdGhlIHNvdXJjZSBjaGFubmVsLCBpdCB3aWxsIG5ldmVyIGFwcGVhclxuICogb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgbm90IHdhbnQgdG8gdGFrZSB2YWx1ZXNcbiAqIG9mZiBhIGNoYW5uZWwgb25jZSBpdCdzIHBpcGVkIHRvIGFub3RoZXIgY2hhbm5lbCwgc2luY2UgaXQncyBkaWZmaWN1bHQgdG9cbiAqIGtub3cgd2hpY2ggdmFsdWVzIHdpbGwgZ28gdG8gd2hpY2ggY2hhbm5lbC5cbiAqXG4gKiBDbG9zaW5nIGVpdGhlciBjaGFubmVsIHdpbGwgYnJlYWsgdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgdHdvLiBJZiB0aGVcbiAqIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZCwgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBieSBkZWZhdWx0IGFsc28gYmVcbiAqIGNsb3NlZC4gSG93ZXZlciwgcGFzc2luZyBgdHJ1ZWAgYXMgdGhlIHRoaXJkIHBhcmFtZXRlciB3aWxsIGNhdXNlIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCB0byByZW1haW4gb3BlbiBldmVuIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZFxuICogKHRoZSBjb25uZWN0aW9uIGlzIHN0aWxsIGJyb2tlbiBob3dldmVyKS5cbiAqXG4gKiBCZWNhdXNlIG9mIHRoZSBhYmlsaXR5IHRvIGxlYXZlIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIG9wZW4sIGEgcG9zc2libGUgdXNlXG4gKiBjYXNlIGZvciB0aGlzIGZ1bmN0aW9uIGlzIHRvIHdyYXAgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwocykgb2Ygb25lIG9mIHRoZVxuICogb3RoZXIgZmxvdyBjb250cm9sIGZ1bmN0aW9ucyBiZWxvdyB0byBoYXZlIGEgY2hhbm5lbCB0aGF0IHN1cnZpdmVzIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwgY2xvc2luZy4gVGhlIHJlc3Qgb2YgdGhvc2UgZnVuY3Rpb25zIChhc2lkZSBmcm9tIHRoZSBzcGVjaWFsLWNhc2VcbiAqIGB7QGxpbmsgbW9kdWxlOm9wcy50YXB8dGFwfWApIGF1dG9tYXRpY2FsbHkgY2xvc2UgdGhlaXIgZGVzdGluYXRpb24gY2hhbm5lbHNcbiAqIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVscyBjbG9zZS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSwgaXNDbG9zZWQgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBwaXBlKGlucHV0LCBjaGFuKCkpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgICAvLyAtPiB0cnVlXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBkZXN0IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICogQHBhcmFtIHtib29sZWFufSBba2VlcE9wZW49ZmFsc2VdIEEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSBkZXN0aW5hdGlvblxuICogICAgIGNoYW5uZWwgc2hvdWxkIGJlIGtlcHQgb3BlbiBhZnRlciB0aGUgc291cmNlIGNoYW5uZWwgY2xvc2VzLiBCeSBkZWZhdWx0XG4gKiAgICAgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBjbG9zZSB3aGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBjbG9zZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBwaXBlKHNyYywgZHN0LCBrZWVwT3BlbiA9IGZhbHNlKSB7XG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGlmICgha2VlcE9wZW4pIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCEoYXdhaXQgc2VuZChkc3QsIHZhbHVlKSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgdHdvIG5ldyBjaGFubmVscyBhbmQgcm91dGVzIHZhbHVlcyBmcm9tIGEgc291cmNlIGNoYW5uZWwgdG8gdGhlbVxuICogYWNjb3JkaW5nIHRvIGEgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBzdXBwbGllZCBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggZXZlcnkgdmFsdWUgdGhhdCBpcyBwdXQgb250byB0aGUgc291cmNlXG4gKiBjaGFubmVsLiBUaG9zZSB0aGF0IHJldHVybiBgdHJ1ZWAgYXJlIHJvdXRlZCB0byB0aGUgZmlyc3QgZGVzdGluYXRpb25cbiAqIGNoYW5uZWw7IHRob3NlIHRoYXQgcmV0dXJuIGBmYWxzZWAgYXJlIHJvdXRlZCB0byB0aGUgc2Vjb25kLlxuICpcbiAqIFRoZSBuZXcgY2hhbm5lbHMgYXJlIGNyZWF0ZWQgYnkgdGhlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBidWZmZXIgdmFsdWVzXG4gKiBwYXNzZWQgYXMgdGhlIHRoaXJkIGFuZCBmb3VydGggcGFyYW1ldGVycy4gSWYgb25lIG9yIGJvdGggb2YgdGhlc2UgYXJlXG4gKiBtaXNzaW5nLCBgbnVsbGAsIG9yIGAwYCwgdGhlIGNvcnJlc3BvbmRpbmcgZGVzdGluYXRpb24gY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkLlxuICogSWYgb25lIGlzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlIGNvcnJlc3BvbmRpbmcgY2hhbm5lbCBpcyBidWZmZXJlZCBieSBhXG4gKiBmaXhlZCBidWZmZXIgb2YgdGhhdCBzaXplLiBJZiB0aGUgcGFyYW1ldGVyIGZvciBhIGNoYW5uZWwgaXMgYSBidWZmZXIsIHRoZW5cbiAqIHRoYXQgYnVmZmVyIGlzIHVzZWQgdG8gYnVmZmVyIHRoZSBuZXcgY2hhbm5lbC5cbiAqXG4gKiBCb3RoIG5ldyBjaGFubmVscyBhcmUgY2xvc2VkIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgY2xvc2UgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgcGFydGl0aW9uIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IGN0cmwgPSBjaGFuKCk7XG4gKiBjb25zdCBbZXZlbiwgb2RkXSA9IHBhcnRpdGlvbih4ID0+IHggJSAyID09PSAwLCBpbnB1dCwgMywgMyk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCA0KTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGV2ZW4pIHtcbiAqICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gKiAgIH1cbiAqICAgYXdhaXQgc2VuZChjdHJsKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgcmVjdihjdHJsKTtcbiAqICAgZm9yIGF3YWl0IChjb25zdCB2YWx1ZSBvZiBvZGQpIHtcbiAqICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gKiAgIH1cbiAqIH0pO1xuICpcbiAqIC8vIFRoZSBgY3RybGAgY2hhbm5lbCBlbnN1cmVzIHRoYXQgYWxsIG9mIHRoZSB2YWx1ZXMgb24gdGhlIGV2ZW4gY2hhbm5lbCBhcmVcbiAqIC8vIHJlYWQgYmVmb3JlIGFueSBvZiB0aGUgdmFsdWVzIG9uIHRoZSBvZGQgY2hhbm5lbCBhcmUgKHRoaXMgaXMgb25seVxuICogLy8gcG9zc2libGUgYmVjYXVzZSB0aGUgb3V0cHV0IGNoYW5uZWxzIGhhdmUgYnVmZmVycyBiaWcgZW5vdWdoIHRvIG1ha2Ugc3VyZVxuICogLy8gdGhhdCBubyBzZW5kIGlzIGJsb2NrZWQpLlxuICogLy9cbiAqIC8vIC0+IDJcbiAqIC8vIC0+IDRcbiAqIC8vIC0+IDFcbiAqIC8vIC0+IDNcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpvcHMuUHJlZGljYXRlfSBmbiBBIHByZWRpY2F0ZSBmdW5jdGlvbiB1c2VkIHRvIHRlc3QgZWFjaCB2YWx1ZVxuICogb24gdGhlIGlucHV0IGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFt0QnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2hpY2ggcmVjZWl2ZXMgYWxsIHZhbHVlcyB0aGF0IHBhc3NlZCB0aGUgcHJlZGljYXRlLlxuICogICAgIElmIHRoaXMgaXMgYSBudW1iZXIsIGEge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsXG4gKiAgICAgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtmQnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2hpY2ggcmVjZWl2ZXMgYWxsIHZhbHVlcyB0aGF0IGRpZCBub3QgcGFzcyB0aGVcbiAqICAgICBwcmVkaWNhdGUuIElmIHRoaXMgaXMgYSBudW1iZXIsIGEge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXRcbiAqICAgICBzaXplIHdpbGwgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmVcbiAqICAgICB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsW119IEFuIGFycmF5IG9mIHR3byBjaGFubmVscy4gVGhlIGZpcnN0IGlzIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2l0aCBhbGwgb2YgdGhlIHZhbHVlcyB0aGF0IHBhc3NlZCB0aGUgcHJlZGljYXRlLCB0aGVcbiAqICAgICBzZWNvbmQgaXMgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2l0aCBhbGwgb2YgdGhlIHZhbHVlcyB0aGF0IGRpZCBub3RcbiAqICAgICBwYXNzIHRoZSBwcmVkaWNhdGUuXG4gKi9cbmZ1bmN0aW9uIHBhcnRpdGlvbihmbiwgc3JjLCB0QnVmZmVyID0gMCwgZkJ1ZmZlciA9IDApIHtcbiAgY29uc3QgdERzdCA9IGNoYW4odEJ1ZmZlcik7XG4gIGNvbnN0IGZEc3QgPSBjaGFuKGZCdWZmZXIpO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGNsb3NlKHREc3QpO1xuICAgICAgICBjbG9zZShmRHN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBhd2FpdCBzZW5kKGZuKHZhbHVlKSA/IHREc3QgOiBmRHN0LCB2YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gW3REc3QsIGZEc3RdO1xufVxuXG4vKipcbiAqIE1lcmdlcyBvbmUgb3IgbW9yZSBjaGFubmVscyBpbnRvIGEgc2luZ2xlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKlxuICogVmFsdWVzIGFyZSBnaXZlbiB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhcyB0aGV5IGFyZSBzZW50IHRvIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWxzLiBJZiBgbWVyZ2VgIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGFyZSBhbHJlYWR5IHZhbHVlcyBvbiBtdWx0aXBsZVxuICogc291cmNlIGNoYW5uZWxzLCB0aGUgb3JkZXIgdGhhdCB0aGV5J3JlIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzXG4gKiByYW5kb20uXG4gKlxuICogVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgY3JlYXRlZCBieSB0aGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGJ1ZmZlciB2YWx1ZVxuICogcGFzc2VkIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyLiBJZiB0aGlzIGlzIG1pc3NpbmcsIGBudWxsYCwgb3IgYDBgLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlXG4gKiBwYXJhbWV0ZXIgaXMgYSBidWZmZXIsIHRoZW4gdGhhdCBidWZmZXIgaXMgdXNlZCB0byBidWZmZXIgdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIEFzIGVhY2ggc291cmNlIGNoYW5uZWwgY2xvc2VzLCBpdCBpcyByZW1vdmVkIGZyb20gdGhlIG1lcmdlLCBsZWF2aW5nIHRoZVxuICogY2hhbm5lbHMgdGhhdCBhcmUgc3RpbGwgb3BlbiB0byBjb250aW51ZSBtZXJnaW5nLiBXaGVuICphbGwqIG9mIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWxzIGNsb3NlLCB0aGVuIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2IH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IG1lcmdlIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dDEgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDIgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDMgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBtZXJnZShbaW5wdXQxLCBpbnB1dDIsIGlucHV0M10pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgLy8gQmVjYXVzZSB3ZSdyZSBzZW5kaW5nIHRvIGFsbCB0aHJlZSBjaGFubmVscyBpbiB0aGUgc2FtZVxuICogICAvLyBwcm9jZXNzLCB3ZSBrbm93IHRoZSBvcmRlciBpbiB3aGljaCB0aGUgdmFsdWVzIHdpbGwgYmVcbiAqICAgLy8gc2VudCB0byB0aGUgb3V0cHV0IGNoYW5uZWw7IGluIGdlbmVyYWwsIHdlIHdvbid0IGtub3cgdGhpc1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDMpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAyXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gM1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWxbXX0gc3JjcyBBbiBhcnJheSBvZiBzb3VyY2UgY2hhbm5lbHMuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGBcbiAqICAgICBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbCwgd2hpY2ggd2lsbCByZWNlaXZlIGFsbFxuICogICAgIHZhbHVlcyBwdXQgb250byBldmVyeSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gbWVyZ2Uoc3JjcywgYnVmZmVyID0gMCkge1xuICBjb25zdCBkc3QgPSBjaGFuKGJ1ZmZlcik7XG4gIGNvbnN0IGlucHV0cyA9IHNyY3Muc2xpY2UoKTtcblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHZhbHVlLCBjaGFubmVsIH0gPSBhd2FpdCBzZWxlY3QoaW5wdXRzKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGlucHV0cy5zcGxpY2UoaW5wdXRzLmluZGV4T2YoY2hhbm5lbCksIDEpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgfVxuICAgIGNsb3NlKGRzdCk7XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogU3BsaXRzIGEgc2luZ2xlIGNoYW5uZWwgaW50byBtdWx0aXBsZSBkZXN0aW5hdGlvbiBjaGFubmVscywgd2l0aCBlYWNoXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHJlY2VpdmluZyBldmVyeSB2YWx1ZSBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBFdmVyeSBwYXJhbWV0ZXIgYWZ0ZXIgdGhlIGZpcnN0IHJlcHJlc2VudHMgdGhlIGJ1ZmZlciBmcm9tIGEgc2luZ2xlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsLiBFYWNoIGAwYCBvciBgbnVsbGAgd2lsbCBwcm9kdWNlIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCxcbiAqIHdoaWxlIGVhY2ggcG9zaXRpdmUgaW50ZWdlciB3aWxsIHByb2R1Y2UgYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyXG4gKiBvZiB0aGF0IHNpemUuIEVhY2ggYnVmZmVyIHdpbGwgcHJvZHVjZSBhIGJ1ZmZlcmVkIGNoYW5uZWwgYmFja2VkIGJ5IHRoYXRcbiAqIGJ1ZmZlci4gSWYgdGhlcmUgYXJlIG5vIHBhcmFtZXRlcnMgYWZ0ZXIgdGhlIGZpcnN0LCB0aGVuIHR3byB1bmJ1ZmZlcmVkXG4gKiBjaGFubmVscyB3aWxsIGJlIHByb2R1Y2VkIGFzIGEgZGVmYXVsdC5cbiAqXG4gKiBXaGVuIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQsIGFsbCBkZXN0aW5hdGlvbiBjaGFubmVscyB3aWxsIGFsc28gYmVcbiAqIGNsb3NlZC4gSG93ZXZlciwgaWYgZGVzdGluYXRpb24gY2hhbm5lbHMgYXJlIGNsb3NlZCwgdGhleSBkbyBub3RoaW5nIHRvIHRoZVxuICogc291cmNlIGNoYW5uZWwuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXRzID0gc3BsaXQoaW5wdXQsIDMpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgZm9yIGF3YWl0IChjb25zdCBvdXRwdXQgb2Ygb3V0cHV0cykge1xuICogICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4gKiAgICAgLy8gLT4gMVxuICogICAgIC8vIC0+IDJcbiAqICAgICAvLyAtPiAzXG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICogVGhpcyBmdW5jdGlvbiBtb3ZlcyBpdHMgdmFsdWVzIHRvIHRoZSBvdXRwdXQgY2hhbm5lbHMgYXN5bmNocm9ub3VzbHkuIFRoaXNcbiAqIG1lYW5zIHRoYXQgZXZlbiB3aGVuIHVzaW5nIHVuYnVmZmVyZWQgY2hhbm5lbHMsIGl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yIGFsbFxuICogb3V0cHV0IGNoYW5uZWxzIHRvIGJlIHJlY2VpdmVkIGZyb20gYmVmb3JlIHRoZSBuZXh0IHNlbmQgdG8gdGhlIGlucHV0IGNoYW5uZWxcbiAqIGNhbiBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0gey4uLihudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVycz0yXSBUaGUgYnVmZmVycyB1c2VkIHRvIGNyZWF0ZVxuICogICAgIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVscy4gRWFjaCBlbnRyeSBpcyB0cmVhdGVkIHNlcGFyYXRlbHkuIElmIG9uZSBpcyBhXG4gKiAgICAgbnVtYmVyLCB0aGVuIGEge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ8Rml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZVxuICogICAgIHdpbGwgYmUgdXNlZC4gSWYgb25lIGlzIGEgYDBgLCB0aGVuIHRoZSBjb3JyZXNwb25kaW5nIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIHVuYnVmZmVyZWQuICoqRXhjZXB0aW9uOioqIGlmIGEgc2luZ2xlIG51bWJlciBpcyBwYXNzZWQsIHRoZW4gdGhhdCBudW1iZXJcbiAqICAgICBvZiB1bmJ1ZmVycmVkIGNoYW5uZWxzIHdpbGwgYmUgY3JlYXRlZC4gVGhpcyBtZWFucyB0aGF0IHRoZSBkZWZhdWx0IGlzIHRvXG4gKiAgICAgY3JlYXRlIHR3byB1bmJ1ZmZlcmVkIGNoYW5uZWxzLiBUbyBjcmVhdGUgYSBzaW5nbGUgY2hhbm5lbCB3aXRoIGEgZml4ZWRcbiAqICAgICBidWZmZXIsIHVzZSBge0BsaW5rIGNzcC5maXhlZHxmaXhlZH1gIGV4cGxpY2l0bHkuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWxbXX0gQW4gYXJyYXkgb2YgZGVzdGluYXRpb24gY2hhbm5lbHMuXG4gKi9cbmZ1bmN0aW9uIHNwbGl0KHNyYywgLi4uYnVmZmVycykge1xuICBsZXQgYmZzID0gYnVmZmVycy5sZW5ndGggPT09IDAgPyBbMl0gOiBidWZmZXJzO1xuICBpZiAoYmZzLmxlbmd0aCA9PT0gMSAmJiBpc051bWJlcihiZnNbMF0pKSB7XG4gICAgY29uc3QgY291bnQgPSBiZnNbMF07XG4gICAgYmZzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBiZnMucHVzaCgwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkc3RzID0gYmZzLm1hcChiZiA9PiBjaGFuKGJmKSk7XG4gIGNvbnN0IGRvbmUgPSBjaGFuKCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgaWYgKC0tY291bnQgPT09IDApIHtcbiAgICAgIHNlbmRBc3luYyhkb25lKTtcbiAgICB9XG4gIH1cblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZWN2KHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBmb3IgKGNvbnN0IGRzdCBvZiBkc3RzKSB7XG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY291bnQgPSBkc3RzLmxlbmd0aDtcbiAgICAgIGZvciAoY29uc3QgZHN0IG9mIGRzdHMpIHtcbiAgICAgICAgc2VuZEFzeW5jKGRzdCwgdmFsdWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHJlY3YoZG9uZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0cztcbn1cblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGFkZCB0aGUgYWJpbGl0eSB0byBiZSB0YXBwZWQgdG8gYSBjaGFubmVsIHRoYXQgaXMgYmVpbmdcbiAqIHRhcHBlZC4gVGhpcyB3aWxsIGFkZCBhIHNpbmdsZSBwcm9wZXJ0eSB0byB0aGF0IGNoYW5uZWwgb25seSAobmFtZWRcbiAqICdAQG11bHRpdGFwL3RhcHMnIHNvIGFzIHRvIGRlY3JlYXNlIHRoZSBjaGFuY2Ugb2YgY29sbGlzaW9uKSwgYnV0IHRoZSB0YXBwaW5nXG4gKiBmdW5jdGlvbmFsaXR5IGl0c2VsZiBpcyBwcm92aWRlZCBvdXRzaWRlIHRoZSBjaGFubmVsIG9iamVjdC4gVGhpcyBuZXdcbiAqIHByb3BlcnR5IGlzIGFuIGFycmF5IG9mIHRoZSBjaGFubmVscyB0YXBwaW5nIHRoaXMgY2hhbm5lbCwgYW5kIGl0IHdpbGwgYmVcbiAqIHJlbW92ZWQgaWYgYWxsIHRhcHMgYXJlIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwgdG8gYmUgdGFwcGVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWFrZVRhcChzcmMpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNyYywgVEFQUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogW11cbiAgfSk7XG5cbiAgY29uc3QgZG9uZSA9IGNoYW4oKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICBpZiAoLS1jb3VudCA9PT0gMCkge1xuICAgICAgc2VuZEFzeW5jKGRvbmUpO1xuICAgIH1cbiAgfVxuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEIHx8IHNyY1tUQVBTXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHNyY1tUQVBTXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvdW50ID0gc3JjW1RBUFNdLmxlbmd0aDtcbiAgICAgIGZvciAoY29uc3QgdGFwIG9mIHNyY1tUQVBTXSkge1xuICAgICAgICBzZW5kQXN5bmModGFwLCB2YWx1ZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgYXdhaXQgcmVjdihkb25lKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFRhcHMgYSBjaGFubmVsLCBzZW5kaW5nIGFsbCBvZiB0aGUgdmFsdWVzIHNlbnQgdG8gaXQgdG8gdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIEEgc291cmNlIGNoYW5uZWwgY2FuIGJlIHRhcHBlZCBtdWx0aXBsZSB0aW1lcywgYW5kIGFsbCBvZiB0aGUgdGFwcGluZ1xuICogKGRlc3RpbmF0aW9uKSBjaGFubmVscyByZWNlaXZlIGVhY2ggdmFsdWUgc2VudCB0byB0aGUgdGFwcGVkIChzb3VyY2UpXG4gKiBjaGFubmVsLlxuICpcbiAqIFRoaXMgaXMgZGlmZmVyZW50IGZyb20gYHtAbGluayBtb2R1bGU6b3BzLnNwbGl0fHNwbGl0fWAgaW4gdGhhdCBpdCdzXG4gKiB0ZW1wb3JhcnkuIENoYW5uZWxzIGNhbiB0YXAgYSBjaGFubmVsIGFuZCB0aGVuIHVudGFwIGl0LCBtdWx0aXBsZSB0aW1lcywgYXNcbiAqIG5lZWRlZC4gSWYgYSBzb3VyY2UgY2hhbm5lbCBoYXMgYWxsIG9mIGl0cyB0YXBzIHJlbW92ZWQsIHRoZW4gaXQgcmV2ZXJ0cyB0byBhXG4gKiBub3JtYWwgY2hhbm5lbCwganVzdCBhcyBpdCB3YXMgYmVmb3JlIGl0IHdhcyB0YXBwZWQuXG4gKlxuICogQWxzbyB1bmxpa2UgYHtAbGluayBtb2R1bGU6b3BzLnNwbGl0fHNwbGl0fWAsIGVhY2ggY2FsbCBjYW4gb25seSB0YXAgb25jZS5cbiAqIEZvciBtdWx0aXBsZSBjaGFubmVscyB0byB0YXAgYSBzb3VyY2UgY2hhbm5lbCwgYHRhcGAgaGFzIHRvIGJlIGNhbGxlZFxuICogbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQ2xvc2luZyBlaXRoZXIgdGhlIHNvdXJjZSBvciBhbnkgb2YgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWxzIGhhcyBubyBlZmZlY3Qgb25cbiAqIGFueSBvZiB0aGUgb3RoZXIgY2hhbm5lbHMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyB0YXAgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3QgdGFwcGVyID0gY2hhbigpO1xuICogdGFwKGlucHV0LCB0YXBwZXIpO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KHRhcHBlcikpOyAgIC8vIC0+IDFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdih0YXBwZXIpKTsgICAvLyAtPiAyXG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgY2hhbm5lbCB0byBiZSB0YXBwZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gW2Rlc3RdIFRoZSBjaGFubmVsIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLiBJZlxuICogICAgIHRoaXMgaXMgbm90IHByZXNlbnQsIGEgbmV3IHVuYnVmZmVyZWQgY2hhbm5lbCB3aWxsIGJlIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBUaGlzIGlzIHRoZSBzYW1lIGFzIHRoZVxuICogICAgIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudDsgb3RoZXJ3aXNlIGl0IGlzIHRoZSBuZXdseS1jcmVhdGVkIGNoYW5uZWxcbiAqICAgICB0YXBwaW5nIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdGFwKHNyYywgZHN0ID0gY2hhbigpKSB7XG4gIGlmICghc3JjW1RBUFNdKSB7XG4gICAgbWFrZVRhcChzcmMpO1xuICB9XG4gIGlmICghc3JjW1RBUFNdLmluY2x1ZGVzKGRzdCkpIHtcbiAgICBzcmNbVEFQU10ucHVzaChkc3QpO1xuICB9XG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogVW50YXBzIGEgcHJldmlvdXNseSB0YXBwaW5nIGRlc3RpbmF0aW9uIGNoYW5uZWwgZnJvbSBpdHMgc291cmNlIGNoYW5uZWwuXG4gKlxuICogVGhpcyByZW1vdmVzIGEgcHJldmlvdXNseSBjcmVhdGVkIHRhcC4gVGhlIGRlc3RpbmF0aW9uICh0YXBwaW5nKSBjaGFubmVsIHdpbGxcbiAqIHN0b3AgcmVjZWl2aW5nIHRoZSB2YWx1ZXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwuXG4gKlxuICogSWYgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2FzIG5vdCwgaW4gZmFjdCwgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwsIHRoaXNcbiAqIGZ1bmN0aW9uIHdpbGwgZG8gbm90aGluZy4gSWYgYWxsIHRhcHMgYXJlIHJlbW92ZWQsIHRoZSBzb3VyY2UgY2hhbm5lbCByZXZlcnRzXG4gKiB0byBub3JtYWwgKGkuZS4sIGl0IG5vIGxvbmdlciBoYXMgdGhlIHRhcHBpbmcgY29kZSBhcHBsaWVkIHRvIGl0IGFuZCBjYW4gYmVcbiAqIHRha2VuIGZyb20gYXMgbm9ybWFsKS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgdGFwcGVkIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gZGVzdCBUaGUgY2hhbm5lbCB0aGF0IGlzIHRhcHBpbmcgdGhlIHNvdXJjZVxuICogICAgIGNoYW5uZWwgdGhhdCBzaG91bGQgbm8gbG9uZ2VyIGJlIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB1bnRhcChzcmMsIGRzdCkge1xuICBjb25zdCB0YXBzID0gc3JjW1RBUFNdO1xuICBpZiAodGFwcykge1xuICAgIGNvbnN0IGluZGV4ID0gdGFwcy5pbmRleE9mKGRzdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGFwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgaWYgKHRhcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNlbmRBc3luYyhzcmMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIHRhcHMgZnJvbSBhIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIFRoZSBwcmV2aW91c2x5LXRhcHBlZCBjaGFubmVsIHJldmVydHMgdG8gYSBub3JtYWwgY2hhbm5lbCwgd2hpbGUgYW55IGNoYW5uZWxzXG4gKiB0aGF0IG1pZ2h0IGhhdmUgYmVlbiB0YXBwaW5nIGl0IG5vIGxvbmdlciByZWNlaXZlIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwuIElmIHRoZSBzb3VyY2UgY2hhbm5lbCBoYWQgbm8gdGFwcywgdGhpcyBmdW5jdGlvbiBkb2VzIG5vdGhpbmcuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHRhcHBlZCBjaGFubmVsLiBBbGwgdGFwcyB3aWxsIGJlIHJlbW92ZWRcbiAqICAgICBmcm9tIHRoaXMgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gdW50YXBBbGwoc3JjKSB7XG4gIGlmIChzcmNbVEFQU10pIHtcbiAgICBzcmNbVEFQU10gPSBbXTtcbiAgICBzZW5kQXN5bmMoc3JjKTtcbiAgfVxufVxuXG4vKipcbiAqIE1hcHMgdGhlIHZhbHVlcyBmcm9tIG9uZSBvciBtb3JlIHNvdXJjZSBjaGFubmVscyB0aHJvdWdoIGEgZnVuY3Rpb24sIHNlbmRpbmdcbiAqIHRoZSByZXN1bHRzIHRvIGEgbmV3IGNoYW5uZWwuXG4gKlxuICogVGhlIG1hcHBpbmcgZnVuY3Rpb24gaXMgZ2l2ZW4gb25lIHZhbHVlIGZyb20gZWFjaCBzb3VyY2UgY2hhbm5lbCwgYWZ0ZXIgYXRcbiAqIGxlYXN0IG9uZSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSBvbiBldmVyeSBzb3VyY2UgY2hhbm5lbC4gVGhlIG91dHB1dCB2YWx1ZVxuICogZnJvbSB0aGUgZnVuY3Rpb24gaXMgdGhlbiBzZW50IHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICpcbiAqIFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGNyZWF0ZWQgYnkgdGhlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBidWZmZXIgdmFsdWVcbiAqIHBhc3NlZCBhcyB0aGUgdGhpcmQgcGFyYW1ldGVyLiBJZiB0aGlzIGlzIG1pc3NpbmcsIGBudWxsYCwgb3IgYDBgLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLiBJZiBpdCdzIGEgcG9zaXRpdmUgaW50ZWdlciwgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIGJ1ZmZlcmVkIGJ5IGEgZml4ZWQgYnVmZmVyIG9mIHRoYXQgc2l6ZS4gSWYgdGhlXG4gKiBwYXJhbWV0ZXIgaXMgYSBidWZmZXIsIHRoZW4gdGhhdCBidWZmZXIgaXMgdXNlZCB0byBidWZmZXIgdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsLlxuICpcbiAqIE9uY2UgKmFueSogc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLCB0aGUgbWFwcGluZyBjZWFzZXMgYW5kIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbCBpcyBhbHNvIGNsb3NlZC5cbiAqXG4gKiBUaGlzIGlzIG9idmlvdXNseSBzaW1pbGFyIHRvIGEgbWFwIHRyYW5zZHVjZXIsIGJ1dCB1bmxpa2UgYSB0cmFuc2R1Y2VyLCB0aGlzXG4gKiBmdW5jdGlvbiB3b3JrcyB3aXRoIG11bHRpcGxlIGlucHV0IGNoYW5uZWxzLiBUaGlzIGlzIHNvbWV0aGluZyB0aGF0IGFcbiAqIHRyYW5zZHVjZXIgb24gYSBzaW5nbGUgY2hhbm5lbCBpcyB1bmFibGUgdG8gZG8uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UsIGlzQ2xvc2VkIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAb3BzXCJcbiAqXG4gKiBjb25zdCBpbnB1dDEgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDIgPSBjaGFuKCk7XG4gKiBjb25zdCBpbnB1dDMgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSBtYXAoKHgsIHksIHopID0+IHggKyB5ICsgeiwgW2lucHV0MSwgaW5wdXQyLCBpbnB1dDNdKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMyk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAxMCk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQyLCAyMCk7XG4gKiAgIGNsb3NlKGlucHV0Mik7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAxMDApO1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMjAwKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDMwMCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAvLyAtPiAxMTFcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDIyMlxuICogICAvLyBPdXRwdXQgY2xvc2VzIG5vdyBiZWNhdXNlIGlucHV0MiBjbG9zZXMgYWZ0ZXIgMiB2YWx1ZXNcbiAqICAgY29uc29sZS5sb2coaXNDbG9zZWQob3V0cHV0KSk7ICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOm9wcy5NYXBwZXJ9IGZuIFRoZSBtYXBwaW5nIGZ1bmN0aW9uLiBUaGlzIHNob3VsZCBoYXZlIG9uZVxuICogICAgIHBhcmFtZXRlciBmb3IgZWFjaCBzb3VyY2UgY2hhbm5lbCBhbmQgcmV0dXJuIGEgc2luZ2xlIHZhbHVlLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWxbXX0gc3JjcyBUaGUgc291cmNlIGNoYW5uZWxzLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2J1ZmZlcj0wXSBBIGJ1ZmZlciB1c2VkIHRvIGNyZWF0ZSB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsLiBJZiB0aGlzIGlzIGEgbnVtYmVyLCBhXG4gKiAgICAge0BsaW5rIG1vZHVsZTpjc3AuRml4ZWRCdWZmZXJ9IG9mIHRoYXQgc2l6ZSB3aWxsIGJlIHVzZWQuIElmIHRoaXMgaXMgYDBgXG4gKiAgICAgb3Igbm90IHByZXNlbnQsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIG1hcChmbiwgc3JjcywgYnVmZmVyID0gMCkge1xuICBjb25zdCBkc3QgPSBjaGFuKGJ1ZmZlcik7XG4gIGNvbnN0IHNyY2xlbiA9IHNyY3MubGVuZ3RoO1xuICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgY29uc3QgY2FsbGJhY2tzID0gW107XG4gIGNvbnN0IHRlbXAgPSBjaGFuKCk7XG4gIGxldCBjb3VudDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY2xlbjsgaSsrKSB7XG4gICAgY2FsbGJhY2tzW2ldID0gKGluZGV4ID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKC0tY291bnQgPT09IDApIHtcbiAgICAgICAgICBzZW5kQXN5bmModGVtcCwgdmFsdWVzLnNsaWNlKCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKGkpO1xuICB9XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvdW50ID0gc3JjbGVuO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNsZW47IGkrKykge1xuICAgICAgICByZWN2QXN5bmMoc3Jjc1tpXSwgY2FsbGJhY2tzW2ldKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHJlY3YodGVtcCk7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICAgIC8vIE9uY2UgYSBzb3VyY2UgY2xvc2VzLCB3ZSBjbG9zZSB0aGUgZGVzdGluYXRpb24gQU5EIHRoZSByZXN0IG9mIHRoZVxuICAgICAgICAgIC8vIHNvdXJjZXMuIE90aGVyd2lzZSB0aGUgc291cmNlcyB3aWxsIGhhdmUgbm90aGluZyByZWNlaXZpbmcgZnJvbVxuICAgICAgICAgIC8vIHRoZW0gYW5kIHNlbmRzIHRvIHRoZW0gd2lsbCBibG9jayBmb3JldmVyLiBCeSBjbG9zaW5nIHRoZW0sIHNlbmRzXG4gICAgICAgICAgLy8gdG8gdGhlbSB3aWxsIGltbWVkaWF0ZWx5IHJldHVybiBgZmFsc2VgIGFuZCBub3QgYmxvY2suXG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgICBmb3IgKGNvbnN0IHNyYyBvZiBzcmNzKSB7XG4gICAgICAgICAgICBjbG9zZShzcmMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZHN0LCBmbiguLi52YWx1ZXMpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbmV4cG9ydCB7IHBpcGUsIHBhcnRpdGlvbiwgbWVyZ2UsIHNwbGl0LCB0YXAsIHVudGFwLCB1bnRhcEFsbCwgbWFwIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBjaGFubmVsIHV0aWxpdGllcyBmb3IgY2hhbmdpbmcgdGhlIHRpbWluZyBvZiBpbnB1dHMgYmVpbmcgcHV0IG9udG9cbiAqIHRoZSBpbnB1dCBjaGFubmVsLlxuICpcbiAqIEBtb2R1bGUgb3BzL3RpbWluZ1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBnbyxcbiAgY2hhbixcbiAgc2VuZCxcbiAgc2VsZWN0LFxuICBjbG9zZSxcbiAgQ0xPU0VELFxuICBpc1RpbWVkLFxuICB0aW1lZENoYW5cbn0gZnJvbSBcIkBjaGFua28vY3NwXCI7XG5cbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSBcIm1vZHVsZXMvY29tbW9uXCI7XG5cbi8qKlxuICogRGVib3VuY2VzIGFuIGlucHV0IGNoYW5uZWwuXG4gKlxuICogRGVib3VuY2luZyBpcyB0aGUgYWN0IG9mIHR1cm5pbmcgc2V2ZXJhbCBpbnB1dCB2YWx1ZXMgaW50byBvbmUuIEZvciBleGFtcGxlLFxuICogZGVib3VuY2luZyBhIGNoYW5uZWwgZHJpdmVuIGJ5IGEgYG1vdXNlbW92ZWAgZXZlbnQgd291bGQgY2F1c2Ugb25seSB0aGUgZmluYWxcbiAqIGBtb3VzZW1vdmVgIGV2ZW50IHRvIGJlIHB1dCBvbnRvIHRoZSBjaGFubmVsLCBkcm9wcGluZyBhbGwgb2YgdGhlIG90aGVyIG9uZXMuXG4gKiBUaGlzIGNhbiBiZSBkZXNpcmFibGUgYmVjYXVzZSBgbW91c2Vtb3ZlYCBldmVudHMgY29tZSBpbiBidW5jaGVzLCBiZWluZ1xuICogcHJvZHVjZWQgY29udGludWFsbHkgd2hpbGUgdGhlIG1vdXNlIGlzIG1vdmluZywgYW5kIG9mdGVuIGFsbCB0aGF0IHdlIHJlYWxseVxuICogY2FyZSBhYm91dCBpcyB0byBsZWFybiB3aGVyZSB0aGUgbW91c2UgZW5kZWQgdXAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBkb2VzIHRoaXMgYnkgY29udHJvbGxpbmcgd2hpY2ggdmFsdWVzIHRoYXQgaGF2ZSBiZWVuIHNlbnQgdG9cbiAqIHRoZSBzb3VyY2UgY2hhbm5lbCBhcmUgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwsIGFuZCB3aGVuLlxuICpcbiAqIFRoZSBgZGVsYXlgIHBhcmFtZXRlciBkZXRlcm1pbmVzIHRoZSBkZWJvdW5jZSB0aHJlc2hvbGQuIE9uY2UgdGhlIGZpcnN0IHZhbHVlXG4gKiBpcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCwgZGVib3VuY2luZyBpcyBpbiBlZmZlY3QgdW50aWwgdGhlIG51bWJlciBvZlxuICogbWlsbGlzZWNvbmRzIGluIGBkZWxheWAgcGFzc2VzIHdpdGhvdXQgYW55IG90aGVyIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoYXRcbiAqIGNoYW5uZWwuIEluIG90aGVyIHdvcmRzLCB0aGUgZGVsYXkgd2lsbCBiZSByZWZyZXNoZWQgaWYgYW5vdGhlciB2YWx1ZSBpcyBzZW50XG4gKiB0byB0aGUgc291cmNlIGNoYW5uZWwgYmVmb3JlIHRoZSBkZWxheSBlbGFwc2VzLiBBZnRlciBhIGZ1bGwgZGVsYXkgaW50ZXJ2YWxcbiAqIHBhc3NlcyB3aXRob3V0IGEgdmFsdWUgYmVpbmcgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwsIHRoZSBsYXN0IHZhbHVlIHNlbnRcbiAqIGJlY29tZXMgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLlxuICpcbiAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIHRocm91Z2ggZm91ciBvcHRpb25zOiBgbGVhZGluZ2AsIGB0cmFpbGluZ2AsXG4gKiBgbWF4RGVsYXlgLCBhbmQgYGNhbmNlbGAuXG4gKlxuICogSWYgYm90aCBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2AgYXJlIGB0cnVlYCwgdmFsdWVzIHdpbGwgbm90IGJlIGR1cGxpY2F0ZWQuXG4gKiBUaGUgZmlyc3QgdmFsdWUgcHV0IG9udG8gdGhlIHNvdXJjZSBjaGFubmVsIHdpbGwgYmUgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsIGltbWVkaWF0ZWx5IChwZXIgYGxlYWRpbmdgKSBhbmQgdGhlIGRlbGF5IHdpbGwgYmVnaW4sIGJ1dCBhIHZhbHVlXG4gKiB3aWxsIG9ubHkgYmUgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYXQgdGhlIGVuZCBvZiB0aGVcbiAqIGRlbGF5IChwZXIgYHRyYWlsaW5nYCkgaWYgKmFub3RoZXIqIGlucHV0IHZhbHVlIHdhcyBwdXQgb250byB0aGUgc291cmNlXG4gKiBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWZcbiAqICAgICB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IFRoZSBkZWJvdW5jaW5nIGRlbGF5LCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIEEgc2V0IG9mIG9wdGlvbnMgdG8gZnVydGhlciBjb25maWd1cmUgdGhlXG4gKiAgICAgZGVib3VuY2luZy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV0gSW5zdGVhZCBvZiBtYWtpbmcgYSB2YWx1ZSBhdmFpbGFibGVcbiAqICAgICBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhZnRlciB0aGUgZGVsYXkgcGFzc2VzLCB0aGUgZmlyc3QgdmFsdWUgcHV0XG4gKiAgICAgb250byB0aGUgc291cmNlIGNoYW5uZWwgaXMgbWFkZSBhdmFpbGFibGUgKmJlZm9yZSogdGhlIGRlbGF5IGJlZ2lucy4gTm9cbiAqICAgICB2YWx1ZSBpcyBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYWZ0ZXIgdGhlIGRlbGF5IGhhcyBlbGFwc2VkXG4gKiAgICAgKHVubGVzcyBgdHJhaWxpbmdgIGlzIGFsc28gYHRydWVgKS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV0gVGhlIGRlZmF1bHQgYmVoYXZpb3IsIHdoZXJlIGEgdmFsdWVcbiAqICAgICBpcyBub3QgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgdW50aWwgdGhlIGVudGlyZSBkZWxheVxuICogICAgIHBhc3NlcyB3aXRob3V0IGEgbmV3IHZhbHVlIGJlaW5nIHB1dCBvbiB0aGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4RGVsYXk9MF0gVGhlIG1heGltdW0gZGVsYXkgYWxsb3dlZCBiZWZvcmUgYSB2YWx1ZVxuICogICAgIGlzIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBEZWJvdW5jaW5nIGNhbiwgaW4gdGhlb3J5LCBnbyBvblxuICogICAgIGZvcmV2ZXIgYXMgbG9uZyBhcyBuZXcgaW5wdXQgdmFsdWVzIGNvbnRpbnVlIHRvIGJlIHB1dCBvbnRvIHRoZSBzb3VyY2VcbiAqICAgICBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlcy4gU2V0dGluZyB0aGlzIG9wdGlvbiB0byBhIHBvc2l0aXZlXG4gKiAgICAgbnVtYmVyIHNldHMgdGhlIG1heGltdW0gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGRlYm91bmNpbmcgY2FuIGdvIG9uXG4gKiAgICAgYmVmb3JlIGl0J3MgZm9yY2VkIHRvIGVuZCwgZXZlbiBpZiBpbiB0aGUgbWlkZGxlIG9mIGEgZGVib3VuY2luZyBkZWxheS5cbiAqICAgICBIYXZpbmcgZGVib3VuY2luZyBlbmQgdGhyb3VnaCB0aGUgbWF4IGRlbGF5IG9wZXJhdGVzIGV4YWN0bHkgYXMgaWYgaXQgaGFkXG4gKiAgICAgZW5kZWQgYmVjYXVzZSBvZiBsYWNrIG9mIGlucHV0OyB0aGUgbGFzdCBpbnB1dCBpcyBtYWRlIGF2YWlsYWJsZSBvbiB0aGVcbiAqICAgICBkZXN0aW5hdGlvbiBjaGFubmVsIChpZiBgdHJhaWxpbmdgIGlzIGB0cnVlYCksIGFuZCB0aGUgbmV4dCBpbnB1dCB3aWxsXG4gKiAgICAgdHJpZ2dlciBhbm90aGVyIGRlYm91bmNlIG9wZXJhdGlvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBbb3B0aW9ucy5jYW5jZWxdIEEgY2hhbm5lbCB1c2VkIHRvIHNpZ25hbCBhXG4gKiAgICAgY2FuY2VsbGF0aW9uIG9mIHRoZSBkZWJvdW5jaW5nLiBBbnkgdmFsdWUgcHV0IG9udG8gdGhpcyBjaGFubmVsIHdpbGxcbiAqICAgICBjYW5jZWwgdGhlIGN1cnJlbnQgZGVib3VuY2luZyBvcGVyYXRpb24sIGNsb3NpbmcgdGhlIG91dHB1dCBjaGFubmVsIGFuZFxuICogICAgIGRpc2NhcmRpbmcgYW55IHZhbHVlcyB0aGF0IHdlcmUgd2FpdGluZyBmb3IgdGhlIGRlYm91bmNlIHRocmVzaG9sZCB0aW1lclxuICogICAgIHRvIGJlIHNlbnQgdG8gdGhlIG91dHB1dC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIG5ld2x5LWNyZWF0ZWQgZGVzdGluYXRpb24gY2hhbm5lbCwgd2hlcmUgYWxsXG4gKiAgICAgb2YgdGhlIHZhbHVlcyB3aWxsIGJlIGRlYm91bmNlZCBmcm9tIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gZGVib3VuY2Uoc3JjLCBidWZmZXIsIGRlbGF5LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIGxlYWRpbmc6IGZhbHNlLFxuICAgIHRyYWlsaW5nOiB0cnVlLFxuICAgIG1heERlbGF5OiAwLFxuICAgIGNhbmNlbDogY2hhbigpXG4gIH07XG4gIGNvbnN0IFtidWYsIGRlbCwgb3B0c10gPSBpc051bWJlcihkZWxheSlcbiAgICA/IFtidWZmZXIsIGRlbGF5LCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBvcHRpb25zID8/IHt9KV1cbiAgICA6IFswLCBidWZmZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIGRlbGF5ID8/IHt9KV07XG5cbiAgY29uc3QgZHN0ID0gY2hhbihidWYpO1xuICBjb25zdCB7IGxlYWRpbmcsIHRyYWlsaW5nLCBtYXhEZWxheSwgY2FuY2VsIH0gPSBvcHRzO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBsZXQgdGltZXIgPSBjaGFuKCk7XG4gICAgbGV0IG1heCA9IGNoYW4oKTtcbiAgICBsZXQgY3VycmVudCA9IENMT1NFRDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGNoYW5uZWwgfSA9IGF3YWl0IHNlbGVjdChbc3JjLCB0aW1lciwgbWF4LCBjYW5jZWxdKTtcblxuICAgICAgaWYgKGNoYW5uZWwgPT09IGNhbmNlbCkge1xuICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChjaGFubmVsID09PSBzcmMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGltaW5nID0gaXNUaW1lZCh0aW1lcik7XG4gICAgICAgIHRpbWVyID0gdGltZWRDaGFuKGRlbCk7XG5cbiAgICAgICAgaWYgKCF0aW1pbmcgJiYgbWF4RGVsYXkgPiAwKSB7XG4gICAgICAgICAgbWF4ID0gdGltZWRDaGFuKG1heERlbGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWFkaW5nKSB7XG4gICAgICAgICAgaWYgKCF0aW1pbmcpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHJhaWxpbmcpIHtcbiAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVyID0gY2hhbigpO1xuICAgICAgICBtYXggPSBjaGFuKCk7XG4gICAgICAgIGlmICh0cmFpbGluZyAmJiBjdXJyZW50ICE9PSBDTE9TRUQpIHtcbiAgICAgICAgICBhd2FpdCBzZW5kKGRzdCwgY3VycmVudCk7XG4gICAgICAgICAgY3VycmVudCA9PT0gQ0xPU0VEO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG4vKipcbiAqIFRocm90dGxlcyBhbiBpbnB1dCBjaGFubmVsLlxuICpcbiAqIFRocm90dGxpbmcgaXMgdGhlIGFjdCBvZiBlbnN1cmluZyB0aGF0IHNvbWV0aGluZyBvbmx5IGhhcHBlbnMgb25jZSBwZXIgdGltZVxuICogaW50ZXJ2YWwuIEluIHRoaXMgY2FzZSwgaXQgbWVhbnMgdGhhdCBhIHZhbHVlIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsIGlzXG4gKiBvbmx5IG1hZGUgYXZhaWxhYmxlIHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIG9uY2UgcGVyIGEgZ2l2ZW4gbnVtYmVyIG9mXG4gKiBtaWxsaXNlY29uZHMuIEFuIGV4YW1wbGUgdXNhZ2Ugd291bGQgYmUgd2l0aCB3aW5kb3cgc2Nyb2xsIGV2ZW50czsgdGhlc2VcbiAqIGV2ZW50cyBhcmUgbmVhcmx5IGNvbnRpbnVvdXMgYXMgc2Nyb2xsaW5nIGlzIGhhcHBlbmluZywgYW5kIHBlcmhhcHMgd2UgZG9uJ3RcbiAqIHdhbnQgdG8gY2FsbCBhbiBleHBlbnNpdmUgVUkgdXBkYXRpbmcgZnVuY3Rpb24gZXZlcnkgdGltZSBhIHNjcm9sbCBldmVudCBpc1xuICogZmlyZWQuIFdlIGNhbiB0aHJvdHRsZSB0aGUgaW5wdXQgY2hhbm5lbCBhbmQgbWFrZSBpdCBvbmx5IG9mZmVyIHVwIHRoZSBzY3JvbGxcbiAqIGV2ZW50cyBvbmNlIGV2ZXJ5IDEwMCBtaWxsaXNlY29uZHMsIGZvciBpbnN0YW5jZS5cbiAqXG4gKiBUaHJvdHRsaW5nIGlzIGVmZmVjdGVkIGJ5IGNyZWF0aW5nIGEgbmV3IGNoYW5uZWwgYXMgYSB0aHJvdHRsZWQgZGVzdGluYXRpb25cbiAqIGZvciB2YWx1ZXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwuIFZhbHVlcyB3aWxsIG9ubHkgYXBwZWFyIG9uIHRoYXRcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgb25jZSBwZXIgZGVsYXkgaW50ZXJ2YWw7IG90aGVyIHZhbHVlcyB0aGF0IGFyZSBwdXQgb250b1xuICogdGhlIHNvdXJjZSBjaGFubmVsIGluIHRoZSBtZWFudGltZSBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIFRoZSBgZGVsYXlgIHBhcmFtZXRlciBjb250cm9scyBob3cgb2Z0ZW4gYSB2YWx1ZSBjYW4gYmVjb21lIGF2YWlsYWJsZSBvbiB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFdoZW4gdGhlIGZpcnN0IHZhbHVlIGlzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLCBpdFxuICogaXMgaW1tZWRpYXRlbHkgc2VudCB0byB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhcyB3ZWxsIGFuZCB0aGUgZGVsYXkgYmVnaW5zLlxuICogQW55IGZ1cnRoZXIgdmFsdWVzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsIGR1cmluZyB0aGF0IGRlbGF5IGFyZSAqbm90KlxuICogcGFzc2VkIHRocm91Z2g7IG9ubHkgd2hlbiB0aGUgZGVsYXkgZXhwaXJlcyBpcyB0aGUgbGFzdCBpbnB1dCB2YWx1ZSBtYWRlXG4gKiBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFRoZSBkZWxheSB0aGVuIGJlZ2lucyBhZ2Fpbiwgc28gdGhhdFxuICogZnVydGhlciBpbnB1dHMgYXJlIHNxdWVsY2hlZCB1bnRpbCAqdGhhdCogZGVsYXkgcGFzc2VzLiBUaHJvdHRsaW5nIGNvbnRpbnVlcyxcbiAqIG9ubHkgYWxsb3dpbmcgb25lIHZhbHVlIHRocm91Z2ggcGVyIGludGVydmFsLCB1bnRpbCBhbiBlbnRpcmUgaW50ZXJ2YWwgcGFzc2VzXG4gKiB3aXRob3V0IGlucHV0LlxuICpcbiAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIG1vZGlmaWVkIGJ5IHRocmVlIG9wdGlvbnM6IGBsZWFkaW5nYCwgYHRyYWlsaW5nYCwgYW5kXG4gKiBgY2FuY2VsYC5cbiAqXG4gKiBJZiBib3RoIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBhcmUgYHRydWVgLCB2YWx1ZXMgd2lsbCBub3QgYmUgZHVwbGljYXRlZC5cbiAqIFRoZSBmaXJzdCB2YWx1ZSBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIGJlIHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvblxuICogY2hhbm5lbCBpbW1lZGlhdGVseSAocGVyIGBsZWFkaW5nYCkgYW5kIHRoZSBkZWxheSB3aWxsIGJlZ2luLCBidXQgYSB2YWx1ZVxuICogd2lsbCBvbmx5IGJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGF0IHRoZSBlbmQgb2YgdGhlXG4gKiBkZWxheSAocGVyIGB0cmFpbGluZ2ApIGlmICphbm90aGVyKiBpbnB1dCB2YWx1ZSB3YXMgc2VudCB0byB0aGUgc291cmNlXG4gKiBjaGFubmVsIGJlZm9yZSB0aGUgZGVsYXkgZXhwaXJlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgc291cmNlIGNoYW5uZWwuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWZcbiAqICAgICB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IFRoZSB0aHJvdHRsaW5nIGRlbGF5LCBpbiBtaWxsaXNlY29uZHMuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIEEgc2V0IG9mIG9wdGlvbnMgdG8gZnVydGhlciBjb25maWd1cmUgdGhlXG4gKiB0aHJvdHRsaW5nLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdIE1ha2VzIHRoZSB2YWx1ZSB0aGF0IHRyaWdnZXJlZCB0aGVcbiAqICAgICB0aHJvdHRsaW5nIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBiZWZvcmVcbiAqICAgICBiZWdpbm5pbmcgdGhlIGRlbGF5LiBJZiB0aGlzIGlzIGBmYWxzZWAsIHRoZSBmaXJzdCB2YWx1ZSB3aWxsIG5vdCBiZSBwdXRcbiAqICAgICBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHVudGlsIGEgZnVsbCBkZWxheSBpbnRlcnZhbCBwYXNzZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdIE1ha2VzIHRoZSBsYXN0IHZhbHVlIHB1dCBvbnRvIHRoZVxuICogICAgIHNvdXJjZSBjaGFubmVsIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aGVuIHRoZSBkZWxheVxuICogICAgIGV4cGlyZXMuIElmIHRoaXMgaXMgYGZhbHNlYCwgYW55IGlucHV0cyB0aGF0IGNvbWUgaW4gZHVyaW5nIHRoZSBkZWxheSBhcmVcbiAqICAgICBpZ25vcmVkLCBhbmQgdGhlIG5leHQgdmFsdWUgaXMgbm90IHB1dCBvbnRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHVudGlsXG4gKiAgICAgdGhlIGZpcnN0IGlucHV0ICphZnRlciogdGhlIGRlbGF5IGV4cGlyZXMuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gW29wdGlvbnMuY2FuY2VsXSBBIGNoYW5uZWwgdXNlZCB0byBzaWduYWwgYVxuICogICAgIGNhbmNlbGxhdGlvbiBvZiB0aGUgdGhyb3R0bGluZy4gQW55IHZhbHVlIHB1dCBvbnRvIHRoaXMgY2hhbm5lbCB3aWxsXG4gKiAgICAgY2FuY2VsIHRoZSBjdXJyZW50IHRocm90dGxpbmcgb3BlcmF0aW9uLCBjbG9zaW5nIHRoZSBvdXRwdXQgY2hhbm5lbCBhbmRcbiAqICAgICBkaXNjYXJkaW5nIGFueSB2YWx1ZXMgdGhhdCB3ZXJlIHdhaXRpbmcgZm9yIHRoZSB0aHJvdHRsZSB0aHJlc2hvbGQgdGltZXJcbiAqICAgICB0byBiZSBzZW50IHRvIHRoZSBvdXRwdXQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9fSBUaGUgbmV3bHktY3JlYXRlZCBkZXN0aW5hdGlvbiBjaGFubmVsLCB3aGVyZVxuICogICAgIGFsbCBvZiB0aGUgdmFsdWVzIHdpbGwgYmUgdGhyb3R0bGVkIGZyb20gdGhlIHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB0aHJvdHRsZShzcmMsIGJ1ZmZlciwgZGVsYXksIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgbGVhZGluZzogdHJ1ZSxcbiAgICB0cmFpbGluZzogdHJ1ZSxcbiAgICBjYW5jZWw6IGNoYW4oKVxuICB9O1xuICBjb25zdCBbYnVmLCBkZWwsIG9wdHNdID0gaXNOdW1iZXIoZGVsYXkpXG4gICAgPyBbYnVmZmVyLCBkZWxheSwgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgb3B0aW9ucyA/PyB7fSldXG4gICAgOiBbMCwgYnVmZmVyLCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBkZWxheSA/PyB7fSldO1xuXG4gIGNvbnN0IGRzdCA9IGNoYW4oYnVmKTtcbiAgY29uc3QgeyBsZWFkaW5nLCB0cmFpbGluZywgY2FuY2VsIH0gPSBvcHRzO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBsZXQgdGltZXIgPSBjaGFuKCk7XG4gICAgbGV0IGN1cnJlbnQgPSBDTE9TRUQ7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBjaGFubmVsIH0gPSBhd2FpdCBzZWxlY3QoW3NyYywgdGltZXIsIGNhbmNlbF0pO1xuXG4gICAgICBpZiAoY2hhbm5lbCA9PT0gY2FuY2VsKSB7XG4gICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbm5lbCA9PT0gc3JjKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpbWluZyA9IGlzVGltZWQodGltZXIpO1xuICAgICAgICBpZiAoIXRpbWluZykge1xuICAgICAgICAgIHRpbWVyID0gdGltZWRDaGFuKGRlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGVhZGluZykge1xuICAgICAgICAgIGlmICghdGltaW5nKSB7XG4gICAgICAgICAgICBhd2FpdCBzZW5kKGRzdCwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHJhaWxpbmcpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHJhaWxpbmcpIHtcbiAgICAgICAgICBjdXJyZW50ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHJhaWxpbmcgJiYgY3VycmVudCAhPT0gQ0xPU0VEKSB7XG4gICAgICAgIHRpbWVyID0gdGltZWRDaGFuKGRlbCk7XG4gICAgICAgIGF3YWl0IHNlbmQoZHN0LCBjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9IENMT1NFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVyID0gY2hhbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuZXhwb3J0IHsgZGVib3VuY2UsIHRocm90dGxlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9