import styled from "styled-components";
import { Card } from "semantic-ui-react";

export const StyledSideCard = styled(Card)`
  margin-top: 0 !important;
  margin-left: 2rem !important;

  padding-top: 0.2em !important;
  width: 250px !important;

  .source {
    margin-top: 0.7em;
    margin-bottom: -0.7em;
    margin-left: 0.2em;
    margin-right: -0.2em;
  }

  @media print {
    break-inside: avoid;
  }
`;
