var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{F as i}from"./vendor.6b0643d3.js";import{R as l}from"./index.78ec7960.js";import{a4 as n,a8 as d,a9 as s}from"./index.a388e93a.js";import{F as m}from"./FormStyleProvider.9f6453b0.js";n((e=>{var{className:l,name:n,value:d}=e,s=((e,o)=>{var i={};for(var l in e)t.call(e,l)&&o.indexOf(l)<0&&(i[l]=e[l]);if(null!=e&&r)for(var l of r(e))o.indexOf(l)<0&&a.call(e,l)&&(i[l]=e[l]);return i})(e,["className","name","value"]);return i.createElement("div",((e,i)=>{for(var l in i||(i={}))t.call(i,l)&&o(e,l,i[l]);if(r)for(var l of r(i))a.call(i,l)&&o(e,l,i[l]);return e})({className:`${l} number-item mb-2`},s),i.createElement("h4",null,"Chỉ số ",n))}))`
  &.number-item {
    border-radius: 4px;
    background-color: #d4d4d4;
    h4 {
      text-transform: uppercase;
      padding: 20px;
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: 700;
      position: relative;
      cursor: ${e=>e.value?"pointer":"initial"};
      &::after {
        position: absolute;
        font-family: ${e=>e.value?"inherit":'"Font Awesome 5 Free"'};
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        font-weight: 900;
        content: "${e=>e.value?e.value:"\f023"}";
        right: 20px;
        transform: rotate(0);
        transform-origin: center;
        transition: all 0.2s ease-in-out;
      }
    }
    .content {
      padding: 0 20px 20px;
    }
  }
`;var c=n((({numbers:e,className:t})=>{var r,a;const[o,n]=i.useState((null==(r=null==e?void 0:e[0])?void 0:r.video)&&`${d.apiResource}${null==(a=null==e?void 0:e[0])?void 0:a.video}`);return i.createElement(m,null,i.createElement("div",{className:`step__form--general page--2 d-flex flex-column flex-lg-row ${t}`},i.createElement("div",{className:"step__form--general--left"},i.createElement("p",{className:"fs__title--main fw-bolder"},"Bài báo cáo"),i.createElement(s.div,{layout:!0,className:"step__form__video"},o&&i.createElement(l,{width:"100%",height:"auto",url:o,controls:!0,muted:!0,playing:!0,style:{width:"100%",height:"100%"}})),i.createElement(s.div,{layout:!0},null==e?void 0:e.map(((e,t)=>{const{name_i:r,number_order:a}=e||{};return i.createElement(s.div,{layout:!0,className:"card",key:t,onClick:()=>{var t;(t=null==e?void 0:e.video)&&n(`${d.apiResource}${t}`)}},i.createElement("div",{className:"card__video"},i.createElement("img",{src:"https://www.sohoceravietnam.com/public/img/314a50ada9025a5c0313.jpg",alt:""})),i.createElement("div",{className:"card__body"},i.createElement("p",{className:"card__body__title fs__text fw-bolder"},r," ",a),i.createElement("p",{className:"card__body__date fs__smallest"},null==e?void 0:e.desc_i)))}))))))}))`
  .step__form--general--left {
    width: 100% !important;
    .card {
      cursor: pointer;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      background-color: ${e=>e.theme.colorCard};
      border-radius: 16px;
      padding: 10px 20px 10px 10px;
      &__video {
        width: 150px;
        height: 100px;
        margin-right: 20px;
        img {
          border-radius: 16px;
          width: auto;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .user__management {
      &__body {
        display: flex;
        flex-direction: column;
        p:first-child {
          margin-bottom: 5px;
        }
      }
    }
    &__video {
      /* width: 60%; */
      .card {
        cursor: pointer;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        background-color: ${e=>e.theme.colorCard};
        border-radius: 16px;
        padding: 10px 20px 10px 10px;
        &__video {
          width: 150px;
          height: 100px;
          margin-right: 20px;
          img {
            border-radius: 16px;
            width: auto;
            height: 100%;
            object-fit: cover;
          }
        }
        &__body {
          display: flex;
          flex-direction: column;
          p:first-child {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
`;export default c;
