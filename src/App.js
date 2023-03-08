import React from 'react';
import {Suspense} from 'react'
import Meal from "./Components/Meal";
import './App.css';
import {Routes,Route} from "react-router-dom"
import RecipeInfo from './Components/RecipeInfo';
function App() {
  
  return (
    <>
    <Suspense fallback = {null}>
    <Routes>
      <Route path='/' element ={<Meal/>}/>
      <Route path="/:MealId" element={<RecipeInfo/>}/>
    </Routes>
    </Suspense>
    

    </>
  )
  }
export default App;
