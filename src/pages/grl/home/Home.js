import React from'react';

import './home.css';

function Home() {
  return (
    <div>
      <div className="intro">
        <h1 id="introh1">Tikilluarit</h1>
      <h2 id="intro-name">LL Regnskab ApS-imut</h2>
      </div>
      <main>
        <div className="description">
          <h2>LL regnskab ApS</h2>
          <p id="description">LL Regnskab ApS naatsorsuisarfitut suliffeqarfiuvoq. 
            LL Regnskab ApS Qaqortumi allaffeqarput taavalu 2017-mi aallartinneqarluni.
          </p>
        </div>
        <div className="bottom-image"></div>
      </main>
    </div>
  );
}

export default Home;