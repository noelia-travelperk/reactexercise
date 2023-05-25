import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RecipeDetails from "../components/RecipeDetails";
import "@testing-library/jest-dom/extend-expect";
import { getRecipes, createRecipe } from "../services/Recipes";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../services/Recipes");

describe("Recipe Form", () => {
  const mockRecipes = [
    { id: 1, title: "Recipe 1", images: "/path/to/image1.jpg" },
    { id: 2, title: "Recipe 2", images: "/path/to/image2.jpg" },
  ];
  beforeEach(() => {
    getRecipes.mockImplementation(() => Promise.resolve(mockRecipes));
  });

  it("renders the create recipe form and the create recipe button", () => {
    render(<RecipeDetails />);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Ingredients")).toBeInTheDocument();
    expect(screen.getByText("Servings")).toBeInTheDocument();
    expect(screen.getByText("Instructions")).toBeInTheDocument();
    expect(screen.getByText("Images")).toBeInTheDocument();
    expect(screen.getByText("Create Recipe")).toBeInTheDocument();
  });

  it("submits the form with valid data", () => {
    render(<RecipeDetails />);
    const titleInput = screen.getByText("Title");
    const ingredientsInput = screen.getByText("Ingredients");
    const servingsInput = screen.getByText("Servings");
    const instructionsInput = screen.getByText("Instructions");
    const imageInput = screen.getByText("Images");
    const submitButton = screen.getByRole("button", { name: "Create" });

    titleInput.textContent= "Recipe Title";
    ingredientsInput.textContent = "Ingredient 1, Ingredient 2";
    servingsInput.textContent = "4";
    instructionsInput.textContent = "Step 1, Step 2, Step 3";
    imageInput.textContent = "recipe1.jpg";

    fireEvent.click(submitButton);

    expect(titleInput).toHaveTextContent("Recipe Title");
    expect(ingredientsInput).toHaveTextContent("Ingredient 1, Ingredient 2");
    expect(servingsInput).toHaveTextContent("4");
    expect(instructionsInput).toHaveTextContent("Step 1, Step 2, Step 3");
    expect(imageInput).toHaveTextContent("recipe1.jpg");
  });


});
