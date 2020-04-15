import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Button, Icon, Text, Body } from "native-base";

import TableRender from "../components/TableRender";

export class TableComp extends Component {
  render() {
    
    return (
      <View style={styles.container}>
          {/* HEADER ................ */}
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Button
            disabled
            iconLeft info
            style={{ width: "33.3333%", borderTopStartRadius: 25 }}
          >
            <Icon type="MaterialCommunityIcons" name="calendar-clock" />
            <Body>
              <Text style={{ textAlign: "center", color: "white" }}>
                Period
              </Text>
            </Body>
          </Button>

          <Button
            disabled
            iconLeft info
            style={{ width: "33.3333%"}}
          >
            <Icon type="MaterialIcons" name="access-time" />
            <Body>
              <Text style={{ textAlign: "center", color: "white" }}>
                Time
              </Text>
            </Body>
          </Button>


          <Button
            disabled
            iconLeft info
            style={{ width: "33.3333%", borderTopEndRadius: 25 }}
          >
            <Icon type="FontAwesome" name="book" />
            <Body>
              <Text style={{ textAlign: "center", color: "white" }}>
                Subject
              </Text>
            </Body>
          </Button>

        </View>
       
        <TableRender renderData={this.props.selectedTable}  />
      </View>
    );
  }
}

export default TableComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },
});
