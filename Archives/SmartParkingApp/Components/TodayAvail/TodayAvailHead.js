import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
const TodayAvailHead = () => {
    const currentDate = moment().format('dddd DD MMMM YYYY');
    return (
        <>
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <View style={styles.container2}>
                        <Text style={styles.text3}>Welcome Back</Text>
                        <Text style={styles.text1}>Today's Availability</Text>
                        <Text style={styles.text2}>{currentDate}</Text>
                    </View>
                    <View style={styles.container3}>
                        <TouchableOpacity style={styles.container6}>
                            <Icon name="bell" size={24} backgroundcolor={"blue"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container6: {
        backgroundColor: '#3366CC',
        borderRadius: 8,
        padding: 10,
    },
    container: {
        backgroundColor: '#262626',
        width: '100%',
        height: '17%',
    },
    rowContainer: {
        flexDirection: 'row',
        marginLeft: '5%',
        marginTop: '15%',
    },
    container2: {
        marginRight: '5%',
    },
    container3: {
        marginLeft: '20%',
    },
    container4: {
        backgroundColor: '#262626',
        width: '100%',
        height: '7%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderColor: '#4886FF',

    },
    text1: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 12,
        color: '#7F7A75',
        fontWeight: 'bold',
    },
    text3: {
        fontSize: 12,
        color: '#4886FF',
        fontWeight: 'bold',
    },
    text4: {
        fontSize : 20,
        color : '#FFFFFF',
        fontWeight : 'medium',
    },
});

export default TodayAvailHead;
