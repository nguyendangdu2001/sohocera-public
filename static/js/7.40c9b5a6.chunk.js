(this["webpackJsonpsohocera-react"]=this["webpackJsonpsohocera-react"]||[]).push([[7],{110:function(e,t,n){"use strict";var c=n(32),i=n.n(c),a=n(10);t.a=function(e){var t=Object(a.c)((function(e){var t;return null===(t=e.userStatus.userInfo)||void 0===t?void 0:t.token}));return i.a.defaults.headers={"Content-Type":"application/json",Authorization:t?"Bearer ".concat(t):"  "},i.a}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(21),i=n.n(c),a=n(27),r=n(118),s=n(31),o=n(110),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=Object(o.a)(),n=Object(r.a)(["blogs",{take:e}],Object(a.a)(i.a.mark((function n(){var c,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.get("".concat(s.a.apiGateWay,"/blog?take=").concat(e));case 2:return c=n.sent,a=c.data,console.log(a),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)}))));return n}},133:function(e,t,n){"use strict";n.r(t),n.d(t,"Home",(function(){return G}));var c,i,a,r,s,o,l,u=n(0),m=n(111),d=n(17),j=n(15),b=n(1),h=function(e,t){var n=e.className;return Object(b.jsx)("div",{className:"".concat(n," col-4 rounded"),ref:t,children:Object(b.jsx)("a",{href:"#",children:Object(b.jsxs)("div",{className:"home__products__card",children:[Object(b.jsx)("div",{className:"home__products__img",children:Object(b.jsx)("img",{src:"https://www.topclass.com.vn/articles/wp-content/uploads/2021/01/Ly-Qui-Khanh-Tien-bac-khong-mua-duoc-tai-nang.jpg",alt:"Era"})}),Object(b.jsxs)("div",{className:"p-3",children:[Object(b.jsx)("p",{className:"fs__text fw-bold",children:"Lorem ipsum dolor sit."}),Object(b.jsx)("p",{className:"fs__details text-success",children:"70.000\u0111"})]})]})})})},f=Object(j.b)(Object(u.forwardRef)(h))(c||(c=Object(d.a)(["\n  .home__products {\n    a {\n      color: white;\n      &:hover {\n        color: ",";\n      }\n    }\n    &__card {\n      border-radius: 16px;\n    }\n    &__img {\n      height: 200px;\n      > img {\n        border-radius: 16px;\n        height: inherit;\n        width: 100%;\n        object-fit: cover;\n      }\n    }\n  }\n"])),(function(e){return e.theme.colorTextTitle})),p=n(113),x=function(e){var t=Object(u.useRef)([]);return Object(u.useEffect)((function(){return Object(p.a)().reveal(t.current,{delay:200,duration:500,opacity:0,interval:300}),function(){}}),[]),Object(b.jsxs)("section",{className:"home__products container mt-5",children:[Object(b.jsx)("div",{className:"my-4 fs__title fw-bold",children:"S\u1ea3n ph\u1ea9m c\u1ee7a ch\xfang t\xf4i"}),Object(b.jsx)("div",{className:"row mb-4",children:Object(m.a)(Array(3)).map((function(e,n){return Object(b.jsx)(f,{ref:function(e){return t.current[n]=e}},n)}))}),Object(b.jsx)("div",{className:"row",children:Object(m.a)(Array(3)).map((function(e,n){return Object(b.jsx)(f,{ref:function(e){return t.current[n+3]=e}},n)}))})]})},O=n(119),_=n(9),g=function(e,t){var n=e.className,c=e.name,i=e.thumbnail,a=e.created_at,r=e.slug;return Object(b.jsx)("div",{className:"".concat(n," col-12 col-lg-3"),ref:t,children:Object(b.jsx)("div",{className:"home__posts__card",children:Object(b.jsxs)(_.b,{to:"/blog/".concat(r),children:[Object(b.jsx)("div",{className:"home__posts__img",children:Object(b.jsx)("img",{src:i,alt:"Tin t\u1ee9c Era"})}),Object(b.jsxs)("div",{className:"py-1 p-lg-3",children:[Object(b.jsx)("p",{className:"fs__text fw-bold",children:c}),Object(b.jsx)("p",{className:"fs__details text-end",children:Object(b.jsx)(O.a,{datetime:a,locale:"vi"})})]})]})})})},v=Object(j.b)(Object(u.forwardRef)(g))(i||(i=Object(d.a)(["\n  .home__posts {\n    &__card {\n      border-radius: 16px;\n      a {\n        color: white;\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n    &__img {\n      > img {\n        border-radius: 16px;\n        height: 200px;\n        width: 100%;\n        /* height: auto; */\n        object-fit: cover;\n      }\n    }\n  }\n"])),(function(e){return e.theme.colorTextTitle})),N=n(114),w=Object(j.b)((function(e){var t=e.className,n=Object(u.useRef)([]),c=Object(N.a)().data;return Object(u.useEffect)((function(){return Object(p.a)().reveal(n.current,{delay:300,duration:1e3,reset:!1,opacity:0}),function(){}}),[]),Object(b.jsxs)("section",{className:"".concat(t," home__posts container mt-5"),children:[Object(b.jsx)("p",{className:"text-center fs__title fw-bold",children:"B\xe0i vi\u1ebft m\u1edbi nh\u1ea5t"}),Object(b.jsx)("p",{className:"text-center col-12 col-lg-6 fs__text mx-auto",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eos rem eum blanditiis, quis reprehenderit!"}),Object(b.jsx)("div",{className:"row mt-5 flex-column flex-lg-row",children:null===c||void 0===c?void 0:c.blogs.map((function(e,t){return Object(b.jsx)(v,{ref:function(e){return n.current[t]=e},name:e.name_b,thumbnail:e.thumbnail,created_at:e.created_at,slug:e.slug},e.id_blog)}))})]})}))(a||(a=Object(d.a)([""]))),y=Object(j.b)((function(e){var t=e.className,n=Object(u.useRef)([]);return Object(u.useEffect)((function(){return Object(p.a)().reveal(n.current,{duration:700,reset:!0,interval:500}),function(){}}),[]),Object(b.jsx)("div",{className:"".concat(t," py-5 bg__custom--1"),children:Object(b.jsx)("section",{className:"container p-3",children:Object(b.jsxs)("div",{className:"row align-items-center",children:[Object(b.jsxs)("div",{className:"home__content col-12 col-lg-3",children:[Object(b.jsx)("header",{className:"home__content__header fs__title--main",ref:function(e){return n.current[0]=e},children:"Th\u1ea7n s\u1ed1 h\u1ecdc l\xe0 g\xec?"}),Object(b.jsx)("p",{className:"home__content__sub mt-4",ref:function(e){return n.current[1]=e},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur voluptatum veritatis, dicta voluptate soluta ex voluptates enim tempora magnam, quasi repellat rem illum! Voluptate, enim voluptas. Placeat pariatur laudantium nobis."})]}),Object(b.jsx)("div",{className:"home__video col-12 col-lg-8 offset-0 offset-lg-1"})]})})})}))(r||(r=Object(d.a)(["\n  .home {\n    &__content {\n      &__header {\n        font-size: 3em;\n        line-height: 60px;\n        font-weight: bold;\n      }\n      &__sub {\n        font-size: 1em;\n      }\n    }\n    &__video {\n      background-color: gray;\n      height: 400px;\n    }\n  }\n"]))),k=Object(j.b)((function(e){var t=e.className,n=Object(u.useRef)([]);return Object(u.useEffect)((function(){return Object(p.a)().reveal(n.current,{duration:700,reset:!0,interval:500}),function(){}}),[]),Object(b.jsxs)("section",{className:"".concat(t," container"),children:[Object(b.jsxs)("div",{className:"home__me my-5 text-center",children:[Object(b.jsx)("p",{className:"fs__title fw-bold",ref:function(e){return n.current[0]=e},children:"Ch\xfang t\xf4i l\xe0 ai?"}),Object(b.jsx)("p",{className:"col-12 col-lg-5 mx-auto",ref:function(e){return n.current[1]=e},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum nesciunt excepturi porro in consequuntur accusamus, ducimus velit! Ipsum expedita et itaque. Optio est numquam voluptas necessitatibus maxime, eligendi quasi?"})]}),Object(b.jsxs)("div",{className:"home__pros row justify-content-around align-items-center mt-5",children:[Object(b.jsx)("div",{className:"home__pros__img col-12 col-lg-6",children:Object(b.jsx)("img",{src:"https://www.topclass.com.vn/articles/wp-content/uploads/2021/01/Ly-Qui-Khanh-Tien-bac-khong-mua-duoc-tai-nang.jpg",alt:"\u01afu \u0111\xe3i c\u1ee7a Era"})}),Object(b.jsxs)("div",{className:"col-12 col-lg-5 offset-lg-1",children:[Object(b.jsx)("p",{className:"fs__title fw-bold",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque distinctio obcaecati modi!"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"fs__detail",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At totam aut exercitationem."}),Object(b.jsx)("li",{className:"fs__detail",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At totam aut exercitationem."}),Object(b.jsx)("li",{className:"fs__detail",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At totam aut exercitationem."}),Object(b.jsx)("li",{className:"fs__detail",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At totam aut exercitationem."})]})]})]})]})}))(s||(s=Object(d.a)(["\n  .home {\n    &__pros {\n      &__img {\n        height: 400px;\n        > img {\n          height: inherit;\n          width: 100%;\n          object-fit: cover;\n        }\n      }\n    }\n  }\n"]))),q=n(21),L=n.n(q),A=n(27),T=n(32),E=n.n(T),z=n(31),R=n(118),C=function(e){return Object(R.a)(["faqs"],Object(A.a)(L.a.mark((function e(){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(z.a.apiGateWay,"/faq"));case 2:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n.faqs);case 6:case"end":return e.stop()}}),e)}))))},F=n(28),I=n(122),S=Object(j.b)((function(e){var t=e.className,n=e.question,c=e.answer,i=Object(u.useState)(!1),a=Object(F.a)(i,2),r=a[0],s=a[1];return Object(b.jsxs)("div",{className:"".concat(t," fag-item mb-2"),children:[Object(b.jsx)("h4",{onClick:function(){return s((function(e){return!e}))},children:n}),Object(b.jsx)(I.a,{in:r,appear:!1,children:Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("p",{children:c})})})})]})}))(o||(o=Object(d.a)(['\n  &.fag-item {\n    border-radius: 4px;\n    background-color: #272c33;\n    h4 {\n      padding: 20px;\n      margin-bottom: 0;\n      font-size: 1rem;\n      font-weight: 700;\n      position: relative;\n      cursor: pointer;\n      &::after {\n        position: absolute;\n        -webkit-font-smoothing: antialiased;\n        display: inline-block;\n        font-style: normal;\n        font-variant: normal;\n        text-rendering: auto;\n        line-height: 1;\n        font-weight: 900;\n        font-family: "Font Awesome 5 Free";\n        content: "\f107";\n        right: 20px;\n        transform: rotate(0);\n        transform-origin: center;\n        transition: all 0.2s ease-in-out;\n      }\n    }\n    .content {\n      padding: 0 20px 20px;\n    }\n  }\n'],['\n  &.fag-item {\n    border-radius: 4px;\n    background-color: #272c33;\n    h4 {\n      padding: 20px;\n      margin-bottom: 0;\n      font-size: 1rem;\n      font-weight: 700;\n      position: relative;\n      cursor: pointer;\n      &::after {\n        position: absolute;\n        -webkit-font-smoothing: antialiased;\n        display: inline-block;\n        font-style: normal;\n        font-variant: normal;\n        text-rendering: auto;\n        line-height: 1;\n        font-weight: 900;\n        font-family: "Font Awesome 5 Free";\n        content: "\\f107";\n        right: 20px;\n        transform: rotate(0);\n        transform-origin: center;\n        transition: all 0.2s ease-in-out;\n      }\n    }\n    .content {\n      padding: 0 20px 20px;\n    }\n  }\n']))),B=Object(j.b)((function(e){var t=e.className,n=C().data;return Object(b.jsxs)("section",{className:"".concat(t," home__questions mt-5 container mb-2"),id:"faq",children:[Object(b.jsx)("p",{className:"fs__title text-center fw-bold",children:"C\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p"}),Object(b.jsx)("div",{className:"mt-5",children:null===n||void 0===n?void 0:n.map((function(e){return Object(b.jsx)(S,{question:e.name,answer:e.desc},e.id)}))})]})}))(l||(l=Object(d.a)(["\n  h5 {\n    color: #ccc;\n    font-size: 1rem;\n    margin-bottom: 1rem;\n    font-weight: 600;\n  }\n"]))),G=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(y,{}),Object(b.jsx)(k,{}),Object(b.jsx)(x,{}),Object(b.jsx)(w,{}),Object(b.jsx)(B,{})]})};t.default=G}}]);
//# sourceMappingURL=7.40c9b5a6.chunk.js.map