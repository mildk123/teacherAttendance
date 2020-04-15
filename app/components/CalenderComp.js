import React, { Component } from "react"
import { View, Text, StyleSheet, Alert } from "react-native";
import { Calendar, } from "react-native-calendars";
import { Icon } from "native-base";
import Colors from "../modules/Colors";

class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: "2019-09-11"
      // marked : {
      //     currentDate :
      // }
    };
  }

  render() {
    const { selection } = this.state;
    return (
      <Calendar
        current={this.state.currentDate}
        minDate={"2009-01-01"}
        maxDate={Date()}
        onDayPress={day => {
          alert("selected day", day);
        }}
        monthFormat={"MMMM yyyy"}
        hideArrows={false}
        renderArrow={direction => (
          <Icon
            name={direction == "right" ? "stepforward" : "stepbackward"}
            type="AntDesign"
            style={{ color: Colors.appBarColor }}
          />
        )}
        hideExtraDays={true}
        disableMonthChange={false}
        firstDay={1}
        hideDayNames={true}
        showWeekNumbers={false}
        onPressArrowLeft={substractMonth => substractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        style={{ flex: 1 }}
        markedDates={{
          selection: { selected: true, marked: true }
        }}
      />
    );
  }
}
export default componentName;
