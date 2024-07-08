import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Image, ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import { PlusIcon, TrashIcon } from 'react-native-heroicons/solid';
import styles from './CalendarStyles';

const CalendarScreen = ({ navigation }) => {
    const [selectedRecipes, setSelectedRecipes] = useState([]);
    const [markedDates, setMarkedDates] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [recipesForDate, setRecipesForDate] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const loadRecipesForDate = async (date) => {
        setSelectedDate(date.dateString);
        setIsLoading(true);
        try {
            let allRecipes = [];
            const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
            for (let letter of alphabet) {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
                if (response.data && response.data.meals) {
                    allRecipes = [...allRecipes, ...response.data.meals];
                }
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            setSelectedRecipes(allRecipes);
            setIsModalVisible(true);
        } catch (error) {
            console.error('Error loading recipes:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const onDayPress = (day) => setSelectedDate(day.dateString);

    const onRecipeSelect = (recipe) => {
        setRecipesForDate(prevState => ({ ...prevState, [selectedDate]: recipe }));
        setMarkedDates(prevState => ({
            ...prevState,
            [selectedDate]: {
                selected: true,
                marked: true,
                dotColor: '#394e7d',
                customStyles: {
                    container: { backgroundColor: '#394e7d' },
                    text: { color: '#dfecee' }
                }
            }
        }));
        setIsModalVisible(false);
    };

    const onRecipeRemove = (date) => {
        setRecipesForDate(prevState => {
            const updatedRecipes = { ...prevState };
            delete updatedRecipes[date];
            return updatedRecipes;
        });
        setMarkedDates(prevState => {
            const updatedMarkedDates = { ...prevState };
            delete updatedMarkedDates[date];
            return updatedMarkedDates;
        });
    };

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={onDayPress}
                markedDates={markedDates}
                style={styles.calendar}
                theme={{
                    backgroundColor: '#dfecee',
                    calendarBackground: '#dfecee',
                    textSectionTitleColor: '#394e7d',
                    selectedDayBackgroundColor: '#394e7d',
                    selectedDayTextColor: '#dfecee',
                    todayTextColor: '#394e7d',
                    dayTextColor: '#282221',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#394e7d',
                    selectedDotColor: '#dfecee',
                    arrowColor: '#394e7d',
                    monthTextColor: '#394e7d',
                    indicatorColor: '#394e7d'
                }}
            />
            {selectedDate && (
                <TouchableOpacity style={styles.addButton} onPress={() => loadRecipesForDate({ dateString: selectedDate })}>
                    <PlusIcon color="#fff" size={24} />
                </TouchableOpacity>
            )}
            {selectedDate && recipesForDate[selectedDate] && (
                <View style={styles.recipeCard}>
                    <Image source={{ uri: recipesForDate[selectedDate].strMealThumb }} style={styles.image} />
                    <Text style={styles.title}>{recipesForDate[selectedDate].strMeal}</Text>
                    <TouchableOpacity onPress={() => onRecipeRemove(selectedDate)}>
                        <TrashIcon color="#ff0000" size={24} />
                    </TouchableOpacity>
                </View>
            )}
            <Modal
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Select a Recipe for {selectedDate}</Text>
                    {isLoading ? (
                        <ActivityIndicator size="large" color="#394e7d" />
                    ) : (
                        <FlatList
                            data={selectedRecipes}
                            keyExtractor={item => item.idMeal}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.recipeItem} onPress={() => onRecipeSelect(item)}>
                                    <Text style={styles.recipeText}>{item.strMeal}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                    <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default CalendarScreen;
