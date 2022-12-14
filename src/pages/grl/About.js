import React from'react';

import '../stylesheets/about.css';
import Navbar from '../../components/navbar/grl/Navbar';

function About() {
  return (
    <div>
      <div className="intro">
        <h1 id="about-intro">LL Regnskab ApS pillugu</h1>
      </div>
      <main className='main-about'>
        <div className="about">
          <h2 id="about-about">LL Regnskab ApS pillugu</h2>
          <p id="about-description">LL Regnskab ApS 1.juli 2017 aallartippoq, 
            sulisut sisamat ilinniartorlu Qaqortumi allaffeqarpugut.
          </p>
          <h3 id="jobs-h1">Uku suliarisarpagut</h3>
          <ul>
            <li id="job1">Naatsorsuutinik nalunaarsuineq</li>
            <li id="job2">Akissarsiat</li>
            <li id="job3">Naligiissaarineq</li>
            <li id="job4">Suliffeqarfinnut mikinernut peqatigiiffinnullu ukiumut naatsorsuutit</li>
            <li id="job5">Nammineerluni nalunaarsuinermi immersugassat immersorneri</li>
          </ul>
       </div>
        <div className="right-image"></div>
      </main>
    </div>
  );
}

export default About;