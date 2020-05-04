import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Colors, {brandSix, brandFive} from '../../modules/Colors';

import MyComp from '../../modules/connection';
import {TextStyles} from '../../modules/styleSheet';

import {Form, Item, Text, Icon, Input, Spinner, Button} from 'native-base';
import axios from 'axios';
import {connectionObjects} from '../../modules/connection';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLoading: false,
    };
  }

  loginFunc = async () => {
    console.log('LOGIN FUNC');
    this.setState(
      {
        isLoading: true,
      },
      () => {
        if (this.state.username !== '' && this.state.password !== '') {
          axios(connectionObjects.myServerIp_ + connectionObjects.loginAPI, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            data: {
              UserID: this.state.username,
              Password: this.state.password,
            },
            withCredentials: true,
            credentials: 'same-origin',
          })
            .then(response => {
              return response;
            })
            .then(data => {
              if (data.status == 200) {
                // alert(data.data.ResponseMessage);
                this.setState(
                  {
                    isLoading: false,
                  },
                  () => {
                    this.props.navigation.navigate('App');
                  },
                );
              }
            })
            .catch(err => {
              this.setState(
                {
                  isLoading: false,
                },
                () => {
                  if (err.response.status == 401) {
                    alert(`Error: ${err.response.data.ResponseMessage}`);
                  } else if (err.response.status == 500) {
                    alert(`Error: ${err.response.data}`);
                  } else {
                    console.log('msg', err.message); // Just the message , no error
                    let errMSG = JSON.parse(err.request._response.response); //request details
                    alert(errMSG.ResponseMessage);
                  }
                },
              );
            });
        } else {
          alert('Username/Password required');
        }
      },
    );
  };

  onChange = (val, name) => {
    this.setState({
      [name]: val,
    });
  };

  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Spinner color="teal" />
        </View>
      );
    }
    return (
      <View style={{flex: 1, backgroundColor: Colors.appBarColor}}>
        <View
          style={{
            flex: 1,
            margin: 50,
            borderRadius: 25,
            backgroundColor: 'white',
            elevation: 5,
          }}>
          <View
            style={{
              backgroundColor: 'silver',
              flex: 1,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{resizeMode: 'contain', width: 350}}
              source={require('../../assets/images/icon/bulb.png')}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              paddingHorizontal: 25,
            }}>
            <Form>
              <Item>
                {/* <Label style={{fontWeight: 'bold'}}>Username</Label> */}
                <Icon
                  style={{color: Colors.appBarColor, fontSize: 28}}
                  name="account-circle"
                  type="MaterialIcons"
                />
                <Input
                  onChangeText={val => this.onChange(val, 'username')}
                  placeholder="Enter your username"
                  style={{padding: 5}}
                />
              </Item>

              <Item>
                {/* <Label style={{fontWeight: 'bold'}}>Password</Label> */}
                <Icon
                  active
                  style={{color: Colors.appBarColor, fontSize: 28}}
                  name="lock-outline"
                  type="MaterialIcons"
                />
                <Input
                  placeholder="Enter your password"
                  style={{padding: 5}}
                  onChangeText={val => this.onChange(val, 'password')}
                  secureTextEntry
                />
              </Item>
            </Form>

            <View style={{alignSelf: 'center'}}>
              <Button
                onPress={() => this.loginFunc()}
                // onChangeText={this.props.navigation.navigate('App')}
                iconRight
                style={{
                  backgroundColor: 'teal',
                  width: 120,
                  borderRadius: 5,
                  elevation: 0,
                }}>
                <Text>Login</Text>
                <Icon style={{color: 'white'}} name="arrow-forward" />
              </Button>
              <Text style={{color: '#aaa', fontSize: 16, marginVertical: 5}}>
                Forgot password
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default (Authentication = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({navigation}) => {
        return {
          // title: "Login",
          headerTintColor: brandSix,
        };
      },
    },
    // ForgotPass1: {
    //   screen: ForgotPass1,
    //   navigationOptions: ({ navigation }) => {
    //     return {
    //       title: "Forgot Password",
    //       headerTintColor: brandSix,
    //       headerStyle: {
    //         backgroundColor: brandFive
    //       },
    //       headerTitleStyle: TextStyles.headerTitleStyle
    //     };
    //   }
    // },
    //
  },
  {
    headerMode: 'none',
  },
));
