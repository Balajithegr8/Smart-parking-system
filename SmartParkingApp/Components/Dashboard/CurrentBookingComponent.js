import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CurrentBookingComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shadowContainer}>
        <Text style={styles.parkingText}>Neassa Parking, Sample Office</Text>
        <Text style={styles.timeText}>04:15 PM - 04:30 PM</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Released</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>YHTHG</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.shadowContainer}>
        <Text style={styles.parkingText}>Neassa Parking, Sample Office</Text>
        <Text style={styles.timeText}>04:15 PM - 04:30 PM</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Released</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>YHTHG</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor : '#1F1F1F',
    paddingTop : 20,
    borderTopWidth : 1,
    borderBottomColor : "#898989",
    borderBottomWidth : 1,
  },
  shadowContainer: {
    backgroundColor: '#262626',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    width : '90%',
    borderLeftWidth : 5,
    borderLeftColor : 'red',
    marginBottom : 30,
  },
  parkingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color : '#898989',
  },
  timeText: {
    fontSize: 16,
    marginBottom: 20,
    color : '#898989',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    width : 80,
    marginRight : 20,
    alignItems: 'center',
    backgroundColor : '#EBAFAF',
  },
  buttonText: {
    fontSize: 12,
    color : 'red',
  },
});

export default CurrentBookingComponent;
