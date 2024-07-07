import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
    ChevronLeftIcon,
    ClockIcon,
    FireIcon,
    HeartIcon,
    Square3Stack3DIcon,
    UsersIcon
} from 'react-native-heroicons/mini';
import {LikedRecipesContext} from '../context/LikedRecipesContext';
import styles from './CreateRecipeDetailStyles'; // Use the existing styles for consistency

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

        return item.strIngredient1.split(',').map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
                <View style={styles.bulletPoint}/>
                <Text style={styles.ingredientText}>{ingredient.trim()}</Text>
            </View>
        ));
    };

    const renderInstructions = () => {
        if (!item.strInstructions) return null;

        const instructions = item.strInstructions.split('\n');
        return instructions.map((instruction, index) => (
            <Text key={index} style={styles.instructionItem}>
                {instruction}
            </Text>
        ));
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

                <View style={styles.miscContainer}>
                    <View style={styles.miscItem}>
                        <View style={styles.iconBackground}>
                            <ClockIcon size={24} color="#394e7d" />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.miscText}>{item.strDuration}</Text>
                            <Text style={styles.miscUnit}>Mins</Text>
                        </View>
                    </View>
                    <View style={styles.miscItem}>
                        <View style={styles.iconBackground}>
                            <UsersIcon size={24} color="#394e7d" />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.miscText}>{item.strServings}</Text>
                            <Text style={styles.miscUnit}>Servings</Text>
                        </View>
                    </View>
                    <View style={styles.miscItem}>
                        <View style={styles.iconBackground}>
                            <FireIcon size={24} color="#394e7d" />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.miscText}>{item.strCalories}</Text>
                            <Text style={styles.miscUnit}>Calories</Text>
                        </View>
                    </View>
                    <View style={styles.miscItem}>
                        <View style={styles.iconBackground}>
                            <Square3Stack3DIcon size={24} color="#394e7d" />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.miscText}>{item.strDifficulty}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Ingredients</Text>
                    {renderIngredients()}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Instructions</Text>
                    {renderInstructions()}
                </View>
            </View>
        </ScrollView>
    );
};

export default CreatedRecipeDetailScreen;
