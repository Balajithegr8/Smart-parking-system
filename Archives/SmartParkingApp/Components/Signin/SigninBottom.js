import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SigninBottom = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Your Email Address is provided by your company. If any problem persists, contact your organization.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        paddingBottom : '14%',
        alignContent : 'center',
        justifyContent : 'center',
        alignItems : 'center',
    },
    text: {
        width : '70%',
        marginTop : 7,
        color: '#9A9A9A',
        fontSize: 12,
    },
});

export default SigninBottom;
