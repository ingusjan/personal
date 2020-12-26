import React, { useState, useEffect } from "react";
import ReactGa from "react-ga";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Logos from "./logos.svg";
import LogosBlack from "./logos-black.svg";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    ReactGa.initialize("UA-158955035-3");
    ReactGa.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className={`${dark && "dark"} `}>
      <div className="w-screen h-screen leading-relaxed overflow-y-scroll p-6 xl:px-48 xl:py-16 bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <div
          className="h-64 w-full rounded-2xl"
          style={{
            background:
              'url("https://images.unsplash.com/photo-1590784483120-bff33bff7107?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
            backgroundSize: "cover",
            backgroundPositionY: "50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="xl:pl-10">
          <img
            alt="Ingus Jansons"
            className="w-36 rounded-full mb-3 -mt-20 border-white dark:border-gray-900 border-8"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQE0jqBBN1pP3w/profile-displayphoto-shrink_200_200/0/1603106914563?e=1613606400&v=beta&t=lA-W9r7myMdNVCuuhfTMIpX_2fgi0c0HBzk3BbdrCR0"
          />
          <h1 className="text-4xl text-primary-400">Ingus Jansons</h1>
          <h2 className="text-xl mt-1">Front-end Software Engineer</h2>
          <p className="text-md text-gray-500 mt-1">Based in Gloucester, UK</p>

          <p className="mt-5 xl:w-1/2">
            Coming from a Social Media Marketing and Management background, I'm
            a Software Engineer with a focus on developing modern, intuitive
            user experiences. Founder of an Influencer Marketing Firm, Illumi
            Media working with clients like MrBeast (47 million subscribers).{" "}
          </p>

          <img
            src={dark ? Logos : LogosBlack}
            alt="Logos"
            className="lg:w-1/3 mt-9"
          />

          <h3 className="text-xl mt-12 font-semibold">Technology</h3>
          <p className="mb-6">
            <a
              href="https://www.github.com/ingusjan"
              className="text-sm text-primary-400"
              target="_blank"
              rel="noreferrer"
            >
              See more on GitHub →
            </a>
          </p>
          <p>
            Rapidly developing performant applications without the fuss. Going
            from idea to working MVP faster than most, without sacrificing
            stability. <br />I do this with mobile-first development via
            Tailwind CSS, API-driven and Client-side routing with "Optimistic"
            client updates.
          </p>

          <h3 className="text-xl mt-12 font-semibold">Experience</h3>
          <p className="mb-6">
            <a
              href="https://www.linkedin.com/in/ingus-jansons/"
              className="text-sm text-primary-400"
              target="_blank"
              rel="noreferrer"
            >
              Read more on LinkedIn →
            </a>
          </p>

          <Experience current date="Software Engineer (Sept. 2019 - Present)">
            Vodafone Group
          </Experience>

          <Experience date="Social Media Manager (Aug. 2018 - Feb. 2019)">
            Almighty Records
          </Experience>

          <Experience date="YouTube Thumbnail Designer (Freelance)">
            Voddity
          </Experience>

          <Experience date="YouTube Thumbnail Designer (Freelance)">
            Render.gg
          </Experience>

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
              desc="Premium Design for Content Creators"
              link="https://illumimedia.co"
              status="Active"
            />
            <Project
              name="Webarc Hosting"
              desc="Affordable UK-based web Hosting"
              link="https://webarc.host"
              status="Inactive"
            />
          </div>

          <button
            class="absolute top-3 right-8 bg-gray-200 dark:bg-gray-800 p-2 px-4 rounded-lg"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
        <p className="opacity-50 text-center mt-16">
          <b>© Ingus Jansons All Rights Reserved</b> <br />
          Logos are not mine and are properties of their respectful copyright
          owners. Banner image taken by https://unsplash.com/@kristapsungurs
        </p>
      </div>
    </div>
  );
}

export default App;
