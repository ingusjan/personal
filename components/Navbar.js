import Link from "next/link";
import { GitHub, Linkedin, Mail, Moon, Sun } from "react-feather";
import { useTheme } from "next-themes";
const Navbar = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-transparent py-2 w-full flex items-center border-b dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-3 xl:px-0 flex">
        <Link href="/">
          <h2 className="text-gray-500 dark:text-gray-100 transition hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer text-xl font-semibold mr-6 lg:mr-12">
            @ingusjan
          </h2>
        </Link>
        <div className="flex w-full justify-between">
          <ul className="flex space-x-4 overflow-x-auto">
            <NavItem href="/about">About</NavItem>
            <NavItem href="/gear">Gear</NavItem>
          </ul>

          <div>
            <ul className="flex items-center space-x-4 overflow-x-auto">
              <NavIcon
                label="Ingus Jansons on LinkedIn"
                icon={<Linkedin />}
                href="https://linkedin.com/in/ingus-jansons"
              />
              <NavIcon
                label="Ingus Jansons on GitHub"
                icon={<GitHub />}
                href="https://github.com/ingusjan"
              />

              <button
                aria-label="Toggle Dark or Light mode"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="inline-flex rounded-xl"
              >
                {theme === "light" ? <Moon /> : <Sun />}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavIcon = (props) => {
  const { icon, href, label } = props;
  return (
    <a
      aria-label={label}
      className="text-gray-400 transition hover:text-gray-500 dark:hover:text-gray-100"
      target="_blank"
      rel="noopener"
      href={href}
    >
      {icon}
    </a>
  );
};

const NavItem = (props) => {
  return (
    <li className="text-gray-400 transition hover:text-gray-500 dark:hover:text-gray-100 inline-flex items-center font-semibold text-sm">
      <Link className="" href={props.href}>
        {props.children}
      </Link>
    </li>
  );
};

export default Navbar;
