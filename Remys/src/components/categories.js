import React from 'react';
import { View, ScrollView, Text, Pressable, Image } from 'react-native';
import { categoryData } from "../constants";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Animated, {FadeInDown} from 'react-native-reanimated';

export default function Categories({ activeCategory, setActiveCategory }) {
    return (
        <Animated.View entering={FadeInDown.duration(500)}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 30 }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {categoryData.map((category, index) => {
                    const isActive = activeCategory === category.name;
                    const activeBackgroundColor = isActive ? '#394e7d' : '#282221';

                    return (
                        <View key={index} style={{ marginRight: 20 }}>
                            <Pressable
                                onPress={() => setActiveCategory(category.name)}
                                style={({ pressed }) => [
                                    { opacity: pressed ? 0.6 : 1, borderRadius: 999 },
                                    { backgroundColor: isActive ? '#394e7d' : '#282221' }
                                ]}
                            >
                                <View style={{ width: wp('20%'), height: wp('20%'), borderRadius: 999, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={{ uri: category.image }}
                                        style={{ width: '100%', height: '100%', borderRadius: 999 }}
                                        resizeMode="cover"
                                    />
                                </View>
                            </Pressable>
                            <Text style={{ marginTop: 5, textAlign: 'center', color: isActive ? '#394e7d' : '#282221', fontWeight: '600' }}>{category.name}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </Animated.View>
    );
}
