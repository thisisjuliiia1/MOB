import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, View, Image } from 'react-native';
import { HomeIcon, HeartIcon } from 'react-native-heroicons/mini';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen.js';
import RecipeDetailScreen from '../screens/RecipeDetailScreen.js';
import LikedRecipesScreen from '../screens/LikedRecipesScreen.js';
import WelcomeScreen from '../screens/WelcomeScreen.js'; // Adjust the path as per your project structure
import { LikedRecipesProvider } from '../context/LikedRecipesContext'; // Adjust the path as per your project structure

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Custom Drawer Content Component
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#dfecee' }}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Image
                    source={require('../../assets/images/logo.png')} // Adjust the path to your logo
                    style={{ width: 150, height: 50, resizeMode: 'contain' }}
                />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

// Komponente für die Drawer Navigation
function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={({ route }) => ({
                drawerIcon: ({ focused, color, size }) => {
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
                drawerActiveTintColor: '#394e7d',
                drawerInactiveTintColor: '#282221',
                drawerStyle: {
                    backgroundColor: '#dfecee', // Hintergrundfarbe des gesamten Drawers
                },
                headerStyle: {
                    backgroundColor: '#394e7d', // Hintergrundfarbe des Headers für den Drawer
                },
                headerTintColor: '#dfecee', // Textfarbe des Headers
            })}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Liked Recipes" component={LikedRecipesScreen} />
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
                        options={{
                            headerShown: false, // Hide header for the Welcome screen
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={DrawerNavigator}
                        options={{
                            headerShown: false, // Hide header for the Home screen
                        }}
                    />
                    <Stack.Screen
                        name="RecipeDetail"
                        component={RecipeDetailScreen}
                        options={{
                            headerTitle: 'Recipe Details',
                            headerStyle: {
                                backgroundColor: '#dfecee', // Hintergrundfarbe des Headers
                            },
                            headerLeft: null, // Entfernt den "Back to Home" Button
                        }}
                    />
                </Stack.Navigator>
            </LikedRecipesProvider>
        </NavigationContainer>
    );
}
