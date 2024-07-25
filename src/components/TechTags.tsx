import { useState } from "react";
import Marquee from "react-fast-marquee";
import Checkbox from "./Checkbox";
import {
  AWSIcon,
  CypressIcon,
  DigitalOceanIcon,
  ExpressIcon,
  FigmaIcon,
  GitIcon,
  IllustratorIcon,
  JestIcon,
  LernaIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PhotoshopIcon,
  TypeScriptIcon,
  WebpackIcon,
} from "./icons";
import FirebaseIcon from "./icons/FirebaseIcon";

const tech = [
  {
    text: "TypeScript",
    icon: <TypeScriptIcon size={14} className="fill-blue-500" />,
  },
  {
    text: "Next.js (SSR/SSG)",
    icon: <NextIcon size={15} />,
  },
  {
    text: "Lerna Monorepos",
    icon: <LernaIcon />,
  },
  {
    text: "Module Federation",
    icon: <WebpackIcon className="fill-cyan-500" />,
  },
  {
    text: "Micro Frontends",
    icon: <WebpackIcon className="fill-cyan-500" />,
  },
  {
    text: "Node.js",
    icon: <NodeIcon size={14} className="fill-green-500" />,
  },
  {
    text: "Express",
    icon: <ExpressIcon />,
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
  {
    text: "Git",
    icon: <GitIcon />,
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
];

const TechTagsMarquee = () => (
  <Marquee pauseOnHover speed={25} gradientColor={[17, 24, 39]}>
    <div className="flex flex-wrap">
      {tech.map((tech) => (
        <div
          key={tech.text}
          className="text-xs mr-2 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gray-800 border border-gray-700"
        >
          <div className="mr-2">{tech.icon}</div>

          {tech.text}
        </div>
      ))}
    </div>
  </Marquee>
);

const TechTags = () => {
  const [isList, setIsList] = useState(false);

  return (
    <div className="mt-6">
      <div className="mb-6">
        <Checkbox
          value={isList}
          text="Show as List"
          onChange={() => setIsList(!isList)}
        />
      </div>

      {isList ? (
        <div className="flex flex-wrap">
          {tech.map((tech) => (
            <div className="text-xs mr-2 mb-2 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
              <div className="mr-2">{tech.icon}</div>

              {tech.text}
            </div>
          ))}
        </div>
      ) : (
        <TechTagsMarquee />
      )}
    </div>
  );
};

export default TechTags;
