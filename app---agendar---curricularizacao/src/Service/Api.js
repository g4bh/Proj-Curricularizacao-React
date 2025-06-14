import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-agendar.onrender.com'
});


export default api;