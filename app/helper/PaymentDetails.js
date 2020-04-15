import React from 'react'
import { View, Text } from 'react-native'
import { Label, Item } from 'native-base'
import Colors from '../modules/Colors'

const PaymentDetails = () => {
    return (
        <View style={{padding: 5,borderRadius: 5, backgroundColor: Colors.appBarColor}}>
            <Item style={{borderBottomColor: Colors.appBarTextColor, borderBottomWidth : 2}}>
            <Label style={{fontWeight: '800', color: 'white'}}>ORDER DETAILS</Label>
            </Item>

            <View style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}>
                <Text style={{fontWeight: '800', fontSize: 14, color: 'white'}}>Outlet: </Text>
                <Text>Dubai Trade</Text>
            </View>

            <View style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}>
            <Text style={{fontWeight: '800', fontSize: 14, color: 'white'}}>Order ID: </Text>
                <Text>BillRef</Text>
            </View>

            <View style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}>
            <Text style={{fontWeight: '800', fontSize: 14, color: 'white'}}>Description: </Text>
                <Text>Description of transaction</Text>
            </View>

            <View style={{flexDirection: 'row', padding: 5, alignItems: 'center'}}>
            <Text style={{fontWeight: '800', fontSize: 14, color: 'white'}}>Amount: </Text>
                <Text style={{fontSize: 18, color: 'white', fontWeight: '800'}}>1000.00</Text>
            </View>

        </View>
    )
}

export default PaymentDetails
