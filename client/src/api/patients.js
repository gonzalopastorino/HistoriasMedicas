import axios from './axios';  

export const getPatients = () => axios.get(`/patients/list`);  
