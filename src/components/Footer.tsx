const Footer = () => {
  return (
    <div className="mt-32 pb-12">
      <p className="text-center text-sm text-gray-300">
        Copyright &copy; {new Date().getFullYear()} Ingus Jansons <br />{" "}
        <span className="text-xs text-gray-400">
          Built from scratch using Vite, TypeScript, Tailwind CSS and hosted on
          CloudFlare Pages.
        </span>
      </p>
    </div>
  );
};

export default Footer;
