import { FaGithub, FaLink } from "react-icons/fa";
import sortingScreenshot from "../assets/sorting-visualizer.png";
import QrPanda from "../assets/qr-panda.png";

function Projects() {
    return(
        <div id="projects" className="h-screen p-32 text-center">
            <h2 className="text-6xl font-bold text-SolidHeading">Projects</h2>
            <h3 className="text-lg mt-2">Things I've built so far</h3>
            <div className="flex">
                <Card 
                    imageSrc={sortingScreenshot}
                    title={"sorting-visualizer"}
                    desc={"Visualization Tool for Sorting Algorithms such as quicksort, mergesort, bublesort"}
                    stack={" React, Vite, Tailwind"}
                    preview={"https://gowthamk17.github.io/sorting-visualizer/"}
                    repo={"https://github.com/gowthamk17/sorting-visualizer"}
                />
                <Card 
                    imageSrc={QrPanda}
                    title={"qr-panda"}
                    desc={"Generate Qr code for a web link, Users can customize QR code properties like margin, color, EC level"}
                    stack={" React, Vite, Tailwind"}
                    preview={"https://gowthamk17.github.io/qrpanda/"}
                    repo={"https://github.com/gowthamk17/qrpanda"}
                />
            </div>
        </div>
    );
}

function Card({imageSrc, title, desc, stack, preview, repo}) {
    return(
        <div className="w-72 shadow-xl rounded-xl pb-3">
            <img src={imageSrc} alt="image" className="h-44 bg-slate-500 rounded-tl-lg rounded-tr-lg"/>
            <h3 className="m-3 text-xl font-semibold">{title}</h3>
            <h4 className="m-3 text-slate-400">{desc}</h4>
            <h5 className="m-3 text-slate-600"><strong>Tech Stack:</strong>{stack}</h5>
            <div className="m-3 justify-around flex">
                <a href={preview} target="_blank" className="underline">
                    <FaLink className="inline mr-2" />
                    Live Preview
                </a>
                <a href={repo} target="_blank" className="underline">
                    <FaGithub className="inline mr-2" />
                    View Code
                </a>
            </div>
        </div>
    );
}

export default Projects;