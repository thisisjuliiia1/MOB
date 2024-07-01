import React, {useState, useEffect, useCallback, useMemo, useContext} from 'react';
import { View, ScrollView, Text, Image, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Categories from "../components/categories";
import Recipes from "../components/recipes";
import styles from './HomeScreenStyles'; // Importieren Sie das StyleSheet
import {LikedRecipesContext} from "../context/LikedRecipesContext";

export default function HomeScreen({ navigation }) { // Passen Sie die Navigation als Prop an
    const [activeCategory, setActiveCategory] = useState('Beef');
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const { likedRecipes, toggleLikeRecipe} = useContext(LikedRecipesContext); // Zugriff auf den Context und die toggleLikeRecipe Funktion


    useEffect(() => {
        getCategories();
        getRecipes(activeCategory);
    }, []);

    useEffect(() => {
        if (activeCategory) {
            getRecipes(activeCategory);
        }
    }, [activeCategory]);

    const handleChangeCategory = useCallback((category) => {
        setActiveCategory(category);
        setSearchTerm('');
        getRecipes(category);
    }, []);

    const getCategories = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            if (response && response.data) {
                setCategories(response.data.categories);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const getRecipes = async (category) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            if (response && response.data) {
                setMeals(response.data.meals || []);
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = useCallback((text) => {
        setSearchTerm(text);
    }, []);

    const handleLikeRecipe = useCallback((recipe) => {
        toggleLikeRecipe(recipe); // Funktion zum Hinzufügen oder Entfernen eines Rezepts aus den gelikten Rezepten
    }, [toggleLikeRecipe]);

    const filteredMeals = useMemo(() => {
        if (!searchTerm) {
            return meals;
        }
        return meals.filter(meal =>
            meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, meals]);

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                style={styles.scrollView}
            >
                {/* Begrüßungstexte */}
                <View style={styles.greetingText}>
                    <Text style={styles.greetingText}>Hello Julia!</Text>
                    <Text style={styles.mainText}>Find your Recipes here!</Text>
                </View>

                {/* Searchbar */}
                <View style={styles.searchBarContainer}>
                    <Image source={require('../../assets/icons/Lupe.png')} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Search for Recipes"
                        placeholderTextColor="#fff"
                        style={styles.searchInput}
                        onChangeText={handleSearch}
                        value={searchTerm}
                    />


                </View>

                {/* Kategorien */}
                <View style={{ marginTop: 20 }}>
                    {categories.length > 0 && (
                        <Categories
                            categories={categories}
                            activeCategory={activeCategory}
                            handleChangeCategory={handleChangeCategory}
                        />
                    )}
                </View>

                {/* Rezepte */}
                <View>
                    {isLoading ? (
                        <ActivityIndicator size="large" />
                    ) : (
                        <Recipes meals={filteredMeals} />
                    )}

                </View>

                {/* Rezepte anzeigen */}
                <View>
                    {isLoading ? (
                        <ActivityIndicator size="large" />
                    ) : (
                        <Recipes
                            meals={filteredMeals}
                            onLikeRecipe={handleLikeRecipe} // Funktion zum Liken oder Entliken eines Rezepts übergeben
                        />
                    )}

                </View>

                {/* Liked Recipes Button */}
                <View style={styles.likedRecipesButtonContainer}>
                    <TouchableOpacity
                        style={styles.likedRecipesButton}
                        onPress={() => navigation.navigate('LikedRecipes')}
                    >
                        <Text style={styles.likedRecipesButtonText}>View Liked Recipes</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
