import Link from "next/link";
import { GitHub, Linkedin, Mail } from "react-feather";

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-transparent py-2 px-4 lg:px-32 xl:px-64 w-screen flex items-center border-b dark:border-gray-800 shadow-sm">
      <Link href="/"><h2 className="hover:text-yellow-500 cursor-pointer text-xl font-semibold mr-5 lg:mr-8">@ingusjan</h2></Link>
      <div className="flex w-full justify-between">
        <div>
        <ul className="flex space-x-4 overflow-x-auto">
        <NavItem href="/about">About</NavItem>
      </ul>
        </div>
      
        <div>
        <ul className="flex space-x-4 overflow-x-auto">
        <a className="hover:text-yellow-500" target="_blank" href="https://linkedin.com/in/ingus-jansons"><Linkedin /></a>
        <a className="hover:text-yellow-500" target="_blank" href="https://github.com/ingusjan"><GitHub /></a>
        <a className="hover:text-yellow-500" target="_blank" href="mailto:ingusjancorp@gmail.com"><Mail /></a>
      </ul>
        </div>
      </div>
      
    </div>
  );
};

const NavItem = (props) => {
  return (
    <li className="hover:text-yellow-500">
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
};

export default Navbar;
