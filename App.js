import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";
// import BFetch from "./components/BackgroundLocationComp";
import Login from "./components/LoginComp";
import Register from "./components/RegisterComp";
import Dashboard from "./components/DashboardComp";
import Loading from "./components/LodingComp";
// import GeofenceComp from "./components/GeofenceComp";
import { firebaseConfig } from "./config";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="loading"
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="loading" component={Loading} />
        <Stack.Screen name="backgroundlocation" component={BFetch} />
        {/* <Stack.Screen name="geofence" component={GeofenceComp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
