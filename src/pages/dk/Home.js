import React from'react';

import '../stylesheets/home.css';

function Home() {
  return (
    <div>
      <div className="intro">
        <h1 id="introh1">Velkommen til</h1>
        <h2 id="intro-name">LL Regnskab ApS</h2>
      </div>
      <main className='main-home'>
        <div className="short-introduction text-center">
          <h2>LL Regnskab ApS</h2>
          <p>LL Regnskab ApS er en grønlandsk regnskab og bogholderi virksomhed. <br></br>
            LL Regnskab har et kontor i Qaqortoq. <br></br>
            LL Regnskab blev startet i 2017.
          </p>
        </div>
        <div className="bottom-image"></div>
      </main>
    </div>
  );
}

export default Home;