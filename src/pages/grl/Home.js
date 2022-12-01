import React from'react';

import '../stylesheets/home.css';
import Navbar from '../../components/navbar/grl/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="intro">
        <h1 id="introh1">Tikilluarit</h1>
      <h2 id="intro-name">LL Regnskab ApS-imut</h2>
      </div>
      <main className='main-home text-center'>
        <div className="short-introduction">
          <h2>LL regnskab ApS</h2>
          <p>LL Regnskab ApS naatsorsuisarfitut suliffeqarfiuvoq. 
            LL Regnskab ApS Qaqortumi allaffeqarpoq taavalu 2017-mi aallartinneqarluni.
          </p>
        </div>
        <div className="bottom-image"></div>
      </main>
    </div>
  );
}

export default Home;