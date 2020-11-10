import React from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import * as firebase from "firebase";
export default class Loading extends React.Component {
  componentDidMount() {
    this.isLoggedIn();
  }
  isLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("backgroundlocation");
      } else {
        this.props.navigation.navigate("login");
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#010101",
  },
});
