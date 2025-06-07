import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {/* <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div> */}

            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>PDF Converter</h2>
                    <a
                        href="https://jpg-converter.vercel.app/"
                        className="custom-live-link"
                        style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s',
                            fontSize: '14px'
                        }}
                    >View Live</a>
                </div>
                <p>The website PDF Converter is a fast and free tool that allows users to convert images into PDF format. Users can easily upload images by clicking or dragging them onto the interface, and the site handles the conversion directly in the browser without requiring any backend services. It also offers additional tools like a PDF splitter. Developed by Chalana Prabhashwara, the site is part of the Dennam.lk project.</p>
            </div>

            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>Weather App</h2>
                    <a
                        href="https://weather-app-alpha-six-57.vercel.app/"
                        className="custom-live-link"
                        style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s',
                            fontSize: '14px'
                        }}
                    >View Live</a>
                </div>
                <p>The website Weather App is a real-time weather forecasting tool developed by Chalana Prabhashwara under the Dennam.lk project. It allows users to search for current weather conditions in various locations, providing up-to-date information directly in the browser. The application is entirely frontend-based, requiring no backend services, and is deployed on Vercel for seamless access.</p>
            </div>


            <div className="project">
                <img src={mock01} className="zoom" alt="thumbnail" width="100%"/>
                <h2>ATM seis</h2>
                <p>ATM seis(ATM security and efficiency improving system) is a IoT and ML based mobile application that gives access to bank officers for monitoring cash levels and security concerns. And also it has a real time alerting system. Used flutter for the mobile application. ESP32 and IR sharp distance sensor are the major divices in IoT section</p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Testing PC</h2>
                <p>Testing PC allows chemical officers in university for monitor chemical testing orders and control all orders using this web based platform. Used reactJs, PHP and mysql for this web application</p>
            </div>
            <div className="project">
              <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Tasky App</h2>
                <p>Simple mobile application developed using flutter, nodeJs and mongoDB. User can loging to the app and manage their own to dos</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                <h2>To-Do List</h2>
                <p>Simple to do list web application developed using reactJs. Only have frontend and used arras and tuple for storing data.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Tourist Guide System</h2>
                <p>Provide a guidance tourists about travelling places in Sri Lanka. Created by using HTML, Jaava Script and CSS.</p>
            </div>
            <div className="project">
               <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Dye Lab Industrial Software</h2>
                <p>Day Lab is a desktop application that provide interface for calculating chemical values for garment and textile industri. Used native JAVA and Java swing for the developing</p>
            </div>

        </div>
    </div>
    );
}

export default Project;