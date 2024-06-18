// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, StatusBar } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.topLeftText}>9:41</Text>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.headline}>Let's log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Log in" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 5,
  },
  topLeftText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black', 
    
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#356899',
  },
  welcome: {
    fontSize: 24,
    marginVertical: 8,
    color: '#0D0D26',
    fontWeight: '600',
  },
  headline: {
    fontSize: 14,
    color: '#0D0D26',
    fontWeight:'400',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
