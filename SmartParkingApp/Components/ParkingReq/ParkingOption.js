import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ParkingOption = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container3}>
                <TouchableOpacity style = {styles.container2}>
                    <Text style = {{color : 'white', fontSize : 20, marginRight : '50%',}}>Office</Text>
                    <Text style={{ color: '#50ABFF', fontSize: 20 }}>Paid Office</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity style = {styles.container2}>
                    <Text style = {{color : 'white', fontSize : 20, marginRight : '35%'}}>Parking Lot</Text>
                    <Text style={{ color: '#50ABFF', fontSize: 20 }}>Paid Parking</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity style = {styles.container2}>
                    <Text style = {{color : 'white', fontSize : 20, marginRight : '38%'}}>Vehicle</Text>
                    <Text style={{ color: '#50ABFF', fontSize: 20 }}>YHTHG (small)</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container3}>
            <TouchableOpacity style={styles.container2}>
                <Text style={{ color: 'white', fontSize: 20, marginRight: '38%' }}>Duration</Text>
                <Text style={{ color: '#50ABFF', fontSize: 20 }}>15/OCT . . . . .</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'black',
        paddingBottom : 20,
    },
    container3: {
        marginTop : 20,
        height : 60,
        width : '100%',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#1F1F1F',
        borderTopWidth: 1,
        borderColor: "#433C3C"
    },
});

export default ParkingOption;
