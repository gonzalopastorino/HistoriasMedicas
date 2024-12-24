import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/medico",
    withCredentials: true, // Esto asegura que las cookies se incluyan en cada solicitud
});

export default instance;
