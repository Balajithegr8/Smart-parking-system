import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const RectangularComponent = () => {
  const screenWidth = Dimensions.get('window').width;

  return <View style={[styles.container, { width: screenWidth, backgroundColor: '#0496FF' }]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    marginTop : 40,
  },
});

export default RectangularComponent;
