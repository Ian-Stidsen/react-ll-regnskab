import React from'react';

import './home.css';

function Home() {
  return (
    <div>
      <div className="intro">
        <h1 id="introh1">Velkommen til</h1>
      <h2 id="intro-name">LL Regnskab ApS</h2>
      </div>
      <main>
        <div className="description">
          <h2>LL Regnskab ApS</h2>
          <p id="description">LL Regnskab er en grønlandsk regnskab og bogholderi virksomhed.
            LL Regnskab har en kontor i Qaqortoq.
            LL Regnskab blev etableret i 2017.
          </p>
        </div>
        <div className="bottom-image"></div>
      </main>
    </div>
  );
}

export default Home;