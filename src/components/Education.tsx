import { Calendar } from "phosphor-react";

const Education = () => {
  const positions = [
    {
      logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQGKio0Euee3Lw/company-logo_200_200/0/1519856515388?e=1667433600&v=beta&t=CehxWmWU5Yw0EE6TDUtTnr5J_J4WjwYW2A-Pb8-83uA",
      title: "Lancaster University",
      description: "",
      role: "BSc (Hons) Digital and Technology Solutions, Software Engineer",
      date: "2020 - July 2023",
    },
    {
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQHDo015AjCecA/company-logo_200_200/0/1634241512966?e=1667433600&v=beta&t=HG1YimgB4bokUeVVJJQ3jiweREiGv4hTNEUEFReNBG4",
      title: "Gloucestershire College",
      description:
        "Intermediate course in Organisational System Security, Project Planning, Web Development and more. Completed with the highest grade Distinction*",
      role: "BTEC Level 3, Software Engineering",
      date: "2017 - 2019",
    },
  ];

  return (
    <div className="relative px-4 lg:px-2 overflow-x-hidden lg:overflow-x-visible">
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

export default Education;
