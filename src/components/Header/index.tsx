import * as React from "react";
import { StyledHeader, StyledHref } from "./styles";
import Logo from "../Logo/index";
import Link from "next/link";

const Header: React.FC = () => (
  <StyledHeader>
    <Link href="/" passHref>
      <StyledHref>
        <Logo />
        <span>MaturitniRozbory.cz</span>
      </StyledHref>
    </Link>
  </StyledHeader>
);

export default Header;
