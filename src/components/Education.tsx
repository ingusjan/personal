import { Calendar } from "phosphor-react";
import LogoGloscol from "../assets/img/gloscol.webp";
import LogoLancaster from "../assets/img/lancaster.webp";
import LogoRoehampton from "../assets/img/roehampton.webp";

const Education = () => {
  const positions = [
    {
      logo: LogoLancaster,
      title: "Lancaster University",
      description:
        "Studied for the Bachelor's Degree while at an Apprenticeship with Vodafone Group. Graduated with a 1st Class Bachelor's Degree in July 2023. The course covered topics such as Project Management, Corporate Strategies, Cyber Security & Ethics, Networking and more.",
      role: "First Class BSc. (Hons.) Digital and Technology Solutions (DTS), Software Engineer",
      date: "September 2020 - July 2023",
    },
    {
      logo: LogoRoehampton,
      title: "Roehampton University",
      description:
        "Successfully completed the initial year of my Software Engineering Bachelor's degree at Roehampton University (delivered by QA) before transferring to Lancaster University.",
      role: "BSc. (Hons.) Digital and Technology Solutions, Software Engineer",
      date: "September 2019 - September 2020",
    },
    {
      logo: LogoGloscol,
      title: "Gloucestershire College",
      description:
        "Intermediate course in Organisational System Security, Project Planning, Web Development and more. Completed with the highest grade Distinction*",
      role: "BTEC Level 3, Software Engineering",
      date: "September 2017 - July 2019",
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

            <div className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
              <Calendar size={16} />
              <time>{p.date}</time>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Education;
