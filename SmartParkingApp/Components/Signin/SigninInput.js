import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SigninInput = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignInWithGoogle = () => {
        console.log('Sign in with Google');
    };

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        navigation.navigate('Dashboard'); // Navigate to the Dashboard screen
    };

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.label}>Email ID</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Email ID"
                    placeholderTextColor="#6A9CFF"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Password"
                    placeholderTextColor="#6A9CFF"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.container3}>
                    <View style={styles.line} />
                    <View style={styles.circleContainer}>
                        <View style={styles.circle}>
                            <Text style={styles.circleText}>OR</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                </View>
            </View>
            <TouchableOpacity style={styles.button2} onPress={handleSignInWithGoogle}>
                <Text style={styles.button2Text}>Sign in with Google</Text>
                <View style={styles.iconContainer}>
                    <Icon name="google" size={20} color="#FFFFFF" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.text2}>Having issues? Report here</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1F1F',
        borderBottomColor: '#898989',
        borderBottomWidth: 1,
        height: '74%',
    },
    container2: {
        backgroundColor: '#262626',
        width: '100%',
        height: '50%',
        marginTop: '10%',
        padding: 20,
    },
    label: {
        marginLeft: '10%',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        marginLeft: '10%',
        height: 40,
        backgroundColor: '#1F1F1F',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        color: 'white',
    },
        button: {
        marginTop: 10,
        width: '80%',
        backgroundColor: '#1F1F1F',
        borderRadius: 10,
        marginLeft: '10%',
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth : 1,
        borderColor : '#6A9CFF',
    },
    buttonText: {
        color: '#6A9CFF',
        fontSize: 20,
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 39,
    },
    line: {
        flex: 1,
        height: 2,
        backgroundColor: '#5D5D5D',
    },
    circleContainer: {
        alignItems: 'center',
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#323232',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    button2: {
        marginTop : 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF1400',
        borderRadius: 8,
        borderColor : "#6A9CFF",
        paddingVertical: 10,
        paddingHorizontal: 15,
        width : '80%',
        marginLeft : '10%',
    },
    iconContainer: {
        marginLeft : 20,
    },
    button2Text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text2 : {
        color : "#6A9CFF",
        marginTop : '10%',
        marginLeft : '28%',
    },

});

export default SigninInput;
