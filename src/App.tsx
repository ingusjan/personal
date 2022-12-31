import Container from "./components/Container";
import Positions from "./components/Positions";
import Me from "./assets/me.jpg";
import "tippy.js/dist/tippy.css";
import Education from "./components/Education";
import { LinkedinLogo } from "phosphor-react";
import TechTag from "./components/TechTag";

const App = () => {
  return (
    <Container>
      <img
        className="rounded-full mb-2 border-4 border-gray-600"
        width="150px"
        height="150px"
        alt="Ingus Jansons"
        src={Me}
      />

      <h1 className="text-4xl font-bold">Ingus Jansons</h1>
      <h2 className="mt-1 text-gray-400">Lead TypeScript Engineer</h2>

      <p className="prose prose-invert min-w-full my-5">
        Čau!👋 I'm Ingus, originaly from Rīga, Latvia 🇱🇻 and living in the UK 🇬🇧
        for over 10 years. I'm currently leading and scaling Front-end Projects
        in fun and fast-paced companies. I also dabble in building tools for
        content creators.
        <br /> <br />
        My natural talent tends to lead me to provide a strong, dependable
        backbone for any Frontend team. I'm also code quality and standards
        obsessed, always looking to optimise my team's workflows.
      </p>

      <div className="flex  space-x-2">
        <a
          id="linkedInButton"
          href="https://www.linkedin.com/in/ingus-jansons/"
          target="_blank"
          className="bg-[#005E93] hover:bg-[#0077B5] select-none transition cursor-pointer px-4 py-2 rounded inline-flex items-center space-x-2"
        >
          <LinkedinLogo weight="bold" size={20} />
          <span>Message me on LinkedIn</span>
        </a>
      </div>

      <hr className="border-gray-800 my-6" />

      <h3 className="mb-4 text-xl font-semibold">Skills</h3>

      <p className="mb-6 prose prose-invert">
        I know that a bunch of tags can't fully describe one's Front-end skills,
        but just in case you need a birds-eye view of the tools I've used
        extensively throughout my career:
      </p>
      <div className="flex flex-wrap items-end space-y-2 my-4">
        <TechTag text="TypeScript" />
        <TechTag text="Next.js (SSR/SSG)" />
        <TechTag text="React" />
        <TechTag text="Electron" />
        <TechTag text="Chakra UI" />
        <TechTag text="Tailwind" />
        <TechTag text="Styled Components" />
        <TechTag text="Storybook" />
        <TechTag text="Lerna Monorepos" />
        <TechTag text="Webpack 5" />
        <TechTag text="Module Federation" />
        <TechTag text="Vite" />
        <TechTag text="MongoDB" />
        <TechTag text="MySQL" />
        <TechTag text="Cloud Firestore" />
        <TechTag text="Express" />
        <TechTag text="Fastify" />
        <TechTag text="Wordpress" />
        <TechTag text="Contentful" />
        <TechTag text="CloudFlare DNS" />
        <TechTag text="Heroku" />
        <TechTag text="DigitalOcean" />
        <TechTag text="Firebase" />
        <TechTag text="AWS" />
      </div>

      <hr className="border-gray-800 my-6" />

      <h3 className="mb-8 text-xl font-semibold">Experience</h3>
      <Positions />

      <h3 className="mb-8 text-xl font-semibold">Education</h3>
      <Education />
    </Container>
  );
};

export default App;
