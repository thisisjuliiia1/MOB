import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { HomeIcon, HeartIcon, CalendarIcon, PlusIcon } from 'react-native-heroicons/mini';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import HomeScreen from './src/screens/HomeScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import LikedRecipesScreen from './src/screens/LikedRecipesScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import { LikedRecipesProvider } from './src/context/LikedRecipesContext';
import CreateRecipeScreen from './src/screens/CreateRecipeScreen';
import CreatedRecipeDetailScreen from './src/screens/CreatedRecipeDetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#dfecee' }}>
      <Image
          source={require('./assets/images/logo.png')}
          style={{ width: 150, height: 50, resizeMode: 'contain', alignSelf: 'center', marginTop: 20 }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
);

const DrawerNavigator = () => (
    <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: '#394e7d' },
          headerTintColor: '#dfecee',
          drawerActiveTintColor: '#394e7d',
          drawerInactiveTintColor: '#282221',
          drawerStyle: { backgroundColor: '#dfecee' },
        }}
    >
      {[
        { name: 'Home', component: HomeScreen, icon: HomeIcon },
        { name: 'LikedRecipes', component: LikedRecipesScreen, icon: HeartIcon },
        { name: 'Calendar', component: CalendarScreen, icon: CalendarIcon },
        { name: 'CreateRecipe', component: CreateRecipeScreen, icon: PlusIcon },
      ].map(screen => (
          <Drawer.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={{
                drawerLabel: screen.name,
                drawerIcon: ({ color, size }) => React.createElement(screen.icon, { color, size }),
              }}
          />
      ))}
    </Drawer.Navigator>
);

const screenOptions = {
  headerStyle: { backgroundColor: '#dfecee' },
  headerTintColor: '#394e7d',
};

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
            {[
              { name: 'RecipeDetail', component: RecipeDetailScreen },
              { name: 'Calendar', component: CalendarScreen },
              { name: 'CreatedRecipeDetail', component: CreatedRecipeDetailScreen },
            ].map(screen => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={{ headerTitle: 'Recipe Details', ...screenOptions, headerLeft: null }}
                />
            ))}
          </Stack.Navigator>
        </LikedRecipesProvider>
      </NavigationContainer>
  );
}
