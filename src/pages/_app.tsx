import NextApp, { Container } from "next/app";
import * as React from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { Menu, Advertisement } from "semantic-ui-react";
import Header from "components/Header";
import Link from "next/link";
import { GlobalStyle } from "../components/GlobalStyle/styles";
import Footer from "../components/Footer/index";

class App extends NextApp {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Container>
          <Menu secondary pointing>
            <Header />
            <Menu.Item>
              <Link href="/">
                <a>Úvod</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/rozbory">
                <a>Rozbory</a>
              </Link>
            </Menu.Item>
          </Menu>
          <Grid className="main-content">
            <Row center="sm">
              <Col sm={12}>
                <Advertisement unit="leaderboard" test="Leaderboard" />
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={9}>
                <Component {...pageProps} />
              </Col>
              <Col sm={0} md={3}>
                <Advertisement unit="half page" test="Half Page" />
              </Col>
            </Row>
          </Grid>
          <Footer />
        </Container>
      </>
    );
  }
}

export default App;
