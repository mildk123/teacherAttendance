import React, {Component} from 'react';
import {View} from 'react-native';

import {Card, CardItem, Body, Text, Thumbnail} from 'native-base';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Colors from '../../modules/Colors';

class Settings extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginTop: 25,
          alignItems: 'center',
          alignContent: 'center',
        }}>
       
        <TouchableNativeFeedback
          style={{padding: 25}}
          onPress={() => {
            this.props.navigation.navigate('ChangePass');
          }}>
          <Card
            style={{
              width: 'auto',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              borderRadius: 25,
              elevation: 8,
            }}>
            <CardItem
              style={{
                flexDirection: 'column',
                backgroundColor: Colors.darkAppBarColor,
                borderRadius: 25,
                elevation: 7,
              }}>
              <Thumbnail
                square
                source={require('../../assets/images/icon/changePass.png')}
              />
              <Text
                style={{
                  textAlign: 'center',
                  margin: 5,
                  color: Colors.appBarTextColor,
                  fontWeight: '700',
                  fontSize: 18,
                  width: 150,
                }}>
                Change Password
              </Text>
            </CardItem>
          </Card>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={{padding: 25}}
          onPress={() => {
            this.props.navigation.navigate('About');
          }}>
          <Card
            style={{
              width: 'auto',
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              borderRadius: 25,
              elevation: 8,
            }}>
            <CardItem
              style={{
                flexDirection: 'column',
                backgroundColor: Colors.darkAppBarColor,
                borderRadius: 25,
                elevation: 7,
              }}>
              <Thumbnail
                source={require('../../assets/images/icon/aboutIcon.png')}
                style={{backgroundColor: 'white'}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  margin: 5,
                  color: Colors.appBarTextColor,
                  fontWeight: '700',
                  fontSize: 18,
                  width: 150,
                }}>
                About
              </Text>
            </CardItem>
          </Card>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default Settings;
