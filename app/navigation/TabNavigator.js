import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Icon, Badge } from 'native-base';

import { TextStyles, IconStyles } from '../modules/styleSheet';
import Colors from '../modules/Colors';

import Home from '../screens/Home/Home';
import Attendance from '../screens/Attendance/Attendance';

import Settings from '../screens/Settings/Settings';

const HomeStackNav = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Home',
                headerTintColor: Colors.appBarTextColor,
                headerStyle: {
                    backgroundColor: Colors.appBarColor,
                },
                headerTitleStyle: TextStyles.headerTitleStyle,
                headerLeft: () => (
                    <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
                        <Icon
                            type="Feather"
                            style={IconStyles.headerIconleft}
                            name="align-left"
                        />
                    </TouchableNativeFeedback>
                ),
                headerRight: () => (
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableNativeFeedback
                            onPress={() => navigation.navigate('Authentication')}>
                            <Icon
                                type="AntDesign"
                                style={IconStyles.headerIconRight}
                                name="logout"
                            />
                        </TouchableNativeFeedback>

                    </View>
                ),
            };
        },
    },
    Attendance: {
        screen: Attendance,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Attendance',
                headerTintColor: Colors.appBarTextColor,
                headerStyle: {
                    backgroundColor: Colors.appBarColor,
                },
                headerTitleStyle: TextStyles.headerTitleStyle,
            }
        }
    }
});

const SettingsStackNav = createStackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Settings',
                headerTintColor: Colors.appBarTextColor,
                headerStyle: {
                    backgroundColor: Colors.appBarColor,
                },
                headerTitleStyle: TextStyles.headerTitleStyle,
                headerLeft: () => (
                    <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
                        <Icon
                            type="Feather"
                            style={IconStyles.headerIconleft}
                            name="align-left"
                        />
                    </TouchableNativeFeedback>
                )
            };
        },
    }
});



HomeStackNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0 && navigation.state.routes[1].routeName === "Attendance") {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };


export default TabNavigator = createBottomTabNavigator({
    Home: HomeStackNav,
    Settings: SettingsStackNav,
});