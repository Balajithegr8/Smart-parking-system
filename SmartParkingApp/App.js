import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './Dashboard';
import IndexPage from './indexpage';
import ParkingRequest from './ParkingRequest';
import Enforcement from './Enforcement';
import OutOfOffice from './OutOfOffice';
import Profile from './Profile';
import TodayAvail from './TodayAvail';

const App = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Stack.Navigator initialRouteName="IndexPage" mode="modal">
                    <Stack.Screen
                        name="Dashboard"
                        component={Dashboard}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="IndexPage"
                        component={IndexPage}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ParkingRequest"
                        component={ParkingRequest}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Enforcement"
                        component={Enforcement}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="OutOfOffice"
                        component={OutOfOffice}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="TodayAvail"
                        component={TodayAvail}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
