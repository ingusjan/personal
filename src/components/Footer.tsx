const Footer = () => {
  return (
    <div className="mt-32 pb-12">
      <div className="text-sm text-gray-300">
        <p>
          Copyright &copy; {new Date().getFullYear()} Ingus Jansons <br />{" "}
        </p>
        <div className="mt-4 text-xs text-gray-400">
          <p>
            Built from scratch using Vite, TypeScript, Tailwind CSS and hosted
            on a private VPS. This website is open source! You can view the
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
