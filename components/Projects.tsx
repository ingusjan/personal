import Tippy from "@tippyjs/react";
import { IdentificationBadge, LinkSimple } from "phosphor-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      logo: "https://pbs.twimg.com/profile_images/1501175884597940225/D8zj9OUC_400x400.jpg",
      title: "Vodafone UC",
      link: "https://www.vodafone.co.uk/business/unified-communications",
      description:
        "Combining Vodafone Unified Communications products into one intuitive portal using Module Federation and AWS S3.",
      tech: ["Micro FEs", "Blue / Green", "Agile", "TypeScript", "React"],
      role: "Software Engineer",
    },
    {
      logo: "https://pbs.twimg.com/profile_images/1383616380247830558/5O7az61T_400x400.jpg",
      title: "ThruRate",
      link: "https://thrurate.co",
      description:
        "Enabling content creators to run A/B Tests on their YouTube Videos.",
      tech: ["Next.js", "React", "TypeScript", "Chakra UI", "Fastify"],
      role: "Head of Frontend",
    },
    {
      logo: "https://pbs.twimg.com/profile_images/1527706952477904896/KHMBuC2z_400x400.png",
      title: "Retro",
      link: "https://retroplan.io",
      description:
        "Real-time Planning Poker and Retrospective tools for Agile teams.",
      tech: [
        "Firebase",
        "Realtime Firestore",
        "Next.js",
        "Google Cloud Functions",
      ],
      role: "CEO & Sole Developer",
    },
    {
      logo: "https://pbs.twimg.com/profile_images/1397126872413179909/Ceadpd9E_400x400.png",
      title: "Creator Sites",
      link: "https://creatorsites.net",
      description:
        "Enabling content creators to display their content in the best way possible.",
      tech: [
        "Vite",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "CloudFlare Pages",
        "Digital Ocean & AWS",
      ],
      role: "CEO & Sole Developer",
    },
  ];
  return (
    <div className="mt-3 grid lg:grid-cols-2 gap-4">
      {projects.map(({ logo, title, link, description, tech, role }, i) => (
        <motion.div
          initial={{ marginTop: 10, opacity: "0%" }}
          animate={{ marginTop: 0, opacity: "100%" }}
          transition={{
            duration: 1,
            delay: 1.9 + i * 0.1,
            easings: "easeInOut",
          }}
          className="rounded-lg group p-4 border bg-gray-900 border-gray-800 hover:border-gray-700 transition"
        >
          <div className="flex items-center">
            <span>
              <a href={link} target="_blank">
                <img
                  src={logo}
                  alt={title}
                  className="h-8 w-8 border border-gray-800 group-hover:border-gray-700 rounded-full mr-2"
                />
              </a>
            </span>
            <h3 className="text-md">{title}</h3>
            <span className="ml-2 transition opacity-0 group-hover:opacity-100">
              <Tippy content="Open in New Tab">
                <a
                  href={link}
                  className="hover:text-gray-300 transition"
                  target="_blank"
                >
                  <LinkSimple size={17} />
                </a>
              </Tippy>
            </span>
          </div>

          <div className="mt-2 flex align-middle space-x-1 text-xs text-gray-400">
            <IdentificationBadge size={16} />
            <p>{role}</p>
          </div>
          <p className="text-sm text-gray-400 mt-3 mb-4">{description}</p>

          <div className="flex flex-wrap">
            {tech.map((tech) => (
              <div className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800 group-hover:bg-gray-700 group-hover:text-gray-300 transition text-gray-400">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
