import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

// HOME STACK .......................
import TabNavigator from './TabNavigator';

import WeeklyStat from '../screens/WeeklyStat';
import TeachersList from '../screens/TeachersList';
import Reports from '../screens/Reports';

import {Icon} from 'native-base';
import {Image} from 'react-native';
import Colors  from '../modules/Colors';

export default (AppDrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: ({navigation}) => {
        return {
          drawerLabel: 'Home',
          drawerIcon: (
            <Image
              source={require('../assets/images/icon/drawerHome.png')}
              style={{
                resizeMode: 'center',
                height: 50,
              }}
            />
          ),
        };
      },
    },
    WeeklyStat: {
      screen: WeeklyStat,
      navigationOptions: ({navigation}) => {
        return {
          drawerLabel: 'Weekly Statistics',
          drawerIcon: (
            <Image
              source={require('../assets/images/icon/drawerStats.png')}
              style={{
                resizeMode: 'center',
                height: 50,
              }}
            />
          ),
        };
      },
    },
    Reports: {
      screen: Reports,
      navigationOptions: ({navigation}) => {
        return {
          drawerLabel: 'Reports',
          drawerIcon: (
            <Image
              source={require('../assets/images/icon/drawerReports.png')}
              style={{
                resizeMode: 'center',
                height: 50,
              }}
            />
          ),
        };
      },
    },
    TeachersList: {
      screen: TeachersList,
      navigationOptions: ({navigation}) => {
        return {
          drawerLabel: 'Teachers List',
          drawerIcon: (
            <Image
              source={require('../assets/images/icon/drawerTeachers.png')}
              style={{
                resizeMode: 'center',
                height: 50,
              }}
            />
          ),
        };
      },
    },
  },
  {
    drawerWidth: '50%',
    drawerType: 'slide',
    edgeWidth: 50,
    hideStatusBar : false,
    overlayColor: 'rgba(0, 0, 0,0.7)',
    drawerBackgroundColor : Colors.drawerBackgroundColor,
    contentOptions: {
      activeBackgroundColor: Colors.drawerSelectedColor,
      activeTintColor: Colors.drawerSelectedTextColor,
      inactiveTintColor: Colors.drawerinActiveTextColor,
      // inactiveBackgroundColor: Colors.drawerinActiveColor,
      labelStyle: 'italic',
    }

  },
));
