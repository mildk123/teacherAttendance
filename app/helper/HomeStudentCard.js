import React, { Component } from "react"
import { Text, View, Image } from "react-native";
import Colors from "../modules/Colors";

export class HomeStudentCard extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: Colors.appBarColor,
          height: 150,
          padding: 10,
          margin: 20,
          flexDirection: "row",
          borderRadius: 20,
          elevation: 10,
          justifyContent: "flex-start"
        }}
      >
        <View style={{ marginHorizontal: 10 }}>
          <Image
            source={require("../assets/images/dummy/dp.jpg")}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              aspectRatio: 1,
              borderRadius: 100
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 23, color: "white" }}>Noor Ahmed</Text>
          <Text style={{ fontSize: 13, color: "white" }}>Section D</Text>
          <Text style={{ fontSize: 13, color: "white", fontStyle: "italic" }}>
            Class X
          </Text>
          <Text style={{ fontSize: 13, color: "white", fontStyle: "italic" }}>
            
            
          </Text>
          <Text style={{ fontSize: 13, color: "white", fontStyle: "italic" }}>
            Gulshan Campus, Karachi
          </Text>
        </View>
      </View>
    );
  }
}

export default HomeStudentCard;
