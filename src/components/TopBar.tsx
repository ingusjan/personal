import { LinkedinLogo } from "phosphor-react";
import { useEffect } from "react";
import Me from "../assets/me.jpg";

const TopBar = () => {
  useEffect(() => (window.onscroll = () => setStickyNavbar()), []);

  // Add the 'fixed' tailwind class when the user scrolls past the LinkedIn button
  const setStickyNavbar = () => {
    const navbar = document.getElementById("topNavbar");
    const linkedInButton = document.getElementById("linkedInButton");

    const sticky = linkedInButton?.offsetTop;

    if (!sticky) return;

    if (window.pageYOffset >= sticky) {
      navbar?.classList.add("fixed");
      navbar?.classList.remove("hidden");
    } else {
      navbar?.classList.add("hidden");
      navbar?.classList.remove("fixed");
    }
  };

  return (
    <div
      id="topNavbar"
      className="hidden z-[3] top-0 bg-slate-900/50 text-white backdrop-blur-lg p-5 w-full"
    >
      <div className="max-w-4xl mx-auto z-[2]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img className="rounded-full w-10 h-10" src={Me} />
            <div className="leading-none">
              <p className="font-semibold text-xl">Ingus Jansons</p>
              <p className="text-xs -mt-0.5 text-gray-400">
                Lead TypeScript Engineer
              </p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/ingus-jansons/"
            target="_blank"
            className="bg-[#005E93] hover:bg-[#0077B5] select-none transition cursor-pointer px-4 py-2 rounded inline-flex items-center space-x-2"
          >
            <LinkedinLogo weight="bold" size={20} />
            <span className="text-sm">Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
