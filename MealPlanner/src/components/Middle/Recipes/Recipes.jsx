import React from 'react';
import Recipe from './Recipe'

function Recipes({recipes, add, getIndRecipe}) {
    return (
       <div className='recipes'>
        {recipes.map((recipe) =>
      <Recipe key={recipe.id} recipe = {recipe} add={add} getIndRecipe={getIndRecipe}/>
      )}
      </div>
    );
}

export default Recipes;