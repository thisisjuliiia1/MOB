import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LikedRecipesContext = createContext();

export const LikedRecipesProvider = ({ children }) => {
    const [likedRecipes, setLikedRecipes] = useState([]);

    useEffect(() => {
        loadLikedRecipes();
    }, []);

    const saveLikedRecipes = async (recipes) => {
        try {
            const jsonValue = JSON.stringify(recipes);
            await AsyncStorage.setItem('@liked_recipes', jsonValue);
        } catch (e) {
            console.error('Error saving liked recipes:', e);
        }
    };

    const loadLikedRecipes = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@liked_recipes');
            if (jsonValue !== null) {
                setLikedRecipes(JSON.parse(jsonValue));
            }
        } catch (e) {
            console.error('Error loading liked recipes:', e);
        }
    };

    const toggleLikeRecipe = (recipe) => {
        const isLiked = likedRecipes.some((likedMeal) => likedMeal.idMeal === recipe.idMeal);
        let updatedRecipes = [];
        if (!isLiked) {
            updatedRecipes = [...likedRecipes, recipe];
        } else {
            updatedRecipes = likedRecipes.filter((likedMeal) => likedMeal.idMeal !== recipe.idMeal);
        }
        setLikedRecipes(updatedRecipes);
        saveLikedRecipes(updatedRecipes); // Save to AsyncStorage
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
