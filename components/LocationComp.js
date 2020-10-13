import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const LOCATION_TASK_NAME = "background-location-task";
export default function Component() {
  const [loc, setLoc] = useState("");
  async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status === "granted") {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Highest,
      });
    }
  };

  TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
      // Error occurred - check `error.message` for more details.

      return;
    }
    if (data) {
      const { locations } = data;
      console.log(locations[0].coords);
      setLoc(
        "latitude:" +
          locations[0].coords.latitude +
          " longitude:" +
          locations[0].coords.longitude
      );
    }
  });
  return (
    <TouchableOpacity style={{ margin: 50 }}>
      <Text> {loc}</Text>
    </TouchableOpacity>
  );
}
