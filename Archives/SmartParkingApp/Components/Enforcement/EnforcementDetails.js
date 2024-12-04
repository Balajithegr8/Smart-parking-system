import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const EnforcementDetails = (props) => {
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
        <View style={styles.fineContainer}>
          <Text style={styles.fineText}>{props.fine}</Text>
          <TouchableOpacity onPress={handleRequestParking}>
          <Text style={styles.fineText2}>{props.type}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '15%',
    backgroundColor: '#262626',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#FF0000',
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
  fineContainer: {
    marginTop : 20,
    backgroundColor : "#1F1F1F",
    width : 65,
    height : 50,
    justifyContent : 'center',
    alignContent : 'center',
  },
  fineText: {
    fontSize: 16,
    flexDirection: 'column',
    color: '#FFFFFF',
    marginLeft : 6,
  },
  fineText2: {
    fontSize: 16,
    flexDirection: 'column',
    marginLeft : 15,
    color : 'red',
  },
});

export default EnforcementDetails;
