import React, {Component} from 'react';
import {View, TouchableOpacity, RefreshControl} from 'react-native';
import HomeNav from '../../helper/HomeNav';

import Colors from '../../modules/Colors';
import HomeStudentCard from '../../helper/HomeStudentCard';

import {Card, CardItem, Body, Text, Left, Right, Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import moment from 'moment';
import { connectionObjects } from '../../modules/connection'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentShift: '',
      currentTime: '',
      currentShiftText: '',
      shiftColor: '',
      classes: [],
      dataLoaded: true,
      refreshing: false
    };
  };

  componentDidMount = () => {
     this.getTime();
  };
  onRefresh = () => {
    this.setState({
      refreshing : true
    },() => {
      this.getClasses();
    })
  }
  
  getTime =() => {
    var timeNow = moment().format("hh:mm A");
    this.setState({
      currentTime : timeNow ,
    },() => this.getShift())
  };
  getShift = () => {
    var currentTime = moment(this.state.currentTime, 'h:mm a');
    // this.setState({
    //   currentTime : "8:51 am"
    // })
    // var currentTime = moment('8:51 am', 'h:mm a');
    var morningClassStart1 = moment('8:40am', 'h:mm a');
    var morningClassEnd1 = moment('10:15am', 'h:mm a');
    var morningClassStart2 = moment('10:30am', 'h:mm a');
    var morningClassEnd2 = moment('11:40am', 'h:mm a');

    var eveningClassStart1 = moment('12:30pm', 'h:mm a');
    var eveningClassEnd1 = moment('2:00pm', 'h:mm a');
    var eveningClassStart2 = moment('2:15pm', 'h:mm a');
    var eveningClassEnd2 = moment('3:30pm', 'h:mm a');

    if (
      currentTime.isSameOrAfter(morningClassStart1) &&
      currentTime.isSameOrBefore(morningClassEnd1)
    ) {
      // alert("Morning, 1st Half, Before Break")
      this.setState(
        {
          currentShift: 'Morning',
          currentSession: 'first',
          currentShiftText: 'Morning, 1st Shift',
          shiftColor: '#FFBE7BFF',
        },
        () => this.getClasses(),
      );
    } else if (
      currentTime.isSameOrAfter(morningClassStart2) &&
      currentTime.isSameOrBefore(morningClassEnd2)
    ) {
      // alert("Morning, 2nd Half, After Break")
      this.setState(
        {
          currentShift: 'Morning',
          currentSession: 'second',
          currentShiftText: 'Morning, 2nd Shift',
          shiftColor: '#FFBE7BFF',
        },
        () => this.getClasses(),
      );
    } else if (
      currentTime.isSameOrAfter(eveningClassStart1) &&
      currentTime.isSameOrBefore(eveningClassEnd1)
    ) {
      // alert("Evening, 1st Half, Before Break")
      this.setState(
        {
          currentShift: 'Evening',
          currentSession: 'first',
          currentShiftText: 'Evening, 1st Shift',
          shiftColor: '#ff7f00',
        },
        () => this.getClasses(),
      );
    } else if (
      currentTime.isSameOrAfter(eveningClassStart2) &&
      currentTime.isSameOrBefore(eveningClassEnd2)
    ) {
      // alert("Evening, 2nd Half, After Break")
      this.setState(
        {
          currentShift: 'Evening',
          currentSession: 'second',
          currentShiftText: 'Evening, 2nd Shift',
          shiftColor: '#ff7f00',
        },
        () => this.getClasses(),
      );
    } else if (
      currentTime.isSameOrAfter(moment('3:30 pm', 'h:mm a')) &&
      currentTime.isSameOrBefore(moment('8:40 am', 'h:mm a'))
    ) {
      this.setState({
        currentShiftText: 'University is closed.',
        shiftColor: 'grey',
      });
    } else {
      this.setState({
        currentShiftText: 'Break',
        shiftColor: 'grey',
      });
    }
  };
  getClasses = () => {
    const {currentShift} = this.state;
    axios(
      `${connectionObjects.myServerIp_}${connectionObjects.getClassesAPI}${currentShift}`,
      {
        method: 'GET',
      },
    )
      .then(response => {
        return response;
      })
      .then(resp => {
        console.log(resp)
        if (resp.status === 200) {
          this.setState({
            classes: [...resp.data.ShiftScheduleList],
            dataLoaded: true,
            refreshing: false
          });
        } else {
          alert('Invalid error occured.');
        }
      })
      .catch(err => {
        if (err.response.status == 401) {
          alert(`Error: ${err.response.data.ResponseMessage}`);
        }else if (err.response.status == 500){
          alert(`Error: ${err.response.data.ResponseMessage}`);
        }else{
          console.log('msg',err.message); // Just the message , no error
          let errMSG = JSON.parse(err.request._response.response) ;//request details
            alert(errMSG.ResponseMessage);
        }
      });
  };


  callChild = (selectedItem) => {
    this.props.navigation.navigate('Attendance', 
    {selectedClass: this.state.classes[selectedItem], 
      currentSession: this.state.currentShift,
      currentTime : this.state.currentTime
    });

  };

  render() {

    return (
      <View style={{flex: 1, backgroundColor: Colors.brandOne}}>
        <Card
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
            borderRadius: 10,
            elevation: 8,
          }}>
          <CardItem
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: this.state.shiftColor,
              borderRadius: 10,
            }}>
            <Body style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: 'white',
                }}>
                {this.state.currentShiftText}
              </Text>
            </Body>
          </CardItem>
        </Card>
        {/* Separator */}
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}>
          <Text />
        </View>

       
          <ScrollView refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          } style={{padding: 15}}>
            {this.state.classes.map((item, key) => {
             return <TouchableOpacity
                key={key}
                onPress={() => {
                  this.callChild(key)
                }}>
                <Card
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 15,
                    borderRadius: 5,
                    elevation: 5,
                    backgroundColor: 'teal',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{width: '40%'}}>
                      <Text style={{fontWeight: '700', color: 'white'}}>
                        Instructor Name:
                      </Text>
                      <Text style={{fontWeight: '700', color: 'white'}}>
                        Room # :
                      </Text>
                      <Text style={{fontWeight: '700', color: 'white'}}>
                        Class ID :
                      </Text>
                      <Text style={{fontWeight: '700', color: 'white'}}>
                        Class Time :
                      </Text>
                      <Text style={{fontWeight: '700', color: 'white'}}>
                        Shift :
                      </Text>
                      <Text style={{fontWeight: '700', color: 'white'}}>
                        Status :
                      </Text>
                    </View>
                    <View style={{width: '55%'}}>
                      <Text style={{color: 'white', fontStyle: 'italic'}}>
                        {item.InstructorName}
                      </Text>
                      <Text style={{color: 'white', fontStyle: 'italic'}}>
                        {item.RoomNumber}
                      </Text>
                      <Text style={{color: 'white', fontStyle: 'italic'}}>
                        {item.ClassID}
                      </Text>
                      <Text style={{color: 'white', fontStyle: 'italic'}}>
                        {item.ClassTime}
                      </Text>
                      <Text style={{color: 'white', fontStyle: 'italic'}}>
                        {item.Shift}
                      </Text>
                      <Text style={{color: 'white', fontStyle: 'italic'}}>
                        Marked
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    }}>
                    <Icon
                      type="MaterialCommunityIcons"
                      name="checkbox-blank-outline"
                      style={{color: 'white', fontSize: 35}}
                    />
                  </View>
                </Card>
              </TouchableOpacity>;
            })}
          </ScrollView>
      
      </View>
    );
  };
}

export default Home;
