import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity of 0

  const handlePasswordReset = async () => {
    // Check if all fields are filled
    if (!email || !newPassword || !confirmPassword) {
      showError('Please fill all fields');
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      showError('Passwords do not match');
      return;
    }

    try {
      // Make HTTP POST request to the password reset PHP script
      const response = await axios.post('http://your-domain.com/reset_password.php', {
        email,
        newPassword,
      });

      if (response.data.success) {
        // Password reset successful
        setResetSuccess(true);
        showSuccess('Password reset successfully!');
      } else {
        // Password reset failed
        showError(response.data.message);
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      showError('Password reset failed. Please try again.');
    }
  };

  // Function to show error message with animation
  const showError = (message) => {
    setPasswordMatchError(message);
    Animated.timing(
      fadeAnim,
      {
        toValue: 1, // Animate to full opacity
        duration: 1000, // Duration of the animation
        easing: Easing.linear, // Type of animation easing
        useNativeDriver: true, // Improve performance with native driver
      }
    ).start();
  };

  // Function to show success message with animation
  const showSuccess = (message) => {
    setPasswordMatchError('');
    Animated.timing(
      fadeAnim,
      {
        toValue: 1, // Animate to full opacity
        duration: 1000, // Duration of the animation
        easing: Easing.linear, // Type of animation easing
        useNativeDriver: true, // Improve performance with native driver
      }
    ).start();
  };

  return (
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        onChangeText={(text) => setNewPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {passwordMatchError ? (
        <Animated.Text style={[styles.error, { opacity: fadeAnim }]}>{passwordMatchError}</Animated.Text>
      ) : null}
      {resetSuccess && <Animated.Text style={[styles.success, { opacity: fadeAnim }]}>Password reset successfully!</Animated.Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={handlePasswordReset}
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
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
    marginBottom: 25,
    paddingHorizontal: 16,
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  button: {
    backgroundColor: '#5D5FDE',
    paddingVertical: 12,
    borderRadius: 5,
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

export default ForgotPassword;
