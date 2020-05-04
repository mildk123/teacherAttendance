import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../modules/Colors';
import PureChart from 'react-native-pure-chart';
import {Button, Text, Picker, Icon, Label, Item, Spinner} from 'native-base';
import axios from 'axios';
import {connectionObjects} from '../../modules/connection';

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
    super(props);

    this.state = {
      selectedTeacher: '',
      teacherList: [],
      isLoading: true,
    };

    this.getTeachersList();
  }

  getTeachersList = () => {
    axios(connectionObjects.myServerIp_ + connectionObjects.teachersListAPI)
      .then(response => response)
      .then(data => {
        if (data.status == 200) {
          console.log(data);
          this.setState({
            teacherList: [...data.data.TeachersListResponse],
            isLoading: false,
          });
        } else {
          alert('Unable to fetch data from server.');
        }
      })
      .catch(err => {
        if (err.response.status == 403) {
          alert(`Error: ${err.response.data.ResponseMessage}`);
        } else if (err.response.status == 404) {
          alert(`Error: ${err.message}`);
        } else {
          console.log('msg', err.message); // Just the message , no error
          let errMSG = JSON.parse(err.request._response.response); //request details
          alert(errMSG.ResponseMessage);
        }
      });
  };
  onTeacherChange(value) {
    this.setState({
      selectedTeacher: value,
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Spinner color="teal" />
      </View>
      )
    }
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
            {this.state.teacherList.map((item,key) => {
              return <Picker.Item key={key} label={item.TeacherName} value={item.TeacherID} />
            })}
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
