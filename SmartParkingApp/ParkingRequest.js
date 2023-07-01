import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import DHeader from "./Components/Dashboard/DHeader";
import ParkingRequestScreen from "./Components/ParkingReq/ParkingRequestScreen";
import ParkingOption from "./Components/ParkingReq/ParkingOption";
import ParkingCalendar from "./Components/ParkingReq/ParkingCalendar";
import RequestParking from "./Components/ParkingReq/RequestParking";
import { useNavigation } from '@react-navigation/native';

const ParkingRequest = () => {


    return (
        <View style={{ flex: 1 }}>
        <DHeader/>
        <ParkingRequestScreen/>
        <ParkingOption/>
            <ParkingCalendar/>
            <RequestParking/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ParkingRequest
