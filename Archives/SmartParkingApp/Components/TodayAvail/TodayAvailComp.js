import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TodayAvailComp = (props) => {
    return (
        <View style={styles.container}>
        <Text style = {styles.text1}>
            {props.name}
        </Text>
            <View style={styles.container2}>
                <View style={styles.container3}>
                <Text style = {styles.text2}>
                Available Slots : {props.aslot}
                    </Text>
                    <Text style = {styles.text2}>
                    Parked Vehicals : {props.pslot}
                    </Text>
                </View>
                <View style={styles.container4}>
                <Text style={styles.text3}>
                    Chances
                </Text>
                    <Text style={styles.text4}>
                        {props.chance}
                    </Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop : '5%',
        flexDirection : 'column',
    },
    container2: {
        backgroundColor: '#1F1F1F',
        flexDirection : 'row',
        width : '80%',
        marginLeft : '10%',
    },
    container3: {
        flexDirection : 'column',
        marginBottom : '5%',
    },
    text1: {
        marginLeft : '10%',
        fontSize: 24,
        fontWeight : 'bold',
        color : 'white',
        marginBottom : '5%',
    },
    text2: {
        fontWeight : 'bold',
      color : '#6A9CFF',
        marginLeft : '10%',
        fontSize: 16,
        marginTop : '5%',
    },
    text3: {
      fontWeight : 'bold',
        color : '#6A9CFF',
        fontSize: 16,
        marginLeft : '10%',
    },
    text4: {
        color : '#00FF0A',
        marginLeft : '25%',
        fontWeight : 'bold',
        fontSize: 16,
    },
    container4 : {
        flexDirection : 'column',
        alignContent : "center",
        justifyContent : "center",
    }
});

export default TodayAvailComp;