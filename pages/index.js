import Link from "next/link";
import Projects from "../components/Projects";
import { Linkedin, Mail } from "react-feather";
import Image from "next/image";
import Technologies from "../components/Technologies";

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
      <h1 className="text-4xl font-semibold animate-up mt-3">Ingus Jansons</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-3 animate-up">
        Founder & Small Business Owner, UX/UI Software Engineer at{" "}
        <a
          className="text-[#ff4d4d] bg-[#ff4d4d20] px-1 hover:opacity-75 py-px rounded-md inline-flex items-center"
          rel="noopener"
          href="https://vodafone.co.uk"
          target="_blank"
        >
          <img
            src="/img/vodafone.svg"
            alt="Vodafone"
            className="inline-flex w-4 mx-1"
          />
          Vodafone Group
        </a>
        <br />
        BSc Student at Lancaster University.
      </p>

      <div className="flex flex-col w-full lg:flex-row mt-4 space-y-2 lg:space-y-0 lg:space-x-3 animate-up delay-200">
        <Link href="mailto:ingusjancorp@gmail.com">
          <button className="bg-yellow-700 transition w-full lg:w-auto hover:bg-yellow-800 text-sm rounded-md px-5 py-3 lg:py-2 text-white">
            <Mail className="inline-flex" size={16} />
            <span className="ml-2 inline-flex">Get in touch</span>
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

      <h2 className="text-xl mt-16 mb-1 text-gray-500 dark:text-white">
        Technology
      </h2>
      <p className="text-sm mb-12 text-gray-500 dark:text-gray-400">
        The tech I like to use to build apps.
      </p>

      <Technologies />

      <h2 className="text-xl mt-16 mb-1 text-gray-500 dark:text-white">
        Projects
      </h2>
      <p className="text-sm mb-6 text-gray-500 dark:text-gray-400">
        See what I've built in my spare time.
      </p>

      <Projects />
    </div>
  );
}
