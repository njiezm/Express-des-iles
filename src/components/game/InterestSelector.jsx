// src/components/game/InterestSelector.jsx
import React from 'react';

const InterestSelector = ({ interests, onChange, error }) => {
  const interestOptions = [
    "Chaussures et sac à dos",
    "Masque et Tuba",
    "Culture & Patrimoine",
    "Tourment d'amour et Bokit",
    "Ti Punch & Planteur",
    "Sable blanc & Cocotiers",
    "Business is Business"
  ];

  return (
    <>
      <div className="row p-2 champ_form mg-top-40" style={{ cursor: 'pointer' }}>
        <div className="col mg-top-5">
          <label className="label-select label_form2">Quels sont vos centres d'intérêt ?</label>
        </div>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-10 mg-top-40">
          {interestOptions.map((option, index) => (
            <div className="mg-top-10" key={index}>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  name="interet" 
                  value={option} 
                  id={`interest-${index}`}
                  checked={interests.includes(option)}
                  onChange={onChange}
                />
                <label className="form-check-label" htmlFor={`interest-${index}`}>
                  {option}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InterestSelector;