import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createRecipe, updateRecipe, getRecipeById } from "../services/Recipes";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
`;

const Title = styled.h1`
  color: #3f51b5;
  font-size: 3rem;
  margin: 1rem;
  margin-bottom: 2rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Label = styled.label`
  margin-bottom: 0.5rem;
  color: black;
  font-size: 1.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const RecipeInstructions = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipes, setRecipes] = useState({
    title: "",
    ingredients: "",
    servings: "",
    images: "",
    instructions: "",
  });

  useEffect(() => {
    if (id) {
      fetchRecipe();
    }
  }, [id]);

  const fetchRecipe = async () => {
    try {
      const recipe = await getRecipeById(id);
      setRecipes(recipe);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipes((prevRecipes) => ({
      ...prevRecipes,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        await updateRecipe(id, recipes);
      } else {
        await createRecipe(recipes);
      }
      setRecipes({
        title: "",
        ingredients: "",
        servings: "",
        images: "",
        instructions: "",
      });
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <FormContainer>
      <Title>{id ? "Update Recipe" : "Create Recipe"}</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title:</Label>
          <Input name="title" value={recipes.title} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label name= 'ingredients'>Ingredients:</Label>
          <Input
            name="ingredients"
            value={recipes.ingredients}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label name= 'servings'>Servings:</Label>
          <Input
            name="servings"
            value={recipes.servings}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label text= 'images'>Images:</Label>
          <Input name="images" value={recipes.images} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label name= 'instructions'>Instructions:</Label>
          <RecipeInstructions
            name="instructions"
            value={recipes.instructions}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">{id ? "Update" : "Create"}</Button>
      </Form>
    </FormContainer>
  );
}
