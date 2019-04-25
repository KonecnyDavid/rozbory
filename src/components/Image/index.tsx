import * as React from "react";
import { StyledImage } from "./styles";
import { Image as SemImage } from "semantic-ui-react";

interface Props {
  width: number;
  height: number;
  src: string;
  alt: string;
}

const Image: React.FC<Props> = ({ width, height, src, alt }) => (
  <StyledImage {...{ width, height }}>
    <SemImage src={src} alt={alt} />
  </StyledImage>
);

export default Image;
