import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileHeader = () => {
  return (
  <>
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.container2}>
          <Text style={styles.text1}>Profile</Text>
          <Text style={styles.text2}>View and Edit your Profile</Text>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity style={styles.container6}>
            <Icon name="bell" size={24} backgroundcolor={"blue"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={styles.container4}>
    <Text style={styles.text4}>Balaji P</Text>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  container6: {
    backgroundColor: '#3366CC',
    borderRadius: 8,
    padding: 10,
  },
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
    marginLeft: '40%',
    marginTop: '3%',
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

export default ProfileHeader;
