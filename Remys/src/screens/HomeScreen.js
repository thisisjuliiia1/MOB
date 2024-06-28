import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TextInput, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import Categories from "../components/categories";
import Recipes from "../components/recipes";

export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState('Beef');
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCategories();
        getRecipes(activeCategory);
    }, []);

    const handleChangeCategory = (category) => {
        getRecipes(category);
        setActiveCategory(category);
        setMeals([]);
    }

    const getCategories = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            if (response && response.data) {
                setCategories(response.data.categories);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    const getRecipes = async (category = 'Beef') => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            if (response && response.data) {
                setMeals(response.data.meals || []);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#dfecee' }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                style={{ paddingTop: 14 }}
            >
                {/* Logo */}
                <View style={{ marginLeft: 20, marginTop: 55 }}>
                    <Image source={require('../../assets/images/logo.png')} style={{ height: hp(7), width: hp(7) }} />
                </View>

                {/* Begrüßungstexte */}
                <View style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text style={{ fontWeight: '400', color: '#282221', fontSize: wp('4%'), marginBottom: 10 }}>Hello Julia!</Text>
                    <Text style={{ fontWeight: '600', color: '#282221', fontSize: wp('6%') }}>Find here your Recipes!</Text>
                </View>

                {/* Searchbar */}
                <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center', backgroundColor: '#282221', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 9999, width: '70%' }}>
                    <Image source={require('../../assets/icons/Lupe.png')} style={{ height: hp(2), width: hp(2), marginRight: 10 }} />
                    <TextInput
                        placeholder="Search for Recipes"
                        placeholderTextColor="#fff"
                        style={{ color: '#ffffff', flex: 1 }}
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
                    <Recipes meals={meals} categories={categories} />
                </View>
            </ScrollView>
        </View>
    );
}
