import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfecee',
        padding: 20
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        color: '#282221',
        marginVertical: 10
    },
    picker: {
        height: 50,
        width: 200,
        alignSelf: 'center',
        color: '#282221'
    },
    calendar: {
        marginBottom: 10
    },
    modalContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#dfecee'
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 20,
        marginTop: 40,
        textAlign: 'center',
        color: '#282221'
    },
    recipeItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    recipeText: {
        color: '#282221'
    },
    closeButton: {
        padding: 10,
        backgroundColor: '#394e7d',
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center'
    },
    closeButtonText: {
        color: '#dfecee',
        fontSize: 16
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
        color: '#282221',
        flex: 1
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#394e7d',
        padding: 10,
        borderRadius: 8,
        marginVertical: 8,
        alignSelf: 'center'
    },
    addButtonText: {
        color: '#fff',
        marginLeft: 5,
        fontSize: 16
    }
});

export default styles;
