import axios from 'axios';  

const API = 'http://localhost:3000/medico'; // Cambia esto según la URL de tu servidor  

export const registerRequest = (user) => axios.post(`${API}/registrarse`, user);  

export const loginRequest = async (user) => {  
    try {  
        const response = await axios.post(`${API}/login`, user);  
        console.log('Respuesta del login:', response.data); // Log de la respuesta  
        return response.data; // Asegúrate de devolver solo los datos  
    } catch (error) {  
        console.error('Error en loginRequest:', error.response ? error.response.data : error.message); // Log de errores  
        throw error; // También lanza el error para que lo maneje el contexto de autenticación  
    }  
};