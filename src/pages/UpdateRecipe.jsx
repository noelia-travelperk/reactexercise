import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import "../style/UpdateRecipe.css"

const UpdateRecipe = () => {
    const [recipeTitle, setrecipeTitle] = useState('');
    const [ingredients, setingredients] = useState([]);
    const [dishTypes, setdishTypes] = useState("");
    const [images, setimages] = useState("");

    const {id} = useParams();
    console.log(id)

useEffect(() => {
    setrecipeTitle(localStorage.getItem('title'));
    setingredients(localStorage.getItem('ingredients'));
    setdishTypes(localStorage.getItem('dishTypes'))
},[]);



const updateAPIData = async(e) => {
    e.preventDefault();
const recipe = {title:recipeTitle, ingredients,dishTypes, images}
console.log(recipe)
    await axios.put(`https://644bc20017e2663b9df78b10.mockapi.io/recipe/${id}`, {
        title: recipeTitle,
        ingredients,
        dishTypes,
        images
	})
}

    return (
        <div>
            <h3> Update the recipe </h3>
            <form className="form">
                
                    <label>Title:</label>
                    <input placeholder='title' value={recipeTitle} onChange={(e) => setrecipeTitle(e.target.value)}/>
       
                    <label>Ingredients:</label>
                    <input placeholder='ingredients' value={ingredients} onChange={(e) => setingredients(e.target.value)}/>

                    <label>Dish Type:</label>
                    <input placeholder='dishTypes' value={dishTypes} onChange={(e) => setdishTypes(e.target.value)}/>

                    <label htmlFor="recipeImages">Image URL:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="images"
                                placeholder="Enter image URL"
                                name="images"
                                value={images}
                                onChange={(e) => setimages(e.target.value)}
                            />
                <button className="updateRecipeButtn" onClick={(e) => updateAPIData(e)} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UpdateRecipe;