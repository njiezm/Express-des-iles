// src/pages/End.jsx
import React from 'react';

const End = () => {
  return (
    <div className="col-md-8 col-xl-5 col-12 main_view pd-bottom-120">
      <div className="row justify-content-center">
        <div className="col-8 mg-top-20 text-center">
          <img src="/images/ctig/hello/header.png" className="img-fluid" alt="Hello Guadeloupe" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-11 mg-top-20 text-center">
          <img src="/images/ctig/hello/txt_end.png" className="img-fluid" alt="Terminé" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 mg-top-20 text-center">
          <p>Le jeu est maintenant terminé. Merci pour votre participation !</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 mg-top-20 text-center">
          <a href="/fr">
            <img src="/images/ctig/hello/btn_home.png" className="img-fluid" alt="Accueil" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default End;