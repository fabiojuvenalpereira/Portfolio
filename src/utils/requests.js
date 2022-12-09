import axios from 'axios';

const BASE_URL = 'http://localhost:3001' || process.env.REACT_URL;

export async function getProjects() {
  const response = await axios.get(`${BASE_URL}/projects`);
  return response.data;
}

// esqueleto da função
export async function addProjects(data) {
  console.log(data);
  // const response = await axios.post(`${BASE_URL}/projects`, data);
  // return response.status;
}
