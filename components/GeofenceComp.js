///later try this when user notification regions set by admin
// import React from "react";
// import { Text, View, Button } from "react-native";
// import * as TaskManager from "expo-task-manager";
// import * as Location from "expo-location";
// import * as firebase from "firebase";
// const GEOFENCE_TASK = "bg-geofence";

// TaskManager.defineTask(
//   GEOFENCE_TASK,
//   ({ data: { eventType, region }, error }) => {
//     if (error) {
//       // check `error.message` for more details.
//       return;
//     }
//     if (eventType === Location.LocationGeofencingEventType.Enter) {
//       console.log("You've entered region:", region);
//     } else if (eventType === Location.LocationGeofencingEventType.Exit) {
//       console.log("You've left region:", region);
//     }
//   }
// );
// export default class GeofenceComp extends React.Component {
//   async componentDidMount() {
//     this.starGeofence();
//   }
//   async starGeofence() {
//     const { status } = await Location.requestPermissionsAsync();
//     if (status === "granted") {
//       await Location.startGeofencingAsync(GEOFENCE_TASK, [
//         { latitude: 18.520655, longitude: 73.8565267, radius: 10 },
//       ]);
//     }
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, margin: 50 }}>
//         <Text>Geofence Component</Text>
//       </View>
//     );
//   }
// }
