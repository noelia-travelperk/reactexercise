import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import RecipeDetail from "./components/RecipeDetails";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createRecipe" element={<RecipeDetail />}></Route>
          <Route path="/updateRecipe/:id" element={<RecipeDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
