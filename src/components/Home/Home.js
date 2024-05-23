import React from "react";
import photo from '../../images/prof-photo.jpg';
import "./Home.css";

const Home = () => {
    return (
        <div id="hero">
            <img src={photo} alt="Profile"/>
            <h1>Hello, I'm Isaiah Bernardino</h1>
            <h3><span style={{fontSize: 40}}>&#x21D2;</span> <span className="mp3-transition">I'm an aspiring software engineer</span></h3>
            <div className="icons">
                <a href="https://www.linkedin.com/in/isaiah-bernardino-7b3480224" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>	
                <a href="https://github.com/isaiahpb19" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
            </div>
            <span className="diff"><h3>scroll</h3></span>
            <span className="diff"><h1>&#x0FF5C;</h1></span>
        </div>
    );
};

export default Home;