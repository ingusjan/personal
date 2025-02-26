import { LinkedinLogo } from "@phosphor-icons/react";
import { useEffect } from "react";
import Me from "../assets/img/me.webp";
import { JOB_TITLE } from "../config";
import { track_linkedin_connect } from "../lib/analytics";

const TopBar = () => {
  useEffect(() => (window.onscroll = () => setStickyNavbar()), []);

  // Add tailwind class when the user scrolls past the LinkedIn button
  const setStickyNavbar = () => {
    const navbar = document.getElementById("topNavbar");
    const linkedInButton = document.getElementById("linkedInButton");

    const sticky = linkedInButton?.offsetTop;

    if (!sticky) return;

    if (window.scrollY >= sticky) {
      navbar?.classList.add("translate-y-0");
      navbar?.classList.remove("-translate-y-[100%]");
    } else {
      navbar?.classList.add("-translate-y-[100%]");
      navbar?.classList.remove("translate-y-0");
    }
  };

  return (
    <div
      id="topNavbar"
      className="fixed -translate-y-[100%] z-[3] top-0 bg-slate-900/50 text-white backdrop-blur-lg p-5 w-full transition-all ease-in-out duration-300"
    >
      <div className="max-w-5xl mx-auto z-[2]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              className="rounded-full w-10 h-10"
              src={Me}
              alt="Ingus Jansons"
            />
            <div className="leading-none">
              <p className="font-semibold text-md lg:text-xl">Ingus Jansons</p>
              <p className="text-xs md:text-sm md:-mt-0.5 text-gray-400">
                {JOB_TITLE}
              </p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/ingus-jansons/"
            onClick={track_linkedin_connect}
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
