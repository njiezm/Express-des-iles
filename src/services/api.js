// src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Vérifier les dates du jeu
export const checkGameDates = async (zone) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/game/dates`, { params: { zone } });
    return response.data.status; // 'active', 'waiting', 'ended'
  } catch (error) {
    throw new Error('Impossible de vérifier les dates du jeu');
  }
};

// Soumettre le formulaire d'inscription
export const submitForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/game/participate`, formData);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la soumission du formulaire');
  }
};

// Vérifier si un participant peut jouer
export const checkParticipant = async (url) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/game/check-participant`, { params: { url } });
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la vérification du participant');
  }
};

// Soumettre les résultats du jeu
export const submitGame = async (gameData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/game/submit`, gameData);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la soumission des résultats');
  }
};

// Obtenir les informations d'un participant
export const getParticipant = async (url) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/game/participant`, { params: { url } });
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des informations du participant');
  }
};