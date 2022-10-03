import React from 'react'
import { GrAddCircle } from 'react-icons/gr'

function Recipe({recipe, add, getIndRecipe}){
  return(
    <div className='recipe' onClick={()=>getIndRecipe(recipe.id)}>
      <br />
  <img className="recipe-img" src={recipe.image} alt="this should be a delicious looking meal but it's not" />
  <GrAddCircle className='addLogo' onClick={()=>add(recipe.title)}/>
  <h4 className='recipe-title'>{recipe.title}</h4>
  </div>
  )
}

export default Recipe;