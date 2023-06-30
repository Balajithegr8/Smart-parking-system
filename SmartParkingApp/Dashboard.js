import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import DHeader from './Components/Dashboard/DHeader';
import CalendarScreen from './Components/Dashboard/CalendarScreen';
import CurrentBookingComponent from './Components/Dashboard/CurrentBookingComponent';
import BottomNavBar from './Components/BottomNavBar';

const Dashboard = () => {
  return (
    <View style={styles.container}>
          <DHeader name = "Paddy"/>
          <CalendarScreen/>
          <CurrentBookingComponent/>
          <BottomNavBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dashboard;
