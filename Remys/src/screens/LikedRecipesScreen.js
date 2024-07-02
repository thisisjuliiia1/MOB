import React, { useContext } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { LikedRecipesContext } from '../context/LikedRecipesContext';
import { useNavigation } from '@react-navigation/native';
import styles from './LikedRecipeStyles'; // Importieren Sie die Stile aus der styles.js Datei
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const LikedRecipesScreen = () => {
    const { likedRecipes } = useContext(LikedRecipesContext); // Zugriff auf den Context und die gelikten Rezepte
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                style={styles.scrollView}
            >
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
        </View>
    );
};

export default LikedRecipesScreen;
