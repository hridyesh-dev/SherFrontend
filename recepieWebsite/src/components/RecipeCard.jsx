import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    const { id, image, title, desc, chef } = props.recipe;

    return (
        <Link to={`/recepies/details/${id}`} className="mr-3 mb-3 shadow bg-white text-black p-1 block w-[23vw] rounded overflow-hidden">
            <img src={image} alt={title} className="w-full h-[20vh] object-cover hover:scale-105 transform transition-transform duration-300" />
            <h2 className="text-xl px-2 font-bold mt-2">{title}</h2>
            <p className="text-black px-2 font-mono">By: {chef}</p>
            <p className="mt-2 px-2 pb-3">
                {desc.slice(0, 100)}...
                <small className="text-blue-400">Read More</small>
            </p>
        </Link>
    );
};

export default RecipeCard;
