import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TextInput } from 'react-native';
import Categories from "../components/categories";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';

export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState('Beef'); // Beispielwert für activeCategory

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
                    <Text style={{ fontWeight: '400', color: '#282221', fontSize: wp('4%'), marginBottom: 10 }}>Hallo Julia!</Text>
                    <Text style={{ fontWeight: '600', color: '#282221', fontSize: wp('6%') }}>Finde hier deine Rezepte!</Text>
                </View>

                {/* Searchbar */}
                <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center', backgroundColor: '#282221', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 9999, width: '70%' }}>
                    <Image source={require('../../assets/icons/Lupe.png')} style={{ height: hp(2), width: hp(2), marginRight: 10 }} />
                    <TextInput
                        placeholder="Suche nach Rezepten"
                        placeholderTextColor="#fff"
                        style={{ color: '#ffffff', flex: 1 }}
                    />
                </View>

                {/* Kategorien */}
                <View style={{ marginTop: 20 }}>
                    <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </View>
            </ScrollView>
        </View>
    );
}
