import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TodayAvailComp from "./TodayAvailComp";
import TodayAvailBack from "./TodayAvailBack";
const TodayAvailBody = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <TodayAvailComp name="Tech Park" aslot = "58" pslot = "114" chance="60%"/>
                <TodayAvailComp name="Faculty Parking" aslot = "58" pslot = "114" chance="10%"/>
                <TodayAvailComp name="Main Campus" aslot = "58" pslot = "114" chance="50%"/>
            </View>
                <TodayAvailBack/>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#1F1F1F',
    },
    container2: {
        height : '70%',
        marginTop: '10%',
        backgroundColor: '#262626',
        width: '100%',
    }
});

export default TodayAvailBody;