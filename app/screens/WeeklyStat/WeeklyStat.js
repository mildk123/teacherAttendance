import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Button, Text} from 'native-base';
import Colors from '../../modules/Colors';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

class WeeklyStat extends Component {
  render() {
    return (
      <View style={{flex: 1, padding:20, backgroundColor: Colors.appBarColor}}>
        <View style={{padding: 5}}>
          <Text style={{fontSize: 26, fontWeight: 'bold', color: 'white'}}>
            Weekly Report
          </Text>

          <Text style={styles.instructions}>
            You can view the records of a teacher in form of pie chart.
          </Text>
        </View>

        <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />


      </View>
    );
  }
}

export default WeeklyStat;

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'left',
    color: Colors.appBarTextColor,
    marginBottom: 15,
    fontSize: 16,
  },
  thead: {height: 55, backgroundColor: 'limegreen'},
  tr: {height: 35},
  text: {fontSize: 16, textAlign: 'center'},
  table: {width: '100%'},
});
