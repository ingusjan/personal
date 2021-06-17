import React from "react";

const Technologies = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-end">
      <div className="flex flex-col items-center">
        <img className="w-9" src="/img/firebase.svg" alt="Google Firebase" />
        <p className="text-md mt-3 text-gray-500 dark:text-white">Firebase</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="h-10" src="/img/fastify.svg" alt="Fastify" />
        <p className="text-md mt-3 text-gray-500 dark:text-white">Fastify</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="h-8" src="/img/expressjs.svg" alt="Express" />
        <p className="text-md mt-3 text-gray-500 dark:text-white">Express</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="w-12" src="/img/mongodb.svg" alt="MongoDB" />
        <p className="text-md mt-3 text-gray-500 dark:text-white">MongoDB</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="h-10" src="/img/next.svg" alt="Next.js" />
        <p className="text-md mt-3 text-gray-500 dark:text-white">Next.js</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="h-10" src="/img/react.svg" alt="React" />
        <p className="text-md mt-3 text-gray-500 dark:text-white">React.js</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="h-10" src="/img/redux.svg" alt="Redux" />
        <p className="text-md mt-3 text-gray-500 dark:text-white">Redux</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="h-9" src="/img/woocommerce.svg" alt="WooCommerce" />
        <p className="text-md mt-3 text-gray-500 dark:text-white">
          WooCommerce
        </p>
      </div>

      <div className="flex flex-col items-center">
        <img className="h-9" src="/img/shopify.svg" alt="Shopify" />
        <p className="text-md mt-3 text-gray-500 dark:text-white">Shopify</p>
      </div>

      <div className="flex flex-col items-center">
        <img className="h-9" src="/img/figma.svg" alt="Figma" />
        <p className="text-md mt-3 text-gray-500 dark:text-white">Figma</p>
      </div>
    </div>
  );
};

export default Technologies;
