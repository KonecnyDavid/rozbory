import { createGlobalStyle } from "styled-components";
import {
  outerMarginSmHalf,
  outerMarginSm,
  outerMarginDouble,
  outerMargin
} from "./variables";

export const GlobalStyle = createGlobalStyle`

  * * * * * *{
    font-family: 'Open Sans', sans-serif !important;
  }

  .author-name{
    margin-bottom: 0 !important;
  }

  .clear-fix {
    clear: both;
  }

  .ui.medium.rectangle{
    margin-bottom: 1rem;
  }

  .ad.leaderboard {
    margin: 0 auto ${outerMargin} !important;
  }

  .main-content {
    background: white;
  }

  .text {
    &-nowrap {
      white-space: nowrap !important;
    }
    &-left {
      text-align: left !important;
    }

    &-center {
      text-align: center !important;
    }

    &-right {
      text-align: right !important;
    }

    &-normal {
      font-size: 1rem;
    }

    &-gray {
      color: rgba(0,0,0,.4);
    }
  }

  .f {
    &-right {
      float: right;
    }
  }

  .d-block {
    display: block;
  }

  .d-flex {
    display: flex;
  }

  .justify-spacebetween {
    justify-content: space-between;
  }

  .align-center {
    align-items: center;
  }

  .ml-0 {
    margin-left: 0 !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .mb-1 {
    margin-bottom: ${outerMarginSmHalf} !important;
  }

  .mb-2 {
    margin-bottom: ${outerMarginSm} !important;
  }

  .mb-3 {
    margin-bottom: ${outerMargin} !important;
  }

  .mb-4 {
    margin-bottom: 4rem !important;
  }

  .mb-6 {
    margin-bottom: ${outerMarginDouble} !important;
  }

  .ml-1 {
    margin-left: ${outerMarginSmHalf} !important;
  }

  .ml-2 {
    margin-left: ${outerMarginSm} !important;
  }

  .ml-3 {
    margin-left: ${outerMargin} !important;
  }

  .mr-1 {
    margin-right: ${outerMarginSmHalf} !important;
  }

  .mr-2 {
    margin-right: ${outerMarginSm} !important;
  }

  .mr-3 {
    margin-right: ${outerMargin} !important;
  }

  .mt-0 {
    margin-top: 0 !important;
  }

  .mt-1 {
    margin-top: ${outerMarginSmHalf} !important;
  }

  .mt-2 {
    margin-top: ${outerMarginSm} !important;
  }

  .mt-3 {
    margin-top: ${outerMargin} !important;
  }

  .mt-n-1 {
    margin-top: -${outerMarginSmHalf} !important;
  }

  .mt-n-2 {
    margin-top: -${outerMarginSm};
  }

  .mt-n-3 {
    margin-top: -${outerMargin};
  }

  .mt-n-4 {
    margin-top: -${outerMarginDouble};
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .pr-1 {
    padding-right: ${outerMarginSmHalf} !important;
  }

`;
