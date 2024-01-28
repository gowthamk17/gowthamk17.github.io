import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaGithub} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiVite, SiVisualstudiocode} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

function TechStack() {
    const techIconStye = "m-2 transition-colors duration-300";
    return(
        <div id="tech_stack" className="h-screen p-32 text-center">
            <h2 className="text-6xl font-bold text-SolidHeading">My Tech Stack</h2>
            <h3 className="text-lg mt-2">Technologies I've been working with recently</h3>
            <div className="text-SolidHeading text-8xl m-8 flex justify-center">
                <FaPython className={`${techIconStye} hover:text-cyan-500`} />
                <FaHtml5 className={`${techIconStye} hover:text-red-600`} />
                <FaCss3Alt className={`${techIconStye} hover:text-sky-500`} />
                <IoLogoJavascript className={`${techIconStye} hover:text-yellow-400`} />
                <SiTailwindcss className={`${techIconStye} hover:text-sky-400`} />
                <FaReact className={`${techIconStye} hover:text-sky-400`} />
                <FaNodeJs className={`${techIconStye} hover:text-green-600`} />
            </div>
            <div className="text-SolidHeading text-8xl m-8 flex justify-center">
                <SiTypescript className={`${techIconStye} hover:text-sky-600`} />    
                <SiVite className={`${techIconStye} hover:text-indigo-300`} />
                <FaGitAlt className={`${techIconStye} hover:text-red-600`} />
                <FaFigma className={`${techIconStye} hover:text-purple-300`} />
                <FaGithub className={`${techIconStye} hover:text-black`} />
                <SiVisualstudiocode className={`${techIconStye} hover:text-sky-600`} />
                <RiFlutterFill className={`${techIconStye} hover:text-sky-500`} />
            </div>
        </div>
    );
}

export default TechStack;