import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Dashboard from './Dashboard';
import Indexpage from "./indexpage";
import ParkingRequest from "./ParkingRequest";

const App = () => {
  return (
    <View style={styles.container}>
          <ParkingRequest/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
