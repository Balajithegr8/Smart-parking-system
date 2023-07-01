import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet ,TouchableOpacity ,Image} from 'react-native';
import moment from 'moment';

const DHeader = (props) => {
    const currentDate = moment().format('dddd DD MMMM YYYY');
    
    return (
        <View style={styles.container}>
            <Text style = {styles.Text1}>
            Welcome, {props.name},
            </Text>
            <Text style = {styles.Text2}>
            My Bookings
            </Text>
            <Text style={styles.date}>{currentDate}</Text>
        </View>
    );
};
const styles =  StyleSheet.create({
    container : {
        paddingTop : '13%',
        paddingLeft : '10%',
        paddingBottom : 10,
        backgroundColor : '#1F1F1F',
        borderBottomColor : "#898989",
        borderBottomWidth : 0.5,
    },
    Text1 : {
        fontSize : 16,
        color : '#ffffff'
    },
    Text2 : {
        fontSize : 24,
        fontWeight : 'bold',
        color : '#ffffff'
    },
    date : {
        fontSize : 16,
        color : "#7F7A75",
        fontWeight : 'bold',

    }
});

export default DHeader;