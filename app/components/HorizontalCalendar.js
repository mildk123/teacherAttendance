import React, { Component } from "react";
import { Text, View } from "react-native";

import CalendarStrip from "react-native-calendar-strip";
import Colors from "../modules/Colors";

class HorizontalCalendar extends Component {
  render() {
    return (
      <CalendarStrip
        calendarAnimation={{ type: "sequence", duration: 30 }}
        daySelectionAnimation={{
          type: "border",
          duration: 100,
          borderWidth: 2,
          borderHighlightColor: Colors.appBarColor
        }}
        style={{
          height: 120,
          paddingTop: 10,
        }}
        calendarHeaderStyle={{ color: "grey", fontStyle: 'italic', }}
        calendarColor={Colors.brandWhite}
        dateNumberStyle={{ color: "grey", }}
        dateNameStyle={{ color: "grey" }}
        highlightDateNumberStyle={{ color: "grey" }}
        highlightDateNameStyle={{ color: "grey" }}
        onDateSelected={date => console.log(date._d)}
      />
    );
  }
}

export default HorizontalCalendar;
