import { fetchEntries, fetchProjects } from "../util/contentfulPosts";
import dayjs from "dayjs";
import Emoji from "../components/Emoji";
import Link from "next/link";

export default function Home({ posts, projects }) {
  return (
    <div className="font-sans">
      <img
        className="w-24 rounded-full mb-3"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGJIUhsGrpI6Q/profile-displayphoto-shrink_400_400/0/1614892307536?e=1620864000&v=beta&t=GMJahjssWQ-FwAhpqSKyn-KX1yXahWoQxMt3XTYiQQA"
      />
      <h1 className="text-3xl font-bold">
        Hi, <Emoji symbol="👋" label="Wave" /> I'm Ingus
      </h1>
      <p className="text-gray-500 mt-1">
        Small Business Owner, Designer & Software Engineer at{" "}
        <a className="underline" href="https://vodafone.com" target="_blank">
          Vodafone Group
        </a>
        .
        <br />
        BSc Student at Lancaster University.
      </p>

      <div className="flex flex-col lg:flex-row mt-4 space-y-2 lg:space-y-0 lg:space-x-3">
        <Link href="/about">
          <button className="bg-yellow-500 w-full lg:w-auto hover:bg-yellow-400 text-sm rounded-md px-5 py-3 lg:py-2 text-white">
            More about me
          </button>
        </Link>
        <a href="https://linkedin.com/in/ingus-jansons" target="_blank">
          <button className="bg-gray-200 w-full lg:w-auto hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white dark:bg-gray-700 text-sm rounded-md px-5 py-3 lg:py-2">
            Connect on LinkedIn
          </button>
        </a>
      </div>

      <h2 className="font-bold text-2xl mt-8 mb-6">Projects</h2>
      <div className="mt-7 mb-8 flex flex-col space-y-2 place-content-evenly">
        <div
          key="Illumi Media"
          className="rounded-mdcursor-pointer hover:text-yellow-500 py-3 px-6 border dark:border-gray-800"
        >
          <a href="https://illumimedia.co" target="_blank">
            <div className="flex">
              <div className="flex items-center">
                <svg
                  className="fill-current w-9 h-9 align-middle mr-4"
                  viewBox="0 0 237 176"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 160.75C32 165.083 30.4167 168.75 27.25 171.75C24.0833 174.583 20.4167 176 16.25 176C11.75 176 8 174.583 5 171.75C2.16667 168.75 0.750001 165.083 0.750001 160.75V16.25C0.750001 11.9167 2.25 8.33333 5.25 5.49999C8.25 2.49999 12.0833 0.999988 16.75 0.999988C20.9167 0.999988 24.5 2.49999 27.5 5.49999C30.5 8.33333 32 11.9167 32 16.25V160.75ZM221.348 0.749991C225.514 0.749991 229.098 2.24999 232.098 5.24999C235.264 8.08333 236.848 11.6667 236.848 16V160.75C236.848 165.083 235.431 168.75 232.598 171.75C229.764 174.583 226.014 176 221.348 176C216.681 176 212.848 174.583 209.848 171.75C207.014 168.917 205.598 165.25 205.598 160.75V60L164.348 123C162.681 125 160.764 126.667 158.598 128C156.431 129.167 154.181 129.667 151.848 129.5C149.681 129.667 147.514 129.167 145.348 128C143.181 126.667 141.264 125 139.598 123L98.3477 57.75V160.75C98.3477 165.25 97.0143 168.917 94.3477 171.75C91.681 174.583 88.181 176 83.8477 176C79.681 176 76.2643 174.583 73.5977 171.75C70.931 168.75 69.5977 165.083 69.5977 160.75V16C69.5977 11.8333 71.0977 8.24999 74.0977 5.24999C77.2643 2.24999 81.0143 0.749991 85.3477 0.749991C87.8477 0.749991 90.3477 1.41666 92.8477 2.75C95.3477 3.91666 97.2643 5.49999 98.5977 7.49999L153.098 91.25L209.098 7.49999C210.431 5.49999 212.181 3.91666 214.348 2.75C216.681 1.41666 219.014 0.749991 221.348 0.749991Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mt-1">Illumi Media</h3>
                <p className="text-gray-400 -mt-px">
                  Branding Studio for Content Creators
                </p>
              </div>
            </div>
          </a>
        </div>

        <div
          key="Creator Sites"
          className="rounded-mdcursor-pointer hover:text-yellow-500 py-3 px-6 border dark:border-gray-800"
        >
          <a href="https://creatorsites.net" target="_blank">
            <div className="flex">
              <div className="flex items-center">
                <svg
                  className="fill-current w-9 h-9 align-middle mr-4"
                  viewBox="0 0 270 327"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M155.3 326.05C124.1 326.05 96.8 319.45 73.4 306.25C50 293.05 32 274.15 19.4 249.55C6.8 224.95 0.5 196.15 0.5 163.15C0.5 130.15 6.8 101.5 19.4 77.2C32 52.6 50 33.7 73.4 20.5C96.8 7.29998 124.1 0.699979 155.3 0.699979C194.6 0.699979 228.5 11.5 257 33.1C261.5 36.7 264.65 40.3 266.45 43.9C268.25 47.5 269.15 52 269.15 57.4C269.15 65.2 266.9 71.95 262.4 77.65C258.2 83.05 252.95 85.75 246.65 85.75C242.45 85.75 238.7 85.3 235.4 84.4C232.4 83.2 228.95 81.25 225.05 78.55C213.05 70.75 201.95 65.2 191.75 61.9C181.55 58.3 170.6 56.5 158.9 56.5C130.1 56.5 108.35 65.5 93.65 83.5C79.25 101.2 72.05 127.75 72.05 163.15C72.05 234.55 101 270.25 158.9 270.25C170 270.25 180.5 268.6 190.4 265.3C200.3 261.7 211.85 256 225.05 248.2C229.55 245.5 233.3 243.7 236.3 242.8C239.3 241.6 242.75 241 246.65 241C252.95 241 258.2 243.85 262.4 249.55C266.9 254.95 269.15 261.55 269.15 269.35C269.15 274.75 268.1 279.4 266 283.3C264.2 286.9 261.2 290.35 257 293.65C228.5 315.25 194.6 326.05 155.3 326.05Z" />
                </svg>
              </div>

              <div>
                <h3 className="font-bold text-xl mt-1">Creator Sites</h3>
                <p className="text-gray-400 -mt-px">
                  Marketing Tool for Content Creators
                </p>
              </div>
            </div>
          </a>
        </div>

        <div
          key="SpaceX Tracker"
          className="rounded-mdcursor-pointer hover:text-yellow-500 py-3 px-6 border dark:border-gray-800"
        >
          <a href="https://spacex.ingus.dev" target="_blank">
            <div className="flex">
              <div className="flex items-center">
                <svg
                  className="fill-current w-9 h-9 align-middle mr-4"
                  viewBox="0 0 261 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M72.5355 18.2883H8.34661L4.86237 24.9178L76.1475 76.8813C89.651 69.0626 104.344 61.1383 120.326 53.3196" />
                  <path d="M130.05 116.175L192.706 161.865H257.678L260.368 155.813L166.81 87.3342C154.384 96.4533 142.109 106.084 130.05 116.175" />
                  <path d="M4.90683 161.759H62.983C122.458 101.979 190.171 57.9185 257 25.4559V0.0605469C104.721 55.7948 24.9623 129.972 0 154.073L4.90683 161.759Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mt-1">SpaceX Tracker</h3>
                <p className="text-gray-400 -mt-px">
                  View the latest SpaceX launches
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      
      <h2 className="font-bold text-2xl mt-8 mb-6">Blog</h2>
      <ul>
        {posts.map((x) => {
          return (
            <li
              key={x.slug}
              className="hover:text-yellow-500 cursor-pointer my-2"
            >
              <Link href="/blog/[slug]" as={`/blog/${x.slug}`}>
                <div>
                  <h3 className="font-bold text-xl mt-1 mb-1">{x.title}</h3>
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
