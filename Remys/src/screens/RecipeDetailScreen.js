import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CachedImage } from '../helpers/image';
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/mini";

export default function RecipeDetailScreen({ route, navigation }) {
    const { item } = route.params;
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <ScrollView
            style={{ backgroundColor: '#dfecee' }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 30 }}
        >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <CachedImage
                    uri={item.strMealThumb}
                    style={{
                        width: wp(98),
                        height: hp(50),
                        borderRadius: 53,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        marginTop: 4,
                    }}
                />
            </View>

            <View style={{
                position: 'absolute',
                top: hp(6),
                left: wp(2),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={hp(4)} color='#282221' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton} onPress={() => setIsFavourite(!isFavourite)}>
                    <HeartIcon size={hp(4)} color={isFavourite ? 'red' : '#282221'} />
                </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: wp(5), marginTop: hp(2) }}>
                <Text style={{ fontSize: wp(5), fontWeight: 'bold', color: '#282221' }}>{item.strMeal}</Text>
            </View>

        </ScrollView>
    );
}

const styles = {
    iconButton: {
        backgroundColor: '#dfecee',
        width: hp(5),
        height: hp(5),
        borderRadius: hp(3),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp(4),
    },
};
