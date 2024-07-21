const Footer = () => {
  return (
    <div className="mt-32 pb-12">
      <div className="text-center text-sm text-gray-300">
        Copyright &copy; {new Date().getFullYear()} Ingus Jansons <br />{" "}
        <div className="mt-4 text-xs text-gray-400 max-w-xl mx-auto">
          <p>
            Built from scratch using Vite, TypeScript, Tailwind CSS and hosted
            on CloudFlare Pages. This website is open source! You can view the
            source code here:{" "}
            <a
              className="underline"
              href="https://github.com/ingusjan/personal"
              target="_blank"
            >
              https://github.com/ingusjan/personal
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
