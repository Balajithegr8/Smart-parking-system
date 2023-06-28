import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import RectangularComponent from './Components/RectangularComponent.js';
import SignupPage from './Components/SigupPage.js';
const App = () => {
  return (
    <View style={styles.container}>
      <RectangularComponent />
      <SignupPage/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#000000',
  },
});

export default App;
