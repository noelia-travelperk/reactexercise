import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './style/App.css';
import Home from './pages/Home'; 
import NavBar from './components/NavBar'
import RecipeDetail from './components/RecipeDetails'
import RecipePage from './pages/RecipePage';




function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route
            path="/"
            element={<Home/>}>
          </Route>
          <Route
            path="/createRecipe"
            element={<RecipeDetail/>}>
          </Route>
          <Route
            path="/updateRecipe/:id" 
            element={<RecipeDetail/>}>
          </Route>
          <Route  path="/recipes/show/:id" element={<RecipePage/>}>

          </Route>
          </Routes>
        </Router>
    </div>
    
  );
}
export default App;
