import NextApp, { Container } from "next/app";
import * as React from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { Menu, Advertisement } from "semantic-ui-react";
import Header from "components/Header";
import Link from "next/link";
import { GlobalStyle } from "../components/GlobalStyle/styles";
import Footer from "../components/Footer/index";
import Head from "next/head";

/* <meta
name="og:image"
property="og:image"
content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
/> */

class App extends NextApp {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>MaturitniRozbory.cz</title>
          <meta
            name="description"
            content="Projekt MaturitníRozbory.cz vyznikl za účelem vytvoření jednotného, intuitivního a kvalitního přehledu 
            literárních děl k maturitě a nejen k ní. Veškeré rozbory obsahují všechny potřebné náležitosti ke 
            státní maturitní zkoušce z Českého jazyka."
          />

          <meta property="og:title" content="MaturitniRozbory.cz" />
          <meta
            name="og:description"
            property="og:description"
            content="Projekt MaturitníRozbory.cz vyznikl za účelem vytvoření jednotného, intuitivního a kvalitního přehledu 
            literárních děl k maturitě a nejen k ní. Veškeré rozbory obsahují všechny potřebné náležitosti ke 
            státní maturitní zkoušce z Českého jazyka."
          />
        </Head>
        <GlobalStyle />
        <Container>
          <Menu secondary pointing>
            <Header />
            <Menu.Item>
              <Link href="/">
                <a>Rozbory</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/autori">
                <a>Autoři</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/lit-smery">
                <a>Lit. směry</a>
              </Link>
            </Menu.Item>
          </Menu>
          <Grid className="main-content">
            <Row>
              <Col sm={12} md={9}>
                <Component {...pageProps} />
              </Col>
              <Col sm={0} md={3}>
                <Advertisement unit="medium rectangle" test="Vaše reklama může být zde" />
                <Advertisement unit="half page" test="Vaše reklama může být zde" />
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
