import axios from 'axios';

const API_BASE_URL = 'https://644bc20017e2663b9df78b10.mockapi.io/recipe/'; 

export const getRecipes = async () => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const getRecipeById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}${id}`);
    return response.data;
  };
  

export const createRecipe = async (recipes) => {
  const response = await axios.post(`${API_BASE_URL}`, recipes);
  return response.data;
};

export const updateRecipe = async (id,recipes) => {
  const response = await axios.put(`${API_BASE_URL}${id}`,recipes);
  return response.data;
};

export const deleteRecipe = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}${id}`);
  return response.data;
};
