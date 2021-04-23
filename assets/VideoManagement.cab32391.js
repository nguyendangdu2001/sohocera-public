import{F as e}from"./vendor.6b0643d3.js";import{R as a}from"./index.78ec7960.js";import{aB as t,ab as r,a6 as o,a8 as l,a4 as i,a9 as s}from"./index.8f6e3c0d.js";console.log(a);var d=i((({className:i})=>{var d,c;const{data:n}=(e=>{const[a]=t(),i=r();return o(["user","userVideos"],(async()=>{const{data:e}=await i.get(`${l.apiGateWay}/dashboard/user/video`);return e.rs}),{onError:e=>{a(e)}})})(),[m,u]=e.useState((null==(d=null==n?void 0:n[0])?void 0:d.video)&&`${l.apiResource}${null==(c=null==n?void 0:n[0])?void 0:c.video}`),_=e.useRef(null),p=e.useCallback((e=>{e&&u(`${l.apiResource}${e}`)}),[]);return e.useEffect((()=>{var e;return console.log(m),m&&(null==(e=_.current)||e.scrollIntoView({behavior:"smooth",block:"center"})),()=>{}}),[m]),e.createElement(s.section,{layout:!0,className:`${i} user__management__video col-12 col-md-10`},e.createElement("header",{className:"fs__title fw-bolder mb-2"},"Video của bạn"),e.createElement(s.div,{layout:!0,className:"step__form__video",ref:_},m&&e.createElement(a,{width:"100%",height:"auto",url:m,controls:!0,muted:!0,playing:!0,style:{width:"100%",height:"100%"}})),e.createElement(s.div,{layout:!0},null==n?void 0:n.map(((a,t)=>{const{name_i:r,number_order:o}=a||{};return e.createElement(s.div,{layout:!0,className:"card",key:t,onClick:()=>p(null==a?void 0:a.video)},e.createElement("div",{className:"card__video"},e.createElement("img",{src:"https://www.sohoceravietnam.com/public/img/314a50ada9025a5c0313.jpg",alt:""})),e.createElement("div",{className:"card__body"},e.createElement("p",{className:"card__body__title fs__text fw-bolder"},r," ",o),e.createElement("p",{className:"card__body__date fs__smallest"},null==a?void 0:a.desc_i)))}))))}))`
  &.user__management {
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
`;export default d;
