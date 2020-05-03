import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Text, Card, CardItem, Body} from 'native-base';
import Colors from '../../modules/Colors';

class ViewDetails extends Component {
  render() {
    const {selectedTeacher} = this.props.navigation.state.params;
    return (
      <View style={{flex: 1, padding: 16, backgroundColor: Colors.appBarColor}}>
        <View
          style={{
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 25,
            padding: 15,
            maxHeight: 450,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              maxHeight: 250,
            }}>
            <Image
              source={require('../../assets/images/dummy/dp.png')}
              style={{resizeMode: 'center', width: 250, borderRadius: 100}}
            />
          </View>

          <View style={{padding: 25}}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 13,fontWeight: 'bold'}}>Name: </Text>
                <Text style={{fontSize: 13,fontStyle: 'italic'}}>
                  {selectedTeacher.TeacherName}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 13,fontWeight: 'bold'}}>Email: </Text>
                <Text style={{fontSize: 13,fontStyle: 'italic'}}>
                  {selectedTeacher.Email}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 13,fontWeight: 'bold'}}>Age: </Text>
                <Text style={{fontSize: 13,fontStyle: 'italic'}}>{selectedTeacher.Age}</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 13,fontWeight: 'bold'}}>Department: </Text>
                <Text style={{fontSize: 13,fontStyle: 'italic'}}>
                  {selectedTeacher.Department}
                </Text>
              </View>


              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 13,fontWeight: 'bold'}}>Since: </Text>
                <Text style={{fontSize: 13,fontStyle: 'italic'}}>
                  {selectedTeacher.Since}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 13,fontWeight: 'bold'}}>Phone: </Text>
                <Text style={{fontSize: 13,fontStyle: 'italic'}}>
                  {selectedTeacher.Phone}
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 13,fontWeight: 'bold'}}>Teacher ID: </Text>
                <Text style={{fontSize: 13,fontStyle: 'italic'}}>
                  {selectedTeacher.TeacherID}
                </Text>
              </View>
              
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 13,fontWeight: 'bold'}}>Address: </Text>
                <Text style={{fontSize: 13,fontStyle: 'italic'}}>
                  {selectedTeacher.Address}
                </Text>
              </View>

            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ViewDetails;
