import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/CreateRecipe.css";

const CreateRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    dishTypes: "",
    images: "",
  });

  const [data, setData] = useState([]);
  const { title, ingredients, dishTypes, images } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && ingredients && dishTypes && images) {
      axios
        .post("https://644bc20017e2663b9df78b10.mockapi.io/recipe", formData)
        .then((res) => {
          setData([...data, res.data]);
          setFormData({
            title: "",
            ingredients: "",
            dishTypes: "",
            images: "",
          });
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    axios
      .get("https://644bc20017e2663b9df78b10.mockapi.io/recipe")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
        <h3> Create here your recipe</h3>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="ingredients">Ingredients</label>
              <input
                className="form-group"
                id="ingredients"
                placeholder="Enter ingredients"
                name="ingredients"
                value={ingredients}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="dishTypes">Dish Type</label>
              <input
                type="text"
                className="form-control"
                id="dishTypes"
                placeholder="Enter dishTypes ie. Vegetarian, Lunch, Breakfast"
                name="dishTypes"
                value={dishTypes}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="recipeImages">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="images"
                placeholder="Enter image URL"
                name="images"
                value={images}
                onChange={handleChange}
              />
            </div>
            <button className="createRecipeButtn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
  );
};

export default CreateRecipe;
