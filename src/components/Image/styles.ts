import styled from "styled-components";

export const StyledImage = styled.div<{ width: number; height: number }>`
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  overflow: hidden;
  text-align: center;
  margin: auto;

  img {
    height: 100%;
  }
`;
