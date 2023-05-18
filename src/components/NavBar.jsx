import React from 'react'
import {NavLink} from "react-router-dom";

import styled from 'styled-components';


const NavbarContainer = styled.nav`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: green;
  }

  &.active {
    background-color: green;
    padding: 0.5rem;
    color: white;
  }
  list-style-type: none;
`;

const NavBarUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin right: 1rem;
`;

const NavBarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export default function NavBar() {
  return (
    <header>
    <NavbarContainer>
    <NavBarUl className="fixed-navBar">
        <NavBarItem className="litem">
            <NavLinkStyled
                className={({isActive})=>(isActive ? "active" : "")}
                to="/"
            >
                Home
            </NavLinkStyled>
        </NavBarItem>
        <NavBarItem className="litem">
            <NavLinkStyled
                className={({isActive})=>(isActive ? "active" : "")}
                to="/createRecipe"
            >
                Create Recipe
            </NavLinkStyled>
        </NavBarItem>
       
    </NavBarUl>
</NavbarContainer>
</header>
  )
}