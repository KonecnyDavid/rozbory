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
          <title>Maturitni Rozbory</title>
          <meta
            name="description"
            content="Projekt MaturitníRozbory.cz vyznikl za účelem vytvoření jednotného, intuitivního a kvalitního přehledu 
            literárních děl k maturitě a nejen k ní. Veškeré rozbory obsahují všechny potřebné náležitosti ke 
            státní maturitní zkoušce z Českého jazyka."
          />
          <meta
            name="og:image"
            property="og:image"
            content="https://davidkonecny.eu/rozbory/rozbor/Default.jpg"
          />
          <meta
            name="og:title"
            property="og:title"
            content="Maturitni Rozbory"
          />
          <meta
            name="og:description"
            property="og:description"
            content="Projekt Maturitní Rozbory vyznikl za účelem vytvoření jednotného, intuitivního a kvalitního přehledu 
            literárních děl k maturitě a nejen k ní. Veškeré rozbory obsahují všechny potřebné náležitosti ke 
            státní maturitní zkoušce z Českého jazyka."
          />
        </Head>
        <GlobalStyle />
        <Container>
          <Menu secondary pointing>
            <Header />
          </Menu>
          <Grid className="main-content">
            <Row>
              <Col xs={12} md={9}>
                <Component {...pageProps} />
              </Col>
              <Col xs={12} md={3} className="sidebar">
                <Advertisement src="https://davidkonecny.eu/rozbory/static/re_img_320x640.png" />
                <Advertisement src="https://davidkonecny.eu/rozbory/static/re_img_320x320.png" />
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
