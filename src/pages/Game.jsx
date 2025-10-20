import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Global.css';

// NOUVEAU : Coordonnées calculées mathématiquement depuis les viewBox des SVGs
// pour un ajustement parfait des images.
const locationImageCoordinates = {
  saintes: { // viewBox="0 0 988 370"
    location1: { top: '10%', left: '0%', width: '36.31%', height: '19.41%' }, // Bas-gauche
    location2: { top: '0%', left: '20.04%', width: '36.31%', height: '19.41%' }, // Haut-centre
    location3: { top: '41.62%', left: '18.22%', width: '36.31%', height: '19.41%' }, // Milieu
    location4: { top: '5.41%', left: '63.68%', width: '36.31%', height: '19.41%' }  // Haut-droite
  },
  'marie-galante': { // viewBox="0 0 642 747"
    location1: { top: '90.36%', left: '1.71%', width: '55.88%', height: '9.62%' },  // Bas-gauche
    location2: { top: '16.73%', left: '0%', width: '55.88%', height: '9.62%' },   // Haut-gauche
    location3: { top: '73.63%', left: '28.04%', width: '55.88%', height: '9.62%' },  // Milieu-droite
    location4: { top: '0%', left: '44.08%', width: '55.88%', height: '9.62%' }     // Haut-droite
  }
};

// Styles pour les cadres de chaque destination (inchangés)
const frameStyles = {
  saintes: {
    width: '80%',
    maxWidth: '600px',
    height: '330px'
  },
  'marie-galante': {
    width: '55%',
    maxWidth: '500px',
    height: '380px'
  }
};

// Objet pour mapper les noms des lieux à leurs IDs d'IMAGE PLEINE PAGE
const locationImageIds = {
  'Terre de bas': 'terre_de_bas_full',
  'Plage de pain de sucre': 'plage_pain_de_sucre_full',
  'Îlet Cabrit': 'ilet_cabrit_full',
  'Fort Napoléon': 'fort_napoleon_full',
  'Distillerie bielle': 'distillerie_bielle_full',
  'Anse Canot': 'anse_canot_full',
  'Grand Gueule Gouffre': 'grand_gueule_gouffre_full',
  'Château murat': 'chateau_murat_full'
};

const Game = () => {
  const { url } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState('saintes');
  const [selectedLocations, setSelectedLocations] = useState({});
  const [availableLocations, setAvailableLocations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const dest = urlParams.get('destination') || 'saintes';
    
    setDestination(dest);
    
    if (dest === 'saintes') {
      setAvailableLocations([
        'Terre de bas',
        'Plage de pain de sucre',
        'Îlet Cabrit',
        'Fort Napoléon'
      ]);
    } else if (dest === 'marie-galante') {
      setAvailableLocations([
        'Distillerie bielle',
        'Anse Canot',
        'Grand Gueule Gouffre',
        'Château murat'
      ]);
    }
    
    setIsLoading(false);
  }, []);

  const handleLocationClick = (locationId) => {
    if (selectedLocations[locationId]) {
        return;
    }
    setCurrentLocation(locationId);
    setShowModal(true);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocations(prev => ({
      ...prev,
      [currentLocation]: location
    }));
    
    setAvailableLocations(prev => prev.filter(loc => loc !== location));
    setShowModal(false);
  };
  
  // ... (handleReset, validateForm, handleSubmit sont inchangés)
  const handleReset = () => {
    setSelectedLocations({});
    if (destination === 'saintes') {
      setAvailableLocations(['Terre de bas', 'Plage de pain de sucre', 'Îlet Cabrit', 'Fort Napoléon']);
    } else if (destination === 'marie-galante') {
      setAvailableLocations(['Distillerie bielle', 'Anse Canot', 'Grand Gueule Gouffre', 'Château murat']);
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (Object.keys(selectedLocations).length < 4) {
      newErrors.locations = "Veuillez identifier les 4 lieux emblématiques";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate(`/spins/${destination}`);
    }
  };

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  const currentImageCoords = locationImageCoordinates[destination];

  return (
    <div className="background-container">
      <div 
        className="main_view game-page" 
        style={{ backgroundImage: `url('/images/bg_${destination}.jpg')` }}
      > 
        <div className="background-filter"></div>
        <div className="content-wrapper"> 
            <div className="form-section game-header">
              <div className="row justify-content-center"> 
                <div className="col-8 mg-top-20 text-center">
                  <img src={`/images/TITLE _ Mécanique_${destination}.png`} className="img-fluid" alt="Header" />
                </div>
              </div>
            </div>
            
            <div className="form-section game-content-body">
              <div className="row justify-content-center">
                <div className="col-11 mg-top-20 text-center">
                  <img src={`/images/txt_meca_${destination}.png`} className="img-fluid" alt="Texte jeu" />
                </div>
              </div>

              {/* DÉBUT : Conteneur de carte pour Les Saintes */}
              {destination === 'saintes' && (
                <div className="map-container">
                  <div 
                    className="map-frame-container saintes-frame"
                    style={frameStyles.saintes}
                  >
                    {/* SVG INTÉGRÉ DIRECTEMENT */}
                    <svg width="100%" height="100%" viewBox="0 0 988 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="map-svg">
                      <path d="M334.424 298H24.3393C10.8971 298 0 308.849 0 322.233V345.599C0 358.983 10.8971 369.832 24.3393 369.832H334.424C347.866 369.832 358.763 358.983 358.763 345.599V322.233C358.763 308.849 347.866 298 334.424 298Z" fill="white" className="map-path" onClick={() => handleLocationClick('location1')}/>
                      <path d="M222.339 0H532.424C545.857 0 556.763 10.8581 556.763 24.2329V47.5992C556.763 60.974 545.857 71.8321 532.424 71.8321H222.339C208.906 71.8321 198 60.974 198 47.5992V24.2329C198 10.8581 208.906 0 222.339 0Z" fill="white" className="map-path" onClick={() => handleLocationClick('location2')}/>
                      <path d="M204.339 154H514.424C527.857 154 538.763 164.858 538.763 178.233V201.599C538.763 214.974 527.857 225.832 514.424 225.832H204.339C190.906 225.832 180 214.974 180 201.599V178.233C180 164.858 190.906 154 204.339 154Z" fill="white" className="map-path" onClick={() => handleLocationClick('location3')}/>
                      <path d="M653.577 20H963.661C977.094 20 988 30.8581 988 44.2329V67.5992C988 80.974 977.094 91.8321 963.661 91.8321H653.577C640.143 91.8321 629.237 80.974 629.237 67.5992V44.2329C629.237 30.8581 640.143 20 653.577 20Z" fill="white" className="map-path" onClick={() => handleLocationClick('location4')}/>
                    </svg>

                    {/* Conteneur pour les images des lieux sélectionnés */}
                    <div className="selected-images-container">
                      {Object.keys(selectedLocations).map(locationId => (
                        <img 
                          key={locationId}
                          src={`/images/locations/${locationImageIds[selectedLocations[locationId]]}.png`}
                          alt={selectedLocations[locationId]}
                          className="selected-location-full-image"
                          style={currentImageCoords[locationId]}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* FIN : Conteneur de carte pour Les Saintes */}


              {/* DÉBUT : Conteneur de carte pour Marie-Galante */}
              {destination === 'marie-galante' && (
                <div className="map-container">
                  <div 
                    className="map-frame-container marie-galante-frame"
                    style={frameStyles['marie-galante']}
                  >
                    {/* SVG INTÉGRÉ DIRECTEMENT */}
                    <svg width="100%" height="100%" viewBox="0 0 642 747" fill="none" xmlns="http://www.w3.org/2000/svg" className="map-svg">
                      <path d="M345.424 675H35.3393C21.8971 675 11 685.849 11 699.233V722.599C11 735.983 21.8971 746.832 35.3393 746.832H345.424C358.866 746.832 369.763 735.983 369.763 722.599V699.233C369.763 685.849 358.866 675 345.424 675Z" fill="white" className="map-path" onClick={() => handleLocationClick('location1')}/>
                      <path d="M24.3393 125H334.424C347.857 125 358.763 135.858 358.763 149.233V172.599C358.763 185.974 347.857 196.832 334.424 196.832H24.3393C10.9058 196.832 0 185.974 0 172.599V149.233C0 135.858 10.9058 125 24.3393 125Z" fill="white" className="map-path" onClick={() => handleLocationClick('location2')}/>
                      <path d="M204.339 550H514.424C527.857 550 538.763 560.858 538.763 574.233V597.599C538.763 610.974 527.857 621.832 514.424 621.832H204.339C190.906 621.832 180 610.974 180 597.599V574.233C180 560.858 190.906 550 204.339 550Z" fill="white" className="map-path" onClick={() => handleLocationClick('location3')}/>
                      <path d="M307.339 0H617.424C630.857 0 641.763 10.8581 641.763 24.2329V47.5992C641.763 60.974 630.857 71.8321 617.424 71.8321H307.339C293.906 71.8321 283 60.974 283 47.5992V24.2329C283 10.8581 293.906 0 307.339 0Z" fill="white" className="map-path" onClick={() => handleLocationClick('location4')}/>
                    </svg>

                    {/* Conteneur pour les images des lieux sélectionnés */}
                    <div className="selected-images-container">
                      {Object.keys(selectedLocations).map(locationId => (
                        <img 
                          key={locationId}
                          src={`/images/locations/${locationImageIds[selectedLocations[locationId]]}.png`}
                          alt={selectedLocations[locationId]}
                          className="selected-location-full-image"
                          style={currentImageCoords[locationId]}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* FIN : Conteneur de carte pour Marie-Galante */}


              <form onSubmit={handleSubmit}>
                <input type="hidden" name="location1" value={selectedLocations['location1'] || ''} />
                <input type="hidden" name="location2" value={selectedLocations['location2'] || ''} />
                <input type="hidden" name="location3" value={selectedLocations['location3'] || ''} />
                <input type="hidden" name="location4" value={selectedLocations['location4'] || ''} />
                
                 <div className="row p-2 justify-content-center">
                      <div className="col-6 col-sm-6 mg-top-5">
                        <input 
                          type="image" 
                          src={Object.keys(selectedLocations).length === 4 ? "/images/btn_valid.png" : "/images/btn_valid_disable.png"} 
                          id="btn_submit" 
                          className="img-fluid" 
                          alt="Valider" 
                          disabled={Object.keys(selectedLocations).length !== 4}
                        />
                      </div>
                    </div>
              </form>

              {errors.locations && (
                <div className="row justify-content-center">
                  <div className="col-10 mg-top-20">
                    <div className="alert alert-danger" role="alert">
                      {errors.locations}
                    </div>
                  </div>
                </div>
              )}

            </div>
            
            <div className="form-section page-footer-internal">
                <img src="/images/footer.png" className="img-fluid internal-footer-img" alt="FRS Express Footer Image" />
            </div>
        </div> 
      </div>

      {showModal && (
        <div className="modal show" style={{display: 'block'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sélectionnez un lieu</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="text-center">Quel lieu souhaitez-vous placer ici ?</div>
                
                <div className="row justify-content-center">
                  {availableLocations.map((location, index) => (
                    <div key={index} className="col-12 text-center mg-top-10">
                      <button 
                        type="button" 
                        className="btn btn-outline-primary w-100"
                        onClick={() => handleSelectLocation(location)}
                      >
                        {location}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;