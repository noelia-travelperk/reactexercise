import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import "../style/Recipes.css"

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [id, setID] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  function getRecipes() {
    fetch(`https://644bc20017e2663b9df78b10.mockapi.io/recipe`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        setRecipes(result);
        console.log(result);
      });
  }

  function deleteRecipe(id) {
    console.log(id);
    const url = `https://644bc20017e2663b9df78b10.mockapi.io/recipe/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getRecipes();
      });
  }

  //For the Update//
  const setData = (recipe) => {
    let { title, ingredients, dishTypes,id } = recipe;
    setID(localStorage.getItem('id', id))
    localStorage.setItem('title', title);
    localStorage.setItem('ingredients', ingredients);
    localStorage.setItem('dishTypes', dishTypes)
    console.log(recipe);
 }

  return (
    <div>
      <h1>Our Recipes: </h1>
      <ul className="recipes">
        {recipes.map((recipe) => {
          return (
            <Card
              className="recipeItem"
              sx={{
                maxWidth: 500,
                marginRight: 15,
                marginBottom: 5,
                boxShadow: 1,
              }}
            >
              <li key={recipe.id}>
                <CardMedia>
                  <img src={recipe.images} alt={recipe.title}></img>
                </CardMedia>
                <CardContent sx={{ padding: 0, marginTop: 2 }}>
                  <p className="recipeTitle">{recipe.title}</p>
                </CardContent>
                <button
                  className="deleteButton"
                  onClick={() => deleteRecipe(recipe.id)}
                >
                  <span>Delete Recipe</span>
                </button>

                <Link to={"/updateRecipe/"+recipe.id}>
                    <button className="updateButton"  onClick={() => setData(recipe)}>Update</button>
                </Link>
              </li>
            </Card>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipes;
