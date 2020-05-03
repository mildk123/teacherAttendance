import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import {Button, Text} from 'native-base';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import axios from 'axios';
import Colors from '../../modules/Colors';
import styling from '../../modules/styleSheet';
import { connectionObjects } from '../../modules/connection'

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPass: '',
      newPass: '',
      cNewPass: '',
    };
  }

  ChangePassword = async () => {
    var cp = this.state.currentPass;
    var np = this.state.newPass;
    var cnp = this.state.cNewPass;

    if (cp !== '' && np !== '' && cnp !== '') {
      if (np !== cnp) {
        alert('New Password and Confirm New Password does not match');
      } else {
        axios(`${connectionObjects.myServerIp_}${connectionObjects.changePassAPI}`, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          data: {
            UserID: 'admin',
            OldPassword: cp,
            NewPassword : np
          },
          withCredentials: true,
          credentials: 'same-origin',
        })
          .then(response => {
            return response;
          })
          .then(data => {
            if (data.status == 200) {
              alert(data.data.ResponseMessage);
              this.props.navigation.popToTop();
            }
          })
          .catch(err => {
            console.log('err', err)
            // if (err.response.status == 403) {
            //   alert(`Error: ${err.response.data.ResponseMessage}`);
            // }
          });
      }
    } else {
      alert('Username/Password required');
    }
  };

  onChange = (val, name) => {
    this.setState({
      [name]: val,
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          padding: 30,
          backgroundColor: Colors.backgroundColor,
        }}>
        <View>
          <View style={{padding: 5}}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: 'bold',
                color: Colors.appBarColor,
              }}>
              Change or reset your password
            </Text>

            <Text style={styles.instructions}>
              You can change your password for security reasons. Your Account
              password is used to access this app.
            </Text>
          </View>

          {/* Input Boxes */}
          <View>
            <Form>
              <Item stackedLabel>
                <Label>Current Password</Label>
                <Input
                  onChangeText={val => this.onChange(val, 'currentPass')}
                  style={{color: Colors.appBarColor}}
                />
              </Item>
              <Item stackedLabel>
                <Label>New Password</Label>
                <Input
                  onChangeText={val => this.onChange(val, 'newPass')}
                  secureTextEntry
                  style={{color: Colors.appBarColor}}
                />
              </Item>
              <Item stackedLabel>
                <Label>Confirm New Password</Label>
                <Input
                  onChangeText={val => this.onChange(val, 'cNewPass')}
                  secureTextEntry
                  style={{color: Colors.appBarColor}}
                />
              </Item>
            </Form>
          </View>
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <Button
            onPress={() => this.ChangePassword()}
            style={{
              width: 150,
              justifyContent: 'center',
              borderRadius: 5,
              backgroundColor: '#e06c00',
            }}>
            <Text>Done</Text>
          </Button>
        </View>
        <View />
        <View />
      </View>
    );
  }
}

export default ChangePassword;

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'left',
    color: Colors.fontColor,
    marginBottom: 15,
    fontSize: 15,
  },
  text: {fontSize: 16, textAlign: 'center'},
});
