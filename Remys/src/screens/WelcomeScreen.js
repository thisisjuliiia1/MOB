import { Text, View, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function WelcomeScreen() {
    return (
        <TailwindProvider>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#394e7d' }}>
                <StatusBar style="light" />
                <View style={{ width: wp('60%'), height: wp('60%'), borderRadius: wp('40%'), backgroundColor: 'rgba(255, 255, 255, 0.2)', justifyContent: 'center', alignItems: 'center', padding: wp('5%') }}>
                    <View style={{ width: wp('62%'), height: wp('62%'), borderRadius: wp('36%'), backgroundColor: 'rgba(255, 255, 255, 0.2)', justifyContent: 'center', alignItems: 'center', padding: wp('5%') }}>
                        <Image source={require('../../assets/images/logo.png')} style={{ width: wp('60%'), height: wp('60%'), borderRadius: wp('30%') }} />
                    </View>
                </View>
            </View>
        </TailwindProvider>
    );
}
