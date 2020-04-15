import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import AppNavigator from "./app/navigation/SwitchNav"
import Colors from "./app/modules/Colors";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.appBarColor} />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});























