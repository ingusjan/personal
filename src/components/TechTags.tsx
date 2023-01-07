import AWSIcon from "./icons/AWSIcon";
import ChakraIcon from "./icons/ChakraIcon";
import CypressIcon from "./icons/CypressIcon";
import ExpressIcon from "./icons/ExpressIcon";
import FigmaIcon from "./icons/FigmaIcon";
import GitIcon from "./icons/GitIcon";
import IllustratorIcon from "./icons/IllustratorIcon";
import JestIcon from "./icons/JestIcon";
import LernaIcon from "./icons/LernaIcon";
import MongoIcon from "./icons/MongoIcon";
import NextIcon from "./icons/NextIcon";
import NodeIcon from "./icons/NodeIcon";
import PhotoshopIcon from "./icons/PhotoshopIcon";
import ReactIcon from "./icons/ReactIcon";
import StyledComponentsIcon from "./icons/StyledComponentsIcon";
import TailwindIcon from "./icons/TailwindIcon";
import TypeScriptIcon from "./icons/TypeScriptIcon";

const TechTags = () => {
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
      text: "React",
      icon: <ReactIcon className="fill-cyan-500" />,
    },
    {
      text: "Electron",
      icon: <ReactIcon className="fill-cyan-500" />,
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
      text: "Lerna Monorepos",
      icon: <LernaIcon />,
    },
    {
      text: "Module Federation",
      icon: <ReactIcon className="fill-cyan-500" />,
    },
    {
      text: "Micro Frontends",
      icon: <ReactIcon className="fill-cyan-500" />,
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
      icon: <AWSIcon className="fill-yellow-400" />,
    },
    {
      text: "Git",
      icon: <GitIcon className="fill-cyan-500" />,
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

  return (
    <div className="flex flex-wrap">
      {tech.map((tech) => (
        <div className="text-xs mr-2 inline-flex items-center font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
          <div className="mr-2">{tech.icon}</div>

          {tech.text}
        </div>
      ))}
    </div>
  );
};

export default TechTags;
