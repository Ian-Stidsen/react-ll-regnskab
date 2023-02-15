import React from'react';

import '../stylesheets/contact.css';

function Contact() {
  return (
    <div>
      <div className="intro">
    <h1 id="contact-intro">Contact us</h1>
  </div>
  <main className='main-contact'>
    <div className="contact">

        <div className="card" id="officeQaqortoq">
          <div className="card-img"></div>
          <h3 id="contact-company" className="card-title">Office</h3>
          <div className="card-body">

            <p className="phone">
              <a id="contact-telephone" className="telephone" href="tel:+299641603">
                Telephone: (+299)641603
              </a>
            </p>

            <p className="email">
              <a href="mailto:laila@llregnskab.com" id="contact-company-email">Email: laila@llregnskab.com</a>
            </p>

            <div className="location">
              <a id="contact-address" className="address" href='http://maps.google.com/?q=1004%20Sanatorievej' target='_blank' rel='noreferrer'>
                Address: Sanatorievej B 1004, 3920 Qaqortoq
              </a>
              <p className="cvr">CVR nr. 12924453</p>
            </div>
          </div>
        </div>

        <div className="card" id="officeNuuk">
            <div className="card-img"></div>
            <h3 id="contact-company" className="card-title">Nuuk</h3>
            <div className="card-body">
              <p className="email">
                <a href="mailto:niviaq@llregnskab.com" id="contact-company-email">Email: niviaq@llregnskab.com</a>
              </p>
              <div className="location">
                <a id="contact-address" className="address" href='https://www.google.com/maps/place/Tumi+Consulting+ApS/@64.1719139,-51.7370675,19z/data=!3m1!4b1!4m5!3m4!1s0x4ea20fee844f428d:0xfcb56976bf831965!8m2!3d64.1719139!4d-51.7365203' target='_blank' rel='noreferrer'>
                  Address: Jens Kreutzmannip Aqq. 4, 1.sal, 3900 Nuuk
                </a>
              </div>
            </div>
          </div>
        
        <div className="card" id="laila">

          <div className="card-img"></div>
          <h3 className="card-title">Laila Lund</h3>

          <div className="card-body">
            <div className="card-text">
              <p className="mobile">
                <a id="contact-mobile" href="tel:+299530703" className="mobile-number">Mobile: (+299)530703</a>
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

        <div className="card" id="niviaq">
          <div className="card-img"></div>
          <h3 className="card-title">Niviaq A. Petersen</h3>

          <div className="card-body">
            <div className="card-text">
              <p className="email">
                <a id="contact-email" href='mailto:niviaq@llregnskab.com'>Email: niviaq@llregnskab.com</a>
              </p>
            </div>
          </div>

        </div>

        <div className="card" id="sikkersoq">
          <div className="card-img"></div>
          <h3 className="card-title">Sikkersoq Berthelsen</h3>
          
          <div className="card-body">
            <div className="card-text">
              <p className="email">
                <a id="contact-email" href='mailto:sikkersoq@llregnskab.com'>Email: sikkersoq@llregnskab.com</a>
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