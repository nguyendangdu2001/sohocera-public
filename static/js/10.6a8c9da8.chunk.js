(this["webpackJsonpsohocera-react"]=this["webpackJsonpsohocera-react"]||[]).push([[10],{134:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(1),i=t(133),c=function(n){var e=n.as,t=n.errors,c=n.name,o=n.message,s=n.render,a=function(n,e){if(null==n)return{};var t,r,i={},c=Object.keys(n);for(r=0;r<c.length;r++)e.indexOf(t=c[r])>=0||(i[t]=n[t]);return i}(n,["as","errors","name","message","render"]),l=Object(i.c)(),d=Object(i.a)(t||l.errors,c);if(!d)return null;var h=d.message,m=d.types,u=Object.assign({},a,{children:h||o});return Object(r.isValidElement)(e)?Object(r.cloneElement)(e,u):s?s({message:h||o,messages:m}):Object(r.createElement)(e||r.Fragment,u)}},137:function(n,e,t){"use strict";var r=t(134),i=(t(1),t(2));e.a=function(n){var e=n.errors;return Object(i.jsx)(i.Fragment,{children:0!==Object.keys(e).length&&Object(i.jsx)(r.a,{errors:e,name:Object.keys(e)[0]})})}},172:function(n,e,t){"use strict";t.r(e);var r,i=t(30),c=(t(1),t(133)),o=t(13),s=t(25),a=t(15),l=t(59),d=t(137),h=t(2);e.default=Object(s.b)((function(n){var e=n.className,t=n.history,r=Object(c.b)(),i=r.register,s=r.handleSubmit,m=r.errors,u=Object(a.b)();return Object(h.jsxs)("main",{className:"".concat(e," form d-flex"),children:[Object(h.jsxs)("section",{className:"form__img d-none d-lg-flex",children:[Object(h.jsx)("div",{className:"form__img__logo",children:Object(h.jsx)("img",{src:"/images/logo-footer.png",alt:"Era Logo"})}),Object(h.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, libero?"}),Object(h.jsxs)("nav",{className:"form__img__link",children:[Object(h.jsx)(o.b,{to:"/",children:"Trang ch\u1ee7"}),Object(h.jsx)("a",{href:"",children:"V\u1ec1 ch\xfang t\xf4i"}),Object(h.jsx)("a",{href:"",children:"B\xe0i vi\u1ebft"}),Object(h.jsx)("a",{href:"",children:"FAQs"})]})]}),Object(h.jsxs)("section",{className:"form__form",children:[Object(h.jsx)("p",{className:"fs__title--main fw-bold",children:"\u0110\u0103ng nh\u1eadp Ngay"}),Object(h.jsx)("p",{className:"fs__text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),Object(h.jsxs)("form",{onSubmit:s((function(n){u(Object(l.a)(n,(function(n){console.log("1"===n),"1"===n&&t.push("/agency-dashboard"),"2"===n&&t.push("/")})))})),children:[Object(h.jsx)("input",{type:"text",name:"name",placeholder:"Username",ref:i({required:"B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"})}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"M\u1eadt kh\u1ea9u",ref:i({required:"B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"})}),Object(h.jsx)(d.a,{errors:m}),Object(h.jsx)("div",{className:"text-end my-1",children:Object(h.jsx)("a",{href:"#",children:"Qu\xean m\u1eadt kh\u1ea9u"})}),Object(h.jsx)("input",{type:"submit",value:"\u0110\u0103ng Nh\u1eadp"}),Object(h.jsx)("div",{className:"my-1",children:Object(h.jsxs)("div",{className:"text-center",children:["B\u1ea1n ch\u01b0a c\xf3 t\xe0i kho\u1ea3n ? ",Object(h.jsx)(o.b,{to:"/signup",children:"\u0110\u0103ng k\xfd"})]})})]})]})]})}))(r||(r=Object(i.a)(['\n  width: 100%;\n  height: 100vh;\n  .form {\n    &__img {\n      width: 60%;\n      display: flex;\n      background-color: rgba(0, 0, 0, 0.4);\n      flex-direction: column;\n      justify-content: space-between;\n      padding: 3rem 100px;\n      position: relative;\n      &::after {\n        content: "";\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        background-image: url(/images/home3-slide-1.jpg);\n        background-size: cover;\n      }\n      p {\n        max-width: 400px;\n        font-weight: bold;\n        font-size: 2.5em;\n      }\n      &__logo {\n        > img {\n          width: 200px;\n        }\n      }\n      &__link {\n        a {\n          margin-right: 10px;\n          font-weight: bolder;\n        }\n      }\n      @media '," {\n        width: 50%;\n      }\n    }\n    &__form {\n      text-align: center;\n      width: 40%;\n      height: 100vh;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      padding: 0 40px;\n      > form {\n        margin: 0 auto;\n        width: 400px;\n        display: flex;\n        flex-direction: column;\n        input {\n          text-indent: 20px;\n          background-color: black;\n          color: #fafafa;\n          height: 50px;\n          margin: 10px 0;\n          border-radius: 8px;\n          border: 1px solid #fafafa;\n          font-weight: bold;\n          outline: none;\n          transition: border 0.2s ease-in;\n          &:focus {\n            border: 3px solid ",';\n          }\n        }\n        input[type="submit"] {\n          background-color: ',";\n          color: #000;\n          border-width: 3px;\n          border-color: ",';\n          &:hover {\n          }\n        }\n        input[type="date"] {\n          text-indent: 10px;\n          &::-webkit-calendar-picker-indicator {\n            cursor: pointer;\n            filter: invert(1);\n            margin-right: 10px;\n          }\n        }\n        input::-webkit-input-placeholder {\n          color: #fafafa;\n        }\n      }\n      @media '," {\n        width: 50%;\n      }\n      @media "," {\n        width: 100%;\n      }\n      @media "," {\n        > form {\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.breakPoints.xl}),(function(n){return n.theme.colorSecondary}),(function(n){return n.theme.colorSecondary}),(function(n){return n.theme.colorSecondary}),(function(n){return n.theme.breakPoints.xl}),(function(n){return n.theme.breakPoints.lg}),(function(n){return n.theme.breakPoints.sm}))}}]);
//# sourceMappingURL=10.6a8c9da8.chunk.js.map