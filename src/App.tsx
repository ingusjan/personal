import Container from "./components/Container";
import Positions from "./components/Positions";
import Me from "./assets/me.jpg";
import "tippy.js/dist/tippy.css";
import Education from "./components/Education";
import { LinkedinLogo } from "phosphor-react";

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
      <h2 className="mt-1 text-gray-400">TypeScript Engineer & Founder</h2>

      <p className="prose prose-invert min-w-full my-5">
        Čau!👋 Originaly from Rīga, Latvia 🇱🇻 and living in the UK 🇬🇧 for over
        10 years, I'm currently leading and scaling Front-end Projects in fun
        and fast-paced companies. I also dabble in building tools for content
        creators.
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

      <h3 className="mb-8 text-xl font-semibold">Experience</h3>
      <Positions />

      <h3 className="mb-8 text-xl font-semibold">Education</h3>
      <Education />
    </Container>
  );
};

export default App;
