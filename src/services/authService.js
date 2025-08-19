import axios from 'axios';

const API_BASE ='http://localhost:3000/api/auth'

export const registerService = async ({ email, password, confirmPassword }) =>{
  console.log("request send to call signup function", email, password, confirmPassword);
  return await axios.post(`${API_BASE}/register`, { email, password, confirmPassword })
}
  // 

export const login = ({ email, password }) =>
  axios.post(`${API_BASE}/login`, { email, password })
