import React from'react';

import './home.css';

function Home() {
  return (
    <div>
      <div className="intro">
        <h1 id="introh1">Welcome to</h1>
      <h2 id="intro-name">LL Regnskab ApS</h2>
      </div>
      <main>
        <div className="description">
          <h2>LL Regnskab ApS</h2>
          <p id="description">LL Regnskab ApS is a Greenlandic accounting and bookkeeping company. 
          LL Regnskab ApS is based in Qaqortoq and it started in 2017.
          </p>
        </div>
        <div className="bottom-image"></div>
      </main>
    </div>
  );
}

export default Home;