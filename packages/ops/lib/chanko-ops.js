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
module.exports=g;/***/},/***/"../xduce/lib/chanko-xduce.js":/*!************************************!*\
  !*** ../xduce/lib/chanko-xduce.js ***!
  \************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else{}})(this,function(){return(/******/function(modules){// webpackBootstrap
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
        \**********************/ /*! exports provided: protocols, iterator, kv, key, value, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce, toFunction, toReducer, transduce, sequence, into, asArray, asObject, asString, asIterator, compose */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var modules_protocol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/protocol */"./src/modules/protocol.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"protocols",function(){return modules_protocol__WEBPACK_IMPORTED_MODULE_0__["protocols"];});/* harmony import */var modules_iteration__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! modules/iteration */"./src/modules/iteration.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"iterator",function(){return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["iterator"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"kv",function(){return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["kv"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"key",function(){return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["key"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"value",function(){return modules_iteration__WEBPACK_IMPORTED_MODULE_1__["value"];});/* harmony import */var modules_reduction__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! modules/reduction */"./src/modules/reduction.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"complete",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["complete"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"uncomplete",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["uncomplete"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isCompleted",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["isCompleted"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ensureCompleted",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ensureCompleted"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"ensureUncompleted",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["ensureUncompleted"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"reduce",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["reduce"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"toFunction",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toFunction"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"toReducer",function(){return modules_reduction__WEBPACK_IMPORTED_MODULE_2__["toReducer"];});/* harmony import */var modules_transformation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! modules/transformation */"./src/modules/transformation.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"transduce",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["transduce"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"sequence",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["sequence"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"into",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["into"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"asArray",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asArray"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"asObject",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asObject"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"asString",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asString"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"asIterator",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["asIterator"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"compose",function(){return modules_transformation__WEBPACK_IMPORTED_MODULE_3__["compose"];});/**
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
         * @param {module:xduce.TransducerFunction} xform A transducer to chain this transducer
         *     to.
         * @return {module:xduce.TransducerFunction} A new transducer consisting of the
         *     composition of this one and `xform`.
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
        \**********************************/ /*! exports provided: init, step, result, toReducer, ARRAY_REDUCER, OBJECT_REDUCER, STRING_REDUCER, toFunction, complete, uncomplete, isCompleted, ensureCompleted, ensureUncompleted, reduce */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"init",function(){return init;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"step",function(){return step;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"result",function(){return result;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"toReducer",function(){return toReducer;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ARRAY_REDUCER",function(){return ARRAY_REDUCER;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"OBJECT_REDUCER",function(){return OBJECT_REDUCER;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"STRING_REDUCER",function(){return STRING_REDUCER;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"toFunction",function(){return toFunction;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"complete",function(){return complete;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"uncomplete",function(){return uncomplete;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isCompleted",function(){return isCompleted;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ensureCompleted",function(){return ensureCompleted;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ensureUncompleted",function(){return ensureUncompleted;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"reduce",function(){return reduce;});/* harmony import */var modules_protocol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! modules/protocol */"./src/modules/protocol.js");/* harmony import */var modules_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! modules/utils */"./src/modules/utils.js");/* harmony import */var modules_iteration__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! modules/iteration */"./src/modules/iteration.js");/**
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
         * @module utils
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
         * @memberof module:xduce/common
         * @param {*} x The value being tested to see if it is a function.
         * @return {boolean} Either `true` if the test value is a function or `false` if
         *     it is not.
         * @private
         */function isFunction(x){return toString.call(x)==="[object Function]";}/**
         * Determines whether a value is a generator function.
         *
         * @memberof module:xduce/utils
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
         * @memberof module:xduce/utils
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
         * @memberof module:xduce/utils
         * @param {*} x The value being tested to see if it is a number.
         * @return {boolean} Either `true` if the test value is a finite number (not
         *     including string representations of numbers) or `false` if it is not.
         */function isNumber(x){return toString.call(x)==="[object Number]"&&isFinite(x);}/**
         * Determines whether a value is a string.
         *
         * Literal strings will return `true`, as will instances of the `String` object.
         *
         * @memberof module:xduce/utils
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
         * @memberof module:xduce/utils
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
  \****************************************/ /*! exports provided: CLOSED, MAX_DIRTY, MAX_QUEUED, channel, handleSend, handleRecv, close, box, isBox */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CLOSED",function(){return CLOSED;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAX_DIRTY",function(){return MAX_DIRTY;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"MAX_QUEUED",function(){return MAX_QUEUED;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"channel",function(){return channel;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"handleSend",function(){return handleSend;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"handleRecv",function(){return handleRecv;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"close",function(){return close;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"box",function(){return box;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isBox",function(){return isBox;});/* harmony import */var _chanko_xduce__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @chanko/xduce */"../xduce/lib/chanko-xduce.js");/* harmony import */var _chanko_xduce__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var modules_queue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! modules/queue */"./src/modules/queue.js");/* harmony import */var modules_buffer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! modules/buffer */"./src/modules/buffer.js");/* harmony import */var modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! modules/dispatcher */"./src/modules/dispatcher.js");/**
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
 */function isReduced(value){return!!(value===null||value===void 0?void 0:value[_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__["protocols"].reduced]);}/**
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
 * @param {module:xduce.TransducerFunction} xform The transducer used to transform
 *     values sent to the channel. If no transformations are necessary, a
 *     passthrough transducer should be provided.
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
if(channel.buffer&&!Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["isFull"])(channel.buffer)){handler.commit();const done=isReduced(channel.xform[_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer,value));for(;;){if(Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(channel.buffer)===0){break;}receiver=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);if(receiver===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}if(receiver.active){callback=receiver.commit();const val=Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(channel.buffer);if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(val));}}}if(done){close(channel);}return box(true);}// This loop happens if the channel is unbuffered and there is at least one
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
if(channel.buffer&&Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(channel.buffer)>0){handler.commit();const value=Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(channel.buffer);for(;;){if(Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["isFull"])(channel.buffer)){break;}sender=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.sends);if(sender===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}sendHandler=sender.handler;if(sendHandler.active){callback=sendHandler.commit();if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(true));}if(isReduced(channel.xform[_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__["protocols"].step](channel.buffer,sender.value))){close(channel);}}}return box(value);}// This loop runs on an unbuffered channel if there are any pending sends.
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
if(channel.buffer){channel.xform[_chanko_xduce__WEBPACK_IMPORTED_MODULE_0__["protocols"].result](channel.buffer);for(;;){if(Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["count"])(channel.buffer)===0){break;}receiver=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);if(receiver===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}if(receiver.active){callback=receiver.commit();const value=Object(modules_buffer__WEBPACK_IMPORTED_MODULE_2__["remove"])(channel.buffer);if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(value));}}}}// Once the buffer is empty (or if there isn't a buffer at all), send CLOSED
// to all remaining queued receives.
for(;;){receiver=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.recvs);if(receiver===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}if(receiver.active){callback=receiver.commit();if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(CLOSED));}}}// Send `false` to any remaining queued sends.
for(;;){sender=Object(modules_queue__WEBPACK_IMPORTED_MODULE_1__["dequeue"])(channel.sends);if(sender===modules_queue__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]){break;}if(sender.handler.active){callback=sender.handler.commit();if(callback){Object(modules_dispatcher__WEBPACK_IMPORTED_MODULE_3__["dispatch"])(()=>callback(false));}}}}/***/},/***/"./src/modules/channel/index.js":/*!**************************************!*\
  !*** ./src/modules/channel/index.js ***!
  \**************************************/ /*! exports provided: CLOSED, DEFAULT, chan, timedChan, transChan, isClosed, isBuffered, isTimed, sendAsync, recvAsync, selectAsync, send, recv, recvOrThrow, select, close, value, channel */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"chan",function(){return chan;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"timedChan",function(){return timedChan;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"transChan",function(){return transChan;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isClosed",function(){return isClosed;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isBuffered",function(){return isBuffered;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isTimed",function(){return isTimed;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"sendAsync",function(){return sendAsync;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"recvAsync",function(){return recvAsync;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"send",function(){return send;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"recv",function(){return recv;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"recvOrThrow",function(){return recvOrThrow;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"close",function(){return close;});/* harmony import */var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/awaitAsyncGenerator */"../../node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js");/* harmony import */var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/wrapAsyncGenerator */"../../node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js");/* harmony import */var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _handler__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./handler */"./src/modules/channel/handler.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CLOSED",function(){return _handler__WEBPACK_IMPORTED_MODULE_2__["CLOSED"];});/* harmony import */var _select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./select */"./src/modules/channel/select.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DEFAULT",function(){return _select__WEBPACK_IMPORTED_MODULE_3__["DEFAULT"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"selectAsync",function(){return _select__WEBPACK_IMPORTED_MODULE_3__["selectAsync"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"select",function(){return _select__WEBPACK_IMPORTED_MODULE_3__["select"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"value",function(){return _select__WEBPACK_IMPORTED_MODULE_3__["value"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"channel",function(){return _select__WEBPACK_IMPORTED_MODULE_3__["channel"];});/* harmony import */var modules_buffer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! modules/buffer */"./src/modules/buffer.js");/* harmony import */var _chanko_xduce__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @chanko/xduce */"../xduce/lib/chanko-xduce.js");/* harmony import */var _chanko_xduce__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__);/**
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
 */function handlerTransducer(xform,handler=DEFAULT_HANDLER){return{[_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer,input){try{return xform[_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer,input);}catch(ex){return handleException(buffer,handler,ex);}},[_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer){try{return xform[_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer);}catch(ex){return handleException(buffer,handler,ex);}}};}/**
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
 */const bufferReducer={[_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].init](){throw Error("init not available");},[_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].step](buffer,input){Object(modules_buffer__WEBPACK_IMPORTED_MODULE_4__["add"])(buffer,input);return buffer;},[_chanko_xduce__WEBPACK_IMPORTED_MODULE_5__["protocols"].result](buffer){return buffer;}};/**
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
 * @param {module:xduce.TransducerFunction} [options.transducer] A transducer to run
 *     each value through before putting it onto the channel. This function
 *     should expect one parameter (another transducer that it's chained to) and
 *     return an object that conforms to the transducer protocol. If a
 *     transducer is provided on an unbuffered channel, an error will be thrown.
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
 * @param {module:xduce.TransducerFunction} transducer The transducer used to transform
 *     values on the new channel.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL29wcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb3BzL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL0FzeW5jR2VuZXJhdG9yLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvQXdhaXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL2hvbWUvYmFyYW5kaXMvRGV2ZWxvcG1lbnQvcHJvamVjdHMvY2hhbmtvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2F3YWl0QXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwQXN5bmNHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL29wcy9jc3AvaG9tZS9iYXJhbmRpcy9EZXZlbG9wbWVudC9wcm9qZWN0cy9jaGFua28vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9ob21lL2JhcmFuZGlzL0RldmVsb3BtZW50L3Byb2plY3RzL2NoYW5rby9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3hkdWNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9vcHMvY3NwL3hkdWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29wcy9jc3AveGR1Y2Uvc3JjL2luZGV4LmpzIiwid2VicGFjazovL29wcy9jc3AveGR1Y2Uvc3JjL21vZHVsZXMvaXRlcmF0aW9uLmpzIiwid2VicGFjazovL29wcy9jc3AveGR1Y2Uvc3JjL21vZHVsZXMvcHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC94ZHVjZS9zcmMvbW9kdWxlcy9yZWR1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC94ZHVjZS9zcmMvbW9kdWxlcy90cmFuc2Zvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3hkdWNlL3NyYy9tb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL2luZGV4LmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvYnVmZmVyLmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvY2hhbm5lbC9oYW5kbGVyLmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvY2hhbm5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL2NoYW5uZWwvc2VsZWN0LmpzIiwid2VicGFjazovL29wcy9jc3Avc3JjL21vZHVsZXMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly9vcHMvY3NwL3NyYy9tb2R1bGVzL3Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vb3BzL2NzcC9zcmMvbW9kdWxlcy9xdWV1ZS5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL21vZHVsZXMvY29tbW9uLmpzIiwid2VicGFjazovL29wcy8uL3NyYy9tb2R1bGVzL2NvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vb3BzLy4vc3JjL21vZHVsZXMvZmxvdy5qcyIsIndlYnBhY2s6Ly9vcHMvLi9zcmMvbW9kdWxlcy90aW1pbmcuanMiXSwibmFtZXMiOlsia2V5cyIsIk9iamVjdCIsImluZGV4IiwiayIsIm9iaiIsImtleSIsInYiLCJrdiIsImN1cnJlbnQiLCJmbiIsInNvcnRGbiIsImlzRnVuY3Rpb24iLCJ2YWx1ZSIsIlN5bWJvbCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJmdW5jdGlvbkl0ZXJhdG9yIiwiaXNPYmplY3QiLCJvYmplY3RJdGVyYXRvciIsImlzSW1wbGVtZW50ZWQiLCJwcm90b2NvbHMiLCJpbml0Iiwic3RlcCIsInJlc3VsdCIsInJlZHVjZWQiLCJjb2xsZWN0aW9uIiwicCIsImlzU3RyaW5nIiwiaXNBcnJheSIsIkVycm9yIiwiYWNjIiwibWF4IiwiTWF0aCIsImlucHV0IiwiQVJSQVlfUkVEVUNFUiIsInRvUmVkdWNlciIsIk9CSkVDVF9SRURVQ0VSIiwiU1RSSU5HX1JFRFVDRVIiLCJyIiwieGZvcm0iLCJpc0NvbXBsZXRlZCIsImNvbXBsZXRlIiwidW5jb21wbGV0ZSIsIml0ZXIiLCJpdGVyYXRvciIsInJlZHVjZXIiLCJzdGVwUmVkdWNlciIsInhpdGVyIiwieGYiLCJjb21wbGV0ZWQiLCJpdGVtcyIsImRvbmUiLCJjb3VudCIsInN0ZXBWYWx1ZSIsInNJdGVyYXRvciIsImkiLCJyZWR1Y2UiLCJ0cmFuc2R1Y2UiLCJ0cmFuc2R1Y2luZ0l0ZXJhdG9yIiwiYXNBcnJheSIsImFzT2JqZWN0IiwiYXNTdHJpbmciLCJhc0l0ZXJhdG9yIiwidGFyZ2V0IiwicmV2ZXJzZWQiLCJmbnMiLCJ0b1N0cmluZyIsInByb3RvIiwiY3RvciIsImlzRmluaXRlIiwiQXJyYXkiLCJCVUZGRVIiLCJGSVhFRCIsIkRST1BQSU5HIiwiU0xJRElORyIsInF1ZXVlIiwicSIsInNpemUiLCJidWZmZXIiLCJxQ291bnQiLCJlbnF1ZXVlIiwiZGVxdWV1ZSIsIk1BWF9ESVJUWSIsIk1BWF9RVUVVRUQiLCJDTE9TRUQiLCJCT1giLCJ3cml0YWJsZSIsImhhbmRsZXIiLCJpc1RpbWVkIiwibWF4RGlydHkiLCJtYXhRdWV1ZWQiLCJyZWN2cyIsInNlbmRzIiwiZGlydHlSZWN2cyIsImRpcnR5U2VuZHMiLCJjbG9zZWQiLCJpc0J1ZmZlcmVkIiwiY2hhbm5lbCIsImJveCIsImlzRnVsbCIsImlzUmVkdWNlZCIsInJlY2VpdmVyIiwiRU1QVFkiLCJjYWxsYmFjayIsInZhbCIsInJlbW92ZSIsImRpc3BhdGNoIiwiY2xvc2UiLCJmaWx0ZXIiLCJzZW5kZXIiLCJzZW5kQm94Iiwic2VuZEhhbmRsZXIiLCJERUZBVUxUX0hBTkRMRVIiLCJhY3RpdmUiLCJjb21taXQiLCJhZGQiLCJoYW5kbGVFeGNlcHRpb24iLCJidWZmZXJSZWR1Y2VyIiwiYnVmIiwib3B0cyIsImZpeGVkIiwiaXNCdWZmZXIiLCJ0aW1lciIsImRlZmF1bHRPcHRpb25zIiwicGFyc2VBcmdzIiwidHJhbnNkdWNlciIsImhhbmRsZXJUcmFuc2R1Y2VyIiwiY2giLCJjaGFuSW1wbCIsInJlY3YiLCJzZXRUaW1lb3V0IiwiY2xvc2VJbXBsIiwiZGVsYXkiLCJjaGFuIiwiaGFuZGxlU2VuZCIsIm9wSGFuZGxlciIsImhhbmRsZVJlY3YiLCJyZXNvbHZlIiwic2VuZEFzeW5jIiwicmVjdkFzeW5jIiwicmVqZWN0IiwiREVGQVVMVCIsImdldCIsImFycmF5IiwiaiIsInVwcGVyIiwidGVtcCIsIm9wdGlvbnMiLCJvcHMiLCJwcmlvcml0eSIsImluZGljZXMiLCJyYW5kb21BcnJheSIsInNlbGVjdEhhbmRsZXIiLCJzZWxlY3RSZXN1bHQiLCJvcCIsImNyZWF0ZVNlbGVjdEhhbmRsZXIiLCJpc0JveCIsInNlbGVjdEFzeW5jIiwiU0VUX0lNTUVESUFURSIsIk1FU1NBR0VfQ0hBTk5FTCIsIlNFVF9USU1FT1VUIiwiYmF0Y2hTaXplIiwiZGlzcGF0Y2hNZXRob2QiLCJkaXNwYXRjaGVyIiwiY3JlYXRlRGlzcGF0Y2hlciIsInJ1bm5pbmciLCJxdWV1ZWQiLCJjYWxjRGlzcGF0Y2hNZXRob2QiLCJzZXRJbW1lZGlhdGUiLCJwcm9jZXNzVGFza3MiLCJ0YXNrIiwic2V0RGlzcGF0Y2hlciIsInRpbWVkQ2hhbiIsIlByb21pc2UiLCJRVUVVRSIsInN0b3JlIiwicG9pbnRlciIsIml0ZW0iLCJlbmQiLCJwcmVkaWNhdGUiLCJpc051bWJlciIsIngiLCJwcm90b3R5cGUiLCJjYWxsIiwib3V0cHV0IiwiZ28iLCJ0b0NoYW5uZWwiLCJpdGVyYWJsZSIsImxlbmd0aCIsInNlbmQiLCJ0b0FycmF5IiwicHVzaCIsIlRBUFMiLCJwaXBlIiwic3JjIiwiZHN0Iiwia2VlcE9wZW4iLCJwYXJ0aXRpb24iLCJ0QnVmZmVyIiwiZkJ1ZmZlciIsInREc3QiLCJmRHN0IiwibWVyZ2UiLCJzcmNzIiwiaW5wdXRzIiwic2xpY2UiLCJzZWxlY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwic3BsaXQiLCJidWZmZXJzIiwiYmZzIiwiZHN0cyIsIm1hcCIsImJmIiwibWFrZVRhcCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwidGFwIiwiaW5jbHVkZXMiLCJ1bnRhcCIsInRhcHMiLCJ1bnRhcEFsbCIsInNyY2xlbiIsInZhbHVlcyIsImNhbGxiYWNrcyIsImRlYm91bmNlIiwiZGVmYXVsdHMiLCJsZWFkaW5nIiwidHJhaWxpbmciLCJtYXhEZWxheSIsImNhbmNlbCIsImRlbCIsImFzc2lnbiIsInRpbWluZyIsInRocm90dGxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RCw2REFBUyxDQUFDNEQsR0FBRCxDQUFqQjtBQUNBLGNBQU0zQyx3REFBSSxDQUFDTSxHQUFELEVBQU0xTCxPQUFOLENBQVY7QUFDQUEsZUFBTyxHQUFHMkUsa0RBQVY7QUFDRCxPQUpNLE1BSUE7QUFDTHNDLGFBQUssR0FBR1csd0RBQUksRUFBWjtBQUNEO0FBQ0Y7QUFDRixHQXhDQyxDQUFGO0FBMENBLFNBQU84RCxHQUFQO0FBQ0QiLCJmaWxlIjoiY2hhbmtvLW9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9wc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvcHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FzeW5jSXRlcmF0b3IoaXRlcmFibGUpIHtcbiAgdmFyIG1ldGhvZDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmIChTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgICAgbWV0aG9kID0gaXRlcmFibGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdO1xuICAgICAgaWYgKG1ldGhvZCAhPSBudWxsKSByZXR1cm4gbWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgIH1cblxuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgIG1ldGhvZCA9IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgICBpZiAobWV0aG9kICE9IG51bGwpIHJldHVybiBtZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgYXN5bmMgaXRlcmFibGVcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jSXRlcmF0b3I7IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3NwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNzcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIEF3YWl0VmFsdWUgPSByZXF1aXJlKFwiLi9Bd2FpdFZhbHVlXCIpO1xuXG5mdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgdmFyIGZyb250LCBiYWNrO1xuXG4gIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgIG5leHQ6IG51bGxcbiAgICAgIH07XG5cbiAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIHZhciB3cmFwcGVkQXdhaXQgPSB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWU7XG4gICAgICBQcm9taXNlLnJlc29sdmUod3JhcHBlZEF3YWl0ID8gdmFsdWUud3JhcHBlZCA6IHZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgaWYgKHdyYXBwZWRBd2FpdCkge1xuICAgICAgICAgIHJlc3VtZShrZXkgPT09IFwicmV0dXJuXCIgPyBcInJldHVyblwiIDogXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIGFyZyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJlc3VtZShcInRocm93XCIsIGVycik7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgIGlmIChmcm9udCkge1xuICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICBpZiAodHlwZW9mIGdlbltcInJldHVyblwiXSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhpc1tcInJldHVyblwiXSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG5cbkFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1widGhyb3dcIl0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xufTtcblxuQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1wicmV0dXJuXCJdID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzeW5jR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9Bd2FpdFZhbHVlKHZhbHVlKSB7XG4gIHRoaXMud3JhcHBlZCA9IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9Bd2FpdFZhbHVlOyIsInZhciBBd2FpdFZhbHVlID0gcmVxdWlyZShcIi4vQXdhaXRWYWx1ZVwiKTtcblxuZnVuY3Rpb24gX2F3YWl0QXN5bmNHZW5lcmF0b3IodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXdhaXRBc3luY0dlbmVyYXRvcjsiLCJ2YXIgQXN5bmNHZW5lcmF0b3IgPSByZXF1aXJlKFwiLi9Bc3luY0dlbmVyYXRvclwiKTtcblxuZnVuY3Rpb24gX3dyYXBBc3luY0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBBc3luY0dlbmVyYXRvcjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ4ZHVjZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ4ZHVjZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG4vKipcbiAqIFRoZSBjZW50cmFsIG1vZHVsZSBmb3IgdGhlIHRyYW5zZHVjZXIgZW5naW5lLlxuICpcbiAqIEFsbCBvZiB0aGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIGRlYWwgZGlyZWN0bHkgd2l0aCB0cmFuc2R1Y2Vycy4gQnV0XG4gKiBmaXJzdCwgbGV0J3MgdGFsayBhYm91dCB0aGUgcHJvdG9jb2xzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHJlZmVycmVkIHRvXG4gKiB0aHJvdWdob3V0IG1hbnkgb2YgdGhlIGZ1bmN0aW9uIGRpc2N1c3Npb25zLlxuICpcbiAqICMjIFByb3RvY29sc1xuICpcbiAqIE9uZSBvZiB0aGUga2V5IHNlbGxpbmcgcG9pbnRzIGZvciB0cmFuc2R1Y2VycyBpcyB0aGF0IHRoZSBzYW1lIHRyYW5zZHVjZXIgY2FuXG4gKiBiZSB1c2VkIG9uIGFueSB0eXBlIG9mIGNvbGxlY3Rpb24uIFJhdGhlciB0aGFuIGhhdmluZyB0byB3cml0ZSBhIG5ldyBgbWFwYFxuICogZnVuY3Rpb24gKGZvciBleGFtcGxlKSBmb3IgZXZlcnkga2luZCBvZiBjb2xsZWN0aW9uIC0gb25lIGZvciBhbiBhcnJheSwgb25lXG4gKiBmb3IgYSBzdHJpbmcsIG9uZSBmb3IgYW4gaXRlcmF0b3IsIGV0Yy4gLSB0aGVyZSBpcyBhIHNpbmdsZSBgbWFwYCB0cmFuc2R1Y2VyXG4gKiB0aGF0IHdpbGwgd29yayB3aXRoIGFsbCBvZiB0aGVtLCBhbmQgcG90ZW50aWFsbHkgd2l0aCAqYW55KiBraW5kIG9mXG4gKiBjb2xsZWN0aW9uLiBUaGlzIGlzIHBvc3NpYmxlIGltcGxlbWVudGluZyAqcHJvdG9jb2xzKiBvbiB0aGUgY29sbGVjdGlvbnMuXG4gKlxuICogQSBwcm90b2NvbCBpbiBKYXZhU2NyaXB0IGlzIG11Y2ggbGlrZSBhbiBpbnRlcmZhY2UgaW4gbGFuZ3VhZ2VzIGxpa2UgSmF2YSBhbmRcbiAqIEMjLiBJdCBpcyBhIGNvbW1pdG1lbnQgdG8gcHJvdmlkaW5nIGEgY2VydGFpbiBmdW5jdGlvbmFsaXR5IHVuZGVyIGEgY2VydGFpblxuICogbmFtZS4gRVMyMDE1IGhhcyBzZWVuIHRoZSBpbnRyb2R1Y3Rpb24gb2YgYW4gYGl0ZXJhdG9yYCBwcm90b2NvbCwgZm9yXG4gKiBleGFtcGxlLCBhbmQgbGFuZ3VhZ2Ugc3VwcG9ydCBmb3IgaXQgKHRoZSBuZXcgYGZvci4uLm9mYCBsb29wIGNhbiB3b3JrIHdpdGhcbiAqIGFueSBvYmplY3QgdGhhdCBjb3JyZWN0bHkgaW1wbGVtZW50cyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCkuXG4gKlxuICogVG8gc3VwcG9ydCB0cmFuc2R1Y3Rpb24sIFhkdWNlIGV4cGVjdHMgY29sbGVjdGlvbnMgdG8gaW1wbGVtZW50IGZvdXJcbiAqIHByb3RvY29scy5cbiAqXG4gKiAtIGBpdGVyYXRvcmA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGl0ZXJhdG9yICh0aGlzIG9uZSBpcyBidWlsdCBpbiB0b1xuICogICBFUzYgSmF2YVNjcmlwdClcbiAqIC0gYHRyYW5zZHVjZXIvaW5pdGA6IGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiB0aGVcbiAqICAgb3V0cHV0IGNvbGxlY3Rpb25cbiAqIC0gYHRyYW5zZHVjZXIvc3RlcGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBhY2N1bXVsYXRvciAodGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgcmVkdWN0aW9uIHNvIGZhcikgYW5kIHRoZSBuZXh0IGlucHV0IHZhbHVlLCBhbmQgdGhlbiByZXR1cm5zIHRoZVxuICogICBhY2N1bXVsYXRvciB3aXRoIHRoZSBuZXh0IGlucHV0IHZhbHVlIGFkZGVkIHRvIGl0XG4gKiAtIGB0cmFuc2R1Y2VyL3Jlc3VsdGA6IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVkdWNlZCBjb2xsZWN0aW9uIGFuZFxuICogICByZXR1cm5zIHRoZSBmaW5hbCBvdXRwdXQgY29sbGVjdGlvblxuICpcbiAqIGBpdGVyYXRvcmAgaXMgdGhlIGJ1aWx0LWluIEphdmFTY3JpcHQgcHJvdG9jb2wuIFdoZW4gY2FsbGVkLCBpdCBpcyBleHBlY3RlZFxuICogdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIG92ZXIgdGhlIGltcGxlbWVudGluZyBjb2xsZWN0aW9uLiBUaGlzIGl0ZXJhdG9yIGlzIGFuXG4gKiBvYmplY3QgdGhhdCBoYXMgYSBgbmV4dGAgZnVuY3Rpb24uIEVhY2ggY2FsbCB0byBgbmV4dGAgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuXG4gKiBhbiBvYmplY3Qgd2l0aCBgdmFsdWVgIGFuZCBgZG9uZWAgcHJvcGVydGllcywgd2hpY2ggcmVzcGVjdGl2ZWx5IGhvbGQgdGhlXG4gKiBuZXh0IHZhbHVlIG9mIHRoZSBpdGVyYXRvciBhbmQgYSBib29sZWFuIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGl0ZXJhdGlvblxuICogaGFzIHJlYWNoZWQgaXRzIGVuZC4gKFRoaXMgaXMgYSBzaW1wbGlmaWVkIGV4cGxhbmF0aW9uOyBzZWVcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL0l0ZXJhdG9yc19hbmRfR2VuZXJhdG9yc3x0aGlzIE1ETiBwYWdlfVxuICogZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uKVxuICpcbiAqIGB0cmFuc2R1Y2VyL2luaXRgIChyZWZlcnJlZCB0byBmcm9tIG5vdyBvbiBhcyBgaW5pdGApIHNob3VsZCBiZSBhIGZ1bmN0aW9uXG4gKiB0aGF0IHRha2VzIG5vIHBhcmFtZXRlcnMgYW5kIHJldHVybnMgYSBuZXcsIGVtcHR5IGluc3RhbmNlIG9mIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24uIFRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBob3cgdG8gY3JlYXRlIGEgbmV3IGNvbGxlY3Rpb25cbiAqIG9mIHRoZSBjb3JyZWN0IHR5cGUuXG4gKlxuICogYHRyYW5zZHVjZXIvc3RlcGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGBzdGVwYCkgc2hvdWxkIGJlIGEgZnVuY3Rpb25cbiAqIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMuIFRoZXNlIHBhcmFtZXRlcnMgYXJlIHRoZSByZXN1bHQgb2YgdGhlIHJlZHVjdGlvblxuICogc28gZmFyIChhbmQgc28gaXMgYSBjb2xsZWN0aW9uIG9mIHRoZSBvdXRwdXQgdHlwZSkgYW5kIHRoZSBuZXh0IHZhbHVlIGZyb21cbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uLiBJdCBtdXN0IHJldHVybiB0aGUgbmV3IHJlZHVjdGlvbiByZXN1bHQsIHdpdGggdGhlIG5leHRcbiAqIHZhbHVlIGluY29ycG9yYXRlZCBpbnRvIGl0LiBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgaG93IHJlZHVjZSBhXG4gKiB2YWx1ZSBvbnRvIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIGB0cmFuc2R1Y2VyL3Jlc3VsdGAgKHJlZmVycmVkIHRvIGZyb20gbm93IG9uIGFzIGByZXN1bHRgKSBzaG91bGQgYmUgYVxuICogZnVuY3Rpb24gdGhhdCB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyB0aGUgZnVsbHkgcmVkdWNlZCBjb2xsZWN0aW9uLiBJdFxuICogc2hvdWxkIHJldHVybiB0aGUgZmluYWwgb3V0cHV0IGNvbGxlY3Rpb24uIFRoaXMgYWZmb3JkcyBhIGNoYW5jZSB0byBtYWtlIGFueVxuICogbGFzdC1taW51dGUgYWRqdXN0bWVudHMgdG8gdGhlIHJlZHVjZWQgY29sbGVjdGlvbiBiZWZvcmUgcmV0dXJuaW5nIGl0LlxuICpcbiAqIEFycmF5cywgc3RyaW5ncywgYW5kIG9iamVjdHMgYXJlIGFsbCBnaXZlbiBzdXBwb3J0IGZvciBhbGwgb2YgdGhlc2VcbiAqIHByb3RvY29scy4gT3RoZXIgY29sbGVjdGlvbnMgd2lsbCBoYXZlIHRvIHByb3ZpZGUgdGhlaXIgb3duICh0aG91Z2ggaXQgc2hvdWxkXG4gKiBiZSBub3RlZCB0aGF0IHNpbmNlIGBpdGVyYXRvcmAgaXMgYnVpbHQtaW4sIG1hbnkgdGhpcmQtcGFydHkgY29sbGVjdGlvbnMgd2lsbFxuICogYWxyZWFkeSBpbXBsZW1lbnQgdGhpcyBwcm90b2NvbCkuIEFzIGFuIGV4YW1wbGUsIGxldCdzIGFkZCB0cmFuc2R1Y2VyIHN1cHBvcnRcbiAqIHRvIGEgdGhpcmQtcGFydHkgY29sbGVjdGlvbiwgdGhlIGBJbW11dGFibGUuTGlzdGAgY29sbGVjdGlvbiBmcm9tXG4gKiB7QGxpbmsgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vaW1tdXRhYmxlLWpzL3xpbW11dGFibGUtanN9LlxuICpcbiAqIGBgYFxuICogSW1tdXRhYmxlLkxpc3QucHJvdG90eXBlW3Byb3RvY29scy5pbml0XSA9ICgpID0+IEltbXV0YWJsZS5MaXN0KCkuYXNNdXRhYmxlKCk7XG4gKiBJbW11dGFibGUuTGlzdC5wcm90b3R5cGVbcHJvdG9jb2xzLnN0ZXBdID0gKGFjYywgaW5wdXQpID0+IGFjYy5wdXNoKGlucHV0KTtcbiAqIEltbXV0YWJsZS5MaXN0LnByb3RvdHlwZVtwcm90b2NvbHMucmVzdWx0XSA9ICh2YWx1ZSkgPT4gdmFsdWUuYXNJbW11dGFibGUoKTtcbiAqIGBgYFxuICpcbiAqIGBJbW11dGFibGUuTGlzdGAgYWxyZWFkeSBpbXBsZW1lbnRzIGBpdGVyYXRvcmAsIHNvIHdlIGRvbid0IGhhdmUgdG8gZG8gaXRcbiAqIG91cnNlbHZlcy5cbiAqXG4gKiBUaGUgYGluaXRgIGZ1bmN0aW9uIHJldHVybnMgYW4gZW1wdHkgbXV0YWJsZSBsaXN0LiBUaGlzIGlzIGltcG9ydGFudCBmb3JcbiAqIGltbXV0YWJsZS1qcyBiZWNhdXNlIGl0cyBkZWZhdWx0IGxpc3RzIGFyZSBpbW11dGFibGUsIGFuZCBpbW11dGFibGUgbGlzdHNcbiAqIG1lYW4gdGhhdCBhIG5ldyBsaXN0IGhhcyB0byBiZSBjcmVhdGVkIHdpdGggZXZlcnkgcmVkdWN0aW9uIHN0ZXAuIEl0IHdvdWxkXG4gKiB3b3JrIGZpbmUsIGJ1dCBpdCdzIHF1aXRlIGluZWZmaWNpZW50LlxuICpcbiAqIFRoZSBgc3RlcGAgZnVuY3Rpb24gYWRkcyB0aGUgbmV4dCB2YWx1ZSB0byB0aGUgYWxyZWFkeS1jcmVhdGVkIGxpc3QuXG4gKiBgSW1tdXRhYmxlLkxpc3RgIHByb3ZpZGVzIGEgYHB1c2hgIGZ1bmN0aW9uIHRoYXQgd29ya3MgbGlrZSBhbiBhcnJheSdzXG4gKiBgcHVzaGAsIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIG5ldyBsaXN0IHdpdGggdGhlIHZhbHVlIHB1c2hlZCBvbnRvIGl0LlxuICogVGhpcyBpcyBwZXJmZWN0IGZvciBvdXIgYHN0ZXBgIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBgcmVzdWx0YCBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgbm93LWZpbmlzaGVkIG11dGFibGUgbGlzdCBpbnRvIGFuXG4gKiBpbW11dGFibGUgb25lLCB3aGljaCBpcyB3aGF0J3MgZ29pbmcgdG8gYmUgZXhwZWN0ZWQgaWYgd2UncmUgdHJhbnNkdWNpbmdcbiAqIHNvbWV0aGluZyBpbnRvIGFuIGBJbW11dGFibGUuTGlzdGAuIEluIG1vc3QgY2FzZXMsIGByZXN1bHRgIGRvZXNuJ3QgaGF2ZSB0b1xuICogZG8gYW55IHdvcmssIGJ1dCBzaW5jZSB3ZSdyZSBjcmVhdGluZyBhbiBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb24gb2Ygb3VyXG4gKiBjb2xsZWN0aW9uIHR5cGUgaGVyZSwgdGhpcyBsZXRzIHVzIGNyZWF0ZSB0aGUgY29sbGVjdGlvbiB0aGF0IHdlIGFjdHVhbGx5XG4gKiB3YW50IHRvIG91dHB1dC4gKFdpdGhvdXQgYHJlc3VsdGAsIHdlIHdvdWxkIGhhdmUgdG8gdXNlIGltbXV0YWJsZSBsaXN0cyBhbGxcbiAqIHRoZSB3YXkgdGhyb3VnaCwgY3JlYXRpbmcgYSBuZXcgb25lIHdpdGggZWFjaCBgc3RlcGAgZnVuY3Rpb24sIHNpbmNlIHdlXG4gKiB3b3VsZG4ndCBiZSBhYmxlIHRvIG1ha2UgdGhpcyBjb252ZXJzdGlvbiBhdCB0aGUgZW5kLilcbiAqXG4gKiBXaXRoIHRob3NlIHByb3RvY29scyBpbXBsZW1lbnRlZCBvbiB0aGUgcHJvdG90eXBlLCBgSW1tdXRhYmxlLkxpc3RgXG4gKiBjb2xsZWN0aW9ucyBjYW4gbm93IHN1cHBvcnQgYW55IHRyYW5zZHVjdGlvbiB3ZSBjYW4gb2ZmZXIuXG4gKlxuICogIyMjIFByb3RvY29sc1xuICpcbiAqIEFmdGVyIHRhbGtpbmcgYSBsb3QgYWJvdXQgcHJvdG9jb2xzIGFuZCBzaG93aW5nIGhvdyB0aGV5J3JlIHByb3BlcnRpZXMgYWRkZWRcbiAqIHRvIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBwcmV0dHkgb2J2aW91cyB0aGF0IHRoZXJlJ3MgYmVlbiBubyBtZW50aW9uIG9mXG4gKiB3aGF0IHRoZSBhY3R1YWwgbmFtZXMgb2YgdGhvc2UgcHJvcGVydGllcyBhcmUuIFRoYXQncyB3aGF0XG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5wcm90b2NvbHN8cHJvdG9jb2xzfWAgaXMgZm9yLlxuICpcbiAqIFRoZSBiZXN0IHdheSB0byB1c2UgdGhlc2Uga2V5cyBjYW4gYmUgc2VlbiBpbiB0aGUgaW1tdXRhYmxlLWpzIGV4YW1wbGUgYWJvdmUuXG4gKiBJbnN0ZWFkIG9mIHdvcnJ5aW5nIGFib3V0IHRoZSBuYW1lIG9mIHRoZSBrZXkgZm9yIHRoZSBgaW5pdGAgcHJvdG9jb2wsIHRoZVxuICogdmFsdWUgb2YgYHByb3RvY29scy5pbml0YCBpcyB1c2VkLlxuICpcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnByb3RvY29sc3xwcm90b2NvbHN9YCBkZWZpbmVzIHRoZXNlIHByb3RvY29sIHByb3BlcnR5XG4gKiBuYW1lcy5cbiAqXG4gKiAtIGBpbml0YFxuICogLSBgc3RlcGBcbiAqIC0gYHJlc3VsdGBcbiAqIC0gYHJlZHVjZWRgOiB1c2VkIGludGVybmFsbHkgdG8gbWFyayBhIGNvbGxlY3Rpb24gYXMgYWxyZWFkeSByZWR1Y2VkXG4gKiAtIGB2YWx1ZWA6IHVzZWQgaW50ZXJuYWxseSB0byBwcm92aWRlIHRoZSBhY3R1YWwgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgIGNvbGxlY3Rpb25cbiAqXG4gKiBUaGUgZmluYWwgdHdvIHZhbHVlcyBkb24ndCBoYXZlIGEgbG90IG9mIHVzZSBvdXRzaWRlIHRoZSBsaWJyYXJ5IHVubGVzc1xuICogeW91J3JlIHdyaXRpbmcgeW91ciBvd24gdHJhbnNkdWNlcnMuXG4gKlxuICogIyMgSG93IE9iamVjdHMgQXJlIFRyZWF0ZWRcbiAqXG4gKiBPYmplY3RzIGJlYXIgc29tZSB0aG91Z2h0IGJlY2F1c2UgcmVndWxhcmx5LCB0aGV5IGFyZW4ndCBjYW5kaWRhdGVzIGZvclxuICogaXRlcmF0aW9uIChhbmQgdGhlcmVmb3JlIGZvciB0cmFuc2R1Y3Rpb24gaW4gZ2VuZXJhbCkuIFRoZXkgZG9uJ3QgaGF2ZSBhIHZlcnlcbiAqIHN0cmFpZ2h0Zm9yd2FyZCBpZGVhIG9mIG9yZGVyLCBhbmQgdGhleSBoYXZlICp0d28qIHBpZWNlcyBvZiBkYXRhIChrZXkgYW5kXG4gKiB2YWx1ZSkgZm9yIGV2ZXJ5IGVsZW1lbnQgaW5zdGVhZCBvZiBvbmUuIFlldCBpdCdzIHVuZGVuaWFibGUgdGhhdCBhdCBsZWFzdFxuICogZm9yIG1vc3QgdHJhbnNmb3JtYXRpb25zLCBiZWluZyBhYmxlIHRvIGFwcGx5IHRoZW0gdG8gb2JqZWN0cyB3b3VsZCBiZSBxdWl0ZVxuICogaGFuZHkuXG4gKlxuICogRm9yIHRoYXQgcmVhc29uLCBzcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZW5kLXRvLWVuZCBmb3Igb2JqZWN0cy5cbiAqXG4gKiAjIyMgT2JqZWN0IGl0ZXJhdGlvblxuICpcbiAqIEl0ZXJhdGluZyBvdmVyIGFuIG9iamVjdCB3aWxsIHByb2R1Y2Ugb25lIG9iamVjdCBwZXIgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsXG4gKiBvYmplY3QuIEFuIG9yZGVyIGlzIGltcG9zZWQ7IGJ5IGRlZmF1bHQsIHRoaXMgb3JkZXIgdGhlIHNhbWUgYXMgdGhlIG9yZGVyaW5nXG4gKiBvZiBrZXlzIGluIHBvc3QtRVM2IEphdmFzY3JpcHQ6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogVGhlIGB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfWAgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCBhIHNvcnRpbmdcbiAqIGZ1bmN0aW9uIHRoYXQgY2FuIHNvcnQga2V5cyBpbiBhbnkgb3RoZXIgd2F5LlxuICpcbiAqIFRoZSByZXN1bHQgb2YgdGhlIGl0ZXJhdGlvbiwgaXMgYSBzZXQgb2Ygb2JqZWN0cyBlYWNoIHdpdGggYSBzaW5nbGUgcHJvcGVydHksXG4gKiBvbmUgZm9yIGVhY2ggZW51bWVyYWJsZSBvd24gcHJvcGVydHkgb24gdGhlIG9yaWdpbmFsIG9iamVjdC4gVGhlIHN0YW5kYXJkXG4gKiBvcmRlcmluZyBmb3Igb2JqZWN0cyAoZnJvbSBFUzYgb253YXJkKSBpcyBhcyBmb2xsb3dzOlxuICpcbiAqICMjIyBUcmFuc2Zvcm1pbmcgb2JqZWN0c1xuICpcbiAqIFdoaWxlIGl0ZXJhdGluZyBvdmVyIG9iamVjdHMgaW4gdGhpcyB3YXkgaXMgc3RyYWlnaHRmb3J3YXJkLCB0aGUgc3ludGF4IG9mXG4gKiBvYmplY3RzIG1ha2VzIGl0IHVnbHkgdG8gdHJhbnNmb3JtIHRoZW0gaW4gdGhpcyBmb3JtLiBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBhXG4gKiB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiB0aGF0IG1ha2VzIHRoZSBvYmplY3QncyBrZXlzIHVwcGVyLWNhc2UgYW5kIGFkZHMgb25lXG4gKiB0byBlYWNoIG9mIHRoZSB2YWx1ZXM6XG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2JqKSB7XG4gKiAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gKiAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG4gKiAgIHJldHVybiB7IFtrZXkudG9VcHBlckNhc2UoKV06IHZhbHVlICsgMSB9O1xuICogfVxuICogYGBgXG4gKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gbmFtZWQgYHtAbGluayBtb2R1bGU6eGR1Y2UucHJvcGVydHl8cHJvcGVydHl9YCBjYW4gaW1wcm92ZVxuICogdGhpcyBieSBoYW5kbGluZyB0aGUgYm9pbGVycGxhdGUuXG4gKlxuICogYGBgXG4gKiBmdW5jdGlvbiBpbXByb3ZlZFRyYW5zZm9ybShvYmopIHtcbiAqICAgY29uc3Qge2ssIHZ9ID0gcHJvcGVydHkob2JqKTtcbiAqICAgcmV0dXJuIHsgW2sudG9VcHBlckNhc2UoKV06IHYgKyAxIH07XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiAjIyMgUmVkdWNpbmcgb2JqZWN0c1xuICpcbiAqIFRoZSBidWlsdC1pbiByZWR1Y2VycyAoZm9yIGFycmF5cywgb2JqZWN0cywgc3RyaW5ncywgYW5kIGl0ZXJhdG9ycylcbiAqIHVuZGVyc3RhbmQgdGhlc2Ugc2luZ2xlLXByb3BlcnR5IG9iamVjdHMgYW5kIHJlZHVjZSB0aGVtIGluIHRoZSBwcm9wZXIgbWFubmVyXG4gKiB3aXRob3V0IGFueSBmdXJ0aGVyIHdvcmsuXG4gKlxuICogVGhhdCdzIGl0IGZvciBvYmplY3Qtb2JqZWN0IHJlZHVjdGlvbi4gQ29udmVydGluZyBiZXR3ZWVuIG9iamVjdHMgYW5kIG90aGVyXG4gKiB0eXBlcyBpcyBhbm90aGVyIG1hdHRlci5cbiAqXG4gKiBFdmVyeSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGV4Y2VwdCBmb3IgYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YFxuICogaXMgY2FwYWJsZSBvZiB0dXJuaW5nIGFuIG9iamVjdCBpbnRvIGEgZGlmZmVyZW50IHR5cGUgb2YgY29sbGVjdGlvbiwgdHVybmluZ1xuICogYSBkaWZmZXJlbnQgdHlwZSBvZiBjb2xsZWN0aW9uIGludG8gYW4gb2JqZWN0LCBvciBib3RoLiBPYmplY3RzIGFyZSBkaWZmZXJlbnRcbiAqIGJlY2F1c2UgdGhleSdyZSB0aGUgb25seSBcImNvbGxlY3Rpb25zXCIgdGhhdCBoYXZlIHR3byBkaWZmZXJlbnQgcGllY2VzIG9mIGRhdGFcbiAqIHBlciBlbGVtZW50LiBCZWNhdXNlIG9mIHRoaXMsIHdlIGhhdmUgdG8gaGF2ZSBhIHN0cmF0ZWd5IG9uIGhvdyB0byBtb3ZlIGZyb21cbiAqIG9uZSB0byBhbm90aGVyLlxuICpcbiAqIFRyYW5zZHVjaW5nIGFuIG9iamVjdCBpbnRvIGEgZGlmZmVyZW50IHR5cGUgaXMgZ2VuZXJhbGx5IHByZXR0eSBlYXN5LiBJZiBhblxuICogb2JqZWN0IGlzIGNvbnZlcnRlZCBpbnRvIGFuIGFycmF5LCBmb3IgaW5zdGFuY2UsIHRoZSBhcnJheSBlbGVtZW50cyB3aWxsIGVhY2hcbiAqIGJlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLCBvbmUgcGVyIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gKlxuICogU3RyaW5ncyBhcmUgYSBkaWZmZXJlbnQgc3RvcnksIHNpbmNlIGVuY29kaW5nIGEgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0byBhXG4gKiBzdHJpbmcgaXNuJ3QgcG9zc2libGUgKGJlY2F1c2UgZXZlcnkgXCJlbGVtZW50XCIgb2YgYSBzdHJpbmcgaGFzIHRvIGJlIGEgc2luZ2xlXG4gKiBjaGFyYWN0ZXIpLiBTdHJpbmdzIHRoYXQgYXJlIHByb2R1Y2VkIGZyb20gb2JqZWN0cyB3aWxsIGluc3RlYWQganVzdCBiZSB0aGVcbiAqIG9iamVjdCB2YWx1ZXMsIGNvbmNhdGVuYXRlZC4gQmVjYXVzZSBvYmplY3RzIGFyZSBpdGVyYXRlZCBpbiBhIHBhcnRpY3VsYXJcbiAqIG9yZGVyLCB0aGlzIGNvbnZlcnNpb24gd2lsbCBhbHdheXMgcHJvZHVjZSB0aGUgc2FtZSBzdHJpbmcsIGJ1dCBleGNlcHQgaW5cbiAqIHNvbWUgdmVyeSBzcGVjaWZpYyBjYXNlcyB0aGVyZSByZWFsbHkgaXNuJ3QgYSBsb3Qgb2YgdXNlIGZvciB0aGlzIGNvbnZlcnNpb24uXG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7YTogMSwgYjogMn07XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzQXJyYXkob2JqKTtcbiAqIC8vIHJlc3VsdCA9IFt7YTogMX0sIHtiOiAyfV1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKG9iaik7XG4gKiAvLyByZXN1bHQgaXMgYW4gaXRlcmF0b3Igd2l0aCB0d28gdmFsdWVzOiB7YTogMX0gYW5kIHtiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGludG8oSW1tdXRhYmxlLkxpc3QoKSwgb2JqKVxuICogLy8gcmVzdWx0IGlzIGFuIGltbXV0YWJsZSBsaXN0IHdpdGggdHdvIGVsZW1lbnRzOiB7YTogMX0gYW5kIHtiOiAyfVxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKG9iaik7XG4gKiAvLyByZXN1bHQgaXMgJzEyJ1xuICogYGBgXG4gKlxuICogVGhlIG9wcG9zaXRlIGNvbnZlcnNpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIGluc2lkZSB0aGUgY29sbGVjdGlvbnMuIElmXG4gKiB0aG9zZSB2YWx1ZXMgYXJlIG9iamVjdHMsIHRoZW4gdGhlIHJlc3VsdCBpcyBhbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlXG4gKiBvYmplY3RzIGNvbWJpbmVkIChpZiBtb3JlIHRoYW4gb25lIGhhcyB0aGUgc2FtZSBrZXksIHRoZSBsYXN0IG9uZSBpcyB0aGUgb25lXG4gKiB0aGF0J3Mga2VwdCkuIE90aGVyd2lzZSwga2V5cyBhcmUgY3JlYXRlZCBmb3IgZWFjaCBvZiB0aGUgZWxlbWVudHMsIHN0YXJ0aW5nXG4gKiB3aXRoIGAwYCBhbmQgaW5jcmVhc2luZyBmcm9tIHRoZXJlLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBjb252ZXJ0aW5nIGFuIG9iamVjdCB0byBhbnkgbm9uLXN0cmluZyBjb2xsZWN0aW9uIGFuZCBiYWNrXG4gKiBwcm9kdWNlcyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICpcbiAqIGBgYFxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KFt7YTogMX0sIHtiOiAyfV0pO1xuICogLy8gcmVzdWx0ID0ge2E6IDEsIGI6IDJ9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vIHJlc3VsdCA9IHswOiAxLCAxOiAyLCAyOiAzfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KCdoZWxsbycpO1xuICogLy8gcmVzdWx0ID0gezA6ICdoJywgMTogJ2UnLCAyOiAnbCcsIDM6ICdsJywgNDogJ28nfVxuICogYGBgXG4gKlxuICogQG1vZHVsZSB4ZHVjZVxuICovXG5cbmV4cG9ydCB7IHByb3RvY29scyB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5leHBvcnQgeyBpdGVyYXRvciwga3YsIGtleSwgdmFsdWUgfSBmcm9tIFwibW9kdWxlcy9pdGVyYXRpb25cIjtcbmV4cG9ydCB7XG4gIGNvbXBsZXRlLFxuICB1bmNvbXBsZXRlLFxuICBpc0NvbXBsZXRlZCxcbiAgZW5zdXJlQ29tcGxldGVkLFxuICBlbnN1cmVVbmNvbXBsZXRlZCxcbiAgcmVkdWNlLFxuICB0b0Z1bmN0aW9uLFxuICB0b1JlZHVjZXJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5leHBvcnQge1xuICB0cmFuc2R1Y2UsXG4gIHNlcXVlbmNlLFxuICBpbnRvLFxuICBhc0FycmF5LFxuICBhc09iamVjdCxcbiAgYXNTdHJpbmcsXG4gIGFzSXRlcmF0b3IsXG4gIGNvbXBvc2Vcbn0gZnJvbSBcIm1vZHVsZXMvdHJhbnNmb3JtYXRpb25cIjtcblxuLyoqXG4gKiBBbiBpdGVyYWJsZSBhcyBkZWZpbmVkIGJ5IEphdmFTY3JpcHQuXG4gKiBcbiAqIEB0eXBlZGVmIEpzSXRlcmFibGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkpzSXRlcmFibGVGdW5jdGlvbn0gU3ltYm9sLml0ZXJhdG9yIEEgZnVuY3Rpb24gdGhhdFxuICogICAgIHByb2R1Y2VzIGFuIGl0ZXJhdG9yIHdoZW4gY2FsbGVkLlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGFuIGl0ZXJhdG9yLiBUaGlzIGlzIHRoZSBjaGFyYWN0ZXJpc3RpYyBwcm9wZXJ0eSBvZlxuICogYSBKYXZhU2NyaXB0IGl0ZXJhYmxlLlxuICpcbiAqIEBjYWxsYmFjayBKc0l0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEByZXR1cm5zIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIG92ZXIgdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlfSB0aGF0IHByb2R1Y2VkIGl0LlxuICovXG5cbi8qKlxuICogQW4gaXRlcmFibGUgYXMgZGVmaW5lZCBieSB0aGlzIGxpYnJhcnkuIFNpbmNlIGl0IHByb3ZpZGVzIHNwZWNpZmljIHN1cHBvcnRcbiAqIGZvciBvYmplY3RzLCB0aGlzIHR5cGUgaXMgbWVyZWx5IGEgbm9ybWFsIEphdmFTY3JpcHQgaXRlcmFibGUgKm9yKiBhIHBsYWluXG4gKiBvYmplY3QuXG4gKiBcbiAqIEB0eXBlZGVmIHsoT2JqZWN0fG1vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlKX0gSXRlcmFibGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqL1xuXG4vKipcbiAqIEEgZ2VuZXJpYyBpdGVyYXRvci4gVGhpcyBjb25mb3JtcyB0byB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCBpbiB0aGF0IGl0IGhhc1xuICogYSBge0BsaW5rIG1vZHVsZTp4ZHVjZS5OZXh0RnVuY3Rpb258bmV4dH1gIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXNcbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dFZhbHVlfGBpdGVyYXRvcmAtY29tcGF0aWJsZSBvYmplY3RzfS5cbiAqXG4gKiBAdHlwZWRlZiBJdGVyYXRvclxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufSBuZXh0IEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiAgICAgcmV0dXJucyB0aGUgbmV4dCBpdGVyYXRvciB2YWx1ZS5cbiAqL1xuXG4vKipcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHNhdGlzZmllcyB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCBvbiBhbiBvYmplY3QuIFdoZW5cbiAqIGNhbGxlZCwgaXQgcmV0dXJucyB0aGUgbmV4dCB2YWx1ZSBpbiB0aGUgaXRlcmF0b3IuXG4gKlxuICogQGNhbGxiYWNrIE5leHRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5OZXh0VmFsdWV9IFRoZSBuZXh0IHZhbHVlIGluIHRoZSBpdGVyYXRvci5cbiAqL1xuXG4vKipcbiAqIFRoZSBvYmplY3QgcmV0dXJuZWQgYnkgYSBjYWxsIHRvIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAuXG4gKiBJdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgaXRlcmF0b3IgaXMgY29tcGxldGUgYW5kLCBpZiBub3QsIHdoYXQgdGhlIG5leHRcbiAqIHZhbHVlIGlzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5leHRWYWx1ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB0aGUgaXRlcmF0b3IgaGFzIHByb3ZpZGVkLlxuICogQHByb3BlcnR5IHtib29sZWFufSBkb25lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpdGVyYXRvciBoYXMgY29tcGxldGVkLiBJZlxuICogICAgIHRoaXMgaXMgYHRydWVgLCB0aGVuIGB2YWx1ZWAgd2lsbCBiZSBgdW5kZWZpbmVkYCBhbmQgZXZlcnkgc3Vic2VxdWVudFxuICogICAgIGNhbGwgdG8gYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCB3aWxsIGNvbnRpbnVlIHRvIHByb2R1Y2VcbiAqICAgICB0aGUgc2FtZSB2YWx1ZS4gSWYgaXQncyBgZmFsc2VgLCB0aGVuIGB2YWx1ZWAgcmVwcmVzZW50cyB0aGUgbmV0IHZhbHVlIGluXG4gKiAgICAgdGhlIGl0ZXJhdG9yLCBhbmQgdGhlIG5leHQgY2FsbCB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2lsbCBjb250aW51ZSB0byBwcm9kdWNlIHRoZVxuICogICAgIG5leHQgdmFsdWUuXG4gKi9cblxuLyoqXG4gKiBBIHNvcnQgZnVuY3Rpb24gZm9yIHRoZSBrZXlzIG9mIGFuIG9iamVjdC4gVGhpcyBjb25mb3JtcyB0byB0aGUgbm9ybWFsIHNvcnRcbiAqIGZ1bmN0aW9uIHVzZWQgaW4gYEFycmF5LnByb3RvdHlwZS5zb3J0YC5cbiAqXG4gKiBAY2FsbGJhY2sgU29ydEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkgeyp9IGEgVGhlIGZpcnN0IHZhbHVlIHRvIGJlIHNvcnRlZC5cbiAqIEBwcm9wZXJ0eSB7Kn0gYiBUaGUgc2Vjb25kIHZhbHVlIHRvIGJlIHNvcnRlZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IEVpdGhlciBgLTFgIGlmIGBhID4gYmAsIGAxYCBpZiBgYSA8IGJgLCBvciBgMGAgaWYgYGEgPT09XG4gKiAgICAgYmAuXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY2FuIGhhdmUgYW4gaXRlcmF0b3IgY3JlYXRlZCBmb3IgaXQuXG4gKlxuICogQGNhbGxiYWNrIEl0ZXJhYmxlRnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXhdIFRoZSBudW1iZXIgb2YgdGltZXMgdGhhdFxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgaGFzIGJlZW4gY2FsbGVkIG9uIHRoZVxuICogICAgIGZ1bmN0aW9uJ3MgaXRlcmF0b3IuIFRoaXMgd2lsbCBzdGFydCBhdCBgMGAgZm9yIHRoZSBmaXJzdCBjYWxsIHRvXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCBhbmQgaW5jcmVhc2UgYnkgb25lIGZvciBlYWNoXG4gKiAgICAgc3Vic2VxdWVudCBjYWxsLlxuICogQHBhcmFtIHsqfSBbbGFzdF0gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhlIGxhc3QgdGltZVxuICogICAgIGB7QGxpbmsgbW9kdWxlOnhkdWNlLk5leHRGdW5jdGlvbnxuZXh0fWAgd2FzIGNhbGxlZCBvbiBpdHMgaXRlcmF0b3IuIEZvclxuICogICAgIHRoZSBmaXJzdCBjYWxsLCB0aGlzIGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmV0dXJuIHZhbHVlIGZvciB0aGF0IGl0ZXJhdGlvbi5cbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3QsIGJ1dCB1c2luZyBvbmUgcHJvcGVydHlcbiAqIGZvciB0aGUga2V5IGFuZCBvbmUgZm9yIHRoZSB2YWx1ZS4gVGhpcyBmb3JtYXQgaXMgZWFzaWVyIHRvIHVzZSBpblxuICogdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFByb3BlcnR5T2JqZWN0XG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkgeyhTdHJpbmd8U3ltYm9sKX0gayBUaGUga2V5IG9mIHRoZSBzaW5nbGUtcHJvcGVydHkgb2JqZWN0IHRoYXQgdGhpc1xuICogICAgIG9iamVjdCByZXByZXNlbnRzLlxuICogQHByb3BlcnR5IHsqfSB2IFRoZSB2YWx1ZSBvZiB0aGUgc2luZ2xlLXByb3BlcnR5IG9iamVjdCB0aGF0IHRoaXMgb2JqZWN0XG4gKiAgICAgcmVwcmVzZW50cy5cbiAqL1xuXG4vKipcbiAqIEFuIGluaXQgZnVuY3Rpb24sIHdoaWNoIHByb3ZpZGVzIGEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiBhIGNvbGxlY3Rpb24uXG4gKlxuICogQGNhbGxiYWNrIEluaXRGdW5jdGlvblxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHJldHVybnMgeyp9IEEgbmV3LCBlbXB0eSBpbnN0YW5jZSBvZiBhIGNvbGxlY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBBIHN0ZXAgZnVuY3Rpb24sIHRoYXQgcmVkdWNlcyBhIGNvbGxlY3Rpb24gYW5kIGEgbmV3IHZhbHVlIHRvIHRoZVxuICogY29sbGVjdGlvbiB3aXRoIHRoZSB2YWx1ZSBhZGRlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU3RlcEZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IGFjYyBBbiBhY2N1bXVsYXRlZCB2YWx1ZSB0byB3aGljaCB0aGUgbmV3IHZhbHVlIGlzIGJlaW5nIGFkZGVkLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIHRvIGJlIGFkZGVkIHRvIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBUaGUgYWNjdW11bGF0ZWQgdmFsdWUgd2l0aCB0aGUgbmV3IHZhbHVlIGludGVncmF0ZWQgaW50byBpdC5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZ1bmN0aW9uIHRoYXQgb3B0aW9uYWxseSBtb2RpZmllcyB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgdGhlblxuICogcmV0dXJucyBpdC4gVGhpcyBpcyB1c2VkIGF0IHRoZSBlbmQgb2YgYSByZWR1Y3Rpb24gdG8gYWZmb3JkIGEgbGFzdCBjaGFuY2VcbiAqIGZvciB0aGUgdHJhbnNkdWNlciB0byBtb2RpZnkgdGhlIG91dHB1dCB2YWx1ZS5cbiAqXG4gKiBAY2FsbGJhY2sgUmVzdWx0RnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgVGhlIHZhbHVlIHRvIGJlIG1vZGlmaWVkIGJlZm9yZSBiZWluZyBvdXRwdXQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIG1vZGlmaWVkIHZhbHVlIHRvIGJlIG91dHB1dCBieSBhIHRyYW5zZHVjZXIuXG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIG5lY2Vzc2FyeSB0byByZWR1Y2UgdmFsdWVzIGludG8gYVxuICogcGFydGljdWxhciBraW5kIG9mIGNvbGxlY3Rpb24uIFRoZXNlIGFyZSBwYXNzZWQgdG9cbiAqIHtAbGluayBtb2R1bGU6eGR1Y2UucmVkdWNlfHJlZHVjZX0gYW5kIGxpa2UgZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlZGVmIFJlZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkluaXRGdW5jdGlvbn0gW1N5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIildIFRoZVxuICogICAgIHJlZHVjZXIncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIHJlZHVjZXIncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuUmVzdWx0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKSBUaGVcbiAqICAgICByZWR1Y2VyJ3MgcmVzdWx0IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIHRoYXQgY2FuIGhhdmUgdmFsdWVzIHJlZHVjZWQgaW50byBpdC4gU2luY2UgdGhpcyBsaWJyYXJ5XG4gKiBwcm92aWRlcyBleHBsaWNpdCBzdXBwb3J0IGZvciBhcnJheXMsIG9iamVjdHMsIGFuZCBzdHJpbmdzLCB0aG9zZSB0aHJlZSBhcmVcbiAqIGFkZGVkIHRvIHRoZSB7QGxpbmsgbW9kdWxlOnhkdWNlLlJlZHVjZXJ9IHR5cGUgdG8gZGVmaW5lIHRoaXMuXG4gKiBcbiAqIEB0eXBlZGVmIHsoQXJyYXl8U3RyaW5nfE9iamVjdHxtb2R1bGU6eGR1Y2UuUmVkdWNlcil9IFJlZHVjaWJsZVxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIHRoYXQgc3VwcG9ydHMgbm90IG9ubHkgdGhlIHJlZ3VsYXIgaXRlcmFpb24gb3ZlciBpdHMgY29udGVudHMsXG4gKiBidXQgYWxzbyByZWR1Y3Rpb24gb2YgdmFsdWVzIGludG8gaXQuIEl0IGlzIGFuIGludGVyc2VjdGlvbiB0eXBlIGNvbWJpbmluZ1xuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5JdGVyYWJsZXxJdGVyYWJsZX0gYW5kXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLlJlZHVjaWJsZXxSZWR1Y2libGV9LlxuICogXG4gKiBAdHlwZWRlZiBFeHBsaWNpdEl0ZXJhYmxlUmVkdWNpYmxlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcHJvcGVydHkge21vZHVsZTp4ZHVjZS5Kc0l0ZXJhYmxlRnVuY3Rpb259IFN5bWJvbC5pdGVyYXRvciBBIGZ1bmN0aW9uIHRoYXRcbiAqICAgICBwcm9kdWNlcyBhbiBpdGVyYXRvciB3aGVuIGNhbGxlZC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnhkdWNlLkluaXRGdW5jdGlvbn0gW1N5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIildIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyBpbml0IGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9zdGVwXCIpIFRoZVxuICogICAgIGNvbGxlY3Rpb24ncyBzdGVwIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHttb2R1bGU6eGR1Y2UuUmVzdWx0RnVuY3Rpb259IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKSBUaGVcbiAqICAgICBjb2xsZWN0aW9uJ3MgcmVzdWx0IGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogVGhlIGFjdHVhbCB0eXBlIHVzZWQgYnkgcmVkdWNpYmxlIGNvbGxlY3Rpb25zIGluIHRoaXMgbGlicmFyeS4gSXQgdGFrZXMgdGhlXG4gKiBwcm9wZXJ0eS1iYXNlZCBkZWZpbml0aW9uIGFuZCBhZGRzIGJ1aWx0LWluIHR5cGVzIHRoYXQgYXJlIHNwZWNpYWxseVxuICogc3VwcG9ydGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIEB0eXBlZGVmIHsoQXJyYXl8T2JqZWN0fFN0cmluZ3xtb2R1bGU6eGR1Y2UuRXhwbGljaXRJdGVyYWJsZVJlZHVjaWJsZSl9XG4gKiAgICAgSXRlcmFibGVSZWR1Y2libGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIGRhdGEgYW5kIGNhbiBiZSBjb21wb3NlZCB3aXRoIG90aGVyIHRyYW5zZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHRyYW5zZHVjZXIuIFRoZSB0cmFuc2R1Y2VycyB0aGVtc2VsdmVzIGFyZSBwcm92aWRlZCBieSBvdGhlclxuICogbGlicmFyaWVzOyB0aGUgb25seSBpbnZvbHZlbWVudCBvZiB0aGlzIGxpYnJhciBpcyBhcyBhIGNvbnN1bWVyIG9mXG4gKiB0cmFuc2R1Y2Vycy5cbiAqXG4gKiBUcmFuc2R1Y2VycyB3b3JrIGJ5IGhhdmluZyBzdGVwIGZ1bmN0aW9ucyB0aGF0IGFyZSBrbm93biB2aWEgcHJvdG9jb2wsIGFuZCBpdFxuICogaXMgdGhlc2Ugc3RlcCBmdW5jdGlvbnMgdGhhdCB0YWtlIGEgdmFsdWUgYXQgYSB0aW1lIHRvIGJlIHRyYW5zZm9ybWVkIGFzXG4gKiB0aGVpciBhcmd1bWVudHMuIFRoZSBhcmd1bWVudHMgdG8gdGhlIHRyYW5zZHVjZXJzIHRoZW1zZWx2ZXMgYXJlIG90aGVyXG4gKiB0cmFuc2R1Y2VycyB0aGF0IGFyZSB0aGVuIGNvbXBvc2VkIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciwgd2hpY2ggaXMgdGhlblxuICogcmV0dXJuZWQuIFRoZSB2YWx1ZXMgdGhhdCBhcmUgcHJvZHVjZWQgYXJlIHNlbGRvbSBvZiBjb25zZXF1ZW5jZSB0byB0aGUgZW5kXG4gKiB1c2VyOyB0aGVzZSBmdW5jdGlvbnMgZXhpc3QgdG8gYmUgcGFzc2VkIHRvIG90aGVyIGZ1bmN0aW9ucyB0aGF0IGRlYWwgd2l0aFxuICogdHJhbnNkdWNlcnMuXG4gKlxuICogQGNhbGxiYWNrIFRyYW5zZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJ9IHhmb3JtIEEgdHJhbnNkdWNlciB0byBjaGFpbiB0aGlzIHRyYW5zZHVjZXJcbiAqICAgICB0by5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyfSBBIG5ldyB0cmFuc2R1Y2VyIGNvbnNpc3Rpbmcgb2YgdGhlXG4gKiAgICAgY29tcG9zaXRpb24gb2YgdGhpcyBvbmUgYW5kIGB4Zm9ybWAuXG4gKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNHZW5lcmF0b3JGdW5jdGlvbiB9IGZyb20gXCJtb2R1bGVzL3V0aWxzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIGFuIG9iamVjdC5cbiAqXG4gKiBEZXRhaWxzIGFib3V0IHRoaXMgZnVuY3Rpb24gYXJlIGluY2x1ZGVkIGluIHRoZSBkb2N1bWVudGF0aW9uIGZvclxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn0uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iaiBUaGUgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5Tb3J0RnVuY3Rpb259IFtzb3J0Rm5dIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWQgdG8gc29ydFxuICogICAgIHRoZSBvYmplY3Qga2V5cyBiZWZvcmUgaXRlcmF0aW9uLiBJZiBpdCBpc24ndCBwcm92aWRlZCwgdGhlIGtleXMgd2lsbCBiZVxuICogICAgIHNvcnRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyBgT2JqZWN0LmtleXMob2JqKWAgd291bGQgc29ydCB0aGVtLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcHJvcGVydGllcyBvZiBgb2JqYC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG9iamVjdEl0ZXJhdG9yKG9iaiwgc29ydEZuKSB7XG4gIHJldHVybiAoZnVuY3Rpb24qKCkge1xuICAgIGNvbnN0IGtleXMgPVxuICAgICAgdHlwZW9mIHNvcnRGbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KHNvcnRGbilcbiAgICAgICAgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBrZXlzLmxlbmd0aCkge1xuICAgICAgY29uc3QgayA9IGtleXNbaW5kZXgrK107XG4gICAgICB5aWVsZCB7IFtrXTogb2JqW2tdIH07XG4gICAgfVxuICB9KSgpO1xufVxuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBmaXJzdCBrZXkgYW5kIHZhbHVlIGluIGFuIG9iamVjdCBhc1xuICogYSB0d28tcHJvcGVydHkgb2JqZWN0LCBvbmUgcHJvcGVydHkgZm9yIHRoZSBrZXkgYW5kIG9uZSBmb3IgdGhlIHZhbHVlLiBUaGlzXG4gKiBpcyBpbnRlbmRlZCB0byB3b3JrIHdpdGggdGhlIHZhbHVlcyBwcm92aWRlZCBieSBhbiBvYmplY3QgaXRlcmF0b3IsIGFzIHRoZVxuICogc3ludGF4IG9mIG9iamVjdHMgZG9lc24ndCB3b3JrIHZlcnkgbmljZWx5IHdpdGggc2luZ2xlLXByb3BlcnR5IG9iamVjdHMuXG4gKlxuICogYGBgXG4gKiBjb25zdCBvYmogPSB7IGM6IDEsIGE6IDIsIGI6IDMgfTtcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihvYmopO1xuICpcbiAqIGxldCB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGM6IDEgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiY1wiLCB2OiAxIH1cbiAqXG4gKiB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGE6IDIgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiYVwiLCB2OiAyIH1cbiAqXG4gKiB2YWx1ZSA9IGl0ZXIubmV4dCgpLnZhbHVlO1xuICogY29uc29sZS5sb2codmFsdWUpOyAgICAgICAgICAgICAvLyAtPiB7IGI6IDMgfVxuICogY29uc29sZS5sb2cocHJvcGVydHkodmFsdWUpKTsgICAvLyAtPiB7IGs6IFwiYlwiLCB2OiAzIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCBwcm9wZXJ0eSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5Qcm9wZXJ0eU9iamVjdH0gVGhlIHByb3BlcnR5IGFzIGEgdHdvLXByb3BlcnR5IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24ga3Yob2JqKSB7XG4gIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gIHJldHVybiB7IGs6IGtleSwgdjogb2JqW2tleV0gfTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUga2V5IG9mIHRoZSBmaXJzdCBwcm9wZXJ0eSBvZiBhblxuICogb2JqZWN0LiBUaGlzIGlzIG1lYW50IGZvciB1c2Ugd2l0aCBvYmplY3QgaXRlcmF0b3JzIHRvIG1vcmUgY29udmVuaWVudGx5XG4gKiBhY2Nlc3MgcGFydHMgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIHRoYXQgdGhleSBlbWl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCBrZXkgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHsoU3RyaW5nfFN5bWJvbCl9IFRoZSBrZXkgb2YgdGhlIG9iamVjdCdzIGZpcnN0IHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBrZXkob2JqKSB7XG4gIHJldHVybiBrdihvYmopLms7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9wZXJ0eSBvZiBhblxuICogb2JqZWN0LiBUaGlzIGlzIG1lYW50IGZvciB1c2Ugd2l0aCBvYmplY3QgaXRlcmF0b3JzIHRvIG1vcmUgY29udmVuaWVudGx5XG4gKiBhY2Nlc3MgcGFydHMgb2YgdGhlIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzIHRoYXQgdGhleSBlbWl0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCB3aG9zZSBmaXJzdCB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBvZiB0aGUgb2JqZWN0J3MgZmlyc3QgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIHZhbHVlKG9iaikge1xuICByZXR1cm4ga3Yob2JqKS52O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3Igb3ZlciBhIGZ1bmN0aW9uLlxuICpcbiAqIERldGFpbHMgYWJvdXQgdGhpcyBmdW5jdGlvbiBhcmUgaW5jbHVkZWQgaW4gdGhlIGRvY3VtZW50YXRpb24gZm9yXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZUZ1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybnMge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3Igb3ZlciB0aGUgcmV0dXJuIHZhbHVlcyBvZiBgZm5gLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZnVuY3Rpb25JdGVyYXRvcihmbikge1xuICByZXR1cm4gKGZ1bmN0aW9uKigpIHtcbiAgICBsZXQgY3VycmVudDtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY3VycmVudCA9IGZuKGluZGV4KyssIGN1cnJlbnQpO1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgY3VycmVudDtcbiAgICB9XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciBvdmVyIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqXG4gKiBGb3IgY29sbGVjdGlvbnMgdGhhdCBpbXBsZW1lbnQgdGhlIGl0ZXJhYmxlIHByb3RvY29sLCBpdCdzIGFzIHNpbXBsZSBhc1xuICogcmV0dXJuaW5nIHRoZSBpdGVyYXRvciBhbHJlYWR5IGRlZmluZWQgZm9yIHRoYXQgY29sbGVjdGlvbi5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihbMSwgMiwgM10pO1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDFcbiAqIGNvbnNvbGUubG9nKGl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyXG4gKiBjb25zb2xlLmxvZyhpdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gM1xuICogY29uc29sZS5sb2coaXRlci5uZXh0KCkuZG9uZSk7ICAgIC8vIC0+IHRydWVcbiAqIGBgYFxuICpcbiAqIE9iamVjdHMgYXJlIHNwZWNpYWxseSBzdXBwb3J0ZWQgdG8gcmV0dXJuIGFuIGl0ZXJhdG9yIGFzIHdlbGwsIGV2ZW4gdGhvdWdoXG4gKiB0aGV5IGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHByb3RvY29sLiBUaGUgaXRlcmF0b3IncyBgbmV4dGBcbiAqIGZ1bmN0aW9uIHByb3ZpZGVzIHNpbmdsZS1wcm9wZXJ0eSBvYmplY3RzLCBvbmUgZm9yIGVhY2ggcHJvcGVydHkgaW4gdGhlXG4gKiBvcmlnaW5hbCBvYmplY3QsIG9yZGVyZWQgaW4gdGhlIHN0YW5kYXJkIHBvc3QtRVM2IG9yZGVyIGZvciBpdGVyYXRpbmcgb3ZlclxuICogb2JqZWN0IGtleXM6XG4gKlxuICogMS4gS2V5cyB0aGF0IGFyZSBpbnRlZ2VycywgaW4gYXNjZW5kaW5nIG51bWVyaWNhbCBvcmRlclxuICogMi4gQWxsIG90aGVyIHN0cmluZyBrZXlzLCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIDMuIEFsbCBzeW1ib2wga2V5cywgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKlxuICogSWYgYSBkaWZmZXJlbnQgb3JkZXIgaXMgbmVlZGVkLCB0aGlzIGZ1bmN0aW9uIHRha2VzIGEgc2Vjb25kIGFyZ3VtZW50LCBhIHNvcnRcbiAqIGZ1bmN0aW9uLCB0aGF0IGFmZmVjdHMgb2JqZWN0cyBvbmx5LiBJdCBpcyBhIHN0YW5kYXJkIGZ1bmN0aW9uIHRoYXQgd291bGQgYmVcbiAqIHBhc3NlZCB0byBgQXJyYXkucHJvdG90eXBlLnNvcnRgIGFuZCBzb3J0cyB0aGUga2V5cyBhY2NvcmRpbmdseS5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IGFscGhhID0gKGEsIGIpID0+IChhIDwgYiA/IC0xIDogYiA8IGEgPyAxIDogMCk7XG4gKiBjb25zdCBvYmogPSB7IGM6IDEsIGE6IDIsIGI6IDMgfTtcbiAqXG4gKiBjb25zdCBvYmpJdGVyID0gaXRlcmF0b3Iob2JqKTtcbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGM6IDEgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYTogMiB9XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBiOiAzIH1cbiAqXG4gKiBjb25zdCBzb3J0ZWRJdGVyID0gaXRlcmF0b3Iob2JqLCBhbHBoYSk7XG4gKiBjb25zb2xlLmxvZyhvYmpJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4geyBhOiAyIH1cbiAqIGNvbnNvbGUubG9nKG9iakl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiB7IGI6IDMgfVxuICogY29uc29sZS5sb2cob2JqSXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IHsgYzogMSB9XG4gKiBgYGBcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHRoZXJlIGlzIHNwZWNpYWwgc3VwcG9ydCBmb3IgcGFzc2luZyBhIGZ1bmN0aW9uIHRvIHRoaXNcbiAqIGZ1bmN0aW9uLiBUaGUgaXRlcmF0b3IgcmV0dXJuZWQgcnVucyB0aGF0IGZ1bmN0aW9uIGZvciBlYWNoIGNhbGwgdG8gYG5leHRgLlxuICogVGhhdCBmdW5jdGlvbiBpcyBwcm92aWRlZCB0d28gYXJndW1lbnRzOiB0aGUgaW5kZXggKHN0YXJ0aW5nIGF0IGAwYCBmb3IgdGhlXG4gKiBmaXJzdCBjYWxsIHRvIGBuZXh0YCBhbmQgaW5jcmVhc2luZyBieSAxIGZvciBlYWNoIGNhbGwgdG8gYG5leHRgIGFmdGVyKSBhbmRcbiAqIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZXZpb3VzIGNhbGwgdG8gYG5leHRgIChmb3IgdGhlIGZpcnN0IGNhbGwgdG9cbiAqIGBuZXh0YCwgdGhpcyB3aWxsIGJlIGB1bmRlZmluZWRgKS4gVGhlIGl0ZXJhdGlvbiB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZVxuICogZmlyc3QgdGltZSB0aGUgaXRlcmF0ZWQgZnVuY3Rpb24gcmV0dXJucyBgdW5kZWZpbmVkYDsgYXQgdGhhdCBwb2ludCB0aGVcbiAqIGl0ZXJhdG9yIHdpbGwgdGVybWluYXRlIGFuZCByZXR1cm4gYHsgZG9uZTogdHJ1ZSB9YCBvZmYgc3Vic2VxdWVudCBgbmV4dGBcbiAqIGNhbGxzLlxuICpcbiAqIGBgYFxuICogY29uc3QgY29uc3RJdGVyID0gaXRlcmF0b3IoKCkgPT4gNik7XG4gKiBjb25zb2xlLmxvZyhjb25zdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiBjb25zb2xlLmxvZyhjb25zdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiA2XG4gKiAvLyBUaGlzIHdpbGwgY29udGludWUgZm9yZXZlciwgYXMgbG9uZyBhcyBgbmV4dGAga2VlcHMgZ2V0dGluZyBjYWxsZWRcbiAqXG4gKiBjb25zdCBpbmRleEl0ZXIgPSBpdGVyYXRvcih4ID0+IHggKiB4KTtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDA7XG4gKiBjb25zb2xlLmxvZyhpbmRleEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxO1xuICogY29uc29sZS5sb2coaW5kZXhJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gNDtcbiAqIGNvbnNvbGUubG9nKGluZGV4SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDk7XG4gKiAvLyBUaGlzIHdpbGwgY29udGludWUgZm9yZXZlciBvciB1bnRpbCB0aGUgbnVtYmVycyBnZXQgdG9vIGJpZyBmb3JcbiAqIC8vIEphdmFTY3JpcHQgdG8gZGVhbCB3dGloXG4gKlxuICogLy8gVXNpbmcgYSBkZWZhdWx0IHZhbHVlIGZvciB0aGUgYGxhc3RgIHBhcmFtZXRlciwgd2hpY2ggc2V0cyBpdHMgdmFsdWVcbiAqIC8vIGZvciB0aGUgZmlyc3QgcnVuIHdoZW4gaXQgaXMgbm9ybWFsbHkgYHVuZGVmaW5lZGBcbiAqIGNvbnN0IGxhc3RJdGVyID0gaXRlcmF0b3IoKHgsIGxhc3QgPSAxKSA9PiBsYXN0ICogKHggKyAxKSk7IC8vIGZhY3RvcmlhbCFcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMVxuICogY29uc29sZS5sb2cobGFzdEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAyXG4gKiBjb25zb2xlLmxvZyhsYXN0SXRlci5uZXh0KCkudmFsdWUpOyAgIC8vIC0+IDZcbiAqIGNvbnNvbGUubG9nKGxhc3RJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMjRcbiAqIC8vIEFnYWluLCBydW5zIGZvcmV2ZXIsIHRob3VnaCBmYWN0b3JpYWxzIGdldCBiaWcgdmVyeSBxdWlja2x5XG4gKlxuICogLy8gSXRlcmF0b3JzIHRlcm1pbmF0ZSB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB1bmRlZmluZWRgXG4gKiBjb25zdCBzdG9wSXRlciA9IGl0ZXJhdG9yKHggPT4geCA8IDIgPyB4IDogdW5kZWZpbmVkKTtcbiAqIGNvbnNvbGUubG9nKHN0b3BJdGVyLm5leHQoKS52YWx1ZSk7ICAgLy8gLT4gMFxuICogY29uc29sZS5sb2coc3RvcEl0ZXIubmV4dCgpLnZhbHVlKTsgICAvLyAtPiAxXG4gKiBjb25zb2xlLmxvZyhzdG9wSXRlci5uZXh0KCkuZG9uZSk7ICAgIC8vIC0+IHRydWVcbiAqIGBgYFxuICpcbiAqIElmIHRoZSBwcm92aWRlZCB2YWx1ZSBpcyBub3QgYWN0dWFsbHkgaXRlcmFibGUgKG9yIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uKSxcbiAqIGBudWxsYCBpcyByZXR1cm5lZCBpbiBwbGFjZSBvZiB0aGUgaXRlcmF0b3IuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY3JlYXRlIGFuIGl0ZXJhdG9yIG92ZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5Tb3J0RnVuY3Rpb259IFtzb3J0Rm5dIEFuIG9wdGlvbmFsIHNvcnQgZnVuY3Rpb24gZm9yXG4gKiAgICAgc29ydGluZyB0aGUga2V5cyBvZiBhbiBvYmplY3QgYmVmb3JlIGl0ZXJhdGlvbi4gSXQgaXMgaWdub3JlZCBpZiBgdmFsdWVgXG4gKiAgICAgaXNuJ3QgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLkl0ZXJhdG9yfSBBbiBpdGVyYXRvciBvdmVyIGB2YWx1ZWAuXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdG9yKHZhbHVlLCBzb3J0Rm4gPSBudWxsKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNGdW5jdGlvbih2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTpcbiAgICBjYXNlIGlzR2VuZXJhdG9yRnVuY3Rpb24odmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk6XG4gICAgICByZXR1cm4gdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIGNhc2UgaXNGdW5jdGlvbih2YWx1ZSk6XG4gICAgICByZXR1cm4gZnVuY3Rpb25JdGVyYXRvcih2YWx1ZSk7XG4gICAgY2FzZSBpc09iamVjdCh2YWx1ZSk6XG4gICAgICByZXR1cm4gb2JqZWN0SXRlcmF0b3IodmFsdWUsIHNvcnRGbik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgb2JqZWN0IGlzIGl0ZXJhYmxlLCBpbiB0ZXJtcyBvZiB3aGF0ICdpdGVyYWJsZSdcbiAqIG1lYW5zIHRvIHRoaXMgbGlicmFyeS4gSW4gb3RoZXIgd29yZHMsIHZhbHVlcyBpbXBsZW1lbnRpbmcgdGhlIGBpdGVyYWJsZWBcbiAqIHByb3RvY29sIGFuZCBwbGFpbiBvYmplY3RzIHJldHVybiBgdHJ1ZWAsIHdoaWxlIGV2ZXJ5dGhpbmcgZWxzZSByZXR1cm5zXG4gKiBgZmFsc2VgLiBUaGlzIGRvZXMgbm90IHJldHVybiBgdHJ1ZWAgZm9yIGZ1bmN0aW9ucyBldmVuIHRob3VnaFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS5pdGVyYXRvcnxpdGVyYXRvcn0gY2FuIHByb2R1Y2UgYW4gaXRlcmF0b3IgZm9yIHRoZW0sXG4gKiBiZWNhdXNlIG5vdCBhbGwgZnVuY3Rpb25zIHdvcmsgd2VsbCB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfGl0ZXJhdG9yfS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdGVyYWJpbGl0eS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGl0ZXJhYmxlXG4gKiAgICAgKGB7QGxpbmsgbW9kdWxlOnhkdWNlLml0ZXJhdG9yfWAgd2lsbCByZXR1cm4gYW4gaXRlcmF0b3IgZm9yIGl0KSBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNJdGVyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNJbXBsZW1lbnRlZCh2YWx1ZSwgXCJpdGVyYXRvclwiKSB8fCBpc09iamVjdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCB7IGl0ZXJhdG9yLCBpc0l0ZXJhYmxlLCBrdiwga2V5LCB2YWx1ZSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogUHJvdG9jb2xzIGZvciBpdGVyYXRpb24gYW5kIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgbmFtZXMgZm9yIHRoZXNlIHByb3RvY29scyBjYW1lIGZyb20gYSBkaXNjdXNzaW9uIHRocmVhZFxuICogKHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vY29nbml0ZWN0LWxhYnMvdHJhbnNkdWNlcnMtanMvaXNzdWVzLzIwfSkgZnJvbSBhXG4gKiB0aW1lIHdoZW4gdHJhbnNkdWNlcnMgd2VyZSB2ZXJ5IG11Y2ggaW4gdGhlIGZvcmVmcm9udC4gSXQncyB0aGUgY2xvc2VzdCB0aGluZ1xuICogdGhlcmUgaXMgdG8gYSBzdGFuZGFyZCwgc28gaXQgd2FzIGFkb3B0ZWQgaGVyZS5cbiAqXG4gKiBUaGVzZSBhcmUgdGhlIHNhbWUgc3ltYm9scyBhcyBhdmFpbGFibGUgaW4gbXkgdHJhbnNkdWNlciBsaWJyYXJ5LiBUaGV5IGFyZVxuICogcHVibGljbHkgYXZhaWxhYmxlIGZyb20gdGhlcmUuXG4gKlxuICogQG1vZHVsZSB4ZHVjZS9wcm90b2NvbFxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc0dlbmVyYXRvckZ1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcblxuLyoqXG4gKiBUaGUgbWFwcGluZyBvZiBwcm90b2NvbCBuYW1lcyB0byB0aGVpciByZXNwZWN0aXZlIHByb3BlcnR5IGtleSBuYW1lcy4gVGhlXG4gKiB2YWx1ZXMgb2YgdGhpcyBtYXAgd2lsbCBkZXBlbmQgb24gd2hldGhlciBzeW1ib2xzIGFyZSBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUHJvdG9jb2xNYXBcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBpbml0IFRoZSBgdHJhbnNkdWNlci9pbml0YCBwcm90b2NvbC4gVGhpcyBpcyB1c2VkXG4gKiAgICAgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCBpbml0aWFsaXplIGEgdGFyZ2V0IGNvbGxlY3Rpb24gYmVmb3JlIGFkZGluZyBpdGVtc1xuICogICAgIHRvIGl0LlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHN0ZXAgVGhlIGB0cmFuc2R1Y2VyL3N0ZXBgIHByb3RvY29sLiBUaGlzIGlzIHVzZWRcbiAqICAgICB0byBtYXJrIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGluIHRoZSB0cmFuc2R1Y2VyJ3Mgc3RlcCBwcm9jZXNzLCB3aGVyZVxuICogICAgIG9iamVjdHMgYXJlIGFkZGVkIHRvIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBvbmUgYXQgYSB0aW1lLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHJlc3VsdCBUaGUgYHRyYW5zZHVjZXIvcmVzdWx0YCBwcm90b2NvbC4gVGhpcyBpc1xuICogICAgIHVzZWQgdG8gbWFyayBmdW5jdGlvbnMgdGhhdCB0YWtlIHRoZSBmaW5hbCByZXN1bHQgb2YgdGhlIHN0ZXAgcHJvY2VzcyBhbmRcbiAqICAgICByZXR1cm4gdGhlIGZpbmFsIGZvcm0gdG8gYmUgb3V0cHV0LiBUaGlzIGlzIG9wdGlvbmFsOyBpZiB0aGUgdHJhbnNkdWNlclxuICogICAgIGRvZXMgbm90IHdhbnQgdG8gdHJhbnNmb3JtIHRoZSBmaW5hbCByZXN1bHQsIGl0IHNob3VsZCBqdXN0IHJldHVybiB0aGVcbiAqICAgICByZXN1bHQgb2YgaXRzIGNoYWluZWQgdHJhbnNkdWNlcidzIGByZXN1bHRgIGZ1bmN0aW9uLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHJlZHVjZWQgVGhlIGB0cmFuc2R1Y2VyL3JlZHVjZWRgIHByb3RvY29sLiBUaGVcbiAqICAgICBwcmVzZW5jZSBvZiB0aGlzIGtleSBvbiBhbiBvYmplY3QgaW5kaWNhdGVzIHRoYXQgaXRzIHRyYW5zZm9ybWF0aW9uIGhhc1xuICogICAgIGJlZW4gY29tcGxldGVkLiBJdCBpcyB1c2VkIGludGVybmFsbHkgdG8gbWFyayBjb2xsZWN0aW9ucyB3aG9zZVxuICogICAgIHRyYW5zZm9ybWF0aW9ucyBjb25jbHVkZSBiZWZvcmUgZXZlcnkgb2JqZWN0IGlzIGl0ZXJhdGVkIG92ZXIgKGFzIGluXG4gKiAgICAgYHtAbGluayB4ZHVjZS50YWtlfWAgdHJhbnNkdWNlcnMuKSBJdCBpcyBvZiBsaXR0bGUgdXNlIGJleW9uZCB0cmFuc2R1Y2VyXG4gKiAgICAgYXV0aG9yaW5nLlxuICogQHByb3BlcnR5IHtTeW1ib2x9IHZhbHVlIFRoZSBgdHJhbnNkdWNlci92YWx1ZWAgcHJvdG9jb2wuIFRoaXMgaXNcbiAqICAgICB1c2VkIGludGVybmFsbHkgdG8gbWFyayBwcm9wZXJ0aWVzIHRoYXQgY29udGFpbiB0aGUgdmFsdWUgb2YgYSByZWR1Y2VkXG4gKiAgICAgdHJhbnNmb3JtYXRpb24uIEl0IGlzIG9mIGxpdHRsZSB1c2UgYmV5b25kIHRyYW5zZHVjZXIgYXV0aG9yaW5nLlxuICovXG5cbi8qKlxuICogVGhlIG1hcHBpbmcgb2YgcHJvdG9jb2wgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0eSBrZXkgbmFtZXMuXG4gKlxuICogQHR5cGUge21vZHVsZTp4ZHVjZS5Qcm90b2NvbE1hcH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqL1xuY29uc3QgcHJvdG9jb2xzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGluaXQ6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvaW5pdFwiKVxuICB9LFxuICBzdGVwOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3N0ZXBcIilcbiAgfSxcbiAgcmVzdWx0OiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3Jlc3VsdFwiKVxuICB9LFxuICByZWR1Y2VkOiB7XG4gICAgdmFsdWU6IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL3JlZHVjZWRcIilcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICB2YWx1ZTogU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvdmFsdWVcIilcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGlzSW1wbGVtZW50ZWQob2JqLCBwcm90b2NvbCkge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHByb3RvY29sKSB7XG4gICAgY2FzZSBcIml0ZXJhdG9yXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpc0Z1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKSB8fFxuICAgICAgICBpc0dlbmVyYXRvckZ1bmN0aW9uKG9ialtTeW1ib2wuaXRlcmF0b3JdKVxuICAgICAgKTtcbiAgICBjYXNlIFwiYXN5bmNJdGVyYXRvclwiOlxuICAgICAgcmV0dXJuIGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG4gICAgY2FzZSBcInJlZHVjZWRcIjpcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaikuaW5jbHVkZXMocHJvdG9jb2xzW3Byb3RvY29sXSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG9ialtwcm90b2NvbHNbcHJvdG9jb2xdXSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvdG9jb2xzLCBpc0ltcGxlbWVudGVkIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBmdW5jdGlvbnMgcmVsYXRlZCB0byB0aGUgcHJvZHVjaW5nIHJlZHVjZXIgb2JqZWN0cywgbWFya2luZ1xuICogY29tcGxldGVkIG9iamVjdHMsIGFuZCBwZXJmb3JtaW5nIGdlbmVyYWwgcmVkdWN0aW9uIG9wZXJhdGlvbnMuXG4gKlxuICogQG1vZHVsZSByZWR1Y3Rpb25cbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHsgaXNJbXBsZW1lbnRlZCwgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwibW9kdWxlcy9wcm90b2NvbFwiO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzQXJyYXksIGlzT2JqZWN0LCBpc0Z1bmN0aW9uIH0gZnJvbSBcIm1vZHVsZXMvdXRpbHNcIjtcbmltcG9ydCB7IGt2LCBpdGVyYXRvciB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW5pdCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIG5ldywgZW1wdHkgaW5zdGFuY2Ugb2YgdGhlIGNvbGxlY3Rpb24gaW4gcXVlc3Rpb24uIElmIHRoZSBjb2xsZWN0aW9uIGRvZXNuJ3RcbiAqIHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuIFRoaXMgbWFrZXMgY29uZGl0aW9uYWxzIGEgYml0IGVhc2llclxuICogdG8gd29yayB3aXRoLlxuICpcbiAqIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGNvbnZlcnNpb24gb2YgZnVuY3Rpb25zIGludG8gcmVkdWNlcnMsIGZ1bmN0aW9uXG4gKiBzdXBwb3J0IGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIEEgY29sbGVjdGlvbiB0byBjcmVhdGUgYW4gaW5pdCBmdW5jdGlvbiBmb3IuIFRoaXMgY2FuXG4gKiAgICAgYmUgYW55dGhpbmcgdGhhdCBzdXBwb3J0cyB0aGUgaXRlcmF0aW9uIHByb3RvY29sIG9yIGEgcGxhaW4gb2JqZWN0LlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLkluaXRGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgcmV0dXJucyBhblxuICogICAgIGluaXRpYWwgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbi4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXNcbiAqICAgICBub3QgaXRlcmFibGUsIHRoZW4gYG51bGxgIGlzIHJldHVybmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcImluaXRcIik6XG4gICAgICByZXR1cm4gY29sbGVjdGlvbltwLmluaXRdO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gXCJcIjtcbiAgICBjYXNlIGlzQXJyYXkoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKCkgPT4gW107XG4gICAgY2FzZSBpc09iamVjdChjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiAoe30pO1xuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKFwiaW5pdCBub3QgYXZhaWxhYmxlXCIpO1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RlcCBmdW5jdGlvbiBmb3IgYSBjb2xsZWN0aW9uLiBUaGlzIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxuICogYWNjdW11bGF0b3IgYW5kIGEgdmFsdWUgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiByZWR1Y2luZyB0aGUgdmFsdWUgaW50byB0aGVcbiAqIGFjY3VtdWxhdG9yLiBJZiB0aGUgY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gaXRzZWxmIHNpbXBseSByZWR1Y2VzIHRoZSBpbnB1dCBpbnRvIHRoZSB0YXJnZXRcbiAqIGNvbGxlY3Rpb24gd2l0aG91dCBtb2RpZnlpbmcgaXQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZVxuICogICAgIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGFcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5TdGVwRnVuY3Rpb259IEEgcmVkdWN0aW9uIGZ1bmN0aW9uIGZvciB0aGUgcHJvdmlkZWRcbiAqICAgICBjb2xsZWN0aW9uIHRoYXQgc2ltcGx5IGFkZHMgYW4gZWxlbWVudCB0byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dFxuICogICAgIG1vZGlmeWluZyBpdC4gSWYgdGhlIHByb3ZpZGVkIGNvbGxlY3Rpb24gaXMgbm90IGl0ZXJhYmxlLCBgbnVsbGAgaXNcbiAqICAgICByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHN0ZXAoY29sbGVjdGlvbikge1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJzdGVwXCIpOlxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25bcC5zdGVwXTtcblxuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc09iamVjdChpbnB1dCkgPyBrdihpbnB1dCkudiA6IGlucHV0O1xuICAgICAgICByZXR1cm4gYWNjICsgdmFsdWU7XG4gICAgICB9O1xuXG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIChhY2MsIGlucHV0KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGlucHV0O1xuXG4gICAgICAgIGlmICghaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzbid0IGFuIG9iamVjdCwgdHVybiBpdCBpbnRvIGFuIG9iamVjdCB3aXRoIGFcbiAgICAgICAgICAvLyBudW1lcmljYWwga2V5IG9uZSBncmVhdGVyIHRoYW4gdGhlIG1heCBrZXkgYWxyZWFkeSBpbiB0aGVcbiAgICAgICAgICAvLyBhY2N1bXVsYXRvclxuICAgICAgICAgIGNvbnN0IG1heCA9IE9iamVjdC5rZXlzKGFjYykucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1heChhLCBiKSwgLTEpO1xuICAgICAgICAgIHZhbHVlID0geyBbbWF4ICsgMV06IGlucHV0IH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGssIHYgfSA9IGt2KHZhbHVlKTtcbiAgICAgICAgYWNjW2tdID0gdjtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH07XG5cbiAgICBjYXNlIGlzRnVuY3Rpb24oY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gKGFjYywgaW5wdXQpID0+IGNvbGxlY3Rpb24oYWNjLCBpbnB1dCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVzdWx0IGZ1bmN0aW9uIGZvciBhIGNvbGxlY3Rpb24uIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zXG4gKiBhbnkgZmluYWwgcHJvY2Vzc2luZyB0aGF0IHNob3VsZCBiZSBkb25lIG9uIHRoZSByZXN1bHQgb2YgYSByZWR1Y3Rpb24uIElmIHRoZVxuICogY29sbGVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgcmVkdWN0aW9uLCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gKlxuICogSW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgY29udmVyc2lvbiBvZiBmdW5jdGlvbnMgaW50byByZWR1Y2VycywgZnVuY3Rpb25cbiAqIHN1cHBvcnQgaXMgYWxzbyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gQSBjb2xsZWN0aW9uIHRvIGNyZWF0ZSBhIHN0ZXAgZnVuY3Rpb24gZm9yLiBUaGlzIGNhbiBiZVxuICogICAgIGFueXRoaW5nIHRoYXQgc3VwcG9ydHMgdGhlIGl0ZXJhdGlvbiBwcm90b2NvbCwgYSBwbGFpbiBvYmplY3QsIG9yIGFcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5SZXN1bHRGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGdpdmVuIGEgcmVkdWNlZFxuICogICAgIGNvbGxlY3Rpb24sIHByb2R1Y2VzIHRoZSBmaW5hbCBvdXRwdXQuIElmIHRoZSBwcm92aWRlZCBjb2xsZWN0aW9uIGlzIG5vdFxuICogICAgIGl0ZXJhYmxlLCBgbnVsbGAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlc3VsdChjb2xsZWN0aW9uKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInJlc3VsdFwiKTpcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW3AucmVzdWx0XTtcbiAgICBjYXNlIGlzU3RyaW5nKGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNBcnJheShjb2xsZWN0aW9uKTpcbiAgICBjYXNlIGlzT2JqZWN0KGNvbGxlY3Rpb24pOlxuICAgIGNhc2UgaXNGdW5jdGlvbihjb2xsZWN0aW9uKTpcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB2YWx1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcmVkdWNlciBvYmplY3QgZnJvbSBhIGZ1bmN0aW9uIG9yIGZyb20gYSBidWlsdC1pbiByZWR1Y2libGUgdHlwZVxuICogKGFycmF5LCBvYmplY3QsIG9yIHN0cmluZykuXG4gKlxuICogVG8gY3JlYXRlIGEgcmVkdWNlciBmb3IgYXJyYXlzLCBvYmplY3RzLCBvciBzdHJpbmdzLCBzaW1wbHkgcGFzcyBhbiBlbXB0eVxuICogdmVyc2lvbiBvZiB0aGF0IGNvbGxlY3Rpb24gdG8gdGhpcyBmdW5jdGlvbiAoZS5nLiwgYHRvUmVkdWNlcihbXSlgKS5cbiAqXG4gKiBUaGUgbm90YWJsZSB1c2UgZm9yIHRoaXMgZnVuY3Rpb24gdGhvdWdoIGlzIHRvIHR1cm4gYSByZWR1Y3Rpb24gZnVuY3Rpb24gaW50b1xuICogYSByZWR1Y2VyIG9iamVjdC4gVGhlIGZ1bmN0aW9uIGlzIGEgZnVuY3Rpb24gb2YgdHdvIHBhcmFtZXRlcnMsIGFuXG4gKiBhY2N1bXVsYXRvciBhbmQgYSB2YWx1ZSwgYW5kIHJldHVybnMgdGhlIGFjY3VtdWxhdG9yIHdpdGggdGhlIHZhbHVlIGluIGl0LlxuICogVGhpcyBpcyBleGFjdGx5IHRoZSBzYW1lIGtpbmQgb2YgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdG8gcmVkdWN0aW9uXG4gKiBmdW5jdGlvbnMgbGlrZSBKYXZhU2NyaXB0J3MgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIGFuZCBMb2Rhc2gncyBgXy5yZWR1Y2VgLlxuICpcbiAqIE5vdGUgaW4gcGFydGljdWxhciB0aGF0IHRoZSBvdXRwdXQgb2YgdGhpcyByZWR1Y2VyIGRvZXMgbm90IG5lZWQgdG8gYmUgYVxuICogY29sbGVjdGlvbi4gSXQgY2FuIGJlIGFueXRoaW5nLiBXaGlsZSB0cmFuc2R1Y2luZyBub3JtYWxseSBpbnZvbHZlc1xuICogdHJhbnNmb3JtaW5nIG9uZSBjb2xsZWN0aW9uIGludG8gYW5vdGhlciwgaXQgbmVlZCBub3QgYmUgc28uIEZvciBleGFtcGxlLFxuICogaGVyZSBpcyBhIHJlZHVjZXIgdGhhdCB3aWxsIHJlc3VsdCBpbiBzdW1taW5nIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciwgcmVkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqXG4gKiBjb25zdCBzdW1SZWR1Y2VyID0gdG9SZWR1Y2VyKChhY2MsIGlucHV0KSA9PiBhY2MgKyBpbnB1dCk7XG4gKiBjb25zdCBzdW0gPSByZWR1Y2UoWzEsIDIsIDMsIDQsIDVdLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gMTVcbiAqIGBgYFxuICpcbiAqIFRoaXMgY2FuIGJlIGNvbWJpbmVkIHdpdGggdHJhbnNkdWNlcnMgYXMgd2VsbCwgYXMgaW4gdGhpcyBjYWxjdWxhdGlvbiBvZiB0aGVcbiAqIHN1bSBvZiB0aGUgKnNxdWFyZXMqIG9mIHRoZSBjb2xsZWN0aW9uIHZhbHVlcy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRvUmVkdWNlciwgdHJhbnNkdWNlIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3Qgc3VtUmVkdWNlciA9IHRvUmVkdWNlcigoYWNjLCBpbnB1dCkgPT4gYWNjICsgaW5wdXQpO1xuICogY29uc3Qgc3VtID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgbWFwKHggPT4geCAqIHgpLCBzdW1SZWR1Y2VyLCAwKTtcbiAqIGNvbnNvbGUubG9nKHN1bSk7ICAgLy8gLT4gNTVcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBBbiBpdGVyYWJsZSBjb2xsZWN0aW9uIG9yIGEgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvdG9jb2wgcHJvcGVydGllcyBmb3IgaW5pdCwgc3RlcCwgYW5kXG4gKiAgICAgcmVzdWx0LiBUaGlzIG9iamVjdCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIGEgcmVkdWNlciBvYmplY3QgKG9uZSBwcm92aWRlZFxuICogICAgIHRvIGB7QGxpbmsgeGR1Y2UucmVkdWNlfHJlZHVjZX1gIG9yIGB7QGxpbmsgeGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gKS5cbiAqICAgICBJZiB0aGUgcHJvdmlkZWQgY29sbGVjdGlvbiBpcyBub3QgaXRlcmFibGUsIGFsbCBvZiB0aGUgcHJvcGVydGllcyBvZiB0aGlzXG4gKiAgICAgb2JqZWN0IHdpbGwgYmUgYG51bGxgLlxuICovXG5mdW5jdGlvbiB0b1JlZHVjZXIoY29sbGVjdGlvbikge1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgW3AuaW5pdF06IGluaXQoY29sbGVjdGlvbiksXG4gICAgW3Auc3RlcF06IHN0ZXAoY29sbGVjdGlvbiksXG4gICAgW3AucmVzdWx0XTogcmVzdWx0KGNvbGxlY3Rpb24pXG4gIH0pO1xufVxuXG4vKipcbiAqIEEgcmVkdWNlciBvYmplY3QgZm9yIGFycmF5cy5cbiAqXG4gKiBAdHlwZSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBBUlJBWV9SRURVQ0VSID0gdG9SZWR1Y2VyKFtdKTtcblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBvYmplY3RzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UuUmVkdWNlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE9CSkVDVF9SRURVQ0VSID0gdG9SZWR1Y2VyKHt9KTtcblxuLyoqXG4gKiBBIHJlZHVjZXIgb2JqZWN0IGZvciBzdHJpbmdzLlxuICpcbiAqIEB0eXBlIHttb2R1bGU6eGR1Y2UuUmVkdWNlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNUUklOR19SRURVQ0VSID0gdG9SZWR1Y2VyKFwiXCIpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZWR1Y3Rpb24gZnVuY3Rpb24gZnJvbSBhIHRyYW5zZHVjZXIgYW5kIGEgcmVkdWNlci5cbiAqXG4gKiBUaGlzIHByb2R1Y2VzIGEgZnVuY3Rpb24gdGhhdCdzIHN1aXRhYmxlIGZvciBiZWluZyBwYXNzZWQgaW50byBvdGhlclxuICogbGlicmFyaWVzJyByZWR1Y2UgZnVuY3Rpb25zLCBzdWNoIGFzIEphdmFTY3JpcHQncyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgb3JcbiAqIExvZGFzaCdzIGBfLnJlZHVjZWAuIEl0IHJlcXVpcmVzIGJvdGggYSB0cmFuc2Zvcm1lciBhbmQgYSByZWR1Y2VyIGJlY2F1c2VcbiAqIHJlZHVjdGlvbiBmdW5jdGlvbnMgZm9yIHRob3NlIGxpYnJhcmllcyBtdXN0IGtub3cgaG93IHRvIGRvIGJvdGguIFRoZSByZWR1Y2VyXG4gKiBjYW4gYmUgYSBzdGFuZGFyZCByZWR1Y2VyIG9iamVjdCBsaWtlIHRoZSBvbmVzIHNlbnRcbiAqIHRvYHtAbGluayBtb2R1bGU6eGR1Y2UudHJhbnNkdWNlfHRyYW5zZHVjZX1gIG9yXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS5yZWR1Y2V8cmVkdWNlfWAsIG9yIGl0IGNhbiBiZSBhIHBsYWluIGZ1bmN0aW9uIHRoYXRcbiAqIHRha2VzIHR3byBwYXJhbWV0ZXJzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgcmVkdWNpbmcgdGhlIHNlY29uZCBwYXJhbWV0ZXJcbiAqIGludG8gdGhlIGZpcnN0LlxuICpcbiAqIElmIHRoZXJlIGlzIG5vIG5lZWQgZm9yIGEgdHJhbnNmb3JtYXRpb24sIHRoZW4gcGFzcyBpbiB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzLmlkZW50aXR5fGlkZW50aXR5fWAgdHJhbnNkdWNlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5SZWR1Y2VyfSB4Zm9ybSBBIHRyYW5zZHVjZXIgb2JqZWN0IHdob3NlIHN0ZXBcbiAqICAgICBmdW5jdGlvbiB3aWxsIGJlY29tZSB0aGUgcmV0dXJuZWQgcmVkdWN0aW9uIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsobW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbnxtb2R1bGU6eGR1Y2UuUmVkdWNlcil9IHJlZHVjZXIgQVxuICogICAgIHJlZHVjZXIgdGhhdCBrbm93cyBob3cgdG8gcmVkdWNlIHZhbHVlcyBpbnRvIGFuIG91dHB1dCBjb2xsZWN0aW9uLiBUaGlzXG4gKiAgICAgY2FuIGVpdGhlciBiZSBhIHJlZHVjaW5nIGZ1bmN0aW9uIG9yIGEgdHJhbnNkdWNlciBvYmplY3Qgd2hvc2UgYHN0ZXBgXG4gKiAgICAgZnVuY3Rpb24ga25vd3MgaG93IHRvIHBlcmZvcm0gdGhpcyByZWR1Y3Rpb24uXG4gKiBAcmV0dXJucyB7bW9kdWxlOnhkdWNlLlN0ZXBGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgYm90aCB0aGVcbiAqICAgICB0cmFuc2Zvcm1hdGlvbiBhbmQgdGhlIHJlZHVjdGlvbiBvZiBhIHZhbHVlIG9udG8gYSB0YXJnZXQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRvRnVuY3Rpb24oeGZvcm0sIHJlZHVjZXIpIHtcbiAgY29uc3QgciA9IHR5cGVvZiByZWR1Y2VyID09PSBcImZ1bmN0aW9uXCIgPyB0b1JlZHVjZXIocmVkdWNlcikgOiByZWR1Y2VyO1xuICBjb25zdCByZXN1bHQgPSB4Zm9ybShyKTtcbiAgcmV0dXJuIHJlc3VsdFtwLnN0ZXBdLmJpbmQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBNYXJrcyBhIHZhbHVlIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgaXMgZG9uZSBieSB3cmFwcGluZyB0aGUgdmFsdWUuIFRoaXMgbWVhbnMgdGhyZWUgdGhpbmdzOiBmaXJzdCwgYVxuICogY29tcGxldGUgb2JqZWN0IG1heSBiZSBtYXJrZWQgYXMgY29tcGxldGUgYWdhaW47IHNlY29uZCwgYSBjb21wbGV0ZSB2YWx1ZVxuICogaXNuJ3QgdXNhYmxlIHdpdGhvdXQgYmVpbmcgdW5jb21wbGV0ZWQgZmlyc3Q7IGFuZCB0aGlyZCBhbnkgdHlwZSBvZiB2YWx1ZVxuICogKGluY2x1ZGluZyBgdW5kZWZpbmVkYCkgbWF5IGJlIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBBIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhpcyByZWR1Y3Rpb24gaXNcbiAqICAgICBhY2hpZXZlZCBieSB3cmFwcGluZyB0aGUgdmFsdWUgaW4gYSBtYXJrZXIgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIFtwLnJlZHVjZWRdOiB0cnVlLFxuICAgIFtwLnZhbHVlXTogdmFsdWVcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIGNvbXBsZXRlZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgd2hlbiBpdCdzIGNlcnRhaW4gdGhhdCBhIHZhbHVlIGlzXG4gKiBhbHJlYWR5IG1hcmtlZCBhcyBjb21wbGV0ZS4gSWYgaXQgaXMgbm90LCBgdW5kZWZpbmVkYCB3aWxsIGJlIHJldHVybmVkXG4gKiBpbnN0ZWFkIG9mIHRoZSB2YWx1ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSB1bmNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IEFuIHVuY29tcGxldGVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIHZhbHVlLiBJZiB0aGUgdmFsdWUgd2FzXG4gKiAgICAgbm90IGNvbXBsZXRlIGluIHRoZSBmaXJzdCBwbGFjZSwgYHVuZGVmaW5lZGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkLlxuICovXG5mdW5jdGlvbiB1bmNvbXBsZXRlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZT8uW3AudmFsdWVdO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIG1hcmtlZCBhcyBjb21wbGV0ZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGZvciBpdHMgY29tcGxldGUgc3RhdHVzLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdmFsdWUgaXMgY29tcGxldGUsIG9yIGBmYWxzZWAgaWYgaXQgaXNcbiAqICAgICBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzQ29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlPy5bcC5yZWR1Y2VkXTtcbn1cblxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgYSB2YWx1ZSBpcyBtYXJrZWQgYXMgY29tcGxldGU7IGlmIGl0IGlzIG5vdCwgaXQgd2lsbCBiZVxuICogbWFya2VkIGFzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZGlmZmVycyBmcm9tIHtAbGluayBtb2R1bGU6eGR1Y2UuY29tcGxldGV8Y29tcGxldGV9IGluIHRoYXRcbiAqIGlmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGlzIGZ1bmN0aW9uIHdvbid0IGNvbXBsZXRlIGl0IGFnYWluLlxuICogVGhlcmVmb3JlIHRodXMgZnVuY3Rpb24gY2FuJ3QgYmUgdXNlZCB0byBtYWtlIGEgdmFsdWUgY29tcGxldGUgbXVsdGlwbGVcbiAqIHRpbWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNvbXBsZXRlZC5cbiAqIEByZXR1cm4geyp9IElmIHRoZSB2YWx1ZSBpcyBhbHJlYWR5IGNvbXBsZXRlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqICAgICByZXR1cm5lZC4gT3RoZXJ3aXNlLCBhIGNvbXBsZXRlZCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlQ29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB2YWx1ZSA6IGNvbXBsZXRlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb21wbGV0ZSBzdGF0dXMgZnJvbSBhIHZhbHVlLCBhcyBsb25nIGFzIGl0IGFjdHVhbGx5IGlzIGNvbXBsZXRlLlxuICpcbiAqIFRoaXMgZG9lcyBhIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgdmFsdWUgcGFzc2VkIGluIGFjdHVhbGx5IGlzIGNvbXBsZXRlLiBJZlxuICogaXQgaXNuJ3QsIHRoZSB2YWx1ZSBpdHNlbGYgaXMgcmV0dXJuZWQuIEl0J3MgbWVhbnQgdG8gYmUgdXNlZCB3aGVuIHRoZVxuICogY29tcGxldGVkIHN0YXR1cyBpcyB1bmNlcnRhaW4uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgY29tcGxldGUgdmFsdWUgdG8gYmUgdW5jb21wbGV0ZWQuXG4gKiBAcmV0dXJuIHsqfSBJZiB0aGUgdmFsdWUgaXMgYWxyZWFkeSB1bmNvbXBsZXRlZCwgdGhlIHZhbHVlIGlzIHNpbXBseVxuICogICAgIHJldHVybmVkLiBPdGhlcndpc2UgYW4gdW5jb21wbGV0ZWQgdmVyc2lvbiBvZiB0aGUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZVVuY29tcGxldGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc0NvbXBsZXRlZCh2YWx1ZSkgPyB1bmNvbXBsZXRlKHZhbHVlKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIFJlZHVjZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRocm91Z2ggYSByZWR1Y2VyIGludG8gYW4gb3V0cHV0XG4gKiBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucy4gSW4gZmFjdCwgdGhpcyBvbmUgaXNcbiAqIHNvIGxvdy1sZXZlbCB0aGF0IGl0IGRvZXNuJ3QgaGF2ZSBhIGxvdCBvZiB1c2UgaW4gbm9ybWFsIG9wZXJhdGlvbi4gSXQncyBtb3JlXG4gKiB1c2VmdWwgZm9yIHdyaXRpbmcgeW91ciBvd24gdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLlxuICpcbiAqIGByZWR1Y2VgIGRvZXNuJ3QgYXNzdW1lIHRoYXQgdGhlcmUncyBldmVuIGEgdHJhbnNmb3JtYXRpb24uIEl0IHJlcXVpcmVzIGFuXG4gKiBpbml0aWFsIGNvbGxlY3Rpb24gYW5kIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpcyBtYXRjaGVkIHRvIHRoYXQgaW5pdGlhbFxuICogY29sbGVjdGlvbi4gVGhlIHJlZHVjZXIgb2JqZWN0IG11c3QgaW1wbGVtZW50IHRoZSBgc3RlcGAgYW5kIGByZXN1bHRgXG4gKiBwcm90b2NvbHMsIHdoaWNoIGluc3RydWN0IGByZWR1Y2VgIG9uIGhvdyB0byBidWlsZCB1cCB0aGUgY29sbGVjdGlvbi4gVGhlXG4gKiByZWR1Y2VyIG1heSBpbXBsZW1lbnQgYSB0cmFuc2Zvcm1hdGlvbiBhcyB3ZWxsLCBidXQgYWxsIHRoYXQncyBpbXBvcnRhbnQgaGVyZVxuICogaXMgdGhhdCBpdCBjYW4gZG8gdGhlIHJlZHVjdGlvbi5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBuZWVkIG9ubHkgaW1wbGVtZW50IGBpdGVyYWJsZWAuIEl0IGlzIG5vdCBuZWNlc3NhcnkgZm9yXG4gKiB0aGUgaW5wdXQgYW5kIG91dHB1dCBjb2xsZWN0aW9ucyB0byBiZSBvZiB0aGUgc2FtZSB0eXBlOyBhcyBsb25nIGFzIHRoZSBpbnB1dFxuICogaW1wbGVtZW50cyBgaXRlcmFibGVgIGFuZCB0aGUgcmVkdWNlciBpbXBsZW1lbnRzIGBzdGVwYCBhbmQgYHJlc3VsdGBcbiAqIGFwcHJvcHJpYXRlIHRvIHRoZSB0eXBlIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiwgdGhlbiBhbnkgdHJhbnNsYXRpb25cbiAqIGJldHdlZW4gY29sbGVjdGlvbiB0eXBlcyBjYW4gb2NjdXIuXG4gKlxuICogVGhlIG5vcm1hbCBjb3Vyc2Ugb2Ygb3BlcmF0aW9uIHdpbGwgYmUgdG8gY2FsbFxuICoge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfSBpbnN0ZWFkLCBhcyB0aGF0IGZ1bmN0aW9uIG1ha2VzIGl0XG4gKiBlYXN5IHRvIGNvbWJpbmUgdHJhbnNmb3JtYXRpb25zIHdpdGggcmVkdWN0aW9ucyBhbmQgY2FuIG9wdGlvbmFsbHkgZmlndXJlIG91dFxuICogdGhlIGluaXRpYWwgY29sbGVjdGlvbiBpdHNlbGYuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHsqfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB0aGlzXG4gKiAgICAgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYCBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0XG4gKiAgICAgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXkgY2FuIGJlIHVzZWQgYXMgd2VsbC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjZXJ9IHJlZHVjZXIgQW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgYHN0ZXBgXG4gKiAgICAgYW5kIGByZXN1bHRgIHByb3RvY29scy4gVGhpcyBvYmplY3QgbXVzdCBrbm93IGhvdyB0byBwcm9kdWNlIGFuIG91dHB1dFxuICogICAgIGNvbGxlY3Rpb24gdGhyb3VnaCB0aG9zZSBwcm90b2NvbCBmdW5jdGlvbnMuXG4gKiBAcGFyYW0geyp9IGluaXQgYSBjb2xsZWN0aW9uIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlIG91dHB1dCBjb2xsZWN0aW9uLiBJdFxuICogICAgIG5lZWQgbm90IGJlIGVtcHR5OyBpZiBpdCBpcyBub3QsIHRoZSBleGlzdGluZyBlbGVtZW50cyBhcmUgcmV0YWluZWQgYXNcbiAqICAgICB0aGUgaW5wdXQgY29sbGVjdGlvbiBpcyByZWR1Y2VkIGludG8gaXQuXG4gKiBAcmV0dXJuIHsqfSBBIG5ldyBjb2xsZWN0aW9uLCBjb25zaXN0aW5nIG9mIHRoZSBgaW5pdGAgY29sbGVjdGlvbiB3aXRoIGFsbCBvZlxuICogICAgIHRoZSBlbGVtZW50cyBvZiB0aGUgYGNvbGxlY3Rpb25gIGNvbGxlY3Rpb24gcmVkdWNlZCBpbnRvIGl0LlxuICovXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgcmVkdWNlciwgaW5pdCkge1xuICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpdGVyID0gaXRlcmF0b3IoY29sbGVjdGlvbik7XG4gIGlmICghaXRlcikge1xuICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGFuIGluc3RhbmNlIG9mICR7Y29sbGVjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICB9XG5cbiAgbGV0IGFjYyA9IGluaXQ7XG4gIGxldCBzdGVwID0gaXRlci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFzdGVwLmRvbmUpIHtcbiAgICBhY2MgPSByZWR1Y2VyW3Auc3RlcF0oYWNjLCBzdGVwLnZhbHVlKTtcbiAgICBpZiAoaXNDb21wbGV0ZWQoYWNjKSkge1xuICAgICAgYWNjID0gdW5jb21wbGV0ZShhY2MpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0ZXAgPSBpdGVyLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2VyW3AucmVzdWx0XShhY2MpO1xufVxuXG5leHBvcnQge1xuICBpbml0LFxuICBzdGVwLFxuICByZXN1bHQsXG4gIHRvUmVkdWNlcixcbiAgQVJSQVlfUkVEVUNFUixcbiAgT0JKRUNUX1JFRFVDRVIsXG4gIFNUUklOR19SRURVQ0VSLFxuICB0b0Z1bmN0aW9uLFxuICBjb21wbGV0ZSxcbiAgdW5jb21wbGV0ZSxcbiAgaXNDb21wbGV0ZWQsXG4gIGVuc3VyZUNvbXBsZXRlZCxcbiAgZW5zdXJlVW5jb21wbGV0ZWQsXG4gIHJlZHVjZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9ucyBkZWFsaW5nIHdpdGggdGhlIGFjdHVhbCB0cmFuc2Zvcm1hdGlvbiBvZiB2YWx1ZXMgYW5kIGZvciBjaG9vc2luZ1xuICogdGhlIHJlZHVjZXIgZHVyaW5nIHRyYW5zZHVjdGlvbi5cbiAqIFxuICogQG1vZHVsZSB4ZHVjZS90cmFuc2Zvcm1hdGlvblxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyBwcm90b2NvbHMgYXMgcCwgaXNJbXBsZW1lbnRlZCB9IGZyb20gXCJtb2R1bGVzL3Byb3RvY29sXCI7XG5pbXBvcnQgeyBpdGVyYXRvciB9IGZyb20gXCJtb2R1bGVzL2l0ZXJhdGlvblwiO1xuaW1wb3J0IHtcbiAgaXNDb21wbGV0ZWQsXG4gIHRvUmVkdWNlcixcbiAgcmVkdWNlLFxuICBBUlJBWV9SRURVQ0VSLFxuICBPQkpFQ1RfUkVEVUNFUixcbiAgU1RSSU5HX1JFRFVDRVJcbn0gZnJvbSBcIm1vZHVsZXMvcmVkdWN0aW9uXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc0FycmF5LCBpc09iamVjdCwgaXNTdHJpbmcgfSBmcm9tIFwibW9kdWxlcy91dGlsc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3IgdGhhdCBpcyBhbHNvIGEgdHJhbnNkdWNlciwgdHJhbnNmb3JtaW5nIGl0cyBjb2xsZWN0aW9uXG4gKiBvbmUgZWxlbWVudCBhdCBhIHRpbWUuIFRoaXMgaXMgdGhlIGFjdHVhbCBvdXRwdXQgb2YgdGhlXG4gKiB7QGxpbmsgbW9kdWxlOnhkdWNlLmFzSXRlcmF0b3J8YXNJdGVyYXRvcn0gZnVuY3Rpb24sIGFzIHdlbGwgYXMgdGhlIG91dHB1dCBvZlxuICogdGhlIHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9IGZ1bmN0aW9uIHdoZW4gdGhlIGlucHV0IGlzIGFuXG4gKiBpdGVyYXRvci5cbiAqXG4gKiBUaGUgZW5kIHVzZXIgbmVlZCBub3QgYmUgY29uY2VybmVkIHdpdGggdGhlIHR5cGUgb2YgdGhlIG91dHB1dCBpdGVyYXRvciBpblxuICogdGhlc2UgY2lyY3Vtc3RhbmNlczsgdGhlIGVuZCB1c2VyIG5lZWQgb25seSBjYXJlIHRoYXQgdGhlIG91dHB1dCBpcywgaW4gZmFjdCxcbiAqIGFuIGl0ZXJhdG9yIGFuZCBjYW4gYmUgZXhwZWN0ZWQgdG8gYWN0IGxpa2Ugb25lLiBGb3IgdGhpcyByZWFzb24sIHRoaXNcbiAqIGZ1bmN0aW9uIGFuZCB0aGUgdHlwZSBpdCByZXR1cm5zIGFyZSBub3QgZXhwb3J0ZWQuXG4gKlxuICogVGhpcyBvYmplY3Qgc3VwcG9ydHMgbm9uLTEtdG8tMSBjb3JyZXNwb25kZW5jZXMgYmV0d2VlbiBpbnB1dCBhbmQgb3V0cHV0XG4gKiB2YWx1ZXMuIEZvciBleGFtcGxlLCBhIGZpbHRlciB0cmFuc2Zvcm1hdGlvbiBtaWdodCByZXR1cm4gZmV3ZXIgb3V0cHV0XG4gKiBlbGVtZW50cyB0aGFuIHdlcmUgaW4gdGhlIGlucHV0IGNvbGxlY3Rpb24sIHdoaWxlIGEgcmVwZWF0IHRyYW5zZm9ybWF0aW9uXG4gKiB3aWxsIHJldHVybiBtb3JlLiBJbiBlaXRoZXIgY2FzZSwgYG5leHRgIGluIHRoaXMgY2xhc3Mgd2lsbCByZXR1cm4gb25lXG4gKiBlbGVtZW50IHBlciBjYWxsLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIHRoZSBpbnB1dCBjb2xsZWN0aW9uIHRoYXQgdGhlXG4gKiAgICAgcHJvZHVjZWQgaXRlcmF0b3Igd2lsbCBiZSBpdGVyYXRpbmcgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJ9IHhmb3JtIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGl0ZXJhdG9yJ3NcbiAqICAgICBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuSXRlcmF0b3J9IEFuIGl0ZXJhdG9yIHRoYXQgd2lsbCB0cmFuc2Zvcm0gaXRzIGlucHV0XG4gKiAgICAgZWxlbWVudHMgdXNpbmcgdGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24gYXMgaXRzXG4gKiAgICAgYHtAbGluayBtb2R1bGU6eGR1Y2UuTmV4dEZ1bmN0aW9ufG5leHR9YCBmdW5jdGlvbiBpcyBjYWxsZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB0cmFuc2R1Y2luZ0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIGNvbnN0IHN0ZXBSZWR1Y2VyID0ge1xuICAgIFtwLnN0ZXBdKHhpdGVyLCBpbnB1dCkge1xuICAgICAgeGl0ZXIuaXRlbXMudW5zaGlmdChpbnB1dCk7XG4gICAgICByZXR1cm4geGl0ZXI7XG4gICAgfSxcbiAgICBbcC5yZXN1bHRdKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGl0ZXIgPSBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbiAgY29uc3QgeGYgPSB4Zm9ybShzdGVwUmVkdWNlcik7XG4gIGxldCBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAvLyBUaGlzIGFycmF5IGlzIHRoZSBrZXkgdG8gd29ya2luZyBwcm9wZXJseSB3aXRoIHN0ZXAgZnVuY3Rpb25zIHRoYXQgcmV0dXJuXG4gIC8vIG1vcmUgdGhhbiBvbmUgdmFsdWUuIEFsbCBvZiB0aGVtIGFyZSBwdXQgaW50byB0aGUgaXRlbXMgYXJyYXkuIEFzIGxvbmcgYXNcbiAgLy8gdGhpcyBhcnJheSBoYXMgdmFsdWVzIGluIGl0LCB0aGUgYG5leHRgIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIG9uZSB2YWx1ZVxuICAvLyBwb3BwZWQgZnJvbSBpdCByYXRoZXIgdGhhbiBydW5uaW5nIHRoZSBzdGVwIGZ1bmN0aW9uIGFnYWluLlxuICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gIC8vIFRoZSBgbmV4dGAgZnVuY3Rpb24gaGVyZSBpcyByYXRoZXIgc2ltcGxlLiBJZiB0aGVyZSBpcyBhbHJlYWR5IHNvbWV0aGluZyBpblxuICAvLyB0aGUgYGl0ZW1zYCBhcnJheSwgaXQncyByZXR1cm5lZC4gSWYgbm90LCB0aGUgYHN0ZXBgIGZ1bmN0aW9uIGlzIHJ1biBhbmQsXG4gIC8vIGlmIHRoYXQgcmVzdWx0cyBpbiBhIHZhbHVlIGluIHRoZSBgaXRlbXNgIGFycmF5LCBpdCdzIHJldHVybmVkLiBPdGhlcndpc2VcbiAgLy8gYW4gb2JqZWN0IHdpdGggYHsgZG9uZTogdHJ1ZSB9YCBpcyByZXR1cm5lZC5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzdGVwKCk7XG4gICAgfVxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBpdGVtcy5wb3AoKSxcbiAgICAgIGRvbmU6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgd2hlcmUgbW9zdCBvZiB0aGUgd29yayBoYXBwZW5zLiBJdCBnZXRzIHRoZSBuZXh0IHZhbHVlIGZyb20gdGhlXG4gIC8vIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJ1bnMgaXQgdGhyb3VnaCB0aGUgcmVkdWN0aW9uIHN0ZXAgZnVuY3Rpb25zLiBJZiB0aGF0XG4gIC8vIHJlc3VsdHMgaW4gYSB2YWx1ZSwgaXQncyBnaXZlbiB0byB0aGUgc3RlcHBlciBvYmplY3QgKHdoaWNoIGFkZHMgaXQgdG8gdGhlXG4gIC8vIGBpdGVtc2AgYXJyYXkpOyBvdGhlcndpc2UgdGhlIHdoaWxlIGxvb3AgY29udGludWVzIHRvIHRoZSBuZXh0IGVsZW1lbnQgb2ZcbiAgLy8gdGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoaXMgZW5zdXJlcyB0aGF0IHRoZXJlJ3Mgc29tZXRoaW5nIGZvciB0aGUgYG5leHRgXG4gIC8vIGZ1bmN0aW9uIHRvIHJldHVybiBlYWNoIHRpbWUgaXQncyBjYWxsZWQuXG4gIC8vXG4gIC8vIElmIHRoZSBjb2xsZWN0aW9uIGhhcyBmaW5pc2hlZCBvciBpZiB0aGUgc3RlcCBmdW5jdGlvbiByZXR1cm5zIGEgY29tcGxldGVkXG4gIC8vIG9iamVjdCAod2hpY2ggdGFrZSB3aWxsIGRvIGFmdGVyIGl0cyBsaW1pdCBvZiBlbGVtZW50cyBoYXMgYmVlbiByZWFjaGVkLFxuICAvLyBmb3IgaW5zdGFuY2UpLCB0aGUgaXRlcmF0aW9uIGlzIGZpbmlzaGVkIGJ5IGNhbGxpbmcgdGhlIHJlc3VsdCBmdW5jdGlvbi5cbiAgZnVuY3Rpb24gc3RlcCgpIHtcbiAgICBjb25zdCBjb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB3aGlsZSAoaXRlbXMubGVuZ3RoID09PSBjb3VudCkge1xuICAgICAgY29uc3Qgc3RlcFZhbHVlID0gaXRlci5uZXh0KCk7XG4gICAgICBpZiAoc3RlcFZhbHVlLmRvbmUgfHwgY29tcGxldGVkKSB7XG4gICAgICAgIHhmW3AucmVzdWx0XShyZXN1bHQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbXBsZXRlZCA9IGlzQ29tcGxldGVkKHhmW3Auc3RlcF0ocmVzdWx0LCBzdGVwVmFsdWUudmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGUgcmVzdWx0aW5nIG9iamVjdCBpcyBhbiBpdGVyYXRvciwgc28gdG8gc2F0aXNmeSB0aGUgaXRlcmFibGUgcHJvdG9jb2xcbiAgLy8gd2UganVzdCByZXR1cm4gdGhhdCBvYmplY3QgaXRzZWxmXG4gIGZ1bmN0aW9uIHNJdGVyYXRvcigpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gVGhlIGByZXN1bHRgIG5hbWUgaXMgaG9pc3RlZCBhbmQgdXNlZCBpbiBmdW5jdGlvbnMgZnVydGhlciB1cCwgc28gd2UgaGF2ZVxuICAvLyB0byByZXRhaW4gdGhhdCBuYW1lIGFuZCBjYW4ndCBqdXN0IHJldHVybiB0aGUgb2JqZWN0IHdpdGhvdXQgbmFtaW5nIGl0XG4gIGNvbnN0IHJlc3VsdCA9IHsgaXRlbXMsIG5leHQsIHN0ZXAsIFtTeW1ib2wuaXRlcmF0b3JdOiBzSXRlcmF0b3IgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYW5cbiAqIG91dHB1dCBjb2xsZWN0aW9uLlxuICpcbiAqIFRoaXMgaXMgdGhlIGxvd2VzdC1sZXZlbCBvZiB0aGUgdHJhbnNkdWN0aW9uIGZ1bmN0aW9ucyB0aGF0IGlzIGxpa2VseSB0byBzZWVcbiAqIHJlZ3VsYXIgdXNlLiBJdCBkb2VzIG5vdCBhc3N1bWUgYW55dGhpbmcgYWJvdXQgdGhlIHJlZHVjZXIsIGFzIGl0IGFza3MgZm9yIGl0XG4gKiB0byBiZSBwYXNzZWQgZXhwbGljaXRseS4gVGhpcyBtZWFucyB0aGF0IGFueSBraW5kIG9mIGNvbGxlY3Rpb24gY2FuIGJlXG4gKiBwcm9kdWNlZCwgc2luY2UgdGhlIHJlZHVjZXIgaXMgbm90IHRpZWQgdG8gdGhlIGlucHV0IGNvbGxlY3Rpb24gaW4gYW55IHdheS5cbiAqXG4gKiBgdHJhbnNkdWNlYCBhbHNvIHdpbGwgYWNjZXB0IGFuIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZXN1bHRpbmcgY29sbGVjdGlvbiBhc1xuICogdGhlIG9wdGlvbmFsIGxhc3QgcGFyYW1ldGVyLiBJZiB0aGlzIHBhcmFtZXRlciBpc24ndCBwcmVzZW50LCB0aGVuIHRoZVxuICogaW5pdGlhbCB2YWx1ZSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHRyYW5zZHVjZXIgaW5pdCBwcm90b2NvbCBwcm9wZXJ0eSBvbiB0aGVcbiAqIHJlZHVjZXIuIE5vdGUgaG93ZXZlciB0aGF0IG1hbnkgcmVkdWNlcnMgbWF5IG5vdCBwcm92aWRlIGFuIGluaXRpYWwgdmFsdWUsXG4gKiBhbmQgaW4gdGhvc2UgY2FzZXMgaXQgd2lsbCAqaGF2ZSogdG8gYmUgcGFzc2VkIGFzIGEgcGFyYW1ldGVyLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAsIHRyYW5zZHVjZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAgfSBmcm9tIFwiQGNoYW5rby90cmFuc2R1Y2Vyc1wiO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gbWFwKHggPT4geCArIDEpO1xuICpcbiAqIGNvbnN0IGFycmF5UmVkdWNlciA9IHtcbiAqICAgW3AuaW5pdF0oKSB7IHJldHVybiBbXTsgfSxcbiAqICAgW3AucmVzdWx0XSh4KSB7IHJldHVybiB4OyB9LFxuICogICBbcC5zdGVwXShhY2MsIHgpIHtcbiAqICAgICBhY2MucHVzaCh4KTtcbiAqICAgICByZXR1cm4gYWNjO1xuICogICB9XG4gKiB9O1xuICpcbiAqIGNvbnN0IHN0cmluZ1JlZHVjZXIgPSB7XG4gKiAgIFtwLmluaXRdKCkgeyByZXR1cm4gJyc7IH0sXG4gKiAgIFtwLnJlc3VsdF0oeCkgeyByZXR1cm4geDsgfSxcbiAqICAgW3Auc3RlcF0oYWNjLCB4KSB7IHJldHVybiBhY2MgKyB4OyB9XG4gKiB9O1xuICpcbiAqIGxldCByZXN1bHQgPSB0cmFuc2R1Y2UoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSwgYXJyYXlSZWR1Y2VyKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gdHJhbnNkdWNlKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0sIHN0cmluZ1JlZHVjZXIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqXG4gKiByZXN1bHQgPSB0cmFuc2R1Y2UoJzEyMzQ1JywgeGZvcm0sIGFycmF5UmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IHRyYW5zZHVjZSgnMTIzNDUnLCB4Zm9ybSwgc3RyaW5nUmVkdWNlcik7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICogYGBgXG4gKlxuICogVGhlc2UgZXhhbXBsZXMgaWxsdXN0cmF0ZSBhIG51bWJlciBvZiBpbXBvcnRhbnQgY29uY2VwdHMuIEZpcnN0IG9mIGFsbCwgdGhlXG4gKiB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIGluZGVwZW5kZW50IG9mIHRoZSB0eXBlIG9mIHRoZSBjb2xsZWN0aW9uOyB0aGUgc2FtZVxuICogdHJhbnNkdWNlciBmdW5jdGlvbiBpcyB1c2VkIG5vIG1hdHRlciB0aGUgdHlwZSBvZiBpbnB1dCBvciBvdXRwdXRcbiAqIGNvbGxlY3Rpb25zLiBTZWNvbmRseSwgdHdvIHJlZHVjZXJzIGFyZSBkZWZpbmVkLiBUaGVzZSBhcmUgb2JqZWN0cyB0aGF0XG4gKiBjb25mb3JtIHRvIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sIChzZWUgdGhlIGRvY3VtZW50YXRpb24gb25cbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnByb3RvY29sc31gKSBhbmQgdGhhdCBrbm93IGhvdyB0byBwcm9kdWNlIHRoZSBvdXRwdXRcbiAqIGNvbGxlY3Rpb24gb2YgY2hvaWNlLiBJbiB0aGlzIGNhc2UsIHRoZSByZWR1Y2VycyBrbm93IGhvdyB0byBjcmVhdGUgbmV3XG4gKiBhcnJheXMgYW5kIHN0cmluZ3MgKHRoZSBgaW5pdGAgcHJvdG9jb2wpIGFuZCBob3cgdG8gYWRkIGVsZW1lbnRzIHRvIGFycmF5c1xuICogYW5kIHN0cmluZ3MgKHRoZSBgc3RlcGAgcHJvdG9jb2wpLiBCZWNhdXNlIHRoZXNlIHJlZHVjZXJzIGRvIGhhdmUgYGluaXRgXG4gKiBwcm90b2NvbCBwcm9wZXJ0aWVzLCB0aGUgYHRyYW5zZHVjZWAgY2FsbHMgZG8gbm90IHJlcXVpcmUgZXhwbGljaXQgaW5pdGlhbFxuICogY29sbGVjdGlvbnMuXG4gKlxuICogVGhlIGZpbmFsIHBvaW50IGlzIHRoYXQgYHRyYW5zZHVjZWAgY2FuIGFjY2VwdCBhbnkga2luZCBvZiBpdGVyYWJsZVxuICogY29sbGVjdGlvbiwgYW5kIGJ5IHBhc3NpbmcgaW4gdGhlIHByb3BlciByZWR1Y2VyLCBpdCBjYW4gcHJvZHVjZSBhbnkga2luZCBvZlxuICogb3V0cHV0IGNvbGxlY3Rpb24uIFRoZSBzYW1lIGB0cmFuc2R1Y2VgIGZ1bmN0aW9uIGFuZCB0aGUgc2FtZSBtYXAgdHJhbnNmb3JtZXJcbiAqIGlzIHVzZWQgaW4gYWxsIGZvdXIgZXhhbXBsZXMsIGRlc3BpdGUgdGhlIGlucHV0L291dHB1dCBjb21iaW5hdGlvbiBiZWluZ1xuICogZGlmZmVyZW50IGluIGFsbCBmb3VyLlxuICpcbiAqIFRoZSBgcmVkdWNlcmAgcGFyYW1ldGVyICpjYW4qIGJlIGEgcmVkdWNlciBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgcmVkdWNlclxuICogb2JqZWN0LiBJZiB0aGlzIGlzIHRoZSBjYXNlLCB0aGUgYGluaXRgIHBhcmFtZXRlciBpcyByZXF1aXJlZCBiZWNhdXNlIGFcbiAqIGZ1bmN0aW9uIGNhbm5vdCBkZWZpbmUgYW4gaW5pdGlhbCB2YWx1ZSBpdHNlbGYuXG4gKlxuICogVGhlIGBpbml0YCBjb2xsZWN0aW9uIGRvZXNuJ3QgaGF2ZSB0byBiZSBlbXB0eS4gSWYgaXQgaXNuJ3QsIHRoZSBlbGVtZW50c1xuICogdGhhdCBhcmUgYWxyZWFkeSBpbiBpdCBhcmUgcmV0YWluZWQgYW5kIHRoZSB0cmFuc2Zvcm1lZCBpbnB1dCBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgY29sbGVjdGlvbiBub3JtYWxseS5cbiAqXG4gKiBPZiBjb3Vyc2UsIHRoZSBleGFtcGxlcyBhcmUgbm90IHJlYWxseSBuZWNlc3NhcnkgLSB0aGUgc2FtZSB0aGluZyBjb3VsZCBiZVxuICogYWNjb21wbGlzaGVkIHVzaW5nIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gIHdpdGhvdXQgaGF2aW5nIHRvIGNyZWF0ZVxuICogdGhlIHJlZHVjZXJzIChzdHJpbmdzIGFuZCBhcnJheXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOnhkdWNlLmludG98aW50b31gXG4gKiBhcyB0YXJnZXRzIGtub3cgaG93IHRvIHJlZHVjZSB0aGVtc2VsdmVzIGFscmVhZHkpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlcn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyhtb2R1bGU6eGR1Y2UuU3RlcEZ1bmN0aW9ufG1vZHVsZTp4ZHVjZS5SZWR1Y2VyKX0gcmVkdWNlciBFaXRoZXIgYVxuICogICAgIGZ1bmN0aW9uIG9yIGEgcmVkdWNlciBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sc1xuICogICAgIChgaW5pdGAgaXMgIG9ubHkgcmVxdWlyZWQgaWYgdGhlIGBpbml0YCBwYXJhbWV0ZXIgaXMgbm90IHByZXNlbnQpLiBUaGlzXG4gKiAgICAgb2JqZWN0IG11c3Qga25vdyBob3cgdG8gcHJvZHVjZSBhbiBvdXRwdXQgY29sbGVjdGlvbiB0aHJvdWdoIGl0cyBgc3RlcGBcbiAqICAgICBhbmQgYHJlc3VsdGAgcHJvdG9jb2wgZnVuY3Rpb25zLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uLCB0aGVuIGl0XG4gKiAgICAgaXMgdHVybmVkIGludG8gYSB2YWxpZCByZWR1Y2VyIG9iamVjdC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZX0gW2luaXRdIEEgY29sbGVjdGlvbiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZVxuICogICAgIG91dHB1dCBjb2xsZWN0aW9uLiBJZiB0aGlzIGlzIG5vdCBwcmVzZW50LCB0aGVuIHRoZSByZWR1Y2VyJ3MgYGluaXRgXG4gKiAgICAgcHJvdG9jb2wgZnVuY3Rpb24gaXMgY2FsbGVkIGluc3RlYWQgdG8gZ2V0IHRoZSBpbml0aWFsIGNvbGxlY3Rpb24uIElmIGl0XG4gKiAgICAgaXMgcHJlc2VudCBhbmQgbm90IGVtcHR5LCB0aGVuIHRoZSBleGlzdGluZyBlbGVtZW50cyByZW1haW4gYW5kIHRoZVxuICogICAgIHRyYW5zZm9ybWVkIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgYXJlIGFkZGVkIHRvIGl0LlxuICogQHJldHVybiB7Kn0gQSBjb2xsZWN0aW9uIG9mIGEgdHlwZSBkZXRlcm1pbmVkIGJ5IHRoZSBwYXNzZWQgcmVkdWNlci4gVGhlXG4gKiAgICAgZWxlbWVudHMgb2YgdGhpcyBjb2xsZWN0aW9uIGFyZSB0aGUgcmVzdWx0cyBmcm9tIHRoZSB0cmFuc2Zvcm1lciBmdW5jdGlvblxuICogICAgIGJlaW5nIGFwcGxpZWQgdG8gZWFjaCBlbGVtZW50IG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uLlxuICovXG5mdW5jdGlvbiB0cmFuc2R1Y2UoY29sbGVjdGlvbiwgeGZvcm0sIHJlZHVjZXIsIGluaXQpIHtcbiAgY29uc3QgciA9IGlzRnVuY3Rpb24ocmVkdWNlcikgPyB0b1JlZHVjZXIocmVkdWNlcikgOiByZWR1Y2VyO1xuICBjb25zdCBpID0gaW5pdCA/PyByW3AuaW5pdF0oKTtcbiAgY29uc3QgeGYgPSB4Zm9ybSA/IHhmb3JtKHIpIDogcjtcbiAgcmV0dXJuIHJlZHVjZShjb2xsZWN0aW9uLCB4ZiwgaSk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZWxlbWVudHMgb2YgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlbSBpbnRvIGEgbmV3XG4gKiBhcnJheS5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBhcnJheS5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzQXJyYXkgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gYXNBcnJheShbMSwgMiwgMywgNCwgNV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gWzIsIDMsIDQsIDUsIDZdXG4gKlxuICogcmVzdWx0ID0gYXNBcnJheSgnMTIzNDUnLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoJzEyMzQ1Jyk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsxLCAyLCAzLCA0LCA1XVxuICpcbiAqIHJlc3VsdCA9IGFzQXJyYXkoe2E6IDEsIGI6IDJ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gW3sgYTogMSB9LCB7IGI6IDIgfV1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlcn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gYXJyYXkgd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNBcnJheShjb2xsZWN0aW9uLCB4Zm9ybSkge1xuICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBBUlJBWV9SRURVQ0VSKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIG9iamVjdC5cbiAqXG4gKiBUaGUgdHJhbnNmb3JtZXIgaXMgb3B0aW9uYWwuIElmIGl0IGlzbid0IHByZXNlbnQsIHRoaXMgZnVuY3Rpb24ganVzdCBjb252ZXJ0c1xuICogdGhlIGlucHV0IGNvbGxlY3Rpb24gaW50byBhbiBvYmplY3QuIFdoZW4gdGhpcyBoYXBwZW5zLCBpZiB0aGUgaW5wdXRcbiAqIGNvbGxlY3Rpb24gaXMgbm90IGFuIG9iamVjdCBvciBhbiBhcnJheSBvZiBvYmplY3RzLCBudW1iZXJzIHN0YXJ0aW5nIGF0IGAwYFxuICogd2lsbCBiZSB1c2VkIGFzIGtleXMgZm9yIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYnkgdGhlIGlucHV0IGNvbGxlY3Rpb24uXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBhc09iamVjdCwga3YgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCBmbiA9IHByb3AgPT4ge1xuICogICBjb25zdCB7IGssIHYgfSA9IGt2KHByb3ApO1xuICogICByZXR1cm4geyBba106IHYgKyAxIH07XG4gKiB9XG4gKiBjb25zdCB4Zm9ybSA9IG1hcChmbik7XG4gKlxuICogbGV0IHJlc3VsdCA9IGFzT2JqZWN0KHsgYTogMSwgYjogMiB9LCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHsgYTogMiwgYjogMyB9XG4gKlxuICogcmVzdWx0ID0gYXNPYmplY3QoW3sgYTogMSB9LCB7IGI6IDIgfV0sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAyLCBiOiAzIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChbMSwgMiwgMywgNCwgNV0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IDA6IDEsIDE6IDIsIDI6IDMsIDM6IDQsIDQ6IDUgfVxuICpcbiAqIHJlc3VsdCA9IGFzT2JqZWN0KFt7IGE6IDEgfSwgeyBiOiAyIH1dKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4geyBhOiAxLCBiOiAyIH1cbiAqXG4gKiByZXN1bHQgPSBhc09iamVjdChcImhlbGxvXCIpO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiB7IDA6IFwiaFwiLCAxOiBcImVcIiwgMjogXCJsXCIsIDM6IFwibFwiLCA0OiBcIm9cIiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5JdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhlIG9ubHlcbiAqICAgICByZXF1aXJlbWVudCBvZiB0aGlzIGNvbGxlY3Rpb24gaXMgdGhhdCBpdCBpbXBsZW1lbnQgdGhlIGBpdGVyYWJsZWBcbiAqICAgICBwcm90b2NvbC4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGZvciBvYmplY3RzLCBzbyB0aGV5XG4gKiAgICAgY2FuIGFsc28gYmUgdXNlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5kdWNlcn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gb2JqZWN0IHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNPYmplY3QoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgT0JKRUNUX1JFRFVDRVIpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogc3RyaW5nLlxuICpcbiAqIFRoZSB0cmFuc2Zvcm1lciBpcyBvcHRpb25hbC4gSWYgaXQgaXNuJ3QgcHJlc2VudCwgdGhpcyBmdW5jdGlvbiBqdXN0IGNvbnZlcnRzXG4gKiB0aGUgaW5wdXQgY29sbGVjdGlvbiBpbnRvIGFuIHN0cmluZy4gSWYgdGhpcyBpcyB0aGUgY2FzZSBhbmQgdGhlIGlucHV0XG4gKiBjb2xsZWN0aW9uIGlzIGFuIG9iamVjdCwgb25seSB0aGUgdmFsdWVzIHdpbGwgYmUgY29uY2F0ZW5hdGVkIGludG8gYSBzdHJpbmcuXG4gKlxuICogT3RoZXJ3aXNlLCB0cmFuc2Zvcm1pbmcgb2JqZWN0cyBpbnRvIHN0cmluZ3Mgb25seSBtYWtlcyBtdWNoIHNlbnNlIGlmIHRoZVxuICogdHJhbnNkdWNlciBwcm9kdWNlcyBvbmx5IGEgc2luZ2xlIG91dHB1dCBmcm9tIGVhY2ggb2YgdGhlIG9iamVjdHMga2V5L3ZhbHVlXG4gKiBwYWlycy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IHRyYW5zZHVjZSwga2V5IH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbiAqIGltcG9ydCB7IG1hcCB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgeGZvcm0gPSBtYXAoeCA9PiB4LnRvVXBwZXJDYXNlKCkpO1xuICpcbiAqIGxldCByZXN1bHQgPSBhc1N0cmluZygnaGVsbG8nLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiSEVMTE9cIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsnaCcsICdlJywgJ2wnLCAnbCcsICdvJ10sIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJIRUxMT1wiXG4gKlxuICogcmVzdWx0ID0gYXNTdHJpbmcoeyBhOiAxLCBjOiAyLCBiOiAzIH0sIG1hcChrZXkpKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCJhY2JcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMTIzNDVcIlxuICpcbiAqIHJlc3VsdCA9IGFzU3RyaW5nKHsgYTogMSwgYzogMiwgYjogMyB9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gXCIxMjNcIlxuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZVxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmFibGVgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgc28gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyfSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1vZHVsZSBjYW4gcHJvZHVjZSBhIHN1aXRhYmxlXG4gKiAgICAgdHJhbnNkdWNlciBmdW5jdGlvbi4gSWYgdGhpcyBpc24ndCBwcmVzZW50LCB0aGUgaW5wdXQgY29sbGVjdGlvbiB3aWxsXG4gKiAgICAgc2ltcGx5IGJlIHJlZHVjZWQgaW50byBhIHN0cmluZyB3aXRob3V0IHRyYW5zZm9ybWF0aW9uLlxuICogQHJldHVybiB7U3RyaW5nfSBBIHN0cmluZyBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlXG4gKiAgICAgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gYXNTdHJpbmcoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgU1RSSU5HX1JFRFVDRVIpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGFuZCByZWR1Y2VzIHRoZW0gaW50byBhIG5ld1xuICogaXRlcmF0b3IuXG4gKlxuICogVGhlIHRyYW5zZm9ybWVyIGlzIG9wdGlvbmFsLiBJZiBpdCBpc24ndCBwcmVzZW50LCB0aGlzIGZ1bmN0aW9uIGp1c3QgY29udmVydHNcbiAqIHRoZSBpbnB1dCBjb2xsZWN0aW9uIGludG8gYW4gaXRlcmF0b3IuXG4gKlxuICogKihUaGUgcmVzdWx0cyBoZXJlIGFyZSBzaG93biBwYXNzZWQgdGhyb3VnaCBgYXNBcnJheWAgYmVjYXVzZSB0aGVyZSdzIG5vXG4gKiBwcmludGFibGUgcmVwcmVzZW50YXRpb24gb2YgYW4gaXRlcmF0b3IgdG8gc2hvdy4gVGhlIGBhc0FycmF5YCBjYWxscyBhcmUgZm9yXG4gKiBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIG9ubHkuKSpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGFzSXRlcmF0b3IsIGFzQXJyYXkgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqIGZ1bmN0aW9uKiBmaXZlKCkge1xuICogICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyArK2kpIHtcbiAqICAgICB5aWVsZCBpO1xuICogICB9XG4gKiB9O1xuICpcbiAqIGxldCByZXN1bHQgPSBhc0l0ZXJhdG9yKGZpdmUoKSwgeGZvcm0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKFsxLCAyLCAzLCA0LCA1XSwgeGZvcm0pO1xuICogY29uc29sZS5sb2coYXNBcnJheShyZXN1bHQpKTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBhc0l0ZXJhdG9yKFsxLCAyLCAzLCA0LCA1XSk7XG4gKiBjb25zb2xlLmxvZyhhc0FycmF5KHJlc3VsdCkpOyAgIC8vIC0+IFsxLCAyLCAzLCA0LCA1XVxuICpcbiAqIHJlc3VsdCA9IGFzSXRlcmF0b3Ioe2E6IDEsIGI6IDJ9KTtcbiAqIGNvbnNvbGUubG9nKGFzQXJyYXkocmVzdWx0KSk7ICAgLy8gLT4gW3sgYTogMSB9LCB7IGI6IDIgfV1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLkl0ZXJhYmxlfSBjb2xsZWN0aW9uIFRoZSBpbnB1dCBjb2xsZWN0aW9uLiBUaGUgb25seVxuICogICAgIHJlcXVpcmVtZW50IG9mIHRoaXMgY29sbGVjdGlvbiBpcyB0aGF0IGl0IGltcGxlbWVudCB0aGUgYGl0ZXJhYmxlYFxuICogICAgIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgYnkgdGhlIGxpYnJhcnkgZm9yIG9iamVjdHMsIHNvIHRoZXlcbiAqICAgICBjYW4gYWxzbyBiZSB1c2VkLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlcn0gW3hmb3JtXSBBIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHRyYW5zZHVjZXJcbiAqICAgICBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBiZWluZyBkb25lIHRvIHRoZSBpbnB1dFxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gYW4gaXRlcmF0b3Igd2l0aG91dCB0cmFuc2Zvcm1hdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTp4ZHVjZS5JdGVyYXRvcn0gQW4gaXRlcmF0b3IgY29udGFpbmluZyBhbGwgb2YgdGhlIHRyYW5zZm9ybWVkXG4gKiAgICAgdmFsdWVzIGZyb20gdGhlIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGFzSXRlcmF0b3IoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgcmV0dXJuIHhmb3JtID8gdHJhbnNkdWNpbmdJdGVyYXRvcihjb2xsZWN0aW9uLCB4Zm9ybSkgOiBpdGVyYXRvcihjb2xsZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gYSBuZXdcbiAqIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBoaWdoZXN0IGxldmVsIG9mIHRoZSB0aHJlZSBtYWluIHRyYW5zZHVjdGlvbiBmdW5jdGlvbnNcbiAqIChgc2VxdWVuY2VgLCBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWApLiBJdCBjcmVhdGVzIGEgbmV3IGNvbGxlY3Rpb24gb2ZcbiAqIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGlucHV0IGNvbGxlY3Rpb24gYW5kIHJlZHVjZXMgdGhlIHRyYW5zZm9ybWVkIGVsZW1lbnRzXG4gKiBpbnRvIGl0LiBBZGRpdGlvbmFsbHksIHVubGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS5pbnRvfGludG99YCBhbmRcbiAqIGB7QGxpbmsgbW9kdWxlOnhkdWNlLnRyYW5zZHVjZXx0cmFuc2R1Y2V9YCwgdGhpcyBmdW5jdGlvbiBpcyBjYXBhYmxlIG9mXG4gKiBwcm9kdWNpbmcgYW4gaXRlcmF0b3IgKGFzIGxvbmcgYXMgdGhlIGlucHV0IGlzIGFuIGl0ZXJhdG9yKS5cbiAqXG4gKiBUaGUgaW5wdXQgY29sbGVjdGlvbiBtdXN0IG5vdCBvbmx5IGltcGxlbWVudCB0aGUgYGl0ZXJhdG9yYCBwcm90b2NvbCAoYXMgaW5cbiAqIHRoZSBsYXN0IHR3byBmdW5jdGlvbnMpIGJ1dCBhbHNvIHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHRyYW5zZHVjZXJcbiAqIHByb3RvY29scy4gU3BlY2lhbCBzdXBwb3J0IGlzIHByb3ZpZGVkIGZvciBhcnJheXMsIHN0cmluZ3MsIG9iamVjdHMsIGFuZFxuICogaXRlcmF0b3JzLCBzbyB0aGV5IG5lZWQgbm90IGltcGxlbWVudCBhbnkgcHJvdG9jb2wuXG4gKlxuICogVGhlIG9idmlvdXMgbGltaXRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRoYXQgdGhlIHR5cGUgb2Ygb3V0cHV0IGNvbGxlY3Rpb25cbiAqIGNhbm5vdCBiZSBjaG9zZW4uIFNpbmNlIGl0IGlzIGFsd2F5cyB0aGUgc2FtZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbiwgdGhpc1xuICogZnVuY3Rpb24gY2Fubm90IGJlIHVzZWQgdG8gY29udmVydCBhIGNvbGxlY3Rpb24gaW50byBhIGRpZmZlcmVudCB0eXBlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgc2VxdWVuY2UgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gc2VxdWVuY2UoWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IHJlc3VsdCA9IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IHNlcXVlbmNlKCcxMjM0NScsIHhmb3JtKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7ICAgLy8gLT4gcmVzdWx0ID0gJzIzNDU2J1xuICogYGBgXG4gKlxuICogVGhlc2UgZXhhbXBsZXMgYXJlIGlkZW50aWNhbCB0byBzb21lIG9mIHRoZSBleGFtcGxlcyBmcm9tIHRoZSBgYXNYYFxuICogZnVuY3Rpb25zLiBPdGhlciBleGFtcGxlcyBhcmUgbm90IHBvc3NpYmxlIHdpdGggYHNlcXVlbmNlYCBiZWNhdXNlIHRoZXkgaGF2ZVxuICogZGlmZmVyZW50IGlucHV0IGFuZCBvdXRwdXQgY29sbGVjdGlvbiB0eXBlcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5SZWR1Y2libGVJdGVyYWJsZX0gY29sbGVjdGlvbiBUaGUgaW5wdXQgY29sbGVjdGlvbi4gVGhpc1xuICogICAgIG11c3QgaW1wbGVtZW50IHRoZSBgaXRlcmF0b3JgLCBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHByb3RvY29scy5cbiAqICAgICBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIGFycmF5cywgc3RyaW5ncywgb2JqZWN0cywgYW5kIGl0ZXJhdG9ycyxcbiAqICAgICBzbyB0aGV5IGRvIG5vdCBoYXZlIHRvIGltcGxlbWVudCBhbnkgcHJvdG9jb2xzLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlcn0geGZvcm0gQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0cmFuc2R1Y2VyXG4gKiAgICAgb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgdHJhbnNmb3JtYXRpb24gYmVpbmcgZG9uZSB0byB0aGUgaW5wdXRcbiAqICAgICBjb2xsZWN0aW9uJ3MgZWxlbWVudHMuIEFueSBvZiB0aGUgdHJhbnNkdWNlcnMgaW4gdGhlXG4gKiAgICAge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2Vyc3x0cmFuc2R1Y2Vyc30gbW9kdWxlIGNhbiBwcm9kdWNlIGFcbiAqICAgICBzdWl0YWJsZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZUl0ZXJhYmxlfSBBIGNvbGxlY3Rpb24gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGVcbiAqICAgICBpbnB1dCBjb2xsZWN0aW9uLCBjb250YWluaW5nIGFsbCBvZiB0aGUgdHJhbnNmb3JtZWQgdmFsdWVzIGZyb20gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gc2VxdWVuY2UoY29sbGVjdGlvbiwgeGZvcm0pIHtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBpc0FycmF5KGNvbGxlY3Rpb24pOlxuICAgICAgcmV0dXJuIGFzQXJyYXkoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNPYmplY3QoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNPYmplY3QoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNTdHJpbmcoY29sbGVjdGlvbik6XG4gICAgICByZXR1cm4gYXNTdHJpbmcoY29sbGVjdGlvbiwgeGZvcm0pO1xuICAgIGNhc2UgaXNJbXBsZW1lbnRlZChjb2xsZWN0aW9uLCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBjb2xsZWN0aW9uKTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQoY29sbGVjdGlvbiwgXCJpdGVyYXRvclwiKTpcbiAgICAgIHJldHVybiBhc0l0ZXJhdG9yKGNvbGxlY3Rpb24sIHhmb3JtKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgRXJyb3IoYENhbm5vdCBzZXF1ZW5jZSBjb2xsZWN0aW9uOiAke2NvbGxlY3Rpb259YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5wdXQgY29sbGVjdGlvbiBhbmQgcmVkdWNlcyB0aGVtIGludG8gdGhlXG4gKiB0YXJnZXQgY29sbGVjdGlvbi5cbiAqXG4gKiBUaGlzIGlzIG11Y2ggbGlrZSBge0BsaW5rIG1vZHVsZTp4ZHVjZS50cmFuc2R1Y2V8dHJhbnNkdWNlfWAsIGV4Y2VwdCB0aGF0XG4gKiBpbnN0ZWFkIG9mIGV4cGxpY2l0bHkgcHJvdmlkaW5nIGEgcmVkdWNlciAoYW5kIHBlcmhhcHMgYW4gaW5pdGlhbFxuICogY29sbGVjdGlvbiksIHRoZSB0YXJnZXQgY29sbGVjdGlvbiBhY3RzIGFzIGEgcmVkdWNlciBpdHNlbGYuIFRoaXMgcmVxdWlyZXNcbiAqIHRoYXQgdGhlIGNvbGxlY3Rpb24gaW1wbGVtZW50IHRoZSBgaW5pdGAsIGByZXN1bHRgLCBhbmQgYHN0ZXBgIHRyYW5zZHVjZXJcbiAqIHByb3RvY29sIGZ1bmN0aW9ucy5cbiAqXG4gKiBJZiBubyB0cmFuc2R1Y2VyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB0aGUgaW5wdXQgY29sbGVjdGlvbiBlbGVtZW50cyBhcmVcbiAqIHJlZHVjZWQgaW50byB0aGUgdGFyZ2V0IGNvbGxlY3Rpb24gd2l0aG91dCBiZWluZyB0cmFuc2Zvcm1lZC4gVGhpcyBjYW4gYmVcbiAqIHVzZWQgdG8gY29udmVydCBvbmUga2luZCBvZiBjb2xsZWN0aW9uIGludG8gYW5vdGhlci5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGludG8gfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBjaGFua28vdHJhbnNkdWNlcnNcIjtcbiAqXG4gKiBjb25zdCB4Zm9ybSA9IG1hcCh4ID0+IHggKyAxKTtcbiAqXG4gKiBsZXQgcmVzdWx0ID0gaW50byhbXSwgWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFsyLCAzLCA0LCA1LCA2XVxuICpcbiAqIHJlc3VsdCA9IGludG8oXCJcIiwgWzEsIDIsIDMsIDQsIDVdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFwiMjM0NTZcIlxuICpcbiAqIHJlc3VsdCA9IGludG8oW10sIFwiMTIzNDVcIiwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBbMiwgMywgNCwgNSwgNl1cbiAqXG4gKiByZXN1bHQgPSBpbnRvKFwiXCIsIFwiMTIzNDVcIiwgeGZvcm0pO1xuICogY29uc29sZS5sb2cocmVzdWx0KTsgICAvLyAtPiBcIjIzNDU2XCJcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlJlZHVjaWJsZX0gdGFyZ2V0IFRoZSBjb2xsZWN0aW9uIGludG8gd2hpY2ggYWxsIG9mIHRoZVxuICogICAgIHRyYW5zZm9ybWVkIGlucHV0IGNvbGxlY3Rpb24gZWxlbWVudHMgd2lsbCBiZSByZWR1Y2VkLiBUaGlzIGNvbGxlY3Rpb25cbiAqICAgICBtdXN0IGltcGxlbWVudCB0aGUgYGluaXRgLCBgcmVzdWx0YCwgYW5kIGBzdGVwYCBwcm90b2NvbCBmdW5jdGlvbnMgZnJvbVxuICogICAgIHRoZSB0cmFuc2R1Y2VyIHByb3RvY29sLiBTcGVjaWFsIHN1cHBvcnQgaXMgcHJvdmlkZWQgZm9yIGFycmF5cywgc3RyaW5ncyxcbiAqICAgICBhbmQgb2JqZWN0cywgc28gdGhleSBuZWVkIG5vdCBpbXBsZW1lbnQgdGhlIHByb3RvY29sLlxuICogQHBhcmFtIHttb2R1bGU6eGR1Y2UuSXRlcmFibGV9IGNvbGxlY3Rpb24gVGhlIGlucHV0IGNvbGxlY3Rpb24uIFRoZSBvbmx5XG4gKiAgICAgcmVxdWlyZW1lbnQgb2YgdGhpcyBjb2xsZWN0aW9uIGlzIHRoYXQgaXQgaW1wbGVtZW50IHRoZSBgaXRlcmF0b3JgXG4gKiAgICAgcHJvdG9jb2wuIFNwZWNpYWwgc3VwcG9ydCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBmb3Igb2JqZWN0cywgdG8gdGhleVxuICogICAgIGNhbiBhbHNvIGJlIHVzZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyfSBbeGZvcm1dIEEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgdHJhbnNkdWNlclxuICogICAgIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gdGhlIGlucHV0XG4gKiAgICAgY29sbGVjdGlvbidzIGVsZW1lbnRzLiBBbnkgb2YgdGhlIHRyYW5zZHVjZXJzIGluIHRoZVxuICogICAgIHtAbGluayBtb2R1bGU6dHJhbnNkdWNlcnN8dHJhbnNkdWNlcnN9IG1ub2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoaXMgaXNuJ3QgcHJlc2VudCwgdGhlIGlucHV0IGNvbGxlY3Rpb24gd2lsbFxuICogICAgIHNpbXBseSBiZSByZWR1Y2VkIGludG8gdGhlIHRhcmdldCBjb2xsZWN0aW9uIHdpdGhvdXQgdHJhbnNmb3JtYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuUmVkdWNpYmxlfSBUaGUgYHRhcmdldGAgY29sbGVjdGlvbiwgd2l0aCBhbGwgb2YgdGhlXG4gKiAgICAgdHJhbmZvcm1lZCBpbnB1dCBjb2xsZWN0aW9uIGVsZW1lbnRzIHJlZHVjZWQgb250byBpdC5cbiAqL1xuZnVuY3Rpb24gaW50byh0YXJnZXQsIGNvbGxlY3Rpb24sIHhmb3JtKSB7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgaXNBcnJheSh0YXJnZXQpOlxuICAgICAgcmV0dXJuIHRyYW5zZHVjZShjb2xsZWN0aW9uLCB4Zm9ybSwgQVJSQVlfUkVEVUNFUiwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzT2JqZWN0KHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBPQkpFQ1RfUkVEVUNFUiwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzU3RyaW5nKHRhcmdldCk6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCBTVFJJTkdfUkVEVUNFUiwgdGFyZ2V0KTtcbiAgICBjYXNlIGlzSW1wbGVtZW50ZWQodGFyZ2V0LCBcInN0ZXBcIik6XG4gICAgICByZXR1cm4gdHJhbnNkdWNlKGNvbGxlY3Rpb24sIHhmb3JtLCB0YXJnZXQsIHRhcmdldCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IEVycm9yKGBDYW5ub3QgcmVkdWNlIGNvbGxlY3Rpb24gaW50byAke3RhcmdldH06ICR7Y29sbGVjdGlvbn1gKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvc2VzIHR3byBvciBtb3JlIHRyYW5zZHVjZXIgZnVuY3Rpb25zIGludG8gYSBzaW5nbGUgdHJhbnNkdWNlciBmdW5jdGlvbi5cbiAqXG4gKiBFYWNoIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uXG4gKiAoYHtAbGluayBtb2R1bGU6eGR1Y2Uuc2VxdWVuY2V8c2VxdWVuY2V9YCwgYHtAbGluayBtb2R1bGU6eGR1Y2UuaW50b3xpbnRvfWAsXG4gKiBldGMuKSBpcyBvbmx5IGNhcGFibGUgb2YgYWNjZXB0aW5nIG9uZSBvZiB0aGVtLiBJZiB0aGVyZSBpcyBhIG5lZWQgdG8gaGF2ZVxuICogc2V2ZXJhbCB0cmFuc2R1Y2VycyBjaGFpbmVkIHRvZ2V0aGVyLCB0aGVuIHVzZSBgY29tcG9zZWAgdG8gY3JlYXRlIGFcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gdGhhdCBkb2VzIHdoYXQgYWxsIG9mIHRoZW0gZG8uXG4gKlxuICogTk9URTogSW4gZnVuY3Rpb25hbCBwcm9ncmFtbWluZywgYSBjb21wb3NlIGZ1bmN0aW9uIGlzIGdlbmVyYWxseSBvcmRlcmVkIHNvXG4gKiB0aGF0IHRoZSBmaXJzdC1leGVjdXRlZCBmdW5jdGlvbiBpcyBsaXN0ZWQgbGFzdC4gVGhpcyBpcyBkb25lIGluIHRoZSBvcHBvc2l0ZVxuICogd2F5LCB3aXRoIHRoZSBmaXJzdCB0cmFuc2R1Y2VyIGV4ZWN1dGluZyBmaXJzdCwgZXRjLiBUaGlzIGlzIGEgbW9yZSBuYXR1cmFsXG4gKiBvcmRlcmluZyBmb3IgdHJhbnNkdWNlciBmdW5jdGlvbnMgYmVjYXVzZSB0aGVyZSBpcyBhIHZlcnkgcmVhbCBkaXJlY3Rpb25hbFxuICogcHVsbCBvZiBlbGVtZW50cyB0aHJvdWdoIGEgY2hhaW4gb2YgY29tcG9zZWQgdHJhbnNkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBjb21wb3NlLCBzZXF1ZW5jZSB9IGZyb20gXCJAY2hhbmtvL3hkdWNlXCI7XG4gKiBpbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gXCJAY2hhbmtvL3RyYW5zZHVjZXJzXCI7XG4gKlxuICogY29uc3QgYWRkMSA9IHggPT4geCArIDE7XG4gKiBjb25zdCBvZGQgPSB4ID0+IHggJSAyICE9PSAwO1xuICpcbiAqIGNvbnN0IHhmb3JtID0gY29tcG9zZShtYXAoYWRkMSksIGZpbHRlcihvZGQpLCB0YWtlKDMpKTtcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBzZXF1ZW5jZShbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdLCB4Zm9ybSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQpOyAgIC8vIC0+IFszLCA1LCA3XTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2VcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJ9IGZucyBPbmUgb3IgbW9yZSBmdW5jdGlvbiB0aGF0IGVhY2ggY3JlYXRlXG4gKiAgICAgYSB0cmFuc2R1Y2VyIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHRyYW5zZm9ybWF0aW9uIGJlaW5nIGRvbmUgdG8gYVxuICogICAgIGNvbGxlY3Rpb24ncyBlbGVtZW50cy4gQW55IG9mIHRoZSB0cmFuc2R1Y2VycyBpbiB0aGVcbiAqICAgICB7QGxpbmsgbW9kdWxlOnRyYW5zZHVjZXJzfHRyYW5zZHVjZXJzfSBtb2R1bGUgY2FuIHByb2R1Y2UgYSBzdWl0YWJsZVxuICogICAgIHRyYW5zZHVjZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6eGR1Y2UuVHJhbnNkdWNlcn0gQSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYVxuICogICAgIHRyYW5zZHVjZXIgb2JqZWN0IHRoYXQgcGVyZm9ybXMgKmFsbCogb2YgdGhlIHRyYW5zZm9ybWF0aW9ucyBvZiB0aGVcbiAqICAgICBvYmplY3RzIHByb2R1Y2VkIGJ5IHRoZSBpbnB1dCB0cmFuc2R1Y2VyIGZ1bmN0aW9ucy5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSguLi5mbnMpIHtcbiAgY29uc3QgcmV2ZXJzZWQgPSBmbnMucmV2ZXJzZSgpO1xuICByZXR1cm4gdmFsdWUgPT4gcmV2ZXJzZWQucmVkdWNlKChhY2MsIGZuKSA9PiBmbihhY2MpLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCB7XG4gIHRyYW5zZHVjZSxcbiAgc2VxdWVuY2UsXG4gIGludG8sXG4gIGFzQXJyYXksXG4gIGFzT2JqZWN0LFxuICBhc1N0cmluZyxcbiAgYXNJdGVyYXRvcixcbiAgY29tcG9zZVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgYnVuY2ggb2YgdXRpbGl0eSBmdW5jdGlvbnMuIFRoZXNlIGFyZSBhbGwgdXNlZCBieSB0aGUgbGlicmFyeSBpdHNlbGYgaW5cbiAqIHBsYWNlcywgYnV0IG1hbnkgb2YgdGhlbSBhcmUgc3VpdGFibGUgZm9yIGdlbmVyYWwgdXNlIGFzIHdlbGwuXG4gKiBeXG4gKiBAbW9kdWxlIHV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogYE9iamVjdGAncyBgdG9TdHJpbmdgIGlzIGV4cGxpY2l0bHkgdXNlZCB0aHJvdWdob3V0IGJlY2F1c2UgaXQgY291bGQgYmVcbiAqIHJlZGVmaW5lZCBpbiBhbnkgc3VidHlwZSBvZiBgT2JqZWN0YC5cbiAqXG4gKiBAZnVuY3Rpb24gdG9TdHJpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UvY29tbW9uXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYSBmdW5jdGlvbiBvciBgZmFsc2VgIGlmXG4gKiAgICAgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS91dGlsc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbiBvclxuICogICAgIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAgaWYgdGhlIHZhbHVlIGlzIGFueSBvdGhlciBzb3J0IG9mIGJ1aWx0LWluXG4gKiBvYmplY3QgKHN1Y2ggYXMgYW4gYXJyYXkgb3IgYSBzdHJpbmcpLiBJdCBhbHNvIHJldHVybnMgYGZhbHNlYCBmb3IgYW55IG9iamVjdFxuICogdGhhdCBpcyBjcmVhdGVkIGJ5IGEgY29uc3RydWN0b3IgdGhhdCBpcyBub3QgYE9iamVjdGAncyBjb25zdHJ1Y3RvciwgbWVhbmluZ1xuICogdGhhdCBcImluc3RhbmNlc1wiIG9mIGN1c3RvbSBcImNsYXNzZXNcIiB3aWxsIHJldHVybiBgZmFsc2VgLiBUaGVyZWZvcmUgaXQncyBvbmx5XG4gKiBnb2luZyB0byByZXR1cm4gYHRydWVgIGZvciBsaXRlcmFsIG9iamVjdHMgb3IgdGhvc2UgY3JlYXRlZCB3aXRoXG4gKiBgT2JqZWN0LmNyZWF0ZSgpYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnhkdWNlL3V0aWxzXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIGJlaW5nIHRlc3RlZCB0byBzZWUgaWYgaXQgaXMgYSBwbGFpbiBvYmplY3QuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB0ZXN0IHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0IG9yXG4gKiAgICAgYGZhbHNlYCBpZiBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgLy8gVGhpcyBjaGVjayBleGNsdWRlcyBidWlsdC1pbiBub24tT2JqZWN0IG9iamVjdHMgKHN1Y2ggYXMgQXJyYXkgYW5kIFN0cmluZykuXG4gIC8vIEl0IGFsc28gZXhjbHVkZXMgb2JqZWN0cyBjcmVhdGVkIGZyb20gRVMyMDE1IGNsYXNzZXMsIGJ1dCBpdCBkb2VzIG5vdFxuICAvLyBleGNsdWRlIG9iamVjdHMgY3JlYXRlZCB3aXRoIGBuZXdgIG9uIGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyAodGhhdCBoYXBwZW5zXG4gIC8vIGJlbG93KS5cbiAgaWYgKHRvU3RyaW5nLmNhbGwoeCkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBQcm90b3R5cGUtbGVzcyBvYmplY3RzIChjcmVhdGVkIHdpdGggYE9iamVjdC5jcmVhdGUobnVsbCkpYCBwYXNzXG4gIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHgpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENoZWNrIHRvIHNlZSB3aGV0aGVyIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgdGVzdGVkIG9iamVjdCBpcyB0aGUgT2JqZWN0XG4gIC8vIGNvbnN0cnVjdG9yLiBUaGlzIGlzIHRoZSBvbmx5IGNvbnN0cnVjdG9yIHRoYXQgcHJvZHVjZXMgYSBcInBsYWluXCIgb2JqZWN0LlxuICBjb25zdCBjdG9yID1cbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiZcbiAgICBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgY3RvciA9PT0gT2JqZWN0O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gYHRydWVgIGZvciBhbnkgbnVtYmVyIGxpdGVyYWwgb3IgaW5zdGFuY2Ugb2ZcbiAqIGBOdW1iZXJgIGV4Y2VwdCBmb3IgYEluZmluaXR5YCBvciBgTmFOYC4gSXQgd2lsbCByZXR1cm4gYGZhbHNlYCBmb3Igc3RyaW5nc1xuICogdGhhdCBoYXBwZW4gdG8gYWxzbyBiZSBudW1iZXJzOyB0aGUgdmFsdWUgbXVzdCBiZSBhbiBhY3R1YWwgYE51bWJlcmAgaW5zdGFuY2VcbiAqIG9yIG51bWJlciBsaXRlcmFsIHRvIHJldHVybiBgdHJ1ZWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS91dGlsc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgbnVtYmVyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIGZpbml0ZSBudW1iZXIgKG5vdFxuICogICAgIGluY2x1ZGluZyBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIG51bWJlcnMpIG9yIGBmYWxzZWAgaWYgaXQgaXMgbm90LlxuICovXG5mdW5jdGlvbiBpc051bWJlcih4KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHgpID09PSBcIltvYmplY3QgTnVtYmVyXVwiICYmIGlzRmluaXRlKHgpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIExpdGVyYWwgc3RyaW5ncyB3aWxsIHJldHVybiBgdHJ1ZWAsIGFzIHdpbGwgaW5zdGFuY2VzIG9mIHRoZSBgU3RyaW5nYCBvYmplY3QuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp4ZHVjZS91dGlsc1xuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSBiZWluZyB0ZXN0ZWQgdG8gc2VlIGlmIGl0IGlzIGEgc3RyaW5nLlxuICogQHJldHVybiB7Ym9vbGVhbn0gRWl0aGVyIGB0cnVlYCBpZiB0aGUgdGVzdCB2YWx1ZSBpcyBhIHN0cmluZyBvciBgZmFsc2VgIGlmXG4gKiAgICBpdCBpcyBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHgpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBtZXJlbHkgZGVsZWdhdGVzIHRvIGBBcnJheS5pc0FycmF5YC4gSXQgaXMgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSBpbiBjYWxsaW5nIHN0eWxlIG9ubHkuXG4gKlxuICogQGZ1bmN0aW9uIGlzQXJyYXlcbiAqIEBtZW1iZXJvZiBtb2R1bGU6eGR1Y2UvdXRpbHNcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgYmVpbmcgdGVzdGVkIHRvIHNlZSBpZiBpdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHRlc3QgdmFsdWUgaXMgYW4gYXJyYXkgb3IgYGZhbHNlYCBpZlxuICogICAgIGl0IGlzIG5vdC5cbiAqL1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCB7XG4gIGlzRnVuY3Rpb24sXG4gIGlzR2VuZXJhdG9yRnVuY3Rpb24sXG4gIGlzT2JqZWN0LFxuICBpc051bWJlcixcbiAgaXNTdHJpbmcsXG4gIGlzQXJyYXlcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBbGwgb2YgdGhlIHB1YmxpYy1mYWNpbmcgQ2hhbmtvIGZ1bmN0aW9ucyBhcmUgZ2F0aGVyZWQgaGVyZSBpbiBvbmUgcGxhY2UgdG9cbiAqIGJlIGV4cG9ydGVkIGFzIGEgd2hvbGUuIFRoaXMgaXMgYSBjb21wbGV0ZWx5IGZsYXQgbGlzdCBvZiBleHBvcnRzLCBhc1xuICogaW5sdWRpbmcgYW55IG9iamVjdCBsaXRlcmFscyBmb3IgZXhwb3J0ICh3aGljaCB3b3VsZCBiZSBuYXR1cmFsIGZvciBidWZmZXJzLFxuICogZm9yIGV4YW1wbGUpIHdvdWxkIGtlZXAgdHJlZS1zaGFraW5nIGZyb20gd29ya2luZyByaWdodC5cbiAqXG4gKiBAbW9kdWxlIGNzcFxuICovXG5cbmV4cG9ydCB7IGZpeGVkLCBkcm9wcGluZywgc2xpZGluZyB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBjaGFuLFxuICB0aW1lZENoYW4sXG4gIHRyYW5zQ2hhbixcbiAgc2VuZCxcbiAgcmVjdixcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHJlY3ZPclRocm93LFxuICBjbG9zZSxcbiAgaXNDbG9zZWQsXG4gIGlzQnVmZmVyZWQsXG4gIGlzVGltZWQsXG4gIHNlbGVjdCxcbiAgc2VsZWN0QXN5bmMsXG4gIHZhbHVlLFxuICBjaGFubmVsXG59IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcbmV4cG9ydCB7XG4gIGNvbmZpZyxcbiAgU0VUX0lNTUVESUFURSxcbiAgTUVTU0FHRV9DSEFOTkVMLFxuICBTRVRfVElNRU9VVFxufSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5leHBvcnQgeyBnbywgc2xlZXAsIGpvaW4gfSBmcm9tIFwibW9kdWxlcy9wcm9jZXNzXCI7XG5leHBvcnQgeyBFTVBUWSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQW4gZXJyb3IgaGFuZGxpbmcgZnVuY2l0b24uIFRoaXMgaXMgdXNlZCB0byBoYW5kbGUgZXhjZXB0aW9ucyB0aHJvd24gaW4gYXN5bmNcbiAqIGZ1bmN0aW9ucyBhbmQgaW4gdHJhbnNkdWNlcnMuIFRoZSByZXR1cm4gdmFsdWUgb2YgYW4gZXhjZXB0aW9uIGhhbmRsZXIgaXNcbiAqIHR5cGljYWxseSBzZW50IHRvIGEgY2hhbm5lbDsgaWYgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZCB3aXRoaW4gYW4gYXN5bmNcbiAqIGZ1bmN0aW9uLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhhdCBmdW5jdGlvbidzIG91dHB1dCBjaGFubmVsLCBhbmQgaWYgdGhlXG4gKiBleGNwZXRpb24gaGFwcGVuZWQgaW4gYSB0cmFuc2R1Y2VyLCBpdCB3aWxsIGJlIHNlbnQgdG8gdGhlIGNoYW5uZWwgdG8gd2hpY2hcbiAqIHRoZSB0cmFuc2R1Y2VyIGlzIGF0dGFjaGVkLlxuICpcbiAqIEBjYWxsYmFjayBFeGNlcHRpb25IYW5kbGVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3R9IGVyciBUaGUgZXJyb3Igb2JqZWN0IHRoYXQgd2FzIHRocm93biB0byBjYXVzZSB0aGUgZXJyb3IgdG9cbiAqICAgICBoYXZlIHRvIGJlIGhhbmRsZWQuXG4gKiBAcmV0dXJuIHsqfSBBIHZhbHVlIGRlY2lkZWQgYnkgdGhlIGhhbmRsZXIgdGhhdCB3aWxsIGJlIHNlbnQgdG8gYSBjaGFubmVsLlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgY2hhbm5lbCBvcGVyYXRpb24gY29tcGxldGVzLiBUaGVcbiAqIHZhbHVlIHRoYXQgdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBpcyBpZGVudGljYWwgdG8gd2hhdCBpcyByZXR1cm5lZCBieSBhXG4gKiBibG9ja2luZyBjYWxsOiB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCBmb3IgYSBgcmVjdmAsIG9yIGB0cnVlYCBvclxuICogYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIGNoYW5uZWwgc3RhdHVzIGZvciBhIGBzZW5kYC4gQW55IHJldHVybiB2YWx1ZSBmcm9tXG4gKiB0aGlzIGNhbGxiYWNrIGlzIGlnbm9yZWQuXG4gKlxuICogQGNhbGxiYWNrIE9wQ2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IHZhbHVlIEVpdGhlciB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbCwgb3Igd2hldGhlciBvclxuICogbm90IGEgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSBzZW50LlxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayB0aGF0J3MgcnVuIHdoZW4gYSBub24tYmxvY2tpbmcgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlcy4gVGhlXG4gKiB2YWx1ZSB0aGF0IHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IHRoZSB2YWx1ZVxuICogdGhhdCB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIGNvbXBsZXRlZCB3aXRoIChlaXRoZXIgdGhlIHZhbHVlIHJlY2VpdmVkIGZyb21cbiAqIHRoZSBjaGFubmVsIGluIGEgcmVjZWl2ZSBvcGVyYXRpb24sIG9yIGB0cnVlYCBvciBgZmFsc2VgIGluIGEgc2VuZFxuICogb3BlcmF0aW9uKSwgYWxvbmcgd2l0aCB0aGUgY2hhbm5lbCB3aGVyZSB0aGUgb3BlcmF0aW9uIGFjdHVhbGx5IGhhcHBlbmVkLiBBbnlcbiAqIHJldHVybiB2YWx1ZSBmcm9tIHRoaXMgY2FsbGJhY2sgaXMgaWdub3JlZC5cbiAqXG4gKiBAY2FsbGJhY2sgU2VsZWN0Q2FsbGJhY2tcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBkYXRhIFRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNldmVyYWwgdHlwZXMgb2YgYnVmZmVycyB1c2FibGUgaW4gYnVmZmVyZWQgY2hhbm5lbHMuIFRoZXNlIGFyZSBhbGxcbiAqIGJ1aWx0IG9uIGEgc21hbGwsIGVmZmljaWVudCBxdWV1ZSB3aGljaCBpcyBpbiB0dXJuIGJhY2tlZCBieSBhIEphdmFTY3JpcHRcbiAqIGFycmF5LlxuICpcbiAqIEBtb2R1bGUgYnVmZmVyXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IHF1ZXVlIGFzIHEsIGNvdW50IGFzIHFDb3VudCwgZW5xdWV1ZSwgZGVxdWV1ZSB9IGZyb20gXCJtb2R1bGVzL3F1ZXVlXCI7XG5cbi8qKlxuICogQSBidWZmZXIgdGhhdCBzdG9yZXMgdmFsdWVzIHNlbnQgdG8gYSBidWZmZXJlZCBjaGFubmVsIHVudGlsIGEgcHJvY2Vzc1xuICogcmVjZWl2ZXMgdGhlbS5cbiAqXG4gKiBEaWZmZXJlbnQgYnVmZmVycyBkaWZmZXIgb25seSBpbiB0aGUgd2F5IHRoYXQgdGhleSBkZXRlcm1pbmUgd2hldGhlciB0aGV5IGFyZVxuICogZnVsbCBhbmQgaW4gd2hhdCBoYXBwZW5zIHdoZW4gYSBuZXcgdmFsdWUgaXMgYWRkZWQgdG8gYSBmdWxsIGJ1ZmZlci5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGVkZWYgeyhtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyIHwgbW9kdWxlOmNzcC5Ecm9wcGluZ0J1ZmZlciB8XG4gKiAgICAgbW9kdWxlOmNzcC5TbGlkaW5nQnVmZmVyKX0gQnVmZmVyXG4gKi9cblxuLyoqXG4gKiBUaGUgbmFtZSBvZiBhIHByb3BlcnR5IHRoYXQgZXhpc3RzIG9uIGJ1ZmZlciBvYmplY3RzIGZvciB0aGUgcHVycG9zZSBvZlxuICogaXRlbnRpZnlpbmcgdGhlbSBhcyBidWZmZXIgb2JqZWN0cy5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQlVGRkVSID0gU3ltYm9sKFwiQlVGRkVSXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNzcC9idWZmZXIuQlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgZml4ZWQgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBGSVhFRCA9IFN5bWJvbChcIkZJWEVEXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNzcC9idWZmZXIuQlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgZHJvcHBpbmcgYnVmZmVyLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBEUk9QUElORyA9IFN5bWJvbChcIkRST1BQSU5HXCIpO1xuXG4vKipcbiAqIEEgcG9zc2libGUgdmFsdWUgb2YgdGhlIGB7QGxpbmsgbW9kdWxlOmNzcC9idWZmZXIuQlVGRkVSfEJVRkZFUn0gcHJvcGVydHlcbiAqIGluZGljYXRpbmcgdGhhdCB0aGUgYnVmZmVyIGlzIGEgc2xpZGluZyBidWZmZXIuXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNMSURJTkcgPSBTeW1ib2woXCJTTElESU5HXCIpO1xuXG4vKipcbiAqIFByZWRpY2F0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHN1cHBsaWVkIG9iamVjdCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0geyp9IG9iaiBUaGUgdmFsdWUgdG8gdGVzdCB0byBzZWUgaWYgaXQncyBhIGJ1ZmZlci5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYnVmZmVyLCBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW0JVRkZFUl07XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBuZXZlciBkaXNjYXJkcyBidWZmZXJlZCBpdGVtcyB3aGVuIGEgbmV3IGl0ZW0gaXNcbiAqIGFkZGVkLlxuICpcbiAqIFRoaXMgYnVmZmVyIGhhcyBhIGNvbmNlcHQgb2YgKmZ1bGwqLCBidXQgaXQncyBhIHNvZnQgbGltaXQuIElmIHRoZSBzaXplIG9mXG4gKiB0aGUgYnVmZmVyIGlzIGV4Y2VlZGVkLCBhZGRlZCBpdGVtcyBhcmUgc3RpbGwgc3RvcmVkLlxuICpcbiAqIEEgYnVmZmVyIG9mIHRoaXMgdHlwZSBleGlzdHMgb25seSBhcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFcbiAqIGNoYW5uZWwgY3JlYXRpb24gZnVuY3Rpb24gKHN1Y2ggYXMge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufSkgdG8gbWFrZSB0aGF0XG4gKiBjaGFubmVsIGEgYnVmZmVyZWQgY2hhbm5lbC4gSXQgZG9lc24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGludGVuZGVkXG4gKiBmb3IgZXh0ZXJuYWwgdXNlLlxuICpcbiAqIEB0eXBlZGVmIEZpeGVkQnVmZmVyXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZpeGVkIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgZml4ZWQgYnVmZmVyIGlzIGEgJ25vcm1hbCcgYnVmZmVyLCBvbmUgdGhhdCBzdG9yZXMgYW5kIHJldHVybnMgaXRlbXMgb25cbiAqIGRlbWFuZC4gV2hpbGUgaXQgaXMgY2FwYWJsZSBvZiBiZWluZyBvdmVyLWZpbGxlZCwgdGhhdCBhYmlsaXR5IGlzIG5vdCB1c2VkIGluXG4gKiBDaGFua28uIEEgYnVmZmVyIHRoYXQgaXMgZnVsbCB3aWxsIGNhdXNlIHRoZSBuZXh0IHB1dCB0byBpdHMgY2hhbm5lbCB0byBibG9ja1xuICogdW50aWwgYXQgbGVhc3Qgb25lIGl0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBidWZmZXIuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBpdCdzIGZ1bGwuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfSBBIG5ldyBmaXhlZCBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBmaXhlZChzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBmaXhlZCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBGSVhFRFxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBkcm9wcyBuZXdseSBhZGRlZCBpdGVtcyB3aGVuIHRoZSBidWZmZXIgaXMgZnVsbC5cbiAqXG4gKiBUaGlzIGRyb3BwaW5nIGJlaGF2aW9yIGlzIHNpbGVudDogdGhlIG5ldyBpdGVtIGlzIHNpbXBseSBub3QgYWRkZWQgdG8gdGhlXG4gKiBxdWV1ZS4gTm90ZSB0aGF0IHRoaXMgYnVmZmVyIGlzIG5ldmVyIGBmdWxsYCBiZWNhdXNlIGl0IGNhbiBhbHdheXMgYmUgYWRkZWRcbiAqIHRvIHdpdGhvdXQgZXhjZWVkaW5nIHRoZSBzaXplLCBldmVuIGlmIHRoYXQgJ2FkZGluZycgZG9lc24ndCByZXN1bHQgaW4gYSBuZXdcbiAqIGl0ZW0gYWN0dWFsbHkgYXBwZWFyaW5nIGluIHRoZSBidWZmZXIuXG4gKlxuICogQSBidWZmZXIgb2YgdGhpcyB0eXBlIGV4aXN0cyBvbmx5IGFzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYVxuICogY2hhbm5lbCBjcmVhdGlvbiBmdW5jdGlvbiAoc3VjaCBhcyB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59KSB0byBtYWtlIHRoYXRcbiAqIGNoYW5uZWwgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBkb2Vzbid0IGhhdmUgYW55IHByb3BlcnRpZXMgdGhhdCBhcmUgaW50ZW5kZWRcbiAqIGZvciBleHRlcm5hbCB1c2UuXG4gKlxuICogQHR5cGVkZWYgRHJvcHBpbmdCdWZmZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgZHJvcHBpbmcgYnVmZmVyIG9mIHRoZSBzcGVjaWZpZWQgY2FwYWNpdHkuXG4gKlxuICogQSBkcm9wcGluZyBidWZmZXIgc2lsZW50bHkgZHJvcHMgdGhlIGl0ZW0gYmVpbmcgYWRkZWQgaWYgdGhlIGJ1ZmZlciBpc1xuICogYWxyZWFkeSBhdCBjYXBhY2l0eS4gU2luY2UgYWRkaW5nIGEgbmV3IGl0ZW0gd2lsbCBhbHdheXMgJ3N1Y2NlZWQnIChldmVuIGlmXG4gKiBpdCBzdWNjZWVkcyBieSBqdXN0IGlnbm9yaW5nIHRoZSBhZGQpLCBpdCBpcyBuZXZlciBjb25zaWRlcmVkIGZ1bGwgYW5kXG4gKiB0aGVyZWZvcmUgYSBwdXQgdG8gYSBjaGFubmVsIGJ1ZmZlcmVkIGJ5IGEgZHJvcHBpbmcgYnVmZmVyIG5ldmVyIGJsb2Nrcy5cbiAqXG4gKiBUaGlzIGJ1ZmZlciBpcyBwYXNzZWQgdG8gYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLCBldGMuIHRvIGNyZWF0ZSBhXG4gKiBidWZmZXJlZCBjaGFubmVsLiBJdCBpcyBub3QgbWVhbnQgdG8gYmUgdXNlZCBkaXJlY3RseS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBuZXcgYnVmZmVyIGNhbiBob2xkIGJlZm9yZVxuICogICAgIG5ld2VzdCBpdGVtcyBhcmUgZHJvcHBlZCBvbiBhZGQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkRyb3BwaW5nQnVmZmVyfSBBIG5ldyBkcm9wcGluZyBidWZmZXIgb2YgdGhlIHNwZWNpZmllZFxuICogICAgIGNhcGFjaXR5LlxuICovXG5mdW5jdGlvbiBkcm9wcGluZyhzaXplKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcXVldWUgYmFja2luZyB0aGlzIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcXVldWU6IHtcbiAgICAgIHZhbHVlOiBxKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoaXMgcXVldWUgY2FuIGhvbGQgYmVmb3JlIGl0J3MgY29uc2lkZXJlZCBmdWxsLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNpemU6IHtcbiAgICAgIHZhbHVlOiBzaXplXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEEgbWFya2VyIHByb3BlcnR5IHVzZWQgdG8gc2hvdyB0aGF0IHRoaXMgaXMgYSBkcm9wcGluZyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBEUk9QUElOR1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSBidWZmZXIgaW1wbGVtZW50YXRpb24gdGhhdCBkcm9wcyB0aGUgb2xkZXN0IGl0ZW0gd2hlbiBhbiBpdGVtIGlzIGFkZGVkIHRvIGFcbiAqIGZ1bGwgYnVmZmVyLlxuICpcbiAqIFRoaXMgaXMgdmVyeSBzaW1pbGFyIHRvIHtAbGluayBtb2R1bGU6Y3NwLkRyb3BwaW5nQnVmZmVyfERyb3BwaW5nQnVmZmVyfTsgdGhlXG4gKiBvbmx5IGRpZmZlcmVuY2UgaXMgaW4gd2hhdCBoYXBwZW5zIHdoZW4gYW4gaXRlbSBpcyBhZGRlZC4gSW4gdGhpcyBidWZmZXIsIHRoZVxuICogbmV3IGl0ZW0gaXMgaW5kZWVkIGFkZGVkIHRvIHRoZSBidWZmZXIsIGJ1dCBpbiBvcmRlciB0byBrZWVwIHRoZSBjb3VudCBvZiB0aGVcbiAqIGJ1ZmZlciBhdCBvciBiZWxvdyBpdHMgc2l6ZSwgdGhlIG9sZGVzdCBpdGVtIGluIHRoZSBidWZmZXIgaXMgc2lsZW50bHlcbiAqIGRyb3BwZWQuXG4gKlxuICogQSBidWZmZXIgb2YgdGhpcyB0eXBlIGV4aXN0cyBvbmx5IGFzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYVxuICogY2hhbm5lbCBjcmVhdGlvbiBmdW5jdGlvbiAoc3VjaCBhcyB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59KSB0byBtYWtlIHRoYXRcbiAqIGNoYW5uZWwgYSBidWZmZXJlZCBjaGFubmVsLiBJdCBkb2Vzbid0IGhhdmUgYW55IHByb3BlcnRpZXMgdGhhdCBhcmUgaW50ZW5kZWRcbiAqIGZvciBleHRlcm5hbCB1c2UuXG4gKlxuICogQHR5cGVkZWYgU2xpZGluZ0J1ZmZlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzbGlkaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkIGNhcGFjaXR5LlxuICpcbiAqIEEgc2xpZGluZyBidWZmZXIgZHJvcHMgdGhlIGZpcnN0LWFkZGVkIChvbGRlc3QpIGl0ZW0gYWxyZWFkeSBpbiB0aGUgYnVmZmVyIGlmXG4gKiBhIG5ldyBpdGVtIGlzIGFkZGVkIHdoZW4gdGhlIGJ1ZmZlciBpcyBhbHJlYWR5IGF0IGNhcGFjaXR5LiBTaW5jZSBpdCdzIGFsd2F5c1xuICogY2FwYWJsZSBvZiBoYXZpbmcgaXRlbXMgYWRkZWQgdG8gaXQsIGl0J3MgbmV2ZXIgY29uc2lkZXJlZCBmdWxsLCBhbmRcbiAqIHRoZXJlZm9yZSBhIHB1dCB0byBhIGNoYW5uZWwgYnVmZmVyZWQgYnkgYSBzbGlkaW5nIGJ1ZmZlciBuZXZlciBibG9ja3MuXG4gKlxuICogVGhpcyBidWZmZXIgaXMgcGFzc2VkIHRvIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCwgZXRjLiB0byBjcmVhdGUgYVxuICogYnVmZmVyZWQgY2hhbm5lbC4gSXQgaXMgbm90IG1lYW50IHRvIGJlIHVzZWQgZGlyZWN0bHkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgbmV3IGJ1ZmZlciBjYW4gaG9sZCBiZWZvcmVcbiAqICAgICBvbGRlc3QgaXRlbXMgYXJlIGRyb3BwZWQgb24gYWRkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5TbGlkaW5nQnVmZmVyfSBBIG5ldyBzbGlkaW5nIGJ1ZmZlciBvZiB0aGUgc3BlY2lmaWVkXG4gKiAgICAgY2FwYWNpdHkuXG4gKi9cbmZ1bmN0aW9uIHNsaWRpbmcoc2l6ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXVlIGJhY2tpbmcgdGhpcyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHF1ZXVlOiB7XG4gICAgICB2YWx1ZTogcSgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGlzIHF1ZXVlIGNhbiBob2xkIGJlZm9yZSBpdCdzIGNvbnNpZGVyZWQgZnVsbC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaXplOiB7XG4gICAgICB2YWx1ZTogc2l6ZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBIG1hcmtlciBwcm9wZXJ0eSB1c2VkIHRvIHNob3cgdGhhdCB0aGlzIGlzIGEgc2xpZGluZyBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3ltYm9sfVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgW0JVRkZFUl06IHtcbiAgICAgIHZhbHVlOiBTTElESU5HXG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBxdWV1ZSB0aGF0IGJhY2tzIGEgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHdob3NlIHF1ZXVlIGlzIHJldHVybmVkIGJ5IHRoaXNcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IFRoZSBxdWV1ZSB0aGF0IGJhY2tzIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBxdWV1ZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlci5xdWV1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaXRlbXMgYSBidWZmZXIgY2FuIGhvbGQgYmVmb3JlIGl0J3MgZnVsbC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG9zZSBzaXplIGlzIHJldHVybmVkIGJ5IHRoaXNcbiAqICAgICBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHNpemUgb2YgdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNpemUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaXRlbXMgYSBidWZmZXIgaXMgY3VycmVudGx5IGhvbGRpbmcuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgd2hvc2UgY3VycmVudCBjb3VudCBpcyByZXR1cm5lZFxuICogICAgIGJ5IHRoaXMgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgaXRlbXMgdGhhdCB0aGUgc3VwcGxpZWQgYnVmZmVyIGlzIGhvbGRpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb3VudChidWZmZXIpIHtcbiAgcmV0dXJuIHFDb3VudChidWZmZXIucXVldWUpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGJ1ZmZlciBpcyBhdCBjYXBhY2l0eS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aG8ncyBiZWluZyBjaGVja2VkIHRvIHNlZSBpZlxuICogICAgIGl0J3MgYXQgY2FwYWNpdHkuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHN1cHBsaWVkIGJ1ZmZlciBpcyBmdWxsIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBpc24ndC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGlzRnVsbChidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlcltCVUZGRVJdID09PSBGSVhFRCA/IHFDb3VudChidWZmZXIucXVldWUpID49IGJ1ZmZlci5zaXplIDogZmFsc2U7XG59XG5cbi8qKlxuICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byBhIGJ1ZmZlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB3aGVyZSB0aGUgc3VwcGxpZWQgaXRlbXMgd2lsbCBiZVxuICogICAgIGFkZGVkLlxuICogQHBhcmFtIHsuLi4qfSBpdGVtcyBUaGUgdmFsdWVzIGJlaW5nIGFkZGVkIHRvIHRoZSBzdXBwbGllZCBidWZmZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGQoYnVmZmVyLCAuLi5pdGVtcykge1xuICBzd2l0Y2ggKGJ1ZmZlcltCVUZGRVJdKSB7XG4gICAgY2FzZSBGSVhFRDpcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRFJPUFBJTkc6XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGNvdW50KGJ1ZmZlcikgPCBzaXplKGJ1ZmZlcikpIHtcbiAgICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTTElESU5HOlxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChjb3VudChidWZmZXIpID49IHNpemUoYnVmZmVyKSkge1xuICAgICAgICAgIGRlcXVldWUoYnVmZmVyLnF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbnF1ZXVlKGJ1ZmZlci5xdWV1ZSwgaXRlbSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBuZXh0IGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIGl0LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIGZyb20gd2hpY2ggYW4gaXRlbSBpcyBiZWluZ1xuICogICAgIHJlbW92ZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgaXRlbSB0aGF0IHdhcyByZW1vdmVkIGZyb20gdGhlIHN1cHBsaWVkIGJ1ZmZlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShidWZmZXIpIHtcbiAgcmV0dXJuIGRlcXVldWUoYnVmZmVyLnF1ZXVlKTtcbn1cblxuZXhwb3J0IHtcbiAgaXNCdWZmZXIsXG4gIGZpeGVkLFxuICBkcm9wcGluZyxcbiAgc2xpZGluZyxcbiAgcXVldWUsXG4gIHNpemUsXG4gIGNvdW50LFxuICBpc0Z1bGwsXG4gIGFkZCxcbiAgcmVtb3ZlXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbmltcG9ydCB7IHByb3RvY29scyBhcyBwIH0gZnJvbSBcIkBjaGFua28veGR1Y2VcIjtcbmltcG9ydCB7XG4gIHF1ZXVlLFxuICBkZXF1ZXVlLFxuICBFTVBUWSxcbiAgZmlsdGVyLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmltcG9ydCB7IGlzRnVsbCwgY291bnQsIHJlbW92ZSB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tIFwibW9kdWxlcy9kaXNwYXRjaGVyXCI7XG5cbi8qKlxuICogVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnMgdGhhdCBjYW4gYmUgcXVldWVkIG9uIGEgY2hhbm5lbCBiZWZvcmVcbiAqIGEgY2xlYW51cCBpcyB0cmlnZ2VyZWQuXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IE1BWF9ESVJUWSA9IDY0O1xuXG4vKipcbiAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBvcGVydGlvbnMgdGhhdCBjYW4gYmUgcXVldWVkIG9uIGEgY2hhbm5lbCBiZWZvcmUgbmV3XG4gKiBvcGVyYXRpb25zIGFyZSByZWplY3RlZC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgTUFYX1FVRVVFRCA9IDEwMjQ7XG5cbi8qKlxuICogKmhlIHZhbHVlIHJldHVybmVkIGZyb20gYSByZWNlaXZlIG9uIGEgY2hhbm5lbCB3aGVuIHRoYXQgY2hhbm5lbCBpcyBjbG9zZWRcbiAqIGFuZCBoYXMgbm8gbW9yZSB2YWx1ZXMgYXZhaWxhYmxlLlxuICpcbiAqIFRoaXMgaXMgYSBzcGVjaWFsIHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgdW5kZXIgYSBjZXJ0YWluIGNpcmN1bXN0YW5jZSwgbmFtZWx5XG4gKiB3aGVuIGEgcmVjZWl2ZSBpcyBwZXJmb3JtZWQgb24gYSBjbG9zZWQgY2hhbm5lbC4gQmVjYXVzZSBvZiB0aGF0LCBpdCBjYW5ub3RcbiAqIGJlIHJldHVybmVkIGZyb20gYSByZWNlaXZlIG9uIGFuIG9wZW4gY2hhbm5lbC4gRm9yIHRoYXQgcmVhc29uLCBgQ0xPU0VEYCBpc1xuICogdGhlIG9ubHkgdmFsdWUgdGhhdCBjYW5ub3QgYmUgc2VudCBvbnRvIGEgY2hhbm5lbCAmbWRhc2g7IGl0IHdvdWxkIGJlXG4gKiBpbXBvc3NpYmxlIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gYSBsZWdpdGltYXRlIHZhbHVlIG9mIGBDTE9TRURgIGFuZCBhblxuICogYWN0dWFsIGNsb3NlZCBjaGFubmVsLlxuICpcbiAqIEB0eXBlIHtTeW1ib2x9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICovXG5jb25zdCBDTE9TRUQgPSBTeW1ib2woXCJDTE9TRURcIik7XG5cbi8qKlxuICogQSB1bmlxdWUgdmFsdWUgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IGFuIG9iamVjdCBpcyBhIGJveC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgQk9YID0gU3ltYm9sKFwiQk9YXCIpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgaXMgYSBib3guXG4gKlxuICogQHBhcmFtIHsqfSBvYmogQSB2YWx1ZSB0byBjaGVjayBmb3IgYm94aW5lc3MuXG4gKiBAcmV0dXJuIEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGlzIGEgYm94IG9yIGBmYWxzZWAgaWYgaXQgaXNuJ3QuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0JveChvYmopIHtcbiAgcmV0dXJuICEhb2JqPy5bQk9YXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIHJlZHVjZWQuIFRoaXMgaXMgZG9uZSB1c2luZyB0aGUgdHJhbnNkdWNlclxuICogcHJvdG9jb2w7IGFuIG9iamVjdCB3aXRoIHRoZSBwcm90b2NvbC1zcGVjaWZpZWQgYHJlZHVjZWRgIHByb3BlcnR5IGlzIGFzc3VtZWRcbiAqIHRvIGJlIHJlZHVjZWQuIElmIGEgcmVzdWx0IG9mIGEgdHJhbnNmb3JtYXRpb24gaXMgcmVkdWNlZCwgaXQgbWVhbnMgdGhhdCB0aGVcbiAqIHRyYW5zZm9ybWF0aW9uIGlzIGNvbXBsZXRlIGFuZCB0aGUgY2hhbm5lbCBzaG91bGQgYmUgY2xvc2VkLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQgZm9yIHJlZHVjdGlvbi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIHZhbHVlIGhhcyBiZWVuIHJlZHVjZWQsIG9yIGBmYWxzZWAgaWZcbiAqICAgICBpdCBoYXMgbm90IGJlZW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc1JlZHVjZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWU/LltwLnJlZHVjZWRdO1xufVxuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgYSB2YWx1ZS4gVGhpcyBpcyBwcmltYXJpbHkgdXNlZCBhcyBhIG1hcmtlcjsgYSBwdXQgb3IgdGFrZVxuICogcmV0dXJuaW5nIGEgQm94IGluZGljYXRlcyB0aGF0IHRoZSBwdXQgb3IgdGFrZSBoYXMgcmV0dXJuZWQgYW4gaW1tZWRpYXRlXG4gKiB2YWx1ZSwgd2hpbGUgcmV0dXJuaW5nIGBudWxsYCBpbmRpY2F0ZXMgdGhhdCB0aGUgb3BlcmF0aW9uIGhhcyBiZWVuIHF1ZXVlZC5cbiAqXG4gKiBAdHlwZWRlZiBCb3hcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHdyYXBwZWQgYnkgdGhlIGJveC5cbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBBIHdyYXBwZXIgb2JqZWN0IGZvciBhIHZhbHVlLiBUaGlzIGlzIHVzZWQgYWxtb3N0IGVudGlyZWx5IGFzIGEgbWFya2VyXG4gKiBpbnRlcmZhY2UsIHRob3VnaCB0aGUgZmFjdCB0aGF0IGl0IGJlY29tZXMgYSBwYXJhbWV0ZXIgdGhhdCdzIHBhc3NlZCBieVxuICogcmVmZXJlbmNlIHJhdGhlciB0aGFuIHZhbHVlIGlzIGFsc28gaW1wb3J0YW50IGluIGEgY291cGxlIHBsYWNlcy4gSWYgYVxuICogY2hhbm5lbCBvcGVyYXRpb24gKHB1dCBvciB0YWtlKSByZXR1cm5zIGEgQm94LCBpdCBtZWFucyB0aGF0IGFuIGFjdHVhbCB2YWx1ZVxuICogd2FzIHJldHVybmVkLiBBIG5vbi1Cb3ggKHdoaWNoIGFsd2F5cyBoYXBwZW5zIHRvIGJlIGBudWxsYCkgbWVhbnMgdGhhdCB0aGVcbiAqIG9wZXJhdGlvbiBtdXN0IGJsb2NrLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJveC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h9IFRoZSBib3hlZCB2YWx1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJveCh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIFtCT1hdOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhIHZhbHVlLiBUaGlzIGlzIG11Y2ggbGlrZVxuICoge0BsaW5rIG1vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8Qm94fSBleGNlcHQgdGhhdCBpdCBhbHNvIGNhcnJpZXMgYSBoYW5kbGVyIHRvXG4gKiBiZSB1c2VkIHdoZW4gYSBzZW50IHZhbHVlIGlzIHJlY2VpdmVkLiBJdCBpcyBzcGVjaWZpY2FsbHkgZm9yIHF1ZXVlaW5nIHNlbmRzLlxuICpcbiAqIEB0eXBlZGVmIFNlbmRCb3hcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIHdyYXBwZWQgYnkgdGhpcyBib3guXG4gKiBAcHJvcGVydHkge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyfSBoYW5kbGVyIFRoZSBoYW5kbGVyIHVzZWQgdG8gcHJvY2VzcyBhXG4gKiAgICAgc2VuZCByZXF1ZXN0IGZvciB0aGUgdmFsdWUuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBib3ggdXNlZCB0byB3cmFwIGEgdmFsdWUgYmVpbmcgc2VudCBvbnRvIGEgY2hhbm5lbC4gVGhpcyBpcyBkaWZmZXJlbnQgZnJvbVxuICogYSByZWd1bGFyIGJveCBpbiB0aGF0IHRoZSBzZW5kIGhhbmRsZXIgaXMgYWxzbyBpbmNsdWRlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0gIHtPYmplY3R9IGhhbmRsZXIgVGhlIGhhbmRsZXIgdXNlZCB0byBwcm9jZXNzIGEgc2VuZCByZXF1ZXN0IGZvciB0aGVcbiAqICAgICB2YWx1ZS5cbiAqIEBwYXJhbSAgeyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBib3guXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuU2VuZEJveH0gVGhlIGJveGVkIHZhbHVlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGhhbmRsZXI6IHtcbiAgICAgIHZhbHVlOiBoYW5kbGVyXG4gICAgfSxcbiAgICBbQk9YXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgY2hhbm5lbCwgdXNlZCBieSBwcm9jZXNzZXMgdG8gY29tbXVuaWNhdGUgd2l0aCBvbmUgYW5vdGhlci5cbiAqXG4gKiBGb3IgZWFjaCBvcGVyYXRpb24sIHRoZSBjaGFubmVsIGZpcnN0IHRlc3RzIHRvIHNlZSBpZiB0aGVyZSdzIGEgY29ycmVzcG9uZGluZ1xuICogb3BlcmF0aW9uIGFscmVhZHkgcXVldWVkIChpLmUuLCBpZiB3ZSdyZSBkb2luZyBhIGBzZW5kYCB0aGF0IHRoZXJlJ3MgYSBxdWV1ZWRcbiAqIGByZWN2YCBhbmQgdmljZSB2ZXJzYSkuIElmIHRoZXJlIGlzLCB0aGF0IGNvcnJlc3BvbmRpbmcgb3BlcmF0aW9uIGlzXG4gKiB1bmJsb2NrZWQgYW5kIGJvdGggb3BlcmF0aW9ucyBjb21wbGV0ZS4gSWYgbm90LCB0aGUgb3BlcmF0aW9uIGlzIHF1ZXVlZCB0b1xuICogd2FpdCBmb3IgYSBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbi4gVGhlIHByb2Nlc3Mgb3IgdGhhdCBjcmVhdGVkIHRoZSBvcGVyYXRpb25cbiAqIHRoZW4gYmxvY2tzLlxuICpcbiAqIFRoZSBjaGFubmVsIGNhbiBiZSBiYWNrZWQgYnkgYSBidWZmZXIsIHRob3VnaCBpdCBpcyBub3QgYnkgZGVmYXVsdC4gSWYgYVxuICogYnVmZmVyIGlzIGluIHBsYWNlLCBhbmQgdGhhdCBidWZmZXIgaXMgbm90IGZ1bGwsIHRoZW4gdGhlIHByb2Nlc3MgdGhhdFxuICogY3JlYXRlZCBhbiBvcGVyYXRpb24gdGhhdCBoYXMgdG8gYmUgcXVldWVkIGlzICpub3QqIGJsb2NrZWQuXG4gKlxuICogVGhpcyBjaGFubmVsIG9iamVjdCBzdXBwb3J0cyB0cmFuc2Zvcm1hdGlvbnMsIGFzc3VtaW5nIHRoYXQgdGhleSBmb2xsb3cgdGhlXG4gKiBwcm90b2NvbCBjcmVhdGVkIGJ5IGEgZmV3IHRyYW5zZHVjZXIgbGlicmFyeSBhdXRob3JzIHRvIGFsbG93IHRoZW0gdG9cbiAqIGludGVyb3BlcmF0ZS4gVGhlIHN1cHBvcnQgbXVzdCBiZSBleHBsaWNpdGx5IGNyZWF0ZWQgYmVjYXVzZSB0aGUgbm9ybWFsXG4gKiBtZXRob2Qgb2YgbWFraW5nIGFuIG9iamVjdCBzdXBwb3J0IHRyYW5zZm9ybWF0aW9ucyB3b24ndCB3b3JrIGhlcmUuIFRoaXNcbiAqIG1ldGhvZCBpcyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IGFuZCBhZGQgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyB0byBpdCAtIGJ1dFxuICogZm9yIGEgY2hhbm5lbCwgd2UgbmVlZCB0byByZXBsYWNlIHRoZSB2YWx1ZXMgb24gdGhlIGNoYW5uZWwgd2l0aCB0aGVpclxuICogdHJhbnNmb3JtZWQgdmFsdWVzLCBpbiB0aGUgc2FtZSBvcmRlciBldmVuIGluIGEgbXVsdGktcHJvY2VzcyBlbnZpcm9ubWVudC5cbiAqIFRodXMgdHJhbnNmb3JtYXRpb25zIGhhcHBlbiBpbiBwbGFjZS5cbiAqXG4gKiBUcmFuc2Zvcm1hdGlvbnMgYXJlIGFwcGxpZWQgYmVmb3JlIHRoZSB2YWx1ZSBpcyBxdWV1ZWQsIHNvIGV2ZW4gaWYgdGhlcmUgaXMgYVxuICogY29ycmVzcG9uZGluZyBvcGVyYXRpb24gcmVhZHkgdG8gZ28sIHRoZSB0cmFuc2Zvcm1hdGlvbiBzdGlsbCBoYXBwZW5zLiBBbHNvLFxuICogdHJhbnNmb3JtYXRpb25zIHJlcXVpcmUgdGhhdCB0aGUgY2hhbm5lbCBiZSBidWZmZXJlZCAodGhpcyBidWZmZXIgaXMgd2hhdCBpc1xuICogc2VudCB0byB0aGUgdHJhbnNmb3JtZXIncyByZWR1Y3Rpb24gc3RlcCBmdW5jdGlvbik7IHRyeWluZyB0byBjcmVhdGUgYVxuICogY2hhbm5lbCB3aXRoIGEgdHJhbnNmb3JtZXIgYnV0IHdpdGhvdXQgYSBidWZmZXIgd2lsbCByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmdcbiAqIHRocm93bi5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGEgY2FsbCB0b1xuICogYHtAbGluayBtb2R1bGU6Y3NwLmNoYW58Y2hhbn1gLiBIb3dldmVyLCB0aGlzIG9iamVjdCBpcyBpbnRlbmRlZCB0byBiZSB1c2VkXG4gKiBhcyBhIHZhbHVlIHRvIHBhc3MgdG8gY2hhbm5lbCBvcGVyYXRpb24gZnVuY3Rpb25zOyBpdCBkb2Vzbid0IGhhdmUgYW55XG4gKiBwcm9wZXJ0aWVzIG9mIGludGVyZXN0IHRvIGFuIGVuZCB1c2VyLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZWRlZiBDaGFubmVsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2hhbm5lbC4gVGhpcyBpcyBhIGxvdy1sZXZlbCBmdW5jdGlvbjtcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBwZXJmb3JtcyBzb21lIG5lY2Vzc2FyeSBtYW5pcHVsYXRpb25zIG9uXG4gKiBhcmd1bWVudHMgYmVmb3JlIHVzaW5nIHRoaXMgZnVuY3Rpb24gdG8gcGVyZm9ybSB0aGUgYWN0dWFsIGNyZWF0aW9uLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bnVsbCB8IG1vZHVsZTpjc3AuQnVmZmVyfSBidWZmZXIgQW4gb3B0aW9uYWwgYnVmZmVyIHRoYXQsIGlmIHByZXNlbnQsXG4gKiAgICAgaXMgdXNlZCB0byBjcmVhdGUgYSBidWZmZXJlZCBjaGFubmVsLiBJZiB0aGlzIGlzIGBudWxsYCwgYW4gdW5idWZmZXJlZFxuICogICAgIGNoYW5uZWwgaXMgY3JlYXRlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0geGZvcm0gVGhlIHRyYW5zZHVjZXIgdXNlZCB0byB0cmFuc2Zvcm1cbiAqICAgICB2YWx1ZXMgc2VudCB0byB0aGUgY2hhbm5lbC4gSWYgbm8gdHJhbnNmb3JtYXRpb25zIGFyZSBuZWNlc3NhcnksIGFcbiAqICAgICBwYXNzdGhyb3VnaCB0cmFuc2R1Y2VyIHNob3VsZCBiZSBwcm92aWRlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNUaW1lZCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY2hhbm5lbCBpcyBhIHRpbWVkIGNoYW5uZWwuXG4gKiAgICAgVGhlIHRpbWluaW5nIG1lY2hhbmlzbSBpcyBoYW5kbGVkIG91dHNpZGUgdGhlIGNoYW5uZWwsIGJ1dCB0aGlzIHByb3BlcnR5XG4gKiAgICAgaXMgcHJvdmlkZWQgdG8gYmUgYWJsZSB0byBxdWVyeSB3aGV0aGVyIHRoYXQncyB0aGUgY2FzZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhEaXJ0eT02NCBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGlydHkgb3BlcmF0aW9ucyB0byBhbGxvd1xuICogICAgIGJlZm9yZSB0aGV5J3JlIHB1cmdlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhRdWV1ZWQ9MTAyNCBUaGUgbWF4aW11bSBudW1iZXIgb2Ygb3BlcmF0aW9ucyB0aGF0IGNhbiBiZVxuICogICAgIHF1ZXVlZCBiZWZvcmUgbmV3IG9uZXMgYXJlIHJlamVjdGVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyBjaGFubmVsLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hhbm5lbChcbiAgYnVmZmVyLFxuICB4Zm9ybSxcbiAgaXNUaW1lZCA9IGZhbHNlLFxuICBtYXhEaXJ0eSA9IE1BWF9ESVJUWSxcbiAgbWF4UXVldWVkID0gTUFYX1FVRVVFRFxuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBidWZmZXI6IHtcbiAgICAgIHZhbHVlOiBidWZmZXJcbiAgICB9LFxuICAgIHhmb3JtOiB7XG4gICAgICB2YWx1ZTogeGZvcm1cbiAgICB9LFxuICAgIG1heERpcnR5OiB7XG4gICAgICB2YWx1ZTogbWF4RGlydHlcbiAgICB9LFxuICAgIG1heFF1ZXVlZDoge1xuICAgICAgdmFsdWU6IG1heFF1ZXVlZFxuICAgIH0sXG4gICAgcmVjdnM6IHtcbiAgICAgIHZhbHVlOiBxdWV1ZSgpXG4gICAgfSxcbiAgICBzZW5kczoge1xuICAgICAgdmFsdWU6IHF1ZXVlKClcbiAgICB9LFxuICAgIGRpcnR5UmVjdnM6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGRpcnR5U2VuZHM6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGNsb3NlZDoge1xuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuICAgIGlzQnVmZmVyZWQ6IHtcbiAgICAgIHZhbHVlOiAhIWJ1ZmZlclxuICAgIH0sXG4gICAgaXNUaW1lZDoge1xuICAgICAgdmFsdWU6IGlzVGltZWRcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNlbmRzIGEgdmFsdWUgdG8gYSBjaGFubmVsLiBUaGUgc3BlY2lmaWVkIGhhbmRsZXIgaXMgdXNlZCB0byBjb250cm9sIHdoZXRoZXJcbiAqIHRoZSBzZW5kIGlzIGFjdGl2ZSBhbmQgd2hhdCB0byBkbyBhZnRlciB0aGUgc2VuZCBjb21wbGV0ZXMuIEEgc2VuZCBjYW4gYmVjb21lXG4gKiBpbmFjdGl2ZSBpZiBpdCB3YXMgcGFydCBvZiBhbiBgc2VsZWN0YCBjYWxsIGFuZCBzb21lIG90aGVyIG9wZXJhdGlvblxuICogc3BlY2lmaWVkIGluIHRoYXQgY2FsbCBoYXMgYWxyZWFkeSBjb21wbGV0ZWQuXG4gKlxuICogVGhpcyB2YWx1ZSBpcyBnaXZlbiB0byBhIHJlY2VpdmUgaGFuZGxlciBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG9uZSB3YWl0aW5nLlxuICogT3RoZXJ3aXNlIHRoZSB2YWx1ZSBhbmQgaGFuZGxlciBhcmUgcXVldWVkIHRvZ2V0aGVyIHRvIHdhaXQgZm9yIGEgcmVjZWl2ZS5cbiAqXG4gKiBUaGlzIGlzIGEgbG93LWxldmVsIG9wZXJhdGlvbiB0aGF0J3MgcHJvdmlkZWQgYXMgYSBwYXJ0IG9mIHRoZSBjaGFubmVsXG4gKiBpbXBsZW1lbnRhdGlvbiBzbyB0aGF0IG90aGVyIG9wZXJhdGlvbnMgZnVuY3Rpb25zIGNhbiBwcm9wZXJseSBhcHBseVxuICogaGFuZGxlcnMuIEl0IGlzIG5vdCBtZWFudCBmb3IgZ2VuZXJhbCB1c2UuIFVzZSB0aG9zZSBvdGhlciBvcGVyYXRpb25zXG4gKiBmdW5jdGlvbnMgaW5zdGVhZC5cbiAqXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdGhhdCB0aGUgdmFsdWUgaXMgYmVpbmcgc2VudFxuICogICAgIHRvLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGhhbmRsZXIuYWN0aXZlIERldGVybWluZXMgd2hldGhlciB0aGUgc2VuZCBpcyBzdGlsbCBhY3RpdmVcbiAqICAgICBhbmQgc2hvdWxkIHN0aWxsIGJlIHNlcnZpY2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlci5jb21taXQgRGVhY3RpdmF0ZXMgdGhlIHNlbmQgKHNvIGl0IGNhbid0IGJlXG4gKiAgICAgc2VydmljZWQgYSBzZWNvbmQgdGltZSkgYW5kIHJldHVybnMgdGhlIGNhbGxiYWNrIHRvIGJlIGZpcmVkIHdoZW4gdGhlXG4gKiAgICAgc2VuZCBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fG51bGx9IE9uZSBvZiB0aHJlZSB2YWx1ZXMuIEEgYm94ZWQgYHRydWVgIGlzXG4gKiAgICAgcmV0dXJuZWQgaWYgdGhlIHNlbmQgd2FzIGltbWVkaWF0ZWx5IGNvbnN1bWVkIGJ5IGEgcGVuZGluZyByZWNlaXZlLiBBXG4gKiAgICAgYm94ZWQgYGZhbHNlYCBpcyByZXR1cm5lZCBpZiB0aGUgc2VuZCB3YXMgcGVyZm9ybWVkIG9uIGEgY2hhbm5lbCB0aGF0IHdhc1xuICogICAgIGFscmVhZHkgY2xvc2VkIGJ5IHRoZSB0aW1lIHRoZSBzZW5kIHRvb2sgcGxhY2UuIGBudWxsYCBpcyByZXR1cm5lZCBpZiB0aGVcbiAqICAgICBzZW5kIHdhcyBxdWV1ZWQgcGVuZGluZyBhIGNvcnJlc3BvbmRpbmcgcmVjZWl2ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIGhhbmRsZXIpIHtcbiAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICB0aHJvdyBFcnJvcihcIkNhbm5vdCBzZW5kIENMT1NFRCB0byBhIGNoYW5uZWxcIik7XG4gIH1cblxuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBib3goZmFsc2UpO1xuICB9XG5cbiAgbGV0IHJlY2VpdmVyLCBjYWxsYmFjaztcblxuICAvLyBQdXNoIHRoZSBpbmNvbWluZyB2YWx1ZSB0aHJvdWdoIHRoZSBidWZmZXIsIGV2ZW4gaWYgdGhlcmUncyBhbHJlYWR5IGFcbiAgLy8gcmVjZWl2ZXIgd2FpdGluZyBmb3IgdGhlIHZhbHVlLiBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB0cmFuc2R1Y2VyXG4gIC8vIHN0ZXAgZnVuY3Rpb24gaGFzIGEgY2hhbmNlIHRvIGFjdCBvbiB0aGUgdmFsdWUgZmlyc3QsIHdoaWNoIGNvdWxkIGNoYW5nZVxuICAvLyB0aGUgdmFsdWUgb3IgbWFrZSBpdCBhbHRvZ2V0aGVyIHVuYXZhaWxhYmxlLlxuICAvL1xuICAvLyBJZiB0aGUgY2hhbm5lbCBpcyB1bmJ1ZmZlcmVkIHRoaXMgcHJvY2VzcyBpcyBza2lwcGVkICh0aGVyZSBjYW4ndCBiZSBhXG4gIC8vIHRyYW5zZHVjZXIgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsIGFueXdheSkuIElmIHRoZSBidWZmZXIgaXMgZnVsbCwgdGhlXG4gIC8vIHRyYW5zZHVjZXIncyB3b3JrIGlzIGRlZmVycmVkIHVudGlsIGxhdGVyIHdoZW4gdGhlIGJ1ZmZlciBpcyBub3QgZnVsbC5cbiAgaWYgKGNoYW5uZWwuYnVmZmVyICYmICFpc0Z1bGwoY2hhbm5lbC5idWZmZXIpKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICBjb25zdCBkb25lID0gaXNSZWR1Y2VkKGNoYW5uZWwueGZvcm1bcC5zdGVwXShjaGFubmVsLmJ1ZmZlciwgdmFsdWUpKTtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGlmIChjb3VudChjaGFubmVsLmJ1ZmZlcikgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgICBjYWxsYmFjayA9IHJlY2VpdmVyLmNvbW1pdCgpO1xuICAgICAgICBjb25zdCB2YWwgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBkaXNwYXRjaCgoKSA9PiBjYWxsYmFjayh2YWwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb25lKSB7XG4gICAgICBjbG9zZShjaGFubmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGJveCh0cnVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBoYXBwZW5zIGlmIHRoZSBjaGFubmVsIGlzIHVuYnVmZmVyZWQgYW5kIHRoZXJlIGlzIGF0IGxlYXN0IG9uZVxuICAvLyBwZW5kaW5nIHJlY2VpdmUuIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5LFxuICAvLyBiZWNhdXNlIGluIG9yZGVyIGZvciBhIGJ1ZmZlcmVkIGNoYW5uZWwgdG8gcmVhY2ggdGhpcyBwb2ludCwgaXRzIGJ1ZmZlclxuICAvLyBtdXN0IGhhdmUgYmVlbiBmdWxsLiBJZiB0aGUgYnVmZmVyIGlzIGZ1bGwsIHRoYXQgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmdcbiAgLy8gcmVjZWl2ZXMgYW5kIHRoZSBmaXJzdCBvbmUgcmVhZCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0XG4gIC8vIHBlbmRpbmcgcmVjZWl2ZSBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHJlY2VpdmVyLmFjdGl2ZSkge1xuICAgICAgaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3godHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vIHBlbmRpbmcgcmVjZWl2ZXMgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBvciBvbiBhIGJ1ZmZlcmVkXG4gIC8vIGNoYW5uZWwgd2l0aCBhIGZ1bGwgYnVmZmVyLCB3ZSBxdWV1ZSB0aGUgc2VuZCB0byB0bGV0IGl0IHdhaXQgZm9yIGEgcmVjZWl2ZVxuICAvLyB0byBiZWNvbWUgYXZhaWxhYmxlLiBTZW5kcyB3aG9zZSBoYW5kbGVycyBoYXZlIGdvbmUgaW5hY3RpdmUgKHdoaWNoIGhhcHBlbnNcbiAgLy8gaWYgdGhleSB3ZXJlIHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGEgYHNlbGVjdGAgY2FsbCkgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChjaGFubmVsLmRpcnR5U2VuZHMgPiBjaGFubmVsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGNoYW5uZWwuc2VuZHMsIHNlbmRlciA9PiBzZW5kZXIuaGFuZGxlci5hY3RpdmUpO1xuICAgIGNoYW5uZWwuZGlydHlTZW5kcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY2hhbm5lbC5kaXJ0eVNlbmRzKys7XG4gIH1cblxuICBpZiAocUNvdW50KGNoYW5uZWwuc2VuZHMpID49IGNoYW5uZWwubWF4UXVldWVkKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgTm8gbW9yZSB0aGFuICR7Y2hhbm5lbC5tYXhRdWV1ZWR9IHBlbmRpbmcgc2VuZHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGBcbiAgICApO1xuICB9XG4gIGVucXVldWUoY2hhbm5lbC5zZW5kcywgc2VuZEJveCh2YWx1ZSwgaGFuZGxlcikpO1xuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSBhIGNoYW5uZWwuIFRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyB1c2VkIHRvIGNvbnRyb2xcbiAqIHdoZXRoZXIgdGhlIHJlY2VpdmUgaXMgYWN0aXZlIGFuZCB3aGF0IHRvIGRvIGFmdGVyIHRoZSByZWNlaXZlIGNvbXBsZXRlcy4gQVxuICogcmVjZWl2ZSBjYW4gYmVjb21lIGluYWN0aXZlIGlmIGl0IHdhcyBwYXJ0IG9mIGFuIGBzZWxlY3RgIGNhbGwgYW5kIHNvbWUgb3RoZXJcbiAqIG9wZXJhdGlvbiBzcGVjaWZpZWQgaW4gdGhhdCBjYWxsIGhhcyBhbHJlYWR5IGNvbXBsZXRlZC5cbiAqXG4gKiBUaGlzIHZhbHVlIGlzIGdpdmVuIHRvIGEgc2VuZCBoYW5kbGVyIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgb25lIHdhaXRpbmcuXG4gKiBPdGhlcndpc2UgdGhlIHZhbHVlIGFuZCBoYW5kbGVyIGFyZSBxdWV1ZWQgdG9nZXRoZXIgdG8gd2FpdCBmb3IgYSBzZW5kLlxuICpcbiAqIFRoaXMgaXMgYSBsb3ctbGV2ZWwgb3BlcmF0aW9uIHRoYXQncyBwcm92aWRlZCBhcyBhIHBhcnQgb2YgdGhlIGNoYW5uZWxcbiAqIGltcGxlbWVudGF0aW9uIHNvIHRoYXQgb3RoZXIgb3BlcmF0aW9ucyBmdW5jdGlvbnMgY2FuIHByb3Blcmx5IGFwcGx5XG4gKiBoYW5kbGVycy4gSXQgaXMgbm90IG1lYW50IGZvciBnZW5lcmFsIHVzZS4gVXNlIHRob3NlIG90aGVyIG9wZXJhdGlvbnNcbiAqIGZ1bmN0aW9ucyBpbnN0ZWFkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRoYXQgdGhlIHZhbHVlIGlzIGJlaW5nXG4gKiAgICAgcmVjZWl2ZWQgZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGFuZGxlci5hY3RpdmUgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZWNlaXZlIGlzIHN0aWxsXG4gKiAgICAgYWN0aXZlIGFuZCBzaG91bGQgc3RpbGwgYmUgc2VydmljZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLmNvbW1pdCBEZWFjdGl2YXRlcyB0aGUgcmVjZWl2ZSAoc28gaXQgY2FuJ3QgYmVcbiAqICAgICBzZXJ2aWNlZCBhIHNlY29uZCB0aW1lKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiB0aGVcbiAqICAgICByZWNlaXZlIGNvbXBsZXRlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AvY2hhbm5lbC5Cb3h8bnVsbH0gRWl0aGVyIHRoZSBib3hlZCB2YWx1ZSByZWNlaXZlZCBmcm9tXG4gKiAgICAgdGhlIGNoYW5uZWwsIG9yIGBudWxsYCBpZiB0aGUgcmVjZWl2ZSBtdXN0IGJlIHF1ZXVlZCB0byBhd2FpdCBhXG4gKiAgICAgY29ycmVzcG9uZGluZyBzZW5kLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlUmVjdihjaGFubmVsLCBoYW5kbGVyKSB7XG4gIGxldCBzZW5kZXIsIHNlbmRIYW5kbGVyLCBjYWxsYmFjaztcblxuICAvLyBSdW5zIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIGFuZCB0aGUgYnVmZmVyZWQgaXMgbm90IGVtcHR5IChhbiBlbXB0eVxuICAvLyBidWZmZXIgbWVhbnMgdGhlcmUgYXJlIG5vIHBlbmRpbmcgc2VuZHMpLiBXZSBpbW1lZGlhdGVseSBwcm9jZXNzIGFueSBzZW5kc1xuICAvLyB0aGF0IHdlcmUgcXVldWVkIHdoZW4gdGhlcmUgd2VyZSBubyBwZW5kaW5nIHJlY2VpdmVzLCB1cCB1bnRpbCB0aGUgYnVmZmVyXG4gIC8vIGlzIGZpbGxlZCB3aXRoIHNlbnQgdmFsdWVzLlxuICBpZiAoY2hhbm5lbC5idWZmZXIgJiYgY291bnQoY2hhbm5lbC5idWZmZXIpID4gMCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgY29uc3QgdmFsdWUgPSByZW1vdmUoY2hhbm5lbC5idWZmZXIpO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGlzRnVsbChjaGFubmVsLmJ1ZmZlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzZW5kZXIgPSBkZXF1ZXVlKGNoYW5uZWwuc2VuZHMpO1xuICAgICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHNlbmRIYW5kbGVyID0gc2VuZGVyLmhhbmRsZXI7XG4gICAgICBpZiAoc2VuZEhhbmRsZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGRpc3BhdGNoKCgpID0+IGNhbGxiYWNrKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWR1Y2VkKGNoYW5uZWwueGZvcm1bcC5zdGVwXShjaGFubmVsLmJ1ZmZlciwgc2VuZGVyLnZhbHVlKSkpIHtcbiAgICAgICAgICBjbG9zZShjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm94KHZhbHVlKTtcbiAgfVxuXG4gIC8vIFRoaXMgbG9vcCBydW5zIG9uIGFuIHVuYnVmZmVyZWQgY2hhbm5lbCBpZiB0aGVyZSBhcmUgYW55IHBlbmRpbmcgc2VuZHMuXG4gIC8vIChCdWZmZXJlZCBjaGFubmVscyBicmVhayBvdXQgb2YgdGhpcyBsb29wIGltbWVkaWF0ZWx5IGJlY2F1c2UgaW4gb3JkZXIgdG9cbiAgLy8gaGF2ZSBjb21lIHRoaXMgZmFyIHdpdGhvdXQgcmV0dXJuaW5nLCB0aGUgY2hhbm5lbCdzIGJ1ZmZlciBtdXN0IGhhdmUgYmVlblxuICAvLyBlbXB0eS4gQW4gZW1wdHkgYnVmZmVyIG1lYW5zIHRoZXJlIGFyZSBubyBwZW5kaW5nIHNlbmRzLCBzbyB0aGUgZmlyc3RcbiAgLy8gcGVuZGluZyBzZW5kIHJlYWQgZnJvbSBpdCB3aWxsIGJlIEVNUFRZLikgSXQgcHJvY2Vzc2VzIHRoZSBuZXh0IHBlbmRpbmdcbiAgLy8gc2VuZCBpbW1lZGlhdGVseS5cbiAgZm9yICg7Oykge1xuICAgIHNlbmRlciA9IGRlcXVldWUoY2hhbm5lbC5zZW5kcyk7XG4gICAgaWYgKHNlbmRlciA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzZW5kSGFuZGxlciA9IHNlbmRlci5oYW5kbGVyO1xuICAgIGlmIChzZW5kSGFuZGxlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gc2VuZEhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodHJ1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJveChzZW5kZXIudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlJ3ZlIGV4aGF1c3RlZCBhbGwgb2Ygb3VyIHBlbmRpbmcgc2VuZHMgYW5kIHRoZSBjaGFubmVsIGlzIG1hcmtlZFxuICAvLyBjbG9zZWQsIHdlIGNhbiBmaW5hbGx5IHJldXRybiB0aGUgZmFjdCB0aGF0IHRoZSBjaGFubmVsIGlzIGNsb3NlZC4gVGhpc1xuICAvLyBlbnN1cmVzIHRoYXQgYW55IHNlbmRzIHRoYXQgd2VyZSBhbHJlYWR5IHBlbmRpbmcgb24gdGhlIGNoYW5uZWwgYXJlXG4gIC8vIHByb2Nlc3NlZCBiZWZvcmUgY2xvc3VyZSwgZXZlbiBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkIGJlZm9yZSB0aGF0IGNvdWxkXG4gIC8vIGhhcHBlbi5cbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICByZXR1cm4gYm94KENMT1NFRCk7XG4gIH1cblxuICAvLyBJZiBhbiB1bmJ1ZmZlcmVkIGNoYW5uZWwgb3IgYSBidWZmZXJlZCBjaGFubmVsIHdpdGggYW4gZW1wdHkgYnVmZmVyIGhhcyBub1xuICAvLyBwZW5kaW5nIHNlbmRzLCBhbmQgaWYgdGhlIGNoYW5uZWwgaXMgc3RpbGwgb3BlbiwgdGhlIHJlY2VpdmUgaXMgcXVldWVkIHRvXG4gIC8vIGJlIHByb2Nlc3NlZCB3aGVuIGEgc2VuZCBpcyBhdmFpbGFibGUuIFJlY2VpdmVzIHdob3NlIGhhbmRsZXJzIGhhdmUgZ29uZVxuICAvLyBpbmFjdGl2ZSBhcyB0aGUgcmVzdWx0IG9mIGBzZWxlY3RgIHByb2Nlc3NpbmcgYXJlIHBlcmlvZGljYWxseSBwdXJnZWQuXG4gIGlmIChjaGFubmVsLmRpcnR5UmVjdnMgPiBjaGFubmVsLm1heERpcnR5KSB7XG4gICAgZmlsdGVyKGNoYW5uZWwucmVjdnMsIHJlY2VpdmVyID0+IHJlY2VpdmVyLmFjdGl2ZSk7XG4gICAgY2hhbm5lbC5kaXJ0eVJlY3ZzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBjaGFubmVsLmRpcnR5UmVjdnMrKztcbiAgfVxuXG4gIGlmIChxQ291bnQoY2hhbm5lbC5yZWN2cykgPj0gY2hhbm5lbC5tYXhRdWV1ZWQpIHtcbiAgICBjb25zdCBtYXggPSBjaGFubmVsLm1heFF1ZXVlZDtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBObyBtb3JlIHRoYW4gJHttYXh9IHBlbmRpbmcgcmVjZWl2ZXMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbGBcbiAgICApO1xuICB9XG4gIGVucXVldWUoY2hhbm5lbC5yZWN2cywgaGFuZGxlcik7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBjaGFubmVsIGlmIGl0IGlzbid0IGFscmVhZHkgY2xvc2VkLiBUaGlzIGltbWVkaWF0ZWx5IHJldHVybnMgYW55XG4gKiBidWZmZXJlZCB2YWx1ZXMgdG8gcGVuZGluZyByZWNlaXZlcy4gSWYgdGhlcmUgYXJlIG5vIGJ1ZmZlcmVkIHZhbHVlcyAob3IgaWZcbiAqIHRoZXkndmUgYWxyZWFkeSBiZWVuIHRha2VuIGJ5IG90aGVyIHJlY2VpdmVzKSwgdGhlbiBhbGwgb2YgdGhlIHJlc3Qgb2YgdGhlXG4gKiByZWNlaXZlcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LlxuICogQW55IHBlbmRpbmcgc2VuZHMgYXJlIGNvbXBsZXRlZCB3aXRoIHRoZSB2YWx1ZSBvZiBgZmFsc2VgLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgYnVmZmVyIGlzIG5vdCBlbXB0aWVkIGlmIHRoZXJlIGFyZSBzdGlsbCB2YWx1ZXMgcmVtYWluaW5nIGFmdGVyXG4gKiBhbGwgb2YgdGhlIHBlbmRpbmcgcmVjZWl2ZXMgaGF2ZSBiZWVuIGhhbmRsZWQuIFRoZSBjaGFubmVsIHdpbGwgc3RpbGwgcHJvdmlkZVxuICogdGhvc2UgdmFsdWVzIHRvIGFueSBmdXR1cmUgcmVjZWl2ZXMsIHRob3VnaCBubyBuZXcgdmFsdWVzIG1heSBiZSBhZGRlZCB0byB0aGVcbiAqIGNoYW5uZWwuIE9uY2UgdGhlIGJ1ZmZlciBpcyBkZXBsZXRlZCwgYW55IGZ1dHVyZSByZWNlaXZlcyB3aWxsIHJldHVyblxuICoge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHRvIGJlIGNsb3NlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgaWYgKGNoYW5uZWwuY2xvc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNoYW5uZWwuY2xvc2VkID0gdHJ1ZTtcblxuICBsZXQgcmVjZWl2ZXIsIHNlbmRlciwgY2FsbGJhY2s7XG5cbiAgLy8gSWYgdGhlcmUgaXMgYSBidWZmZXIgYW5kIGl0IGhhcyBhdCBsZWFzdCBvbmUgdmFsdWUgaW4gaXQsIHNlbmQgdGhvc2UgdmFsdWVzXG4gIC8vIHRvIGFueSBwZW5kaW5nIHJlY2VpdmVzIHRoYXQgbWlnaHQgc3RpbGwgYmUgcXVldWVkLlxuICBpZiAoY2hhbm5lbC5idWZmZXIpIHtcbiAgICBjaGFubmVsLnhmb3JtW3AucmVzdWx0XShjaGFubmVsLmJ1ZmZlcik7XG4gICAgZm9yICg7Oykge1xuICAgICAgaWYgKGNvdW50KGNoYW5uZWwuYnVmZmVyKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyID0gZGVxdWV1ZShjaGFubmVsLnJlY3ZzKTtcbiAgICAgIGlmIChyZWNlaXZlciA9PT0gRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVjZWl2ZXIuYWN0aXZlKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmVtb3ZlKGNoYW5uZWwuYnVmZmVyKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2sodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE9uY2UgdGhlIGJ1ZmZlciBpcyBlbXB0eSAob3IgaWYgdGhlcmUgaXNuJ3QgYSBidWZmZXIgYXQgYWxsKSwgc2VuZCBDTE9TRURcbiAgLy8gdG8gYWxsIHJlbWFpbmluZyBxdWV1ZWQgcmVjZWl2ZXMuXG4gIGZvciAoOzspIHtcbiAgICByZWNlaXZlciA9IGRlcXVldWUoY2hhbm5lbC5yZWN2cyk7XG4gICAgaWYgKHJlY2VpdmVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZWNlaXZlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gcmVjZWl2ZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2soQ0xPU0VEKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2VuZCBgZmFsc2VgIHRvIGFueSByZW1haW5pbmcgcXVldWVkIHNlbmRzLlxuICBmb3IgKDs7KSB7XG4gICAgc2VuZGVyID0gZGVxdWV1ZShjaGFubmVsLnNlbmRzKTtcbiAgICBpZiAoc2VuZGVyID09PSBFTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChzZW5kZXIuaGFuZGxlci5hY3RpdmUpIHtcbiAgICAgIGNhbGxiYWNrID0gc2VuZGVyLmhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgZGlzcGF0Y2goKCkgPT4gY2FsbGJhY2soZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgQ0xPU0VELFxuICBNQVhfRElSVFksXG4gIE1BWF9RVUVVRUQsXG4gIGNoYW5uZWwsXG4gIGhhbmRsZVNlbmQsXG4gIGhhbmRsZVJlY3YsXG4gIGNsb3NlLFxuICBib3gsXG4gIGlzQm94XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgY2hhbm5lbHMuIFRoZXNlIGNoYW5uZWxzIGFyZSBlc3NlbnRpYWxseSBxdWV1ZXMgdGhhdFxuICogaG9sZCBpbnN0cnVjdGlvbnMgd2FpdGluZyBmb3IgdGhlIG5leHQgYXZhaWxhYmxlIGFzeW5jIGZ1bmN0aW9uIHRvIHByb2Nlc3NcbiAqIHRoZW0uIFRoZXkgY2FuIGJlIGJ1ZmZlcmVkLCB3aGljaCBpcyBhY2NvbXBsaXNoZWQgdXNpbmcgdGhlIGJ1ZmZlciBmdW5jdGlvbnNcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5maXhlZHxmaXhlZH1gLCBge0BsaW5rIG1vZHVsZTpjc3AuZHJvcHBpbmd8ZHJvcHBpbmd9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2xpZGluZ3xzbGlkaW5nfWAuXG4gKlxuICogQ2hhbm5lbHMgZG8gbm90IGludGVyYWN0IHdpdGggSlMgdGFza3Mgb3IgdGhlIGRpc3BhdGNoZXIgaW4gYW55IG1lYW5pbmdmdWxcbiAqIHdheS4gVGhleSdyZSBqdXN0IGhlcmUgdG8gaG9sZCB0YXNrcyB3aGljaCBtYXkgdGhlbXNlbHZlcyB0aGVuIGNhdXNlIG5ldyBKU1xuICogdGFza3MgdG8gYmUgY3JlYXRlZCB2aWEgdGhlIGRpc3BhdGNoZXIuXG4gKlxuICogQ2hhbm5lbHMgbWF5IGhhdmUgdHJhbnNkdWNlcnMgYXNzb2NpYXRlZCB3aXRoIHRoZW0uIFRoZSB0cmFuc2R1Y2VycyBhcmVcbiAqIGV4cGVjdGVkIHRvIGZvbGxvdyB0aGUgc2FtZSBjb252ZW50aW9ucyBhcyBhbnkgb2YgdGhlIHBvcHVsYXIgdHJhbnNkdWNlclxuICogbGlicmFyaWVzLiBFeHBsaWNpdCBzdXBwb3J0IGlzIHJlcXVpcmVkIGJlY2F1c2UgY2hhbm5lbHMgd291bGRuJ3QgcGxheSB3ZWxsXG4gKiB3aXRoIHRoZSBub3JtYWwgd2F5IG9mIG1ha2luZyBhbiBvYmplY3Qgc3VwcG9ydCB0cmFuc2R1Y3Rpb24sIGZvciB0d29cbiAqIGRpZmZlcmVudCByZWFzb25zLlxuICpcbiAqICogVHJhbnNkdWNlcnMgcmVxdWlyZSB0aGUgYWJpbGl0eSB0byBjcmVhdGUgYSBuZXcsIGVtcHR5IGNvbGxlY3Rpb24gb2YgdGhlXG4gKiAgIHNhbWUgdHlwZSBhcyB0aGUgaW5wdXQgY29sbGVjdGlvbi4gSW4gdGhpcyBjYXNlLCB0aGF0IHdvdWxkIG1lYW4gY3JlYXRpbmcgYVxuICogICBuZXcgY2hhbm5lbCwgbWVhbmluZyB0aGF0IHRoZSBvdXRwdXQgY2hhbm5lbCAoZnJvbSB3aGljaCB0aGUgdHJhbnNmb3JtZWRcbiAqICAgdmFsdWVzIGFyZSByZWNlaXZlZCkgd291bGQgYmUgZGlmZmVyZW50IHRoYW4gdGhlIGlucHV0IGNoYW5uZWwgKHdoZXJlXG4gKiAgIHZhbHVlcyBhcmUgc2VudCkuXG4gKiAqIElmIHdlIHNvbWVob3cgZ2V0IG92ZXIgdGhhdCByZXF1aXJlbWVudCBhbmQga2VlcCBhbGwgYWN0aW9uIG9uIHRoZSBzYW1lXG4gKiAgIGNoYW5uZWwsIHdlIGNhbid0IHRha2UgdmFsdWVzIGZyb20gdGhlIGNoYW5uZWwsIHRyYW5zZm9ybSB0aGVtLCBhbmQgcHV0XG4gKiAgIHRoZW0gYmFjay4gVGhpcyB3b3VsZCBwb3RlbnRpYWxseSBjaGFuZ2UgdGhlIG9yZGVyIG9mIHZhbHVlcyBpbiB0aGUgY2hhbm5lbFxuICogICBzaW5jZSB3ZSBhcmUgZGVhbGluZyB3aXRoIGFzeW5jaHJvbm91cyBwcm9jZXNzZXMuXG4gKlxuICogVGhlIGV4cGxpY2l0IHN1cHBvcnQgbWVhbnMgYSB0cmFuc2R1Y2VyIGlzIGRpcmVjdGx5IGFzc29jaWF0ZWQgd2l0aCBhXG4gKiBjaGFubmVsLiBXaGVuIGEgdmFsdWUgaXMgc2VudCB0byB0aGUgY2hhbm5lbCwgaXQncyBmaXJzdCBydW4gdGhyb3VnaCB0aGVcbiAqIHRyYW5zZHVjZXIgYW5kIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZSBpcyB0aGUgb25lIGFjdHVhbGx5IHB1dCBpbnRvIHRoZVxuICogY2hhbm5lbCdzIGJ1ZmZlci4gVGhpcyBhdm9pZHMgYm90aCBvZiB0aGUgcHJvYmxlbXMgbm90ZWQgYWJvdmUuXG4gKlxuICogQG1vZHVsZSBjc3AvY2hhbm5lbFxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQge1xuICBDTE9TRUQsXG4gIGNoYW5uZWwgYXMgY2hhbkltcGwsXG4gIGhhbmRsZVNlbmQsXG4gIGhhbmRsZVJlY3YsXG4gIGNsb3NlIGFzIGNsb3NlSW1wbCxcbiAgTUFYX0RJUlRZLFxuICBNQVhfUVVFVUVEXG59IGZyb20gXCIuL2hhbmRsZXJcIjtcbmltcG9ydCB7IERFRkFVTFQsIHNlbGVjdCwgc2VsZWN0QXN5bmMsIHZhbHVlLCBjaGFubmVsIH0gZnJvbSBcIi4vc2VsZWN0XCI7XG5pbXBvcnQgeyBhZGQsIGZpeGVkLCBpc0J1ZmZlciB9IGZyb20gXCJtb2R1bGVzL2J1ZmZlclwiO1xuaW1wb3J0IHsgcHJvdG9jb2xzIGFzIHAgfSBmcm9tIFwiQGNoYW5rby94ZHVjZVwiO1xuXG4vKipcbiAqIEEgaGFuZGxlciBmdW5jdGlvbiBmb3IgZXhjZXB0aW9ucyB0aGF0IGFyZSB0aHJvd24gYnkgYSB0cmFuc2R1Y2VyIHdoaWxlXG4gKiB0cmFuc2Zvcm1pbmcgdmFsdWVzIG9uIGEgY2hhbm5lbC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZXJyIFRoZSBlcnJvciBvYmplY3QgdGhhdCB3YXMgdGhyb3duIGJ5IHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7Kn0gQSB2YWx1ZSB0aGF0IHNob3VsZCBiZSBwdXQgaW50byB0aGUgY2hhbm5lbCdzIGJ1ZmZlciB3aGVuIHRoZVxuICogICAgIHRyYW5zZHVjZXIgdGhyb3dzIHRoZSBlcnJvci4gSWYgdGhpcyB2YWx1ZSBpc1xuICogICAgIHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9LCB0aGVuIG5vIHZhbHVlIGF0IGFsbCB3aWxsIGJlIGFkZGVkIHRvXG4gKiAgICAgdGhlIGJ1ZmZlci5cbiAqIEBjYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGV4Y2VwdGlvbiBoYW5kbGVyLCB1c2VkIHdoZW4gbm8gZXhjZXB0aW9uIGhhbmRsZXIgaXMgc3VwcGxpZWQgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC9jaGFubmVsLmhhbmRsZUV4Y2VwdGlvbn1gLFxuICogYHtAbGluayBtb2R1bGU6Y3NwL2NoYW5uZWwud3JhcFRyYW5zZm9ybWVyfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCxcbiAqIG9yIGB7QGxpbmsgbW9kdWxlOmNzcC50cmFuc0NoYW58dHJhbnNDaGFufWAuIFRoaXMgZGVmYXVsdCBoYW5kbGVyIG1lcmVseVxuICogcmV0dXJucyBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLCB3aGljaCB3aWxsIHJlc3VsdCBpbiBubyBuZXcgdmFsdWVcbiAqIGJlaW5nIHdyaXR0ZW4gdG8gdGhlIGNoYW5uZWwuXG4gKlxuICogQHR5cGUge21vZHVsZTpjc3AuRXhjZXB0aW9uSGFuZGxlcn1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IERFRkFVTFRfSEFORExFUiA9ICgpID0+IENMT1NFRDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGhhbmRsZXIgdXNlZCBmb3IgYHNlbmRgIGFuZCBgcmVjdmAgb3BlcmF0aW9ucy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvY2hhbm5lbC5IYW5kbGVyQ2FsbGJhY2t9IGZuIFRoZSBjYWxsYmFjayB0byBiZSBydW4gd2hlblxuICogICAgIChhbmQgaWYpIHRoZSBvcGVyYXRpb24gY29tcGxldGVzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJ9IFRoZSBuZXcgaGFuZGxlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG9wSGFuZGxlcihmbikge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgYWN0aXZlOiB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4gZm5cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEhhbmRsZXMgYW4gZXhjZXB0aW9uIHRoYXQgaXMgdGhyb3duIGluc2lkZSBhIHRyYW5zZHVjZXIuIFRoZSB0aHJvd24gZXJyb3IgaXNcbiAqIHBhc3NlZCB0byB0aGUgYGhhbmRsZXJgIGZ1bmN0aW9uLCBhbmQgdGhlIHJlc3VsdCBvZiB0aGF0IGhhbmRsZXIgZnVuY3Rpb24gaXNcbiAqIGFkZGVkIHRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBJZiB0aGF0IHZhbHVlIGlzXG4gKiB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfSwgdGhlbiBpdCBpcyAqbm90KiBhZGRlZCB0byB0aGUgYnVmZmVyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5CdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRoYXQgYmFja3MgdGhlIGNoYW5uZWwgd2hvc2VcbiAqICAgICB0cmFuc2R1Y2VyJ3MgZXhjZXB0aW9ucyBhcmUgYmVpbmcgaGFuZGxlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBoYW5kbGVyIFRoZSBleGNlcHRpb24gaGFuZGxpbmcgZnVuY3Rpb25cbiAqICAgICB0aGF0IGlzIHJ1biB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiBhIHRyYW5zZHVjZXIuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGV4IFRoZSBlcnJvciBvYmplY3QgdGhyb3duIGJ5IHRoZSB0cmFuc2R1Y2VyLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5CdWZmZXJ9IFRoZSBidWZmZXIgaXRzZWxmLiBUaGlzIGlzIGRvbmUgdG8gbWFrZSBpdCBlYXNpZXJcbiAqICAgICB0byBpbnRlZ3JhdGUgdGhpcyBmdW5jdGlvbiBpbnRvIGEgdHJhbnNkdWNlcidzIHN0ZXAgZnVuY3Rpb24uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCkge1xuICBjb25zdCB2YWx1ZSA9IGhhbmRsZXIoZXgpO1xuICBpZiAodmFsdWUgIT09IENMT1NFRCkge1xuICAgIGFkZChidWZmZXIsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gYnVmZmVyO1xufVxuXG4vKipcbiAqIEEgdHJhbnNkdWNlciB0aGF0IHdyYXBzIGFub3RoZXIgdHJhbnNkdWNlciB3aXRoIGVycm9yIGhhbmRsaW5nIGNvZGUuIEFueVxuICogZXJyb3IgdGhhdCBvY2N1cnMgd2l0aGluIHRoZSB0cmFuc2R1Y2VyLCBlaXRoZXIgaW4gdGhlIHN0ZXAgZnVuY3Rpb24gb3IgdGhlXG4gKiByZXN1bHQgZnVuY3Rpb24sIHdpbGwgY2F1c2UgdGhlIGVycm9yIGhhbmRsZXIgdG8gYmUgcnVuLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB4Zm9ybSBUaGUgdHJhbnNkdWNlciB0byBhZGQgYW4gZXJyb3IgaGFuZGxlciB0by5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBbaGFuZGxlcj1ERUZBVUxUX0hBTkRMRVJdIFRoZSBleGNlcHRpb25cbiAqICAgICBoYW5kbGluZyBmdW5jdGlvbiB0aGF0IGlzIHJ1biB3aGVuIGFuIGVycm9yIG9jY3VycyBpbiB0aGUgdHJhbnNkdWNlci5cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgdHJhbnNkdWNlciB0aGF0IGlzIHRoZSByZXN1bHQgb2Ygd3JhcHBpbmcgdGhlIHByb3ZpZGVkXG4gKiAgICAgdHJhbnNkdWNlcidzIHN0ZXAgYW5kIHJlc3VsdCBmdW5jdGlvbnMgd2l0aCB0aGUgZXhjZXB0aW9uIGhhbmRsZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBoYW5kbGVyVHJhbnNkdWNlcih4Zm9ybSwgaGFuZGxlciA9IERFRkFVTFRfSEFORExFUikge1xuICByZXR1cm4ge1xuICAgIFtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB4Zm9ybVtwLnN0ZXBdKGJ1ZmZlciwgaW5wdXQpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUV4Y2VwdGlvbihidWZmZXIsIGhhbmRsZXIsIGV4KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB4Zm9ybVtwLnJlc3VsdF0oYnVmZmVyKTtcbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVFeGNlcHRpb24oYnVmZmVyLCBoYW5kbGVyLCBleCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFRoZSByZWR1Y2VyIHVzZWQgYXQgdGhlIGVuZCBvZiBhIHRyYW5zZHVjZXIgY2hhaW4gdG8gY29udHJvbCBob3cgdGhlXG4gKiB0cmFuc2Zvcm1lZCB2YWx1ZXMgYXJlIHJlZHVjZWQgYmFjayBvbnRvIHRoZSBjaGFubmVsJ3MgYnVmZmVyLiBUaGlzIHJlZHVjZXJcbiAqIGRvZXMgbm90aGluZyBtb3JlIHRoYW4gYWRkIHRoZSBpbnB1dCBpdGVtcyAod2hpY2ggYXJlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZXNcbiAqIHRoYXQgYXJlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsKSB0byB0aGUgY2hhbm5lbCBidWZmZXIuXG4gKlxuICogVGhpcyBpcyBhIG5lY2Vzc2FyeSBwYXJ0IG9mIHdvcmtpbmcgd2l0aCBhIHRyYW5zZHVjZXIsIGFzIHRoZSBmaW5hbCByZWR1Y2VyXG4gKiBhbHdheXMgdGFrZXMgdGhlIHRyYW5zZm9ybWVkIHZhbHVlcyBhbmQgcmVuZGVycyB0aGVtIGludG8gd2hhdGV2ZXIgY29sbGVjdGlvblxuICogaXMgZGVzaXJlZC4gVGhpcyBpcyB0aGF0IGZpbmFsIHJlZHVjZXIgZm9yIGNoYW5uZWxzLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBidWZmZXJSZWR1Y2VyID0ge1xuICBbcC5pbml0XSgpIHtcbiAgICB0aHJvdyBFcnJvcihcImluaXQgbm90IGF2YWlsYWJsZVwiKTtcbiAgfSxcblxuICBbcC5zdGVwXShidWZmZXIsIGlucHV0KSB7XG4gICAgYWRkKGJ1ZmZlciwgaW5wdXQpO1xuICAgIHJldHVybiBidWZmZXI7XG4gIH0sXG5cbiAgW3AucmVzdWx0XShidWZmZXIpIHtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9XG59O1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgYnVmZmVyIGFyZ3VtZW50IGFuZCBvcHRpb25zLCBhbG9uZyB3aXRoIGEgc2V0IG9mIGRlZmF1bHQgb3B0aW9ucyxcbiAqIHRvIGZpZ3VyZSBvdXQgd2hhdCB3YXMgcmVhbGx5IHBhc3NlZCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKlxuICogQHBhcmFtIHsobnVsbHxudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBidWZmZXIgVGhlIGJ1ZmZlciBhcmd1bWVudCBwYXNzZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBhcmd1bWVudCBwYXNzZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcGFyYW0ge29iamVjdH0gZGVmYXVsdE9wdGlvbnMgRGVmYXVsdCB2YWx1ZXMgZm9yIG9wdGlvbnMgdGhhdCBtaWdodCBub3QgaGF2ZVxuICogICAgIGJlZW4gc2VudCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9jZXNzZWQgdmFsdWVzIG9mIGFsbCBvZiB0aGVcbiAqICAgICBhcmd1bWVudHMgc2VudCB0byBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwYXJzZUFyZ3MoYnVmZmVyLCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucykge1xuICBsZXQgYnVmO1xuICBsZXQgb3B0cztcblxuICBpZiAoIWJ1ZmZlcikge1xuICAgIC8vIHNhbWUgZm9yIDAsIG51bGwsIG9yIHVuZGVmaW5lZFxuICAgIGJ1ZiA9IG51bGw7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJudW1iZXJcIikge1xuICAgIGJ1ZiA9IGZpeGVkKGJ1ZmZlcik7XG4gICAgb3B0cyA9IG9wdGlvbnM7XG4gIH0gZWxzZSBpZiAoaXNCdWZmZXIoYnVmZmVyKSkge1xuICAgIGJ1ZiA9IGJ1ZmZlcjtcbiAgICBvcHRzID0gb3B0aW9ucztcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBubyBidWZmZXIgaXMgc3BlY2lmaWVkIGJ1dCBhIHRyYW5zZHVjZXIgaXMsIHdlIGFzc3VtZSBmaXhlZCgxKSBpbnN0ZWFkXG4gICAgLy8gb2Ygbm8gYnVmZmVyXG4gICAgYnVmID0gYnVmZmVyPy50cmFuc2R1Y2VyID8gZml4ZWQoMSkgOiBudWxsO1xuICAgIG9wdHMgPSBidWZmZXI7XG4gIH1cblxuICBjb25zdCB7IHRyYW5zZHVjZXIsIGhhbmRsZXIsIG1heERpcnR5LCBtYXhRdWV1ZWQsIHRpbWVyIH0gPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIGRlZmF1bHRPcHRpb25zLFxuICAgIG9wdHNcbiAgKTtcbiAgcmV0dXJuIHsgYnVmLCB0cmFuc2R1Y2VyLCBoYW5kbGVyLCBtYXhEaXJ0eSwgbWF4UXVldWVkLCB0aW1lciB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcgY2hhbm5lbC5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoaXMgY2hhbm5lbCB3aWxsIGJlIGEgc2ltcGxlIHVuYnVmZmVyZWQsIHVudHJhbnNmb3JtZWQgY2hhbm5lbCxcbiAqIGJ1dCB0aGF0IGNhbiBiZSBjaGFuZ2VkIHRocm91Z2ggb3B0aW9ucy4gQSBjaGFubmVsIGRvZXMgbm90IGhhdmUgYW55XG4gKiBleHRlcm5hbGx5IHVzZWZ1bCBmdW5jdGlvbnMuIEl0IGV4aXN0cyBsYXJnZWx5IHRvIGJlIHBhc3NlZCBpbnRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAsIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCwgYW5kXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIGludm9jYXRpb25zLCBhbG9uZyB3aXRoIHRoZWlyIG5vbi1ibG9ja2luZ1xuICogdmFyaWF0aW9ucyAoYHtAbGluayBtb2R1bGU6Y3NwLnNlbmRBc3luY3xzZW5kQXN5bmN9YCxcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2QXN5bmN8cmVjdkFzeW5jfWAsIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWApLlxuICpcbiAqIElmIGEgYnVmZmVyIHZhbHVlIGlzIHByb3ZpZGVkLCBpdCBkZWZpbmVzIHdoYXQgYnVmZmVyIHNob3VsZCBiYWNrIHRoZVxuICogY2hhbm5lbC4gSWYgdGhpcyBpcyBgbnVsbGAgb3IgYDBgLCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3MgYVxuICogcG9zaXRpdmUgbnVtYmVyLCB0aGUgY2hhbm5lbCB3aWxsIGJlIGJ1ZmZlcmVkIGJ5IGFcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gYG9mIHRoYXQgc2l6ZS4gSWYgaXQncyBhXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQnVmZmVyfEJ1ZmZlcn1gIG9iamVjdCwgdGhhdCBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIHRoZVxuICogY2hhbm5lbCdzIGJ1ZmZlci4gSWYgaXQncyBtaXNzaW5nIGFsdG9nZXRoZXIsIHRoZSBjaGFubmVsIHdpbGwgYmUgdW5idWZmZXJlZFxuICogdW5sZXNzIGEgYHRyYW5zZHVjZXJgIG9wdGlvbiBpcyBwcm92aWRlZCAoc2VlIGJlbG93KSwgaW4gd2hpY2ggY2FzZSBpdCB3aWxsXG4gKiBiZSBhIGB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn1gIG9mIHNpemUgMS5cbiAqXG4gKiBgY2hhbmAgc3VwcG9ydHMgdHJhbnNkdWNlcnMgYnkgYWxsb3dpbmcgYSB0cmFuc2R1Y2VyIGZ1bmN0aW9uIHRvIGJlXG4gKiBhc3NvY2lhdGVkIHdpdGggaXQuIFRoaXMgaXMgcGFzc2VkIGFzIHRoZSBgdHJhbnNkdWNlcmAgb3B0aW9uIGFuZCBjYW4gb25seSBiZVxuICogdXNlZCBpZiB0aGUgY2hhbm5lbCBpcyBidWZmZXJlZCAob3RoZXJ3aXNlIGFuIGVycm9yIGlzIHRocm93bikuIFRoaXNcbiAqIHRyYW5zZHVjZXIgZnVuY3Rpb24gbXVzdCB0YWtlIGFub3RoZXIgdHJhbnNkdWNlciBhcyBhIHBhcmFtZXRlciAoYWxsb3dpbmdcbiAqIHRyYW5zZm9ybWVycyB0byBiZSBjaGFpbmVkKSwgYW5kIGl0IG11c3QgcmV0dXJuIGFuIG9iamVjdCBjb25mb3JtaW5nIHRvIHRoZVxuICogdHJhbnNkdWNlciBwcm90b2NvbC5cbiAqXG4gKiBFcnJvcnMgaW4gdGhlIHRyYW5zZm9ybWF0aW9uIHByb2Nlc3MgY2FuIGJlIGhhbmRsZWQgYnkgcGFzc2luZyBhbiBlcnJvclxuICogaGFuZGxlci4gVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyB0byByZWNlaXZlIGFuIGVycm9yIG9iamVjdCBhcyBhXG4gKiBwYXJhbWV0ZXIgYW5kIGNhbiByZXR1cm4gYSB2YWx1ZSB0aGF0IGlzIHRoZW4gcHV0IG9udG8gdGhlIGNoYW5uZWwuIElmIHRoaXNcbiAqIHZhbHVlIGlzIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAsIHRoZW4gbm8gdmFsdWUgd2lsbCBiZSBwdXQgb250b1xuICogdGhlIGNoYW5uZWwgdXBvbiBoYW5kbGVyIGNvbXBsZXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtidWZmZXJdIFRoZSBidWZmZXIgb2JqZWN0IHRoYXQgc2hvdWxkXG4gKiAgICAgYmFjayB0aGlzIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBwb3NpdGl2ZSBudW1iZXIsIGEgZml4ZWQgYnVmZmVyIG9mIHRoYXRcbiAqICAgICBzaXplIHdpbGwgYmUgY3JlYXRlZCB0byBiYWNrIHRoZSBjaGFubmVsLiBJZiBpdCBpcyBgMGAgb3IgYG51bGxgLCB0aGUgbmV3XG4gKiAgICAgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3Mgbm90IHByZXNlbnQsIHRoZSBuZXcgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgdW5idWZmZXJlZCB1bmxlc3MgdGhlcmUgaXMgYSBgdHJhbnNkdWNlcmAgb3B0aW9uLCBpbiBpbiB3aGljaCBjYXNlIGl0XG4gKiAgICAgd2lsbCBiZSBidWZmZXJlZCB3aXRoIGEgc2l6ZSAxXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEEgc2V0IG9mIG9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIHRoZSBjaGFubmVsJ3NcbiAqICAgICBxdWV1ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnhkdWNlLlRyYW5zZHVjZXJGdW5jdGlvbn0gW29wdGlvbnMudHJhbnNkdWNlcl0gQSB0cmFuc2R1Y2VyIHRvIHJ1blxuICogICAgIGVhY2ggdmFsdWUgdGhyb3VnaCBiZWZvcmUgcHV0dGluZyBpdCBvbnRvIHRoZSBjaGFubmVsLiBUaGlzIGZ1bmN0aW9uXG4gKiAgICAgc2hvdWxkIGV4cGVjdCBvbmUgcGFyYW1ldGVyIChhbm90aGVyIHRyYW5zZHVjZXIgdGhhdCBpdCdzIGNoYWluZWQgdG8pIGFuZFxuICogICAgIHJldHVybiBhbiBvYmplY3QgdGhhdCBjb25mb3JtcyB0byB0aGUgdHJhbnNkdWNlciBwcm90b2NvbC4gSWYgYVxuICogICAgIHRyYW5zZHVjZXIgaXMgcHJvdmlkZWQgb24gYW4gdW5idWZmZXJlZCBjaGFubmVsLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5FeGNlcHRpb25IYW5kbGVyfSBbb3B0aW9ucy5oYW5kbGVyXSBBbiBlcnJvciBoYW5kbGVyIHRoYXRcbiAqICAgICBpcyBydW4gd2hlbmV2ZXIgYW4gZXJyb3Igb2NjdXJzIGluc2lkZSBhIHRyYW5zZHVjZXIgZnVuY3Rpb24uIElmIHRoYXRcbiAqICAgICBoYXBwZW5zLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSBlcnJvclxuICogICAgIG9iamVjdC4gVGhlIHZhbHVlIHRoYXQgdGhlIGhhbmRsZXIgcmV0dXJucyAoaWYgaXQgaXMgbm90XG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLkNMT1NFRHxDTE9TRUR9YCkgd2lsbCBiZSBwdXQgb250byB0aGUgY2hhbm5lbCB3aGVuIHRoZVxuICogICAgIGhhbmRsZXIgZmluaXNoZXMgcnVubmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhEaXJ0eT02NF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIGRpcnR5IG9wZXJhdGlvbnNcbiAqICAgICB0aGF0IGNhbiBiZSBpbiB0aGUgcXVldWUgYmVmb3JlIHRob3NlIG9wZXJhdGlvbnMgYXJlIHN1YmplY3QgdG8gYmVpbmdcbiAqICAgICBwdXJnZWQuIERpcnR5IG9wZXJhdGlvbnMgYXJlIHRob3NlIHRoYXQgbWF5IG5vdCBiZSB2YWxpZCBhbnltb3JlIGJlY2F1c2VcbiAqICAgICB0aGV5IHdlcmUgaW4gdGhlIGxpc3Qgb2Ygb3BlcmF0aW9ucyBwYXNzZWQgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdEFzeW5jfHNlbGVjdEFzeW5jfWAgYnV0IHdlcmUgbm90IGNob3NlbiB0byBydW4uXG4gKiAgICAgVGhpcyBwcm92aWRlcyBhIGNoYW5jZSBmb3IgYSB2ZXJ5IG1pbm9yIHBlcmZvcm1hbmNlIHR3ZWFrIGFuZCBpcyBiZXN0XG4gKiAgICAgbGVmdCBhbG9uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhRdWV1ZWQ9MTAyNF0gVGhlIG1heGltdW0gbnVtYmVyIG9mIG9wZXJhdGlvbnNcbiAqICAgICB0aGF0IGNhbiBiZSBxdWV1ZWQgdXAgYXQgdGhlIHNhbWUgdGltZS4gVGhpcyBwcmV2ZW50cyBpbmZpbml0ZSBsb29wcyBmcm9tXG4gKiAgICAgYWNjaWRlbnRhbGx5IGVhdGluZyB1cCBhbGwgb2YgdGhlIGF2YWlsYWJsZSBtZW1vcnkuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGltZXJdIElmIHRoaXMgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIGEgdGltZWQgY2hhbm5lbCB0aGF0IGNsb3NlcyBhdXRvbWF0aWNhbGx5IGFmdGVyIHRoaXMgbnVtYmVyIG9mXG4gKiAgICAgbWlsbGlzZWNvbmRzLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBjaGFuKGJ1ZmZlciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtYXhEaXJ0eTogTUFYX0RJUlRZLFxuICAgIG1heFF1ZXVlZDogTUFYX1FVRVVFRFxuICB9O1xuICBjb25zdCB7IGJ1ZiwgdHJhbnNkdWNlciwgaGFuZGxlciwgbWF4RGlydHksIG1heFF1ZXVlZCwgdGltZXIgfSA9IHBhcnNlQXJncyhcbiAgICBidWZmZXIsXG4gICAgb3B0aW9ucyxcbiAgICBkZWZhdWx0T3B0aW9uc1xuICApO1xuXG4gIGlmICh0cmFuc2R1Y2VyICYmICFidWYpIHtcbiAgICB0aHJvdyBFcnJvcihcIk9ubHkgYnVmZmVyZWQgY2hhbm5lbHMgY2FuIHVzZSB0cmFuc2R1Y2Vyc1wiKTtcbiAgfVxuXG4gIGNvbnN0IHhmID0gaGFuZGxlclRyYW5zZHVjZXIoXG4gICAgdHJhbnNkdWNlciA/IHRyYW5zZHVjZXIoYnVmZmVyUmVkdWNlcikgOiBidWZmZXJSZWR1Y2VyLFxuICAgIGhhbmRsZXJcbiAgKTtcblxuICBjb25zdCBpc1RpbWVkID0gdHlwZW9mIHRpbWVyID09PSBcIm51bWJlclwiO1xuXG4gIGNvbnN0IGNoID0gY2hhbkltcGwoYnVmLCB4ZiwgaXNUaW1lZCwgbWF4RGlydHksIG1heFF1ZXVlZCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24qIGl0ZXJhdG9yKCkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNoW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGl0ZXJhdG9yO1xuXG4gIGlmIChpc1RpbWVkKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjbG9zZUltcGwoY2gpLCB0aW1lcik7XG4gIH1cblxuICByZXR1cm4gY2g7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiB1bmJ1ZmZlcmVkLCB0aW1lZCBjaGFubmVsLiBUaGlzIGNoYW5uZWwgY2xvc2VzIGF1dG9tYXRpY2FsbHkgYWZ0ZXJcbiAqIHRoZSBzdXBwbGllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGFuZCBpcyB0aGUgZXF1aXZhbGVudCBvZiBjYWxsaW5nIGBjaGFuKDAsXG4gKiB7IHRpbWVyOiBkZWxheSB9KWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBhZnRlciB0aGUgY2hhbm5lbCBpcyBjcmVhdGVkXG4gKiAgICAgdGhhdCBpdCB3aWxsIGJlIGNsb3NlZCBhdXRvbWF0aWNhbGx5LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIG5ldyB0aW1lZCBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB0aW1lZENoYW4oZGVsYXkgPSAwKSB7XG4gIHJldHVybiBjaGFuKHsgdGltZXI6IGRlbGF5IH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBidWZmZXJlZCBjaGFubmVsIHdpdGggYSB0cmFuc2R1Y2VyIGFuZCBvcHRpb25hbCBlcnJvciBoYW5kbGVyLiBUaGVcbiAqIGJ1ZmZlciBmb3IgdGhpcyBjaGFubmVsIGlzIGEgYHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfWAgb2ZcbiAqIHNpemUgMS4gVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiBgY2hhbigxLCB7IHRyYW5zZHVjZXIsIGhhbmRsZXIgfSlgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTp4ZHVjZS5UcmFuc2R1Y2VyRnVuY3Rpb259IHRyYW5zZHVjZXIgVGhlIHRyYW5zZHVjZXIgdXNlZCB0byB0cmFuc2Zvcm1cbiAqICAgICB2YWx1ZXMgb24gdGhlIG5ldyBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkV4Y2VwdGlvbkhhbmRsZXJ9IFtoYW5kbGVyXSBBbiBleGNlcHRpb24gaGFuZGxlciBjYWxsZWRcbiAqICAgICB3aXRoIHRoZSBlcnJvciBvYmplY3QgYXMgaXRzIG9ubHkgYXJndW1lbnQgd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluc2lkZSBhXG4gKiAgICAgdHJhbnNkdWNlci4gSWYgdGhpcyBpcyBub3QgcHJvdmlkZWQsIGEgZGVmYXVsdCBoYW5kbGVyIGlzIHVzZWQgdGhhdFxuICogICAgIHNpbXBseSBkb2VzIG5vdGhpbmcsIGluY2x1ZGluZyBzZW5kaW5nIG5vIG91dHB1dCBmcm9tIHRoZSB2YWx1ZSB0aGF0XG4gKiAgICAgZXJyb3JlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gQSBuZXcgY2hhbm5lbCB3aXRoIGEgdHJhbnNkdWNlci5cbiAqL1xuZnVuY3Rpb24gdHJhbnNDaGFuKHRyYW5zZHVjZXIsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGNoYW4oeyB0cmFuc2R1Y2VyLCBoYW5kbGVyIH0pO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIEEgY2xvc2VkIGNoYW5uZWwgd2lsbCBjYXVzZSBhbnkgYHNlbmRgIG9wZXJhdGlvbiB0byByZXR1cm4gYGZhbHNlYCBhbmQgYW55XG4gKiBgcmVjdmAgb3BlcmF0aW9uIHRvIHJldHVybiBhbnkgYnVmZmVyZWQgaXRlbXMgdGhhdCByZW1haW4sIGZvbGxvd2VkIGJ5XG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgY2xvc2VkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNDbG9zZWQoY2hhbm5lbCkge1xuICByZXR1cm4gY2hhbm5lbC5jbG9zZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyBidWZmZXJlZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgYnVmZmVyZWQgaWYgYSBidWZmZXIgb3IgYSBudW1iZXIgd2FzIHBhc3NlZCBhcyB0aGUgZmlyc3RcbiAqIGFyZ3VtZW50IG9mIGB7QGxpbmsgbW9kdWxlOmNzcC5jaGFufGNoYW59YCBvciBpZiBhIHRyYW5zZHVjZXIgaXMgYSBwYXJ0IG9mXG4gKiB0aGUgY2hhbm5lbC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBjaGFubmVsIGlzIGJ1ZmZlcmVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBpc24ndC5cbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXJlZChjaGFubmVsKSB7XG4gIHJldHVybiBjaGFubmVsLmlzQnVmZmVyZWQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgY2hhbm5lbCBpcyB0aW1lZC5cbiAqXG4gKiBBIGNoYW5uZWwgaXMgdGltZWQgaWYgaXQgd2FzIGNyZWF0ZWQgZWl0aGVyIHdpdGggdGhlIGB0aW1lcmAgb3B0aW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuY2hhbnxjaGFufWAgb3Igd2l0aCB0aGVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC50aW1lZENoYW58dGltZWRDaGFufWAgZnVuY3Rpb24uIEl0IHdpbGwgYXV0b21hdGljYWxseVxuICogY2xvc2UgYWZ0ZXIgYSBjZXJ0YWluIHBlcmlvZCBvZiB0aW1lLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVpdGhlciBgdHJ1ZWAgaWYgdGhlIGNoYW5uZWwgaXMgdGltZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGlzbid0LlxuICovXG5mdW5jdGlvbiBpc1RpbWVkKGNoYW5uZWwpIHtcbiAgcmV0dXJuIGNoYW5uZWwuaXNUaW1lZDtcbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIHRoaXMgY2hhbm5lbCB3aXRob3V0IGJsb2NraW5nLlxuICpcbiAqIFRoaXMgbWVhbnMgdGhhdCBhIGNhbGwgdG8gYHNlbmRBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgIGV4cHJlc3Npb24sXG4gKiBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgYXN5bmMgZnVuY3Rpb24uIFJhdGhlciB0aGFuXG4gKiBibG9ja2luZyB1bnRpbCB0aGUgc2VudCB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIGFzeW5jIGZ1bmN0aW9uLCB0aGlzIG9uZVxuICogcmV0dXJucyBpbW1lZGlhdGVseSBhbmQgdGhlbiBpbnZva2VzIHRoZSBjYWxsYmFjayAoaWYgcHJvdmlkZWQpIHdoZW4gdGhlIHNlbnRcbiAqIHZhbHVlIGlzIHRha2VuLiBJdCBjYW4gYmUgc2VlbiBhcyBhIG5vbi1ibG9ja2luZyB2ZXJzaW9uIG9mXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gc2VuZCB2YWx1ZXMgb250byBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUgKGZvciBleGFtcGxlLCBpblxuICogYSBET00gZWxlbWVudCdzIGV2ZW50IGhhbmRsZXIpLCBpdCBjYW4gc3RpbGwgYmUgdXNlZCBpbnNpZGUgYXN5bmMgZnVuY3Rpb25zXG4gKiBhdCB0aW1lcyB3aGVuIGl0J3MgaW1wb3J0YW50IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBmdW5jdGlvbiBkb2Vzbid0IGJsb2NrXG4gKiBmcm9tIHRoZSBzZW5kLlxuICpcbiAqIFRoZSBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uIG9mIG9uZSBwYXJhbWV0ZXIuIFRoZSBwYXJhbWV0ZXIgdGhhdCdzIHN1cHBsaWVkIHRvXG4gKiB0aGUgY2FsbGJhY2sgaXMgdGhlIHNhbWUgYXMgd2hhdCBpcyBzdXBwbGllZCB0byBgYXdhaXQgc2VuZGA6IGB0cnVlYCBpZiB0aGVcbiAqIHZhbHVlIHdhcyB0YWtlbiwgb3IgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCB3YXMgY2xvc2VkLiBJZiB0aGUgY2FsbGJhY2sgaXNuJ3RcbiAqIHByZXNlbnQsIG5vdGhpbmcgd2lsbCBoYXBwZW4gYWZ0ZXIgdGhlIHZhbHVlIGlzIHRha2VuLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0geyp9IFt2YWx1ZV0gVGhlIHZhbHVlIGJlaW5nIHB1dCBvbnRvIHRoZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLk9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCBlaXRoZXJcbiAqICAgICB3aGVuIHRoZSB2YWx1ZSBpcyB0YWtlbiBieSBhbm90aGVyIHByb2Nlc3Mgb3Igd2hlbiB0aGUgY2hhbm5lbCBpcyBjbG9zZWQuXG4gKiAgICAgVGhpcyBmdW5jdGlvbiBjYW4gdGFrZSBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBgdHJ1ZWAgaW4gdGhlIGZvcm1lciBjYXNlXG4gKiAgICAgYW5kIGBmYWxzZWAgaW4gdGhlIGxhdHRlci5cbiAqL1xuZnVuY3Rpb24gc2VuZEFzeW5jKGNoYW5uZWwsIHZhbHVlLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGhhbmRsZVNlbmQoY2hhbm5lbCwgdmFsdWUsIG9wSGFuZGxlcihjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlY2VpdmVzIGEgdmFsdWUgZnJvbSB0aGlzIGNoYW5uZWwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGByZWNlaXZlQXN5bmNgIGRvZXMgbm90IGdvIGludG8gYW4gYGF3YWl0YFxuICogZXhwcmVzc2lvbiwgYW5kIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGl0IGluc2lkZSBhIGFzeW5jIGZ1bmN0aW9uLiBSYXRoZXJcbiAqIHRoYW4gYmxvY2tpbmcgdW50aWwgYSB2YWx1ZSBiZWNvbWVzIGF2YWlsYWJsZSBvbiB0aGUgY2hhbm5lbCB0byBiZSByZWNlaXZlZCxcbiAqIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW4gaW52b2tlcyB0aGUgY2FsbGJhY2sgKGlmIHByb3ZpZGVkKSB3aGVuXG4gKiBhIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlLiBJdCBjYW4gYmUgcmVnYXJkZWQgYXMgYSBub24tYmxvY2tpbmcgdmVyc2lvbiBvZlxuICoge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAuXG4gKlxuICogV2hpbGUgdGhlIHByaW1hcnkgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gcmVjZWl2ZSB2YWx1ZXMgZnJvbSBjaGFubmVscyBpblxuICogY29udGV4dHMgd2hlcmUgYmVpbmcgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGltcG9zc2libGUsIGl0IGNhbiBzdGlsbCBiZVxuICogdXNlZCBpbnNpZGUgYXN5bmMgZnVuY3Rpb25zIGF0IHRpbWVzIHdoZW4gaXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgcmVjZWl2ZVxuICogZG9lc24ndCBibG9jayB0aGUgZnVuY3Rpb24uXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlciwgYW5kIHRoZSB2YWx1ZSBzdXBwbGllZCBmb3IgdGhhdFxuICogcGFyYW1ldGVyIGlzIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsIChlaXRoZXIgYSB2YWx1ZSB0aGF0IHdhc1xuICogc2VudCBvciBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gKS4gSWYgdGhlIGNhbGxiYWNrIGlzbid0IHByZXNlbnQsXG4gKiBub3RoaW5nIHdpbGwgaGFwcGVuIGFmdGVyIHRoZSB2YWx1ZSBpcyB0YWtlbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLk9wQ2FsbGJhY2t9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuIGFcbiAqICAgICB2YWx1ZSBpcyBtYWRlIGF2YWlsYWJsZSB0byBiZSByZWNlaXZlZCAodGhpcyB2YWx1ZSBtYXkgYmVcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gIGlmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vXG4gKiAgICAgYXZhaWxhYmxlIHZhbHVlKS4gVGhlIGZ1bmN0aW9uIGNhbiB0YWtlIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHRoZSB2YWx1ZVxuICogICAgIHRoYXQgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gcmVjdkFzeW5jKGNoYW5uZWwsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgY29uc3QgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBvcEhhbmRsZXIoY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZW5kcyBhIHZhbHVlIHRvIGEgY2hhbm5lbCwgYmxvY2tpbmcgdGhlIGFzeW5jIGZ1bmN0aW9uIHVudGlsIHRoYXQgdmFsdWUgaXNcbiAqIHJlY2VpdmVkIGZyb20gdGhlIGNoYW5uZWwgYnkgYSBkaWZmZXJlbnQgZnVuY3Rpb24gKG9yIHVudGlsIHRoZSBjaGFubmVsXG4gKiBjbG9zZXMpLlxuICpcbiAqIEEgdmFsdWUgaXMgYWx3YXlzIHNlbnQgdG8gdGhlIGNoYW5uZWwsIGJ1dCBpZiB0aGF0IHZhbHVlIGlzbid0IHNwZWNpZmllZCBieVxuICogdGhlIHNlY29uZCBwYXJhbWV0ZXIsIGl0IGlzIGB1bmRlZmluZWRgLiBBbnkgdmFsdWUgbWF5IGJlIHNlbnQgdG8gYSBjaGFubmVsLFxuICogd2l0aCB0aGUgc29sZSBleGNlcHRpb24gb2YgdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgc2VuZGAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byBhIHN0YXR1cyBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoYXQgY2F1c2VkIHRoZSBmdW5jdGlvbiB0b1xuICogdW5ibG9jay4gVGhhdCB2YWx1ZSBpcyBgdHJ1ZWAgaWYgdGhlIHNlbnQgdmFsdWUgd2FzIHN1Y2Nlc3NmdWxseSB0YWtlbiBieVxuICogYW5vdGhlciBwcm9jZXNzLCBvciBgZmFsc2VgIGlmIHRoZSB1bmJsb2NraW5nIGhhcHBlbmVkIGJlY2F1c2UgdGhlIHRhcmdldFxuICogY2hhbm5lbCBjbG9zZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhlIGNoYW5uZWwuXG4gKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gYHRydWVgIG9yIGBmYWxzZWBcbiAqICAgICBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgcHV0IHZhbHVlIGlzIGFjdHVhbGx5IHRha2VuLlxuICovXG5mdW5jdGlvbiBzZW5kKGNoYW5uZWwsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZW5kQXN5bmMoY2hhbm5lbCwgdmFsdWUsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhpcyBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiAqbXVzdCogYmUgY2FsbGVkIGZyb20gd2l0aGluIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24uXG4gKlxuICogV2hlbiBgcmVjZWl2ZWAgaXMgY29tcGxldGVkIGFuZCBpdHMgZnVuY3Rpb24gdW5ibG9ja3MsIGl0cyBgYXdhaXRgIGV4cHJlc3Npb25cbiAqIGV2YWx1YXRlcyB0byB0aGUgYWN0dWFsIHZhbHVlIHRoYXQgd2FzIHJlY2VpdmVkLiBJZiB0aGUgdGFyZ2V0IGNoYW5uZWxcbiAqIGNsb3NlZCwgdGhlbiBhbGwgb2YgdGhlIHZhbHVlcyBhbHJlYWR5IHBsYWNlZCBvbnRvIGl0IGFyZSByZXNvbHZlZCBieVxuICogYHJlY2VpdmVgIGFzIG5vcm1hbCwgYW5kIG9uY2Ugbm8gbW9yZSB2YWx1ZXMgYXJlIGF2YWlsYWJsZSwgdGhlIHNwZWNpYWwgdmFsdWVcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAgaXMgcmV0dXJuZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGVcbiAqICAgICBjaGFubmVsIG9uY2UgdGhhdCByZWNlaXZlIGlzIGNvbXBsZXRlZC4gSWYgdGhlIGNoYW5uZWwgY2xvc2VzIHdpdGhvdXQgYVxuICogICAgIHZhbHVlIGJlaW5nIG1hZGUgYXZhaWxhYmxlLCB0aGlzIHdpbGwgcmVzb2x2ZSB0b1xuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKi9cbmZ1bmN0aW9uIHJlY3YoY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc29sdmUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gYSBjaGFubmVsLCBibG9ja2luZyB0aGUgYXN5bmMgZnVuY3Rpb24gdW50aWwgYSB2YWx1ZVxuICogYmVjb21lcyBhdmFpbGFibGUgdG8gYmUgcmVjZWl2ZWQgKG9yIHVudGlsIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRoIG5vIG1vcmVcbiAqIHZhbHVlcyBvbiBpdCB0byBiZSByZWNlaXZlZCkuIElmIHRoZSByZWNlaXZlZCB2YWx1ZSBpcyBhbiBlcnJvciBvYmplY3QsIHRoYXRcbiAqIGVycm9yIGlzIHRocm93biBhdCB0aGF0IHBvaW50LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBhc3luYyBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIEl0IGZ1bmN0aW9ucyBpbiBldmVyeSB3YXkgbGlrZSBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgKmV4Y2VwdCogaW4gdGhlXG4gKiBjYXNlIHRoYXQgdGhlIHZhbHVlIG9uIHRoZSBjaGFubmVsIGlzIGFuIG9iamVjdCB0aGF0IGhhcyBgRXJyb3IucHJvdG90eXBlYCBpblxuICogaXRzIHByb3RvdHlwZSBjaGFpbiAoYW55IGJ1aWx0LWluIGVycm9yLCBhbnkgcHJvcGVybHktY29uc3RydWN0ZWQgY3VzdG9tXG4gKiBlcnJvcikuIElmIHRoYXQgaGFwcGVucywgdGhlIGVycm9yIGlzIHRocm93biwgd2hpY2ggd2lsbCBjYXVzZSB0aGUgcmV0dXJuZWRcbiAqIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQgd2l0aCB0aGUgZXJyb3IuIEl0IGNhbiB0aGVuIGJlIGhhbmRsZWQgdXAgdGhlIHByb21pc2VcbiAqIGNoYWluIGxpa2UgYW55IG90aGVyIHJlamVjdGVkIHByb21pc2UuXG4gKlxuICogYHRha2VPclRocm93YCBpcyByb3VnaGx5IGVxdWl2YWxlbnQgdG86XG4gKlxuICogYGBgXG4gKiBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3YoY2gpO1xuICogaWYgKEVycm9yLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKHZhbHVlKSkge1xuICogICB0aHJvdyB2YWx1ZTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gdGhlIHZhbHVlIHRha2VuIGZyb20gdGhlXG4gKiAgICAgY2hhbm5lbCBvbmNlIHRoYXQgdGFrZSBpcyBjb21wbGV0ZWQuIElmIHRoZSBjaGFubmVsIGNsb3NlcyB3aXRob3V0IGFcbiAqICAgICB2YWx1ZSBiZWluZyBtYWRlIGF2YWlsYWJsZSwgdGhpcyB3aWxsIHJlc29sdmUgdG9cbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLiBJZiB0aGUgdGFrZW4gdmFsdWUgaXMgYW4gZXJyb3IsIHRoZVxuICogICAgIHByb21pc2Ugd2lsbCBpbnN0ZWFkIGJlIHJlamVjdGVkIHdpdGggdGhlIGVycm9yIG9iamVjdCBhcyB0aGUgcmVhc29uLlxuICovXG5mdW5jdGlvbiByZWN2T3JUaHJvdyhjaGFubmVsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVjdkFzeW5jKGNoYW5uZWwsIHJlc3VsdCA9PiB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoRXJyb3IucHJvdG90eXBlLCByZXN1bHQpKSB7XG4gICAgICAgIHJlamVjdChyZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNoYW5uZWwsIGlmIGl0IGlzbid0IGFscmVhZHkgY2xvc2VkLiBUaGlzIGltbWVkaWF0ZWx5IHJldHVybnMgYW55XG4gKiBidWZmZXJlZCB2YWx1ZXMgdG8gcGVuZGluZyByZWNlaXZlcy4gSWYgdGhlcmUgYXJlIG5vIGJ1ZmZlcmVkIHZhbHVlcyAob3IgaWZcbiAqIHRoZXkndmUgYWxyZWFkeSBiZWVuIHRha2VuIGJ5IG90aGVyIHJlY2VpdmVzKSwgdGhlbiBhbGwgb2YgdGhlIHJlc3Qgb2YgdGhlXG4gKiByZWNlaXZlcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGB7QGxpbmsgbW9kdWxlOmNzcC5DTE9TRUR8Q0xPU0VEfWAuXG4gKiBBbnkgcGVuZGluZyBzZW5kcyBhcmUgY29tcGxldGVkIHdpdGggdGhlIHZhbHVlIG9mIGBmYWxzZWAuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBidWZmZXIgaXMgbm90IGVtcHRpZWQgaWYgdGhlcmUgYXJlIHN0aWxsIHZhbHVlcyByZW1haW5pbmcgYWZ0ZXJcbiAqIGFsbCBvZiB0aGUgcGVuZGluZyByZWNlaXZlcyBoYXZlIGJlZW4gaGFuZGxlZC4gVGhlIGNoYW5uZWwgd2lsbCBzdGlsbCBwcm92aWRlXG4gKiB0aG9zZSB2YWx1ZXMgdG8gYW55IGZ1dHVyZSByZWNlaXZlcywgdGhvdWdoIG5vIG5ldyB2YWx1ZXMgbWF5IGJlIGFkZGVkIHRvIHRoZVxuICogY2hhbm5lbC4gT25jZSB0aGUgYnVmZmVyIGlzIGRlcGxldGVkLCBhbnkgZnV0dXJlIHJlY2VpdmVzIHdpbGwgcmV0dXJuXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuQ0xPU0VEfENMT1NFRH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB0byBiZSBjbG9zZWQuXG4gKi9cbmZ1bmN0aW9uIGNsb3NlKGNoYW5uZWwpIHtcbiAgY2xvc2VJbXBsKGNoYW5uZWwpO1xufVxuXG5leHBvcnQge1xuICBDTE9TRUQsXG4gIERFRkFVTFQsXG4gIGNoYW4sXG4gIHRpbWVkQ2hhbixcbiAgdHJhbnNDaGFuLFxuICBpc0Nsb3NlZCxcbiAgaXNCdWZmZXJlZCxcbiAgaXNUaW1lZCxcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIHNlbGVjdEFzeW5jLFxuICBzZW5kLFxuICByZWN2LFxuICByZWN2T3JUaHJvdyxcbiAgc2VsZWN0LFxuICBjbG9zZSxcbiAgdmFsdWUsXG4gIGNoYW5uZWxcbn07XG5cbi8qKlxuICogVXNlZCBieSBjaGFubmVscyB0byB0cmFjayBleGVjdXRpb24gb2Ygb3BlcmF0aW9ucyAoYHNlbmRgLCBgcmVjdmAsIGFuZFxuICogYHNlbGVjdGApLiBUaGV5IHByb3ZpZGUgdHdvIHBpZWNlcyBvZiBpbmZvcm1hdGlvbjogdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlblxuICogYSBgc2VuZGAgb3IgYHJlY3ZgIHVuYmxvY2tzIChiZWNhdXNlIGEgdmFsdWUgZ2l2ZW4gdG8gc2VuZCBoYXMgYmVlbiByZWNlaXZlZCxcbiAqIG9yIGEgYHJlY3ZgIGhhcyBhY2NlcHRlZCBhIHZhbHVlIHRoYXQgaGFzIGJlZW4gc2VudCkgYW5kIHdoZXRoZXIgb3Igbm90IHRoZVxuICogaGFuZGxlciBpcyBzdGlsbCBhY3RpdmUuXG4gKlxuICogVGhlIGZ1bmN0aW9uIGlzIGEgY2FsbGJhY2sgdGhhdCBhY3R1YWxseSBkZWZpbmVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW5cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZW5kfHNlbmR9YCAvIGB7QGxpbmsgbW9kdWxlOmNzcC5yZWN2fHJlY3Z9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIGFuZFxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbmRBc3luY3xzZW5kQXN5bmN9YCAvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AucmVjdkFzeW5jfHJlY3ZBc3luY31gIC9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3RBc3luY3xzZWxlY3RBc3luY31gOiB3aGlsZSB0aGUgdW5ibG9ja2VkIGNhbGxzIHVzZVxuICogdGhlIGNhbGxiYWNrIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24sIGBzZW5kYCwgYHJlY3ZgLCBhbmQgYHNlbGVjdGAgc2ltcGx5XG4gKiBjb250aW51ZSB0aGUgcHJvY2VzcyB3aGVyZSBpdCBsZWZ0IG9mZi4gKFRoaXMgaXMgd2h5IGBzZW5kYCwgYHJlY3ZgLCBhbmRcbiAqIGBzZWxlY3RgIG9ubHkgd29yayBpbnNpZGUgYGFzeW5jYCBmdW5jdGlvbnMgd2l0aCBgYXdhaXRgIGlmIHRoZSByZXR1cm4gdmFsdWVcbiAqIGlzIG5lZWRlZCwgYmVjYXVzZSBvdGhlcndpc2UgdGhlcmUncyBubyBwcm9jZXNzIHRvIGNvbnRpbnVlLilcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGFzIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGBjb21taXRgIG1ldGhvZC4gQ2FsbGluZ1xuICogYGNvbW1pdGAgaGFzIG5vIGV4dHJhIGVmZmVjdCB3aXRoIGBzZW5kYCBhbmQgYHJlY3ZgIG9wZXJhdGlvbnMsIGJ1dCBmb3JcbiAqIGBzZWxlY3RgLCBpdCBhbHNvIG1hcmtzIHRoZSBoYW5kbGVyIGFzIG5vIGxvbmdlciBiZWluZyBhY3RpdmUuIFRoaXMgbWVhbnNcbiAqIHRoYXQgb25seSBvbmUgb2YgdGhlIG9wZXJhdGlvbnMgcGFzc2VkIHRvIHNlbGVjdCBjYW4gYmUgY29tcGxldGVkLCBiZWNhdXNlXG4gKiBhZnRlciB0aGUgZmlyc3Qgb25lLCB0aGUgaGFuZGxlciBpcyBubyBsb25nZXIgYWN0aXZlIGFuZCB3aWxsIG5vdCBiZSBhbGxvd2VkXG4gKiB0byBwcm9jZXNzIGEgc2Vjb25kIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhIGBzZW5kYCBvciBgcmVjdmAgKG9yIGVxdWl2YWxlbnQgYHNlbGVjdGAgb3BlcmF0aW9uKSBjYW5ub3QgYmVcbiAqIGltbWVkaWF0ZWx5IGNvbXBsZXRlZCBiZWNhdXNlIHRoZXJlIGlzbid0IGEgY29ycmVzcG9uZGluZyBwZW5kaW5nIGByZWN2YCBvclxuICogYHNlbmRgLCB0aGUgaGFuZGxlciBpcyBxdWV1ZWQgdG8gYmUgcnVuIHdoZW4gYSBuZXcgYHJlY3ZgIG9yIGBzZW5kYCBiZWNvbWVzXG4gKiBhdmFpbGFibGUuXG4gKlxuICogQHR5cGVkZWYgSGFuZGxlclxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmUgV2hldGhlciBvciBub3QgdGhlIG9wZXJhdGlvbiBpcyBzdGlsbCBhY3RpdmUuIEFuXG4gKiAgICAgaW5hY3RpdmUgb3BlcmF0aW9uIGlzIG5vdCBzZXJ2aWNlZCBhbmQgd2lsbCBiZSBjbGVhcmVkIGZyb20gdGhlIHF1ZXVlIG9uXG4gKiAgICAgdGhlIG5leHQgZGlydHkgb3BlcmF0aW9uIHB1cmdlLlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY29tbWl0IE1hcmtzIHRoZSBoYW5kbGVyIGFzIGluYWN0aXZlIChzbyBpdCBkb2Vzbid0IHJ1blxuICogICAgIHR3aWNlKSBhbmQgcmV0dXJucyB0aGUgY2FsbGJhY2sgdG8gYmUgcnVuIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmdW5jdGlvbiBydW4gd2hlbiBhIGBzZW5kYCBvciBgcmVjdmAgb3BlcmF0aW9uIGNvbXBsZXRlcy5cbiAqXG4gKiBAY2FsbGJhY2sgSGFuZGxlckNhbGxiYWNrXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9jaGFubmVsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgY2hhbm5lbC4gSW4gYSBgcmVjdmAsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSW4gYSBgc2VuZGAsIHRoaXMgaXMgYHRydWVgIGZvciBhXG4gKiAgICAgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGlzIGNsb3NlZCBiZWZvcmUgdGhlIHNlbmQgY2FuXG4gKiAgICAgY29tcGxldGUuXG4gKiBAcHJpdmF0ZVxuICovXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuaW1wb3J0IHsgYm94LCBoYW5kbGVTZW5kLCBoYW5kbGVSZWN2LCBpc0JveCB9IGZyb20gXCIuL2hhbmRsZXJcIjtcblxuLyoqXG4gKiBUaGUgbmFtZSBvZiB0aGUgY2hhbm5lbCByZXR1cm5lZCBmcm9tIGBhd2FpdFxuICoge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH1gIG9yIHNlbnQgdG8gdGhlIGNhbGxiYWNrIGluXG4gKiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCB3aGVuIHRoZSBkZWZhdWx0IGlzIHJldHVybmVkIGFzXG4gKiBpdHMgdmFsdWUuXG4gKlxuICogVGhpcyBvbmx5IGhhcHBlbnMgd2hlbiBhbiBge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0fHNlbGVjdH0gL1xuICoge0BsaW5rIG1vZHVsZTpjc3Auc2VsZWN0QXN5bmN8c2VsZWN0QXN5bmN9YCBjYWxsIGlzIHBlcmZvcm1lZCwgYWxsIG9wZXJhdGlvbnNcbiAqIGFyZSBpbml0aWFsbHkgYmxvY2tpbmcsIGFuZCBhIGBkZWZhdWx0YCBvcHRpb24gaXMgc2VudC4gVGhlIGltbWVkaWF0ZVxuICogcmVzcG9uc2UgaW4gdGhhdCBzaXR1YXRpb24gaXMgYHsgdmFsdWU6IG9wdGlvbnMuZGVmYXVsdCwgY2hhbm5lbDogREVGQVVMVCB9YC5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuY29uc3QgREVGQVVMVCA9IFN5bWJvbChcIkRFRkFVTFRcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBoYW5kbGVyIHVzZWQgZm9yIGBzZWxlY3RgIG9wZXJhdGlvbnMuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHttb2R1bGU6Y3NwL2NoYW5uZWwuQm94fSBhY3RpdmUgQSBib3hlZCB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlXG4gKiAgICAgaGFuZGxlciBpcyB2YWxpZC4gVGhpcyBpcyBhIGJveGVkIHZhbHVlIGJlY2F1c2UgdGhlIHNlbGVjdC1oYW5kbGluZyBjb2RlXG4gKiAgICAgbmVlZHMgdG8gbWFuaXB1bGF0ZSBpdCBkaXJlY3RseS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9jaGFubmVsLkhhbmRsZXJDYWxsYmFja30gZm4gVGhlIGNhbGxiYWNrIHRvIGJlIHJ1biB3aGVuXG4gKiAgICAgKGFuZCBpZikgdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwL2NoYW5uZWwuSGFuZGxlcn0gVGhlIG5ldyBoYW5kbGVyLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2VsZWN0SGFuZGxlcihhY3RpdmUsIGZuKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWl0OiB7XG4gICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJhbmRvbWx5IHNodWZmbGVkIGFycmF5IGNvbnRhaW5pbmcgb25lIG9mIGVhY2ggaW50ZWdlciB2YWx1ZSBmcm9tXG4gKiBgMGAgdG8gYW4gdXBwZXIgbGltaXQuIEl0IGlzIHVzZWQgdG8gcmFuZG9tbHkgc2VsZWN0IGEgY2hhbm5lbCB0byBiZSBhY3RpdmVcbiAqIHdoZW4gbXVsdGlwbGVzIHVuYmxvY2sgaW4gYSBgc2VsZWN0YCBvcGVyYXRpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvY2hhbm5lbFxuICogQHBhcmFtIHtudW1iZXJ9IHVwcGVyIFRoZSB1cHBlciBsaW1pdCBvZiB0aGUgYXJyYXkgdmFsdWVzLCBleGNsdXNpdmUuXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgZnJvbSBgMGAgdG8gYHVwcGVyIC0gMWAsIHNodWZmbGVkXG4gKiAgICAgaW50byBhIHJhbmRvbSBvcmRlci5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUFycmF5KHVwcGVyKSB7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgdXBwZXI7IGsrKykge1xuICAgIGFycmF5LnB1c2goayk7XG4gIH1cbiAgZm9yIChsZXQgaiA9IHVwcGVyIC0gMTsgaiA+IDA7IGotLSkge1xuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaiArIDEpKTtcbiAgICBjb25zdCB0ZW1wID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgcmVzdWx0IHRoYXQgY29tZXMgZnJvbSBgc2VsZWN0YCBvcGVyYXRpb25zLlxuICpcbiAqIEB0eXBlZGVmIFNlbGVjdFJlc3VsdFxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBJZiB0aGUgYHNlbGVjdGAgb3BlcmF0aW9uIHJlc3VsdGVkIGluIGEgcmVjZWl2ZSwgdGhpcyBpc1xuICogICAgIHRoZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBjaGFubmVsLiBJZiBpdCByZXN1bHRlZCBpbiBhIHNlbmQsIHRoaXMgaXNcbiAqICAgICBgdHJ1ZWAgZm9yIGEgc3VjY2Vzc2Z1bCBzZW5kIGFuZCBgZmFsc2VgIGlmIHRoZSBjaGFubmVsIGNsb3NlZCBmaXJzdC5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOmNzcC5DaGFubmVsfSBjaGFubmVsIFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdGVkXG4gKiAgICAgb3BlcmF0aW9uIGhhcHBlbmVkLlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZWxlY3QgcmVzdWx0IGZyb20gaXRzIGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL2NoYW5uZWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgSWYgdGhlIGBzZWxlY3RgIG9wZXJhdGlvbiByZXN1bHRlZCBpbiBhIHJlY2VpdmUsIHRoaXMgaXMgdGhlXG4gKiAgICAgdmFsdWUgcmVjZWl2ZWQgZnJvbSB0aGUgY2hhbm5lbC4gSWYgaXQgcmVzdWx0ZWQgaW4gYSBzZW5kLCB0aGlzIGlzIGB0cnVlYFxuICogICAgIGZvciBhIHN1Y2Nlc3NmdWwgc2VuZCBhbmQgYGZhbHNlYCBpZiB0aGUgY2hhbm5lbCBjbG9zZWQgZmlyc3QuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB1cG9uIHdoaWNoIHRoZSBzZWxlY3RlZFxuICogICAgIG9wZXJhdGlvbiBoYXBwZW5lZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSBUaGUgcHJvcGVydGllcyB3cmFwcGVkIGludG8gYW4gb2JqZWN0IGZvclxuICogICAgIG91dHB1dC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNlbGVjdFJlc3VsdCh2YWx1ZSwgY2hhbm5lbCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCB7IHZhbHVlLCBjaGFubmVsIH0pO1xufVxuXG4vKipcbiAqIENvbXBsZXRlcyB0aGUgZmlyc3Qgb3BlcmF0aW9uIGFtb25nIHRoZSBwcm92aWRlZCBvcGVyYXRpb25zIHRoYXQgY29tZXNcbiAqIGF2YWlsYWJsZSwgd2l0aG91dCBibG9ja2luZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgYSBjYWxsIHRvIGBzZWxlY3RBc3luY2AgZG9lcyBub3QgZ28gaW50byBhbiBgYXdhaXRgXG4gKiBleHByZXNzaW9uLCBhbmQgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byB1c2UgaXQgaW5zaWRlIGEgcHJvY2Vzcy4gUmF0aGVyIHRoYW5cbiAqIGJsb2NraW5nIHVudGlsIGFuIG9wZXJhdGlvbiBjb21wbGV0ZXMsIHRoaXMgb25lIHJldHVybnMgaW1tZWRpYXRlbHkgYW5kIHRoZW5cbiAqIGludm9rZXMgdGhlIGNhbGxiYWNrIChpZiBwcm92aWRlZCkgYXMgc29vbiBhcyBvbmUgb2YgdGhlIHN1cHBsaWVkIG9wZXJhdGlvbnNcbiAqIGNvbXBsZXRlcy4gSXQgY2FuIGJlIHJlZ2FyZGVkIGFzIGEgbm9uLWJsb2NraW5nIHZlcnNpb24gb2ZcbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB1c2VzIGFuIG9wZXJhdGlvbnMgbGlzdCB0aGF0J3MgaWRlbnRpY2FsIHRvIHRoZSBvbmUgdXNlZCBieVxuICogYHtAbGluayBtb2R1bGU6Y3NwLnNlbGVjdHxzZWxlY3R9YC4gSXQncyBhbiBhcnJheSBvZiB2YWx1ZXM7IGlmIGEgdmFsdWUgaXMgYVxuICogY2hhbm5lbCwgdGhlbiB0aGF0IG9wZXJhdGlvbiBpcyBhIHRha2Ugb24gdGhhdCBjaGFubmVsLCB3aGlsZSBpZiBpdCdzIGFcbiAqIHR3by1lbGVtZW50IGFycmF5IG9mIGNoYW5uZWwgYW5kIHZhbHVlLCB0aGVuIHRoYXQgb3BlcmF0aW9uIGlzIGEgcHV0IG9mIHRoYXRcbiAqIHZhbHVlIG9udG8gdGhhdCBjaGFubmVsLiBBbGwgb3B0aW9ucyB0aGF0IGFyZSBhdmFpbGFibGUgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5zZWxlY3R8c2VsZWN0fWAgYXJlIGFsc28gYXZhaWxhYmxlIGhlcmUuXG4gKlxuICogVGhlIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gb2Ygb25lIHBhcmFtZXRlciwgd2hpY2ggaW4gdGhpcyBjYXNlIGlzIGFuIG9iamVjdFxuICogd2l0aCBgdmFsdWVgIGFuZCBgY2hhbm5lbGAgcHJvcGVydGllcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtPYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHJlY2VpdmVkIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5TZWxlY3RDYWxsYmFja30gY2FsbGJhY2sgQSBmdW5jdGlvbiB0aGF0IGdldHMgaW52b2tlZCB3aGVuXG4gKiAgICAgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdEFzeW5jYCB0aHJvdWdoIHR3byBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcmlvcml0eT1mYWxzZV0gSWYgYHRydWVgLCB0aGVuIHRoZSBwcmlvcml0eSBvZlxuICogICAgIG9wZXJhdGlvbnMgdG8gY29tcGxldGUgd2hlbiBtb3JlIHRoYW4gb25lIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSBpcyBhXG4gKiAgICAgcHJpb3JpdHkgYWNjb3JkaW5nIHRvIHBvc2l0aW9uIHdpdGhpbiB0aGUgb3BlcmF0aW9ucyBhcnJheSAoZWFybGllclxuICogICAgIHBvc2l0aW9ucyBoYXZlIHRoZSBoaWdoZXIgcHJpb3JpdHkpLiBJZiBgZmFsc2VgIG9yIG5vdCBwcmVzZW50LCB0aGVcbiAqICAgICBwcmlvcnR5IG9mIG9wZXJhdGlvbiBjb21wbGV0aW9uIGlzIHJhbmRvbS5cbiAqIEBwYXJhbSB7Kn0gW29wdGlvbnMuZGVmYXVsdF0gSWYgc2V0IGFuZCBhbGwgb2YgdGhlIG9wZXJhdGlvbnMgaW5pdGlhbGx5XG4gKiAgICAgYmxvY2ssIHRoZSBgc2VsZWN0QXN5bmNgIGNhbGxzIGl0cyBjYWxsYmFjayBpbW1lZGlhdGVseSB3aXRoIHRoZSB2YWx1ZSBvZlxuICogICAgIHRoaXMgb3B0aW9uICh0aGUgY2hhbm5lbCB3aWxsIGJlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9KWAuXG4gKiAgICAgSWYgbm90IHNldCwgdGhlIGBzZWxlY3RBc3luY2AgY2FsbCB3aWxsIG5vdCBjYWxsIGl0cyBjYWxsYmFjayB1bnRpbCBvbmVcbiAqICAgICBvZiB0aGUgb3BlcmF0aW9ucyBjb21wbGV0ZXMgYW5kIHRoYXQgdmFsdWUgYW5kIGNoYW5uZWwgd2lsbCBiZSB0aGUgb25lc1xuICogICAgIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBzZWxlY3RBc3luYyhvcHMsIGNhbGxiYWNrID0gKCkgPT4ge30sIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBjb3VudCA9IG9wcy5sZW5ndGg7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIHRocm93IEVycm9yKFwic2VsZWN0IGNhbGxlZCB3aXRoIG5vIG9wZXJhdGlvbnNcIik7XG4gIH1cblxuICBjb25zdCBwcmlvcml0eSA9ICEhb3B0aW9ucy5wcmlvcml0eTtcbiAgY29uc3QgaW5kaWNlcyA9IHByaW9yaXR5ID8gW10gOiByYW5kb21BcnJheShjb3VudCk7XG5cbiAgY29uc3QgYWN0aXZlID0gYm94KHRydWUpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEhhbmRsZXIoY2hhbm5lbCkge1xuICAgIHJldHVybiBzZWxlY3RIYW5kbGVyKGFjdGl2ZSwgdmFsdWUgPT4ge1xuICAgICAgY2FsbGJhY2soc2VsZWN0UmVzdWx0KHZhbHVlLCBjaGFubmVsKSk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgcmVzdWx0O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIC8vIENob29zZSBhbiBvcGVyYXRpb24uIElmIGBwcmlvcml0eWAgaXMgdHJ1ZSB0aGVuIGl0J3MgdGhlIG5leHQgaW5kZXgsXG4gICAgLy8gb3RoZXJ3aXNlIGl0J3MgcmFuZG9tXG4gICAgY29uc3Qgb3AgPSBvcHNbcHJpb3JpdHkgPyBpIDogaW5kaWNlc1tpXV07XG4gICAgbGV0IGNoYW5uZWwsIHZhbHVlO1xuXG4gICAgLy8gQXBwbHkgZXZlcnkgb3BlcmF0aW9uIHRvIGl0cyBjaGFubmVsLCBvbmUgYXQgYSB0aW1lXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3ApKSB7XG4gICAgICBbY2hhbm5lbCwgdmFsdWVdID0gb3A7XG4gICAgICByZXN1bHQgPSBoYW5kbGVTZW5kKGNoYW5uZWwsIHZhbHVlLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbm5lbCA9IG9wO1xuICAgICAgcmVzdWx0ID0gaGFuZGxlUmVjdihjaGFubmVsLCBjcmVhdGVTZWxlY3RIYW5kbGVyKGNoYW5uZWwpKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjaGVjayBmb3IgYm94IGhlcmUgYmVjYXVzZSBhIGJveCBmcm9tIGEgY2hhbm5lbCBpbmRpY2F0ZXMgdGhhdCB0aGVcbiAgICAvLyB2YWx1ZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgKHRoYXQgdGhlcmUgaXMgbm8gbmVlZCB0byBibG9jayB0byBnZXQgdGhlXG4gICAgLy8gdmFsdWUpLiBJZiB0aGlzIGhhcHBlbnMsIHdlIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGltbWVkaWF0ZWx5IHdpdGggdGhhdFxuICAgIC8vIHZhbHVlIGFuZCBjaGFubmVsIGFuZCBzdG9wIHF1ZXVlaW5nIG90aGVyIG9wZXJhdGlvbnMuXG4gICAgaWYgKGlzQm94KHJlc3VsdCkpIHtcbiAgICAgIGNhbGxiYWNrKHNlbGVjdFJlc3VsdChyZXN1bHQudmFsdWUsIGNoYW5uZWwpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIG5vbmUgb2YgdGhlIG9wZXJhZXRpb25zIGltbWVkaWF0ZWx5IHJldHVybmVkIHZhbHVlcyAodGhleSBhcmUgYWxsXG4gIC8vIGJsb2NrZWQpLCBhbmQgd2UgaGF2ZSBzZXQgYSBkZWZhdWx0IGNoYW5uZWwgb3B0aW9uLCB0aGVuIHJldHVybiB0aGUgdmFsdWVcbiAgLy8gaWYgdGhlIGRlZmF1bHQgY2hhbm5lbCByYXRoZXIgdGhhbiB3YWl0aW5nIGZvciB0aGUgcXVldWVkIG9wZXJhdGlvbnMgdG9cbiAgLy8gY29tcGxldGUuXG4gIGlmIChcbiAgICAhaXNCb3gocmVzdWx0KSAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBcImRlZmF1bHRcIilcbiAgKSB7XG4gICAgaWYgKGFjdGl2ZS52YWx1ZSkge1xuICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2U7XG4gICAgICBjYWxsYmFjayhzZWxlY3RSZXN1bHQob3B0aW9ucy5kZWZhdWx0LCBERUZBVUxUKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGxldGVzIHRoZSBmaXJzdCBvcGVyYXRpb24gYW1vbmcgdGhlIHByb3ZpZGVkIG9wZXJhdGlvbnMgdGhhdCBjb21lc1xuICogYXZhaWxhYmxlLCBibG9ja2luZyB0aGUgcHJvY2VzcyB1bnRpbCB0aGVuLlxuICpcbiAqIGBvcGVyYXRpb25zYCBpcyBhbiBhcnJheSB3aG9zZSBlbGVtZW50cyBtdXN0IGJlIGNoYW5uZWxzIG9yIHR3by1lbGVtZW50XG4gKiBzdWItYXJyYXlzIG9mIGNoYW5uZWxzIGFuZCB2YWx1ZXMsIGluIGFueSBjb21iaW5hdGlvbi4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogY2hhbm5lbCBpcyBhIHRha2Ugb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbC4gQW4gb3BlcmF0aW9uIHRoYXQgaXMgYVxuICogdHdvLWVsZW1lbnQgYXJyYXkgaXMgYSBwdXQgb3BlcmF0aW9uIG9uIHRoYXQgY2hhbm5lbCB1c2luZyB0aGF0IHZhbHVlLlxuICogRXhhY3RseSBvbmUgb2YgdGhlc2Ugb3BlcmF0aW9ucyB3aWxsIGNvbXBsZXRlLCBhbmQgaXQgd2lsbCBiZSB0aGUgZmlyc3RcbiAqIG9wZXJhdGlvbiB0aGF0IHVuYmxvY2tzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gKm11c3QqIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiBhbiBgYXN5bmNgIGZ1bmN0aW9uIGFuZCBhcyBwYXJ0IG9mXG4gKiBhbiBgYXdhaXRgIGV4cHJlc3Npb24gaWYgdGhlIHJldHVybiB2YWx1ZSBpcyBuZWVkZWQuXG4gKlxuICogV2hlbiBgc2VsZWN0YCBpcyBjb21wbGV0ZWQgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCBpdHMgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBldmFsdWF0ZXMgdG8gYW4gb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzLiBUaGUgYHZhbHVlYCBwcm9wZXJ0eSBiZWNvbWVzXG4gKiBleGFjdGx5IHdoYXQgd291bGQgaGF2ZSBiZWVuIHJldHVybmVkIGJ5IHRoZSBlcXVpdmFsZW50IGBhd2FpdCBwdXRgIG9yIGBhd2FpdFxuICogdGFrZWAgb3BlcmF0aW9uOiBhIGJvb2xlYW4gaW4gdGhlIGNhc2Ugb2YgYSBwdXQsIG9yIHRoZSB0YWtlbiB2YWx1ZSBpbiB0aGVcbiAqIGNhc2Ugb2YgYSB0YWtlLiBUaGUgYGNoYW5uZWxgIHByb3BlcnR5IGlzIHNldCB0byB0aGUgY2hhbm5lbCB3aGVyZSB0aGVcbiAqIG9wZXJhdGlvbiBhY3R1YWxseSB0b29rIHBsYWNlLiBUaGlzIHdpbGwgYmUgZXF1aXZhbGVudCB0byB0aGUgY2hhbm5lbCBpbiB0aGVcbiAqIGBvcGVyYXRpb25zYCBhcnJheSB3aGljaCBjb21wbGV0ZWQgZmlyc3QsIGFsbG93aW5nIHRoZSBwcm9jZXNzIHRvIHVuYmxvY2suXG4gKlxuICogSWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBvcGVyYXRpb24gYWxyZWFkeSBhdmFpbGFibGUgdG8gY29tcGxldGUgd2hlbiB0aGVcbiAqIGNhbGwgdG8gYHNlbGVjdGAgaXMgbWFkZSwgdGhlIG9wZXJhdGlvbiB3aXRoIHRoZSBoaWdoZXN0IHByaW9yaXR5IHdpbGwgYmUgdGhlXG4gKiBvbmUgdG8gY29tcGxldGUuIFJlZ3VsYXJseSwgcHJpb3JpdHkgaXMgbm9uLWRldGVybWluaXN0aWMgKGkuZS4sIGl0J3Mgc2V0XG4gKiByYW5kb21seSkuIEhvd2V2ZXIsIGlmIHRoZSBvcHRpb25zIG9iamVjdCBoYXMgYSBgcHJpb3JpdHlgIHZhbHVlIHNldCB0b1xuICogYHRydWVgLCBwcmlvcml0eSB3aWxsIGJlIGFzc2lnbmVkIGluIHRoZSBvcmRlciBvZiB0aGUgb3BlcmF0aW9ucyBpbiB0aGVcbiAqIHN1cHBsaWVkIGFycmF5LlxuICpcbiAqIElmIGFsbCBvZiB0aGUgb3BlcmF0aW9ucyBtdXN0IGJsb2NrIChpLmUuLCB0aGVyZSBhcmUgbm8gcGVuZGluZyBwdXRzIGZvciB0YWtlXG4gKiBvcGVyYXRpb25zLCBvciB0YWtlcyBmb3IgcHV0IG9wZXJhdGlvbnMpLCBhIGRlZmF1bHQgdmFsdWUgbWF5IGJlIHJldHVybmVkLlxuICogVGhpcyBpcyBvbmx5IGRvbmUgaWYgdGhlcmUgaXMgYSBgZGVmYXVsdGAgcHJvcGVydHkgaW4gdGhlIG9wdGlvbnMgb2JqZWN0LCBhbmRcbiAqIHRoZSB2YWx1ZSBvZiB0aGF0IHByb3BlcnR5IGJlY29tZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBhd2FpdCBzZWxlY3RgLiBUaGVcbiAqIGNoYW5uZWwgaXMgc2V0IHRvIHRoZSBzcGVjaWFsIHZhbHVlIGB7QGxpbmsgbW9kdWxlOmNzcC5ERUZBVUxUfERFRkFVTFR9YC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHtvYmplY3RbXX0gb3BlcmF0aW9ucyBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdGhhdCBjb3JyZXNwb25kIHRvIHJlY3ZcbiAqICAgICBhbmQgc2VuZCBvcGVyYXRpb25zLiBBIHJlY3Ygb3BlcmF0aW9uIGlzIHNpZ25pZmllZCBieSBhbiBlbGVtZW50IHRoYXQgaXNcbiAqICAgICBhIGNoYW5uZWwgKHdoaWNoIGlzIHRoZSBjaGFubmVsIHRvIGJlIHRha2VuIGZyb20pLiBBIHNlbmQgb3BlcmF0aW9uIGlzXG4gKiAgICAgc3BlY2lmaWVkIGJ5IGFuIGVsZW1lbnQgdGhhdCBpcyBpdHNlbGYgYSB0d28tZWxlbWVudCBhcnJheSwgd2hpY2ggaGFzIGFcbiAqICAgICBjaGFubmVsIGZvbGxvd2VkIGJ5IGEgdmFsdWUgKHdoaWNoIGlzIHRoZSBjaGFubmVsIGFuZCB2YWx1ZSB0byBiZSBzZW50KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucz17fV0gQW4gb3B0aW9uYWwgb2JqZWN0IHdoaWNoIGNhbiBjaGFuZ2UgdGhlIGJlaGF2aW9yXG4gKiAgICAgb2YgYHNlbGVjdGAgdGhyb3VnaCB0d28gcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJpb3JpdHk9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgcHJpb3JpdHkgb2ZcbiAqICAgICBvcGVyYXRpb25zIHRvIGNvbXBsZXRlIHdoZW4gbW9yZSB0aGFuIG9uZSBpcyBpbW1lZGlhdGVseSBhdmFpbGFibGUgaXMgYVxuICogICAgIHByaW9yaXR5IGFjY29yZGluZyB0byBwb3NpdGlvbiB3aXRoaW4gdGhlIG9wZXJhdGlvbnMgYXJyYXkgKGVhcmxpZXJcbiAqICAgICBwb3NpdGlvbnMgaGF2ZSB0aGUgaGlnaGVyIHByaW9yaXR5KS4gSWYgYGZhbHNlYCBvciBub3QgcHJlc2VudCwgdGhlXG4gKiAgICAgcHJpb3J0eSBvZiBvcGVyYXRpb24gY29tcGxldGlvbiBpcyByYW5kb20uXG4gKiBAcGFyYW0geyp9IFtvcHRpb25zLmRlZmF1bHRdIElmIHNldCBhbmQgYWxsIG9mIHRoZSBvcGVyYXRpb25zIGluaXRpYWxseVxuICogICAgIGJsb2NrLCB0aGUgYHNlbGVjdGAgY2FsbCBjb21wbGV0ZXMgaW1tZWRpYXRlbHkgd2l0aCB0aGUgdmFsdWUgb2YgdGhpc1xuICogICAgIG9wdGlvbiAodGhlIGNoYW5uZWwgd2lsbCBiZSBge0BsaW5rIG1vZHVsZTpjc3AuREVGQVVMVHxERUZBVUxUfSlgLiBJZiBub3RcbiAqICAgICBzZXQsIHRoZSBgc2VsZWN0YCBjYWxsIHdpbGwgYmxvY2sgdW50aWwgb25lIG9mIHRoZSBvcGVyYXRpb25zIGNvbXBsZXRlc1xuICogICAgIGFuZCB0aGF0IHZhbHVlIGFuZCBjaGFubmVsIHdpbGwgYmUgdGhlIG9uZXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTpjc3AuU2VsZWN0UmVzdWx0Pn0gQSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHRvIGFuXG4gKiAgICAgb2JqZWN0IG9mIHR3byBwcm9wZXJ0aWVzOiBgdmFsdWVgIHdpbGwgY29udGFpbiB0aGUgdmFsdWUgdGhhdCB3b3VsZCBoYXZlXG4gKiAgICAgYmVlbiByZXR1cm5lZCBieSB0aGUgY29ycmVzcG9uZGluZyBge0BsaW5rIG1vZHVsZTpjc3Auc2VuZHxzZW5kfWAgb3JcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AucmVjdnxyZWN2fWAgb3BlcmF0aW9uOyBhbmQgYGNoYW5uZWxgIHdpbGwgYmUgYVxuICogICAgIHJlZmVyZW5jZSB0byB0aGUgY2hhbm5lbCB0aGF0IGNvbXBsZXRlZCB0aGUgb3BlcmF0aW9uIHRvIGFsbG93IGBzZWxlY3RgXG4gKiAgICAgdG8gdW5ibG9jay5cbiAqL1xuZnVuY3Rpb24gc2VsZWN0KG9wcywgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZWxlY3RBc3luYyhvcHMsIHJlc29sdmUsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIHJlYWQgdGhlIHZhbHVlIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQudmFsdWVgIGluc3RlYWQgb2YgYHZhbHVlKHJlc3VsdClgLCBidXQgaXQncyBwcm92aWRlZCBmb3JcbiAqIGNvbnNpc3RlbmN5IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uLWNlbnRyaWMgQVBJLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuU2VsZWN0UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBjb21pbmcgZnJvbSBhIHNlbGVjdFxuICogICAgIG9wZXJhdGlvbi5cbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBwcm92aWRlZCBieSB0aGUgc2VsZWN0IG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdmFsdWUocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQudmFsdWU7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiB0byByZWFkIHRoZSBjaGFubmVsIG91dCBvZiBhIHNlbGVjdCByZXN1bHQuIFRoaXNcbiAqIGZ1bmN0aW9uIGlzIG5vdCBuZWNlc3NhcnkgLSBhZnRlciBhbGwsIGl0J3MgYWJzb2x1dGVseSBhcyBjb3JyZWN0IHRvIHNpbXBseVxuICogdXNlIGByZXN1bHQuY2hhbm5lbGAgaW5zdGVhZCBvZiBgY2hhbm5lbChyZXN1bHQpYCwgYnV0IGl0J3MgcHJvdmlkZWQgZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbi1jZW50cmljIEFQSS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHBhcmFtIHttb2R1bGU6Y3NwLlNlbGVjdFJlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgY29taW5nIGZyb20gYSBzZWxlY3RcbiAqICAgICBvcGVyYXRpb24uXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBjaGFubmVsIHVwb24gd2hpY2ggdGhlIHNlbGVjdCBvcGVyYXRpb25cbiAqICAgICBjb21wbGV0ZWQuXG4gKi9cbmZ1bmN0aW9uIGNoYW5uZWwocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQuY2hhbm5lbDtcbn1cblxuZXhwb3J0IHsgREVGQVVMVCwgc2VsZWN0LCBzZWxlY3RBc3luYywgdmFsdWUsIGNoYW5uZWwgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHBsYWNlIHdoZXJlIHRoZSBuZXcgSlMgdGFza3MgYXJlIGFjdHVhbGx5IGNyZWF0ZWQuIEEgcXVldWUgaXNcbiAqIG1haW50YWluZWQgZm9yIHRoZW0sIGFuZCBhcyBlYWNoIGJhdGNoIG9mIHRhc2tzIGFyZSBjb21wbGV0ZWQsIHRoZSBuZXh0IG9uZXNcbiAqIHJ1bi4gQXMgZWFjaCBwcm9jZXNzIHJ1bnMsIGl0IGFkZHMgdGFza3MgdG8gYmUgcnVuIHRvIHRoZSBxdWV1ZSwgd2hpY2ggYXJlXG4gKiBlYWNoIHJ1biBpbiB0aGVpciBvd24gSlMgdGFzay5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gdGhhdCBzcGF3bnMgdGhlIG5ldyBKUyB0YXNrIGRlcGVuZHMgb24gZW52aXJvbm1lbnQuIFRoZVxuICogYHNldEltbWVkaWF0ZWAgZnVuY3Rpb24gaXMgcHJlZmVycmVkIGFzIGl0J3MgdGhlIGZhc3Rlc3QsIG5vdCB3YWl0aW5nIGZvclxuICogZXZlbnQgcXVldWVzIHRvIGVtcHR5IGJlZm9yZSBzcGF3bmluZyB0aGUgbmV3IHByb2Nlc3MuIEhvd2V2ZXIsIGl0IGlzIG5vdCBKU1xuICogc3RhbmRhcmQgYW5kIGN1cnJlbnRseSBvbmx5IHdvcmtzIGluIElFIGFuZCBOb2RlLiBJZiBgc2V0SW1tZWRpYXRlYCBpc24ndFxuICogYXZhaWxhYmxlLCBhbiBhdHRlbXB0IGlzIG1hZGUgdG8gdXNlIGBNZXNzYWdlQ2hhbm5lbGAncyBgb25NZXNzYWdlYCBpcyB0cmllZFxuICogbmV4dC4gSWYgdGhhdCBpcyBhbHNvIG5vdCBhdmFpbGFibGUsIHRoZW4gYHNldFRpbWVvdXRgIHdpdGggYDBgIGRlbGF5IGlzXG4gKiB1c2VkLCB3aGljaCBpcyBhdmFpbGFibGUgZXZlcnl3aGVyZSBidXQgd2hpY2ggaXMgdGhlIGxlYXN0IHBlcmZvcm1hbnQgb2YgYWxsXG4gKiBvZiB0aGUgc29sdXRpb25zLlxuICpcbiAqIFRoZXJlIGFyZSBvdGhlciBwb3NzaWJpbGl0aWVzIGZvciBjcmVhdGluZyBwcm9jZXNzZXMsIGJ1dCB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAqIGFzIG9ic29sZXRlIChgcHJvY2Vzcy5uZXh0VGlja2AgYW5kIGBvbnJlYWR5c3RhdGVjaGFuZ2VgKSBvciB1bm5lY2Vzc2FyeVxuICogKGB3aW5kb3cucG9zdE1lc3NhZ2VgLCB3aGljaCB3b3JrcyBsaWtlIGBNZXNzYWdlQ2hhbm5lbGAgYnV0IGRvZXNuJ3Qgd29yayBpblxuICogV2ViIFdvcmtlcnMpLlxuICpcbiAqIEl0IGlzIG5vdGFibGUgYW5kIGltcG9ydGFudCB0aGF0IHdlIGFjdCBhcyBnb29kIGNpdGl6ZW5zIGhlcmUuIFRoaXNcbiAqIGRpc3BhdGNoZXIgaXMgY2FwYWJsZSBvZiB0YWtpbmcgY29udHJvbCBvZiB0aGUgSmF2YVNjcmlwdCBlbmdpbmUgdW50aWxcbiAqIHRob3VzYW5kcywgbWlsbGlvbnMsIG9yIG1vcmUgdGFza3MgYXJlIGhhbmRsZWQuIEJ1dCB0aGF0IGNvdWxkIGNhdXNlIHRoZVxuICogc3lzdGVtIGV2ZW50IGxvb3AgdG8gaGF2ZSB0byB3YWl0IGFuIHVuYWNjZXB0YWJsZSBhbW91bnQgb2YgdGltZS4gU28gd2UgbGltaXRcbiAqIG91cnNlbHZlcyB0byBhIGJhdGNoIG9mIHRhc2tzIGF0IGEgdGltZSwgYW5kIGlmIHRoZXJlIGFyZSBzdGlsbCBtb3JlIHRvIGJlXG4gKiBydW4sIHdlIGxldCB0aGUgZXZlbnQgbG9vcCBydW4gYmVmb3JlIHRoYXQgbmV4dCBiYXRjaCBpcyBwcm9jZXNzZWQuXG4gKlxuICogVGhlIGRpc3BhdGNoZXIgaXMgKipnbG9iYWwqKi4gVGhlcmUgaXMgYSBzaW5nbGUgaW5zdGFuY2UgdGhhdCBydW5zIGZvciBhbGxcbiAqIGNoYW5uZWxzIGFuZCBwcm9jZXNzZXMuIFRoaXMgaXMgdGhlIG9ubHkgZWxlbWVudCBvZiB0aGUgc3lzdGVtIHRoYXQgd29ya3NcbiAqIGxpa2UgdGhpcy5cbiAqXG4gKiBAbW9kdWxlIGNzcC9kaXNwYXRjaGVyXG4gKiBAc2VlIG1vZHVsZTpjc3AuY29uZmlnXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIHF1ZXVlIGFzIHEsXG4gIEVNUFRZLFxuICBjb3VudCBhcyBxQ291bnQsXG4gIGRlcXVldWUsXG4gIGVucXVldWVcbn0gZnJvbSBcIm1vZHVsZXMvcXVldWVcIjtcbmNvbnN0IHF1ZXVlID0gcSgpO1xuXG4vKipcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2Qgb3B0aW9uIGluZGljYXRpbmcgdGhhdCBgc2V0SW1tZWRpYXRlYCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBpcyB0aGUgZGVmYXVsdCBvcHRpb24uIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkb24ndCBzdXBwb3J0XG4gKiBgc2V0SW1tZWRpYXRlYCwgdGhpcyBmYWxscyBiYWNrIHRvXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuTUVTU0FHRV9DSEFOTkVMfE1FU1NBR0VfQ0hBTk5FTH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBTRVRfSU1NRURJQVRFID0gU3ltYm9sKFwiU0VUX0lNTUVESUFURVwiKTtcblxuLyoqXG4gKiBUaGUgZGlzcGF0Y2ggbWV0aG9kIG9wdGlvbiBpbmRpY2F0aW5nIHRoYXQgYSBgTWVzc2FnZUNoYW5uZWxgIHNob3VsZCBiZSB1c2VkXG4gKiB0byBkaXNwYXRjaCB0YXNrcy5cbiAqXG4gKiBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBgTWVzc2FnZUNoYW5uZWxgLCB0aGlzIGZhbGxzIGJhY2sgdG9cbiAqIGB7QGxpbmsgbW9kdWxlOmNzcC5TRVRfVElNRU9VVHxTRVRfVElNRU9VVH1gLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHNlZSB7QGxpbmsgbW9kdWxlOmNzcC5jb25maWd8Y29uZmlnfVxuICovXG5jb25zdCBNRVNTQUdFX0NIQU5ORUwgPSBTeW1ib2woXCJNRVNTQUdFX0NIQU5ORUxcIik7XG5cbi8qKlxuICogVGhlIGRpc3BhdGNoIG1ldGhvZCBvcHRpb24gaW5kaWNhdGluZyB0aGF0IGBzZXRUaW1lb3V0YCBzaG91bGQgYmUgdXNlZCB0b1xuICogZGlzcGF0Y2ggdGFza3MuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgYWx3YXlzIGF2YWlsYWJsZSwgYnV0IGl0J3MgYWxzbyBhbHdheXMgbGVzcyBlZmZpY2llbnQgdGhhbiBhbnlcbiAqIG90aGVyIG1ldGhvZCwgc28gaXQgc2hvdWxkIGJlIHVzZWQgYXMgYSBsYXN0IHJlc29ydC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcFxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBzZWUgIHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9XG4gKi9cbmNvbnN0IFNFVF9USU1FT1VUID0gU3ltYm9sKFwiU0VUX1RJTUVPVVRcIik7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGJhdGNoU2l6ZTogMTAyNCxcbiAgZGlzcGF0Y2hNZXRob2Q6IFNFVF9JTU1FRElBVEVcbn07XG5cbmxldCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xubGV0IHJ1bm5pbmcgPSBmYWxzZTtcbmxldCBxdWV1ZWQgPSB0cnVlO1xuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGRpc3BhdGNoIHRhc2tzLiBUaGVcbiAqIGZ1bmN0aW9uIHRoYXQgaXMgY3JlYXRlZCBkZXBlbmRzIG9uIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgYGRpc3BhdGNoTWV0aG9kYFxuICogdGhhdCBjYW4gYmUgc2V0IHdpdGggYHtAbGluayBtb2R1bGU6Y3NwLmNvbmZpZ3xjb25maWd9YC5cbiAqXG4gKiBAcmV0dXJuIEEgZGlzcGF0Y2hlciBmdW5jdGlvbiB1c2luZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRpc3BhdGNoIG1ldGhvZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoZXIoKSB7XG4gIHN3aXRjaCAoY2FsY0Rpc3BhdGNoTWV0aG9kKCkpIHtcbiAgICAvLyBXZSBwcmVmZXIgYHNldEltbWVkaWF0ZWAgaWYgaXQncyBhdmFpbGFibGUsIGJ1dCBpdCdzIG9ubHkgYXZhaWxhYmxlIGluXG4gICAgLy8gTm9kZSBhbmQgc29tZSBvbGQgYnJvd3NlcnMuXG4gICAgY2FzZSBTRVRfSU1NRURJQVRFOlxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBzZXRJbW1lZGlhdGUocHJvY2Vzc1Rhc2tzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIC8vIE1vc3QgbW9kZXJuIGJyb3dzZXJzIGltcGxlbWVudCBgTWVzc2FnZUNoYW5uZWxgLiBUaGlzIGlzIHRoZSBwcmVmZXJyZWRcbiAgICAvLyBtZXRob2QgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMgd2hlcmUgYHNldEltbWVkaWF0ZWAgaXNuJ3QgYXZhaWxhYmxlLlxuICAgIGNhc2UgTUVTU0FHRV9DSEFOTkVMOiB7XG4gICAgICBjb25zdCBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9ICgpID0+IHByb2Nlc3NUYXNrcygpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIGFsbCBlbHNlIGZhaWxzLCBqdXN0IHVzZSBgc2V0VGltZW91dGAuIEl0J3MgYSBsaXR0bGUgc2xvd2VyIHRoYW4gdGhlXG4gICAgLy8gb3RoZXIgbWV0aG9kcywgYnV0IGl0J3MgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUuXG4gICAgY2FzZSBTRVRfVElNRU9VVDpcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzVGFza3MsIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWN0dWFsIGRpc3BhdGNoIG1ldGhvZCBiYXNlZCBvbiB0aGUgY3VycmVudCBkaXNwYXRjaCBtZXRob2RcbiAqIHNldHRpbmcgYW5kIGVudmlyb25tZW50YWwgYXZhaWxhYmlsaXR5LlxuICpcbiAqIFRoZSBkaXNwYXRjaCBtZXRob2QgaXMgc3RvcmVkIHJhdywgc28gdGhpcyBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gdGFrZVxuICogZW52aXJvbm1lbnQgaW50byBhY2NvdW50LiBGb3IgZXhhbXBsZSwgaWYgd2UncmUgcnVubmluZyBpbiBhIG1vZGVybiBicm93c2VyXG4gKiAod2hpY2ggZG9lcyBub3QgaGF2ZSBgc2V0SW1tZWRpYXRlYCksXG4gKiBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAgY2FuIHN0aWxsIGJlIHJlY29yZGVkIGFzIHRoZVxuICogZGlzcGF0Y2ggbWV0aG9kLCBidXQgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVyblxuICogYHtAbGluayBtb2R1bGU6Y3NwLk1FU1NBR0VfQ0hBTk5FTHxNRVNTQUdFX0NIQU5ORUx9YC5cbiAqXG4gKiBAcmV0dXJuIHtTeW1ib2x9IFRoZSBkaXNwYXRjaCBtZXRob2QgdG8gdXNlIGJhc2VkIG9uIHNldHRpbmcgYW5kIGVudmlyb25tZW50LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FsY0Rpc3BhdGNoTWV0aG9kKCkge1xuICBzd2l0Y2ggKG9wdGlvbnMuZGlzcGF0Y2hNZXRob2QpIHtcbiAgICBjYXNlIE1FU1NBR0VfQ0hBTk5FTDpcbiAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIE1FU1NBR0VfQ0hBTk5FTDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTRVRfVElNRU9VVDtcblxuICAgIGNhc2UgU0VUX1RJTUVPVVQ6XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIFNFVF9JTU1FRElBVEU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBNRVNTQUdFX0NIQU5ORUw7XG4gICAgICB9XG4gICAgICByZXR1cm4gU0VUX1RJTUVPVVQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaGVhcnQgb2YgdGhlIGRpc3BhdGNoIHByb2Nlc3MsIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHJ1biBieSB0aGUgZGlzcGF0Y2hcbiAqIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGFjdHVhbGx5IHJ1biBxdWV1ZWQgdGFza3MuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1Rhc2tzKCkge1xuICBydW5uaW5nID0gdHJ1ZTtcbiAgcXVldWVkID0gZmFsc2U7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IHRhc2sgPSBkZXF1ZXVlKHF1ZXVlKTtcbiAgICBpZiAodGFzayA9PT0gRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRhc2soKTtcblxuICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmJhdGNoU2l6ZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvdW50Kys7XG5cbiAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHFDb3VudChxdWV1ZSkpIHtcbiAgICAgIGRpc3BhdGNoZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBhc3NpZ25zIHRoZSBnbG9iYWwgZGlzcGF0Y2ggZnVuY3Rpb24gYmFzZWQgb24gZGlzcGF0Y2ggbWV0aG9kXG4gKiBzZXR0aW5nIGFuZCBlbnZpcm9ubWVudGFsIGF2YWlsYWJpbGl0eS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXREaXNwYXRjaGVyKCkge1xuICBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcigpO1xufVxuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSBDaGFua28gZGlzcGF0Y2hlci4gQW4gb2JqZWN0IGxpa2UgdGhpcyBpcyByZXR1cm5lZFxuICogZnJvbSB0aGUge0BsaW5rIG1vZHVsZTpjc3AuY29uZmlnfSBmdW5jdGlvbiwgYW5kIGl0IG1heSBhbHNvIGJlIHBhc3NlZCB0byB0aGVcbiAqIHNhbWUgZnVuY3Rpb24gKHRob3VnaCBlYWNoIHByb3BlcnR5IGlzIG9wdGlvbmFsIGluIHRoYXQgY2FzZSkuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gRGlzcGF0Y2hlckNvbmZpZ1xuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYXRjaFNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHRhc2tzIHRoYXQgdGhlIGRpc3BhdGNoZXJcbiAqICAgICB3aWxsIHJ1biBpbiBhIHNpbmdsZSBiYXRjaC5cbiAqIEBwcm9wZXJ0eSB7U3ltYm9sfSBkaXNwYXRjaE1ldGhvZCBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzIGludG9cbiAqICAgICBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLlxuICovXG5cbi8qKlxuICogU2V0cyBvbmUgb3IgbW9yZSBvZiB0aGUgZGlzcGF0Y2hlciBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKlxuICogVGhpcyBpcyBhZHZhbmNlZCBzZXR0aW5nIGZvciB0aGUgZGlzcGF0Y2hlciB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBxdWV1ZWluZ1xuICogdXAgY2hhbm5lbCBvcGVyYXRpb25zIGFuZCBwcm9jZXNzZXMuIEl0IGlzIGxpa2VseSB0aGF0IHRoaXMgZnVuY3Rpb24gd2lsbFxuICogbmV2ZXIgbmVlZCB0byBiZSBjYWxsZWQgaW4gbm9ybWFsIG9wZXJhdGlvbi5cbiAqXG4gKiBJZiBhbnkgcmVjb2duaXplZCBvcHRpb25zIGFyZSBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0b1xuICogYGNvbmZpZ2AsIHRoZW4gdGhlIG9wdGlvbiBpcyBzZXQgdG8gdGhlIHZhbHVlIHNlbnQgaW4uIFByb3BlcnRpZXMgdGhhdCBhcmVuJ3RcbiAqIGFueSBvZiB0aGVzZSBvcHRpb25zIGFyZSBpZ25vcmVkLCBhbmQgYW55IG9mIHRoZXNlIG9wdGlvbnMgdGhhdCBkbyBub3QgYXBwZWFyXG4gKiBpbiB0aGUgcGFzc2VkIG9iamVjdCBhcmUgbGVmdCB3aXRoIHRoZWlyIGN1cnJlbnQgdmFsdWVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBBIG1hcHBpbmcgb2Ygb3B0aW9ucyB0byB0aGVpciBuZXcgdmFsdWVzLiBFeHRyYSB2YWx1ZXNcbiAqICAgICAocHJvcGVydGllcyB0aGF0IGFyZSBub3Qgb3B0aW9ucykgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdHMuYmF0Y2hTaXplXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCB0aGVcbiAqICAgICBkaXNwYXRjaGVyIHdpbGwgcnVuIGluIGEgc2luZ2xlIGJhdGNoIChpbml0aWFsbHksIHRoaXMgaXMgMTAyNCkuIElmIHRoZVxuICogICAgIG51bWJlciBvZiBwZW5kaW5nIHRhc2tzIGV4Y2VlZHMgdGhpcywgdGhlIHJlbWFpbmluZyBhcmUgbm90IGRpc2NhcmRlZC5cbiAqICAgICBUaGV5J3JlIHNpbXBseSBydW4gYXMgcGFydCBvZiBhbm90aGVyIGJhdGNoIGFmdGVyIHRoZSBjdXJyZW50IGJhdGNoXG4gKiAgICAgY29tcGxldGVzLlxuICogQHBhcmFtIHtTeW1ib2x9IFtvcHRzLmRpc3BhdGNoTWV0aG9kXSBUaGUgbWV0aG9kIHVzZWQgdG8gZGlzcGF0Y2ggYSBwcm9jZXNzXG4gKiAgICAgaW50byBhIHNlcGFyYXRlIGxpbmUgb2YgZXhlY3V0aW9uLiBQb3NzaWJsZSB2YWx1ZXMgYXJlXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9JTU1FRElBVEV8U0VUX0lNTUVESUFURX1gLFxuICogICAgIGB7QGxpbmsgbW9kdWxlOmNzcC5NRVNTQUdFX0NIQU5ORUx8TUVTU0FHRV9DSEFOTkVMfWAsIG9yXG4gKiAgICAgYHtAbGluayBtb2R1bGU6Y3NwLlNFVF9USU1FT1VUfFNFVF9USU1FT1VUfWAsIHdpdGggdGhlIGluaXRpYWwgYmVpbmdcbiAqICAgICBge0BsaW5rIG1vZHVsZTpjc3AuU0VUX0lNTUVESUFURXxTRVRfSU1NRURJQVRFfWAuIElmIGEgbWV0aG9kIGlzIHNldCBidXRcbiAqICAgICBpcyBub3QgYXZhaWxhYmxlIGluIHRoYXQgZW52aXJvbm1lbnQsIHRoZW4gaXQgd2lsbCBzaWxlbnRseSBmYWxsIGJhY2sgdG9cbiAqICAgICB0aGUgbmV4dCBtZXRob2QgdGhhdCBpcyBhdmFpbGFibGUuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkRpc3BhdGNoZXJDb25maWd9IFRoZSBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciB0aGVcbiAqICAgICBkaXNwYXRjaGVyIGFmdGVyIGFueSBuZXcgdmFsdWVzIGhhdmUgYmVlbiBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNvbmZpZyhvcHRzID0ge30pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgIGlmIChrZXkgaW4gb3B0cykge1xuICAgICAgb3B0aW9uc1trZXldID0gb3B0c1trZXldO1xuXG4gICAgICBpZiAoa2V5ID09PSBcImRpc3BhdGNoTWV0aG9kXCIpIHtcbiAgICAgICAgc2V0RGlzcGF0Y2hlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogUXVldWVzIGEgdGFzayB0byBiZSBydW4gYW5kIHN0YXJ0cyB0aGUgZGlzcGF0Y2ggcHJvY2Vzcy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0YXNrIEEgdGFzayB0byBiZSBxdWV1ZWQgYW5kIHJ1biB0aGUgbmV4dCB0aW1lIGEgYmF0Y2ggb2ZcbiAqICAgICB0YXNrcyBpcyBydW4uXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkaXNwYXRjaCh0YXNrKSB7XG4gIGVucXVldWUocXVldWUsIHRhc2spO1xuICBkaXNwYXRjaGVyKCk7XG59XG5cbmV4cG9ydCB7IFNFVF9JTU1FRElBVEUsIE1FU1NBR0VfQ0hBTk5FTCwgU0VUX1RJTUVPVVQsIGNvbmZpZywgZGlzcGF0Y2ggfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFByb3ZpZGVzIHNtYWxsIHV0aWxpdHkgZnVuY3Rpb25zIHRvIG1ha2UgaXQgZWFzaWVyIHRvIGludGVyYWN0IHdpdGggYXN5bmNcbiAqIGZ1bmN0aW9ucyBhcyBwcm9jZXNzZXMuXG4gKlxuICogQG1vZHVsZSBjc3AvcHJvY2Vzc1xuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgeyB0aW1lZENoYW4sIHJlY3ZBc3luYyB9IGZyb20gXCJtb2R1bGVzL2NoYW5uZWxcIjtcblxuLyoqXG4gKiBCbG9ja3MgdGhlIHByb2Nlc3MgZm9yIHRoZSBzcGVjaWZpZWQgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSBhbmQgdGhlbiB1bmJsb2Nrc1xuICogaXQuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRzIGEgZGVsYXksIGJ1dCBvbmUgdGhhdCdzIHN1cGVyaW9yIHRvIG90aGVyIGtpbmRzIG9mIGRlbGF5c1xuICogKGBzZXRUaW1lb3V0YCwgZXRjLikgYmVjYXVzZSBpdCBibG9ja3MgdGhlIHByb2Nlc3MgYW5kIGFsbG93cyB0aGUgZGlzcGF0Y2hlclxuICogdG8gYWxsb3cgb3RoZXIgcHJvY2Vzc2VzIHRvIHJ1biB3aGlsZSB0aGlzIG9uZSB3YWl0cy4gVGhlIGRlZmF1bHQgZGVsYXkgaXMgMCxcbiAqIHdoaWNoIHdpbGwgcmVsZWFzZSB0aGUgcHJvY2VzcyB0byBhbGxvdyBvdGhlcnMgdG8gcnVuIGFuZCB0aGVuIGltbWVkaWF0ZWx5XG4gKiByZS1xdWV1ZSBpdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uICptdXN0KiBiZSBjYWxsZWQgZnJvbSB3aXRoaW4gYW4gYGFzeW5jYCBmdW5jdGlvbiBhbmQgYXMgcGFydCBvZlxuICogYW4gYGF3YWl0YCBleHByZXNzaW9uLlxuICpcbiAqIFdoZW4gdGhpcyBmdW5jdGlvbiBjb21wbGV0ZXMgYW5kIGl0cyBwcm9jZXNzIHVuYmxvY2tzLCB0aGUgYGF3YWl0YCBleHByZXNzaW9uXG4gKiBkb2Vzbid0IHRha2Ugb24gYW55IG1lYW5pbmdmdWwgdmFsdWUuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24gaXMgc2ltcGx5XG4gKiB0byBkZWxheSwgbm90IHRvIGNvbW11bmljYXRlIGFueSBkYXRhLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PTBdIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGJsb2NrIGZvci4gQXQgdGhlIGVuZCBvZiB0aGF0IHRpbWUsIHRoZSBwcm9jZXNzIGlzIGFnYWluIGVsaWdpYmxlIHRvIGJlXG4gKiAgICAgcnVuIGJ5IHRoZSBkaXNwYXRjaGVyLiBJZiB0aGlzIGlzIG1pc3Npbmcgb3Igc2V0IHRvIGAwYCwgdGhlIHByb2Nlc3Mgd2lsbFxuICogICAgIGNlZGUgZXhlY3V0aW9uIHRvIHRoZSBuZXh0IG9uZSBidXQgaW1tZWRpYXRlbHkgcmVxdWV1ZSBpdHNlbGYgdG8gYmUgcnVuXG4gKiAgICAgYWdhaW4uXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIG5vIG1lYW5pbmdmdWwgcmVzdWx0IHdoZW4gdGhlXG4gKiAgICAgdGltZSBoYXMgZWxhcHNlZC5cbiAqL1xuZnVuY3Rpb24gc2xlZXAoZGVsYXkgPSAwKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCBjaCA9IHRpbWVkQ2hhbihkZWxheSk7XG4gICAgcmVjdkFzeW5jKGNoLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbi8qKlxuICogSW52b2tlcyBhbiBhc3luYyBmdW5jdGlvbiBhY3RpbmcgYXMgYSBwcm9jZXNzLlxuICpcbiAqIFRoaXMgaXMgcHVyZWx5IGEgY29udmVuaWVuY2UgZnVuY3Rpb24sIGRyaXZlbiBieSB0aGUgZmFjdCB0aGF0IGl0J3MgbmVjZXNzYXJ5XG4gKiB0byB1c2UgYW4gSUlGRSB0byBpbnZva2UgYW4gYW5vbnltb3VzIGFzeW5jIGZ1bmN0aW9uLCBhbmQgdGhhdCdzIG5vdCB2ZXJ5XG4gKiBhZXN0aGV0aWNhbGx5IHBsZWFzaW5nLiBJdCBkb2VzIG5vIG1vcmUgdGhhbiBpbnZva2UgdGhlIHBhc3NlZCBmdW5jdGlvbiwgYnV0XG4gKiB0aGF0IGF0IGxlYXN0IHJlbGVhc2VzIHVzIGZyb20gdGhlIG5lZWQgdG8gcHV0IHRoZSBlbXB0eSBwYXJlbnRoZXNlcyBhZnRlclxuICogdGhlIGZ1bmN0aW9uIGRlZmluaXRpb24uXG4gKlxuICogQSBuYW1lZCBhc3luYyBmdW5jdGlvbiBjYW4gc2ltcGx5IGJlIGludm9rZWQgKHdpdGhvdXQgYmVpbmcgYW4gSUlGRSkgYW5kXG4gKiBkb2Vzbid0IGJlbmVmaXQgZnJvbSB0aGlzIGNvbnZlbmllbmNlLlxuICpcbiAqIEFub255bW91cyBwcm9jZXNzIHdpdGhvdXQgYGdvYDpcbiAqIGBgYFxuICogKGFzeW5jICgpID0+IHtcbiAqICAgLi4uIGRvIHNvbWUgcHJvY2VzcyBzdHVmZiBoZXJlIC4uLlxuICogfSkoKTtcbiAqIGBgYFxuICogQW5vbnltb3VzIHByb2Nlc3Mgd2l0aCBgZ29gOlxuICogYGBgXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIC4uLiBkbyBzb21lIHByb2Nlc3Mgc3R1ZmYgaGVyZSAuLi5cbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3BcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBhc3luYyBmdW5jdGlvbiBiZWluZyB1c2VkIGFzIGEgcHJvY2Vzcy5cbiAqIEBwYXJhbSB7Li4uKn0gYXJncyBBcmd1bWVudHMgdGhhdCBhcmUgc2VudCB0byB0aGUgYXN5bmMgZnVuY3Rpb24gd2hlbiBpdCdzXG4gKiAgICAgaW52b2tlZC5cbiAqIEByZXR1cm4ge1Byb21pc2V9IFRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBhc3luYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ28oZm4sIC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGZuKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIEpvaW5zIGFsbCBvZiB0aGUgcHJvdmlkZWQgcHJvY2Vzc2VzIGludG8gYSBzaW5nbGUgcHJvY2VzcywgcmV0dXJuaW5nIGFcbiAqIHByb21pc2UgdGhhdCB3cmFwcyBhbGwgb2YgdGhlIGluZGl2aWR1YWwgcHJvY2Vzc2VzJyBwcm9taXNlcy4gUHV0dGluZyB0aGlzIGluXG4gKiBhbiBgYXdhaXRgIHN0YXRlbWVudCB3aWxsIGJsb2NrIHVudGlsIGFsbCBvZiB0aGUgcHJvY2Vzc2VzIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKiBAcGFyYW0gey4uLmZ1bmN0aW9ufSBmbnMgQW55IG51bWJlciBvZiBhc3luYyBmdW5jdGlvbnMgd2hvc2UgcmVzb2x1dGlvbnMgYXJlXG4gKiAgICAgYmVpbmcgd2FpdGVkIGZvci5cbiAqIEByZXR1cm4ge1Byb21pc2V9IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIG9mIHRoZSBwcm9jZXNzZXMgcHJvbWlzZXNcbiAqICAgICByZXNvbHZlLlxuICovXG5mdW5jdGlvbiBqb2luKC4uLmZucykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoZm5zKTtcbn1cblxuZXhwb3J0IHsgc2xlZXAsIGdvLCBqb2luIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBQcm92aWRlcyBhbiBlZmZpY2llbnQgZ2VuZXJhbC1wdXJwb3NlIHF1ZXVlLlxuICpcbiAqIEBtb2R1bGUgY3NwL3F1ZXVlXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogQSBnZW5lcmFsIHB1cnBvc2UsIGhpZ2hseSBlZmZpY2llbnQgSmF2YVNjcmlwdCBxdWV1ZS4gSXQgaXMgYmFja2VkIGJ5IGFcbiAqIEphdmFTY3JpcHQgYXJyYXksIGJ1dCBpdCBkb2VzIG5vdCB1c2UgYHVuc2hpZnRgIHRvIHRha2UgZWxlbWVudHMgb2ZmIHRoZVxuICogYXJyYXkgYmVjYXVzZSB1bnNoaWZ0IGNhdXNlcyBlbGVtZW50cyB0byBiZSBjb3BpZWQgZXZlcnkgdGltZSBpdCdzIHVzZWQuXG4gKiBJbnN0ZWFkLCBhIHBvaW50ZXIgaXMgbWFpbnRhaW5lZCB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV4dFxuICogZWxlbWVudCB0byBiZSBkZXF1ZXVlZCwgYW5kIHdoZW4gdGhhdCBkZXF1ZXVlIGhhcHBlbnMsIHRoZSBwb2ludGVyIHNpbXBseVxuICogbW92ZXMuIFdoZW4gdGhlIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBhcnJheSBnZXRzIGxhcmdlIGVub3VnaCwgaXQnc1xuICogcmVtb3ZlZCBieSBhIHNpbmdsZSBzbGljZSBvcGVyYXRpb24uXG4gKlxuICogUHV0dGluZyBlbGVtZW50cyBpbnRvIHRoZSBxdWV1ZSBpcyBqdXN0IGRvbmUgd2l0aCBhIGJhc2ljIGBwdXNoYCwgd2hpY2ggKmlzKlxuICogaGlnaGx5IGVmZmljaWVudC5cbiAqXG4gKiBUaGlzIHR5cGUgb2YgcXVldWUgaXMgcG9zc2libGUgaW4gSmF2YVNjcmlwdCBiZWNhdXNlIEpTIGFycmF5cyBhcmUgcmVzaXphYmxlLlxuICogSW4gbGFuZ3VhZ2VzIHdpdGggZml4ZWQtc2l6ZSBhcnJheXMsIGEgcmVzaXppbmcgb3BlcmF0aW9uIHdvdWxkIGhhdmUgdG8gYmVcbiAqIHJ1biBlYWNoIHRpbWUgdGhlIHF1ZXVlIGZpbGxzLlxuICpcbiAqIEBuYW1lc3BhY2UgUXVldWVcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBUaGUgdmFsdWUgcmV0dXJuZWQgd2hlbiBhIHF1ZXVlIGlzIHJlYWQgd2hlbiBpdCdzIGVtcHR5LlxuICpcbiAqIFRoaXMgc3BlY2lhbCB2YWx1ZSBpcyB1c2VkIGJlY2F1c2UgYG51bGxgIGFuZCBgdW5kZWZpbmVkYCBhcmUgcG9zc2libGVcbiAqIGxlZ2l0aW1hdGUgdmFsdWVzIHRoYXQgY2FuIGJlIHN0b3JlZCBpbiBhIHF1ZXVlLiBBbm90aGVyIG9wdGlvbiBpcyB0byB1c2VcbiAqIHNvbWUga2luZCBvZiBgTWF5YmVgIG9yIGBPcHRpb25gIHR5cGUsIGJ1dCB0aGF0IHJlcXVpcmVzIG1vcmUgZWZmb3J0IG9uIHRoZVxuICogcGFydCBvZiB0aGUgZW5kIHVzZXIgdG8gaW50ZXJmYWNlIHdpdGguXG4gKlxuICogQHR5cGUge1N5bWJvbH1cbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwXG4gKi9cbmNvbnN0IEVNUFRZID0gU3ltYm9sKFwiRU1QVFlcIik7XG5cbi8qKlxuICogQSBtYXJrZXIgcHJvcGVydHkgbmFtZSB0byBpbmRpY2F0ZSB0aGF0IGFuIG9iamVjdCBpcyBpbiBmYWN0IGEgcXVldWUuXG4gKlxuICogQSBxdWV1ZSBoYXMgYSBwcm9wZXJ0eSB3aXRoIHRoaXMgbmFtZSB3aG9zZSByZWFkb25seSB2YWx1ZSBpcyBzZXQgdG8gYHRydWVgLlxuICogVGhpcyBpcyBub3QgbWVhbnQgdG8gYmUgcmVhZCBleGNlcHQgYnkgdGhlXG4gKiBge0BsaW5rIG1vZHVsZTpxdWV1ZS5pc1F1ZXVlfGlzUXVldWV9YCBmdW5jdGlvbi5cbiAqXG4gKiBAdHlwZSB7U3ltYm9sfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgUVVFVUUgPSBTeW1ib2woXCJRVUVVRVwiKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgcXVldWUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIG9iamVjdCB0byBiZSB0ZXN0ZWQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBvYmplY3QgaXMgYSBxdWV1ZSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzUXVldWUob2JqKSB7XG4gIHJldHVybiAhIW9iaj8uW1FVRVVFXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHF1ZXVlLiBUaGlzIHF1ZXVlIGlzIGNyZWF0ZWQgZW1wdHksIHdpdGggYSBiYWNraW5nIGFycmF5IG9mXG4gKiBsZW5ndGggMC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHJldHVybnMge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IEEgbmV3LCBlbXB0eSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHF1ZXVlKCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgc3RvcmU6IHtcbiAgICAgIHZhbHVlOiBbXSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIHBvaW50ZXI6IHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgW1FVRVVFXToge1xuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBzdG9yZWQgaW4gYSBxdWV1ZS4gVGhpcyBtYXkgb3IgbWF5IG5vdCBlcXVhbFxuICogdGhlIGxlbmd0aCBvZiB0aGUgYmFja2luZyBzdG9yZSwgYXMgdGhlcmUgaXMgb2Z0ZW4gZW1wdHkgc3BhY2UgYXQgdGhlIGhlYWQgb2ZcbiAqIHRoZSBiYWNraW5nIHN0b3JlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aG9zZSBpdGVtcyBhcmUgYmVpbmdcbiAqICAgICBjb3VudGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvdW50KHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggLSBxdWV1ZS5wb2ludGVyO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHF1ZXVlIGlzIGVtcHR5LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSBiZWluZyBjaGVja2VkIGZvciBlbXB0aW5lc3MuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSBxdWV1ZSBpcyBlbXB0eSBvciBgZmFsc2VgIGlmIGl0IGlzXG4gKiAgICAgbm90LlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eShxdWV1ZSkge1xuICByZXR1cm4gcXVldWUuc3RvcmUubGVuZ3RoID09PSAwO1xufVxuXG4vKipcbiAqIEFkZHMgYW4gaXRlbSB0byBhIHF1ZXVlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6Y3NwL3F1ZXVlXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AvcXVldWV+UXVldWV9IHF1ZXVlIFRoZSBxdWV1ZSB3aGljaCBpcyBoYXZpbmcgYW4gaXRlbSBhZGRlZFxuICogICAgIHRvIGl0LlxuICogQHBhcmFtIHsqfSBpdGVtIFRoZSBpdGVtIGJlaW5nIGFkZGVkIHRvIHRoZSBxdWV1ZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVucXVldWUocXVldWUsIGl0ZW0pIHtcbiAgcXVldWUuc3RvcmUucHVzaChpdGVtKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhIHF1ZXVlIGFuZCByZXR1cm5zIHRoYXQgaXRlbS4gSWYgdGhlIHJlbW92YWwgY2F1c2VzIHRoZVxuICogYW1vdW50IG9mIGVtcHR5IHNwYWNlIGF0IHRoZSBoZWFkIG9mIHRoZSBiYWNraW5nIHN0b3JlIHRvIGV4Y2VlZCBhIHRocmVzaG9sZCxcbiAqIHRoYXQgZW1wdHkgc3BhY2UgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgd2hvc2Ugb2xkZXN0IGl0ZW0gaXMgdG8gYmVcbiAqICAgICByZW1vdmVkLlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBzdG9yZWQgaXRlbSBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZXF1ZXVlKHF1ZXVlKSB7XG4gIGlmIChxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRU1QVFk7XG4gIH1cblxuICBjb25zdCBpdGVtID0gcXVldWUuc3RvcmVbcXVldWUucG9pbnRlcl07XG4gIC8vIFJlbW92ZXMgdGhlIGl0ZW1zIGluIHRoZSBiYWNraW5nIHN0b3JlIGJlZm9yZSB0aGUgY3VycmVudCBwb2ludGVyLCBpZiB0aGVyZVxuICAvLyBpcyBlbm91Z2ggXCJlbXB0eVwiIHNwYWNlIGJlZm9yZSB0aGUgcG9pbnRlciB0byBqdXN0aWZ5IGl0IChpLmUuLCB0aGUgdW51c2VkXG4gIC8vIHBvcnRpb24gaXMgYXQgbGVhc3QgaGFsZiBhcyBsYXJnZSBhcyB0aGUgdXNlZCBwb3J0aW9uKVxuICBpZiAoKytxdWV1ZS5wb2ludGVyICogMiA+PSBxdWV1ZS5zdG9yZS5sZW5ndGgpIHtcbiAgICBxdWV1ZS5zdG9yZSA9IHF1ZXVlLnN0b3JlLnNsaWNlKHF1ZXVlLnBvaW50ZXIpO1xuICAgIHF1ZXVlLnBvaW50ZXIgPSAwO1xuICB9XG4gIHJldHVybiBpdGVtO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgaXRlbSBpbiBhIHF1ZXVlIHdpdGhvdXQgcmVtb3ZpbmcgaXQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpjc3AvcXVldWVcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC9xdWV1ZX5RdWV1ZX0gcXVldWUgVGhlIHF1ZXVlIHdob3NlIG9sZGVzdCBpdGVtIGlzIHRvIGJlXG4gKiAgICAgcGVla2VkIGF0LlxuICogQHJldHVybiB7Kn0gVGhlIG9sZGVzdCBpdGVtIHN0b3JlZCBpbiB0aGUgcXVldWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwZWVrKHF1ZXVlKSB7XG4gIHJldHVybiBxdWV1ZS5zdG9yZS5sZW5ndGggPT09IDAgPyBFTVBUWSA6IHF1ZXVlLnN0b3JlW3F1ZXVlLnBvaW50ZXJdO1xufVxuXG4vKipcbiAqIEZpbHRlcnMgb3V0IGFueSBpdGVtIGluIGEgcXVldWUgdGhhdCBkb2VzIG5vdCBjYXVzZSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlXG4gKiBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgIHdoZW4gcGFzc2VkIHRoYXQgaXRlbS4gVGhpcyBpcyBub3QgZXhhY3RseSBhXG4gKiBnZW5lcmFsIHB1cnBvc2UgcXVldWUgb3BlcmF0aW9uLCBidXQgd2UgbmVlZCBpdCB3aXRoIGNoYW5uZWxzIHRoYXQgd2lsbFxuICogb2NjYXNpb25hbGx5IHdhbnQgdG8gZ2V0IHJpZCBvZiBpbmFjdGl2ZSBoYW5kbGVycy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmNzcC9xdWV1ZVxuICogQHBhcmFtIHttb2R1bGU6Y3NwL3F1ZXVlflF1ZXVlfSBxdWV1ZSBUaGUgcXVldWUgYmVpbmcgZmlsdGVyZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIGFuXG4gKiAgICAgZWxlbWVudCByZW1haW5zIGluIHRoZSBxdWV1ZS5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyKHF1ZXVlLCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGVuZCA9IGNvdW50KHF1ZXVlKTsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlcXVldWUocXVldWUpO1xuICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgIGVucXVldWUocXVldWUsIGl0ZW0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBFTVBUWSxcbiAgcXVldWUsXG4gIGlzUXVldWUsXG4gIGNvdW50LFxuICBpc0VtcHR5LFxuICBlbnF1ZXVlLFxuICBkZXF1ZXVlLFxuICBwZWVrLFxuICBmaWx0ZXJcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiB1dGlsaXR5IGZ1bmN0aW9ucyB0aGF0IGdpdmUgb25lIG9yIG1vcmUgY2hhbm5lbHMgc29tZSBleHRyYVxuICogZnVuY3Rpb25hbGl0eS4gRWFjaCBvZiB0aGVzZSBhY2NlcHQgb25lIG9yIG1vcmUge0BsaW5rIG1vZHVsZTpjc3AuQ2hhbm5lbH1cbiAqIG9iamVjdHMgYW5kIHRoZW4gY29tYmluZSBvciBtYW5pcHVsYXRlIHRoZW0gaW4gKGhvcGVmdWxseSkgdXNlZnVsIHdheXMsIHN1Y2hcbiAqIGFzIG1lcmdpbmcgdGhlbSwgc3BsaXR0aW5nIHRoZW0sIHJlZHVjaW5nIHZhbHVlcyB0aGV5IHJlY2VpdmUgdG8gYSBzaW5nbGVcbiAqIHZhbHVlLCBvciB0aHJvdHRsaW5nIHRoZW0gc28gdGhhdCB0aGV5IG9ubHkgcHJvZHVjZSBvbmUgcmVzdWx0IGluIGEgZ2l2ZW5cbiAqIHRpbWUgcGVyaW9kLlxuICpcbiAqIEBtb2R1bGUgb3BzXG4gKi9cblxuZXhwb3J0IHtcbiAgbWFwLFxuICBtZXJnZSxcbiAgcGFydGl0aW9uLFxuICBwaXBlLFxuICBzcGxpdCxcbiAgdGFwLFxuICB1bnRhcCxcbiAgdW50YXBBbGxcbn0gZnJvbSBcIm1vZHVsZXMvZmxvd1wiO1xuZXhwb3J0IHsgcmVkdWNlLCB0b0NoYW5uZWwsIHRvQXJyYXkgfSBmcm9tIFwibW9kdWxlcy9jb252ZXJzaW9uXCI7XG5leHBvcnQgeyBkZWJvdW5jZSwgdGhyb3R0bGUgfSBmcm9tIFwibW9kdWxlcy90aW1pbmdcIjtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBzaW5nbGUgdmFsdWUgYW5kLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGF0IHZhbHVlXG4gKiBtZWV0cyB0aGUgZnVuY3Rpb24ncyBjcml0ZXJpYSBmb3IgcGFzc2luZywgcmV0dXJucyBgdHJ1ZWAgb3IgYGZhbHNlYC5cbiAqXG4gKiBAY2FsbGJhY2sgUHJlZGljYXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC4gV2hldGhlciBvciBub3QgdGhlIHZhbHVlIHBhc3NlcyB0aGUgdGVzdFxuICogICAgIGRlcGVuZHMgb24gdGhlIGNyaXRlcmlhIGVzdGFibGlzaGVkIGJ5IHRoZSBwcmVkaWNhdGUuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBwYXNzZXMgb3IgYGZhbHNlYCBpZiBpdCBkb2Vzbid0LlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IG1hcHMgaXRzIGlucHV0KHMpIHRvIGFuIG91dHB1dCB2YWx1ZS4gSXQgdGFrZXMgYSB2YXJpYWJsZVxuICogbnVtYmVyIG9mIGlucHV0IHZhbHVlcyBhbmQgY2FsY3VsYXRlcyBhbiBvdXRwdXQgdmFsdWUgZnJvbSB0aGVtLlxuICpcbiAqIEBjYWxsYmFjayBNYXBwZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBUaGUgaW5wdXQgdmFsdWVzLlxuICogQHJldHVybiB7Kn0gQW4gb3V0cHV0IHZhbHVlIGNhbGN1bGF0ZWQgZnJvbSB0aGUgaW5wdXQgdmFsdWVzLlxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGludGVncmF0ZXMgb25lIG9mIGl0cyB2YWx1ZXMgaW50byB0aGUgb3RoZXIuIEl0J3MgdXNlZCBmb3JcbiAqIHJlZHVjaW5nIGNoYW5uZWwgdmFsdWVzIGludG8gYSBzaW5nbGUgdmFsdWUuXG4gKlxuICogQGNhbGxiYWNrIFJlZHVjZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgY3VycmVudCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSB0aGF0IG5lZWRzIHRvIGJlIGludGVncmF0ZWQgaW50byB0aGVcbiAqICAgICBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEByZXR1cm4geyp9IEEgbmV3IGFjY3VtdWxhdGVkIHZhbHVlLCByZXN1bHRpbmcgZnJvbSBpbnRlZ3JhdGluZyBgdmFsdWVgIGludG9cbiAqICAgICB0aGUgb3JpZ2luYWwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zIHVzZWQgYnkgbW9yZSB0aGFuIG9uZSBvdGhlciBtb2R1bGUuXG4gKlxuICogQG1vZHVsZSBvcHMvY29tbW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWx1ZSBwYXNzZWQgaXMgYSBmaW5pdGUgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBFaXRoZXIgYHRydWVgIGlmIHRoZSB2YWx1ZSBpcyBhIGZpbml0ZSBudW1iZXIgb3IgYGZhbHNlYFxuICogICAgIGlmIGl0IGlzIG5vdC5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgJiYgaXNGaW5pdGUoeCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyoqXG4gKiBBIHNldCBvZiBjaGFubmVsIHV0aWxpdGllcyBmb3IgY29udmVydGluZyBjaGFubmVscyBpbnRvIG90aGVyIGtpbmRzIG9mIGRhdGEsXG4gKiBhbmQgdmljZSB2ZXJzYS5cbiAqXG4gKiBAbW9kdWxlIG9wcy9jb252ZXJzaW9uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCBzZW5kQXN5bmMsIGNsb3NlIH0gZnJvbSBcIkBjaGFua28vY3NwXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNpbmdsZSB2YWx1ZSBmcm9tIGEgY2hhbm5lbCBieSBydW5uaW5nIGl0cyB2YWx1ZXMgdGhyb3VnaCBhXG4gKiByZWR1Y2luZyBmdW5jdGlvbi5cbiAqXG4gKiBGb3IgZXZlcnkgdmFsdWUgcHV0IG9udG8gdGhlIGlucHV0IGNoYW5uZWwsIHRoZSByZWR1Y2luZyBmdW5jdGlvbiBpcyBjYWxsZWRcbiAqIHdpdGggdHdvIHBhcmFtZXRlcnM6IHRoZSBhY2N1bXVsYXRvciB0aGF0IGhvbGRzIHRoZSByZXN1bHQgb2YgdGhlIHJlZHVjdGlvblxuICogc28gZmFyLCBhbmQgdGhlIG5ldyBpbnB1dCB2YWx1ZS4gVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGFjY3VtdWxhdG9yIGlzIHRoZVxuICogdGhpcmQgcGFyYW1ldGVyIHRvIGByZWR1Y2VgLiBUaGUgcmVkdWN0aW9uIGlzIG5vdCBjb21wbGV0ZSB1bnRpbCB0aGUgaW5wdXRcbiAqIGNoYW5uZWwgY2xvc2VzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIGNoYW5uZWwuIFdoZW4gdGhlIGZpbmFsIHJlZHVjZWQgdmFsdWUgaXMgcHJvZHVjZWQsIGl0XG4gKiBpcyBwdXQgb250byB0aGlzIGNoYW5uZWwsIGFuZCB3aGVuIHRoYXQgdmFsdWUgaXMgdGFrZW4gZnJvbSBpdCwgdGhlIGNoYW5uZWxcbiAqIGlzIGNsb3NlZC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyByZWR1Y2UgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3Qgb3V0cHV0ID0gcmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MgKyB2YWx1ZSwgaW5wdXQsIDApO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMSk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAzKTtcbiAqICAgY2xvc2UoaW5wdXQpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWN2KG91dHB1dCk7XG4gKiAgIGNvbnNvbGUubG9nKG91dHB1dCk7ICAgICAgICAgICAgICAgICAgLy8gLT4gNlxuICogfSk7XG4gKlxuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoZSBpbnB1dCBjaGFubmVsICptdXN0KiBiZSBjbG9zZWQgYXQgc29tZSBwb2ludCwgb3Igbm8gdmFsdWUgd2lsbFxuICogZXZlciBhcHBlYXIgb24gdGhlIG91dHB1dCBjaGFubmVsLiBUaGUgY2xvc2luZyBvZiB0aGUgY2hhbm5lbCBpcyB3aGF0XG4gKiBzaWduaWZpZXMgdGhhdCB0aGUgcmVkdWN0aW9uIHNob3VsZCBiZSBjb21wbGV0ZWQuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOm9wcy5SZWR1Y2VyfSBmbiBUaGUgcmVkdWNlciBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgdHVybmluZ1xuICogICAgIHRoZSBzZXJpZXMgb2YgY2hhbm5lbCB2YWx1ZXMgaW50byBhIHNpbmdsZSBvdXRwdXQgdmFsdWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gY2hhbm5lbCBUaGUgY2hhbm5lbCB3aG9zZSB2YWx1ZXMgYXJlIGJlaW5nXG4gKiAgICAgcmVkdWNlZCBpbnRvIGEgc2luZ2xlIG91dHB1dCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gaW5pdCBUaGUgaW5pdGlhbCB2YWx1ZSB0byBmZWVkIGludG8gdGhlIHJlZHVjZXIgZnVuY3Rpb24gZm9yIHRoZVxuICogICAgIGZpcnN0IHJlZHVjdGlvbiBzdGVwLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBBIGNoYW5uZWwgdGhhdCB3aWxsLCB3aGVuIHRoZSBpbnB1dCBjaGFubmVsXG4gKiAgICAgY2xvc2VzLCBoYXZlIHRoZSByZWR1Y2VkIHZhbHVlIHB1dCBpbnRvIGl0LiBXaGVuIHRoaXMgdmFsdWUgaXMgdGFrZW4sIHRoZVxuICogICAgIGNoYW5uZWwgd2lsbCBhdXRvbWF0aWNhbGx5IGNsb3NlLlxuICovXG5mdW5jdGlvbiByZWR1Y2UoZm4sIGNoYW5uZWwsIGluaXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gY2hhbigpO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBsZXQgYWNjID0gaW5pdDtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIGNoYW5uZWwpIHtcbiAgICAgIGFjYyA9IGZuKGFjYywgdmFsdWUpO1xuICAgIH1cbiAgICBzZW5kQXN5bmMob3V0cHV0LCBhY2MsICgpID0+IGNsb3NlKG91dHB1dCkpO1xuICB9KTtcblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKipcbiAqIFNlbmRzIGFsbCB2YWx1ZXMgZnJvbSBhbiBpdGVyYWJsZSB0byB0aGUgc3VwcGxpZWQgY2hhbm5lbC5cbiAqXG4gKiBJZiBubyBjaGFubmVsIGlzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLCBhIG5ldyBjaGFubmVsIGlzIGNyZWF0ZWQuIEluXG4gKiBlZmZlY3QsIHRoaXMgZGlyZWN0bHkgY29udmVydHMgYW4gaXRlcmFibGUgaW50byBhIGNoYW5uZWwgd2l0aCB0aGUgc2FtZVxuICogdmFsdWVzIG9uIGl0LlxuICpcbiAqIFRoZSBjaGFubmVsIGlzIGNsb3NlZCBhZnRlciB0aGUgZmluYWwgaXRlcmFibGUgdmFsdWUgaXMgc2VudCB0byBpdC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhbnkgSmF2YVNjcmlwdCBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBpdGVyYWJsZVxuICogcHJvdG9jb2wuIEluIG90aGVyIHdvcmRzLCBpZiBpdCB3b3JrcyBpbiBhIGBmb3IuLi5vZmAgc3RhdGVtZW50LCBpdCB3aWxsIHdvcmtcbiAqIGhlcmUuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgcmVjdiwgaXNDbG9zZWQgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgdG9DaGFubmVsIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IFsxLCAyLCAzXTtcbiAqIGNvbnN0IG91dHB1dCA9IHRvQ2hhbm5lbChpbnB1dCk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMlxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gM1xuICogICBjb25zb2xlLmxvZyhpc0Nsb3NlZChvdXRwdXQpKTsgICAgICAgLy8gLT4gdHJ1ZVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHtpdGVyYWJsZX0gaXRlcmFibGUgVGhlIGl0ZXJhYmxlIGNvbnRhaW5pbmcgdGhlIHZhbHVlcyB0byBiZSBzZW50IHRvXG4gKiAgICAgdGhlIGNoYW5uZWwuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gW2NoYW5uZWxdIFRoZSBjaGFubmVsIG9udG8gd2hpY2ggdG8gcHV0IGFsbCBvZlxuICogICAgIHRoZSBhcnJheSBlbGVtZW50cy4gSWYgdGhpcyBpcyBub3QgcHJlc2VudCwgYSBuZXcgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gdGhlIGNoYW5uZWwgb250byB3aGljaCB0aGUgYXJyYXkgZWxlbWVudHMgYXJlXG4gKiAgICAgcHV0LiBUaGlzIGlzIHRoZSBzYW1lIGFzIHRoZSBpbnB1dCBjaGFubmVsLCBidXQgaWYgbm8gaW5wdXQgY2hhbm5lbCBpc1xuICogICAgIHNwZWNpZmllZCwgdGhpcyB3aWxsIGJlIGEgbmV3IGNoYW5uZWwuIEl0IHdpbGwgY2xvc2Ugd2hlbiB0aGUgZmluYWwgdmFsdWVcbiAqICAgICBpcyB0YWtlbiBmcm9tIGl0LlxuICovXG5mdW5jdGlvbiB0b0NoYW5uZWwoaXRlcmFibGUsIGNoYW5uZWwgPSBjaGFuKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVyYWJsZSkge1xuICAgICAgYXdhaXQgc2VuZChjaGFubmVsLCBpdGVtKTtcbiAgICB9XG4gICAgY2xvc2UoY2hhbm5lbCk7XG4gIH0pO1xuXG4gIHJldHVybiBjaGFubmVsO1xufVxuXG4vKipcbiAqIFJlY2VpdmVzIGFsbCBvZiB0aGUgdmFsdWVzIGZyb20gYSBjaGFubmVsIGFuZCBwdXNoZXMgdGhlbSBpbnRvIGFuIGFycmF5LlxuICpcbiAqIElmIG5vIGFycmF5IGlzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLCBhIG5ldyAoZW1wdHkpIG9uZSBpcyBjcmVhdGVkLiBJblxuICogZWZmZWN0LCB0aGlzIGRpcmVjdGx5IGNvbnZlcnRzIGEgY2hhbm5lbCBpbnRvIGFuIGFycmF5IHdpdGggdGhlIHNhbWUgdmFsdWVzLlxuICogRWl0aGVyIHdheSwgdGhpcyBvcGVyYXRpb24gY2Fubm90IGNvbXBsZXRlIHVudGlsIHRoZSBpbnB1dCBjaGFubmVsIGlzIGNsb3NlZC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBjaGFubmVsLiBXaGVuIHRoZSBmaW5hbCBhcnJheSBpcyBwcm9kdWNlZCwgaXQgaXMgc2VudFxuICogdG8gdGhpcyBjaGFubmVsLCBhbmQgd2hlbiB0aGF0IHZhbHVlIGlzIHJlY2VpdmVkIGZyb20gaXQsIHRoZSBjaGFubmVsIGlzXG4gKiBjbG9zZWQuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBnbywgY2hhbiwgc2VuZCwgcmVjdiwgY2xvc2UgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCBvdXRwdXQgPSB0b0FycmF5KGlucHV0KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVjdihvdXRwdXQpO1xuICogICBjb25zb2xlLmxvZyhyZXN1bHQpOyAgICAgICAgICAgICAgICAgICAgIC8vIC0+IFsxLCAyLCAzXVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGlucHV0IGNoYW5uZWwgKm11c3QqIGJlIGNsb3NlZCBhdCBzb21lIHBvaW50LCBvciBubyB2YWx1ZSB3aWxsXG4gKiBldmVyIGFwcGVhciBvbiB0aGUgb3V0cHV0IGNoYW5uZWwuIFRoZSBjbG9zaW5nIG9mIHRoZSBjaGFubmVsIGlzIHdoYXRcbiAqIHNpZ25pZmllcyB0aGF0IGFsbCBvZiB0aGUgdmFsdWVzIG5lZWRlZCB0byBtYWtlIHRoZSBhcnJheSBhcmUgbm93IGF2YWlsYWJsZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGNoYW5uZWwgVGhlIGNoYW5uZWwgZnJvbSB3aGljaCB2YWx1ZXMgYXJlXG4gKiAgICAgcmVjZWl2ZWQgdG8gcHV0IGludG8gdGhlIGFycmF5LlxuICogQHBhcmFtIHthcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gcHV0IHRoZSBjaGFubmVsIHZhbHVlcyBpbnRvLiBJZiB0aGlzIGlzXG4gKiAgICAgbm90IHByZXNlbnQsIGEgbmV3LCBlbXB0eSBhcnJheSB3aWxsIGJlIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IEEgY2hhbm5lbCB0aGF0IHdpbGwsIHdoZW4gdGhlIGlucHV0IGNoYW5uZWxcbiAqICAgICBjbG9zZXMsIGhhdmUgdGhlIGFycmF5IG9mIGNoYW5uZWwgdmFsdWVzIHB1dCBvbnRvIGl0LiBXaGVuIHRoaXMgYXJyYXkgaXNcbiAqICAgICByZWNlaXZlZCwgdGhlIGNoYW5uZWwgd2lsbCBhdXRvbWF0aWNhbGx5IGNsb3NlLlxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoYW5uZWwsIGFycmF5ID0gW10pIHtcbiAgcmV0dXJuIHJlZHVjZShcbiAgICAoYWNjLCBpbnB1dCkgPT4ge1xuICAgICAgYWNjLnB1c2goaW5wdXQpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LFxuICAgIGNoYW5uZWwsXG4gICAgYXJyYXlcbiAgKTtcbn1cblxuZXhwb3J0IHsgcmVkdWNlLCB0b0NoYW5uZWwsIHRvQXJyYXkgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGNoYW5uZWwgb3BlcmF0aW9uIGZ1bmN0aW9ucyBmb3Igcm91dGluZyBjaGFubmVscyB0byBvdGhlciBjaGFubmVsc1xuICogaW4gZGlmZmVyZW50IHdheXMuXG4gKlxuICogSW4gZWFjaCBvZiB0aGVzZSBmdW5jdGlvbnMsIHRoZSBzb3VyY2UgY2hhbm5lbCB3aWxsIG5vdCBiZSBhdmFpbGFibGUgdG8gYmVcbiAqIHRha2VuIGZyb20sIGFzIGFsbCBvZiB0aGUgc291cmNlIGNoYW5uZWxzIHdpbGwgaGF2ZSB0aGVpciB2YWx1ZXMgdGFrZW4gYnkgdGhlXG4gKiBwcm9jZXNzZXMgd2l0aGluIHRoZXNlIGZ1bmN0aW9ucy4gVGhlIGxvbmUgZXhjZXB0aW9uIGlzIGB0YXBgLCB3aGVyZSB0aGVcbiAqIHJlZ3VsYXIgZnVuY3Rpb24gb2YgdGhlIHNvdXJjZSBjaGFubmVsIHdpbGwgYmUgcmVzdG9yZWQgaWYgYWxsIHRhcHMgYXJlXG4gKiByZW1vdmVkLiBFdmVuIHNvLCB3aGlsZSBhdCBsZWFzdCBvbmUgdGFwIGlzIGluIHBsYWNlLCB0aGUgc291cmNlIGNoYW5uZWxcbiAqIGNhbm5vdCBiZSB0YWtlbiBmcm9tLlxuICpcbiAqIEBtb2R1bGUgb3BzL2Zsb3dcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IHtcbiAgZ28sXG4gIGNoYW4sXG4gIHNlbmQsXG4gIHJlY3YsXG4gIHNlbGVjdCxcbiAgc2VuZEFzeW5jLFxuICByZWN2QXN5bmMsXG4gIGNsb3NlLFxuICBDTE9TRURcbn0gZnJvbSBcIkBjaGFua28vY3NwXCI7XG5cbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSBcIm1vZHVsZXMvY29tbW9uXCI7XG5cbmNvbnN0IFRBUFMgPSBTeW1ib2woXCJtdWx0aXRhcC90YXBzXCIpO1xuXG4vKipcbiAqIFBpcGVzIHRoZSB2YWx1ZXMgZnJvbSBvbmUgY2hhbm5lbCB0byBhbm90aGVyIGNoYW5uZWwuXG4gKlxuICogVGhpcyB0aWVzIHR3byBjaGFubmVscyB0b2dldGhlciBzbyB0aGF0IHB1dHMgb24gdGhlIHNvdXJjZSBjaGFubmVsIGNhbiBiZVxuICogdGFrZW4gb2ZmIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLiBUaGlzIGRvZXMgbm90IGR1cGxpY2F0ZSB2YWx1ZXMgaW4gYW55IHdheTtcbiAqIGlmIGFub3RoZXIgcHJvY2VzcyB0YWtlcyBhIHZhbHVlIG9mZiB0aGUgc291cmNlIGNoYW5uZWwsIGl0IHdpbGwgbmV2ZXIgYXBwZWFyXG4gKiBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCBub3Qgd2FudCB0byB0YWtlIHZhbHVlc1xuICogb2ZmIGEgY2hhbm5lbCBvbmNlIGl0J3MgcGlwZWQgdG8gYW5vdGhlciBjaGFubmVsLCBzaW5jZSBpdCdzIGRpZmZpY3VsdCB0b1xuICoga25vdyB3aGljaCB2YWx1ZXMgd2lsbCBnbyB0byB3aGljaCBjaGFubmVsLlxuICpcbiAqIENsb3NpbmcgZWl0aGVyIGNoYW5uZWwgd2lsbCBicmVhayB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSB0d28uIElmIHRoZVxuICogc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLCB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aWxsIGJ5IGRlZmF1bHQgYWxzbyBiZVxuICogY2xvc2VkLiBIb3dldmVyLCBwYXNzaW5nIGB0cnVlYCBhcyB0aGUgdGhpcmQgcGFyYW1ldGVyIHdpbGwgY2F1c2UgdGhlXG4gKiBkZXN0aW5hdGlvbiBjaGFubmVsIHRvIHJlbWFpbiBvcGVuIGV2ZW4gd2hlbiB0aGUgc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkXG4gKiAodGhlIGNvbm5lY3Rpb24gaXMgc3RpbGwgYnJva2VuIGhvd2V2ZXIpLlxuICpcbiAqIEJlY2F1c2Ugb2YgdGhlIGFiaWxpdHkgdG8gbGVhdmUgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgb3BlbiwgYSBwb3NzaWJsZSB1c2VcbiAqIGNhc2UgZm9yIHRoaXMgZnVuY3Rpb24gaXMgdG8gd3JhcCB0aGUgZGVzdGluYXRpb24gY2hhbm5lbChzKSBvZiBvbmUgb2YgdGhlXG4gKiBvdGhlciBmbG93IGNvbnRyb2wgZnVuY3Rpb25zIGJlbG93IHRvIGhhdmUgYSBjaGFubmVsIHRoYXQgc3Vydml2ZXMgdGhlIHNvdXJjZVxuICogY2hhbm5lbCBjbG9zaW5nLiBUaGUgcmVzdCBvZiB0aG9zZSBmdW5jdGlvbnMgKGFzaWRlIGZyb20gdGhlIHNwZWNpYWwtY2FzZVxuICogYHtAbGluayBtb2R1bGU6b3BzLnRhcHx0YXB9YCkgYXV0b21hdGljYWxseSBjbG9zZSB0aGVpciBkZXN0aW5hdGlvbiBjaGFubmVsc1xuICogd2hlbiB0aGUgc291cmNlIGNoYW5uZWxzIGNsb3NlLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YsIGNsb3NlLCBpc0Nsb3NlZCB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IHBpcGUoaW5wdXQsIGNoYW4oKSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGNsb3NlKGlucHV0KTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAxXG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMlxuICogICBjb25zb2xlLmxvZyhpc0Nsb3NlZChvdXRwdXQpKTsgICAgICAgIC8vIC0+IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IGRlc3QgVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtrZWVwT3Blbj1mYWxzZV0gQSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIGRlc3RpbmF0aW9uXG4gKiAgICAgY2hhbm5lbCBzaG91bGQgYmUga2VwdCBvcGVuIGFmdGVyIHRoZSBzb3VyY2UgY2hhbm5lbCBjbG9zZXMuIEJ5IGRlZmF1bHRcbiAqICAgICB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aWxsIGNsb3NlIHdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGNsb3Nlcy5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHBpcGUoc3JjLCBkc3QsIGtlZXBPcGVuID0gZmFsc2UpIHtcbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgaWYgKCFrZWVwT3Blbikge1xuICAgICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoIShhd2FpdCBzZW5kKGRzdCwgdmFsdWUpKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyB0d28gbmV3IGNoYW5uZWxzIGFuZCByb3V0ZXMgdmFsdWVzIGZyb20gYSBzb3VyY2UgY2hhbm5lbCB0byB0aGVtXG4gKiBhY2NvcmRpbmcgdG8gYSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKlxuICogVGhlIHN1cHBsaWVkIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBldmVyeSB2YWx1ZSB0aGF0IGlzIHB1dCBvbnRvIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwuIFRob3NlIHRoYXQgcmV0dXJuIGB0cnVlYCBhcmUgcm91dGVkIHRvIHRoZSBmaXJzdCBkZXN0aW5hdGlvblxuICogY2hhbm5lbDsgdGhvc2UgdGhhdCByZXR1cm4gYGZhbHNlYCBhcmUgcm91dGVkIHRvIHRoZSBzZWNvbmQuXG4gKlxuICogVGhlIG5ldyBjaGFubmVscyBhcmUgY3JlYXRlZCBieSB0aGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGJ1ZmZlciB2YWx1ZXNcbiAqIHBhc3NlZCBhcyB0aGUgdGhpcmQgYW5kIGZvdXJ0aCBwYXJhbWV0ZXJzLiBJZiBvbmUgb3IgYm90aCBvZiB0aGVzZSBhcmVcbiAqIG1pc3NpbmcsIGBudWxsYCwgb3IgYDBgLCB0aGUgY29ycmVzcG9uZGluZyBkZXN0aW5hdGlvbiBjaGFubmVsIGlzIHVuYnVmZmVyZWQuXG4gKiBJZiBvbmUgaXMgYSBwb3NpdGl2ZSBpbnRlZ2VyLCB0aGUgY29ycmVzcG9uZGluZyBjaGFubmVsIGlzIGJ1ZmZlcmVkIGJ5IGFcbiAqIGZpeGVkIGJ1ZmZlciBvZiB0aGF0IHNpemUuIElmIHRoZSBwYXJhbWV0ZXIgZm9yIGEgY2hhbm5lbCBpcyBhIGJ1ZmZlciwgdGhlblxuICogdGhhdCBidWZmZXIgaXMgdXNlZCB0byBidWZmZXIgdGhlIG5ldyBjaGFubmVsLlxuICpcbiAqIEJvdGggbmV3IGNoYW5uZWxzIGFyZSBjbG9zZWQgd2hlbiB0aGUgc291cmNlIGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCBjbG9zZSB9IGZyb20gXCJAY3NwXCI7XG4gKiBpbXBvcnQgeyBwYXJ0aXRpb24gfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0ID0gY2hhbigpO1xuICogY29uc3QgY3RybCA9IGNoYW4oKTtcbiAqIGNvbnN0IFtldmVuLCBvZGRdID0gcGFydGl0aW9uKHggPT4geCAlIDIgPT09IDAsIGlucHV0LCAzLCAzKTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAyKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMyk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDQpO1xuICogICBjbG9zZShpbnB1dCk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGZvciBhd2FpdCAoY29uc3QgdmFsdWUgb2YgZXZlbikge1xuICogICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAqICAgfVxuICogICBhd2FpdCBzZW5kKGN0cmwpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCByZWN2KGN0cmwpO1xuICogICBmb3IgYXdhaXQgKGNvbnN0IHZhbHVlIG9mIG9kZCkge1xuICogICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAqICAgfVxuICogfSk7XG4gKlxuICogLy8gVGhlIGBjdHJsYCBjaGFubmVsIGVuc3VyZXMgdGhhdCBhbGwgb2YgdGhlIHZhbHVlcyBvbiB0aGUgZXZlbiBjaGFubmVsIGFyZVxuICogLy8gcmVhZCBiZWZvcmUgYW55IG9mIHRoZSB2YWx1ZXMgb24gdGhlIG9kZCBjaGFubmVsIGFyZSAodGhpcyBpcyBvbmx5XG4gKiAvLyBwb3NzaWJsZSBiZWNhdXNlIHRoZSBvdXRwdXQgY2hhbm5lbHMgaGF2ZSBidWZmZXJzIGJpZyBlbm91Z2ggdG8gbWFrZSBzdXJlXG4gKiAvLyB0aGF0IG5vIHNlbmQgaXMgYmxvY2tlZCkuXG4gKiAvL1xuICogLy8gLT4gMlxuICogLy8gLT4gNFxuICogLy8gLT4gMVxuICogLy8gLT4gM1xuICogYGBgXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTpvcHNcbiAqIEBwYXJhbSB7bW9kdWxlOm9wcy5QcmVkaWNhdGV9IGZuIEEgcHJlZGljYXRlIGZ1bmN0aW9uIHVzZWQgdG8gdGVzdCBlYWNoIHZhbHVlXG4gKiBvbiB0aGUgaW5wdXQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBzcmMgVGhlIHNvdXJjZSBjaGFubmVsLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW3RCdWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0byBjcmVhdGUgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbCB3aGljaCByZWNlaXZlcyBhbGwgdmFsdWVzIHRoYXQgcGFzc2VkIHRoZSBwcmVkaWNhdGUuXG4gKiAgICAgSWYgdGhpcyBpcyBhIG51bWJlciwgYSB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGxcbiAqICAgICBiZSB1c2VkLiBJZiB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHBhcmFtIHsobnVtYmVyfG1vZHVsZTpjc3AuQnVmZmVyKX0gW2ZCdWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0byBjcmVhdGUgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbCB3aGljaCByZWNlaXZlcyBhbGwgdmFsdWVzIHRoYXQgZGlkIG5vdCBwYXNzIHRoZVxuICogICAgIHByZWRpY2F0ZS4gSWYgdGhpcyBpcyBhIG51bWJlciwgYSB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gb2YgdGhhdFxuICogICAgIHNpemUgd2lsbCBiZSB1c2VkLiBJZiB0aGlzIGlzIGAwYCBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZVxuICogICAgIHVuYnVmZmVyZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWxbXX0gQW4gYXJyYXkgb2YgdHdvIGNoYW5uZWxzLiBUaGUgZmlyc3QgaXMgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbCB3aXRoIGFsbCBvZiB0aGUgdmFsdWVzIHRoYXQgcGFzc2VkIHRoZSBwcmVkaWNhdGUsIHRoZVxuICogICAgIHNlY29uZCBpcyB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3aXRoIGFsbCBvZiB0aGUgdmFsdWVzIHRoYXQgZGlkIG5vdFxuICogICAgIHBhc3MgdGhlIHByZWRpY2F0ZS5cbiAqL1xuZnVuY3Rpb24gcGFydGl0aW9uKGZuLCBzcmMsIHRCdWZmZXIgPSAwLCBmQnVmZmVyID0gMCkge1xuICBjb25zdCB0RHN0ID0gY2hhbih0QnVmZmVyKTtcbiAgY29uc3QgZkRzdCA9IGNoYW4oZkJ1ZmZlcik7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgY2xvc2UodERzdCk7XG4gICAgICAgIGNsb3NlKGZEc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGF3YWl0IHNlbmQoZm4odmFsdWUpID8gdERzdCA6IGZEc3QsIHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbdERzdCwgZkRzdF07XG59XG5cbi8qKlxuICogTWVyZ2VzIG9uZSBvciBtb3JlIGNoYW5uZWxzIGludG8gYSBzaW5nbGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqXG4gKiBWYWx1ZXMgYXJlIGdpdmVuIHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGFzIHRoZXkgYXJlIHNlbnQgdG8gdGhlIHNvdXJjZVxuICogY2hhbm5lbHMuIElmIGBtZXJnZWAgaXMgY2FsbGVkIHdoZW4gdGhlcmUgYXJlIGFscmVhZHkgdmFsdWVzIG9uIG11bHRpcGxlXG4gKiBzb3VyY2UgY2hhbm5lbHMsIHRoZSBvcmRlciB0aGF0IHRoZXkncmUgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXNcbiAqIHJhbmRvbS5cbiAqXG4gKiBUaGUgZGVzdGluYXRpb24gY2hhbm5lbCBpcyBjcmVhdGVkIGJ5IHRoZSBmdW5jdGlvbiBiYXNlZCBvbiB0aGUgYnVmZmVyIHZhbHVlXG4gKiBwYXNzZWQgYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXIuIElmIHRoaXMgaXMgbWlzc2luZywgYG51bGxgLCBvciBgMGAsIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3MgYSBwb3NpdGl2ZSBpbnRlZ2VyLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgYnVmZmVyZWQgYnkgYSBmaXhlZCBidWZmZXIgb2YgdGhhdCBzaXplLiBJZiB0aGVcbiAqIHBhcmFtZXRlciBpcyBhIGJ1ZmZlciwgdGhlbiB0aGF0IGJ1ZmZlciBpcyB1c2VkIHRvIGJ1ZmZlciB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwuXG4gKlxuICogQXMgZWFjaCBzb3VyY2UgY2hhbm5lbCBjbG9zZXMsIGl0IGlzIHJlbW92ZWQgZnJvbSB0aGUgbWVyZ2UsIGxlYXZpbmcgdGhlXG4gKiBjaGFubmVscyB0aGF0IGFyZSBzdGlsbCBvcGVuIHRvIGNvbnRpbnVlIG1lcmdpbmcuIFdoZW4gKmFsbCogb2YgdGhlIHNvdXJjZVxuICogY2hhbm5lbHMgY2xvc2UsIHRoZW4gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgY2xvc2VkLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgZ28sIGNoYW4sIHNlbmQsIHJlY3YgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgbWVyZ2UgfSBmcm9tIFwiQG9wc1wiO1xuICpcbiAqIGNvbnN0IGlucHV0MSA9IGNoYW4oKTtcbiAqIGNvbnN0IGlucHV0MiA9IGNoYW4oKTtcbiAqIGNvbnN0IGlucHV0MyA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IG1lcmdlKFtpbnB1dDEsIGlucHV0MiwgaW5wdXQzXSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICAvLyBCZWNhdXNlIHdlJ3JlIHNlbmRpbmcgdG8gYWxsIHRocmVlIGNoYW5uZWxzIGluIHRoZSBzYW1lXG4gKiAgIC8vIHByb2Nlc3MsIHdlIGtub3cgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSB2YWx1ZXMgd2lsbCBiZVxuICogICAvLyBzZW50IHRvIHRoZSBvdXRwdXQgY2hhbm5lbDsgaW4gZ2VuZXJhbCwgd2Ugd29uJ3Qga25vdyB0aGlzXG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDIsIDIpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMyk7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3Yob3V0cHV0KSk7ICAgICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgIC8vIC0+IDJcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgICAvLyAtPiAzXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbFtdfSBzcmNzIEFuIGFycmF5IG9mIHNvdXJjZSBjaGFubmVscy5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtidWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0byBjcmVhdGUgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbC4gSWYgdGhpcyBpcyBhIG51bWJlciwgYVxuICogICAgIHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZSB1c2VkLiBJZiB0aGlzIGlzIGAwYFxuICogICAgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFRoZSBkZXN0aW5hdGlvbiBjaGFubmVsLCB3aGljaCB3aWxsIHJlY2VpdmUgYWxsXG4gKiAgICAgdmFsdWVzIHB1dCBvbnRvIGV2ZXJ5IHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBtZXJnZShzcmNzLCBidWZmZXIgPSAwKSB7XG4gIGNvbnN0IGRzdCA9IGNoYW4oYnVmZmVyKTtcbiAgY29uc3QgaW5wdXRzID0gc3Jjcy5zbGljZSgpO1xuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgdmFsdWUsIGNoYW5uZWwgfSA9IGF3YWl0IHNlbGVjdChpbnB1dHMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgaW5wdXRzLnNwbGljZShpbnB1dHMuaW5kZXhPZihjaGFubmVsKSwgMSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYXdhaXQgc2VuZChkc3QsIHZhbHVlKTtcbiAgICB9XG4gICAgY2xvc2UoZHN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBTcGxpdHMgYSBzaW5nbGUgY2hhbm5lbCBpbnRvIG11bHRpcGxlIGRlc3RpbmF0aW9uIGNoYW5uZWxzLCB3aXRoIGVhY2hcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgcmVjZWl2aW5nIGV2ZXJ5IHZhbHVlIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLlxuICpcbiAqIEV2ZXJ5IHBhcmFtZXRlciBhZnRlciB0aGUgZmlyc3QgcmVwcmVzZW50cyB0aGUgYnVmZmVyIGZyb20gYSBzaW5nbGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwuIEVhY2ggYDBgIG9yIGBudWxsYCB3aWxsIHByb2R1Y2UgYW4gdW5idWZmZXJlZCBjaGFubmVsLFxuICogd2hpbGUgZWFjaCBwb3NpdGl2ZSBpbnRlZ2VyIHdpbGwgcHJvZHVjZSBhIGNoYW5uZWwgYnVmZmVyZWQgYnkgYSBmaXhlZCBidWZmZXJcbiAqIG9mIHRoYXQgc2l6ZS4gRWFjaCBidWZmZXIgd2lsbCBwcm9kdWNlIGEgYnVmZmVyZWQgY2hhbm5lbCBiYWNrZWQgYnkgdGhhdFxuICogYnVmZmVyLiBJZiB0aGVyZSBhcmUgbm8gcGFyYW1ldGVycyBhZnRlciB0aGUgZmlyc3QsIHRoZW4gdHdvIHVuYnVmZmVyZWRcbiAqIGNoYW5uZWxzIHdpbGwgYmUgcHJvZHVjZWQgYXMgYSBkZWZhdWx0LlxuICpcbiAqIFdoZW4gdGhlIHNvdXJjZSBjaGFubmVsIGlzIGNsb3NlZCwgYWxsIGRlc3RpbmF0aW9uIGNoYW5uZWxzIHdpbGwgYWxzbyBiZVxuICogY2xvc2VkLiBIb3dldmVyLCBpZiBkZXN0aW5hdGlvbiBjaGFubmVscyBhcmUgY2xvc2VkLCB0aGV5IGRvIG5vdGhpbmcgdG8gdGhlXG4gKiBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kIH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHNwbGl0IH0gZnJvbSBcIkBvcHNcIjtcbiAqXG4gKiBjb25zdCBpbnB1dCA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dHMgPSBzcGxpdChpbnB1dCwgMyk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQsIDMpO1xuICogfSk7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBmb3IgYXdhaXQgKGNvbnN0IG91dHB1dCBvZiBvdXRwdXRzKSB7XG4gKiAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcbiAqICAgICAvLyAtPiAxXG4gKiAgICAgLy8gLT4gMlxuICogICAgIC8vIC0+IDNcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG1vdmVzIGl0cyB2YWx1ZXMgdG8gdGhlIG91dHB1dCBjaGFubmVscyBhc3luY2hyb25vdXNseS4gVGhpc1xuICogbWVhbnMgdGhhdCBldmVuIHdoZW4gdXNpbmcgdW5idWZmZXJlZCBjaGFubmVscywgaXQgaXMgbm90IG5lY2Vzc2FyeSBmb3IgYWxsXG4gKiBvdXRwdXQgY2hhbm5lbHMgdG8gYmUgcmVjZWl2ZWQgZnJvbSBiZWZvcmUgdGhlIG5leHQgc2VuZCB0byB0aGUgaW5wdXQgY2hhbm5lbFxuICogY2FuIGNvbXBsZXRlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7Li4uKG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtidWZmZXJzPTJdIFRoZSBidWZmZXJzIHVzZWQgdG8gY3JlYXRlXG4gKiAgICAgdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWxzLiBFYWNoIGVudHJ5IGlzIHRyZWF0ZWQgc2VwYXJhdGVseS4gSWYgb25lIGlzIGFcbiAqICAgICBudW1iZXIsIHRoZW4gYSB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcnxGaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplXG4gKiAgICAgd2lsbCBiZSB1c2VkLiBJZiBvbmUgaXMgYSBgMGAsIHRoZW4gdGhlIGNvcnJlc3BvbmRpbmcgY2hhbm5lbCB3aWxsIGJlXG4gKiAgICAgdW5idWZmZXJlZC4gKipFeGNlcHRpb246KiogaWYgYSBzaW5nbGUgbnVtYmVyIGlzIHBhc3NlZCwgdGhlbiB0aGF0IG51bWJlclxuICogICAgIG9mIHVuYnVmZXJyZWQgY2hhbm5lbHMgd2lsbCBiZSBjcmVhdGVkLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGRlZmF1bHQgaXMgdG9cbiAqICAgICBjcmVhdGUgdHdvIHVuYnVmZmVyZWQgY2hhbm5lbHMuIFRvIGNyZWF0ZSBhIHNpbmdsZSBjaGFubmVsIHdpdGggYSBmaXhlZFxuICogICAgIGJ1ZmZlciwgdXNlIGB7QGxpbmsgY3NwLmZpeGVkfGZpeGVkfWAgZXhwbGljaXRseS5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbFtdfSBBbiBhcnJheSBvZiBkZXN0aW5hdGlvbiBjaGFubmVscy5cbiAqL1xuZnVuY3Rpb24gc3BsaXQoc3JjLCAuLi5idWZmZXJzKSB7XG4gIGxldCBiZnMgPSBidWZmZXJzLmxlbmd0aCA9PT0gMCA/IFsyXSA6IGJ1ZmZlcnM7XG4gIGlmIChiZnMubGVuZ3RoID09PSAxICYmIGlzTnVtYmVyKGJmc1swXSkpIHtcbiAgICBjb25zdCBjb3VudCA9IGJmc1swXTtcbiAgICBiZnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGJmcy5wdXNoKDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRzdHMgPSBiZnMubWFwKGJmID0+IGNoYW4oYmYpKTtcbiAgY29uc3QgZG9uZSA9IGNoYW4oKTtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICBpZiAoLS1jb3VudCA9PT0gMCkge1xuICAgICAgc2VuZEFzeW5jKGRvbmUpO1xuICAgIH1cbiAgfVxuXG4gIGdvKGFzeW5jICgpID0+IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHJlY3Yoc3JjKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGZvciAoY29uc3QgZHN0IG9mIGRzdHMpIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb3VudCA9IGRzdHMubGVuZ3RoO1xuICAgICAgZm9yIChjb25zdCBkc3Qgb2YgZHN0cykge1xuICAgICAgICBzZW5kQXN5bmMoZHN0LCB2YWx1ZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgYXdhaXQgcmVjdihkb25lKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3RzO1xufVxuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gYWRkIHRoZSBhYmlsaXR5IHRvIGJlIHRhcHBlZCB0byBhIGNoYW5uZWwgdGhhdCBpcyBiZWluZ1xuICogdGFwcGVkLiBUaGlzIHdpbGwgYWRkIGEgc2luZ2xlIHByb3BlcnR5IHRvIHRoYXQgY2hhbm5lbCBvbmx5IChuYW1lZFxuICogJ0BAbXVsdGl0YXAvdGFwcycgc28gYXMgdG8gZGVjcmVhc2UgdGhlIGNoYW5jZSBvZiBjb2xsaXNpb24pLCBidXQgdGhlIHRhcHBpbmdcbiAqIGZ1bmN0aW9uYWxpdHkgaXRzZWxmIGlzIHByb3ZpZGVkIG91dHNpZGUgdGhlIGNoYW5uZWwgb2JqZWN0LiBUaGlzIG5ld1xuICogcHJvcGVydHkgaXMgYW4gYXJyYXkgb2YgdGhlIGNoYW5uZWxzIHRhcHBpbmcgdGhpcyBjaGFubmVsLCBhbmQgaXQgd2lsbCBiZVxuICogcmVtb3ZlZCBpZiBhbGwgdGFwcyBhcmUgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbCB0byBiZSB0YXBwZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtYWtlVGFwKHNyYykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3JjLCBUQVBTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBbXVxuICB9KTtcblxuICBjb25zdCBkb25lID0gY2hhbigpO1xuICBsZXQgY291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgIGlmICgtLWNvdW50ID09PSAwKSB7XG4gICAgICBzZW5kQXN5bmMoZG9uZSk7XG4gICAgfVxuICB9XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVjdihzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQgfHwgc3JjW1RBUFNdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgc3JjW1RBUFNdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY291bnQgPSBzcmNbVEFQU10ubGVuZ3RoO1xuICAgICAgZm9yIChjb25zdCB0YXAgb2Ygc3JjW1RBUFNdKSB7XG4gICAgICAgIHNlbmRBc3luYyh0YXAsIHZhbHVlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBhd2FpdCByZWN2KGRvbmUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVGFwcyBhIGNoYW5uZWwsIHNlbmRpbmcgYWxsIG9mIHRoZSB2YWx1ZXMgc2VudCB0byBpdCB0byB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwuXG4gKlxuICogQSBzb3VyY2UgY2hhbm5lbCBjYW4gYmUgdGFwcGVkIG11bHRpcGxlIHRpbWVzLCBhbmQgYWxsIG9mIHRoZSB0YXBwaW5nXG4gKiAoZGVzdGluYXRpb24pIGNoYW5uZWxzIHJlY2VpdmUgZWFjaCB2YWx1ZSBzZW50IHRvIHRoZSB0YXBwZWQgKHNvdXJjZSlcbiAqIGNoYW5uZWwuXG4gKlxuICogVGhpcyBpcyBkaWZmZXJlbnQgZnJvbSBge0BsaW5rIG1vZHVsZTpvcHMuc3BsaXR8c3BsaXR9YCBpbiB0aGF0IGl0J3NcbiAqIHRlbXBvcmFyeS4gQ2hhbm5lbHMgY2FuIHRhcCBhIGNoYW5uZWwgYW5kIHRoZW4gdW50YXAgaXQsIG11bHRpcGxlIHRpbWVzLCBhc1xuICogbmVlZGVkLiBJZiBhIHNvdXJjZSBjaGFubmVsIGhhcyBhbGwgb2YgaXRzIHRhcHMgcmVtb3ZlZCwgdGhlbiBpdCByZXZlcnRzIHRvIGFcbiAqIG5vcm1hbCBjaGFubmVsLCBqdXN0IGFzIGl0IHdhcyBiZWZvcmUgaXQgd2FzIHRhcHBlZC5cbiAqXG4gKiBBbHNvIHVubGlrZSBge0BsaW5rIG1vZHVsZTpvcHMuc3BsaXR8c3BsaXR9YCwgZWFjaCBjYWxsIGNhbiBvbmx5IHRhcCBvbmNlLlxuICogRm9yIG11bHRpcGxlIGNoYW5uZWxzIHRvIHRhcCBhIHNvdXJjZSBjaGFubmVsLCBgdGFwYCBoYXMgdG8gYmUgY2FsbGVkXG4gKiBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBDbG9zaW5nIGVpdGhlciB0aGUgc291cmNlIG9yIGFueSBvZiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbHMgaGFzIG5vIGVmZmVjdCBvblxuICogYW55IG9mIHRoZSBvdGhlciBjaGFubmVscy5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2IH0gZnJvbSBcIkBjc3BcIjtcbiAqIGltcG9ydCB7IHRhcCB9IGZyb20gXCJAb3BzXCI7XG4gKlxuICogY29uc3QgaW5wdXQgPSBjaGFuKCk7XG4gKiBjb25zdCB0YXBwZXIgPSBjaGFuKCk7XG4gKiB0YXAoaW5wdXQsIHRhcHBlcik7XG4gKlxuICogZ28oYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCBzZW5kKGlucHV0LCAxKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dCwgMik7XG4gKiB9KTtcbiAqXG4gKiBnbyhhc3luYyAoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGF3YWl0IHJlY3YodGFwcGVyKSk7ICAgLy8gLT4gMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KHRhcHBlcikpOyAgIC8vIC0+IDJcbiAqIH0pO1xuICpcbiAqIGBgYFxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBjaGFubmVsIHRvIGJlIHRhcHBlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBbZGVzdF0gVGhlIGNoYW5uZWwgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwuIElmXG4gKiAgICAgdGhpcyBpcyBub3QgcHJlc2VudCwgYSBuZXcgdW5idWZmZXJlZCBjaGFubmVsIHdpbGwgYmUgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH0gVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIFRoaXMgaXMgdGhlIHNhbWUgYXMgdGhlXG4gKiAgICAgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50OyBvdGhlcndpc2UgaXQgaXMgdGhlIG5ld2x5LWNyZWF0ZWQgY2hhbm5lbFxuICogICAgIHRhcHBpbmcgdGhlIHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB0YXAoc3JjLCBkc3QgPSBjaGFuKCkpIHtcbiAgaWYgKCFzcmNbVEFQU10pIHtcbiAgICBtYWtlVGFwKHNyYyk7XG4gIH1cbiAgaWYgKCFzcmNbVEFQU10uaW5jbHVkZXMoZHN0KSkge1xuICAgIHNyY1tUQVBTXS5wdXNoKGRzdCk7XG4gIH1cbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqXG4gKiBVbnRhcHMgYSBwcmV2aW91c2x5IHRhcHBpbmcgZGVzdGluYXRpb24gY2hhbm5lbCBmcm9tIGl0cyBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBUaGlzIHJlbW92ZXMgYSBwcmV2aW91c2x5IGNyZWF0ZWQgdGFwLiBUaGUgZGVzdGluYXRpb24gKHRhcHBpbmcpIGNoYW5uZWwgd2lsbFxuICogc3RvcCByZWNlaXZpbmcgdGhlIHZhbHVlcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqXG4gKiBJZiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB3YXMgbm90LCBpbiBmYWN0LCB0YXBwaW5nIHRoZSBzb3VyY2UgY2hhbm5lbCwgdGhpc1xuICogZnVuY3Rpb24gd2lsbCBkbyBub3RoaW5nLiBJZiBhbGwgdGFwcyBhcmUgcmVtb3ZlZCwgdGhlIHNvdXJjZSBjaGFubmVsIHJldmVydHNcbiAqIHRvIG5vcm1hbCAoaS5lLiwgaXQgbm8gbG9uZ2VyIGhhcyB0aGUgdGFwcGluZyBjb2RlIGFwcGxpZWQgdG8gaXQgYW5kIGNhbiBiZVxuICogdGFrZW4gZnJvbSBhcyBub3JtYWwpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSB0YXBwZWQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBkZXN0IFRoZSBjaGFubmVsIHRoYXQgaXMgdGFwcGluZyB0aGUgc291cmNlXG4gKiAgICAgY2hhbm5lbCB0aGF0IHNob3VsZCBubyBsb25nZXIgYmUgdGFwcGluZyB0aGUgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHVudGFwKHNyYywgZHN0KSB7XG4gIGNvbnN0IHRhcHMgPSBzcmNbVEFQU107XG4gIGlmICh0YXBzKSB7XG4gICAgY29uc3QgaW5kZXggPSB0YXBzLmluZGV4T2YoZHN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0YXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBpZiAodGFwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2VuZEFzeW5jKHNyYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgdGFwcyBmcm9tIGEgc291cmNlIGNoYW5uZWwuXG4gKlxuICogVGhlIHByZXZpb3VzbHktdGFwcGVkIGNoYW5uZWwgcmV2ZXJ0cyB0byBhIG5vcm1hbCBjaGFubmVsLCB3aGlsZSBhbnkgY2hhbm5lbHNcbiAqIHRoYXQgbWlnaHQgaGF2ZSBiZWVuIHRhcHBpbmcgaXQgbm8gbG9uZ2VyIHJlY2VpdmUgdmFsdWVzIGZyb20gdGhlIHNvdXJjZVxuICogY2hhbm5lbC4gSWYgdGhlIHNvdXJjZSBjaGFubmVsIGhhZCBubyB0YXBzLCB0aGlzIGZ1bmN0aW9uIGRvZXMgbm90aGluZy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IHNyYyBUaGUgdGFwcGVkIGNoYW5uZWwuIEFsbCB0YXBzIHdpbGwgYmUgcmVtb3ZlZFxuICogICAgIGZyb20gdGhpcyBjaGFubmVsLlxuICovXG5mdW5jdGlvbiB1bnRhcEFsbChzcmMpIHtcbiAgaWYgKHNyY1tUQVBTXSkge1xuICAgIHNyY1tUQVBTXSA9IFtdO1xuICAgIHNlbmRBc3luYyhzcmMpO1xuICB9XG59XG5cbi8qKlxuICogTWFwcyB0aGUgdmFsdWVzIGZyb20gb25lIG9yIG1vcmUgc291cmNlIGNoYW5uZWxzIHRocm91Z2ggYSBmdW5jdGlvbiwgc2VuZGluZ1xuICogdGhlIHJlc3VsdHMgdG8gYSBuZXcgY2hhbm5lbC5cbiAqXG4gKiBUaGUgbWFwcGluZyBmdW5jdGlvbiBpcyBnaXZlbiBvbmUgdmFsdWUgZnJvbSBlYWNoIHNvdXJjZSBjaGFubmVsLCBhZnRlciBhdFxuICogbGVhc3Qgb25lIHZhbHVlIGJlY29tZXMgYXZhaWxhYmxlIG9uIGV2ZXJ5IHNvdXJjZSBjaGFubmVsLiBUaGUgb3V0cHV0IHZhbHVlXG4gKiBmcm9tIHRoZSBmdW5jdGlvbiBpcyB0aGVuIHNlbnQgdG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKlxuICogVGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgY3JlYXRlZCBieSB0aGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIGJ1ZmZlciB2YWx1ZVxuICogcGFzc2VkIGFzIHRoZSB0aGlyZCBwYXJhbWV0ZXIuIElmIHRoaXMgaXMgbWlzc2luZywgYG51bGxgLCBvciBgMGAsIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuIElmIGl0J3MgYSBwb3NpdGl2ZSBpbnRlZ2VyLCB0aGVcbiAqIGRlc3RpbmF0aW9uIGNoYW5uZWwgaXMgYnVmZmVyZWQgYnkgYSBmaXhlZCBidWZmZXIgb2YgdGhhdCBzaXplLiBJZiB0aGVcbiAqIHBhcmFtZXRlciBpcyBhIGJ1ZmZlciwgdGhlbiB0aGF0IGJ1ZmZlciBpcyB1c2VkIHRvIGJ1ZmZlciB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwuXG4gKlxuICogT25jZSAqYW55KiBzb3VyY2UgY2hhbm5lbCBpcyBjbG9zZWQsIHRoZSBtYXBwaW5nIGNlYXNlcyBhbmQgdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsIGlzIGFsc28gY2xvc2VkLlxuICpcbiAqIFRoaXMgaXMgb2J2aW91c2x5IHNpbWlsYXIgdG8gYSBtYXAgdHJhbnNkdWNlciwgYnV0IHVubGlrZSBhIHRyYW5zZHVjZXIsIHRoaXNcbiAqIGZ1bmN0aW9uIHdvcmtzIHdpdGggbXVsdGlwbGUgaW5wdXQgY2hhbm5lbHMuIFRoaXMgaXMgc29tZXRoaW5nIHRoYXQgYVxuICogdHJhbnNkdWNlciBvbiBhIHNpbmdsZSBjaGFubmVsIGlzIHVuYWJsZSB0byBkby5cbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IGdvLCBjaGFuLCBzZW5kLCByZWN2LCBjbG9zZSwgaXNDbG9zZWQgfSBmcm9tIFwiQGNzcFwiO1xuICogaW1wb3J0IHsgbWFwIH0gZnJvbSBcIkBvcHNcIlxuICpcbiAqIGNvbnN0IGlucHV0MSA9IGNoYW4oKTtcbiAqIGNvbnN0IGlucHV0MiA9IGNoYW4oKTtcbiAqIGNvbnN0IGlucHV0MyA9IGNoYW4oKTtcbiAqIGNvbnN0IG91dHB1dCA9IG1hcCgoeCwgeSwgeikgPT4geCArIHkgKyB6LCBbaW5wdXQxLCBpbnB1dDIsIGlucHV0M10pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDEsIDEpO1xuICogICBhd2FpdCBzZW5kKGlucHV0MSwgMik7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQxLCAzKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDIsIDEwKTtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDIsIDIwKTtcbiAqICAgY2xvc2UoaW5wdXQyKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgc2VuZChpbnB1dDMsIDEwMCk7XG4gKiAgIGF3YWl0IHNlbmQoaW5wdXQzLCAyMDApO1xuICogICBhd2FpdCBzZW5kKGlucHV0MywgMzAwKTtcbiAqIH0pO1xuICpcbiAqIGdvKGFzeW5jICgpID0+IHtcbiAqICAgY29uc29sZS5sb2coYXdhaXQgcmVjdihvdXRwdXQpKTsgICAgIC8vIC0+IDExMVxuICogICBjb25zb2xlLmxvZyhhd2FpdCByZWN2KG91dHB1dCkpOyAgICAgLy8gLT4gMjIyXG4gKiAgIC8vIE91dHB1dCBjbG9zZXMgbm93IGJlY2F1c2UgaW5wdXQyIGNsb3NlcyBhZnRlciAyIHZhbHVlc1xuICogICBjb25zb2xlLmxvZyhpc0Nsb3NlZChvdXRwdXQpKTsgICAgICAgLy8gLT4gdHJ1ZVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOm9wc1xuICogQHBhcmFtIHttb2R1bGU6b3BzLk1hcHBlcn0gZm4gVGhlIG1hcHBpbmcgZnVuY3Rpb24uIFRoaXMgc2hvdWxkIGhhdmUgb25lXG4gKiAgICAgcGFyYW1ldGVyIGZvciBlYWNoIHNvdXJjZSBjaGFubmVsIGFuZCByZXR1cm4gYSBzaW5nbGUgdmFsdWUuXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbFtdfSBzcmNzIFRoZSBzb3VyY2UgY2hhbm5lbHMuXG4gKiBAcGFyYW0geyhudW1iZXJ8bW9kdWxlOmNzcC5CdWZmZXIpfSBbYnVmZmVyPTBdIEEgYnVmZmVyIHVzZWQgdG8gY3JlYXRlIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwuIElmIHRoaXMgaXMgYSBudW1iZXIsIGFcbiAqICAgICB7QGxpbmsgbW9kdWxlOmNzcC5GaXhlZEJ1ZmZlcn0gb2YgdGhhdCBzaXplIHdpbGwgYmUgdXNlZC4gSWYgdGhpcyBpcyBgMGBcbiAqICAgICBvciBub3QgcHJlc2VudCwgdGhlIGNoYW5uZWwgd2lsbCBiZSB1bmJ1ZmZlcmVkLlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgZGVzdGluYXRpb24gY2hhbm5lbC5cbiAqL1xuZnVuY3Rpb24gbWFwKGZuLCBzcmNzLCBidWZmZXIgPSAwKSB7XG4gIGNvbnN0IGRzdCA9IGNoYW4oYnVmZmVyKTtcbiAgY29uc3Qgc3JjbGVuID0gc3Jjcy5sZW5ndGg7XG4gIGNvbnN0IHZhbHVlcyA9IFtdO1xuICBjb25zdCBjYWxsYmFja3MgPSBbXTtcbiAgY29uc3QgdGVtcCA9IGNoYW4oKTtcbiAgbGV0IGNvdW50O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjbGVuOyBpKyspIHtcbiAgICBjYWxsYmFja3NbaV0gPSAoaW5kZXggPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlID0+IHtcbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICBpZiAoLS1jb3VudCA9PT0gMCkge1xuICAgICAgICAgIHNlbmRBc3luYyh0ZW1wLCB2YWx1ZXMuc2xpY2UoKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoaSk7XG4gIH1cblxuICBnbyhhc3luYyAoKSA9PiB7XG4gICAgZm9yICg7Oykge1xuICAgICAgY291bnQgPSBzcmNsZW47XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY2xlbjsgaSsrKSB7XG4gICAgICAgIHJlY3ZBc3luYyhzcmNzW2ldLCBjYWxsYmFja3NbaV0pO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWVzID0gYXdhaXQgcmVjdih0ZW1wKTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgLy8gT25jZSBhIHNvdXJjZSBjbG9zZXMsIHdlIGNsb3NlIHRoZSBkZXN0aW5hdGlvbiBBTkQgdGhlIHJlc3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc291cmNlcy4gT3RoZXJ3aXNlIHRoZSBzb3VyY2VzIHdpbGwgaGF2ZSBub3RoaW5nIHJlY2VpdmluZyBmcm9tXG4gICAgICAgICAgLy8gdGhlbSBhbmQgc2VuZHMgdG8gdGhlbSB3aWxsIGJsb2NrIGZvcmV2ZXIuIEJ5IGNsb3NpbmcgdGhlbSwgc2VuZHNcbiAgICAgICAgICAvLyB0byB0aGVtIHdpbGwgaW1tZWRpYXRlbHkgcmV0dXJuIGBmYWxzZWAgYW5kIG5vdCBibG9jay5cbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICAgIGZvciAoY29uc3Qgc3JjIG9mIHNyY3MpIHtcbiAgICAgICAgICAgIGNsb3NlKHNyYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgc2VuZChkc3QsIGZuKC4uLnZhbHVlcykpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuZXhwb3J0IHsgcGlwZSwgcGFydGl0aW9uLCBtZXJnZSwgc3BsaXQsIHRhcCwgdW50YXAsIHVudGFwQWxsLCBtYXAgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKipcbiAqIEEgc2V0IG9mIGNoYW5uZWwgdXRpbGl0aWVzIGZvciBjaGFuZ2luZyB0aGUgdGltaW5nIG9mIGlucHV0cyBiZWluZyBwdXQgb250b1xuICogdGhlIGlucHV0IGNoYW5uZWwuXG4gKlxuICogQG1vZHVsZSBvcHMvdGltaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5cbmltcG9ydCB7XG4gIGdvLFxuICBjaGFuLFxuICBzZW5kLFxuICBzZWxlY3QsXG4gIGNsb3NlLFxuICBDTE9TRUQsXG4gIGlzVGltZWQsXG4gIHRpbWVkQ2hhblxufSBmcm9tIFwiQGNoYW5rby9jc3BcIjtcblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwibW9kdWxlcy9jb21tb25cIjtcblxuLyoqXG4gKiBEZWJvdW5jZXMgYW4gaW5wdXQgY2hhbm5lbC5cbiAqXG4gKiBEZWJvdW5jaW5nIGlzIHRoZSBhY3Qgb2YgdHVybmluZyBzZXZlcmFsIGlucHV0IHZhbHVlcyBpbnRvIG9uZS4gRm9yIGV4YW1wbGUsXG4gKiBkZWJvdW5jaW5nIGEgY2hhbm5lbCBkcml2ZW4gYnkgYSBgbW91c2Vtb3ZlYCBldmVudCB3b3VsZCBjYXVzZSBvbmx5IHRoZSBmaW5hbFxuICogYG1vdXNlbW92ZWAgZXZlbnQgdG8gYmUgcHV0IG9udG8gdGhlIGNoYW5uZWwsIGRyb3BwaW5nIGFsbCBvZiB0aGUgb3RoZXIgb25lcy5cbiAqIFRoaXMgY2FuIGJlIGRlc2lyYWJsZSBiZWNhdXNlIGBtb3VzZW1vdmVgIGV2ZW50cyBjb21lIGluIGJ1bmNoZXMsIGJlaW5nXG4gKiBwcm9kdWNlZCBjb250aW51YWxseSB3aGlsZSB0aGUgbW91c2UgaXMgbW92aW5nLCBhbmQgb2Z0ZW4gYWxsIHRoYXQgd2UgcmVhbGx5XG4gKiBjYXJlIGFib3V0IGlzIHRvIGxlYXJuIHdoZXJlIHRoZSBtb3VzZSBlbmRlZCB1cC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgdGhpcyBieSBjb250cm9sbGluZyB3aGljaCB2YWx1ZXMgdGhhdCBoYXZlIGJlZW4gc2VudCB0b1xuICogdGhlIHNvdXJjZSBjaGFubmVsIGFyZSBtYWRlIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCwgYW5kIHdoZW4uXG4gKlxuICogVGhlIGBkZWxheWAgcGFyYW1ldGVyIGRldGVybWluZXMgdGhlIGRlYm91bmNlIHRocmVzaG9sZC4gT25jZSB0aGUgZmlyc3QgdmFsdWVcbiAqIGlzIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsLCBkZWJvdW5jaW5nIGlzIGluIGVmZmVjdCB1bnRpbCB0aGUgbnVtYmVyIG9mXG4gKiBtaWxsaXNlY29uZHMgaW4gYGRlbGF5YCBwYXNzZXMgd2l0aG91dCBhbnkgb3RoZXIgdmFsdWUgYmVpbmcgcHV0IG9udG8gdGhhdFxuICogY2hhbm5lbC4gSW4gb3RoZXIgd29yZHMsIHRoZSBkZWxheSB3aWxsIGJlIHJlZnJlc2hlZCBpZiBhbm90aGVyIHZhbHVlIGlzIHNlbnRcbiAqIHRvIHRoZSBzb3VyY2UgY2hhbm5lbCBiZWZvcmUgdGhlIGRlbGF5IGVsYXBzZXMuIEFmdGVyIGEgZnVsbCBkZWxheSBpbnRlcnZhbFxuICogcGFzc2VzIHdpdGhvdXQgYSB2YWx1ZSBiZWluZyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbCwgdGhlIGxhc3QgdmFsdWUgc2VudFxuICogYmVjb21lcyBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuXG4gKlxuICogVGhpcyBiZWhhdmlvciBjYW4gYmUgbW9kaWZpZWQgdGhyb3VnaCBmb3VyIG9wdGlvbnM6IGBsZWFkaW5nYCwgYHRyYWlsaW5nYCxcbiAqIGBtYXhEZWxheWAsIGFuZCBgY2FuY2VsYC5cbiAqXG4gKiBJZiBib3RoIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBhcmUgYHRydWVgLCB2YWx1ZXMgd2lsbCBub3QgYmUgZHVwbGljYXRlZC5cbiAqIFRoZSBmaXJzdCB2YWx1ZSBwdXQgb250byB0aGUgc291cmNlIGNoYW5uZWwgd2lsbCBiZSBwdXQgb250byB0aGUgZGVzdGluYXRpb25cbiAqIGNoYW5uZWwgaW1tZWRpYXRlbHkgKHBlciBgbGVhZGluZ2ApIGFuZCB0aGUgZGVsYXkgd2lsbCBiZWdpbiwgYnV0IGEgdmFsdWVcbiAqIHdpbGwgb25seSBiZSBtYWRlIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhdCB0aGUgZW5kIG9mIHRoZVxuICogZGVsYXkgKHBlciBgdHJhaWxpbmdgKSBpZiAqYW5vdGhlciogaW5wdXQgdmFsdWUgd2FzIHB1dCBvbnRvIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwgYmVmb3JlIHRoZSBkZWxheSBleHBpcmVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtidWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0byBjcmVhdGUgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbC4gSWYgdGhpcyBpcyBhIG51bWJlciwgYVxuICogICAgIHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZSB1c2VkLiBJZlxuICogICAgIHRoaXMgaXMgYDBgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgVGhlIGRlYm91bmNpbmcgZGVsYXksIGluIG1pbGxpc2Vjb25kcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gQSBzZXQgb2Ygb3B0aW9ucyB0byBmdXJ0aGVyIGNvbmZpZ3VyZSB0aGVcbiAqICAgICBkZWJvdW5jaW5nLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXSBJbnN0ZWFkIG9mIG1ha2luZyBhIHZhbHVlIGF2YWlsYWJsZVxuICogICAgIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGFmdGVyIHRoZSBkZWxheSBwYXNzZXMsIHRoZSBmaXJzdCB2YWx1ZSBwdXRcbiAqICAgICBvbnRvIHRoZSBzb3VyY2UgY2hhbm5lbCBpcyBtYWRlIGF2YWlsYWJsZSAqYmVmb3JlKiB0aGUgZGVsYXkgYmVnaW5zLiBOb1xuICogICAgIHZhbHVlIGlzIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCBhZnRlciB0aGUgZGVsYXkgaGFzIGVsYXBzZWRcbiAqICAgICAodW5sZXNzIGB0cmFpbGluZ2AgaXMgYWxzbyBgdHJ1ZWApLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXSBUaGUgZGVmYXVsdCBiZWhhdmlvciwgd2hlcmUgYSB2YWx1ZVxuICogICAgIGlzIG5vdCBtYWRlIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbCB1bnRpbCB0aGUgZW50aXJlIGRlbGF5XG4gKiAgICAgcGFzc2VzIHdpdGhvdXQgYSBuZXcgdmFsdWUgYmVpbmcgcHV0IG9uIHRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhEZWxheT0wXSBUaGUgbWF4aW11bSBkZWxheSBhbGxvd2VkIGJlZm9yZSBhIHZhbHVlXG4gKiAgICAgaXMgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwuIERlYm91bmNpbmcgY2FuLCBpbiB0aGVvcnksIGdvIG9uXG4gKiAgICAgZm9yZXZlciBhcyBsb25nIGFzIG5ldyBpbnB1dCB2YWx1ZXMgY29udGludWUgdG8gYmUgcHV0IG9udG8gdGhlIHNvdXJjZVxuICogICAgIGNoYW5uZWwgYmVmb3JlIHRoZSBkZWxheSBleHBpcmVzLiBTZXR0aW5nIHRoaXMgb3B0aW9uIHRvIGEgcG9zaXRpdmVcbiAqICAgICBudW1iZXIgc2V0cyB0aGUgbWF4aW11bSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgZGVib3VuY2luZyBjYW4gZ28gb25cbiAqICAgICBiZWZvcmUgaXQncyBmb3JjZWQgdG8gZW5kLCBldmVuIGlmIGluIHRoZSBtaWRkbGUgb2YgYSBkZWJvdW5jaW5nIGRlbGF5LlxuICogICAgIEhhdmluZyBkZWJvdW5jaW5nIGVuZCB0aHJvdWdoIHRoZSBtYXggZGVsYXkgb3BlcmF0ZXMgZXhhY3RseSBhcyBpZiBpdCBoYWRcbiAqICAgICBlbmRlZCBiZWNhdXNlIG9mIGxhY2sgb2YgaW5wdXQ7IHRoZSBsYXN0IGlucHV0IGlzIG1hZGUgYXZhaWxhYmxlIG9uIHRoZVxuICogICAgIGRlc3RpbmF0aW9uIGNoYW5uZWwgKGlmIGB0cmFpbGluZ2AgaXMgYHRydWVgKSwgYW5kIHRoZSBuZXh0IGlucHV0IHdpbGxcbiAqICAgICB0cmlnZ2VyIGFub3RoZXIgZGVib3VuY2Ugb3BlcmF0aW9uLlxuICogQHBhcmFtIHttb2R1bGU6Y3NwLkNoYW5uZWx9IFtvcHRpb25zLmNhbmNlbF0gQSBjaGFubmVsIHVzZWQgdG8gc2lnbmFsIGFcbiAqICAgICBjYW5jZWxsYXRpb24gb2YgdGhlIGRlYm91bmNpbmcuIEFueSB2YWx1ZSBwdXQgb250byB0aGlzIGNoYW5uZWwgd2lsbFxuICogICAgIGNhbmNlbCB0aGUgY3VycmVudCBkZWJvdW5jaW5nIG9wZXJhdGlvbiwgY2xvc2luZyB0aGUgb3V0cHV0IGNoYW5uZWwgYW5kXG4gKiAgICAgZGlzY2FyZGluZyBhbnkgdmFsdWVzIHRoYXQgd2VyZSB3YWl0aW5nIGZvciB0aGUgZGVib3VuY2UgdGhyZXNob2xkIHRpbWVyXG4gKiAgICAgdG8gYmUgc2VudCB0byB0aGUgb3V0cHV0LlxuICogQHJldHVybiB7bW9kdWxlOmNzcC5DaGFubmVsfSBUaGUgbmV3bHktY3JlYXRlZCBkZXN0aW5hdGlvbiBjaGFubmVsLCB3aGVyZSBhbGxcbiAqICAgICBvZiB0aGUgdmFsdWVzIHdpbGwgYmUgZGVib3VuY2VkIGZyb20gdGhlIHNvdXJjZSBjaGFubmVsLlxuICovXG5mdW5jdGlvbiBkZWJvdW5jZShzcmMsIGJ1ZmZlciwgZGVsYXksIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgbGVhZGluZzogZmFsc2UsXG4gICAgdHJhaWxpbmc6IHRydWUsXG4gICAgbWF4RGVsYXk6IDAsXG4gICAgY2FuY2VsOiBjaGFuKClcbiAgfTtcbiAgY29uc3QgW2J1ZiwgZGVsLCBvcHRzXSA9IGlzTnVtYmVyKGRlbGF5KVxuICAgID8gW2J1ZmZlciwgZGVsYXksIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIG9wdGlvbnMgPz8ge30pXVxuICAgIDogWzAsIGJ1ZmZlciwgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgZGVsYXkgPz8ge30pXTtcblxuICBjb25zdCBkc3QgPSBjaGFuKGJ1Zik7XG4gIGNvbnN0IHsgbGVhZGluZywgdHJhaWxpbmcsIG1heERlbGF5LCBjYW5jZWwgfSA9IG9wdHM7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGxldCB0aW1lciA9IGNoYW4oKTtcbiAgICBsZXQgbWF4ID0gY2hhbigpO1xuICAgIGxldCBjdXJyZW50ID0gQ0xPU0VEO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgY2hhbm5lbCB9ID0gYXdhaXQgc2VsZWN0KFtzcmMsIHRpbWVyLCBtYXgsIGNhbmNlbF0pO1xuXG4gICAgICBpZiAoY2hhbm5lbCA9PT0gY2FuY2VsKSB7XG4gICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5uZWwgPT09IHNyYykge1xuICAgICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICAgIGNsb3NlKGRzdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aW1pbmcgPSBpc1RpbWVkKHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSB0aW1lZENoYW4oZGVsKTtcblxuICAgICAgICBpZiAoIXRpbWluZyAmJiBtYXhEZWxheSA+IDApIHtcbiAgICAgICAgICBtYXggPSB0aW1lZENoYW4obWF4RGVsYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlYWRpbmcpIHtcbiAgICAgICAgICBpZiAoIXRpbWluZykge1xuICAgICAgICAgICAgYXdhaXQgc2VuZChkc3QsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudCA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0cmFpbGluZykge1xuICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZXIgPSBjaGFuKCk7XG4gICAgICAgIG1heCA9IGNoYW4oKTtcbiAgICAgICAgaWYgKHRyYWlsaW5nICYmIGN1cnJlbnQgIT09IENMT1NFRCkge1xuICAgICAgICAgIGF3YWl0IHNlbmQoZHN0LCBjdXJyZW50KTtcbiAgICAgICAgICBjdXJyZW50ID09PSBDTE9TRUQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKlxuICogVGhyb3R0bGVzIGFuIGlucHV0IGNoYW5uZWwuXG4gKlxuICogVGhyb3R0bGluZyBpcyB0aGUgYWN0IG9mIGVuc3VyaW5nIHRoYXQgc29tZXRoaW5nIG9ubHkgaGFwcGVucyBvbmNlIHBlciB0aW1lXG4gKiBpbnRlcnZhbC4gSW4gdGhpcyBjYXNlLCBpdCBtZWFucyB0aGF0IGEgdmFsdWUgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwgaXNcbiAqIG9ubHkgbWFkZSBhdmFpbGFibGUgdG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgb25jZSBwZXIgYSBnaXZlbiBudW1iZXIgb2ZcbiAqIG1pbGxpc2Vjb25kcy4gQW4gZXhhbXBsZSB1c2FnZSB3b3VsZCBiZSB3aXRoIHdpbmRvdyBzY3JvbGwgZXZlbnRzOyB0aGVzZVxuICogZXZlbnRzIGFyZSBuZWFybHkgY29udGludW91cyBhcyBzY3JvbGxpbmcgaXMgaGFwcGVuaW5nLCBhbmQgcGVyaGFwcyB3ZSBkb24ndFxuICogd2FudCB0byBjYWxsIGFuIGV4cGVuc2l2ZSBVSSB1cGRhdGluZyBmdW5jdGlvbiBldmVyeSB0aW1lIGEgc2Nyb2xsIGV2ZW50IGlzXG4gKiBmaXJlZC4gV2UgY2FuIHRocm90dGxlIHRoZSBpbnB1dCBjaGFubmVsIGFuZCBtYWtlIGl0IG9ubHkgb2ZmZXIgdXAgdGhlIHNjcm9sbFxuICogZXZlbnRzIG9uY2UgZXZlcnkgMTAwIG1pbGxpc2Vjb25kcywgZm9yIGluc3RhbmNlLlxuICpcbiAqIFRocm90dGxpbmcgaXMgZWZmZWN0ZWQgYnkgY3JlYXRpbmcgYSBuZXcgY2hhbm5lbCBhcyBhIHRocm90dGxlZCBkZXN0aW5hdGlvblxuICogZm9yIHZhbHVlcyBzZW50IHRvIHRoZSBzb3VyY2UgY2hhbm5lbC4gVmFsdWVzIHdpbGwgb25seSBhcHBlYXIgb24gdGhhdFxuICogZGVzdGluYXRpb24gY2hhbm5lbCBvbmNlIHBlciBkZWxheSBpbnRlcnZhbDsgb3RoZXIgdmFsdWVzIHRoYXQgYXJlIHB1dCBvbnRvXG4gKiB0aGUgc291cmNlIGNoYW5uZWwgaW4gdGhlIG1lYW50aW1lIGFyZSBkaXNjYXJkZWQuXG4gKlxuICogVGhlIGBkZWxheWAgcGFyYW1ldGVyIGNvbnRyb2xzIGhvdyBvZnRlbiBhIHZhbHVlIGNhbiBiZWNvbWUgYXZhaWxhYmxlIG9uIHRoZVxuICogZGVzdGluYXRpb24gY2hhbm5lbC4gV2hlbiB0aGUgZmlyc3QgdmFsdWUgaXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwsIGl0XG4gKiBpcyBpbW1lZGlhdGVseSBzZW50IHRvIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGFzIHdlbGwgYW5kIHRoZSBkZWxheSBiZWdpbnMuXG4gKiBBbnkgZnVydGhlciB2YWx1ZXMgc2VudCB0byB0aGUgc291cmNlIGNoYW5uZWwgZHVyaW5nIHRoYXQgZGVsYXkgYXJlICpub3QqXG4gKiBwYXNzZWQgdGhyb3VnaDsgb25seSB3aGVuIHRoZSBkZWxheSBleHBpcmVzIGlzIHRoZSBsYXN0IGlucHV0IHZhbHVlIG1hZGVcbiAqIGF2YWlsYWJsZSBvbiB0aGUgZGVzdGluYXRpb24gY2hhbm5lbC4gVGhlIGRlbGF5IHRoZW4gYmVnaW5zIGFnYWluLCBzbyB0aGF0XG4gKiBmdXJ0aGVyIGlucHV0cyBhcmUgc3F1ZWxjaGVkIHVudGlsICp0aGF0KiBkZWxheSBwYXNzZXMuIFRocm90dGxpbmcgY29udGludWVzLFxuICogb25seSBhbGxvd2luZyBvbmUgdmFsdWUgdGhyb3VnaCBwZXIgaW50ZXJ2YWwsIHVudGlsIGFuIGVudGlyZSBpbnRlcnZhbCBwYXNzZXNcbiAqIHdpdGhvdXQgaW5wdXQuXG4gKlxuICogVGhpcyBiZWhhdmlvciBjYW4gYmUgbW9kaWZpZWQgYnkgdGhyZWUgb3B0aW9uczogYGxlYWRpbmdgLCBgdHJhaWxpbmdgLCBhbmRcbiAqIGBjYW5jZWxgLlxuICpcbiAqIElmIGJvdGggYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIGFyZSBgdHJ1ZWAsIHZhbHVlcyB3aWxsIG5vdCBiZSBkdXBsaWNhdGVkLlxuICogVGhlIGZpcnN0IHZhbHVlIHNlbnQgdG8gdGhlIHNvdXJjZSBjaGFubmVsIHdpbGwgYmUgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uXG4gKiBjaGFubmVsIGltbWVkaWF0ZWx5IChwZXIgYGxlYWRpbmdgKSBhbmQgdGhlIGRlbGF5IHdpbGwgYmVnaW4sIGJ1dCBhIHZhbHVlXG4gKiB3aWxsIG9ubHkgYmUgbWFkZSBhdmFpbGFibGUgb24gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgYXQgdGhlIGVuZCBvZiB0aGVcbiAqIGRlbGF5IChwZXIgYHRyYWlsaW5nYCkgaWYgKmFub3RoZXIqIGlucHV0IHZhbHVlIHdhcyBzZW50IHRvIHRoZSBzb3VyY2VcbiAqIGNoYW5uZWwgYmVmb3JlIHRoZSBkZWxheSBleHBpcmVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6b3BzXG4gKiBAcGFyYW0ge21vZHVsZTpjc3AuQ2hhbm5lbH0gc3JjIFRoZSBzb3VyY2UgY2hhbm5lbC5cbiAqIEBwYXJhbSB7KG51bWJlcnxtb2R1bGU6Y3NwLkJ1ZmZlcil9IFtidWZmZXI9MF0gQSBidWZmZXIgdXNlZCB0byBjcmVhdGUgdGhlXG4gKiAgICAgZGVzdGluYXRpb24gY2hhbm5lbC4gSWYgdGhpcyBpcyBhIG51bWJlciwgYVxuICogICAgIHtAbGluayBtb2R1bGU6Y3NwLkZpeGVkQnVmZmVyfEZpeGVkQnVmZmVyfSBvZiB0aGF0IHNpemUgd2lsbCBiZSB1c2VkLiBJZlxuICogICAgIHRoaXMgaXMgYDBgIG9yIG5vdCBwcmVzZW50LCB0aGUgY2hhbm5lbCB3aWxsIGJlIHVuYnVmZmVyZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgVGhlIHRocm90dGxpbmcgZGVsYXksIGluIG1pbGxpc2Vjb25kcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gQSBzZXQgb2Ygb3B0aW9ucyB0byBmdXJ0aGVyIGNvbmZpZ3VyZSB0aGVcbiAqIHRocm90dGxpbmcuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV0gTWFrZXMgdGhlIHZhbHVlIHRoYXQgdHJpZ2dlcmVkIHRoZVxuICogICAgIHRocm90dGxpbmcgaW1tZWRpYXRlbHkgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIGJlZm9yZVxuICogICAgIGJlZ2lubmluZyB0aGUgZGVsYXkuIElmIHRoaXMgaXMgYGZhbHNlYCwgdGhlIGZpcnN0IHZhbHVlIHdpbGwgbm90IGJlIHB1dFxuICogICAgIG9udG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgdW50aWwgYSBmdWxsIGRlbGF5IGludGVydmFsIHBhc3Nlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV0gTWFrZXMgdGhlIGxhc3QgdmFsdWUgcHV0IG9udG8gdGhlXG4gKiAgICAgc291cmNlIGNoYW5uZWwgYXZhaWxhYmxlIG9uIHRoZSBkZXN0aW5hdGlvbiBjaGFubmVsIHdoZW4gdGhlIGRlbGF5XG4gKiAgICAgZXhwaXJlcy4gSWYgdGhpcyBpcyBgZmFsc2VgLCBhbnkgaW5wdXRzIHRoYXQgY29tZSBpbiBkdXJpbmcgdGhlIGRlbGF5IGFyZVxuICogICAgIGlnbm9yZWQsIGFuZCB0aGUgbmV4dCB2YWx1ZSBpcyBub3QgcHV0IG9udG8gdGhlIGRlc3RpbmF0aW9uIGNoYW5uZWwgdW50aWxcbiAqICAgICB0aGUgZmlyc3QgaW5wdXQgKmFmdGVyKiB0aGUgZGVsYXkgZXhwaXJlcy5cbiAqIEBwYXJhbSB7bW9kdWxlOmNzcC5DaGFubmVsfSBbb3B0aW9ucy5jYW5jZWxdIEEgY2hhbm5lbCB1c2VkIHRvIHNpZ25hbCBhXG4gKiAgICAgY2FuY2VsbGF0aW9uIG9mIHRoZSB0aHJvdHRsaW5nLiBBbnkgdmFsdWUgcHV0IG9udG8gdGhpcyBjaGFubmVsIHdpbGxcbiAqICAgICBjYW5jZWwgdGhlIGN1cnJlbnQgdGhyb3R0bGluZyBvcGVyYXRpb24sIGNsb3NpbmcgdGhlIG91dHB1dCBjaGFubmVsIGFuZFxuICogICAgIGRpc2NhcmRpbmcgYW55IHZhbHVlcyB0aGF0IHdlcmUgd2FpdGluZyBmb3IgdGhlIHRocm90dGxlIHRocmVzaG9sZCB0aW1lclxuICogICAgIHRvIGJlIHNlbnQgdG8gdGhlIG91dHB1dC5cbiAqIEByZXR1cm4ge21vZHVsZTpjc3AuQ2hhbm5lbH19IFRoZSBuZXdseS1jcmVhdGVkIGRlc3RpbmF0aW9uIGNoYW5uZWwsIHdoZXJlXG4gKiAgICAgYWxsIG9mIHRoZSB2YWx1ZXMgd2lsbCBiZSB0aHJvdHRsZWQgZnJvbSB0aGUgc291cmNlIGNoYW5uZWwuXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKHNyYywgYnVmZmVyLCBkZWxheSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBsZWFkaW5nOiB0cnVlLFxuICAgIHRyYWlsaW5nOiB0cnVlLFxuICAgIGNhbmNlbDogY2hhbigpXG4gIH07XG4gIGNvbnN0IFtidWYsIGRlbCwgb3B0c10gPSBpc051bWJlcihkZWxheSlcbiAgICA/IFtidWZmZXIsIGRlbGF5LCBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBvcHRpb25zID8/IHt9KV1cbiAgICA6IFswLCBidWZmZXIsIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIGRlbGF5ID8/IHt9KV07XG5cbiAgY29uc3QgZHN0ID0gY2hhbihidWYpO1xuICBjb25zdCB7IGxlYWRpbmcsIHRyYWlsaW5nLCBjYW5jZWwgfSA9IG9wdHM7XG5cbiAgZ28oYXN5bmMgKCkgPT4ge1xuICAgIGxldCB0aW1lciA9IGNoYW4oKTtcbiAgICBsZXQgY3VycmVudCA9IENMT1NFRDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGNoYW5uZWwgfSA9IGF3YWl0IHNlbGVjdChbc3JjLCB0aW1lciwgY2FuY2VsXSk7XG5cbiAgICAgIGlmIChjaGFubmVsID09PSBjYW5jZWwpIHtcbiAgICAgICAgY2xvc2UoZHN0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFubmVsID09PSBzcmMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICBjbG9zZShkc3QpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGltaW5nID0gaXNUaW1lZCh0aW1lcik7XG4gICAgICAgIGlmICghdGltaW5nKSB7XG4gICAgICAgICAgdGltZXIgPSB0aW1lZENoYW4oZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWFkaW5nKSB7XG4gICAgICAgICAgaWYgKCF0aW1pbmcpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbmQoZHN0LCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0cmFpbGluZykge1xuICAgICAgICAgICAgY3VycmVudCA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0cmFpbGluZykge1xuICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0cmFpbGluZyAmJiBjdXJyZW50ICE9PSBDTE9TRUQpIHtcbiAgICAgICAgdGltZXIgPSB0aW1lZENoYW4oZGVsKTtcbiAgICAgICAgYXdhaXQgc2VuZChkc3QsIGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0gQ0xPU0VEO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZXIgPSBjaGFuKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZHN0O1xufVxuXG5leHBvcnQgeyBkZWJvdW5jZSwgdGhyb3R0bGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=