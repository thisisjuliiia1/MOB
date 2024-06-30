import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: wp(98),
        height: hp(50),
        borderRadius: 53,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginTop: 4,
    },
    header: {
        position: 'absolute',
        top: hp(6),
        left: wp(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    iconButton: {
        backgroundColor: '#dfecee',
        width: hp(5),
        height: hp(5),
        borderRadius: hp(3),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: wp(4),
    },
    loading: {
        marginTop: 20,
    },
    content: {
        padding: 20,
    },
    mealName: {
        fontWeight: '600',
        color: '#282221',
        fontSize: wp('6%'),
        paddingTop: 20,
    },
    area: {
        fontWeight: '400',
        color: '#282221',
        fontSize: wp('4%'),
        marginTop: 10,
    },
    miscContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    miscItem: {
        backgroundColor: '#394e7d',
        padding: 10,
        borderRadius: 100,
    },
    iconBackground: {
        height: hp(6.5),
        width: hp(6.5),
        backgroundColor: '#dfecee',
        borderRadius: hp(3.25),
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 2,
        marginBottom: 10,
        justifyContent: 'center',
    },
    miscText: {
        fontSize: hp(2),
        fontWeight: '600',
        color: '#dfecee',
        paddingTop: 4,
    },
    miscUnit: {
        fontSize: hp(1.3),
        fontWeight: '600',
        color: '#dfecee',
        paddingTop: 4,
    },

    section: {
        paddingLeft: 20,
    },
    sectionTitle: {
        fontWeight: '600',
        color: '#282221',
        fontSize: wp('6%'),
        paddingTop: 40,
    },

    ingredientItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    bulletPoint: {
        width: 8,
        height: 8,
        backgroundColor: '#394e7d',
        borderRadius: 4,
        marginRight: 8,
    },
    ingredientText: {
        fontSize: hp(2),
        color: '#282221',
    },

    // Instruction item styles
    instructionItem: {
        fontSize: 16,
        marginBottom: 5,
        lineHeight: 24,
    },

});

export default styles;
