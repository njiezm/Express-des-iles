import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoseSpin.css';

const LoseSpin = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');
  };

  const handleOffers = () => {
    window.open('https://www.frs-express-des-iles.com', '_blank');
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
              <img src="/images/txt_lose_spin.png" className="img-fluid" alt="Dommage" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-11 mg-top-20 text-center">
              <div className="lose-message">
                <h2>Dommage...</h2>
                <p>Ce ne sera pas pour cette fois, mais tout n'est pas perdu!</p>
                <p>Découvre dès maintenant nos offres en cliquant ici, pour profiter d'une nouvelle traversée avec FRS Express des îles.</p>
                <p>À bientôt!</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 mg-top-20 text-center">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleOffers}
              >
                Découvrir nos offres
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 mg-top-20 text-center">
              <button 
                type="button" 
                className="btn btn-secondary"
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

export default LoseSpin;