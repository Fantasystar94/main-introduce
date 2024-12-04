import { FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaJs, FaSass } from "react-icons/fa";
import { SiTypescript, SiJquery } from "react-icons/si";
import { forwardRef } from 'react';
import "../styles/skills.css";
const Skills=forwardRef((props,ref)=>{
      

    return(
    <div className="skills" ref={ref}>
        <div className="mainTitle">
        <h3>Skills</h3>
        </div>
        <ul className="skillBox">
            <li className="shadow"><FaReact color="#61DAFB" /> React</li>
            <li className="shadow"><FaVuejs color="#42b883" /> Vue.js</li>
            <li className="shadow"><FaHtml5 color="#E34F26" /> HTML</li>
            <li className="shadow"><FaCss3Alt color="#1572B6" /> CSS</li>
            <li className="shadow"><FaJs color="#F7DF1E" /> JavaScript</li>
            <li className="shadow"><FaSass color="#CC6699" /> SCSS</li>
            <li className="shadow"><SiTypescript color="#3178C6"  /> TypeScript</li>
            <li className="shadow"><SiJquery color="#0769AD" /> jQuery</li>
        </ul>
    </div>
    )
});

export default Skills;