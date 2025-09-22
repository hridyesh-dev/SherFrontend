import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [data, setdata] = useState([]);

    // getting recepies stored in local storage 
    useEffect(()=>{
        setdata(JSON.parse(localStorage.getItem("recipes")) || [] );
    },[])

    return (
        <recipecontext.Provider value={{ data, setdata }}>
        {props.children}
        </recipecontext.Provider>
    );
};

export default RecipeContext;
