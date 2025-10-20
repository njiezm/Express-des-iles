// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkGameDates } from '../services/api';

const Home = ({ zone = "fr" }) => {
  const [gameStatus, setGameStatus] = useState('loading'); // loading, active, waiting, ended

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const status = await checkGameDates(zone);
        setGameStatus(status);
      } catch (error) {
        console.error("Error checking game status:", error);
        setGameStatus('active'); // Par défaut, on considère que le jeu est actif
      }
    };

    checkStatus();
  }, [zone]);

  if (gameStatus === 'loading') {
    return <div>Chargement...</div>;
  }

  if (gameStatus === 'waiting') {
    return <Wait />;
  }

  if (gameStatus === 'ended') {
    return <End />;
  }

  return (
    <div className="col-md-8 col-xl-5 col-12 main_view pd-bottom-120">
      <div className="row justify-content-center">
        <div className="col-sm-4 col-6 text-center">
          <Link to="/participer">
            <img src="/images/ctig/hello/btn_participe.png" className="img-fluid" alt="Participer" />
          </Link>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-9 mg-top-20 text-center">
          <img src="/images/ctig/hello/txt_form.png" className="img-fluid" alt="Formulaire" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10" id="participe">
          <Link to="/participer">
            <img src="/images/ctig/hello/btn_valid.png" className="img-fluid" alt="Valider" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;