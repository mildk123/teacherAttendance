import React, {Component} from 'react';
import {View, Image} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';

import Colors, {brandSix, brandFive} from '../../modules/Colors';
import {TextStyles} from '../../modules/styleSheet';

import {Form, Item, Text, Icon, Input, Label, Button} from 'native-base';

class Login extends Component {
  render() {
    return (
      <View style={{flex: 1,backgroundColor:"teal"}}>
        <View style={{flex:1, margin:50, borderRadius: 25,backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'silver',
            flex: 1.5,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/images/icon/bulb.png')} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            paddingHorizontal: 25,
          }}>
          <Form>
            <Item stackedLabel>
              <Label style={{fontWeight: 'bold'}}>Specific ID</Label>
              <Input style={{padding: 5}} placeholder="apple123"/>
            </Item>

            <Item stackedLabel>
            <Label style={{fontWeight: 'bold'}}>Password</Label>
              <Input  style={{padding: 5}}  secureTextEntry placeholder="••••••••"/>
            </Item>
          </Form>

          <View style={{alignSelf: "center"}}>
            <Button onPress={() => this.props.navigation.navigate("App")} iconRight style={{backgroundColor:'teal', width: 120, borderRadius : 5,elevation: 0}}>
              <Text>Login</Text>
              <Icon style={{color: 'white'}} name="arrow-forward" />
            </Button>
            <Text style={{color: '#aaa', fontSize : 16, marginVertical: 5}}>Forgot password</Text>
          </View>

        </View>
      </View>
      </View>
      
    );
  }
}

export default Authentication = createStackNavigator(
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
);
