import React, { useContext } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LikedRecipesContext } from '../context/LikedRecipesContext';
import { useNavigation } from '@react-navigation/native';

const LikedRecipesScreen = () => {
    const { likedRecipes } = useContext(LikedRecipesContext);
    const navigation = useNavigation();


    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
            <Text style={styles.header}>Liked Recipes</Text>
            {likedRecipes.length === 0 ? (
                <Text style={styles.noRecipesText}>You have not liked any recipes yet.</Text>
            ) : (
                likedRecipes.map((recipe) => (
                    <TouchableOpacity
                        key={recipe.idMeal}
                        style={styles.recipeCard}
                        onPress={() => navigation.navigate('RecipeDetail', { item: recipe })}
                    >
                        <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
                        <Text style={styles.title}>{recipe.strMeal}</Text>
                    </TouchableOpacity>
                ))
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    noRecipesText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,
    },
    recipeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 10,
        borderRadius: 8,
        marginVertical: 8,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LikedRecipesScreen;
