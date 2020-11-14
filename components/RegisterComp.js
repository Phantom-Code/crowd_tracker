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
import login_style from "../stylesheets/login_style";
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
            .then(function (result) {
              console.log(result.user.uid);
              firebase
                .database()
                .ref("/users/" + result.user.uid)
                .set({
                  mail: result.user.email,
                  createdAt: Date.now(),
                });
            })
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
    <KeyboardAvoidingView behavior="height" style={login_style.container}>
      <ScrollView>
        <Text style={login_style.title}>Sign Up</Text>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={login_style.register_text}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={navigateToLogin}>
            <Text style={login_style.register_text_link}> Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={login_style.text_input_title}>Email</Text>
        <TextInput
          style={login_style.text_input}
          placeholder="Enter your email address"
          placeholderTextColor="#8b8aa9"
          onChangeText={(email) => setEmail(email)}
          defaultValue={email}
          defaultValueColor="#FF0000"
          color="#FFF"
        />
        <Text style={login_style.text_input_title}>Password</Text>
        <TextInput
          style={login_style.text_input}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor="#8b8aa9"
          color="#FFF"
          onChangeText={(password) => setPass(password)}
        />
        <Text style={login_style.text_input_title}>Confirm Password</Text>
        <TextInput
          style={login_style.text_input}
          secureTextEntry={true}
          placeholder="confirm password"
          placeholderTextColor="#8b8aa9"
          color="#FFF"
          onChangeText={(c_password) => setConfirmPass(c_password)}
        />
        <TouchableOpacity style={login_style.btn} onPress={signUp}>
          <Text style={login_style.btn_text}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
