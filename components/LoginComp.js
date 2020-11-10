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
          .then(() => {
            this.props.navigation.navigate("backgroundlocation");
          })
          .catch(function (error) {
            // // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            console.log("Error in sign In", error);
            // ...
          });
      }
    }

    console.log("logn btn");
    this.props.navigation.navigate("backgroundlocation");
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <ScrollView>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.title}>Sign In</Text>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={styles.register_text}>
              Don’t have an account ? Register
            </Text>
            <TouchableOpacity onPress={this.navigateToRegister}>
              <Text style={styles.register_text_link}> here</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.text_input_title}>Email</Text>
          <TextInput
            style={styles.text_input}
            placeholder="Enter your email address"
            placeholderTextColor="#8b8aa9"
            onChangeText={(email) => this.setState({ email: email })}
            defaultValue={this.state.email}
            defaultValueColor="#FF0000"
            color="#FFF"
          />
          <Text style={styles.text_input_title}>Password</Text>
          <TextInput
            style={styles.text_input}
            secureTextEntry={true}
            placeholder="password"
            placeholderTextColor="#8b8aa9"
            onChangeText={(password) => this.setState({ pass: password })}
          />
          <TouchableOpacity style={styles.btn} onPress={this.signIn}>
            <Text style={styles.btn_text}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
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
