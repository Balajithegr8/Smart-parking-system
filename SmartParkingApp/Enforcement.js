import React from 'react';
import { View, StyleSheet } from 'react-native';
import EnforcementHeader from './Components/Enforcement/EnforcementHeader';
import BottomNavBar from './Components/BottomNavBar';
import EnforcementDetails from './Components/Enforcement/EnforcementDetails';

const Enforcement = () => {
    return (
    <View style={styles.container}>
    <EnforcementHeader/>
    <View style = {styles.container1}>
    <EnforcementDetails info="Wrong Parking Slot" time= "4:15 PM - 04:30 PM" date = "23 OCT 2023" fine = "100Rs" type = "PAY"/>
        <EnforcementDetails info="Wrong Parking Slot" time= "4:15 PM - 04:30 PM" date = "23 OCT 2023" fine = "100Rs" type = "PAY"/>
        <EnforcementDetails info="Wrong Parking Slot" time= "4:15 PM - 04:30 PM" date = "23 OCT 2023" fine = "100Rs" type = "PAY"/>
        <EnforcementDetails info="Wrong Parking Slot" time= "4:15 PM - 04:30 PM" date = "23 OCT 2023" fine = "100Rs" type = "PAY"/>
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
