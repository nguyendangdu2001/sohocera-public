(this["webpackJsonpsohocera-react"]=this["webpackJsonpsohocera-react"]||[]).push([[5],{110:function(t,e,r){"use strict";var n=r(32),s=r.n(n),i=r(10);e.a=function(t){var e=Object(i.c)((function(t){var e;return null===(e=t.userStatus.userInfo)||void 0===e?void 0:e.token}));return s.a.defaults.headers={"Content-Type":"application/json",Authorization:e?"Bearer ".concat(e):"  "},s.a}},114:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(21),s=r.n(n),i=r(27),o=r(118),a=r(31),u=r(110),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,e=Object(u.a)(),r=Object(o.a)(["blogs",{take:t}],Object(i.a)(s.a.mark((function r(){var n,i;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.get("".concat(a.a.apiGateWay,"/blog?take=").concat(t));case 2:return n=r.sent,i=n.data,console.log(i),r.abrupt("return",i);case 6:case"end":return r.stop()}}),r)}))));return r}},116:function(t,e,r){"use strict";var n,s=r(17),i=(r(0),r(9)),o=r(15),a=r(1);e.a=Object(o.b)((function(t){var e=t.slug,r=t.name,n=(t.shortDesc,t.className),s=t.thumbnail;return Object(a.jsx)(i.b,{to:"/blog/".concat(e),className:n,children:Object(a.jsxs)("div",{className:"blog__card",children:[Object(a.jsx)("div",{className:"blog__card__img",children:Object(a.jsx)("img",{src:s,alt:r})}),Object(a.jsxs)("div",{className:"blog__card__body",children:[Object(a.jsx)("div",{className:"blog__card__body__title",children:Object(a.jsx)("p",{className:"fs__title",children:r})}),Object(a.jsx)("div",{className:"blog__card__body__content",children:Object(a.jsx)("p",{className:"fs__text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus debitis consequuntur nemo optio rem."})})]})]})})}))(n||(n=Object(s.a)(["\n  .blog__card {\n    /* $radius: 12px; */\n    background-color: ",";\n    border-radius: 12px;\n    &__img {\n      > img {\n        border-top-left-radius: 12px;\n        border-top-right-radius: 12px;\n        width: 100%;\n        height: 200px;\n        object-fit: cover;\n      }\n    }\n    &__body {\n      padding: 20px;\n      &__title {\n        line-height: 30px;\n        font-weight: bolder;\n        p {\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          -webkit-line-clamp: 3;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n      }\n      &__content {\n        p {\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          -webkit-line-clamp: 3;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n      }\n    }\n  }\n"])),(function(t){return t.theme.colorCard}))},118:function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var n=r(2),s=r(6),i=r(3),o=r(8),a=r(24),u=r(18),c=r(29),l=function(t){function e(e,r){var n;return(n=t.call(this)||this).client=e,n.options=r,n.trackedProps=[],n.bindMethods(),n.setOptions(r),n}Object(s.a)(e,t);var r=e.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),h(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&f(t,e));var t,e},r.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&f(t,e));var t,e},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var s=this.hasListeners();s&&d(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(e),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t){var e=this,r={};return Object.keys(t).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return e.trackedProps.includes(r)||e.trackedProps.push(r),t[r]}})})),r},r.getNextResult=function(t){var e=this;return new Promise((function(r,n){var s=e.subscribe((function(e){e.isFetching||(s(),e.isError&&(null==t?void 0:t.throwOnError)?n(e.error):r(e))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(t)},r.fetchOptimistic=function(t){var e=this,r=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return e.createResult(n,r)}))},r.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(i.h)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!i.e&&!this.currentResult.isStale&&Object(i.f)(this.options.staleTime)){var e=Object(i.q)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},r.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!i.e&&!1!==this.options.enabled&&Object(i.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||a.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(t,e){var r,n,s=this.currentQuery,o=this.options,a=this.currentResult,u=this.currentResultState,l=this.currentResultOptions,p=t!==s,b=p?t.state:this.currentQueryInitialState,v=p?this.currentResult:this.previousQueryResult,m=t.state,y=m.dataUpdatedAt,O=m.error,g=m.errorUpdatedAt,R=m.isFetching,j=m.status,x=!1,_=!1;if(e.optimisticResults){var S=this.hasListeners(),Q=!S&&h(t,e),w=S&&d(t,s,e,o);(Q||w)&&(R=!0,y||(j="loading"))}if(e.keepPreviousData&&!m.dataUpdateCount&&(null==v?void 0:v.isSuccess)&&"error"!==j)r=v.data,y=v.dataUpdatedAt,j=v.status,x=!0;else if(e.select&&"undefined"!==typeof m.data)if(a&&m.data===(null==u?void 0:u.data)&&e.select===(null==l?void 0:l.select))r=a.data;else try{r=e.select(m.data),!1!==e.structuralSharing&&(r=Object(i.m)(null==a?void 0:a.data,r))}catch(k){Object(c.a)().error(k),O=k,g=Date.now(),j="error"}else r=m.data;"undefined"!==typeof e.placeholderData&&"undefined"===typeof r&&"loading"===j&&("undefined"!==typeof(n=(null==a?void 0:a.isPlaceholderData)&&e.placeholderData===(null==l?void 0:l.placeholderData)?a.data:"function"===typeof e.placeholderData?e.placeholderData():e.placeholderData)&&(j="success",r=n,_=!0));return{status:j,isLoading:"loading"===j,isSuccess:"success"===j,isError:"error"===j,isIdle:"idle"===j,data:r,dataUpdatedAt:y,error:O,errorUpdatedAt:g,failureCount:m.fetchFailureCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>b.dataUpdateCount||m.errorUpdateCount>b.errorUpdateCount,isFetching:R,isLoadingError:"error"===j&&0===m.dataUpdatedAt,isPlaceholderData:_,isPreviousData:x,isRefetchError:"error"===j&&0!==m.dataUpdatedAt,isStale:f(t,e),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var r=this.options,n=r.notifyOnChangeProps,s=r.notifyOnChangePropsExclusions;if(!n&&!s)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var i="tracked"===n?this.trackedProps:n;return Object.keys(t).some((function(r){var n=r,o=t[n]!==e[n],a=null==i?void 0:i.some((function(t){return t===r})),u=null==s?void 0:s.some((function(t){return t===r}));return o&&!u&&(!i||a)}))},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(i.o)(this.currentResult,e)){var r={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(r.listeners=!0),this.notify(Object(n.a)({},r,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;o.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})}))},e}(u.a);function h(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&f(t,e))}(t,e)}function d(t,e,r,n){return!1!==r.enabled&&(t!==e||!1===n.enabled)&&f(t,r)}function f(t,e){return t.isStaleByTime(e.staleTime)}var p=r(0),b=r.n(p);function v(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var m=b.a.createContext(v()),y=r(108);function O(t,e){var r=b.a.useRef(!1),n=b.a.useState(0)[1],s=Object(y.b)(),i=b.a.useContext(m),a=s.defaultQueryObserverOptions(t);a.optimisticResults=!0,a.onError&&(a.onError=o.a.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=o.a.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=o.a.batchCalls(a.onSettled)),a.suspense&&"number"!==typeof a.staleTime&&(a.staleTime=1e3),(a.suspense||a.useErrorBoundary)&&(i.isReset()||(a.retryOnMount=!1));var u=b.a.useRef();u.current||(u.current=new e(s,a));var c=u.current.getOptimisticResult(a);if(b.a.useEffect((function(){r.current=!0,i.clearReset();var t=u.current.subscribe(o.a.batchCalls((function(){r.current&&n((function(t){return t+1}))})));return u.current.updateResult(),function(){r.current=!1,t()}}),[i]),b.a.useEffect((function(){u.current.setOptions(a,{listeners:!1})}),[a]),a.suspense&&c.isLoading)throw u.current.fetchOptimistic(a).then((function(t){var e=t.data;null==a.onSuccess||a.onSuccess(e),null==a.onSettled||a.onSettled(e,null)})).catch((function(t){i.clearReset(),null==a.onError||a.onError(t),null==a.onSettled||a.onSettled(void 0,t)}));if((a.suspense||a.useErrorBoundary)&&c.isError)throw c.error;return"tracked"===a.notifyOnChangeProps&&(c=u.current.trackResult(c)),c}function g(t,e,r){return O(Object(i.k)(t,e,r),l)}},136:function(t,e,r){"use strict";r.r(e);var n,s=r(17),i=(r(0),r(15)),o=r(116),a=r(114),u=function(t,e,r){for(var n=[],s=0,i=t.length;s<i;)n.push(r(t.slice(s,s+=e),Math.floor(s/e)));return n},c=r(1);e.default=Object(i.b)((function(t){var e=t.className,r=Object(a.a)(6).data;return Object(c.jsxs)("div",{className:e,children:[Object(c.jsxs)("header",{className:"container",children:[Object(c.jsx)("p",{className:"fs__title--main text-center fw-bolder mt-5",children:"Blog"}),Object(c.jsx)("p",{className:"fs__text text-center w-lg-50 mx-auto",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus veniam, eum quo sed voluptatum neque aliquid dolorem, error quidem officia temporibus voluptatibus minus eligendi architecto."})]}),Object(c.jsx)("main",{className:"container",children:r&&u(r.blogs,3,(function(t,e){return Object(c.jsx)("div",{className:"row mt-lg-5",children:t.map((function(t){return Object(c.jsx)("div",{className:"col-12 col-lg-4 mb-4 mb-lg-0",children:Object(c.jsx)(o.a,{name:t.name_b,slug:t.slug,thumbnail:t.thumbnail})},t.id_blog)}))},e)}))})]})}))(n||(n=Object(s.a)([""])))}}]);
//# sourceMappingURL=5.b0ad147d.chunk.js.map