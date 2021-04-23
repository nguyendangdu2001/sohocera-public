import{F as e}from"./vendor.6b0643d3.js";import{a4 as o}from"./index.a388e93a.js";const t="50px";var r=o((({className:o,children:t})=>e.createElement("div",{className:o},t)))`
  .step__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__video {
      margin: 30px auto 50px;
      width: fit-content;
      background-color: gray;
    }
    &--icon {
      color: ${e=>e.theme.colorTextTitle};
      > i {
        margin: 10px 20px 0;
        font-size: 42px;
        // width: 100px;
      }
    }
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
    &--general {
      background-color: ${e=>e.theme.colorCard};
      &--left {
        padding: ${t};
        width: 60%;

        .step__form__input {
          width: 60%;
          display: flex;
          flex-direction: column;
          > input {
            margin: 10px 0;
            text-indent: 20px;
            background-color: #fafafa;
            color: ${e=>e.theme.colorSecondary};
            height: 50px;
            border-radius: 8px;
            border: none;
            font-weight: bold;
            outline: none;
            &:focus {
              border: 3px solid ${e=>e.theme.colorSecondary};
            }
          }
          input[type="date"] {
            text-indent: 10px;
            &::-webkit-calendar-picker-indicator {
              cursor: pointer;
              color: ${e=>e.theme.colorSecondary};
              margin-right: 10px;
            }
          }
          input::-webkit-input-placeholder {
            color: ${e=>e.theme.colorSecondary};
          }
        }
      }
      &--right {
        background-color: ${e=>e.theme.colorSecondary};
        color: #fafafa;
        padding: ${t};
        width: 40%;
        .button-text {
          background-color: rgba(255, 255, 255, 0);
          border: 0;
          color: ${e=>e.theme.colorTextTitle};
          font-weight: bolder;
        }
      }
    }
    .modal__custom {
      background-color: #2b2b2bfa;
      &__header,
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
    .disable {
      display: none !important;
    }
    .button-disable {
      visibility: hidden;
    }
    @media ${e=>e.theme.breakPoints.lg} {
      &--general {
        &--right {
          width: 100%;
        }
        &--left {
          width: 100%;
        }
        .step__form__input {
          width: 100%;
        }
      }
    }
  }
`;export{r as F};
