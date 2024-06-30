import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Image } from 'react-native';
import { HomeIcon, HeartIcon } from 'react-native-heroicons/mini';

import HomeScreen from '../screens/HomeScreen.js';
import RecipeDetailScreen from '../screens/RecipeDetailScreen.js';
import LikedRecipesScreen from '../screens/LikedRecipesScreen.js';
import WelcomeScreen from '../screens/WelcomeScreen.js'; // Adjust the path as per your project structure

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Komponente für die Bottom Tab Navigation mit Heroicons und Farben
function HomeTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconComponent;

                    if (route.name === 'Home') {
                        iconComponent = focused ? <HomeIcon size={size} color={color} /> : <HomeIcon size={size} color={color} />;
                    } else if (route.name === 'Liked Recipes') {
                        iconComponent = focused ? <HeartIcon size={size} color={color} /> : <HeartIcon size={size} color={color} />;
                    }

                    return (
                        <TouchableOpacity
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                            activeOpacity={0.8}
                        >
                            {iconComponent}
                        </TouchableOpacity>
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: '#394e7d',
                inactiveTintColor: '#282221',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Liked Recipes" component={LikedRecipesScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

// Haupt-App-Komponente, die die gesamte Navigation enthält
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">

                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen} // Replace with your Welcome screen component
                    options={{
                        headerShown: false, // Hide header for the Welcome screen
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={HomeTabNavigator}
                    options={{
                        headerStyle: {
                            backgroundColor: '#dfecee', // Hintergrundfarbe des Headers
                        },
                        headerTintColor: '#394e7d', // Textfarbe des Headers
                        headerTitleStyle: {
                            fontWeight: 'bold', // Stil für den Header-Titel
                        },
                        headerLeft: () => (
                            <Image
                                source={require('../../assets/images/logo.png')}
                                style={{ width: 30, height: 30, marginLeft: 10 }}
                            />
                        ),
                        tabBarLabel: 'Home', // Label für den Tab in der Bottom Navigation
                    }}
                />

                <Stack.Screen
                    name="Liked Recipes"
                    component={LikedRecipesScreen}
                    options={{
                        headerTitle: 'Liked Recipes', // Titel des Headers
                        headerStyle: {
                            backgroundColor: '#dfecee', // Hintergrundfarbe des Headers
                        },
                        headerTintColor: '#394e7d', // Textfarbe des Headers
                        headerTitleStyle: {
                            fontWeight: 'bold', // Stil für den Header-Titel
                        },
                        tabBarLabel: 'Liked Recipes', // Label für den Tab in der Bottom Navigation
                    }}
                />

                <Stack.Screen
                    name="RecipeDetail"
                    component={RecipeDetailScreen}
                    options={{
                        headerLeft: null, // Zurück-Button entfernen
                        headerTitle: 'Recipe Details',
                        headerStyle: {
                            backgroundColor: '#dfecee', // Hintergrundfarbe des Headers
                        },
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
