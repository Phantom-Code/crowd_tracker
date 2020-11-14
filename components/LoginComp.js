import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  View,
} from "react-native";
import * as firebase from "firebase";
import Logo from "../assets/Logo.png";
import login_style from "../stylesheets/login_style";
import { registerTaskAsync } from "expo-background-fetch";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
    };
  }
  navigateToRegister = () => {
    this.props.navigation.navigate("register");
  };

  signIn = () => {
    if (!this.state.email) {
      console.log("not mail");
    } else {
      if (!this.state.pass) {
        console.log("not pass");
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.pass)
          .then(function (result) {
            console.log("login Sucess");
            if (result.additionalUserInfo.isNewUser) {
            } else {
              firebase
                .database()
                .ref("/users/" + result.user.uid)
                .update({
                  lastLogin: Date.now(),
                });
            }
          })
          .catch(
            function (error) {
              console.log("Error in Login", error);
            }.bind(this)
          );
      }
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={login_style.container}>
        <ScrollView>
          <Text style={login_style.title}>Sign In</Text>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={login_style.register_text}>
              Don’t have an account ? Register
            </Text>
            <TouchableOpacity onPress={this.navigateToRegister}>
              <Text style={login_style.register_text_link}> here</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={login_style.text_input_title}>Email</Text>
            <TextInput
              style={login_style.text_input}
              placeholder="Enter your email address"
              placeholderTextColor="#8b8aa9"
              onChangeText={(email) => this.setState({ email: email })}
              defaultValue={this.state.email}
              defaultValueColor="#FF0000"
              color="#FFF"
            />
            <Text style={login_style.text_input_title}>Password</Text>
            <TextInput
              style={login_style.text_input}
              secureTextEntry={true}
              placeholder="password"
              placeholderTextColor="#8b8aa9"
              onChangeText={(password) => this.setState({ pass: password })}
            />
          </View>
          <TouchableOpacity style={login_style.btn} onPress={this.signIn}>
            <Text style={login_style.btn_text}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
