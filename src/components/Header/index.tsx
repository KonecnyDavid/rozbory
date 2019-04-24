import * as React from "react";
import { StyledHeader } from "./styles";
import Logo from "../Logo/logo";

const Header: React.FC = () => (
  <StyledHeader>
    <Logo />
    <span>MaturitniRozbory.cz</span>
  </StyledHeader>
);

export default Header;
