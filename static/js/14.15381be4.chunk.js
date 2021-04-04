(this["webpackJsonpsohocera-react"]=this["webpackJsonpsohocera-react"]||[]).push([[14],{136:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(1),i=t(133),o=function(n){var e=n.as,t=n.errors,o=n.name,a=n.message,c=n.render,s=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e.indexOf(t=o[r])>=0||(i[t]=n[t]);return i}(n,["as","errors","name","message","render"]),u=Object(i.c)(),d=Object(i.a)(t||u.errors,o);if(!d)return null;var l=d.message,h=d.types,m=Object.assign({},s,{children:l||a});return Object(r.isValidElement)(e)?Object(r.cloneElement)(e,m):c?c({message:l||a,messages:h}):Object(r.createElement)(e||r.Fragment,m)}},137:function(n,e,t){"use strict";var r=t(1),i=t(6);e.a=function(n){var e=Object(i.g)();Object(r.useEffect)((function(){return n.some((function(n){var t=n.condition,r=n.to;return t&&e.push(r),t})),function(){}}),[n,e])}},174:function(n,e,t){"use strict";t.r(e);var r,i=t(27),o=t(26),a=t(136),c=t(1),s=t(133),u=t(14),d=t(6),l=t(23),h=t(137),m=t(62),p=t(2);e.default=Object(l.b)((function(n){var e=n.className,t=Object(u.d)((function(n){return n.userStatus.auth}),u.b),r=Object(u.d)((function(n){var e,t,r;return null===(e=n.userStatus)||void 0===e||null===(t=e.userInfo)||void 0===t||null===(r=t.user)||void 0===r?void 0:r.role}),u.b),i=Object(u.d)((function(n){var e;return null===(e=n.error)||void 0===e?void 0:e.user_signup}),u.b);Object(h.a)(Object(c.useMemo)((function(){return[{condition:r>=1,to:"/agency-dashboard"},{condition:t,to:"/user"}]}),[r,t]));var l=Object(s.b)(),f=l.register,b=l.handleSubmit,g=l.errors,j=l.watch,x=Object(d.g)(),O=Object(c.useRef)({});O.current=j("password","");var k=Object(u.c)();return Object(p.jsx)("main",{className:"".concat(e," form d-flex align-items-center flex-grow-1"),children:Object(p.jsxs)("section",{className:"form__form",children:[Object(p.jsx)("p",{className:"fs__title--main fw-bold",children:"\u0110\u0103ng k\xfd Ngay"}),Object(p.jsx)("p",{className:"fs__text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),Object(p.jsxs)("form",{onSubmit:b((function(n){n.rePassword;var e=Object(o.a)(n,["rePassword"]);k(Object(m.c)(e,(function(n){1===n&&x.push("/agency-dashboard"),0===n?x.push("/getting-report"):x.push("/")})))})),children:[Object(p.jsx)("input",{type:"text",name:"name",placeholder:"T\xean \u0110\u0103ng nh\u1eadp",ref:f({required:"B\u1ea1n c\u1ea7n nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp",minLength:{value:6,message:"T\xean \u0111\u0103ng nh\u1eadp c\xf3 \xedt nh\u1ea5t 6 k\xfd t\u1ef1"},pattern:{value:/^[a-zA-Z0-9]{6,}$/,message:"T\xean \u0111\u0103ng nh\u1eadp kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ee9a kho\u1ea3ng tr\u1ed1ng v\xe0 k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t"}})}),Object(p.jsx)("input",{type:"email",name:"email",placeholder:"Email",ref:f({required:"B\u1ea1n c\u1ea7n nh\u1eadp email"})}),Object(p.jsx)("input",{type:"password",name:"password",placeholder:"M\u1eadt kh\u1ea9u",ref:f({required:"B\u1ea1n c\u1ea7n nh\u1eadp m\u1eadt kh\u1ea9u",minLength:{value:6,message:"M\u1eadt kh\u1ea9u c\u1ea7n c\xf3 \xedt nh\u1ea5t 6 k\xfd t\u1ef1"}})}),Object(p.jsx)("input",{type:"password",name:"rePassword",placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",ref:f({required:"B\u1ea1n c\u1ea7n nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",validate:function(n){return n===O.current||"M\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp"}})}),Object(p.jsx)("input",{type:"submit",value:"\u0110\u0103ng k\xfd"}),Object(p.jsx)("div",{className:"error",children:i}),0!==Object.keys(g).length&&Object(p.jsx)(a.a,{errors:g,name:Object.keys(g)[0]})]})]})})}))(r||(r=Object(i.a)(['\n  width: 100%;\n\n  .form {\n    /* &__img {\n      width: 60%;\n      display: flex;\n      background-color: rgba(0, 0, 0, 0.4);\n      flex-direction: column;\n      justify-content: space-between;\n      padding: 3rem 100px;\n      position: relative;\n      &::after {\n        content: "";\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        background-image: url(/images/home3-slide-1.jpg);\n        background-size: cover;\n      }\n      p {\n        max-width: 400px;\n        font-weight: bold;\n        font-size: 2.5em;\n      }\n      &__logo {\n        > img {\n          width: 200px;\n        }\n      }\n      &__link {\n        a {\n          margin-right: 10px;\n          font-weight: bolder;\n        }\n      }\n      @media '," {\n        width: 50%;\n      }\n    } */\n    &__form {\n      text-align: center;\n      width: 100%;\n\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      padding: 0 40px;\n      > form {\n        margin: 0 auto;\n        width: 400px;\n        display: flex;\n        flex-direction: column;\n        input {\n          text-indent: 20px;\n          background-color: black;\n          color: #fafafa;\n          height: 50px;\n          margin: 10px 0;\n          border-radius: 8px;\n          border: 1px solid #fafafa;\n          font-weight: bold;\n          outline: none;\n          transition: border 0.2s ease-in;\n          &:focus {\n            border: 3px solid ",';\n          }\n        }\n        input[type="submit"] {\n          background-color: ',";\n          color: #fafafa;\n          border-width: 3px;\n          border-color: ",';\n          &:hover {\n          }\n        }\n        input[type="date"] {\n          text-indent: 10px;\n          &::-webkit-calendar-picker-indicator {\n            cursor: pointer;\n            filter: invert(1);\n            margin-right: 10px;\n          }\n        }\n        input::-webkit-input-placeholder {\n          color: #fafafa;\n        }\n      }\n      /* @media '," {\n        width: 50%;\n      } */\n      @media "," {\n        width: 100%;\n      }\n      @media "," {\n        > form {\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.breakPoints.xl}),(function(n){return n.theme.colorSecondary}),(function(n){return n.theme.colorSecondary}),(function(n){return n.theme.colorSecondary}),(function(n){return n.theme.breakPoints.xl}),(function(n){return n.theme.breakPoints.lg}),(function(n){return n.theme.breakPoints.sm}))}}]);
//# sourceMappingURL=14.15381be4.chunk.js.map