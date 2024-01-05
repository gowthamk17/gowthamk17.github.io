import logo from '/logo.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const navLinkCss = "list-none m-4 text-gray-500 hover:text-gray-900";

function NavBar() {

    return (
        <div className='m-6 flex justify-between items-center'>
            <img className='inline w-1/12' src={logo} alt="gowthamk17" />
            <ul className='flex items-center'>
                <NavLink linkTitle="Home"/>
                <NavLink linkTitle="About"/>
                <NavLink linkTitle="Tech Stack"/>
                <NavLink linkTitle="Projects"/>
                <NavLink linkTitle="Contact"/>
                <a href="https://github.com/gowthamk17" target='_blank'>
                    <FaGithub size={30} className={navLinkCss}  />
                </a>
                <a href="https://www.linkedin.com/in/gowthamk17/" target='_blank'>
                    <FaLinkedin size={30} className={navLinkCss}  />
                </a>
                <a href="https://leetcode.com/gowthamk17/" target='_blank'>
                    <SiLeetcode size={30} className={navLinkCss}  />
                </a>
            </ul>
        </div>
    );
}

function NavLink({ linkTitle }) {
    return (
        <li className={navLinkCss} >
            <a href={"#"+linkTitle}>{ linkTitle }</a>
        </li>
    );
}

export default NavBar;