import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import {mealData} from "../constants";

export default function Recipes() {
    return (
        <View style={{ marginHorizontal: 16, marginVertical: 12 }}>
            <Text style={{ fontSize: hp(3), fontWeight: 600, color: '#282221' }} >Recipes</Text>
            <View>
                <MasonryList
                    data={mealData}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, i}) => <RecipeCard item={item} index={i} />}
                    onEndReachedThreshold={0.1}

                />
            </View>
        </View>
    );
}

const RecipeCard = ({item, index}) => {
    let isEven = index % 2 === 0;
    return (
        <View>
            <Pressable
                style={{
                    width: '100%',
                    paddingLeft: isEven ? 0 : 8,
                    paddingRight: isEven ? 8 : 0,
                    justifyContent: 'center',
                    flex: 1,
                    marginBottom: 4,
                    paddingVertical: 1,
                }}
            >
                <Image
                    source={{ uri: item.strMealThumb }}
                    style={{
                        width: '100%',
                        height: index%3==0? hp(25): hp(35),
                        backgroundColor: '#282221',
                        borderRadius: 35,
                    }}
                />
                <Text style={{ marginTop: 5, textAlign: 'center', color: '#282221', fontWeight: '600' }}>
                    {item.name.length>20? item.name.slice(0,20)+'...':item.name}
                 </Text>
            </Pressable>
        </View>
    );
};