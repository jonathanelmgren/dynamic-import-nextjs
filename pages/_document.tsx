import React from "react";
import NextDocument, {
  Html,
  Head,
  Main,
  DocumentContext,
  NextScript,
} from "next/document";

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [initialProps.styles],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <NextScript />
        </Head>
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}

export default Document;
