import { React } from "react";
import "./Navbar.css"

const Navbar = (props) => {
    return (
        <nav id="nav-bar">
                <a href="#home" onClick={() => props.setPage(1)}><span className="changeColor1" style={{color: 'rgb(255,197,74)'}}><span className="link1">&#x21D2;</span> Home</span></a>
                <a href="#about" onClick={() => props.setPage(2)}><span className="changeColor2"><span className="link2"></span> About</span></a>
                <a href="#projects" onClick={() => props.setPage(3)}><span className="changeColor3"><span className="link3"></span> Projects</span></a>
                <a href="#contact"><span className="link4"></span> Contact</a>
        </nav>
    );
};

export default Navbar;