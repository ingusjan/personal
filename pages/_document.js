import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head
          title='Ingus Jansons - Software Engineer'
          desc='Ingus Jansons is a Software Engineer in the UK born in Latvia'
        ></Head>
        <body className='bg-gray-100  bg-[#13161b]  text-gray-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
