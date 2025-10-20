import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Global.css';

const Termine = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');
  };

  return (

    <div className="background-container">
        <div className="main_view"> 
            
            <div className="background-filter"></div>
            
            <div className="content-wrapper"> 
                    <div className="form-section form-header">
                        <div className="row justify-content-center"> 
                        </div>
                    </div>
                    
                    <div className="form-section form-content-body">
                        <div className="row">
                                <img src="/images/text_ending_game.png" className="img-fluid dotation-img" alt="Texte formulaire" />
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
export default Termine;