import { createGlobalStyle } from "styled-components";
import {
  outerMarginSmHalf,
  outerMarginSm,
  outerMarginDouble,
  outerMargin
} from "./variables";

export const GlobalStyle = createGlobalStyle`

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
    margin-bottom: 0;
  }

  .mb-1 {
    margin-bottom: ${outerMarginSmHalf};
  }

  .mb-2 {
    margin-bottom: ${outerMarginSm} !important;
  }

  .mb-3 {
    margin-bottom: ${outerMargin};
  }

  .mb-4 {
    margin-bottom: 4rem;
  }

  .mb-6 {
    margin-bottom: ${outerMarginDouble};
  }

  .ml-1 {
    margin-left: ${outerMarginSmHalf};
  }

  .ml-2 {
    margin-left: ${outerMarginSm};
  }

  .ml-3 {
    margin-left: ${outerMargin};
  }

  .mr-1 {
    margin-right: ${outerMarginSmHalf};
  }

  .mr-2 {
    margin-right: ${outerMarginSm};
  }

  .mr-3 {
    margin-right: ${outerMargin};
  }

  .mt-1 {
    margin-top: ${outerMarginSmHalf};
  }

  .mt-2 {
    margin-top: ${outerMarginSm};
  }

  .mt-3 {
    margin-top: ${outerMargin};
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .pr-1 {
    padding-right: ${outerMarginSmHalf} !important;
  }

`;
