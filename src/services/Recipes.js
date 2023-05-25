
const API_BASE_URL = 'https://644bc20017e2663b9df78b10.mockapi.io/recipe/'; 

export const getRecipes = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  const data = await response.json();
  return data;
};

export const getRecipeById = async (id) => {
    const response = await fetch(`${API_BASE_URL}${id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    return data;
  };
  

export const createRecipe = async (recipes) => {
  const response = await fetch(`${API_BASE_URL}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipes)
  });
  const data = await response.json(recipes);
  return data;
};

export const updateRecipe = async (id,recipes) => {
  const response = await fetch(`${API_BASE_URL}${id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipes)
  }); //put
  const data = await response.json(recipes);
  return data;
};

export const deleteRecipe = async (id) => {
  const response = await fetch(`${API_BASE_URL}${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }); 
  const data = await response.json();
  return data;
};
