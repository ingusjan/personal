import Head from "next/head";
import Image from "next/image";
import { GitHub, Instagram, Linkedin, Moon, Sun } from "react-feather";
import { useTheme } from "next-themes";
import positions from "../data/positions";
import tags from "../data/tags.json";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Head>
        <title>Ingus Jansons - Front-end Designer &and; Engineer</title>
        <meta
          name="description"
          content="Ingus Jansons is a Front-end Designer and Engineer based in Gloucester, UK."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-full h-96"
        style={{
          backgroundImage: "url(img/banner.jpg)",
          backgroundPosition: "center",
        }}
      />

      <div className="relative bg-white dark:bg-gray-900 dark:text-gray-50 p-8 xl:p-12 mx-auto xl:w-1/2 2xl:w-1/3 -mt-48 rounded-xl shadow-xl dark:shadow-none dark:border dark:border-gray-800 mb-12">
        <button
          onClick={toggleTheme}
          className="right-12 absolute hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 p-2 rounded-2xl transition"
        >
          {theme === "dark" ? <Sun size={26} /> : <Moon size={26} />}
        </button>

        {/* --- MAIN INFORMATION SECTION --- */}
        <div className="border-b dark:border-gray-700 pb-10">
          <Image
            width="128px"
            height="128px"
            src="/img/ingus.png"
            alt="Ingus Jansons"
            className="rounded-full"
          />

          <h1 className="text-3xl font-extrabold tracking-tight mt-3 mb-1">
            Ingus Jansons
          </h1>
          <h2 className="text-gray-500 dark:text-gray-400">
            UX/UI · Design · Gloucester, UK
          </h2>

          <div className="flex space-x-3 mt-3 mb-12">
            {tags.map((t, i) => (
              <div
                key={i}
                className="py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 text-yellow-700 dark:text-yellow-100 rounded-2xl "
              >
                {t}
              </div>
            ))}
          </div>

          <h3 className="font-bold text-2xl">Hey there,</h3>
          <p className="mt-5 prose dark:prose-dark">
            You may be familiar with my work at{" "}
            <a rel="noopener" href="https://illumimedia.co" target="_blank">
              Illumi Media
            </a>{" "}
            and{" "}
            <a rel="noopener" href="https://creatorsites.net" target="_blank">
              Creator Sites
            </a>
            . I'm currently working remotely from Gloucester, UK at Vodafone. I
            enjoy coffee, sunsets and a nice falafel wrap.
          </p>

          <div className="flex space-x-5 mt-5">
            <a
              rel="noopener"
              className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition"
              href="https://instagram.com/ingusjan"
              target="_blank"
            >
              <Instagram size={26} />
            </a>
            <a
              rel="noopener"
              className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition"
              href="https://linkedin.com/in/ingus-jansons"
              target="_blank"
            >
              <Linkedin size={26} />
            </a>
            <a
              rel="noopener"
              className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition"
              href="https://github.com/ingusjan"
              target="_blank"
            >
              <GitHub size={26} />
            </a>
          </div>
        </div>
        {/* --- END OF MAIN INFORMATION SECTION --- */}

        {/* --- START OF POSITIONS --- */}
        <div className="mt-12">
          <h3 className="font-bold text-2xl mb-3">Positions</h3>

          {positions.map((p, i) => (
            <div className="hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center border-b dark:border-gray-700 py-5 px-2">
              <div className="inline-flex">
                <Image
                  src={p.img}
                  className="rounded-md"
                  width="40px"
                  height="40px"
                  alt={p.title}
                />
              </div>

              <div className="ml-5">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* --- END OF POSITIONS --- */}
      </div>
    </div>
  );
}
