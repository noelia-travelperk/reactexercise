import Recipes from "../components/Recipes";
import { getRecipes, deleteRecipe } from "../services/Recipes";
import { render, screen, waitFor, prettyDOM, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../services/Recipes");
describe("<Recipes />", () => {
  const mockRecipes = [
    { id: 1, title: "Recipe 1", images: "/path/to/image1.jpg" },
    { id: 2, title: "Recipe 2", images: "/path/to/image2.jpg" },
  ];
  beforeEach(() => {
    getRecipes.mockImplementation(() => Promise.resolve(mockRecipes));
    deleteRecipe.mockImplementation((id) => Promise.resolve(id));
  });
  it("renders fetched recipes", async () => {
    const { container } = render(
      <Router>
        <Recipes />
      </Router>
    );
    expect(getRecipes).toBeCalled();

    await waitFor(() => {
      mockRecipes.forEach((recipe) => {
        expect(screen.getByText(recipe.title)).toBeInTheDocument();
        const { getAllByRole } = render(<Recipes elements={mockRecipes} />);
        const listItems = getAllByRole("listitem");
        expect(listItems.length).toBe(2);
      });
    });
  
  });
  it("renders Recipes component", () => {
    const { container } = render(<Recipes />);
    expect(screen.getByText("Our Recipes:")).toBeInTheDocument();
  });

  it("deletes a recipe when delete button is clicked", async () => {
    const { container } = render(
      <Router>
        <Recipes />
      </Router>
    );
    expect(getRecipes).toBeCalled();

    await waitFor(() => {
      mockRecipes.forEach((recipe) => {
        expect(screen.getByText(recipe.title)).toBeInTheDocument();
      });
    });

    const deleteButton = screen.getAllByText("Delete Recipe")[0];
    deleteButton.click();

    await waitFor(() => {
      expect(deleteRecipe).toBeCalled();
    });
 
    await waitFor(() => {
      expect(screen.queryByText(mockRecipes[0].title)).not.toBeInTheDocument();
    });
  });
  test("navigates to update page when update button is clicked", async () => {
    const { getByTestId, getByText } = render(
        <Router path="/updateRecipe/:id">
          <div data-testid="updatePage">Update recipe</div>
        </Router>
    
    );
    fireEvent.click(getByText("Update recipe"));

    await waitFor(() => {
      expect(getByTestId("updatePage")).toBeInTheDocument();
    });
  });
});
