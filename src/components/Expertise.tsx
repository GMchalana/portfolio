import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Angular",
    "NodeJs",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Flutter",
    "React Native",
    "Dart",
    "Android Studio",
    "NodeJs",
    "SQL",
];

const labelsThird = [
    "Java Swing",
    "Native Java",
    "Python",
    "Electron JS",
    "SQL",
];

const labelsFourth = [
    "Java Script",
    "Python",
    "Java",
    "SQL",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCompass} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMobileScreenButton} size="3x"/>
                    <h3>Mobile Application Development</h3>
                    <p>Once the application design is ready, I assist clients in developing mobile apps with a focus on performance, cross-platform compatibility, and seamless user experience to ensure a successful launch.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDesktop} size="3x"/>
                    <h3>Desktop App Development</h3>
                    <p>I work with clients to develop robust desktop applications, ensuring high performance, smooth integration with operating systems, and an intuitive user interface for a seamless desktop experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTerminal} size="3x"/>
                    <h3>Programming Languages</h3>
                    <p>As a highly skilled JavaScript developer, I excel in building dynamic and responsive applications. Additionally, I am proficient in Python, Java, and SQL, allowing me to tackle a wide range of development challenges. Whether it's backend services, databases, or full-stack applications, I leverage my diverse programming skills to deliver high-quality, efficient solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;