import React from 'react';
import { View, StyleSheet } from 'react-native';
import OutOfOfficeDetails from "./Components/OutOfOffice/OutOfOfficeDetails";
import BottomNavBar from './Components/BottomNavBar';
import OutOfOfficeHeader from "./Components/OutOfOffice/OutOfOfficeHeader";
const Enforcement = () => {
    return (
        <View style={styles.container}>
            <OutOfOfficeHeader/>
            <View style = {styles.container1}>
                <OutOfOfficeDetails info="Neassa Parking, Sample Office" time= "4:15 PM - 04:30 PM" date = "23 OCT 2023" />
                <OutOfOfficeDetails info="Neassa Parking, Sample Office" time= "4:15 PM - 04:30 PM" date = "23 OCT 2023" />
            </View>
            <BottomNavBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        backgroundColor: '#1F1F1F',
        height : '68%',
    }
});

export default Enforcement;
