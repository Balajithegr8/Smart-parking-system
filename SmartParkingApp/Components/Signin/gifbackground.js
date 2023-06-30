import React from 'react';
import {View, Image, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

const GifBackground = () => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/backgroud.gif')}
                style={styles.gif}
                resizeMode="cover"
            />
            <View style={styles.container2}>
                <View style={styles.container3}>
                <Text style={styles.texth}>
                    Login
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>
                </View>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    gif: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    container2: {
        flex: 1,
        backgroundColor: 'transparent',
        width : '80%',
        height : '50%',
        marginLeft : '10%',
        marginTop : '30%',
        marginBottom : '30%',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#E6E6E6',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 16,
    },
    forgotPassword: {
        width: '80%',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: 'white',
        fontSize: 16,
    },
    loginButton: {
        width: '80%',
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    texth: {
        color: 'white',
        marginBottom : 20,
        fontSize: 40,
        fontWeight: 'bold',
    },
    container3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius : 50,
        borderWidth : 1,
    }
});

export default GifBackground;
