import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Ingus Jansons is a Software Engineer based in Gloucester, UK - born in Riga, Latvia."
        />
        <title>Ingus Jansons - Software Engineer</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
