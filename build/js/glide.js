function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Glide=e()}(this,function(){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return _typeof(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof(t)})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function t(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(n){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=r(n),e=(t=i?(t=r(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(!t||"object"!=_typeof(t)&&"function"!=typeof t){if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0===(t=e))throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t}}function e(){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(i)return(i=Object.getOwnPropertyDescriptor(i,e)).get?i.get.call(arguments.length<3?t:n):i.value}).apply(this,arguments)}var D={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function f(t){console.error("[Glide warn]: ".concat(t))}function h(t){return parseInt(t)}function a(t){return"string"==typeof t}function u(t){var e=n(t);return"function"===e||"object"===e&&t}function c(t){return"function"==typeof t}function l(t){return void 0===t}function d(t){return t.constructor===Array}function v(t,e,n){Object.defineProperty(t,e,n)}function p(t,e){var n=Object.assign({},t,e);return e.hasOwnProperty("classes")&&(n.classes=Object.assign({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},t.classes.direction,e.classes.direction)),e.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},t.classes.type,e.classes.type)),e.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},t.classes.slide,e.classes.slide)),e.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},t.classes.arrow,e.classes.arrow)),e.classes.hasOwnProperty("nav"))&&(n.classes.nav=Object.assign({},t.classes.nav,e.classes.nav)),e.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},t.breakpoints,e.breakpoints)),n}t(y,[{key:"on",value:function(t,e){var n;if(!d(t))return this.hop.call(this.events,t)||(this.events[t]=[]),n=this.events[t].push(e)-1,{remove:function(){delete this.events[t][n]}};for(var i=0;i<t.length;i++)this.on(t[i],e)}},{key:"emit",value:function(t,e){if(d(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);else this.hop.call(this.events,t)&&this.events[t].forEach(function(t){t(e||{})})}}]);var B=y,m=(t(g,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),u(t)?this._c=function(t,e,n){var i,o,r={};for(i in e)c(e[i])?r[i]=e[i](t,r,n):f("Extension must be a function");for(o in r)c(r[o].mount)&&r[o].mount();return r}(this,t,this._e):f("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];return d(t)?this._t=t:f("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.settings=p(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){u(t)?this._o=t:f("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=h(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),g);function g(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};i(this,g),this._c={},this._t=[],this._e=new B,this.disabled=!1,this.selector=t,this.settings=p(D,e),this.index=this.settings.startAt}function y(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};i(this,y),this.events=t,this.hop=t.hasOwnProperty}function b(){return(new Date).getTime()}function w(n,i,o){function r(){l=!1===o.leading?0:b(),s=null,c=n.apply(a,u),s||(a=u=null)}function t(){var t=b(),e=(l||!1!==o.leading||(l=t),i-(t-l));return a=this,u=arguments,e<=0||i<e?(s&&(clearTimeout(s),s=null),l=t,c=n.apply(a,u),s||(a=u=null)):s||!1===o.trailing||(s=setTimeout(r,e)),c}var s,a,u,c,l=0;o=o||{};return t.cancel=function(){clearTimeout(s),l=0,s=a=u=null},t}var _={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function k(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function S(t){return t&&t instanceof window.HTMLElement}function H(t){return Array.prototype.slice.call(t)}var O='[data-glide-el="track"]',T=(t(x,[{key:"on",value:function(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]&&arguments[3];a(t)&&(t=[t]);for(var o=0;o<t.length;o++)this.listeners[t[o]]=n,e.addEventListener(t[o],this.listeners[t[o]],i)}},{key:"off",value:function(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];a(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),x);function x(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};i(this,x),this.listeners=t}var W=["ltr","rtl"],q={">":"<","<":">","=":"="};function I(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}var A=!1;try{var j=Object.defineProperty({},"passive",{get:function(){A=!0}});window.addEventListener("testPassive",null,j),window.removeEventListener("testPassive",null,j)}catch(n){}var R=A,P=["touchstart","mousedown"],C=["touchmove","mousemove"],L=["touchend","touchcancel","mouseup","mouseleave"],V=["mousedown","mousemove","mouseup","mouseleave"],M='[data-glide-el^="controls"]',G="".concat(M,' [data-glide-dir*="<"]'),F="".concat(M,' [data-glide-dir*=">"]');function N(t){return u(t)?(n=t,Object.keys(n).sort().reduce(function(t,e){return t[e]=n[e],t[e],t},{})):(f("Breakpoints option must be an object"),{});var n}var Y={Html:function(e,t,n){var i={mount:function(){this.root=e.selector,this.track=this.root.querySelector(O),this.collectSlides()},collectSlides:function(){this.slides=H(this.wrapper.children).filter(function(t){return!t.classList.contains(e.settings.classes.slide.clone)})}};return v(i,"root",{get:function(){return i._r},set:function(t){S(t=a(t)?document.querySelector(t):t)?i._r=t:f("Root element must be a existing Html node")}}),v(i,"track",{get:function(){return i._t},set:function(t){S(t)?i._t=t:f("Could not find track element. Please use ".concat(O," attribute."))}}),v(i,"wrapper",{get:function(){return i.track.children[0]}}),n.on("update",function(){i.collectSlides()}),i},Translate:function(s,a,e){var n={set:function(t){o=a,r=[function(t,n){return{modify:function(t){var e=Math.floor(t/n.Sizes.slideWidth);return t+n.Gaps.value*e}}},function(t,e){return{modify:function(t){return t+e.Clones.grow/2}}},function(n,i){return{modify:function(t){var e;return 0<=n.settings.focusAt?u(e=i.Peek.value)?t-e.before:t-e:t}}},function(r,s){return{modify:function(t){var e=s.Gaps.value,n=s.Sizes.width,i=r.settings.focusAt,o=s.Sizes.slideWidth;return"center"===i?t-(n/2-o/2):t-o*i-e*i}}}].concat((i=s)._t,[I]);var i,o,r,t=function(t){for(var e=0;e<r.length;e++){var n=r[e];c(n)&&c(n().modify)?t=n(i,o,void 0).modify(t):f("Transformer should be a function that returns an object with `modify()` method")}return t}(t),t="translate3d(".concat(-1*t,"px, 0px, 0px)");a.Html.wrapper.style.mozTransform=t,a.Html.wrapper.style.webkitTransform=t,a.Html.wrapper.style.transform=t},remove:function(){a.Html.wrapper.style.transform=""},getStartIndex:function(){var t=a.Sizes.length,e=s.index,n=s.settings.perView;return a.Run.isOffset(">")||a.Run.isOffset("|>")?t+(e-n):(e+n)%t},getTravelDistance:function(){var t=a.Sizes.slideWidth*s.settings.perView;return a.Run.isOffset(">")||a.Run.isOffset("|>")?-1*t:t}};return e.on("move",function(t){if(!s.isType("carousel")||!a.Run.isOffset())return n.set(t.movement);a.Transition.after(function(){e.emit("translate.jump"),n.set(a.Sizes.slideWidth*s.index)});t=a.Sizes.slideWidth*a.Translate.getStartIndex();return n.set(t-a.Translate.getTravelDistance())}),e.on("destroy",function(){n.remove()}),n},Transition:function(n,e,t){var i=!1,o={compose:function(t){var e=n.settings;return(i?"".concat(t," 0ms "):"".concat(t," ").concat(this.duration,"ms ")).concat(e.animationTimingFunc)},set:function(){e.Html.wrapper.style.transition=this.compose(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"transform")},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout(function(){t()},this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return v(o,"duration",{get:function(){var t=n.settings;return n.isType("slider")&&e.Run.offset?t.rewindDuration:t.animationDuration}}),t.on("move",function(){o.set()}),t.on(["build.before","resize","translate.jump"],function(){o.disable()}),t.on("run",function(){o.enable()}),t.on("destroy",function(){o.remove()}),o},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(q[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return v(i,"value",{get:function(){return i._v},set:function(t){-1<W.indexOf(t)?i._v=t:f("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],function(){i.removeClass()}),n.on("update",function(){i.mount()}),n.on(["build.before","update"],function(){i.addClass()}),i},Peek:function(n,t,e){var i={mount:function(){this.value=n.settings.peek}};return v(i,"value",{get:function(){return i._v},set:function(t){u(t)?(t.before=h(t.before),t.after=h(t.after)):t=h(t),i._v=t}}),v(i,"reductor",{get:function(){var t=i.value,e=n.settings.perView;return u(t)?t.before/e+t.after/e:2*t/e}}),e.on(["resize","update"],function(){i.mount()}),i},Sizes:function(t,i,e){var n={setupSlides:function(){for(var t="".concat(this.slideWidth,"px"),e=i.Html.slides,n=0;n<e.length;n++)e[n].style.width=t},setupWrapper:function(){i.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var t=i.Html.slides,e=0;e<t.length;e++)t[e].style.width="";i.Html.wrapper.style.width=""}};return v(n,"length",{get:function(){return i.Html.slides.length}}),v(n,"width",{get:function(){return i.Html.track.offsetWidth}}),v(n,"wrapperSize",{get:function(){return n.slideWidth*n.length+i.Gaps.grow+i.Clones.grow}}),v(n,"slideWidth",{get:function(){return n.width/t.settings.perView-i.Peek.reductor-i.Gaps.reductor}}),e.on(["build.before","resize","update"],function(){n.setupSlides(),n.setupWrapper()}),e.on("destroy",function(){n.remove()}),n},Gaps:function(e,r,t){var n={apply:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style,o=r.Direction.value;i[_[o][0]]=0!==e?"".concat(this.value/2,"px"):"",e!==t.length-1?i[_[o][1]]="".concat(this.value/2,"px"):i[_[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return v(n,"value",{get:function(){return h(e.settings.gap)}}),v(n,"grow",{get:function(){return n.value*r.Sizes.length}}),v(n,"reductor",{get:function(){var t=e.settings.perView;return n.value*(t-1)/t}}),t.on(["build.after","update"],w(function(){n.apply(r.Html.wrapper.children)},30)),t.on("destroy",function(){n.remove(r.Html.wrapper.children)}),n},Move:function(t,n,e){var i={mount:function(){this._o=0},make:function(){var t=this;this.offset=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e.emit("move",{movement:this.value}),n.Transition.after(function(){e.emit("move.after",{movement:t.value})})}};return v(i,"offset",{get:function(){return i._o},set:function(t){i._o=l(t)?0:h(t)}}),v(i,"translate",{get:function(){return n.Sizes.slideWidth*t.index}}),v(i,"value",{get:function(){var t=this.offset,e=this.translate;return n.Direction.is("rtl")?e+t:e-t}}),e.on(["build.before","run"],function(){i.make()}),i},Clones:function(h,p,t){var e={mount:function(){this.items=[],h.isType("carousel")&&(this.items=this.collect())},collect:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e=p.Html.slides,n=h.settings,i=n.perView,o=n.classes,r=n.cloningRatio;if(0!==e.length)for(var n=i+ +!!h.settings.peek+Math.round(i/2),s=e.slice(0,n).reverse(),a=e.slice(-1*n),u=0;u<Math.max(r,Math.floor(i/e.length));u++){for(var c=0;c<s.length;c++){var l=s[c].cloneNode(!0);l.classList.add(o.slide.clone),t.push(l)}for(var f=0;f<a.length;f++){var d=a[f].cloneNode(!0);d.classList.add(o.slide.clone),t.unshift(d)}}return t},append:function(){for(var t=this.items,e=p.Html,n=e.wrapper,i=e.slides,e=Math.floor(t.length/2),o=t.slice(0,e).reverse(),r=t.slice(-1*e).reverse(),s="".concat(p.Sizes.slideWidth,"px"),a=0;a<r.length;a++)n.appendChild(r[a]);for(var u=0;u<o.length;u++)n.insertBefore(o[u],i[0]);for(var c=0;c<t.length;c++)t[c].style.width=s},remove:function(){for(var t=this.items,e=0;e<t.length;e++)p.Html.wrapper.removeChild(t[e])}};return v(e,"grow",{get:function(){return(p.Sizes.slideWidth+p.Gaps.value)*e.items.length}}),t.on("update",function(){e.remove(),e.mount(),e.append()}),t.on("build.before",function(){h.isType("carousel")&&e.append()}),t.on("destroy",function(){e.remove()}),e},Resize:function(t,e,n){var i=new T,o={mount:function(){this.bind()},bind:function(){i.on("resize",window,w(function(){n.emit("resize")},t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",function(){o.unbind(),i.destroy()}),o},Build:function(i,o,t){var e={mount:function(){t.emit("build.before"),this.typeClass(),this.activeClass(),t.emit("build.after")},typeClass:function(){o.Html.root.classList.add(i.settings.classes.type[i.settings.type])},activeClass:function(){var e=i.settings.classes,t=o.Html.slides[i.index];t&&(t.classList.add(e.slide.active),k(t).forEach(function(t){t.classList.remove(e.slide.active)}))},removeClasses:function(){var t=i.settings.classes,e=t.type,n=t.slide;o.Html.root.classList.remove(e[i.settings.type]),o.Html.slides.forEach(function(t){t.classList.remove(n.active)})}};return t.on(["destroy","update"],function(){e.removeClasses()}),t.on(["resize","update"],function(){e.mount()}),t.on("move.after",function(){e.activeClass()}),e},Run:function(c,n,i){var l={mount:function(){this._o=!1},make:function(t){var e=this;c.disabled||(c.settings.waitForTransition&&c.disable(),this.move=t,i.emit("run.before",this.move),this.calculate(),i.emit("run",this.move),n.Transition.after(function(){e.isStart()&&i.emit("run.start",e.move),e.isEnd()&&i.emit("run.end",e.move),e.isOffset()&&(e._o=!1,i.emit("run.offset",e.move)),i.emit("run.after",e.move),c.enable()}))},calculate:function(){var t,e,n,i,o,r=this.move,s=this.length,a=r.steps,r=r.direction,u=1;if("="===r)return c.settings.bound&&h(a)>s?void(c.index=s):void(c.index=a);">"!==r||">"!==a?"<"!==r||"<"!==a?("|"===r&&(u=c.settings.perView||1),">"===r||"|"===r&&">"===a?(i=u,o=c.index,s<(o=c.isType("carousel")?o+i:o+(i-o%i))&&(this._o=!0),c.index=(i=o,o=u,n=l.length,i<=n?i:c.isType("carousel")?i-(n+1):c.settings.rewind?l.isBound()&&!l.isEnd()?n:0:l.isBound()?n:Math.floor(n/o)*o)):"<"===r||"|"===r&&"<"===a?(i=u,n=c.index,(o=c.isType("carousel")?n-i:(Math.ceil(n/i)-1)*i)<0&&(this._o=!0),c.index=(t=o,u=u,e=l.length,0<=t?t:c.isType("carousel")?t+(e+1):c.settings.rewind?l.isBound()&&l.isStart()?e:Math.floor(e/u)*u:0)):f("Invalid direction pattern [".concat(r).concat(a,"] has been used"))):c.index=0:c.index=s},isStart:function(){return c.index<=0},isEnd:function(){return c.index>=this.length},isOffset:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;return t?!!this._o&&("|>"===t?"|"===this.move.direction&&">"===this.move.steps:"|<"===t?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===t):this._o},isBound:function(){return c.isType("slider")&&"center"!==c.settings.focusAt&&c.settings.bound}};return v(l,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?h(e)?h(e):e:0}}}),v(l,"length",{get:function(){var t=c.settings,e=n.Html.slides.length;return this.isBound()?e-1-(h(t.perView)-1)+h(t.focusAt):e-1}}),v(l,"offset",{get:function(){return this._o}}),l},Swipe:function(a,u,c){var i=new T,l=0,f=0,d=0,e=!1,o=!!R&&{passive:!0},t={mount:function(){this.bindSwipeStart()},start:function(t){e||a.disabled||(this.disable(),t=this.touches(t),l=null,f=h(t.pageX),d=h(t.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),c.emit("swipe.start"))},move:function(t){if(!a.disabled){var e=a.settings,n=e.touchAngle,i=e.touchRatio,e=e.classes,o=this.touches(t),r=h(o.pageX)-f,o=h(o.pageY)-d,s=Math.abs(r<<2),o=Math.abs(o<<2),s=Math.sqrt(s+o),o=Math.sqrt(o);if(!(180*(l=Math.asin(o/s))/Math.PI<n))return!1;t.stopPropagation(),u.Move.make(r*parseFloat(i)),u.Html.root.classList.add(e.dragging),c.emit("swipe.move")}},end:function(t){var e,n,i,o,r;a.disabled||(e=(i=a.settings).perSwipe,n=i.touchAngle,i=i.classes,o=this.touches(t),t=this.threshold(t),o=o.pageX-f,r=180*l/Math.PI,this.enable(),t<o&&r<n?u.Run.make(u.Direction.resolve("".concat(e,"<"))):o<-t&&r<n?u.Run.make(u.Direction.resolve("".concat(e,">"))):u.Move.make(),u.Html.root.classList.remove(i.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),c.emit("swipe.end"))},bindSwipeStart:function(){var e=this,t=a.settings,n=t.swipeThreshold,t=t.dragThreshold;n&&i.on(P[0],u.Html.wrapper,function(t){e.start(t)},o),t&&i.on(P[1],u.Html.wrapper,function(t){e.start(t)},o)},unbindSwipeStart:function(){i.off(P[0],u.Html.wrapper,o),i.off(P[1],u.Html.wrapper,o)},bindSwipeMove:function(){var e=this;i.on(C,u.Html.wrapper,w(function(t){e.move(t)},a.settings.throttle),o)},unbindSwipeMove:function(){i.off(C,u.Html.wrapper,o)},bindSwipeEnd:function(){var e=this;i.on(L,u.Html.wrapper,function(t){e.end(t)})},unbindSwipeEnd:function(){i.off(L,u.Html.wrapper)},touches:function(t){return-1<V.indexOf(t.type)?t:t.touches[0]||t.changedTouches[0]},threshold:function(t){var e=a.settings;return-1<V.indexOf(t.type)?e.dragThreshold:e.swipeThreshold},enable:function(){return e=!1,u.Transition.enable(),this},disable:function(){return e=!0,u.Transition.disable(),this}};return c.on("build.after",function(){u.Html.root.classList.add(a.settings.classes.swipeable)}),c.on("destroy",function(){t.unbindSwipeStart(),t.unbindSwipeMove(),t.unbindSwipeEnd(),i.destroy()}),t},Images:function(t,e,n){var i=new T,o={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",function(){o.unbind(),i.destroy()}),o},Anchors:function(t,e,n){var i=new T,o=!1,r=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){r&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(r=!0,!o){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1;o=!0}return this},attach:function(){if(r=!1,o){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0;o=!1}return this}};return v(s,"items",{get:function(){return s._a}}),n.on("swipe.move",function(){s.detach()}),n.on("swipe.end",function(){e.Transition.after(function(){s.attach()})}),n.on("destroy",function(){s.attach(),s.unbind(),i.destroy()}),s},Controls:function(o,n,t){var i=new T,r=!!R&&{passive:!0},s={mount:function(){this._n=n.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=n.Html.root.querySelectorAll(M),this._arrowControls={previous:n.Html.root.querySelectorAll(G),next:n.Html.root.querySelectorAll(F)},this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(t){var e=o.settings,t=t[o.index];t&&(t.classList.add(e.classes.nav.active),k(t).forEach(function(t){t.classList.remove(e.classes.nav.active)}))},removeClass:function(t){t=t[o.index];t&&t.classList.remove(o.settings.classes.nav.active)},setArrowState:function(){var t,e;o.settings.rewind||(t=s._arrowControls.next,e=s._arrowControls.previous,this.resetArrowState(t,e),0===o.index&&this.disableArrow(e),o.index===n.Run.length&&this.disableArrow(t))},resetArrowState:function(){for(var e=o.settings,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(t){H(t).forEach(function(t){t.classList.remove(e.classes.arrow.disabled)})})},disableArrow:function(){for(var e=o.settings,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(t){H(t).forEach(function(t){t.classList.add(e.classes.arrow.disabled)})})},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){R||"touchstart"!==t.type||t.preventDefault();t=t.currentTarget.getAttribute("data-glide-dir");n.Run.make(n.Direction.resolve(t))}};return v(s,"items",{get:function(){return s._c}}),t.on(["mount.after","move.after"],function(){s.setActive()}),t.on(["mount.after","run"],function(){s.setArrowState()}),t.on("destroy",function(){s.removeBindings(),s.removeActive(),i.destroy()}),s},Keyboard:function(n,i,t){var e=new T,o={mount:function(){n.settings.keyboard&&this.bind()},bind:function(){e.on("keyup",document,this.press)},unbind:function(){e.off("keyup",document)},press:function(t){var e=n.settings.perSwipe;"ArrowRight"===t.code&&i.Run.make(i.Direction.resolve("".concat(e,">"))),"ArrowLeft"===t.code&&i.Run.make(i.Direction.resolve("".concat(e,"<")))}};return t.on(["destroy","update"],function(){o.unbind()}),t.on("update",function(){o.mount()}),t.on("destroy",function(){e.destroy()}),o},Autoplay:function(e,n,i){var o=new T,t={mount:function(){this.enable(),this.start(),e.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var t=this;this._e&&(this.enable(),e.settings.autoplay)&&l(this._i)&&(this._i=setInterval(function(){t.stop(),n.Run.make(">"),t.start(),i.emit("autoplay")},this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;o.on("mouseover",n.Html.root,function(){t._e&&t.stop()}),o.on("mouseout",n.Html.root,function(){t._e&&t.start()})},unbind:function(){o.off(["mouseover","mouseout"],n.Html.root)}};return v(t,"time",{get:function(){return h(n.Html.slides[e.index].getAttribute("data-glide-autoplay")||e.settings.autoplay)}}),i.on(["destroy","update"],function(){t.unbind()}),i.on(["run.before","swipe.start","update"],function(){t.stop()}),i.on(["pause","destroy"],function(){t.disable(),t.stop()}),i.on(["run.after","swipe.end"],function(){t.start()}),i.on(["play"],function(){t.enable(),t.start()}),i.on("update",function(){t.mount()}),i.on("destroy",function(){o.destroy()}),t},Breakpoints:function(t,e,n){var i=new T,o=t.settings,r=N(o.breakpoints),s=Object.assign({},o),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: ".concat(e,"px)")).matches)return t[e];return s}};return Object.assign(o,a.match(r)),i.on("resize",window,w(function(){t.settings=p(o,a.match(r))},t.settings.throttle)),n.on("update",function(){r=N(r),s=Object.assign({},o)}),n.on("destroy",function(){i.off("resize",window)}),a}},j=z;if("function"!=typeof m&&null!==m)throw new TypeError("Super expression must either be null or a function");j.prototype=Object.create(m.prototype,{constructor:{value:j,writable:!0,configurable:!0}}),s(j,m);var X=E(z);function z(){return i(this,z),X.apply(this,arguments)}return t(z,[{key:"mount",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e(r(z.prototype),"mount",this).call(this,Object.assign({},Y,t))}}]),z});