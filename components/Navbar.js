import Link from "next/link";
import { GitHub, Linkedin, Instagram } from "react-feather";
import { useTheme } from "next-themes";
import Headroom from "react-headroom";
const Navbar = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <Headroom>
      <div className='bg-white  bg-[#0f1115] py-2 w-full flex items-center border-b  border-gray-800 shadow-sm'>
        <div className='container mx-auto px-3 xl:px-0 flex flex-col lg:flex-row'>
          <Link href='/'>
            <h2 className='text-gray-500 text-lg lg:text-xl w-60  text-gray-100 transition hover:text-gray-400  hover:text-gray-400 cursor-pointer  font-semibold mr-6 lg:mr-4'>
              Ingus Jansons
            </h2>
          </Link>
          <div className='flex w-full justify-between'>
            <ul className='flex space-x-4 overflow-x-auto'>
              <NavItem href='/blogs'>Blog</NavItem>
              <NavItem href='/about'>About</NavItem>
              <NavItem href='/gear'>Setup</NavItem>
            </ul>

            <div className='flex items-center space-x-4 overflow-x-auto'>
              <NavIcon
                label='Ingus Jansons on LinkedIn'
                icon={<Linkedin />}
                href='https://linkedin.com/in/ingus-jansons'
              />
              <NavIcon
                label='Ingus Jansons on GitHub'
                icon={<GitHub />}
                href='https://github.com/ingusjan'
              />

              <NavIcon
                label='Ingus Jansons on Instagram'
                icon={<Instagram />}
                href='https://instagram.com/ingusjan'
              />

              {/* <button
                aria-label="Toggle Dark or Light mode"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="inline-flex rounded-xl"
              >
                {theme === "light" ? <Moon /> : <Sun />}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </Headroom>
  );
};

const NavIcon = (props) => {
  const { icon, href, label } = props;
  return (
    <a
      aria-label={label}
      className='text-gray-400 transition hover:text-gray-500  hover:text-gray-100'
      target='_blank'
      rel='noopener'
      href={href}
    >
      {icon}
    </a>
  );
};

const NavItem = (props) => {
  return (
    <li className='text-gray-400 transition hover:text-gray-500  hover:text-gray-100 inline-flex items-center font-semibold text-sm'>
      <Link className='' href={props.href}>
        {props.children}
      </Link>
    </li>
  );
};

export default Navbar;
