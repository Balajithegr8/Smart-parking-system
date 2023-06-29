import React from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton}>
        <Ionicons name="home-outline" size={24} color="#292725" />
        <Text style={styles.buttonText}>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Ionicons name="warning-outline" size={24} color="#292725" />
        <Text style={styles.buttonText}>Enforcement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={32} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Ionicons name="briefcase-outline" size={24} color="#292725" />
        <Text style={styles.buttonText}>Out of Off Co</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Ionicons name="person-outline" size={24} color="#292725" />
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4886FF',
    justifyContent: 'center',
    alignItems: 'center',
    color : "ffffff",
  },
  buttonText: {
    color: '#292725',
    marginTop: 5,
  },
});

export default BottomNavBar;
