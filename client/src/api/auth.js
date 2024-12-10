import axios from './axios';  


export const registerRequest = (user) => axios.post(`/registrarse`, user);  

export const loginRequest =  (user) =>  axios.post(`/login`, user);


export const verifyTokenRequest = () => axios.get('/verify');
