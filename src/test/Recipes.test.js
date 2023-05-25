import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Recipes from "../components/Recipes";
import { Button } from "@mui/material";


global.fetch = jest.fn(() =>
  Promise.resolve({
    getRecipes: () => Promise.resolve({ value: [{id: "1" , title: "test",  image: "image"}] }),
  })
);


describe("Recipes", () => {
  
  
  test("renders Recipes component", () => {
    const {container} = render(<Recipes />);
    console.log(container.innerHTML);
    });
    render(<Recipes />);
    expect(screen.getByText("Our Recipes:")).toBeInTheDocument();
  });

  test("renders Recipes and fetch data", async () => {
    await render(<Recipes />);
    const recipeList = await screen.findByText("test");
    expect(recipeList).toBeInTheDocument();
  });

  test("renders button with correct label", () => {
    const label = "Delete";
    render(<Button>{label}</Button>);
  });
  test("renders button with correct label", () => {
    const label = "Update";
    render(<Button>{label}</Button>);
  });

