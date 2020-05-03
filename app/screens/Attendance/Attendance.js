import React, {Component} from 'react';
import {View} from 'react-native';
import {Modal, TouchableHighlight, Alert} from 'react-native';

import {
  Label,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  List,
  Button,
  Text,
  Icon,
  Input,
  Item,
} from 'native-base';
import moment from 'moment';
import axios from 'axios';
import { connectionObjects } from '../../modules/connection'

class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentTime: '',
      currentDate: '',
      lateBtnClick: false,
      timeLate: '',
      currentShift: '',
      currentSession: '',
      classDetails: [],
    };
  }

  componentDidMount = () => {
    this.setState(
      {
        currentTime: moment().format('hh:mm A'),
        currentDate: moment().format('Do MMMM YYYY'),
      },
      () => {
        this.getShift();
      },
    );

    if (this.props.navigation.state.params.selectedClass) {
      this.setState({
        classDetails: {...this.props.navigation.state.params.selectedClass},
      });
    }
  };

  getShift = () => {
    var selectedTime = this.props.navigation.state.params.currentTime;
    var currentTime = moment(selectedTime, 'h:mm a');
    // var currentTime = moment('10:51 am', 'h:mm a');
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
      this.setState({
        currentShift: 'Morning',
        currentSession: 'first',
      });
    } else if (
      currentTime.isSameOrAfter(morningClassStart2) &&
      currentTime.isSameOrBefore(morningClassEnd2)
    ) {
      // alert("Morning, 2nd Half, After Break")
      this.setState({
        currentShift: 'Morning',
        currentSession: 'second',
      });
    } else if (
      currentTime.isSameOrAfter(eveningClassStart1) &&
      currentTime.isSameOrBefore(eveningClassEnd1)
    ) {
      // alert("Evening, 1st Half, Before Break")
      this.setState({
        currentShift: 'Evening',
        currentSession: 'first',
      });
    } else if (
      currentTime.isSameOrAfter(eveningClassStart2) &&
      currentTime.isSameOrBefore(eveningClassEnd2)
    ) {
      // alert("Evening, 2nd Half, After Break")
      this.setState({
        currentShift: 'Evening',
        currentSession: 'second',
      });
    } else if (
      currentTime.isSameOrAfter(moment('3:30 pm', 'h:mm a')) &&
      currentTime.isSameOrBefore(moment('8:40 am', 'h:mm a'))
    ) {
      alert('University is closed.');
    } else {
      alert('Break Time.');
    }
  };

  AttendanceToDb = async (attendaceState, currentShift, currentSession) => {
      console.log(attendaceState, currentShift, currentSession)
      var requestBody = {};
    if (attendaceState === 'onTime') {
       requestBody = {

        InstructorID: this.state.classDetails.InstructorID,
        CourseID: this.state.classDetails.CourseID,
        ClassID: this.state.classDetails.ClassID,
        Shift: this.state.currentShift,

      };
    } else if (attendaceState === 'late' && currentSession == 'first') {
        console.log('late Before')
       requestBody = {
        InstructorID: this.state.classDetails.InstructorID,
        CourseID: this.state.classDetails.CourseID,
        ClassID: this.state.classDetails.ClassID,
        Is_Late_Before:  true,
        Late_Time_Before: this.state.timeLate,
        Shift: this.state.currentShift,
      };
    } else if (attendaceState === 'late' && currentSession == 'second') {
        console.log('late After')
       requestBody = {
        InstructorID: this.state.classDetails.InstructorID,
        CourseID: this.state.classDetails.CourseID,
        ClassID: this.state.classDetails.ClassID,
        Is_Late_After: true,
        Late_Time_After: this.state.timeLate,
        Shift: this.state.currentShift,
      };
    }

    axios(connectionObjects.myServerIp_+connectionObjects.attedanceAPI, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      data: requestBody,
      withCredentials: true,
      credentials: 'same-origin',
    })
      .then(response => {
        return response;
      })
      .then(data => {
        if (data.status == 200) {
          alert(data.data.ResponseMessage);
          this.setState(
            {
              modalVisible: false,
            },
            () => {
              this.props.navigation.popToTop();
            },
          );
        } else {
          alert('Wrong Status Code:');
        }
      })
      .catch(err => {
        if(err.response.status == 403){
          alert(`Error: ${err.response.data.ResponseMessage}`)
        }
        else{
          console.log('msg',err.message); // Just the message , no error
          let errMSG = JSON.parse(err.request._response.response) ;//request details
            alert(errMSG.ResponseMessage);
        }
      });
  };

  lateDialog = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };

  onChange = val => {
    this.setState({
      timeLate: val,
    });
  };

  render() {
    const {
      ScheduleID,
      ClassID,
      InstructorID,
      CourseID,
      Shift,
      ClassDate,
      ClassTime,
      InstructorName,
      CourseName,
    } = this.state.classDetails;
    return (
      <View
        style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
        {/* Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({
              modalVisible: !this.state.modalVisible,
            });
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: 'teal',
              borderColor: 'teal',

              justifyContent: 'center',

              padding: 25,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 25,
                padding: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginVertical: 25,
                  borderBottomWidth: 1,
                  borderBottomColor: 'teal',
                  textAlign: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: 'teal',
                    textAlign: 'center',
                  }}>
                  Enter The Time the Teacher Arrived in the Class
                </Text>
              </View>

              <Item
                inlineLabel
                style={{
                  marginVertical: 35,
                  elevation: 0,
                  padding: 10,
                  backgroundColor: 'white',
                  borderRadius: 5,
                }}>
                <Label
                  style={{
                    color: 'teal',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  Current Time:
                </Label>
                <Input
                  placeholder="5 mins"
                  onChangeText={val => this.onChange(val)}
                  placeholderTextColor="#fff"
                  keyboardType="number-pad"
                  style={{
                    fontSize: 20,
                    color: 'teal',
                    borderBottomColor: 'teal',
                    borderBottomWidth: 1,
                  }}
                />
              </Item>

              <TouchableHighlight
                style={{
                  backgroundColor: 'teal',
                  width: 120,
                  padding: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}
                onPress={() => {
                  this.setState({lateBtnClick: true}, () =>
                    this.AttendanceToDb(
                      'late',
                      this.state.currentShift,
                      this.state.currentSession,
                    ),
                  );
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Mark Late
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        {/*Clock Card */}
        <View
          style={{
            backgroundColor: '#F9A12EFF',
            padding: 16,
            margin: 15,
            borderRadius: 15,
            elevation: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 32,
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: 2,
              }}>
              {this.state.currentTime}
            </Text>
          </View>
          <View
            style={{
              borderTopColor: 'white',
              borderTopWidth: 1,
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>
              {this.state.currentDate}
            </Text>
          </View>
        </View>

        {/* Details Card */}
        <View>
          <View
            style={{
              backgroundColor: 'teal',
              padding: 10,
              margin: 5,
              borderRadius: 7,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View style={{width: 150}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                  Teacher Name:
                </Text>
              </View>
              <Text style={{color: 'white', fontSize: 17}}>
                {InstructorName}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'teal',
              padding: 10,
              margin: 5,
              borderRadius: 7,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View style={{width: 150}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                  Course Name:
                </Text>
              </View>
              <Text style={{color: 'white', fontSize: 17}}>{CourseName}</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'teal',
              padding: 10,
              margin: 5,
              borderRadius: 7,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View style={{width: 150}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                  Start Time:
                </Text>
              </View>
              <Text style={{color: 'white', fontSize: 17}}>{ClassTime}</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'teal',
              padding: 10,
              margin: 5,
              borderRadius: 7,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View style={{width: 150}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                  Course ID:
                </Text>
              </View>
              <Text style={{color: 'white', fontSize: 17}}>{CourseID}</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'teal',
              padding: 10,
              margin: 5,
              borderRadius: 7,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View style={{width: 150}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                  Shift:
                </Text>
              </View>
              <Text style={{color: 'white', fontSize: 17}}>{Shift}</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'teal',
              padding: 10,
              margin: 5,
              borderRadius: 7,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View style={{width: 150}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                  Session:
                </Text>
              </View>
              <Text style={{color: 'white', fontSize: 17}}>
                {this.state.currentSession}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'teal',
              padding: 10,
              margin: 5,
              borderRadius: 7,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View style={{width: 150}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
                  Class ID:
                </Text>
              </View>
              <Text style={{color: 'white', fontSize: 17}}>{ClassID}</Text>
            </View>
          </View>
        </View>

        {/* Buttons Card */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Button
            onPress={() => {
              this.AttendanceToDb(
                'onTime',
                this.state.currentShift,
                this.state.currentSession,
              );
            }}
            iconRight
            style={{
              width: 150,
              borderRadius: 5,
              justifyContent: 'center',
              elevation: 7,
            }}>
            <Text>ON TIME</Text>
            <Icon type="Feather" name="check" />
          </Button>

          <Button
            onPress={() => {
              this.lateDialog(this.state.modalVisible);
            }}
            danger
            iconRight
            style={{
              width: 150,
              borderRadius: 5,
              justifyContent: 'center',
              elevation: 7,
            }}>
            <Text>LATE</Text>
            <Icon name="ios-stopwatch" />
          </Button>
        </View>
      </View>
    );
  }
}

export default Attendance;
