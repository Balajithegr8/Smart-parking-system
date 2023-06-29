import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet ,TouchableOpacity ,Image} from 'react-native';
import moment from 'moment';
import Bell from "../../assets/bell.svg"

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
        borderBottomColor : "#C5B9AD",
        paddingBottom : 10,
        borderBottomWidth : 1,
    },
    Text1 : {
        fontSize : 16,
    },
    Text2 : {
        fontSize : 24,
        fontWeight : 'bold',
    },
    date : {
        fontSize : 16,
        color : "#7F7A75",
        fontWeight : 'bold',

    }
});

export default DHeader;