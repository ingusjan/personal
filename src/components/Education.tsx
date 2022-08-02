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

            <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
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