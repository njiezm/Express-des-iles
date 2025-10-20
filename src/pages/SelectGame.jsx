import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Global.css';

const SelectGame = () => {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState('');

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
    // Simuler la création d'un URL unique pour le participant
    const participantUrl = `123_${Math.random().toString(36).substring(2, 15)}`;
    navigate(`/game/${participantUrl}?destination=${destination}`);
  };

  return (
    <div className="background-container">
      <div className="main_view"> 
        
        {/* Filtre appliqué par-dessus le fond du main_view */}
        <div className="background-filter"></div>
        
        <div className="content-wrapper"> 
            {/* 1. HEADER DE LA PAGE DE SÉLECTION */}
            <div className="form-section form-header">
              <div className="row justify-content-center"> 
                <div className="col-8 mg-top-20 text-center">
                  <img src="/images/TITLE _ Sélection de la localité.png" className="img-fluid" alt="Header" />
                </div>
              </div>
            </div>
            
            {/* 2. CONTENU PRINCIPAL : TEXTE ET CARTES DE DESTINATION */}
            <div className="form-section form-content-body">
              
              <div className="row justify-content-center">
                <div className="col-11 mg-top-20 text-center">
                  <img src="/images/Text _ selection.png" className="img-fluid" alt="Texte sélection" />
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-10 mg-top-40">
                  <div className="destination-card" onClick={() => handleSelectDestination('saintes')}>
                    <img src="/images/Btn_Selection_S.png" className="img-fluid" alt="Les Saintes" />
          
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-10 mg-top-20">
                  <div className="destination-card" onClick={() => handleSelectDestination('marie-galante')}>
                    <img src="/images/Btn_Selection_MG.png" className="img-fluid" alt="Marie-Galante" />
           
                  </div>
                </div>

                <div className="row p-2 justify-content-center">
                      <div className="col-6 col-sm-6 mg-top-5">
                        <input type="image" src="/images/btn_valid.png" id="btn_submit" className="img-fluid" alt="Submit" />
                      </div>
                    </div>
              </div>

            </div>
            
            {/* 3. PIED DE PAGE DE LA PAGE DE SÉLECTION */}
            <div className="form-section select-footer-internal">
                <img src="/images/footer.png" className="img-fluid internal-footer-img" alt="FRS Express Footer Image" />
            </div>
            
          </div> {/* fin .main_view */}
      </div>
    </div>
  );
};

export default SelectGame;