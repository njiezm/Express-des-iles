// src/components/common/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-11 mg-top-20 text-center">
          <img src="/images/ctig/hello/footer2.png" className="img-fluid" alt="Footer" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 mg-top-20 text-center">
          <a href="/pdf/Politique_securite_confidentialite_HelloGuadeloupe.pdf" className="text-white" target="_blank" rel="noopener noreferrer">
            Politique de confidentialité
          </a>
        </div>
        <div className="col-12 mg-top-20 text-center">
          <a href="/pdf/Mentions legales2025_CTIG_HelloGuadeloupe.pdf" className="text-white" target="_blank" rel="noopener noreferrer">
            Mentions légales
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;