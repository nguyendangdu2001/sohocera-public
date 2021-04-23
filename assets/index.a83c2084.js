import{F as e}from"./vendor.6b0643d3.js";import{a4 as t,a5 as i}from"./index.b4d99e7c.js";var a=e.memo(t((({slug:t,name:a,shortDesc:o,className:l,thumbnail:r})=>e.createElement(i,{to:`/blog/${t}`,className:l},e.createElement("div",{className:"blog__card"},e.createElement("div",{className:"blog__card__img"},e.createElement("img",{src:r,alt:a})),e.createElement("div",{className:"blog__card__body"},e.createElement("div",{className:"blog__card__body__title"},e.createElement("p",{className:"fs__title"},a)),e.createElement("div",{className:"blog__card__body__content"},e.createElement("p",{className:"fs__text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus debitis consequuntur nemo optio rem.")))))))`
  .blog__card {
    /* $radius: 12px; */
    background-color: ${e=>e.theme.colorCard};
    border-radius: 12px;
    height: 100%;
    &__img {
      > img {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    }
    &__body {
      padding: 20px;
      &__title {
        line-height: 30px;
        font-weight: bolder;
        height: 100px;
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      &__content {
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`);export{a as B};
