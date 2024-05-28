import terminalRPG from "./images/terminalRPG.png";
import aiseCompiler from "./images/aiseCompiler.png";
import miniGenome from "./images/miniGenome.png";
import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Gof from './components/GameOfLife/Gof.js';
import About from './components/About/About.js';
import Project from './components/Project/Project.js';
import Contact from './components/Contact/Contact.js';
import VerticalGridBackground from './components/GridBackground/VerticalGridBackground/VerticalGridBackground.js';


function App() {

  const [curPage, setCurPage] = useState(1);

  const sections = document.querySelectorAll('#home, #about, #projects, #experience, #contact');

  const config = {
    rootMargin: '-50px 0px -55%'
  };

  let observer = new IntersectionObserver(function (entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry['target'].nodeName === 'SECTION') {
        let nextSection = 0;

        if(entry['target'].id === 'home') nextSection = 1;
        else if(entry['target'].id === 'about') nextSection = 2;
        else if(entry['target'].id === 'projects') nextSection = 3;
        else if(entry['target'].id === 'experience') nextSection = 4;
        else if(entry['target'].id === 'contact') nextSection = 5;

        changePage(nextSection); 
      }
    });
  }, config);

  sections.forEach(section => {
    observer.observe(section);
  });

  const checkOpacity = (num) => {
    let dis = document.querySelector(".disappear" + parseInt(num));
    console.log(dis);
    if(dis !== null) dis.remove();
  }

  const changePage = (num) => {
    if (num !== curPage) {
        let colorChange = document.querySelector(".changeColor" + curPage);
        colorChange.style.color = "white";

        let prevElement = document.querySelector(".link" + curPage);
        if (prevElement !== null) prevElement.innerHTML = "";

        setCurPage(num);

        colorChange = document.querySelector(".changeColor" + num);
        colorChange.style.color = "rgb(255,197,74)";
        
        let curElement = document.querySelector(".link" + num);
        if (curElement !== null) curElement.innerHTML = "&#x21D2;";
    }
  };  

  return (
    <div className="App">
      <div className="disappear1" onClick={() => checkOpacity(1)} style={{position: 'absolute', left: 0, top: 0}}>
        <VerticalGridBackground state={0} r={0} g={23} b={54} direction={0} thres={0} className="inner"/> 
      </div>
      <header className="App-header">
        <Navbar setPage={changePage}/>
      </header>
      <section id="home">
        <Gof/>
        <Home/>
      </section>
      <div className="disappear2" onClick={() => checkOpacity(2)} style={{position: 'absolute'}}>
        <VerticalGridBackground state={0} r={242} g={242} b={242} direction={0} thres={0.8} className="inner"/> 
      </div>
      <section id="about">
        <About/>
      </section>
      <div className="separator" style={{backgroundColor: "rgb(242, 242, 242)"}}></div>
      <div className="disappear3" onClick={() => checkOpacity(3)} style={{position: 'absolute'}}>
        <VerticalGridBackground state={0} r={242} g={242} b={242} direction={0} thres={0.8} className="inner"/> 
      </div>
      <section id="projects">
        <div className="cardContentLogo">
          <h1>Projects</h1>
        </div>
        <div className="cardContent">
          <Project projectName="Mini-Genome Assembler" madeWith="Python, SeqIO, NetworkX" imageLink={miniGenome} date="April 2024" sourceCodeLink="https://github.com/isaiahpb19/Mini-Genome-Assembler" demo="" description=
          "This assembler reads a FASTA file that has some number of reads and reconstructs the reference genome from these reads based on overlaps. We define a best right-buddy where a read's suffix matches with at least 40 characters of a different read's prefix. Duplicate best right-buddies are prohibited and the best-buddy with the most matches stays. In order to avoid exponential computation, used a 40-mer dictionary to get possible candidates. After this we get the best left-buddies, construct the partial genome, then construct the reference genome"
          />
        </div>
        <div className="cardContent">
          <Project projectName="AISE Compiler" madeWith="C, Lex, Yacc" imageLink={aiseCompiler} date="September 2023 - December 2023" sourceCodeLink="https://github.com/CS152-Fall23/cs152-project-022-aise/tree/isaiahpb/phase3-assignment-array" demo="" description=
          "A compiler for a latex-inspired language my group and I created. This language has most programming features such as conditional statements, loop statements, assignments, arithmetic operators, variables, and functions. We used the Flex library for lexical and syntax analysis. Additionally, we then used the Bison library for semantic analysis and IR code generation. This code generation is three address code which is then executed by a separate interpreter."
          />
        </div>
          <div className="cardContent">
            <Project projectName="Terminal RPG" madeWith="C++, GoogleTest, Valgrind" imageLink={terminalRPG} date="April 2022 - June 2022" sourceCodeLink="https://github.com/cs100/final-project-isaiah-keita-chris-justin" demo="https://www.youtube.com/watch?v=PZdpNmJ_3VI" description=
            "A terminal choose-your-own-adventure role-playing game. This game presents the users with archetype selection where each archetype has its own unique skills, weapons, and stats. Like most RPGs, the player is tasked with exploring a dungeon where throughout it, the player will fight enemies, find treasure, and manage their items. Users can make choices that may lead them to different endings and bosses. As the game progresses, the enemies would become more difficult to defeat and a treasure drop's rarity would increase."
            />
        </div>
        <div className="cardContent"></div>
      </section>
      <div className="separator" style={{backgroundColor: "rgb(242, 242, 242)"}}>
        <h1 style={{color: 'rgb(0,23,54)', textAlign: 'center', fontSize: 60}}>&#x0FF5C;</h1>
      </div>
      <section id="experience" style={{backgroundColor: "rgb(0,23,54)"}}>
        <div className="cardContentLogo">
            <h1 style={{color: 'rgb(255,197,74)'}}>Experience (coming soon)</h1>
        </div>
      </section>
      <div className="separator" style={{backgroundColor: "rgb(0, 23, 54)"}}>
        <h1 style={{color: 'rgb(255,197,74)', textAlign: 'center', fontSize: 60}}>&#x0FF5C;</h1>
      </div>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}

export default App;
