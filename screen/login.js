import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import Axios for making HTTP requests
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = async () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else {
      setPasswordError("");
    }

    try {
      // Make HTTP POST request to the login PHP script
      const response = await axios.post('http://your-domain.com/login.php', {
        email,
        password,
      });

      if (response.data.success) {
        // Login successful
        // Redirect or navigate to the home screen
        console.log("Login successful");
      } else {
        // Login failed
        console.log("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.formContainer}
    >
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          value={email}
          placeholder="Enter your email"
          placeholderTextColor="#FFFFFF"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setPassword(value)}
            value={password}
            placeholder="Enter your password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
            <Icon name={passwordVisible ? "eye-slash" : "eye"} size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={!email || !password}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.link}>Create account</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 50,
    color: 'black',
    textShadowColor: 'rgba(0, 0, 200, 0.35)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 23,
  },
  input: {
    color: "#FFFFFF",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 18,
    fontSize: 16,
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
  },
  error: {
    color: "#FF0000",
    fontSize: 14,
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  button: {
    borderRadius: 8,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 26,
    width: 300,
    backgroundColor: '#5D5FDE',
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: "#FFFFFF",
    fontSize: 16,
    textDecorationLine: "underline",
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  eyeIcon: {
    padding: 1,
  },
});

export default LoginForm;
