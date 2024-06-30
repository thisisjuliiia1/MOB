import React from 'react';
import { View, ScrollView, Text, Pressable, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CachedImage } from '../helpers/image';

export default function Categories({ categories, activeCategory, handleChangeCategory }) {
    return (
        <Animated.View entering={FadeInDown.duration(500)}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 30 }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {categories.map((category, index) => {
                    const isActive = activeCategory === category.strCategory;
                    const backgroundColor = '#282221'; // Dark background color for all categories
                    const size = isActive ? wp('22%') : wp('20%'); // Adjust size for active category

                    return (
                        <View key={index} style={{ marginRight: 20 }}>
                            <Pressable
                                onPress={() => handleChangeCategory(category.strCategory)}
                                style={({ pressed }) => [
                                    { opacity: pressed ? 0.6 : 1, borderRadius: 999 },
                                    { backgroundColor }
                                ]}
                            >
                                <View style={{ width: size, height: size, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                    <CachedImage
                                        uri={category.strCategoryThumb }
                                        style={{ width: '100%', height: '100%', borderRadius: 100 }}
                                        resizeMode="cover"
                                    />
                                </View>
                            </Pressable>
                            <Text style={{ marginTop: 5, textAlign: 'center', color: '#282221', fontWeight: '600' }}>{category.strCategory}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </Animated.View>
    );
}
