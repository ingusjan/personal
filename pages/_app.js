import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
      <Layout>
        <Head>
          <meta
            name="description"
            content="Ingus Jansons is a Software Engineer based in Gloucester, UK - born in Riga, Latvia."
          />
          <title>Ingus Jansons - Software Engineer</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
