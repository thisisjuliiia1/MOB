// WelcomeScreen.js
import { View, Text, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFC107' }}>
            <StatusBar style="light" />
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 100, marginBottom: 10 }}>
                <Image source={require('../assets/icon.png')} style={{ width: 200, height: 200 }} />
            </View>
            <Text>Welcome Screen</Text>
        </View>
    );
}
