import React from 'react'
import Veggie from '../components/Veggie'
import AllRecipes from '../components/TopRecipes'
import Breakfast from '../components/Breakfast'

export default function Home() {
  return (
    <div>
        <AllRecipes/>
        <Veggie/>
        <Breakfast/>

    </div>
  )
}
