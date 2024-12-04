import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : 100,
        paddingTop : 30,
        backgroundColor : '#000000',
        alignContent : 'center',
        justifyContent : 'center',
    },
    button: {
        backgroundColor: '#50ABFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 20,
        width : '80%',
        marginLeft : '10%',
    },
    buttonText: {
        textAlign : 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    message: {
        textAlign: 'left',
        marginLeft : '10%',
        fontSize: 12,
        color : '#454545',
    },
});

const RequestParking = () => {
    const handleRequestParking = () => {
        // Handle the logic for requesting parking here
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleRequestParking}>
                <Text style={styles.buttonText}>Request Parking</Text>
            </TouchableOpacity>

            <Text style={styles.message}>
                Releasing your space while you are out of office reduces your colleagues' parking stress and maximizes spaces.
                Thank you.
            </Text>
        </View>
    );
};

export default RequestParking;
