import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RecipeDetails from "../components/RecipeDetails";
import "@testing-library/jest-dom/extend-expect";
import { createRecipe, getRecipes } from "../services/Recipes";
import userEvent from '@testing-library/user-event'

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

  it("submits the form with valid data", async () => {
    render(<RecipeDetails />);
    const titleInput = screen.getByText("Title");
    const ingredientsInput = screen.getByText("Ingredients");
    const servingsInput = screen.getByText("Servings");
    const instructionsInput = screen.getByText("Instructions");
    const imageInput = screen.getByText("Images");
    const submitButton = screen.getByRole("button", { name: "Create" });

    await userEvent.type(titleInput, "Title")

    expect(titleInput).toHaveTextContent("Title");
    expect(ingredientsInput).toHaveTextContent("Ingredients");
    expect(servingsInput).toHaveTextContent("Servings");
    expect(instructionsInput).toHaveTextContent("Instructions");
    expect(imageInput).toHaveTextContent("Images");
    
    fireEvent.click(submitButton);

    expect(createRecipe).toBeCalledWith({title: "", ingredients: "", servings: "", instructions: "", images: ""});
  });
});
