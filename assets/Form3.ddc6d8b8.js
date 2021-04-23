import{F as e}from"./vendor.6b0643d3.js";import{a4 as t,ah as a}from"./index.8f6e3c0d.js";import{F as l}from"./FormStyleProvider.cfb5553c.js";var n=t((({className:t})=>e.createElement("div",{className:`${t} modal fade`,id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content modal__custom"},e.createElement("div",{className:"modal-header modal__custom__header"},e.createElement("button",{type:"button",className:"btn-close modal__custom__button--close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("p",{className:"fs__details"},"Vui lòng chuyển khoản theo thông tin dưới đây để chúng tôi có thể kích hoạt bản báo cáo cho bạn."),e.createElement("p",{className:"fs__title mt-3"},"VIETCOMBANK"),e.createElement("p",{className:"d-flex justify-content-between"},"Số tài khoản: ",e.createElement("span",null,"19030001119333")),e.createElement("p",{className:"d-flex justify-content-between"},"Số điện thoại: ",e.createElement("span",null,"0123456789")),e.createElement("p",{className:"d-flex justify-content-between"},"Tên đầy đủ: ",e.createElement("span",null,"Nguyễn Văn A")),e.createElement("p",{className:"d-flex justify-content-between"},"Số tiền: ",e.createElement("span",null,"499.000 VND")),e.createElement("p",{className:"fw-bolder border-top pt-3",style:{borderColor:"#ffc367 !important",borderWidth:"2px !important"}},"Lưu ý:"),e.createElement("p",{className:"fs__details"},"Vui lòng kiểm tra lại thông tin trước khi chuyển để tránh sự cố đáng tiếc.")),e.createElement("div",{className:"modal-footer modal__custom__footer"},e.createElement("button",{type:"button",className:"btn button-secondary--outline","data-bs-dismiss":"modal"},"Đóng"),e.createElement("button",{type:"button",className:"btn button-secondary"},"Xong")))))))`
  .modal__custom {
    background-color: #fafafa;
    color: black;
    &__header,
    &__footer {
      border: 0;
    }
    &__button--close {
      color: #fafafa !important;
      font-weight: bolder;
      &:hover {
        color: $color-text-title;
      }
    }
  }
`;export default({register:t,errors:s,activeCodeError:c,isLoading:r})=>{var o,m;return e.createElement(l,null,e.createElement("div",{className:"step__form--general page--3 d-flex flex-column flex-lg-row"},e.createElement("div",{className:"step__form--general--left"},e.createElement("p",{className:"fs__title--main fw-bolder"},"Nhập mã kích hoạt"),e.createElement("div",{className:"step__form__input"},e.createElement("input",{type:"text",name:"code",placeholder:"Nhập mã kích hoạt",ref:t({required:"Cần nhập mã kích hoạt"}),disabled:r}),e.createElement(a,{errors:s}),e.createElement("div",{className:"error"},null==(m=null==(o=null==c?void 0:c.response)?void 0:o.data)?void 0:m.message),e.createElement("p",{className:"fs__text fw-bolder mt-4"},"Lưu ý:"),e.createElement("p",{className:"fs__details"},"Nếu bạn chưa có mã kích hoạt bạn cần đăng kí để nhận bài báo cáo."))),e.createElement("div",{className:"step__form--general--right"},e.createElement("p",{className:"fs__text fw-bolder"},"Đăng ký theo hướng dẫn"),e.createElement("div",{className:"mt-5"},e.createElement("p",{className:"fs__title--white fw-bolder"},"Cách 1"),e.createElement("p",{className:"fs__text"},"Liên hệ người giới thiệu để nhận mã ưu đãi")),e.createElement("div",{className:"mt-3"},e.createElement("p",{className:"fs__title--white fw-bolder"},"Cách 2"),e.createElement("p",{className:"fs__text"},"Chat trực tiếp với hỗ trợ viên của ERA VIETNAM ",e.createElement("a",{href:"",className:"fw-bolder",style:{color:"#ffd597"}},"Tại đây"))),e.createElement("div",{className:"mt-3"},e.createElement("p",{className:"fs__title--white fw-bolder"},"Cách 3"),e.createElement("p",{className:"fs__text"},"Chuyển khoản để nhận mã kích hoạt ",e.createElement("button",{className:"button-text","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",style:{color:"#ffd597"}},"Tại đây")),e.createElement(n,null)))))};