import React from "react";
import "./Project.css"

const Project = ({projectName, madeWith, imageLink, date, description, sourceCodeLink, demo}) => {
    return (
        <div className="entry">
            <div className="words">
                <div className="name-date">
                    <h2>{projectName}</h2>
                    <h3>{date}</h3>
                </div>
                <h3><span style={{color: 'rgb(255,197,74)'}}>Made with:</span> {madeWith}</h3>
                <p>{description}</p>
                <div className="buttonContainer">
                    {   sourceCodeLink !== "" &&
                        <a href={sourceCodeLink} rel="noreferrer" target="_blank"><button type="button" className="demo">Source Code</button></a>
                    }
                    { demo !== "" &&
                        <a href={demo} rel="noreferrer" target="_blank"><button type="button" className="demo">Demo Video</button></a>
                    }
                </div>
            </div>
            <img src={imageLink} alt="Project screenshot"/>
        </div>
    );
}

export default Project;