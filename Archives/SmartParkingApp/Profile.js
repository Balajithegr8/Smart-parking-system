import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileHeader from "./Components/Profile/ProfileHeader";
import BottomNavBar from './Components/BottomNavBar';
import ProfileDetails from "./Components/Profile/ProfileDetails";

const Enforcement = () => {
    return (
        <View style={styles.container}>
            <ProfileHeader/>
            <View style = {styles.container1}>
                <ProfileDetails/>
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
