import React from "react";
import { Text, View, Button } from "react-native";
import * as firebase from "firebase";
export default function Dashboard() {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Dashboard</Text>
      <Button title="logout" onPress={logout}></Button>
    </View>
  );
}
