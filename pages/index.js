import Emoji from "../components/Emoji";
import Link from "next/link";
import Projects from "../components/Projects";
import Revue from "../components/Revue";
import { Linkedin, Twitter } from "react-feather";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-5xl xl:mt-36 m-auto">
      <Image
        className="rounded-full animate-up"
        alt="Photo of Ingus Jansons"
        width="115px"
        height="115px"
        src="/img/me.jpg"
      />
      <h1 className="text-4xl font-semibold animate-up mt-3">
        Hi, <Emoji symbol="👋" label="Wave" /> I'm Ingus
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-3 animate-up">
        Founder & Small Business Owner, UX/UI Software Engineer at{" "}
        <a
          className="text-[#ff4d4d] bg-[#ff4d4d20] px-1 py-px rounded-md"
          rel="noopener"
          href="https://vodafone.com"
          target="_blank"
        >
          Vodafone Group
        </a>
        .
        <br />
        BSc Student at Lancaster University.
      </p>

      <div className="flex flex-col w-full lg:flex-row mt-4 space-y-2 lg:space-y-0 lg:space-x-3 animate-up delay-200">
        <Link href="/about">
          <button className="bg-yellow-700 transition w-full lg:w-auto hover:bg-yellow-800 text-sm rounded-md px-5 py-3 lg:py-2 text-white">
            More about me
          </button>
        </Link>
        <a
          rel="noopener"
          href="https://linkedin.com/in/ingus-jansons/"
          target="_blank"
        >
          <button className="border-2 hover:text-[#2867B2] hover:bg-transparent items-center text-white font-semibold border-[#2867B2] bg-[#215494] transition w-full lg:w-auto text-sm rounded-md px-5 py-3 lg:py-2">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Linkedin size={16} className="inline-flex" />
              <span className="ml-2 inline-flex">Connect on LinkedIn</span>
            </div>
          </button>
        </a>
      </div>

      <h2 className="text-xl mt-16 w-4/5 lg:w-full">
        Subscribe to my Newsletter
      </h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Whenever-timed issues about best UX/UI practices.
      </p>
      <Revue />

      <h2 className="text-xl mt-16 mb-3 text-gray-500 dark:text-gray-400">
        Projects
      </h2>

      <Projects />
    </div>
  );
}
