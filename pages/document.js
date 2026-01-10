import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="rn">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
