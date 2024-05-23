import terminalRPG from "./images/terminalRPG.png";
import './App.css';
import { useState } from "react";
import { InView } from 'react-intersection-observer';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Gof from './components/GameOfLife/Gof.js';
import About from './components/About/About.js';
import Project from './components/Project/Project.js';
// import GridBackground from './components/GridBackground/VerticalGridBackground/VerticalGridBackground.js';

function App() {

  const [curPage, setCurPage] = useState(1);

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
      {/* <GridBackground r={216} g={216} b={216} state={1} id='loadPixel'/> */}
      <header className="App-header">
        <Navbar setPage={changePage}/>
      </header>
      <InView threshold={0.8}>
        <section id="home">
          <Gof/>
          <Home/>
        </section>
      </InView>
      <InView threshold={0.8}>
        <section id="about">
          <About/>
          {/* <GridBackground state={0} r={0} g={23} b={54}/> */}
        </section>
      </InView>
      <section id="projects">
        <div class="card--content"></div>
        <div class="card--content"></div>
        <div class="card--content"></div>
        <div class="card--content"></div>
        <div class="card--content"></div>
        <div class="card--content"></div>
        <div class="card--content"></div>
        <div class="card--content"></div>
        <div class="card--content"></div>
        <div class="card--content"></div>
      </section>
      <Project projectName="Terminal RPG" madeWith="C++, GoogleTest, Valgrind" imageLink={terminalRPG} date="April 2022 - June 2022" description=
        "A terminal choose-your-own-adventure role-playing game. This game presents the users with archetype selection where each archetype has its own unique skills, weapons, and stats. Like most RPGs, the player is tasked with exploring a dungeon where throughout it, the player will fight enemies, find treasure, and manage their items. Users can make choices that may lead them to different endings and bosses. As the game progresses, the enemies would become more difficult to defeat and a treasure drop's rarity would increase."
      />

    </div>
  );
}

export default App;
