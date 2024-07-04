import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { HeartIcon, ChevronLeftIcon } from 'react-native-heroicons/mini';
import { LikedRecipesContext } from '../context/LikedRecipesContext';
import styles from './RecipeDetailStyles'; // Use the existing styles for consistency

const CreatedRecipeDetailScreen = ({ route, navigation }) => {
    const { item } = route.params;
    const { likedRecipes, toggleLikeRecipe } = useContext(LikedRecipesContext);
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        setIsFavourite(likedRecipes.some(recipe => recipe.idMeal === item.idMeal));
    }, [likedRecipes]);

    const handleToggleLike = () => {
        toggleLikeRecipe(item);
    };

    const renderIngredients = () => {
        if (!item.strIngredient1) return null;

        const ingredients = item.strIngredient1.split(',').map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
                <View style={styles.bulletPoint} />
                <Text style={styles.ingredientText}>{ingredient.trim()}</Text>
            </View>
        ));

        return ingredients;
    };

    return (
        <ScrollView
            style={{ backgroundColor: '#dfecee' }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 30 }}
        >
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={24} color="#394e7d" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton} onPress={handleToggleLike}>
                    <HeartIcon size={24} color={isFavourite ? 'red' : '#394e7d'} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.mealName}>{item.strMeal}</Text>
                <Text style={styles.area}>{item.strDifficulty}</Text>

                <View style={styles.miscContainer}>
                    <View style={styles.miscItem}>
                        <Text style={styles.miscText}>Duration: {item.strDuration} mins</Text>
                    </View>
                    <View style={styles.miscItem}>
                        <Text style={styles.miscText}>Servings: {item.strServings}</Text>
                    </View>
                    <View style={styles.miscItem}>
                        <Text style={styles.miscText}>Calories: {item.strCalories}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Ingredients</Text>
                    {renderIngredients()}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Instructions</Text>
                    <Text style={styles.instructionItem}>{item.strInstructions}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default CreatedRecipeDetailScreen;
