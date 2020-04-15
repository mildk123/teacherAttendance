import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import HomeNav from "../../helper/HomeNav";

import Colors from "../../modules/Colors";
import HomeStudentCard from "../../helper/HomeStudentCard";

import { Card, CardItem, Body, Text, Left, Right, Icon } from 'native-base';
import { ScrollView } from "react-native-gesture-handler";

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.brandOne }}>

        <Card style={{ width: '90%', alignSelf: 'center', marginTop: 15, borderRadius: 10, elevation: 8 }}>
          <CardItem style={{ justifyContent: 'center', alignItems: "center", backgroundColor: '#FFBE7BFF', borderRadius: 10 }}>
            <Body style={{ alignItems: 'center', }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold', letterSpacing: 1, color: 'white' }}>Morning, 1st Shift</Text>
            </Body>
          </CardItem>
        </Card>


        {/* Separator */}
        <View style={{ width: '90%', alignSelf: 'center', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
          <Text></Text>
        </View>

        <ScrollView style={{ padding: 15 }}>

          <TouchableOpacity onPress={() => {  }}>
            <Card style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 15,
              borderRadius: 5,
              elevation: 5,
              backgroundColor: 'slategray'
            }}>
              <View style={{ flexDirection: 'row', }}>
                <View style={{ width: '40%', }}>
                  <Text style={{ fontWeight: '700', color: 'white' }}>Instructor Name: </Text>
                  <Text style={{ fontWeight: '700', color: 'white' }}>Room # :</Text>
                  <Text style={{ fontWeight: '700', color: 'white' }}>Class ID :</Text>
                  <Text style={{ fontWeight: '700', color: 'white' }}>Class Time :</Text>
                  <Text style={{ fontWeight: '700', color: 'white' }}>Status :</Text>
                </View>
                <View style={{ width: '55%' }}>
                  <Text style={{ color: 'white', fontStyle: 'italic' }}>Muhammad Zubair</Text>
                  <Text style={{ color: 'white', fontStyle: 'italic' }}>29</Text>
                  <Text style={{ color: 'white', fontStyle: 'italic' }}>120648</Text>
                  <Text style={{ color: 'white', fontStyle: 'italic' }}>08:11 AM</Text>
                  <Text style={{ color: 'white', fontStyle: 'italic' }}>Marked</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                <Icon type='MaterialCommunityIcons' name="checkbox-marked" style={{ color: 'white', fontSize: 35 }} />
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Attendance') }}>
            <Card style={{
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 15,
              borderRadius: 5,
              elevation: 5,
              backgroundColor: 'teal'
            }}>
              <View style={{ flexDirection: 'row', }}>
                <View style={{ width: '40%', }}>
                  <Text style={{ fontWeight: '700', color: 'white' }}>Instructor Name: </Text>
                  <Text style={{ fontWeight: '700', color: 'white' }}>Room # :</Text>
                  <Text style={{ fontWeight: '700', color: 'white' }}>Class ID :</Text>
                  <Text style={{ fontWeight: '700', color: 'white' }}>Class Time :</Text>
                  <Text style={{ fontWeight: '700', color: 'white' }}>Status :</Text>
                </View>
                <View style={{ width: '55%' }}>
                  <Text style={{ color: 'white', fontStyle: 'italic' }}>Muhammad Zubair</Text>
                  <Text style={{ color: 'white', fontStyle: 'italic' }}>29</Text>
                  <Text style={{ color: 'white', fontStyle: 'italic' }}>120648</Text>
                  <Text style={{ color: 'white', fontStyle: 'italic' }}>08:11 AM</Text>
                  <Text style={{ color: 'white', fontStyle: 'italic' }}>Marked</Text>
                </View>
              </View>
              <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                <Icon type='MaterialCommunityIcons' name="checkbox-blank-outline" style={{ color: 'white', fontSize: 35 }} />
              </View>
            </Card>
          </TouchableOpacity>



        </ScrollView>

      </View>
    );
  }
}

export default Home;
