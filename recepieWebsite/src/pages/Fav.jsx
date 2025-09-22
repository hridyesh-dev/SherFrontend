import React, { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const favourite = JSON.parse( localStorage.getItem("fav") || [] );

  {/* THIS IS MY RECIPE CARD COMPONENT */}
  const renderRecipes = favourite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return(
    
    <div className="flex flex-wrap mt-11 w-full mx-auto ">
      {favourite.length>0?renderRecipes:<small className=' mx-auto hover:underline hover:transition-all hover:ease-in-out hover:duration-300 text-6xl text-red-500 font-bold'>No Favourite recipes Found !</small>}
    </div>

  )  
};

export default Recipes;
