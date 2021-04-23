import{a4 as e,aH as a,aI as t,aF as n,ad as o,ae as m,aJ as r,aK as c,aL as i}from"./index.b4d99e7c.js";import{F as l}from"./vendor.6b0643d3.js";import{u as s}from"./useRedirect.78fc9a2d.js";var p=l.memo(e((({route:e,className:n})=>{const{url:o}=a();return l.createElement("div",{className:`${n} pe-0 pe-xl-5 pe-lg-4 pe-md-3 pe-sm-2 mb-3 mb-lg-0   col-12 col-md-2`},l.createElement("div",{className:"avatar justify-content-center d-none d-md-flex mx-auto mb-3"},l.createElement("img",{src:"https://www.sohoceravietnam.com/public/img/meow.jpg",alt:"avatar"})),l.createElement("nav",{className:"user__management__navigation d-flex flex-row flex-md-column"},e.reverse().map((({path:e,name:a})=>l.createElement(t,{exact:!0,to:`${o}${e}`,key:a,activeClassName:"active",className:"fw-bold"},a)))))}))`
  .avatar {
    position: relative;
    width: 80%;
    padding-top: 80%;
    img {
      /* $size: 100px; */
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* width: 200px; */
      /* height: 200px; */
      border-radius: 50%;
    }
  }
  .user__management {
    &__navigation {
      column-gap: 16px; /* margin: 0 32px 0 0; */
      a {
        /* margin: 0 20px 0 0; */
        padding: 10px 0;
      }
      .active {
        color: ${e=>e.theme.colorTextTitle};
        border-bottom: 2px solid ${e=>e.theme.colorSecondary};
      }
    }
  }
`);const d=l.lazy((()=>n((()=>__import__("./PdfManagement.5ac17108.js")),["https://nguyendangdu2001.github.io/sohocera-public/assets/PdfManagement.5ac17108.js","https://nguyendangdu2001.github.io/sohocera-public/assets/vendor.6b0643d3.js","https://nguyendangdu2001.github.io/sohocera-public/assets/index.b4d99e7c.js","https://nguyendangdu2001.github.io/sohocera-public/assets/index.77f15de2.css","https://nguyendangdu2001.github.io/sohocera-public/assets/timeago-react.5cdadd23.js","https://nguyendangdu2001.github.io/sohocera-public/assets/HashLoader.a8b156b2.js","https://nguyendangdu2001.github.io/sohocera-public/assets/index.20792c8a.js"]))),u=l.lazy((()=>n((()=>__import__("./UserInfoManagement.9fce0b21.js")),["https://nguyendangdu2001.github.io/sohocera-public/assets/UserInfoManagement.9fce0b21.js","https://nguyendangdu2001.github.io/sohocera-public/assets/vendor.6b0643d3.js","https://nguyendangdu2001.github.io/sohocera-public/assets/index.b4d99e7c.js","https://nguyendangdu2001.github.io/sohocera-public/assets/index.77f15de2.css","https://nguyendangdu2001.github.io/sohocera-public/assets/HashLoader.a8b156b2.js"]))),g=l.lazy((()=>n((()=>__import__("./VideoManagement.28f26f63.js")),["https://nguyendangdu2001.github.io/sohocera-public/assets/VideoManagement.28f26f63.js","https://nguyendangdu2001.github.io/sohocera-public/assets/vendor.6b0643d3.js","https://nguyendangdu2001.github.io/sohocera-public/assets/index.78ec7960.js","https://nguyendangdu2001.github.io/sohocera-public/assets/index.b4d99e7c.js","https://nguyendangdu2001.github.io/sohocera-public/assets/index.77f15de2.css"])));var v=e((({className:e})=>{const{path:t}=a(),n=o((e=>{var a,t,n;return null==(n=null==(t=null==(a=e.userStatus)?void 0:a.userInfo)?void 0:t.user)?void 0:n.is_active}),m);s(l.useMemo((()=>[{condition:!n,to:"/getting-report",cb:()=>{r.info("Bạn cần kích hoạt báo cáo trước khi đến trang người dùng")}}]),[n]));const v=[{path:"/pdf",component:d,name:"File PDF",exact:!0},{path:"/video",component:g,name:"Xem video của bạn",exact:!0},{path:"",component:u,name:"Thông tin cá nhân",exact:!1}];return l.createElement("main",{className:`${e} container user__management mt-3 mt-lg-5 flex-column flex-md-row flex-grow-1`},l.createElement(p,{route:v}),l.createElement(l.Suspense,{fallback:l.createElement("div",{id:"loader-wrapper"},l.createElement("div",{id:"loader"}))},l.createElement(c,null,v.map((({path:e,component:a,name:n,exact:o})=>l.createElement(i,{key:n,path:`${t}${e}`,component:a,exact:o}))))))}))`
  position: relative;
  display: flex;
  width: 100%;
`;export default v;