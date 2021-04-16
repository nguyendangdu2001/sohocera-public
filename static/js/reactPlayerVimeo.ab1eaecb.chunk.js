(this["webpackJsonpsohocera-react"]=this["webpackJsonpsohocera-react"]||[]).push([[12],{196:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}r.default=e,t&&t.set(e,r);return r}(r(0)),u=r(79),a=r(137);function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,r,n,a=f(i);function i(){var e;l(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(d(e=a.call.apply(a,[this].concat(r))),"callPlayer",u.callPlayer),b(d(e),"duration",null),b(d(e),"currentTime",null),b(d(e),"secondsLoaded",null),b(d(e),"mute",(function(){e.setVolume(0)})),b(d(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),b(d(e),"ref",(function(t){e.container=t})),e}return t=i,(r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;this.duration=null,(0,u.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then((function(r){t.container&&(t.player=new r.Player(t.container,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({url:e,autoplay:t.props.playing,muted:t.props.muted,loop:t.props.loop,playsinline:t.props.playsinline,controls:t.props.controls},t.props.config.playerOptions)),t.player.ready().then((function(){var e=t.container.querySelector("iframe");e.style.width="100%",e.style.height="100%"})).catch(t.props.onError),t.player.on("loaded",(function(){t.props.onReady(),t.refreshDuration()})),t.player.on("play",(function(){t.props.onPlay(),t.refreshDuration()})),t.player.on("pause",t.props.onPause),t.player.on("seeked",(function(e){return t.props.onSeek(e.seconds)})),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",(function(e){var r=e.seconds;t.currentTime=r})),t.player.on("progress",(function(e){var r=e.seconds;t.secondsLoaded=r})),t.player.on("bufferstart",t.props.onBuffer),t.player.on("bufferend",t.props.onBufferEnd))}),this.props.onError)}},{key:"refreshDuration",value:function(){var e=this;this.player.getDuration().then((function(t){e.duration=t}))}},{key:"play",value:function(){var e=this.callPlayer("play");e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("unload")}},{key:"seekTo",value:function(e){this.callPlayer("setCurrentTime",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e={width:"100%",height:"100%",overflow:"hidden",display:this.props.display};return o.default.createElement("div",{key:this.props.url,ref:this.ref,style:e})}}])&&p(t.prototype,r),n&&p(t,n),i}(o.Component);t.default=v,b(v,"displayName","Vimeo"),b(v,"canPlay",a.canPlay.vimeo),b(v,"forceLoad",!0)}}]);
//# sourceMappingURL=reactPlayerVimeo.ab1eaecb.chunk.js.map