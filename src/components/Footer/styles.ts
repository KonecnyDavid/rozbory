import styled from "styled-components";
import {
  outerMarginDouble,
  innerPaddingHalf
} from "components/GlobalStyle/variables";

export const StyledFooter = styled.div`
  background: white;
  margin-top: ${outerMarginDouble};
  padding: ${innerPaddingHalf};
  color: black;

  @media print { 
    display: none !important;
  }
`;
