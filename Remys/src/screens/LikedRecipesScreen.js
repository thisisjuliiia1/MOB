import React, { useContext } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { LikedRecipesContext } from '../context/LikedRecipesContext';
import { useNavigation } from '@react-navigation/native';
import styles from './LikedRecipeStyles';

const LikedRecipesScreen = () => {
    const { likedRecipes } = useContext(LikedRecipesContext);
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                style={styles.scrollView}
            >
                <Text style={styles.greetingText}>Hello Julia!</Text>
                <Text style={styles.header}>Find your liked recipes here!</Text>
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
        </View>
    );
};

export default LikedRecipesScreen;
