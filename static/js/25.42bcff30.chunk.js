(this["webpackJsonpsohocera-react"]=this["webpackJsonpsohocera-react"]||[]).push([[25],{219:function(n,e,t){"use strict";var r=t(0),i=t(12);e.a=function(n){var e=Object(i.g)();Object(r.useEffect)((function(){return n.some((function(n){var t=n.condition,r=n.to,i=n.cb;return t&&(e.replace(r),null===i||void 0===i||i()),t})),function(){}}),[n,e])}},266:function(n,e,t){"use strict";t.r(e);var r,i=t(22),o=t(0),c=t(57),a=t(14),s=t(19),d=t(217),l=t.n(d),u=t(8),b=t(62),f=t(90),h=t(219),p=t(1);e.default=Object(o.memo)(Object(s.b)((function(n){var e=n.className,t=n.history,r=Object(u.d)((function(n){return n.userStatus.auth}),u.b),i=Object(u.d)((function(n){var e,t,r;return null===(e=n.userStatus)||void 0===e||null===(t=e.userInfo)||void 0===t||null===(r=t.user)||void 0===r?void 0:r.role}),u.b),s=Object(u.d)((function(n){var e;return null===(e=n.error)||void 0===e?void 0:e.user_login}),u.b),d=Object(u.d)((function(n){var e;return null===(e=n.loading)||void 0===e?void 0:e.user_login}),u.b);Object(h.a)(Object(o.useMemo)((function(){return[{condition:i>=1,to:"/agency-dashboard"},{condition:r,to:"/user"}]}),[i,r]));var m=Object(c.b)(),x=m.register,j=m.handleSubmit,g=m.errors,O=Object(u.c)();return Object(p.jsx)("main",{className:"".concat(e," form d-flex align-items-center flex-grow-1"),children:Object(p.jsxs)("section",{className:"form__form",children:[Object(p.jsx)("p",{className:"fs__title--main fw-bold",style:{textTransform:"uppercase"},children:"\u0110\u0103ng nh\u1eadp"}),Object(p.jsxs)("form",{onSubmit:j((function(n){O(Object(b.a)(n,(function(n){return 1===n?t.push("/agency-dashboard"):0===n?t.push("/getting-report"):t.push("/")})))})),children:[Object(p.jsx)("input",{type:"text",name:"name",placeholder:"Username",disabled:d,ref:x({required:"B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"})}),Object(p.jsx)("input",{type:"password",name:"password",placeholder:"M\u1eadt kh\u1ea9u",disabled:d,ref:x({required:"B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"})}),Object(p.jsx)(f.a,{errors:g}),Object(p.jsx)("div",{className:"error",children:s}),Object(p.jsx)("div",{className:"text-end my-1",children:Object(p.jsx)("a",{href:"#",children:"Qu\xean m\u1eadt kh\u1ea9u"})}),Object(p.jsx)("button",{type:"submit",className:"d-inline-flex justify-content-center align-items-center",disabled:d,children:d?Object(p.jsx)(l.a,{color:"#fafafa",size:24,loading:!0}):Object(p.jsx)("div",{children:"\u0110\u0103ng Nh\u1eadp"})}),Object(p.jsx)("div",{className:"my-1",children:Object(p.jsxs)("div",{className:"text-center",children:["B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n ? ",Object(p.jsx)(a.b,{to:"/signup",children:"\u0110\u0103ng k\xfd"})]})})]})]})})}))(r||(r=Object(i.a)(['\n  width: 100%;\n  .form {\n    /* &__img {\n      width: 60%;\n      display: flex;\n      background-color: rgba(0, 0, 0, 0.4);\n      flex-direction: column;\n      justify-content: space-between;\n      padding: 3rem 100px;\n      position: relative;\n      &::after {\n        content: "";\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        background-image: url(/images/home3-slide-1.jpg);\n        background-size: cover;\n      }\n      p {\n        max-width: 400px;\n        font-weight: bold;\n        font-size: 2.5em;\n      }\n      &__logo {\n        > img {\n          width: 200px;\n        }\n      }\n      &__link {\n        a {\n          margin-right: 10px;\n          font-weight: bolder;\n        }\n      }\n      @media '," {\n        width: 50%;\n      }\n    } */\n    &__form {\n      text-align: center;\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      padding: 0 40px;\n      > form {\n        margin: 0 auto;\n        width: 600px;\n        display: flex;\n        flex-direction: column;\n        input,\n        button {\n          /* &::placeholder {\n            text-transform: uppercase;\n          } */\n          text-indent: 20px;\n          background-color: black;\n          color: #fafafa;\n          height: 50px;\n          margin: 10px 0;\n          border-radius: 8px;\n          border: 1px solid #fafafa;\n          font-weight: bold;\n          outline: none;\n          transition: border 0.2s ease-in;\n          &:focus {\n            border: 3px solid ",';\n          }\n        }\n        input[type="submit"],\n        button[type="submit"] {\n          background-color: ',";\n          color: #fafafa;\n          border-width: 3px;\n          border-color: ",';\n          &:hover {\n          }\n        }\n        input[type="date"] {\n          text-indent: 10px;\n          &::-webkit-calendar-picker-indicator {\n            cursor: pointer;\n            filter: invert(1);\n            margin-right: 10px;\n          }\n        }\n        input::-webkit-input-placeholder {\n          color: #fafafa;\n        }\n      }\n      /* @media '," {\n        width: 50%;\n      } */\n      @media "," {\n        width: 100%;\n      }\n      @media "," {\n        > form {\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.breakPoints.xl}),(function(n){return n.theme.colorSecondary}),(function(n){return n.theme.colorSecondary}),(function(n){return n.theme.colorSecondary}),(function(n){return n.theme.breakPoints.xl}),(function(n){return n.theme.breakPoints.lg}),(function(n){return n.theme.breakPoints.sm})))}}]);
//# sourceMappingURL=25.42bcff30.chunk.js.map