import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Global.css'; 

const Form = () => {
  // --- NOUVEAU : Liste des pays avec drapeaux (emojis) et indicatifs ---
  const countries = [
    { name: 'Martinique', code: 'MQ', dialCode: '596', flag: '🇲🇶', maxLength: 9 },
    { name: 'Guadeloupe', code: 'GP', dialCode: '590', flag: '🇬🇵', maxLength: 9 },
    { name: 'Guyane', code: 'GF', dialCode: '594', flag: '🇬🇾', maxLength: 9 },
    { name: 'Réunion', code: 'RE', dialCode: '262', flag: '🇷🇪', maxLength: 9 },
    { name: 'Mayotte', code: 'YT', dialCode: '262', flag: '🇾🇹', maxLength: 9 },
    { name: 'France', code: 'FR', dialCode: '33', flag: '🇫🇷', maxLength: 9 },
  ];

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '', // Stocke uniquement le numéro local (ex: 696703922)
    reglement: false,
    optin2: false
  });

  // --- NOUVEAU : État pour le pays sélectionné (Martinique par défaut) ---
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // --- NOUVEAU : Gestion du changement de pays ---
  const handleCountryChange = (e) => {
    const country = countries.find(c => c.code === e.target.value);
    setSelectedCountry(country);
    setFormData({ ...formData, phone: '' }); // On vide le numéro quand on change de pays
  };

  // --- NOUVEAU : Gestion de la saisie du téléphone avec contrôle strict ---
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    
    // N'accepter que les chiffres
    const numericValue = value.replace(/[^0-9]/g, '');
    
    // Limiter la longueur à la longueur maximale du pays sélectionné
    if (numericValue.length <= selectedCountry.maxLength) {
      setFormData({ ...formData, phone: numericValue });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.firstname.trim()) newErrors.firstname = "Le prénom est requis";
    if (!formData.lastname.trim()) newErrors.lastname = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    
    // Validation du numéro de téléphone
    if (!formData.phone) {
      newErrors.phone = "Le téléphone est requis";
    } else if (formData.phone.length !== selectedCountry.maxLength) {
      newErrors.phone = `Le numéro doit contenir ${selectedCountry.maxLength} chiffres.`;
    }
    
    if (!formData.reglement) newErrors.reglement = "L'acceptation du règlement est requise";
    if (!formData.optin2) newErrors.optin2 = "L'acceptation des offres est requise";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // On assemble l'indicatif et le numéro pour l'envoi
      const phoneToSend = selectedCountry.dialCode + formData.phone;
      
      const submissionData = {
        ...formData,
        phone: phoneToSend // Le numéro final (ex: 596696703922)
      };
      
      console.log("--- SOUMISSION DU FORMULAIRE ---");
      console.log("Prénom:", submissionData.firstname);
      console.log("Nom:", submissionData.lastname);
      console.log("Email:", submissionData.email);
      console.log("Téléphone (envoyé, sans '+'):", submissionData.phone);
      console.log("Règlement accepté:", submissionData.reglement);
      console.log("Offres acceptées:", submissionData.optin2);
      console.log("-------------------------------");
      
      window.location.href = "/select-game";
    }
  };

  return (
    <div className="background-container">
      <div className="main_view"> 
        
        <div className="background-filter"></div>
        
        <div className="content-wrapper"> 
            <div className="form-section form-header">
              <div className="row justify-content-center"> 
                <div className="col-7 mg-top-30 text-center">
                  <img src="/images/jeuconcours.png" className="img-fluid" alt="Header" />
                </div>
              </div>
            </div>
            
            <div className="form-section form-content-body">
              <div className="row">
                <div className="col-11 mg-top-20 dotation-image-container">
                  <img src="/images/dotation.png" className="img-fluid dotation-img" alt="Texte formulaire" />
                </div>
              </div>
              
              <div className="row justify-content-center">
                <div className="col-11 form-fields-container" id="participe">
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="zone" value="fr" />
                    
                    <div className="row input-wrapper">
                        <div className="col-9 mx-auto">
                            <input type="text" className="form-control input-field" placeholder="Prénom" name="firstname" value={formData.firstname} onChange={handleChange} required />
                            {errors.firstname && <p className="text-danger">{errors.firstname}</p>}
                        </div>
                    </div>

                    <div className="row input-wrapper">
                        <div className="col-9 mx-auto">
                            <input type="text" className="form-control input-field" placeholder="Nom" name="lastname" value={formData.lastname} onChange={handleChange} required />
                            {errors.lastname && <p className="text-danger">{errors.lastname}</p>}
                        </div>
                    </div>

                    {/* --- NOUVEAU : Champ de téléphone personnalisé --- */}
                    <div className="row input-wrapper">
                        <div className="col-9 mx-auto">
                            <div className="custom-phone-input-container">
                                <select 
                                    value={selectedCountry.code} 
                                    onChange={handleCountryChange}
                                    className="custom-country-select"
                                >
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.flag} +{country.dialCode}
                                        </option>
                                    ))}
                                </select>
                                <input 
                                    type="tel" 
                                    inputMode="numeric"
                                    className="form-control input-field custom-phone-input"
                                    placeholder={`Numéro (${selectedCountry.maxLength} chiffres)`}
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handlePhoneChange} 
                                    required 
                                />
                            </div>
                            {errors.phone && <p className="text-danger text-center">{errors.phone}</p>}
                        </div>
                    </div>

                    <div className="row input-wrapper">
                        <div className="col-9 mx-auto">
                            <input type="email" className="form-control input-field" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                            {errors.email && <p className="text-danger">{errors.email}</p>}
                        </div>
                    </div>
                    
                    <div className="row checkbox-wrapper">
                        <div className="col-9 mx-auto">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefaultRole" name="reglement" checked={formData.reglement} onChange={handleChange} required />
                                <label className="form-check-label2" htmlFor="flexCheckDefaultRole">
                                    J'accepte le <a href="/pdf/Reglement_2025_CTIG_HelloGuadeloupe.pdf" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-underline">règlement du jeu</a> et je confirme avoir plus de 18ans
                                </label>
                                {errors.reglement && <p className="text-danger">{errors.reglement}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="row checkbox-wrapper">
                        <div className="col-9 mx-auto">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefaultOffers" name="optin2" checked={formData.optin2} onChange={handleChange} required />
                                <label className="form-check-label2" htmlFor="flexCheckDefaultOffers">
                                    J'accepte de recevoir les offres commerciales de la part de FRS Express des Îles
                                </label>
                                {errors.optin2 && <p className="text-danger">{errors.optin2}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="row p-2 justify-content-center">
                      <div className="col-6 col-sm-6 mg-top-5">
                        <input type="image" src="/images/btn_valid.png" id="btn_submit" className="img-fluid" alt="Submit" />
                      </div>
                    </div>
                  </form>
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

export default Form;