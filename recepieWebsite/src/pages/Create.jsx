import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { recipecontext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
const Create = () => {

  const {data,setdata} = useContext(recipecontext)
  console.log(data);

  const navigate=useNavigate()
  
  const { register, handleSubmit ,reset } = useForm();

  const onSubmit = (recipe) => {

    recipe.id = nanoid();
    const copydata=[...data]
    console.log(recipe);
    copydata.push(recipe)
    setdata(copydata)

    //locla storage mai hamesha string save hota hai
    localStorage.setItem("recipes", JSON.stringify(copydata) );
    


    toast.success("New Recipe Added")
    navigate("/recepies")
    reset();

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="gap-y-3 w-[70%] mx-auto flex flex-col justify-center my-20 text-white"
    >
    
      <h1 className="font-mono text-3xl text-green-400">Create New Recipe</h1>

      <div className="flex gap-y-1 flex-col">
    
        <h3>Recipe Image:</h3>
        <input
          {...register('image')}
          placeholder="Enter Image Url"
          type="url"
          className="w-[400px] bg-white py-10 outline-2 outline-green-300 text-black font-mono p-1 rounded focus:outline-green-500 focus:outline-2 focus:transition-all focus:duration-200 focus:ease-in-out"
        />
        <small className="text-red-400">Choose Only Image*</small>
      
      </div>

      <div className="flex gap-y-1 flex-col">
      
        <h3>Chef Name:</h3>
        <input
          {...register('chef')}
          type="text"
          placeholder="Chef Name"
          className="outline-2 outline-green-300 bg-white text-black font-mono p-1 rounded focus:outline-green-500 focus:outline-4 focus:transition-all focus:duration-250 focus:ease-in-out"
        />
      
      </div>

      <div className="flex gap-y-1 flex-col">
      
        <h3>Recipe Name:</h3>
        <input
          {...register('title')}
          type="text"
          placeholder="Recipe Title"
          className="outline-2 outline-green-300 bg-white text-black font-mono p-1 rounded focus:outline-green-500 focus:outline-4 focus:transition-all focus:duration-250 focus:ease-in-out"
        />
      
      </div>

      <div className="flex gap-y-1 flex-col">
      
        <h3>Recipe Description:</h3>
        <textarea
          {...register('desc')}
          placeholder="Recipe Description"
          className="bg-white outline-2 outline-green-300 text-black font-mono p-1 rounded py-6 focus:outline-green-500 focus:outline-4 focus:transition-all focus:duration-250 focus:ease-in-out"
        />
      
      </div>

      <div className="flex gap-y-1 flex-col">
      
        <h3>Recipe Ingredients:</h3>
        <textarea
          {...register('ingr')}
          placeholder="Recipe Ingredients separated by comma"
          className="bg-white outline-2 outline-green-300 text-black font-mono p-1 rounded py-6 focus:outline-green-500 focus:outline-4 focus:transition-all focus:duration-200 focus:ease-in-out"
        />
      
      </div>

      <div className="flex gap-y-1 flex-col">
      
        <h3>Recipe Category:</h3>
        <select
          {...register('categories')}
          className=" focus:bg-black focus:text-green-400 bg-white outline-2 outline-green-300 text-black font-mono p-1 rounded focus:outline-green-500 focus:outline-4 focus:transition-all focus:duration-200 focus:ease-in-out"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>
      
      </div>

      <div className="flex gap-y-1 flex-col">
      
        <h3>Recipe Instructions:</h3>
        <textarea
          {...register('inst')}
          placeholder="Cooking Instructions ..."
          className="bg-white outline-2 outline-green-300 text-black font-mono p-1 rounded py-6 focus:outline-green-500 focus:outline-4 focus:transition-all focus:duration-200 focus:ease-in-out"
        />
        <small className="text-red-400">This is how error is shown *</small>
      
      </div>

      <button
        type="submit"
        className="justify-start border-2 border-green-400 py-2 w-[20%] font-white hover:bg-green-500 hover:rounded hover:font-bold hover:text-black transition-all duration-300 ease-in-out hover:border-green-300 hover:shadow hover:shadow-white"
      >
        Save Recipe
      </button>
    
    </form>
  );
};

export default Create;
