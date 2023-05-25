import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { getRecipes, deleteRecipe } from "../services/Recipes";
import styled from "styled-components";

const PageTitle = styled.h1`
  text-align: center;
  color: #3f51b5;
  font-size: 3rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;
const RecipeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const RecipeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const Button = styled.button`
  display: inline-block;
  color: purple;
  border: 2px solid purple;
  border-radius: 3px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
`;

const UpdateButton = styled.button`
  display: inline-block;
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  display: inline-block;
  color: Red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Red;
  border-radius: 3px;
  cursor: pointer;
`;

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const data = await getRecipes();
      setRecipes(data);
    } catch (error) {}
  };

  const handleDeleteRecipe = async (id) => {
    try {
      await deleteRecipe(id);
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== id)
      );
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <div>
      <PageTitle>Our Recipes: </PageTitle>
      <RecipeList data-testid="recipeList">
        {recipes.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              sx={{
                width: 600,
                margin: 0,
                justifyItems: "center",
                marginRight: 15,
                marginBottom: 5,
                marginTop: 10,
                padding: 3,
                listStyle: "none",
                justifyContent: "center",
                "&:hover": { boxShadow: "5px 5px 10px #6a6969" },
              }}
            >
              <RecipeItem data-testid="recipeItem" key={recipe.id}>
                <CardMedia>
                  <img id="image" src={recipe.images} alt={recipe.title}></img>
                </CardMedia>
                <CardContent
                  sx={{
                    padding: 0,
                    marginTop: 2,
                    textAlign: "center",
                    fontSize: 30,
                  }}
                >
                  <p id="title">{recipe.title}</p>
                </CardContent>
                <DeleteButton
                  className="deleteButton"
                  onClick={() => handleDeleteRecipe(recipe.id)}
                >
                  <span>Delete Recipe</span>
                </DeleteButton>

                <Link to={"/updateRecipe/" + recipe.id}>
                  <UpdateButton>Update recipe</UpdateButton>
                </Link>
              </RecipeItem>
            </Card>
          );
        })}
      </RecipeList>
    </div>
  );
}

export default Recipes;
