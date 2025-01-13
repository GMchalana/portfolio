import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFQSmO43sqMoQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721409073230?e=1742428800&v=beta&t=kK7RhGcUEArXKaZPaD4OfQQWRjjNV4sRWgCiVXTtYS4" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/GMchalana" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/chalana-prabhashwara" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Chalana Prabhashwara</h1>
          <p>Software Engineer || Web Developer || Mobile Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;