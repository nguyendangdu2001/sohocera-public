(this["webpackJsonpsohocera-react"]=this["webpackJsonpsohocera-react"]||[]).push([[18],{171:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(3),s=n(0),c=n.n(s),a=n(9),u=n(5),o=n(10),i=n(77),l=function(t){function e(e,n){var r;return(r=t.call(this)||this).client=e,r.setOptions(n),r.bindMethods(),r.updateResult(),r}Object(o.a)(e,t);var n=e.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(t){this.options=this.client.defaultMutationOptions(t)},n.onUnsubscribe=function(){var t;this.listeners.length||(null==(t=this.currentMutation)||t.removeObserver(this))},n.onMutationUpdate=function(t){this.updateResult();var e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,Object(r.a)({},this.options,{variables:"undefined"!==typeof t?t:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var t=this.currentMutation?this.currentMutation.state:Object(i.b)();this.currentResult=Object(r.a)({},t,{isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset})},n.notify=function(t){var e=this;a.a.batch((function(){e.mutateOptions&&(t.onSuccess?(null==e.mutateOptions.onSuccess||e.mutateOptions.onSuccess(e.currentResult.data,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(e.currentResult.data,null,e.currentResult.variables,e.currentResult.context)):t.onError&&(null==e.mutateOptions.onError||e.mutateOptions.onError(e.currentResult.error,e.currentResult.variables,e.currentResult.context),null==e.mutateOptions.onSettled||e.mutateOptions.onSettled(void 0,e.currentResult.error,e.currentResult.variables,e.currentResult.context))),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)}))}))},e}(n(35).a),b=n(65);function d(t,e,n){var s=c.a.useRef(!1),o=c.a.useState(0)[1],i=Object(u.j)(t,e,n),d=Object(b.b)(),h=c.a.useRef();h.current?h.current.setOptions(i):h.current=new l(d,i);var p=h.current.getCurrentResult();c.a.useEffect((function(){s.current=!0;var t=h.current.subscribe(a.a.batchCalls((function(){s.current&&o((function(t){return t+1}))})));return function(){s.current=!1,t()}}),[]);var f=c.a.useCallback((function(t,e){h.current.mutate(t,e).catch(u.h)}),[]);if(p.error&&h.current.options.useErrorBoundary)throw p.error;return Object(r.a)({},p,{mutate:f,mutateAsync:p.mutate})}},211:function(t,e,n){"use strict";n.r(e);var r,s,c=n(27),a=n(16),u=n.n(a),o=n(29),i=n(11),l=n(0),b=n(158),d=n(20),h=n(171),p=n(74),f=n(54),j=n(75),O=function(){var t=Object(p.a)(),e=Object(j.a)(),n=Object(i.a)(e,1)[0];return Object(h.a)(function(){var e=Object(o.a)(u.a.mark((function e(n){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("".concat(f.a.apiGateWay,"/dashboard/active"),{code:n});case 2:return r=e.sent,s=r.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onError:function(t){n(t)}})},m=n(2),v=Object(d.b)((function(t){var e=t.className,n=t.step;return Object(m.jsx)("div",{className:"".concat(e," step__nav d-flex justify-content-center"),children:["Nh\u1eadp th\xf4ng tin","Xem demo b\xe1o c\xe1o","Nh\u1eadp m\xe3 k\xedch ho\u1ea1t"].map((function(t,e){return Object(m.jsxs)("div",{className:"step ".concat(n===e?"active":""),children:[Object(m.jsx)("span",{children:e+1})," ",t]},e)}))})}))(r||(r=Object(c.a)(["\n  &.step__nav {\n    margin: 40px 0;\n    .step {\n      margin: 0 20px;\n      &:hover {\n        cursor: pointer;\n      }\n      > span {\n        place-items: center;\n        padding: 4px 10px;\n        border-radius: 50%;\n        border: 3px solid;\n      }\n    }\n    .active {\n      font-weight: bolder;\n      color: ",";\n    }\n  }\n"])),(function(t){return t.theme.colorTextTitle})),x=n(162),g=n.n(x),y=n(8),R=n(65),_=function(){var t=Object(p.a)(),e=Object(j.a)(),n=Object(i.a)(e,1)[0],r=Object(R.b)();return Object(h.a)(function(){var e=Object(o.a)(u.a.mark((function e(n){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.post("".concat(f.a.apiGateWay,"/dashboard/step-2"),n);case 2:return r=e.sent,s=r.data,e.abrupt("return",null===s||void 0===s?void 0:s.rs);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onError:function(t){n(t)},onSettled:function(){r.invalidateQueries(["user","userInfo"])}})},w=Object(l.lazy)((function(){return n.e(10).then(n.bind(null,208))})),k=Object(l.lazy)((function(){return Promise.all([n.e(2),n.e(17)]).then(n.bind(null,215))})),S=Object(l.lazy)((function(){return n.e(11).then(n.bind(null,216))}));e.default=Object(d.b)((function(t){var e=t.className,n=Object(y.g)(),r=_(),s=r.data,c=void 0===s?[]:s,a=r.mutateAsync,d=r.isLoading,h=O(),p=h.mutate,f=h.error,j=h.isLoading,x=d||j,R=Object(b.b)(),M=R.register,E=R.handleSubmit,N=R.errors,C=Object(l.useState)(0),L=Object(i.a)(C,2),z=L[0],T=L[1],I=[Object(m.jsx)(w,{register:M,errors:N,isLoading:x}),Object(m.jsx)(k,{numbers:c}),Object(m.jsx)(S,{register:M,errors:N,activeCodeError:f,isLoading:x})],A=function(){var t=Object(o.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,t.t0=z,t.next=0===t.t0?4:2===t.t0?8:10;break;case 4:return console.log(e),t.next=7,a(e);case 7:return t.abrupt("break",10);case 8:return p(e.code,{onSuccess:function(){n.push("/user/pdf")}}),t.abrupt("break",10);case 10:G(),t.next=15;break;case 13:t.prev=13,t.t1=t.catch(0);case 15:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),G=function(){z<I.length-1&&T((function(t){return++t}))};return Object(m.jsx)("section",{className:"".concat(e," container step_by_step"),children:Object(m.jsx)("form",{onSubmit:E(A),children:Object(m.jsxs)("main",{className:"step__form my-3",children:[Object(m.jsx)(v,{step:z}),Object(m.jsx)(l.Suspense,{fallback:Object(m.jsx)("div",{id:"loader-wrapper",children:Object(m.jsx)("div",{id:"loader"})}),children:function(t){return I[t]}(z)}),Object(m.jsxs)("section",{className:"step__form__button mt-3",children:[Object(m.jsxs)("button",{type:"button",className:"prev step__from__button button-secondary--outline ".concat(z<=0?"button-disable":""),onClick:function(){return T((function(t){return Math.max(0,t-1)}))},children:[Object(m.jsx)("span",{style:{marginRight:10},children:Object(m.jsx)("i",{className:"fas fa-long-arrow-alt-left"})}),"Tr\u1edf v\u1ec1"]}),Object(m.jsxs)("button",{type:"submit",className:"next step__from__button button-secondary ".concat(x?"disabled":""),children:[x?Object(m.jsx)(g.a,{color:"#fafafa",size:24,loading:!0}):2===z?"Ho\xe0n th\xe0nh":"Ti\u1ebfp theo",!x&&z<2&&Object(m.jsx)("span",{style:{marginLeft:10},children:Object(m.jsx)("i",{className:"fas fa-long-arrow-alt-right"})})]})]})]})})})}))(s||(s=Object(c.a)(["\n  .step__form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    &__button {\n      -webkit-touch-callout: none; /* iOS Safari */\n      -webkit-user-select: none; /* Safari */\n      -khtml-user-select: none; /* Konqueror HTML */\n      -moz-user-select: none; /* Old versions of Firefox */\n      -ms-user-select: none; /* Internet Explorer/Edge */\n      user-select: none;\n      display: flex;\n      justify-content: space-between;\n      > button {\n        padding: 10px 15px;\n        border: 0;\n        font-weight: bolder;\n        min-width: 126px;\n        &.button-disable {\n          visibility: hidden;\n        }\n        /* &:nth-child(1) {\n          background-color: rgba(255, 255, 255, 0);\n          &:hover {\n            background-color: rgba(255, 255, 255, 0.385);\n          }\n        }\n        &:nth-child(2) {\n          color: #000;\n          &:hover {\n            background-color: #ffc267d7;\n          }\n        } */\n      }\n    }\n  }\n"])))}}]);
//# sourceMappingURL=18.84f38dcc.chunk.js.map