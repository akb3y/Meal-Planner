import React from 'react';
import Recipe from './Recipe'

function Recipes({recipes, add}) {
    return (
       <div className='recipes'>
        {recipes.map((recipe) =>
      <Recipe key={recipe.id} recipe = {recipe} add={add}/>
      )}
      </div>
    );
}

export default Recipes;