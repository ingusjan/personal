import React, { useState, useEffect } from "react";
import ReactGa from "react-ga";
import Project from "./components/Project";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    ReactGa.initialize("UA-158955035-3");
    ReactGa.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className={`${dark && "dark"} `}>
      <div className="w-screen h-screen leading-relaxed overflow-y-scroll p-6 xl:p-52 bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
        <img
          alt="Ingus Jansons"
          className="w-32 rounded-full mb-3"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQE0jqBBN1pP3w/profile-displayphoto-shrink_200_200/0/1603106914563?e=1613606400&v=beta&t=lA-W9r7myMdNVCuuhfTMIpX_2fgi0c0HBzk3BbdrCR0"
        />
        <h1 className="text-4xl">Ingus Jansons</h1>
        <h2 className="text-2xl text-purple-400">
          Front-end Software Engineer
        </h2>
        <p className="text-md text-gray-500 mt-1">Based in Gloucester, UK</p>

        <p className="mt-5 xl:w-1/2">
          Coming from a Social Media Marketing and Management background, I'm a
          Software Engineer with a big passion for front-end and user experience
          working with ReactJS. Ex-founder of an Influencer Marketing Agency,
          Illumi Media working with clients like MrBeast (45 million
          subscribers).{" "}
        </p>

        <h3 className="text-xl mt-12 font-semibold">Technology</h3>
        <p className="mb-6">
          <a
            href="https://www.github.com/ingusjan"
            className="text-sm text-purple-400"
            target="_blank"
            rel="noreferrer"
          >
            See more on GitHub →
          </a>
        </p>
        <p>
          Huge fan of the MERN stack and how quickly you can go from a basic app
          to an MVP. <br /> Currently using ReactJS, Tailwind, Express, MongoDB,
          Heroku and AWS.
        </p>

        <h3 className="text-xl mt-12 font-semibold">Employment</h3>
        <p className="mb-6">
          <a
            href="https://www.linkedin.com/in/ingus-jansons/"
            className="text-sm text-purple-400"
            target="_blank"
            rel="noreferrer"
          >
            Read more on LinkedIn →
          </a>
        </p>

        <p className="bg-purple-400 text-sm text-gray-800 font-semibold py-1 px-3 my-1 inline-block rounded-full">
          Vodafone Group
        </p>
        <p>Software Engineer (Sept. 2019 - Present)</p>
        <p className="dark:bg-gray-700 bg-gray-200 text-sm mt-3 text-gray-600 dark:text-gray-400 font-semibold py-1 px-3 my-1 inline-block rounded-full">
          Almighty Records
        </p>
        <p>Social Media Manager (Aug. 2018 - Feb. 2019)</p>

        <p className="dark:bg-gray-700 bg-gray-200 text-sm mt-3 text-gray-600 dark:text-gray-400 font-semibold py-1 px-3 my-1 inline-block rounded-full">
          Voddity
        </p>
        <p>YouTube Thumbnail Designer (Freelance)</p>

        <p className="dark:bg-gray-700 bg-gray-200 text-sm mt-3 text-gray-600 dark:text-gray-400 font-semibold py-1 px-3 my-1 inline-block rounded-full">
          Render.gg
        </p>
        <p>YouTube Thumbnail Designer (Freelance)</p>

        <h3 className="text-xl mt-12 font-semibold">Projects</h3>

        <div className="mt-5">
          <Project
            name="Creator Sites"
            desc="Simple link sharing for Content Creators"
            link="https://creatorsites.net"
            status="Active"
          />
          <Project
            name="Illumi Media"
            desc="Graphics for Content Creators"
            link="https://illumimedia.co"
            status="Active"
          />
          <Project
            name="Webarc Hosting"
            desc="Affordable UK-based web Hosting"
            link="https://webarc.host"
            status="Active"
          />
        </div>

        <button
          class="absolute top-3 right-8 bg-gray-200 dark:bg-gray-700 p-2 px-4 rounded-lg"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
