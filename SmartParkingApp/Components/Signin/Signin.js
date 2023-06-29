import React from 'react';
import { View, Text, TextInput, StyleSheet ,TouchableOpacity,Image } from 'react-native';

const SignupPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Text style={styles.title}>Sign into Park+</Text>
      <Text style={styles.subTitle}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#000000"

      />
      <Text style={styles.subTitle}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#000000"
        secureTextEntry={true}
      />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent : 'center',
  },
  container2 : {
    borderColor : "#000000",
    borderWidth : 1,
    width : '80%',
    paddingLeft : '10%',
    marginLeft : '10%',
    paddingTop : '10%',
    paddingBottom : '10%',
    borderRadius : 20,
    backgroundColor : '#2b2d42',
  },
  subTitle : {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
    marginLeft : '15%',
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: '#e5e5e5',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 20,
    textAlign: 'center',
  },
  
  forgotPassword: {
    color: '#0496FF',
    marginTop: 10,
  },
  button: {
    width: '60%',
    height: 45,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft : '10%',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default SignupPage;
