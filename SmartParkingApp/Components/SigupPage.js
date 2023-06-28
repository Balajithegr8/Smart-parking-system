import React from 'react';
import { View, Text, TextInput, StyleSheet ,TouchableOpacity } from 'react-native';

const SignupPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign into Park+</Text>
      <Text style={styles.subTitle}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#FFFFFF"

      />
      <Text style={styles.subTitle}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#FFFFFF"
        secureTextEntry={true}
      />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft : '16%',

  },
  subTitle : {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
    marginLeft : '15%',
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: '#000000',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#0496FF',
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
    backgroundColor: '#000000',
    borderWidth: 2,
    borderColor: '#0094FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft : '10%',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default SignupPage;
