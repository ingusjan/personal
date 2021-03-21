import Link from "next/link";
import { GitHub, Linkedin, Mail, Moon, Sun } from "react-feather";
import { useTheme } from "next-themes";
const Navbar = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='bg-white dark:bg-transparent py-2 px-4 lg:px-32 xl:px-80 w-full flex items-center border-b dark:border-gray-800 shadow-sm'>
      <div className='container mx-auto flex'>
        <Link href='/'>
          <h2 className='text-gray-500 dark:text-gray-100 transition hover:text-gray-400 cursor-pointer text-xl font-semibold mr-6 lg:mr-12'>
            @ingusjan
          </h2>
        </Link>
        <div className='flex w-full justify-between'>
          <ul className='flex space-x-4 overflow-x-auto'>
            <NavItem href='/about'>About</NavItem>
            <NavItem href='/gear'>Gear</NavItem>
          </ul>

          <div>
            <ul className='flex items-center space-x-4 overflow-x-auto'>
              <NavIcon
                icon={<Linkedin />}
                href='https://linkedin.com/in/ingus-jansons'
              />
              <NavIcon icon={<GitHub />} href='https://github.com/ingusjan' />

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className='inline-flex rounded-xl'
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
  const { icon, href } = props;
  return (
    <a
      className='text-gray-400 transition hover:text-gray-500 dark:hover:text-gray-100'
      target='_blank'
      href={href}
    >
      {icon}
    </a>
  );
};

const NavItem = (props) => {
  return (
    <li className='text-gray-400 transition hover:text-gray-500 dark:hover:text-gray-100 inline-flex items-center font-semibold text-sm'>
      <Link className='' href={props.href}>
        {props.children}
      </Link>
    </li>
  );
};

export default Navbar;
