import React from'react';

import Navbar from '../../components/navbar/dk/Navbar';
import '../stylesheets/home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="intro">
        <h1 id="introh1">Velkommen til</h1>
        <h2 id="intro-name">LL Regnskab ApS</h2>
      </div>
      <main className='main-home'>
        <div className="short-introduction text-center">
          <h2>LL Regnskab ApS</h2>
          <p>LL Regnskab ApS er en grønlandsk regnskab og bogholderi virksomhed.
            LL Regnskab har en kontor i Qaqortoq.
            LL Regnskab blev startet i 2017.
          </p>
        </div>
        <div className="bottom-image"></div>
      </main>
    </div>
  );
}

export default Home;