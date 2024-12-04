import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

import TodayAvailHead from "./Components/TodayAvail/TodayAvailHead";
import TodayAvailBody from "./Components/TodayAvail/TodayAvailBody";
const TodayAvail = () => {
    return (
        <View style={{ flex: 1 }}>
            <TodayAvailHead/>
            <TodayAvailBody/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default TodayAvail
