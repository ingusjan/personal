import dayjs from "dayjs";

const Footer = () => {
  return (
    <div className="w-full text-sm mt-32 pt-4 pb-8 px-4 lg:px-32 xl:px-80 border-t dark:border-gray-800">
      <div className="container mx-auto">
        <p className="text-gray-500 dark:text-gray-400">
          © {dayjs().year()} Ingus Jansons
        </p>
        <p className="text-gray-500 dark:text-gray-400 inline-flex align-center">
          Built using
          {/* className='fill-current w-9 h-9 align-middle mr-4' */}
          <svg
            viewBox="0 0 237 176"
            className="fill-current w-12 -mt-px ml-3 mr-1"
          >
            <path d="M49 33h39v3H53v23h33v3H53v25h35v4H49V33zm42 0h5l18 25 19-25 25-33-42 61 22 30h-4l-20-28-20 28h-4l22-30-21-28zm48 3v-3h45v3h-21v55h-3V36h-21zM0 33h5l61 91-25-33L4 37v54H0zM183 87l2-2-2-1-1 1 1 2zm4-4c0 2 1 4 4 4 2 0 4-2 4-4v-9h-2v9l-2 2-2-2h-2zm10 0c0 2 2 4 5 4s5-2 5-4-1-3-4-4h-1c-2 0-3-1-3-2s1-2 3-2l3 2h2c-1-2-2-3-5-3s-5 1-5 3 2 3 4 4h1l3 2c0 1-1 2-3 2s-3-1-3-2h-2z" />
          </svg>
          and hosted on ▲Vercel.
        </p>
      </div>
    </div>
  );
};

export default Footer;
