import * as React from "react";
import { StyledFooter } from "./styles";
import { Divider } from "semantic-ui-react";
import Link from "next/link";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

const Footer: React.FC = () => (
  <StyledFooter>
    <Divider />
    <Grid fluid>
      <Row>
        <Col xs={12} md={4}>david@konecny.eu | denis@homolik.cz</Col>
        <Col xs={12} md={4} className="text-center">
          <small className="text-gray">
            Text je dostupný pod licencí{" "}
            <a
              target="_blank"
              href="https://creativecommons.org/licenses/by-sa/3.0/deed.cs"
            >
              Creative Commons Uveďte autora – Zachovejte licenci
            </a>
          </small>
        </Col>
        <Col xs={12} md={4}>
          <span className="f-right">
            <Link href="/reklama">
              <a>Reklama</a>
            </Link>
            |
            <Link href="/zdroje">
              <a>Zdroje</a>
            </Link>
          </span>
        </Col>
      </Row>
    </Grid>{" "}
  </StyledFooter>
);

export default Footer;
