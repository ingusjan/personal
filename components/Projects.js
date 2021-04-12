const Projects = () => {
  const projects = [
    {
      name: "Personal",
      lang: "Next.js",
      desc: "The very open-source site you're looking at now",
      link: "https://github.com/ingusjan/personal",
    },
    {
      name: "Creator Sites",
      lang: "React.js",
      desc: "Link marketing tool for Online Influencers",
      link: "https://creatorsites.net",
    },
    {
      name: "SpaceX Tracker",
      lang: "React.js",
      desc: "SpaceX Launch tracker using SpaceX's REST API",
      link: "https://spacex.ingus.dev",
    },
    {
      name: "Illumi Media",
      lang: "WooCommerce",
      desc: "Self-service EC2-hosted eCommerce for Content Creators",
      link: "https://illumimedia.co",
    },
    {
      name: "PrettyRad Shirts",
      lang: "Shopify",
      desc: "eCommerce specialising in T-Shirt Designs",
      link: "https://www.instagram.com/prettyradshirts/",
    },
  ];

  const getColour = (lang) => {
    switch (lang) {
      case "React.js":
        return "bg-yellow-300";
      case "WooCommerce":
        return "bg-pink-400";
      case "Shopify":
        return "bg-green-400";
      case "Next.js":
        return "bg-gray-600";
      default:
        return "bg-gray-400";
    }
  };
  return projects.map((p) => {
    return (
      <a href={p.link} target="_blank" rel="noopener">
        <div className="mb-2 cursor-pointer transition hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 w-full p-5 border border-gray-300 dark:border-gray-800 flex flex-col lg:flex-row rounded-md">
          <div className="w-full lg:w-80 pb-2 lg:pb-0 lg:border-r border-gray-300 dark:border-gray-800">
            <p className="font-mono text-gray-400">name</p>
            {p.name}
          </div>
          <div className="w-full lg:w-80 lg:pl-7 pb-2 lg:pb-0 pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-r border-gray-300 dark:border-gray-800">
            <p className="font-mono text-gray-400">language</p>
            <p className="inline-flex items-center space-x-2">
              <span>{p.lang}</span>
              <span
                className={`inline-flex w-3 h-3 ${getColour(
                  p.lang
                )} rounded-full`}
              />
            </p>
          </div>
          <div className="lg:pl-7 pt-2 lg:pt-0 w-full border-t lg:border-t-0 border-gray-300 dark:border-gray-800">
            <p className="font-mono text-gray-400">description</p>
            <p>{p.desc}</p>
          </div>
        </div>
      </a>
    );
  });
};

export default Projects;
