(this["webpackJsonpsohocera-react"]=this["webpackJsonpsohocera-react"]||[]).push([[11],{131:function(e,n,t){"use strict";var c=t(50),a=t.n(c),r=t(15);n.a=function(e){var n=Object(r.c)((function(e){var n;return null===(n=e.userStatus.userInfo)||void 0===n?void 0:n.token}));return a.a.defaults.headers={"Content-Type":"application/json",Authorization:n?"Bearer ".concat(n):"  "},a.a}},140:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c=t(14),a=t.n(c),r=t(28),i=t(139),s=t(49),o=t(131),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,n=Object(o.a)(),t=Object(i.a)(["blogs",{take:e}],Object(r.a)(a.a.mark((function t(){var c,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.get("".concat(s.a.apiGateWay,"/blog?take=").concat(e));case 2:return c=t.sent,r=c.data,console.log(r),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))));return t}},178:function(e,n,t){"use strict";t.r(n),t.d(n,"Home",(function(){return P}));var c,a,r,i,s,o,l,u=t(1),d=t(34),m=t(30),b=t(25),j=t(2),h=function(e,n){var t=e.className;return Object(j.jsx)("div",{className:"".concat(t," col-4 rounded"),ref:n,children:Object(j.jsx)("a",{href:"#",children:Object(j.jsxs)("div",{className:"home__products__card",children:[Object(j.jsx)("div",{className:"home__products__img",children:Object(j.jsx)("img",{src:"https://www.topclass.com.vn/articles/wp-content/uploads/2021/01/Ly-Qui-Khanh-Tien-bac-khong-mua-duoc-tai-nang.jpg",alt:"Era"})}),Object(j.jsxs)("div",{className:"p-3",children:[Object(j.jsx)("p",{className:"fs__text fw-bold",children:"Lorem ipsum dolor sit."}),Object(j.jsx)("p",{className:"fs__details text-success",children:"70.000\u0111"})]})]})})})},f=Object(b.b)(Object(u.forwardRef)(h))(c||(c=Object(m.a)(["\n  .home__products {\n    a {\n      color: white;\n      &:hover {\n        color: ",";\n      }\n    }\n    &__card {\n      border-radius: 16px;\n    }\n    &__img {\n      height: 200px;\n      > img {\n        border-radius: 16px;\n        height: inherit;\n        width: 100%;\n        object-fit: cover;\n      }\n    }\n  }\n"])),(function(e){return e.theme.colorTextTitle})),p=t(138),x=function(e){var n=Object(u.useRef)([]);return Object(u.useEffect)((function(){return Object(p.a)().reveal(n.current,{delay:200,duration:500,opacity:0,interval:300}),function(){}}),[]),Object(j.jsxs)("section",{className:"home__products container mt-5",children:[Object(j.jsx)("div",{className:"my-4 fs__title fw-bold",children:"S\u1ea3n ph\u1ea9m c\u1ee7a ch\xfang t\xf4i"}),Object(j.jsx)("div",{className:"row mb-4",children:Object(d.a)(Array(3)).map((function(e,t){return Object(j.jsx)(f,{ref:function(e){return n.current[t]=e}},t)}))}),Object(j.jsx)("div",{className:"row",children:Object(d.a)(Array(3)).map((function(e,t){return Object(j.jsx)(f,{ref:function(e){return n.current[t+3]=e}},t)}))})]})},g=t(146),O=t(13),_=function(e,n){var t=e.className,c=e.name,a=e.thumbnail,r=e.created_at,i=e.slug;return Object(j.jsx)("div",{className:"".concat(t," col-12 col-lg-3"),ref:n,children:Object(j.jsx)("div",{className:"home__posts__card",children:Object(j.jsxs)(O.b,{to:"/blog/".concat(i),children:[Object(j.jsx)("div",{className:"home__posts__img",children:Object(j.jsx)("img",{src:a,alt:"Tin t\u1ee9c Era"})}),Object(j.jsxs)("div",{className:"py-1",children:[Object(j.jsx)("p",{className:"fs__text fw-bold",children:c}),Object(j.jsx)("p",{className:"fs__details text-end",children:Object(j.jsx)(g.a,{datetime:r,locale:"vi"})})]})]})})})},v=Object(b.b)(Object(u.forwardRef)(_))(a||(a=Object(m.a)(['\n  flex: 1;\n  .card-container {\n    background-color: #383838;\n    border-radius: 16px;\n  }\n  .home__posts {\n    &__card {\n      height: 100%;\n      padding: 8px;\n      border-radius: 16px;\n      /* box-shadow: 2px 4px rgba(0, 0, 0, 14%); */\n      position: relative;\n      &:hover {\n        &::before {\n          clip-path: inset(0 0 0 0 round 16px);\n        }\n        .home__posts__img img {\n          box-shadow: 1px 2px 4px 4px rgba(0, 0, 0, 20%);\n        }\n      }\n      &::before {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        margin: -0.4rem;\n        background-color: #383838;\n        border-radius: 16px;\n        z-index: -1;\n        transform-origin: 100% 50%;\n        transition: clip-path 0.3s ease 0.1s;\n        clip-path: inset(2rem 0 2rem 2rem round 16px);\n      }\n      a {\n        color: white;\n        &:hover {\n          color: ',";\n        }\n      }\n    }\n    &__img {\n      > img {\n        border-radius: 16px;\n        height: 200px;\n        width: 100%;\n        /* height: auto; */\n        object-fit: cover;\n        transition: box-shadow 0.3s ease;\n        box-shadow: 2px 4px 8px 8px rgba(0, 0, 0, 14%);\n      }\n    }\n  }\n"])),(function(e){return e.theme.colorTextTitle})),w=t(140),N=Object(b.b)((function(e){var n=e.className,t=Object(u.useRef)([]),c=Object(w.a)().data;return Object(u.useEffect)((function(){return Object(p.a)().reveal(t.current,{delay:300,duration:1e3,reset:!1,opacity:0}),function(){}}),[]),Object(j.jsxs)("section",{className:"".concat(n," home__posts container mt-5"),children:[Object(j.jsx)("p",{className:"text-center fs__title fw-bold",children:"B\xe0i vi\u1ebft m\u1edbi nh\u1ea5t"}),Object(j.jsx)("p",{className:"text-center col-12 col-lg-6 fs__text mx-auto",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eos rem eum blanditiis, quis reprehenderit!"}),Object(j.jsx)("div",{className:"row mt-5 flex-column flex-lg-row",children:null===c||void 0===c?void 0:c.blogs.map((function(e,n){return Object(j.jsx)(v,{ref:function(e){return t.current[n]=e},name:e.name_b,thumbnail:e.thumbnail,created_at:e.created_at,slug:e.slug},e.id_blog)}))})]})}))(r||(r=Object(m.a)([""]))),y=Object(b.b)((function(e){var n=e.className,t=Object(u.useRef)([]);return Object(u.useEffect)((function(){return Object(p.a)().reveal(t.current,{duration:700,reset:!0,interval:500}),function(){}}),[]),Object(j.jsx)("div",{className:"".concat(n," py-5 bg__custom--1"),children:Object(j.jsx)("section",{className:"container p-3",children:Object(j.jsxs)("div",{className:"row align-items-center",children:[Object(j.jsxs)("div",{className:"home__content col-12 col-lg-3",children:[Object(j.jsx)("header",{className:"home__content__header fs__title--main",ref:function(e){return t.current[0]=e},children:"Th\u1ea7n s\u1ed1 h\u1ecdc l\xe0 g\xec?"}),Object(j.jsx)("p",{className:"home__content__sub mt-4",ref:function(e){return t.current[1]=e},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur voluptatum veritatis, dicta voluptate soluta ex voluptates enim tempora magnam, quasi repellat rem illum! Voluptate, enim voluptas. Placeat pariatur laudantium nobis."})]}),Object(j.jsx)("div",{className:"home__video col-12 col-lg-8 offset-0 offset-lg-1"})]})})})}))(i||(i=Object(m.a)(["\n  .home {\n    &__content {\n      &__header {\n        font-size: 3em;\n        line-height: 60px;\n        font-weight: bold;\n      }\n      &__sub {\n        font-size: 1em;\n      }\n    }\n    &__video {\n      background-color: gray;\n      height: 400px;\n    }\n  }\n"]))),k=t(8),q=t(147),T=t(46),L=t(148),z=Object(b.b)((function(e){var n=e.className,t=Object(L.a)({threshold:1,triggerOnce:!0}),c=t.ref,a=t.inView,r=Object(u.useRef)([]),i=Object(q.useTrail)(4,{config:q.config.wobbly,transform:a?"scale(1) translateY(0)":"scale(0) translateY(20px)",opacity:a?1:0},[a]),s=Object(k.a)(i,2),o=s[0],l=s[1],d=Object(q.useSpring)({config:q.config.slow,clipPath:a?"inset(0 0 0 0)":"inset(100% 0 0 0)"},[a]),m=Object(k.a)(d,2),b=m[0],h=m[1];return Object(q.useChain)([h,l],[0,.5]),Object(u.useEffect)((function(){return Object(p.a)().reveal(r.current,{duration:700,reset:!0,interval:500}),function(){}}),[]),Object(j.jsxs)("section",{className:"".concat(n," container"),children:[Object(j.jsxs)("div",{className:"home__me my-5 text-center",children:[Object(j.jsx)("p",{className:"fs__title fw-bold",ref:function(e){return r.current[0]=e},children:"Ch\xfang t\xf4i l\xe0 ai?"}),Object(j.jsx)("p",{className:"col-12 col-lg-5 mx-auto",ref:function(e){return r.current[1]=e},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum nesciunt excepturi porro in consequuntur accusamus, ducimus velit! Ipsum expedita et itaque. Optio est numquam voluptas necessitatibus maxime, eligendi quasi?"})]}),Object(j.jsxs)("div",{className:"home__pros row justify-content-around align-items-center mt-5",ref:c,children:[Object(j.jsx)("div",{className:"home__pros__img col-12 col-lg-6",children:Object(j.jsx)(T.animated.img,{style:b,src:"https://www.topclass.com.vn/articles/wp-content/uploads/2021/01/Ly-Qui-Khanh-Tien-bac-khong-mua-duoc-tai-nang.jpg",alt:"\u01afu \u0111\xe3i c\u1ee7a Era"})}),Object(j.jsxs)("div",{className:"col-12 col-lg-5 offset-lg-1",children:[Object(j.jsx)("p",{className:"fs__title fw-bold",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque distinctio obcaecati modi!"}),Object(j.jsx)("ul",{children:o.map((function(e,n){return Object(j.jsx)(T.animated.li,{style:e,className:"fs__detail",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At totam aut exercitationem."},n)}))})]})]})]})}))(s||(s=Object(m.a)(["\n  .home {\n    &__pros {\n      &__img {\n        height: 400px;\n        > img {\n          height: inherit;\n          width: 100%;\n          object-fit: cover;\n        }\n      }\n    }\n  }\n"]))),E=t(14),A=t.n(E),C=t(28),R=t(50),F=t.n(R),S=t(49),I=t(139),B=function(e){return Object(I.a)(["faqs"],Object(C.a)(A.a.mark((function e(){var n,t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("".concat(S.a.apiGateWay,"/faq"));case 2:return n=e.sent,t=n.data,console.log(t),e.abrupt("return",t.faqs);case 6:case"end":return e.stop()}}),e)}))))},G=t(170),J=Object(b.b)((function(e){var n=e.className,t=e.question,c=e.answer,a=Object(u.useState)(!1),r=Object(k.a)(a,2),i=r[0],s=r[1];return Object(j.jsxs)("div",{className:"".concat(n," fag-item mb-2"),children:[Object(j.jsx)("h4",{onClick:function(){return s((function(e){return!e}))},children:t}),Object(j.jsx)(G.a,{in:i,appear:!1,children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("p",{children:c})})})})]})}))(o||(o=Object(m.a)(['\n  &.fag-item {\n    border-radius: 4px;\n    background-color: #272c33;\n    h4 {\n      padding: 20px;\n      margin-bottom: 0;\n      font-size: 1rem;\n      font-weight: 700;\n      position: relative;\n      cursor: pointer;\n      &::after {\n        position: absolute;\n        -webkit-font-smoothing: antialiased;\n        display: inline-block;\n        font-style: normal;\n        font-variant: normal;\n        text-rendering: auto;\n        line-height: 1;\n        font-weight: 900;\n        font-family: "Font Awesome 5 Free";\n        content: "\f107";\n        right: 20px;\n        transform: rotate(0);\n        transform-origin: center;\n        transition: all 0.2s ease-in-out;\n      }\n    }\n    .content {\n      padding: 0 20px 20px;\n    }\n  }\n'],['\n  &.fag-item {\n    border-radius: 4px;\n    background-color: #272c33;\n    h4 {\n      padding: 20px;\n      margin-bottom: 0;\n      font-size: 1rem;\n      font-weight: 700;\n      position: relative;\n      cursor: pointer;\n      &::after {\n        position: absolute;\n        -webkit-font-smoothing: antialiased;\n        display: inline-block;\n        font-style: normal;\n        font-variant: normal;\n        text-rendering: auto;\n        line-height: 1;\n        font-weight: 900;\n        font-family: "Font Awesome 5 Free";\n        content: "\\f107";\n        right: 20px;\n        transform: rotate(0);\n        transform-origin: center;\n        transition: all 0.2s ease-in-out;\n      }\n    }\n    .content {\n      padding: 0 20px 20px;\n    }\n  }\n']))),K=Object(b.b)((function(e){var n=e.className,t=B().data;return Object(j.jsxs)("section",{className:"".concat(n," home__questions mt-5 container mb-2"),id:"faq",children:[Object(j.jsx)("p",{className:"fs__title text-center fw-bold",children:"C\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p"}),Object(j.jsx)("div",{className:"mt-5",children:null===t||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(J,{question:e.name,answer:e.desc},e.id)}))})]})}))(l||(l=Object(m.a)(["\n  h5 {\n    color: #ccc;\n    font-size: 1rem;\n    margin-bottom: 1rem;\n    font-weight: 600;\n  }\n"]))),P=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{}),Object(j.jsx)(z,{}),Object(j.jsx)(x,{}),Object(j.jsx)(N,{}),Object(j.jsx)(K,{})]})};n.default=P}}]);
//# sourceMappingURL=11.8642e817.chunk.js.map