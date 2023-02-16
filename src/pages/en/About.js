import React from'react';

import '../stylesheets/about.css';

function About() {
  return (
    <div>
      <div className="intro-about">
        <h1 id="about-intro">About LL Regnskab ApS</h1>
      </div>
      <main className='main-about'>
        <div className="about">
          <h2 id="about-about">About</h2>
          <p id="about-description">
            LL Regnskab ApS was founded on July 1, 2017.
            And we have offices in Qaqortoq and Nuuk with four employees and one student.
          </p>
          <h3 id="jobs-h1">What we do</h3>
          <ul>
            <li id="job1">Bookkeeping of documents</li>
            <li id="job2">Salaries</li>
            <li id="job3">Reconciliation</li>
            <li id="job4">Financial accounting for smaller companies</li>
            <li id="job5">Tax declarations for indivituals or companies</li>
          </ul>
       </div>
        <div className="right-image"></div>
      </main>
    </div> 
  );
}

export default About;