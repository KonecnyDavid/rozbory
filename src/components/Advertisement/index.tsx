import * as React from "react";
import { StyledAdvertisement, StyledAdvertisementImage } from "./styles";

interface Props {
  src: string;
}

const Advertisement: React.FC<Props> = ({ src }) => (
  <StyledAdvertisement>
    <StyledAdvertisementImage src={src} />
  </StyledAdvertisement>
);

export default Advertisement;
