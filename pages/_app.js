import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
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
    </ThemeProvider>
  );
}

export default MyApp;
