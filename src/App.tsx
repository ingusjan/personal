import Container from "./components/Container";
import Positions from "./components/Positions";
import Me from "./assets/img/me.webp";
import Education from "./components/Education";
import {
  Briefcase,
  EnvelopeSimple,
  FilePdf,
  LinkedinLogo,
} from "phosphor-react";
import TechTags from "./components/TechTags";
import "tippy.js/dist/tippy.css";
import Marquee from "react-fast-marquee";

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

      <div className="text-xs mr-2 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-green-800 border border-green-700">
        <Briefcase weight="fill" size="15px" className="mr-2" />
        Open to Vacancies
      </div>
    </div>

    <h1 className="text-4xl font-bold">Ingus Jansons</h1>
    <h2 className="mt-1 text-gray-400">Lead TypeScript Engineer</h2>

    <p className="prose prose-invert min-w-full my-5">
      Čau!👋 I'm Ingus, born in Rīga, Latvia 🇱🇻 and living in the UK 🇬🇧 for over
      10 years. I'm currently leading and scaling Front-end Projects in fun and
      fast-paced companies. I also dabble in building SaaS tools for content
      creators.
      <br /> <br />
      Simply put, I love building fast, fluid, maintainable and scaleable web
      applications. I take great pride in making sure my team always follows top
      coding standards and that we're always on the lookout for modern and
      efficient ways of doing things.
    </p>

    <div className="my-6 space-y-1">
      <a
        id="emailButton"
        href="mailto:hello@ingus.co.uk"
        className="hover:underline"
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
      {/* <a
          id="pdfButton"
          href="/src/assets/Ingus%20Jansons%20-%20Curriculum%20Vitae.pdf"
          target="_blank"
          className="bg-transparent border border-gray-600 hover:bg-gray-800 select-none transition cursor-pointer px-4 py-2 rounded inline-flex items-center space-x-2"
        >
          <FilePdf weight="bold" size={20} />
          <span>Resumé / CV</span>
        </a> */}
    </div>

    <hr className="border-gray-800 my-6" />

    <h3 className="mb-4 text-xl font-semibold">Technology</h3>

    <p className="mb-6 prose prose-invert">
      I know that a bunch of tags can't fully describe one's Front-end skills,
      but just in case you need a birds-eye view of the tech I've used
      extensively...
    </p>
    <div className="flex items-center py-1">
      <Marquee pauseOnHover speed={75} gradientColor={[17, 24, 39]}>
        <TechTags />
      </Marquee>
    </div>

    <hr className="border-gray-800 my-6" />

    <h3 className="mb-8 text-xl font-semibold">Experience</h3>
    <Positions />

    <h3 className="mb-8 text-xl font-semibold">Education</h3>
    <Education />
  </Container>
);

export default App;
