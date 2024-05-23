import React from "react";
import photo from '../../images/prof-photo.jpg';
import "./Home.css";

const Home = () => {
    return (
        <div id="hero">
            <img src={photo} alt="Profile"/>
            <h1>Hello, I'm Isaiah Bernardino</h1>
            <div className="scrolling-words-container">
                <div className="scrolling-words-box">
                    <ul>    
                        <li><span style={{fontSize: 40}}>&#x21D2;</span> I'm an aspiring software engineer</li>
                        <li><span style={{fontSize: 40}}>&#x21D2;</span> I'm an anime/manga otaku</li>
                        <li><span style={{fontSize: 40}}>&#x21D2;</span> I'm a coffee connoisseur</li>
                        <li><span style={{fontSize: 40}}>&#x21D2;</span> I'm a basketball enthusiast</li>
                        <li><span style={{fontSize: 40}}>&#x21D2;</span> I'm an aspiring software engineer</li>
                    </ul>
                </div>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/isaiah-bernardino-7b3480224" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>	
                <a href="https://github.com/isaiahpb19" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
            </div>
            <span className="diff"><h1 style={{fontSize: 90}}>&#x0FF5C;</h1></span>
        </div>
    );
};

export default Home;