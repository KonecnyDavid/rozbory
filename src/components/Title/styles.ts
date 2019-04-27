import styled from "styled-components";

export const StyledTitle = styled.div`
  h2 {
    font-size: 1.35em;
    color: grey;
    margin-top: -0.4em;
  }

  .sign {
    display: none;
    @media print {
      & {
        display: block;
        float: right;
      }
    }
  }
`;
