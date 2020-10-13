import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Logo from "../assets/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.register_text}>
          Don’t have an account ? Register here
        </Text>
        <Text style={styles.text_input_title}>Email</Text>
        <TextInput
          style={styles.text_input}
          placeholder="Enter your email address"
          placeholderTextColor="#8b8aa9"
          onChangeText={(email) => setEmail(email)}
          defaultValue={email}
          defaultValueColor="#FF0000"
          color="#FFF"
        />
        <Text style={styles.text_input_title}>Password</Text>
        <TextInput
          style={styles.text_input}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor="#8b8aa9"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "18%",
    // paddingBottom: "10%",
    backgroundColor: "#010101",
  },
  logo: {
    alignSelf: "center",
    marginBottom: "10%",
  },
  title: {
    fontSize: 32,
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },

  register_text: {
    fontSize: 15,
    color: "#FFF",
    alignSelf: "center",
    marginBottom: 15,
  },
  text_input_title: {
    color: "#FFF",
    left: "10%",
    fontSize: 20,
    marginBottom: 12,
  },
  text_input: {
    backgroundColor: "#2E2E31",
    borderRadius: 10,
    left: "10%",
    width: "80%",
    height: 40,
    marginBottom: 12,
    textAlign: "center",
  },
  btn: {
    left: "10%",
    backgroundColor: "#1C17F3",
    width: "80%",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    marginTop: 15,
  },
  btn_text: {
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "bold",
  },
});
export default Login;
