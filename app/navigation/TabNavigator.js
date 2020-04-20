import React from 'react';
import {TouchableNativeFeedback, View, Image} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Icon, Badge} from 'native-base';

import {TextStyles, IconStyles} from '../modules/styleSheet';
import Colors from '../modules/Colors';

import Home from '../screens/Home/Home';
import Attendance from '../screens/Attendance/Attendance';

import SettingsStackNav from '../screens/Settings';

const HomeStackNav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
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
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Attendance',
        headerTintColor: Colors.appBarTextColor,
        headerStyle: {
          backgroundColor: Colors.appBarColor,
        },
        headerTitleStyle: TextStyles.headerTitleStyle,
      };
    },
  },
});

HomeStackNav.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (
    navigation.state.index > 0 &&
    navigation.state.routes[1].routeName === 'Attendance'
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

SettingsStackNav.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (
    (navigation.state.index > 0 && navigation.state.routes[1].routeName === 'ChangePass') || 
    (navigation.state.index > 0 && navigation.state.routes[1].routeName === 'About') 
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default (TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNav,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon type="Feather" name="home" style={{color: tintColor}} />
        ),
      },
    },
    Settings: {
      screen: SettingsStackNav,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor}) => (
          <Icon type="Feather" name="settings" style={{color: tintColor}} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: Colors.appBarColor,
      inactiveTintColor: Colors.separatorColor,
      style: {height: 60},
      labelStyle: {
        fontSize: 16,
      },
      tabStyle: {
        backgroundColor: Colors.appBarColor,
      },
      adaptive: true,
      keyboardHidesTabBar: true,
    },
  },
));
