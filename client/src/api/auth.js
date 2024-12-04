import axios from 'axios'


const API = 'http://localhost:3000/medico';
 // Cambia esto según la URL de tu servidor

export const registerRequest = (user)=> axios.post(`${API}/registrarse`,user)


