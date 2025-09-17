import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { recipecontext } from '../context/RecipeContext';

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = data.find((recipe) => recipe.id === parseInt(id));

  if (recipe) {
    toast.success("Showing Recipe");
  }

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  const handleDelete = () => {
    //voh data set karo jiski idmatch nahi karnti hai 
    const updatedData = data.filter((r) => r.id !== parseInt(id));
    setdata(updatedData);
    toast.error("Recipe Deleted");
    navigate("/recepies");
  };

  const recipeIngredients = recipe.ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  const recipeInstructions = recipe.instructions.map((step, index) => (
    <li key={index}>{step}</li>
  ));

  return (
    <div className="flex flex-col gap-y-12 my-7">
      <h1 className="font-mono text-3xl">{recipe.title}</h1>
      <h2 className="text-blue-400 font-bold">BY: {recipe.chef}</h2>

      <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-white font-bold">{recipe.desc}</p>

          <div>
            <h3 className="font-semibold text-lg">Ingredients:</h3>
            <ul className="list-disc list-inside">{recipeIngredients}</ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Instructions:</h3>
            <ol className="list-decimal list-inside">{recipeInstructions}</ol>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-1/2">
          <img
            src={recipe.image}
            className="grayscale h-[350px] w-[400px] hover:grayscale-0 transition-all ease-in-out duration-300"
            alt={recipe.title}
          />
          <div className="flex flex-row gap-6">
            <button
              onClick={() => navigate('update')}
              className="w-1/2 bg-blue-500 py-2 rounded hover:shadow hover:shadow-white hover:bg-blue-400 hover:border-2 hover:border-blue-700 hover:font-bold hover:text-black transition-all duration-300 ease-in-out"
            >
              Update Recipe
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 w-1/2 py-2 rounded hover:shadow hover:shadow-white hover:bg-red-400 hover:border-2 hover:border-red-700 hover:font-bold hover:text-black transition-all duration-300 ease-in-out"
            >
              Delete Recipe
            </button>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default SingleRecipe;
