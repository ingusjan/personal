import { BriefcaseMetal, Calendar } from "phosphor-react";

const Positions = () => {
  const positions = [
    {
      logo: "http://editorial.designtaxi.com/editorial-images/news-vodafone16102017/1.png",
      title: "Vodafone Group",
      link: "https://www.vodafone.co.uk/business",
      description:
        "Working at Vodafone Group's Engineering division on B2B web applications using React TypeScript, AWS and Micro FEs in the Enterprise Apps team.",
      tech: ["Micro FEs", "Blue / Green", "Agile", "TypeScript", "React"],
      role: "Software Engineer",
      date: "September 2019 - Present",
      subItems: [
        {
          title: "Vodafone UC Hub",
          description:
            "Innovated a Monorepo, Micro Frontend, TypeScript architecture and setup for a large-scale enterprise portal combining all of Vodafone's Unified Communications products..",
          role: "Front-end Engineering Lead",
          date: "December 2021 - Present",
          link: "https://www.vodafone.co.uk/business/unified-communications/vodafone-with-ringcentral",
          tech: ["Micro FEs", "Blue / Green", "Agile", "TypeScript", "React"],
        },
        {
          title: "Vodafone CallFlow Editor",
          description:
            "Built a new CallFlow Editor tool based on a previous legacy version, using React. The tool is used by Vodafone's customers to create their own call flows. Main challenge of this project was to integrate this tool in an Angular portal.",
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
          <li key={i} className="p-1 mb-10 ml-6">
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
                <div
                  key={tech}
                  className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800 group-hover:bg-gray-700 group-hover:text-gray-300 transition text-gray-400"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
              <Calendar size={16} />
              <time>{p.date}</time>
            </div>
            {p.subItems && (
              <ol className="mt-4 space-y-10 relative border-l dark:border-gray-800">
                {p.subItems?.map((subItem, i) => (
                  <li key={i} className="p-1 ml-6">
                    <span className="flex absolute -left-3.5 justify-center items-center w-7 h-7 bg-blue-200 rounded-full dark:bg-gray-700">
                      <BriefcaseMetal />
                    </span>
                    <h4 className="flex items-center text-md font-semibold text-gray-900 dark:text-white">
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
                      className="text-blue-300 underline"
                      target="_blank"
                    >
                      {subItem.link}
                    </a>

                    <div className="mt-4 flex flex-wrap">
                      {subItem.tech.map((tech) => (
                        <div
                          key={tech}
                          className="mb-2 py-1 px-2 text-xs rounded-md mr-2 bg-gray-800 group-hover:bg-gray-700 group-hover:text-gray-300 transition text-gray-400"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
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
