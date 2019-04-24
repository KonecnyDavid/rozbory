import * as React from "react";
import NextDocument, {
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class Document extends NextDocument<{
  styleTags: Array<React.ReactElement<{}>>;
  local: boolean;
}> {
  public static async getInitialProps({
    renderPage,
    req
  }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const host = req ? req.headers.host : window.location.host;
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, local: host!.includes("localhost") };
  }

  public render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans"
          />
          <link rel="icon" href="/static/open-book.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {!this.props.local && (
            <>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-127890496-1"
              />
              <script>
                {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-127890496-1');`}
              </script>
            </>
          )}
        </body>
      </html>
    );
  }
}

export default Document;
