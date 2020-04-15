import React, { Component } from 'react'
import { View, } from 'react-native'
import { Modal, TouchableHighlight, Alert } from 'react-native';

import { Label, Card, CardItem, Left, Body, Right, List, Button, Text, Icon, Input, Item } from 'native-base'


class Attendance extends Component {

    state = {
        modalVisible: false,
    };


    lateDialog = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    }



    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({
                            modalVisible: !this.state.modalVisible
                        });
                    }}>
                    <View style={{
                        flex: 1, 
                        flexDirection: 'column', 
                        backgroundColor: 'teal',
                        borderColor: 'teal',
                        
                        justifyContent: "center",
                        
                        padding: 25,
                    }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 25,       
                            padding:20,            
                            alignItems: 'center',
                        }}
                    >

                        <View style={{ 
                            marginVertical: 25, 
                            borderBottomWidth: 1, 
                            borderBottomColor: 'teal',
                            textAlign: 'center'
                        }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold',color:'teal',textAlign: 'center' }}>Enter The Time the Teacher Arrived in the Class</Text>
                        </View>

                        <Item inlineLabel
                            style={{
                                marginVertical: 35,
                                elevation: 0,
                                padding: 10,
                                backgroundColor: 'white',
                                borderRadius: 5
                            }}>
                            <Label style={{
                                color: 'teal',
                                fontSize:15,
                                fontWeight: 'bold',
                            }}>
                                Current Time:</Label>
                            <Input
                                placeholder="Tap here"
                                placeholderTextColor="#fff"
                                keyboardType="number-pad"
                                style={{ fontSize: 20, color: 'teal',borderBottomColor: 'teal', borderBottomWidth:1, }}
                            />
                        </Item>


                        <TouchableHighlight
                            style={{
                                backgroundColor: 'teal',
                                width: 120,
                                padding: 15,
                                justifyContent: "center",
                                alignItems: 'center',
                                borderRadius: 5
                            }}
                            onPress={() => {
                                this.setState({
                                    modalVisible: !this.state.modalVisible
                                });
                            }}>
                            <Text style={{ color: 'white',fontWeight: 'bold' }}>Mark Late</Text>
                        </TouchableHighlight>

                        </View>
                    </View>
                </Modal>

                {/*Clock Card */}
                <View style={{ backgroundColor: '#F9A12EFF', padding: 16, margin: 15, borderRadius: 15, elevation: 10 }}>
                    <View style={{
                        justifyContent: 'center',
                    }}>
                        <Text style={{ fontSize: 32, color: 'white', fontWeight: "bold", letterSpacing: 2 }}>
                            08:12 AM
                        </Text>
                    </View>
                    <View style={{
                        borderTopColor: 'white',
                        borderTopWidth: 1,
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <Text style={{ fontSize: 16, color: 'white' }}>
                            22 January 2020
                            </Text>

                    </View>
                </View>


                {/* Details Card */}
                <View>
                    <View style={{ backgroundColor: 'teal', padding: 10, margin: 5, borderRadius: 7 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                            <View style={{ width: 150 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>Teacher Name:</Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 17 }}>Muhammad Zubair</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'teal', padding: 10, margin: 5, borderRadius: 7 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                            <View style={{ width: 150 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>Course Name:</Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 17 }}>Object Oriented Programming</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'teal', padding: 10, margin: 5, borderRadius: 7 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                            <View style={{ width: 150 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>Check IN:</Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 17 }}>08:40 AM</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'teal', padding: 10, margin: 5, borderRadius: 7 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                            <View style={{ width: 150 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>Class Session:</Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 17 }}>1st Session</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'teal', padding: 10, margin: 5, borderRadius: 7 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                            <View style={{ width: 150 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>Shift:</Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 17 }}>Morning</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'teal', padding: 10, margin: 5, borderRadius: 7 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                            <View style={{ width: 150 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>Class ID:</Text>
                            </View>
                            <Text style={{ color: 'white', fontSize: 17 }}>123456</Text>
                        </View>
                    </View>
                </View>


                {/* Buttons Card */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "center" }}>
                    <Button onPress={() => { this.props.navigation.popToTop() }} iconRight 
                        style={{ width: 150, borderRadius: 5, justifyContent: "center", elevation: 7 }}>
                        <Text>ON TIME</Text>
                        <Icon type="Feather" name="check" />
                    </Button>

                    <Button onPress={() => { this.lateDialog(this.state.modalVisible) }} danger iconRight style={{ width: 150, borderRadius: 5, justifyContent: "center", elevation: 7 }}>
                        <Text>LATE</Text>
                        <Icon name="ios-stopwatch" />
                    </Button>

                </View>

            </View>

        )
    }
}

export default Attendance
