import React from 'react';
import Recipe from './Recipe'

function Recipes({recipes}) {
    return (
       <div className='recipes'>
        <h2>Recipes</h2>
        {recipes.map((recipe) =>
        <Recipe key={recipe.id} recipe = {recipe} />
      )}
      </div>
    );
}

export default Recipes;