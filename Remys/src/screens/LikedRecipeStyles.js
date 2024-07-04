import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

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

    header: {
        fontWeight: '600',
        marginLeft: 20,
        color: '#282221',
        fontSize: wp('6%'),
        marginBottom: 10,
    },
    noRecipesText: {
        fontSize: wp('4%'),
        textAlign: 'center',
        marginVertical: 20,
    },
    recipeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 10,
        margin: 20,
        borderRadius: 8,
        marginVertical: 8,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
