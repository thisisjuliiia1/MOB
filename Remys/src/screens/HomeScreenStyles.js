import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfecee',
    },
    scrollView: {
        paddingTop: 14,
    },

    greetingText: {
        marginLeft: 20,
        fontWeight: '400',
        color: '#282221',
        fontSize: wp('4%'),
        marginBottom: 10,
    },
    mainText: {
        fontWeight: '600',
        marginLeft: 20,
        color: '#282221',
        fontSize: wp('6%'),
    },
    searchBarContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#282221',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 9999,
        width: '70%',
    },
    searchIcon: {
        height: hp(2),
        width: hp(2),
        marginRight: 10,
    },
    searchInput: {
        color: '#dfecee',
        flex: 1,
    },
    likedRecipesButtonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    likedRecipesButton: {
        backgroundColor: '#394e7d',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    likedRecipesButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
