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

import Colors from '../../modules/Colors';
import styling from '../../modules/styleSheet';

class ChangePassword extends Component {
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
                <Input style={{color: Colors.appBarColor}} />
              </Item>
              <Item stackedLabel>
                <Label>New Password</Label>
                <Input secureTextEntry style={{color: Colors.appBarColor}} />
              </Item>
              <Item stackedLabel>
                <Label>Confirm New Password</Label>
                <Input secureTextEntry style={{color: Colors.appBarColor}} />
              </Item>
            </Form>
          </View>
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <Button
          onPress={() => this.props.navigation.popToTop()}
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
