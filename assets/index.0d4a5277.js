var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable;import{F as a}from"./vendor.6b0643d3.js";import{a4 as n,ad as o,ae as i,af as l,an as s,ag as d,ah as c,ao as m}from"./index.b4d99e7c.js";import{_ as p}from"./HashLoader.a8b156b2.js";import{u}from"./useRedirect.78fc9a2d.js";var h=n((({className:n})=>{const h=o((e=>e.userStatus.auth),i),f=o((e=>{var t,r,a;return null==(a=null==(r=null==(t=e.userStatus)?void 0:t.userInfo)?void 0:r.user)?void 0:a.role}),i),g=o((e=>{var t;return null==(t=e.error)?void 0:t.user_signup}),i),b=o((e=>{var t;return null==(t=e.loading)?void 0:t.user_signup}),i);u(a.useMemo((()=>[{condition:f>=1,to:"/agency-dashboard"},{condition:h,to:"/getting-report"}]),[f,h]));const{register:x,handleSubmit:w,errors:k,watch:v}=l(),y=s(),E=a.useRef({});E.current=v("password","");const _=d();return a.createElement("main",{className:`${n} form d-flex align-items-center flex-grow-1`},a.createElement("section",{className:"form__form"},a.createElement("p",{className:"fs__title--main fw-bold",style:{textTransform:"uppercase"}},"Đăng ký"),a.createElement("form",{onSubmit:w((a=>{var{rePassword:n}=a,o=((a,n)=>{var o={};for(var i in a)e.call(a,i)&&n.indexOf(i)<0&&(o[i]=a[i]);if(null!=a&&t)for(var i of t(a))n.indexOf(i)<0&&r.call(a,i)&&(o[i]=a[i]);return o})(a,["rePassword"]);_(m(o,(e=>{1===e&&y.push("/agency-dashboard"),0===e?y.push("/getting-report"):y.push("/")})))}))},a.createElement("input",{type:"text",name:"name",placeholder:"Tên Đăng nhập",ref:x({required:"Bạn cần nhập tên đăng nhập",minLength:{value:6,message:"Tên đăng nhập có ít nhất 6 ký tự"},pattern:{value:/^[a-zA-Z0-9]{6,}$/,message:"Tên đăng nhập không được chứa khoảng trống và ký tự đặc biệt"}}),disabled:b}),a.createElement("input",{type:"email",name:"email",placeholder:"Email",ref:x({required:"Bạn cần nhập email"}),disabled:b}),a.createElement("input",{type:"password",name:"password",placeholder:"Mật khẩu",ref:x({required:"Bạn cần nhập mật khẩu",minLength:{value:6,message:"Mật khẩu cần có ít nhất 6 ký tự"}}),disabled:b}),a.createElement("input",{type:"password",name:"rePassword",placeholder:"Nhập lại mật khẩu",ref:x({required:"Bạn cần nhập lại mật khẩu",validate:e=>e===E.current||"Mật khẩu không khớp"}),disabled:b}),a.createElement("button",{type:"submit",className:"absolute-centerd-inline-flex justify-content-center align-items-center",disabled:b},b?a.createElement(p,{color:"#fafafa",size:24,loading:!0}):a.createElement("div",null,"Đăng Ký")),a.createElement("div",{className:"error"},g),a.createElement(c,{errors:k}))))}))`
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
        [type="submit"] {
          text-transform: uppercase;
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
`;export default h;
