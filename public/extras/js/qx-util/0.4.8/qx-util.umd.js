!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).QXUtil={})}(this,(function(t){"use strict";function n(t){if(t instanceof Array)t&&t.length>0&&t.splice(0,t.length);else if(t instanceof Object&&t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&delete t[n]}var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},e(t,n)};function o(t,n,e,o){return new(e||(e=Promise))((function(r,i){function c(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,a)}u((o=o.apply(t,n||[])).next())}))}function r(t,n){var e,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(e=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,o=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(r=c.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){c.label=a[1];break}if(6===a[0]&&c.label<r[1]){c.label=r[1],r=a;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(a);break}r[2]&&c.ops.pop(),c.trys.pop();continue}a=n.call(t,c)}catch(t){a=[6,t],o=0}finally{e=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function i(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,r,i=e.call(t),c=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)c.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return c}function c(t,n,e){if(e||2===arguments.length)for(var o,r=0,i=n.length;r<i;r++)!o&&r in n||(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return t.concat(o||Array.prototype.slice.call(n))}var a=function(){function t(){this.map=new Map,this.maxListeners=100}return t.prototype.setMaxListeners=function(t){this.maxListeners=t},t.prototype.getSize=function(t){return this.map.has(t)?this.map.get(t).length:0},t.prototype.addListener=function(t,n){if(n instanceof Function){this.map.has(t)||this.map.set(t,[]);var e=this.map.get(t);if(!(e.length<this.maxListeners))throw new Error("事件监听已达最大上限[".concat(this.maxListeners,"]，无法新增监听!"));e.push(n)}},t.prototype.removeListener=function(t,n){if(this.map.has(t)){var e=this.map.get(t);if(e.length>0)for(var o=0;o<e.length;o++){if(e[o]===n){e.splice(o,1);break}}}},t.prototype.emit=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];if(this.map.has(t)){var o=this.map.get(t);o.forEach((function(t){t.apply(void 0,c([],i(n),!1))}))}},t.prototype.asyncEmit=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return o(this,void 0,void 0,(function(){var e,o;return r(this,(function(r){return this.map.has(t)?(e=this.map.get(t),o=e.map((function(t){return t.apply(void 0,c([],i(n),!1))})),[2,Promise.all(o)]):[2,[]]}))}))},t.prototype.reset=function(){this.map.forEach((function(t){n(t)})),this.map.clear()},t}(),u=function(){function t(t){this.e=new a,this.e.setMaxListeners(t||300)}return t.prototype.getSize=function(t){return this.e.getSize(t)},t.prototype.on=function(t,n){this.e.addListener(t,n)},t.prototype.off=function(t,n){this.e.removeListener(t,n)},t.prototype.emit=function(t){for(var n,e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];(n=this.e).emit.apply(n,c([t],i(e),!1))},t.prototype.asyncEmit=function(t){for(var n,e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];return(n=this.e).asyncEmit.apply(n,c([t],i(e),!1))},t.prototype.reset=function(){this.e.reset()},t}(),s=Object.prototype.toString;function f(t){return"function"===g(t)}function l(t){return"[object AsyncFunction]"===s.call(t)}function p(t){return"[object Promise]"===s.call(t)}function h(t){return"object"===g(t)}function y(t){return"array"===g(t)}function m(t){return"map"===g(t)}function d(t){return"set"===g(t)}function b(t){return"string"===g(t)}var v={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Set]":"set","[object Map]":"map","[object WeakMap]":"weakmap"};function g(t){return v[s.call(t)]}function j(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function w(t,n,e,o,r){void 0===e&&(e=0),void 0===o&&(o=!1),void 0===r&&(r="/");var i="";if(o){if(!/^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/.test(location.hostname)){var c=location.hostname;c.indexOf(".")!==c.lastIndexOf(".")&&(i=";domain=".concat(c.substring(c.indexOf("."),c.length)))}}if(0!==e){var a=24*e*60*60*1e3,u=new Date((new Date).getTime()+a);document.cookie="".concat(t,"=").concat(escape(n),";path=").concat(r,";expires=").concat(u.toUTCString()).concat(i)}else document.cookie="".concat(t,"=").concat(escape(n),";path=").concat(r).concat(i)}function O(t){return null==t}function x(t){if(y(t)||b(t))return 0===t.length;if(h(t)){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}return m(t)||d(t)?0===t.size:null==t}function S(t){var n={},e=[];return Object.assign(n,t),Object.keys(n).forEach((function(t){var o=n[t];o instanceof Array||o instanceof Object?e.push("".concat(t,"=").concat(encodeURIComponent(JSON.stringify(o)))):e.push("".concat(t,"=").concat(encodeURIComponent(o)))})),e.join("&")}var k=function(){function t(){this.items=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.items.length},enumerable:!1,configurable:!0}),t.prototype.callSync=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];for(var o,r=t||Object.create({}),a=0;a<this.items.length;a++){var u=this.items[a];if(u.fn&&(o=u.fn.apply(u,c([r],i(n),!1))),null===o){console.warn("因".concat(u.fn?u.fn.name:null,"方法返回值为「null」，钩子中断执行。"),u);break}}return r},t.prototype.tap=function(t){if(t&&f(t)){var n={mode:"sync"};n.fn=t,this.items.push(n)}},t.prototype.removeTap=function(t){if(t)for(var n=0;n<this.items.length;n++){t===this.items[n].fn&&this.items.splice(n,1)}},t.prototype.clear=function(){this.items=[]},t}(),E=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}(n,t),n.prototype.call=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return o(this,void 0,void 0,(function(){var e,o,a,u;return r(this,(function(r){switch(r.label){case 0:e=t||Object.create({}),a=0,r.label=1;case 1:return a<this.items.length?(u=this.items[a]).fn?"promise"!==u.mode?[3,4]:p(o=u.fn.apply(u,c([e],i(n),!1)))?[4,o]:[3,3]:[3,5]:[3,7];case 2:o=r.sent(),r.label=3;case 3:return[3,5];case 4:o=u.fn.apply(u,c([e],i(n),!1)),r.label=5;case 5:if(null===o)return console.warn("因".concat(u.fn?u.fn.name:null,"方法返回值为「null」，钩子中断执行。"),u),[3,7];r.label=6;case 6:return a++,[3,1];case 7:return[2,e]}}))}))},n.prototype.tapPromise=function(t){if(t&&(f(t)||l(t))){var n={mode:"promise"};n.fn=t,this.items.push(n)}},n.prototype.removeTapPromise=function(t){this.removeTap(t)},n}(k);t.AsyncSeriesHook=E,t.QXEvent=u,t.SyncSeriesHook=k,t.ascSort=function(t,n){return t.sort((function(t,e){var o=n?t[n]:t,r=n?e[n]:e;return o>r?1:o<r?-1:0}))},t.clearAll=n,t.clearCookie=function(t,n){w(t,"",-1,n)},t.createUUID=function(){return"".concat(j()+j(),"-").concat(j(),"-").concat(j(),"-").concat(j(),"-").concat(j()).concat(j()).concat(j())},t.descSort=function(t,n){return t.sort((function(t,e){var o=n?t[n]:t,r=n?e[n]:e;return o<r?1:o>r?-1:0}))},t.formatHttpParams=S,t.generateOrderValue=function(t){return 100*(t+1)},t.getCookie=function(t){var n=new RegExp("(^| )".concat(t,"=([^;]*)(;|$)")),e=document.cookie.match(n);return e&&e.length>1?unescape(e[2]):null},t.getQueryVariable=function(t,n){void 0===n&&(n=location.search),n.startsWith("?")&&(n=n.substring(1));for(var e=n.split("&"),o=0;o<e.length;o++){var r=e[o].split("=");if(r[0]==t)return r[1]}return!1},t.isArray=y,t.isAsync=l,t.isBoolean=function(t){return"boolean"===g(t)},t.isFunc=f,t.isMap=m,t.isNilOrEmpty=function(t){return!(!O(t)&&!x(t))},t.isNumber=function(t){return"number"===g(t)},t.isObject=h,t.isPromise=p,t.isSet=d,t.isString=b,t.isWeakMap=function(t){return"weakmap"===g(t)},t.notNilEmpty=function(t){return!O(t)&&!x(t)},t.setCookie=w,t.setUrlQuery=function(t,n){var e=S(n);return t=t.endsWith("?")||-1!==t.indexOf("?")&&t.endsWith("&")?"".concat(t).concat(e):-1===t.indexOf("?")||t.endsWith("&")?"".concat(t,"?").concat(e):"".concat(t,"&").concat(e)},t.typeOf=g}));
