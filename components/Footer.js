import dayjs from "dayjs";

const Footer = () => {
  return (
    <div className="w-screen mt-32 py-4 px-4 lg:px-32 xl:px-64 border-t dark:border-gray-800">
      <p className="text-sm opacity-50">
        © {dayjs().year()} Ingus Jansons
      </p>
    </div>
  );
};

export default Footer;
