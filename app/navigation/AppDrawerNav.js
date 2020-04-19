import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';

// HOME STACK .......................
import TabNavigator from './TabNavigator';


import WeeklyStat from '../screens/WeeklyStat';
import TeachersList from '../screens/TeachersList';
import Reports from '../screens/Reports';


import { Icon } from 'native-base';

export default AppDrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => {
        return {
          drawerLabel: 'Home',
          drawerIcon: (
            <Icon type="AntDesign" name="home" style={{ fontSize: 23 }} />
          ),
        };
      },
    },
    WeeklyStat: {
      screen: WeeklyStat,
      navigationOptions: ({ navigation }) => {
        return {
          drawerLabel: 'Weekly Statistics',
          drawerIcon: (
            <Icon type="AntDesign" name="home" style={{ fontSize: 23 }} />
          ),
        };
      },
    },
    Reports: {
      screen: Reports,
      navigationOptions: ({ navigation }) => {
        return {
          drawerLabel: 'Reports',
          drawerIcon: (
            <Icon type="AntDesign" name="home" style={{ fontSize: 23 }} />
          ),
        };
      },
    },
    TeachersList: {
      screen: TeachersList,
      navigationOptions: ({ navigation }) => {
        return {
          drawerLabel: 'Teachers List',
          drawerIcon: (
            <Icon type="AntDesign" name="home" style={{ fontSize: 23 }} />
          ),
        };
      }
    }
  },
  {
    drawerWidth: '50%',
  },
);