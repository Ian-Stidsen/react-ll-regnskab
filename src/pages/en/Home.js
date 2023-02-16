import React from'react';

import '../stylesheets/home.css';

function Home() {
  return (
    <div>
      <div className="intro-home">
        <h1>Welcome to</h1>
      <h2 id="intro-name">LL Regnskab ApS</h2>
      </div>
      <main className='main-home text-center'>
        <div className="short-introduction">
          <h2>LL Regnskab ApS</h2>
          <p>
            LL Regnskab ApS is a Greenlandic accounting and bookkeeping company.
            LL Regnskab ApS is based in Qaqortoq and has an office in Nuuk. The company was founded in 2017.
          </p>
        </div>
        <div className="bottom-image"></div>
      </main>
    </div>
  );
}

export default Home;