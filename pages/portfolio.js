import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Columns,
  Grid,
  Moon,
  Sun,
  ZoomIn,
  ZoomOut,
} from "react-feather";
import Head from "next/head";
import { useTheme } from "next-themes";

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [zoom, setZoom] = useState(1);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getZoom = () => {
    switch (zoom) {
      case 1:
        return "grid-cols-2 lg:grid-cols-3";
      case 2:
        return "grid-cols-1 lg:grid-cols-2";
      default:
        return "grid-cols-2 lg:grid-cols-3";
    }
  };

  const importAll = (r) => {
    return r.keys().map(r);
  };

  useEffect(() => {
    setImages(
      importAll(
        require.context("../public/img/thumbnails", false, /\.(png|jp?g|svg)$/)
      )
    );
  }, []);

  return (
    <div className="p-8 xl:p-12 mx-auto xl:w-1/2 2xl:w-1/3">
      <Head>
        <title>Ingus Jansons - YouTube Thumbnail Portfolio</title>
        <meta
          name="description"
          content="Ingus Jansons - Thumbnail Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl mt-10">Thumbnail Portfolio</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">
        Personal private portfolio of YouTube thumbnails I've designed over the
        years. If you're on this page, this means I'm interested in working with
        you.
      </p>

      <Link href="/">
        <button className="text-sm inline-flex items-center space-x-2 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-100 hover:bg-gray-200 py-2 px-4">
          <ChevronLeft size={18} />
          <span>View resumé</span>
        </button>
      </Link>

      <div className="mt-6">
        <p className="text-sm font-semibold mb-2">View options:</p>
        <div className="flex space-x-2 ">
          <button
            onClick={() => setZoom(2)}
            className={`rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-200 hover:bg-gray-300 py-2 px-4 ${
              zoom === 2 ? "border border-yellow-400 text-yellow-400" : ""
            }`}
          >
            <Columns size={18} />
          </button>
          <button
            onClick={() => setZoom(1)}
            className={`rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-200 hover:bg-gray-300 py-2 px-4 ${
              zoom === 1 ? "border border-yellow-400 text-yellow-400" : ""
            }`}
          >
            <Grid size={18} />
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-200 hover:bg-gray-300 py-2 px-4"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-12">
        <Image
          width="64px"
          height="64px"
          src="/img/ingus.png"
          alt="Ingus Jansons"
          className="rounded-full"
        />
        <div className="leading-tight">
          <h1 className="text-xl">Ingus Jansons</h1>
          <h2 className="text-sm text-gray-500 dark:text-gray-400">
            Veteran Thumbnail Designer; Over 300+ Thumbnails designed!
          </h2>
        </div>
      </div>

      <div className={`grid ${getZoom()} gap-3 mt-12`}>
        {images.map((image, index) => (
          <Image
            className="rounded hover:scale-105 transition"
            key={index}
            height={image.default.height / 2}
            width={image.default.width / 2}
            src={image.default.src}
            blurDataURL={image.default.blurDataURL}
            placeholder="blur"
            alt="YouTube Thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
