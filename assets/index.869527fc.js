var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,n=(e,n)=>{for(var s in n||(n={}))t.call(n,s)&&o(e,s,n[s]);if(a)for(var s of a(n))r.call(n,s)&&o(e,s,n[s]);return e};import{ab as s,aB as c,aC as l,aD as i,a8 as m,a4 as d,aF as p,an as u,af as b}from"./index.a388e93a.js";import{F as f}from"./vendor.6b0643d3.js";import{_}from"./HashLoader.112b7b6a.js";var h=d((({className:e,step:t})=>f.createElement("div",{className:`${e} step__nav d-flex justify-content-center`},["Nhập thông tin","Báo cáo","Kích hoạt tài khoản"].map(((e,a)=>f.createElement("div",{key:a,className:"step "+(t===a?"active":"")},f.createElement("span",null,a+1)," ",e))))))`
  &.step__nav {
    margin: 40px 0;
    .step {
      margin: 0 20px;
      &:hover {
        cursor: pointer;
      }
      > span {
        place-items: center;
        padding: 4px 10px;
        border-radius: 50%;
        border: 3px solid;
      }
    }
    .active {
      font-weight: bolder;
      color: ${e=>e.theme.colorTextTitle};
    }
  }
`;const y=f.lazy((()=>p((()=>__import__("./Form1.4feaa02c.js")),["/sohocera-public/assets/Form1.4feaa02c.js","/sohocera-public/assets/vendor.6b0643d3.js","/sohocera-public/assets/index.a388e93a.js","/sohocera-public/assets/index.dc72da33.css","/sohocera-public/assets/FormStyleProvider.9f6453b0.js"]))),E=f.lazy((()=>p((()=>__import__("./Form2.f261c6c5.js")),["/sohocera-public/assets/Form2.f261c6c5.js","/sohocera-public/assets/vendor.6b0643d3.js","/sohocera-public/assets/index.78ec7960.js","/sohocera-public/assets/index.a388e93a.js","/sohocera-public/assets/index.dc72da33.css","/sohocera-public/assets/FormStyleProvider.9f6453b0.js"]))),g=f.lazy((()=>p((()=>__import__("./Form3.62e47546.js")),["/sohocera-public/assets/Form3.62e47546.js","/sohocera-public/assets/vendor.6b0643d3.js","/sohocera-public/assets/index.a388e93a.js","/sohocera-public/assets/index.dc72da33.css","/sohocera-public/assets/FormStyleProvider.9f6453b0.js"])));var v=d((({className:e})=>{const t=u(),{data:a=[],mutateAsync:r,isLoading:o}=(()=>{const e=s(),[t]=c(),a=l();return i((async t=>{const{data:a}=await e.post(`${m.apiGateWay}/dashboard/step-2`,t);return null==a?void 0:a.rs}),{onError:e=>{t(e)},onSettled:()=>{a.invalidateQueries(["user","userInfo"])}})})(),{mutate:d,error:p,isLoading:v}=(()=>{const e=s(),[t]=c(),a=l();return i((async t=>{const{data:a}=await e.post(`${m.apiGateWay}/dashboard/active`,{code:t});return a}),{onError:e=>{t(e)},onSuccess:e=>{a.setQueryData(["user","userInfo"],(t=>n(n({},t),null==e?void 0:e.user)))}})})(),x=o||v,{register:w,handleSubmit:j,errors:N}=b(),[k,O]=f.useState(0),S=[f.createElement(y,{register:w,errors:N,isLoading:x}),f.createElement(E,{numbers:a}),f.createElement(g,{register:w,errors:N,activeCodeError:p,isLoading:x})],L=()=>{k<S.length-1&&O((e=>++e))};return f.createElement("section",{className:`${e} container step_by_step`},f.createElement("form",{onSubmit:j((async e=>{try{switch(k){case 0:console.log(e),await r(e);break;case 2:d(e.code,{onSuccess:()=>{t.push("/user/pdf")}})}L()}catch(a){}}))},f.createElement("main",{className:"step__form my-3"},f.createElement(h,{step:k}),f.createElement(f.Suspense,{fallback:f.createElement("div",{id:"loader-wrapper"},f.createElement("div",{id:"loader"}))},S[k]),f.createElement("section",{className:"step__form__button mt-3"},f.createElement("button",{type:"button",className:"prev step__from__button button-secondary--outline "+(k<=0?"button-disable":""),onClick:()=>O((e=>Math.max(0,e-1)))},f.createElement("span",{style:{marginRight:10}},f.createElement("i",{className:"fas fa-long-arrow-alt-left"})),"Trở về"),f.createElement("button",{type:"submit",className:"next step__from__button button-secondary "+(x?"disabled":"")},x?f.createElement(_,{color:"#fafafa",size:24,loading:!0}):2===k?"Hoàn thành":"Tiếp theo",!x&&k<2&&f.createElement("span",{style:{marginLeft:10}},f.createElement("i",{className:"fas fa-long-arrow-alt-right"})))))))}))`
  .step__form {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__button {
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none;
      display: flex;
      justify-content: space-between;
      > button {
        padding: 10px 15px;
        border: 0;
        font-weight: bolder;
        min-width: 126px;
        &.button-disable {
          visibility: hidden;
        }
        /* &:nth-child(1) {
          background-color: rgba(255, 255, 255, 0);
          &:hover {
            background-color: rgba(255, 255, 255, 0.385);
          }
        }
        &:nth-child(2) {
          color: #000;
          &:hover {
            background-color: #ffc267d7;
          }
        } */
      }
    }
  }
`;export default v;
