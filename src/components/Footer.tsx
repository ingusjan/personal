const Footer = () => {
  return (
    <div className="mt-32 pb-12 bg-gray-900">
      <p className="text-center text-sm text-gray-600">
        Copyright &copy; {new Date().getFullYear()} Ingus Jansons <br />{" "}
        <span className="text-xs">
          Built from scratch using Vite, TypeScript, Tailwind CSS and hosted on
          CloudFlare Pages.
        </span>
      </p>
    </div>
  );
};

export default Footer;
