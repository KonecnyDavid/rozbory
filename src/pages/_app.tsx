import NextApp, { Container } from "next/app";
import * as React from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { Menu } from "semantic-ui-react";
import Header from "components/Header";
import Link from "next/link";
import { GlobalStyle } from "../components/GlobalStyle/styles";
import Footer from "../components/Footer/index";
import Head from "next/head";
import Advertisement from "../components/Advertisement/index";

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
          <meta
            name="og:image"
            property="og:image"
            content="https://maturitnirozbory.cz/static/background.jpg"
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
              <Col xs={12} md={9}>
                <Component {...pageProps} />
              </Col>
              <Col xs={12} md={3} className="sidebar">
                <Advertisement src="/static/re_img_320x640.png" />
                <Advertisement src="/static/re_img_320x320.png" />
              </Col>
            </Row>
          </Grid>
          <Footer/>
        </Container>
      </>
    );
  }
}

export default App;
