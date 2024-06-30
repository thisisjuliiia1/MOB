import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { CachedImage } from '../helpers/image';
import { useNavigation } from '@react-navigation/native';

export default function Recipes({ meals }) {
    const navigation = useNavigation();
    return (
        <View style={{ marginHorizontal: 16, marginVertical: 12 }}>
            <Text style={{ fontSize: hp(3), fontWeight: '600', color: '#282221', marginBottom: 8 }}>Recipes</Text>
            <MasonryList
                data={meals}
                keyExtractor={(item) => item.idMeal}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, i }) => <RecipeCard item={item} index={i} navigation={navigation} />}
                onEndReachedThreshold={0.1}
            />
        </View>
    );
}

const RecipeCard = ({ item, index, navigation }) => {
    const isEven = index % 2 === 0;

    return (
        <Animated.View entering={FadeInDown.duration(600).delay(index * 100)}>
            <Pressable
                style={{
                    flex: 1,
                    width: '100%',
                    paddingLeft: isEven ? 0 : 8,
                    paddingRight: isEven ? 8 : 0,
                    marginBottom: 20,
                }}
                onPress={() => navigation.navigate('RecipeDetail', { item: item })}
            >
                <CachedImage
                    uri={item.strMealThumb}
                    style={{
                        width: '100%',
                        height: index % 3 === 0 ? hp(25) : hp(35),
                        borderRadius: 12,
                        marginBottom: 8,
                    }}
                    resizeMode="cover"
                />
                <Text style={{ marginTop: 5, textAlign: 'left', color: '#282221', fontWeight: '600' }}>
                    {item.strMeal.length > 20 ? item.strMeal.slice(0, 20) + '...' : item.strMeal}
                </Text>
            </Pressable>
        </Animated.View>
    );
};
