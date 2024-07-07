import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlusIcon, TrashIcon } from 'react-native-heroicons/solid';
import styles from './CreateRecipeScreenStyles';

export default function CreateRecipeScreen() {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [duration, setDuration] = useState('');
    const [servings, setServings] = useState('');
    const [calories, setCalories] = useState('');
    const [difficulty, setDifficulty] = useState('Easy');
    const [createdRecipes, setCreatedRecipes] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        loadCreatedRecipes();
    }, []);

    const saveCreatedRecipes = async (recipes) => {
        try {
            const jsonValue = JSON.stringify(recipes);
            await AsyncStorage.setItem('@created_recipes', jsonValue);
        } catch (e) {
            console.error('Error saving created recipes:', e);
        }
    };

    const loadCreatedRecipes = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@created_recipes');
            if (jsonValue !== null) {
                setCreatedRecipes(JSON.parse(jsonValue));
            }
        } catch (e) {
            console.error('Error loading created recipes:', e);
        }
    };

    const handleSaveRecipe = async () => {
        try {
            const newRecipe = {
                idMeal: Date.now().toString(), // unique ID based on timestamp
                strMeal: recipeName,
                strIngredient1: ingredients,
                strInstructions: instructions,
                strDuration: duration,
                strServings: servings,
                strCalories: calories,
                strDifficulty: difficulty,
                isCustom: true // Ensure this is set to true
            };

            const updatedRecipes = [...createdRecipes, newRecipe];
            setCreatedRecipes(updatedRecipes);
            await saveCreatedRecipes(updatedRecipes); // Save to AsyncStorage
            setRecipeName('');
            setIngredients('');
            setInstructions('');
            setDuration('');
            setServings('');
            setCalories('');
            setDifficulty('Easy');
            setIsFormVisible(false);
        } catch (e) {
            console.error('Error saving recipe:', e);
        }
    };

    const handleDeleteRecipe = async (idMeal) => {
        try {
            const updatedRecipes = createdRecipes.filter(recipe => recipe.idMeal !== idMeal);
            setCreatedRecipes(updatedRecipes);
            await saveCreatedRecipes(updatedRecipes); // Save to AsyncStorage
        } catch (e) {
            console.error('Error deleting recipe:', e);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {isFormVisible ? (
                    <View style={styles.formContainer}>
                        <Text style={styles.title}>Create a new recipe</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Recipe Name"
                            placeholderTextColor="#282221"
                            value={recipeName}
                            onChangeText={setRecipeName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Ingredients (comma separated)"
                            placeholderTextColor="#282221"
                            value={ingredients}
                            onChangeText={setIngredients}
                        />
                        <TextInput
                            style={[styles.input, styles.instructionsInput]}
                            placeholder="Instructions"
                            placeholderTextColor="#282221"
                            value={instructions}
                            onChangeText={setInstructions}
                            multiline
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Duration (mins)"
                            placeholderTextColor="#282221"
                            value={duration}
                            onChangeText={setDuration}
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Servings"
                            placeholderTextColor="#282221"
                            value={servings}
                            onChangeText={setServings}
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Calories"
                            placeholderTextColor="#282221"
                            value={calories}
                            onChangeText={setCalories}
                            keyboardType="numeric"
                        />
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={difficulty}
                                onValueChange={(itemValue) => setDifficulty(itemValue)}
                                style={styles.picker}
                                itemStyle={styles.pickerItem}
                            >
                                <Picker.Item label="Easy" value="Easy" />
                                <Picker.Item label="Medium" value="Medium" />
                                <Picker.Item label="Hard" value="Hard" />
                            </Picker>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={handleSaveRecipe}>
                            <Text style={styles.buttonText}>Save Recipe</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity style={styles.addButton} onPress={() => setIsFormVisible(true)}>
                        <PlusIcon color="#fff" size={24} />
                        <Text style={styles.addButtonText}>Add Recipe</Text>
                    </TouchableOpacity>
                )}

                <FlatList
                    data={createdRecipes}
                    keyExtractor={(item) => item.idMeal}
                    renderItem={({ item }) => (
                        <View style={styles.recipeCard}>
                            <TouchableOpacity
                                style={styles.recipeCardContent}
                                onPress={() => navigation.navigate('CreatedRecipeDetail', { item })} // Update this line
                            >
                                <Text style={styles.recipeTitle}>{item.strMeal}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDeleteRecipe(item.idMeal)}>
                                <TrashIcon color="#ff0000" size={24} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}
