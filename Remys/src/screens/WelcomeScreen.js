import React, {useEffect} from 'react';
import { View, Image, StatusBar } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {useNavigation} from "@react-navigation/native";

export default function WelcomeScreen() {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 2500);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#394e7d' }}>
            <StatusBar style="dark" />
            <View style={{ width: wp('60%'), height: wp('60%'), borderRadius: wp('30%'), backgroundColor: 'rgba(255, 255, 255, 0.2)', justifyContent: 'center', alignItems: 'center', padding: wp('5%') }}>
                <Image source={require('../../assets/images/logo.png')} style={{ width: '100%', height: '100%', borderRadius: wp('30%') }} resizeMode="cover" />
            </View>
        </View>
    );
}
