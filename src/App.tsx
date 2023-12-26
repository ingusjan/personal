import Container from "./components/Container";
import Positions from "./components/Positions";
import Me from "./assets/img/me.webp";
import Education from "./components/Education";
import { EnvelopeSimple, FilePdf, LinkedinLogo } from "phosphor-react";
import TechTags from "./components/TechTags";
import DevParadigmBox from "./components/DevParadigmBox";
import {
  AWSIcon,
  ChakraIcon,
  CypressIcon,
  DigitalOceanIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  IllustratorIcon,
  JestIcon,
  LernaIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PhotoshopIcon,
  ReactIcon,
  StyledComponentsIcon,
  TailwindIcon,
  TypeScriptIcon,
  WebpackIcon,
} from "./components/icons";
import GitLabIcon from "./components/icons/GitLabIcon";
import LogoDoxyMe from "./assets/img/doxyme.webp";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";

const App = () => (
  <Container>
    <div className="flex items-start justify-between">
      <img
        className="rounded-full mb-2 border-4 border-gray-800"
        width="150px"
        height="150px"
        alt="Ingus Jansons"
        src={Me}
      />

      {/* <div className="text-xs mr-2 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-green-800 border border-green-700">
        <Briefcase weight="fill" size="15px" className="mr-2" />
        Open to Vacancies
      </div> */}
    </div>

    <div className="flex items-center align-middle space-x-2">
      <h1 className="text-4xl font-bold">Ingus Jansons</h1>
      <Tippy content="Doxy.me">
        <img
          src={LogoDoxyMe}
          alt="Current employer badge"
          className="w-7 h-7 bg-blue-200 rounded-full hover:ring-1 ring-gray-700 transition-all ease-in-out"
        />
      </Tippy>
    </div>
    <h2 className="mt-1 text-gray-400">Frontend Software Engineer</h2>

    <p className="prose prose-invert min-w-full my-5">
      Čau!👋 I'm Ingus from Rīga, Latvia 🇱🇻 currently residing in the UK 🇬🇧 I
      lead and scale Front-end Projects mainly using React, TypeScript &
      Monorepos. I also dabble in building my own SaaS tools for content
      creators.
    </p>

    <div className="my-6 space-y-1">
      <a
        id="emailButton"
        href="mailto:hello@ingus.co.uk"
        className="hover:underline inline-block"
      >
        <div className="flex items-center text-gray-200 hover:text-white transition-all ease-in-out">
          <EnvelopeSimple weight="fill" size="20px" className="mr-2" />
          hello@ingus.co.uk
        </div>
      </a>

      <div className="flex items-center text-gray-400 transition-all ease-in-out">
        <FilePdf weight="fill" size="20px" className="mr-2" />
        Email me for a copy of my CV
      </div>
    </div>

    <div className="flex space-x-2">
      <a
        id="linkedInButton"
        href="https://www.linkedin.com/in/ingus-jansons/"
        target="_blank"
        className="bg-[#005E93] hover:bg-[#0077B5] select-none transition cursor-pointer px-4 py-2 rounded inline-flex items-center space-x-2"
      >
        <LinkedinLogo weight="bold" size={20} />
        <span>Connect on LinkedIn</span>
      </a>
    </div>

    <hr className="border-gray-800 my-6" />

    <h3 className="mb-4 text-xl font-semibold">Development</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DevParadigmBox
        title="Apps"
        desc="Browser apps, websites, mobile and cross-platform desktop app development. \n\n From SSG, SSR to SPAs, I have extensive experience optimising for all rendering methods."
        techTags={[
          {
            text: "TypeScript",
            icon: <TypeScriptIcon size={14} className="fill-blue-500" />,
          },
          {
            text: "React",
            icon: <ReactIcon className="fill-cyan-500" />,
          },
          {
            text: "Electron",
            icon: <ReactIcon className="fill-cyan-500" />,
          },
          {
            text: "Next.js (SSR/SSG)",
            icon: <NextIcon size={15} />,
          },
          {
            text: "Chakra UI",
            icon: <ChakraIcon size={14} className="text-teal-400" />,
          },
          {
            text: "Tailwind CSS",
            icon: <TailwindIcon className="text-cyan-500" />,
          },
          {
            text: "Styled Components",
            icon: <StyledComponentsIcon />,
          },
          {
            text: "Micro Frontends",
            icon: <WebpackIcon className="fill-cyan-500" />,
          },
          {
            text: "Figma",
            icon: <FigmaIcon size={14} className="fill-purple-500" />,
          },
          {
            text: "Adobe Photoshop",
            icon: <PhotoshopIcon className="fill-blue-400" />,
          },
          {
            text: "Adobe Illustrator",
            icon: <IllustratorIcon />,
          },
        ]}
      />
      <DevParadigmBox
        title="APIs"
        desc="RESTful APIs, microservices, serverless functions, and more.
        \n\n I have experience building and scaling APIs for both internal and external use.
        "
        techTags={[
          {
            text: "Express",
            icon: <ExpressIcon />,
          },
          {
            text: "Node.js",
            icon: <NodeIcon size={14} className="fill-green-500" />,
          },
          {
            text: "MongoDB",
            icon: <MongoIcon className="fill-green-500" />,
          },
          {
            text: "AWS",
            icon: <AWSIcon className="fill-yellow-500" />,
          },
          {
            text: "DigitalOcean",
            icon: <DigitalOceanIcon />,
          },
          {
            text: "Firebase",
            icon: <FirebaseIcon />,
          },
        ]}
      />
      <DevParadigmBox
        title="QA"
        desc="I've worked with a variety of tools to ensure our code is always of the highest quality. \n\n I also have an eye for precise, sharp design and great UX which I apply to my work."
        techTags={[
          {
            text: "Git",
            icon: <GitIcon />,
          },
          {
            text: "GitLab CI/CD",
            icon: <GitLabIcon />,
          },
          {
            text: "Jest",
            icon: <JestIcon size={15} />,
          },
          {
            text: "Cypress",
            icon: <CypressIcon className="fill-cyan-500" />,
          },
          {
            text: "Lerna Monorepos",
            icon: <LernaIcon />,
          },
          {
            text: "Module Federation",
            icon: <WebpackIcon className="fill-cyan-500" />,
          },
        ]}
      />
    </div>

    <TechTags />

    <hr className="border-gray-800 my-6" />

    <h3 className="mb-8 text-xl font-semibold">Work Experience</h3>
    <Positions />

    <h3 className="mb-8 text-xl font-semibold">Education</h3>
    <Education />
  </Container>
);

export default App;
