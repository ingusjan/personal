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
      <div className="w-screen h-screen leading-normal antialiased overflow-y-scroll p-6 2xl:px-48 xl:py-16 bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
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
            className="w-36 rounded-full mb-3 -mt-20 border-gray-100 dark:border-gray-900 border-8"
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

          <div className="mt-5 2xl:flex content-center items-center">
            <Project
              name="Creator Sites"
              type="Fullstack Web Application"
              img="https://pbs.twimg.com/profile_images/1283419053730738177/Cyd5invl.jpg"
              link="https://creatorsites.net"
              desc="Developed API & Frontend for a link aggregator platform. It allows Content Creators to have one single link to house all of their social media. Used by over 180+ creators."
              tech={["MongoDB", "React", "Express", "Heroku"]}
              status="Active"
            />

            <Project
              name="Illumi Media"
              type="Premium Design for Content Creators"
              img="https://pbs.twimg.com/profile_images/1262699046868828160/nRqdCD9W_400x400.png"
              desc="Putting the Graphic Design skills to use, Illumi Media now scores over 200+ 5-star reviews on Fiverr and over 300+ orders in total."
              tech={["Photoshop", "Fiverr", "WooCommerce", "WordPress"]}
              link="https://illumimedia.co"
            />

            <Project
              name="Webarc Hosting"
              type="Affordable UK-based Web Hosting"
              img="https://s3-eu-west-1.amazonaws.com/tpd/logos/5f9944892ac35b0001df46b0/0x0.png"
              desc="In late 2020 I founded Webarc Hosting which allowed customers to register domain names and order Shared Hosting for Wordpress and other platforms."
              tech={["WHMCS", "WHM", "cPanel"]}
              link="https://webarc.host"
            />
          </div>

          <div className="mt-2 2xl:flex content-center items-center">
            <Project
              name="Bass Arena UK"
              type="EDM Internet Radio"
              img="https://scontent-lhr8-2.xx.fbcdn.net/v/t31.0-8/13122959_221820811526743_5338576870745899407_o.png?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=x5f5y5Uc0xAAX9Xas-Q&_nc_ht=scontent-lhr8-2.xx&oh=789ee0c34dd2d471cd7df9d65085dee5&oe=600E6562"
              link="https://facebook.com/bassarenauk/"
              desc="Developed the website, brand and Shoutcast server for a now-defunct EDM Internet Radio during 2016. A lot of the music played was copyright-free and licensed."
              tech={["Shoutcast", "Radio-over-IP", "RadioDJ"]}
            />

            <Project
              name="Almighty Records"
              type="eCommerce Redesign"
              img="https://img.endole.co.uk/?t=273e37ce59721093a775b44c15e6737e&l="
              desc="With the company’s chosen tech stack being Squarespace, I had the responsibility of designing a refreshed, modern user experience for the British Heritage record label."
              tech={["Squarespace", "Adobe Photoshop"]}
              link="https://almightyrecords.com"
            />

            <Project
              name="SpaceX Tracker"
              type="Utilizing SpaceX's Open-API"
              img="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/u196odmivjn2dvw09xhx"
              desc="Developed a very basic, yet useful tracker for SpaceX's launches. It shows a history of launches and a full-screen countdown to the next one."
              tech={["React", "Axios", "Netlify"]}
              link="https://spacex.ingus.dev"
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
