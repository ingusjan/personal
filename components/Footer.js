import dayjs from "dayjs";

const Footer = () => {
  return (
    <div className="w-full text-sm mt-32 pt-4 pb-8 px-4 lg:px-32 xl:px-80 border-t dark:border-gray-800">
      <p className="text-gray-500">
        © {dayjs().year()} Ingus Jansons 
      </p>
      <p className="text-gray-600">
      Built using Next.js and hosted on Vercel.
      </p>
    </div>
  );
};

export default Footer;
