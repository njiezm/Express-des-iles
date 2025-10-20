import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// --- MODIFICATION : Import du CSS global ---
import './Global.css';

const Spins = () => {
  const { destination } = useParams();
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setShowResult(false);
    
    // Simuler un tour de roue avec un résultat aléatoire
    const randomRotation = Math.floor(Math.random() * 360) + 720; // Au moins 2 tours complets
    setRotation(rotation + randomRotation);
    
    // Simuler le résultat après l'animation
    setTimeout(() => {
      setIsSpinning(false);
      // Simuler une victoire (50% de chance)
      const win = Math.random() > 0.5;
      setHasWon(win);
      setShowResult(true);
    }, 3000);
  };

  const handleContinue = () => {
    if (hasWon) {
      navigate(`/win-game/${destination}`);
    } else {
      navigate('/lose-spin');
    }
  };

  return (
    <div className="background-container">
      {/* --- MODIFICATION : Ajout de la classe pour le padding spécifique --- */}
      <div className="main_view spins-page"> 
        
        <div className="background-filter"></div>
        
        <div className="content-wrapper"> 
            {/* --- MODIFICATION : Structure du header --- */}
            <div className="form-section spins-header">
              <div className="row justify-content-center"> 
                <div className="col-8 mg-top-20 text-center">
                  <img src="/images/TITLE _ félicitation.png" className="img-fluid" alt="Header" />
                </div>
              </div>
            </div>
            
            {/* --- MODIFICATION : Structure du contenu principal --- */}
            <div className="form-section spins-content-body">
              
              <div className="row justify-content-center">
                <div className="col-10 mg-top-20 text-center">
                  <img src="/images/Text Gagné Mécanique S et MG.png" className="img-fluid" alt="Félicitations" />
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-10 mg-top-40">
                  <div className="wheel-container">
                    <div 
                      className="wheel" 
                      style={{transform: `rotate(${rotation}deg)`}}
                    >
                      <img src="/images/ROUE_ExpressDesIles.svg" className="img-fluid" alt="Roue de la chance" />
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-6 col-sm-6 mg-top-40 text-center">
                  <button 
                    type="button" 
                    className={`btn ${isSpinning ? 'disabled' : ''}`}
                    onClick={handleSpin}
                    disabled={isSpinning}
                  >
                    <img src="/images/Btn_tourner.png" className="img-fluid" alt="Tourner" />
                  </button>
                </div>
              </div>

              {showResult && (
                <div className="row justify-content-center">
                  <div className="col-10 mg-top-40 text-center">
                    <div className={`result-message ${hasWon ? 'win' : 'lose'}`}>
                      {hasWon ? (
                        <div>
                          <h3>Félicitations!</h3>
                          <p>Tu viens de remporter un billet A/R pour {destination === 'saintes' ? 'Les Saintes' : 'Marie-Galante'}</p>
                        </div>
                      ) : (
                        <div>
                          <h3>Dommage...</h3>
                          <p>Ce ne sera pas pour cette fois, mais tout n'est pas perdu!</p>
                        </div>
                      )}
                    </div>
                    
                    <button 
                      type="button" 
                      className="btn btn-primary mg-top-20"
                      onClick={handleContinue}
                    >
                      Continuer
                    </button>
                  </div>
                </div>
              )}

            </div>
            
            {/* --- MODIFICATION : Utilisation du footer global --- */}
            <div className="form-section page-footer-internal">
                <img src="/images/footer.png" className="img-fluid internal-footer-img" alt="FRS Express Footer Image" />
            </div>
            
          </div> 
      </div>
    </div>
  );
};

export default Spins;