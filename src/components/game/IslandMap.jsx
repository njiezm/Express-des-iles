// src/components/game/IslandMap.jsx
import React, { useState } from 'react';

const IslandMap = ({ islands, onChange }) => {
  const [showModal, setShowModal] = useState(null);
  const [selectedIslands, setSelectedIslands] = useState([]);

  const islandOptions = [
    { value: "GRANDE-TERRE", label: "Grande-Terre" },
    { value: "BASSE-TERRE", label: "Basse-Terre" },
    { value: "LA DESIRADE", label: "La désirade" },
    { value: "TERRE-DE-HAUT", label: "Terre de Haut" },
    { value: "TERRE-DE-BAS", label: "Terre de Bas" },
    { value: "MARIE-GALANTE", label: "Marie-Galante" }
  ];

  const openModal = (ileNumber) => {
    setShowModal(ileNumber);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  const selectIsland = (ileNumber, value) => {
    onChange(ileNumber, value);
    
    // Mettre à jour la liste des îles sélectionnées
    const newSelectedIslands = [...selectedIslands];
    const index = newSelectedIslands.findIndex(island => island.ileNumber === ileNumber);
    
    if (index > -1) {
      newSelectedIslands[index] = { ileNumber, value };
    } else {
      newSelectedIslands.push({ ileNumber, value });
    }
    
    setSelectedIslands(newSelectedIslands);
    closeModal();
  };

  const resetSelection = () => {
    for (let i = 1; i <= 6; i++) {
      onChange(i, '');
    }
    setSelectedIslands([]);
    closeModal();
  };

  const isIslandSelected = (value) => {
    return selectedIslands.some(island => island.value === value);
  };

  return (
    <>
      <div className="island-map">
        {/* Carte des îles - à adapter selon votre design */}
        <div className="map-container">
          <div className="island-spot" onClick={() => openModal(1)}>
            {islands.ile1 || <span>Île 1</span>}
          </div>
          <div className="island-spot" onClick={() => openModal(2)}>
            {islands.ile2 || <span>Île 2</span>}
          </div>
          <div className="island-spot" onClick={() => openModal(3)}>
            {islands.ile3 || <span>Île 3</span>}
          </div>
          <div className="island-spot" onClick={() => openModal(4)}>
            {islands.ile4 || <span>Île 4</span>}
          </div>
          <div className="island-spot" onClick={() => openModal(5)}>
            {islands.ile5 || <span>Île 5</span>}
          </div>
          <div className="island-spot" onClick={() => openModal(6)}>
            {islands.ile6 || <span>Île 6</span>}
          </div>
        </div>
      </div>

      {/* Modals pour chaque île */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Nom des îles</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <div className="text-center">Cliquez sur le nom que vous désirez placer</div>
                
                <div className="row justify-content-center">
                  {islandOptions.map((option, index) => (
                    <div 
                      key={index} 
                      className={`col-6 text-center mg-top-20 ${isIslandSelected(option.value) ? 'd-none' : ''}`}
                    >
                      <button 
                        type="button" 
                        className="btn btn_Name" 
                        onClick={() => selectIsland(showModal, option.value)}
                      >
                        {option.label}
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="row justify-content-center">
                  <div className="col-6 text-center mg-top-20">
                    <button type="button" className="btn btn_Name btn_reset" onClick={resetSelection}>
                      Annuler les sélections
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IslandMap;