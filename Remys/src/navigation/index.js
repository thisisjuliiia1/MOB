import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { HomeIcon, HeartIcon, CalendarIcon, PlusIcon } from 'react-native-heroicons/mini';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import LikedRecipesScreen from '../screens/LikedRecipesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import { LikedRecipesProvider } from '../context/LikedRecipesContext';
import CreateRecipeScreen from '../screens/CreateRecipeScreen';
import CreatedRecipeDetailScreen from '../screens/CreatedRecipeDetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#dfecee' }}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={{ width: 150, height: 50, resizeMode: 'contain', alignSelf: 'center', marginTop: 20 }}
            />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#394e7d',
                },
                headerTintColor: '#dfecee',
                drawerActiveTintColor: '#394e7d',
                drawerInactiveTintColor: '#282221',
                drawerStyle: {
                    backgroundColor: '#dfecee',
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
                name="LikedRecipes"
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
                component={CalendarScreen}
                options={{
                    drawerLabel: 'Calendar',
                    drawerIcon: ({ color, size }) => (
                        <CalendarIcon color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="CreateRecipe"
                component={CreateRecipeScreen}
                options={{
                    drawerLabel: 'Create Recipe',
                    drawerIcon: ({ color, size }) => (
                        <PlusIcon color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

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
                        name="Calendar"
                        component={CalendarScreen}
                        options={{
                            headerTitle: 'Calendar',
                            headerStyle: {
                                backgroundColor: '#dfecee',
                            },
                            headerTintColor: '#394e7d',
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
                            headerLeft: null,
                        }}
                    />
                </Stack.Navigator>
            </LikedRecipesProvider>
        </NavigationContainer>
    );
}
