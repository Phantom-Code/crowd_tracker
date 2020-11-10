import React from "react";
import { Button, View, StyleSheet } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const LOCATION_TASK_NAME = "bg-location";
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

export default class TestLoc extends React.Component {
  async componentDidMount() {
    this.getLocationasyc();
    this.getLoctionServiceStat();
  }
  getLoctionServiceStat = async () => {
    const status = await Location.hasServicesEnabledAsync();
    console.log(status);
    if (!status) {
      alert("enable location");
      //message to enable or quit // use Modal
    }
  };
  getLocationasyc = async () => {
    const { status } = await Location.requestPermissionsAsync();

    if (status === "granted") {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 6000,
        foregroundService: {
          notificationTitle: "Location Access",
          notificationBody: "Access location in background for latest updates",
        },
        pausesUpdatesAutomatically: false,
      });
    } else {
      console.log("denied location");
      //message to enable or quit // use Modal
    }
  };

  stop = async () => {
    // await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
    console.log("Stopped");
  };

  render() {
    return (
      <View style={{ margin: 50 }}>
        <Button title="Stop" onPress={this.stop} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
