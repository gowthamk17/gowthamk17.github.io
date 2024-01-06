import logo from '/logo.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const navLinkCss = "list-none m-4 text-gray-500 hover:text-gray-900";

function NavBar() {

    return (
        <div className='w-full p-6 flex justify-between items-center absolute top-0 bg-white'>
            <a href="#"><img className='w-40' src={logo} alt="gowthamk17" /></a>
            <ul className='flex items-center'>
                <NavLink linkTitle="Home" linkId=""/>
                <NavLink linkTitle="About" linkId="about"/>
                <NavLink linkTitle="Tech Stack" linkId="tech_stack"/>
                <NavLink linkTitle="Projects" linkId="projects"/>
                <NavLink linkTitle="Contact" linkId="contact"/>
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

function NavLink({ linkTitle, linkId }) {
    return (
        <li className={navLinkCss} >
            <a href={"#"+linkId}>{ linkTitle }</a>
        </li>
    );
}

export default NavBar;