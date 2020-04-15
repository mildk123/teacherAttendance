import React, { Component } from "react";
import { Text, View } from "react-native";
import { RefreshControl } from "react-native";

import Timeline from 'react-native-timeline-listview'
import Colors from "../modules/Colors";

export class TimelineComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false,
      data: [
        {
          time: "18 Sep",
          title: "Computer",
          description: "Read from pages 5 to 15"
        },
        {
          time: "18 Apr",
          title: "Science",
          description: "Read from pages 5 to 15"
        },
        {
          time: "18 Apr",
          title: "Mathematics",
          description: "Perform exercise #1.3 in your h/w copy"
        },
        {
          time: "18 Apr",
          title: "English",
          description: "Write down the summary of the story Prisoner of Zenda",
        }
      ]
    };
  }

  onRefresh() {
    //set initial data
    alert("Latest Data will be fetched from server");
  }

  onEndReached() {
    //fetch next data
  }

  render() {
    return (
      <Timeline
        data={this.state.data}
        circleSize={25}
        innerCircle={"dot"}
        circleColor={Colors.appBarColor}
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{ minWidth: 50, maxWidth: 50 }}
        separator={true}
        lineWidth={3}
        listViewStyle={{ margin: 10 }}
        timeStyle={{
          textAlign: "center",
          fontSize: 15,
          backgroundColor: "#ff9797",
          color: "white",
          fontWeight: "700",
          padding: 5,
          height: 50,
          borderRadius: 100
        }}
        descriptionStyle={{ color: "gray" }}
        options={{
          removeClippedSubviews: false,
          refreshControl: (
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh}
            />
          )
        }}
      />
    );
  }
}

export default TimelineComp;
