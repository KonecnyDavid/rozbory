import * as React from "react";
import { StyledFooter } from "./styles";
import { Divider } from "semantic-ui-react";
import Link from "next/link";

const Footer: React.FC = () => (
  <StyledFooter>
    <Divider />
    david@konecny.eu | denis@homolik.cz
    <span className="f-right">
      <Link href="/reklama">
        <a>Reklama</a>
      </Link>
    </span>
  </StyledFooter>
);

export default Footer;
