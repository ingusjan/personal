import { fetchEntries } from "../util/contentfulPosts";
import dayjs from "dayjs";
import Emoji from "../components/Emoji";
import Link from "next/link";
import Projects from "../components/Projects";
import Revue from "../components/Revue";
import { Twitter } from "react-feather";
import Image from "next/image";

export default function Home({ posts, projects }) {
  return (
    <div>
      <Image
        className="rounded-full mb-3"
        alt="Photo of Ingus Jansons"
        width="96px"
        height="96px"
        src="/me_bw.jpg"
      />
      <h1 className="text-4xl font-semibold">
        Hi, <Emoji symbol="👋" label="Wave" /> I'm Ingus
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-3">
        Founder & Small Business Owner, UX/UI Software Engineer at{" "}
        <a
          className="underline"
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

      <div className="flex flex-col w-full lg:flex-row mt-4 space-y-2 lg:space-y-0 lg:space-x-3">
        <Link href="/about">
          <button className="bg-yellow-700 transition w-full lg:w-auto hover:bg-yellow-800 text-sm rounded-md px-5 py-3 lg:py-2 text-white">
            More about me
          </button>
        </Link>
        <a rel="noopener" href="https://twitter.com/optrixttv" target="_blank">
          <button className="border-2 text-[#1da1f2] items-center hover:text-white font-semibold border-[#1da1f2] hover:bg-[#1989cf] transition w-full lg:w-auto text-sm rounded-md px-5 py-3 lg:py-2">
            <div className="inline-flex items-center justify-items-center align-middle">
              <Twitter size={16} className="inline-flex" />
              <span className="ml-2 inline-flex">Follow on Twitter</span>
            </div>
          </button>
        </a>
      </div>

      <h2 className="text-xl mt-16 w-4/5 lg:w-full">
        Subscribe to UX/UI for Backend Developers{" "}
        <Emoji symbol="🎨" label="Art" />{" "}
        <Emoji symbol="🚀" label="Rocket Ship" />
      </h2>
      <p className="mt-2 lg:w-1/3 text-gray-500 dark:text-gray-400">
        A whenever-timed Newsletter about best UX/UI practices.
      </p>
      <Revue />

      <h2 className="text-xl mt-16 mb-3 text-gray-500 dark:text-gray-400">
        Projects
      </h2>

      <Projects />

      <h2 className="text-xl mt-12 mb-3 text-gray-500 dark:text-gray-400">
        Blog
      </h2>
      <ul>
        {posts.map((x) => {
          return (
            <li
              key={x.slug}
              className="hover:text-yellow-500 cursor-pointer my-2"
            >
              <Link href="/blog/[slug]" as={`/blog/${x.slug}`}>
                <div>
                  <h3 className="font-semibold text-xl mt-1 mb-1">{x.title}</h3>
                  <p className="text-gray-400">
                    {dayjs(x.publishedDate).format("DD/MM/YYYY")}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
};
