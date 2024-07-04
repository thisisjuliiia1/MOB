import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import {HomeIcon, HeartIcon, CalendarIcon} from 'react-native-heroicons/mini';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import LikedRecipesScreen from '../screens/LikedRecipesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CalendarScreen from '../screens/CalendarScreen'; // Importiere die Kalenderseite
import { LikedRecipesProvider } from '../context/LikedRecipesContext';
import CreateRecipeScreen from "../screens/CreateRecipeScreen";
import CreatedRecipeDetailScreen from "../screens/CreatedRecipeDetailScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Benutzerdefinierte Komponente für den Drawer-Inhalt
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#dfecee' }}>
            <Image
                source={require('../../assets/images/logo.png')} // Passe den Pfad zu deinem Logo an
                style={{ width: 150, height: 50, resizeMode: 'contain', alignSelf: 'center', marginTop: 20 }}
            />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

// Komponente für die Drawer-Navigation
function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#394e7d', // Hintergrundfarbe des Headers für den Drawer
                },
                headerTintColor: '#dfecee', // Textfarbe des Headers
                drawerActiveTintColor: '#394e7d', // Aktive Textfarbe im Drawer
                drawerInactiveTintColor: '#282221', // Inaktive Textfarbe im Drawer
                drawerStyle: {
                    backgroundColor: '#dfecee', // Hintergrundfarbe des gesamten Drawers
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <HomeIcon color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Liked Recipes"
                component={LikedRecipesScreen}
                options={{
                    drawerLabel: 'Liked Recipes',
                    drawerIcon: ({ color, size }) => (
                        <HeartIcon color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Calendar"
                component={CalendarScreen} // Hier wird die Kalenderseite hinzugefügt
                options={{
                    drawerLabel: 'Calendar',
                    drawerIcon: ({ color, size }) => (
                        <CalendarIcon color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Create Recipe"
                component={CreateRecipeScreen}
                options={{
                    drawerLabel: 'Create Recipe',
                    drawerIcon: ({ color, size }) => (
                        <CalendarIcon color={color} size={size} /> // Use an appropriate icon
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

// Haupt-App-Komponente, die die gesamte Navigation enthält
export default function App() {
    return (
        <NavigationContainer>
            <LikedRecipesProvider>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={DrawerNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RecipeDetail"
                        component={RecipeDetailScreen}
                        options={{
                            headerTitle: 'Recipe Details',
                            headerStyle: {
                                backgroundColor: '#dfecee',
                            },
                            headerTintColor: '#394e7d',
                            headerLeft: null,
                        }}
                    />
                    <Stack.Screen
                        name="CreatedRecipeDetail"
                        component={CreatedRecipeDetailScreen}
                        options={{
                            headerTitle: 'Recipe Details',
                            headerStyle: {
                                backgroundColor: '#dfecee',
                            },
                            headerTintColor: '#394e7d',
                        }}
                    />
                </Stack.Navigator>
            </LikedRecipesProvider>
        </NavigationContainer>
    );
}
