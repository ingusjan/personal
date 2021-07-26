const Projects = () => {
  const projects = [
    {
      name: "Creator Sites",
      lang: "React.js",
      desc: "Link Marketing Tool used by 260+ Creators",
      link: "https://creatorsites.net",
      img: "/img/CreatorSites.svg",
    },
    {
      name: "Illumi Media",
      lang: "WooCommerce",
      desc: "Go-to Branding Studio for 300+ Content Creators",
      link: "https://illumimedia.co",
      img: "/img/IllumiMedia.svg",
    },
    {
      name: "ThruRate",
      lang: "TypeScript",
      desc: "Click-through Monitoring Tool for Content Creators",
      link: "https://thrurate.com",
      img: "/img/ThruRate.svg",
    },
  ];

  const getColour = (lang) => {
    switch (lang) {
      case "React.js":
        return { text: "text-yellow-300", bg: "bg-yellow-300" };
      case "WooCommerce":
        return { text: "text-yellow-300", bg: "bg-pink-400" };
      case "Shopify":
        return "bg-green-400";
      case "Next.js":
        return "bg-gray-600";
      case "TypeScript":
        return "bg-blue-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 items-end'>
      {projects.map((p, i) => {
        return (
          <a key={i} href={p.link} target='_blank' rel='noopener'>
            <div className='flex flex-col justify-center items-center p-4 bg-[#20242b] text-center h-64 rounded-lg hover:bg-[#393e46] border border-[#393e46] cursor-pointer transition'>
              <img className='w-16 mb-2' src={p.img} alt={p.name} />
              <h3 className='text-lg font-semibold my-2'>{p.name}</h3>
              <p className='w-64'>{p.desc}</p>

              <p className='underline mt-2'>
                {p.link.replace("https://", "").replace("www.", "")}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
