import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WinGame.css';

const WinGame = () => {
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
              <img src="/images/txt_win.png" className="img-fluid" alt="Félicitations" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-11 mg-top-20 text-center">
              <div className="win-message">
                <h2>Félicitations!</h2>
                <p>Tu viens de remporter un billet A/R pour Les Saintes</p>
                <p>Tu seras recontacté(e) par nos équipes pour obtenir les instructions de récupération de ton billet.</p>
                <p>FRS Express des îles te remercie de ta participation.</p>
                <p>À très vite!</p>
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

export default WinGame;