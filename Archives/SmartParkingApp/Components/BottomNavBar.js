import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = () => {
    const navigation = useNavigation();
    const [activeScreen, setActiveScreen] = useState('Dashboard');

    const navigateToScreen = (screenName) => {
        setActiveScreen(screenName);
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigateToScreen('Dashboard')}
            >
                <Ionicons
                    name="home-outline"
                    size={24}
                    color={activeScreen === 'Dashboard' ? '#898989' : '#898989'}
                />
                <Text style={styles.buttonText}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigateToScreen('Enforcement')}
            >
                <Ionicons
                    name="warning-outline"
                    size={24}
                    color={activeScreen === 'Enforcement' ? '#898989' : '#898989'}
                />
                <Text style={styles.buttonText}>Enforcement</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigateToScreen('ParkingRequest')}
            >
                <Ionicons name="add" size={32} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigateToScreen('OutOfOffice')}
            >
                <Ionicons
                    name="briefcase-outline"
                    size={24}
                    color={activeScreen === 'OutOfOffice' ? '#898989' : '#898989'}
                />
                <Text style={styles.buttonText}>Out of Off Co</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigateToScreen('Profile')}
            >
                <Ionicons
                    name="person-outline"
                    size={24}
                    color={activeScreen === 'Profile' ? '#898989' : '#898989'}
                />
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
        backgroundColor: '#1F1F1F',
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
        color: 'ffffff',
    },
    buttonText: {
        color: '#898989',
        marginTop: 5,
    },
});

export default BottomNavBar;
