import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Dashboard from './Dashboard';
import Indexpage from "./indexpage";
import ParkingRequest from "./ParkingRequest";
import Enforcement from "./Enforcement";
import OutOfOffice from "./OutOfOffice";

const App = () => {
  return (
    <View style={styles.container}>
          <OutOfOffice/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
