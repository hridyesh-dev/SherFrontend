import React, { useContext,useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { recipecontext } from '../context/RecipeContext';
import { useEffect } from 'react';

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const navigate = useNavigate();

  const recipe = data.find((recipe) => recipe.id === params.id);

  if (!recipe) {
    return <div className="text-center text-red-500 font-bold mt-10">Recipe not found.</div>;
  }

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      desc: recipe?.desc,
      image: recipe?.image,
      ingr: recipe?.ingr,
      inst: recipe?.inst,
      categories: recipe?.categories
    }
  });

  toast.success("Showing Recipe");

  const onUpdate = (updatedRecipe) => {
    const index = data.findIndex((r) => r.id === params.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedRecipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated Successfully");
    reset();
  };

  const handleDelete = () => {
    const filterData = data.filter((r) => r.id !== params.id);
    setdata(filterData);
    localStorage.setItem("recipes", JSON.stringify(filterData));
    toast.error("Recipe Deleted");
    navigate("/recepies");
  };

  //react ko nahi pata  iss mai change ho raha hai 
  // so we will make our own variable/state jiski help se react ko pata chalega ki bhai changes ho rahe hai 

  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav"))||[]
  )
  


  const favHandler=()=>{
    
    const copyfav=[...favourite]
    copyfav.push(recipe)
    setfavourite(copyfav)

    localStorage.setItem("fav",JSON.stringify(copyfav))
    toast.success("Added to Favourites")

  }
  
  const unfavHandler=()=>{

    const filterFav=favourite.filter((f)=>f.id!=recipe?.id)
    setfavourite(filterFav)
  
    localStorage.setItem("fav",JSON.stringify(filterFav))
    toast.error("removed from favourites")
    
  }

  // jab jab favourite mai changes aaye then it should re render 
  useEffect(()=>{

    console.log("singleRecipe.jsx mounted");
    
    return()=>{
      console.log("singleRecipe.jsx Unmounted");
    }

  },[favourite])

  const recipeIngredients = recipe.ingr?.split(',').map((item, index) => (
    <li key={index}>{item.trim()}</li>
  ));

  const recipeInstructions = recipe.inst?.split('.').map((step, index) => (
    <li key={index}>{step.trim()}</li>
  ));

  return (
    <div className='flex flex-col h-screen gap-10'>
      <div className=" relative px-6 pt-10 flex flex-col gap-y-12 my-7">
        
        {/* Agar favourite mai mill raha hai recipe then filled jeart */}
        {favourite.find(f=>f.id==recipe?.id)?(
          <i 
            onClick={unfavHandler} className="ri-heart-fill text-3xl absolute text-red-500 right-[45%]  top-[5%] "
          ></i>):(
          
          <i 
            onClick={favHandler} className="ri-heart-line text-3xl absolute text-red-500 right-[45%]  top-[5%] "
          ></i>)
        }

        <h1 className="font-mono text-3xl">{recipe.title}</h1>
        <h2 className="text-blue-400 font-bold">BY: {recipe.chef}</h2>

        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-semibold text-lg">Description:</h3>
              <p className="text-white font-bold">{recipe.desc}</p>
            </div>

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
              className="rounded grayscale h-[350px] w-[400px] hover:grayscale-0 transition-all ease-in-out duration-300"
              alt={recipe.title}
            />
            
            <div className=' flex flex-row gap-4'>
              <button
                onClick={handleDelete}
                className="bg-red-500 w-full py-2 rounded hover:shadow font-bold hover:shadow-white hover:bg-red-400 hover:border-2 hover:border-red-700 hover:font-bold hover:text-black transition-all duration-300 ease-in-out"
              >
                Delete Recipe
              </button>
            </div>
          
          </div>
        </div>
      </div>

      {/* Update Form */}
      <form
        onSubmit={handleSubmit(onUpdate)}
        className="pb-10 pt-5 gap-y-3 w-[70%] mx-auto flex flex-col justify-center my-20 text-white"
      >
        <h1 className="font-mono text-3xl text-green-400">Update Recipe Form</h1>

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
            className="focus:bg-black focus:text-green-400 bg-white outline-2 outline-green-300 text-black font-mono p-1 rounded focus:outline-green-500 focus:outline-4 focus:transition-all focus:duration-200 focus:ease-in-out"
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
          className="w-1/2 bg-blue-500 py-2 rounded hover:shadow hover:shadow-white hover:bg-blue-400 hover:border-2 hover:border-blue-700 hover:font-bold hover:text-black transition-all duration-300 ease-in-out"
        >
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default SingleRecipe;