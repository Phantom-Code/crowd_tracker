import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from "react-native";
import Logo from "../assets/Logo.png";
import * as firebase from "firebase";
export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigateToLogin = () => {
    navigation.navigate("login");
  };
  const signUp = () => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!reg.test(email)) {
      alert("Invalid Email Address");
    } else {
      if (!pass) {
        alert("password can not be blank");
      } else {
        if (pass != confirmPass) {
          alert("password dont match");
        } else {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, pass)
            .catch(function (error) {
              // Handle Errors here.
              // var errorCode = error.code;
              // var errorMessage = error.message;
              // ...
              console.log(error);
            });
        }
      }
    }
    console.log("Signup");
  };
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Sign Up</Text>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={styles.register_text}>Already have an account ?</Text>
          <TouchableOpacity onPress={navigateToLogin}>
            <Text style={styles.register_text_link}> Sign In</Text>
          </TouchableOpacity>
        </View>
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
          color="#FFF"
          onChangeText={(password) => setPass(password)}
        />
        <Text style={styles.text_input_title}>Confirm Password</Text>
        <TextInput
          style={styles.text_input}
          secureTextEntry={true}
          placeholder="confirm password"
          placeholderTextColor="#8b8aa9"
          color="#FFF"
          onChangeText={(c_password) => setConfirmPass(c_password)}
        />
        <TouchableOpacity style={styles.btn} onPress={signUp}>
          <Text style={styles.btn_text}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
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
  register_text_link: {
    fontSize: 15,
    color: "#1C17F3",
    alignSelf: "center",
    marginBottom: 15,
    textDecorationLine: "underline",
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
