import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios'; // Import Axios for making HTTP requests

const CreateAccountScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleCreateAccount = async () => {
    // Check if all fields are filled
    if (!name || !surname || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill all fields');
      setSuccessMessage('');
      return;
    }

    // Check if password matches confirm password
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setSuccessMessage('');
      return;
    }

    try {
      // Make HTTP POST request to the signup PHP script
      const response = await axios.post('http://your-server-ip-or-domain/Foodies/login-Api/register-api.php', {
        name,
        surname,
        email,
        password,
       });

      if (response.data.success) {
        // Signup successful
        setSuccessMessage('Account created successfully');
        setErrorMessage('');
      } else {
        // Signup failed
        setErrorMessage('Signup failed');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('Error during signup');
      setSuccessMessage('');
    }
  };

  return (
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          onChangeText={(text) => setSurname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  button: {
    backgroundColor: '#5D5FDE',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: '#ff9f43',
    marginBottom: 10,
  },
  success: {
    color: '#66bb6a',
    marginBottom: 10,
  },
});

export default CreateAccountScreen;
