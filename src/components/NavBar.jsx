import React from 'react'
import {NavLink} from "react-router-dom";
import '../style/NavBar.css'

export default function NavBar() {
  return (
    <header>
    <nav>
    <ul className="fixed-navBar">
        <li className="litem">
            <NavLink
                className={({isActive})=>(isActive ? "active" : "")}
                to="/"
            >
                Home
            </NavLink>
        </li>
        <li className="litem">
            <NavLink
                className={({isActive})=>(isActive ? "active" : "")}
                to="/createRecipe"
            >
                Create Recipe
            </NavLink>
        </li>
       
    </ul>
</nav>
</header>
  )
}