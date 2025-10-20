// src/pages/Win.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getParticipant } from '../services/api';

const Win = () => {
  const { url } = useParams();
  const [participant, setParticipant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParticipant = async () => {
      try {
        const data = await getParticipant(url);
        setParticipant(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching participant:", error);
        setLoading(false);
      }
    };

    fetchParticipant();
  }, [url]);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="col-md-8 col-xl-5 col-12 main_view pd-bottom-120">
      <div className="row justify-content-center">
        <div className="col-8 mg-top-20 text-center">
          <img src="/images/ctig/hello/header.png" className="img-fluid" alt="Hello Guadeloupe" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-11 mg-top-20 text-center">
          <img src="/images/ctig/hello/txt_win.png" className="img-fluid" alt="Félicitations" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 mg-top-20 text-center">
          <p>Félicitations ! Vous avez correctement identifié toutes les îles de la Guadeloupe.</p>
          <p>Un email de confirmation a été envoyé à l'adresse que vous avez fournie.</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 mg-top-20 text-center">
          <a href={`/${participant?.zipcode === 'mtl' ? 'mtl' : 'fr'}`}>
            <img src="/images/ctig/hello/btn_home.png" className="img-fluid" alt="Accueil" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Win;