import { Calendar } from "phosphor-react";

const Positions = () => {
  const positions = [
    {
      logo: "http://editorial.designtaxi.com/editorial-images/news-vodafone16102017/1.png",
      title: "Vodafone UC Hub",
      link: "https://www.vodafone.co.uk/business/unified-communications/vodafone-with-ringcentral",
      description:
        "Innovating, architecting and building B2B web applications using React TypeScript, AWS and Micro FEs in the Enterprise Apps team.",
      tech: ["Micro FEs", "Blue / Green", "Agile", "TypeScript", "React"],
      role: "Front-end Engineering Lead",
      date: "December 2021 - Present",
    },
    {
      logo: "http://editorial.designtaxi.com/editorial-images/news-vodafone16102017/1.png",
      title: "Vodafone CallFlow Editor",
      link: "https://www.vodafone.com/business/solutions/unified-communication/vodafone-business-interactive-voice",
      description:
        "Built a new CallFlow Editor tool based on a previous legacy version, using React. The tool is used by Vodafone's customers to create their own call flows. Main challenge of this project was to integrate this tool in an Angular portal.",
      tech: ["React", "Tailwind", "Webpack", "GitLab NPM", "Semantic Release"],
      role: "Front-end Software Engineer",
      date: "January 2021 - December 2021",
    },
    {
      logo: "https://pbs.twimg.com/profile_images/1383616380247830558/5O7az61T_400x400.jpg",
      title: "ThruRate",
      link: "https://thrurate.co",
      description:
        "Enabling content creators to run A/B Tests on their YouTube Videos.",
      tech: ["Next.js", "React", "TypeScript", "Chakra UI", "Fastify"],
      role: "SaaS Co-Founder & Front-end Lead",
      date: "June 2022 - Present",
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
      role: "SaaS Founder & Developer",
      date: "February 2022 - Present",
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
      role: "SaaS Founder & Developer",
      date: "January 2020 - Present",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/en/1/18/Almighty_records.jpg",
      title: "Almighty Records",
      link: "https://almightyrecords.com",
      description:
        "Managed platforms, marketing and customer relations. I was responsible for increasing Twitter following by 87%, Instagram following by 247%.",
      tech: ["eCommerce", "Squarespace", "SEO", "Social Media Marketing"],
      role: "Social Media Manager",
      date: "August 2018 - February 2019",
    },
    {
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQGWvjBixEDhnw/company-logo_200_200/0/1621094805209?e=1667433600&v=beta&t=rsFB1eZUUuLU6qaszEDgNXoOugjvRJKdzA-KlVJqPU0",
      title: "Illumi Media",
      link: "https://fiverr.com/illumimedia",
      description:
        "Self-service branding and design for content creators. Built a profitable e-commerce platform using WordPress, Stripe and AWS. Worked with talent management agencies like Voddity, Render.gg and more.",
      tech: ["eCommerce", "Squarespace", "SEO", "Social Media Marketing"],
      role: "Founder & Social Media Designer",
      date: "June 2016 - January 2022",
    },
  ];

  return (
    <div className="relative px-4 lg:px-2 overflow-x-hidden">
      <ol className="relative border-l dark:border-gray-800">
        {positions.map((p, i) => (
          <li className="p-1 mb-10 ml-6">
            <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <img
                src={p.logo}
                alt={p.title}
                className="w-full h-full rounded-full"
              />
            </span>
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
              {p.title}
            </h3>
            <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
              {p.role}
            </time>
            <p className="mb-4 text-base font-normal text-gray-400">
              {p.description}
            </p>

            <a
              href={p.link}
              className="text-blue-300 underline"
              target="_blank"
            >
              {p.link}
            </a>

            <div className="mt-4 flex flex-wrap">
              {p.tech.map((tech) => (
                <div className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800 group-hover:bg-gray-700 group-hover:text-gray-300 transition text-gray-400">
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
              <Calendar size={16} />
              <time>{p.date}</time>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
  // return (
  //   <div className="mt-3 grid lg:grid-cols-2 gap-4">
  //     {projects.map(({ logo, title, link, description, tech, role }, i) => (
  //       <motion.div
  //         initial={{ marginTop: 10, opacity: "0%" }}
  //         animate={{ marginTop: 0, opacity: "100%" }}
  //         transition={{
  //           duration: 1,
  //           delay: 1.9 + i * 0.1,
  //           easings: "easeInOut",
  //         }}
  //         className="rounded-lg group p-4 border bg-gray-900 border-gray-800 hover:border-gray-700 transition"
  //       >
  //         <div className="flex items-center">
  //           <span>
  //             <a href={link} target="_blank">
  //               <img
  //                 src={logo}
  //                 alt={title}
  //                 className="h-8 w-8 border border-gray-800 group-hover:border-gray-700 rounded-full mr-2"
  //               />
  //             </a>
  //           </span>
  //           <h3 className="text-md">{title}</h3>
  //           <span className="ml-2 transition opacity-0 group-hover:opacity-100">
  //             <Tippy content="Open in New Tab">
  //               <a
  //                 href={link}
  //                 className="hover:text-gray-300 transition"
  //                 target="_blank"
  //               >
  //                 <LinkSimple size={17} />
  //               </a>
  //             </Tippy>
  //           </span>
  //         </div>

  //         <div className="mt-2 flex align-middle space-x-1 text-xs text-gray-400">
  //           <IdentificationBadge size={16} />
  //           <p>{role}</p>
  //         </div>
  //         <p className="text-sm text-gray-400 mt-3 mb-4">{description}</p>

  //         <div className="flex flex-wrap">
  //           {tech.map((tech) => (
  //             <div className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800 group-hover:bg-gray-700 group-hover:text-gray-300 transition text-gray-400">
  //               {tech}
  //             </div>
  //           ))}
  //         </div>
  //       </motion.div>
  //     ))}
  //   </div>
  // );
};

export default Positions;
