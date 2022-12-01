import React from'react';

import Navbar from '../../components/navbar/dk/Navbar';
import '../stylesheets/about.css';

function About() {
  return (
    <div>
      <Navbar />
      <div className="intro">
        <h1 id="about-intro">Om LL Regnskab</h1>
      </div>
      <main className='main-about'>
        <div className="about">
          <h2 id="about-about">Om</h2>
          <p id="about-description">LL Regnskab ApS startede 1. juli 2017 og har kontor i 
            Qaqortoq med 3 ansatte og en elev.</p>
          <h3 id="jobs-h1">Hvad vi laver</h3>
          <ul>
            <li id="job1">Bogføring af bilag</li>
            <li id="job2">Lønninger</li>
            <li id="job3">Afstemning</li>
            <li id="job4">Regnskaber til mindre virksomheder og foreninger</li>
            <li id="job5">Selvangivelser for private og selskaber</li>
          </ul>
       </div>
        <div className="right-image"></div>
      </main>
    </div>
  );
}

export default About;