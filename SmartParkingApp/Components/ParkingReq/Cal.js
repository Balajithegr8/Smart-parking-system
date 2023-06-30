import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';import CalendarScreen from "../Dashboard/CalendarScreen";
const Day = ({ date, selected }) => {
    const day = moment(date).format('D');
    const backgroundColor = selected ? '#4886FF' : '#1F1F1F';
    return (
        <View style={[styles.day, { backgroundColor }]}>
            <Text style={styles.dayText}>{day}</Text>
        </View>
    );
};

const Week = ({ date, selected }) => {
    const day = moment(date).format('ddd');
    const backgroundColor = '#1F1F1F';
    return (
        <View style={[styles.day, { backgroundColor }]}>
            <Text style={styles.WeekText}>{day}</Text>
        </View>
    );
};

const Cal = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startOfWeek, setStartOfWeek] = useState(moment().startOf('week'));

    const translateX = React.useRef(new Animated.Value(0)).current;

    const handlePrevWeek = () => {
        Animated.timing(translateX, {
            toValue: -300,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setStartOfWeek(moment(startOfWeek).subtract(1, 'week'));
            translateX.setValue(0);
        });
    };

    const handleNextWeek = () => {
        Animated.timing(translateX, {
            toValue: 300,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setStartOfWeek(moment(startOfWeek).add(1, 'week'));
            translateX.setValue(0);
        });
    };

    const dates = Array.from({ length: 7 }, (v, i) =>
        moment(startOfWeek).add(i, 'days').toDate()
    );

    const monthYear = moment(startOfWeek).format('MMMM YYYY');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePrevWeek}>
                    <MaterialIcons name="chevron-left" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.monthYearText}>{monthYear}</Text>
                <TouchableOpacity onPress={handleNextWeek}>
                    <MaterialIcons name="chevron-right" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
            <View>
                <Animated.View style={[styles.daysContainer, ]}>
                    {dates.map((date) => (
                        <Week
                            key={date.toString()}
                            date={date}
                            selected={moment(date).isSame(selectedDate, 'day')}
                            onPress={() => setSelectedDate(date)}
                        />
                    ))}
                </Animated.View>
                <Animated.View style={[styles.daysContainer, ]}>
                    {dates.map((date) => (
                        <Day
                            key={date.toString()}
                            date={date}
                            selected={moment(date).isSame(selectedDate, 'day')}
                            onPress={() => setSelectedDate(date)}
                        />
                    ))}
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#1F1F1F',
        paddingTop : 21,
        paddingBottom : 20,
        borderTopWidth : 1,
        borderBottomColor : "#898989",
        borderBottomWidth : 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    monthYearText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',

    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color : '#000000',
    },
    day: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 18,
        height : 36,
    },
    dayText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    WeekText : {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',

    },
    MonthText : {
        paddingTop : 20,
        fontWeight: 'bold',
    },
    AvailCont : {
        borderWidth : 1,
        backgroundColor : '#4886FF',
        alignItems: 'center',
        marginTop : 50,
        width : '90%',
        marginLeft : '5%',
        height : 40,
        borderRadius: 5,
    },
    AvailText : {
        color : '#ffffff',
        fontSize : 16,
        fontWeight : 'bold',
        alignItems: 'center',
        marginTop : 8,
    }
});
export default Cal;