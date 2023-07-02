import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const ProfileC = (props) => {
    const handleRequestParking = () => {
        // Handle the logic for requesting parking here
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.container2}>{props.property}</Text>
                <Text style={styles.container3}>{props.name}</Text>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        height: '10%',
        backgroundColor: '#1F1F1F',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop : '3%',
        flexDirection: 'row',

    },
    container2: {
        fontWeight: 'bold',
        color : "#FFFFFF",
        fontSize : 16,
    },
    container3: {
        marginLeft: '30%',
        fontSize : 16,
        color : "#4886FF",
    },
});

export default ProfileC;
