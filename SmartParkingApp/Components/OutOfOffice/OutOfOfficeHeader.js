import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const OutOfOfficeHeader = () => {
  return (
      <>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <View style={styles.container2}>
              <Text style={styles.text1}>Out Of Office</Text>
              <Text style={styles.text2}>Record when you don’t need any parking space.</Text>
            </View>
            <View style={styles.container3}>
              <TouchableOpacity>
                <Text style={styles.text3}>Add Timer Off</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.rowContainer2}>
          <View style={styles.container4}>
            <Text style={styles.text4}>Upcoming</Text>
          </View>
          <View style={styles.container5}>
            <Text style={styles.text4}>Past</Text>
          </View>
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
    marginTop: '5%',
  },
  rowContainer2: {
    flexDirection: 'row',
    width: '100%',
    height: '7%',
  },
  container4: {
    flex: 1,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: '#4886FF',
  },
  container5: {
    flex: 1,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'medium',
  },
});

export default OutOfOfficeHeader;
