import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons
import ProfileC from "./ProfileC";
const ProfileDetails = () => {
  const handleRequestParking = () => {
    // Handle the logic for requesting parking here
  };

  return (
    <>
      <View style={styles.container1}>
        <View style={styles.container}>
        <Text>
          <Icon name="user" size={50} color="#fff" /> {/* Replace 'user' with the desired icon name */}
        </Text>
        </View>
        <ProfileC property = "Name   " name="Balaji P"/>
        <ProfileC property = "Email  " name="br8911"/>
        <ProfileC property = "Office  " name="Office"/>
        <ProfileC property = "Vehicals" name="YHTHG"/>
        <ProfileC property = "Balance " name="   300"/>
      </View>
      <TouchableOpacity>
        <View style={styles.container2}>
          <Text style={styles.text1}>
            Add Wallet Balance
          </Text>
        </View>
      </TouchableOpacity>

    </>
  );
};
const styles = StyleSheet.create({
  container1 : {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#262626'
  },
  container: {
    marginTop : '5%',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#1F1F1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2 :{
    backgroundColor : '#4886FF',
    width : '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft : '20%',
    marginTop : '10%',
    height : '22%',
    borderRadius : 10,
  },
  text1 : {
    color : '#FFFFFF',
    fontWeight : 'bold',
  }
});

export default ProfileDetails;
