import React from'react';

import '../stylesheets/about.css';

function About() {
  return (
    <div>
      <div className="intro-about">
        <h1 id="about-intro">Om LL Regnskab ApS</h1>
      </div>
      <main className='main-about'>
        <div className="about">
          <h2 id="about-about">Om</h2>
          <p id="about-description">
            LL Regnskab ApS er stiftet 1. juli 2017 og vi har kontorer i 
            Qaqortoq og Nuuk med fem ansatte.
          </p>
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