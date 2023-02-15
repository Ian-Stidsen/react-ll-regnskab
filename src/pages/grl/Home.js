import React from'react';

import '../stylesheets/home.css';

function Home() {
  return (
    <div>
      <div className="intro">
        <h1 id="introh1">LL Regnskab ApS-imut</h1>
      <h2 id="intro-name">Tikilluarit</h2>
      </div>
      <main className='main-home text-center'>
        <div className="short-introduction">
          <h2>LL regnskab ApS</h2>
          <p>LL Regnskab ApS naatsorsuuserivittut suliffeqarfiuvoq. 
            LL Regnskab ApS Qaqortumi tungaveqarpoq, Nuummilu allafeqarluni. 
            Suliffeqarfik 2017-mi aallartinneqarpoq.
          </p>
        </div>
        <div className="bottom-image"></div>
      </main>
    </div>
  );
}

export default Home;