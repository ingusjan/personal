import { fetchEntries, fetchProjects } from "../util/contentfulPosts";
import dayjs from "dayjs";
import Emoji from "../components/Emoji";
import Link from "next/link";
import Projects from "../components/Projects";

export default function Home({ posts, projects }) {
  return (
    <div className="container mx-auto font-sans">
      <img
        className="w-24 rounded-full mb-3"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGJIUhsGrpI6Q/profile-displayphoto-shrink_400_400/0/1614892307536?e=1620864000&v=beta&t=GMJahjssWQ-FwAhpqSKyn-KX1yXahWoQxMt3XTYiQQA"
      />
      <h1 className="text-4xl font-semibold">
        Hi, <Emoji symbol="👋" label="Wave" /> I'm Ingus
      </h1>
      <p className="text-gray-500 mt-3">
        Founder & Small Business Owner, UX/UI Software Engineer at{" "}
        <a className="underline" href="https://vodafone.com" target="_blank">
          Vodafone Group
        </a>
        .
        <br />
        BSc Student at Lancaster University.
      </p>

      <div className="flex flex-col w-full lg:flex-row mt-4 space-y-2 lg:space-y-0 lg:space-x-3">
        <Link href="/about">
          <button className="bg-yellow-600 transition w-full lg:w-auto hover:bg-yellow-700 text-sm rounded-md px-5 py-3 lg:py-2 text-white">
            More about me
          </button>
        </Link>
        <a href="https://linkedin.com/in/ingus-jansons" target="_blank">
          <button className="bg-gray-300 transition w-full lg:w-auto hover:bg-gray-400 dark:hover:bg-gray-800 text-black dark:text-white dark:bg-gray-700 text-sm rounded-md px-5 py-3 lg:py-2">
            Connect on LinkedIn
          </button>
        </a>
      </div>
      <h2 className="text-xl mt-16 mb-3 text-gray-500">Projects</h2>

      <Projects />

      <h2 className="text-xl mt-12 mb-3 text-gray-500">Blog</h2>
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

  const resProjects = await fetchProjects();
  const projects = await resProjects.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
      projects,
    },
  };
};
