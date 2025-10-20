// src/pages/Lose.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Lose = () => {
  const { url } = useParams();
  const [participant, setParticipant] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div className="col-md-8 col-xl-5 col-12 main_view pd-bottom-120">
      <div className="row justify-content-center">
        <div className="col-8 mg-top-20 text-center">
          <img src="/images/ctig/hello/header.png" className="img-fluid" alt="Hello Guadeloupe" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-11 mg-top-20 text-center">
          <img src="/images/ctig/hello/txt_lose.png" className="img-fluid" alt="Dommage" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 mg-top-20 text-center">
          <p>Dommage ! Vous n'avez pas correctement identifié toutes les îles de la Guadeloupe.</p>
          <p>N'hésitez pas à retenter votre chance une prochaine fois !</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 mg-top-20 text-center">
          <a href={`/${participant?.zipcode === 'mtl' ? 'mtl' : 'fr'}`}>
            <img src="/images/ctig/hello/btn_home.png" className="img-fluid" alt="Accueil" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lose;