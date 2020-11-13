import React from "react";
import "./bulma.css";
import "./index.css";
import "tailwindcss/tailwind.css";
import ReactGa from "react-ga";
import * as Unicons from "@iconscout/react-unicons";

const App = () => {
  React.useEffect(() => {
    ReactGa.initialize("UA-158955035-3");
    ReactGa.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <div class="mt-8 mb-8 container mx-auto px-4">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQE0jqBBN1pP3w/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=dI18ZJohxI7mRpLFZAHQxzgNHiykt4ycd8U7YB8K0kA"
          class="rounded-full mb-4 block w-32 h-32"
          alt="Ingus Jansons"
        />
        <h1 class="font-sans font-semibold text-4xl text-gray-800">
          Ingus Jansons
        </h1>
        <h2 class="font-sans font-semibold text-lg text-orange-500">
          UIX Software Engineer
        </h2>
        <p class="text-gray-600">
          Based in Gloucester, UK{" "}
          <span class="text-lg" role="img" aria-label="UK Flag">
            🇬🇧
          </span>
        </p>
        <p class="text-gray-500">
          Born in Riga, Latvia{" "}
          <span class="text-lg" role="img" aria-label="UK Flag">
            🇱🇻
          </span>
        </p>

        <a
          href="mailto:ingusjan@gmail.com"
          class="mt-5 px-4 py-2 inline-block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition ease-in-out duration-150"
        >
          <Unicons.UilEnvelope
            size="21"
            color="white"
            class="mr-1 mt-1/2 inline-flex"
          />{" "}
          ingusjan@gmail.com
        </a>

        <p class="mt-4 font-sans text-xs text-gray-500 hover:text-gray-800 transition ease-in-out duration-150">
          Spam emails will be blocked and reported automatically.
        </p>

        <div style={{ display: "flex" }}>
          <a
            href="https://t.me/ingusjan"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 px-4 py-2 inline-block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:bg-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            <Unicons.UilMessage
              size="21"
              color="white"
              class="mr-1 mt-1/2 inline-flex"
            />{" "}
            Telegram
          </a>
          <a
            href="https://github.com/ingusjan"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-2 mt-4 px-4 py-2 inline-block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150"
          >
            <Unicons.UilGithub
              size="21"
              color="white"
              class="mr-1 mt-1/2 inline-flex"
            />{" "}
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ingus-jansons/"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-2 mt-4 px-4 py-2 inline-block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            <Unicons.UilLinkedin
              size="21"
              color="white"
              class="mr-1 mt-1/2 inline-flex"
            />{" "}
            LinkedIn
          </a>
        </div>

        <p class="mt-5 font-sans font-bold text-md text-gray-700">
          Current occupation(s)
        </p>
        <p class="font-sans text-md text-gray-600">
          Software Engineer, Vodafone Group
        </p>
        <p class="font-sans text-md text-gray-600">
          Head of Operations,{" "}
          <a
            class="underline"
            href="https://illumimedia.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            Illumi Media
          </a>
        </p>
        <table class="table-fixed mt-8 w-full border-2 border-gray-200 rounded-md">
          <thead class="bg-gray-100 ">
            <tr>
              <th class="px-4 py-2 pl-4 w-1/2 text-gray-700">Skill</th>
              <th class="px-4 py-2 pl-4 w-1/2 text-gray-700">Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-100">
              <td class="border px-4 py-2 font-semibold text-gray-700">
                React.js
              </td>
              <td class="border px-4 py-2 text-red-600">Expert</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="border px-4 py-2 font-semibold text-gray-700">
                Express.js
              </td>
              <td class="border px-4 py-2 text-red-600">Expert</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="border px-4 py-2 font-semibold text-gray-700">
                Adobe Photoshop
              </td>
              <td class="border px-4 py-2 text-red-600">Expert</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="border px-4 py-2 font-semibold text-gray-700">
                Bulma.css
              </td>
              <td class="border px-4 py-2 text-red-600">Expert</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="border px-4 py-2 font-semibold text-gray-700">
                MongoDB
              </td>
              <td class="border px-4 py-2 text-orange-600">Intermediate</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="border px-4 py-2 font-semibold text-gray-700">
                Adobe Premiere Pro
              </td>
              <td class="border px-4 py-2 text-orange-600">Intermediate</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="border px-4 py-2 font-semibold text-gray-700">
                Influencer Marketing
              </td>
              <td class="border px-4 py-2 text-orange-600">Intermediate</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="border px-4 py-2 font-semibold text-gray-700">PHP</td>
              <td class="border px-4 py-2 text-green-600">Beginner</td>
            </tr>
            <tr class="hover:bg-gray-100">
              <td class="border px-4 py-2 font-semibold text-gray-700">
                jQuery
              </td>
              <td class="border px-4 py-2 text-green-600">Beginner</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
