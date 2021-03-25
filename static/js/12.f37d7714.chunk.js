(this["webpackJsonpsohocera-react"]=this["webpackJsonpsohocera-react"]||[]).push([[12],{115:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(0),i=t(112),o=function(e){var n=e.as,t=e.errors,o=e.name,c=e.message,a=e.render,s=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n.indexOf(t=o[r])>=0||(i[t]=e[t]);return i}(e,["as","errors","name","message","render"]),l=Object(i.c)(),d=Object(i.a)(t||l.errors,o);if(!d)return null;var m=d.message,h=d.types,u=Object.assign({},s,{children:m||c});return Object(r.isValidElement)(n)?Object(r.cloneElement)(n,u):a?a({message:m||c,messages:h}):Object(r.createElement)(n||r.Fragment,u)}},126:function(e,n,t){"use strict";t.r(n);var r,i=t(17),o=t(115),c=(t(0),t(112)),a=t(10),s=t(9),l=t(15),d=t(42),m=t(1);n.default=Object(l.b)((function(e){var n=e.className,t=Object(c.b)(),r=t.register,i=t.handleSubmit,l=t.errors,h=Object(a.b)();return Object(m.jsxs)("main",{className:"".concat(n," form d-flex"),children:[Object(m.jsxs)("section",{className:"form__img d-none d-lg-flex",children:[Object(m.jsx)("div",{className:"form__img__logo",children:Object(m.jsx)("img",{src:"/images/logo-footer.png",alt:"Era Logo"})}),Object(m.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, libero?"}),Object(m.jsxs)("nav",{className:"form__img__link",children:[Object(m.jsx)(s.b,{to:"/",children:"Trang ch\u1ee7"}),Object(m.jsx)("a",{href:"",children:"V\u1ec1 ch\xfang t\xf4i"}),Object(m.jsx)("a",{href:"",children:"B\xe0i vi\u1ebft"}),Object(m.jsx)("a",{href:"",children:"FAQs"})]})]}),Object(m.jsxs)("section",{className:"form__form",children:[Object(m.jsx)("p",{className:"fs__title--main fw-bold",children:"\u0110\u0103ng k\xfd Ngay"}),Object(m.jsx)("p",{className:"fs__text",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),Object(m.jsxs)("form",{onSubmit:i((function(e){console.log(e),h(Object(d.c)(e))})),children:[Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Username",ref:r({required:"B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"})}),Object(m.jsx)("input",{type:"text",name:"fullname",placeholder:"H\u1ecd v\xe0 t\xean \u0111\u1ea7y \u0111\u1ee7",ref:r({required:"B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"})}),Object(m.jsxs)("div",{className:"d-flex flex-column flex-md-row",children:[Object(m.jsx)("input",{type:"date",name:"birth",style:{flexGrow:1},placeholder:"Ng\xe0y th\xe1ng n\u0103m sinh",ref:r({required:"B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"}),className:"me-0 me-md-2"}),Object(m.jsx)("input",{type:"text",name:"phoneNumber",placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",style:{flexGrow:1}})]}),Object(m.jsx)("input",{type:"email",name:"email",placeholder:"Email",ref:r({required:"B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"})}),Object(m.jsx)("input",{type:"password",name:"password",placeholder:"M\u1eadt kh\u1ea9u",ref:r({required:"B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"})}),Object(m.jsx)("input",{type:"password",name:"rePassword",placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",ref:r({required:"B\u1ea1n c\u1ea7n nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin"})}),Object(m.jsx)("input",{type:"submit",value:"\u0110\u0103ng k\xfd"}),0!==Object.keys(l).length&&Object(m.jsx)(o.a,{errors:l,name:Object.keys(l)[0]})]})]})]})}))(r||(r=Object(i.a)(['\n  width: 100%;\n  height: 100vh;\n  .form {\n    &__img {\n      width: 60%;\n      display: flex;\n      background-color: rgba(0, 0, 0, 0.4);\n      flex-direction: column;\n      justify-content: space-between;\n      padding: 3rem 100px;\n      position: relative;\n      &::after {\n        content: "";\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        background-image: url(/images/home3-slide-1.jpg);\n        background-size: cover;\n      }\n      p {\n        max-width: 400px;\n        font-weight: bold;\n        font-size: 2.5em;\n      }\n      &__logo {\n        > img {\n          width: 200px;\n        }\n      }\n      &__link {\n        a {\n          margin-right: 10px;\n          font-weight: bolder;\n        }\n      }\n      @media '," {\n        width: 50%;\n      }\n    }\n    &__form {\n      text-align: center;\n      width: 40%;\n      height: 100vh;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      padding: 0 40px;\n      > form {\n        margin: 0 auto;\n        width: 400px;\n        display: flex;\n        flex-direction: column;\n        input {\n          text-indent: 20px;\n          background-color: black;\n          color: #fafafa;\n          height: 50px;\n          margin: 10px 0;\n          border-radius: 8px;\n          border: 1px solid #fafafa;\n          font-weight: bold;\n          outline: none;\n          transition: border 0.2s ease-in;\n          &:focus {\n            border: 3px solid ",';\n          }\n        }\n        input[type="submit"] {\n          background-color: ',";\n          color: #000;\n          border-width: 3px;\n          border-color: ",';\n          &:hover {\n          }\n        }\n        input[type="date"] {\n          text-indent: 10px;\n          &::-webkit-calendar-picker-indicator {\n            cursor: pointer;\n            filter: invert(1);\n            margin-right: 10px;\n          }\n        }\n        input::-webkit-input-placeholder {\n          color: #fafafa;\n        }\n      }\n      @media '," {\n        width: 50%;\n      }\n      @media "," {\n        width: 100%;\n      }\n      @media "," {\n        > form {\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(e){return e.theme.breakPoints.xl}),(function(e){return e.theme.colorSecondary}),(function(e){return e.theme.colorSecondary}),(function(e){return e.theme.colorSecondary}),(function(e){return e.theme.breakPoints.xl}),(function(e){return e.theme.breakPoints.lg}),(function(e){return e.theme.breakPoints.sm}))}}]);
//# sourceMappingURL=12.f37d7714.chunk.js.map