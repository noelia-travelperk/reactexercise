import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia } from "@mui/material";
import "../style/Recipes.css"

function Veggie() {
   const [veggie,setVeggie] = useState([]);

   useEffect(()=>{
    getVeggie();
   },[])
    const getVeggie = async()=>{
          const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7&tags=vegetarian`
          );
          const data = await api.json();
          setVeggie(data.recipes)
          console.log(data)
          
        }
  return (
    <div>
    <h1>Veggie Recipes: </h1>
    <ul className="recipes">
      {veggie.map((recipe) => {
        console.log(recipe)
        return (
          <Card className="recipeItem" sx={{maxWidth:500, marginRight:15, marginBottom:5, boxShadow:1}}>
            <li key={recipe.id}>
              <CardMedia>
                <img src={recipe.image} alt={recipe.title}></img>
              </CardMedia>
              <CardContent sx={{padding:0, marginTop:2}}>
                <p>{recipe.title}</p>
              </CardContent>
            </li>
          </Card>
        );
      })}
    </ul>
  </div>
  )

  }
export default Veggie