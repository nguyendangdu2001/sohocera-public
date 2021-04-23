import{F as e}from"./vendor.6b0643d3.js";import{a4 as t,ad as r,ae as a,af as n,ag as o,ah as i,a5 as l,ai as s}from"./index.b319bc6c.js";import{_ as d}from"./HashLoader.c9a8dca6.js";import{u as c}from"./useRedirect.e59f194b.js";var m=e.memo(t((({className:t,history:m})=>{const u=r((e=>e.userStatus.auth),a),p=r((e=>{var t,r,a;return null==(a=null==(r=null==(t=e.userStatus)?void 0:t.userInfo)?void 0:r.user)?void 0:a.role}),a),f=r((e=>{var t;return null==(t=e.error)?void 0:t.user_login}),a),h=r((e=>{var t;return null==(t=e.loading)?void 0:t.user_login}),a);c(e.useMemo((()=>[{condition:p>=1,to:"/agency-dashboard"},{condition:u,to:"/user"}]),[p,u]));const{register:g,handleSubmit:b,errors:x}=n(),y=o();return e.createElement("main",{className:`${t} form d-flex align-items-center flex-grow-1`},e.createElement("section",{className:"form__form"},e.createElement("p",{className:"fs__title--main fw-bold",style:{textTransform:"uppercase"}},"Đăng nhập"),e.createElement("form",{onSubmit:b((e=>{y(s(e,(e=>1===e?m.push("/agency-dashboard"):0===e?m.push("/getting-report"):m.push("/"))))}))},e.createElement("input",{type:"text",name:"name",placeholder:"Username",disabled:h,ref:g({required:"Bạn cần nhập đầy đủ thông tin"})}),e.createElement("input",{type:"password",name:"password",placeholder:"Mật khẩu",disabled:h,ref:g({required:"Bạn cần nhập đầy đủ thông tin"})}),e.createElement(i,{errors:x}),e.createElement("div",{className:"error"},f),e.createElement("div",{className:"text-end my-1"},e.createElement("a",{href:"#"},"Quên mật khẩu")),e.createElement("button",{type:"submit",className:"d-inline-flex justify-content-center align-items-center",disabled:h},h?e.createElement(d,{color:"#fafafa",size:24,loading:!0}):e.createElement("div",null,"Đăng Nhập")),e.createElement("div",{className:"my-1"},e.createElement("div",{className:"text-center"},"Bạn chưa có tài khoản ? ",e.createElement(l,{to:"/signup"},"Đăng ký"))))))}))`
  width: 100%;
  .form {
    /* &__img {
      width: 60%;
      display: flex;
      background-color: rgba(0, 0, 0, 0.4);
      flex-direction: column;
      justify-content: space-between;
      padding: 3rem 100px;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-image: url(/images/home3-slide-1.jpg);
        background-size: cover;
      }
      p {
        max-width: 400px;
        font-weight: bold;
        font-size: 2.5em;
      }
      &__logo {
        > img {
          width: 200px;
        }
      }
      &__link {
        a {
          margin-right: 10px;
          font-weight: bolder;
        }
      }
      @media ${e=>e.theme.breakPoints.xl} {
        width: 50%;
      }
    } */
    &__form {
      text-align: center;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 40px;
      > form {
        margin: 0 auto;
        width: 600px;
        display: flex;
        flex-direction: column;
        input,
        button {
          /* &::placeholder {
            text-transform: uppercase;
          } */
          text-indent: 20px;
          background-color: black;
          color: #fafafa;
          height: 50px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #fafafa;
          font-weight: bold;
          outline: none;
          transition: border 0.2s ease-in;
          &:focus {
            border: 3px solid ${e=>e.theme.colorSecondary};
          }
        }
        input[type="submit"],
        button[type="submit"] {
          background-color: ${e=>e.theme.colorSecondary};
          color: #fafafa;
          border-width: 3px;
          border-color: ${e=>e.theme.colorSecondary};
          &:hover {
          }
        }
        input[type="date"] {
          text-indent: 10px;
          &::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(1);
            margin-right: 10px;
          }
        }
        input::-webkit-input-placeholder {
          color: #fafafa;
        }
      }
      /* @media ${e=>e.theme.breakPoints.xl} {
        width: 50%;
      } */
      @media ${e=>e.theme.breakPoints.lg} {
        width: 100%;
      }
      @media ${e=>e.theme.breakPoints.sm} {
        > form {
          width: 100%;
        }
      }
    }
  }
`);export default m;
