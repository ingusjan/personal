import Link from "next/link";
import { fetchEntries, fetchProjects } from "../util/contentfulPosts";
import dayjs from "dayjs";
import Emoji from "../components/Emoji";

export default function Home({ posts, projects }) {
  return (
    <div className="font-sans">
      <img
        className="w-20 rounded-full mb-3"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQE0jqBBN1pP3w/profile-displayphoto-shrink_400_400/0/1603106914563?e=1617235200&v=beta&t=DX9oVnwsQZab7y5RpPsbMQTQYRjwXHMnw5615LT2DLU"
      ></img>
      <p>
        Hi! <Emoji symbol="👋" label="Wave" /> I'm Ingus, Software
        Engineer at{" "}
        <a className="underline" href="https://vodafone.com" target="_blank">
          Vodafone Group
        </a>
        .
      </p>
      <ul className="mt-7 mb-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 place-content-evenly">
        {projects.map((x) => {
          return (
            <div  className="cursor-pointer hover:text-yellow-500">
            <Link href={x.link} target="_blank">
              <li key={x.title}>
                <h3 className="font-semibold text-lg mt-1">
                  {x.title}
                </h3>
                <p>{x.description}</p>
              </li>
            </Link>
            </div>

          );
        })}
      </ul>
      <h2 className="font-bold text-lg mt-3">Blog Posts</h2>
      <ul>
        {posts.map((x) => {
          return (
            <li
              key={x.slug}
              className="hover:text-yellow-500 cursor-pointer my-2 p-5 bg-white dark:bg-gray-800 rounded-sm shadow-sm"
            >
              <Link href="/blog/[slug]" as={`/blog/${x.slug}`}>
                <div>
                  <p>{dayjs(x.publishedDate).format("DD/MM/YYYY")}</p>
                  <h3 className="font-semibold text-lg mt-1">
                    {x.title}
                  </h3>
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
