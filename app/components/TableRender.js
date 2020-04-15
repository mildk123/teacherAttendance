import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Table, Row } from "react-native-table-component";

const TableRender = props => {
  return (
    <Table style={{   
      borderBottomStartRadius : 25, 
      borderBottomEndRadius : 25, 

     overflow: 'hidden',
     }}  borderStyle={{ borderColor: "#b8c5ef"}}>
      {props.renderData.map((rowData, index) => (
        <Row
          key={index}
          data={rowData}
          style={[styles.row, index % 2 && { backgroundColor: "#a5c5ef" }]}
          textStyle={[styles.text]}
        />
      ))}
    </Table>
  );
};

export default TableRender;

const styles = StyleSheet.create({
  row: { backgroundColor: "#FCEBBF", },
  text: { margin: 10, textAlign: "center", fontWeight: "300", fontStyle: 'italic' }
});
