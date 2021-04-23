import{F as e}from"./vendor.6b0643d3.js";import{ab as t,a6 as a,a8 as l,a4 as s,aG as m}from"./index.a388e93a.js";import{B as n}from"./index.9cf4746e.js";var o=s((({className:s})=>{const{slug:o}=m(),{data:i}=(e=>{const s=t();return a(["blogs",{slug:e}],(async()=>{const{data:t}=await s.get(`${l.apiGateWay}/blog/p/${e}`);return null==t?void 0:t.blog}),{refetchOnWindowFocus:!1})})(o);return e.createElement("div",{className:s},e.createElement("p",{className:"fs__smallest text-center fw-bold"},"Đã đăng 22/3/2021"),e.createElement("p",{className:"fs__title--main fw-bolder text-center w-50 mx-auto mb-5"},null==i?void 0:i.name_b),e.createElement("main",{className:"container blog__detail__content"},e.createElement("div",{className:"col-8 justify-content-center mt-5 mx-auto"},e.createElement("p",{className:"fs__text"},null==i?void 0:i.desc_b))),e.createElement("div",{className:"container my-5"},e.createElement("p",{className:"fs__title--main text-center my-5"},"Đề xuất"),e.createElement("div",{className:"row blog__detail__related"},[...Array(3)].map(((t,a)=>e.createElement("div",{className:"col-12 col-md-4 mb-4 mb-md-0",key:a},e.createElement(n,{name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestiae.",slug:"dfad",thumbnail:"https://www.w3schools.com/css/img_mountains.jpg"})))))))}))`
  .blog__detail {
    &__img {
      // width: 800px;
      height: 400px;
      object-fit: cover;
      &__content {
        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
      }
    }
    &__content {
      p:first-child::first-letter {
        color: ${e=>e.theme.colorTextTitle};
        padding: 0 0.3rem;
        margin: 15px 0.3rem 0 0;
        font-size: 5.5rem;
        font-weight: bolder;
        float: left;
        line-height: 0.5;
      }
    }
  }
`;export default o;
