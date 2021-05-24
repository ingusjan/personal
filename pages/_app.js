import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Layout>
        <Head>
          <meta
            name="description"
            content="Ingus Jansons is a Software Engineer based in Gloucester, UK - born in Riga, Latvia."
          />
          <title>Ingus Jansons - Software Engineer</title>
        </Head>
        <NextNprogress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height="3"
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
