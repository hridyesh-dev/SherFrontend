import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { recipecontext } from '../context/RecipeContext';
import { toast } from 'react-toastify';

const UpdateRecipe = () => {
    const { data, setdata } = useContext(recipecontext);
    const { id } = useParams();
    const navigate = useNavigate();

    const recipe = data.find((r) => r.id === parseInt(id));

    const { register, handleSubmit, reset } = useForm({
        defaultValues: recipe
        ? {
            image: recipe.image,
            chef: recipe.chef,
            title: recipe.title,
            desc: recipe.desc,
            ingr: recipe.ingredients.join(', '),
            inst: recipe.instructions.join(', '),
            categories: recipe.category.toLowerCase(),
            }
        : {},
    });

    const onSubmit = (updatedRecipe) => {
        
        const newRecipe = {
            ...recipe,
            ...updatedRecipe,
            ingredients: updatedRecipe.ingr.split(',').map((i) => i.trim()),
            instructions: updatedRecipe.inst.split(',').map((i) => i.trim()),
            category: updatedRecipe.categories,
        };

        const updatedData = data.map((r) =>
            r.id === parseInt(id) ? newRecipe : r
        );

        setdata(updatedData);

        toast.success("Recipe Updated Successfully");
        
        navigate(`/recepies/details/${id}`);
    
        reset();
    
    };

    if (!recipe) return <div>Recipe not found for update.</div>;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-y-3 w-[70%] mx-auto flex flex-col justify-center my-20 text-white"
        >
        <h1 className="font-mono text-3xl text-green-400">Update Recipe</h1>

        <input {...register('image')} type="url" placeholder="Image URL" className="bg-white text-black p-2 rounded" />
        
        <input {...register('chef')} type="text" placeholder="Chef Name" className="bg-white text-black p-2 rounded" />
        
        <input {...register('title')} type="text" placeholder="Recipe Title" className="bg-white text-black p-2 rounded" />
        
        <textarea {...register('desc')} placeholder="Description" className="bg-white text-black p-2 rounded" />
        
        <textarea {...register('ingr')} placeholder="Ingredients (comma separated)" className="bg-white text-black p-2 rounded" />
        
        <select {...register('categories')} className="bg-white text-black p-2 rounded">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
        </select>
        
        <textarea {...register('inst')} placeholder="Instructions (comma separated)" className="bg-white text-black p-2 rounded" />

        <button type="submit" className="bg-green-500 text-black font-bold py-2 rounded mt-4 hover:bg-green-600">
            Save Recipe
        </button>
        
        </form>
    
    );
};

export default UpdateRecipe;
