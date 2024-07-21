import { Briefcase, Calendar, Star } from "@phosphor-icons/react";
import LogoVodafone from "../assets/img/vf.webp";
import LogoAlmighty from "../assets/img/almighty.webp";
import LogoCreatorSites from "../assets/img/creatorsites.webp";
import LogoIllumiMedia from "../assets/img/illumi.webp";
import LogoRetroPlan from "../assets/img/retroplan.webp";
import LogoDoxyMe from "../assets/img/doxyme.webp";

type Position = {
  logo: string;
  title: string;
  link: string;
  description: string;
  tech: string[];
  role: string;
  date: string;
  subItems?: {
    title: string;
    role?: string;
    description: string;
    date: string;
    tech?: string[];
    link?: string;
    isPromotion?: boolean;
  }[];
};

const Positions = () => {
  const positions: Position[] = [
    {
      logo: LogoDoxyMe,
      title: "Doxy.me",
      link: "https://doxy.me",
      description:
        "Fullstack Software Engineer at Doxy.me, a telemedicine platform used by ⅓ of the entire U.S. healthcare system. I work on the core product, building new features and improving existing ones.",
      tech: ["Nest.js", "Next.js", "Agile", "TypeScript", "React"],
      role: "Software Engineer",
      date: "September 2023 - Present",
      subItems: [
        {
          title: "Frontend Quality and Team Enablement",
          description:
            "Building out the internal Doxy.me component library and setting company-wide standards for Frontend quality. Additionally, I work in the Platforms & Enablement team, helping our product teams ship features faster.",
          date: "July 2024 - Present",
        },
        {
          title: "Doxy.me Core Product - Analytics",
          description:
            "Built a refresh of our old Analytics page in our new V2 React codebase, using MUI X Charts & our existing API fetched using RTK Query. This was done in just two weeks including QA, Team Reviews, etc.",
          date: "July 2024 - July 2024",
          tech: ["RTK Query", "MUI X Charts"],
        },
        {
          title: "Doxy.me Core Product - Group Call",
          description:
            "Developed a refresh of a core feature that allows healthcare professionals to host group calls with up to 20 participants. This included helping architect Doxy.me's in-call layout manager which intelligently positions all video feeds.",
          date: "September 2023 - June 2024",
          link: "https://help.doxy.me/en/articles/95902-start-a-group-call",
          tech: ["WebRTC", "Vonage", "Storybook"],
        },
      ],
    },
    {
      logo: LogoVodafone,
      title: "Vodafone Group",
      link: "https://www.vodafone.co.uk/business/unified-communications",
      description:
        "Worked at Vodafone Group; UK's, India's and Italy's biggest mobile network operator. I worked on Vodafone Group Business web applications using React TypeScript, AWS and Micro FEs in the Enterprise Apps team. \n\nI achieved Top Performer status for two years in a row, despite working as an Apprentice completing my degree at the same time.",
      tech: ["Micro FEs", "Blue / Green", "Agile", "TypeScript", "React"],
      role: "Software Engineer",
      date: "September 2019 - September 2023",
      subItems: [
        {
          isPromotion: true,
          title: "Lead Frontend Software Engineer",
          description:
            "After 2 years of being an Apprentice Software Engineer, I was promoted to Lead Frontend Engineer. My new responsibilities included leading a team of 15 engineers, mentoring and coaching them to deliver high-quality software.",
          date: "June 2023",
        },
        {
          title: "Vodafone Business UC Hub",
          description:
            "Frontend Engineering Lead responsible for pioneering, architecting and building a Next Generation UC Vodafone Business platform using the latest and greatest from the React ecosystem.",
          role: "Lead Front-end Software Engineer",
          date: "December 2021 - September 2023",
          link: "https://www.vodafone.co.uk/business/unified-communications",
          tech: ["Micro Frontends", "Leadership", "Agile"],
        },
        {
          title: "Vodafone Business UC with RingCentral",
          description:
            "I was one of a handful of employees who collaborated with RingCentral and an external UX/UI design contracting firm to create a user flow for an upcoming collaboration that worked best for both our customer groups.",
          role: "User Experience Consultant",
          date: "June 2021 - August 2021",
          link: "https://www.vodafone.co.uk/business/unified-communications/vodafone-with-ringcentral",
          tech: ["Figma", "External Consultancy", "Project Planning"],
        },
        {
          title: "Vodafone Business Interactive Voice",
          description:
            "Developed a rewritten, “Beta” version of an existing Angular drag-and-drop Call Flow creation tool using React, Webpack and Tailwind. The new solution was built into a distributable private NPM package, versioned by the Semantic Release framework.",
          role: "Front-end Software Engineer",
          date: "September 2019 - December 2021",
          link: "https://www.vodafone.com/business/solutions/unified-communication/vodafone-business-interactive-voice",
          tech: [
            "Tailwind CSS",
            "Webpack 5",
            "GitLab Private NPM",
            "Semantic Release",
            "Bundle Size Optimisation",
          ],
        },
      ],
    },
    {
      logo: LogoRetroPlan,
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
      role: "SaaS Solo Founder & Developer",
      date: "February 2022 - Present",
    },
    {
      logo: LogoCreatorSites,
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
      role: "SaaS Solo Founder & Developer",
      date: "January 2020 - Present",
    },
    {
      logo: LogoAlmighty,
      title: "Almighty Records",
      link: "https://almightyrecords.com",
      description:
        "Managed platforms, marketing and customer relations. I was responsible for increasing Twitter following by 87%, Instagram following by 247%.",
      tech: ["eCommerce", "Squarespace", "SEO", "Social Media Marketing"],
      role: "Social Media Manager",
      date: "August 2018 - February 2019",
    },
    {
      logo: LogoIllumiMedia,
      title: "Illumi Media",
      link: "https://illumimedia.co",
      description:
        "Self-service branding and design for content creators. Built a profitable e-commerce platform using WordPress, Stripe and AWS. Worked with talent management agencies like Voddity, Render.gg and more.",
      tech: [
        "eCommerce",
        "WordPress",
        "WooCommerce",
        "Marketing",
        "Adobe Photoshop",
        "Customer Support",
      ],
      role: "Founder & Social Media Designer",
      date: "June 2016 - January 2022",
    },
  ];

  return (
    <div className="relative px-4 lg:px-2 overflow-x-hidden lg:overflow-x-visible">
      <ol className="relative border-l dark:border-gray-800">
        {positions.map((p, i) => (
          <li key={i} className="mb-10 ml-6">
            <div className="bg-gray-800 px-4 py-3 rounded-lg">
              <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 rounded-full ring-8 ring-white dark:ring-gray-900">
                <img
                  src={p.logo}
                  alt={p.title}
                  className="w-full h-full rounded-full"
                />
              </span>
              <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>
              <p className="block mb-3 text-sm font-normal leading-none text-gray-400">
                {p.role}
              </p>
              <p className="mb-4 text-base font-sans whitespace-pre-wrap font-normal text-gray-300">
                {p.description}
              </p>

              {p.link && (
                <a
                  href={p.link}
                  className="text-blue-300 underline break-all"
                  target="_blank"
                >
                  {p.link}
                </a>
              )}

              <div className="mt-4 flex flex-wrap">
                {p.tech.map((tech) => (
                  <div
                    key={tech}
                    className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-600 text-gray-2"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                <Calendar size={16} />
                <time>{p.date}</time>
              </div>
            </div>

            {p.subItems && (
              <ol className="mt-7 space-y-10 relative border-l dark:border-gray-800">
                {p.subItems?.map((subItem, i) => (
                  <li key={i} className="p-1 ml-6">
                    <span className="absolute -left-3.5">
                      {subItem.isPromotion ? (
                        <span className="flex justify-center items-center w-7 h-7 bg-yellow-200 rounded-full dark:bg-gray-700">
                          <Star size="20px" />
                        </span>
                      ) : (
                        <span className="flex justify-center items-center w-7 h-7 bg-blue-200 rounded-full dark:bg-gray-700">
                          <Briefcase size="20px" />
                        </span>
                      )}

                      <img
                        src={p.logo}
                        alt={p.title}
                        className="w-4 h-4 absolute z-[2] rounded-full bottom-[-2px] right-[-2px]"
                      />
                    </span>

                    <div className="flex align-center">
                      {subItem.isPromotion && (
                        <div className="text-sm font-bold px-2 border rounded mr-2">
                          Promotion
                        </div>
                      )}

                      <h4 className="flex items-center font-semibold text-md text-gray-900 dark:text-white">
                        {subItem.title}
                      </h4>
                    </div>

                    {subItem.role && (
                      <p className="block  text-sm font-normal leading-none text-gray-400">
                        {subItem.role}
                      </p>
                    )}

                    <p className="mb-4 mt-3 text-base font-normal text-gray-400">
                      {subItem.description}
                    </p>

                    <a
                      href={subItem.link}
                      className="text-blue-300 underline break-all"
                      target="_blank"
                    >
                      {subItem.link}
                    </a>

                    {subItem.tech && (
                      <div className="mt-4 flex flex-wrap">
                        {subItem.tech.map((tech) => (
                          <div
                            key={tech}
                            className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800  text-gray-300"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
                      <Calendar size={16} />
                      <time>{subItem.date}</time>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Positions;
