import React from 'react';
import {Suspense} from 'react'
import Meal from "./Components/Meal";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import RecipeInfo from './Components/RecipeInfo';
function App() {
  
  return (
    <>
      <BrowserRouter basename='/React-Project'>

    <Suspense fallback = {null}>
    <Routes>
      <Route exact path='/React-Project' element ={<Meal/>}/>
      <Route path="/:MealId" element={<RecipeInfo/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
    

    </>
  )
  }
export default App;
