import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OneParticipation.css';

const OneParticipation = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-xl-5 col-12 main_view pd-bottom-120">
          <div className="row justify-content-center">
            <div className="col-8 mg-top-20 text-center">
              <img src="/images/header.png" className="img-fluid" alt="Header" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-11 mg-top-20 text-center">
              <img src="/images/txt_one_participation.png" className="img-fluid" alt="Désolé" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-11 mg-top-20 text-center">
              <div className="message">
                <h2>Désolé</h2>
                <p>Le grand jeu concours de FRS Express des Îles est limité à une participation par personne.</p>
                <p>Merci pour ta participation et reste connecté(e)!</p>
                <p>À bientôt!</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 mg-top-40 text-center">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleContinue}
              >
                Retour à l'accueil
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-10 mg-top-40 text-center">
              <img src="/images/footer.png" className="img-fluid" alt="Footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneParticipation;