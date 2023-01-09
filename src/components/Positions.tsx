import { BriefcaseMetal, Calendar } from "phosphor-react";
import LogoVodafone from "../assets/img/vf.webp";
import LogoSplitvid from "../assets/img/splitvid.webp";
import LogoAlmighty from "../assets/img/almighty.webp";
import LogoCreatorSites from "../assets/img/creatorsites.webp";
import LogoIllumiMedia from "../assets/img/illumi.webp";
import LogoRetroPlan from "../assets/img/retroplan.webp";

const Positions = () => {
  const positions = [
    {
      logo: LogoVodafone,
      title: "Vodafone Group",
      link: "https://www.vodafone.co.uk/business/unified-communications",
      description:
        "Working at Vodafone Group's Engineering division on B2B web applications using React TypeScript, AWS and Micro FEs in the Enterprise Apps team.",
      tech: ["Micro FEs", "Blue / Green", "Agile", "TypeScript", "React"],
      role: "Software Engineer",
      date: "September 2019 - Present",
      subItems: [
        {
          title: "Vodafone Business UC Hub",
          description:
            "Frontend Engineering Lead responsible for pioneering, architecting and building a Next Generation UC Vodafone Business platform using the latest and greatest from the React ecosystem.",
          role: "Lead Front-end Software Engineer",
          date: "December 2021 - Present",
          link: "",
          tech: ["Micro FEs", "Blue / Green", "Agile", "TypeScript", "React"],
        },
        {
          title: "Vodafone Business UC with RingCentral",
          description:
            "I was one of a handful of employees who collaborated with RingCentral and an external UX/UI design contracting firm to create a user flow for an upcoming collaboration that worked best for both our customer groups.",
          role: "User Experience Consultant",
          date: "June 2021 - August 2021",
          link: "https://www.vodafone.co.uk/business/unified-communications/vodafone-with-ringcentral",
          tech: ["Micro FEs", "Blue / Green", "Agile", "TypeScript", "React"],
        },
        {
          title: "Vodafone Business Interactive Voice",
          description:
            "Developed a rewritten, “Beta” version of an existing Angular drag-and-drop Call Flow creation tool using React, Webpack and Tailwind. The new solution was built into a distributable private NPM package, versioned by the Semantic Release framework.",
          role: "Front-end Software Engineer",
          date: "September 2019 - December 2021",
          link: "https://www.vodafone.com/business/solutions/unified-communication/vodafone-business-interactive-voice",
          tech: [
            "React",
            "Tailwind",
            "Webpack",
            "GitLab NPM",
            "Semantic Release",
          ],
        },
      ],
    },
    {
      logo: LogoSplitvid,
      title: "Splitvid",
      link: "https://splitvid.app",
      description:
        "Currently in Development. Enabling content creators to run A/B Tests on their YouTube Videos.",
      tech: [
        "Vite",
        "React",
        "TypeScript",
        "Chakra UI",
        "Express",
        "Mongo DB",
        "Digital Ocean",
      ],
      role: "SaaS Solo Founder & Front-end Lead",
      date: "July 2022 - Present",
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
              <p className="mb-4 text-base font-normal text-gray-300">
                {p.description}
              </p>

              <a
                href={p.link}
                className="text-blue-300 underline break-all"
                target="_blank"
              >
                {p.link}
              </a>

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
              <ol className="mt-4 space-y-10 relative border-l dark:border-gray-800">
                {p.subItems?.map((subItem, i) => (
                  <li key={i} className="p-1 ml-6">
                    <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full dark:bg-gray-700">
                      <BriefcaseMetal />
                    </span>
                    <h4 className="flex items-center font-semibold text-md text-gray-900 dark:text-white">
                      {subItem.title}
                    </h4>
                    <time className="block mb-3 text-sm font-normal leading-none text-gray-400">
                      {subItem.role}
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-400">
                      {subItem.description}
                    </p>

                    <a
                      href={subItem.link}
                      className="text-blue-300 underline break-all"
                      target="_blank"
                    >
                      {subItem.link}
                    </a>

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
