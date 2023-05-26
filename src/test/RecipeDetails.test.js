import React from "react";
import { render, screen, fireEvent,getByLabelText } from "@testing-library/react";
import RecipeDetails from "../components/RecipeDetails";
import "@testing-library/jest-dom/extend-expect";
import { createRecipe } from "../services/Recipes";
import userEvent from '@testing-library/user-event'

jest.mock("../services/Recipes");

describe("Recipe Form", () => {
  beforeEach(() => {
    createRecipe.mockClear();
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

  it("submits the form with valid data", async () => {
    render(<RecipeDetails />);
    const titleInput = screen.getByText("Title");
    const ingredientsInput = screen.getByText("Ingredients");
    const servingsInput = screen.getByText("Servings");
    const instructionsInput = screen.getByText("Instructions");
    const imageInput = screen.getByText("Images");
    const submitButton = screen.getByRole("button", { name: "Create" });

    userEvent.type(titleInput, 'Recipe Title');
    userEvent.type(ingredientsInput, 'Ingredient 1, Ingredient 2');
    userEvent.type(servingsInput, '4');
    userEvent.type(instructionsInput, 'Step 1, Step 2, Step 3');
    userEvent.type(imageInput, 'recipe1.jpg');
  

    userEvent.click(submitButton);

    expect(createRecipe({
        title: "Recipe Title",
        ingredients: "Ingredient 1, Ingredient 2",
        servings: "4",
        instructions: "Step 1, Step 2, Step 3",
        image: "recipe1.jpg",
      }));
  
  
  });
});
