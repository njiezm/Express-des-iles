import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Global.css';

const LoseGame = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');
  };

  const handleOffers = () => {
    window.open('https://www.frs-express-des-iles.com', '_blank');
  };

  return (
    <div className="background-container">
        <div className="main_view"> 
            
            <div className="background-filter"></div>
            
            <div className="content-wrapper"> 
                    <div className="form-section form-header">
                        <div className="row justify-content-center"> 
                            <div className="col-7 mg-top-30 text-center">
                                <img src="/images/TITLE _ Dommage.png" className="img-fluid" alt="Header" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-section form-content-body">
                        <div className="row">
                            <div className="col-11 mg-top-20 dotation-image-container">
                                <img src="/images/Text_page_perdu_roue.png" className="img-fluid dotation-img" alt="Texte formulaire" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-section page-footer-internal">
                            <img src="/images/footer.png" className="img-fluid internal-footer-img" alt="FRS Express Footer Image" />
                    </div>
                    
                </div> 
        </div>
    </div>
);
};
export default LoseGame;