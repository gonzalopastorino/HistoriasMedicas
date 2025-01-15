import axios from './axios';

// Obtener eventos del usuario autenticado
export const getEventsRequest = async () => {
  try {
    const response = await axios.get('/calendario');
    return response;
  } catch (error) {
    console.error("Error al obtener los eventos:", error.message);
    throw error;
  }
};

// Crear un evento
export const createEventRequest = async (eventData) => {
  try {
    const response = await axios.post('/calendario', eventData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el evento:", error.message);
    throw error;
  }
};
