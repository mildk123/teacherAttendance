import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { TouchableNativeFeedback } from 'react-native';

import { Icon, Badge } from 'native-base';

import { TextStyles, IconStyles } from '../../modules/styleSheet';
import Colors from '../../modules/Colors';

import About from './About';
import Settings from './Settings';
import ChangePassword from "./ChangePassword";

export default SettingStackNav = createStackNavigator({
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
                ),
            };
        },
    }, 
    ChangePass: {
        screen: ChangePassword,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Change Password',
                headerTintColor: Colors.appBarTextColor,
                headerStyle: {
                    backgroundColor: Colors.appBarColor,
                },
                headerTitleStyle: TextStyles.headerTitleStyle,
                headerLeft: () => (
                    <TouchableNativeFeedback onPress={() => navigation.pop()}>
                        <Icon
                            type="AntDesign"
                            style={IconStyles.headerIconleft}
                            name="arrowleft"
                        />
                    </TouchableNativeFeedback>
                ),
            };
        },
    }, 
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'About',
                headerTintColor: Colors.appBarTextColor,
                headerStyle: {
                    backgroundColor: Colors.appBarColor,
                },
                headerTitleStyle: TextStyles.headerTitleStyle,
                headerLeft: () => (
                    <TouchableNativeFeedback onPress={() => navigation.pop()}>
                        <Icon
                            type="AntDesign"
                            style={IconStyles.headerIconleft}
                            name="arrowleft"
                        />
                    </TouchableNativeFeedback>
                ),
            };
        },
    }
});