import React from'react';

import '../stylesheets/contact.css';

function Contact() {
  return (
    <div>
      <div className="intro-contact">
        <h1 id="contact-intro">Kontakt os</h1>
      </div>
      <main className='main-contact'>
        <div className="contact">

          <div className="card" id="officeQaqortoq">
            <div className="card-img"></div>
            <h3 id="contact-company" className="card-title">Qaqortoq</h3>
            <div className="card-body">
              <p className="phone">
                <a id="contact-telephone" className="telephone" href="tel:+299641603">Telefon: (+299)641603</a>
              </p>
              <p className="email">
                <a href="mailto:laila@llregnskab.com" id="contact-company-email">Email: laila@llregnskab.com</a>
              </p>
              <div className="location">
                <a id="contact-address" className="address" href='http://maps.google.com/?q=1004%20Sanatorievej' target='_blank' rel='noreferrer'>
                  Adresse: Sanatorievej B 1004 <br></br> 3920 Qaqortoq
                </a>
                <p className="cvr">CVR nr. 12924453</p>
              </div>
            </div>
          </div>
          
          <div className="card" id="laila">
            <div className="card-img"></div>
            <h3 className="card-title">Laila Lund</h3>
            <div className="card-body">
              <div className="card-text">
                <p className="mobile">
                  <a id="contact-mobile" href="tel:+299530703" className="mobile-number">Mobil: (+299)530703</a>
                </p>
                <p className="email">
                  <a id="contact-email" href='mailto:laila@llregnskab.com'>Email: laila@llregnskab.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="card" id="stine">
            <div className="card-img"></div>
            <h3 className="card-title">Stine Semsen</h3>
            <div className="card-body">
              <div className="card-text">
                <p className="email">
                  <a id="contact-email" href='mailto:stine@llregnskab.com'>Email: stine@llregnskab.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="card" id="pitti">
            <div className="card-img"></div>
            <h3 className="card-title">Pitti Semsen</h3>
            <div className="card-body">
              <div className="card-text">
                <p className="email">
                  <a id="contact-email" href='mailto:pitti@llregnskab.com'>Email: pitti@llregnskab.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="card" id="ian">
            <div className="card-img"></div>
            <h3 className="card-title">Ian Lund Stidsen</h3>
            <div className="card-body">
              <div className="card-text">
                <p className="email">
                  <a id="contact-email" href='mailto:ian@llregnskab.com'>Email: ian@llregnskab.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="card" id="eleonora">
            <div className="card-img"></div>
            <h3 className="card-title">Eleonora Hoffmeyer</h3>
            <div className="card-body">
              <div className="card-text">
                <p className="email">
                  <a id="contact-email" href='mailto:eleonora@llregnskab.com'>Email: eleonora@llregnskab.com</a>
                </p>
              </div>
            </div>
          </div>

      </div>
    </main>
    </div>
  );
}

export default Contact;