import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CachedImage } from '../helpers/image';
import {
    ChevronLeftIcon,
    ClockIcon,
    FireIcon,
    HeartIcon,
    Square3Stack3DIcon,
    UsersIcon
} from 'react-native-heroicons/mini';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';
import styles from './RecipeDetailStyles'; // Import the StyleSheet

const RecipeDetailScreen = (props) => {
    const { item } = props.route.params;
    const [isFavourite, setIsFavourite] = useState(false);
    const [likedRecipes, setLikedRecipes] = useState([]); // New state for liked recipes
    const navigation = useNavigation();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMealData(item.idMeal);
    }, []);

    const getMealData = async (id) => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            if (response && response.data && response.data.meals && response.data.meals.length > 0) {
                setMeal(response.data.meals[0]);
            } else {
                console.error('No meal data found.');
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        }
    };


    const renderIngredients = () => {
        if (!meal) return null; // Return early if meal is not loaded

        const ingredients = [];
        for (let i = 1; i <= 20; i++) { // Assuming there are up to 20 ingredients
            const ingredientName = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredientName && ingredientName.trim() !== '') {
                ingredients.push(
                    <View key={i} style={styles.ingredientItem}>
                        <View style={styles.bulletPoint} />
                        <Text style={styles.ingredientText}><Text style={{fontWeight: '600'}}>{`${measure} `}</Text>{ingredientName}</Text>
                    </View>
                );
            }
        }
        return ingredients;
    };

    const renderInstructions = () => {
        if (!meal || !meal.strInstructions) return null; // Return early if meal or instructions are not loaded

        const instructions = meal.strInstructions.split('\n');
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
            <View style={styles.imageContainer}>
                <CachedImage
                    uri={item.strMealThumb}
                    style={styles.image}
                />
            </View>

            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={hp(4)} color="#394e7d" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton} onPress={() => setIsFavourite(!isFavourite)}>
                    <HeartIcon size={hp(4)} color={isFavourite ? 'red' : '#394e7d'} />
                </TouchableOpacity>
            </View>

            {/* Meal details */}
            {loading ? (
                <Loading size="large" style={styles.loading} />
            ) : (
                <View style={styles.content}>
                    <Text style={styles.mealName}>
                        {meal ? meal.strMeal : 'Meal details not available'}
                    </Text>
                    <Text style={styles.area}>
                        {meal ? meal.strArea : 'Area not available'}
                    </Text>

                    {/* Misc items */}
                    <View style={styles.miscContainer}>
                        <MiscItem icon={<ClockIcon size={hp(4)} color="#394e7d" />} text="35" unit="Mins" />
                        <MiscItem icon={<UsersIcon size={hp(4)} color="#394e7d" />} text="04" unit="Servings" />
                        <MiscItem icon={<FireIcon size={hp(4)} color="#394e7d" />} text="104" unit="Calories" />
                        <MiscItem icon={<Square3Stack3DIcon size={hp(4)} color="#394e7d" />} text="Easy" />
                    </View>

                    {/* Ingredients */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                            Ingredients
                        </Text>
                        {renderIngredients()}
                    </View>

                    {/* Instructions */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                            Instructions
                        </Text>
                        {renderInstructions()}
                    </View>
                </View>
            )}

        </ScrollView>
    );
};

const MiscItem = ({ icon, text, unit }) => (
    <View style={styles.miscItem}>
        <View style={styles.iconBackground}>
            {icon}
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.miscText}>{text}</Text>
            {unit && <Text style={styles.miscUnit}>{unit}</Text>}
        </View>
    </View>
);

export default RecipeDetailScreen;
