// LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import { FontAwesome, MaterialCommunityIcons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/Ionicons";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home", { name, email });
  };
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or continue with</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../Images/apple.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../Images/Google.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("../Images/fb.jpg")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>
        Haven't an account?{" "}
        <Text style={styles.registerLink} onPress={handleRegister}>
          Register
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 16,
    backgroundColor: "#FAFAFD",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#356899",
    marginBottom: 5, // Adjust space below title if needed
  },
  welcome: {
    fontSize: 24,
    marginVertical: 8,
    color: "#0D0D26",
    fontWeight: "600",
  },
  headline: {
    fontSize: 14,
    color: "#0D0D26",
    fontWeight: "400",
    marginBottom: 40, // Add margin bottom for space below headline
  },
  input: {
    height: 52,
    width: 327,
    color: "#AFB0B6",
    borderRadius: 10,
    borderColor: "#AFB0B6",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    width: 327, // Set the width to 327
    height: 56, // Set the height to 52
    backgroundColor: "#356899", // Set background color for button
    borderRadius: 5, // Add corner radius of 10
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff", // Set text color for button
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    height: 16,
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#AFB0B6",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#AFB0B6",
    fontSize: 13,
  },
  socialIcon: {
    width: 58,
    height: 56,
    resizeMode: "contain",
    backgroundColor: "#ffff",
    borderRadius: 500,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  socialButton: {
    marginHorizontal: 10,
    width: 58,
    height: 56,
    borderRadius: 20,
    backgroundColor: "#FFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    color: "#888",
    textAlign: "center",
  },
  registerLink: {
    color: "#356899",
    fontWeight: "bold",
  },
});

export default LoginScreen;
