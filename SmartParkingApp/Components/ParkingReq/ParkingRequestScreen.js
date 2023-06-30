import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ParkingRequestScreen = () => {
    const handleCancelButtonPress = () => {
        // Handle cancel button press logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Parking Request</Text>
                <TouchableOpacity onPress={handleCancelButtonPress}>
                    <Icon name="times" size={28} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1F1F1F',
        borderTopWidth : 1,
        borderTopColor : '#898989',
    },
    title: {
        fontSize: 28,
        color : '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default ParkingRequestScreen;
