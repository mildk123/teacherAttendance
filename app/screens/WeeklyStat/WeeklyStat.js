import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../modules/Colors';
import PureChart from 'react-native-pure-chart';
import {Button, Text, Picker, Icon, Label, Item} from 'native-base';

let sampleData = [
  {
    seriesName: 'nabeel',
    data: [
      {x: 'date1', y: 30},
      {x: 'date2', y: 200},
      {x: 'date3', y: 170},
      {x: 'date4', y: 5},
      {x: 'date3', y: 170},
      {x: 'date4', y: 250},
      {x: 'date3', y: 170},
      {x: 'date4', y: 250},
      {x: 'date5', y: 123},
    ],
    color: Colors.darkAppBarColor,
  },
];

export default class WeeklyStat extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selectedTeacher : ''
    }
  }
  
  onTeacherChange(value) {
    this.setState({
      selectedTeacher: value,
    });
  }

  render() {
    return (
      <View style={{flex: 1, padding: 20, backgroundColor: Colors.appBarColor}}>
        <View style={{padding: 5}}>
          <Text style={{fontSize: 32, fontWeight: 'bold', color: 'white'}}>
            View Statistics
          </Text>
          <Text style={styles.instructions}>
            You can view Statistics of a selected teacher. Select the teachers
            Name/ID from the below dropdown
          </Text>
        </View>
        
        
        <Item style={{marginVertical: 16}} picker>
          <Label style={{color: 'white', fontSize: 22, fontWeight: '700'}}>
            Select Teacher
          </Label>
          <Picker
            mode="dialog"
            iosIcon={<Icon name="arrow-down" />}
            style={{width: undefined}}
            selectedValue={this.state.selectedTeacher}
            onValueChange={this.onTeacherChange.bind(this)}>
            <Picker.Item label="Wallet" value="key0" />
          </Picker>
        </Item>

        
        <View
          style={{
            flex: 1,
            paddingTop: 0,
            borderRadius: 35,
            overflow: 'hidden',
          }}>
          <PureChart
            defaultColumnWidth={15}
            backgroundColor="white"
            labelColor="teal"
            height={200}
            data={sampleData}
            type="bar"
            width={'100%'}
            defaultColumnWidth={25}
            defaultColumnMargin={14}
            highlightColor={'grey'}
          />
        </View>

      </View>
    );
  }
}

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
