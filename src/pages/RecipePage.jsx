import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../services/RecipesService';
import styled from "styled-components";


const Title = styled.h1`
color: #3f51b5;
font-size: 3rem;
margin: 1rem;
margin-bottom: 2rem;
`;

const RecipeItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
width: 50%;
`;

const Label = styled.label`
margin-bottom: 1rem;
margin-top: 1rem;
color: #3f51b5;
font-size: 1.5rem;



`;

const RecipeText = styled.text`
margin-bottom: 1rem;
margin-top: 1rem;
color: black;
font-size: 1.5rem;
`;

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const fetchedRecipe = await getRecipeById(id);
      setRecipe(fetchedRecipe);
      console.log(fetchedRecipe);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  if (!recipe) {
    return <div>Loading recipe...</div>;
  }

  return (
    <RecipeItems>
      <Title>{recipe.title}</Title>
      
      <img src={recipe.images} alt={recipe.title}></img>
      <Label>Ingredients: </Label>
      <RecipeText >{recipe.ingredients}</RecipeText>
      <Label>Servings: </Label>
      <RecipeText >{recipe.servings}</RecipeText>
    <Label>Instructions: </Label>
    <RecipeText >{recipe.instructions}</RecipeText>
    </RecipeItems>
 
  );
}

export default RecipePage;