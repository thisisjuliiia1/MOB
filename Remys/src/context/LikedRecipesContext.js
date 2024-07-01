import React, { createContext, useState } from 'react';

// Create Context
export const LikedRecipesContext = createContext();

// Create Provider
export const LikedRecipesProvider = ({ children }) => {
    const [likedRecipes, setLikedRecipes] = useState([]);

    const toggleLikeRecipe = (recipe) => {
        const isLiked = likedRecipes.some((likedMeal) => likedMeal.idMeal === recipe.idMeal);
        if (!isLiked) {
            setLikedRecipes([...likedRecipes, recipe]);
        } else {
            setLikedRecipes(likedRecipes.filter((likedMeal) => likedMeal.idMeal !== recipe.idMeal));
        }
    };

    const contextValue = {
        likedRecipes,
        toggleLikeRecipe,
    };

    return (
        <LikedRecipesContext.Provider value={contextValue}>
            {children}
        </LikedRecipesContext.Provider>
    );
};
