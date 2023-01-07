import Container from "./components/Container";
import Positions from "./components/Positions";
import Me from "./assets/me.jpg";
import "tippy.js/dist/tippy.css";
import Education from "./components/Education";
import { FilePdf, LinkedinLogo } from "phosphor-react";
import TechTag from "./components/TechTag";
import Marquee from "react-fast-marquee";

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
        in fun and fast-paced companies. I also dabble in building SaaS tools
        for content creators.
        <br /> <br />
        Simply put, I love building fast, fluid, maintainable and scaleable web
        applications. I take great pride in ensuring that my team always follows
        top coding standards and that we're always on the lookout for better and
        more efficient ways to do things.
      </p>

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
        <a
          id="pdfButton"
          href="/src/assets/Ingus%20Jansons%20-%20Curriculum%20Vitae.pdf"
          target="_blank"
          className="bg-transparent border border-gray-600 hover:bg-gray-800 select-none transition cursor-pointer px-4 py-2 rounded inline-flex items-center space-x-2"
        >
          <FilePdf weight="bold" size={20} />
          <span>Resumé / CV</span>
        </a>
      </div>

      <hr className="border-gray-800 my-6" />

      <h3 className="mb-4 text-xl font-semibold">Technology</h3>

      <p className="mb-6 prose prose-invert">
        I know that a bunch of tags can't fully describe one's Front-end skills,
        but just in case you need a birds-eye view of the tech I've used
        extensively...
      </p>
      <div className="flex items-center py-1">
        <Marquee gradientColor={[17, 24, 39]}>
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
        </Marquee>
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
