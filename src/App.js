import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './style/App.css';
import Home from './pages/Home'; 
import NavBar from './components/NavBar'
import CreateRecipe from './pages/CreateRecipe'
import UpdateRecipe from './pages/UpdateRecipe'



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
            element={<CreateRecipe/>}>
          </Route>
          <Route
            path="/updateRecipe/:id"
            element={<UpdateRecipe/>}>
          </Route>
          </Routes>
        </Router>
    </div>
    
  );
}
export default App;
