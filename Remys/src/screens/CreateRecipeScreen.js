import React, { useState, useContext } from 'react';
import { View, TextInput, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LikedRecipesContext } from '../context/LikedRecipesContext';
import styles from './CreateRecipeScreenStyles'; // Use the existing styles

export default function CreateRecipeScreen() {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [duration, setDuration] = useState('');
    const [servings, setServings] = useState('');
    const [calories, setCalories] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [createdRecipes, setCreatedRecipes] = useState([]);
    const navigation = useNavigation();

    const handleSaveRecipe = () => {
        const newRecipe = {
            idMeal: Date.now().toString(), // unique ID based on timestamp
            strMeal: recipeName,
            strIngredient1: ingredients,
            strInstructions: instructions,
            strDuration: duration,
            strServings: servings,
            strCalories: calories,
            strDifficulty: difficulty,
        };

        setCreatedRecipes([...createdRecipes, newRecipe]);
        setRecipeName('');
        setIngredients('');
        setInstructions('');
        setDuration('');
        setServings('');
        setCalories('');
        setDifficulty('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create a New Recipe</Text>
            <TextInput
                style={styles.input}
                placeholder="Recipe Name"
                value={recipeName}
                onChangeText={setRecipeName}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingredients (comma separated)"
                value={ingredients}
                onChangeText={setIngredients}
            />
            <TextInput
                style={styles.input}
                placeholder="Instructions"
                value={instructions}
                onChangeText={setInstructions}
                multiline
            />
            <TextInput
                style={styles.input}
                placeholder="Duration (mins)"
                value={duration}
                onChangeText={setDuration}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Servings"
                value={servings}
                onChangeText={setServings}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Calories"
                value={calories}
                onChangeText={setCalories}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Difficulty (Easy, Medium, Hard)"
                value={difficulty}
                onChangeText={setDifficulty}
            />
            <Button title="Save Recipe" onPress={handleSaveRecipe} />

            <FlatList
                data={createdRecipes}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.recipeCard}
                        onPress={() => navigation.navigate('CreatedRecipeDetail', { item })}
                    >
                        <Text style={styles.title}>{item.strMeal}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
