import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const EnforcementHeader = () => {
  return (
  <>
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.container2}>
          <Text style={styles.text1}>Enforcement</Text>
          <Text style={styles.text2}>Record of Parking Violations and Reports</Text>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity>
            <Text style={styles.text3}>Add Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={styles.container4}>
    <Text style={styles.text4}>Reports</Text>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1F1F',
    width: '100%',
    height: '17%',
  },
  rowContainer: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginTop: '15%',
  },
  container2: {
    marginRight: '5%',
  },
  container3: {
    marginLeft: '10%',
    marginTop: '5%',
  },
  container4: {
    backgroundColor: '#262626',
    width: '100%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: '#4886FF',
  },
  text1: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 12,
    color: '#7F7A75',
    fontWeight: 'bold',
  },
  text3: {
    fontSize: 12,
    color: '#4886FF',
    fontWeight: 'bold',
  },
  text4: {
    fontSize : 20,
    color : '#FFFFFF',
    fontWeight : 'medium',
  },
});

export default EnforcementHeader;
