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
    logoContainer: {
        marginLeft: 20,
    },

    greetingText: {
        marginLeft: 10,
        fontWeight: '400',
        color: '#282221',
        fontSize: wp('4%'),
        marginBottom: 10,
    },
    mainText: {
        fontWeight: '600',
        marginLeft: 10,
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
});

export default styles;
