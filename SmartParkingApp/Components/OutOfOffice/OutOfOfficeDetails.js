import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const OutOfOfficeDetails = (props) => {
  const handleRequestParking = () => {
    // Handle the logic for requesting parking here
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{props.info}</Text>
          </View>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.dateTimeText}>{props.time+"  "} {props.date}</Text>
          </View>
        </View>

      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '13%',
    backgroundColor: '#262626',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: '#00FF85',
    borderLeftWidth: 5,
  },
  rowContainer: {
    flexDirection: 'column',
  },
  infoContainer: {
    marginRight: 10,
    marginTop : 15,
  },
  infoText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  dateTimeContainer: {
    marginRight: 30,
    marginTop : 5,
  },
  dateTimeText: {
    fontSize: 16,
    color: '#6C6464',
  },

});

export default OutOfOfficeDetails;
