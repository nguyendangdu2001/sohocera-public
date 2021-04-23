import{F as e}from"./vendor.6b0643d3.js";import{aB as t,ab as a,a6 as o,a8 as r,a4 as l,aM as s,a5 as n,aE as c,ad as i,aN as m,a9 as d}from"./index.a388e93a.js";import{T as u}from"./timeago-react.d3903a9a.js";import{_ as p}from"./HashLoader.112b7b6a.js";import{P as _}from"./index.37ba5a69.js";var f=l(e.memo((({className:t,isOpen:a,setOpen:o})=>e.createElement(s,{show:a,className:t,contentClassName:"modal__custom"},e.createElement("div",{className:"modal-header modal__custom__header"},e.createElement("button",{type:"button",className:"btn-close modal__custom__button--close","data-bs-dismiss":"modal","aria-label":"Close",onClick:()=>null==o?void 0:o(!1)})),e.createElement("div",{className:"modal-body"},e.createElement("p",{className:"fs__title"},"Báo cáo của bạn đang được xuất"),e.createElement("p",{className:"fw-bolder fs__text border-top pt-3",style:{borderColor:"#ffc367 !important",borderWidth:"2px !important"}},"Lưu ý:"),e.createElement("p",{className:"fs__text"},'- Số lượt xuất pdf của bạn sẽ bị giảm khi nhấn vào nút "Xuất pdf"'),e.createElement("p",{className:"fs__text"},"- Bạn có thể tăng lượt xuất pdf bằng việc nhập mã hoặc"," ",e.createElement(n,{to:"/agency-policy"},"trở thành đại lý"))),e.createElement("div",{className:"modal-footer modal__custom__footer"},e.createElement("button",{type:"button",className:"btn button-secondary--outline","data-bs-dismiss":"modal",onClick:()=>null==o?void 0:o(!1)},"Đóng"),e.createElement("button",{type:"button",className:"btn button-secondary",onClick:()=>null==o?void 0:o(!1)},"Xong"))))))`
  .modal__custom {
    background-color: #fafafa;
    color: black;
    &__header {
      border: none;
    }
    &__footer {
      border: 0;
    }
    &__button--close {
      color: #fafafa !important;
      font-weight: bolder;
      &:hover {
        color: ${e=>e.theme.colorTextTitle};
      }
    }
  }
`;var b=l((({className:l})=>{c("PDF_EXPORT");const s=i((e=>{var t;return null==(t=e.error)?void 0:t.export_pdf})),[n,b]=e.useState(1),{data:g}=(({page:e=1})=>{const[l]=t(),s=a();return o(["user","pdfs",e],(async()=>{const{data:t}=await s.get(`${r.apiGateWay}/dashboard/user/pdf?page=${e}`);return t.pdfs}),{onError:e=>{l(e)}})})({page:n}),{last_page:E,data:x}=g||{},[h,v]=e.useState(!1),N=e.useRef(null),{mutate:y,isLoading:k}=m();return e.createElement("section",{className:`${l} user__management__export col-12 col-md-10`},e.createElement("header",{className:"fs__title fw-bolder"},"Xuất file PDF ERA của bạn"),e.createElement("p",{className:"fs__text my-3"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facere deserunt illum repellat. Quo enim tenetur quaerat. Perspiciatis voluptatum nihil ratione illum cumque doloremque et dolor sed expedita? Qui, pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloremque beatae possimus, laboriosam eveniet quo nesciunt et deleniti facere vero!"),e.createElement(d.div,{className:"button__export button-secondary "+(k?"disabled":"")},e.createElement("div",{onClick:async()=>{k||(y(),v(!0))}},k?"Đang xuất pdf":"Xuất file pdf")," ",e.createElement(p,{color:"#fafafa",size:24,loading:k})),e.createElement("div",{className:"error mt-2"},s),e.createElement("header",{className:"fs__title fw-bolder mt-4"},"Danh sách file pdf của bạn"),e.createElement("section",{className:"pdf__list d-flex flex-column my-4"},null==x?void 0:x.map((t=>e.createElement("div",{key:t.id_p,className:"pdf__item d-flex justify-content-between p-3 button-secondary--outline"},e.createElement("a",{target:"_blank",href:`${r.apiResource}${t.link_p}`,rel:"noreferrer"},t.name_p),e.createElement(u,{datetime:t.created_at,locale:"vi"}))))),g&&e.createElement(_,{currentPage:n,pageCount:E,initialPage:n,onPageChange:b,list:N}),e.createElement(f,{isOpen:h,setOpen:v}))}))`
  &.user__management {
    &__export {
      .pdf {
        &__list {
          row-gap: 12px;
        }
        &__item {
          border-radius: 12px;
          a {
            text-transform: capitalize;
            font-weight: bold;
            color: inherit;
          }
        }
      }
      .button__export {
        display: inline-flex;
        padding: 10px 15px;
        /* background-color: ${e=>e.theme.colorSecondary}; */
        font-weight: bolder;
        border-radius: 12px;
        div {
          cursor: pointer;
          /* color: #fafafa; */
        }
      }
    }
  }
`;export default b;
