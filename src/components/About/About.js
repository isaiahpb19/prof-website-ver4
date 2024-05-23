import React from 'react';
import ucrLogo from '../../images/ucrLogo.png';
import kaguraBachi from "../../images/kaguraBachi.jpeg";
import oshiNoKo from "../../images/oshiNoKo.jpg";
import tomodachiGame from "../../images/tomodachiGame.jpg";
import edensZero from "../../images/edensZero.jpg";
import chainsawMan from "../../images/chainsawMan.jpg";
import grandBlue from "../../images/grandBlue.jpeg"
import blueLock from "../../images/blueLock.jpeg";
import "./About.css"

const About = () => {

    const showContents = (event) => {
        let relevantCourse = document.querySelector(".collapsible2").nextElementSibling;
        console.log(document.querySelector(".collapsible2"));
        if (relevantCourse.style.display === "block") {
            relevantCourse.style.display = "none";
        } else {
            relevantCourse.style.display = "block";
        }
    }

    return (
        <div id="entire">
            <div id="info">
                <div className="info-column">
                    <div id="aboutMe">
                        <h2>About Me</h2>
                        <p>Isaiah is an aspiring software engineer with strong interests in algorithms, data structures, machine learning, and GPU programming</p>
                        <a href="https://drive.google.com/file/d/1WB8BZVxB79HWEuT2PO4Io-R9I1jCI5WF/view?usp=sharing" rel="noreferrer" target="_blank"><button type="button" className="collapsible1">Resume</button></a>
                    </div>
                    <div id="skills">
                        <h2>Languages</h2>
                        <div className="flex-container" style={{display: 'flex', gap: 20}}>
                            <div className="skillsColumn">
                                <h3><span className="arrow">&#x21D2;</span> C++/C</h3>
                                <h3><span className="arrow">&#x21D2;</span> Python</h3>
                                <h3><span className="arrow">&#x21D2;</span> Javascript</h3>
                            </div>
                            <div className="skillsColumn">
                                <h3><span className="arrow">&#x21D2;</span> SQL (Postgresql)</h3>
                                <h3><span className="arrow">&#x21D2;</span> Cuda C/C++</h3>
                                <h3><span className="arrow">&#x21D2;</span> Java</h3>
                            </div>
                        </div>
                        <h2>Technologies/Frameworks</h2>
                        <h3><span className="arrow">&#x21D2;</span> Git</h3>
                        <h3><span className="arrow">&#x21D2;</span> GoogleTest</h3>
                        <h3><span className="arrow">&#x21D2;</span> Valgrind</h3>
                        <h3><span className="arrow">&#x21D2;</span> Node.JS</h3>
                        <h3><span className="arrow">&#x21D2;</span> React JS</h3>
                    </div>
                </div>
                <div className="info-column">
                    <div id="education">
                        <h2>Education</h2>
                            <div className="school">
                                <img src={ucrLogo} alt="UCR logo"/>
                                <div className="history">
                                    <div className="degree">
                                        <h3>Bachelors of Science in Computer Science</h3>
                                        <h3 style={{color: 'rgb(255,197,74)'}}>Sep. 2021 - Present</h3>
                                    </div>
                                    <h3 className="schoolName">University of CA, Riverside</h3>
                                    <button type="button" className="collapsible2" onClick={(event) => showContents(event)}>Details</button>
                                    <div className="relevantCourse">
                                        <h3 style={{color: "rgb(255,197,74)"}}>Relevant Courses</h3>
                                        <h4>&#x25B6; Machine Learning</h4>
                                        <h4>&#x25B6; Computer Security</h4>
                                        <h4>&#x25B6; Intermediate Data Structures and Algorithms</h4>
                                        <h4>&#x25B6; Software Construction</h4>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div id="bookshelf">
                        <h2>Currently Reading</h2>
                        <div className="flex-container" style={{display: 'flex', gap: 5}}>
                            <div className="bookColumn">
                                <div className="book">
                                    <img src={kaguraBachi} alt="Kagura Bachi Cover"/>
                                    <a href="https://myanimelist.net/manga/162479/Kagurabachi?q=kagura%20bachi&cat=manga" rel="noreferrer" target="_blank"><h3>Kagura Bachi</h3></a>
                                </div>
                                <div className="book">
                                    <img src={oshiNoKo} alt="Oshi no Ko Cover"/>
                                    <a href="https://myanimelist.net/anime/52034/Oshi_no_Ko?q=oshi%20no%20ko&cat=anime" rel="noreferrer" target="_blank"><h3>Oshi no Ko</h3></a>
                                </div>
                                <div className="book">
                                    <img src={blueLock} alt="Blue Lock Cover"/>
                                    <a href="https://myanimelist.net/manga/114745/Blue_Lock" rel="noreferrer" target="_blank"><h3>Blue Lock</h3></a>
                                </div>
                                <div className="book">
                                    <img src={grandBlue} alt="Grand Blue Cover"/>
                                    <a href="https://myanimelist.net/manga/70345/Grand_Blue" rel="noreferrer" target="_blank"><h3>Grand Blue</h3></a>
                                </div>
                            </div>
                            <div className="bookColumn">
                                <div className="book">
                                    <img src={tomodachiGame} alt="Chainsaw Man Cover"/>
                                    <a href="https://myanimelist.net/manga/62795/Tomodachi_Game?q=tomodachi%20game&cat=manga" rel="noreferrer" target="_blank"><h3>Tomodachi Game</h3></a>
                                </div>
                                <div className="book">
                                    <img src={chainsawMan} alt="Chainsaw Man Cover"/>
                                    <a href="https://myanimelist.net/manga/116778/Chainsaw_Man?q=chainsaw%20man&cat=manga" rel="noreferrer" target="_blank"><h3>Chainsaw Man</h3></a>
                                </div>
                                <div className="book">
                                    <img src={edensZero} alt="Edens Zero Cover"/>
                                    <a href="https://myanimelist.net/manga/114548/Edens_Zero?q=edens%20zer&cat=manga" rel="noreferrer" target="_blank"><h3>Edens Zero</h3></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 style={{color: 'rgb(135, 135, 135)', textAlign: 'center', fontSize: 60, margin: 0, padding: 0}}>&#x0FF5C;</h1>
        </div>
    );    
};

export default About;