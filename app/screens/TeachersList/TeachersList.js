import React, {Component} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';

import {
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Spinner,
} from 'native-base';
import {connectionObjects} from '../../modules/connection';
import Axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';

class TeachersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teacherList: [],
      isLoading: false,
    };

    this.getTeachersList();
  }

  refreshFunction = () => {
    this.setState(
      {
        isLoading: true,
        teacherList: [],
      },
      () => {
        this.getTeachersList();
      },
    );
  };

  getTeachersList = () => {
    Axios(connectionObjects.myServerIp_ + connectionObjects.teachersListAPI)
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

  viewDetails = (selection) => {
      this.props.navigation.navigate("ViewDetails", { selectedTeacher: this.state.teacherList[selection] })
  };

  render() {
    const {isLoading, teacherList} = this.state;
    if (isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Spinner color="teal" />
        </View>
      );
    } else {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={this.refreshFunction}
            />
          }>
          {teacherList.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => this.viewDetails(index)}>
                <ListItem avatar >
                  <Left>
                    <Thumbnail
                      source={require('../../assets/images/dummy/dp.png')}
                    />
                  </Left>
                  <Body>
                    <Text>{item.TeacherName}</Text>
                    <Text note>{item.Department}</Text>
                  </Body>
                </ListItem>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      );
    }
  }
}

export default TeachersList;
