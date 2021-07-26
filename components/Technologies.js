import React from "react";

const Technologies = () => {
  const technologyList = [
    {
      label: "Firebase",
      img: "firebase.svg",
      className: "h-10",
    },
    {
      label: "Fastify",
      img: "fastify.svg",
      className: "h-10",
    },
    {
      label: "Express",
      img: "expressjs.svg",
      className: "h-8",
    },
    {
      label: "MongoDB",
      img: "mongodb.svg",
      className: "h-12",
    },
    {
      label: "Next.js",
      img: "next.svg",
      className: "h-10",
    },
    {
      label: "React.js",
      img: "react.svg",
      className: "h-10",
    },
    {
      label: "React.js",
      img: "react.svg",
      className: "h-12",
    },
    {
      label: "Redux",
      img: "redux.svg",
      className: "h-10",
    },
    {
      label: "WooCommerce",
      img: "woocommerce.svg",
      className: "h-9",
    },
    {
      label: "Shopify",
      img: "shopify.svg",
      className: "h-9",
    },
    {
      label: "Figma",
      img: "figma.svg",
      className: "h-9",
    },
    {
      label: "Tailwind",
      img: "tailwind.svg",
      className: "h-9",
    },
    {
      label: "Chakra UI",
      img: "chakra.svg",
      className: "h-10",
    },
  ];
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-end'>
      {technologyList.map((t, i) => {
        return (
          <div className='flex flex-col items-center'>
            <img className={t.className} src={`/img/${t.img}`} alt={t.label} />
            <p className='text-md mt-3 text-white'>{t.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
