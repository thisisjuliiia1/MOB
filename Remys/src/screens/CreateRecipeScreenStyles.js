import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#dfecee',
    },
    formContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#282221',
        marginBottom: 20,
    },
    input: {
        borderColor: '#282221',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        color: '#282221',
    },
    instructionsInput: {
        height: 150, // Vergrößern Sie das Eingabefeld für die Anweisungen
        textAlignVertical: 'top', // Stellen Sie sicher, dass der Text oben beginnt
    },
    pickerContainer: {
        borderColor: '#282221',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#dfecee',
        height: 50, // Adjust height to make it less tall
        justifyContent: 'center',
    },
    picker: {
        color: '#282221',
        height: 40, // Adjust height to make it less tall
    },
    pickerItem: {
        height: 40, // Adjust height to make it less tall
    },
    button: {
        backgroundColor: '#394e7d',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#dfecee',
        fontSize: 16,
        fontWeight: 'bold',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#394e7d',
        padding: 10,
        borderRadius: 8,
        marginVertical: 8,
        alignSelf: 'center',
    },
    addButtonText: {
        color: '#fff',
        marginLeft: 5,
        fontSize: 16,
    },
    recipeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        justifyContent: 'space-between',
    },
    recipeCardContent: {
        flex: 1,
    },
    recipeTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#282221',
    },

});

export default styles;
