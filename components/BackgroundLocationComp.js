//Works when app in background(in recent)
//even device is locked
import React from "react";
import { Button, View } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import * as firebase from "firebase";
const LOCATION_TASK_NAME = "bg-location";

export default class TestLoc extends React.Component {
  async componentDidMount() {
    this.getLocationasyc();
    this.getLoctionServiceStat();
  }
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.stop();
      })
      .catch((error) => {
        // An error happened.
      });
  };
  getLoctionServiceStat = async () => {
    const status = await Location.hasServicesEnabledAsync();
    if (!status) {
      alert("enable location");
      //message to enable or quit // use Modal
    }
  };

  getLocationasyc = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status === "granted") {
      try {
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 60000,
          foregroundService: {
            notificationTitle: "Location Access",
            notificationBody:
              "Access location in background for latest updates",
          },
          pausesUpdatesAutomatically: false,
        });
      } catch (error) {
        console.log("location update error");
      }
    } else {
      console.log("denied location");
      //message to enable or quit // use Modal
    }
  };

  stop = async () => {
    await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
    console.log("Stopped");
  };

  render() {
    return (
      <View style={{ margin: 50 }}>
        <Button title="Stop" onPress={this.stop} />
        <Button title="Logout" onPress={this.logout} />
      </View>
    );
  }
}
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log("Error in Location Fetch Task");
    return;
  }
  if (data) {
    const locations = data;
    var d = Date(locations.timestamp);
    console.log(d);

    // console.log(locations);
  }
});
